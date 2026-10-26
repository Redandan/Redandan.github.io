import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
const t=(copy,key)=>escape(copy.t(key));
export function authFlowShell(copy,{title,subtitle,icon,body,compact=false,kind='reset'}){
 return`<section class="native-auth-flow" data-kind="${kind}" data-responsive="${compact}"><div class="native-auth-content"><header class="native-auth-heading"><span class="native-auth-icon">${mi(icon)}</span><h1>${t(copy,title)}</h1><p>${t(copy,subtitle)}</p></header>${body}</div></section>`;
}
export function bindAuthFlow(ctx){
 const host=ctx.find('.native-auth-flow'),main=document.querySelector('#buyer-main');
 const update=()=>{if(ctx.active())host.dataset.compact=String(host.dataset.responsive==='true'&&main.clientHeight+56<700);};
 const observer=new ResizeObserver(update);observer.observe(main);update();const close=()=>observer.disconnect();ctx.cleanup(close);return close;
}
export function forgotSteps(copy,code=false){return`<div class="native-auth-steps" aria-label="${t(copy,code?'forgotPasswordStepCode':'forgotPasswordStepEmail')}"><div class="native-auth-step" data-active="true" data-current="${!code}"><span>${mi('email')}</span><small>${t(copy,'forgotPasswordStepEmail')}</small></div><i data-active="${code}"></i><div class="native-auth-step" data-active="${code}" data-current="${code}"><span>${code?mi('security'):'2'}</span><small>${t(copy,'forgotPasswordStepCode')}</small></div></div>`;}
export function authInfo(copy,key,{icon='info_outline',secondary=false,detail=''}={}){return`<aside class="native-auth-info" data-secondary="${secondary}">${mi(icon)}<div><p>${t(copy,key)}</p>${detail||secondary?`<small>${escape(detail)}</small>`:''}</div></aside>`;}
export function authBack(copy){return`<a class="native-auth-back" href="#/login">${mi('arrow_back')}<span>${t(copy,'forgotPasswordBackToLogin')}</span></a>`;}
