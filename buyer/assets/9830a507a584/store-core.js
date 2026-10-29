import{catalogText as t,categoryValue}from'./catalog-core.js';

// Retired seed URLs do not identify uploaded store media. Keep the existing
// cover/avatar fallback without issuing known missing-image requests.
export function isLegacyStoreImage(value){
 if(typeof value!=='string'||!value.trim())return false;
 try{const url=new URL(value,'https://agoramarketapi.purrtechllc.com');return url.origin==='https://agoramarketapi.purrtechllc.com'&&/^\/(?:api\/)?images\/mock_data_store_(?:cover|logo)\.jpg$/.test(url.pathname);}catch{return false;}
}

export const storeSorts={latest:['createdAt','DESC'],price:['price','ASC'],bestSelling:['salesCount','DESC'],rating:['rating','DESC']};
export function storeSearchBody(id,{category='',keyword='',sort='latest',size=10}={}){
 const [sortBy,sortDirection]=Object.hasOwn(storeSorts,sort)?storeSorts[sort]:storeSorts.latest;
 const body={sellerId:Number(id),page:1,size,sortBy,sortDirection},value=categoryValue(category);
 if(value)body.category=value;if(keyword.trim())body.keyword=keyword.trim();return body;
}
const number=value=>Number.isFinite(Number(value))?Number(value):0;
export function sortStoreProducts(values,sort='latest'){
 const date=value=>Number.isFinite(Date.parse(value))?Date.parse(value):0;
 return[...values].sort((a,b)=>{
  const compare=sort==='price'?number(a.priceUsdt??a.price)-number(b.priceUsdt??b.price):sort==='bestSelling'?number(b.salesCount)-number(a.salesCount):sort==='rating'?number(b.rating)-number(a.rating):date(b.createdAt)-date(a.createdAt);
  return compare||number(b.id)-number(a.id);
 });
}
export function storeRating(store){
 if(store.ratingCount===0)return{value:t('productDetailNoReviews'),hasRating:false};
 if(Number.isInteger(store.ratingCount)&&store.ratingCount>0&&typeof store.rating==='number'&&Number.isFinite(store.rating)&&store.rating>=0&&store.rating<=5)return{value:store.rating.toFixed(1),hasRating:true};
 return{value:t('productStoreRatingPending'),hasRating:false};
}
// Equivalent to original core/utils/share_url_builder.dart. No session is loaded.
export function shareUrl({type,id,origin,isTelegram=false,referrerGroupId=null,organic=false}){
 if(!['store','product'].includes(type)||!Number.isSafeInteger(Number(id))||Number(id)<=0)throw Error('Invalid share entity');
 if(isTelegram){const ref=Number.isSafeInteger(referrerGroupId)?'_ref_'+(referrerGroupId<0?'m'+Math.abs(referrerGroupId):referrerGroupId):'';return'https://t.me/agora_login_bot/store?startapp='+(type==='product'?'product_':'seller_')+id+ref;}
 const url=new URL('/preview/'+(type==='product'?'products/':'store/')+id,new URL(origin).origin);
 if(organic){url.searchParams.set('utm_source','product_share');url.searchParams.set('utm_medium','organic');url.searchParams.set('utm_campaign','product_detail');}return url.href;
}
export function storeShareText(store,id,environment){
 let text=t('shareStoreTitle',{title:store.name??t('unknownStore')});
 if(typeof store.rating==='number'&&Number.isFinite(store.rating)){text+='\n\n'+t('shareStoreRating',{rating:store.rating.toFixed(1)});if(store.ratingCount!=null)text+=' '+t('shareStoreRatingCount',{count:store.ratingCount});}
 return text+'\n'+t('shareStoreDetails',{url:shareUrl({type:'store',id,...environment})});
}
