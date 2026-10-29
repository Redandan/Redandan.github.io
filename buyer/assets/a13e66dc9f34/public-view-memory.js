// Public presentation only. This document owns the nodes, never session proof.
export function createPublicViewMemory({maxViews=8,maxElements=12000,now=()=>Date.now()}={}){
 let epoch=0,serial=0,revision=0;const entries=new Map(),tickets=new Map(),copy=v=>JSON.parse(JSON.stringify(v));
 const current=t=>t?.epoch===epoch&&tickets.get(t.key)===t.serial;
 const clear=()=>{epoch++;revision=0;entries.clear();tickets.clear();};
 return Object.freeze({
  begin(key){const t=Object.freeze({key,epoch,serial:++serial});tickets.delete(key);tickets.set(key,t.serial);while(tickets.size>maxViews*4){const old=[...tickets.keys()].find(k=>!entries.has(k));if(old===undefined)break;tickets.delete(old);}return t;},
  has:key=>entries.has(key),discard(t){if(current(t)){entries.delete(t.key);tickets.delete(t.key);}},
  restore(t){if(!current(t))return null;const v=entries.get(t.key);if(!v||v.state.readAt>now())return null;entries.delete(t.key);entries.set(t.key,v);return{...copy(v.state),node:v.node};},
  remember(t,state,node){if(!current(t))return false;if(!state?.loaded||node?.nodeType!==1||!Number.isFinite(state.readAt)||state.readAt<0||state.readAt>now()){entries.delete(t.key);return false;}const size=node.querySelectorAll?.('*').length??1;if(size>maxElements){entries.delete(t.key);return false;}entries.delete(t.key);entries.set(t.key,{state:{...copy(state),refreshRequired:state.refreshRequired===true||state.revision!==revision},node,size});while(entries.size>maxViews||[...entries.values()].reduce((n,v)=>n+v.size,0)>maxElements){const key=entries.keys().next().value;entries.delete(key);tickets.delete(key);}return entries.has(t.key);},
  clear,invalidate(){revision++;for(const v of entries.values())v.state.refreshRequired=true;},revision:()=>revision,
 });
}
export const publicViewMemory=createPublicViewMemory();
export function publicViewKey(target,locale){const query=new URLSearchParams(target.query);if(target.path==='/search'&&!query.has('keyword')&&query.has('q')){query.set('keyword',query.get('q'));query.delete('q');}query.sort();const size=/^\/stores\/[1-9][0-9]*$/.test(target.path)?(innerWidth>=1100?24:innerWidth>=650?16:10):'';return JSON.stringify([locale,target.path,query.toString(),size]);}
export const canRestorePublicView=(target,locale)=>/^\/(?:products\/[1-9][0-9]*|stores\/[1-9][0-9]*|search)$/.test(target.path)&&publicViewMemory.has(publicViewKey(target,locale));
for(const type of['agora-buyer-auth','pagehide'])globalThis.addEventListener?.(type,()=>publicViewMemory.clear());
globalThis.addEventListener?.('storage',event=>{if(event.key==null||event.key==='flutter.userinfo'||/^(?:flutter\.(?:auth_token|refresh_token)$|access_token$|refresh_token$|agora\.(?:webSession|guestCart)\.)/.test(event.key))publicViewMemory.clear();});
globalThis.addEventListener?.('agora-buyer-orders-changed',()=>publicViewMemory.invalidate());
