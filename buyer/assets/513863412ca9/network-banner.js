import {uiText} from './ui-text.js';
import {escape} from './ui.js';

// Connectivity presentation only. A successful static-origin probe is not a
// backend/payment receipt. Never reload, replay a command or replace page data.
export function startBuyerNetwork(){
 if(document.querySelector('#buyer-network'))return;
 const region=document.createElement('aside');region.id='buyer-network';region.hidden=true;
 region.setAttribute('role','status');region.setAttribute('aria-live','polite');region.setAttribute('aria-atomic','true');document.body.append(region);
 let state='offline',problem=!navigator.onLine,busy=false,revision=0,controller,dismissed=false,previousFocus;
 const url=new URL('../../version.json',import.meta.url);
 function render(){
  const focused=region.contains(document.activeElement)?document.activeElement?.dataset.networkAction:null;
  const title=state==='restored'?'網站目前可以連線':state==='checking'?'正在檢查連線…':state==='unverified'?'尚無法確認網站連線':'連線已中斷';
  const detail=state==='restored'?'網站可以讀取；若頁面資料仍未更新，請使用頁面內的重新讀取。':state==='checking'?'正在確認網站是否可讀取，不會重送任何操作。':'目前頁面與未送出的內容會保留；連線恢復後，請確認原操作結果。';
  if(region.hidden&&!dismissed&&!region.contains(document.activeElement))previousFocus=document.activeElement;region.dataset.network=state;region.hidden=dismissed;
  region.innerHTML=`<h2>${escape(uiText(title))}</h2><p>${escape(uiText(detail))}</p><div class="network-controls">${state==='restored'?'':`<button class="secondary" type="button" data-network-action="retry"${busy?' disabled aria-busy="true"':''}>${escape(uiText('重試連線'))}</button>`}<button class="secondary" type="button" data-network-action="dismiss">${escape(uiText('關閉'))}</button></div>`;
  if(focused&&!dismissed){const target=region.querySelector(`[data-network-action="${focused}"]:not(:disabled)`)||region.querySelector('[data-network-action=dismiss]');target?.focus({preventScroll:true});}
 }
 function offline(){revision++;controller?.abort();busy=false;problem=true;dismissed=false;state='offline';render();}
 async function probe(){
  if(busy)return;if(!navigator.onLine){offline();return;}
  busy=true;problem=true;dismissed=false;state='checking';const own=++revision,probeController=new AbortController();controller=probeController;render();
  const timeout=setTimeout(()=>probeController.abort(),8000);
  try{
   const request=new URL(url);request.searchParams.set('connection-check',String(Date.now()));
   const response=await fetch(request,{cache:'no-store',credentials:'omit',headers:{Accept:'application/json'},signal:probeController.signal});
   if(!response.ok||!response.headers.get('content-type')?.includes('application/json'))throw Error('Unverified origin');
   const value=await response.json();if(!/^\d+\.\d+\.\d+$/.test(value?.version||'')||!/^[a-f0-9]{40}$/.test(value?.source_commit||''))throw Error('Unverified origin');
   if(own!==revision)return;state='restored';problem=false;
  }catch{if(own!==revision)return;state='unverified';}
  finally{clearTimeout(timeout);if(own===revision){busy=false;render();}}
 }
 region.addEventListener('click',event=>{const action=event.target.closest('[data-network-action]')?.dataset.networkAction;if(action==='dismiss'){dismissed=true;const restore=region.contains(document.activeElement);region.hidden=true;if(restore&&previousFocus?.isConnected)previousFocus.focus({preventScroll:true});}else if(action==='retry')void probe();});
 addEventListener('offline',offline);
 addEventListener('online',()=>{if(problem)void probe();});
 addEventListener('pagehide',()=>{revision++;controller?.abort();busy=false;});
 addEventListener('pageshow',event=>{if(event.persisted&&problem){if(navigator.onLine)void probe();else offline();}});
 if(problem)offline();
}
