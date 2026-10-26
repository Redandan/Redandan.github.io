import{button,route,escape}from'./ui.js';
import{originalCopy,currentLocale}from'./locale.js';
const hostCopy={
 'zh-TW':{notice:'遊戲結果以原帳號的伺服器回合為準。操作結果待確認時，請先查詢上一局。',ready:'遊戲已就緒。',pending:'請先確認原回合結果。',paused:'遊戲已暫停。',resume:'繼續並查詢原回合'},
 'zh-CN':{notice:'游戏结果以原账号的服务器回合为准。操作结果待确认时，请先查询上一局。',ready:'游戏已就绪。',pending:'请先确认原回合结果。',paused:'游戏已暂停。',resume:'继续并查询原回合'},
 'en-US':{notice:'Game results belong to the original account and server round. Check the previous round while its result is unconfirmed.',ready:'Game ready.',pending:'Check the original round first.',paused:'Game paused.',resume:'Continue and check the original round'},
 'th-TH':{notice:'ผลเกมยึดตามรอบบนเซิร์ฟเวอร์ของบัญชีเดิม หากยังยืนยันผลไม่ได้ ให้ตรวจสอบรอบก่อนหน้า',ready:'เกมพร้อมแล้ว',pending:'ตรวจสอบรอบเดิมก่อน',paused:'เกมหยุดชั่วคราว',resume:'ดำเนินการต่อและตรวจสอบรอบเดิม'}
};
const types=new Set(['GAME_READY','SPIN_REQUEST','SPIN_RECOVERY_REQUEST','SPIN_RETRY_REQUEST','SPIN_ACK_REQUEST','BALANCE_REQUEST','RTP_REQUEST','TRANSACTION_REQUEST']);
const errors={GAME_READY:'HOST_ERROR',SPIN_REQUEST:'SPIN_ERROR',SPIN_RECOVERY_REQUEST:'SPIN_RECOVERY_ERROR',SPIN_RETRY_REQUEST:'SPIN_RECOVERY_ERROR',SPIN_ACK_REQUEST:'SPIN_ACK_ERROR',BALANCE_REQUEST:'BALANCE_ERROR',RTP_REQUEST:'RTP_ERROR',TRANSACTION_REQUEST:'TRANSACTION_ERROR'};
export async function game(ctx){
 const copy=await originalCopy(ctx.signal);if(!ctx.active())return;const t=k=>copy.t(k),host=k=>hostCopy[currentLocale()][k];
 if(ctx.params.id!=='moon_dance')throw Error(t('slotGameAccessUnavailableMessage'));
 ctx.header('Moon Dance Stage',true);const view=await ctx.api.command('slot.open',{gameId:'moon_dance'});if(!ctx.active())return;
 const main=document.querySelector('#buyer-main');main.classList.add('slot-page');ctx.cleanup(()=>main.classList.remove('slot-page'));
 ctx.render(`<div class="slot-toolbar"><div class="inline-actions"><a class="secondary" href="${route('/wallet')}">${escape(t('wallet'))}</a><a class="secondary" href="${route('/transactions')}">${escape(t('transactionHistoryTitle'))}</a>${button(t('refresh'),'reload-slot','secondary')}</div><details><summary>${escape(t('description'))}</summary><p>${escape(host('notice'))}</p></details><p id="slot-status" role="status">${escape(t('loading'))}</p></div><div id="slot-frame-container" class="slot-frame-container"></div>`);
 let frame,retired=false,hidden=false;const pending=new Set();
 const destroy=()=>{retired=true;pending.clear();if(frame){frame.src='about:blank';frame.remove();frame=null;}};
 function send(reply,source){if(ctx.active()&&!retired&&frame?.contentWindow===source)source.postMessage(reply,location.origin);}
 async function receive(event){
  if(!ctx.active()||retired||event.origin!==location.origin||event.source!==frame?.contentWindow)return;
  const message=event.data;if(!message||typeof message!=='object'||Array.isArray(message)||typeof message.type!=='string')return;
  if(['GO_BACK','NAV_BACK'].includes(message.type)||message.action==='slotGameGoBack'){ctx.go('/');return;}
  const destinations={GO_DEPOSIT:'/wallet/deposit',GO_WITHDRAW:'/wallet/withdraw',GO_TRANSACTIONS:'/transactions'};
  if(destinations[message.type]){ctx.go(destinations[message.type]);return;}
  if(!types.has(message.type))return;
  const requestId=message.requestId;if(requestId!=null&&(typeof requestId!=='string'||requestId.length>128))return;
  let encoded;try{encoded=JSON.stringify(message);}catch{return;}if(encoded.length>4096)return;
  const key=message.type+'|'+(requestId??'');if(pending.has(key)||pending.size>=16)return;pending.add(key);const source=event.source;
  try{
   const reply=await ctx.api.command('slot.message',{contextId:view.contextId,message});if(!ctx.active()||retired)return;
   send({...reply,...(requestId?{requestId}:{})},source);if(reply.type==='HOST_INIT')ctx.find('#slot-status').textContent=reply.slotOperation?.status==='ready'?host('ready'):host('pending');
  }catch(error){if(ctx.active()&&!retired){send({type:errors[message.type],message:error.message,...(requestId?{requestId}:{})},source);ctx.find('#slot-status').textContent=error.message;}}
  finally{pending.delete(key);}
 }
 addEventListener('message',receive);ctx.cleanup(()=>{removeEventListener('message',receive);destroy();});
 const url=new URL('./games/moon_dance/index.html',import.meta.url);url.search='?flutter=1&hosted=1&v2host=1';frame=document.createElement('iframe');frame.title='Moon Dance Stage';frame.className='slot-game-frame';frame.allow='autoplay';frame.src=url.href;frame.addEventListener('load',()=>{if(!retired&&frame?.src===url.href)receive({origin:location.origin,source:frame.contentWindow,data:{type:'GAME_READY'}});},{signal:ctx.signal});ctx.find('#slot-frame-container').append(frame);
 ctx.action('reload-slot',()=>ctx.reload());
 function visibility(){if(document.visibilityState==='hidden'){hidden=true;destroy();}else if(hidden&&ctx.active()){ctx.find('#slot-status').innerHTML=escape(host('paused'))+button(host('resume'),'reload-slot','secondary');}}
 document.addEventListener('visibilitychange',visibility);addEventListener('pagehide',destroy);ctx.cleanup(()=>{document.removeEventListener('visibilitychange',visibility);removeEventListener('pagehide',destroy);});
}
