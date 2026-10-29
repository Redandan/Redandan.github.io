import{originalCopy}from'./locale.js';
import{escape,list}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{secondaryFlow,secondarySection}from'./secondary-flow.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{passwordReauthentication}from'./password-reauth.js';

export async function devices(ctx){
 const copy=await originalCopy(ctx.signal),state=ctx.sessionState||await ctx.api.session();if(!ctx.active())return;
 const managed=state.mode==='cookie',supported=typeof PublicKeyCredential!=='undefined',t=key=>copy.t(key),main=document.querySelector('#buyer-main');
 let rows=[],busy=false,failed=false,ownerAvailable=false,retired=false,notice='',generation=0,loginAcknowledged=false,pull=null;const unknown=new Set();
 secondaryFlow(ctx,copy,{title:t('sessionDevicesTitle'),subtitle:t('sessionDevicesDescription'),icon:'devices',kind:'devices',content:'<div id="buyer-devices-body"></div>'});
 const target=()=>ctx.find('#buyer-devices-body'),current=()=>ctx.active()&&!!target();
 const outlined=(label,action,icon)=>'<button type="button" class="devices-outline" data-action="'+action+'"'+(busy?' disabled':'')+'>'+mi(icon)+'<span>'+escape(t(label))+'</span></button>';
 function date(value){const d=new Date(value);if(!Number.isFinite(d.getTime()))return'—';const locale=copy.locale||'zh-TW';return new Intl.DateTimeFormat(locale,{calendar:'gregory',year:'numeric',month:'short',day:'numeric'}).format(d)+' '+new Intl.DateTimeFormat(locale,{calendar:'gregory',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(d);}
 function paint(){
  if(!current())return;const scroll=main.scrollTop;
  target().innerHTML=(busy?'<div class="devices-progress" role="status" aria-label="'+escape(t('loading'))+'"><i></i></div>':'')+
   (notice?'<p class="devices-notice" role="status">'+escape(t(notice))+'</p>':'')+
   (retired?'':'<div class="devices-actions">'+outlined('retry','refresh-devices','refresh')+outlined('sessionDevicesLogoutAll','logout-all-devices','logout')+'</div><div class="devices-list">'+rows.map(row=>secondarySection(row.deviceLabel,'<p>'+escape(t('sessionDeviceLastUsed'))+': '+escape(date(row.lastActiveAt))+'</p><p>'+escape(t('sessionDeviceExpires'))+': '+escape(date(row.idleExpiresAt))+'</p><button type="button" class="devices-text" data-action="revoke-device" data-id="'+escape(row.sessionId)+'"'+(busy||!ownerAvailable||unknown.has(row.sessionId)?' disabled':'')+'>'+escape(t('sessionDeviceRevoke'))+'</button>',{icon:row.current?'phone_android':'devices_other',subtitle:row.current?t('sessionDeviceCurrent'):undefined,className:'devices-card'})).join('')+'</div>');
  const logoutAll=target().querySelector('[data-action=logout-all-devices]');if(logoutAll)logoutAll.disabled=busy||!ownerAvailable||!managed;
  main.scrollTop=Math.min(scroll,Math.max(0,main.scrollHeight-main.clientHeight));
 }
 async function load(){
  if(!current()||busy||retired)return;if(!managed){failed=true;notice='sessionDevicesUnavailable';paint();return;}
  const own=++generation;busy=true;notice='';paint();
  try{const value=await ctx.api.command('security.devices');if(!current()||own!==generation)return;rows=list(value);failed=false;ownerAvailable=true;unknown.clear();}
  catch(error){if(current()&&own===generation){failed=true;ownerAvailable=error.code==='DEVICES_LIST_UNAVAILABLE';retired=error.code==='SUPERSEDED';notice=retired?'sessionDevicesRetired':'sessionDevicesUnavailable';if(!ownerAvailable){rows=[];unknown.clear();}}}
  finally{if(current()&&own===generation){busy=false;paint();}}
 }
 async function confirmRevoke(){
  await document.fonts.ready;if(!current())return false;
  const canvas=document.createElement('canvas'),c=canvas.getContext('2d'),text=t('sessionDeviceRevokeConfirm');c.font='14px AgoraBuyerRoboto';const width=Math.max(280,c.measureText(text).width+text.length*.25+48);
  return new Promise(resolve=>{
   const dialogs=createBuyerDialogs(ctx,{cancelLabel:t('cancel')}),node=dialogs.show(t('sessionDeviceRevoke'),'<p>'+escape(text)+'</p>',{maxWidth:width,inset:40,verticalInset:24});node.classList.add('security-password-dialog','devices-confirm');node.tabIndex=-1;node.focus({preventScroll:true});
   const button=document.createElement('button');button.type='button';button.textContent=t('confirm');node.querySelector('.profile-dialog-actions').append(button);let settled=false;
   function finish(value){if(settled)return;settled=true;dialogs.close();resolve(value);}
   button.addEventListener('click',()=>finish(true),{signal:ctx.signal});node.addEventListener('close',()=>finish(false),{once:true});
   node.addEventListener('click',event=>{if(event.target.closest('[data-dialog-close]')){event.preventDefault();event.stopImmediatePropagation();finish(false);}},{capture:true,signal:ctx.signal});node.addEventListener('cancel',event=>{event.preventDefault();finish(false);},{signal:ctx.signal});ctx.cleanup(()=>finish(false));
  });
 }
 function acknowledge(value,all=false){
  if(!value?.requiresLogin)return false;if(loginAcknowledged)return true;loginAcknowledged=true;
  ctx.toast(value.localPending?t('sessionDevicesLocalPending')+(all?' '+t(value.confirmed?'sessionDevicesAllConfirmed':'sessionDevicesAllUnknown'):''):t(all?(value.confirmed?'sessionDevicesAllConfirmed':'sessionDevicesAllUnknown'):'sessionDevicesLocalConfirmed'));
  location.replace(location.pathname+'#/login?security='+(all?'devices-all':'device-logout'));location.reload();return true;
 }
 ctx.action('refresh-devices',load);
 ctx.action('revoke-device',async button=>{
  if(!current()||busy||!ownerAvailable)return;const selected=rows,id=button.dataset.id,row=selected.find(row=>row.sessionId===id);if(!row||unknown.has(id))return;busy=true;paint();
  try{
   if(!await confirmRevoke()||!current()||rows!==selected)return;
   const value=await ctx.api.command(row.current?'security.devicesLogoutCurrent':'security.revokeDevice',{sessionId:id});
   if(acknowledge(value)||!current()||rows!==selected)return;
   if(value?.confirmed===true&&value.sessionId===id){rows=rows.filter(row=>row.sessionId!==id);notice='';}
   else{unknown.add(id);notice='sessionDeviceRevokeUnknown';}
  }catch(error){if(current()&&rows===selected){unknown.add(id);notice='sessionDeviceRevokeUnknown';}}
  finally{busy=false;if(current()){paint();ctx.find('[data-id="'+CSS.escape(id)+'"]')?.focus({preventScroll:true});}}
 });
 ctx.action('logout-all-devices',async()=>{
  if(!current()||busy||!ownerAvailable||!managed)return;const selected=rows;busy=true;paint();
  try{
   const change=await ctx.api.command('security.devicesPrepareLogoutAll');if(!current()||rows!==selected)return;
   const value=await passwordReauthentication(ctx,copy,{changeId:change.changeId,passkeyAvailable:supported,titleKey:'sessionDevicesLogoutAll',descriptionKey:'sessionDevicesLogoutAllDescription',submitKey:'sessionDevicesVerify',sendEmail:email=>ctx.api.command('security.devicesEmailCode',{changeId:change.changeId,email}),submitProof:async proof=>{const answer=await ctx.api.command('security.devicesLogoutAll',{...proof,changeId:change.changeId});acknowledge(answer,true);return answer;}});
   if(!value||acknowledge(value,true)||!current()||rows!==selected)return;
   notice='sessionDevicesAllUnknown';failed=true;ownerAvailable=false;
  }catch(error){if(current()&&rows===selected)notice='sessionDevicesUnavailable';}
  finally{busy=false;if(current())paint();}
 });
 main.addEventListener('touchstart',event=>{if(!current()||busy||retired||main.scrollTop>0||event.touches.length!==1||event.target.closest('dialog')){pull=null;return;}pull={x:event.touches[0].clientX,y:event.touches[0].clientY,distance:0};},{passive:true,signal:ctx.signal});
 main.addEventListener('touchmove',event=>{if(!pull||event.touches.length!==1)return;const dx=event.touches[0].clientX-pull.x,dy=event.touches[0].clientY-pull.y;if(Math.abs(dx)>Math.abs(dy)||main.scrollTop>0){pull=null;return;}pull.distance=Math.max(0,dy);if(dy>12&&event.cancelable)event.preventDefault();},{passive:false,signal:ctx.signal});
 main.addEventListener('touchend',()=>{const refresh=pull?.distance>=64;pull=null;if(refresh)void load();},{passive:true,signal:ctx.signal});main.addEventListener('touchcancel',()=>pull=null,{passive:true,signal:ctx.signal});
 ctx.cleanup(()=>{++generation;rows=[];unknown.clear();pull=null;});await load();
}
