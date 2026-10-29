import{orderListMemory}from'./order-list-memory.js';
import{currentLocale}from'./locale.js';
import{bindNativeFormValidation}from'./native-form-validation.js';
import{chooseOrderAction}from'./order-action-dialog.js';
import{showOrderAiLoading,showOrderAiResult}from'./order-ai-dialog.js';
import{afterSalesMarkup,afterSalesTitle}from'./order-form-layout.js';
import{orderDetailMarkup}from'./order-detail-layout.js';
import{refundDetailMarkup}from'./order-refund-layout.js';
import{uiText}from'./ui-text.js';
import{openOrderChat}from'./chat-contact.js';
import {escape,money,list,imageUrl,empty,field,button,route} from './ui.js';
import {orderStatuses,orderStatus,settlementCurrency,orderDate,returnReasons,returnDetails,disputeDetails,receiptPanel} from './order-ui.js';
import {commerceText as c,nativeOrderText as t,nativeOrderStatus,nativeReturnReason,orderActionLabel,orderItemsMarkup,orderTabStatuses,orderCard} from './order-ui.js';
import {materialIcon as mi} from './material-icons.js';
import {createBuyerDialogs} from './native-dialog.js';
import {bindReadPullRefresh} from './read-pull-refresh.js';

const detailReads=new WeakMap(),pullBindings=new WeakMap();
for(const event of ['agora-buyer-auth','storage','pagehide'])addEventListener(event,()=>orderListMemory.clear());
function beginDetailRead(ctx){
 detailReads.get(ctx)?.retire();const state={retire:()=>{},current:()=>ctx.active()&&detailReads.get(ctx)===state};detailReads.set(ctx,state);return state;
}
function bindOrderPullRefresh(ctx,refresh,canRefresh){
 const previous=pullBindings.get(ctx);if(previous){Object.assign(previous,{refresh,canRefresh});return;}
 const binding={refresh,canRefresh};pullBindings.set(ctx,binding);bindReadPullRefresh(ctx,document.querySelector('#buyer-main'),{canRefresh:()=>ctx.active()&&binding.canRefresh(),refresh:()=>binding.refresh()});
}

export async function orders(ctx){
 const state=beginDetailRead(ctx),owned=state.current,ticket=orderListMemory.begin(ctx.sessionState,currentLocale()),saved=orderListMemory.restore(ticket);
 ctx.header(t('orderTitle'),true,{nativeAppBar:true,shortcuts:false});const dialogs=createBuyerDialogs(ctx,{cancelLabel:t('commonCancel')});state.retire=dialogs.close;let actionPending=false;let page=saved?.page||0,keyword=saved?.keyword||'',busy=false,readRevision=0,tab=saved?.tab??1,loaded=saved?.loaded===true,fresh=false,readAt=saved?.readAt||0,hasMore=saved?.hasMore===true,lastHtml=null;
 const options=saved?.options||await ctx.api.command('orders.options');if(!owned())return;
 if(!saved)ctx.resetScroll?.();
 const labels=['userHomeOrderAll','userHomeOrderPendingShipment','userHomeOrderShipped','userHomeOrderCompleted','userHomeOrderRefund','userHomeOrderCancelled'];
 ctx.render(`<div class="orders-native-page"><div class="orders-native-tabs" role="tablist" aria-label="${escape(t('orderStatus'))}">${labels.map((key,index)=>`<button type="button" role="tab" data-action="order-tab" data-tab="${index}" aria-selected="${index===tab}" aria-controls="orders-list">${escape(t(key))}</button>`).join('')}</div><section id="recovered-checkout"></section><details class="orders-native-search"><summary>${escape(t('search'))}</summary><form method="post" data-form="order-search" class="search"><input name="keyword" maxlength="200" placeholder="${escape(t('search'))}" aria-label="${escape(t('search'))}"><button>${escape(t('search'))}</button></form><label class="field"><span>${escape(t('orderStatus'))}</span><select id="order-status"><option value="">${escape(t('userHomeOrderAll'))}</option>${options.statuses.filter(s=>orderStatuses[s]).map(s=>`<option value="${escape(s)}">${escape(orderStatus(s))}</option>`).join('')}</select></label></details><div id="orders-list" role="tabpanel" tabindex="0"></div><div id="orders-next" role="status"></div></div>`);
 let rows=saved?.rows||[];const main=document.querySelector('#buyer-main');
 ctx.find('#order-status').value=saved?.status||'';ctx.find('[name=keyword]').value=saved?.draftKeyword??keyword;ctx.find('.orders-native-search').open=saved?.searchOpen===true;
 const skeleton=()=>`<div class="orders-native-skeleton" role="status" aria-label="${escape(t('loading'))}">${Array.from({length:4},()=>'<div class="order-native-card"><i></i><i></i><i></i></div>').join('')}</div>`;
 function lockActions(){for(const node of ctx.find('#orders-list').querySelectorAll('[data-action=order-list-action]'))node.disabled=busy||!fresh;const more=ctx.find('[data-action=more-orders]');if(more)more.disabled=busy;}
 function paint(){
  const html=rows.map(o=>orderCard(o,{withActions:true})).join('')||`<section class="order-native-empty">${mi('receipt_long_outlined')}<h2>${escape(t('noOrders'))}</h2><p>${escape(t('noOrdersDesc'))}</p><a class="primary" href="#/">${escape(t('goShopping'))}</a></section>`;
  if(html!==lastHtml){ctx.find('#orders-list').innerHTML=html;lastHtml=html;}
  ctx.find('#orders-next').innerHTML=hasMore?button(uiText('載入更多'),'more-orders','secondary'):`<p class="muted">${escape(rows.length?t('listEndReached'):'')}</p>`;lockActions();
 }
 async function load(reset=false,{through=1}={}){
  if(!owned()||busy&&!reset)return;const generation=++readRevision,requestedPage=reset?0:page,pages=reset?Math.min(10,Math.max(1,through)):1;busy=true;fresh=false;
  if(!loaded){ctx.find('#orders-list').innerHTML=skeleton();lastHtml=null;}ctx.find('#orders-list').setAttribute('aria-busy','true');lockActions();
  try{
   const status=ctx.find('#order-status').value,statuses=status?[status]:orderTabStatuses[tab],values=[];let result,read=0,lastValues=[];
   for(let offset=0;offset<pages;offset++){result=await ctx.api.command('orders.search',{page:requestedPage+offset,keyword,status:statuses});if(!owned()||generation!==readRevision)return;lastValues=list(result);values.push(...lastValues);read++;if(result.last===true||result.last!==false&&lastValues.length<20)break;}
   const seen=new Set(reset?[]:rows.map(o=>String(o.id)));rows=(reset?[]:rows).concat(values.filter(o=>!seen.has(String(o.id))&&seen.add(String(o.id))));
   hasMore=result.last===false||result.last!==true&&lastValues.length===20;page=requestedPage+read;loaded=true;fresh=true;readAt=Date.now();paint();ctx.restoreScroll?.();
  }catch(error){
   if(!owned()||generation!==readRevision)return;
   const retired=['AUTH_REQUIRED','PAGE_RELOAD_REQUIRED','ORDER_OWNER_CHANGED','SESSION_REPLACED','SESSION_UNAVAILABLE'].includes(error.code)||[401,403].includes(error.status);
   if(retired){orderListMemory.clear();rows=[];loaded=false;readAt=0;lastHtml=null;}
   const retry=`<p class="form-errors" role="alert">${escape(error.message)}</p>${button(t('retry'),'retry-orders','primary')}`;
   if(!loaded)ctx.find('#orders-list').innerHTML=`<section class="order-native-empty error-panel"><h2>${escape(t('orderRatingLoadFailed'))}</h2>${retry}</section>`;
   ctx.find('#orders-next').innerHTML=loaded?retry:'';if(retired)throw error;
  }finally{if(generation===readRevision){busy=false;if(owned()){ctx.find('#orders-list').setAttribute('aria-busy','false');lockActions();}}}
 }
 if(loaded){paint();ctx.restoreScroll?.();}
 ctx.action('order-tab',async el=>{const next=Number(el.dataset.tab);if(!Number.isInteger(next)||next<0||next>=labels.length||next===tab)return;dialogs.close();tab=next;rows=[];page=0;loaded=false;fresh=false;lastHtml=null;ctx.find('#order-status').value='';ctx.find('#orders-next').innerHTML='';for(const node of ctx.find('.orders-native-tabs').querySelectorAll('[role=tab]'))node.setAttribute('aria-selected',String(Number(node.dataset.tab)===tab));await load(true);});
 ctx.action('order-list-contact',el=>{const selected=rows.find(o=>String(o.id)===el.dataset.id);if(selected&&owned())return openOrderChat(ctx,selected.id);});
 ctx.action('order-list-action',async el=>{
  const selected=rows.find(o=>String(o.id)===el.dataset.id),code=el.dataset.code,revision=readRevision,current=()=>owned()&&revision===readRevision&&rows.includes(selected);if(!current()||actionPending||busy||!fresh||!selected||!['CANCEL_ORDER','CONFIRM_RECEIVED'].includes(code))return;
  actionPending=true;
  try{const detail=await ctx.api.command('orders.detail',{orderId:selected.id});if(!current())return;const available=list(detail.buyerActions).find(a=>a.code===code);if(detail.order.id!==selected.id||detail.order.version!==selected.version||!available){ctx.toast(c('actionObserved'));await load(true);return;}
   const data=await chooseOrderAction(ctx,dialogs,detail.order,available,{isCurrent:current});if(!data||!current())return;if(data.contactSeller){await openOrderChat(ctx,selected.id);return;}
   const value=await ctx.api.command('orders.action',{orderId:selected.id,code,version:selected.version,...data});if(!current())return;await load(true);if(owned())ctx.toast(c(value.confirmed?'actionDone':'actionObserved'));
  }finally{actionPending=false;}
 });
 ctx.action('retry-orders',()=>load(true,{through:page||1}));bindOrderPullRefresh(ctx,()=>load(true,{through:page||1}),()=>owned()&&!busy&&!actionPending&&!document.querySelector('dialog[open]'));ctx.cleanup(()=>{if(detailReads.get(ctx)===state)orderListMemory.remember(ticket,{options,rows,page,keyword,tab,loaded,readAt,hasMore,status:ctx.find('#order-status')?.value||'',draftKeyword:ctx.find('[name=keyword]')?.value||'',searchOpen:ctx.find('.orders-native-search')?.open===true});++readRevision;rows=[];});
 ctx.form('order-search',async data=>{keyword=data.keyword;rows=[];loaded=false;fresh=false;page=0;lastHtml=null;await load(true);});ctx.action('more-orders',()=>busy?undefined:load());ctx.find('#order-status').addEventListener('change',()=>{rows=[];loaded=false;fresh=false;page=0;lastHtml=null;load(true).catch(e=>{if(owned())ctx.toast(e.message);});},{signal:ctx.signal});await load(!!saved,{through:saved?.page||1});
 async function recoveryRead(){try{const recovery=await ctx.api.command('checkout.recover');if(!owned())return;ctx.find('#recovered-checkout').innerHTML=`${recovery.unresolved?'<section class="notice">'+escape(t('checkoutRecoveryPending'))+'</section>':''}${recovery.receipts.map(receipt=>receiptPanel(receipt,{onOrdersPage:true})).join('')}`;ctx.action('ack-receipt',async el=>{await ctx.api.command('checkout.acknowledge',{receiptId:el.dataset.receiptId});if(owned())await recoveryRead();});}catch(e){if(owned())ctx.find('#recovered-checkout').textContent=e.message;}}
 await recoveryRead();
}

export async function order(ctx){
 const state=beginDetailRead(ctx),owned=state.current,id=ctx.params.id;let result;
 ctx.header(t('orderDetails'),true,{nativeAppBar:true,shortcuts:false,actionMarkup:'<button type="button" class="order-header-support" data-action="order-support" aria-label="'+escape(t('contactSupport'))+'">'+mi('headset_mic_outlined')+'</button>'});ctx.action('order-support',()=>owned()&&ctx.go('/help'));
 try{result=await ctx.api.command('orders.detail',{orderId:id});}catch(error){if(!owned())return;throw error;}if(!owned())return;
 const o=result.order,actions=list(result.buyerActions),dialogs=createBuyerDialogs(ctx,{cancelLabel:t('commonCancel')});let actionPending=false,aiPending=false;state.retire=dialogs.close;
 ctx.render(orderDetailMarkup(result),{navigation:false});
 bindOrderPullRefresh(ctx,()=>order(ctx),()=>owned()&&!actionPending&&!aiPending&&!document.querySelector('dialog[open]'));
 ctx.action('copy-order-id',async()=>{if(!owned())return;await navigator.clipboard.writeText(String(id));if(owned())ctx.toast(t('orderNumberCopied'));});
 ctx.action('contact-order',()=>owned()&&openOrderChat(ctx,id));ctx.action('refresh-order',()=>order(ctx));
 ctx.action('copy-tracking',async()=>{const value=o.trackingNumber?.trim();if(value&&owned()){await navigator.clipboard.writeText(value);if(owned())ctx.toast(t('copiedLabelToClipboard',{label:t('trackingNumber')}));}});
 ctx.action('order-image-preview',node=>{const url=imageUrl(node.dataset.url);if(!url||!owned())return;dialogs.show(t('imagePreview'),'<img class="order-refund-photo-preview" src="'+escape(url)+'" alt="'+escape(t('imagePreview'))+'">',{maxWidth:()=>innerWidth-48});});
 ctx.action('ai-proof',async()=>{
  if(!owned()||aiPending||actionPending)return;aiPending=true;const button=ctx.find('[data-action=ai-proof]');if(button)button.disabled=true;let loading;
  try{loading=showOrderAiLoading(dialogs);const value=await ctx.api.command('orders.aiProof',{orderId:id,proofId:o.latestProofId});if(!owned())return;if(loading.open)loading.close();showOrderAiResult(dialogs,value);}
  catch(error){if(owned())throw error;}
  finally{if(loading?.open)loading.close();aiPending=false;if(owned()&&button?.isConnected)button.disabled=false;}
 });
 ctx.action('order-action',async el=>{
  const code=el.dataset.code,available=actions.find(a=>a.code===code);if(!owned()||actionPending||aiPending||!available)return;
  if(['REQUEST_RETURN','UPDATE_RETURN_SHIPPING','OPEN_DISPUTE','VIEW_RETURN_DETAILS'].includes(code)){ctx.go('/orders/'+encodeURIComponent(id)+'/return?kind='+encodeURIComponent(code));return;}
  actionPending=true;let buttons=[];
  try{const data=await chooseOrderAction(ctx,dialogs,o,available,{isCurrent:owned});if(!data||!owned())return;if(data.contactSeller){await openOrderChat(ctx,id);return;}
   buttons=[...ctx.find('.inline-actions').querySelectorAll('button')];buttons.forEach(button=>button.disabled=true);
   const value=await ctx.api.command('orders.action',{orderId:id,code,version:o.version,...data});if(!owned())return;await order(ctx);if(ctx.active())ctx.toast(c(value.confirmed?'actionDone':'actionObserved'));
  }catch(error){if(!owned())return;if(['ORDER_CHANGED','ORDER_ACTION_BLOCKED','ORDER_RESULT_UNCONFIRMED'].includes(error.code))await order(ctx);throw error;}
  finally{actionPending=false;buttons.forEach(button=>{if(button.isConnected)button.disabled=false;});}
 });
}

const companies=['黑貓宅急便','新竹物流','台灣宅配通','嘉里大榮物流','順豐速運','中華郵政','全家便利商店','7-ELEVEN','萊爾富','OK 超商','宅配快遞','台灣宅配'];
export async function returnOrder(ctx){
 if(ctx.query.get('kind')==='VIEW_RETURN_DETAILS')return refundDetail(ctx);
 const id=ctx.params.id,kind=ctx.query.get('kind')||'REQUEST_RETURN',opened=await ctx.api.command('orders.openAfterSales',{orderId:id,kind});if(!ctx.active())return;
 const title=afterSalesTitle(kind,id),dialogs=createBuyerDialogs(ctx,{cancelLabel:t('commonCancel')});let uploading=false,locked=false,submitting=false,images=[];
 ctx.header(afterSalesTitle(kind,id),true,{nativeAppBar:true,shortcuts:false});ctx.render(afterSalesMarkup(opened,kind,companies),{navigation:false});
 const form=ctx.find('#after-sales-form'),fields=ctx.find('#after-sales-fields');form.noValidate=true;
 if(kind==='OPEN_DISPUTE')bindNativeFormValidation(form,f=>({description:!f.elements.description.value.trim()?t('disputeDescriptionRequired'):''}),{signal:ctx.signal});
 ctx.find('#return-company')?.addEventListener('change',event=>{const other=event.target.value==='__OTHER__';ctx.find('#custom-return-company').hidden=!other;form.elements.customCompany.required=other;form.querySelector('[type=submit]').disabled=!event.target.value;},{signal:ctx.signal});
 function evidence(){if(!ctx.active())return;ctx.find('[data-action=pick-evidence]').hidden=images.length>=5;ctx.find('#after-sales-evidence').innerHTML=images.map(url=>`<div><a href="${escape(url)}" target="_blank" rel="noopener noreferrer"><img src="${escape(url)}" alt="${escape(t('refundEvidenceViewPhoto'))}"></a>${button(t('removeEvidenceImage'),'remove-evidence','secondary',`data-url="${escape(url)}"`)}</div>`).join('');}
 function result(value){if(!ctx.active())return;if(value.confirmed){ctx.toast(t('refundRequestSubmitted'));ctx.go('/orders/'+encodeURIComponent(id));return;}locked=value.pending===true;fields.disabled=locked;ctx.find('#after-sales-result').innerHTML=`<section class="notice"><p>${escape(c('pendingAfterSales'))}</p>${button(c('readOriginal'),'recover-after-sales','secondary')}</section>`;}
 ctx.form('after-sales',async data=>{if(!ctx.active()||submitting)return;if(uploading)throw Error(c('waitImages'));if(locked)throw Error(c('waitOriginal'));if(kind==='REQUEST_RETURN'&&!data.description?.trim()){ctx.toast(t('refundDetailsRequired'));return;}if(kind==='REQUEST_RETURN'&&!data.reason){ctx.toast(t('refundReasonRequired'));return;}if(kind==='UPDATE_RETURN_SHIPPING'){if(!data.shippingCompany)return;if(!data.trackingNumber?.trim()){ctx.toast(t('returnTrackingNumberRequired'));return;}if(data.shippingCompany==='__OTHER__'&&!data.customCompany?.trim()){ctx.toast(t('returnCarrierNameHint'));return;}}if(!await dialogs.confirm({title,content:'<p>'+escape(t('orderNumber'))+' #'+escape(id)+'</p>',confirmLabel:t('confirm')}))return;if(!ctx.active()||submitting||locked)return;submitting=true;fields.disabled=true;try{const body={...data,imageUrls:[...images],...(kind==='UPDATE_RETURN_SHIPPING'?{shippingCompany:data.shippingCompany==='__OTHER__'?data.customCompany:data.shippingCompany}:{})};result(await ctx.api.command('orders.submitAfterSales',{formId:opened.formId,...body}));}finally{submitting=false;if(ctx.active())fields.disabled=locked;}});
 ctx.action('recover-after-sales',async()=>result(await ctx.api.command('orders.recoverAfterSales',{formId:opened.formId})));
 ctx.action('remove-evidence',async el=>{if(locked||uploading||submitting)return;await ctx.api.command('orders.removeEvidence',{formId:opened.formId,url:el.dataset.url});images=images.filter(u=>u!==el.dataset.url);evidence();});
 ctx.action('pick-evidence',()=>{if(ctx.active()&&!locked&&!uploading&&!submitting)ctx.find('#after-sales-files')?.click();});
 const description=ctx.find('[name=description]');description?.addEventListener('input',()=>{const counter=ctx.find('.order-description-counter');if(counter)counter.textContent=description.value.length+'/1000';},{signal:ctx.signal});
 const files=ctx.find('#after-sales-files');files?.addEventListener('change',async()=>{if(uploading||locked||submitting)return;const selected=[...files.files].slice(0,Math.max(0,5-images.length));if(!selected.length){files.value='';ctx.toast(t('evidenceImageMaxLimit',{max:5}));return;}uploading=true;files.disabled=true;ctx.find('[data-action=pick-evidence]').disabled=true;const submit=form.querySelector('[type=submit]');submit.disabled=true;let failed=0,uploaded=0;
  try{for(const file of selected){if(!ctx.active())return;try{if(file.size>10*1024*1024)throw Error(c('imageTooLarge'));const bytes=new Uint8Array(await file.arrayBuffer());let binary='';for(let n=0;n<bytes.length;n+=16384)binary+=String.fromCharCode(...bytes.subarray(n,n+16384));const value=await ctx.api.command('orders.uploadEvidence',{formId:opened.formId,name:file.name,base64:btoa(binary)});if(!ctx.active())return;images.push(value.url);uploaded++;evidence();}catch(e){if(!ctx.active()||e.name==='AbortError')return;failed++;ctx.toast(e.message);}}if(ctx.active())ctx.find('#evidence-status').textContent=failed?t('evidenceUploadPartial',{uploaded,incomplete:failed}):t('evidenceImagesUploadedCount',{count:images.length});}
  finally{uploading=false;if(files.isConnected){files.value='';files.disabled=locked;}if(submit.isConnected)submit.disabled=locked;const pick=ctx.find('[data-action=pick-evidence]');if(pick)pick.disabled=locked;}
 },{signal:ctx.signal});
}

async function refundDetail(ctx){
 const state=beginDetailRead(ctx),owned=state.current,id=ctx.params.id;
 ctx.header(t('refundDetailTitle',{orderId:id}),true,{nativeAppBar:true,shortcuts:false,backLabel:t('backToOrderList')});ctx.action('back',()=>owned()&&ctx.go('/orders'));
 let detail;try{detail=await ctx.api.command('orders.detail',{orderId:id});}catch(error){if(!owned())return;throw error;}if(!owned())return;
 ctx.render(refundDetailMarkup(detail),{navigation:false});
 const dialogs=createBuyerDialogs(ctx,{cancelLabel:t('close')});state.retire=dialogs.close;
 ctx.action('refund-photo',node=>{const url=imageUrl(node.dataset.url);if(!url||!owned())return;dialogs.show(t('refundEvidenceViewPhoto'),`<img class="order-refund-photo-preview" src="${escape(url)}" alt="${escape(t('refundEvidenceViewPhoto'))}">`,{maxWidth:()=>innerWidth-48});});
 bindOrderPullRefresh(ctx,()=>refundDetail(ctx),()=>owned()&&!document.querySelector('dialog[open]'));
}

export async function reviewOrder(ctx){
 const id=ctx.params.id,opened=await ctx.api.command('orders.openReview',{orderId:id});if(!ctx.active())return;
 ctx.header(t('rateOrder'),true,{nativeAppBar:true,shortcuts:false});let pending=false,busy=false,lastPayload,rating=0;const dialogs=createBuyerDialogs(ctx,{cancelLabel:t('understood')}),o=opened.detail.order;
 const items=list(opened.detail.orderItems?.length?opened.detail.orderItems:o.orderItems);
 ctx.render(`<div class="order-native-review"><section class="order-native-review-items"><h2>${escape(t('orderItems'))}</h2>${orderItemsMarkup(o,items,{heading:true})}</section><form method="post" data-form="review"><fieldset id="review-fields"><h2>${escape(t('rateThisOrder'))}</h2><div class="order-native-stars" role="group" aria-label="${escape(t('rateThisOrder'))}">${[1,2,3,4,5].map(n=>`<button type="button" data-action="review-star" data-rating="${n}" aria-label="${escape(t('ratingStars',{stars:n}))}" aria-pressed="false">${mi('star_border')}</button>`).join('')}</div><p id="review-rating-hint">${escape(t('selectOrderRating'))}</p><input type="hidden" name="rating" value=""><label class="field"><span>${escape(t('reviewContentLabel'))}</span><textarea name="comment" maxlength="500" rows="4" placeholder="${escape(t('reviewCommentHint'))}"></textarea><small id="review-counter">0/500</small></label><div class="order-native-anonymous"><label class="check"><input type="checkbox" name="isAnonymous"><span>${escape(t('anonymousReview'))}</span></label><button type="button" class="order-anonymous-help" data-action="review-anonymous-info" aria-label="${escape(t('anonymousReviewInfo'))}">${mi('help_outline')}</button></div><button class="primary order-review-submit" type="submit" aria-label="${escape(t('submitOrderReview'))}" disabled>${escape(t('submitReview'))}</button></fieldset></form><div id="review-result" role="status"></div></div>`,{navigation:false});
 const fields=ctx.find('#review-fields'),submitButton=ctx.find('.order-review-submit');
 function update(){if(!ctx.active())return;fields.disabled=busy||pending;submitButton.disabled=busy||pending||rating<1;ctx.find('[name=rating]').value=rating||'';ctx.find('#review-rating-hint').textContent=rating?t('starCount',{stars:rating}):t('selectOrderRating');for(const node of ctx.find('.order-native-stars').querySelectorAll('button')){const selected=Number(node.dataset.rating)<=rating;node.setAttribute('aria-pressed',String(selected));node.innerHTML=mi(selected?'star':'star_border');}}
 ctx.action('review-star',node=>{if(!ctx.active()||busy||pending)return;const next=Number(node.dataset.rating);if(!Number.isInteger(next)||next<1||next>5)return;rating=next;update();});
 ctx.action('review-anonymous-info',()=>{if(!ctx.active()||busy||pending)return;dialogs.show(t('anonymousReviewDialogTitle'),'<p>'+escape(t('anonymousReviewDialogDescription'))+'</p>');});
 ctx.find('[name=comment]').addEventListener('input',event=>{ctx.find('#review-counter').textContent=event.target.value.length+'/500';},{signal:ctx.signal});
 async function submit(payload){if(!ctx.active()||busy)return;busy=true;update();try{const value=await ctx.api.command('orders.review',{reviewId:opened.reviewId,...payload});if(!ctx.active())return;if(value.confirmed){ctx.toast(t('reviewSubmitted'));ctx.go('/orders/'+encodeURIComponent(id));return;}pending=value.pending===true;ctx.find('#review-result').innerHTML=`<section class="notice"><p>${escape(c('pendingReview'))}</p>${button(c('recoverReview'),'recover-review','secondary')}</section>`;}finally{busy=false;update();}}
 ctx.form('review',async data=>{if(!ctx.active()||busy)return;if(pending)throw Error(c('waitReview'));if(!Number.isInteger(rating)||rating<1||rating>5)throw Error(t('selectOrderRating'));if((data.comment||'').length>500)throw Error(t('reviewCommentHint'));lastPayload=Object.freeze({rating,comment:data.comment||'',isAnonymous:data.isAnonymous==='on'});await submit(lastPayload);});
 ctx.action('recover-review',async()=>{if(ctx.active()&&lastPayload&&!busy)await submit(lastPayload);});
}
