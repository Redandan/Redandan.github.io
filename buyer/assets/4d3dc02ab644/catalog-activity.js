import{escape,imageUrl,route}from'./ui.js';
import{catalogText as t}from'./catalog-core.js';
import{activityGames}from'./catalog-copy.js';
import{materialIcon as mi}from'./material-icons.js';
import{installState}from'./pwa.js';

const clean=value=>value==null?'':String(value).trim();
const normalize=value=>{const raw=clean(value);return raw.startsWith('/#/')?raw.slice(2):raw.startsWith('#/')?'/'+raw.slice(2):raw;};
const isInstall=entry=>entry.type==='APP_INSTALL'||entry.action==='PWA_INSTALL'||normalize(entry.value)==='/app-download'||entry.id.toLowerCase().includes('install')||entry.title==='安裝 AgoraMarket';
const isGame=entry=>entry.type==='GAME_ENTRY'||normalize(entry.value)==='/games'||normalize(entry.value).startsWith('/games/');
export function parseActivityConfig(value){
 const carousel=value?.marketplaceUi?.productListCarousel;
 if(!carousel||typeof carousel!=='object'||Array.isArray(carousel))return{present:false,entries:[]};
 const types={APP_INSTALL:'APP_INSTALL',PWA_INSTALL:'APP_INSTALL',ACTIVITY_ENTRY:'ACTIVITY_ENTRY',GAME_ENTRY:'GAME_ENTRY',ADVERTISEMENT:'ADVERTISEMENT'},actions={NONE:'NONE',PWA_INSTALL:'PWA_INSTALL',APP_INSTALL:'PWA_INSTALL',INTERNAL_PATH:'INTERNAL_PATH',ROUTE:'INTERNAL_PATH',EXTERNAL_URL:'EXTERNAL_URL'};
 const entries=(Array.isArray(carousel.items)?carousel.items:[]).flatMap((row,index)=>{if(!row||typeof row!=='object'||Array.isArray(row)||!Object.hasOwn(types,row.type))return[];const rawAction=row.actionType==null||row.actionType===''?'NONE':row.actionType;if(!Object.hasOwn(actions,rawAction)||!clean(row.title))return[];const type=types[row.type],entry={type,id:clean(row.id)||({APP_INSTALL:'appInstall',ACTIVITY_ENTRY:'activityEntry',GAME_ENTRY:'gameEntry',ADVERTISEMENT:'advertisement'}[type]+'-'+index),title:clean(row.title),subtitle:clean(row.subtitle),action:actions[rawAction],value:clean(row.actionValue),image:imageUrl(row.imageUrl)};if(isInstall(entry))entry.type='APP_INSTALL';return[entry];});
 return{present:true,enabled:carousel.enabled===true,entries};
}
export function visibleActivityEntries(config,{installed=false,demo=false}={}){
 const install={id:'install-agoramarket',type:'APP_INSTALL',title:'安裝 AgoraMarket',subtitle:'加入主畫面，快速回到市場',action:'INTERNAL_PATH',value:'/app-download'};
 if(config.present){if(!config.enabled||!config.entries.length)return installed?[]:[install];return[...(!installed&&!config.entries.some(isInstall)?[install]:[]),...config.entries.filter(entry=>(!installed||!isInstall(entry))&&(!demo||!isGame(entry)))];}
 return[...(installed?[]:[install]),...(demo?[]:activityGames.map(game=>({...game,type:'GAME_ENTRY',action:'INTERNAL_PATH',value:'/games/'+game.id})))];
}
function cachedConfig(){try{let value=JSON.parse(localStorage.getItem('flutter.userinfo')||'null');if(typeof value==='string')value=JSON.parse(value);return parseActivityConfig(value);}catch{return{present:false,entries:[]};}}
function activityLink(entry){
 if(entry.action==='PWA_INSTALL')return{href:route('/app-download')};
 if(entry.action==='NONE'||!entry.value)return null;
 if(entry.action==='EXTERNAL_URL'){try{const url=new URL(entry.value);return['http:','https:'].includes(url.protocol)&&!url.username&&!url.password?{href:url.href,external:true}:null;}catch{return null;}}
 let value=normalize(entry.value);if(value==='/games')value='/games/'+(activityGames[0]?.id||'moon_dance');if(!value.startsWith('/')||value.startsWith('//')||/[\\\x00-\x1f]/.test(value))return null;
 const decision=window.AgoraBuyerEntry.classify(location.origin+'/#'+value);if(decision.kind==='callback')return null;return{href:decision.kind==='flutter'?new URL('../../../',import.meta.url).pathname+'#'+decision.route:route(decision.route)};
}
function card(entry,telegram){
 const app=isInstall(entry),community=/telegram|t\.me|tg |tg群|tg 群|community|社群/i.test([entry.id,entry.title,entry.subtitle,entry.value].join(' ')),picture=app?new URL('./activity-install.png',import.meta.url).href:entry.type==='GAME_ENTRY'||entry.type==='ACTIVITY_ENTRY'?new URL(community?'./activity-community.png':'./activity-game.webp',import.meta.url).href:entry.image,icon=app?'install_mobile_outlined':entry.type==='ADVERTISEMENT'?'campaign_outlined':'casino_outlined',title=app?t(telegram?'productListTelegramInstallTitle':'productListInstallAppTitle'):entry.title,subtitle=app?t(telegram?'productListTelegramInstallSubtitle':'productListInstallAppSubtitle'):entry.subtitle,link=activityLink(entry);
 const accent=app?'#70b7ff':entry.type==='ADVERTISEMENT'?'#2d9cdb':'#5560c8';
 const body=`<span class="activity-picture" style="--activity-accent:${accent}">${picture?`<img src="${escape(picture)}" alt="" draggable="false" decoding="async">`:''}<span class="activity-picture-fallback">${mi(icon)}</span></span><span class="activity-copy"><strong>${escape(title)}</strong><span>${escape(subtitle)}</span></span>`;
 return link?`<a class="activity-card" data-activity-id="${escape(entry.id)}" href="${escape(link.href)}" ${link.external?'target="_blank" rel="noopener noreferrer"':''} aria-label="${escape(app?title:t('slotGameStartGameWithTitle',{title:entry.title}))}">${body}</a>`:`<button class="activity-card" type="button" disabled data-activity-id="${escape(entry.id)}">${body}</button>`;
}
export function bindActivityFeed(ctx){
 const grid=ctx.find('#catalog-results'),host=document.createElement('section');host.className='catalog-activity';let index=0,frame=0,track,entries=[];
 const media=matchMedia('(display-mode: standalone)');
 function mark(){if(!ctx.active()||!track?.clientWidth)return;index=Math.max(0,Math.min(entries.length-1,Math.round(track.scrollLeft/track.clientWidth)));host.querySelectorAll('.activity-dot').forEach((dot,i)=>dot.classList.toggle('is-active',i===index));}
 function place(){if(!ctx.active())return;const cards=[...grid.querySelectorAll(':scope>.product-card-frame')];if(!cards.length||!entries.length){host.remove();return;}const columns=getComputedStyle(grid).gridTemplateColumns.split(' ').length,last=cards[Math.min(columns*2,cards.length)-1];if(last.nextElementSibling!==host)last.insertAdjacentElement('afterend',host);if(track?.clientWidth)track.scrollTo({left:index*track.clientWidth,behavior:'instant'});}
 function render(){
  if(!ctx.active())return;const outer=new URLSearchParams(location.search),hash=new URLSearchParams(location.hash.split('?')[1]||''),demo=clean(hash.get('marketplaceDemo')??outer.get('marketplaceDemo')).toLowerCase()==='true';
  entries=visibleActivityEntries(cachedConfig(),{installed:installState().installed,demo});index=Math.min(index,Math.max(0,entries.length-1));track?.removeEventListener('scroll',mark);host.innerHTML=`<div class="activity-track">${entries.map(entry=>card(entry,/telegram/i.test(navigator.userAgent))).join('')}</div>${entries.length>1?`<button class="activity-previous" type="button" data-action="activity-previous" aria-label="${escape(t('commonPrevious'))}">${mi('chevron_left_rounded')}</button><button class="activity-next" type="button" data-action="activity-next" aria-label="${escape(t('commonNext'))}">${mi('chevron_right_rounded')}</button>`:''}<div class="activity-dots" aria-hidden="true">${entries.length>1?entries.map((_,i)=>`<span class="activity-dot${i===index?' is-active':''}"></span>`).join(''):''}</div>`;
  track=host.querySelector('.activity-track');track.addEventListener('scroll',mark,{passive:true,signal:ctx.signal});place();
 }
 const step=delta=>{if(!track||entries.length<2)return;index=(index+delta+entries.length)%entries.length;track.scrollTo({left:index*track.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});host.querySelectorAll('.activity-dot').forEach((dot,i)=>dot.classList.toggle('is-active',i===index));};
 ctx.action('activity-previous',()=>step(-1));ctx.action('activity-next',()=>step(1));
 host.addEventListener('error',event=>{if(event.target.tagName==='IMG')event.target.hidden=true;},{capture:true,signal:ctx.signal});
 addEventListener('storage',event=>{if(event.key===null||event.key==='flutter.userinfo')render();},{signal:ctx.signal});addEventListener('agora-buyer-install',render,{signal:ctx.signal});media.addEventListener('change',render,{signal:ctx.signal});
 const observer=new ResizeObserver(()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;place();});});observer.observe(grid);ctx.cleanup(()=>{observer.disconnect();cancelAnimationFrame(frame);host.remove();});render();return place;
}
