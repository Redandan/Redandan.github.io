import{escape,list}from'./ui.js';
import{materialIcon as mi}from'./material-icons.js';
import{nativeOrderText as t}from'./order-ui.js';
import{nativeDialogTextWidth}from'./native-dialog.js';
import{fitOrderDialogActions}from'./order-dialog-layout.js';

const recommendations={ACCEPT:['aiRecommendationAccept','primary','check_circle_outline'],ASK_CLARIFICATION:['aiRecommendationAskClarification','secondary','help_outline'],REJECT:['aiRecommendationReject','error','cancel_outlined'],MANUAL_REVIEW:['aiRecommendationManualReview','tertiary','visibility_outlined']};
export const orderAiStyle=value=>recommendations[value]||['aiRecommendationNoConclusion','muted','help_outline'];
export function orderAiResultMarkup(value){
 const [label,tone]=orderAiStyle(value.recommendation),confidence=typeof value.confidence==='number'&&Number.isFinite(value.confidence)?value.confidence:0;
 return `${value.fallbackUsed===true?`<div class="order-ai-fallback">${mi('warning_amber')}<span>${escape(t('aiValidationFallback',{provider:value.aiProvider??'-'}))}</span></div>`:''}<span class="order-ai-recommendation" data-tone="${tone}">${escape(t(label))}</span><p class="order-ai-confidence">${escape(t('aiValidationConfidence',{percent:(confidence*100).toFixed(0)}))}</p>${value.reasoning?`<div class="order-ai-reasoning"><h3>${escape(t('aiValidationReasoning'))}</h3><p>${escape(value.reasoning)}</p></div>`:''}${list(value.concerns).length?`<div class="order-ai-concerns"><h3>${escape(t('aiValidationConcerns'))}</h3>${list(value.concerns).map(text=>`<p>• ${escape(text)}</p>`).join('')}</div>`:''}<p class="order-ai-advisory">${escape(t('aiValidationAdvisory'))}</p>`;
}
export function showOrderAiLoading(dialogs){
 const text=t('aiAnalyzing'),node=dialogs.show('',`<div class="order-ai-loading"><span aria-hidden="true"></span><p>${escape(text)}</p></div>`,{dismissible:false,inset:40,verticalInset:24,maxWidth:()=>Math.max(280,84+nativeDialogTextWidth(text,14))});
 node.classList.add('order-ai-dialog','order-ai-loading-dialog');node.removeAttribute('aria-labelledby');node.setAttribute('aria-label',text);node.setAttribute('aria-busy','true');node.querySelector('h2').remove();node.querySelector('.profile-dialog-actions').remove();return node;
}
export function showOrderAiResult(dialogs,value){
 const [label,tone,icon]=orderAiStyle(value.recommendation),texts=[[t('aiValidationResultTitle'),20,80,-.3,600],[t('aiValidationAdvisory'),11,48,.25,400],[t(label),14,70,.25,600],[t('aiValidationConfidence',{percent:'100'}),14,48,.25,400],[value.reasoning||'',13,48,.25,400],...(value.fallbackUsed===true?[[t('aiValidationFallback',{provider:value.aiProvider??'-'}),12,86,.25,400]]:[]),...list(value.concerns).map(text=>['• '+text,12,56,.25,400])];
 const node=dialogs.show(t('aiValidationResultTitle'),orderAiResultMarkup(value),{inset:40,verticalInset:24,maxWidth:()=>Math.max(280,...texts.map(([text,size,padding,spacing,weight])=>padding+nativeDialogTextWidth(text,size,spacing,weight)))});node.classList.add('order-ai-dialog');node.querySelector('h2').insertAdjacentHTML('afterbegin',`<span data-tone="${tone}">${mi(icon)}</span>`);node.querySelector('[data-dialog-close]').textContent=t('understand');fitOrderDialogActions(node);return node;
}
