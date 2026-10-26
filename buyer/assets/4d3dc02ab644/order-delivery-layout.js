import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t}from'./order-ui.js';
import{orderSectionTitle,orderInfoRow}from'./order-layout-common.js';

const shippingStatuses=new Set(['SHIPPED','DELIVERY_ASSIGNING','DELIVERY_ASSIGNED','DELIVERY_EN_ROUTE_TO_PICKUP','DELIVERY_PICKUP_DELAYED','DELIVERY_PICKED_UP','DELIVERY_EN_ROUTE_TO_BUYER','DELIVERY_DELIVERY_DELAYED','DELIVERY_COMPLETED','COMPLETED_FINAL']);
const companies={SEVEN_ELEVEN:'sevenEleven',FAMILY_MART:'familyMart',HILIFE:'hilife',OK_MART:'okMart',BLACK_CAT:'shippingCompanyBlackCat',HCT:'shippingCompanyHCT',KERRY:'shippingCompanyKerry',SF_EXPRESS:'shippingCompanySFExpress',HOME_DELIVERY_EXPRESS:'shippingCompanyHomeDeliveryExpress',TAIWAN_HOME_DELIVERY:'shippingCompanyTaiwanHomeDelivery',PLATFORM_DELIVERY:'serviceProviderPlatformDelivery',CHUNGHWA_POST:'optimizedLogisticsChunghwaPost'};
// These are the original LogisticsTrackingService destinations. No URL from an
// order or delivery response is allowed to become an external navigation target.
export function orderTrackingUrl(company,tracking){
 if(typeof tracking!=='string'||!tracking.trim())return '';
 const number=encodeURIComponent(tracking.trim());
 return {BLACK_CAT:'https://www.t-cat.com.tw/internet/ec/bc_020001.jsp?no='+number,HCT:'https://www.hct.com.tw/',KERRY:'https://www.kerrytj.com/',SF_EXPRESS:'https://www.sf-express.com/tw/tc/dynamic_function/waybill/#search/bill-number/'+number,CHUNGHWA_POST:'https://postserv.post.gov.tw/pstmp/search_mail.jsp',SEVEN_ELEVEN:'https://www.7-11.com.tw/',FAMILY_MART:'https://www.family.com.tw/',HILIFE:'https://www.hilife.com.tw/',OK_MART:'https://www.okmart.com.tw/'}[company]||'';
}
export function deliverySupplementMarkup(order,delivery){
 if(!delivery)return '';
 const fields=[['pickupAddress',delivery.pickupAddress],['pickupPostalCode',delivery.pickupPostalCode]].filter(([,value])=>value!=null),platform=order.shippingCompany==='PLATFORM_DELIVERY';
 return `<section class="panel order-native-delivery">${orderSectionTitle('deliverySupplement','inventory_2_outlined')}${fields.length?`<div class="order-info-panel">${fields.map(([key,value])=>orderInfoRow(key,value)).join('')}</div>`:platform?'':`<div class="order-info-panel"><p class="order-empty-info">${mi('info_outline')}${escape(t('noDeliverySupplementInfo'))}</p></div>`}${platform?`<p class="order-platform-hint">${mi('info_outline')}${escape(t('platformDeliveryProgressHint'))}</p>`:''}</section>`;
}
export function orderShippingMarkup(order){
 if(!shippingStatuses.has(order.status))return '';
 const tracking=typeof order.trackingNumber==='string'?order.trackingNumber.trim():'',url=orderTrackingUrl(order.shippingCompany,tracking),company=order.shippingCompany==null?'-':t(companies[order.shippingCompany]||'shippingCompanyPending');
 return `<section class="panel order-native-shipping"><h2>${escape(t('shippingInformation'))}</h2>${orderInfoRow('logisticsName',company)}${orderInfoRow('trackingNumber',tracking||'-',{copy:!!tracking,copyAction:'copy-tracking'})}${url?`<a class="order-tracking-link" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${mi('open_in_new')}${escape(t('openWebPage'))}</a>`:''}</section>`;
}
