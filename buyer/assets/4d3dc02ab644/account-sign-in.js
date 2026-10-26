import{uiText}from'./ui-text.js';
import{escape}from'./ui.js';
import{originalCopy}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
import{bindProfileSettings}from'./profile-settings.js';
import{loginShell,loginFields,loginNotice,authField,bindLoginViewport,translateLogin}from'./auth-ui.js';
export{oauthReturn}from'./provider-sign-in.js';
// Match the native parent route's unsent controllers while reading legal pages.
// Keep only detached, unsent name/password/email nodes in this JS process.
// Never keep OTP, second-factor or Turnstile values, nor a submitted form.
let legalDraft=null;
function clearLegalDraft(){if(legalDraft){for(const node of Object.values(legalDraft.inputs))if(node)node.value='';legalDraft=null;}}
addEventListener('agora-buyer-auth',clearLegalDraft);
const draftOwner=state=>JSON.stringify([state.mode,state.revision]);
const legalChild=()=>{try{return ['/privacy-policy','/user-agreement'].includes(new URL(location.hash.slice(1),location.origin).pathname);}catch{return false;}};
addEventListener('hashchange',()=>{if(!legalDraft)return;let path;try{path=new URL(location.hash.slice(1),location.origin).pathname;}catch{}if(!legalChild()&&path!=='/login')clearLegalDraft();});

export async function login(ctx){
 const securityNotice={'password-changed':'密碼已變更，請以有效的登入方式重新登入。','password-unknown':'密碼變更結果仍待確認，請先重新登入確認，避免重複送出。','passkey-changed':'Passkey 已變更，請以有效的登入方式重新登入。','passkey-unknown':'Passkey 變更結果仍待確認，請重新登入後查看清單。','login-method-changed':'登入方式已變更，請重新登入。','login-method-unknown':'登入方式變更結果仍待確認，請重新登入後查看，避免重複送出。'}[ctx.query.get('security')];
 ctx.header(uiText('登入'),false,{shortcuts:false});let copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 const initial=await ctx.api.command('session.loginStatus');if(!ctx.active())return;if(initial.authenticated){clearLegalDraft();ctx.returnAfterLogin();return;}
 const saved=legalDraft;legalDraft=null;const restore=saved&&saved.owner===draftOwner(initial)&&!initial.pending&&!initial.requiresReload&&(initial.availability==='anonymous'||initial.mode==='legacy'&&initial.availability==='legacy')?saved:null;if(saved&&!restore){legalDraft=saved;clearLegalDraft();}
 ctx.render(loginShell(copy),{navigation:false});bindLoginViewport(ctx);
 const host=ctx.find('.buyer-login'),form=ctx.find('#login-form'),providerSlot=ctx.find('#provider-sign-in');
 let kind=restore?.kind||(initial.loginKind==='EMAIL_CODE'?'EMAIL_CODE':'PASSWORD'),state=initial,cleanupChallenge,showPassword=false,emailCodeSent=restore?.emailCodeSent===true,emailValue=restore?.inputs.email?.value||'',rememberMe=restore?.rememberMe??initial.persistent!==false,countdownTimer,codeUntil=restore?.codeUntil||0,appearanceClose,lastError='';
 const settingsCopy={t:(...args)=>copy.t(...args)};
 function notice(){const node=ctx.find('#security-notice');node.hidden=!securityNotice;if(securityNotice)node.textContent=uiText(securityNotice);}
 function fields(){cleanupChallenge?.();cleanupChallenge=null;form.innerHTML=loginFields(copy,{kind,state:{...state,showPassword},emailCodeSent,emailValue,rememberMe});host.dataset.loginKind=kind;ctx.find('#login-auto-notice').innerHTML=state.pending?'':loginNotice(copy,kind);}
 function countdown(){
  clearInterval(countdownTimer);const update=()=>{if(!ctx.active()){clearInterval(countdownTimer);return;}const remaining=Math.max(0,Math.ceil((codeUntil-Date.now())/1000)),node=ctx.find('#login-email-countdown'),button=ctx.find('.login-code-resend');if(node)node.textContent=remaining?copy.t('loginVerificationCodeValidity',{time:String(Math.floor(remaining/60)).padStart(2,'0')+':'+String(remaining%60).padStart(2,'0')}):'';if(button)button.disabled=remaining>0||state.pending===true;if(!remaining)clearInterval(countdownTimer);};update();if(codeUntil>Date.now())countdownTimer=setInterval(update,1000);
 }
 async function display(result){
  if(!ctx.active())return;if(result.authenticated){form.reset();ctx.returnAfterLogin();return;}state=result;
  const pending=result.pending===true,locked=pending&&!result.canSubmit;host.dataset.pending=String(pending);host.dataset.managed=String(result.mode==='cookie');
  ctx.find('#login-fields').disabled=locked;ctx.find('#login-credentials').hidden=locked;ctx.find('.login-native-providers').hidden=pending;
  for(const action of['password-mode','email-mode','passkey','google','telegram','wallet']){const node=host.querySelector(`[data-action="${action}"]`);if(node)node.disabled=pending;}
  const choice=ctx.find('[name=rememberMe]');if(choice)choice.disabled=pending;
  ctx.find('#login-auto-notice').innerHTML=pending?'':loginNotice(copy,kind);
  ctx.find('#login-recovery').innerHTML=pending?`<div class="login-recovery-actions"><button type="button" class="secondary" data-action="recover-login">${escape(copy.t('sessionCheckSignIn'))}</button><button type="button" data-action="cancel-login">${escape(copy.t('sessionCancelSignIn'))}</button></div>`:'';
  ctx.find('#login-error').textContent=result.requiresTwoFactor?copy.t('sessionTwoFactorRequired'):result.requiresTurnstile?copy.t('sessionSignInExtraVerification'):lastError;
  const factor=ctx.find('#login-second-factor');if(result.requiresTwoFactor&&!factor.firstElementChild)factor.innerHTML=authField(copy,'sessionTwoFactorLabel','twoFactorCode',{icon:'lock',attributes:'inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" minlength="6" maxlength="6" required'});else if(!result.requiresTwoFactor)factor.innerHTML='';
  cleanupChallenge?.();cleanupChallenge=null;ctx.find('#login-challenge').innerHTML='';const token=ctx.find('[name=turnstileToken]');token.value='';
  if(result.requiresTurnstile){if(!result.turnstileSiteKey){ctx.find('#login-challenge').textContent=uiText('人機驗證目前無法使用，請稍後再試。');return;}const{mountTurnstile}=await import('./turnstile.js');cleanupChallenge=await mountTurnstile(ctx,ctx.find('#login-challenge'),result.turnstileSiteKey,value=>{if(ctx.active())token.value=value||'';});}
 }
 function appearance(){appearanceClose?.();appearanceClose=bindProfileSettings(ctx,{authenticated:false},settingsCopy,{publicOnly:true,onChange:async change=>{if(!ctx.active())return;if(change==='language'){const previous=copy,next=await originalCopy(ctx.signal);if(!ctx.active())return;translateLogin(host,previous,next);copy=next;appearance();}let name='brightness_auto';try{if(JSON.parse(localStorage.getItem('flutter.system_theme'))===false)name=JSON.parse(localStorage.getItem('flutter.dark_mode'))?'dark_mode':'light_mode';}catch{}ctx.find('[data-action=profile-theme]').innerHTML=mi(name);notice();await display(state);countdown();}});}
 fields();
 if(restore){for(const[name,node]of Object.entries(restore.inputs)){const fresh=form.elements[name];if(node&&fresh){node.type=fresh.type;node.readOnly=fresh.readOnly;node.disabled=false;node.removeAttribute('aria-invalid');fresh.replaceWith(node);}else if(node)node.value='';}}
 notice();appearance();await display(initial);countdown();
 ctx.cleanup(()=>{
  clearInterval(countdownTimer);cleanupChallenge?.();appearanceClose?.();
  clearLegalDraft();
  if(legalChild()&&!state.pending&&!form.dataset.pending&&!providerSlot.hasChildNodes()){
   const inputs=Object.fromEntries(['username','password','email'].map(name=>[name,form.elements[name]]).filter(([,node])=>!!node));
   for(const node of Object.values(inputs))node.remove();
   legalDraft={owner:draftOwner(state),kind,rememberMe,emailCodeSent,codeUntil,inputs};
  }else{for(const name of['username','password','email'])if(form.elements[name])form.elements[name].value='';}
 });
 form.addEventListener('change',event=>{if(event.target.name==='rememberMe')rememberMe=event.target.checked;},{signal:ctx.signal});
 async function mode(next){if(state.pending)return;kind=next;lastError='';showPassword=false;emailCodeSent=false;emailValue='';codeUntil=0;clearInterval(countdownTimer);state={...state,requiresTwoFactor:false,requiresTurnstile:false};fields();await display(state);}
 ctx.action('password-mode',()=>mode('PASSWORD'));ctx.action('email-mode',()=>mode('EMAIL_CODE'));
 ctx.action('login-password-visibility',element=>{const input=ctx.find('[name=password]');if(!input||state.pending)return;showPassword=!showPassword;input.type=showPassword?'text':'password';element.innerHTML=mi(showPassword?'visibility_off':'visibility');element.setAttribute('aria-label',copy.t(showPassword?'loginHidePassword':'loginShowPassword'));});
 ctx.action('email-code',async()=>{if(state.pending||codeUntil>Date.now())return;const email=ctx.find('[name=email]');if(!email?.reportValidity())return;const value=email.value;await ctx.api.command('auth.emailCode',{email:value});if(!ctx.active())return;emailValue=value;emailCodeSent=true;codeUntil=Date.now()+600000;fields();await display(state);countdown();ctx.toast(uiText('驗證碼已送出，請查看信箱。'));});
 ctx.form('login',async(data,node)=>{lastError='';ctx.find('#login-error').textContent='';for(const key of['password','verificationCode','twoFactorCode'])if(node.elements[key])node.elements[key].value='';try{await display(await ctx.api.command('session.login',{...data,kind,rememberMe:state.pending?state.persistent===true:node.elements.rememberMe?data.rememberMe==='on':rememberMe}));}catch(error){if(ctx.active()){lastError=error.message;ctx.find('#login-error').textContent=lastError;}}});
 ctx.action('recover-login',async()=>{lastError='';await display(await ctx.api.command('session.recoverLogin'));});
 ctx.action('cancel-login',async()=>{if(!confirm(uiText('取消目前這次登入？')))return;const result=await ctx.api.command('session.cancelLogin');if(!ctx.active())return;state=result;fields();await display(result);});
 for(const provider of['passkey','google','telegram','wallet'])ctx.action(provider,async()=>{const persistent=ctx.find('[name=rememberMe]')?.checked??rememberMe;if(provider==='telegram'||provider==='wallet'){const{providerSignIn}=await import('./provider-sign-in.js');await providerSignIn(ctx,provider,{rememberMe:persistent});return;}if(provider==='google')ctx.persistAuthReturn();const result=await ctx.api.command('auth.provider',{provider,rememberMe:persistent});if(!ctx.active())return;if(result?.redirect){const url=new URL(result.redirect);if(url.protocol!=='https:'||url.hostname!=='accounts.google.com')throw Error('無效的登入網址');location.assign(url.href);}else await display(result);});
}
export{register}from'./registration.js';
