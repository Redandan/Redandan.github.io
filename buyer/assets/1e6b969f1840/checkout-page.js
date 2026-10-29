import{checkoutShippingOptions,checkoutShippingMarkup,checkoutMissingAddresses}from'./checkout-shipping.js';
import{escape,imageUrl,list,positiveId,title}from'./ui.js';
import{originalCopy,commonText,currentLocale}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
import{singleStore,shipping,buyerSchema,digitalInfo}from'./checkout-contract.js';
import{cartCurrency,cartUnit,cartSubtotal,cartSpecification}from'./cart-view-core.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{receiptPanel}from'./order-ui.js';
import{checkoutMoney as amount,checkoutNumber,checkoutGroups,checkoutGroupName,checkoutWarnings,checkoutItemPreview}from'./checkout-view-core.js';

// The existing bridge freezes and revalidates the quote before submission.
// These labels expose its explicit read-only preview; no new order protocol.
const additions={
 'zh-TW':{preview:'檢查商品、運費與付款金額',pending:'先完成付款前檢查，再確認訂單。',changed:'內容已變更，請重新檢查金額。',cartChanged:'購物車已改變，請重新選擇商品。',invalidQuantity:'商品數量不正確。',json:'服務資訊需為 JSON 物件。'},
 'zh-CN':{preview:'检查商品、运费与付款金额',pending:'先完成付款前检查，再确认订单。',changed:'内容已变更，请重新检查金额。',cartChanged:'购物车已改变，请重新选择商品。',invalidQuantity:'商品数量不正确。',json:'服务信息需为 JSON 对象。'},
 'en-US':{preview:'Check items, shipping and payment total',pending:'Check the payment total before confirming the order.',changed:'Details changed. Check the total again.',cartChanged:'Your cart changed. Select the items again.',invalidQuantity:'The item quantity is invalid.',json:'Service information must be a JSON object.'},
 'th-TH':{preview:'ตรวจสอบสินค้า ค่าจัดส่ง และยอดชำระ',pending:'ตรวจสอบยอดชำระก่อนยืนยันคำสั่งซื้อ',changed:'ข้อมูลเปลี่ยนแล้ว โปรดตรวจสอบยอดอีกครั้ง',cartChanged:'รถเข็นเปลี่ยนแล้ว โปรดเลือกสินค้าอีกครั้ง',invalidQuantity:'จำนวนสินค้าไม่ถูกต้อง',json:'ข้อมูลบริการต้องเป็นออบเจ็กต์ JSON'}
};
const extra=key=>additions[currentLocale()][key];
const lock=value=>value?'disabled data-action-locked':'';
// Native routes retain their form when visiting an address page. Keep at most
// six equivalent drafts in process memory, scoped to the confirmed core owner.
// Nothing is persisted, no quote is retained, and every auth change clears it.
const drafts=new Map();
addEventListener('agora-buyer-auth',()=>drafts.clear());
function draftKey(ctx,items){const state=ctx.sessionState;if(!state?.authenticated||!state.user?.id||!Number.isInteger(state.revision))return null;return JSON.stringify([state.mode,state.user.id,state.revision,ctx.query.toString(),items.map(item=>[item.productId,item.selectedSku,item.product.productType,item.product.buyerInfoRequiredJson,item.product.dataResidencyNotice])]);}


export async function checkout(ctx){
 const direct=positiveId(ctx.query.get('productId'));
 ctx.header(commonText('orders'),true,{nativeAppBar:true,shortcuts:false});
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 const back=copy.t(direct?'back':'checkoutBackToCart');
 ctx.header(copy.t(direct?'productCheckout':'checkoutPageTitle'),true,{nativeAppBar:true,shortcuts:false,backLabel:back,backTooltip:back});
 let items;
 if(direct){
  const product=await ctx.api.request('/products/'+direct);if(!ctx.active())return;
  const quantity=Number(ctx.query.get('quantity')||1),skus=Array.isArray(product.skus)?product.skus:[],sku=ctx.query.get('sku')||(skus.length<=1?skus[0]||String(product.id):'');
  if(!sku||skus.length&&!skus.includes(sku))throw Error(copy.t('quickAddInvalidSku'));
  if(!Number.isSafeInteger(quantity)||quantity<1)throw Error(extra('invalidQuantity'));
  items=[{product,productId:product.id,quantity,selectedSku:sku}];
 }else{
  const raw=ctx.query.get('cartItems')||'',ids=raw.split(',');
  if(!raw){ctx.render(`<section class="buyer-checkout-page checkout-empty"><h2>${escape(copy.t('checkoutEmptyTitle'))}</h2><p>${escape(copy.t('checkoutEmptyDescription'))}</p><a class="primary" href="#/cart">${escape(copy.t('checkoutBackToCart'))}</a></section>`,{navigation:false});return;}
  if(ids.some(id=>!positiveId(id))||new Set(ids).size!==ids.length)throw Error(extra('cartChanged'));
  const selected=new Set(ids.map(Number)),cart=await ctx.api.command('cart.list');if(!ctx.active())return;
  const chosen=list(cart.cart).filter(item=>selected.has(item.id));
  if(chosen.length!==selected.size)throw Error(extra('cartChanged'));
  if(!singleStore(chosen))throw Error(copy.t('checkoutSingleStoreOnly'));
  items=await Promise.all(chosen.map(async item=>({cart:item,cartItemId:item.id,productId:item.productId,quantity:item.quantity,selectedSku:item.sku||String(item.productId),product:await ctx.api.request('/products/'+item.productId)})));
 }
 if(!ctx.active())return;
 const physical=items.filter(item=>item.product.productType!=='DIGITAL_SERVICE'),digital=items.filter(item=>item.product.productType==='DIGITAL_SERVICE');
 const options=checkoutShippingOptions(physical.length?shipping(physical[0].product).filter(option=>physical.every(item=>shipping(item.product).some(other=>other.addressId===option.addressId))):[]);
 let quote=null,preview=null,previewing=false,submitting=false,confirming=false,revision=0,changed=false,completed=false;
 const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('cancel')});
 ctx.action('checkout-new-address',element=>{if(physical.length&&!submitting&&!completed&&/^(HOME_DELIVERY|SEVEN_ELEVEN|FAMILY_MART|HILIFE|OK_MART)$/.test(element.dataset.type))ctx.go('/addresses?new=1&serviceType='+element.dataset.type);});
 function productRow(item){
  const product=item.product,cart=item.cart,src=imageUrl(cart?.productImage||product.imageUrls?.[0]),spec=cart?cartSpecification(cart):product.skus?.length>1?item.selectedSku:'',name=cart?.productTitle??title(product),unit=cart?cartUnit(cart):product.priceUsdt??product.price;
  return`<article class="checkout-product-row"><span class="checkout-product-image">${src?`<img src="${escape(src)}" alt="" decoding="async">`:mi('image')}</span><div class="checkout-product-copy"><h2>${escape(name)}</h2>${direct&&spec?`<span class="checkout-direct-sku">SKU: <strong>${escape(spec)}</strong></span>`:''}${direct&&product.brand!=null?`<p class="checkout-brand">${escape(product.brand)}</p>`:''}${!direct?`<p>${escape(copy.t('quantity'))}: ${escape(item.quantity)}</p>${spec?`<p class="checkout-product-spec">${escape(spec)}</p>`:''}`:''}<div class="checkout-product-amount"><strong>${escape(amount(direct?unit:cartSubtotal(cart),direct?'USDT':cartCurrency(cart.settlementCurrency)))}</strong>${direct?`<span>x${escape(item.quantity)}</span>`:''}</div></div></article>`;
 }
 const card=(heading,body,extraClass='')=>`<section class="checkout-card ${extraClass}">${heading?`<h2 class="checkout-card-title">${heading}</h2>`:''}${body}</section>`;
 const shippingTitle=direct?copy.t('shippingAddress'):physical.length>1?copy.t('checkoutSharedShippingTitle',{storeName:String(items[0].cart?.storeName||items[0].cart?.sellerName||copy.t('store')),count:physical.length}):copy.t('checkoutProductShippingTitle',{productTitle:title(physical[0]?.product)});
 const delivery=physical.length?card(escape(shippingTitle),checkoutShippingMarkup(options,copy,checkoutMissingAddresses(physical.map(item=>item.product))),'checkout-delivery'):'';
 const digitalFields=digital.length?card(`${mi('auto_awesome')}${escape(copy.t('checkoutDigitalTermsTitle'))}`,`<p class="checkout-digital-description">${escape(copy.t('checkoutDigitalTermsDescription',{count:digital.length}))}</p>${digital.map(item=>`<section class="checkout-digital-product"><h3>${mi('shopping_bag_outlined')}${escape(title(item.product))}</h3>${buyerSchema(item.product).length?buyerSchema(item.product).map(field=>`<label class="field"><span>${escape(field.label)}${field.required?' *':''}</span><input form="checkout-form" name="info-${item.productId}-${escape(field.key)}" type="${field.type==='email'?'email':'text'}" ${field.required?'required':''}></label>`).join('')+`<p class="checkout-info-warning">${escape(copy.t('checkoutBuyerInfoWarning'))}</p>`:`<label class="field"><span>${escape(copy.t('checkoutBuyerInfoJsonLabel'))}</span><textarea form="checkout-form" name="raw-${item.productId}" rows="2" placeholder="${escape(copy.t('checkoutBuyerInfoJsonHint'))}"></textarea></label>`}</section>`).join('')}${digital.filter(item=>String(item.product.dataResidencyNotice||'').trim()).map(item=>`<p class="checkout-residency">${mi('info_outline')}<span>${escape(title(item.product)+':'+item.product.dataResidencyNotice)}</span></p>`).join('')}<label class="check"><input form="checkout-form" type="checkbox" name="acceptedDataResidency" required><span>${escape(copy.t('checkoutAcceptDataResidency'))}</span></label><label class="check"><input form="checkout-form" type="checkbox" name="acceptedNoRefundAfterProof" required><span>${escape(copy.t('checkoutAcceptNoRefundAfterProof'))}</span></label>`,'checkout-digital'):'';
 const remark=card(`${mi('note_alt_outlined')}${escape(copy.t('orderRemark'))}<small>${escape(copy.t('optional'))}</small>`,`<label class="field"><span class="sr-only">${escape(copy.t('orderRemark'))}</span><textarea form="checkout-form" name="remark" rows="3" maxlength="${direct?200:500}" placeholder="${escape(copy.t('orderRemarkHint'))}"></textarea></label><p class="checkout-remark-count" aria-live="polite">0/${direct?200:500}</p>`,'checkout-remark');
 ctx.render(`<div class="buyer-checkout-page" data-direct="${!!direct}"><form method="post" data-form="preview" id="checkout-form"></form>${card(direct?'':escape(copy.t('checkoutProductListTitle')),items.map(productRow).join(''),'checkout-products')}${delivery}${digitalFields}${remark}${card(`${mi('receipt_long')}${escape(copy.t(direct?'orderSummary':'checkoutOrderSummaryTitle'))}`,`<div id="checkout-preview" aria-live="polite"></div><button type="submit" form="checkout-form" class="secondary checkout-preview-button">${escape(extra('preview'))}</button>`,'checkout-summary')}<div id="checkout-result"></div></div>`,{navigation:false,footer:'<div class="checkout-footer" id="checkout-footer"></div>'});
 const main=document.querySelector('#buyer-main'),footer=document.querySelector('#checkout-footer');
 const ownerKey=draftKey(ctx,items),form=ctx.find('#checkout-form'),saved=ownerKey?drafts.get(ownerKey):null;
 if(saved){const restorableRadios=new Set([...form.elements].filter(input=>input.type==='radio'&&saved[input.name]===input.value).map(input=>input.name));for(const input of form.elements){if(!input.name)continue;if(input.type==='radio'){if(restorableRadios.has(input.name))input.checked=saved[input.name]===input.value;}else if(input.type==='checkbox')input.checked=saved[input.name]===input.value;else if(typeof saved[input.name]==='string')input.value=saved[input.name];}}
 const remarkCounter=ctx.find('.checkout-remark-count');if(remarkCounter)remarkCounter.textContent=String(form.elements.remark?.value.length||0)+'/'+(direct?200:500);
 ctx.cleanup(()=>{if(!ownerKey)return;if(completed){drafts.delete(ownerKey);return;}const data=Object.fromEntries([...form.elements].filter(input=>input.name&&['INPUT','TEXTAREA','SELECT'].includes(input.tagName)&&!['password','file'].includes(input.type)&&(!['checkbox','radio'].includes(input.type)||input.checked)).map(input=>[input.name,input.value]));if(Object.values(data).some(value=>typeof value!=='string'||value.length>65536))return;drafts.delete(ownerKey);drafts.set(ownerKey,data);while(drafts.size>6)drafts.delete(drafts.keys().next().value);});

 function values(){return Object.fromEntries(new FormData(ctx.find('#checkout-form')));}
 function localIssues(){const data=values(),issues=[];if(physical.length&&!options.some(option=>option.addressId===Number(data.addressId)))issues.push(copy.t('checkoutNoShippingMethodSelected'));for(const item of digital){for(const field of buyerSchema(item.product)){if(field.required&&!String(data['info-'+item.productId+'-'+field.key]||'').trim())issues.push(copy.t('checkoutDigitalProductRequiresField',{productTitle:title(item.product),fieldLabel:field.label}));}if(data.acceptedDataResidency!=='on')issues.push(copy.t('checkoutAgreeDataResidencyRequired'));if(data.acceptedNoRefundAfterProof!=='on')issues.push(copy.t('checkoutAgreeNoRefundAfterProofRequired'));}return[...new Set(issues)];}
 const total=()=>preview?.totalAmountUsdt;
 const fee=()=>preview?.plan?.groups?.reduce((sum,group)=>sum+checkoutNumber(group.shippingFeeUsdt),0)??preview?.preview?.pricing?.shippingFeeUsdt;
 function priceRows(pricing){return`<div class="checkout-pricing">${[['productPrice',pricing.priceUsdt??pricing.productSubtotalUsdt],['shippingFee',pricing.shippingFeeUsdt],['checkoutFinalPayable',pricing.orderAmountUsdt]].map(([label,value])=>`<p><span>${escape(copy.t(label))}</span><strong>${escape(amount(value))}</strong></p>`).join('')}</div>`;}
 function breakdown(item){const value=checkoutItemPreview(item,preview?.itemPreviews);if(!value)return'';const proxy=value.proxyOrder;return`<div class="checkout-price-breakdown">${proxy?.sourcePlatform?`<strong>${escape(copy.t('checkoutProxyQuoteTitle',{platform:proxy.sourcePlatform}))}</strong>`:''}${proxy?.fulfillmentNote?`<p>${escape(proxy.fulfillmentNote)}</p>`:''}${value.address?.buyerMessage?`<p>${escape(value.address.buyerMessage)}</p>`:''}${value.pricing?priceRows(value.pricing):''}${checkoutWarnings(value.warnings).map(warning=>`<p class="checkout-warning">${escape(warning)}</p>`).join('')}</div>`;}
 function update(){
  if(!ctx.active())return;
  const issues=[...localIssues(),...list(preview?.blockingReasons)],status=changed?extra('changed'):extra('pending'),ready=!!quote&&!issues.length&&!previewing&&!submitting&&!completed;
  let summary='';
  if(direct){const pricing=preview?.preview?.pricing;summary=priceRows(pricing||{})+checkoutWarnings(preview?.preview?.warnings).map(warning=>`<p class="checkout-warning">${mi('info_outline')}${escape(warning)}</p>`).join('');}
  else{
   const groups=checkoutGroups(items,preview?.plan),merged=groups.filter(group=>group.merged).length,count=items.reduce((sum,item)=>sum+item.quantity,0);
   summary=`<div class="checkout-group-summary">${mi('receipt_long_outlined')}<div><strong>${escape(copy.t('checkoutOrdersWillBeCreated',{count:preview?.plan?.totalOrderCount??groups.length}))}</strong><p>${escape(copy.t(merged?'checkoutMergedOrderSummary':'checkoutSeparateOrderSummary',{itemCount:count,count,mergedCount:merged}))}</p></div></div>${groups.map(group=>`<section class="checkout-order-group"><header>${mi(group.merged?'inventory_2_outlined':'receipt_outlined')}<strong>${escape(checkoutGroupName(group,copy)+' · '+copy.t(group.merged?'checkoutMergedOrder':'checkoutSingleOrder'))}</strong><span>${escape(copy.t('checkoutGroupItemCount',{count:group.rows.reduce((sum,item)=>sum+item.quantity,0)}))}</span></header>${group.rows.map(item=>`<div class="checkout-summary-item"><p><span>${escape(item.cart?.productTitle||title(item.product))}</span><span>x${escape(item.quantity)}</span></p>${cartSpecification(item.cart)?`<strong>${escape(cartSpecification(item.cart))}</strong>`:''}${breakdown(item)}</div>`).join('')}${group.productSubtotalUsdt!=null?priceRows(group):''}${group.merged?`<p class="checkout-merged-notice">${escape(copy.t('checkoutMergedOrderNotice'))}</p>`:''}</section>`).join('')}${preview?.plan?.unmergeableItems?.length?`<section class="checkout-unmergeable"><strong>${escape(copy.t('checkoutUnmergeableItemsTitle'))}</strong>${preview.plan.unmergeableItems.map(item=>`<p>${escape(item.reasonMessage||item.reasonCode||copy.t('checkoutItemCannotSubmit',{productId:item.productId||item.cartItemId||''}))}</p>`).join('')}</section>`:''}<p class="checkout-summary-total"><strong>${escape(copy.t('totalAmount'))}</strong><strong>${escape(amount(total()))}</strong></p>`;
  }
  ctx.find('#checkout-preview').innerHTML=summary+`<p class="checkout-preview-status" role="status">${escape(quote?copy.t('checkoutReadinessReady'):status)}</p>`+list(preview?.blockingReasons).map(reason=>`<p class="checkout-warning">${escape(reason)}</p>`).join('');
  footer.innerHTML=direct?`<button type="button" class="primary checkout-pay" data-action="submit-order" ${lock(!ready)}>${mi('shopping_cart_checkout')}<span>${escape(copy.t('confirmPurchaseWithAmount',{amount:amount(total())}))}</span></button>`:`<div class="checkout-footer-content"><div class="checkout-footer-total"><span>${escape(copy.t('checkoutItemTotal',{count:items.length}))}</span><strong>${escape(amount(total()))}</strong>${fee()>0?`<span>${escape(copy.t('checkoutShippingFeeIncluded',{fee:amount(fee())}))}</span>`:''}<p class="${issues.length?'checkout-warning':''}">${mi(issues.length?'info_outline':'verified_user_outlined')}<span>${escape(issues.length?copy.t('checkoutReadinessIssues',{count:issues.length,issue:issues[0]}):quote?copy.t('checkoutReadinessReady'):status)}</span></p></div><button type="button" class="primary checkout-pay" data-action="submit-order" ${lock(!ready)}>${mi('lock_outline')}<span>${escape(copy.t('checkoutConfirmPayment'))}</span></button></div>`;
  const previewButton=ctx.find('.checkout-preview-button');previewButton.disabled=previewing||submitting||completed;previewButton.textContent=copy.t(previewing?'loading':'')||extra('preview');
 }
 function invalidate(){if(submitting||completed)return;revision++;quote=null;preview=null;changed=true;dialogs.close();update();}
 main.addEventListener('input',event=>{if(event.target.form?.id!=='checkout-form')return;if(event.target.name==='remark')ctx.find('.checkout-remark-count').textContent=event.target.value.length+'/'+(direct?200:500);invalidate();},{signal:ctx.signal});
 main.addEventListener('change',event=>{if(event.target.form?.id==='checkout-form')invalidate();},{signal:ctx.signal});
 main.addEventListener('error',event=>{if(event.target.matches?.('.checkout-product-image img'))event.target.remove();},{signal:ctx.signal,capture:true});
 ctx.form('preview',async data=>{
  if(previewing||submitting||completed)return;
  const issues=localIssues();if(issues.length)throw Error(issues[0]);
  const bodyItems=items.map(item=>{let info=null;if(item.product.productType==='DIGITAL_SERVICE'){try{info=digitalInfo(item.product,data);}catch{throw Error(extra('json'));}}return{productId:item.productId,quantity:item.quantity,selectedSku:item.selectedSku,...(item.cartItemId?{cartItemId:item.cartItemId}:{}),...(info?{buyerProvidedInfoJson:info}:{}),...(item.product.productType==='DIGITAL_SERVICE'?{acceptedDataResidency:data.acceptedDataResidency==='on',acceptedNoRefundAfterProof:data.acceptedNoRefundAfterProof==='on'}:{})};});
  const common={addressId:physical.length?Number(data.addressId):null,remark:data.remark||null},body=direct?{...bodyItems[0],...common}:{items:bodyItems,...common};
  previewing=true;quote=null;preview=null;const capturedRevision=revision;update();
  try{const value=await ctx.api.command('checkout.preview',{operation:direct?'direct':'cart',body});if(!ctx.active()||capturedRevision!==revision)return;preview=value;quote=value.canSubmit?value:null;changed=false;}
  finally{previewing=false;update();}
 });
 ctx.action('submit-order',async()=>{
  if(!quote||submitting||confirming||completed||localIssues().length)return;
  const captured=quote,capturedRevision=revision;confirming=true;
  try{
   const approved=await dialogs.confirm({title:copy.t('checkoutPaymentSummary'),content:`<p class="checkout-confirm-amount">${escape(amount(captured.totalAmountUsdt))}</p><p>${escape(copy.t('checkoutPaymentWarning'))}</p>`,confirmLabel:copy.t('checkoutConfirmPayment')});
   if(!approved||!ctx.active()||quote!==captured||capturedRevision!==revision)return;
   submitting=true;update();const form=ctx.find('#checkout-form');for(const input of document.querySelectorAll('[form=checkout-form]'))input.disabled=true;
   try{const receipt=await ctx.api.command('checkout.submit',{quoteId:captured.quoteId});if(!ctx.active()||!receipt)return;completed=true;quote=null;ctx.find('#checkout-result').innerHTML=receiptPanel(receipt);ctx.action('ack-receipt',async()=>{await ctx.api.command('checkout.acknowledge',{receiptId:receipt.receiptId});if(ctx.active())ctx.go('/orders');});}
   finally{if(ctx.active()){for(const input of document.querySelectorAll('[form=checkout-form]'))input.disabled=completed;}}
  }finally{confirming=false;submitting=false;update();}
 });
 update();
}
