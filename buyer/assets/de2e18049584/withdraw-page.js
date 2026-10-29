import{escape}from'./ui.js';
import{originalCopy}from'./locale.js';
import{uiText}from'./ui-text.js';
import{walletSafety}from'./wallet-home.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{historyPager}from'./history-list.js';
import{withdrawMarkup,withdrawalPendingMarkup,withdrawFormMarkup,withdrawQuoteMarkup,withdrawAuthenticationMarkup,withdrawAuthenticationFields,withdrawHistoryRow}from'./withdraw-markup.js';
import{withdrawDraft,withdrawValidAmount,withdrawStatusKey}from'./withdraw-view-core.js';
export async function withdraw(ctx){
 ctx.header('',true,{nativeAppBar:true,shortcuts:false});const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('withdrawPageTitle'),true,{nativeAppBar:true,shortcuts:false,backLabel:copy.t('walletBackSemantics'),backTooltip:copy.t('walletBackTooltip')});ctx.render(withdrawMarkup(copy),{navigation:false});const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('commonCancel')});
 let terms=null,balance=null,pending=null,pendingKnown=false,reading=false,operation=false,revision=0,readRevision=0,quote=null,unknown=false,draft=withdrawDraft(),historyFailed=false,historyReset=false;
 const form=()=>ctx.find('#withdraw-form');
 function invalidate(){revision++;quote=null;dialogs.close();}
 function lock(){if(!ctx.active())return;for(const node of document.querySelectorAll('.buyer-withdraw-page button,.buyer-withdraw-page input,.buyer-withdraw-page select')){const locked=reading||operation||node.classList.contains('withdraw-create')&&(!terms||!terms.protocols?.includes(draft.protocol)||!pendingKnown||pending||unknown)||node.classList.contains('withdraw-network-card')&&!terms?.protocols?.includes(node.dataset.protocol);node.disabled=!!locked;node.toggleAttribute('data-action-locked',!!locked);}}
 function capture(){const node=form();if(node)draft=withdrawDraft({amount:node.elements.namedItem('amount').value,address:node.elements.namedItem('address').value,protocol:node.elements.namedItem('protocol').value});}
 function paint(){if(!ctx.active())return;capture();ctx.find('#withdraw-main-state').innerHTML=pending?withdrawalPendingMarkup(pending,copy):pendingKnown?withdrawFormMarkup(draft,terms,balance,copy)+(ctx.sessionState?.authenticated===true?walletSafety(ctx.sessionState.user,copy):''):'';form()?.addEventListener('input',()=>{capture();invalidate();lock();},{signal:ctx.signal});lock();}
 const pager=historyPager(ctx,{target:'#withdraw-history',more:'[data-action=more-withdrawals]',request:page=>ctx.api.command('wallet.withdrawHistory',{page}),row:value=>withdrawHistoryRow(value,copy),empty:'<p>'+escape(copy.t('transactionNoRecords'))+'</p>',unavailable:'<p>'+escape(uiText('目前登入模式可查詢處理中的提款。帳戶扣款請至交易紀錄查看。'))+' <a href="#/transactions">'+escape(copy.t('transactionHistoryTitle'))+'</a></p>'});
 async function history(reset=false){if(!ctx.active())return;const message=ctx.find('#withdraw-history-error');message.textContent='';try{await pager(reset);if(ctx.active()){historyFailed=false;ctx.find('[data-action=more-withdrawals]').textContent=copy.t('txtaf90a08fec');}}catch(error){if(ctx.active()&&error.name!=='AbortError'){historyFailed=true;historyReset=reset;message.textContent=copy.t('walletLoadTransactionFailed');const retry=ctx.find('[data-action=more-withdrawals]');retry.hidden=false;retry.textContent=copy.t('retry');}}}
 async function refresh(){
  if(!ctx.active()||reading||operation)return;capture();invalidate();const ticket=++readRevision;reading=true;lock();ctx.find('#withdraw-read-error').textContent='';
  const result=await Promise.allSettled([ctx.api.command('wallet.withdrawTerms'),ctx.api.command('wallet.withdrawOngoing'),ctx.api.command('wallet.balance')]);if(!ctx.active()||ticket!==readRevision)return;
  terms=result[0].status==='fulfilled'?result[0].value:null;balance=result[2].status==='fulfilled'?result[2].value:null;
  if(result[1].status==='fulfilled'){pending=result[1].value;pendingKnown=true;unknown=false;}
  if(result.some(value=>value.status==='rejected'))ctx.find('#withdraw-read-error').textContent=copy.t('walletLoadFailed');reading=false;paint();await history(true);
 }
 ctx.cleanup(()=>{readRevision++;revision++;quote=null;terms=null;balance=null;pending=null;draft=withdrawDraft();});
 ctx.action('withdraw-amount',node=>{if(reading||operation||pending||!form())return;const input=form().elements.namedItem('amount');input.value=node.dataset.amount;input.dispatchEvent(new Event('input',{bubbles:true}));});
 ctx.action('withdraw-network',node=>{if(reading||operation||!terms?.protocols?.includes(node.dataset.protocol)||!form())return;form().elements.namedItem('protocol').value=node.dataset.protocol;for(const item of ctx.find('.withdraw-network-rail').querySelectorAll('button'))item.setAttribute('aria-pressed',String(item===node));form().dispatchEvent(new Event('input',{bubbles:true}));});
 ctx.action('withdraw-cancel-unavailable',()=>ctx.toast(copy.t('withdrawCancellationUnavailable')));
 ctx.form('withdraw-preview',async values=>{
  if(!ctx.active()||reading||operation||!terms||!terms.protocols?.includes(draft.protocol)||!pendingKnown||pending||unknown)return;capture();if(!withdrawValidAmount(values.amount.trim())){ctx.toast(copy.t('withdrawValidAmountRequired'));return;}
  const ticket=revision;operation=true;lock();quote=null;
  try{
   const result=await ctx.api.command('wallet.withdrawPreview',{amount:values.amount.trim(),protocol:values.protocol,address:values.address.trim()});if(!ctx.active()||ticket!==revision)return;
   const accepted=await dialogs.confirm({title:copy.t('withdrawConfirmCreate'),content:withdrawQuoteMarkup(result,copy),confirmLabel:copy.t('withdrawConfirm')});if(!ctx.active()||ticket!==revision||!accepted)return;
   quote={value:result,revision:ticket};const node=dialogs.show(copy.t('withdrawConfirmCreate'),withdrawAuthenticationMarkup(result,copy));node.classList.add('withdraw-auth-dialog');node.querySelector('#withdraw-auth-kind')?.addEventListener('change',event=>{if(!ctx.active()||!node.open)return;node.querySelector('#withdraw-auth-fields').innerHTML=withdrawAuthenticationFields(event.target.value,copy);},{signal:ctx.signal});node.addEventListener('close',()=>{if(quote?.value===result)quote=null;},{once:true});
  }catch(error){if(ctx.active()&&error.name!=='AbortError')ctx.find('#withdraw-result').textContent=copy.t(error.code==='TERMS_CHANGED'?'withdrawTermsChanged':error.code==='WITHDRAWAL_UNCONFIRMED'?'withdrawResultUnconfirmed':'operationFailed');}
  finally{if(ctx.active()){operation=false;lock();}}
 });
 ctx.action('withdraw-email-code',async()=>{const input=ctx.find('#withdraw-auth-fields [name=email]');if(!ctx.active()||!quote||!input?.reportValidity())return;await ctx.api.command('wallet.emailCode',{email:input.value});if(ctx.active())ctx.toast(copy.t('verificationCodeSent'));});
 ctx.form('withdraw-submit',async(values,authentication)=>{
  const captured=quote;if(!ctx.active()||reading||operation||!captured||captured.revision!==revision||!authentication.isConnected||!authentication.closest('dialog')?.open)return;
  operation=true;lock();for(const input of authentication.elements)input.disabled=true;
  try{
   const receipt=await ctx.api.command('wallet.withdrawSubmit',{...values,quoteId:captured.value.quoteId,kind:ctx.find('#withdraw-auth-kind')?.value||'PASSWORD'});if(!ctx.active())return;
   authentication.reset();dialogs.close();quote=null;ctx.find('#withdraw-result').innerHTML='<section class="withdraw-card"><h2>'+escape(copy.t('withdrawCreateSuccess'))+'</h2><p>'+escape(receipt.id)+'</p><p>'+escape(copy.t(withdrawStatusKey(receipt.status)))+'</p></section>';operation=false;await refresh();
  }catch(error){if(ctx.active()&&error.name!=='AbortError'){authentication.reset();dialogs.close();quote=null;unknown=['REQUEST_UNCONFIRMED','WITHDRAWAL_UNCONFIRMED'].includes(error.code);ctx.find('#withdraw-result').textContent=copy.t(error.code==='TERMS_CHANGED'?'withdrawTermsChanged':unknown?'withdrawResultUnconfirmed':'operationFailed');}}
  finally{if(ctx.active()){operation=false;lock();}}
 });
 ctx.action('refresh-withdrawal',()=>refresh());ctx.action('more-withdrawals',()=>history(historyFailed?historyReset:false));await refresh();
}
