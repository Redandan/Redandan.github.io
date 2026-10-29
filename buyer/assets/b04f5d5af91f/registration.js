import{uiText}from'./ui-text.js';
import{escape}from'./ui.js';
import{registrationMarkup,bindRegistrationAppearance,registrationCopy}from'./registration-markup.js';
export async function register(ctx){
 ctx.header(uiText('建立帳號'),false,{shortcuts:false});const capability=await ctx.api.command('auth.registration');if(!ctx.active())return;
 if(capability.authenticated){ctx.returnAfterLogin();return;}
 ctx.render(registrationMarkup(capability,(ctx.query.get('promoCode')||'').slice(0,100)),{navigation:false});bindRegistrationAppearance(ctx);
 let challengeCleanup,busy=false,retired=false,authChanged=false;
 function unknown(){const fields=ctx.find('#registration-fields');if(fields)fields.disabled=true;ctx.find('#signup-result').className='message warning';ctx.find('#signup-result').innerHTML=`<p>${escape(uiText("這次建立帳號的結果仍待確認，請先登入確認，避免重複建立。"))}</p><a class="secondary" href="#/login">${escape(uiText("前往登入確認"))}</a>`;}
 const clearFields=()=>{const form=ctx.find('[data-form=register]');form?.reset();};
 function retire(){if(retired||!ctx.active())return;retired=true;clearFields();challengeCleanup?.();const fields=ctx.find('#registration-fields');if(fields)fields.disabled=true;ctx.find('#signup-result').className='message warning';ctx.find('#signup-result').textContent=registrationCopy().sessionChanged;}
 addEventListener('agora-buyer-auth',()=>{authChanged=true;if(!busy)retire();},{signal:ctx.signal});
 ctx.cleanup(()=>{retired=true;clearFields();challengeCleanup?.();});
 if(capability.pending){unknown();return;}
 ctx.form('register',async(data,form)=>{
  if(busy||retired)return;if(!capability.passwordAllowed)throw Error(uiText("請使用目前模式提供的建立帳號方式。"));
  if(data.password!==data.confirmPassword)throw Error(uiText("兩次輸入的密碼不相同。"));
  if(!data.email?.trim()&&!data.turnstileToken)throw Error(uiText("請填寫電子郵件或完成人機驗證。"));
  ctx.find('#signup-result').textContent='';busy=true;ctx.find('#registration-fields').disabled=true;
  for(const key of['password','confirmPassword','turnstileToken'])form.elements[key].value='';
  try{const result=await ctx.api.command('auth.register',{username:data.username,email:data.email?.trim()||null,password:data.password,
    confirmPassword:data.confirmPassword,promoCode:data.promoCode?.trim()||null,turnstileToken:data.turnstileToken||null});
   if(!ctx.active())return;if(result.pending){unknown();form.dataset.finished='true';return;}
   if(result.authenticated){form.dataset.finished='true';form.reset();ctx.toast(uiText("帳號已建立並登入"));ctx.returnAfterLogin();return;}
   form.dataset.finished='true';form.reset();ctx.find('#signup-result').className='message success';ctx.find('#signup-result').innerHTML=`<p>${escape(uiText("帳號已建立，請前往登入。"))}</p><a class="primary" href="#/login">${escape(uiText("登入"))}</a>`;
  }catch(error){if(ctx.active()&&!retired){ctx.find('#signup-result').className='message error';ctx.find('#signup-result').textContent=error.message;}throw error;}finally{busy=false;if(authChanged&&!form.dataset.finished)retire();else if(ctx.active()&&!retired&&!form.dataset.finished)ctx.find('#registration-fields').disabled=false;}
 });
 ctx.action('passkey-signup',async()=>{
  if(busy||retired)return;const form=ctx.find('[data-form=register]');if(!form.elements.accepted.reportValidity())return;
  for(const key of['username','email'])if(form.elements[key].value.trim()&&!form.elements[key].reportValidity())return;
  ctx.find('#signup-result').textContent='';const data=new FormData(form);busy=true;ctx.find('#registration-fields').disabled=true;
  try{const result=await ctx.api.command('auth.passkeySignup',{username:data.get('username')||null,email:data.get('email')||null,rememberMe:true});if(!ctx.active())return;form.reset();if(result.authenticated){form.dataset.finished='true';ctx.toast(uiText("帳號已建立並登入"));ctx.returnAfterLogin();}else{form.dataset.finished='true';unknown();}}
  catch(error){if(ctx.active()&&!retired){ctx.find('#signup-result').className='message error';ctx.find('#signup-result').textContent=error.message;}throw error;}finally{busy=false;if(authChanged&&!form.dataset.finished)retire();else if(ctx.active()&&!retired&&!form.dataset.finished)ctx.find('#registration-fields').disabled=false;}
 });
 // Registration accepts email when optional verification cannot load. Bind
 // form/provider callbacks first, and keep every late widget callback owned.
 if(capability.passwordAllowed&&capability.turnstileSiteKey){
  const slot=ctx.find('#registration-challenge'),tokenInput=ctx.find('[name=turnstileToken]'),emailInput=ctx.find('[name=email]'),star=ctx.find('label[for=register-email] .required'),status=ctx.find('#registration-security-info');
  const publish=token=>{if(ctx.active()&&!retired&&slot.isConnected){tokenInput.value=token||'';emailInput.required=!token;if(star)star.hidden=!!token;status.textContent=registrationCopy()[token?'securitySuccess':'securityInfo'];}};
  void(async()=>{try{const{mountTurnstile}=await import('./turnstile.js');if(!ctx.active()||retired)return;const close=await mountTurnstile(ctx,slot,capability.turnstileSiteKey,publish);if(!ctx.active()||retired)close();else challengeCleanup=close;}catch{if(ctx.active()&&!retired&&slot.isConnected){publish(null);status.textContent=registrationCopy().securityUnavailable;}}})();
 }

}
