import{escape,money,list,button,route}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t,nativeOrderStatus,orderActionLabel,orderItemsMarkup,orderDate,settlementCurrency,orderStatuses,nativeOrderTone}from'./order-ui.js';

// Presentation only. The page retains all owner/version/receipt command guards.
export{orderSectionTitle,orderInfoRow}from'./order-layout-common.js';
import{orderSectionTitle,orderInfoRow}from'./order-layout-common.js';
import{deliverySupplementMarkup,orderShippingMarkup}from'./order-delivery-layout.js';
import{orderDisputeMarkup}from'./order-dispute-layout.js';
export const orderStatusTone=nativeOrderTone;
const nextSteps={
 PENDING_SHIPMENT:['WaitShipment','inventory_2_outlined','primary'],PURCHASE_IN_PROGRESS:['WaitDigitalDelivery','hourglass_top','primary'],PROOF_SUBMITTED:['ReviewProof','fact_check_outlined','tertiary'],
 SHIPPED:['TrackDelivery','local_shipping_outlined','primary'],DELIVERY_COMPLETED:['ConfirmResult','task_alt','primary'],RETURN_REQUESTED:['WaitReturnReview','assignment_return_outlined','tertiary'],RETURN_APPROVED:['FillReturnShipping','outbox_outlined','tertiary'],RETURN_REJECTED:['ReturnRejected','report_problem_outlined','error'],
 DISPUTE_OPENED:['HandleDispute','gavel_outlined','error'],DISPUTE_RESPONDED:['HandleDispute','gavel_outlined','error'],COMPLETED_FINAL:['OrderCompleted','check_circle_outline','primary'],BUYER_CONFIRMED:['OrderCompleted','check_circle_outline','primary'],REFUNDED:['OrderCompleted','check_circle_outline','primary'],DISPUTE_RESOLVED:['OrderCompleted','check_circle_outline','primary']
};
function nextStep(order,provided){
 if(provided?.message?.trim())return{title:t('nextStep'),description:provided.message,icon:'route_outlined',tone:'primary'};
 const [key,icon,tone]=nextSteps[order.status]||(/^DELIVERY_(ASSIGN|EN_ROUTE|PICK|DELIVERY_DELAYED)/.test(order.status)?nextSteps.SHIPPED:['KeepTracking','info_outline','muted']);
 return{title:t('buyerNextStep'+key+'Title'),description:t('buyerNextStep'+key+'Description'),icon,tone};
}
const actionIcons={CANCEL_ORDER:'cancel_outlined',CANCEL_DIGITAL_ORDER:'cancel_outlined',CONFIRM_RECEIVED:'check_circle_outline',CONFIRM_DELIVERY_PROOF:'check_circle_outline',REJECT_DELIVERY_PROOF:'thumb_down_alt_outlined',REQUEST_RETURN:'money_off_outlined',UPDATE_RETURN_SHIPPING:'local_shipping_outlined',OPEN_DISPUTE:'gavel',RESPOND_REFUND_OFFER:'payment_outlined'};
function actionsMarkup(o,result){
 const actions=list(result.buyerActions),next=nextStep(o,result.nextStep),tone=orderStatusTone(o.status),currency=settlementCurrency(o.currency);
 const buttons=actions.map(a=>button(orderActionLabel(a),'order-action','order-native-action',`data-code="${escape(a.code)}" data-tone="${/CANCEL|REJECT|DISPUTE/.test(a.code)?'error':/REQUEST_RETURN|REFUND/.test(a.code)?'secondary':'primary'}"`).replace('>'+escape(orderActionLabel(a)), '>'+mi(actionIcons[a.code]||'info_outline')+escape(orderActionLabel(a))));
 if(!actions.length)buttons.push(button(t('contactSeller'),'contact-order','order-native-action'));
 if(result.canReview)buttons.push(`<a class="order-native-action" href="${route('/orders/'+encodeURIComponent(o.id)+'/review')}">${mi('star_outline')}${escape(t('rateOrder'))}</a>`);
 if(o.latestProofId&&o.status==='PROOF_SUBMITTED')buttons.push(button(t('aiAssistValidation'),'ai-proof','order-native-action','data-tone="tertiary"'));
 return `<section class="panel order-native-actions"><div class="order-next-step"><span class="order-next-icon" data-tone="${next.tone}">${mi(next.icon)}</span><div><h2>${escape(next.title)}</h2><p>${escape(next.description)}</p></div><span class="order-detail-status" data-tone="${tone}">${escape(nativeOrderStatus(o.status))}</span></div><div class="order-next-summary"><span>${mi('receipt_long_outlined')}<em>${escape(t('orderNumber'))} </em><b>${escape(o.id)}</b></span><span>${mi('payments_outlined')}<em>${escape(t('orderTotalAmount'))} </em><strong>${money(o.orderAmount)} ${escape(currency)}</strong></span></div>${buttons.length?`<h3>${escape(t('availableActions'))}</h3>`:''}${actions.some(a=>a.code==='CONFIRM_RECEIVED')&&actions.some(a=>a.code==='REQUEST_RETURN')?`<p class="order-info-banner">${mi('info_outline')}${escape(t('confirmReceiveReturnMutualExclusiveHint'))}</p>`:''}<div class="inline-actions">${buttons.join('')}</div>${list(result.blockedActions).map(a=>`<p class="order-blocked-action">${escape(a.label||t('temporarilyUnavailable'))}：${escape(a.reasonMessage||'')}</p>`).join('')}${o.reviewedAt?`<p class="muted">${escape(t('reviewSubmitted'))} · ${escape(orderDate(o.reviewedAt))}</p>`:''}<div id="order-action-form"></div><div id="order-ai-result"></div></section>`;
}
function progressMarkup(o){
 const active=['PENDING_SHIPMENT','PURCHASE_IN_PROGRESS','PROOF_SUBMITTED'].includes(o.status)?1:['SHIPPED','DELIVERY_ASSIGNING','DELIVERY_ASSIGNED','DELIVERY_EN_ROUTE_TO_PICKUP','DELIVERY_PICKUP_DELAYED','DELIVERY_PICKED_UP','DELIVERY_EN_ROUTE_TO_BUYER','DELIVERY_DELIVERY_DELAYED'].includes(o.status)?2:o.status==='DELIVERY_COMPLETED'?3:Object.hasOwn(orderStatuses,o.status)?4:0;
 const steps=[['OrderCreated','receipt_long_outlined'],['PendingShipment','inventory_2_outlined'],['Delivering','local_shipping_outlined'],['Delivered','task_alt'],['Completed','verified_outlined']];
 return `<section class="panel order-native-progress">${orderSectionTitle('progressTracking','route_outlined').replace('</h2>','</h2><p>'+escape(t('progressTrackingDescription'))+'</p>')}<ol>${steps.map(([key,icon],i)=>`<li class="${i<active?'done':i===active?'active':'pending'}"${i===active?' aria-current="step"':''}><span>${mi(icon)}</span><div>${escape(t('orderProgressStatus'+key))}</div></li>`).join('')}</ol>${orderInfoRow('orderNumber',o.id,{copy:true})}</section>`;
}
function recordsMarkup(o){
 const complete=['COMPLETED_FINAL','DELIVERY_COMPLETED','BUYER_CONFIRMED','REFUNDED'].includes(o.status);
 return `<section class="panel order-native-records">${orderSectionTitle('paymentAndRecords','payments_outlined')}<div class="order-info-panel">${orderInfoRow('orderNumber',o.id,{copy:true})}${orderInfoRow('createdAt',orderDate(o.createdAt))}</div>${complete?`<div class="order-info-panel">${orderInfoRow('completedAt',orderDate(o.updatedAt))}</div>`:''}${o.remark?`<div class="order-info-panel">${orderInfoRow('orderDetailRemark',o.remark)}</div>`:''}</section>`;
}
export function receiverMarkup(o,delivery){
 const entries=[['receiverNameLabel',delivery?.receiverName],['receiverPhoneLabel',delivery?.receiverPhone],['receiverShippingAddressLabel',delivery?.shippingAddress],['shippingPostalCode',delivery?.shippingPostalCode]].filter(([,v])=>v?.trim());
 if(o.pickupServiceType==='PLATFORM_DELIVERY'&&delivery?.verifyCode?.trim())entries.push(['verificationCode',delivery.verifyCode.trim()]);
 if(o.pickupServiceType)entries.unshift(['pickupServiceType',t({SEVEN_ELEVEN:'pickupServiceSevenEleven',FAMILY_MART:'pickupServiceFamilyMart',HILIFE:'pickupServiceHiLife',OK_MART:'pickupServiceOkMart',HOME_DELIVERY:'pickupServiceHomeDelivery',PLATFORM_DELIVERY:'pickupServicePlatformDelivery'}[o.pickupServiceType])||o.pickupServiceType]);
 return `<section class="panel order-native-receiver">${orderSectionTitle('deliveryInformation','local_shipping_outlined')}<div class="order-info-panel">${entries.length?entries.map(([k,v])=>orderInfoRow(k,v)).join(''):`<p class="order-empty-info">${mi('info_outline')}${escape(t('noDeliveryInformationProvided'))}</p>`}</div></section>`;
}
function sellerReturnMarkup(record){
 const fields=[['recipient',record?.returnRecipientName],['phone',record?.returnRecipientPhone],['address',record?.returnAddress]].filter(([,value])=>value!=null);
 return `<section class="panel order-native-seller-return"><h2>${escape(t('sellerReturnRecipientInfo'))}</h2><div class="order-seller-return-fields">${fields.length?fields.map(([key,value])=>orderInfoRow(key,value)).join(''):`<p class="muted">${escape(t('noReturnAddress'))}</p>`}</div>${record?.sellerReply?`<div class="order-seller-return-reply"><h3>${escape(t('sellerReply'))}</h3><p>${escape(record.sellerReply)}</p></div>`:''}</section>`;
}
export function orderDetailMarkup(result){
 const o=result.order,items=list(result.orderItems?.length?result.orderItems:o.orderItems);
 const address=o.status==='RETURN_APPROVED'?sellerReturnMarkup(result.returnRecord):receiverMarkup(o,result.deliveryDetail)+deliverySupplementMarkup(o,result.deliveryDetail);
 const returnRecord=result.returnRecord?`<a class="secondary order-return-details-link" href="${route('/orders/'+encodeURIComponent(o.id)+'/return?kind=VIEW_RETURN_DETAILS')}">${mi('info_outline')}${escape(t('viewReturnDetails'))}</a>`:'';
 return `<div class="order-native-detail">${actionsMarkup(o,result)}${progressMarkup(o)}<div class="order-native-detail-grid"><div>${orderItemsMarkup(o,items,{heading:true})}${recordsMarkup(o)}</div><div>${['DISPUTE_OPENED','DISPUTE_RESPONDED','DISPUTE_RESOLVED'].includes(o.status)?orderDisputeMarkup(result.dispute):''}${address}${orderShippingMarkup(o)}${returnRecord}</div></div></div>`;
}
