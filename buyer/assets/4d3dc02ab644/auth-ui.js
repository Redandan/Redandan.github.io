import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{publishedBuyerVersion}from'./published-version.js';

const text=(copy,key)=>escape(copy.t(key));
export function authField(copy,key,name,{type='text',icon='person',attributes='',suffix='',value=''}={}){
 return`<label class="login-native-field">${mi(icon)}<input name="${name}" type="${type}" value="${escape(value)}" placeholder=" " ${attributes}><span>${text(copy,key)}</span>${suffix}</label>`;
}
export function loginShell(copy){
 const logo=new URL('../../icons/web-app-manifest-192x192.png',import.meta.url),google=new URL('./google.png',import.meta.url),version=publishedBuyerVersion({version:document.querySelector('meta[name=app-version]').content,build_number:document.querySelector('meta[name=app-build-number]').content,source_commit:document.querySelector('meta[name=source-commit]').content}).fullVersion;
 const provider=(action,key,icon)=>`<button type="button" class="secondary login-provider" data-action="${action}">${action==='google'?`<img src="${google}" alt="" width="24" height="24">`:mi(icon)}<span>${text(copy,key)}</span></button>`;
 let choice='brightness_auto';try{if(JSON.parse(localStorage.getItem('flutter.system_theme'))===false)choice=JSON.parse(localStorage.getItem('flutter.dark_mode'))?'dark_mode':'light_mode';}catch{}
 return`<article class="auth-layout buyer-login"><div class="login-native-preferences"><button type="button" data-action="profile-language" aria-label="${text(copy,'loginSwitchLanguage')}">${mi('language')}</button><button type="button" data-action="profile-theme" aria-label="${text(copy,'loginSwitchTheme')}">${mi(choice)}</button></div><div class="login-native-header"><div class="auth-brand"><span><img src="${logo}" width="36" height="36" alt=""></span><strong>${text(copy,'loginProjectName')}</strong></div><p>${text(copy,'loginProjectDescription')}</p></div><div id="login-auto-notice"></div><div id="login-error" class="form-errors" role="alert"></div><div id="security-notice" role="status" hidden></div><form method="post" data-form="login" id="login-form"></form><div id="login-recovery"></div><div id="provider-sign-in"></div><div class="login-native-providers"><div class="login-native-divider"><span>${text(copy,'or')}</span></div>${provider('google','loginWithGoogle','login')}${provider('telegram','loginWithTelegram','telegram')}${provider('wallet','loginWithWallet','account_balance_wallet')}${provider('passkey','loginWithPasskey','fingerprint')}</div><footer class="login-native-footer"><p><span>${text(copy,'noAccountYet')}</span><a href="#/register">${text(copy,'registerNow')}</a></p><div><a href="#/privacy-policy">${text(copy,'privacyPolicy')}</a><span>•</span><a href="#/user-agreement">${text(copy,'userAgreement')}</a></div><button type="button" class="login-native-version" data-action="profile-version">${escape(version)}</button></footer></article>`;
}
export function loginNotice(copy,kind){return`<aside class="login-native-notice">${mi('info_outline')}<p>${text(copy,kind==='EMAIL_CODE'?'loginAutoRegisterHintCombined':'loginAutoRegisterHintThird')}</p></aside>`;}
export function loginFields(copy,{kind,state,emailCodeSent=false,rememberMe=true,emailValue=''}){
 const managed=state.mode==='cookie',mode=kind==='EMAIL_CODE',showPassword=!!state.showPassword;
 const remember=`<label class="login-native-remember"><input type="checkbox" name="rememberMe" ${rememberMe?'checked':''}><span>${text(copy,managed?'sessionKeepSignedIn':'rememberMe')}${managed?`<small>${text(copy,'sessionKeepSignedInDescription')}</small>`:''}</span></label>`;
 const passwordToggle=`<button type="button" data-action="login-password-visibility" aria-label="${text(copy,showPassword?'loginHidePassword':'loginShowPassword')}">${mi(showPassword?'visibility_off':'visibility')}</button>`;
 const password=authField(copy,'username','username',{attributes:'autocomplete="username" required'})+authField(copy,'password','password',{type:showPassword?'text':'password',icon:'lock',attributes:'autocomplete="current-password" required',suffix:passwordToggle});
 const email=authField(copy,'email','email',{type:'email',icon:'email',value:emailValue,attributes:'autocomplete="email" required'+(emailCodeSent?' readonly':'')})+(emailCodeSent?`<p class="login-email-code-help">${text(copy,'loginEmailCodeHelp')}</p>`+authField(copy,'enterVerificationCode','verificationCode',{icon:'verified',attributes:'inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" minlength="6" maxlength="6" required'})+`<p id="login-email-countdown" role="status"></p><button type="button" class="secondary login-code-resend" data-action="email-code">${text(copy,'resendCode')}</button>`:'');
 const primary=mode&&!emailCodeSent?`<button type="button" class="primary login-native-send" data-action="email-code">${text(copy,'sendVerificationCode')}</button>`:`<button type="submit" class="primary login-native-submit">${text(copy,'login')}</button>`;
 return`<fieldset id="login-fields">${managed?remember:''}<div id="login-second-factor"></div><input type="hidden" name="turnstileToken"><div id="login-challenge"></div><div id="login-credentials">${mode?email:password}${mode?'':`<div class="login-native-options">${managed?'':remember}<a href="#/forgot-password">${text(copy,'forgotPassword')}</a></div>`}${primary}<button type="button" class="login-native-mode" data-action="${mode?'password-mode':'email-mode'}">${text(copy,mode?'switchToUsernamePasswordLogin':'loginSwitchToEmailCode')}</button></div></fieldset>`;
}

export function bindLoginViewport(ctx){
 const host=ctx.find('.buyer-login'),main=document.querySelector('#buyer-main');
 const update=()=>{if(ctx.active())host.dataset.compact=String(main.clientHeight<700);};
 const observer=new ResizeObserver(update);observer.observe(main);update();ctx.cleanup(()=>observer.disconnect());
 const standalone=navigator.standalone===true||matchMedia('(display-mode: standalone)').matches||matchMedia('(display-mode: fullscreen)').matches;
 if(standalone){
  ctx.resetScroll?.();
  const restore=()=>requestAnimationFrame(()=>{if(!ctx.active()||document.visibilityState==='hidden')return;const active=document.activeElement,editing=active?.isContentEditable||active?.matches('textarea,input:not([type=checkbox]):not([type=radio]):not([type=hidden]):not([type=button]):not([type=submit])');if(!editing)main.scrollTop=0;});
  // HTML can render before its initial load/pageshow; entry already restored
  // the top. Only a restored document needs another pageshow scroll reset.
  addEventListener('pageshow',event=>{if(event.persisted)restore();},{signal:ctx.signal});document.addEventListener('visibilitychange',restore,{signal:ctx.signal});
 }

}
export function translateLogin(host,previous,next){
 // Only fixed authored UI scopes are translated. Input values and provider
 // payloads are excluded, so switching appearance preserves the same controls.
 const keys=['loginSwitchLanguage','loginSwitchTheme','loginProjectName','loginProjectDescription','loginAutoRegisterHintCombined','loginAutoRegisterHintThird','or','loginWithGoogle','loginWithTelegram','loginWithWallet','loginWithPasskey','noAccountYet','registerNow','privacyPolicy','userAgreement','username','password','email','enterVerificationCode','loginEmailCodeHelp','sendVerificationCode','resendCode','rememberMe','sessionKeepSignedIn','sessionKeepSignedInDescription','forgotPassword','login','switchToUsernamePasswordLogin','loginSwitchToEmailCode','loginShowPassword','loginHidePassword','sessionTwoFactorLabel'];
 const authored=new Map(keys.map(key=>[previous.t(key),key]));
 for(const scope of host.querySelectorAll('.login-native-preferences,.login-native-header,#login-auto-notice,#login-form,.login-native-providers,.login-native-footer')){
  const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);let node;
  while((node=walker.nextNode())){const key=authored.get(node.data);if(key)node.data=next.t(key);}
  for(const element of scope.querySelectorAll('[aria-label]')){const key=authored.get(element.getAttribute('aria-label'));if(key)element.setAttribute('aria-label',next.t(key));}
 }
}
