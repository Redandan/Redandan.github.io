import{bindNativeFormValidation}from'./native-form-validation.js';
import{uiText}from'./ui-text.js';
import{originalCopy}from'./locale.js';
import{escape,field,button}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{secondaryFlow,secondarySection as section}from'./secondary-flow.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{bindPasswordSettings}from'./security-password.js';
import{passwordReauthentication}from'./password-reauth.js';
import{bindPasskeySettings}from'./passkey-settings.js';
export async function security(ctx){
 const state=ctx.sessionState||await ctx.api.session(),copy=await originalCopy(ctx.signal);if(!ctx.active())return;const managed=state.mode==='cookie',supported=typeof PublicKeyCredential!=='undefined',dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('commonCancel')});let passwordFlight=false;
 const t=key=>escape(copy.t(key)),tile=(title,subtitle,icon,{action,href,trailing=false}={})=>{const tag=href?'a':action?'button':'div',attrs=href?' href="'+href+'"':action?' type="button" data-action="'+action+'"':'';return'<'+tag+' class="security-native-tile"'+attrs+'>'+mi(icon)+'<span class="security-native-tile-copy"><strong>'+t(title)+'</strong><small>'+t(subtitle)+'</small></span>'+(trailing?mi(typeof trailing==='string'?trailing:'chevron_right'):'')+'</'+tag+'>';};
 const main=tile('passkeyQuickLogin',supported?'passkeyQuickLoginDescription':'passkeyUnsupportedBrowserDescription','fingerprint',supported?{action:'add-passkey',trailing:'add'}:{})+'<div id="passkey-list"></div><hr>'+tile('txt033c175a3c','manageLoginBindingsDescription','link',{href:'#/bindings',trailing:true})+'<hr>'+tile('changePassword','changePasswordDescription','lock',{action:'security-password',trailing:true});
 const extra=section(uiText('雙重驗證'),'<div id="two-factor-status" role="status">'+escape(managed?uiText('目前登入方式尚未開放雙重驗證設定。'):uiText('正在載入…'))+'</div><div id="two-factor-detail"></div>',{icon:'security',className:'security-native-extra'})+section(uiText('登入方式'),'<div id="binding-list" role="status">'+escape(uiText('正在載入…'))+'</div><div class="security-native-extra-actions">'+button(uiText('重新讀取登入方式'),'refresh-bindings','secondary')+button(uiText('管理 Passkey'),'passkeys','secondary')+'</div>',{icon:'link',className:'security-native-extra'});
 secondaryFlow(ctx,copy,{title:copy.t('accountSecurity'),subtitle:copy.t('accountSecurityDescription'),icon:'verified_user_outlined',kind:'security',content:section(copy.t('secureLogin'),main,{icon:'verified_user_outlined',className:'security-native-login'})+extra});
 ctx.action('security-password',async()=>{
  if(passwordFlight)return;const node=dialogs.show(copy.t('changePassword'),'<div id="password-settings" role="status">'+t('loading')+'</div>',{maxWidth:managed?448:280,inset:40,verticalInset:24});node.classList.add('security-password-dialog');node.classList.toggle('security-managed-password',managed);
  const lifetime=new AbortController(),cleanups=[];let closed=false;
  const active=()=>ctx.active()&&!closed&&node.isConnected&&node.open;
  const close=()=>{if(closed)return;closed=true;lifetime.abort();node.querySelectorAll('input,textarea').forEach(input=>input.value='');for(const fn of cleanups.splice(0))fn();};
  node.addEventListener('close',close,{once:true});ctx.cleanup(close);
  node.addEventListener('cancel',event=>{if(passwordFlight)event.preventDefault();});
  node.addEventListener('click',event=>{if(passwordFlight&&(event.target.closest('[data-dialog-close]')||event.target===node)){event.preventDefault();event.stopImmediatePropagation();}},{capture:true});
  const child={...ctx,signal:lifetime.signal,active,find:selector=>node.querySelector(selector),cleanup:fn=>cleanups.push(fn),action:(name,fn)=>ctx.action(name,(...args)=>active()?fn(...args):undefined),form:(name,fn)=>ctx.form(name,(...args)=>active()?fn(...args):undefined)};
  bindPasswordSettings(child,{
   copy,verify:managed?value=>passwordReauthentication(child,copy,{...value,passkeyAvailable:supported}):undefined,
   onBusy:value=>{passwordFlight=value;node.querySelectorAll('.profile-dialog-actions button').forEach(button=>{button.disabled=value||button.type==='submit'&&node.querySelector('form')?.dataset.finished==='true';});},
   onPrepared:(form,submit,view)=>{
    node.querySelectorAll('.security-password-confirm').forEach(button=>button.remove());form.id='security-password-form';form.classList.add('security-password-form');
    if(view.managed)bindNativeFormValidation(form,form=>({newPassword:form.elements.newPassword.value.length<8?copy.t('passwordAtLeast8Chars'):null,confirmNewPassword:form.elements.confirmNewPassword.value!==form.elements.newPassword.value?copy.t('passwordsDoNotMatch'):null}),{signal:lifetime.signal});
    const keys={oldPassword:view.managed?'sessionPasswordCurrent':'txtf67a8d6ddb',newPassword:'newPassword',confirmNewPassword:'txta6c8113d6c'};
    for(const[name,key]of Object.entries(keys)){
     const input=form.elements[name],label=input?.closest('.field');if(!label)continue;
     input.placeholder=' ';label.classList.add('security-password-field');label.querySelector(':scope>span').textContent=copy.t(key);if(view.managed){label.classList.add('security-managed-field');const counter=document.createElement('small');counter.className='security-managed-counter';const count=()=>counter.textContent=input.value.length+'/'+input.maxLength;input.addEventListener('input',count,{signal:lifetime.signal});label.append(counter);count();}else label.insertAdjacentHTML('beforeend','<i class="security-password-icon">'+mi(name==='oldPassword'?'lock':'lock_outline')+'</i>');
    }
    submit.className='security-password-confirm';submit.setAttribute('form',form.id);submit.textContent=copy.t('commonConfirm');node.querySelector('.profile-dialog-actions').append(submit);
   },
   onConfirmed:()=>{if(active()){dialogs.close();ctx.toast(copy.t('txtd4d02b63bd'));}},
  });
 });
 bindPasskeySettings(ctx,{copy,managed,supported});
  async function loadTwoFactor(){
    if(managed)return;
    try{const info=await ctx.api.request('/auth/2fa');if(!ctx.active())return;ctx.find('#two-factor-status').innerHTML=`<p>${info?.enabled?uiText('已啟用'):uiText('尚未啟用')}</p>${button(info?.enabled?uiText('管理雙重驗證'):uiText('設定雙重驗證'),'two-factor','secondary')}`;}
    catch(e){if(ctx.active())ctx.find('#two-factor-status').textContent=e.message;}
  }
  ctx.action('two-factor',async()=>{if(managed)return;const value=await ctx.api.command('security.twoFactorStart');if(!ctx.active())return;ctx.find('#two-factor-detail').innerHTML=`<p class="description">${escape(value.instructions||uiText('請依驗證器的設定步驟完成驗證。'))}</p>${value.secret?`<p><code>${escape(value.secret)}</code></p>`:''}<form method="post" data-form="two-factor">${field(uiText('驗證碼'),'code','text','','inputmode="numeric" autocomplete="one-time-code" required')}<button class="primary" type="submit">${escape(uiText("確認"))}</button></form>`;});
  ctx.form('two-factor',async(data,form)=>{if(managed)return;form.elements.code.value='';await ctx.api.command('security.twoFactorConfirm',data);if(ctx.active()){ctx.toast(uiText('雙重驗證已更新'));await security(ctx);}});
  async function loadBindings(){
    try{const value=await ctx.api.request('/auth/bindings');if(!ctx.active())return;
      if(!value||typeof value!=='object'||Array.isArray(value))throw Error(uiText('登入方式格式尚未確認。'));
      const bindings=Array.isArray(value.oauthBindings)?value.oauthBindings:[],advisory=value.recoveryAdvisory;
      ctx.find('#binding-list').innerHTML=`${advisory?.shouldPrompt?`<p class="notice">${escape(advisory.message||uiText('建議新增可用的帳號恢復方式。'))}</p>`:''}<p>${escape(uiText("密碼登入"))}：${value.canUsePasswordLogin===true?uiText('可使用'):value.hasPassword===true?uiText('已設定，請確認狀態'):uiText('尚未設定')}</p><p>${escape(uiText("電子郵件"))}：${value.hasEmail===true?(value.emailVerified===true?uiText('已驗證'):uiText('尚未驗證')):uiText('尚未綁定')}${value.canUseEmailLogin===true?' · '+escape(uiText('可用於登入')):''}</p>${bindings.map(v=>`<div class="list-row"><div><strong>${escape(v.provider||uiText('登入方式'))}</strong><p>${escape(v.name||'')}</p></div></div>`).join('')}`;
    }catch(e){if(ctx.active())ctx.find('#binding-list').textContent=e.message;}
  }
  ctx.action('refresh-bindings',loadBindings);
  await Promise.all([loadTwoFactor(),loadBindings()]);
}
