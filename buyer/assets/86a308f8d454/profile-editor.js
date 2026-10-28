import{escape,imageUrl}from'./ui.js';
import{originalCopy,commonText}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';

// Only the current editor and its avatar child share this in-process draft.
// It is neither persisted nor allowed to survive an auth event or owner change.
let draft=null;
addEventListener('agora-buyer-auth',()=>{draft=null;});
const ownerKey=state=>JSON.stringify([state.mode,state.user.id,state.revision]);
const isEditor=()=>{try{return new URL(location.hash.slice(1),location.origin).pathname==='/profile/edit';}catch{return false;}};
const safeAvatar=value=>{const url=imageUrl(value);return url==='https://via.placeholder.com/80'?'':url;};
function picture(value,label,fallback='person'){
 const url=safeAvatar(value);
 return`<span class="profile-editor-picture" role="img" aria-label="${escape(label)}">${fallback==='vector'?'<span class="profile-default-avatar"></span>':mi('person')}${url?`<img src="${escape(url)}" alt="" decoding="async">`:''}</span>`;
}
function field(copy,key,name,type,value,icon,attrs=''){
 return`<label class="profile-editor-field">${mi(icon)}<input name="${name}" type="${type}" value="${escape(value)}" placeholder=" " ${attrs}><span>${escape(copy.t(key))}</span></label>`;
}
const section=(copy,key,icon,content)=>`<section class="profile-editor-section"><h2><span>${mi(icon)}</span>${escape(copy.t(key))}</h2><div class="profile-editor-card">${content}</div></section>`;
function bindImages(ctx,host){
 host.addEventListener('error',event=>{if(event.target.tagName==='IMG')event.target.remove();},{capture:true,signal:ctx.signal});
 host.querySelectorAll('img').forEach(img=>{if(img.complete&&!img.naturalWidth)img.remove();});
}
function assertOwner(state,key){if(!state.authenticated||!state.user||ownerKey(state)!==key)throw new DOMException('Original profile owner changed','AbortError');}

export async function editProfile(ctx){
 ctx.header(commonText('profile'),true,{nativeAppBar:true,nativeBack:'compact',shortcuts:false});
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 const original=ctx.sessionState||await ctx.api.session();if(!ctx.active())return;
 if(!original.authenticated||!original.user)return ctx.requireLogin();
 const key=ownerKey(original),avatarView=ctx.query.get('avatar')==='1';
 ctx.header(copy.t(avatarView?'avatarEditTitle':'editProfile'),true,{nativeAppBar:true,nativeBack:'compact',shortcuts:false,backLabel:copy.t('back'),backTooltip:copy.t('back')});
 if(avatarView)return avatarEditor(ctx,copy,original,key);
 const fresh=await ctx.api.command('session.recover');if(!ctx.active())return;if(!fresh.authenticated||!fresh.user||ownerKey(fresh)!==key){draft=null;ctx.go('/profile');return;}
 if(draft?.owner!==key)draft=null;
 const values=draft?.values||{name:fresh.user.username||'',phone:fresh.user.phone||''},avatar=draft?.avatar??fresh.user.avatar??'';
 const content=`<div class="profile-editor-avatar"><button type="button" data-action="profile-avatar" aria-label="${escape(copy.t('chooseAvatar'))}">${picture(avatar,copy.t('chooseAvatar'))}<span class="profile-editor-camera">${mi('camera_alt')}</span></button></div>${field(copy,'txt52fa288040','name','text',values.name,'person_rounded','required maxlength="64" autocomplete="nickname"')}${field(copy,'txt1e2318df46','phone','tel',values.phone,'phone_rounded','autocomplete="tel"')}<button class="primary profile-editor-save" type="submit">${escape(copy.t('saveData'))}</button>`;
 ctx.render(`<article class="profile-editor"><form data-form="profile" method="post"><fieldset>${section(copy,'basicInfo','person_outline_rounded',content)}</fieldset></form>${section(copy,'email','email_outlined',`<div id="profile-editor-email" role="status">${escape(copy.t('loading'))}</div>`)}</article>`,{navigation:false});
 const host=ctx.find('.profile-editor'),form=host.querySelector('form'),email=host.querySelector('#profile-editor-email'),fieldset=form.querySelector('fieldset');bindImages(ctx,host);
 let busy=false;
 const remember=()=>{draft={owner:key,avatar,values:{name:form.elements.name.value,phone:form.elements.phone.value}};};
 ctx.cleanup(()=>{if(isEditor())remember();else draft=null;});
 ctx.action('profile-avatar',()=>{if(busy)return;remember();ctx.go('/profile/edit?avatar=1');});
 ctx.form('profile',async data=>{
  if(busy)return;if(!String(data.name||''))throw Error(copy.t('enterDisplayName'));
  busy=true;fieldset.disabled=true;
  try{
   const state=await ctx.api.session();if(!ctx.active())return;assertOwner(state,key);
   await ctx.api.request('/auth/update-profile',{method:'POST',body:{name:String(data.name),phone:String(data.phone||''),avatar:avatar||'',avatarUpdate:false}});
   if(!ctx.active())return;draft=null;await ctx.api.command('session.recover');if(!ctx.active())return;
   ctx.toast(copy.t('txte761593f66'));ctx.go('/profile');
  }finally{busy=false;if(ctx.active())fieldset.disabled=false;}
 });
 try{
  const bindings=await ctx.api.request('/auth/bindings');if(!ctx.active())return;
  const hasEmail=typeof fresh.user.email==='string'&&fresh.user.email!=='';
  email.innerHTML=field(copy,'email','email','email',fresh.user.email||'','email_rounded','readonly autocomplete="off"')+(hasEmail?`<p class="profile-editor-email-state${bindings?.canUseEmailLogin===true?' available':''}">${mi(bindings?.canUseEmailLogin===true?'check_circle_rounded':'info_outline_rounded')}<span>${escape(copy.t(bindings?.canUseEmailLogin===true?'emailVerificationCodeSignInAvailable':'emailVerificationCodeSignInUnavailable'))}</span></p>`:'');
 }catch(error){if(!ctx.active()||error.name==='AbortError')return;email.innerHTML=field(copy,'email','email','email',fresh.user.email||'','email_rounded','readonly autocomplete="off"');}
}

async function avatarEditor(ctx,copy,state,key){
 if(draft?.owner!==key)draft=null;
 const initialAvatar=draft?.avatar??state.user.avatar??'';
 const card=(title,body,kind='')=>`<section class="avatar-editor-card ${kind}"><h2>${escape(copy.t(title))}</h2>${body}</section>`;
 ctx.render(`<article class="avatar-editor">${card('avatarCurrent',picture(initialAvatar,copy.t('avatar'),'vector'))}${card('avatarSelectNew',`<button type="button" class="primary" data-action="avatar-pick">${mi('add_photo_alternate')}${escape(copy.t('avatarSelectNew'))}</button><input id="avatar-file" type="file" accept="image/jpeg,image/png,image/gif,image/webp,image/bmp" hidden>`)}<div id="avatar-selected"></div><div id="avatar-editor-error" role="alert"></div><section class="avatar-editor-instructions"><h2>${mi('info_outline')}${escape(copy.t('avatarUsageInstructions'))}</h2><p>${escape(copy.t('avatarUsageDescription'))}</p></section></article>`,{navigation:false});
 const host=ctx.find('.avatar-editor'),input=host.querySelector('#avatar-file'),selected=host.querySelector('#avatar-selected'),error=host.querySelector('#avatar-editor-error');bindImages(ctx,host);
 let file=null,url=null,busy=false,selection=0;
 const clear=()=>{if(url)URL.revokeObjectURL(url);url=null;};
 ctx.cleanup(()=>{selection++;clear();file=null;input.value='';if(!isEditor())draft=null;});
 const fail=value=>{error.innerHTML=`<section class="avatar-editor-card avatar-editor-failed"><h2>${mi('error_outline')}${escape(copy.t('avatarUpdateFailedTitle'))}</h2><p>${escape(value)}</p></section>`;};
 ctx.action('avatar-pick',()=>{if(!busy)input.click();});
 input.addEventListener('change',()=>{
  if(busy||!ctx.active())return;selection++;clear();file=input.files?.[0]||null;error.innerHTML='';
  if(!file){selected.innerHTML='';return;}
  if(file.size>10*1024*1024){file=null;selected.innerHTML='';fail(copy.t('avatarSelectImageFailed',{error:'FILE_TOO_LARGE'}));return;}
  url=URL.createObjectURL(file);
  selected.innerHTML=card('avatarSelectedImage',`<img class="avatar-selected-preview" src="${escape(url)}" alt="${escape(copy.t('avatarSelectedImage'))}"><button type="button" class="primary" data-action="avatar-upload">${mi('cloud_upload')}${escape(copy.t('avatarUpload'))}</button>`);
 },{signal:ctx.signal});
 ctx.action('avatar-upload',async()=>{
  if(!file||busy)return;busy=true;const chosen=file,revision=selection;error.innerHTML='';
  const controls=[...host.querySelectorAll('button')];controls.forEach(node=>node.disabled=true);input.disabled=true;
  try{
   const owner=await ctx.api.session();if(!ctx.active())return;assertOwner(owner,key);
   const bytes=new Uint8Array(await chosen.arrayBuffer());if(!ctx.active()||revision!==selection)return;
   let binary='';for(let i=0;i<bytes.length;i+=16384)binary+=String.fromCharCode(...bytes.subarray(i,i+16384));
   const uploaded=await ctx.api.command('files.upload',{name:chosen.name,base64:btoa(binary),businessType:'AVATAR',isPublic:true});if(!ctx.active()||revision!==selection)return;
   const checked=new URL(uploaded.url);if(checked.protocol!=='https:'||!checked.hostname||checked.username||checked.password||checked.hash)throw Error('AVATAR_UPLOAD_RESULT_UNCONFIRMED');
   await ctx.api.request('/auth/update-profile',{method:'POST',body:{avatar:uploaded.url,avatarUpdate:true}});if(!ctx.active())return;
   if(draft?.owner===key)draft.avatar=uploaded.url;
   await ctx.api.command('session.recover');if(!ctx.active())return;
   ctx.toast(copy.t('avatarUploadSuccess'));ctx.go('/profile/edit');
  }catch(cause){if(ctx.active()&&cause.name!=='AbortError')fail(copy.t('avatarUploadFailed',{error:String(cause.message||cause)}));}
  finally{busy=false;if(ctx.active()){controls.forEach(node=>node.disabled=false);input.disabled=false;}}
 });
}
