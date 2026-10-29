// A single admitted account's view state, held only in this document's memory.
// It is never authentication proof, an HTTP cache, or persistent order storage.
export function createOrderListMemory({now=()=>Date.now(),ttl=Infinity,maxRows=200}={}){
 let generation=0,contentRevision=0,owner=null,saved=null,node=null;
 const copy=value=>JSON.parse(JSON.stringify(value));
 function clear(){generation++;contentRevision=0;owner=null;saved=null;node=null;}
 function begin(state,locale){
  const buyer=state?.user?.id,revision=state?.revision;
  const valid=state?.authenticated===true&&state.availability==='authenticated'&&!state.requiresReload&&Number.isSafeInteger(buyer)&&buyer>0&&Number.isSafeInteger(revision)&&revision>=0&&['legacy','cookie'].includes(state.mode)&&typeof locale==='string';
  const key=valid?JSON.stringify([state.mode,buyer,revision,locale]):null;
  if(key!==owner){generation++;contentRevision=0;owner=key;saved=null;node=null;}
  return Object.freeze({key,buyer,generation});
 }
 const current=ticket=>!!ticket?.key&&ticket.key===owner&&ticket.generation===generation;
 function restore(ticket){
  if(!current(ticket)||!saved)return null;
  if(now()-saved.readAt<0||now()-saved.readAt>ttl){saved=null;node=null;return null;}
  return {...copy(saved),node};
 }
 function remember(ticket,view,element=null){
  if(!current(ticket))return false;
  if(!view?.loaded||!Number.isFinite(view.readAt)||now()-view.readAt<0||now()-view.readAt>ttl||!Array.isArray(view.rows)||view.rows.length>maxRows||!view.rows.every(row=>row?.buyerId===ticket.buyer)||!Number.isInteger(view.page)||view.page<1||view.page>10){saved=null;node=null;return false;}
  saved={...copy(view),refreshRequired:view.refreshRequired===true||(view.contentRevision??0)!==contentRevision};node=element;return true;
 }
 function canRestore(state,locale){const ticket=begin(state,locale);return current(ticket)&&!!saved&&!!node&&now()>=saved.readAt&&now()-saved.readAt<=ttl;}
 function invalidate(buyer){if(buyer!=null&&JSON.parse(owner||'null')?.[1]!==buyer)return;contentRevision++;if(saved)saved.refreshRequired=true;}
 return Object.freeze({begin,restore,remember,clear,canRestore,invalidate,revision:()=>contentRevision});
}
export const orderListMemory=createOrderListMemory();
export function orderViewEvent(event){try{const value=JSON.parse(event.detail);return /^(?:orders\.invalidate|ORDER_[A-Z_]+|NEW_DELIVERY_ORDER|DELIVERY_ORDER_[A-Z_]+)$/.test(value.event)?value:null;}catch{return null;}}
export const orderViewStorageChanged=key=>key==null||/^(?:flutter\.(?:auth_token|refresh_token)$|access_token$|refresh_token$|agora\.(?:webSession|guestCart)\.)/.test(key);
