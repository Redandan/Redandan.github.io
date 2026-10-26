import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{createBuyerDialogs}from'./native-dialog.js';
export{secondarySection}from'./secondary-flow.js';
export function bindingsFrame(ctx,copy,content,{state=false}={}){
 ctx.header(copy.t('loginBindingsTitle'),true,{nativeAppBar:true,nativeBack:'compact',shortcuts:false,backLabel:copy.t('back'),backTooltip:copy.t('back')});
 ctx.render('<article class="bindings-native-page'+(state?' bindings-state-page':'')+'">'+content+'</article>',{navigation:false});
}
export function recoveryAdvisory(copy,advisory){
 if(!advisory?.shouldPrompt)return'';
 const labels={EMAIL_CODE:'Email',TELEGRAM_BOT:'Telegram',GOOGLE:'Google',WALLET_CONNECT:copy.t('wallet'),PASSKEY_PRIMARY_DOMAIN:copy.t('accountRecoveryOfficialDomainPasskey')},recommended=[...new Set((advisory.recommendedMethods||[]).map(k=>labels[String(k).trim().toUpperCase()]).filter(Boolean))];
 return'<aside class="binding-advisory">'+mi('shield_outlined')+'<div><strong>'+escape(copy.t('accountRecoveryAdvisoryTitle'))+'</strong><p>'+escape(advisory.message?.trim()||copy.t('accountRecoveryDefaultMessage'))+'</p>'+(recommended.length?'<small>'+escape(copy.t('accountRecoveryRecommendedMethods',{methods:recommended.join(copy.t('listSeparator'))}))+'</small>':'')+'</div></aside>';
}
export function bindingsDialogs(ctx,copy){
 const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('commonCancel')});let blocked=false;
 function show(title,body,options={}){const node=dialogs.show(title,body,{maxWidth:448,inset:40,verticalInset:24,...options});node.classList.add('security-password-dialog','bindings-native-dialog');node.tabIndex=-1;node.focus({preventScroll:true});
  node.addEventListener('cancel',e=>{if(blocked)e.preventDefault();});
  node.addEventListener('click',e=>{if(blocked&&(e.target===node||e.target.closest('[data-dialog-close]'))){e.preventDefault();e.stopImmediatePropagation();}},{capture:true});return node;
 }
 return{show,close:()=>{if(!blocked)dialogs.close();},lock:(node,value)=>{blocked=value;node.querySelectorAll('button,input,select').forEach(e=>{e.disabled=value||e.dataset.disabled==='true';});},get busy(){return blocked;}};
}
export function textAction(label,action,{icon,classes='',attrs=''}={}){return'<button type="button" class="binding-text '+classes+'" data-action="'+action+'" '+attrs+'>'+(icon?mi(icon):'')+'<span>'+escape(label)+'</span></button>';}
export function nativeField(label,name,{prefix,maxLength,type='text',value='',extra=''}={}){
 return'<label class="field security-password-field'+(maxLength?' security-managed-field':'')+'"><span>'+escape(label)+'</span><input name="'+name+'" type="'+type+'" placeholder=" " value="'+escape(value)+'"'+(maxLength?' maxlength="'+maxLength+'"':'')+' '+extra+'>'+(prefix?'<i class="security-password-icon">'+mi(prefix)+'</i>':'')+(maxLength?'<small class="security-managed-counter">'+value.length+'/'+maxLength+'</small>':'')+'</label>';
}
export function bindCounters(node,signal){for(const input of node.querySelectorAll('input[maxlength]'))input.addEventListener('input',()=>{const counter=input.closest('.field')?.querySelector('.security-managed-counter');if(counter)counter.textContent=input.value.length+'/'+input.maxLength;},{signal});}

export function bindingIntrinsicWidth(text){const span=document.createElement('span');Object.assign(span.style,{position:'fixed',visibility:'hidden',fontFamily:getComputedStyle(document.querySelector('#buyer-main')).fontFamily,fontSize:'14px',fontWeight:'400',lineHeight:'21px',letterSpacing:'.25px',whiteSpace:'pre'});span.textContent=text;document.body.append(span);const width=span.getBoundingClientRect().width+48;span.remove();return Math.max(280,width);}

export function retireBindings(ctx,copy){if(ctx.active()){const page=ctx.find('.bindings-native-page');if(page){page.classList.add('bindings-state-page','bindings-retired-page');page.innerHTML='<p class="binding-retired" id="binding-change-result" role="alert">'+escape(copy.t('sessionBindingRetired'))+'</p>';}}}

export function bindingSkeleton(){const bar=(style='')=>'<b class="binding-skeleton-bar" style="'+style+'"></b>',row=()=>'<div class="binding-skeleton-row">'+bar('width:40px;height:40px;border-radius:20px')+'<div>'+bar('height:15px;margin-right:72px')+bar('height:12px;margin-right:128px;margin-top:4px')+'</div>'+bar('width:32px;height:32px;border-radius:16px')+'</div>';return'<div class="binding-skeleton" role="status">'+[['email',56,2],['login',96,3],['account_balance_wallet_outlined',72,2]].map(([icon,width,count])=>secondarySkeleton(icon,'<div class="binding-skeleton-content">'+bar('width:'+width+'px;height:18px;margin-bottom:8px')+Array.from({length:count},row).join('')+'</div>')).join('')+'</div>';}
function secondarySkeleton(icon,body){return'<section class="secondary-flow-card"><header><span class="secondary-section-icon">'+mi(icon)+'</span><div></div></header><div class="secondary-section-content">'+body+'</div></section>';}
