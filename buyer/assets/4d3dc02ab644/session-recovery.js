import{uiText}from'./ui-text.js';
import{escape}from'./ui.js';
import{originalCopy}from'./locale.js';
export async function recovery(ctx){
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('sessionRecoveryTitle'),false,{shortcuts:false});let state=null,busy=false,epoch=0;
 const t=(key,args)=>escape(copy.t(key,args));
 const action=(key,name,kind='filled',attributes='')=>`<button type="button" class="recovery-native-${kind}" data-action="${name}" ${attributes}>${t(key)}</button>`;
 function draw(message=''){
  if(!ctx.active())return;
  const s=state||{},labels={pending:'sessionRepairPending',active:'sessionRepairActive',anonymous:'sessionRepairAnonymous',unavailable:'sessionRepairUnavailable'};
  const status=s.authenticated?'sessionRecoveryRestored':s.repair?s.repair.ready?s.repair.username?'sessionRepairAccountReady':'sessionRepairReady':'sessionRepairProofMissing':s.candidates?.length?'sessionRepairExplanation':s.canCancel?'sessionSignInPending':s.state==='requiresResolution'||s.requiresReload?'sessionRecoveryBlocked':s.state==='logoutPending'?'sessionLogoutPending':s.state==='cancellationPending'?'sessionRecoveryCancellation':s.canSignIn?'sessionFreshCredentials':busy?'sessionRecoveryChecking':'sessionRecoveryOffline';
  const options=s.repair?`<div class="recovery-native-repair">${s.repair.username?`<p class="recovery-native-account">${t('sessionRepairAccount',{username:s.repair.username})}</p>`:s.repair.ready?`<p>${t('sessionRepairAccountUnknown')}</p>`:''}${s.repair.ready?action('sessionRepairConfirm','recovery-confirm'):''}${action('sessionRepairBack','recovery-read','text')}</div>`:(s.candidates||[]).map(v=>`<div class="recovery-native-card"><h2>${t('sessionRepairRecord',{number:Number(v.index)+1})}</h2><p>${t(labels[v.status]||labels.unavailable)}</p>${action('sessionRepairInspect','recovery-inspect','outlined',`data-index="${Number(v.index)}"`)}</div>`).join('');
  ctx.render(`<section class="native-session-recovery"><div class="recovery-native-content"><h1>${t('sessionRecoveryTitle')}</h1><p class="recovery-native-message" role="status">${escape(message||copy.t(status))}</p>${options?`<div class="recovery-native-options">${options}</div>`:''}<div class="recovery-native-actions">${busy?'<div class="recovery-native-progress" role="progressbar"></div>':''}${s.requiresReload?`<p>${escape(uiText('登入狀態已在其他頁面變更，請重新載入。'))}</p>`+`<button type="button" class="recovery-native-filled" data-action="recovery-reload">${escape(uiText('重新載入'))}</button>`:''}${action('sessionRecoveryRetry','recovery-read')}${s.authenticated?`<a class="recovery-native-filled" href="#/profile">${t('sessionRecoveryContinue')}</a>`:''}${s.canSignIn?`<a class="recovery-native-filled" href="#/login">${t('sessionRecoverySignIn')}</a>`:''}${s.canCancel?action('sessionCancelSignIn','recovery-cancel','outlined'):''}${s.canLogout?action('sessionRecoveryLogout','recovery-logout','outlined'):''}${action('sessionRecoveryBrowse','recovery-browse','text')}</div></div></section>`,{navigation:false});
  // Keep the existing busy fence; the original view remains fully painted.
  if(busy)for(const el of ctx.find('.recovery-native-content').querySelectorAll('button:not([data-action=recovery-browse]),a')){if(el.tagName==='A'){el.setAttribute('aria-disabled','true');el.style.pointerEvents='none';}else el.disabled=true;}
 }
 async function run(action,input={}){
  if(busy||!ctx.active())return;const turn=++epoch;busy=true;draw();
  try{const value=await ctx.api.command(action,{...input,...(action==='recovery.open'?{}:{viewId:state?.viewId})});if(!ctx.active()||turn!==epoch)return;state=value;busy=false;draw();return true;}
  catch(error){if(ctx.active()&&turn===epoch){busy=false;state=null;draw(error.message);}}
 }
 ctx.action('recovery-read',()=>run('recovery.open'));ctx.action('recovery-inspect',el=>run('recovery.inspect',{index:Number(el.dataset.index)}));ctx.action('recovery-confirm',()=>run('recovery.confirm'));ctx.action('recovery-cancel',()=>run('recovery.cancel'));
 ctx.action('recovery-logout',()=>{if(confirm(copy.t('sessionRecoveryLogoutExplanation')))return run('recovery.logout');});ctx.action('recovery-reload',()=>location.reload());ctx.action('recovery-browse',async()=>{if(busy){++epoch;busy=false;state=null;ctx.go('/');return;}if(state?.viewId){if(!await run('recovery.browse'))return;}ctx.go('/');});
 addEventListener('agora-buyer-auth',()=>{if(!busy){++epoch;state=null;draw(uiText('登入選擇已改變，請重新讀取狀態。'));}},{signal:ctx.signal});
 ctx.cleanup(()=>{++epoch;state=null;});await run('recovery.open');
}
