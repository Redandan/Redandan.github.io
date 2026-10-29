import{fallbackCardImage}from'./image-variants.js';
import{cardSnapshot,createProductPageWindow,captureProductAnchor,restoreProductAnchor,alignProductWindow}from'./product-page-window.js';
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
 ctx.render(saved?.node||`<section class="welcome catalog-home"><section class="catalog-home-overview"><div><h1>${escape(keyword?t('productListSearchScope',{keyword}):selected?t('productListCategoryProducts'):t('productListOverview'))}</h1><p id="catalog-result-count">${label('productListUpdatingProducts')}</p></div><div class="product-trust-points">${[['payments_outlined','productListUsdtPricing'],['local_shipping_outlined','productListPlatformDelivery'],['inventory_2_outlined','productListInventoryVisible']].map(([name,key])=>`<span>${materialIcon(name)}${label(key)}</span>`).join('')}</div></section>${selectedChips?`<div class="catalog-home-active catalog-chips">${selectedChips}</div>`:''}<div id="home-recommendation-host" hidden></div><div id="catalog-previous" class="inline-actions" hidden></div><div id="catalog-results" class="product-grid" aria-busy="true">${loadingSkeleton(t('productListUpdatingProducts'))}</div><div id="catalog-pagination" role="status"></div>${filterDialog(filters)}<dialog id="catalog-category-dialog" class="catalog-filter-dialog" aria-labelledby="catalog-category-title"><header>${touchButton('home-category-close','close',t('close'))}<h2 id="catalog-category-title">${label('productCategories')}</h2></header><div class="catalog-home-category-picker">${categories.map(category=>`<button type="button" class="secondary" data-home-category="${escape(category.name)}" aria-pressed="${category.value===selected}"><span class="catalog-category-symbol">${materialIcon(category.icon)}</span><span>${escape(t(category.label))}</span></button>`).join('')}</div></dialog></section>`);
 const updateActivity=bindActivityFeed(ctx,{preserve:true}),updateRecommendationLayout=bindRecommendationLayout(ctx);
 bindFilters(ctx,filters);const picker=ctx.find('#catalog-category-dialog');ctx.action('home-categories',()=>picker.showModal());ctx.action('home-category-close',()=>picker.close());ctx.cleanup(()=>{if(picker.open)picker.close();});
 ctx.action('home-clear-keyword',()=>{const next={...filters};delete next.keyword;ctx.go(filterRoute(next));});
 const onChoice=event=>{const chosen=event.target.closest('[data-home-category]'),remove=event.target.closest('[data-home-remove]');if(chosen){if(picker.open)picker.close();ctx.go(filterRoute({...filters,category:chosen.dataset.homeCategory==='all'?undefined:chosen.dataset.homeCategory}));}if(remove){const next={...filters};delete next[remove.dataset.homeRemove];ctx.go(filterRoute(next));}};
 document.querySelector('#buyer-header').addEventListener('click',onChoice,{signal:ctx.signal});ctx.find('.catalog-home').addEventListener('click',onChoice,{signal:ctx.signal});
 picker.addEventListener('click',event=>{if(event.target===picker){const r=picker.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)picker.close();}},{signal:ctx.signal});

 const main=document.querySelector('#buyer-main'),grid=ctx.find('#catalog-results'),pagination=ctx.find('#catalog-pagination'),root=ctx.find('.catalog-home');
 const pages=createProductPageWindow({rows:saved?.rows||[],pages:saved?.windowPages||[],offset:saved?.offset||0});
 let rows=pages.rows(),seen=new Set(saved?.seen||[]),page=pages.next(),busy=false,hasMore=pages.hasMore(),loaded=saved?.loaded===true,readAt=saved?.readAt||0;
 let viewRevision=saved?.revision??catalogViewMemory.revision(),firstPage=saved?.firstPage||[],featured=saved?.featured||[],featuredMarkup=saved?.featuredMarkup||'',recPending=false,recVersion=0,refreshFailed=false,appendFailed=saved?.appendFailed===true;
 let hasScrolled=saved?.hasScrolled===true,lastTriggerOffset=saved?Math.max(saved.lastTriggerOffset||0,saved.scroll):0,lastScroll=saved?.scroll||0,loadFrame=0,refreshGeneration=0,refreshVisibleCount=0;
 const pagerMarkup=new WeakMap(),paintPager=(node,html)=>{if(pagerMarkup.get(node)!==html){node.innerHTML=html;pagerMarkup.set(node,html);}};
 const refreshing=new Set(),cardHtml=new Map(rows.map(product=>[String(product.id),JSON.stringify(product)]));
 function scheduleMore(){if(loadFrame||!ctx.active())return;loadFrame=requestAnimationFrame(()=>{loadFrame=0;if(!ctx.active())return;const top=main.scrollTop,up=top<lastScroll;lastScroll=top;if(top>24)hasScrolled=true;if(up&&top<500&&pages.hasPrevious()&&!busy){void load({previous:true});return;}refreshVisiblePages();if(!hasScrolled||busy||refreshFailed||!hasMore||top-lastTriggerOffset<160)return;const preload=Math.max(900,Math.min(2400,main.clientHeight*2.2));if(main.scrollHeight-main.clientHeight-top<preload){lastTriggerOffset=top;void load();}});}
 main.addEventListener('scroll',scheduleMore,{passive:true,signal:ctx.signal});ctx.cleanup(()=>cancelAnimationFrame(loadFrame));
 function status(){
  grid.setAttribute('aria-busy',String(busy||refreshVisibleCount>0));pagination.setAttribute('aria-busy',String(busy));ctx.find('#catalog-result-count').textContent=t('productListLoadedCount',{count:rows.length});
  const previous=ctx.find('#catalog-previous');previous.hidden=!pages.hasPrevious();paintPager(previous,pages.hasPrevious()?`<button type="button" class="secondary" data-action="home-previous" ${busy?'disabled':''}>${label('previousPage')}</button>`:'');
  paintPager(pagination,refreshFailed?`<button type="button" class="secondary" data-action="home-refresh">${label('retry')}</button>`:hasMore?`<button type="button" class="secondary" data-action="home-more" ${busy?'disabled':''}>${label(appendFailed?'retry':'txtaf90a08fec')}</button>`:`<p>${label('listEndReached')}</p>`);
 }
 function emptyState(){return `<section class="empty"><h2>${label('productListNoMatchingProducts')}</h2><p>${label('productListNoMatchingProductsDescription')}</p><div class="inline-actions"><a class="secondary" href="${route('/demands'+(keyword?'?keyword='+encodeURIComponent(keyword):''))}">${label('productListCreateDemand')}</a><button type="button" class="secondary" data-action="catalog-filters">${label('filter')}</button></div></section>`;}
 const card=product=>productCard(product,{density:'listing',share:true,sales:true});

 function replaceRows(next){
  const anchor=captureProductAnchor(main,grid,':scope>.product-card-frame'),nodes=new Map([...grid.querySelectorAll(':scope>.product-card-frame')].map(node=>[node.querySelector('[data-product-id]')?.dataset.productId,node])),oldOrder=[...grid.querySelectorAll(':scope>.product-card-frame')];
  const elements=next.map(product=>{const id=String(product.id),signature=JSON.stringify(product);let node=nodes.get(id);if(!node||cardHtml.get(id)!==signature){const template=document.createElement('template');template.innerHTML=card(product);node=template.content.firstElementChild;}cardHtml.set(id,signature);return node;});
  const liveIds=new Set(next.map(p=>String(p.id)));for(const id of cardHtml.keys())if(!liveIds.has(id))cardHtml.delete(id);
  if(elements.length){if(elements.length!==oldOrder.length||elements.some((n,i)=>n!==oldOrder[i]))grid.replaceChildren(...elements);}else grid.innerHTML=emptyState();
  let index=0;const mapping=new Map();for(const meta of pages.pages())for(let i=0;i<meta.count;i++)mapping.set(String(next[index++].id),meta.page);for(const node of elements)node.dataset.windowPage=String(mapping.get(node.querySelector('[data-product-id]').dataset.productId));alignProductWindow(grid,pages.offset(),':scope>.product-card-frame');
  rows=next;updateActivity();restoreProductAnchor(main,anchor);
 }
 function paintFeatured(values,result={}){featured=values;const html=recommendationMarkup(values,result),host=ctx.find('#home-recommendation-host');if(html!==featuredMarkup){host.innerHTML=html;featuredMarkup=html;}host.hidden=!values.length;updateRecommendationLayout();}
 function recoverRecommendations(flight){if(Object.keys(filters).length||!firstPage.length)return;const version=++recVersion;recPending=true;void(flight||homeRecommendations(ctx)).then(result=>{if(!ctx.active()||version!==recVersion)return;recPending=false;const oldFeatured=new Set(featured.map(p=>String(p.id))),currentRows=new Set(rows.map(p=>String(p.id))),values=selectHomeRecommendations(firstPage,result).filter(p=>oldFeatured.has(String(p.id))||!currentRows.has(String(p.id))).map(cardSnapshot);paintFeatured(values,result||{});seen=new Set([...rows,...featured].map(p=>String(p.id)));});}
 const requestPage=page=>ctx.api.publicRequest('/products/search',{method:'POST',body:searchBody(filters,page,size),signal:AbortSignal.any([ctx.signal,AbortSignal.timeout(15000)])});
 function apply(page,response,{previous=false,revision=catalogViewMemory.revision()}={}){
  const anchor=captureProductAnchor(main,grid,':scope>.product-card-frame'),existing=new Set(featured.map(p=>String(p.id)));const batch=list(response).map(cardSnapshot),unique=batch.filter(p=>{const id=positiveId(p?.id);if(!id||existing.has(id))return false;existing.add(id);return true;}),last=response?.last===true||response?.last!==false&&batch.length<size,options={last,readAt:revision===catalogViewMemory.revision()?Date.now():0};
  if(previous)pages.prepend(page,unique,options);else pages.put(page,unique,options);if(page===1)firstPage=batch;replaceRows(pages.rows());seen=new Set([...rows,...featured].map(p=>String(p.id)));viewRevision=revision;hasMore=pages.hasMore();loaded=true;readAt=Date.now();status();restoreProductAnchor(main,anchor);ctx.restoreScroll?.();document.dispatchEvent(new CustomEvent('agora-buyer-catalog-visible'));
 }
 async function load({refresh=false,previous=false}={}){
  if(refresh){pages.markStale();return refreshWindow();}if(busy||!ctx.active()||!previous&&!hasMore)return;const next=previous?pages.first()-1:pages.next();if(next<1)return;busy=true;appendFailed=false;status();const revision=catalogViewMemory.revision(),recFlight=Object.keys(filters).length===0&&!loaded?homeRecommendations(ctx):null;
  try{const response=await requestPage(next);if(!ctx.active())return;apply(next,response,{previous,revision});lastTriggerOffset=main.scrollTop;if(next===1)recoverRecommendations(recFlight);}
  catch(error){if(!ctx.active()||error.name==='AbortError')return;appendFailed=true;if(!loaded)grid.innerHTML=`<section class="empty"><h2>${label('productLoadFailed')}</h2><p>${escape(error.message||t('tryAgainLater'))}</p></section>`;}
  finally{busy=false;if(ctx.active()){status();scheduleMore();}}
 }
 function visiblePages(){const frame=main.getBoundingClientRect(),set=new Set([...grid.querySelectorAll('[data-window-page]')].filter(n=>{const r=n.getBoundingClientRect();return r.bottom>frame.top&&r.top<frame.bottom;}).map(n=>Number(n.dataset.windowPage)));if(!set.size)set.add(pages.first());return set;}
 async function refreshPage(page,{visible=false,generation=refreshGeneration}={}){
  if(refreshing.has(page)||!pages.pages().some(p=>p.page===page))return true;refreshing.add(page);if(visible)refreshVisibleCount++;status();const revision=catalogViewMemory.revision();
  try{const response=await requestPage(page);if(!ctx.active()||generation!==refreshGeneration||!pages.pages().some(p=>p.page===page))return false;apply(page,response,{revision});return true;}
  catch(error){if(ctx.active()&&generation===refreshGeneration&&error.name!=='AbortError')refreshFailed=true;return false;}
  finally{refreshing.delete(page);if(visible)refreshVisibleCount--;if(ctx.active())status();}
 }
 function refreshVisiblePages(){if(busy||refreshFailed)return;const visible=visiblePages();for(const meta of pages.pages())if(visible.has(meta.page)&&Date.now()-meta.readAt>=30000)void refreshPage(meta.page,{visible:true});}
 async function refreshWindow(){
  const generation=++refreshGeneration,visible=visiblePages(),queue=pages.pages().filter(p=>Date.now()-p.readAt>=30000).sort((a,b)=>Number(visible.has(b.page))-Number(visible.has(a.page)));refreshFailed=false;
  if(Object.keys(filters).length===0)recoverRecommendations();
  async function worker(){while(ctx.active()&&generation===refreshGeneration&&queue.length&&!refreshFailed){const meta=queue.shift();if(!visible.has(meta.page))await new Promise(r=>setTimeout(r,120));if(!ctx.active()||generation!==refreshGeneration)return;await refreshPage(meta.page,{visible:visible.has(meta.page),generation});}}
  await Promise.all([worker(),worker()]);if(ctx.active())status();
 }
 addEventListener('agora-buyer-orders-changed',()=>{pages.markStale();void refreshWindow();},{signal:ctx.signal});
 ctx.action('home-more',()=>load());ctx.action('home-previous',()=>load({previous:true}));ctx.action('home-refresh',()=>load({refresh:true}));
 ctx.cleanup(()=>{refreshGeneration++;catalogViewMemory.remember(ticket,{loaded,revision:viewRevision,rows,windowPages:pages.pages(),offset:pages.offset(),seen:[...seen],page:pages.next(),hasMore,readAt,firstPage,featured,featuredMarkup,recPending,appendFailed,refreshRequired:refreshFailed||busy,hasScrolled,lastTriggerOffset,scroll:main.scrollTop,categoryScroll:document.querySelector('.catalog-home-category-strip')?.scrollLeft||0},root);});
 if(saved){for(const img of root.querySelectorAll('.product-picture img'))if(img.complete){if(img.naturalWidth>0){const placeholder=img.parentElement.querySelector('.product-card-placeholder');if(placeholder)placeholder.hidden=true;}else if(img.currentSrc&&!fallbackCardImage(img))img.remove();}status();updateActivity();updateRecommendationLayout();document.querySelector('.catalog-home-category-strip').scrollLeft=saved.categoryScroll||0;ctx.restoreScroll?.(saved.scroll);document.dispatchEvent(new CustomEvent('agora-buyer-catalog-visible'));if(saved.refreshRequired)pages.markStale();if(saved.refreshRequired||Date.now()-readAt>=30000)void refreshWindow();else{refreshVisiblePages();if(saved.recPending)recoverRecommendations();}}
 else await load();
}
