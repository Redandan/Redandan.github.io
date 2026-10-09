((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
e6s(d,e){var x=new B.CE(e,d,A.aX("WebRTCManager"))
x.bYd()
return x},
CE:function CE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bY1:function bY1(d,e){this.a=d
this.b=e},
bXS:function bXS(d){this.a=d},
bXT:function bXT(d){this.a=d},
bXU:function bXU(d){this.a=d},
bXV:function bXV(d){this.a=d},
bXW:function bXW(d){this.a=d},
bXX:function bXX(d){this.a=d},
bXY:function bXY(d){this.a=d},
bXZ:function bXZ(d){this.a=d},
bY2:function bY2(d,e){this.a=d
this.b=e},
bY_:function bY_(d,e){this.a=d
this.b=e},
bY0:function bY0(d){this.a=d},
bY3:function bY3(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[113]
B.CE.prototype={
XU(d){return this.dvz(d)},
dvz(d){var x=0,w=A.l(y.e),v,u=this
var $async$XU=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zz(new B.bY1(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XU)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XU,w)},
bYd(){var x=this,w=x.a
x.y=w.gdlL().eg(new B.bXS(x),new B.bXT(x))
x.z=w.gdCe().eg(new B.bXU(x),new B.bXV(x))
x.Q=w.gdvs().eg(new B.bXW(x),new B.bXX(x))
x.as=w.gcmb().eg(new B.bXY(x),new B.bXZ(x))},
acp(d){return this.cmj(d)},
cmj(d){var x=0,w=A.l(y.e),v,u=this
var $async$acp=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zz(new B.bY2(u,d),"startAudioCall","Failed to start audio call",y.e),$async$acp)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$acp,w)},
qG(d){return this.dkm(d)},
dkm(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qG=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.zz(new B.bY_(u,d),"answerCall",t,y.e),$async$qG)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qG,w)},
tT(){var x=0,w=A.l(y.f),v=this
var $async$tT=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.zz(new B.bY0(v),"endCall","Failed to end call",y.p),$async$tT)
case 2:return A.j(null,w)}})
return A.k($async$tT,w)},
bLv(){return D.dvt(new B.bY3(this),"toggleAudio","Failed to switch audio")},
ckY(d){this.e=d},
ckW(d){this.f=d},
ckX(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a9(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckV(d){this.w=d},
gbHT(){return this.d},
gaLI(){return this.a.gaLI()},
gaLN(){return this.a.gaLN()},
gaAC(){return this.a.gaAC()},
bjn(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bjn=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.f,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.ag()
u=v.z
if(u!=null)u.ag()
u=v.Q
if(u!=null)u.ag()
u=v.as
if(u!=null)u.ag()
x=2
return A.c(v.a.iu(),$async$bjn)
case 2:v.bYd()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bjn,w)},
iu(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$iu=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLI()?6:7
break
case 6:x=8
return A.c(r.tT(),$async$iu)
case 8:case 7:x=9
return A.c(r.iu(),$async$iu)
case 9:p.k(C.f,"\u2705 [WebRTC Manager] WebRTC Manager reset successfully",null,null)
v=1
x=5
break
case 3:v=2
o=u.pop()
s=A.u(o)
p.k(C.v,"\u274c [WebRTC Manager] Failed to reset WebRTC Manager: "+A.b(s),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$iu,w)},
$ia5w:1,
$ia73:1}
var z=a.updateTypes(["~(uZ)"])
B.bY1.prototype={
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
return A.c(s.bjn(),$async$$0)
case 5:case 4:s.a.bNN(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.t,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zY(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.dt(C.dc,null,y.b),$async$$0)
case 10:if(!t.y){r.k(C.v,"\u274c [WebRTC Manager] Failed to establish SSE connection",null,null)
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
$S:42}
B.bXS.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bI(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aQ(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:22}
B.bXT.prototype={
$1(d){return this.a.c.k(C.v,"Call state subscription error: "+A.b(d),null,null)},
$S:10}
B.bXU.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:z+0}
B.bXV.prototype={
$1(d){return this.a.c.k(C.v,"Remote stream subscription error: "+A.b(d),null,null)},
$S:10}
B.bXW.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.f,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.f,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.f,"   - Call data type: "+A.al(d).l(0),u,u)
w=d.gcu()
s.k(C.f,"   - Call data keys: "+A.b(w.cJ(w)),u,u)
s.k(C.f,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.f,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.u(v)
s.k(C.v,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.b(x),u,u)}}else s.k(C.t,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:22}
B.bXX.prototype={
$1(d){return this.a.c.k(C.v,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:10}
B.bXY.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:8}
B.bXZ.prototype={
$1(d){return this.a.c.k(C.v,"Speaking subscription error: "+A.b(d),null,null)},
$S:10}
B.bY2.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:q=u.a
if(!q.d){q.c.k(C.t,"\u26a0\ufe0f [WebRTC Manager] WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=q.c
s=u.b
t.k(C.f,"\ud83d\udcde [WebRTC Manager] Starting audio call to: "+s,null,null)
q=q.a
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLI(),null,null)
x=3
return A.c(q.bej(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.t,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:42}
B.bY_.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.t,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.f,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qG(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:42}
B.bY0.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.t,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tT(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:82}
B.bY3.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.t,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLv()},
$S:27};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CE,A.G)
w(A.bw,[B.bY1,B.bY2,B.bY_,B.bY0,B.bY3])
w(A.by,[B.bXS,B.bXT,B.bXU,B.bXV,B.bXW,B.bXX,B.bXY,B.bXZ])})()
A.aV(b.typeUniverse,JSON.parse('{"CE":{"a5w":[],"a73":[]}}'))
var y={p:A.A("b9"),e:A.A("K"),b:A.A("@"),f:A.A("~")}};
(a=>{a["GC8YlTAKD1rpfPC0d5F9HkFruZE="]=a.current})($__dart_deferred_initializers__);