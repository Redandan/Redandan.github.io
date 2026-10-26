import * as api from'./api.js';
import{createBuyerPresence}from'./presence-core.js';
const hintKey='agora.buyer.presence.v1';
// Presence reads only existence. The shared session core still owns all proof,
// cohort selection, credential snapshots and replacement fences.
const existingKeys=['flutter.auth_token','flutter.refresh_token','access_token','refresh_token','agora.webSession.v2','agora.webSession.adopted','agora.webSession.selection','agora.webSession.sourceSelection'];
let state='idle',paint=0,serial=0;const timers=new Map();
function hasHint(){try{return localStorage.getItem(hintKey)==='known'||existingKeys.some(k=>!!localStorage.getItem(k));}catch{return false;}}
function schedule(run){const id=++serial;const first=requestAnimationFrame(()=>{const second=requestAnimationFrame(()=>{if(!timers.has(id))return;const timeout=setTimeout(()=>{if(!timers.delete(id))return;run();},1200);timers.set(id,()=>clearTimeout(timeout));});timers.set(id,()=>cancelAnimationFrame(second));});timers.set(id,()=>cancelAnimationFrame(first));return id;}
function cancel(id){timers.get(id)?.();timers.delete(id);}
const presence=createBuyerPresence({visible:()=>document.visibilityState==='visible'&&!window.__AGORA_WEB_SESSION_OAUTH_ENTRY__&&!window.__AGORA_WEB_SESSION_BINDING_ENTRY__&&!window.__AGORA_BUYER_LEGACY_OAUTH_ENTRY__,hasHint,schedule,cancel,confirm:async()=>{const value=await api.session();dispatchEvent(new Event('agora-buyer-session-confirmed'));return value;},start:()=>api.command('realtime.start'),remember:value=>{try{if(value)localStorage.setItem(hintKey,'known');else localStorage.removeItem(hintKey);}catch{}},report:value=>{state=value;}});
export function buyerPageReady(){paint++;presence.ready();}
addEventListener('agora-buyer-auth',()=>presence.invalidate({retry:true}));
addEventListener('storage',event=>{if(event.key===null||event.key===hintKey||existingKeys.includes(event.key))presence.invalidate();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')presence.invalidate();else presence.ready();});
addEventListener('pagehide',()=>presence.invalidate());
addEventListener('pageshow',()=>{if(paint)presence.ready();});
window.__AGORA_BUYER_PRESENCE_DIAGNOSTICS__=()=>({state,scheduled:timers.size,pagePaints:paint});
