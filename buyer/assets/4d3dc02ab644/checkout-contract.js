// Original native cart uses store identity before seller identity.
export function cartStoreKey(item){if(item.storeId!=null)return'store:'+item.storeId;if(item.sellerId!=null)return'seller:'+item.sellerId;const store=String(item.storeName||'').trim(),seller=String(item.sellerName||'').trim();return store?'storeName:'+store:seller?'sellerName:'+seller:'item:'+(item.id??item.productId);}
export function singleStore(items){return new Set(items.map(cartStoreKey)).size<=1;}
const services={sevenEleven:'SEVEN_ELEVEN',familyMart:'FAMILY_MART',hilife:'HILIFE',okMart:'OK_MART',homeDelivery:'HOME_DELIVERY',postal:'POSTAL'};
export function shipping(product){
 const options=[];
 for(const[key,serviceType]of Object.entries(services))for(const group of Array.isArray(product.shippingOptions?.[key])?product.shippingOptions[key]:[]){
  if(!group||typeof group!=='object')continue;
  for(const address of Array.isArray(group.addresses)?group.addresses:[]){if(!address||address.isAvailable===false||!Number.isInteger(address.addressId)||address.addressId<1)continue;options.push({...address,serviceType,shippingFee:group.shippingFee,estimatedDays:group.estimatedDays,shippingCompany:group.shippingCompany,isDefault:address.isDefault??group.isDefault,remark:group.remark});}
 }
 return options;
}
export function buyerSchema(product){try{const fields=JSON.parse(product.buyerInfoRequiredJson||'[]');return Array.isArray(fields)?fields.filter(f=>f&&typeof f==='object'&&!Array.isArray(f)&&typeof f.key==='string'&&f.key).map(f=>({key:f.key,label:typeof f.label==='string'&&f.label?f.label:f.key,required:f.required===true,type:typeof f.type==='string'?f.type:null})):[];}catch{return[];}}
export function digitalInfo(product,data){
 const schema=buyerSchema(product);if(schema.length){const entries=schema.map(f=>{const value=String(data[`info-${product.id}-${f.key}`]||'').trim();if(f.required&&!value)throw Error(`請填寫 ${f.label}。`);return[f.key,value];});const value=Object.fromEntries(entries.filter(([,value])=>value));return Object.keys(value).length?JSON.stringify(value):null;}
 const raw=String(data[`raw-${product.id}`]||'').trim();if(!raw)return null;const value=JSON.parse(raw);if(!value||typeof value!=='object'||Array.isArray(value))throw Error('服務資訊需為 JSON 物件。');return JSON.stringify(value);
}
