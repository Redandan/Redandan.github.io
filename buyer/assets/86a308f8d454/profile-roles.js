import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{profileUnavailable}from'./profile-header.js';

// Match ProfileData's two existing projections. Cookie profile deliberately
// keeps neutral role flags; raw DTO/local preferences are not role authority.
export function profileRoles(state){
 const user=state.user||{},legacy=state.mode==='legacy';
 const sellerVerified=legacy&&user.storeName!=null,deliveryVerified=legacy&&user.displayDeliveryerName!=null;
 return[
  {key:'user',title:'buyer',icon:'shopping_bag_outlined',selected:true,maintenance:false,verified:true,subtitle:'currentRole',target:null},
  {key:'seller',title:'seller',icon:'store_outlined',selected:false,maintenance:sellerVerified&&user.sellerMaintenance===true,verified:sellerVerified,subtitle:sellerVerified&&user.sellerMaintenance===true?'maintenanceStatus':sellerVerified?'startSelling':'needCreateStore',target:'/seller/application'},
  {key:'delivery',title:'delivery',icon:'delivery_dining_outlined',selected:false,maintenance:legacy&&user.deliveryMaintenance===true,verified:deliveryVerified,subtitle:legacy&&user.deliveryMaintenance===true?'maintenanceStatus':deliveryVerified?'startDelivery':'needRegisterDelivery',target:'/delivery/register'},
 ];
}
export function profileRoleSwitch(state,copy){
 return`<section class="profile-role-switch"><h2>${escape(copy.t('switchRole'))}</h2><div class="profile-role-cards">${profileRoles(state).map(role=>`<button type="button" class="profile-role-card${role.selected?' is-selected':''}${role.maintenance?' is-maintenance':''}" data-role="${role.key}" data-action="profile-role" aria-label="${escape(copy.t(role.title))}" aria-describedby="profile-role-${role.key}-subtitle" aria-current="${role.selected?'true':'false'}" ${role.selected||role.maintenance?'disabled data-action-locked':''}><span class="profile-role-symbols"><span class="profile-role-icon">${mi(role.icon)}</span>${role.selected||role.maintenance?`<span class="profile-role-mark">${mi(role.maintenance?'close':'check')}</span>`:''}</span><strong>${escape(copy.t(role.title))}</strong><span id="profile-role-${role.key}-subtitle" class="profile-role-subtitle">${escape(copy.t(role.subtitle))}</span></button>`).join('')}</div></section>`;
}
export function profileSection(title,icon,items){return`<section class="profile-native-section"><h2><span class="profile-section-icon">${mi(icon)}</span><span>${escape(title)}</span></h2><div class="profile-section-items">${items}</div></section>`;}
export function profileTile({title,subtitle,icon,href,action,key}){
 const tag=href?'a':'button',attrs=href?`href="${escape(href)}"`:`type="button" data-action="${escape(action)}"`;
 return`<${tag} class="profile-native-tile" ${attrs}${key?` data-profile-tile="${escape(key)}"`:''}><span class="profile-tile-icon">${mi(icon)}</span><span class="profile-tile-copy"><strong>${escape(title)}</strong><span>${escape(subtitle)}</span></span><span class="profile-tile-chevron">${mi('chevron_right')}</span></${tag}>`;
}
export function profileBuyerContext(copy){
 const items=[['favoriteProducts','favoriteProductsSubtitle','favorite_border','/favorites'],['demandPoolTitle','buyerDemandPoolSubtitle','groups_2_outlined','/demands?view=open&role=buyer'],['shippingAddress','shippingAddressSubtitle','home_outlined','/addresses'],['myPromoCode','myPromoCodeSubtitle','card_giftcard_outlined','/promo-code']];
 return`<div class="profile-buyer-context">${profileSection(copy.t('buyerWorkspace'),'shopping_bag_outlined',items.map(([title,subtitle,icon,path])=>profileTile({title:copy.t(title),subtitle:copy.t(subtitle),icon,href:'#'+path,key:title})).join(''))}</div>`;
}
export function bindProfileRoles(ctx,state,copy){
 let switching=false;const cards=[...ctx.find('.profile-role-cards').children];
 ctx.action('profile-role',async button=>{
  const role=profileRoles(state).find(value=>value.key===button.dataset.role);
  if(!role||role.selected||role.maintenance||switching)return;
  switching=true;cards.forEach(card=>card.disabled=true);
  try{
   let target=role.target;
   if(role.verified){
    // The original verified-role action refreshes profile before choosing its
    // native destination. The existing shared session owns this read and lease.
    const refreshed=await ctx.api.command('session.recover');
    if(!ctx.active())return;
    if(!refreshed.authenticated||profileUnavailable(refreshed)||refreshed.mode!==state.mode||refreshed.revision!==state.revision||String(refreshed.user?.id)!==String(state.user.id))throw Error(copy.t('unableToLoadUserInfo'));
    const current=profileRoles(refreshed).find(value=>value.key===role.key);
    if(current.maintenance){ctx.reload();return;}
    const value=refreshed.user[role.key==='seller'?'storeName':'displayDeliveryerName'];
    if(value!=null&&String(value).length>0)target=role.key==='seller'?'/seller':'/delivery';
   }
   if(ctx.active())location.assign(new URL('../',location.href).pathname+'#'+target);
  }finally{
   switching=false;if(ctx.active())cards.forEach(card=>{card.disabled=card.hasAttribute('data-action-locked');});
  }
 });
}
