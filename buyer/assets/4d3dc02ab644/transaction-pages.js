import{escape,list,button,positiveId}from'./ui.js';
import{originalCopy}from'./locale.js';
import{createBuyerDialogs}from'./native-dialog.js';
import{transactionType,transactionPageSize,transactionRange,transactionMerge,transactionHasMore}from'./transaction-view-core.js';
import{transactionHeaderActions,transactionHistoryMarkup,transactionFilterRail,transactionHistoryRow,transactionEmpty,transactionFilterMarkup,transactionDetailMarkup,transactionUnavailable}from'./transaction-markup.js';
// Bounded, owner-confirmed return state lives only in memory. Row snapshots are
// consumed only when returning from a child detail; never browser storage/auth.
const filterStates=new Map();
addEventListener('agora-buyer-auth',()=>filterStates.clear());
function filterKey(ctx){
 const state=ctx.sessionState;if(state?.authenticated!==true||!positiveId(state.user?.id)||!['cookie','legacy'].includes(state.mode)||!Number.isSafeInteger(state.revision))return null;
 if([...ctx.query.keys()].some(key=>key!=='type'))return null;
 return JSON.stringify([state.mode,state.user.id,state.revision,transactionType(ctx.query.get('type'))]);
}
export async function transactions(ctx){
 ctx.header('',true,{nativeAppBar:true,shortcuts:false});const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('transactionHistoryTitle'),true,{nativeAppBar:true,shortcuts:false,actionMarkup:transactionHeaderActions(copy)});
 const owner=filterKey(ctx),saved=ctx.returningFromTransaction===true&&owner?filterStates.get(owner):null,restored=saved?.snapshot;
 let state=saved?{type:saved.type,start:saved.start,end:saved.end}:{type:transactionType(ctx.query.get('type')),start:'',end:''},items=[],next=1,size=transactionPageSize(document.querySelector('#buyer-app').getBoundingClientRect().width),generation=0,busy=false,hasMore=true,error='',dialog=null,draft=null,userScroll=false,lastScroll=0,pull=null,retryReset=false,retryKeep=false;
 const dialogs=createBuyerDialogs(ctx,{cancelLabel:copy.t('cancel')});
 ctx.render(transactionHistoryMarkup(),{navigation:false});
 const main=document.querySelector('#buyer-main');
 function remember(){if(!owner)return;filterStates.delete(owner);filterStates.set(owner,{...state});while(filterStates.size>6)filterStates.delete(filterStates.keys().next().value);}
 function rail(){
  const node=ctx.find('#transaction-filter-rail'),scroll=node.scrollLeft,focused=node.contains(document.activeElement)?document.activeElement.dataset.type:undefined;
  node.innerHTML=transactionFilterRail(state,copy);node.scrollLeft=scroll;
  if(focused!==undefined)node.querySelector('[data-type="'+focused+'"]')?.focus({preventScroll:true});
  const dot=document.querySelector('.transaction-filter-dot');if(dot)dot.hidden=!(state.type||state.start||state.end);
 }
 function renderRows(){
  if(!ctx.active())return;
  const visible=state.type?items.filter(value=>value.type===state.type):items;
  ctx.find('#transactions-list').innerHTML=visible.length?visible.map(value=>transactionHistoryRow(value,copy)).join(''):busy&&!items.length?'<p class="loading">'+escape(copy.t('loading'))+'</p>':transactionEmpty(state,copy);
  ctx.find('#transactions-list').setAttribute('aria-busy',String(busy));
  ctx.find('#transaction-history-footer').innerHTML=(error?'<p class="transaction-read-error">'+escape(copy.t('transactionLoadFailed'))+'</p>':'')+(hasMore||error?button(copy.t(error?'retry':busy?'loading':'txtaf90a08fec'),'transaction-more','secondary',busy?'disabled':''):'');
  const refresh=document.querySelector('[data-action=transaction-refresh]');if(refresh){refresh.disabled=busy;refresh.toggleAttribute('data-action-locked',busy);refresh.setAttribute('aria-busy',String(busy));}
 }
 async function load(reset=false,{keep=false}={}){
  if(!ctx.active()||!reset&&busy||!reset&&!hasMore)return;
  const ticket=++generation,page=reset?1:next,wantSize=size;
  let range;try{range=transactionRange(state.start,state.end);}catch{ctx.toast(copy.t('selectDateRange'));return;}
  busy=true;error='';if(reset){next=1;hasMore=true;if(!keep)items=[];}
  renderRows();
  try{
   const value=await ctx.api.command('wallet.transactions',{page,size:wantSize,...range});if(!ctx.active()||ticket!==generation)return;
   if(value!=null&&!Array.isArray(value.content))throw Error('Invalid transaction page');
   const incoming=list(value),before=reset?0:items.length;items=transactionMerge(reset?[]:items,incoming);
   hasMore=transactionHasMore(value||{last:true},incoming,wantSize,items.length-before,reset);next=page+1;
  }catch(failure){if(!ctx.active()||ticket!==generation||failure.name==='AbortError')return;error=copy.t('transactionLoadFailed');retryReset=reset;retryKeep=keep;}
  finally{if(ctx.active()&&ticket===generation){busy=false;renderRows();}}
 }
 function apply(nextState){if(!ctx.active())return;state={...nextState};remember();rail();void load(true);}
 function closeFilter(){dialogs.close();dialog=null;draft=null;}
 ctx.action('transaction-type',element=>{const type=transactionType(element.dataset.type);apply({...state,type:state.type===type?null:type});});
 ctx.action('transaction-clear',()=>apply({type:null,start:'',end:''}));
 ctx.action('transaction-more',()=>error?load(retryReset,{keep:retryKeep}):load(false));
 ctx.action('transaction-refresh',()=>load(true));
 ctx.action('transaction-filter-reset',()=>{if(!dialog?.isConnected)return;closeFilter();apply({type:null,start:'',end:''});});
 ctx.action('transaction-draft-type',element=>{if(!dialog?.isConnected||!draft)return;const value=transactionType(element.dataset.type);draft.type=draft.type===value?null:value;for(const chip of dialog.querySelectorAll('[data-action=transaction-draft-type]'))chip.setAttribute('aria-pressed',String(transactionType(chip.dataset.type)===draft.type));});
 ctx.action('transaction-draft-clear-dates',()=>{if(!dialog?.isConnected)return;for(const input of dialog.querySelectorAll('input[type=date]')){input.value='';input.min='2020-01-01';input.max=input.dataset.transactionMax||input.max;input.required=false;}});
 ctx.action('transaction-filter',()=>{
  if(!ctx.active())return;draft={...state};const node=dialogs.show(copy.t('transactionFilter'),transactionFilterMarkup(draft,copy),{placement:'bottom'});dialog=node;node.classList.add('transactions-filter-dialog');
  const start=node.querySelector('[name=transactionStart]'),end=node.querySelector('[name=transactionEnd]'),max=start.max;
  function bounds(){start.max=end.value||max;end.min=start.value||'2020-01-01';start.required=!!end.value;end.required=!!start.value;}
  for(const input of[start,end]){input.dataset.transactionMax=input.max;input.addEventListener('input',bounds);}bounds();
  const confirm=document.createElement('button');confirm.type='button';confirm.className='primary';confirm.dataset.transactionFilterConfirm='true';confirm.textContent=copy.t('confirm');node.querySelector('.profile-dialog-actions').append(confirm);
  confirm.addEventListener('click',()=>{
   if(!ctx.active()||dialog!==node||!node.open||!draft||!start.reportValidity()||!end.reportValidity())return;
   const nextState={...draft,start:start.value,end:end.value};try{transactionRange(nextState.start,nextState.end);}catch{ctx.toast(copy.t('selectDateRange'));return;}closeFilter();apply(nextState);
  });
  node.addEventListener('close',()=>{if(dialog===node){dialog=null;draft=null;}},{once:true});
 });
 function bottom(){return main.scrollHeight-main.clientHeight-main.scrollTop<=1;}
 main.addEventListener('click',event=>{
  const link=event.target.closest('.transaction-history-row');
  if(!owner||!ctx.active()||!link||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||items.length>1000)return;
  remember();filterStates.set(owner,{...state,snapshot:{items:items.slice(),next,size,hasMore}});
 },{signal:ctx.signal});
 main.addEventListener('wheel',()=>{userScroll=true;},{passive:true,signal:ctx.signal});
 main.addEventListener('keydown',event=>{if(['ArrowDown','PageDown','End'].includes(event.key))userScroll=true;},{signal:ctx.signal});
 main.addEventListener('pointerdown',()=>{userScroll=true;},{passive:true,signal:ctx.signal});
 main.addEventListener('scroll',()=>{const top=main.scrollTop,down=top>lastScroll;lastScroll=top;if(userScroll&&down&&bottom()&&hasMore&&!busy){userScroll=false;void load(false);}},{passive:true,signal:ctx.signal});
 // The list alone owns pull refresh. Date overlays and the horizontal chip rail
 // keep their own gestures; the shared viewport policy still owns the app frame.
 main.addEventListener('touchstart',event=>{
  if(event.touches.length!==1||main.scrollTop>0||event.target.closest('dialog,.transaction-filter-bar')){pull=null;return;}
  pull={x:event.touches[0].clientX,y:event.touches[0].clientY,distance:0};userScroll=true;
 },{passive:true,signal:ctx.signal});
 main.addEventListener('touchmove',event=>{
  if(!pull||event.touches.length!==1)return;const dx=event.touches[0].clientX-pull.x,dy=event.touches[0].clientY-pull.y;
  if(Math.abs(dx)>Math.abs(dy)||main.scrollTop>0){pull=null;return;}pull.distance=Math.max(0,dy);if(dy>12&&event.cancelable)event.preventDefault();
 },{passive:false,signal:ctx.signal});
 main.addEventListener('touchend',()=>{const refresh=pull?.distance>=64;pull=null;if(refresh&&!busy&&ctx.active())void load(true,{keep:true});},{passive:true,signal:ctx.signal});
 main.addEventListener('touchcancel',()=>{pull=null;},{passive:true,signal:ctx.signal});
 const resize=new ResizeObserver(()=>{if(!ctx.active())return;const nextSize=transactionPageSize(document.querySelector('#buyer-app').getBoundingClientRect().width);if(nextSize!==size){size=nextSize;void load(true,{keep:true});}});resize.observe(document.querySelector('#buyer-app'));
 ctx.cleanup(()=>{generation++;resize.disconnect();items=[];pull=null;});
 rail();remember();if(restored&&restored.size===size&&Array.isArray(restored.items)&&restored.items.length<=1000){items=restored.items.slice();next=restored.next;hasMore=restored.hasMore;renderRows();}else await load(true);
}
export async function transaction(ctx){
 ctx.header('',true,{nativeAppBar:true,shortcuts:false});const copy=await originalCopy(ctx.signal);if(!ctx.active())return;
 ctx.header(copy.t('transactionDetailTitle')+' #'+ctx.params.id,true,{nativeAppBar:true,shortcuts:false,backLabel:copy.t('transactionBackToList'),backTooltip:copy.t('transactionBackToList')});
 const back=()=>ctx.finishSecondary?ctx.finishSecondary('/transactions',['/transactions']):ctx.go('/transactions');
 ctx.action('back',back);ctx.action('transaction-back-list',back);
 let value=null;try{value=await ctx.api.command('wallet.transaction',{id:ctx.params.id});}catch(error){if(!ctx.active()||error.name==='AbortError')return;ctx.toast(copy.t('transactionLoadFailed'));}
 if(!ctx.active())return;ctx.render(value?transactionDetailMarkup(value,copy):transactionUnavailable(copy),{navigation:false});
 ctx.action('transaction-copy-id',async()=>{if(!ctx.active()||!value)return;await navigator.clipboard.writeText(String(value.id));if(ctx.active())ctx.toast(copy.t('txtef431b7ace'));});
}
