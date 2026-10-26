import{escape}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
// Original SecondaryFlowScaffold, SecondaryFlowHeader, SecondarySectionCard.
export function secondarySection(title,content,{icon,subtitle,className=''}={}){
 return'<section class="secondary-flow-card '+className+'"><header>'+(icon?'<span class="secondary-section-icon">'+mi(icon)+'</span>':'')+'<div>'+(title?'<h2>'+escape(title)+'</h2>':'')+(subtitle?'<p>'+escape(subtitle)+'</p>':'')+'</div></header><div class="secondary-section-content">'+content+'</div></section>';
}
export function secondaryFlow(ctx,copy,{title,subtitle,icon,content,actions='',kind=''}){
 ctx.header(title,true,{nativeAppBar:true,nativeBack:'compact',shortcuts:false,backLabel:copy.t('notFoundBackButton'),backTooltip:copy.t('notFoundBackButton')});
 ctx.render('<article class="secondary-flow-page" data-information="'+escape(kind)+'"><header class="secondary-flow-header"><div class="secondary-flow-intro"><span class="secondary-flow-icon">'+mi(icon)+'</span><div><h1>'+escape(title)+'</h1><p>'+escape(subtitle)+'</p></div></div>'+(actions?'<div class="secondary-flow-actions">'+actions+'</div>':'')+'</header><div class="secondary-flow-children">'+content+'</div></article>',{navigation:false});
}
export function informationAction(text,href,icon='language_rounded'){
 return'<a class="information-outline" href="'+escape(href)+'">'+mi(icon)+'<span>'+escape(text)+'</span></a>';
}
