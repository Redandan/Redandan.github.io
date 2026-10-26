import{walletFixed}from'./wallet-view-core.js';
export const depositQuickAmounts=Object.freeze([10,50,100,500,1000]);
export function depositStatusKey(value){const keys={PENDING:'depositStatusPending',COMPLETED:'depositStatusCompleted',FAILED:'depositStatusFailed'};return Object.hasOwn(keys,value)?keys[value]:'depositStatusUnknown';}
export function depositCanCancel(value){return value?.status==='PENDING'&&typeof(value.id??value.rechargeId)==='string'&&!!(value.id??value.rechargeId);}
export function depositBalance(value){return typeof value!=='number'||!Number.isFinite(value)?'—':'$'+walletFixed(value);}
export function depositCountdown(value,now=Date.now()){
 const expiry=typeof value==='string'?Date.parse(value):NaN;if(!Number.isFinite(expiry))return null;
 const seconds=Math.floor((expiry-now)/1000);if(seconds<0)return{expired:true,time:''};
 return{expired:false,time:[Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(value=>String(value).padStart(2,'0')).join(':')};
}
export function depositSuggestions(value){return Array.isArray(value)?[...new Set(value.filter(number=>typeof number==='number'&&Number.isFinite(number)&&number>0&&Number.isSafeInteger(Math.round(number*100))&&Math.abs(number*100-Math.round(number*100))<.00001))].slice(0,20):[];}
