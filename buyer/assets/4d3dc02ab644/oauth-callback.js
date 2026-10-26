import{escape}from'./ui.js';
import{originalCopy}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
// This view consumes the existing opaque provider flow. It never puts callback
// proof or challenge input into storage, history, diagnostics or navigation.
export async function oauthCallback(ctx){
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 let managed=false,state={providerState:'processing'},busy=false,epoch=0,retired=false;
 const live=()=>ctx.active()&&!retired,t=key=>escape(copy.t(key));
 const action=(key,name,kind='filled',attrs='')=>`<button type="button" class="recovery-native-${kind}" data-action="${name}" ${attrs}>${t(key)}</button>`;
 const field=()=>`<form data-form="oauth-factor" id="oauth-factor-form"><label class="oauth-native-field"><input name="twoFactorCode" type="text" placeholder=" " required inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" autocorrect="off" spellcheck="false" aria-label="${t('sessionTwoFactorLabel')}"><span>${t('sessionTwoFactorLabel')}</span></label><p id="oauth-factor-error" class="oauth-native-field-error" role="alert" hidden></p></form>`;
 function draw(error=''){
  if(!live())return;const stage=state.providerState||'recovery',twoFactor=stage==='twoFactor',processing=busy||stage==='processing'||stage==='submitting',success=stage==='authenticated',cancelled=stage==='cancelled';
  if(managed){
   const message=error||(copy.t(processing?'oauthCallbackProcessingDescription':success?'oauthCallbackSuccessDescription':twoFactor?state.invalidTwoFactor?'sessionTwoFactorInvalid':'sessionDevicesTwoFactor':cancelled?'sessionFreshCredentials':'sessionSignInPending'));
   ctx.render(`<section class="native-session-recovery oauth-native-managed" data-oauth-stage="${stage}"><div class="recovery-native-content"><h1>${t('sessionRecoveryTitle')}</h1><p class="recovery-native-message" role="status">${escape(message)}</p>${twoFactor?'<div class="recovery-native-options">'+field()+'</div>':''}<div class="recovery-native-actions">${processing?'<div class="recovery-native-progress" role="progressbar"></div>':''}${!processing&&!twoFactor&&!success&&!cancelled?action('sessionRecoveryRetry','oauth-recovery'):''}${twoFactor?action('sessionRecoveryContinue','oauth-submit'):''}${cancelled?action('sessionRecoverySignIn','oauth-login'):''}${state.canCancel===true?action('sessionCancelSignIn','oauth-cancel','outlined'):''}${action('sessionRecoveryBrowse','oauth-browse','text')}</div></div></section>`,{navigation:false});
  }else{
   const kind=processing?'Processing':success?'Success':'Failure',icon=processing?'sync':success?'check_circle_outline':'error_outline';
   const controls=twoFactor?`<div class="oauth-native-legacy-factor">${field()}${action('sessionRecoveryContinue','oauth-submit')}${action('sessionCancelSignIn','oauth-cancel','outlined')}</div>`:processing||success?'':`<div class="native-auth-state-actions"><button class="native-auth-primary" type="button" data-action="oauth-login">${mi('login')}${t('backToLogin')}</button><button class="native-auth-secondary" type="button" data-action="oauth-recover">${mi('refresh')}${t('oauthCallbackRetry')}</button></div>`;
   ctx.render(`<section class="oauth-native-legacy" data-oauth-stage="${stage}"><div class="oauth-native-legacy-content native-auth-state"><span class="native-auth-state-icon" data-state="${kind.toLowerCase()}">${mi(icon)}</span><h2>${t('oauthCallback'+kind+'Title')}</h2><p role="status">${escape(error||copy.t(twoFactor?state.invalidTwoFactor?'sessionTwoFactorInvalid':'sessionTwoFactorRequired':'oauthCallback'+kind+'Description'))}</p>${processing||success?'<div class="oauth-native-spinner" role="progressbar"></div>':''}${controls}</div></section>`,{navigation:false});
  }
  if(busy)for(const node of ctx.find('[data-oauth-stage]').querySelectorAll('input,button:not([data-action=oauth-browse]):not([data-action=oauth-cancel])')){node.disabled=true;node.setAttribute('data-action-locked','');}
  const input=ctx.find('[name=twoFactorCode]');if(input){
   input.addEventListener('input',()=>{input.value=input.value.replace(/[^0-9]/g,'').slice(0,6);input.removeAttribute('aria-invalid');const message=ctx.find('#oauth-factor-error');message.hidden=true;},{signal:ctx.signal});
   input.addEventListener('invalid',event=>{event.preventDefault();input.setAttribute('aria-invalid','true');input.setAttribute('aria-describedby','oauth-factor-error');const message=ctx.find('#oauth-factor-error');message.hidden=false;message.textContent=copy.t('sessionTwoFactorInvalid');},{signal:ctx.signal});
  }
 }
 async function run(command,input={}){
  if(!live()||busy)return;const turn=++epoch;busy=true;draw();
  try{const next=await ctx.api.command(command,input);if(!live()||turn!==epoch)return;busy=false;
   if(command==='session.cancelLogin'){state={providerState:'cancelled'};draw();return;}
   state=next||{providerState:'recovery'};managed=state.managed??managed;draw();
   if(state.authenticated&&live())ctx.returnAfterLogin();
  }catch(error){if(live()&&turn===epoch){busy=false;state={...state,providerState:'recovery'};draw(error.message);}}
 }
 const leave=path=>{if(!live())return;++epoch;retired=true;ctx.find('[name=twoFactorCode]')?.form?.reset();ctx.go(path);};
 ctx.action('oauth-browse',()=>leave('/'));ctx.action('oauth-login',()=>leave('/login'));ctx.action('oauth-recovery',()=>leave('/session-recovery'));
 ctx.action('oauth-submit',()=>ctx.find('#oauth-factor-form')?.requestSubmit());
 ctx.action('oauth-recover',()=>run('session.recoverLogin'));
 ctx.action('oauth-cancel',()=>{if(busy){++epoch;busy=false;}return run('session.cancelLogin');});
 ctx.form('oauth-factor',async(data,form)=>{const code=data.twoFactorCode;form.reset();await run(state.managed?'auth.providerSubmit':'auth.providerFactor',{flowId:state.flowId,twoFactorCode:code});});
 addEventListener('agora-buyer-auth',()=>{if(!live()||busy)return;++epoch;ctx.find('#oauth-factor-form')?.reset();state={providerState:'recovery'};draw(copy.t('sessionFreshCredentials'));},{signal:ctx.signal});
 ctx.cleanup(()=>{retired=true;++epoch;ctx.find('#oauth-factor-form')?.reset();state={};});
 ctx.header(copy.t('oauthCallbackProcessingTitle'),false,{shortcuts:false});
 try{const session=await ctx.api.session();if(!live())return;managed=session.mode==='cookie';}catch{}if(!live())return;
 draw();await run('auth.oauthReturn',{provider:'google',rememberMe:true});
}
