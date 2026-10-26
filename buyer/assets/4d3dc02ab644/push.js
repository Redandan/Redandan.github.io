import{uiText}from'./ui-text.js';
import{escape}from'./ui.js';
import{originalCopy}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
const permissionRequests=new Map();
window.agoraBuyerPushPermission=handle=>permissionRequests.get(handle)||Promise.resolve('unsupported');
export async function notificationEntry(ctx){
 const receipts=ctx.query.getAll('push');
 if(!receipts.length){location.replace('#/notifications');return;}
 ctx.header('開啟通知',true);ctx.render('<section class="panel"><p role="status">正在確認原通知與目前登入…</p></section>');
 try{if(receipts.length!==1)throw Error('通知無法確認');await ctx.api.command('push.open',{receipt:receipts[0]});}
 catch(e){if(ctx.active()){ctx.toast('這則通知已過期或無法確認原帳號，請重新開啟需要的頁面。');location.replace('#/');}}
}
export async function settings(ctx){
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('pushSettingsTitle'),true,{nativeAppBar:true,nativeBack:'compact',shortcuts:false,backLabel:copy.t('back'),backTooltip:copy.t('back')});
 await import('./push-browser.js');if(!ctx.active())return;
 let prepared=null,busy=true,retired=false,epoch=0,resumeTimer,state={capability:'unsupported',subscribed:false,confirmed:false},error='';
 const ownedPermissions=new Set(),live=()=>ctx.active()&&!retired,t=key=>escape(copy.t(key)),capability=value=>value==='default'?'prompt':value;
 const canEnable=()=>!busy&&state.confirmed===true&&['prompt','granted'].includes(capability(state.capability));
 function statusKey(){const kind=capability(state.capability);return kind==='unsupported'?'pushUnsupported':kind==='installation-required'?'pushInstallRequired':kind==='denied'?'pushPermissionBlocked':kind==='prompt'?'pushPermissionNeeded':!state.confirmed?'pushStateUnconfirmed':state.subscribed?'pushEnabledStatus':'pushAllowedNotRegistered';}
 function draw(){
  if(!live())return;const subscribed=state.subscribed===true,kind=capability(state.capability),ready=!!prepared&&!busy,showEnable=!subscribed&&(busy||canEnable()),enableLabel=busy?'pushProcessing':kind==='granted'?'pushRegisterAccount':'pushEnableOneTap';
  const primary=subscribed?'<button type="button" class="push-native-primary" data-action="push-disable" data-danger="true" '+(!ready?'disabled':'')+'>'+(busy?'<span class="push-native-spinner" role="progressbar"></span>':mi('notifications_off'))+'<span>'+t(busy?'pushCancelling':'pushCancelButton')+'</span></button>':showEnable?'<button type="button" class="push-native-primary" data-action="push-enable" '+(!ready||!canEnable()||error?'disabled':'')+'>'+(busy?'<span class="push-native-spinner" role="progressbar"></span>':mi('notifications_active'))+'<span>'+t(enableLabel)+'</span></button>':'';
  ctx.render('<article class="push-native-page"><section class="push-native-card"><header>'+mi(subscribed?'notifications_active':'notifications_off')+'<h2>'+t('pushStatusTitle')+'</h2></header>'+((state.confirmed||error)?'<p class="push-native-status" data-subscribed="'+subscribed+'" role="status">'+t(statusKey())+'</p>':'')+(error?'<p class="push-native-error" role="alert">'+escape(error)+'</p>':'')+'</section><section class="push-native-card push-native-feature"><h2>'+t('pushFeatureTitle')+'</h2><p>'+t('pushFeatureDescription')+'</p></section><div class="push-native-actions">'+primary+'<button type="button" class="push-native-refresh" data-action="push-status" '+(busy?'disabled':'')+'>'+mi('refresh')+'<span>'+t('txt6787dd83e2')+'</span></button></div>'+(!busy&&state.confirmed&&!subscribed&&canEnable()?'<p class="push-native-hint">'+t(kind==='prompt'?'pushSettingsHint':'pushRegisterAccountHint')+'</p>':'')+'</article>',{navigation:false});
 }
 async function mutate(action,permissionHandle){
  if(!live()||busy||!prepared)return false;const turn=++epoch;busy=true;error='';draw();
  try{const value=await ctx.api.command(action,{handle:prepared.handle,...(permissionHandle?{permissionHandle}:{})});if(!live()||turn!==epoch)return false;
   const kind=capability(value.capability),confirmed=action!=='push.subscribe'||value.subscribed===true||kind!=='granted';state={...value,confirmed,subscribed:value.subscribed===true&&kind==='granted'};if(!confirmed)error=copy.t('pushStateUnconfirmed');return true;
  }catch(_){if(live()&&turn===epoch){state={...state,subscribed:false,confirmed:false};error=copy.t('pushStateUnconfirmed');}return false;}
  finally{if(live()&&turn===epoch){busy=false;draw();}}
 }
 ctx.action('push-enable',async()=>{
  if(!live()||busy||!prepared||!canEnable()||error)return;const handle=crypto.randomUUID();
  // Preserve the original synchronous permission request in this explicit tap.
  // Refresh/foreground never asks for permission or changes a subscription.
  const permission=window.requestPushPermission();permissionRequests.set(handle,permission);ownedPermissions.add(handle);
  try{await mutate('push.subscribe',handle);}finally{permissionRequests.delete(handle);ownedPermissions.delete(handle);}
 });
 ctx.action('push-disable',()=>mutate('push.unsubscribe'));ctx.action('push-status',()=>prepared?mutate('push.status'):ctx.reload());
 const resume=()=>{clearTimeout(resumeTimer);if(document.visibilityState==='hidden')return;resumeTimer=setTimeout(()=>{if(live()&&!busy&&prepared)mutate('push.status');},500);};
 for(const name of['focus','pageshow'])addEventListener(name,resume,{signal:ctx.signal});document.addEventListener('visibilitychange',resume,{signal:ctx.signal});
 ctx.cleanup(()=>{retired=true;++epoch;clearTimeout(resumeTimer);prepared=null;for(const handle of ownedPermissions)permissionRequests.delete(handle);ownedPermissions.clear();});
 draw();const turn=++epoch;
 try{const value=await ctx.api.command('push.prepare');if(!live()||turn!==epoch)return;prepared=value;state={...value,confirmed:false,subscribed:false};busy=false;await mutate('push.status');}
 catch(_){if(live()&&turn===epoch){busy=false;error=copy.t('pushStateUnconfirmed');draw();}}
}
