import{escape}from'./ui.js';
let sequence=0;
export function nativeDialogTextWidth(text,size=14,spacing=.25,weight=400){
 const probe=document.createElement('span');
 Object.assign(probe.style,{position:'fixed',right:'100%',top:'0',visibility:'hidden',whiteSpace:'pre',fontFamily:'AgoraBuyerRoboto,AgoraBuyerCJK,AgoraBuyerHan,AgoraBuyerThai,sans-serif',fontSize:size+'px',fontWeight:String(weight),letterSpacing:spacing+'px'});
 probe.textContent=text;document.body.append(probe);const width=probe.getBoundingClientRect().width;probe.remove();return width;
}
// The shared viewport policy has already resolved the app frame. Dialogs only
// follow that painted frame; no iOS inset or keyboard policy is repeated here.
export function createBuyerDialogs(ctx,{cancelLabel}){
 let dialog=null;
 function close(){if(dialog){dialog.close();dialog.remove();dialog=null;}}
 ctx.cleanup(close);
 function show(title,content,options={}){
  if(!ctx.active())throw new DOMException('Page retired','AbortError');
  close();const focus=document.activeElement,node=document.createElement('dialog'),titleId='buyer-dialog-title-'+(++sequence);dialog=node;node.className='profile-settings-dialog';node.setAttribute('aria-labelledby',titleId);node.innerHTML=`<h2 id="${titleId}">${escape(title)}</h2><div class="profile-dialog-content">${content}</div><div class="profile-dialog-actions"><button type="button" data-dialog-close>${escape(cancelLabel)}</button></div>`;document.querySelector('#buyer-main').append(node);
  node.addEventListener('close',()=>{if(dialog===node)dialog=null;node.remove();if(focus?.isConnected)focus.focus({preventScroll:true});},{once:true});node.querySelector('[data-dialog-close]').hidden=options.dismissible===false;node.querySelector('[data-dialog-close]').addEventListener('click',close);
  if(options.dismissible===false)node.addEventListener('cancel',event=>event.preventDefault());
  node.addEventListener('click',event=>{if(options.dismissible!==false&&event.target===node){const r=node.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});node.showModal();
  const root=document.querySelector('#buyer-app');let frame;
  const position=()=>{if(!node.isConnected||!node.open)return;const r=root.getBoundingClientRect(),s=getComputedStyle(root),left=parseFloat(s.paddingLeft)||0,right=parseFloat(s.paddingRight)||0,top=parseFloat(s.paddingTop)||0,bottom=parseFloat(s.paddingBottom)||0;const bottomSheet=options.placement==='bottom',inset=options.inset??24,verticalInset=options.verticalInset??inset,maxWidth=(typeof options.maxWidth==='function'?options.maxWidth():options.maxWidth)??(bottomSheet?640:560);node.style.width=Math.max(0,Math.min(maxWidth,r.width-left-right-(bottomSheet?0:inset*2)))+'px';node.style.maxHeight=Math.max(0,r.height-top-bottom-(bottomSheet?24:verticalInset*2))+'px';node.style.left=(r.left+left+(r.width-left-right)/2)+'px';node.style.top=(bottomSheet?r.bottom-bottom:r.top+top+(r.height-top-bottom)/2)+'px';node.style.transform=bottomSheet?'translate(-50%,-100%)':'translate(-50%,-50%)';};
  const refresh=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{frame=requestAnimationFrame(position);});};
  const resize=new ResizeObserver(refresh);resize.observe(root);for(const type of['resize','orientationchange'])addEventListener(type,refresh);visualViewport?.addEventListener('resize',refresh);visualViewport?.addEventListener('scroll',refresh);node.addEventListener('close',()=>{cancelAnimationFrame(frame);resize.disconnect();for(const type of['resize','orientationchange'])removeEventListener(type,refresh);visualViewport?.removeEventListener('resize',refresh);visualViewport?.removeEventListener('scroll',refresh);},{once:true});document.fonts.ready.then(()=>{if(node.isConnected&&node.open)refresh();});position();return node;
 }
 function confirm({title,content,confirmLabel}){return new Promise(resolve=>{let accepted=false;const node=show(title,content),button=document.createElement('button');button.type='button';button.className='primary';button.dataset.buyerConfirm='true';button.textContent=confirmLabel;node.querySelector('.profile-dialog-actions').append(button);button.addEventListener('click',()=>{accepted=true;close();});node.addEventListener('close',()=>resolve(accepted),{once:true});});}
 return{show,close,confirm};
}
