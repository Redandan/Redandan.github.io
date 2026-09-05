((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e0K(d,e){var x=new B.HE(e,d,A.aX("WebRTCManager"))
x.bXR()
return x},
HE:function HE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bUx:function bUx(d,e){this.a=d
this.b=e},
bUn:function bUn(d){this.a=d},
bUo:function bUo(d){this.a=d},
bUp:function bUp(d){this.a=d},
bUq:function bUq(d){this.a=d},
bUr:function bUr(d){this.a=d},
bUs:function bUs(d){this.a=d},
bUt:function bUt(d){this.a=d},
bUu:function bUu(d){this.a=d},
bUy:function bUy(d,e){this.a=d
this.b=e},
bUv:function bUv(d,e){this.a=d
this.b=e},
bUw:function bUw(d){this.a=d},
bUz:function bUz(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[27]
B=a.updateHolder(c[4],B)
B.HE.prototype={
XD(d){return this.dv8(d)},
dv8(d){var x=0,w=A.l(y.e),v,u=this
var $async$XD=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yO(new B.bUx(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XD)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XD,w)},
bXR(){var x=this,w=x.a
x.y=w.gdlk().ed(new B.bUn(x),new B.bUo(x))
x.z=w.gdBH().ed(new B.bUp(x),new B.bUq(x))
x.Q=w.gdv1().ed(new B.bUr(x),new B.bUs(x))
x.as=w.gclF().ed(new B.bUt(x),new B.bUu(x))},
ac2(d){return this.clN(d)},
clN(d){var x=0,w=A.l(y.e),v,u=this
var $async$ac2=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yO(new B.bUy(u,d),"startAudioCall","Failed to start audio call",y.e),$async$ac2)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ac2,w)},
qp(d){return this.djW(d)},
djW(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qp=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yO(new B.bUv(u,d),"answerCall",t,y.e),$async$qp)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qp,w)},
ty(){var x=0,w=A.l(y.f),v=this
var $async$ty=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yO(new B.bUw(v),"endCall","Failed to end call",y.p),$async$ty)
case 2:return A.j(null,w)}})
return A.k($async$ty,w)},
bLf(){return D.drw(new B.bUz(this),"toggleAudio","Failed to switch audio")},
ckr(d){this.e=d},
ckp(d){this.f=d},
ckq(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a4(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
cko(d){this.w=d},
gbHI(){return this.d},
gaLL(){return this.a.gaLL()},
gaLQ(){return this.a.gaLQ()},
gaAE(){return this.a.gaAE()},
bju(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bju=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.f,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.aj()
u=v.z
if(u!=null)u.aj()
u=v.Q
if(u!=null)u.aj()
u=v.as
if(u!=null)u.aj()
x=2
return A.c(v.a.il(),$async$bju)
case 2:v.bXR()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bju,w)},
il(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$il=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLL()?6:7
break
case 6:x=8
return A.c(r.ty(),$async$il)
case 8:case 7:x=9
return A.c(r.il(),$async$il)
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
return A.k($async$il,w)},
$ia4L:1,
$iawu:1}
var z=a.updateTypes([])
B.bUx.prototype={
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
return A.c(s.bju(),$async$$0)
case 5:case 4:s.a.bNA(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.q,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zt(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.df(C.cy,null,y.b),$async$$0)
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
$S:48}
B.bUn.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bO(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aS(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:21}
B.bUo.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.b(d),null,null)},
$S:7}
B.bUp.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:398}
B.bUq.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.b(d),null,null)},
$S:7}
B.bUr.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.f,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.f,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.f,"   - Call data type: "+A.ak(d).l(0),u,u)
w=d.gcv()
s.k(C.f,"   - Call data keys: "+A.b(w.cX(w)),u,u)
s.k(C.f,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.f,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.u(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.b(x),u,u)}}else s.k(C.q,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:21}
B.bUs.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:7}
B.bUt.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:6}
B.bUu.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.b(d),null,null)},
$S:7}
B.bUy.prototype={
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
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLL(),null,null)
x=3
return A.c(q.bey(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.q,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:48}
B.bUv.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.q,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.f,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qp(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:48}
B.bUw.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.q,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.ty(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:97}
B.bUz.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.q,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLf()},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HE,A.T)
w(A.he,[B.bUx,B.bUy,B.bUv,B.bUw,B.bUz])
w(A.ff,[B.bUn,B.bUo,B.bUp,B.bUq,B.bUr,B.bUs,B.bUt,B.bUu])})()
A.fu(b.typeUniverse,JSON.parse('{"HE":{"a4L":[],"awu":[]}}'))
var y={p:A.au("bn"),e:A.au("N"),b:A.au("@"),f:A.au("~")}};
(a=>{a["RcBBiLrNtSOrwtWggDpUWIu2dOw="]=a.current})($__dart_deferred_initializers__);