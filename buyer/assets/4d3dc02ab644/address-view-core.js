export const addressProviders=[
 {key:'homeDelivery',type:'HOME_DELIVERY',name:'serviceProviderHomeDelivery',service:'shippingHomeDelivery',description:'serviceDescriptionHomeDelivery',icon:'local_shipping'},
 {key:'sevenEleven',type:'SEVEN_ELEVEN',name:'serviceProviderSevenEleven',service:'shippingSevenElevenPickup',description:'serviceDescriptionStorePickup',icon:'store'},
 {key:'familyMart',type:'FAMILY_MART',name:'serviceProviderFamilyMart',service:'shippingFamilyMartPickup',description:'serviceDescriptionStorePickup',icon:'store'},
 {key:'hilife',type:'HILIFE',name:'serviceProviderHiLife',service:'shippingHilifePickup',description:'serviceDescriptionStorePickup',icon:'store'},
 {key:'okMart',type:'OK_MART',name:'serviceProviderOkMart',service:'shippingOkMartPickup',description:'serviceDescriptionStorePickup',icon:'store'}
];
// Original UnifiedAddressManagementSelector groups legacy addresses by store
// name. This presentation never changes an address's actual SDK serviceType.
export function addressProvider(address){const name=String(address.storeName||'').toLowerCase();if(!name)return'homeDelivery';if(['7-11','7-eleven','seven','統一'].some(value=>name.includes(value)))return'sevenEleven';if(['全家','familymart','family'].some(value=>name.includes(value)))return'familyMart';if(['萊爾富','hilife','life'].some(value=>name.includes(value)))return'hilife';if(name.includes('ok')&&(name.includes('超商')||name.includes('mart')))return'okMart';return'sevenEleven';}
export const addressGroups=addresses=>addressProviders.map(provider=>({...provider,addresses:addresses.filter(address=>addressProvider(address)===provider.key)}));
export const addressClipboard=address=>[address.recipientName,address.recipientPhone,address.storeName,address.fullAddress].map(value=>String(value??'').trim()).filter(Boolean).join('\n');
// Keep the full pickup address visible even when legacy detailedAddress is empty.
export const addressDisplay=address=>address.formattedAddress||address.fullAddress||[address.recipientName,address.recipientPhone,address.postalCode,address.city,address.district,address.detailedAddress].filter(value=>typeof value==='string'&&value).join(' ');
export const validAddressType=value=>addressProviders.some(provider=>provider.type===value);
