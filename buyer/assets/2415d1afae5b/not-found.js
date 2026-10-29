import{escape,icon,route}from'./ui.js';
import{uiText}from'./ui-text.js';

// Original NotFoundPage actions remain ordinary buyer navigation. This renderer
// never loads an auth principal or dispatches a business command.
export async function notFound(ctx){
 ctx.header(uiText('頁面不存在'),false,{shortcuts:false});
 ctx.render(`<section class="not-found-page"><div class="not-found-state"><div class="state-symbol" aria-hidden="true">${icon('search')}</div><h2>${escape(uiText('找不到您要訪問的頁面'))}</h2><p class="muted">${escape(uiText('連結可能已過期或路徑有誤。你可以返回上一頁、回首頁，或前往客服中心確認。'))}</p><div class="not-found-actions"><a class="primary" href="${route('/home')}">${icon('home')}${escape(uiText('返回首頁'))}</a><button type="button" class="secondary" data-action="back">${icon('back')}${escape(uiText('返回上一頁'))}</button><a class="text-action" href="${route('/help')}">${icon('chat')}${escape(uiText('客服中心'))}</a></div></div></section>`,{navigation:false});
}
