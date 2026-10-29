import{uiText}from'./ui-text.js';
import{orderListMemory}from'./order-list-memory.js';
import{configureBuyerHeader,setBuyerHeaderRoute}from'./native-header.js';
import{buyerNavigation}from'./buyer-shell.js';
import{buyerSurface,startBuyerDesign}from'./design-system.js';
import{startBuyerViewport}from'./viewport.js';
import{normalizeAuthReturnTarget,rememberAuthReturnTarget,consumeAuthReturnTarget}from'./auth-return.js';
import{startPwa}from'./pwa.js';
import{startBuyerNetwork}from'./network-banner.js';
import{currentLocale,commonText}from'./locale.js';
import{buyerPageReady}from'./presence.js';
import'./entry-router.js';
import * as api from './api.js';
import * as catalog from './catalog.js';
import {escape,icon,toast,errorMessage,route,bindProductCards,loadingSkeleton} from './ui.js';
const main=document.querySelector('#buyer-main'),header=document.querySelector('#buyer-header'),nav=document.querySelector('#buyer-nav');
const scrollPositions=new Map();let current,sequence=0,footer='',pendingReturn=null,pendingNavigation=null;
// The app owns its inner scroller. Browser history must not restore an old
// empty/loading document after the page has restored its own content.
if('scrollRestoration'in history)history.scrollRestoration='manual';
function restoreMainScroll(owner,finished=false){
 if(current!==owner||owner.pendingRestore==null)return;
 const maximum=Math.max(0,main.scrollHeight-main.clientHeight),wanted=owner.pendingRestore;
 // Keep the previous snapshot while a loading placeholder is too short.
 if(maximum>=wanted||finished){main.scrollTop=Math.min(wanted,maximum);owner.pendingRestore=null;}
}
function cancelPendingScrollRestore(){if(current?.pendingRestore!=null&&main.scrollHeight>main.clientHeight)current.pendingRestore=null;}
main.addEventListener('wheel',cancelPendingScrollRestore,{passive:true});
main.addEventListener('touchmove',cancelPendingScrollRestore,{passive:true});
main.addEventListener('keydown',event=>{if(['ArrowUp','ArrowDown','PageUp','PageDown','Home','End'].includes(event.key))cancelPendingScrollRestore();});

const definitions=[
  ['/',catalog.home,false],['/home',catalog.home,false],['/search',catalog.search,false],['/products/:id',catalog.product,false],['/stores/:id',catalog.store,false],['/stores/:id/home','storefront.storefront',false],['/stores/:id/posts','store-posts.storePosts',true],
  ['/products/:id/game-access','game.productAccess',false],
  ['/login','account.login',false],['/oauth2-callback','account.oauthReturn',false],['/register','account.register',false],['/forgot-password','password-reset.passwordReset',false],['/reset-password','password-reset.unavailableLink',false],['/session-recovery','session-recovery.recovery',false],
  ['/profile','account.profile',false],['/profile/edit','account.editProfile',true],['/addresses','account.addresses',true],['/security','account.security',true],['/settings/devices','account.devices',true],['/settings/notifications','push.settings',true],
  ['/favorites','commerce.favorites',true],['/cart','commerce.cart',false],['/checkout','commerce.checkout',true],['/orders','commerce.orders',true],['/orders/:id','commerce.order',true],['/orders/:id/return','commerce.returnOrder',true],['/orders/:id/review','commerce.reviewOrder',true],
  ['/chat','chat.sessions',true],['/chat/new/:id','chat.create',true],['/chat/:id','chat.conversation',true],
  ['/wallet','wallet.wallet',true],['/wallet/deposit','wallet.deposit',true],['/wallet/withdraw','wallet.withdraw',true],['/wallet/stake','wallet.stake',true],['/transactions','wallet.transactions',true],['/transactions/:id','wallet.transaction',true],
  ['/messages','push.notificationEntry',false],['/notifications','extras.notifications',true],['/demands','extras.demands',false],['/subscriptions','extras.subscriptions',true],['/betting','betting.markets',true],['/betting/:id','betting.market',true],['/my-bets','betting.records',true],['/games/:id','slot.game',true],
  ['/not-found','not-found.notFound',false],['/help','extras.help',false],['/about','extras.about',false],['/privacy-policy','extras.privacy',false],['/user-agreement','extras.agreement',false],
  ['/customer-issues','support.issues',true],['/help/mcp','support.mcp',false],
  ['/promo-code','promo.promo',true],['/app-download','downloads.downloads',false],['/bindings','bindings.settings',true],['/bindings/return','bindings.bindingReturn',false],
].map(([pattern,handler,privatePage])=>({pattern,handler,privatePage,keys:[...pattern.matchAll(/:(\w+)/g)].map(m=>m[1]),regex:new RegExp('^'+pattern.replace(/:(\w+)/g,'([^/]+)')+'/?$')}));
function theme(){
  const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem('flutter.'+key))??fallback;}catch{return fallback;}};
  const dark=read('system_theme',true)?matchMedia('(prefers-color-scheme: dark)').matches:read('dark_mode',false);
  document.documentElement.dataset.theme=dark?'dark':'light';document.querySelector('meta[name=theme-color]').content=getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()||(dark?'#0a0a0a':'#f8f9fa');
}
theme();matchMedia('(prefers-color-scheme: dark)').addEventListener('change',theme);
startBuyerDesign(document.querySelector('#buyer-app'));
startBuyerViewport();startBuyerNetwork();
function navigation(path,showTabs=true){
 const state=buyerNavigation(path,footer,showTabs);document.querySelector('#buyer-app').dataset.shell=String(state.shell);nav.innerHTML=state.html;nav.hidden=state.hidden;
}

function routeParts(){const raw=location.hash.slice(1)||((window.__AGORA_WEB_SESSION_OAUTH_ENTRY__||window.__AGORA_WEB_SESSION_BINDING_ENTRY__||window.__AGORA_BUYER_LEGACY_OAUTH_ENTRY__)?'/oauth2-callback':'/');const normalized=window.AgoraBuyerEntry.normalizeBuyerRoute(raw.startsWith('/')?raw:'/'+raw,location.origin);const u=new URL(normalized,location.origin);return{path:u.pathname,query:u.searchParams,key:u.pathname+u.search};}
function isTransactionChildNavigation(parent,child){
  return !window.__AGORA_WEB_SESSION_OAUTH_ENTRY__&&!window.__AGORA_WEB_SESSION_BINDING_ENTRY__&&!window.__AGORA_BUYER_LEGACY_OAUTH_ENTRY__&&parent.pathname==='/transactions'&&[...parent.searchParams.keys()].every(key=>key==='type')&&/^\/transactions\/[1-9][0-9]*$/.test(child.pathname)&&!child.search;
}
function setPageFrame(target){
 setBuyerHeaderRoute(header,target.path);
  document.querySelector('#buyer-app').dataset.page=/^\/(login|register|forgot-password|reset-password|session-recovery|oauth2-callback|bindings\/return)(?:\/|$)/.test(target.path)?'auth':target.path.startsWith('/products/')?'product':target.path==='/search'?'search':/^\/stores\/[^/]+\/?$/.test(target.path)?'store':/^\/stores\/[^/]+\/?$/.test(target.path)?'store':target.path==='/'||target.path==='/home'?'home':'other';
  document.querySelector('#buyer-app').dataset.area=buyerSurface(target.path);
}
async function render({navigationTransition=false}={}){
  document.documentElement.lang=currentLocale();
  const target=routeParts(),holdFrame=navigationTransition&&(catalog.canRestoreHome(target)||target.path==='/orders'||/^\/orders(?:\/|\?|$)/.test(current?.key||''))&&!/^\/(?:login|register|session-recovery|oauth2-callback)(?:\/|$)/.test(target.path)&&main.childElementCount>0;
  const returningFromTransaction=target.path==='/transactions'&&(current?.key===target.key?current.returningFromTransaction===true:current?.arrival?.from===target.key&&/^\/transactions\/[1-9][0-9]*$/.test(new URL(current.key,location.origin).pathname));
  const arrival=pendingNavigation?.to===location.href&&pendingNavigation.from===current?.key&&current?.key!==target.key?pendingNavigation:current?.key===target.key?current.arrival:null;pendingNavigation=null;if(target.path==='/login'){const hinted=normalizeAuthReturnTarget(target.query.get('returnTo'));if(hinted)pendingReturn=hinted;}if(current){if(current.pendingRestore==null)scrollPositions.set(current.key,main.scrollTop);current.abort.abort();for(const cleanup of current.cleanup)cleanup();}
  if(!holdFrame)setPageFrame(target);
  const entry=definitions.find(d=>d.regex.test(target.path));const abort=new AbortController();const id=++sequence;
  current={id,key:target.key,arrival,returningFromTransaction,abort,holdFrame,paintHeader:null,pendingRestore:scrollPositions.get(target.key)??null,cleanup:[],callbacks:new Map(),forms:new Map()};const owned=current;footer='';if(!holdFrame)main.scrollTop=0;main.inert=holdFrame;header.inert=holdFrame;if(holdFrame)main.setAttribute('aria-busy','true');else main.removeAttribute('aria-busy');
  const pageEpoch=api.beginPage();
  if(current!==owned)return;
  const scopedApi=api.forPage(pageEpoch,abort.signal);
  const active=()=>current===owned&&!abort.signal.aborted;
  // Guards replace the blocked location so Back reaches the public page.
  // A completed sign-in replaces its login entry while preserving returnTo.
  const ctx={...target,returningFromTransaction,params:{},signal:abort.signal,active,api:scopedApi,toast,find:selector=>main.querySelector(selector),go:(path,{replace=false}={})=>{const destination=new URL(location.href);destination.hash=route(path);const child=new URL(path,location.origin),parent=new URL(target.key,location.origin);if(active()&&destination.href!==location.href&&(child.pathname==='/addresses'&&(child.searchParams.has('new')||child.searchParams.has('edit'))&&['/addresses','/checkout'].includes(parent.pathname)||isTransactionChildNavigation(parent,child)))pendingNavigation={from:target.key,to:destination.href};else pendingNavigation=null;const base=new URL('../../',import.meta.url);if(location.pathname==='/oauth2-callback'&&base.pathname!=='/')location[replace?'replace':'assign'](base.pathname+route(path));else if(replace)location.replace(destination.href);else location.hash=route(path);},header:(title,back=false,options={})=>{if(!active())return;const paint=()=>{const shortcuts=options.shortcuts===false?'':`<div class="header-shortcuts"><a href="#/cart" aria-label="${escape(commonText('cart'))}" title="${escape(commonText('cart'))}">${icon('cart')}</a><a href="#/chat" aria-label="${escape(commonText('chat'))}" title="${escape(commonText('chat'))}">${icon('chat')}</a></div>`;document.title=title&&title!=='AgoraMarket'?String(title)+' · AgoraMarket':'AgoraMarket';header.innerHTML=`${back?`<button class="back" type="button" aria-label="${escape(options.backLabel||commonText('back'))}" title="${escape(options.backTooltip||options.backLabel||commonText('back'))}" data-action="back">${icon('back')}</button>`:''}${options.titleMarkup?`<div class="header-title">${options.titleMarkup}</div>`:`<h1>${escape(title)}</h1>`}${options.actionMarkup||''}${shortcuts}`;configureBuyerHeader(header,target.path,options);};if(owned.holdFrame)owned.paintHeader=paint;else paint();},render:(html,options={})=>{if(!active())return;if(owned.holdFrame){owned.holdFrame=false;setPageFrame(target);owned.paintHeader?.();owned.paintHeader=null;main.scrollTop=0;}main.inert=false;header.inert=false;main.removeAttribute('aria-busy');if(html?.nodeType===1)main.replaceChildren(html);else main.innerHTML=html;footer=options.footer||'';navigation(target.path,options.navigation!==false);restoreMainScroll(owned);queueMicrotask(()=>{if(active()&&document.activeElement===document.body)main.focus({preventScroll:true});});},action:(name,fn)=>owned.callbacks.set(name,fn),form:(name,fn)=>owned.forms.set(name,fn),cleanup:fn=>owned.cleanup.push(fn),reload:render,requireLogin:async(returnTo=target.key)=>{const state=await scopedApi.session();if(!active())throw new DOMException('Superseded','AbortError');if(!state.authenticated){if(state.requiresReload)throw new api.BuyerApiError(uiText('登入狀態已在其他頁面變更，請重新載入後繼續。'),'PAGE_RELOAD_REQUIRED');if(/UNAVAILABLE|BLOCKED|RECOVERY_REQUIRED/.test(state.availability||''))throw Error(uiText('目前無法確認登入狀態，請至「我的」重試恢復。'));pendingReturn=normalizeAuthReturnTarget(returnTo)||'/';ctx.go('/login?returnTo='+encodeURIComponent(pendingReturn),{replace:true});throw new DOMException('Sign in required','AbortError');}return state;},persistAuthReturn:()=>rememberAuthReturnTarget(pendingReturn||normalizeAuthReturnTarget(target.query.get('returnTo'))||'/'),returnAfterLogin:()=>{const saved=consumeAuthReturnTarget();const next=pendingReturn||saved||'/';pendingReturn=null;ctx.go(next,{replace:true});},theme,
  };
  // This is process-local navigation context, never an auth/session proof.
  ctx.finishSecondary=(fallback,parents=[])=>{if(!active())return;const parent=owned.arrival?.from&&new URL(owned.arrival.from,location.origin).pathname;if(parent&&parents.includes(parent)&&history.length>1){pendingNavigation=null;history.back();}else{const url=new URL(location.href);url.hash=route(fallback);pendingNavigation=null;history.replaceState(history.state,'',url.href);render();}};
  ctx.restoreScroll=top=>{if(active()){if(Number.isFinite(top)&&top>=0)owned.pendingRestore=top;restoreMainScroll(owned);}};
  ctx.resetScroll=()=>{if(active()){scrollPositions.delete(owned.key);owned.pendingRestore=0;main.scrollTop=0;}};
  ctx.refreshOnAuth=()=>{if(active())owned.refreshForAccount=true;};
  bindProductCards(ctx);ctx.action('back',()=>history.length>1?history.back():ctx.go('/'));
  ctx.header('AgoraMarket');if(!holdFrame)ctx.render(loadingSkeleton(commonText('loading'),'page'));
  try{
    if(!entry){const{notFound}=await import('./not-found.js');if(active())await notFound(ctx);return;}
    const match=target.path.match(entry.regex);ctx.params=Object.fromEntries(entry.keys.map((key,i)=>[key,decodeURIComponent(match[i+1])]));
    if(entry.privatePage){const snapshot=navigationTransition&&target.path==='/orders'?api.presentationSession():null;ctx.sessionState=snapshot&&orderListMemory.canRestore(snapshot,currentLocale())?snapshot:await ctx.requireLogin();}
    const handler=typeof entry.handler==='function'?entry.handler:await import('./'+entry.handler.split('.')[0]+'.js').then(m=>m[entry.handler.split('.')[1]]);
    if(active())await handler(ctx);
    if(active())restoreMainScroll(owned,true);
  }catch(error){if(!active()||error?.name==='AbortError')return;ctx.header(uiText('暫時無法載入'),true);ctx.render(`<section class="panel error-panel"><h2>${escape(uiText('請再試一次'))}</h2><p>${escape(errorMessage(error))}</p><button data-action="retry">${escape(uiText('重新載入'))}</button></section>`);if(error.code==='PAGE_RELOAD_REQUIRED'){const retry=ctx.find('[data-action=retry]');retry.textContent=uiText('重新載入並恢復登入');ctx.action('retry',()=>{location.replace(location.pathname+location.search+'#/profile');location.reload();});}else if(error.name==='TypeError'&&/Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Failed to load module script/i.test(error.message||''))ctx.action('retry',()=>location.reload());else ctx.action('retry',render);}finally{if(active())buyerPageReady();}
}
function runRouteLink(event){
  if(event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  const link=event.target.closest('a[href]'),href=link?.getAttribute('href');
  if(!href?.startsWith('#/')||link.hasAttribute('download')||link.target&&link.target.toLowerCase()!=='_self')return;
  if(link.getAttribute('aria-disabled')==='true'){event.preventDefault();return;}
  // A composed /buyer/ base resolves a bare hash against the base URL and drops
  // the current query, causing a document reload. Route inside this document,
  // like ctx.go, so locale, scroll history and page retirement stay consistent.
  event.preventDefault();const destination=new URL(location.href);destination.hash=href.slice(1);if(current&&destination.href!==location.href&&isTransactionChildNavigation(new URL(current.key,location.origin),new URL(href.slice(1),location.origin)))pendingNavigation={from:current.key,to:destination.href};else pendingNavigation=null;location.hash=href.slice(1);
}
async function runAction(event){
  const el=event.target.closest('[data-action]');if(!el){runRouteLink(event);return;}if(el.disabled||el.getAttribute('aria-disabled')==='true'){event.preventDefault();return;}const fn=current?.callbacks.get(el.dataset.action);if(!fn)return;
  event.preventDefault();const priorBusy=el.getAttribute('aria-busy');el.disabled=true;el.setAttribute('aria-busy','true');try{await fn(el);}catch(error){if(error?.code==='PAGE_RELOAD_REQUIRED'){location.hash='/profile';}else if(error?.name!=='AbortError')toast(errorMessage(error));}finally{if(el.isConnected){if(priorBusy==null)el.removeAttribute('aria-busy');else el.setAttribute('aria-busy',priorBusy);if(!el.hasAttribute('data-action-locked'))el.disabled=false;}}
}
document.addEventListener('click',runAction);
document.addEventListener('submit',async event=>{
  const form=event.target.closest('form[data-form]');if(!form)return;event.preventDefault();const fn=current?.forms.get(form.dataset.form);if(!fn||form.dataset.pending)return;
  if(!form.reportValidity())return;form.dataset.pending='true';const button=form.querySelector('[type=submit],button:not([type])'),priorBusy=button?.getAttribute('aria-busy');if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
  try{await fn(Object.fromEntries(new FormData(form)),form);}catch(error){if(error?.name!=='AbortError')toast(errorMessage(error));}finally{delete form.dataset.pending;if(button?.isConnected){if(priorBusy==null)button.removeAttribute('aria-busy');else button.setAttribute('aria-busy',priorBusy);if(!button.hasAttribute('data-action-locked'))button.disabled=false;}}
});
addEventListener('hashchange',event=>{if(new URL(event.newURL).href===location.href)render({navigationTransition:true});});addEventListener('agora-buyer-auth',()=>{const path=routeParts().path;if(current&&(definitions.find(d=>d.regex.test(path))?.privatePage||['/profile','/cart','/demands'].includes(path)||current.refreshForAccount===true))render();});
addEventListener('pageshow',theme);
render().finally(startPwa);
window.__AGORA_BUYER_DIAGNOSTICS__=()=>({source:document.querySelector('meta[name=source-commit]')?.content,route:routeParts().path,savedMainScroll:current?(scrollPositions.get(current.key)??null):null,historyScrollRestoration:history.scrollRestoration,pendingMainScroll:current?.pendingRestore??null,outer:{x:scrollX,y:scrollY,overflowX:document.documentElement.scrollWidth-innerWidth},root:document.querySelector('#buyer-app').getBoundingClientRect().toJSON(),main:main.getBoundingClientRect().toJSON(),viewport:visualViewport?{top:visualViewport.offsetTop,left:visualViewport.offsetLeft,width:visualViewport.width,height:visualViewport.height,scale:visualViewport.scale}:null,flutterScripts:[...document.scripts].map(s=>s.src).filter(s=>/flutter|canvaskit|main\.dart/.test(s)),theme:document.documentElement.dataset.theme});

addEventListener('agora-buyer-call',event=>{let value;try{value=JSON.parse(event.detail);}catch{return;}import('./calls.js').then(module=>module.onCallEvent(value)).catch(error=>{if(error.name!=='AbortError')toast(errorMessage(error));});});
