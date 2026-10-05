((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e1M(d,e){var x=new B.HF(e,d,A.aW("WebRTCManager"))
x.bXA()
return x},
HF:function HF(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bVl:function bVl(d,e){this.a=d
this.b=e},
bVb:function bVb(d){this.a=d},
bVc:function bVc(d){this.a=d},
bVd:function bVd(d){this.a=d},
bVe:function bVe(d){this.a=d},
bVf:function bVf(d){this.a=d},
bVg:function bVg(d){this.a=d},
bVh:function bVh(d){this.a=d},
bVi:function bVi(d){this.a=d},
bVm:function bVm(d,e){this.a=d
this.b=e},
bVj:function bVj(d,e){this.a=d
this.b=e},
bVk:function bVk(d){this.a=d},
bVn:function bVn(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[27]
B=a.updateHolder(c[4],B)
B.HF.prototype={
Xz(d){return this.duR(d)},
duR(d){var x=0,w=A.l(y.e),v,u=this
var $async$Xz=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yN(new B.bVl(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$Xz)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Xz,w)},
bXA(){var x=this,w=x.a
x.y=w.gdl_().ed(new B.bVb(x),new B.bVc(x))
x.z=w.gdBq().ed(new B.bVd(x),new B.bVe(x))
x.Q=w.gduK().ed(new B.bVf(x),new B.bVg(x))
x.as=w.gclu().ed(new B.bVh(x),new B.bVi(x))},
abZ(d){return this.clC(d)},
clC(d){var x=0,w=A.l(y.e),v,u=this
var $async$abZ=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yN(new B.bVm(u,d),"startAudioCall","Failed to start audio call",y.e),$async$abZ)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$abZ,w)},
qz(d){return this.djA(d)},
djA(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qz=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yN(new B.bVj(u,d),"answerCall",t,y.e),$async$qz)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qz,w)},
tG(){var x=0,w=A.l(y.f),v=this
var $async$tG=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yN(new B.bVk(v),"endCall","Failed to end call",y.p),$async$tG)
case 2:return A.j(null,w)}})
return A.k($async$tG,w)},
bL_(){return D.dsj(new B.bVn(this),"toggleAudio","Failed to switch audio")},
ckg(d){this.e=d},
cke(d){this.f=d},
ckf(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a4(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckd(d){this.w=d},
gbHp(){return this.d},
gaLn(){return this.a.gaLn()},
gaLs(){return this.a.gaLs()},
gaAg(){return this.a.gaAg()},
bj5(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bj5=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.f,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.ai()
u=v.z
if(u!=null)u.ai()
u=v.Q
if(u!=null)u.ai()
u=v.as
if(u!=null)u.ai()
x=2
return A.c(v.a.im(),$async$bj5)
case 2:v.bXA()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bj5,w)},
im(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$im=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLn()?6:7
break
case 6:x=8
return A.c(r.tG(),$async$im)
case 8:case 7:x=9
return A.c(r.im(),$async$im)
case 9:p.k(C.f,"\u2705 [WebRTC Manager] WebRTC Manager reset successfully",null,null)
v=1
x=5
break
case 3:v=2
o=u.pop()
s=A.u(o)
p.k(C.u,"\u274c [WebRTC Manager] Failed to reset WebRTC Manager: "+A.b(s),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$im,w)},
$ia4N:1,
$iawF:1}
var z=a.updateTypes([])
B.bVl.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.c
q=u.b
r.k(C.f,"\ud83d\ude80 [WebRTC Manager] Initializing WebRTC Manager for user: "+q,null,null)
r.k(C.f,"\ud83d\udcca [WebRTC Manager] Current state: isInitialized="+s.d,null,null)
x=s.d?3:4
break
case 3:r.k(C.f,"\ud83d\udd04 [WebRTC Manager] Already initialized, reinitializing WebRTC service...",null,null)
x=5
return A.c(s.bj5(),$async$$0)
case 5:case 4:s.a.bNj(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.q,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zH(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.dg(C.cx,null,y.b),$async$$0)
case 10:if(!t.y){r.k(C.u,"\u274c [WebRTC Manager] Failed to establish SSE connection",null,null)
v=!1
x=1
break}r.k(C.f,"\u2705 [WebRTC Manager] SSE connection established",null,null)
x=7
break
case 8:r.k(C.f,"\u2705 [WebRTC Manager] SSE already connected",null,null)
case 7:s.d=!0
r.k(C.f,"\ud83c\udf89 [WebRTC Manager] WebRTC Manager initialized successfully for user: "+q,null,null)
v=!0
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:49}
B.bVb.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bO(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aT(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:21}
B.bVc.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.b(d),null,null)},
$S:7}
B.bVd.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:502}
B.bVe.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.b(d),null,null)},
$S:7}
B.bVf.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.f,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.f,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.f,"   - Call data type: "+A.ak(d).l(0),u,u)
w=d.gcA()
s.k(C.f,"   - Call data keys: "+A.b(w.cM(w)),u,u)
s.k(C.f,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.f,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.u(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.b(x),u,u)}}else s.k(C.q,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:21}
B.bVg.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:7}
B.bVh.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:6}
B.bVi.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.b(d),null,null)},
$S:7}
B.bVm.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:q=u.a
if(!q.d){q.c.k(C.q,"\u26a0\ufe0f [WebRTC Manager] WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=q.c
s=u.b
t.k(C.f,"\ud83d\udcde [WebRTC Manager] Starting audio call to: "+s,null,null)
q=q.a
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLn(),null,null)
x=3
return A.c(q.be9(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.q,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:49}
B.bVj.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.q,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.f,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qz(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:49}
B.bVk.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.q,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tG(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:100}
B.bVn.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.q,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bL_()},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HF,A.T)
w(A.hc,[B.bVl,B.bVm,B.bVj,B.bVk,B.bVn])
w(A.ff,[B.bVb,B.bVc,B.bVd,B.bVe,B.bVf,B.bVg,B.bVh,B.bVi])})()
A.fu(b.typeUniverse,JSON.parse('{"HF":{"a4N":[],"awF":[]}}'))
var y={p:A.au("bn"),e:A.au("N"),b:A.au("@"),f:A.au("~")}};
(a=>{a["bRJtp4WCuppiv1L7w9FvCJV5HzM="]=a.current})($__dart_deferred_initializers__);