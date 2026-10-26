import{escape,imageUrl}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';

const defaultAvatar=label=>`<span class="profile-default-avatar" role="img" aria-label="${escape(label)}"></span>`;
export const profileUnavailable=state=>state.requiresReload===true||/UNAVAILABLE|BLOCKED|RECOVERY_REQUIRED|SUPERSEDED|SESSION_CHANGED/i.test(state.availability||'')||state.authenticated===true&&(state.user?.id==null||String(state.user.id)==='');
export function profileAccessHeader(state,copy){
 const unavailable=profileUnavailable(state),title=copy.t(unavailable?'unableToLoadUserInfo':'profileGuestTitle'),description=copy.t(unavailable?'profileUnavailableDescription':'profileGuestDescription');
 return`<section class="profile-access panel">${unavailable?`<span class="profile-unavailable-icon">${mi('person_off_outlined')}</span>`:defaultAvatar(copy.t('avatar'))}<h1>${escape(title)}</h1><p>${escape(description)}</p>${unavailable?`<button type="button" class="primary" data-action="${state.requiresReload?'reload-session':'profile-retry'}">${mi('refresh')}${escape(copy.t('retry'))}</button>`:`<a class="primary" href="#/login">${mi('login')}${escape(copy.t('profileGuestSignIn'))}</a>`}</section>`;
}
export function profileMemberHeader(state,copy){
 const user=state.user,legacy=state.mode==='legacy',read=key=>{try{return JSON.parse(localStorage.getItem('flutter.'+key));}catch{return null;}};
 const username=String(user.username??'')||'Username',rawAvatar=legacy?(user.avatar??read('avatar_url')):(user.avatar??user.avatar_url),url=imageUrl(rawAvatar),avatar=url&&url!=='https://via.placeholder.com/80'?url:'';
 // Original legacy ProfileData reads only decorative metadata after its shared
 // session confirmed this owner. It cannot grant a role or another credential.
 // Cookie ProfileData deliberately retains neutral badges and ignores these.
 const rawLevel=legacy?read('member_level'):null,rawScore=legacy?read('credit_score'):null;
 const level=typeof rawLevel==='string'?rawLevel:copy.t('generalMember'),score=(typeof rawScore==='number'&&Number.isFinite(rawScore)?rawScore:5).toFixed(1);
 return`<section class="profile-account-header"><a class="profile-avatar-edit" href="#/profile/edit" aria-label="${escape(copy.t('avatar'))}"><span class="profile-avatar-circle">${avatar?`<img src="${escape(avatar)}" alt="" decoding="async">`:''}${defaultAvatar(copy.t('avatar'))}</span><span class="profile-avatar-camera">${mi('camera_alt_rounded')}</span></a><h1>${escape(username)}</h1><span class="profile-active-role">${mi('shopping_bag_outlined')}${escape(copy.t('homePageBuyer'))}</span><p class="profile-user-id">${escape(String(user.id))}</p><div class="profile-user-statistics"><span>${mi('star_rounded')}${escape(score)}</span><span>${escape(level)}</span></div></section>`;
}
export function bindProfileHeader(ctx){const header=ctx.find('.profile-account-header');if(!header)return;header.addEventListener('error',event=>{if(event.target.tagName==='IMG')event.target.remove();},{capture:true,signal:ctx.signal});header.querySelectorAll('img').forEach(image=>{if(image.complete&&!image.naturalWidth)image.remove();});}
