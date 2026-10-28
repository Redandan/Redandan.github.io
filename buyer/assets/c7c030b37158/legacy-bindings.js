import{originalCopy}from'./locale.js';
import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{bindNativeFormValidation}from'./native-form-validation.js';
import{bindingsFrame,recoveryAdvisory,secondarySection,bindingsDialogs,textAction,nativeField,bindCounters,bindingIntrinsicWidth,retireBindings}from'./bindings-ui.js';
import{legacyProviders}from'./legacy-provider-bindings.js';
export async function legacySettings(ctx,view,{callback=false,copy}={}){
 copy??=await originalCopy(ctx.signal);if(!ctx.active())return;
 let state=view,busy=false,retired=false,cooldown=Date.now()+(view.cooldownSeconds||0)*1000,node=null,draftEmail=view.email||'',recipient=view.sentEmail||view.pendingEmail||null;
 const t=key=>copy.t(key),dialogs=bindingsDialogs(ctx,copy),bindings=view.bindings||{};
 const bound=bindings.hasEmail&&bindings.canUseEmailLogin,hasEmail=!!view.email;
 let email=bound?'<div class="binding-email-tile"><div><strong>'+escape(view.email||'')+'</strong><small class="'+(bindings.emailVerified?'verified':'unverified')+'">'+escape(t(bindings.emailVerified?'verified':'unverified'))+'</small></div>'+mi(bindings.emailVerified?'check_circle':'warning')+'</div>'+(!bindings.emailVerified?textAction(t('verifyEmail'),'legacy-open-email',{icon:'verified_user',classes:'binding-outline',attrs:hasEmail?'':'disabled data-action-locked'}):''):hasEmail?'<div class="binding-email-tile"><div><strong>'+escape(view.email)+'</strong><small class="unverified">'+escape(t('emailNotBoundAsLogin'))+'</small></div>'+mi('warning')+'</div>'+textAction(t('bindThisEmail'),'legacy-open-email',{icon:'link',classes:'binding-elevated'}):'<div class="binding-unbound-group"><p class="binding-unbound">'+escape(t('unbound'))+'</p>'+textAction(t('bindEmail'),'legacy-open-email',{icon:'add',classes:'binding-elevated'})+'</div>';
 bindingsFrame(ctx,copy,recoveryAdvisory(copy,bindings.recoveryAdvisory)+secondarySection(t('email'),'<div class="binding-email-content">'+email+'</div>',{icon:'email',className:'bindings-email-card'})+'<div id="legacy-providers"></div>');
 const live=()=>!retired&&ctx.active()&&node?.isConnected&&node.open;
 const secrets=()=>node?.querySelectorAll('[name=verificationCode]').forEach(e=>e.value='');
 function paint(){if(!live())return;const pending=state.pendingEmail||state.verificationPending,code=nativeField(t('verificationCode'),'verificationCode',{prefix:'lock',maxLength:6,extra:'required inputmode="numeric" autocomplete="one-time-code"'});
  let body='';
  if(pending)body='<p class="binding-recipient">'+escape(recipient||view.email||state.pendingEmail)+'</p><p class="binding-dialog-message" role="status">'+escape(t('emailBindingResultUnconfirmed'))+'</p>';
  else if(bound)body='<p class="binding-recipient">'+escape(copy.t('emailAddressValue',{email:view.email}))+'</p><form class="binding-verify-row" data-form="legacy-bind-email" id="legacy-bind-email-form" novalidate>'+code+textAction(t('sendButton'),'legacy-binding-email-code',{classes:'binding-elevated'})+'</form>';
  else body=(!recipient?'<form data-form="legacy-binding-recipient" novalidate>'+nativeField(t('emailAddress'),'email',{prefix:'email',type:'email',value:draftEmail,extra:'required autocomplete="email"'})+'</form>':'<p class="binding-recipient">'+escape(recipient)+'</p>'+(!view.email?textAction(t('edit'),'legacy-binding-email-edit'):'')+'<form data-form="legacy-bind-email" id="legacy-bind-email-form" novalidate>'+code+'</form>')+textAction(t(recipient?'resendCode':'sendButton'),'legacy-binding-email-code');
  node.querySelector('.profile-dialog-content').innerHTML=body+'<p id="legacy-email-code-status" role="status"></p><p id="legacy-email-result" role="status"></p>';
  node.querySelector('.profile-dialog-actions').querySelector('[data-email-confirm]')?.remove();
  if(bound||recipient||pending){const confirm=document.createElement('button');confirm.type=pending?'button':'submit';confirm.dataset.emailConfirm='true';confirm.textContent=t(pending?'checkBindingStatus':'commonConfirm');if(pending)confirm.dataset.action='legacy-binding-email-read';else confirm.setAttribute('form','legacy-bind-email-form');node.querySelector('.profile-dialog-actions').append(confirm);}
  const form=node.querySelector('[data-form=legacy-binding-recipient]');if(form)bindNativeFormValidation(form,f=>({email:!f.elements.email.value.trim()?t('enterEmailAddress'):! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(f.elements.email.value)?t('enterValidEmail'):null}),{signal:ctx.signal});
  const codeForm=node.querySelector('[data-form=legacy-bind-email]');if(codeForm)bindNativeFormValidation(codeForm,f=>({verificationCode:!f.elements.verificationCode.value.trim()?t('enterVerificationCode'):null}),{signal:ctx.signal});
  bindCounters(node,ctx.signal);tick();
 }
 function tick(){if(!live())return;const remaining=Math.max(0,Math.ceil((cooldown-Date.now())/1000)),send=node.querySelector('[data-action=legacy-binding-email-code]');if(send){send.disabled=busy||remaining>0||!!state.pendingEmail||!!state.verificationPending;send.textContent=remaining?t('countdownSeconds',{seconds:remaining}):t(bound?'sendButton':recipient?'resendCode':'sendButton');}dialogs.lock(node,busy);if(send){send.disabled=busy||remaining>0||!!state.pendingEmail||!!state.verificationPending;send.toggleAttribute('data-action-locked',send.disabled);}}
 function display(next){state={...state,...next};cooldown=Date.now()+(next.cooldownSeconds||0)*1000;recipient=next.pendingEmail||next.sentEmail||recipient;paint();}
 async function run(action,data){if(busy||!live())return;busy=true;secrets();tick();try{if(bound)action=({'bindings.legacyEmailCode':'bindings.legacyVerifyEmailCode','bindings.legacyEmailBind':'bindings.legacyVerifyEmail','bindings.legacyEmailRead':'bindings.legacyVerifyEmailRead'})[action]||action;const next=await ctx.api.command(action,{viewId:view.viewId,...data});if(!live())return;display(next);if(next.confirmed){dialogs.lock(node,false);dialogs.close();ctx.toast(t(bound?'emailVerifiedSuccess':'emailBoundSuccessfully'));await ctx.reload();}}catch(error){if(live()){node.querySelector('#legacy-email-result').textContent=error.message;if(error.code==='SUPERSEDED'){secrets();dialogs.lock(node,false);dialogs.close();retired=true;retireBindings(ctx,copy);}}}finally{busy=false;if(live())tick();}}
 ctx.action('legacy-open-email',()=>{if(busy||retired||view.pendingProvider)return;recipient=bound?view.email:state.pendingEmail||state.sentEmail||null;node=dialogs.show(t(bound?'verifyEmail':'bindEmail'),'',{maxWidth:bound?bindingIntrinsicWidth(copy.t('emailAddressValue',{email:view.email})):280});node.classList.add('binding-legacy-email-dialog');node.classList.toggle('binding-verify-email-dialog',!!bound);node.addEventListener('close',secrets,{once:true});paint();});
 ctx.action('legacy-binding-email-edit',()=>{if(!live()||busy||bound||view.email||state.pendingEmail)return;draftEmail=recipient||'';recipient=null;paint();});
 ctx.action('legacy-binding-email-code',()=>{if(!live()||busy||state.pendingEmail||Date.now()<cooldown)return;const form=node.querySelector('[data-form=legacy-binding-recipient]');if(form){form.requestSubmit();return;}return run('bindings.legacyEmailCode',{email:recipient});});
 ctx.form('legacy-binding-recipient',data=>run('bindings.legacyEmailCode',{email:data.email}));
 ctx.form('legacy-bind-email',data=>run('bindings.legacyEmailBind',{email:recipient,verificationCode:data.verificationCode}));
 ctx.action('legacy-binding-email-read',()=>run('bindings.legacyEmailRead',{}));
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')secrets();},{signal:ctx.signal});
 const timer=setInterval(tick,1000);ctx.cleanup(()=>clearInterval(timer));
 await legacyProviders(ctx,view,{callback,copy});
 if(state.pendingEmail&&ctx.active()){node=dialogs.show(t('bindEmail'),'');paint();}
}
export async function legacyBindingReturn(ctx){
 ctx.refreshOnAuth?.();const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 try{const view=await ctx.api.command('bindings.list');if(!ctx.active())return;if(view.managed)throw Error(copy.t('sessionBindingRetired'));await legacySettings(ctx,view,{callback:true,copy});}
 catch(error){if(ctx.active()){bindingsFrame(ctx,copy,'<p role="alert">'+escape(error.message)+'</p>'+textAction(copy.t('back'),'legacy-binding-back'));ctx.action('legacy-binding-back',()=>ctx.go('/bindings'));}}
}
