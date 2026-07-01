((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
dZk(d,e){var x=new B.Ge(e,d,A.aU("WebRTCManager"))
x.bOW()
return x},
Ge:function Ge(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bQZ:function bQZ(d,e){this.a=d
this.b=e},
bQP:function bQP(d){this.a=d},
bQQ:function bQQ(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQS:function bQS(d){this.a=d},
bQT:function bQT(d){this.a=d},
bQU:function bQU(d){this.a=d},
bQV:function bQV(d){this.a=d},
bQW:function bQW(d){this.a=d},
bR_:function bR_(d,e){this.a=d
this.b=e},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQY:function bQY(d){this.a=d},
bR0:function bR0(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[24]
B=a.updateHolder(c[4],B)
B.Ge.prototype={
Pa(d){return this.djX(d)},
djX(d){var x=0,w=A.m(y.e),v,u=this
var $async$Pa=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yT(new B.bQZ(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$Pa)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Pa,w)},
bOW(){var x=this,w=x.a
x.y=w.gda9().e5(new B.bQP(x),new B.bQQ(x))
x.z=w.gdqc().e5(new B.bQR(x),new B.bQS(x))
x.Q=w.gdjP().e5(new B.bQT(x),new B.bQU(x))
x.as=w.gcbY().e5(new B.bQV(x),new B.bQW(x))},
Uv(d){return this.cc5(d)},
cc5(d){var x=0,w=A.m(y.e),v,u=this
var $async$Uv=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yT(new B.bR_(u,d),"startAudioCall","Failed to start audio call",y.e),$async$Uv)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Uv,w)},
qb(d){return this.d8N(d)},
d8N(d){var x=0,w=A.m(y.e),v,u=this,t
var $async$qb=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yT(new B.bQX(u,d),"answerCall",t,y.e),$async$qb)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$qb,w)},
t1(){var x=0,w=A.m(y.f),v=this
var $async$t1=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yT(new B.bQY(v),"endCall","Failed to end call",y.p),$async$t1)
case 2:return A.k(null,w)}})
return A.l($async$t1,w)},
bCB(){return D.dks(new B.bR0(this),"toggleAudio","Failed to switch audio")},
caN(d){this.e=d},
caL(d){this.f=d},
caM(d){var x=null,w=this.c
w.k(C.d,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.d,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.d,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.d,"   - New callback: true",x,x)
w.k(C.d,"   - Callback type: "+J.aQ(d).l(0),x,x)
this.r=d
w.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
caK(d){this.w=d},
gbzc(){return this.d},
ga4C(){return this.a.ga4C()},
ga4H(){return this.a.ga4H()},
ga22(){return this.a.ga22()},
aqQ(){var x=0,w=A.m(y.f),v=this,u,t
var $async$aqQ=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.d,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.ak()
u=v.z
if(u!=null)u.ak()
u=v.Q
if(u!=null)u.ak()
u=v.as
if(u!=null)u.ak()
x=2
return A.c(v.a.ik(),$async$aqQ)
case 2:v.bOW()
t.k(C.d,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.k(null,w)}})
return A.l($async$aqQ,w)},
ik(){var x=0,w=A.m(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$ik=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.d,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.ga4C()?6:7
break
case 6:x=8
return A.c(r.t1(),$async$ik)
case 8:case 7:x=9
return A.c(r.ik(),$async$ik)
case 9:p.k(C.d,"\u2705 [WebRTC Manager] WebRTC Manager reset successfully",null,null)
v=1
x=5
break
case 3:v=2
o=u.pop()
s=A.t(o)
p.k(C.u,"\u274c [WebRTC Manager] Failed to reset WebRTC Manager: "+A.a(s),null,null)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$ik,w)},
$ia5k:1,
$iaxG:1}
var z=a.updateTypes([])
B.bQZ.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.c
q=u.b
r.k(C.d,"\ud83d\ude80 [WebRTC Manager] Initializing WebRTC Manager for user: "+q,null,null)
r.k(C.d,"\ud83d\udcca [WebRTC Manager] Current state: isInitialized="+s.d,null,null)
x=s.d?3:4
break
case 3:r.k(C.d,"\ud83d\udd04 [WebRTC Manager] Already initialized, reinitializing WebRTC service...",null,null)
x=5
return A.c(s.aqQ(),$async$$0)
case 5:case 4:s.a.bER(q)
r.k(C.d,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.d,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.w?6:8
break
case 6:r.k(C.p,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.ve(q),$async$$0)
case 9:r.k(C.d,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.d_(C.cl,null,y.b),$async$$0)
case 10:if(!t.w){r.k(C.u,"\u274c [WebRTC Manager] Failed to establish SSE connection",null,null)
v=!1
x=1
break}r.k(C.d,"\u2705 [WebRTC Manager] SSE connection established",null,null)
x=7
break
case 8:r.k(C.d,"\u2705 [WebRTC Manager] SSE already connected",null,null)
case 7:s.d=!0
r.k(C.d,"\ud83c\udf89 [WebRTC Manager] WebRTC Manager initialized successfully for user: "+q,null,null)
v=!0
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:95}
B.bQP.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.d,"Call state changed: "+A.a(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bQ(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aW(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:20}
B.bQQ.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.a(d),null,null)},
$S:7}
B.bQR.prototype={
$1(d){var x=this.a
x.c.k(C.d,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:439}
B.bQS.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.a(d),null,null)},
$S:7}
B.bQT.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.d,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.d,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.d,"   - Call data type: "+A.ak(d).l(0),u,u)
w=d.gcr()
s.k(C.d,"   - Call data keys: "+A.a(w.d0(w)),u,u)
s.k(C.d,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.d,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.t(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.a(x),u,u)}}else s.k(C.p,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:20}
B.bQU.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.a(d),null,null)},
$S:7}
B.bQV.prototype={
$1(d){this.a.c.k(C.d,"Speaking status changed: "+d,null,null)},
$S:6}
B.bQW.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.a(d),null,null)},
$S:7}
B.bR_.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:q=u.a
if(!q.d){q.c.k(C.p,"\u26a0\ufe0f [WebRTC Manager] WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=q.c
s=u.b
t.k(C.d,"\ud83d\udcde [WebRTC Manager] Starting audio call to: "+s,null,null)
q=q.a
t.k(C.d,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.ga4C(),null,null)
x=3
return A.c(q.ajR(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.d,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.p,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:95}
B.bQX.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.p,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.d,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qb(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:95}
B.bQY.prototype={
$0(){var x=0,w=A.m(y.p),v,u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.p,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.d,"Ending call",null,null)
x=3
return A.c(t.a.t1(),$async$$0)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:80}
B.bR0.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.p,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bCB()},
$S:35};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ge,A.U)
w(A.h6,[B.bQZ,B.bR_,B.bQX,B.bQY,B.bR0])
w(A.ff,[B.bQP,B.bQQ,B.bQR,B.bQS,B.bQT,B.bQU,B.bQV,B.bQW])})()
A.fQ(b.typeUniverse,JSON.parse('{"Ge":{"a5k":[],"axG":[]}}'))
var y={p:A.au("bn"),e:A.au("K"),b:A.au("@"),f:A.au("~")}};
(a=>{a["mDoU7jKAinr744caw3M9L65BHZc="]=a.current})($__dart_deferred_initializers__);