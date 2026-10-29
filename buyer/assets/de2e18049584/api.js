import{uiText}from'./ui-text.js';
import{currentLocale}from'./locale.js';
const production='https://agoramarketapi.purrtechllc.com/api';
export const apiBase=location.hostname==='agoramarket-test.141-148-142-175.sslip.io'?location.origin+'/api':production;
let bridgePromise,loadedBridge,pageEpoch=0;
export function beginPage(){pageEpoch++;if(loadedBridge)loadedBridge.command('page.change',JSON.stringify({page:pageEpoch})).catch(()=>{});return pageEpoch;}
async function bridge(){
  if(!bridgePromise){
    // Keep an initialized SDK when only page admission failed. An invalid or
    // unavailable script must leave no rejected singleton that traps Retry.
    const core=loadedBridge?Promise.resolve(loadedBridge):new Promise((resolve,reject)=>{
      const el=document.createElement('script');el.src=new URL('./runtime/session.js',import.meta.url).href;el.async=true;
      el.onload=()=>{const value=window.AgoraBuyerBridge;if(typeof value?.command!=='function'){el.remove();reject(Error(uiText('登入服務尚未就緒')));return;}loadedBridge=value;resolve(value);};
      el.onerror=()=>{el.remove();reject(Error(uiText('無法載入登入服務，請重試。')));};document.head.append(el);
    });
    const attempt=core.then(async value=>{await value.command('page.change',JSON.stringify({page:pageEpoch}));return value;});
    bridgePromise=attempt;
    attempt.catch(()=>{if(bridgePromise===attempt)bridgePromise=null;});
  }
  return bridgePromise;
}
export class BuyerApiError extends Error{constructor(message,code,status){super(message);this.code=code;this.status=status;}}
async function pageCommand(ownerPage,action,data={}){
  if(ownerPage!==pageEpoch)throw new DOMException('Page superseded','AbortError');
  const core=await bridge();
  if(ownerPage!==pageEpoch)throw new DOMException('Page superseded','AbortError');
  if(action==='security.passkeyChange'||action==='auth.passkeySignup'||action==='auth.provider'&&data.provider==='passkey'||data.kind==='PASSKEY')await import('./passkey_helper.js');
  if(ownerPage!==pageEpoch)throw new DOMException('Page superseded','AbortError');
  const changesOrders=['checkout.submit','orders.action','orders.submitAfterSales','orders.recoverAfterSales','orders.review'].includes(action);
  const invalidate=()=>{if(changesOrders)globalThis.dispatchEvent?.(new Event('agora-buyer-orders-changed'));};
  let raw;invalidate();try{raw=await core.command(action,JSON.stringify({...data,_buyerPage:ownerPage}));}finally{invalidate();}
  // Logout returns only its acknowledgement after its own auth event retires the page.
  const result=JSON.parse(raw);
  const securityLogout=['security.passwordChange','security.passkeyChange','bindings.change','security.devicesLogoutCurrent','security.devicesLogoutAll'].includes(action)&&result.ok&&result.data?.requiresLogin===true;
  const admittedCall=action.startsWith('call.')&&result.ok&&typeof result.data?.handle==='string'&&(result.data.handle===data.handle||['call.prepare','call.state'].includes(action));
  if(ownerPage!==pageEpoch&&action!=='session.logout'&&!securityLogout&&!admittedCall)throw new DOMException('Page superseded','AbortError');
  if(!result.ok)throw new BuyerApiError(result.message||uiText('操作尚未完成'),result.code,result.status);
  return result.data;
}
export const command=(action,data={})=>pageCommand(pageEpoch,action,data);
export function forPage(ownerPage,signal){
  const scoped=(action,data={})=>pageCommand(ownerPage,action,data);
  return Object.freeze({command:scoped,session:()=>scoped('session.state'),request:(path,{method='GET',body,query}={})=>scoped('api.request',{path,method,body,query}),publicRequest:(path,options={})=>{if(ownerPage!==pageEpoch)throw new DOMException('Page superseded','AbortError');return publicRequest(path,{signal,...options});}});
}
// Synchronous presentation eligibility from the already initialized SDK.
// It cannot initialize/recover a session or dispatch an authenticated request.
export function presentationSession(){try{return JSON.parse(loadedBridge?.presentationState?.()||'null');}catch{return null;}}
export const session=()=>command('session.state');
export const request=(path,{method='GET',body,query}={})=>command('api.request',{path,method,body,query});
export async function publicRequest(path,{method='GET',body,signal,query}={}){
  if((!/^\/(products(?:\/|$)|storefront\/home\/[1-9][0-9]*$|categories(?:\/|$)|public(?:\/|$)|reviews(?:\/|$))/.test(path)&&!(method==='GET'&&(['/mcp/user/connector/config','/flutter/deployment/apps'].includes(path)||/^\/product-board\/posts\/[1-9][0-9]*\/replies$/.test(path))))||path.includes('..')||path.includes('//')||!['GET','POST'].includes(method))throw Error(uiText('不支援的公開請求'));
  if(method==='POST'&&!['/products/search','/products/search/natural'].includes(path))throw Error(uiText('不支援的公開請求'));
  const url=new URL(apiBase+path);for(const[k,v]of Object.entries(query||{}))if(v!=null)url.searchParams.set(k,String(v));
  const r=await fetch(url,{method,credentials:'omit',headers:{'Accept-Language':currentLocale(),...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,signal});
  if(!r.ok)throw new BuyerApiError(uiText(r.status===404?'找不到這項內容':'商品暫時無法載入，請重試。'),'PUBLIC_READ_FAILED',r.status);
  return r.status===204?null:r.json();
}
