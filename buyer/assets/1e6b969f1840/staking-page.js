import{escape,positiveId,button}from'./ui.js';
import{originalCopy}from'./locale.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{historyPager}from'./history-list.js';
import{walletDate}from'./wallet-view-core.js';
import{withdrawAuthenticationFields}from'./withdraw-markup.js';
import{stakingMarkup,cookieStakingMarkup,legacyStakingMarkup,stakingAuthenticationMarkup}from'./staking-markup.js';
import{stakeValidInput,stakeCanResume,stakeResolved}from'./staking-view-core.js';
export async function stake(ctx){
 ctx.header('',true,{nativeAppBar:true,shortcuts:false});const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('stakePageTitle'),true,{nativeAppBar:true,shortcuts:false,backLabel:copy.t('walletBackSemantics'),backTooltip:copy.t('walletBackTooltip')});ctx.render(stakingMarkup(),{navigation:false});const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('commonCancel')});
 let data=null,busy=false,failed=false,storageFailure=false,revision=0,readRevision=0,quote=null,amount='',historyFailed=false,historyReset=false;
 const surface=()=>ctx.find('#staking-surface');
 function lock(){if(!ctx.active())return;for(const node of document.querySelectorAll('.buyer-staking-page button,.buyer-staking-page input')){const readOnly=['refresh-staking','recover-staking','more-legacy-staking'].includes(node.dataset.action),locked=busy||node.hasAttribute('data-staking-disabled')||failed&&!readOnly;node.disabled=!!locked;node.toggleAttribute('data-action-locked',!!locked);}}
 function capture(){const input=ctx.find('input[name=amount]');if(input)amount=input.value;}
 function paint(){
  if(!ctx.active())return;capture();const root=ctx.find('.buyer-staking-page');root.dataset.mode=data?.mode||(ctx.sessionState?.authenticated===true&&ctx.sessionState.mode==='legacy'?'legacy':'cookie');
  surface().innerHTML=failed&&!data?button(copy.t('stakingCheckResult'),'refresh-staking','secondary'):data?.mode==='legacy'?legacyStakingMarkup(data,copy):cookieStakingMarkup(data||{},copy);
  for(const node of surface().querySelectorAll(':disabled'))node.setAttribute('data-staking-disabled','');const input=ctx.find('input[name=amount]');if(input){input.value=amount;input.addEventListener('input',()=>{capture();revision++;quote=null;dialogs.close();const counter=ctx.find('.staking-input-counter');if(counter)counter.textContent=input.value.length+'/21';},{signal:ctx.signal});const counter=ctx.find('.staking-input-counter');if(counter)counter.textContent=input.value.length+'/21';}
  ctx.find('#staking-read-error').textContent=failed?copy.t(storageFailure?'stakingStorageUnavailable':'stakingUnavailable'):'';lock();
 }
 const pager=historyPager(ctx,{target:'#legacy-staking-history',more:'[data-action=more-legacy-staking]',request:page=>ctx.api.command('wallet.stakingLegacyHistory',{page}),row:value=>{const id=positiveId(value.id),keys={STAKING:'transactionStaking',UNSTAKING:'transactionUnstaking',INTEREST:'transactionInterest'},label=Object.hasOwn(keys,value.type)?keys[value.type]:'transactionUnknown';return'<'+(id?'a href="#/transactions/'+id+'"':'article')+' class="staking-history-row"><strong>'+escape(copy.t(label))+'</strong><span>'+escape(value.amount)+' USDT</span><time>'+escape(walletDate(value.createdAt))+'</time></'+(id?'a':'article')+'>';},empty:'<p>'+escape(copy.t('transactionNoRecords'))+'</p>'});
 async function history(reset=false){if(!ctx.active()||data?.mode!=='legacy'||!ctx.find('#legacy-staking-history'))return;const message=ctx.find('#staking-history-error');message.textContent='';try{await pager(reset);if(ctx.active()&&data?.mode==='legacy'){historyFailed=false;ctx.find('[data-action=more-legacy-staking]').textContent=copy.t('txtaf90a08fec');}}catch(error){if(ctx.active()&&error.name!=='AbortError'&&data?.mode==='legacy'){historyFailed=true;historyReset=reset;message.textContent=copy.t('walletLoadTransactionFailed');const retry=ctx.find('[data-action=more-legacy-staking]');retry.hidden=false;retry.textContent=copy.t('retry');}}}
 async function read(){
  if(!ctx.active()||busy)return;capture();revision++;quote=null;dialogs.close();const ticket=++readRevision;busy=true;lock();
  try{const value=await ctx.api.command('wallet.stakingState');if(!ctx.active()||ticket!==readRevision)return;if(!value||!['cookie','legacy'].includes(value.mode))throw Error();data=value;failed=false;storageFailure=false;paint();if(data.mode==='legacy')await history(true);}
  catch(error){if(ctx.active()&&ticket===readRevision&&error.name!=='AbortError'){failed=true;storageFailure=error.code==='STAKING_STORAGE_REQUIRED';if(data?.mode==='cookie')data=data.attempt?{...data,state:null}:null;paint();}}
  finally{if(ctx.active()&&ticket===readRevision){busy=false;lock();}}
 }
 function authentication(value){
  if(!ctx.active()||!value?.intent||!value.quoteId)return;quote=value;const node=dialogs.show(copy.t(value.intent.purpose==='unstake'?'unstake':'stakeCreateButton'),stakingAuthenticationMarkup(value,copy));node.classList.add('staking-auth-dialog');
  node.querySelector('#staking-auth-kind').addEventListener('change',event=>{if(ctx.active()&&node.open)node.querySelector('#staking-auth-fields').innerHTML=withdrawAuthenticationFields(event.target.value,copy).replaceAll('withdraw-email-code','staking-email-code');},{signal:ctx.signal});node.addEventListener('close',()=>{if(quote===value)quote=null;},{once:true});
 }
 async function prepare(purpose,values={}){
  if(!ctx.active()||busy||failed||data?.mode!=='cookie'||data.attempt||!data.state||purpose==='stake'&&data.state.applyAvailable!==true||purpose==='unstake'&&data.state.unfreezeAvailable!==true)return;
  if(purpose==='stake'&&!stakeValidInput(values.amount.trim())){ctx.toast(copy.t('stakeEnterValidAmount'));return;}const ticket=revision;busy=true;lock();
  try{const value=await ctx.api.command('wallet.stakingPrepare',{purpose,...(purpose==='stake'?{amount:values.amount.trim()}:{})});if(ctx.active()&&ticket===revision)authentication(value);}
  catch(error){if(ctx.active()&&error.name!=='AbortError')ctx.toast(copy.t(error.code==='STAKING_STORAGE_REQUIRED'?'stakingStorageUnavailable':'stakingUnavailable'));}
  finally{if(ctx.active()){busy=false;lock();}}
 }
 ctx.cleanup(()=>{readRevision++;revision++;quote=null;data=null;amount='';});
 ctx.action('refresh-staking',()=>read());ctx.action('recover-staking',()=>read());ctx.action('more-legacy-staking',()=>history(historyFailed?historyReset:false));
 ctx.form('stake-prepare',values=>prepare('stake',values));ctx.action('prepare-unstake',()=>prepare('unstake'));
 ctx.action('resume-staking',()=>{if(!busy&&!failed&&data?.mode==='cookie'&&stakeCanResume(data.attempt))authentication(data.attempt);});
 ctx.action('staking-email-code',async()=>{const input=ctx.find('#staking-auth-fields [name=email]');if(!ctx.active()||busy||!quote||!input?.reportValidity())return;await ctx.api.command('wallet.emailCode',{email:input.value});if(ctx.active())ctx.toast(copy.t('verificationCodeSent'));});
 ctx.form('staking-submit',async(values,form)=>{
  const captured=quote;if(!ctx.active()||busy||failed||!captured||!form.isConnected||!form.closest('dialog')?.open||values.confirmed!=='on')return;busy=true;lock();const kind=ctx.find('#staking-auth-kind').value;for(const input of form.elements)input.disabled=true;
  try{const value=await ctx.api.command('wallet.stakingSubmit',{...values,quoteId:captured.quoteId,kind});if(!ctx.active())return;form.reset();dialogs.close();quote=null;data={...(data||{}),mode:'cookie',attempt:value};paint();}
  catch(error){if(ctx.active()&&error.name!=='AbortError'){form.reset();dialogs.close();quote=null;ctx.toast(copy.t('stakingPending'));try{const value=await ctx.api.command('wallet.stakingRecover');if(ctx.active()){data={...(data||{}),mode:'cookie',attempt:value};paint();}}catch{if(ctx.active()){failed=true;paint();}}}}
  finally{if(ctx.active()){busy=false;lock();}}
 });
 ctx.action('ack-staking',async()=>{if(!ctx.active()||busy||failed||data?.mode!=='cookie'||!stakeResolved(data.attempt))return;busy=true;lock();try{await ctx.api.command('wallet.stakingAcknowledge',{quoteId:data.attempt.quoteId});if(!ctx.active())return;busy=false;await read();}finally{if(ctx.active()){busy=false;lock();}}});
 async function legacy(purpose,values={}){
  if(!ctx.active()||busy||failed||data?.mode!=='legacy'||data.attempt||data.uncertain)return;
  const position=purpose==='unstake'?data.positions?.find(value=>value.id===values.id&&value.status==='STAKING'):null;if(purpose==='unstake'&&!position)return;if(purpose==='stake'&&(data.positions?.length||!stakeValidInput(values.amount.trim()))){ctx.toast(copy.t('stakeEnterValidAmount'));return;}
  busy=true;lock();const accepted=await dialogs.confirm({title:copy.t(purpose==='stake'?'stakeCreateButton':'stakeConfirmCancel'),content:'<p>'+escape(purpose==='stake'?copy.t('stakeAmountLabel')+': '+values.amount+' USDT':copy.t('stakeConfirmCancelMessage'))+'</p>',confirmLabel:copy.t('commonConfirm')});if(!ctx.active())return;
  try{if(!accepted)return;await ctx.api.command(purpose==='stake'?'wallet.stakingLegacyApply':'wallet.stakingLegacyUnfreeze',purpose==='stake'?{amount:values.amount.trim()}:{stakingId:position.id});if(!ctx.active())return;amount='';busy=false;await read();}
  catch(error){if(ctx.active()&&error.name!=='AbortError'){ctx.toast(copy.t('stakingPending'));busy=false;await read();}}
  finally{if(ctx.active()){busy=false;lock();}}
 }
 ctx.form('legacy-stake',values=>legacy('stake',values));ctx.action('legacy-unstake',node=>legacy('unstake',{id:node.dataset.id}));
 ctx.action('ack-legacy-staking',async node=>{if(!ctx.active()||busy||failed||data?.mode!=='legacy'||data.attempt?.resolved!==true||data.attempt.attemptId!==node.dataset.attempt)return;busy=true;lock();try{await ctx.api.command('wallet.stakingLegacyAcknowledge',{attemptId:node.dataset.attempt});if(ctx.active()){busy=false;await read();}}finally{if(ctx.active()){busy=false;lock();}}});await read();
}
