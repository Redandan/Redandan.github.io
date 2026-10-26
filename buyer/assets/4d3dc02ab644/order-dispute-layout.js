import{escape,list,imageUrl,button}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t,orderDate}from'./order-ui.js';
import{orderInfoRow}from'./order-layout-common.js';

const statuses={PENDING:['disputeStatusPendingPlatformReview','tertiary','pending'],COMPLETED:['completed','primary','check_circle'],REJECTED:['rejected','error','cancel']};
const outcomes={BUYER_FAULT:['disputeOutcomeBuyerFault','error'],SELLER_FAULT:['disputeOutcomeSellerFault','primary'],BOTH_FAULT:['disputeOutcomeBothFault','tertiary'],NO_FAULT:['disputeOutcomeNoFault','secondary']};
const section=(key,content)=>`<div class="order-dispute-section" data-section="${key}"><h3>${escape(t(key))}</h3>${content}</div>`;
function images(key,urls){
 const values=list(urls).map(imageUrl).filter(Boolean);
 return `<div class="order-dispute-images"><h4>${escape(t(key))}</h4>${values.length?`<div>${values.map(url=>button(t('imagePreview'),'order-image-preview','order-image-thumb',`data-url="${escape(url)}"`).replace('>'+escape(t('imagePreview')),'><img src="'+escape(url)+'" alt="'+escape(t('imagePreview'))+'" loading="lazy">')).join('')}</div>`:`<p class="order-dispute-no-images">${mi('image_not_supported')}${escape(t('noImages'))}</p>`}</div>`;
}
export function orderDisputeMarkup(dispute){
 if(!dispute)return '';
 const [status,tone,icon]=statuses[dispute.status]||['statusPendingConfirmation','muted','help'],[outcome,outcomeTone]=outcomes[dispute.outcome]||[null,'muted'];
 return `<section class="panel order-native-dispute" data-tone="${tone}"><div class="order-dispute-title">${mi('gavel')}<h2>${escape(t('disputeInfo'))}</h2><span class="order-dispute-status">${mi(icon)}${escape(t(status))}</span></div>${section('disputeBuyerReport',(dispute.description?orderInfoRow('description',dispute.description):'')+images('disputeEvidenceImage',dispute.imageUrls))}${dispute.sellerReply?section('sellerReply',`<p>${escape(dispute.sellerReply)}</p>${list(dispute.sellerReplyImageUrls).length?images('disputeSellerImage',dispute.sellerReplyImageUrls):''}`):''}${dispute.adminComment?section('disputePlatformNote',`<p>${escape(dispute.adminComment)}</p>`):''}${dispute.outcome!=null?section('disputeOutcomeSection',`<div class="order-dispute-outcome" data-tone="${outcomeTone}">${mi('check_circle')}<div><h4>${escape(t('disputeOutcome'))}</h4><strong>${escape(outcome?t(outcome):dispute.outcome)}</strong></div></div>`):''}${section('disputeTimeInfo',orderInfoRow('createdAt',orderDate(dispute.createdAt))+orderInfoRow('updatedAt',orderDate(dispute.updatedAt))+(dispute.resolvedAt?orderInfoRow('resolvedAt',orderDate(dispute.resolvedAt)):''))}</section>`;
}
