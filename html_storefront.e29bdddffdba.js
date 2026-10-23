/* Public, ephemeral product reading. All account and commerce actions stay in the app. */
(() => {
  'use strict';
  window.createAgoraProductDetail = ({root, api, locale, headersReady, retired, openNative, goHome, nativeUnavailable=()=>false}) => {
    const panel=document.createElement('section');
    panel.className='hs-detail';panel.hidden=true;panel.setAttribute('aria-label','商品詳情');
    panel.innerHTML='<header class="hs-detail-header"><button data-detail-back aria-label="返回商品列表">←</button><span>商品詳情</span></header><div class="hs-detail-scroll" tabindex="-1"></div><footer class="hs-detail-footer"><button data-detail-native>檢視完整選項與購買</button><span role="status" aria-live="polite"></span></footer>';
    root.appendChild(panel);
    const content=panel.querySelector('.hs-detail-scroll'),button=panel.querySelector('[data-detail-native]'),notice=panel.querySelector('[role="status"]');
    const reads=new Map(),metrics=[];
    let selected=null,epoch=0,stopped=false,nativeFailed=false,nativePending=false,imageTimer=null;
    const cancelImageTimer=()=>{clearTimeout(imageTimer);imageTimer=null;};
    const alive=()=>!stopped&&!retired();
    const current=(id,version)=>alive()&&selected===id&&epoch===version;
    const node=(tag,value,cls)=>{const e=document.createElement(tag);if(value!=null)e.textContent=String(value);if(cls)e.className=cls;return e;};
    const imageUrl=value=>{try{const u=new URL(value);return u.protocol==='https:'?u.href:'';}catch{return '';}};
    const valid=p=>p&&Number.isSafeInteger(p.id)&&typeof p.title==='string'&&p.title.trim().length>0;
    const canonical=o=>JSON.stringify(Object.entries(o).map(([k,v])=>[k.toLowerCase(),v]).sort(([a],[b])=>a.localeCompare(b)));
    function get(id,{retry=false}={}) {
      if(!alive())return Promise.resolve(null);
      if(!retry&&reads.has(id))return reads.get(id).promise;
      reads.get(id)?.controller.abort();
      const entry={at:null,body:null,used:false,controller:new AbortController()};
      reads.set(id,entry);
      entry.promise=(async()=>{
        const headers=await headersReady;
        if(!alive()||reads.get(id)!==entry)return null;
        entry.headers=headers;
        const timeout=setTimeout(()=>entry.controller.abort(),12000);
        try {
          const response=await fetch(`${api}/products/${id}`,{method:'GET',credentials:'omit',priority:'high',headers,signal:entry.controller.signal});
          if(!response.ok)throw Error(response.status===404?'not-found':'unavailable');
          const body=await response.json();
          if(!alive()||reads.get(id)!==entry)return null;
          if(!valid(body)||body.id!==id)throw Error('invalid-product');
          entry.body=body;entry.at=performance.now();return body;
        } finally {clearTimeout(timeout);}
      })();
      // A native read can join the same promise, including while it is pending.
      entry.promise.catch(()=>{});
      return entry.promise;
    }
    function readable(id,version,image) {
      if(!current(id,version)||document.visibilityState!=='visible')return;
      if(image&&(!image.complete||image.naturalWidth<=0))return;
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        if(!current(id,version)||panel.dataset.ready==='true'||(image&&image.naturalWidth<=0))return;
        panel.dataset.ready='true';
        const mark={type:'readable',id,at:performance.now(),image:!!image};metrics.push(mark);
        window.dispatchEvent(new CustomEvent('agora-html-detail-readable',{detail:JSON.stringify(mark)}));
      }));
    }
    function showProduct(p,id,version) {
      if(!current(id,version))return;
      cancelImageTimer();delete panel.dataset.imageError;delete panel.dataset.ready;
      const title=p.translationAvailable&&p.localizedTitle||p.title;
      const description=p.translationAvailable&&p.localizedDescription||p.description||'';
      const body=node('article',null,'hs-detail-content');
      const photos=(Array.isArray(p.imageUrls)?p.imageUrls:[]).map(imageUrl).filter(Boolean);
      let firstImage=null;
      if(photos.length){
        const image=node('img',null,'hs-detail-photo');image.alt=title;image.width=600;image.height=600;image.decoding='async';image.fetchPriority='high';image.src=photos[0];
        let settled=false,recovery=null,retried=false;
        const showRecovery=failed=>{
          if(settled||!current(id,version)||!image.isConnected)return;
          cancelImageTimer();
          recovery?.remove();
          recovery=node('div',null,'hs-detail-image-error');
          recovery.appendChild(node('p',failed?'商品圖片暫時無法顯示':'商品圖片仍在載入，你可以繼續閱讀或重試圖片。'));
          const retry=node('button','重新載入圖片');retry.addEventListener('click',()=>{if(current(id,version))showProduct(p,id,version);});recovery.appendChild(retry);
          if(failed){settled=true;image.replaceWith(recovery);image.removeAttribute('src');}
          else image.after(recovery);
          panel.dataset.imageError='true';
        };
        image.addEventListener('load',()=>{
          if(settled||!current(id,version)||!image.isConnected)return;
          settled=true;cancelImageTimer();recovery?.remove();delete panel.dataset.imageError;readable(id,version,image);
        },{once:true});
        image.addEventListener('error',()=>{
          if(settled||!current(id,version)||!image.isConnected)return;
          if(retried){showRecovery(true);return;}
          retried=true;metrics.push({type:'image-retry',id,at:performance.now()});
          const src=image.currentSrc||image.src;image.removeAttribute('src');
          setTimeout(()=>{if(!settled&&current(id,version)&&image.isConnected)image.src=src;},250);
        });
        // A slow connection is still allowed to finish. Do not discard its
        // downloaded bytes or mistake a timeout for a decoded, painted image.
        imageTimer=setTimeout(()=>showRecovery(false),12000);
        firstImage=image;body.appendChild(image);
      }else body.appendChild(node('div','商品未提供圖片','hs-detail-image-empty'));
      body.appendChild(node('h1',title));
      const price=typeof p.priceUsdt==='number'?p.priceUsdt:p.price;
      body.appendChild(node('p','商品標示金額','hs-detail-note'));
      body.appendChild(node('p',Number.isFinite(price)?`${price.toFixed(2)} USDT`:'請於完整商品頁確認價格','hs-detail-price'));
      if(Number.isFinite(p.stock))body.appendChild(node('p',`商品庫存資料：${p.stock}`,'hs-detail-stock'));
      body.appendChild(node('h2','商品說明'));
      // Descriptions are untrusted API text; never execute embedded markup.
      body.appendChild(node('p',description||'此商品未提供說明。','hs-detail-description'));
      body.appendChild(node('p','規格、資格及最新購買條件請於完整商品頁確認。','hs-detail-note'));
      for(const src of photos.slice(1)){
        const image=node('img',null,'hs-detail-extra-photo');image.src=src;image.loading='lazy';image.decoding='async';image.alt=title;image.width=600;image.height=600;body.appendChild(image);
      }
      content.replaceChildren(body);content.scrollTop=0;button.disabled=nativePending;notice.textContent=nativePending?'正在開啟完整商品頁…':nativeFailed?'完整商品頁暫時無法開啟，你仍可閱讀商品或重試。':'';
      readable(id,version,firstImage);
    }
    async function open(id,{retry=false}={}) {
      if(!alive()||!Number.isSafeInteger(id)||id<=0)return;
      for(const [other,entry] of reads)if(other!==id){entry.controller.abort();reads.delete(other);}
      cancelImageTimer();const version=++epoch;selected=id;panel.hidden=false;root.dataset.view='detail';
      panel.dataset.productId=String(id);delete panel.dataset.ready;delete panel.dataset.imageError;
      nativePending=false;nativeFailed=!!nativeUnavailable();notice.textContent=nativeFailed?'完整商品頁暫時無法開啟，你仍可閱讀商品或重試。':'';button.disabled=false;button.textContent=nativeFailed?'重新開啟完整商品頁':'檢視完整選項與購買';
      content.replaceChildren(node('p','正在讀取商品詳情…','hs-detail-loading'));content.scrollTop=0;
      try {
        const product=await get(id,{retry});if(product)showProduct(product,id,version);
      } catch(error) {
        if(!current(id,version))return;
        const errorView=node('div',null,'hs-detail-error');
        errorView.appendChild(node('h1',error.message==='not-found'?'找不到商品':'商品詳情暫時無法載入'));
        const retryButton=node('button','重試');retryButton.addEventListener('click',()=>open(id,{retry:true}));errorView.appendChild(retryButton);content.replaceChildren(errorView);
      }
    }
    panel.querySelector('[data-detail-back]').addEventListener('click',()=>goHome());
    button.addEventListener('click',()=>{if(!alive()||selected==null||nativePending)return;nativePending=true;button.disabled=true;notice.textContent='正在開啟完整商品頁…';openNative(selected,nativeFailed);});
    const visible=()=>{if(selected!=null&&panel.querySelector('.hs-detail-content'))readable(selected,epoch,panel.querySelector('.hs-detail-photo'));};
    document.addEventListener('visibilitychange',visible);
    return {
      open,metrics,
      get selected(){return selected;},
      close(){cancelImageTimer();++epoch;selected=null;panel.hidden=true;delete root.dataset.view;},
      prepared(id){if(selected!==id)return;nativeFailed=false;if(!nativePending){button.textContent='檢視完整選項與購買';notice.textContent='';}},
      failed(){nativeFailed=true;nativePending=false;button.disabled=false;button.textContent='重新開啟完整商品頁';notice.textContent='完整商品頁暫時無法開啟，你仍可閱讀商品或重試。';},
      async read(q){
        if(!alive()||q.method!=='GET'||q.body)return null;
        const u=new URL(q.url),match=u.pathname.match(/^\/api\/products\/([1-9]\d*)$/);
        if(u.origin!=='https://agoramarketapi.purrtechllc.com'||u.search||!match)return null;
        const id=Number(match[1]),entry=reads.get(id);
        if(!entry||entry.used||selected!==id)return null;
        const expected=await headersReady;
        if(canonical(q.headers||{})!==canonical(expected))return null;
        try {
          const body=await entry.promise;
          if(!body||!alive()||selected!==id||entry.used||reads.get(id)!==entry)return null;
          if(performance.now()-entry.at>30000){entry.used=true;metrics.push({type:'read-expired',id,at:performance.now()});return null;}
          entry.used=true;metrics.push({type:'read-adopted',id,at:performance.now()});return JSON.stringify(body);
        }catch{return null;}
      },
      retire(){cancelImageTimer();stopped=true;++epoch;document.removeEventListener('visibilitychange',visible);for(const entry of reads.values())entry.controller.abort();reads.clear();},
    };
  };
})();

/* AGORA_HTML_STOREFRONT_MAIN */
/* Opt-in HTML public catalogue. Product actions are queued for existing Flutter handlers. */
(() => {
  'use strict';
  const api = 'https://agoramarketapi.purrtechllc.com/api';
  const cacheKey = 'agora_html_public_home_v1';
  const preference = key => {
    try {return JSON.parse(localStorage.getItem('flutter.'+key));}catch{return null;}
  };
  // The first candidate follows the existing Traditional Chinese storefront.
  const locale = preference('language') || 'zh-TW';
  if(locale!=='zh-TW')return;
  const maxAge = 5 * 60 * 1000;
  const root = document.createElement('section');
  root.id = 'html-storefront'; root.setAttribute('aria-label', '商品列表');
  root.dataset.theme = preference('system_theme')===false
    ? preference('dark_mode')===true?'dark':'light'
    : matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  const icons = {
    search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
    heart: '<path d="M20 5c-3-3-7 0-8 2C9 1 1 3 3 9c1 4 9 10 9 10s8-6 9-10c.5-2 0-3-1-4Z"/>',
    cart: '<path d="M2 3h3l3 12h11l3-9H6M9 19h.01M18 19h.01"/><circle cx="9" cy="19" r="1"/><circle cx="18" cy="19" r="1"/>',
    chat: '<path d="M4 4h16v12H8l-4 4Z"/>',
    filter: '<path d="M3 6h18M3 12h18M3 18h18M8 3v6M16 9v6M9 15v6"/>',
    sparkle: '<path d="m9 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2ZM19 2v5M16.5 4.5h5M19 16v5M16.5 18.5h5"/>',
    bag: '<path d="M5 7h14v14H5ZM9 7V5a3 3 0 0 1 6 0v2"/>',
    store: '<path d="M3 9h18l-2-6H5ZM4 10v11h16V10M9 21v-7h6v7M8 3v6M16 3v6"/>',
    orders: '<path d="M5 2v20l3-2 4 2 4-2 3 2V2l-3 2-4-2-4 2ZM8 9h8M8 13h8M8 17h5"/>',
    wallet: '<path d="M20 7V4H4v16h16v-4M3 7h18v9h-7V9h7M16 12h1"/>',
    profile: '<circle cx="12" cy="7" r="4"/><path d="M4 22v-4c0-6 16-6 16 0v4Z"/>',
  };
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ''}</svg>`;
  const categories = [['全部','全部'],['電子產品','電子'],['手機與配件','手機'],['服飾','服飾'],['鞋子','鞋子'],['包包與配件','包包'],['食品與飲料','食品'],['家居生活','家居']];
  root.innerHTML = `<div class="hs-scroll"><header class="hs-top"><button class="hs-search" data-action="search">${icon('search')}<span>搜尋商品</span></button><button class="hs-icon" data-action="favorite" aria-label="收藏">${icon('heart')}</button><button class="hs-icon" data-action="cart" aria-label="購物車">${icon('cart')}</button><button class="hs-icon" data-action="chat" aria-label="訊息">${icon('chat')}</button></header><nav class="hs-shortcuts" aria-label="商品分類"><div class="hs-categories">${categories.map(([name,label],i)=>`<button class="hs-category" data-category="${name}" aria-pressed="${i===0}">${label}</button>`).join('')}</div><button class="hs-filter" data-action="filter">${icon('filter')}篩選</button></nav><section class="hs-section"><h2>${icon('sparkle')}<span>推薦商品</span></h2><p>近期可購買商品</p><div class="hs-grid hs-featured">${'<div class="hs-skeleton" aria-hidden="true"></div>'.repeat(4)}</div></section><div class="hs-grid hs-main"></div></div><nav class="hs-nav" aria-label="主要導覽">${[['store','商品'],['orders','訂單'],['wallet','錢包'],['profile','我的']].map(([name,label],i)=>`<button data-tab="${i}" ${i===0?'aria-current="page"':''}><span>${icon(name)}</span>${label}</button>`).join('')}</nav><div class="hs-status" role="status" aria-live="polite"></div>`;
  document.body.appendChild(root);
  document.documentElement.setAttribute('data-agora-html-storefront', 'active');
  const flutterRoot = document.getElementById('flutter-root');
  const scroll = root.querySelector('.hs-scroll');
  const status = root.querySelector('.hs-status');
  let revision = 0, pointer = false, lastMotion = 0, intent = null;
  let flutterModel = null, prepared = null, timer = null, committed = false, reconciling = false, explicitReset = false;
  let priorityId = null, detailReadyId = null;
  let detailPreview = null;
  let engineFailed = !!window.__AGORA_STARTUP_RESOURCE_ERROR__;
  let detailHistoryOwned = false;
  let readsRetired = false;
  const catalogueControllers = new Set();
  function retireReads() {
    readsRetired=true;
    for(const controller of catalogueControllers)controller.abort();
    catalogueControllers.clear();detailPreview?.retire();
  }
  let primaryPaintReported = false;
  const prepareRetryLimit=8;
  let prepareRevision=null,prepareAttempts=0;
  let homeRestore = null, homeRestoreTimer = null;
  const timing = { started: performance.now(), htmlProducts: null, flutterCatalog: null, handoff: null, source: null };
  const metrics = { preparations: [], intents: [], reconciliations: [], failures: [] };
  const imageObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{
    for(const entry of entries)if(entry.isIntersecting){
      const img=entry.target;if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src;}
      imageObserver.unobserve(img);
    }
  },{root:scroll,rootMargin:'160px 0px'}):null;
  const validProduct = p => p && Number.isSafeInteger(p.id) && p.id > 0 && typeof p.title === 'string';
  const normalize = p => ({id:p.id, title:p.translationAvailable && p.localizedTitle || p.title,
    image:Array.isArray(p.imageUrls)?p.imageUrls[0]:null,
    price: typeof p.priceUsdt === 'number' ? p.priceUsdt : p.price,
    sales:p.salesCount,stock:p.stock});
  const safeImage = value => {
    try { const url=new URL(value); return url.protocol==='https:' ? url.href : ''; } catch { return ''; }
  };
  const text = (tag, value, className) => { const e=document.createElement(tag); e.textContent=value; if(className)e.className=className; return e; };
  function card(p, i, main=false) {
    const a=document.createElement('a'); a.className='hs-card'; a.dataset.productId=String(p.id);
    a.href=`#/products/${p.id}`; a.setAttribute('aria-label',p.title);
    const img=document.createElement('img'); img.className='hs-photo'; img.alt='';
    img.width=176; img.height=176; img.loading=i<2?'eager':'lazy'; img.decoding='async';
    if(i<2)img.fetchPriority='high'; const src=safeImage(p.image);
    if(src){if(i<2 || !imageObserver)img.src=src;else{img.dataset.src=src;imageObserver.observe(img);}}
    a.appendChild(img);
    const info=text('div','','hs-info'); info.appendChild(text('h3',p.title,'hs-title'));
    const price=text('div',Number.isFinite(p.price)?p.price.toFixed(2):'查看價格','hs-price');
    if(Number.isFinite(p.price))price.appendChild(text('small',' USDT')); info.appendChild(price);
    if(p.sales>0 || p.stock!=null && p.stock<=3) {
      const sales=text('div','','hs-sales'); sales.innerHTML=icon('bag');
      sales.appendChild(text('span',p.sales>0?`已售 ${p.sales}`:p.stock<=0?'無貨':'庫存不多'));
      if(p.stock<=0 && !(p.sales>0))sales.classList.add('hs-unavailable');info.appendChild(sales);
    }
    a.appendChild(info);
    if(i<2 && src) {
      // Do not compete with the first product image or delay its first paint.
      const report=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{
        if(primaryPaintReported || committed || !a.isConnected ||
           !img.complete || img.naturalWidth<=0 || document.visibilityState!=='visible')return;
        const bounds=a.getBoundingClientRect(),viewport=scroll.getBoundingClientRect();
        if(bounds.top<viewport.top || bounds.bottom>viewport.bottom)return;
        primaryPaintReported=true;timing.primaryPaint=performance.now();
        send('primary-paint',{protocol:2});
      }));
      img.addEventListener('load',report,{once:true});
      if(img.complete && img.naturalWidth>0)report();
    }
    return a;
  }
  function anchor() {
    const cards=[...root.querySelectorAll('[data-product-id]')];
    const top=root.getBoundingClientRect().top;
    const first=cards.find(e=>e.getBoundingClientRect().bottom>top+8);
    return {anchorId:first?Number(first.dataset.productId):null,anchorTop:first?.getBoundingClientRect().top??null};
  }
  function capture() {
    return {protocol:2, revision, ...anchor(), offset:scroll.scrollTop, busy:pointer || performance.now()-lastMotion<250 || reconciling,
      width:innerWidth,height:innerHeight,intent,explicitReset};
  }
  metrics.homeRestores=[];metrics.homeRestoreCancellations=[];
  window.__AGORA_HTML_STOREFRONT__={
    capture:()=>JSON.stringify(capture()),timing,metrics,
    // Presentation only. Keep the old home anchor until its real Flutter list
    // can restore it; never make selected-product visibility wait for home.
    pendingHomeRestore:()=>homeRestore?JSON.stringify(homeRestore):null,
    cancelHomeRestore:reason=>{
      if(!homeRestore || !['user-drag','home-refresh'].includes(reason))return false;
      metrics.homeRestoreCancellations.push({reason,revision:homeRestore.revision,at:performance.now()});
      homeRestore=null;clearTimeout(homeRestoreTimer);return true;
    },
    completeHomeRestore:raw=>{
      try {
        const proof=JSON.parse(raw);
        if(!homeRestore || proof.revision!==homeRestore.revision ||
            !Number.isFinite(proof.anchorError) || Math.abs(proof.anchorError)>2)return false;
        metrics.homeRestores.push(proof);homeRestore=null;
        clearTimeout(homeRestoreTimer);return true;
      }catch{return false;}
    },
  };
  function send(type, payload) { window.dispatchEvent(new CustomEvent(`agora-html-${type}`,{detail:JSON.stringify(payload)})); }
  function request() {
    clearTimeout(timer); if(committed)return;
    timer=setTimeout(()=>{
      if(intent?.type==='product') {
        send('priority',capture());
        if(flutterModel)send('prepare',capture());
        commitWhenVisible();request();
      }
      else if(!capture().busy && flutterModel) {
        // A busy/stale/missing-anchor attempt can return without prepared.
        // Retry the same stable view finitely; never relax geometry or reset it.
        if(prepared?.revision===revision){commitWhenVisible();return;}
        if(prepareRevision!==revision){prepareRevision=revision;prepareAttempts=0;}
        if(prepareAttempts>=prepareRetryLimit){showContinue('已保留目前瀏覽位置。');return;}
        prepareAttempts++;send('prepare',capture());
        request();
      } else request();
    },280);
  }
  function render(model, source) {
    if(committed)return;
    const before=anchor(), offset=scroll.scrollTop;
    const featured=(model.recommendations||[]).filter(validProduct).slice(0,4);
    const featuredIds=new Set(featured.map(p=>p.id));
    const products=(model.products||[]).filter(validProduct).filter(p=>!featuredIds.has(p.id));
    if(!featured.length && !products.length)return;
    // A surviving first anchor alone cannot prove its old scroll range still
    // exists after cards disappear. Keep the current view for explicit retry.
    if(offset>1 && (featured.length<root.querySelectorAll('.hs-featured [data-product-id]').length ||
        products.length<root.querySelectorAll('.hs-main [data-product-id]').length)) {
      metrics.failures.push('catalogue-shrunk');showContinue('商品列表已更新。');return;
    }
    if(offset>1 && before.anchorId && ![...featured,...products].some(p=>p.id===before.anchorId)) {
      metrics.failures.push('anchor-removed');
      showContinue('商品列表已更新。'); return;
    }
    if(Number.isFinite(model.featuredExtent))root.style.setProperty('--hs-featured-extent',model.featuredExtent+'px');
    if(Number.isFinite(model.mainExtent))root.style.setProperty('--hs-main-extent',model.mainExtent+'px');
    root.querySelector('.hs-section').hidden=!featured.length;
    root.querySelector('.hs-featured').replaceChildren(...featured.map((p,i)=>card(p,i)));
    root.querySelector('.hs-main').replaceChildren(...products.map((p,i)=>card(p,i+featured.length,true)));
    if(offset>1 && before.anchorId) {
      const target=root.querySelector(`[data-product-id="${before.anchorId}"]`);
      scroll.scrollTop += target.getBoundingClientRect().top-before.anchorTop;
    }
    revision++; prepared=null;
    if(timing.htmlProducts===null) {timing.htmlProducts=performance.now();timing.source=source;}
    root.dataset.source=source; root.dataset.products=String(featured.length+products.length);
    metrics.reconciliations.push({source,ids:[...featured,...products].map(p=>p.id),offset:scroll.scrollTop});
    request();
  }
  function showContinue(message) {
    status.replaceChildren(text('span',message));
    const button=text('button','進入完整商店'); button.addEventListener('click',()=>{
      if(intent?.type==='product'){fallback();return;}
      explicitReset=true;scroll.scrollTop=0; revision++; lastMotion=0;
      if(flutterModel) {status.textContent='正在開啟…';request();}
      else fallback();
    }); status.appendChild(button);
  }
  function fallback(keepRoute=false) {
    const url=new URL(location.href);url.searchParams.delete('htmlStorefront');
    url.searchParams.set('htmlStorefront','0');
    if(!keepRoute&&intent?.type==='product')url.hash=`/products/${intent.id}`;
    location.replace(url.href);
  }
  function queue(next) {
    if(next.type==='product' && detailPreview && next.preview!==false){
      next={...next,preview:true};
      if(location.hash!==`#/products/${next.id}`){history.pushState({...history.state,agoraHtmlProduct:next.id},'',`#/products/${next.id}`);detailHistoryOwned=true;}
      if(detailPreview.selected!==next.id)detailPreview.open(next.id);
    }
    const sameProduct=next.type==='product' && intent?.type==='product' && next.id===intent.id;
    intent=next; revision++; prepared=null;
    // A repeated tap changes the quiet-period revision, not the loaded route.
    if(!sameProduct)detailReadyId=null;
    metrics.intents.push({...next,at:performance.now()});
    status.textContent=next.type==='product'?'正在開啟商品…':'正在開啟…';
    send('priority',capture()); request();
  }
  root.addEventListener('click',event=>{
    const target=event.target.closest('a,button');if(!target)return;
    if(target.dataset.productId) {event.preventDefault();queue({type:'product',id:Number(target.dataset.productId)});}
    else if(target.dataset.category)queue({type:'category',name:target.dataset.category});
    else if(target.dataset.action)queue({type:target.dataset.action});
    else if(target.dataset.tab)queue({type:'tab',index:Number(target.dataset.tab)});
  });
  root.addEventListener('pointerdown',()=>{pointer=true;revision++;prepared=null;});
  const release=()=>{pointer=false;lastMotion=performance.now();request();};
  window.addEventListener('pointerup',release);window.addEventListener('pointercancel',release);
  scroll.addEventListener('scroll',()=>{if(reconciling)return;lastMotion=performance.now();revision++;prepared=null;request();},{passive:true});
  window.addEventListener('resize',()=>{revision++;prepared=null;lastMotion=performance.now();request();});
  function receive(event) { try{return JSON.parse(event.detail);}catch{return null;} }
  window.addEventListener('agora-html-catalog',event=>{
    const model=receive(event);if(!model || committed)return;
    flutterModel=model;timing.flutterCatalog=performance.now();
    if(model.failed) {showContinue('商品暫時無法更新。');return;}
    if(intent?.type==='product')return;
    // Do not move a card under a finger or during momentum scrolling.
    const reconcile=()=>{
      if(committed)return;
      if(capture().busy) {setTimeout(reconcile,280);return;}
      reconciling=true;render(model,'flutter');reconciling=false;request();
    };reconcile();
  });
  function commitWhenVisible() {
    const detail=intent?.type==='product';
    if(detail && intent.preview===true)return;
    if(committed || !document.body.classList.contains('flutter-ready') || capture().busy)return;
    if(detail ? detailReadyId!==intent.id || priorityId!==intent.id : !prepared || prepared.revision!==revision)return;
    const expected=revision;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(expected!==revision || capture().busy || committed)return;
      // Commit while the bridge is active; Flutter validates the latest revision.
      if(detail && (detailReadyId!==intent?.id || priorityId!==intent?.id))return;
      if(!detail)send('commit',{revision,intent});
      if(detail) {
        homeRestore=Object.freeze({...capture(),intent:null,busy:false});
        // A failed or abandoned home read cannot retain a presentation bridge
        // indefinitely. Expiry reports a miss; it never navigates or writes.
        homeRestoreTimer=setTimeout(()=>{
          homeRestore=null;metrics.failures.push('home-restore-expired');
          send('restore-home',{expired:true});
        },60000);
      }
      committed=true;timing.handoff=performance.now();
      retireReads();
      root.remove();document.documentElement.setAttribute('data-agora-html-storefront','complete');
      if(detail)send('restore-home',homeRestore);
      if(flutterRoot)flutterRoot.inert=false;
      clearTimeout(timer);observer.disconnect();imageObserver?.disconnect();
      window.removeEventListener('pointerup',release);window.removeEventListener('pointercancel',release);
    }));
  }
  window.addEventListener('agora-html-prepared',event=>{
    if(intent?.type==='product')return;
    const value=receive(event);if(!value || value.revision!==revision)return;
    // An aligned first card is insufficient: every visible row must line up.
    const visible=[...root.querySelectorAll('[data-product-id]')].filter(e=>{const r=e.getBoundingClientRect();return r.bottom>0 && r.top<innerHeight-84;});
    const deltas=visible.map(e=>{
      const native=(value.cards||[]).find(c=>c.id===Number(e.dataset.productId));
      const r=e.getBoundingClientRect();
      return native?{id:native.id,top:r.top-native.top,left:r.left-native.left,width:r.width-native.width,height:r.height+4-native.height}:null;
    });
    if(!explicitReset && deltas.some(d=>!d || Math.max(Math.abs(d.top),Math.abs(d.left),Math.abs(d.width),Math.abs(d.height))>2)) {
      metrics.failures.push({type:'visible-geometry-mismatch',deltas});showContinue('已保留目前瀏覽位置。');return;
    }
    value.visibleDeltas=deltas;value.htmlState=capture();
    prepared=value;metrics.preparations.push(value);commitWhenVisible();
  });
  window.addEventListener('agora-html-retry',()=>{showContinue('已保留目前瀏覽位置。');});
  window.addEventListener('agora-html-route-started',event=>{
    const value=receive(event);if(!value || value.id!==intent?.id)return;
    priorityId=value.id;timing.detailRoute=performance.now();
    commitWhenVisible();
  });
  window.addEventListener('agora-html-route-cancelled',()=>{
    priorityId=null;detailReadyId=null;
    if(flutterModel && intent?.type!=='product')render(flutterModel,'flutter');
    request();
  });
  window.addEventListener('agora-html-detail-ready',event=>{
    const value=receive(event);if(!value || value.id!==intent?.id)return;
    detailReadyId=value.id;timing.detailPainted=performance.now();detailPreview?.prepared(value.id);
    // The URL now identifies the real detail route. Re-enter the existing
    // non-home reveal gate only after its image/content/access controls paint.
    window.dispatchEvent(new Event('agora-startup-reveal-request'));
    commitWhenVisible();
  });
  window.addEventListener('agora-html-detail-failed',event=>{
    const value=receive(event);if(value?.id===intent?.id && intent?.type==='product'){
      detailPreview?.failed();showContinue('商品暫時無法開啟。');
    }
  });
  window.addEventListener('agora-startup-failed',()=>{engineFailed=true;detailPreview?.failed();});
  const observer=new MutationObserver(commitWhenVisible);observer.observe(document.body,{attributes:true,attributeFilter:['class']});
  window.addEventListener('hashchange',()=>{
    if(detailPreview && !committed){
      const match=location.hash.match(/^#\/products\/([1-9]\d*)$/);
      if(match){if(intent?.id!==Number(match[1]))queue({type:'product',id:Number(match[1])});return;}
      if(/^(?:#\/?home)?\/?$/.test(location.hash)&&detailPreview.selected!=null){detailPreview.close();intent=null;revision++;startHomeReads();send('priority',capture());request();return;}
    }
    if(priorityId && location.hash===`#/products/${priorityId}`)return;
    if(priorityId && /^(?:#\/?home)?\/?$/.test(location.hash)) {
      intent=null;revision++;send('priority',capture());return;
    }
    if(!committed && !/^(?:#\/?home)?\/?$/.test(location.hash)) {intent=null;fallback();}
  });
  setTimeout(()=>{if(!committed){showContinue('完整商店仍在載入，你可以繼續瀏覽。');if(!document.body.classList.contains('flutter-ready')&&!detailReadyId){engineFailed=true;detailPreview?.failed();}}},25000);
  // Match the normal SDK's unfiltered first-page request, including its null
  // fields. Unknown future fields, filters, auth or device contexts fail closed.
  const searchBody=Object.fromEntries('page size startDate endDate keyword sortBy sortDirection id sellerId status category postalCode longitude latitude tag inStock productType sourceRegion sourcePlatform viewerCountryCode locale'.split(' ').map(k=>[k,k==='page'?1:k==='size'?10:null]));
  const canonical=v=>JSON.stringify(Object.fromEntries(Object.entries(v).sort(([a],[b])=>a<b?-1:a>b?1:0)));
  const fresh=new Map(), consumed=new Set();let livePage=null,liveRecs=null,paintScheduled=false,snapshotSaved=false;
  metrics.sharedReads=[];metrics.shareMisses=[];
  // Same low-entropy diagnostic profile as BrowserDeviceIdentityHeaders. Exact
  // header comparison below rejects drift; these values are never persisted.
  async function publicHeaders() {
    const headers={'Accept-Language':locale};
    try {
      const clean=(v,max=128)=>typeof v==='string'?(v.replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,max)||undefined):undefined;
      const num=(v,max,int=false)=>Number.isFinite(v)&&v>=0&&v<=max?(int?Math.trunc(v):v):undefined;
      const n=navigator,s=screen,u=n.userAgentData;
      const compact=o=>Object.fromEntries(Object.entries(o).filter(([,v])=>v!==undefined));
      const brands=(u?.brands||[]).map(b=>compact({brand:clean(b.brand,64),version:clean(b.version,32)})).filter(b=>b.brand&&b.version).sort((a,b)=>a.brand<b.brand?-1:a.brand>b.brand?1:a.version<b.version?-1:a.version>b.version?1:0).slice(0,8);
      const languages=[...(n.languages||[])].map(v=>clean(v,64)).filter(Boolean).slice(0,8);
      const profile=optional=>{
        const data=compact({platform:clean(u?.platform),mobile:typeof u?.mobile==='boolean'?u.mobile:undefined,brands:optional&&brands.length?brands:undefined});
        const hardware=compact({concurrency:num(n.hardwareConcurrency,1024,true),memoryGiB:num(n.deviceMemory,16384),maxTouchPoints:num(n.maxTouchPoints,1024,true)});
        const display=compact({width:num(s.width,100000,true),height:num(s.height,100000,true),availableWidth:optional?num(s.availWidth,100000,true):undefined,availableHeight:optional?num(s.availHeight,100000,true):undefined,colorDepth:num(s.colorDepth,256,true),pixelDepth:optional?num(s.pixelDepth,256,true):undefined,devicePixelRatio:num(devicePixelRatio,100)});
        return compact({v:1,platform:clean(n.platform),language:clean(n.language,64),languages:optional&&languages.length?languages:undefined,userAgentData:Object.keys(data).length?data:undefined,hardware:Object.keys(hardware).length?hardware:undefined,screen:Object.keys(display).length?display:undefined,timeZone:optional?clean(Intl.DateTimeFormat().resolvedOptions().timeZone):undefined});
      };
      // Match dart2js JSON numbers (integral doubles use the JS integer form).
      const json=value=>JSON.stringify(value);
      const full=profile(true), bytes=new TextEncoder().encode(json({v:1,userAgent:clean(n.userAgent,2048)||'',...full}));
      headers['X-Agora-Device-Fingerprint']=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(v=>v.toString(16).padStart(2,'0')).join('');
      const encode=p=>btoa(String.fromCharCode(...new TextEncoder().encode(json(p)))).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
      let encoded=encode(full);if(encoded.length>2048)encoded=encode(profile(false));
      if(encoded.length<=2048)headers['X-Agora-Device-Profile']=encoded;
    }catch{/* Normal SDK reads remain available when browser signals are denied. */}
    return headers;
  }
  const headersReady=publicHeaders();
  if(typeof window.createAgoraProductDetail==='function'){
    detailPreview=window.createAgoraProductDetail({root,api,locale,headersReady,retired:()=>committed||readsRetired,
      nativeUnavailable:()=>!document.body.classList.contains('flutter-ready')&&(engineFailed||!!window.__AGORA_STARTUP_RESOURCE_ERROR__),
      openNative:(id,retry)=>{if(retry)fallback();else queue({type:'product',id,preview:false});},
      goHome:()=>{if(detailHistoryOwned){history.back();}else{location.hash='/home';}},
    });
    window.__AGORA_HTML_STOREFRONT__.detailMetrics=detailPreview.metrics;
    const entry=location.hash.match(/^#\/products\/([1-9]\d*)$/);
    if(entry)queue({type:'product',id:Number(entry[1])});
  }
  window.__AGORA_HTML_STOREFRONT__.read=async raw=>{
    try {
      if(committed||readsRetired)return null;
      const q=JSON.parse(raw),url=new URL(q.url),h=Object.fromEntries(Object.entries(q.headers||{}).map(([k,v])=>[k.toLowerCase(),v]));
      if(detailPreview && /^\/api\/products\/[1-9]\d*$/.test(url.pathname))return await detailPreview.read(q);
      const kind=url.href===`${api}/products/search`&&q.method==='POST'&&canonical(JSON.parse(q.body))===canonical(searchBody)?'search':
        url.origin+url.pathname===`${api}/products/recommendations`&&q.method==='GET'&&url.searchParams.size===2&&url.searchParams.get('scene')==='HOME'&&url.searchParams.get('limit')==='12'?'recs':null;
      if(!kind || consumed.has(kind))return null;
      const expected=Object.fromEntries(Object.entries(await headersReady).map(([k,v])=>[k.toLowerCase(),v]));
      if(committed||readsRetired)return null;
      if(kind==='search')expected['content-type']='application/json; charset=utf-8';
      const actual={...h};if(actual['content-type']==='application/json')actual['content-type']='application/json; charset=utf-8';
      if(canonical(actual)!==canonical(expected)){
        metrics.shareMisses.push({kind,reason:'request-context',fields:[...new Set([...Object.keys(actual),...Object.keys(expected)])].filter(k=>actual[k]!==expected[k])});return null;
      }
      const entry=await Promise.race([fresh.get(kind),new Promise(r=>setTimeout(()=>r(null),200))]);
      if(!entry || consumed.has(kind) || committed || readsRetired || performance.now()-entry.at>30000)return null;
      consumed.add(kind);metrics.sharedReads.push({kind,at:performance.now()});return JSON.stringify(entry.body);
    }catch{return null;}
  };
  function paintLive() {
    if(paintScheduled)return;paintScheduled=true;
    requestAnimationFrame(()=>{
      paintScheduled=false;
      const products=(livePage?.content||[]).filter(validProduct).map(normalize),seen=new Set(products.map(p=>p.id));
      const recommendations=(liveRecs?.items||[]).map(item=>item.product).filter(validProduct).filter(p=>{if(seen.has(p.id))return false;seen.add(p.id);return true;}).slice(0,4).map(normalize);
      const model={products,recommendations};
      // A quick tap must not prevent the anonymous snapshot from being saved
      // for the next visit. Persist only the two completed public responses.
      if(livePage && liveRecs && !snapshotSaved){
        snapshotSaved=true;
        try {const value=JSON.stringify({schema:1,api,locale,savedAt:Date.now(),model});if(value.length<=256*1024)localStorage.setItem(cacheKey,value);}catch{}
      }
      if(flutterModel || committed || intent?.type==='product')return;
      // A complete persisted view must not shrink to a half-finished refresh:
      // even a surviving anchor would be clamped to the shorter scroll range.
      // Uncached first visits can still paint each public response promptly.
      if(timing.source==='snapshot' && (!livePage || !liveRecs))return;
      if(capture().busy){setTimeout(paintLive,280);return;}
      render(model,'network');
    });
  }
  let homeReadsStarted=false;
  function startHomeReads() {
    if(homeReadsStarted||committed||readsRetired)return;
    homeReadsStarted=true;
    // Only anonymous public responses are cached. Flutter/account data never enter this cache.
    try {
      const raw=localStorage.getItem(cacheKey);
      if(raw && raw.length<=256*1024) {
        const cached=JSON.parse(raw),age=Date.now()-cached.savedAt;
        if(cached.schema===1 && cached.api===api && cached.locale===locale && age>=0 && age<maxAge)render(cached.model,'snapshot');
      }
    }catch{}
    for(const [kind,path,method,body] of [['search','/products/search','POST',searchBody],['recs','/products/recommendations?scene=HOME&limit=12','GET',null]]) {
      const read=headersReady.then(async headers=>{
        if(committed||readsRetired)return null;
        const controller=new AbortController(),deadline=setTimeout(()=>controller.abort(),12000);
        catalogueControllers.add(controller);
        try {
          const response=await fetch(api+path,{credentials:'omit',method,headers:body?{...headers,'Content-Type':'application/json; charset=utf-8'}:headers,body:body?JSON.stringify(body):undefined,signal:controller.signal});
          if(!response.ok)throw Error(`${kind}-${response.status}`);
          const result=await response.json();if(kind==='search')livePage=result;else liveRecs=result;
          if(committed||readsRetired)return null;
          paintLive();return {body:result,at:performance.now()};
        }finally{clearTimeout(deadline);catalogueControllers.delete(controller);}
      }).catch(error=>{if(!committed&&!readsRetired){metrics.failures.push(String(error));if(timing.htmlProducts===null)showContinue('商品正在載入。');}return null;});
      fresh.set(kind,read);
    }
  }
  // A direct product visit needs its detail and image first. Fetch the home
  // catalogue only when the visitor actually opens the list.
  if(intent?.type!=='product')startHomeReads();
  // CSS/script may finish after a cached Flutter startup. Its existing home
  // listener rebuilds handoff keys and republishes any completed catalog.
  send('mounted',capture());
  window.addEventListener('pagehide',event=>{if(!event.persisted)retireReads();});
  window.addEventListener('pageshow',event=>{if(event.persisted&&!committed&&readsRetired)fallback(true);});
  window.addEventListener('storage',event=>{
    if(event.key===null||['flutter.auth_token','flutter.refresh_token','access_token','refresh_token','flutter.language'].includes(event.key)||event.key.startsWith('agora.webSession')){retireReads();fallback(true);}
  });
})();
