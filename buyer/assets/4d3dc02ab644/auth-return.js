// The existing returnTo contract is presentation state, never login authority.
// Keep it in this tab only while a provider performs a full-document redirect.
const key='agora_buyer_auth_return_v1',maximumAge=30*60*1000;
export function normalizeAuthReturnTarget(raw){
 if(typeof raw!=='string')return null;const value=raw.trim();
 if(!value.startsWith('/')||value.startsWith('//')||value.includes('\\')||/[\u0000-\u001f]/.test(value)||value.length>4096)return null;
 try{const uri=new URL(value,'https://buyer.invalid');if(uri.origin!=='https://buyer.invalid'||['/login','/register','/forgot-password','/reset-password','/session-recovery','/oauth2-callback'].includes(uri.pathname)||uri.hash)return null;return uri.pathname+uri.search;}catch{return null;}
}
export function rememberAuthReturnTarget(raw){
 const target=normalizeAuthReturnTarget(raw);if(!target)return;
 try{sessionStorage.setItem(key,JSON.stringify({version:1,target,createdAt:Date.now()}));}catch{throw Error('目前無法保存登入後返回頁面，請允許此網站使用分頁儲存後重試。');}
}
export function consumeAuthReturnTarget(){
 try{const raw=sessionStorage.getItem(key);sessionStorage.removeItem(key);if(!raw)return null;const data=JSON.parse(raw),age=Date.now()-data.createdAt;return data.version===1&&Number.isFinite(age)&&age>=0&&age<=maximumAge?normalizeAuthReturnTarget(data.target):null;}catch{return null;}
}
