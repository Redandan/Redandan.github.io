/* Public entry routing only. Presentation hints never select an account, grant
 * a role, copy credentials, or change the backend's original authorization. */
(function(root){
 'use strict';
 const proofKeys=['webSessionVersion','bindingVersion','flowId','completionCode','tokenId'];
 function parts(raw,origin){
  if(typeof raw!=='string'||!raw.startsWith('/')||raw.startsWith('//')||raw.includes('\\')||/[\x00-\x1f\x7f]/.test(raw))return null;
  let segments;try{segments=raw.split('?')[0].split('/').map(decodeURIComponent);}catch{return null;}
  if(segments.some(p=>p==='.'||p==='..'||p.includes('/')||p.includes('\\')||/[\x00-\x1f\x7f]/.test(p)))return null;
  let route;try{route=new URL(raw,origin);}catch{return null;}
  if(route.origin!==origin||route.hash)return null;
  return route;
 }
 function classify(href,presentation){
  const url=new URL(href),fragment=url.hash.slice(1),split=fragment.indexOf('?'),hashQuery=new URLSearchParams(split<0?fragment:fragment.slice(split+1));
  const proof=proofKeys.some(k=>url.searchParams.has(k)||hashQuery.has(k));
  // Proof stays in this one canonical callback document until its original
  // inline parser takes it. It is never copied to a new URL or storage.
  if(url.pathname==='/oauth2-callback'||proof){return {kind:'callback',presentation:presentation==='flutter'?'flutter':'buyer',invalidPath:url.pathname!=='/oauth2-callback'||!!url.hash};}
  const raw=fragment||url.pathname+url.search,route=parts(raw,url.origin);
  if(!route)return {kind:'buyer',route:'/'};
  const segments=route.pathname.split('/').filter(Boolean);
  if(['admin','seller','delivery'].includes(segments[0])||(segments[0]==='tg'&&segments[1]==='group'&&segments[2]==='admin')||route.pathname==='/support/workbench')return {kind:'flutter',route:route.pathname+route.search};
  return {kind:'buyer',route:normalizeBuyerRoute(route.pathname+route.search,url.origin)};
 }
 function normalizeBuyerRoute(raw,origin){
  const route=parts(raw,origin);if(!route)return '/';let path=route.pathname;
  if(path==='/index.html'||path==='/buyer'||path==='/buyer/'||path==='/buyer/index.html')path='/';
  path=path.replace(/^\/store\/(\d+)$/, '/stores/$1').replace(/^\/preview\/products\/(\d+)$/, '/products/$1').replace(/^\/preview\/store\/(\d+)$/, '/stores/$1').replace(/^\/storefront\/home\/(\d+)$/, '/stores/$1/home');
  // AddAddressRoute is now a dedicated editor, preserving its legacy URL.
  if(/^\/address\/add\/?$/.test(path)){path='/addresses';route.searchParams.set('new','1');}
  if(path==='/avatar-edit'){path='/profile/edit';route.searchParams.set('avatar','1');}
  const aliases={'/products':'/','/purchase-confirm':'/cart','/pickup-address-setting':'/addresses','/edit-profile':'/profile/edit','/avatar-edit':'/profile/edit','/address':'/addresses','/address/add':'/addresses','/account-bindings':'/bindings','/creator-subscriptions':'/subscriptions','/web-push-settings':'/settings/notifications','/wallet/stake-form':'/wallet/stake','/chats':'/chat','/help/chatgpt-mcp':'/help/mcp','/help/mcp-tools':'/help/mcp'};
  path=aliases[path]||path;
  path=path.replace(/^\/orders\/([^/]+)\/rating$/,'/orders/$1/review');
  const afterSales=path.match(/^\/orders\/([^/]+)\/(refund(?:\/(request|review|shipping))?|dispute\/request)$/);
  if(afterSales){path='/orders/'+afterSales[1]+(afterSales[3]==='review'?'':'/return');if(afterSales[3]!=='review')route.searchParams.set('kind',afterSales[2]==='dispute/request'?'OPEN_DISPUTE':afterSales[3]==='shipping'?'UPDATE_RETURN_SHIPPING':'REQUEST_RETURN');}
  return path+route.search;
 }
 function buyerLocation(href){
  const input=new URL(href),decision=classify(href);
  if(decision.kind!=='buyer')throw Error('Only ordinary buyer entries may navigate');
  const target=new URL('/buyer/',input.origin),language=input.searchParams.get('lang')?.trim();
  // Carry only the supported presentation parameter. Callback proofs and
  // arbitrary query data never travel through this ordinary navigation.
  if(/^(?:zh(?:[-_](?:TW|CN|Hant|Hans))?|en(?:[-_]US)?|th(?:[-_]TH)?)$/i.test(language||''))target.searchParams.set('lang',language);
  target.hash=decision.route;
  return target.pathname+target.search+target.hash;
 }
 root.AgoraBuyerEntry=Object.freeze({classify,normalizeBuyerRoute,buyerLocation});
})(typeof globalThis!=='undefined'?globalThis:window);
