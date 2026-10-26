import{takeContact,attachContact}from'./chat-contact.js';
import{bindChatExtras,communicationText as t,communicationDate as clock,communicationRelative as listClock}from'./chat-quick.js';
import {escape,list,empty,button,route,imageUrl} from './ui.js';
import{materialIcon as mi}from'./material-icons.js';
// Original Icons.smart_toy (U+E5C5), converted from Flutter MaterialIcons-Regular.otf.
const assistantIcon=()=>`<svg aria-hidden="true" viewBox="0 0 512 512" width="24" height="24"><path fill="currentColor" transform="translate(0 512) scale(1 -1)" d="M427 320V363C427 386 407 405 384 405H320C320 441 291 469 256 469C221 469 192 441 192 405H128C105 405 85 386 85 363V320C50 320 21 291 21 256C21 221 50 192 85 192V107C85 83 105 64 128 64H384C407 64 427 83 427 107V192C462 192 491 221 491 256C491 291 462 320 427 320ZM160 267C160 284 174 299 192 299C210 299 224 284 224 267C224 249 210 235 192 235C174 235 160 249 160 267ZM341 149H171V192H341V149ZM320 235C302 235 288 249 288 267C288 284 302 299 320 299C338 299 352 284 352 267C352 249 338 235 320 235Z"/></svg>`;
function attachment(content){
 let value;try{value=JSON.parse(content);}catch{}
 if(value&&typeof value==='object'&&!Array.isArray(value)&&value.fileType){const url=imageUrl(value.fileUrl);if(url)return `<a class="secondary" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(value.fileName||t('開啟附件'))}</a>`;}
 try{const url=new URL(content);if(imageUrl(content)&&/\.(?:jpe?g|png|gif|webp)$/i.test(url.pathname))return `<a href="${escape(url.href)}" target="_blank" rel="noopener noreferrer"><img class="chat-image" src="${escape(url.href)}" alt="${escape(t('image'))}" loading="lazy"></a>`;}catch{}
 return escape(content);
}
async function realtime(ctx,onInvalidate){
 const owner=await ctx.api.session();if(!ctx.active())return;
 addEventListener('agora-buyer-realtime',event=>{
  if(!ctx.active())return;let value;try{value=JSON.parse(event.detail);}catch{return;}
  if(value.buyerId!==owner.user?.id)return;
  if(value.event==='chat.invalidate'||value.event==='connection.restored')onInvalidate(value);
  const status=ctx.find('#chat-connection');if(status&&value.event.startsWith('connection.'))status.textContent=value.event==='connection.restored'?t('即時連線已連接'):t('即時連線中斷，可重新讀取訊息。');
 },{signal:ctx.signal});
 ctx.api.command('realtime.start').then(value=>{if(ctx.active()&&ctx.find('#chat-connection'))ctx.find('#chat-connection').textContent=value.connected?t('即時連線已連接'):t('即時連線尚未就緒，可重新讀取訊息。');}).catch(()=>{if(ctx.active()&&ctx.find('#chat-connection'))ctx.find('#chat-connection').textContent=t('即時連線暫時無法使用，可重新讀取訊息。');});
}
export async function sessions(ctx){
 ctx.header(t('myChats'),true,{nativeAppBar:true,shortcuts:false});let page=1,busy=false,queued=false;
 ctx.render(`<div class="communications-native-page chat-sessions-page"><div class="communications-tools"><a class="secondary" href="#/chat/new/0">${escape(t('aiAssistant'))}</a>${button(t('refresh'),'refresh-chat','secondary')}</div><p id="chat-connection" class="muted" role="status"></p><div id="chat-sessions" class="list" aria-busy="true"><div class="loading" role="status">${escape(t('載入中...'))}</div></div><div id="chat-next"></div></div>`,{navigation:false});
 async function load(reset=false){if(busy){queued=true;return;}busy=true;try{if(reset)page=1;const result=await ctx.api.command('chat.sessions',{page});if(!ctx.active())return;
  const html=list(result).map(s=>{const name=s.partnerId===0?t('aiAssistant'):s.partnerName||t('unknownUser');let preview=s.latestMessageContent||t('noMessages');try{const file=JSON.parse(preview);if(file?.fileType)preview='📎 '+(file.fileName||t('file'));}catch{}if(/^https?:\/\/.*\.(?:jpe?g|png|gif|webp)(?:\?|$)/i.test(preview))preview='🖼️ '+t('image');return `<section class="chat-session"><a class="chat-session-link" href="${route('/chat/'+encodeURIComponent(s.id))}"><span class="chat-session-avatar ${s.partnerId===0?'is-assistant':''}">${s.partnerId!==0&&imageUrl(s.partnerAvatar)?`<img src="${escape(imageUrl(s.partnerAvatar))}" alt="">`:s.partnerId===0?assistantIcon():escape([...name][0]||'?')}</span><div class="chat-session-copy"><h3>${escape(name)}${s.pinned?' · '+escape(t('已置頂')):''}</h3><p class="message-preview">${escape(preview)}</p></div><div class="chat-session-trailing"><time>${escape(s.latestMessageTime?listClock(s.latestMessageTime):'')}</time>${s.userUnreadCount?`<span class="badge">${escape(s.userUnreadCount)}</span>`:''}</div></a><details class="chat-session-menu"><summary aria-label="${escape(t('myChats'))}">⋮</summary><div class="inline-actions">${button(t(s.pinned?'取消置頂':'置頂'),'pin-chat','secondary',`data-id="${escape(s.id)}"`)}${button(t('deleteChat'),'delete-chat','secondary',`data-id="${escape(s.id)}"`)}</div></details></section>`;}).join('');
  if(page===1)ctx.find('#chat-sessions').innerHTML=html||empty(t('noChats'),t('startChattingWithSeller'));else ctx.find('#chat-sessions').insertAdjacentHTML('beforeend',html);
  ctx.find('#chat-sessions').setAttribute('aria-busy','false');
  ctx.find('#chat-next').innerHTML=!result.last?button('載入更多','more-chat','secondary'):'';page++;
 }finally{busy=false;if(queued&&ctx.active()){queued=false;await load(true);}}}
 ctx.action('refresh-chat',()=>load(true));ctx.action('more-chat',()=>load());
 ctx.action('pin-chat',async el=>{await ctx.api.command('chat.pin',{sessionId:el.dataset.id});await load(true);});
 ctx.action('delete-chat',async el=>{if(!confirm(t('確定刪除這個聊天會話？')))return;await ctx.api.command('chat.deleteSession',{sessionId:el.dataset.id});await load(true);});
 await realtime(ctx,()=>load(true).catch(e=>{if(ctx.active())ctx.toast(e.message);}));await load();
}
export async function create(ctx){
 ctx.header(t('myChats'),true,{nativeAppBar:true,shortcuts:false});const receiver=Number(ctx.params.id);if(!Number.isSafeInteger(receiver)||receiver<0)throw Error('無效的聊天對象。');
 const contact=takeContact(receiver);if(contact){const value=await ctx.api.command('chat.contactCreate',{receiverId:receiver,contactId:contact.contactId});if(ctx.active()){attachContact(value.sessionId,contact.contactId);ctx.go('/chat/'+encodeURIComponent(value.sessionId));}return;}
 const session=await ctx.api.command('chat.create',{receiverId:receiver});if(ctx.active())ctx.go('/chat/'+encodeURIComponent(session.id));
}
export async function conversation(ctx){
 const id=ctx.params.id;ctx.header(t('聊天'),true,{nativeAppBar:true,shortcuts:false});const owner=await ctx.api.session();if(!ctx.active())return;
 let snapshot,messages=[],pages=1,busy=false,queued=false,editing=null,typing=false,typingTimer,readId=0,composerRevision=0;
 ctx.render(`<div class="communications-native-page chat-conversation-page"><section class="chat-toolbar"><p id="chat-connection" class="muted">${escape(t('正在連接即時訊息…'))}</p><div class="inline-actions">${button(t('refresh'),'refresh-messages','secondary')}${button(t('清除訊息'),'clear-messages','secondary')}${button(t('語音通話'),'chat-audio','secondary','disabled')}${button(t('視訊通話'),'chat-video','secondary','disabled')}</div><p id="chat-support-notice" class="notice" hidden></p></section><div id="chat-history-more"></div><section id="chat-message-list" class="chat-messages" aria-live="polite" aria-busy="true"></section></div>`,{navigation:false,footer:`<form method="post" data-form="chat-send" class="chat-compose"><input type="file" id="chat-image-file" class="sr-only" accept="image/png,image/jpeg,image/gif,image/webp"><button type="button" data-action="chat-image" class="secondary" aria-label="${escape(t('sellerUploadImage'))}">${mi('add_photo_alternate')}</button><button type="button" class="secondary" data-action="cancel-edit-message" hidden aria-label="${escape(t('cancelEditingMessage'))}">${mi('close')}</button><label class="sr-only" for="chat-content">${escape(t('sendMessage'))}</label><textarea id="chat-content" name="content" rows="1" placeholder="${escape(t('enterMessage'))}" maxlength="20000" required></textarea><button class="primary" type="submit" aria-label="${escape(t('sendMessage'))}">${mi('send')}</button></form>`});
 const input=document.querySelector('#chat-content'),file=document.querySelector('#chat-image-file');
 async function load(more=false){if(busy){queued=true;return;}busy=true;try{
  if(more)pages++;
  const container=ctx.find('#chat-message-list'),main=container.closest('main'),oldRect=main.getBoundingClientRect(),atBottom=main.scrollHeight-main.clientHeight-main.scrollTop<90;
  const anchor=[...container.querySelectorAll('[data-message-id]')].find(el=>el.getBoundingClientRect().bottom>oldRect.top),anchorId=anchor?.dataset.messageId,offset=anchor?.getBoundingClientRect().top-oldRect.top;
  const collected=[],seen=new Set();let last=false,base;
  for(let page=1;page<=pages&&!last;page++){const s=await ctx.api.command('chat.messages',{sessionId:id,page});if(!ctx.active())return;base??=s;for(const m of list(s.messages)){if(!seen.has(m.id)){seen.add(m.id);collected.push({...m,page});}}last=s.messages?.last??list(s.messages).length<50;}
  if(!ctx.active()||!base)return;snapshot=base;messages=collected.sort((a,b)=>a.id-b.id);ctx.header(base.partnerId===0?t('aiAssistant'):base.partnerName||t('聊天'),true,{nativeAppBar:true,shortcuts:false,titleMarkup:`<div class="chat-title"><span class="chat-session-avatar ${base.partnerId===0?'is-assistant':''}">${base.partnerId===0?assistantIcon():imageUrl(base.partnerAvatar)?`<img src="${escape(imageUrl(base.partnerAvatar))}" alt="">`:escape([...(base.partnerName||t('unknownUser'))][0])}</span><strong>${escape(base.partnerId===0?t('aiAssistant'):base.partnerName||t('unknownUser'))}</strong></div>`});for(const action of['chat-audio','chat-video']){const control=document.querySelector('[data-action='+action+']');if(control){control.hidden=base.partnerId===0;control.disabled=false;}}
  container.setAttribute('aria-busy','false');container.innerHTML=messages.map(m=>`<article class="message ${m.senderId===owner.user.id?'mine':''}" data-message-id="${m.id}"><div>${m.deletedAt?t('此訊息已刪除'):attachment(m.content)}</div><time>${escape(clock(m.createdAt))}${m.senderId===owner.user.id?` · ${m.id<=(snapshot.partnerReadMessageId||0)?t('已讀'):t('已送出')}`:''}</time>${m.senderId===owner.user.id&&!m.deletedAt?`<div class="message-actions">${button(t('編輯'),'edit-message','secondary',`data-id="${m.id}"`)}${button(t('刪除'),'delete-message','secondary',`data-id="${m.id}"`)}</div>`:''}</article>`).join('')||empty(t('開始聊天'),t('輸入訊息，與對方聯繫。'));
  ctx.find('#chat-history-more').innerHTML=!last?button(t('載入更早的訊息'),'older-messages','secondary'):'';
  requestAnimationFrame(()=>{if(!ctx.active())return;if(atBottom&&!more){main.scrollTop=main.scrollHeight;}else if(anchorId){const replacement=container.querySelector(`[data-message-id="${anchorId}"]`);if(replacement)main.scrollTop+=replacement.getBoundingClientRect().top-main.getBoundingClientRect().top-offset;}});
  const incoming=messages.filter(m=>m.receiverId===owner.user.id).sort((a,b)=>b.id-a.id)[0];
  if(incoming&&incoming.id>readId&&document.visibilityState==='visible'){try{await ctx.api.command('chat.read',{sessionId:id,messageId:incoming.id,page:incoming.page});if(ctx.active())readId=incoming.id;}catch(e){if(ctx.active()&&e.name!=='AbortError')ctx.find('#chat-connection').textContent=t('訊息已載入，已讀狀態更新暫時無法確認。');}}
 }finally{busy=false;if(queued&&ctx.active()){queued=false;await load();}}}
 function support(result){if(!ctx.active())return;const el=ctx.find('#chat-support-notice');el.hidden=!result?.humanSupportRequired;el.textContent=result?.humanSupportRequired?t('智慧客服已記錄問題，需要人工支援。請留意後續訊息。'):'';}
 for(const[type,action]of[['audio','chat-audio'],['video','chat-video']])ctx.action(action,async()=>{if(!snapshot||snapshot.partnerId<=0)return;const module=await import('./calls.js');if(ctx.active())await module.startCall({sessionId:id,callType:type});});
 function composeMode(){const cancel=document.querySelector('[data-action=cancel-edit-message]');cancel.hidden=!editing;input.placeholder=editing?'Edit message...':t('enterMessage');const send=document.querySelector('[data-form=chat-send] button[type=submit]');send.setAttribute('aria-label',t(editing?'saveEditedMessage':'sendMessage'));send.innerHTML=mi(editing?'check':'send');}
 ctx.form('chat-send',async values=>{const content=values.content.trim();if(!content)return;const message=editing,revision=composerRevision;const result=await ctx.api.command(message?'chat.edit':'chat.send',{sessionId:id,content,...(message?{messageId:message.id,page:message.page}:{})});if(!ctx.active())return;if(composerRevision===revision&&editing===message&&input.value.trim()===content){input.value='';editing=null;composeMode();}support(result);await load();});
 ctx.action('edit-message',el=>{const m=messages.find(m=>m.id===Number(el.dataset.id)&&m.senderId===owner.user.id);if(!m)return;composerRevision++;editing=m;input.value=m.content;composeMode();input.focus();});
 ctx.action('cancel-edit-message',()=>{composerRevision++;editing=null;input.value='';composeMode();input.focus();});
 ctx.action('delete-message',async el=>{const m=messages.find(m=>m.id===Number(el.dataset.id));if(!m||!confirm(t('確定刪除這則訊息？')))return;await ctx.api.command('chat.delete',{sessionId:id,messageId:m.id,page:m.page});await load();});
 ctx.action('clear-messages',async()=>{if(!confirm(t('確定清除此會話的訊息？')))return;await ctx.api.command('chat.clear',{sessionId:id});pages=1;await load();});
 ctx.action('refresh-messages',()=>load());ctx.action('older-messages',()=>load(true));ctx.action('chat-image',()=>file.click());
 file.addEventListener('change',async()=>{const selected=file.files?.[0];if(!selected)return;const button=document.querySelector('[data-action=chat-image]');button.disabled=true;
  try{if(selected.size>10*1024*1024)throw Error('圖片大小不能超過 10MB。');const bytes=new Uint8Array(await selected.arrayBuffer());let binary='';for(let n=0;n<bytes.length;n+=16384)binary+=String.fromCharCode(...bytes.subarray(n,n+16384));const uploaded=await ctx.api.command('files.upload',{name:selected.name,base64:btoa(binary),businessType:'CHAT',sessionId:id,isPublic:true});const result=await ctx.api.command('chat.send',{sessionId:id,content:uploaded.url});if(ctx.active()){support(result);await load();}}
  catch(e){if(ctx.active()&&e.name!=='AbortError')ctx.toast(e.message);}
  finally{if(file.isConnected)file.value='';if(button.isConnected)button.disabled=false;}
 },{signal:ctx.signal});
 input.addEventListener('input',()=>{composerRevision++;if(!ctx.active()||!snapshot||snapshot.partnerId===0)return;clearTimeout(typingTimer);if(!typing){typing=true;ctx.api.command('chat.typing',{sessionId:id,active:true}).catch(()=>{});}typingTimer=setTimeout(()=>{typing=false;ctx.api.command('chat.typing',{sessionId:id,active:false}).catch(()=>{});},2500);},{signal:ctx.signal});
 ctx.cleanup(()=>clearTimeout(typingTimer));await realtime(ctx,()=>load().catch(e=>{if(ctx.active())ctx.toast(e.message);}));await load();if(ctx.active())await bindChatExtras(ctx,{sessionId:id,snapshot:()=>snapshot,refresh:()=>load(),onSupport:support});
}
