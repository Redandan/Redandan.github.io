import{nativeToolbarLayout,nativeMaterialDensity}from'./header-layout-core.js';
import{materialIcon}from'./material-icons.js';
const observers=new WeakMap();
export function setBuyerHeaderRoute(header,path){
 observers.get(header)?.();observers.delete(header);
 header.hidden=path==='/wallet'||path==='/profile'||path==='/login'||path==='/session-recovery'||path==='/register'||path==='/oauth2-callback';
 header.classList.remove('native-app-bar');header.removeAttribute('data-native-back');
}
export function configureBuyerHeader(header,path,options={}){
 setBuyerHeaderRoute(header,path);
 if(header.hidden||options.nativeAppBar!==true)return;
 const title=header.querySelector(':scope>h1');if(!title)return;
 const back=header.querySelector(':scope>.back');
 if(back){back.innerHTML=materialIcon(options.nativeBack==='compact'?'arrow_back_ios_new':'arrow_back');header.dataset.nativeBack=options.nativeBack||'arrow';}
 header.dataset.nativeDensity=nativeMaterialDensity(navigator.platform,navigator.userAgent,navigator.maxTouchPoints);
 const actions=document.createElement('div');actions.className='native-bar-actions';
 for(const node of [...header.children])if(node!==title&&node!==back){const slot=document.createElement('div');slot.className='native-bar-action-slot'+(node.classList.contains('address-save-header')?' native-save-slot':'');slot.append(node);actions.append(slot);}
 header.append(actions);header.classList.add('native-app-bar');title.title=title.textContent;
 let alive=true,frame=0;
 const update=()=>{
  if(!alive||!header.isConnected)return;
  const range=document.createRange();range.selectNodeContents(title);
  const intrinsic=range.getBoundingClientRect().width;range.detach();
  const value=nativeToolbarLayout(header.clientWidth,back?back.getBoundingClientRect().width:0,actions.getBoundingClientRect().width,intrinsic,16,getComputedStyle(header).direction==='rtl');
  title.style.left=value.left+'px';title.style.width=value.width+'px';
 };
 const schedule=()=>{if(alive&&!frame)frame=requestAnimationFrame(()=>{frame=0;update();});};
 const observer=new ResizeObserver(schedule);observer.observe(header);observer.observe(actions);
 document.fonts.addEventListener('loadingdone',schedule);document.fonts.ready.then(schedule);update();
 observers.set(header,()=>{alive=false;cancelAnimationFrame(frame);observer.disconnect();document.fonts.removeEventListener('loadingdone',schedule);});
}
