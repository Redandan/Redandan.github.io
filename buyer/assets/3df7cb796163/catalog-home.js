import{catalogViewMemory}from'./catalog-view-memory.js';
import{currentLocale}from'./locale.js';
import{bindActivityFeed}from'./catalog-activity.js';
import{homeRecommendations,selectHomeRecommendations,recommendationMarkup,bindRecommendationLayout}from'./catalog-recommendations.js';
import{escape,icon,productCard,list,positiveId,route,loadingSkeleton}from'./ui.js';
import{categories,catalogText as t,readFilters,filterRoute,filterCount,searchBody,categoryValue}from'./catalog-core.js';
import{filterDialog,bindFilters}from'./catalog-search.js';
import{materialIcon}from'./material-icons.js';

addEventListener('agora-buyer-orders-changed',()=>catalogViewMemory.invalidate());
for(const type of ['agora-buyer-auth','pagehide'])addEventListener(type,()=>catalogViewMemory.clear());
addEventListener('storage',event=>{if(event.key==null||event.key==='flutter.userinfo'||/^(?:flutter\.(?:auth_token|refresh_token)$|access_token$|refresh_token$|agora\.(?:webSession|guestCart)\.)/.test(event.key))catalogViewMemory.clear();});
const label=key=>escape(t(key));
const touchButton=(action,icon,labelText)=>`<button type="button" class="secondary" data-action="${action}" aria-label="${escape(labelText)}">${materialIcon(icon)}</button>`;
const pageSize=()=>innerWidth>=1100?24:innerWidth>=650?16:10;
function viewKey(target){const filters=readFilters(target.query),category=categoryValue(filters.category),categoryKey=filters.category?(category===''?'all':category??filters.category):undefined;return JSON.stringify([currentLocale(),pageSize(),filterRoute({...filters,category:categoryKey}),target.query.get('marketplaceDemo')??new URLSearchParams(location.search).get('marketplaceDemo')]);}
export function canRestoreHome(target){return ['/', '/home'].includes(target.path)&&catalogViewMemory.has(viewKey(target));}
export async function home(ctx){
 const ticket=catalogViewMemory.begin(viewKey(ctx)),saved=catalogViewMemory.restore(ticket);ctx.refreshOnAuth();
 const filters=readFilters(ctx.query),size=pageSize(),keyword=filters.keyword||'',selected=categoryValue(filters.category);
 const searchUrl=filterRoute(filters,'/search'),shortcuts=[['favorite','/favorites','favorite_border'],['cart','/cart','shopping_cart_outlined'],['messages','/chat','chat_bubble_outline']];
 const ordered=[...categories.filter(c=>c.value===selected&&selected),...categories.filter(c=>!selected||c.value!==selected)];
 const chips=ordered.map(category=>`<button type="button" class="secondary" data-home-category="${escape(category.name)}" aria-pressed="${category.value===selected}" aria-label="${escape(t('productListCategorySemantic',{categoryName:t(category.label)}))}">${escape(t(category.shortLabel||category.label))}</button>`).join('');
 const filterButton=`<button type="button" class="secondary catalog-home-filter" data-action="catalog-filters" aria-label="${label('filter')}">${materialIcon('tune')}<span>${label('filter')}${filterCount(filters)?' · '+filterCount(filters):''}</span></button>`;
 ctx.header(t('searchProducts'),false,{shortcuts:false,titleMarkup:`<div class="catalog-home-toolbar"><div class="catalog-home-search"><a href="${route(searchUrl)}">${materialIcon('search_rounded')}<span>${escape(keyword||t('searchProducts'))}</span></a>${keyword?touchButton('home-clear-keyword','close',t('clearSearch')):''}</div><div class="catalog-home-shortcuts">${shortcuts.map(([key,path,name])=>`<a href="${route(path)}" aria-label="${label(key)}" title="${label(key)}">${materialIcon(name)}</a>`).join('')}</div><div class="catalog-home-categories"><div class="catalog-home-category-strip">${chips}</div>${touchButton('home-categories','grid_view_rounded',t('productCategories'))}${filterButton}</div></div>`});
 const selectedChips=['keyword','category','brand','inStock','productType','sourceRegion','sourcePlatform'].filter(key=>filters[key]).map(key=>{const value=key==='category'?(categories.find(c=>c.value===selected)?.label?t(categories.find(c=>c.value===selected).label):filters[key]):key==='inStock'?t('inStock'):key==='productType'?t({PHYSICAL:'productTypePhysical',DIGITAL_SERVICE:'productTypeDigital',CREATOR_SUBSCRIPTION:'productTypeCreatorSubscription'}[filters[key]]):filters[key];return`<button type="button" class="secondary" data-home-remove="${key}" aria-label="${escape(t('clearFilters')+': '+value)}">${escape(value)} ×</button>`;}).join('');
 if(!saved)ctx.resetScroll?.();
 ctx.render(saved?.node||`<section class="welcome catalog-home"><section class="catalog-home-overview"><div><h1>${escape(keyword?t('productListSearchScope',{keyword}):selected?t('productListCategoryProducts'):t('productListOverview'))}</h1><p id="catalog-result-count">${label('productListUpdatingProducts')}</p></div><div class="product-trust-points">${[['payments_outlined','productListUsdtPricing'],['local_shipping_outlined','productListPlatformDelivery'],['inventory_2_outlined','productListInventoryVisible']].map(([name,key])=>`<span>${materialIcon(name)}${label(key)}</span>`).join('')}</div></section>${selectedChips?`<div class="catalog-home-active catalog-chips">${selectedChips}</div>`:''}<div id="home-recommendation-host" hidden></div><div id="catalog-results" class="product-grid" aria-busy="true">${loadingSkeleton(t('productListUpdatingProducts'))}</div><div id="catalog-pagination" role="status"></div>${filterDialog(filters)}<dialog id="catalog-category-dialog" class="catalog-filter-dialog" aria-labelledby="catalog-category-title"><header>${touchButton('home-category-close','close',t('close'))}<h2 id="catalog-category-title">${label('productCategories')}</h2></header><div class="catalog-home-category-picker">${categories.map(category=>`<button type="button" class="secondary" data-home-category="${escape(category.name)}" aria-pressed="${category.value===selected}"><span class="catalog-category-symbol">${materialIcon(category.icon)}</span><span>${escape(t(category.label))}</span></button>`).join('')}</div></dialog></section>`);
 const updateActivity=bindActivityFeed(ctx,{preserve:true}),updateRecommendationLayout=bindRecommendationLayout(ctx);
 bindFilters(ctx,filters);const picker=ctx.find('#catalog-category-dialog');ctx.action('home-categories',()=>picker.showModal());ctx.action('home-category-close',()=>picker.close());ctx.cleanup(()=>{if(picker.open)picker.close();});
 ctx.action('home-clear-keyword',()=>{const next={...filters};delete next.keyword;ctx.go(filterRoute(next));});
 const onChoice=event=>{const chosen=event.target.closest('[data-home-category]'),remove=event.target.closest('[data-home-remove]');if(chosen){if(picker.open)picker.close();ctx.go(filterRoute({...filters,category:chosen.dataset.homeCategory==='all'?undefined:chosen.dataset.homeCategory}));}if(remove){const next={...filters};delete next[remove.dataset.homeRemove];ctx.go(filterRoute(next));}};
 document.querySelector('#buyer-header').addEventListener('click',onChoice,{signal:ctx.signal});ctx.find('.catalog-home').addEventListener('click',onChoice,{signal:ctx.signal});
 picker.addEventListener('click',event=>{if(event.target===picker){const r=picker.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)picker.close();}},{signal:ctx.signal});
 // Keep the original scroll thresholds while restoring an already loaded view.
 const main=document.querySelector('#buyer-main'),grid=ctx.find('#catalog-results'),pagination=ctx.find('#catalog-pagination'),root=ctx.find('.catalog-home');
 let rows=saved?.rows||[],seen=new Set(saved?.seen||[]),page=saved?.page||1,busy=false,hasMore=saved?.hasMore??true,loaded=saved?.loaded===true,readAt=saved?.readAt||0;
 let viewRevision=saved?.revision??catalogViewMemory.revision();
 let firstPage=saved?.firstPage||[],featured=saved?.featured||[],featuredMarkup=saved?.featuredMarkup||'',recPending=false,recVersion=0,refreshFailed=false,appendFailed=saved?.appendFailed===true;
 let hasScrolled=saved?.hasScrolled===true,lastTriggerOffset=saved?Math.max(saved.lastTriggerOffset||0,saved.scroll):0,loadFrame=0;
 function scheduleMore(){if(loadFrame||!ctx.active())return;loadFrame=requestAnimationFrame(()=>{loadFrame=0;if(!ctx.active())return;const top=main.scrollTop;if(top>24)hasScrolled=true;if(!hasScrolled||busy||refreshFailed||!hasMore||top-lastTriggerOffset<160)return;const preload=Math.max(900,Math.min(2400,main.clientHeight*2.2));if(main.scrollHeight-main.clientHeight-top<preload){lastTriggerOffset=top;void load();}});}
 main.addEventListener('scroll',scheduleMore,{passive:true,signal:ctx.signal});ctx.cleanup(()=>cancelAnimationFrame(loadFrame));
 function status(){
  grid.setAttribute('aria-busy',String(busy));pagination.setAttribute('aria-busy',String(busy));
  ctx.find('#catalog-result-count').textContent=t('productListLoadedCount',{count:rows.length});
  pagination.innerHTML=refreshFailed?`<button type="button" class="secondary" data-action="home-refresh">${label('retry')}</button>`:hasMore?`<button type="button" class="secondary" data-action="home-more">${label(appendFailed?'retry':'txtaf90a08fec')}</button>`:`<p>${label('listEndReached')}</p>`;
 }
 function emptyState(){return `<section class="empty"><h2>${label('productListNoMatchingProducts')}</h2><p>${label('productListNoMatchingProductsDescription')}</p><div class="inline-actions"><a class="secondary" href="${route('/demands'+(keyword?'?keyword='+encodeURIComponent(keyword):''))}">${label('productListCreateDemand')}</a><button type="button" class="secondary" data-action="catalog-filters">${label('filter')}</button></div></section>`;}
 const card=product=>productCard(product,{density:'listing',share:true,sales:true});
 function replaceRows(next){
  const old=new Map(rows.map(product=>[String(product.id),card(product)])),nodes=new Map([...grid.querySelectorAll(':scope>.product-card-frame')].map(node=>[node.querySelector('[data-product-id]')?.dataset.productId,node]));
  if(next.length===rows.length&&next.every((product,index)=>String(product.id)===String(rows[index].id)&&card(product)===old.get(String(product.id))))return;
  const elements=next.map(product=>{const id=String(product.id),html=card(product);if(old.get(id)===html&&nodes.has(id))return nodes.get(id);const template=document.createElement('template');template.innerHTML=html;return template.content.firstElementChild;});
  if(elements.length)grid.replaceChildren(...elements);else grid.innerHTML=emptyState();
 }
 function paintFeatured(values,result={}){
  featured=values;const html=recommendationMarkup(values,result),host=ctx.find('#home-recommendation-host');if(html!==featuredMarkup){host.innerHTML=html;featuredMarkup=html;}host.hidden=!values.length;updateRecommendationLayout();
 }
 function recoverRecommendations(flight){
  if(Object.keys(filters).length||!firstPage.length)return;const version=++recVersion;recPending=true;
  void (flight||homeRecommendations(ctx)).then(result=>{if(!ctx.active()||version!==recVersion)return;recPending=false;const values=selectHomeRecommendations(firstPage,result).filter(product=>!seen.has(String(product.id)));for(const product of values)seen.add(String(product.id));paintFeatured(values,result||{});});
 }
 async function load({refresh=false}={}){
  if(busy||!ctx.active()||!refresh&&!hasMore)return;busy=true;refreshFailed=false;appendFailed=false;grid.setAttribute('aria-busy','true');pagination.setAttribute('aria-busy','true');
  const pendingButton=pagination.querySelector('button');if(pendingButton)pendingButton.textContent=t('productListUpdatingProducts');else pagination.textContent=t('productListUpdatingProducts');
  const revision=catalogViewMemory.revision(),start=refresh?1:page,through=refresh?Math.max(1,page-1):1,values=[];let response,read=0,initial=[];
  const recFlight=Object.keys(filters).length===0&&(refresh||!loaded)?homeRecommendations(ctx):null;
  if(refresh){recVersion++;recPending=!!recFlight;}
  try{
   for(let offset=0;offset<through;offset++){
    response=await ctx.api.publicRequest('/products/search',{method:'POST',body:searchBody(filters,start+offset,size),signal:AbortSignal.any([ctx.signal,AbortSignal.timeout(15000)])});if(!ctx.active())return;
    const batch=list(response);if(offset===0)initial=batch;values.push(...batch);read++;if(response?.last===true||typeof response?.last!=='boolean'&&batch.length<size)break;
   }
   const recResult=refresh&&recFlight?await recFlight:null;if(!ctx.active())return;
   const oldIds=new Set(rows.map(p=>String(p.id))),featuredIds=new Set(featured.map(p=>String(p.id)));
   const newFeatured=refresh?selectHomeRecommendations(initial,recResult).filter(p=>featuredIds.has(String(p.id))||!oldIds.has(String(p.id))):featured,newSeen=new Set(refresh?newFeatured.map(p=>String(p.id)):seen);
   const unique=values.filter(product=>{const id=positiveId(product?.id);if(!id||newSeen.has(id))return false;newSeen.add(id);return true;});
   if(refresh){replaceRows(unique);rows=unique;firstPage=initial;recPending=false;paintFeatured(newFeatured,recResult||{});}
   else{if(!loaded){grid.innerHTML='';firstPage=initial;}grid.insertAdjacentHTML('beforeend',unique.map(card).join(''));rows=rows.concat(unique);if(!rows.length)grid.innerHTML=emptyState();}
   seen=newSeen;const lastBatch=list(response);hasMore=typeof response?.last==='boolean'?!response.last:lastBatch.length>=size;page=start+read;loaded=true;viewRevision=revision;readAt=Date.now();busy=false;status();updateActivity();ctx.restoreScroll?.();
   document.dispatchEvent(new CustomEvent('agora-buyer-catalog-visible'));if(!refresh&&start===1)recoverRecommendations(recFlight);
  }catch(error){
   if(!ctx.active()||error.name==='AbortError')return;recPending=false;refreshFailed=refresh;appendFailed=!refresh;
   if(!loaded)grid.innerHTML=`<section class="empty"><h2>${label('productLoadFailed')}</h2><p>${escape(error.message||t('tryAgainLater'))}</p></section>`;
   pagination.innerHTML=`<button type="button" class="secondary" data-action="${refresh?'home-refresh':'home-more'}">${label('retry')}</button>`;
  }finally{busy=false;if(ctx.active()){grid.setAttribute('aria-busy','false');pagination.setAttribute('aria-busy','false');scheduleMore();}}
 }
 addEventListener('agora-buyer-orders-changed',()=>{if(loaded&&!busy)void load({refresh:true});},{signal:ctx.signal});
 ctx.action('home-more',()=>load());ctx.action('home-refresh',()=>load({refresh:true}));
 ctx.cleanup(()=>catalogViewMemory.remember(ticket,{loaded,revision:viewRevision,rows,seen:[...seen],page,hasMore,readAt,firstPage,featured,featuredMarkup,recPending,appendFailed,refreshRequired:refreshFailed||busy,hasScrolled,lastTriggerOffset,scroll:main.scrollTop,categoryScroll:document.querySelector('.catalog-home-category-strip')?.scrollLeft||0},root));
 if(saved){
  // Image load events may finish while the kept subtree is detached.
  for(const img of root.querySelectorAll('.product-picture img'))if(img.complete){if(img.naturalWidth>0){const placeholder=img.parentElement.querySelector('.product-card-placeholder');if(placeholder)placeholder.hidden=true;}else if(img.currentSrc)img.remove();}
  status();updateActivity();updateRecommendationLayout();document.querySelector('.catalog-home-category-strip').scrollLeft=saved.categoryScroll||0;ctx.restoreScroll?.(saved.scroll);
  document.dispatchEvent(new CustomEvent('agora-buyer-catalog-visible'));
  if(saved.refreshRequired||Date.now()-readAt>=30000)void load({refresh:true});else if(saved.recPending)recoverRecommendations();
 }else await load();
}
