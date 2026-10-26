import{uiText}from'./ui-text.js';
import{escape,field,button}from'./ui.js';
// Each explicit gesture advances the original opaque provider flow. No code,
// wallet signature or login token is written to storage or navigation state.
export async function providerSignIn(ctx,provider,{rememberMe=true,callback=false}={}){
 let state,flowId;const target=ctx.find('#provider-sign-in');
 if(!target)throw Error('登入頁面已更新。');
 const original=ctx.find('#login-fields');if(original)original.disabled=true;
 for(const name of['password-mode','email-mode','passkey','google','telegram','wallet']){const element=document.querySelector(`[data-action="${name}"]`);if(element)element.disabled=true;}
 async function show(next){
  if(!ctx.active())return;state=next;flowId=next.flowId||flowId;
  if(next.authenticated){ctx.returnAfterLogin();return;}
  let content='';const stage=next.providerState;
  if(stage==='choose')content=`<p>選擇此瀏覽器已提供的錢包。</p><div class="stack">${(next.wallets||[]).map(kind=>button(kind==='tron'?'連接 TronLink':'連接 Ethereum 錢包','connect-'+kind,'secondary')).join('')}</div>${!next.wallets?.length?'<p>目前瀏覽器沒有可用的錢包擴充功能，請取消後改用其他登入方式。</p>':''}`;
  else if(stage==='sign')content=`<p>錢包帳號：<span class="break">${escape(next.address)}</span></p><p>請確認錢包顯示的是此網站的登入驗證訊息。</p>${button('開啟錢包並簽署登入訊息','provider-sign')}`;
  else if(stage==='verificationCode')content=`<p>開啟登入機器人後，將收到的六位數驗證碼填在下方。</p>${next.openUrl?'<a class="secondary" id="provider-open" target="_blank" rel="noopener noreferrer">開啟 Telegram</a>':''}<form data-form="provider-code">${field('Telegram 驗證碼','verificationCode','text','','required inputmode="numeric" pattern="[0-9]{6}" autocomplete="one-time-code"')}<button class="primary" type="submit">確認並登入</button></form>`;
  else if(stage==='miniAppConfirmation')content=button('確認以 Telegram 帳號登入','provider-sign');
  else if(stage==='twoFactor')content=`<p>${next.invalidTwoFactor?'驗證碼不正確，請輸入目前的驗證碼。':'此帳號已啟用雙重驗證。'}</p><form data-form="provider-factor">${field('雙重驗證碼','twoFactorCode','text','','required inputmode="numeric" pattern="[0-9]{6}" autocomplete="one-time-code"')}<button class="primary" type="submit">完成驗證</button></form>`;
  else content=`<p>原登入結果尚待確認。請查詢原結果或取消後重新開始。</p>${button(uiText('查詢並恢復原登入'),'provider-recover','secondary')}`;
  target.innerHTML=`<section class="panel"><h2>${provider==='google'?'Google 登入':provider==='telegram'?'Telegram 登入':'錢包登入'}</h2>${content}<div id="provider-error" class="form-errors" role="alert">${next.walletError?'錢包操作未完成，請確認錢包狀態。':next.invalidCode?'驗證碼尚未通過。':''}</div>${button(uiText('取消這次登入'),'provider-cancel','secondary')}</section>`;
  if(next.openUrl){const u=new URL(next.openUrl);if(u.protocol!=='https:'||!['telegram.me','t.me'].includes(u.hostname)||u.username||u.password)throw Error('Telegram 登入連結無效。');ctx.find('#provider-open').href=u.href;}
 }
 async function run(action,data={}){try{await show(await ctx.api.command(action,{...data,flowId}));}catch(e){if(ctx.active()){await show({providerState:'recovery'});ctx.find('#provider-error').textContent=e.message;}}}
 for(const kind of['ethereum','tron'])ctx.action('connect-'+kind,()=>run('auth.providerConnect',{wallet:kind}));
 ctx.action('provider-sign',()=>run('auth.providerSubmit'));
 ctx.form('provider-code',async(data,form)=>{form.reset();await run('auth.providerSubmit',data);});
 ctx.form('provider-factor',async(data,form)=>{form.reset();await run(state.managed||provider==='telegram'?'auth.providerSubmit':'auth.providerFactor',data);});
 ctx.action('provider-recover',async()=>{try{const result=await ctx.api.command('session.recoverLogin');if(result.authenticated)ctx.returnAfterLogin();else await show({providerState:'recovery'});}catch(e){if(ctx.active())ctx.find('#provider-error').textContent=e.message;}});
 ctx.action('provider-cancel',async()=>{await ctx.api.command('session.cancelLogin');if(ctx.active()){location.replace(location.pathname+location.search+'#/login');}});
 await run(callback?'auth.oauthReturn':'auth.provider',{provider,rememberMe});
}
export async function oauthReturn(ctx){if(window.__AGORA_BUYER_LEGACY_BINDING_ENTRY__){const{legacyBindingReturn}=await import('./legacy-bindings.js');await legacyBindingReturn(ctx);return;}if(window.__AGORA_WEB_SESSION_BINDING_ENTRY__){const{bindingReturn}=await import('./bindings.js');await bindingReturn(ctx);return;}const{ oauthCallback }=await import('./oauth-callback.js');await oauthCallback(ctx);}
