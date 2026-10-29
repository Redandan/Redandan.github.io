import * as api from'./api.js';
import{escape,toast}from'./ui.js';
import{uiText}from'./ui-text.js';
let active,starting=false,generation=0,panel;
const live=c=>active===c&&!c.closed;
const phases={prepared:'準備通話',starting:'正在發起通話',ringing:'等待對方接聽',incoming:'來電',connecting:'正在連接媒體',connected:'通話中',reconnecting:'連線中斷，正在確認原通話',ended:'通話已結束'};
function currentPanel(){if(!panel){panel=document.createElement('aside');panel.id='buyer-call';panel.setAttribute('role','region');panel.setAttribute('aria-label',uiText('通話'));document.body.append(panel);const nav=document.querySelector('#buyer-nav');if(nav)new ResizeObserver(()=>{document.documentElement.style.setProperty('--call-nav-height',nav.getBoundingClientRect().height+'px');}).observe(nav);panel.addEventListener('click',e=>{const action=e.target.closest('[data-call-action]')?.dataset.callAction;if(!action)return;void control(action).catch(error=>toast(error.message||uiText('通話操作未完成。')));});}return panel;}
function draw(c){
 const root=currentPanel(),label=value=>escape(uiText(value));root.hidden=false;
 if(c.closed){root.classList.remove('call-minimized');root.innerHTML='<div class="row-between"><strong>'+escape(c.message||uiText(phases.ended))+'</strong><button type="button" class="secondary" data-call-action="dismiss">'+label('關閉')+'</button></div>';return;}
 root.classList.toggle('call-minimized',!!c.minimized);
 const oldLocal=root.querySelector('[data-call-local]'),oldRemote=root.querySelector('[data-call-remote]');
 root.innerHTML='<div class="row-between"><div><strong>'+escape(c.view.peerName||uiText('使用者 {id}',{id:c.view.peerId}))+'</strong><p data-call-status role="status">'+escape(phases[c.phase]?uiText(phases[c.phase]):c.phase)+'</p></div><button type="button" class="secondary" data-call-action="minimize">'+label(c.minimized?'展開':'縮小')+'</button></div>'+
  '<div class="call-expanded"><p>'+label(c.view.callType==='video'?'視訊通話':'語音通話')+'</p>'+
  (c.phase==='incoming'?'<p>'+label(c.view.callType==='video'?'接聽後會要求麥克風及鏡頭權限。':'接聽後會要求麥克風權限。')+'</p><div class="inline-actions"><button class="primary" type="button" data-call-action="accept" '+(c.answering?'disabled aria-busy="true"':'')+'>'+label(c.view.callType==='video'?'接聽視訊':'接聽語音')+'</button><button class="secondary" type="button" data-call-action="reject">'+label('拒絕')+'</button></div>':
   '<div class="call-media"></div><div class="inline-actions"><button class="secondary" type="button" data-call-action="mute">'+label(c.muted?'解除靜音':'麥克風靜音')+'</button>'+
   (c.view.callType==='video'?'<button class="secondary" type="button" data-call-action="camera">'+label(c.cameraUnavailable?'重新開啟鏡頭':c.cameraOff?'開啟鏡頭':'關閉鏡頭')+'</button><button class="secondary" type="button" data-call-action="switch-camera">'+label('切換鏡頭')+'</button>':'')+
   '<button class="secondary" type="button" data-call-action="play" '+(c.autoplayBlocked?'':'hidden')+'>'+label(c.view.callType==='video'?'播放對方聲音／影像':'播放對方聲音')+'</button><button class="primary" type="button" data-call-action="hangup">'+label('結束通話')+'</button></div>'+(c.mediaMessage?'<p role="status">'+escape(c.mediaMessage)+'</p>':''))+'</div>';
 if(c.phase!=='incoming'){
  const media=root.querySelector('.call-media');
  const remote=oldRemote||document.createElement('video'),local=oldLocal||document.createElement('video');
  remote.dataset.callRemote='';remote.autoplay=true;remote.playsInline=true;remote.controls=false;
  local.dataset.callLocal='';local.autoplay=true;local.playsInline=true;local.muted=true;
  remote.hidden=c.view.callType!=='video';local.hidden=c.view.callType!=='video';media.append(remote,local);
  if(c.local&&local.srcObject!==c.local){local.srcObject=c.local;void local.play().catch(()=>{});}if(c.remote&&remote.srcObject!==c.remote)remote.srcObject=c.remote;
  if(c.remote)void remote.play().catch(()=>{if(live(c)){c.autoplayBlocked=true;root.querySelector('[data-call-action=play]')?.removeAttribute('hidden');}});
 }
}
function make(view){return{handle:view.handle,view,phase:view.phase,closed:false,localQueue:[],remoteQueue:[],signalReady:false,remoteReady:false,facing:'user',statusReads:0};}
async function stillOwned(c){
 const view=await api.command('call.state');if(!live(c)||view.handle!==c.handle){if(live(c))await finish(c,{notify:false});throw new DOMException('Original call retired','AbortError');}return view;
}
function configuration(value){
 if(!value||!Array.isArray(value.iceServers))throw Error(uiText('通話設定尚未就緒。'));
 return{iceServers:value.iceServers.map(server=>({urls:server.urls,...(typeof server.username==='string'?{username:server.username}:{}),...(typeof server.credential==='string'?{credential:server.credential}:{})})),iceCandidatePoolSize:value.iceCandidatePoolSize??10,bundlePolicy:value.bundlePolicy||'max-bundle',rtcpMuxPolicy:value.rtcpMuxPolicy||'require',iceTransportPolicy:value.iceTransportPolicy||'all'};
}
function observeLocalTrack(c,track){
 track.addEventListener('ended',()=>{
  if(!live(c)||!c.local?.getTracks().includes(track))return;
  if(track.kind==='audio'){void finish(c,{message:uiText('麥克風已中斷，通話已結束。')});return;}
  c.cameraOff=true;c.cameraUnavailable=true;c.mediaMessage=uiText('鏡頭已中斷，語音仍可使用。請自行重新開啟鏡頭。');draw(c);
 });
}
async function media(c,config){
 if(!navigator.mediaDevices?.getUserMedia||typeof RTCPeerConnection!=='function')throw Error(uiText('此瀏覽器目前無法使用語音／視訊通話。'));
 const peer=new RTCPeerConnection(configuration(config));c.pc=peer;
 peer.onicecandidate=event=>{if(!live(c)||!event.candidate)return;if(c.localQueue.length>=256)return;c.localQueue.push(event.candidate.toJSON());void flushLocal(c);};
 peer.ontrack=event=>{if(!live(c))return;c.remote??=new MediaStream();for(const track of(event.streams[0]?.getTracks()||[event.track]))if(!c.remote.getTracks().some(t=>t.id===track.id))c.remote.addTrack(track);draw(c);};
 peer.onconnectionstatechange=()=>{if(!live(c))return;if(peer.connectionState==='connected'){clearTimeout(c.connectionTimer);clearTimeout(c.statusTimer);c.phase='connected';c.statusReads=0;draw(c);}else if(['failed','closed'].includes(peer.connectionState)){void finish(c,{message:uiText('媒體連線已結束。')});}else if(peer.connectionState==='disconnected'){c.phase='reconnecting';draw(c);void reconcile(c);}};
 const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true},video:c.view.callType==='video'?{facingMode:'user'}:false});
 if(!live(c)){for(const track of stream.getTracks())track.stop();return false;}
 c.local=stream;
 if(!stream.getAudioTracks().some(t=>t.readyState==='live')||(c.view.callType==='video'&&!stream.getVideoTracks().some(t=>t.readyState==='live')))throw Error(uiText('麥克風或鏡頭未提供可用媒體。'));
 for(const track of stream.getTracks()){observeLocalTrack(c,track);peer.addTrack(track,stream);}
 c.connectionTimer=setTimeout(()=>{if(live(c)&&c.pc?.connectionState!=='connected')void finish(c,{message:uiText('媒體連線逾時，通話已結束。')});},30000);
 draw(c);return true;
}
async function flushLocal(c){
 if(!live(c)||!c.signalReady||!c.view.callId||c.flushingLocal)return;
 c.flushingLocal=true;try{while(live(c)&&c.localQueue.length){const candidate=c.localQueue.shift();try{await api.command('call.ice',{handle:c.handle,...candidate});}catch(error){if(error.code==='CALL_RETIRED'){await finish(c,{notify:false});return;}}}}finally{c.flushingLocal=false;}
}
async function flushRemote(c){
 if(!live(c)||!c.pc||!c.remoteReady||c.flushingRemote)return;c.flushingRemote=true;
 try{while(live(c)&&c.remoteQueue.length){const candidate=c.remoteQueue.shift();try{await c.pc.addIceCandidate(candidate);}catch{/* Other valid candidates can still connect the original peer. */}}}finally{c.flushingRemote=false;}
}
export async function startCall({sessionId,callType}){
 if(starting||active)throw Error(uiText('請先結束目前的通話。'));starting=true;const admitted=generation;let c,view;
 try{
  view=await api.command('call.prepare',{sessionId,callType});
  if(admitted!==generation){void api.command('call.hangup',{handle:view.handle}).catch(()=>{});return;}
  c=make(view);active=c;draw(c);await stillOwned(c);if(!await media(c,view.configuration))return;
  const offer=await c.pc.createOffer();if(!live(c))return;await c.pc.setLocalDescription(offer);if(!live(c))return;c.phase='starting';draw(c);
  const result=await api.command('call.offer',{handle:c.handle,sdp:offer.sdp});if(!live(c))return;
  c.view={...c.view,...result};if(c.phase!=='connected'&&c.phase!=='connecting')c.phase='ringing';c.signalReady=true;draw(c);await flushLocal(c);
 }catch(error){if(c&&live(c))await finish(c,{message:error.name==='NotAllowedError'?uiText('未取得麥克風或鏡頭權限。'):uiText('通話未能確認，已停止本機媒體。')});else if(view?.handle)void api.command('call.hangup',{handle:view.handle}).catch(()=>{});if(error.name!=='AbortError')throw error;}
 finally{starting=false;}
}
async function accept(c){
 if(!live(c)||c.answering)return;c.answering=true;draw(c);
 try{
  const state=await stillOwned(c);const status=await api.command('call.status',{handle:c.handle});if(!live(c)||status.phase==='ended')return;
  const config=await api.command('call.configuration',{handle:c.handle});if(!live(c))return;
  c.phase='connecting';draw(c);if(!await media(c,config.configuration))return;
  await c.pc.setRemoteDescription({type:'offer',sdp:state.sdp});if(!live(c))return;c.remoteReady=true;await flushRemote(c);
  const answer=await c.pc.createAnswer();if(!live(c))return;await c.pc.setLocalDescription(answer);if(!live(c))return;
  const result=await api.command('call.answer',{handle:c.handle,accepted:true,sdp:answer.sdp});if(!live(c))return;c.view={...c.view,...result};c.signalReady=true;await flushLocal(c);
 }catch(error){if(live(c))await finish(c,{message:error.name==='NotAllowedError'?uiText('未取得麥克風或鏡頭權限。'):uiText('接聽未完成，已停止本機媒體。')});if(error.name!=='AbortError')throw error;}
 finally{c.answering=false;if(live(c))draw(c);}
}
async function reconcile(c){
 if(!live(c)||!c.view.callId||c.checkingStatus)return;c.checkingStatus=true;
 try{const value=await api.command('call.status',{handle:c.handle});if(!live(c))return;if(value.phase==='ended'){await finish(c,{notify:false});return;}if(c.pc?.connectionState!=='connected'&&++c.statusReads<=3){clearTimeout(c.statusTimer);c.statusTimer=setTimeout(()=>{void reconcile(c);},3000);}}
 catch(error){if(live(c)&&error.code==='CALL_RETIRED')await finish(c,{notify:false});}
 finally{c.checkingStatus=false;}
}
async function finish(c,{notify=true,reject=false,message=uiText('通話已結束。')}={}){
 if(c.closed)return;c.closed=true;c.message=message;clearTimeout(c.connectionTimer);clearTimeout(c.statusTimer);
 c.localQueue.length=0;c.remoteQueue.length=0;
 for(const stream of[c.local,c.remote])for(const track of stream?.getTracks()||[])track.stop();
 if(c.pc){c.pc.ontrack=null;c.pc.onicecandidate=null;c.pc.onconnectionstatechange=null;c.pc.close();}
 if(active===c){active=null;draw(c);}
 if(notify)try{await api.command(reject?'call.answer':'call.hangup',{handle:c.handle,...(reject?{accepted:false}:{})});}catch{/* Local cleanup must not depend on a signaling receipt. */}
}
async function switchCamera(c,{restart=false}={}){
 if(!live(c)||c.switching||c.view.callType!=='video')return;c.switching=true;
 let acquired;try{const facing=restart?c.facing:c.facing==='user'?'environment':'user';acquired=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:{ideal:facing}}});if(!live(c)){acquired.getTracks().forEach(t=>t.stop());return;}const next=acquired.getVideoTracks()[0],sender=c.pc.getSenders().find(s=>s.track?.kind==='video');if(!next||next.readyState!=='live'||!sender)throw Error(uiText('目前無法切換鏡頭。'));await sender.replaceTrack(next);if(!live(c)){acquired.getTracks().forEach(t=>t.stop());return;}for(const old of c.local.getVideoTracks()){c.local.removeTrack(old);old.stop();}next.enabled=restart||!c.cameraOff;c.local.addTrack(next);observeLocalTrack(c,next);c.facing=facing;c.cameraOff=!next.enabled;c.cameraUnavailable=false;c.mediaMessage='';draw(c);}
 catch(error){acquired?.getTracks().forEach(t=>t.stop());throw error;}finally{c.switching=false;}
}
async function control(action){
 const c=active;if(action==='dismiss'){if(!c&&panel)panel.hidden=true;return;}if(!c)return;
 if(action==='accept')return accept(c);if(action==='reject')return finish(c,{reject:true});if(action==='hangup')return finish(c);
 if(action==='minimize'){c.minimized=!c.minimized;draw(c);}
 if(action==='mute'){c.muted=!c.muted;for(const track of c.local?.getAudioTracks()||[])track.enabled=!c.muted;draw(c);}
 if(action==='camera'){if(c.cameraUnavailable||!c.local?.getVideoTracks().some(t=>t.readyState==='live'))return switchCamera(c,{restart:true});c.cameraOff=!c.cameraOff;for(const track of c.local?.getVideoTracks()||[])track.enabled=!c.cameraOff;draw(c);}
 if(action==='switch-camera')return switchCamera(c);
 if(action==='play'){const remote=panel.querySelector('[data-call-remote]');await remote?.play();c.autoplayBlocked=false;draw(c);}
}
export async function onCallEvent(value){
 if(value.event==='ended'){if(active?.handle===value.handle)await finish(active,{notify:false,message:value.reason==='answered_elsewhere'?uiText('已在其他裝置接聽。'):value.reason==='rejected'?uiText('對方已拒絕通話。'):uiText('通話已結束。')});return;}
 if(value.event==='offer'){
  if(active)return;const admitted=generation,state=await api.command('call.state');if(admitted!==generation||state.handle!==value.handle||state.phase!=='incoming'||active)return;
  const c=make(state);active=c;draw(c);return;
 }
 const c=active;if(!c||c.handle!==value.handle)return;
 c.view={...c.view,...value};
 if(value.event==='initiated'){if(c.phase==='starting'||c.phase==='prepared')c.phase='ringing';draw(c);return;}
 if(value.event==='answer'){
  if(c.view.incoming||!c.pc||c.remoteReady)return;try{await c.pc.setRemoteDescription({type:'answer',sdp:value.sdp});}catch{if(live(c))await finish(c,{message:uiText('媒體回應無法確認，已停止本機媒體。')});return;}if(!live(c))return;c.remoteReady=true;c.phase=c.pc.connectionState==='connected'?'connected':'connecting';draw(c);await flushRemote(c);return;
 }
 if(value.event==='ice'){if(c.remoteQueue.length<256)c.remoteQueue.push({candidate:value.candidate,sdpMid:value.sdpMid,sdpMLineIndex:value.sdpMLineIndex});await flushRemote(c);}
}
addEventListener('agora-buyer-auth',()=>{generation++;if(active)void finish(active,{notify:false});});
addEventListener('pagehide',()=>{generation++;if(active)void finish(active);});
addEventListener('agora-buyer-realtime',event=>{let value;try{value=JSON.parse(event.detail);}catch{return;}if(active&&['connection.restored','connection.lost'].includes(value.event))void reconcile(active);});
addEventListener('pageshow',event=>{if(event.persisted)void api.command('call.state').then(value=>value.handle?api.command('call.hangup',{handle:value.handle}):undefined).catch(()=>{});});
