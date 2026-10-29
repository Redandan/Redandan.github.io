import{publicViewMemory,publicViewKey}from'./public-view-memory.js';
import{currentLocale}from'./locale.js';
import{bindProductAccountState}from'./product-account-state.js';
import{productPurchaseSelection,bindProductPurchaseSelection}from'./product-purchase-selection.js';
import{materialIcon}from'./material-icons.js';
import{productGallery,bindProductGallery}from'./product-gallery.js';
import{catalogText}from'./catalog-core.js';
import{productSummary,productTrust,productInformation,bindProductInformation}from'./product-information.js';
import{uiText}from'./ui-text.js';
import{openProductChat}from'./chat-contact.js';
import {escape,money,positiveId,imageUrl,title,productCard,empty,field,button,icon,route,detailReadable,boardLauncher,loadingSkeleton} from './ui.js';
export{home,canRestoreHome}from'./catalog-home.js';
export{search}from'./catalog-search.js';
function productActions(){const purchaseActions=`<div class="product-purchase-actions"><div class="purchase-primary">${button(uiText('立即購買'),'buy')}</div><div class="purchase-secondary"><button class="secondary" type="button" data-action="add-cart">${icon('cart')}${escape(uiText('加入購物車'))}</button>${button(uiText('聯繫賣家'),'chat','secondary')}</div></div>`;return purchaseActions;}
const descriptionOf=p=>p.translationAvailable&&p.localizedDescription||p.description||uiText('此商品未提供說明。');
function detailMarkup(p){return`<article class="detail"><div class="detail-overview">${productGallery(p)}<section class="panel product-summary">${productSummary(p)}<div class="detail-desktop-actions">${productActions()}${productTrust()}</div></section></div><section class="panel product-mobile-trust">${productTrust()}</section>${productInformation(p,descriptionOf(p))}${productPurchaseSelection(p)}</article>`;}
export async function product(ctx){
 const id=positiveId(ctx.params.id);if(!id)throw Error('無效商品編號');const ticket=publicViewMemory.begin(publicViewKey(ctx,currentLocale())),saved=publicViewMemory.restore(ticket);
 let p=saved?.product,root=saved?.node,readAt=saved?.readAt||0,viewRevision=saved?.revision??publicViewMemory.revision(),fresh=!!saved&&!saved.refreshRequired&&Date.now()-readAt<30000,reading=false;
 const scopes=new Map();let accountState;
 function retire(name){scopes.get(name)?.retire();scopes.delete(name);}
 function child(name){retire(name);const abort=new AbortController(),cleanups=[],signal=AbortSignal.any([ctx.signal,abort.signal]),scope={...ctx,signal,active:()=>ctx.active()&&!signal.aborted,cleanup:fn=>cleanups.push(fn)};scopes.set(name,{retire:()=>{abort.abort();for(const fn of cleanups)fn();}});return scope;}
 function lock(){for(const node of document.querySelectorAll('#buyer-main [data-action=buy],#buyer-main [data-action=add-cart],#buyer-nav [data-action=buy],#buyer-nav [data-action=add-cart],#product-purchase-dialog button')){if(!fresh){if(!Object.hasOwn(node.dataset,'publicReadDisabled'))node.dataset.publicReadDisabled=String(node.disabled);node.disabled=true;}else if(Object.hasOwn(node.dataset,'publicReadDisabled')){node.disabled=node.dataset.publicReadDisabled==='true';delete node.dataset.publicReadDisabled;}}}
 function bindAccount(){const accountCtx=child('account');accountState=bindProductAccountState(accountCtx,p);ctx.action('favorite',async()=>{await accountCtx.requireLogin();if(!accountCtx.active())return;const token=accountState.beginFavoriteChange(),result=await accountCtx.api.command('favorites.toggle',{productId:Number(id)});if(accountCtx.active()&&accountState.confirmFavoriteChange(token,result?.favorite))ctx.toast('已更新收藏');});ctx.action('chat',()=>openProductChat(accountCtx,p.id));}
 function bindPurchase(){bindProductPurchaseSelection(child('purchase'),p);lock();}
 function bindInformation(){bindProductInformation(child('information'));}
 async function bindGallery(){const own=child('gallery'),image=await bindProductGallery(own,p);if(own.active()&&image?.naturalWidth>0)await image.decode().catch(()=>{});if(own.active()){detailReadable(Number(id),own.active);accountState?.ready();boardLauncher(ctx,Number(id));}}
 function notice(){if(root.querySelector('.product-refresh-notice'))return;const block=document.createElement('section');block.className='notice product-refresh-notice';block.setAttribute('role','alert');block.innerHTML=`<p>${escape(catalogText('tryAgainLater'))}</p><button type="button" class="secondary" data-action="product-read-retry">${escape(catalogText('retry'))}</button>`;root.append(block);}
 function replace(selector,html){const template=document.createElement('template');template.innerHTML=html;root.querySelector(selector).replaceWith(template.content.firstElementChild);}
 async function read(){
  if(reading||!ctx.active())return;reading=true;fresh=false;lock();let succeeded=false;const revision=publicViewMemory.revision();
  try{
   const value=await ctx.api.publicRequest('/products/'+id,{signal:AbortSignal.any([ctx.signal,AbortSignal.timeout(15000)])});if(!ctx.active())return;
   if(value.productType==='CREATOR_SUBSCRIPTION'){publicViewMemory.discard(ticket);for(const name of[...scopes.keys()])retire(name);root=null;p=value;const{creatorProduct}=await import('./creator.js');if(ctx.active())await creatorProduct(ctx,value);return;}
   if(!p){p=value;ctx.render(detailMarkup(p),{footer:productActions()});root=ctx.find('.detail');bindAccount();bindPurchase();bindInformation();void bindGallery();}
   else{
    const before={summary:productSummary(p),gallery:productGallery(p),information:productInformation(p,descriptionOf(p)),purchase:productPurchaseSelection(p)},anchor=document.querySelector('#buyer-main').scrollTop;
    for(const key of Object.keys(p))delete p[key];Object.assign(p,value);
    if(before.summary!==productSummary(p)){const summary=root.querySelector('.product-summary'),actions=summary.querySelector('.detail-desktop-actions'),template=document.createElement('template');template.innerHTML=productSummary(p);summary.replaceChildren(...template.content.childNodes,actions);}
    if(before.gallery!==productGallery(p)){retire('gallery');replace('.product-gallery',productGallery(p));void bindGallery();accountState?.ready();}
    if(before.information!==productInformation(p,descriptionOf(p))){retire('information');replace('.detail-information',productInformation(p,descriptionOf(p)));bindInformation();}
    if(before.purchase!==productPurchaseSelection(p)){retire('purchase');replace('#product-purchase-dialog',productPurchaseSelection(p));bindPurchase();}
    ctx.restoreScroll?.(anchor);
   }
   root.querySelector('.product-refresh-notice')?.remove();readAt=Date.now();viewRevision=revision;fresh=revision===publicViewMemory.revision();succeeded=true;
  }catch(error){if(!ctx.active()||error.name==='AbortError')return;if(!root)throw error;notice();}
  finally{reading=false;if(ctx.active()){lock();if(succeeded&&root&&viewRevision!==publicViewMemory.revision())queueMicrotask(()=>{if(ctx.active())void read();});}}
 }
 ctx.cleanup(()=>{for(const name of[...scopes.keys()])retire(name);if(!root||p?.productType==='CREATOR_SUBSCRIPTION'){publicViewMemory.discard(ticket);return;}const favorite=root.querySelector('[data-action=favorite]');if(favorite){favorite.classList.remove('is-favorite');favorite.setAttribute('aria-pressed','false');favorite.innerHTML=materialIcon('favorite_border');}for(const button of root.querySelectorAll('[data-action=chat]'))button.hidden=false;publicViewMemory.remember(ticket,{loaded:true,product:p,readAt,revision:viewRevision,scroll:document.querySelector('#buyer-main').scrollTop,refreshRequired:reading||!fresh},root);});
 ctx.action('product-read-retry',read);addEventListener('agora-buyer-orders-changed',()=>{fresh=false;void read();},{signal:ctx.signal});ctx.header(uiText('商品詳情'),true);
 if(saved){ctx.render(root,{footer:productActions()});bindAccount();bindPurchase();bindInformation();void bindGallery();ctx.restoreScroll?.(saved.scroll);if(!fresh)void read();}
 else{ctx.render(loadingSkeleton(uiText('正在載入商品…'),'page'));await read();}
}
export async function store(ctx){const{classicStore}=await import('./classic-store.js');if(ctx.active())await classicStore(ctx);}
