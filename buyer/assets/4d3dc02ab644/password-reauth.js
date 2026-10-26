import{bindNativeFormValidation}from'./native-form-validation.js';
import{escape,field}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{createBuyerDialogs}from'./native-dialog.js';

// A blank original-style reauthentication dialog. It returns only the user's
// explicit in-memory selection; the existing owner-bound command verifies it.
export function passwordReauthentication(ctx,copy,{changeId,challenge={},passkeyAvailable=false,submitProof,titleKey='changePassword',descriptionKey='sessionPasswordVerify',extraText='',sendEmail,submitKey='sessionBindingVerify'}){
 return new Promise(resolve=>{
  const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('cancel')}),t=key=>escape(copy.t(key));
  const node=dialogs.show(copy.t(titleKey),'<p class="password-verify-description">'+t(descriptionKey)+'</p>'+(extraText?'<p class="password-verify-extra">'+escape(extraText)+'</p>':'')+'<form method="post" data-form="password-verify" id="password-verify-form"><fieldset><div class="password-verify-method"><label><span class="visually-hidden">'+t('sessionDevicesPasswordMethod')+'</span><select id="password-verify-kind" name="kind"><option value="PASSWORD">'+t('sessionDevicesPasswordMethod')+'</option><option value="EMAIL_CODE">'+t('sessionDevicesEmailMethod')+'</option></select>'+mi('arrow_drop_down')+'</label></div><div id="password-verify-fields"></div><div id="password-verify-factor"></div><div id="password-verify-challenge"></div><p id="password-verify-feedback" role="status"></p></fieldset></form>',{maxWidth:448,inset:40,verticalInset:24});
  node.classList.add('security-password-dialog','security-managed-reauth');node.tabIndex=-1;node.focus({preventScroll:true});
  const abort=new AbortController(),cleanups=[];let settled=false,closed=false,busy=false,epoch=0,token=null,widgetCleanup;
  const active=()=>ctx.active()&&!closed&&node.isConnected&&node.open,find=selector=>node.querySelector(selector);
  const local={...ctx,signal:abort.signal,active,find,cleanup:fn=>closed?fn():cleanups.push(fn)};
  function finish(value){if(settled)return;settled=true;closed=true;abort.abort();epoch++;token=null;node.querySelectorAll('input,textarea').forEach(input=>input.value='');widgetCleanup?.();for(const fn of cleanups.splice(0))fn();dialogs.close();resolve(value);}
  node.addEventListener('close',()=>finish(null),{once:true});ctx.cleanup(()=>finish(null));
  node.addEventListener('cancel',event=>{if(busy)event.preventDefault();});
  node.addEventListener('click',event=>{if(busy&&(event.target.closest('[data-dialog-close]')||event.target===node)){event.preventDefault();event.stopImmediatePropagation();}},{capture:true});
  const submit=document.createElement('button');submit.type='submit';submit.setAttribute('form','password-verify-form');submit.className='security-password-confirm';submit.textContent=copy.t(submitKey);node.querySelector('.profile-dialog-actions').append(submit);
  if(passkeyAvailable){const button=document.createElement('button');button.type='button';button.className='information-outline password-verify-passkey';button.innerHTML=mi('fingerprint')+'<span>'+t('sessionDevicesPasskeyMethod')+'</span>';button.addEventListener('click',()=>verify({kind:'PASSKEY'}),{signal:abort.signal});find('.password-verify-method').before(button);}
  function count(field){const input=field.querySelector('input'),counter=document.createElement('small');counter.className='security-managed-counter';const update=()=>counter.textContent=input.value.length+'/'+input.maxLength;input.addEventListener('input',update,{signal:abort.signal});field.append(counter);update();}
  async function mountChallenge(){const generation=++epoch;token=null;widgetCleanup?.();find('#password-verify-challenge').replaceChildren();if(!challenge.turnstileSiteKey)return;const{mountTurnstile}=await import('./turnstile.js');if(!active()||generation!==epoch)return;const cleanup=await mountTurnstile(local,find('#password-verify-challenge'),challenge.turnstileSiteKey,value=>{if(active()&&generation===epoch)token=value||null;});if(!active()||generation!==epoch)cleanup?.();else widgetCleanup=cleanup;}
  function paintFactor(){
   find('#password-verify-factor').innerHTML=challenge.requiresTwoFactor?field(copy.t('sessionTwoFactorLabel'),'twoFactorCode','text','','required inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}"'):'';
   const label=find('#password-verify-factor .field');if(label){label.classList.add('security-managed-field');const input=label.querySelector('input');input.placeholder=' ';input.addEventListener('input',()=>{input.value=input.value.replace(/[^0-9]/g,'').slice(0,6);},{signal:abort.signal});}
  }
  function paintFields(){if(!active())return;const email=find('#password-verify-kind').value==='EMAIL_CODE';token=null;find('#password-verify-fields').innerHTML=field(copy.t(email?'email':'username'),email?'email':'username',email?'email':'text','','required autocomplete="'+(email?'email':'username')+'" maxlength="'+(email?320:255)+'"')+(email?'<button type="button" class="password-verify-email" data-action="password-verify-email-code">'+t('sendVerificationCode')+'</button>':'')+field(copy.t(email?'verificationCode':'password'),email?'verificationCode':'reauthPassword',email?'text':'password','','required autocomplete="'+(email?'one-time-code':'current-password')+'" maxlength="'+(email?64:4096)+'"');
   for(const label of find('#password-verify-fields').querySelectorAll('.field')){label.classList.add('security-managed-field');label.querySelector('input').placeholder=' ';count(label);}
   paintFactor();
   find('#password-verify-feedback').textContent='';mountChallenge().catch(error=>{if(active())find('#password-verify-feedback').textContent=copy.t(error.code==='PASSKEY_REAUTH_REQUIRED'||error.code==='PASSWORD_REAUTH_REQUIRED'?'sessionDevicesReauthFailed':error.code==='AUTH_TWO_FACTOR_INVALID'?'sessionTwoFactorInvalid':'sessionDevicesReauthFailed');});
  }
  function lock(){if(!active())return;find('fieldset').disabled=busy;node.querySelectorAll('.profile-dialog-actions button,.password-verify-passkey').forEach(button=>button.disabled=busy);}
  async function verify(proof){
   if(!active()||busy)return;busy=true;lock();find('#password-verify-feedback').textContent='';
   for(const name of['reauthPassword','verificationCode','twoFactorCode'])if(find('[name='+name+']')){const input=find('[name='+name+']');input.value='';const counter=input.closest('.field')?.querySelector('.security-managed-counter');if(counter)counter.textContent='0/'+input.maxLength;}
   try{
    // The existing command performs reauthentication and mutation together.
    // Keep this modal owned and locked until its definitive result arrives.
    const value=await submitProof(proof);if(!active())return;
    if(value.requiresTwoFactor){challenge.requiresTwoFactor=true;paintFactor();find('#password-verify-feedback').textContent=copy.t('sessionDevicesTwoFactor');return;}
    if(value.requiresTurnstile){challenge.requiresTurnstile=true;challenge.turnstileSiteKey=value.turnstileSiteKey||'';find('#password-verify-feedback').textContent=copy.t(challenge.turnstileSiteKey?'sessionCompleteSecurityCheck':'sessionSecurityCheckUnavailable');await mountChallenge();return;}
    finish(value);
   }catch(error){if(active()&&error.name!=='AbortError')find('#password-verify-feedback').textContent=copy.t(error.code==='PASSKEY_REAUTH_REQUIRED'||error.code==='PASSWORD_REAUTH_REQUIRED'?'sessionDevicesReauthFailed':error.code==='AUTH_TWO_FACTOR_INVALID'?'sessionTwoFactorInvalid':'sessionDevicesReauthFailed');}
   finally{busy=false;if(active())lock();}
  }
  bindNativeFormValidation(find('form'),form=>{
   const names=find('#password-verify-kind').value==='EMAIL_CODE'?['email','verificationCode']:['username','reauthPassword'],errors={};
   for(const name of names){const input=form.elements.namedItem(name);errors[name]=!input.value.trim()||input.validity.typeMismatch?copy.t('sessionDevicesReauthFailed'):null;}
   if(challenge.requiresTwoFactor){const factor=form.elements.namedItem('twoFactorCode');errors.twoFactorCode=!/^[0-9]{6}$/.test(factor?.value||'')?copy.t('sessionTwoFactorInvalid'):null;}
   return errors;
  },{signal:abort.signal});
  find('#password-verify-kind').addEventListener('change',()=>{challenge.requiresTwoFactor=false;challenge.requiresTurnstile=false;challenge.turnstileSiteKey='';paintFields();},{signal:abort.signal});paintFields();
  ctx.action('password-verify-email-code',async()=>{const email=find('[name=email]');if(!active()||busy||!email?.reportValidity())return;busy=true;lock();try{await (sendEmail?sendEmail(email.value.trim()):ctx.api.command('security.passwordEmailCode',{changeId,email:email.value.trim()}));if(active())find('#password-verify-feedback').textContent=copy.t('verificationCodeSent');}finally{busy=false;if(active())lock();}});
  ctx.form('password-verify',async data=>{if(!active()||busy)return;if((challenge.requiresTurnstile||challenge.turnstileSiteKey)&&!token){find('#password-verify-feedback').textContent=copy.t(challenge.turnstileSiteKey?'sessionCompleteSecurityCheck':'sessionSecurityCheckUnavailable');return;}const email=find('#password-verify-kind').value==='EMAIL_CODE',proof=email?{kind:'EMAIL_CODE',email:String(data.email).trim(),verificationCode:data.verificationCode}:{kind:'PASSWORD',username:String(data.username).trim(),reauthPassword:data.reauthPassword};if(data.twoFactorCode)proof.twoFactorCode=data.twoFactorCode;if(token)proof.turnstileToken=token;await verify(proof);});
 });
}
