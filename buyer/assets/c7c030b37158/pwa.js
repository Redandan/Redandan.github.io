import{retireLegacyRuntime}from'./legacy-retirement.js';
const scope=new URL('../../',import.meta.url);let registration,started=false,state={supported:'serviceWorker'in navigator,available:false,waiting:false,offline:!navigator.onLine};
const emit=()=>dispatchEvent(new CustomEvent('agora-buyer-pwa',{detail:{...state}}));
let installEvent;
export const installState=()=>({available:!!installEvent,installed:matchMedia('(display-mode: standalone)').matches||navigator.standalone===true});
addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;dispatchEvent(new Event('agora-buyer-install'));});
addEventListener('appinstalled',()=>{installEvent=null;dispatchEvent(new Event('agora-buyer-install'));});
export async function promptInstall(){const event=installEvent;if(!event)return{outcome:'unavailable',...installState()};installEvent=null;await event.prompt();const choice=await event.userChoice;dispatchEvent(new Event('agora-buyer-install'));return{outcome:choice.outcome,...installState()};}
export const pwaState=()=>({...state});
export async function checkForUpdate(){await registration?.update();return pwaState();}
// The ordinary update path waits until old windows are closed. This helper is
// reserved for an explicit application-settings action; no automatic reload.
export async function activateUpdate(){if(!registration?.waiting)return false;registration.waiting.postMessage({type:'activate-buyer-update'});return true;}
export function startPwa(){
 if(started||!state.supported||!isSecureContext)return;started=true;
 const start=async()=>{try{registration=await navigator.serviceWorker.register(new URL('buyer_service_worker.js',scope),{scope:scope.href,updateViaCache:'none'});state.available=true;const read=()=>{state.waiting=!!registration.waiting;emit();};read();registration.addEventListener('updatefound',()=>{const next=registration.installing;next?.addEventListener('statechange',read);});retireLegacyRuntime().catch(()=>{});}catch{state.available=false;emit();}};
 // Rendering the first document gets priority over registration/download work.
 requestAnimationFrame(()=>requestAnimationFrame(()=>{if('requestIdleCallback'in window)requestIdleCallback(start,{timeout:3000});else setTimeout(start,1000);}));
 for(const type of['online','offline'])addEventListener(type,()=>{state.offline=!navigator.onLine;emit();});
}
