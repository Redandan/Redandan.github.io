import{escape,button}from'./ui.js';
import{originalCopy}from'./locale.js';
import{uiText}from'./ui-text.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{historyPager}from'./history-list.js';
import{depositMarkup,depositForm,depositPending,depositHistoryRow,depositSuggestionsMarkup}from'./deposit-markup.js';
import{depositCanCancel,depositCountdown,depositSuggestions,depositBalance}from'./deposit-view-core.js';
let qrScript;
async function qr(ctx,value,current,copy){
 if(!value)return;
 if(!qrScript)qrScript=new Promise((resolve,reject)=>{const node=document.createElement('script');node.src=new URL('./qrcode.min.js',import.meta.url).href;node.onload=resolve;node.onerror=()=>{qrScript=null;node.remove();reject(Error());};document.head.append(node);});
 try{await qrScript;if(!ctx.active()||!current())return;const node=ctx.find('#deposit-qr');if(!node)return;node.replaceChildren();new window.QRCode(node,{text:value,width:160,height:160,colorDark:'#000000',colorLight:'#ffffff',correctLevel:window.QRCode.CorrectLevel.M});}
 catch{if(ctx.active()&&current())ctx.toast(copy.t('operationFailed'));}
}
export async function deposit(ctx){
 ctx.header('',true,{nativeAppBar:true,shortcuts:false});const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('depositPageTitle'),true,{nativeAppBar:true,shortcuts:false,backLabel:copy.t('walletBackSemantics'),backTooltip:copy.t('walletBackTooltip')});ctx.render(depositMarkup(copy),{navigation:false});
 const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('commonCancel')});
 let pending=null,readRevision=0,pendingKnown=false,reading=false,operation=false,unknown=false,amount='',timer;
 const live=ticket=>ctx.active()&&ticket===readRevision;
 function lock(){const notice=ctx.find('#deposit-uncertain');if(notice)notice.textContent=unknown?uiText('充值結果仍待確認，請先更新狀態與交易紀錄，避免重複建立。'):'';for(const node of document.querySelectorAll('[data-action=refresh-deposit],[data-action=cancel-deposit],.deposit-create,.deposit-quick-amounts button')){const locked=reading||operation||unknown&&node.classList.contains('deposit-create');node.disabled=locked;node.toggleAttribute('data-action-locked',locked);}}
 function countdown(){if(!ctx.active())return;const node=ctx.find('#deposit-countdown');if(!node)return;const value=depositCountdown(pending?.expireTime);node.textContent=value?copy.t(value.expired?'depositExpiredStatus':'depositRemainingTime',{time:value.time}):'';node.classList.toggle('is-expired',!!value?.expired);if(value?.expired){clearInterval(timer);timer=null;}}
 function paint(){
  if(!ctx.active())return;clearInterval(timer);timer=null;const input=ctx.find('[name=amount]');if(input)amount=input.value;
  ctx.find('#deposit-pending').innerHTML=depositPending(pending,copy);ctx.find('#deposit-form-host').innerHTML=pendingKnown&&!pending?depositForm(copy):'';
  if(!pending){const next=ctx.find('[name=amount]');if(next)next.value=amount;}else{amount='';const ticket=readRevision;void qr(ctx,pending.receiveAddress,()=>ticket===readRevision&&!!pending,copy);countdown();if(depositCountdown(pending.expireTime)?.expired===false)timer=setInterval(countdown,1000);}
  lock();
 }
 const pager=historyPager(ctx,{target:'#deposit-history',more:'[data-action=more-deposits]',request:page=>ctx.api.command('wallet.depositHistory',{page}),row:value=>depositHistoryRow(value,copy),empty:'<p>'+escape(copy.t('transactionNoRecords'))+'</p>',unavailable:'<p>'+escape(uiText('目前登入模式可查詢進行中的充值單。已入帳款項請至交易紀錄查看。'))+' <a href="#/transactions">'+escape(copy.t('transactionHistoryTitle'))+'</a></p>'});
 let historyFailed=false,historyReset=false;
 async function history(reset=false){if(!ctx.active())return;const message=ctx.find('#deposit-history-error');message.textContent='';try{await pager(reset);if(ctx.active()){historyFailed=false;ctx.find('[data-action=more-deposits]').textContent=copy.t('txtaf90a08fec');}}catch(error){if(ctx.active()&&error.name!=='AbortError'){historyFailed=true;historyReset=reset;message.textContent=copy.t('walletLoadTransactionFailed');const retry=ctx.find('[data-action=more-deposits]');retry.hidden=false;retry.textContent=copy.t('retry');}}}
 async function refresh({ledger=true}={}){
  if(!ctx.active()||reading||operation)return;const ticket=++readRevision;reading=true;lock();ctx.find('#deposit-read-error').replaceChildren();
  const values=await Promise.allSettled([ctx.api.command('wallet.balance'),ctx.api.command('wallet.depositStatus')]);if(!live(ticket))return;
  const [balance,status]=values;ctx.find('#deposit-balance').textContent=balance.status==='fulfilled'?depositBalance(balance.value):'—';
  if(status.status==='fulfilled'){pending=status.value;pendingKnown=true;if(pending)unknown=false;paint();}
  if(values.some(value=>value.status==='rejected'))ctx.find('#deposit-read-error').textContent=copy.t('walletLoadFailed');
  reading=false;lock();if(ledger)await history(true);
 }
 function readError(){if(ctx.active()){ctx.find('#deposit-read-error').textContent=copy.t('operationFailed');lock();}}
 ctx.cleanup(()=>{readRevision++;clearInterval(timer);pending=null;amount='';});
 ctx.action('deposit-amount',node=>{if(reading||operation||pending)return;const input=ctx.find('[name=amount]');if(input){input.value=Number(node.dataset.amount).toFixed(2);input.dispatchEvent(new Event('input',{bubbles:true}));}});
 ctx.form('deposit',async data=>{
  if(!ctx.active()||reading||operation||unknown||!pendingKnown||pending)return;
  const value=data.amount.trim();if(!/^[0-9]+([.][0-9]{1,2})?$/.test(value)||!(Number(value)>0)){ctx.toast(copy.t('depositEnterValidAmount'));return;}
  operation=true;lock();const accepted=await dialogs.confirm({title:copy.t('depositCreateButton'),content:'<p>'+escape(copy.t('depositAmount'))+': $'+escape(value)+' USDT · TRON (TRC20)</p>',confirmLabel:copy.t('commonConfirm')});
  if(!ctx.active())return;if(!accepted){operation=false;lock();return;}
  try{
   const result=await ctx.api.command('wallet.depositCreate',{amount:value,protocol:'TRC20'});if(!ctx.active())return;
   if(result?.success===false){const values=depositSuggestions(result.suggestedAmounts);if(values.length){const node=dialogs.show(copy.t('depositFailed'),depositSuggestionsMarkup(values,copy)),confirm=document.createElement('button');confirm.type='button';confirm.className='primary';confirm.textContent=copy.t('commonConfirm');confirm.disabled=true;confirm.dataset.depositSuggestionConfirm='true';node.querySelector('.profile-dialog-actions').append(confirm);node.addEventListener('change',()=>{confirm.disabled=!node.querySelector('input:checked');});confirm.addEventListener('click',()=>{if(!ctx.active())return;const selected=node.querySelector('input:checked');if(!selected||!values.includes(Number(selected.value)))return;const input=ctx.find('[name=amount]');if(input)input.value=Number(selected.value).toFixed(2);dialogs.close();});}else ctx.toast(copy.t('depositFailed'));return;}
   unknown=true;operation=false;await refresh();if(ctx.active()&&pending){unknown=false;ctx.toast(copy.t('depositCreateSuccess'));}lock();
  }catch(error){if(ctx.active()&&error.name!=='AbortError'){unknown=true;readError();}}
  finally{if(ctx.active()){operation=false;lock();}}
 });
 ctx.action('copy-deposit',async()=>{const value=pending?.receiveAddress;if(!ctx.active()||typeof value!=='string'||!value)return;await navigator.clipboard.writeText(value);if(ctx.active())ctx.toast(copy.t('depositCopiedToClipboard'));});
 ctx.action('cancel-deposit',async()=>{
  if(!ctx.active()||reading||operation||!depositCanCancel(pending))return;const captured=pending;operation=true;lock();
  const accepted=await dialogs.confirm({title:copy.t('depositConfirmCancel'),content:'<p>'+escape(copy.t('depositConfirmCancelMessage'))+'</p>',confirmLabel:copy.t('depositCancelButton')});if(!ctx.active())return;
  try{if(accepted&&pending===captured){await ctx.api.command('wallet.depositCancel',{id:captured.id??captured.rechargeId});if(!ctx.active())return;operation=false;await refresh();ctx.toast(copy.t('depositCancelSuccess'));}}
  catch(error){if(ctx.active()&&error.name!=='AbortError')readError();}
  finally{if(ctx.active()){operation=false;lock();}}
 });
 ctx.action('refresh-deposit',()=>refresh());ctx.action('more-deposits',()=>history(historyFailed?historyReset:false));await refresh();
}
