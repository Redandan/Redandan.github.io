import{uiText}from'./ui-text.js';
import{escape}from'./ui.js';
import{originalCopy}from'./locale.js';
import{authField}from'./auth-ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{authFlowShell,bindAuthFlow,forgotSteps,authInfo,authBack}from'./auth-flow-ui.js';
const t=(copy,key)=>escape(copy.t(key));
export async function unavailableLink(ctx){
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 const token=ctx.query.get('token'),hasToken=!!token?.trim()&&token.trim().toLowerCase()!=='null';
 // Retired URL tokens are neither validated nor sent nor kept in history.
 if(ctx.query.has('token')){const u=new URL(location.href),h=new URL(u.hash.slice(1)||'/reset-password',u.origin);h.searchParams.delete('token');u.hash=h.pathname+h.search;history.replaceState(null,'',u);}
 ctx.header(copy.t('resetPasswordTitle'),true,{nativeAppBar:true,shortcuts:false});
 ctx.render(authFlowShell(copy,{title:'resetPasswordTitle',subtitle:'resetPasswordSubtitle',icon:'password_outlined',body:`<div class="native-auth-state"><span class="native-auth-state-icon">${mi('link_off_outlined')}</span><h2>${t(copy,hasToken?'resetPasswordLinkUnavailable':'resetPasswordInvalidLink')}</h2><p>${t(copy,'resetPasswordUseEmailCodeDescription')}</p><div class="native-auth-state-actions"><a class="primary" href="#/forgot-password">${mi('mark_email_read_outlined')}<span>${t(copy,'forgotPasswordTitle')}</span></a><a class="primary" href="#/login">${mi('login')}<span>${t(copy,'backToLogin')}</span></a></div></div>`}),{navigation:false});bindAuthFlow(ctx);
}
export async function passwordReset(ctx){
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('forgotPasswordTitle'),true,{nativeAppBar:true,shortcuts:false});
 let state={},step='email',email='',busy=false,retired=false,timer,until=0,closeLayout;
 const active=()=>ctx.active()&&!retired;
 function lock(){if(!active())return;for(const el of ctx.find('.native-auth-body')?.querySelectorAll('button,input')||[])el.disabled=busy;const resend=ctx.find('[data-action=reset-resend]');if(resend)resend.disabled=busy||Date.now()<until;}
 function draw(message=''){
  if(!active())return;
  const error=`<div class="native-auth-messages" role="alert">${message?`<p>${mi('error_outline')}<span>${escape(message)}</span></p>`:''}</div>`;
  const input=(key,name,options)=>authField(copy,key,name,options);
  let body;
  if(state.unknown){
   body=`<div class="native-auth-body">${authInfo(copy,'resetPasswordUseEmailCodeDescription',{icon:'info_outline'})}<p class="notice">${escape(uiText('上次重設的結果尚未確認。請先返回登入確認；此頁不會自動重送。'))}</p><a class="primary" href="#/login">${escape(uiText('返回登入確認'))}</a><form method="post" data-form="reset-restart">${input('email','email',{type:'email',icon:'email',value:email,attributes:'autocomplete="email" maxlength="320" required'})}<label><input type="checkbox" name="restart" required> ${escape(uiText('我已確認狀態，仍要重新申請驗證碼。'))}</label>${error}<button class="native-auth-primary" type="submit">${escape(uiText('重新申請驗證碼'))}</button></form>${authBack(copy)}</div>`;
  }else if(step==='password'){
   body=`<div class="native-auth-body"><p class="native-auth-hint">${escape(uiText('電子郵件已通過驗證，請設定新密碼。'))}</p><form method="post" data-form="reset-submit">${input('newPassword','newPassword',{type:'password',icon:'lock',attributes:'autocomplete="new-password" minlength="8" maxlength="128" required'})}<div style="height:16px"></div>${input('confirmNewPassword','confirmNewPassword',{type:'password',icon:'lock',attributes:'autocomplete="new-password" minlength="8" maxlength="128" required'})}${error}<button class="native-auth-primary" type="submit">${mi('lock_reset')}<span>${escape(uiText('確認重設密碼'))}</span></button></form>${authBack(copy)}</div>`;
  }else{
   const code=step==='code';
   const fields=code?authInfo(copy,'forgotPasswordCodeSent',{icon:'email',secondary:true,detail:email})+`<h2 class="native-auth-label">${t(copy,'forgotPasswordCodeLabel')}</h2><p class="native-auth-hint">${t(copy,'forgotPasswordCodeHint')}</p><div class="native-auth-code-field">${input('forgotPasswordCodePlaceholder','code',{icon:'security',attributes:'autocomplete="one-time-code" inputmode="numeric" pattern="[0-9]{6}" minlength="6" maxlength="6" required'})}<div class="native-auth-code-counter" aria-live="polite">0/6</div></div><button type="button" class="native-auth-resend" data-action="reset-resend"></button>`:`<div class="native-auth-email-description">${authInfo(copy,'forgotPasswordDescription')}<h2 class="native-auth-label">${t(copy,'forgotPasswordEmailLabel')}</h2><p class="native-auth-hint">${t(copy,'forgotPasswordEmailHint')}</p></div>${input('email','email',{type:'email',icon:'email',value:email,attributes:'autocomplete="email" maxlength="320" required'})}`;
   body=`<div class="native-auth-body">${forgotSteps(copy,code)}<form method="post" data-form="${code?'reset-validate':'reset-send'}">${fields}${error}<button class="native-auth-primary" type="submit">${mi(code?'verified':'send')}<span>${t(copy,code?'forgotPasswordVerify':'forgotPasswordSendCode')}</span></button></form>${authBack(copy)}</div>`;
  }
  closeLayout?.();ctx.render(authFlowShell(copy,{title:'forgotPasswordTitle',subtitle:'forgotPasswordSubtitle',icon:'lock_reset_outlined',body,compact:true,kind:'forgot'}),{navigation:false});closeLayout=bindAuthFlow(ctx);lock();
  const field=ctx.find('[name=code]');field?.addEventListener('input',()=>{const counter=ctx.find('.native-auth-code-counter');if(counter)counter.textContent=field.value.length+'/6';},{signal:ctx.signal});
 }
 async function run(action,input={}){
  if(busy||!active())return;busy=true;lock();
  try{const value=await ctx.api.command(action,input);if(!active())return;state=value;busy=false;lock();return value;}
  catch(error){if(active()){try{const latest=await ctx.api.command('passwordReset.state');if(active())state=latest;}catch{}if(!active())return null;busy=false;if(state.unknown)step='email';draw(error.message);countdown(state.resendSeconds||0);}return null;}
 }
 function countdown(seconds){
  clearInterval(timer);until=Date.now()+Math.max(0,seconds)*1000;
  const update=()=>{if(!active()){clearInterval(timer);return;}const left=Math.max(0,Math.ceil((until-Date.now())/1000)),el=ctx.find('[data-action=reset-resend]');if(el){el.disabled=left>0||busy;el.textContent=left?left+'s':copy.t('forgotPasswordResendCode');}if(!left)clearInterval(timer);};update();if(seconds>0)timer=setInterval(update,1000);
 }
 async function send(data,restart=false){const address=(data.email||email).trim();if(step==='email')email=address;const value=await run('passwordReset.send',{email:address,restartConfirmed:restart});if(value){email=address;step='code';draw();countdown(value.resendSeconds||60);}}
 ctx.form('reset-send',data=>send(data));ctx.form('reset-restart',data=>send(data,true));ctx.action('reset-resend',()=>Date.now()<until?undefined:send({email}));
 ctx.form('reset-validate',async(data,form)=>{const proof=data.code;form.elements.code.value='';const value=await run('passwordReset.validate',{email,code:proof});if(value?.verified){step='password';clearInterval(timer);draw();}});
 ctx.form('reset-submit',async(data,form)=>{if(data.newPassword!==data.confirmNewPassword)throw Error(uiText('兩次輸入的密碼不相同。'));form.reset();const value=await run('passwordReset.submit',data);if(!active()||!value)return;if(value.confirmed){ctx.toast(uiText('密碼已更新，請重新登入。'));ctx.go('/login');}else{step='email';draw();}});
 ctx.action('reset-reopen',()=>{if(ctx.active())ctx.reload();});
 addEventListener('agora-buyer-auth',()=>{if(!active())return;clearInterval(timer);email='';state={};retired=true;closeLayout?.();ctx.render(authFlowShell(copy,{title:'forgotPasswordTitle',subtitle:'forgotPasswordSubtitle',icon:'lock_reset_outlined',compact:true,kind:'forgot',body:`<div class="native-auth-body"><p role="status" class="native-auth-hint">${escape(uiText('帳號狀態已改變，請重新開啟重設頁面。'))}</p><button type="button" class="native-auth-primary" data-action="reset-reopen">${escape(uiText('重新開始'))}</button>${authBack(copy)}</div>`}),{navigation:false});closeLayout=bindAuthFlow(ctx);},{signal:ctx.signal});
 ctx.cleanup(()=>{retired=true;clearInterval(timer);email='';});
 const value=await run('passwordReset.open');if(value)draw();
}
