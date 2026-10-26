import{uiText}from'./ui-text.js';
import{escape,field,button}from'./ui.js';
export async function bindPasswordSettings(ctx,options={}){
 let context,challengeCleanup,busy=false,verificationChallenge={},loginAcknowledged=false;
 const target=()=>ctx.find('#password-settings');
 function passwordRequiresLogin(value){if(!value?.requiresLogin)return false;if(loginAcknowledged)return true;loginAcknowledged=true;ctx.toast(value.confirmed?uiText("密碼已變更，請重新登入。"):uiText("密碼變更結果仍待確認，請重新登入後確認。"));location.replace(location.pathname+'#/login?security='+(value.confirmed?'password-changed':'password-unknown'));location.reload();return true;}
 async function prepare(){
  const value=await ctx.api.command('security.password');if(!ctx.active())return;context=value;
  target().innerHTML='<form method="post" data-form="password"><fieldset id="password-fields">'+(value.managed&&options.verify?'<p class="password-managed-description">'+escape(options.copy.t('sessionPasswordVerify'))+'</p>':'')+
   field(uiText("目前密碼（已有密碼時填寫）"),'oldPassword','password','','autocomplete="current-password" maxlength="128"')+
   field(uiText("新密碼"),'newPassword','password','','autocomplete="new-password" minlength="8" maxlength="128" required')+
   field(uiText("確認新密碼"),'confirmNewPassword','password','','autocomplete="new-password" minlength="8" maxlength="128" required')+
   (value.managed&&!options.verify?`<p>${escape(uiText("變更完成或結果待確認後會登出，請以有效的登入方式重新登入。"))}</p><label class="field"><span>${escape(uiText("再次驗證方式"))}</span><select name="kind" id="password-proof-kind"><option value="PASSWORD">${escape(uiText("帳號密碼"))}</option><option value="EMAIL_CODE">${escape(uiText("電子郵件驗證碼"))}</option><option value="PASSKEY">${escape(uiText("已有的 Passkey"))}</option></select></label><div id="password-proof-fields"></div>`:'')+
   `<input type="hidden" name="turnstileToken"><div id="password-challenge"></div><button class="primary" type="submit">${escape(uiText("變更密碼"))}</button></fieldset></form><div id="password-result" role="status"></div>`;
  function proofFields(){const kind=ctx.find('#password-proof-kind')?.value;ctx.find('[name=oldPassword]').required=kind==='PASSWORD';ctx.find('#password-proof-fields').innerHTML=kind==='PASSKEY'?`<p>${escape(uiText("瀏覽器會要求驗證已有的 Passkey。"))}</p>`:kind==='EMAIL_CODE'?field(uiText("帳號電子郵件"),'email','email','','autocomplete="email" required')+button(uiText('傳送驗證碼'),'password-email-code','secondary')+field(uiText('電子郵件驗證碼'),'verificationCode','text','','autocomplete="one-time-code" required')+field(uiText('雙重驗證碼（已開啟時填寫）'),'twoFactorCode'):field(uiText('帳號'),'username','text','','autocomplete="username" required')+field(uiText('雙重驗證碼（已開啟時填寫）'),'twoFactorCode');}
  if(value.managed&&!options.verify){proofFields();ctx.find('#password-proof-kind').addEventListener('change',proofFields,{signal:ctx.signal});}
  const form=target().querySelector('form');options.onPrepared?.(form,form.querySelector('[type=submit]'),value);
 }
 ctx.action('password-prepare',async()=>{if(!busy)await prepare();});
 ctx.action('password-email-code',async()=>{const email=ctx.find('#password-proof-fields [name=email]');if(!email?.reportValidity())return;await ctx.api.command('security.passwordEmailCode',{changeId:context.changeId,email:email.value});if(ctx.active())ctx.toast(uiText("驗證碼已送出，請查看信箱。"));});
 ctx.form('password',async(data,form)=>{
  if(busy)return;if(data.newPassword!==data.confirmNewPassword)throw Error(uiText("兩次輸入的密碼不相同。"));
  if(!ctx.active())return;const captured=context;busy=true;options.onBusy?.(true);ctx.find('#password-fields').disabled=true;
  try{
   let value;
   if(captured.managed&&options.verify){
    value=await options.verify({changeId:captured.changeId,challenge:{...verificationChallenge},submitProof:async proof=>{
     const answer=await ctx.api.command('security.passwordChange',{...data,...proof,changeId:captured.changeId});
     // Its own logout can retire both dialogs before the acknowledgement.
     passwordRequiresLogin(answer);return answer;
    }});if(!value)return;
   }else{
  for(const name of['oldPassword','newPassword','confirmNewPassword','verificationCode','twoFactorCode','turnstileToken'])if(form.elements[name]){const input=form.elements[name];input.value='';const counter=input.closest('.field')?.querySelector('.security-managed-counter');if(counter)counter.textContent='0/'+input.maxLength;}
    value=await ctx.api.command('security.passwordChange',{...data,changeId:captured.changeId});
   }
  for(const name of['oldPassword','newPassword','confirmNewPassword','verificationCode','twoFactorCode','turnstileToken'])if(form.elements[name]){const input=form.elements[name];input.value='';const counter=input.closest('.field')?.querySelector('.security-managed-counter');if(counter)counter.textContent='0/'+input.maxLength;}
   if(passwordRequiresLogin(value))return;
   if(!ctx.active()||context!==captured)return;
   if(value.requiresTwoFactor){verificationChallenge.requiresTwoFactor=true;ctx.find('#password-result').textContent=uiText("請重新輸入密碼及目前的雙重驗證碼。");return;}
   if(value.requiresTurnstile){
    ctx.find('#password-result').textContent=uiText("請完成人機驗證，再重新輸入密碼。");challengeCleanup?.();
    if(captured.managed&&options.verify){verificationChallenge.turnstileSiteKey=value.turnstileSiteKey||'';return;}
    if(!value.turnstileSiteKey){ctx.find('#password-challenge').textContent=uiText("人機驗證暫時無法使用，請稍後再試。");return;}
    const{mountTurnstile}=await import('./turnstile.js');challengeCleanup=await mountTurnstile(ctx,ctx.find('#password-challenge'),value.turnstileSiteKey,token=>{if(ctx.active())ctx.find('[name=turnstileToken]').value=token||'';});return;
   }
   if(value.confirmed&&options.onConfirmed){form.dataset.finished='true';options.onConfirmed(value);return;}
   ctx.find('#password-result').innerHTML='<p>'+(value.confirmed?uiText("密碼已更新。"):value.rejected?uiText("這次變更未被接受，請重新確認帳號與密碼。"):uiText("密碼變更結果仍待確認，請先重新登入確認，避免重複送出。"))+'</p>'+(value.pending?`<a class="secondary" href="#/login">${escape(uiText("前往登入確認"))}</a>`:button(uiText("重新開啟變更密碼"),'password-prepare','secondary'));form.dataset.finished='true';
  }finally{busy=false;options.onBusy?.(false);if(ctx.active()&&form.isConnected&&!form.dataset.finished)ctx.find('#password-fields').disabled=false;}
 });
 ctx.cleanup(()=>{challengeCleanup?.();const element=target();element?.querySelectorAll('input,textarea').forEach(input=>input.value='');context=null;});
 try{await prepare();}catch(e){if(ctx.active())target().innerHTML='<p role="alert">'+escape(e.message)+'</p>'+button(uiText("重新讀取變更密碼"),'password-prepare','secondary');}
}
