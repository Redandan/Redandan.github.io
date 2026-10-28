import{nativeMaterialDensity}from'./header-layout-core.js';
import{nonNegativeFinite,normalizeIOSStandaloneLayoutViewport,resolveIOSVisualViewportRootFrame,resolveIOSStandalonePaintFrame}from'./viewport-policy.js';

// The original Flutter frame policy owns iOS geometry. HTML supplies its own
// scroll host and CSS padding; it never loads Flutter to obtain that policy.
export function startBuyerViewport(){
 const root=document.querySelector('#buyer-app'),style=document.documentElement.style,vv=window.visualViewport;
 const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1;
 const standalone=navigator.standalone===true||matchMedia('(display-mode: standalone)').matches||matchMedia('(display-mode: fullscreen)').matches;
 root.dataset.nativeDensity=nativeMaterialDensity(navigator.platform,navigator.userAgent,navigator.maxTouchPoints);
 root.dataset.compactNavigation=String(ios&&standalone);
 let raf=0,fullHeight=innerHeight,lastWidth=innerWidth,count=0,pendingReason='startup';const timers=new Set();
 const editable=()=>{const a=document.activeElement;return !!a&&(a.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName));};
 function safeArea(){const s=getComputedStyle(document.documentElement);return Object.fromEntries(['top','right','bottom','left'].map(k=>[k,nonNegativeFinite(s.getPropertyValue('--safe-'+k))]));}
 function restoreOuter(keyboard,scale){
  if(!ios||!standalone||scale>1.01||keyboard)return;
  // Reset only non-content hosts. #buyer-main owns the product/list scroll;
  // its scroll, focus, selection and unsent field values must survive recovery.
  for(const host of new Set([document.scrollingElement,document.documentElement,document.body,root])){
   if(!host)continue;if(host.scrollTop)host.scrollTop=0;if(host.scrollLeft)host.scrollLeft=0;
  }
  if(scrollX||scrollY)window.scrollTo(0,0);
 }
 function sync(){
  raf=0;if(document.hidden)return;
  const viewport={width:vv?.width||innerWidth,height:vv?.height||innerHeight,offsetTop:vv?.offsetTop||0,offsetLeft:vv?.offsetLeft||0,scale:vv?.scale||1},safe=safeArea();
  let layout={width:Math.max(document.documentElement.clientWidth||0,innerWidth),height:Math.max(document.documentElement.clientHeight||0,innerHeight)},content,frame,padding,keyboard;
  if(ios){
   layout=normalizeIOSStandaloneLayoutViewport(standalone,safe,layout,{width:screen.width,height:screen.height});
   content=resolveIOSVisualViewportRootFrame(standalone,viewport,safe,layout);
   const paint=resolveIOSStandalonePaintFrame(standalone,viewport,safe,layout,content);frame=paint.frame;padding={top:0,...paint.paintInsets};
   const safeHeight=Math.max(1,layout.height-safe.top-safe.bottom);
   keyboard=editable()&&viewport.height<safeHeight-2&&content.height<safeHeight-2;
   restoreOuter(keyboard,viewport.scale);
   if(standalone){document.documentElement.style.minHeight=layout.height+'px';document.body.style.minHeight=layout.height+'px';}
   // Safe insets are already in content/paintFrame. Apply only the original
   // paint extension as padding, never subtract the notch a second time.
   for(const side of ['top','right','bottom','left'])root.style.setProperty('padding-'+side,padding[side]+'px');
  }else{
   if(Math.abs(innerWidth-lastWidth)>2){fullHeight=innerHeight;lastWidth=innerWidth;}
   if(!editable()&&viewport.height>=fullHeight*.8)fullHeight=viewport.height;
   keyboard=editable()&&viewport.height<fullHeight*.8;
   frame={top:viewport.offsetTop,left:viewport.offsetLeft,width:viewport.width,height:viewport.height,transform:'none'};padding=safe;
   content={top:frame.top+safe.top,left:frame.left+safe.left,width:Math.max(1,frame.width-safe.left-safe.right),height:Math.max(1,frame.height-safe.top-safe.bottom)};
  }
  // Paint the navigation through the wrapper's actual safe-area extension.
  // These are paint-only lengths: content bounds and touch targets stay put.
  for(const side of ['right','bottom','left'])root.style.setProperty('--buyer-paint-'+side,padding[side]+'px');
  style.setProperty('--vv-width',frame.width+'px');style.setProperty('--vv-height',frame.height+'px');style.setProperty('--vv-top',frame.top+'px');style.setProperty('--vv-left',frame.left+'px');
  style.setProperty('--buyer-content-top',content.top+'px');style.setProperty('--buyer-content-left',content.left+'px');style.setProperty('--buyer-content-width',content.width+'px');style.setProperty('--buyer-content-height',content.height+'px');
  root.style.transform=frame.transform;document.documentElement.classList.toggle('keyboard-open',keyboard);
  const r=root.getBoundingClientRect();window.__AGORA_BUYER_VIEWPORT_STATUS__={ios,standalone,reason:pendingReason,syncCount:++count,viewport,safeArea:safe,layoutViewport:layout,expectedFrame:frame,contentFrame:content,paintInsets:padding,keyboardConstrained:keyboard,actualRoot:{top:r.top,left:r.left,width:r.width,height:r.height},outer:{x:scrollX,y:scrollY},mainScroll:document.querySelector('#buyer-main')?.scrollTop||0};
 }
 function queue(reason='event'){pendingReason=typeof reason==='string'?reason:reason.type;if(!raf)raf=requestAnimationFrame(sync);}
 function delayed(reason){queue(reason);for(const delay of [60,600,1500]){const id=setTimeout(()=>{timers.delete(id);queue(reason+'-settle');},delay);timers.add(id);}}
 vv?.addEventListener('resize',()=>queue('visual-resize'),{passive:true});vv?.addEventListener('scroll',()=>queue('visual-scroll'),{passive:true});
 addEventListener('resize',()=>queue('resize'),{passive:true});addEventListener('scroll',()=>queue('outer-scroll'),{passive:true});
 addEventListener('orientationchange',()=>delayed('orientationchange'),{passive:true});addEventListener('pageshow',()=>delayed('pageshow'),{passive:true});
 document.addEventListener('focusin',()=>queue('focusin'));document.addEventListener('focusout',()=>delayed('focusout'));
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)delayed('foreground');});
 document.addEventListener('scroll',event=>{if([document,document.documentElement,document.body,root].includes(event.target))queue('host-scroll');},{capture:true,passive:true});
 // First layout is synchronous; iOS launch/resume transitions also converge
 // through the same bounded sequence used by the original Flutter host.
 sync();delayed('startup');
}
