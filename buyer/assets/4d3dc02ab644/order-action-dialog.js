import{escape,money,field}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t,commerceText as c,orderDate,orderActionLabel,settlementCurrency}from'./order-ui.js';
import{fitOrderDialogActions,orderActionDialogWidth}from'./order-dialog-layout.js';
import{nativeDialogTextWidth}from'./native-dialog.js';

const reasons=[['CHANGED_MIND','cancelOrderReasonChangedMind'],['PRICE_OR_FEE','cancelOrderReasonPriceFee'],['DELIVERY_TIMING','cancelOrderReasonDeliveryTiming'],['PAYMENT_ISSUE','cancelOrderReasonPayment'],['OTHER','cancelOrderReasonOther']];
export function refundOfferExpiry(order){
 const value=order.refundOfferExpiresAt??(order.updatedAt?new Date(order.updatedAt).getTime()+7*86400000:null),date=value==null?null:new Date(value);return date&&Number.isFinite(date.getTime())?date:null;
}
export function refundOfferCountdown(expiresAt,now=Date.now()){
 const difference=expiresAt.getTime()-now;
 return difference<0?t('partialRefundOfferExpired'):t('partialRefundOfferExpiresIn',{days:Math.floor(difference/86400000),hours:Math.floor(difference/3600000)%24,minutes:Math.floor(difference/60000)%60});
}
export function refundOfferMarkup(order){
 const amount='$'+money(order.refundAmount??order.orderAmount)+' USDT',expires=refundOfferExpiry(order);
 return `<p>${escape(t('partialRefundOfferDescription'))}</p><div class="order-refund-offer-amount"><strong>${escape(t('partialRefundAmountValue',{amount}))}</strong>${expires?`<p>${escape(t('refundOfferExpiresAt',{expiresAt:orderDate(expires.toISOString())}))}</p><p class="order-refund-countdown">${escape(refundOfferCountdown(expires))}</p>`:''}</div><p class="order-refund-offer-hint">${escape(t('partialRefundOfferExpiryHint'))}</p>`;
}
function refundOfferWidth(order,title){
 const amount='$'+money(order.refundAmount??order.orderAmount)+' USDT',expires=refundOfferExpiry(order);
 const texts=[[title,20,48,-.3,600],[t('partialRefundOfferDescription'),14,48,.25,400],[t('partialRefundAmountValue',{amount}),16,80,.5,700],[t('partialRefundOfferExpiryHint'),12,48,.4,400]];
 if(expires)texts.push([t('refundOfferExpiresAt',{expiresAt:orderDate(expires.toISOString())}),14,80,.25,400],[refundOfferCountdown(expires),12,80,.4,700]);
 return Math.max(280,...texts.map(([text,size,padding,spacing,weight])=>padding+nativeDialogTextWidth(text,size,spacing,weight)));
}
// A dismissal always resolves to null. It can never be interpreted as rejecting
// a refund, cancelling an order, or accepting the AI's recommendation.
export function chooseOrderAction(ctx,dialogs,order,action,{isCurrent=()=>ctx.active()}={}){
 if(!isCurrent())return Promise.resolve(null);
 const code=action.code,label=orderActionLabel(action),currency=settlementCurrency(order.currency);
 let title=label,content='',confirmLabel=t('confirm'),className='order-action-dialog',dismissible=true;
 if(code==='CANCEL_ORDER'){
  title=t('confirmCancel');dismissible=false;className+=' order-cancel-dialog';confirmLabel=t('cancelOrderContinue');
  content=`<p>${escape(t('cancelOrderReviewHint'))}</p><div class="order-cancel-amount"><div>${mi('receipt_long_outlined')}${escape(t('cancelOrderReviewTotal'))}</div><strong>${money(order.orderAmount)} USDT</strong></div><h3>${escape(t('cancelOrderReasonTitle'))}</h3><form data-form="order-choice">${reasons.map(([value,key])=>`<label class="order-cancel-reason"><input type="radio" name="reason" value="${value}" required><span>${escape(t(key))}</span></label>`).join('')}<p class="order-cancel-required">${escape(t('cancelOrderReasonRequired'))}</p></form>`;
 }else if(code==='RESPOND_REFUND_OFFER'){
  title=t('partialRefundPlan');className+=' order-refund-offer-dialog';content=refundOfferMarkup(order);
 }else if(code==='REJECT_DELIVERY_PROOF'){
  title=t('rejectDeliveryProof');confirmLabel=t('confirmReject');className+=' order-reject-proof-dialog';content=`<form data-form="order-choice"><label class="field order-reject-field"><span>${escape(t('rejectionReason'))}</span><textarea name="remark" placeholder=" " rows="2" required></textarea></label><p class="order-choice-error" hidden>${escape(t('rejectReasonRequired'))}</p></form>`;
 }else if(code==='CONFIRM_RECEIVED'&&(order.shippingCompany==='PLATFORM_DELIVERY'||action.requiredFields?.includes('verifyCode'))){
  title=t('verifyCodeDialogTitle');confirmLabel=t('commonConfirm');content=`<p>${escape(t('courierVerificationCodePrompt'))}</p><form data-form="order-choice">${field(t('verifyCode'),'verifyCode','text','','required inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" placeholder="'+escape(t('sixDigitCodeHint'))+'"')}</form>`;
 }else{
  content=`<p>${escape(c('confirmAction',{action:label,amount:money(order.orderAmount),currency}))}</p>${code==='CANCEL_DIGITAL_ORDER'?`<form data-form="order-choice">${field(t('orderRemark'),'remark')}</form>`:`<p>${escape(c('checkDelivery'))}</p>`}`;
 }
 const node=dialogs.show(title,content,{dismissible,inset:40,verticalInset:24,maxWidth:()=>code==='CANCEL_ORDER'?528:code==='RESPOND_REFUND_OFFER'?refundOfferWidth(order,title):code==='REJECT_DELIVERY_PROOF'?orderActionDialogWidth(title,[{text:t('cancel')},{text:confirmLabel,filled:true}]):560});node.classList.add(...className.split(' '));
 return new Promise(resolve=>{
  let choice=null,settled=false;const footer=node.querySelector('.profile-dialog-actions'),form=node.querySelector('form');
  function finish(value){if(settled||!isCurrent())return;settled=true;choice=value;dialogs.close();}
  const add=(text,kind,callback)=>{const button=document.createElement('button');button.type='button';button.className=kind;button.textContent=text;button.addEventListener('click',callback);footer.append(button);return button;};
  if(code==='RESPOND_REFUND_OFFER'){
   footer.replaceChildren();const amount='$'+money(order.refundAmount??order.orderAmount)+' USDT';add(t('partialRefundRejectOffer'),'order-choice-reject',()=>finish({accepted:false}));add(t('partialRefundAcceptAmount',{amount}),'primary',()=>finish({accepted:true}));
   const expires=refundOfferExpiry(order);if(expires){const clock=setInterval(()=>{const text=node.querySelector('.order-refund-countdown');if(text&&isCurrent())text.textContent=refundOfferCountdown(expires);},1000);node.addEventListener('close',()=>clearInterval(clock),{once:true});}
  }else{
   const cancel=node.querySelector('[data-dialog-close]');
   if(code==='CANCEL_ORDER'){
    cancel.hidden=false;cancel.textContent=t('keepOrderButtonLabel');cancel.setAttribute('aria-label',t('keepOrderSemantics'));
    const contact=add(t('cancelOrderContactSellerFirst'),'order-choice-contact',()=>finish({contactSeller:true}));footer.prepend(contact);
   }
   const confirm=add(confirmLabel,'primary',()=>{
    if(!isCurrent())return;
    if(form&&!form.reportValidity())return;
    const data=form?Object.fromEntries(new FormData(form)):{};
    if(code==='REJECT_DELIVERY_PROOF'){data.remark=data.remark.trim();if(!data.remark){node.querySelector('.order-choice-error').hidden=false;return;}}
    finish(data);
   });confirm.dataset.buyerConfirm='true';
   if(code==='CANCEL_ORDER'){
    confirm.disabled=true;confirm.setAttribute('aria-label',t('confirmCancelOrderSemantics'));
    form.addEventListener('change',()=>{const selected=form.querySelector('[name=reason]:checked');confirm.disabled=!selected;node.querySelector('.order-cancel-required').hidden=!!selected;});
   }
   form?.addEventListener('submit',event=>{event.preventDefault();confirm.click();});
  }
  fitOrderDialogActions(node);node.addEventListener('close',()=>{settled=true;resolve(isCurrent()?choice:null);},{once:true});
 });
}
