import{uiText}from'./ui-text.js';
import{originalCopy}from'./locale.js';
import{escape,button}from'./ui.js';
import{profileAccessHeader,profileMemberHeader,profileUnavailable,bindProfileHeader}from'./profile-header.js';
import{profileRoleSwitch,profileBuyerContext,bindProfileRoles,profileSection,profileTile}from'./profile-roles.js';
import{profileSettings,bindProfileSettings}from'./profile-settings.js';

export async function profile(ctx){
 ctx.header(uiText('我的'));const state=await ctx.api.session();if(!ctx.active())return;const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 const member=state.authenticated&&!profileUnavailable(state),extra=member?[
  ['receipt_long','我的訂單','/orders'],['account_balance_wallet_outlined','我的錢包','/wallet'],['receipt_long','我的訂閱','/subscriptions'],['chat_bubble_outline','客服問題','/customer-issues'],['chat_bubble_outline','ChatGPT MCP 設定','/help/mcp'],
 ]:[['refresh','恢復登入','/session-recovery']];
 const extraLinks=extra.map(([icon,label,path])=>profileTile({title:uiText(label),subtitle:'',icon,href:'#'+path})).join('')+(member&&String(state.user.role).toUpperCase()==='ADMIN'?profileTile({title:uiText('管理中心'),subtitle:'',icon:'devices',href:'../#/admin'}):'');
 ctx.render(`<article class="profile-page">${member?profileMemberHeader(state,copy)+profileRoleSwitch(state,copy)+profileBuyerContext(copy):profileAccessHeader(state,copy)}${profileSettings(state,copy)}<div class="profile-extra-settings">${profileSection(copy.t('other'),'more_horiz',extraLinks)}</div>${state.requiresReload?`<section class="panel profile-session-notice"><p>${escape(uiText('登入狀態已在其他頁面變更。重新載入後才能繼續使用私有功能。'))}</p>${button(uiText('重新載入並恢復登入'),'reload-session')}</section>`:''}${state.authenticated?`<section class="profile-logout">${button(copy.t('logout'),'logout','secondary')}</section>`:''}</article>`);
 ctx.action('profile-retry',async()=>{await ctx.api.command('session.recover');if(ctx.active())ctx.reload();});ctx.action('reload-session',()=>location.reload());
 if(member){bindProfileHeader(ctx);bindProfileRoles(ctx,state,copy);}bindProfileSettings(ctx,state,copy);
}
