import{escape,route,imageUrl}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t,nativeReturnReason,orderDate}from'./order-ui.js';

const row=(key,value,{literal=false,highlight=false}={})=>`<div class="order-refund-row${highlight?' highlight':''}"><span>${escape(literal?key:t(key))}</span><div>${escape(value??'—')}</div></div>`;
const card=(key,body)=>`<section class="panel"><h2>${escape(t(key))}</h2>${body}</section>`;
const sourceAmount=value=>value==null?'—':'$'+String(value)+' USDT';
const gap=()=>'<div class="order-refund-gap"></div>';
const statuses={RETURN_REQUESTED:'orderRefundRequested',RETURN_REJECTED:'orderReturnRejected',RETURN_APPROVED:'orderReturnApproved',RETURN_SHIPPED_BY_BUYER:'returnInProgress',RETURN_SHIPPING_DELAYED:'returnInProgress',RETURN_RECEIVED:'orderReturnReceived',REFUNDED:'orderStatusRefunded',DISPUTE_OPENED:'disputeInProgress',DISPUTE_RESPONDED:'disputeInProgress',DISPUTE_RESOLVED:'disputeInProgress',REFUND_NO_RETURN_OFFERED:'refundOfferInProgress',REFUND_NO_RETURN_PARTIAL_OFFERED:'refundOfferInProgress'};
function process(order,record){
 const status=order.status,rejected=status==='RETURN_REJECTED';
 const step=(key,active,error=false)=>`<li class="${active?'active':''}${error?' rejected':''}"><i>${active?mi(error?'close':'check'):''}</i><span>${escape(t(key))}</span></li>`;
 const steps=rejected?step('returnRequestStep',true)+step('sellerRejectedStep',true,true):[
  ['returnRequestStep',status==='RETURN_REQUESTED'],['sellerReviewStep',status==='RETURN_REQUESTED'],['waitingForReturnStep',status==='RETURN_APPROVED'],['returnInProgress',['RETURN_SHIPPED_BY_BUYER','RETURN_SHIPPING_DELAYED'].includes(status)],['confirmReceiptStep',['RETURN_RECEIVED','REFUNDED'].includes(status)],['refundCompletedStep',status==='REFUNDED']
 ].map(([key,active])=>step(key,active)).join('');
 return card('processingStatusFlow',`<ol class="order-refund-progress">${steps}</ol>${rejected&&record?.sellerReply?`<p class="order-refund-rejected">${mi('cancel_outlined')}${escape(t('rejectionReasonWithValue',{reason:record.sellerReply}))}</p>`:''}`);
}
function reasonCard(order,record){
 const photos=(record?.imageUrls||[]).map(imageUrl).filter(Boolean),evidence=photos.length?`<div class="order-refund-photos">${photos.map(url=>`<button type="button" data-action="refund-photo" data-url="${escape(url)}" aria-label="${escape(t('refundEvidenceViewPhoto'))}"><img src="${escape(url)}" alt="" loading="lazy"></button>`).join('')}</div>`:`<div class="order-refund-no-photos">${mi('image_not_supported_outlined')}<span>${escape(t('refundEvidenceNoPhotos'))}</span></div>`;
 return card('returnInformation',`${record?.reason?row('returnReason',nativeReturnReason(record.reason)):`<p>${escape(nativeReturnReason('OTHER'))}</p>`}${gap()}${record?.description!=null?row('detailedDescription',record.description):`<p>${escape(t('returnDescriptionPlaceholder'))}</p>`}${gap()}${order.createdAt?row('applicationTime',orderDate(order.createdAt)):''}${order.updatedAt?row('lastUpdated',orderDate(order.updatedAt)):''}<div class="order-refund-evidence"><h3>${escape(t('evidencePhotos'))}</h3>${evidence}</div>${record?.sellerReply!=null?`<div class="order-refund-evidence"><h3>${escape(t('sellerReply'))}</h3>${row('replyContent',record.sellerReply)}${record.processedAt?row('replyTime',orderDate(record.processedAt)):''}</div>`:''}`);
}
export function refundDetailMarkup(result){
 const order=result.order,record=result.returnRecord,status=order.status,amount=sourceAmount(order.orderAmount),refunded=status==='REFUNDED';
 const product=card('productInformation',`${order.productId!=null?row('Product ID',order.productId,{literal:true}):''}${order.orderAmount!=null?row('orderTotalAmount',amount):''}${row('orderStatus',t(statuses[status]||'statusPendingConfirmation'))}`);
 const refund=card('refundAmount',row('originalOrderTotalAmount',amount)+gap()+(refunded?row('refundAmount',amount,{highlight:true})+(order.refundedAt?gap()+row('refundTime',orderDate(order.refundedAt)):''):`<p class="order-refund-estimate"><span>${escape(t('estimatedRefundAmount',{amount}))}</span></p>`));
 const shipping=record&&(record.trackingNumber!=null||record.shippingCompany!=null||record.shippedAt!=null)?card('returnShippingInformation',`${record.shippingCompany!=null?row('shippingCompany',record.shippingCompany):''}${record.trackingNumber!=null?row('trackingNumber',record.trackingNumber):''}${record.shippedAt?row('shippedTime',orderDate(record.shippedAt)):''}${record.receivedAt?row('receivedTime',orderDate(record.receivedAt)):''}`):'';
 let actions='';
 if(status==='RETURN_APPROVED')actions=`<a class="primary" href="${route('/orders/'+encodeURIComponent(order.id)+'/return?kind=UPDATE_RETURN_SHIPPING')}">${mi('local_shipping_outlined')}${escape(t('fillReturnLogistics'))}</a><p class="order-refund-hint">${mi('info_outline')}${escape(t('followReturnAddressInstruction'))}</p>`;
 if(status==='RETURN_SHIPPED_BY_BUYER')actions=`<p class="order-refund-hint secondary">${mi('info_outline')}${escape(t('waitingForSellerToConfirmReturn'))}</p>`;
 if(refunded)actions=`<a class="secondary" href="${route('/transactions')}">${mi('receipt_long_outlined')}${escape(t('viewTransactionRecords'))}</a>`;
 return `<div class="order-native-refund">${process(order,record)}${product}${refund}${reasonCard(order,record)}${shipping}<div class="order-refund-actions">${actions}</div></div>`;
}
