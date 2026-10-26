import{escape,route}from'./ui.js';
import{commonText}from'./locale.js';
import{catalogText as t}from'./catalog-core.js';
import{materialIcon}from'./material-icons.js';

const shellRoutes=new Set(['/','/home','/orders','/wallet','/profile']);
export function buyerNavigation(path,footer,showTabs=true){
 const shell=showTabs&&shellRoutes.has(path),active=path==='/wallet'?'wallet':path==='/orders'?'orders':path==='/profile'?'user':'home';
 const tabs=[['home','products','/','storefront_outlined'],['orders','orders','/orders','receipt_long'],['wallet','wallet','/wallet','account_balance_wallet_outlined'],['user','profile','/profile','person_outline']];
 const brand=new URL('../../icons/apple-touch-icon.png',import.meta.url).href;
 const header=`<div class="buyer-sidebar-header"><a class="buyer-sidebar-brand" href="#/"><img src="${escape(brand)}" alt="" width="28" height="28"><strong>${escape(t('loginProjectName'))}</strong></a><p class="buyer-sidebar-role">${materialIcon('storefront_outlined')}<strong>${escape(t('frontstageBuyerMode'))}</strong></p><p class="buyer-sidebar-description">${escape(t('frontstageBuyerModeDescription'))}</p></div><p class="buyer-main-flow">${escape(t('mainFlow'))}</p>`;
 const links=`<div class="nav-items">${tabs.map(([name,key,url,icon])=>`<a href="${route(url)}" ${name===active?'aria-current="page"':''}><span class="nav-icon">${materialIcon(icon)}</span><span>${escape(commonText(key))}</span></a>`).join('')}</div>`;
 return{shell,html:(footer?`<div class="page-actions">${footer}</div>`:'')+(shell?header+links:''),hidden:!footer&&!shell};
}
