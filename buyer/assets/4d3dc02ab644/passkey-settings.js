import{escape,field,list}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{passwordReauthentication}from'./password-reauth.js';

export function bindPasskeySettings(ctx,{copy,managed=false,supported=false}={}){
 const t=(key,args)=>copy.t(key,args),target=()=>ctx.find('#passkey-list');
 let context,busy=false,loading=false,failed=false,generation=0,loginAcknowledged=false,uncertain=false,noticeKey='sessionPasskeyUnknown';
 target().classList.toggle('security-passkey-managed',managed);
 const current=()=>ctx.active()&&!!target();
 function lock(){if(!current())return;for(const button of document.querySelectorAll('.security-native-login [data-action="add-passkey"],#passkey-list button'))button.disabled=busy||loading||((!context||uncertain)&&button.dataset.action!=='refresh-passkeys');}
 function date(value){const d=new Date(value);if(!Number.isFinite(d.getTime()))return t('passkeyNeverUsed');const n=value=>String(value).padStart(2,'0');return t('passkeyLastUsedAt',{time:d.getFullYear()+'-'+n(d.getMonth()+1)+'-'+n(d.getDate())+' '+n(d.getHours())+':'+n(d.getMinutes())+':'+n(d.getSeconds())});}
 function paint(){
  if(!current())return;
  const rows=list(context?.credentials);target().innerHTML=(busy||loading?'<div class="security-passkey-loading" role="status" aria-label="'+escape(t('loading'))+'"><span class="security-passkey-spinner"></span></div>':'')+
   (failed?'<div class="security-passkey-notice" role="status"><p>'+escape(t('sessionPasskeyLoadFailed'))+'</p><button type="button" data-action="refresh-passkeys">'+escape(t('retry'))+'</button></div>':
   !loading?(rows.length?rows.map(value=>'<hr><div class="security-native-tile security-passkey-row">'+mi('key_outlined')+'<span class="security-native-tile-copy"><strong>'+escape(value.credentialName?.trim()||'Passkey '+value.id)+'</strong><small>'+escape(value.lastUsedAt?date(value.lastUsedAt):t('passkeyNeverUsed'))+'</small></span><button type="button" class="security-passkey-remove" data-action="remove-passkey" data-id="'+value.id+'" aria-label="'+escape(t('remove'))+'" title="'+escape(t('remove'))+'">'+mi('delete_outline')+'</button></div>').join(''):'<p class="security-passkey-empty">'+escape(t('passkeyNotBound'))+'</p>'):'')+
   (uncertain?'<div class="security-passkey-notice" role="status"><p>'+escape(t(noticeKey))+'</p><button type="button" data-action="refresh-passkeys">'+escape(t('retry'))+'</button></div>':'');
  lock();
 }
 async function load(){
  if(!current()||busy)return;const own=++generation;loading=true;failed=false;context=null;paint();
  try{const value=await ctx.api.command('security.passkeys');if(!current()||own!==generation)return;context=value;uncertain=false;}
  catch(error){if(!current()||own!==generation)return;failed=true;}
  finally{if(current()&&own===generation){loading=false;paint();}}
 }
 function requiresLogin(value){if(!value?.requiresLogin)return false;if(loginAcknowledged)return true;loginAcknowledged=true;ctx.toast(t(value.confirmed?'sessionPasskeyChanged':'sessionPasskeyUnknown'));location.replace(location.pathname+'#/login?security='+(value.confirmed?'passkey-changed':'passkey-unknown'));location.reload();return true;}
 function intrinsic(text,fontSize,letterSpacing,padding){const canvas=document.createElement('canvas'),c=canvas.getContext('2d');c.font=fontSize+'px AgoraBuyerRoboto';return Math.max(280,c.measureText(text).width+text.length*letterSpacing+padding);}
 async function selectName(){
  await document.fonts.ready;if(!current())return null;
  return new Promise(resolve=>{
   const dialogs=createBuyerDialogs(ctx,{cancelLabel:t('commonCancel')}),node=dialogs.show(t('addPasskey'),field(t('name'),'name','text',t('defaultPasskeyName'),'maxlength="120" autocomplete="off" placeholder=" "'),{maxWidth:intrinsic(t('passkeyNameHint'),16,.5,88),inset:40,verticalInset:24});
   node.classList.add('security-password-dialog','security-managed-reauth','security-passkey-dialog','security-passkey-name');
   const label=node.querySelector('.field'),input=label.querySelector('input');label.classList.add('security-managed-field');input.setAttribute('aria-description',t('passkeyNameHint'));input.placeholder=t('passkeyNameHint');
   if(managed){const count=document.createElement('small');count.className='security-managed-counter';const update=()=>count.textContent=input.value.length+'/120';input.addEventListener('input',update,{signal:ctx.signal});label.append(count);update();}
   const submit=document.createElement('button');submit.type='button';submit.textContent=t(managed?'commonConfirm':'add');if(managed)submit.className='security-password-confirm';node.querySelector('.profile-dialog-actions').append(submit);
   let settled=false;function finish(value){if(settled)return;settled=true;input.value='';dialogs.close();resolve(value);}
   submit.addEventListener('click',()=>finish(input.value.trim()||t('defaultPasskeyName')),{signal:ctx.signal});input.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();submit.click();}},{signal:ctx.signal});node.addEventListener('close',()=>finish(null),{once:true});
   node.addEventListener('click',event=>{if(event.target.closest('[data-dialog-close]')){event.preventDefault();event.stopImmediatePropagation();finish(null);}},{capture:true,signal:ctx.signal});
   node.addEventListener('cancel',event=>{event.preventDefault();finish(null);},{signal:ctx.signal});ctx.cleanup(()=>finish(null));
   if(managed){node.tabIndex=-1;node.focus({preventScroll:true});}else input.focus({preventScroll:true});
  });
 }
 async function confirmRemove(){
  await document.fonts.ready;if(!current())return false;
  return new Promise(resolve=>{
   const dialogs=createBuyerDialogs(ctx,{cancelLabel:t('commonCancel')}),node=dialogs.show(t('removePasskey'),'<p>'+escape(t('removePasskeyDescription'))+'</p>',{maxWidth:intrinsic(t('removePasskeyDescription'),14,.25,48),inset:40,verticalInset:24});node.classList.add('security-password-dialog','security-passkey-dialog','security-passkey-confirm');
   const submit=document.createElement('button');submit.type='button';submit.textContent=t('remove');node.querySelector('.profile-dialog-actions').append(submit);let settled=false;
   const finish=value=>{if(settled)return;settled=true;dialogs.close();resolve(value);};submit.addEventListener('click',()=>finish(true),{signal:ctx.signal});node.addEventListener('close',()=>finish(false),{once:true});
   node.addEventListener('click',event=>{if(event.target.closest('[data-dialog-close]')){event.preventDefault();event.stopImmediatePropagation();finish(false);}},{capture:true,signal:ctx.signal});
   node.addEventListener('cancel',event=>{event.preventDefault();finish(false);},{signal:ctx.signal});ctx.cleanup(()=>finish(false));node.tabIndex=-1;node.focus({preventScroll:true});
  });
 }
 async function change(operation,credentialId){
  if(!current()||busy||loading||failed||uncertain||!context||(operation==='add'&&!supported))return;
  const selected=context;busy=true;lock();let submitted=false;
  try{
   const name=operation==='add'?await selectName():null;if(operation==='add'&&name===null)return;
   if(!selected.managed&&operation==='remove'&&!await confirmRemove())return;
   if(!current()||context!==selected)return;
   const change=await ctx.api.command('security.passkeyPrepare',{contextId:selected.contextId,operation,credentialId,name});if(!current()||context!==selected)return;
   const submitProof=async proof=>{
    submitted=true;
    const data={...proof};if(data.kind==='PASSWORD'){data.password=data.reauthPassword;delete data.reauthPassword;}
    const answer=await ctx.api.command('security.passkeyChange',{...data,changeId:change.changeId});requiresLogin(answer);return answer;
   };
   const value=change.managed?await passwordReauthentication(ctx,copy,{changeId:change.changeId,passkeyAvailable:supported,titleKey:operation==='add'?'addPasskey':'removePasskey',descriptionKey:'sessionPasskeyVerify',extraText:operation==='remove'?(selected.credentials.find(v=>v.id===credentialId)?.credentialName?.trim()||'Passkey '+credentialId):'',sendEmail:email=>ctx.api.command('security.passkeyEmailCode',{changeId:change.changeId,email}),submitProof}):await submitProof({kind:'PASSKEY'});
   if(!value||requiresLogin(value)||!current()||context!==selected)return;
   if(value.confirmed){ctx.toast(t(operation==='add'?'passkeyAdded':'passkeyRemoved'));busy=false;await load();}
   else{uncertain=true;noticeKey=value.rejected?'sessionPasskeyRejected':'sessionPasskeyUnknown';ctx.toast(t(noticeKey));}
  }catch(error){if(current()&&context===selected){ctx.toast(t(error.code==='PASSKEY_REAUTH_REQUIRED'?'sessionDevicesReauthFailed':'sessionPasskeyRejected'));if(submitted){uncertain=true;noticeKey='sessionPasskeyUnknown';}}}
  finally{busy=false;if(current())paint();}
 }
 ctx.action('passkeys',load);ctx.action('refresh-passkeys',load);ctx.action('add-passkey',()=>change('add'));ctx.action('remove-passkey',button=>change('remove',Number(button.dataset.id)));
 ctx.cleanup(()=>{++generation;context=null;});
 if(supported||managed)void load();
 return{load};
}
