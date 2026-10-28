import{bindProductAccountState}from'./product-account-state.js';
import{productPurchaseSelection,bindProductPurchaseSelection}from'./product-purchase-selection.js';
import{materialIcon}from'./material-icons.js';
import{productGallery,bindProductGallery}from'./product-gallery.js';
import{catalogText}from'./catalog-core.js';
import{productSummary,productTrust,productInformation,bindProductInformation}from'./product-information.js';
import{uiText}from'./ui-text.js';
import{openProductChat}from'./chat-contact.js';
import {escape,money,positiveId,imageUrl,title,productCard,empty,field,button,icon,route,detailReadable,boardLauncher} from './ui.js';
export{home}from'./catalog-home.js';
export{search}from'./catalog-search.js';
export async function product(ctx){
  const id=positiveId(ctx.params.id);if(!id)throw Error('無效商品編號');
  ctx.header(uiText('商品詳情'),true);ctx.render(`<div class="loading" role="status">${escape(uiText('正在載入商品…'))}</div>`);
  const p=await ctx.api.publicRequest('/products/'+id,{signal:ctx.signal});if(!ctx.active())return;
  if(p.productType==='CREATOR_SUBSCRIPTION'){const{creatorProduct}=await import('./creator.js');if(ctx.active())await creatorProduct(ctx,p);return;}
  const description=p.translationAvailable&&p.localizedDescription||p.description||uiText('此商品未提供說明。');
  const purchaseActions=`<div class="product-purchase-actions"><div class="purchase-primary">${button(uiText('立即購買'),'buy')}</div><div class="purchase-secondary"><button class="secondary" type="button" data-action="add-cart">${icon('cart')}<span class="purchase-label">${escape(uiText('加入購物車'))}</span></button><button class="secondary" type="button" data-action="chat">${icon('chat')}<span class="purchase-label">${escape(uiText('聯繫賣家'))}</span></button></div></div>`;
  ctx.render(`<article class="detail"><div class="detail-overview">${productGallery(p)}<section class="panel product-summary">${productSummary(p)}<div class="detail-desktop-actions">${purchaseActions}${productTrust()}</div></section></div><section class="panel product-mobile-trust">${productTrust()}</section>${productInformation(p,description)}${productPurchaseSelection(p)}</article>`,{footer:purchaseActions});
  const accountState=bindProductAccountState(ctx,p);bindProductPurchaseSelection(ctx,p);bindProductInformation(ctx);const galleryReady=bindProductGallery(ctx,p);
  ctx.action('favorite',async()=>{await ctx.requireLogin();const token=accountState.beginFavoriteChange(),result=await ctx.api.command('favorites.toggle',{productId:Number(id)});if(!ctx.active())return;if(accountState.confirmFavoriteChange(token,result?.favorite))ctx.toast('已更新收藏');});
  ctx.action('chat',()=>openProductChat(ctx,p.id));
  const painted=await galleryReady;
  if(ctx.active()&&painted?.naturalWidth>0)await painted.decode().catch(()=>{});
  if(ctx.active()){detailReadable(Number(id),ctx.active);accountState.ready();}
  if(ctx.active())boardLauncher(ctx,Number(id));
}
export async function store(ctx){const{classicStore}=await import('./classic-store.js');if(ctx.active())await classicStore(ctx);}
