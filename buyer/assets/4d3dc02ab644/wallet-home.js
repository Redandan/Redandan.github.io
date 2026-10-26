import{escape,list,button,positiveId}from'./ui.js';
import{originalCopy,commonText}from'./locale.js';
import{materialIcon as mi}from'./material-icons.js';
import{walletFixed,walletTotal,transactionPresentation,walletDate}from'./wallet-view-core.js';
export{walletFixed,walletTotal,transactionPresentation,walletDate}from'./wallet-view-core.js';
// Same circles, rounded rectangles and ellipse as the original TetherIcon painter.
export const tetherIcon='<svg class="wallet-tether" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="50" fill="#26a17b"/><rect x="22" y="28" width="56" height="12" rx="3" fill="white"/><rect x="43" y="34" width="14" height="36" rx="4" fill="white"/><ellipse cx="50" cy="51" rx="28" ry="9" fill="none" stroke="white" stroke-width="5.5" stroke-linecap="round"/></svg>';
export function walletTransactionMarkup(value,copy){
 const view=transactionPresentation(value),id=positiveId(value.id),tag=id?'a':'article';
 return'<'+tag+(id?' href="#/transactions/'+id+'" aria-label="'+escape(copy.t('transactionViewDetailSemantics',{id:value.id}))+'"':'')+' class="wallet-native-transaction '+view.sign+'"><span class="wallet-tx-icon">'+mi(view.icon)+'</span><span class="wallet-tx-copy"><strong>'+escape(copy.t(view.label))+'</strong><time>'+escape(walletDate(value.createdAt))+'</time></span><span class="wallet-tx-amount">'+escape(view.amount)+'</span></'+tag+'>';
}
export function walletSafety(user,copy){
 const summary=user.walletSafetySummary;if(!summary||summary.showReminder!==true||summary.severity==='HIDDEN')return'';
 const hint=summary.recommendedActions?.[0]?.routeHint,route=typeof hint==='string'&&hint.toLowerCase().includes('withdraw')?'/wallet/withdraw':'/security';
 return'<section class="wallet-safety">'+mi('verified_user_outlined')+'<div><h2>'+escape(copy.t('walletSafetyCompactTitle'))+'</h2><p>'+escape(copy.t('walletSafetyCompactDescription'))+'</p></div><a href="#'+route+'">'+mi('shield_outlined')+escape(copy.t('securitySettings'))+'</a></section>';
}
export function walletHomeMarkup(state,copy,{withdrawalPanel}){
 const user=state.user,metric=(key,value)=>'<div><span>'+escape(copy.t(key))+'</span><strong>'+escape(walletFixed(value))+' USDT</strong></div>',action=(key,path,icon,kind)=>'<a href="#'+path+'" class="'+kind+'">'+mi(icon)+'<span>'+escape(copy.t(key))+'</span></a>';
 return'<div class="buyer-wallet-page"><section class="wallet-hero"><div class="wallet-hero-body"><div class="wallet-hero-main"><div class="wallet-hero-heading"><span class="wallet-tether-frame">'+tetherIcon+'</span><div><h2>'+escape(copy.t('walletUsdtWallet'))+'</h2><p>'+escape(copy.t('walletUsdtOnlyDescription'))+'</p></div><button type="button" data-action="refresh-wallet" class="wallet-refresh" aria-label="'+escape(copy.t('walletRefreshBalance'))+'" title="'+escape(copy.t('walletRefreshBalance'))+'">'+mi('refresh_rounded')+'</button></div><p class="wallet-total">'+escape(walletFixed(walletTotal(user)))+'</p><p class="wallet-currency">USDT</p></div><div class="wallet-metrics">'+metric('walletAvailableBalance',user.balance)+'<hr>'+metric('walletFrozenAmount',user.freezeBalance)+(user.stackingBalance!=null?'<hr>'+metric('walletStakingAmount',user.stackingBalance):'')+'</div></div></section>'+walletSafety(user,copy)+'<nav class="wallet-actions">'+action('walletReceiveAction','/wallet/deposit','call_received_rounded','wallet-receive')+action('walletWithdrawAction','/wallet/withdraw','arrow_upward_rounded','wallet-withdraw')+action('walletTransactionHistory','/transactions','receipt_long_rounded','wallet-history')+'</nav><div class="wallet-extra-actions"><a href="#/wallet/stake">'+escape(copy.t('walletStake'))+mi('chevron_right_rounded')+'</a></div>'+(state.pendingRecharge?'<a class="wallet-pending-recharge" href="#/wallet/deposit">'+escape(copy.t('walletDeposit'))+' · '+escape(copy.t('pending'))+mi('chevron_right_rounded')+'</a>':'')+(state.ongoingWithdrawal?'<div class="wallet-existing-withdrawal">'+withdrawalPanel(state.ongoingWithdrawal,copy)+'</div>':'')+'<header class="wallet-recent-header"><h2>'+mi('receipt_long_outlined')+escape(copy.t('walletRecentTransactions'))+'</h2><a href="#/transactions">'+escape(copy.t('walletViewAll'))+mi('chevron_right_rounded')+'</a></header><div id="wallet-recent-transactions" aria-live="polite"><p class="wallet-transaction-state">'+escape(copy.t('loading'))+'</p></div></div>';
}
export async function walletHome(ctx,panels){
 ctx.header(commonText('wallet'),true);const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('walletTitle'),true,{backLabel:copy.t('walletBackSemantics'),backTooltip:copy.t('walletBackTooltip')});
 let revision=0,historyRevision=0,refreshFlight=null,historyFlight=null,queuedRefresh=false;
 ctx.cleanup(()=>{revision++;historyRevision++;});
 const active=ticket=>ctx.active()&&ticket===revision;
 function setRefreshing(value){const control=ctx.find('[data-action=refresh-wallet]');if(control){control.disabled=value;control.setAttribute('aria-busy',String(value));}}
 async function history(ticket){
  if(historyFlight)return historyFlight;const serial=++historyRevision;
  const pending=Promise.resolve().then(async()=>{
   try{const result=await ctx.api.command('wallet.transactions',{page:1,size:10});if(!active(ticket)||serial!==historyRevision)return;if(result==null||!Array.isArray(result.content))throw Error();const items=list(result).slice(0,10);ctx.find('#wallet-recent-transactions').innerHTML=items.length?items.map(value=>walletTransactionMarkup(value,copy)).join(''):'<p class="wallet-transaction-state">'+escape(copy.t('walletNoTransactions'))+'</p>';}
   catch(error){if(!active(ticket)||serial!==historyRevision||error.name==='AbortError')return;ctx.find('#wallet-recent-transactions').innerHTML='<div class="wallet-transaction-state" role="status"><p>'+escape(copy.t('walletLoadTransactionFailed'))+'</p>'+button(copy.t('walletRetry'),'refresh-wallet-transactions','secondary')+'</div>';}
   finally{if(historyFlight===pending)historyFlight=null;}
  });historyFlight=pending;return pending;
 }
 async function refresh(){
  if(refreshFlight)return refreshFlight;const ticket=++revision;historyRevision++;historyFlight=null;setRefreshing(true);
  const pending=Promise.resolve().then(async()=>{
   try{const state=await ctx.api.command('wallet.summary');if(!active(ticket))return;if(!state?.user)throw Error();ctx.render(walletHomeMarkup(state,copy,panels));setRefreshing(true);await history(ticket);}
   catch(error){if(!active(ticket)||error.name==='AbortError')return;ctx.render('<div class="buyer-wallet-page"><section class="wallet-load-error" role="status">'+mi('account_balance_wallet_outlined')+'<h2>'+escape(copy.t('walletLoadFailed'))+'</h2><p>'+escape(copy.t('tryAgainLater'))+'</p>'+button(copy.t('walletRetry'),'refresh-wallet','primary')+'</section></div>');}
   finally{if(active(ticket))setRefreshing(false);if(refreshFlight===pending)refreshFlight=null;if(active(ticket)&&queuedRefresh){queuedRefresh=false;void refresh();}}
  });refreshFlight=pending;return pending;
 }
 const owner=ctx.sessionState;if(owner?.authenticated===true&&positiveId(owner.user?.id)){addEventListener('agora-buyer-realtime',event=>{if(!ctx.active())return;let value;try{value=JSON.parse(event.detail);}catch{return;}if(value.buyerId!==owner.user.id||!['wallet.invalidate','profile.invalidate','connection.restored'].includes(value.event))return;if(refreshFlight)queuedRefresh=true;else void refresh();},{signal:ctx.signal});ctx.api.command('realtime.start').catch(()=>{});}ctx.action('refresh-wallet',refresh);ctx.action('refresh-wallet-transactions',()=>history(revision));await refresh();
}
