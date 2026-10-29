import{renderProductCard}from'./product-card-markup.js';
import{catalogText as catalogLabel}from'./catalog-core.js';
import{shareUrl}from'./store-core.js';
import{uiText}from'./ui-text.js';
export const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const money = value => value!=null&&String(value).trim()!==''&&Number.isFinite(Number(value)) ? Number(value).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}) : '—';
export const list = value => Array.isArray(value) ? value : value?.content ?? value?.items ?? [];
export const positiveId = value => /^[1-9]\d*$/.test(String(value)) ? String(value) : null;
export const route = value => { const s=String(value); if(!s.startsWith('/')||s.startsWith('//')||/[\x00-\x1f]/.test(s))throw Error('無效頁面'); return '#'+s; };
export function imageUrl(value){
  if(typeof value!=='string'||!value.trim())return '';
  try {const u=new URL(value, 'https://agoramarketapi.purrtechllc.com');return u.protocol==='https:'&&!u.username&&!u.password?u.href:'';}catch{return '';}
}
const paths={inventory:"M4 7h16v14H4V7m-1 0V3h18v4M9 11h6",eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12m13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",trending:"m3 17 6-6 4 4 8-10m-6 0h6v6",truck:"M2 5h12v12H2V5m12 5h4l4 4v3h-8m-9 0a2 2 0 1 0 4 0m7 0a2 2 0 1 0 4 0",expand:"m6 9 6 6 6-6",description:"M6 3h9l4 4v14H6V3m9 0v5h4M9 12h7m-7 4h7",support:"M4 13v-1a8 8 0 0 1 16 0v1M4 12H2v7h4v-7m14 0h2v7h-4v-7m0 7v3h-6",storefront:'M3 10V4h18v6m-18 0h18m-17 0v11h16V10m-12 11v-7h8v7M3 4l2 6m4-6 1 6m4-6-1 6m6-6-2 6',home:'M3 10 12 3l9 7v10H5V10m4 10v-7h6v7',cart:'m3 4 2 1 2 12h12l2-9H6m3 13h.01M18 21h.01',chat:'M4 4h16v12H8l-4 4V4',user:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-2a8 8 0 0 1 16 0v2',back:'m14 5-7 7 7 7',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8',search:'M20 20 15 15m2-6a7 7 0 1 1-14 0 7 7 0 0 1 14 0',wallet:'M3 6h17v14H3V6m0 0V3h14v3m-3 6h7v5h-7v-5',orders:'M6 3h12v18l-3-2-3 2-3-2-3 2V3m3 5h6m-6 4h6'};
export const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[name]??paths.orders}"/></svg>`;
export const empty = (title,detail='') => `<section class="empty"><h2>${escape(title)}</h2><p>${escape(detail)}</p></section>`;
export function loadingSkeleton(label,layout='cards'){
 return`<section class="buyer-loading" role="status" aria-label="${escape(label)}" data-layout="${layout==='cards'?'cards':'page'}"><p class="buyer-loading-label">${escape(label)}</p><div class="buyer-skeleton-grid" aria-hidden="true">${Array.from({length:layout==='cards'?6:2},()=>'<div class="buyer-skeleton-card"><i></i><i></i><i></i></div>').join('')}</div></section>`;
}
export function readFailure(title,detail,retryAction,retryLabel){return`<section class="buyer-read-error" role="alert"><h2>${escape(title)}</h2><p>${escape(detail)}</p>${button(retryLabel,retryAction,'secondary')}</section>`;}
export const field = (label,name,type='text',value='',extra='') => `<label class="field"><span>${escape(label)}</span><input type="${escape(type)}" name="${escape(name)}" value="${escape(value)}" ${extra}></label>`;
export const button = (label,action,kind='primary',extra='') => `<button type="button" class="${kind}" data-action="${escape(action)}" ${extra}>${escape(label)}</button>`;
export function toast(message){const el=document.querySelector('#buyer-toast');el.textContent=message;el.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.hidden=true,4500);}
export function errorMessage(error){return error?.message||uiText('目前無法完成，請稍後再試。');}
export function title(product){return product?.translationAvailable&&product.localizedTitle||product?.title||'商品';}
export function productCard(product,options={}){return renderProductCard(product,options,{escape,positiveId,imageUrl,title,route});}
export function bindProductCards(ctx){
 const main=document.querySelector('#buyer-main');
 main.addEventListener('load',event=>{if(event.target.matches?.('.product-picture img')){const placeholder=event.target.parentElement.querySelector('.product-card-placeholder');if(placeholder)placeholder.hidden=true;}},{capture:true,signal:ctx.signal});
 main.addEventListener('error',event=>{if(event.target.matches?.('.product-picture img'))event.target.remove();},{capture:true,signal:ctx.signal});
 let dialog;
 ctx.action('product-card-share',async button=>{
  const url=shareUrl({type:'product',id:button.dataset.shareProduct,origin:'https://agoramarket.purrtechllc.com',organic:true});
  const text=catalogLabel('shareProductTitle',{title:button.dataset.shareTitle})+'\n'+catalogLabel('shareProductPrice',{price:button.dataset.sharePrice})+'\n\n'+catalogLabel('shareProductDetails',{url});
  if(navigator.share){try{await navigator.share({text});}catch(error){if(error.name!=='AbortError')throw error;}return;}
  if(!dialog){dialog=document.createElement('dialog');dialog.className='catalog-filter-dialog product-share-fallback';dialog.innerHTML=`<h2>${escape(catalogLabel('share'))}</h2><textarea readonly aria-label="${escape(catalogLabel('share'))}"></textarea><button type="button" data-action="product-card-copy">${escape(catalogLabel('copy'))}</button><button type="button" class="secondary" data-action="product-card-share-close">${escape(catalogLabel('close'))}</button>`;main.append(dialog);}
  dialog.querySelector('textarea').value=text;dialog.showModal();
 });
 ctx.action('product-card-share-close',()=>dialog?.close());ctx.action('product-card-copy',async()=>{if(!dialog)return;await navigator.clipboard.writeText(dialog.querySelector('textarea').value);dialog.close();ctx.toast(catalogLabel('depositCopiedToClipboard'));});ctx.cleanup(()=>{if(dialog?.open)dialog.close();});
}

export function detailReadable(id,current=()=>true){requestAnimationFrame(()=>requestAnimationFrame(()=>{if(!current())return;const at=performance.now();try{performance.mark('agora-buyer-detail-readable',{detail:{productId:id}});}catch{performance.mark('agora-buyer-detail-readable');}document.dispatchEvent(new CustomEvent('agora-buyer-detail-readable',{detail:{id,at}}));}));}

export function boardLauncher(ctx,productId){if(!ctx.active()||ctx.find('#product-board'))return;const host=document.createElement('section');host.className='panel';host.id='product-board';host.innerHTML='<h2>商品討論區</h2><p>查看商品留言、提問與回覆。</p>'+button('查看商品討論','load-product-board','secondary');document.querySelector('#buyer-main').append(host);ctx.action('load-product-board',async()=>{const{openBoard}=await import('./board.js');if(ctx.active())await openBoard(ctx,productId);});}
