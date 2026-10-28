(function(global) {
  'use strict';
  // Register only the compiler's existing deferred initializers. Native Dart
  // still initializes them and owns routing, API decoding and every action.
  function create(config) {
    const state={status:'disabled',startedAt:null,loadedAt:null,failedAt:null};
    if(!config || config.protocol!==1 ||
       !/^startup-product-detail\.[0-9a-f]{12}\.js$/.test(config.asset||'') ||
       !/^sha256-[A-Za-z0-9+/]{43}=$/.test(config.integrity||''))return state;
    state.status='waiting-for-html-paint';
    let painted=false,started=false;
    function active() {
      if(document.visibilityState!=='visible' ||
         document.documentElement.getAttribute('data-agora-html-storefront')!=='active')return false;
      try{return JSON.parse(global.__AGORA_HTML_STOREFRONT__?.capture()||'null')?.protocol===2;}
      catch{return false;}
    }
    function start() {
      if(!painted || started || !active())return;
      started=true;
      global.removeEventListener('agora-html-primary-paint',paint);
      global.removeEventListener('agora-html-detail-readable',detailPaint);
      document.removeEventListener('visibilitychange',start);
      const script=document.createElement('script');
      script.src=new URL(config.asset,document.baseURI).href;
      script.async=true;script.fetchPriority='low';
      script.integrity=config.integrity;script.crossOrigin='anonymous';
      script.dataset.agoraProductDetailPreload='true';
      script.addEventListener('load',()=>{state.status='registered';state.loadedAt=performance.now();},{once:true});
      script.addEventListener('error',()=>{
        // Failure does not alter the native loader or its individual chunks.
        state.status='failed';state.failedAt=performance.now();
      },{once:true});
      state.status='loading';state.startedAt=performance.now();
      document.head.appendChild(script);
    }
    function paint(event) {
      try{if(JSON.parse(event.detail).protocol!==2)return;}catch{return;}
      painted=true;start();
    }
    function detailPaint(event) {
      try {
        const signal=JSON.parse(event.detail);
        const snapshot=JSON.parse(global.__AGORA_HTML_STOREFRONT__?.capture()||'null');
        if(signal.type!=='readable' || !Number.isSafeInteger(signal.id) || signal.id<=0 ||
           snapshot?.protocol!==2 || snapshot.intent?.type!=='product' ||
           snapshot.intent.preview!==true || snapshot.intent.id!==signal.id)return;
      } catch { return; }
      // Direct links do not render home cards. Wait for their real detail
      // reading event before spending bandwidth on the unchanged native code.
      painted=true;start();
    }
    global.addEventListener('agora-html-primary-paint',paint);
    global.addEventListener('agora-html-detail-readable',detailPaint);
    document.addEventListener('visibilitychange',start);
    return state;
  }
  global.AgoraProductDetailPreload={create};
})(window);
