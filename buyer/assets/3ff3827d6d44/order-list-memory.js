// A single admitted account's view state, held only in this document's memory.
// It is never authentication proof, an HTTP cache, or persistent order storage.
export function createOrderListMemory({now=Date.now,ttl=300000,maxRows=200}={}){
 let generation=0,owner=null,saved=null;
 const copy=value=>JSON.parse(JSON.stringify(value));
 function clear(){generation++;owner=null;saved=null;}
 function begin(state,locale){
  const buyer=state?.user?.id,revision=state?.revision;
  const valid=state?.authenticated===true&&state.availability==='authenticated'&&!state.requiresReload&&Number.isSafeInteger(buyer)&&buyer>0&&Number.isSafeInteger(revision)&&revision>=0&&['legacy','cookie'].includes(state.mode)&&typeof locale==='string';
  const key=valid?JSON.stringify([state.mode,buyer,revision,locale]):null;
  if(key!==owner){generation++;owner=key;saved=null;}
  return Object.freeze({key,buyer,generation});
 }
 const current=ticket=>!!ticket?.key&&ticket.key===owner&&ticket.generation===generation;
 function restore(ticket){
  if(!current(ticket)||!saved)return null;
  if(now()-saved.readAt<0||now()-saved.readAt>ttl){saved=null;return null;}
  return copy(saved);
 }
 function remember(ticket,view){
  if(!current(ticket)||!view?.loaded||!Number.isFinite(view.readAt)||now()-view.readAt<0||now()-view.readAt>ttl||!Array.isArray(view.rows)||view.rows.length>maxRows||!view.rows.every(row=>row?.buyerId===ticket.buyer)||!Number.isInteger(view.page)||view.page<1||view.page>10)return false;
  saved=copy(view);return true;
 }
 return Object.freeze({begin,restore,remember,clear});
}
export const orderListMemory=createOrderListMemory();
