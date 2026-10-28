import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t}from'./order-ui.js';

export const orderSectionTitle=(key,icon)=>`<div class="order-section-title"><span>${mi(icon)}</span><h2>${escape(t(key))}</h2></div>`;
export function orderInfoRow(key,value,{copy=false,copyAction='copy-order-id'}={}){
 return `<div class="order-info-row"><span>${escape(t(key))}</span><div>${escape(value??'—')}${copy?`<button type="button" class="order-copy" data-action="${escape(copyAction)}" aria-label="${escape(t('copyLabel',{label:t(key)}))}">${mi('content_copy')}</button>`:''}</div></div>`;
}
