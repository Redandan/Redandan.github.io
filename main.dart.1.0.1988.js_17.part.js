((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
e6a(d,e){var x=new B.CB(e,d,A.aX("WebRTCManager"))
x.bYb()
return x},
CB:function CB(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bXR:function bXR(d,e){this.a=d
this.b=e},
bXH:function bXH(d){this.a=d},
bXI:function bXI(d){this.a=d},
bXJ:function bXJ(d){this.a=d},
bXK:function bXK(d){this.a=d},
bXL:function bXL(d){this.a=d},
bXM:function bXM(d){this.a=d},
bXN:function bXN(d){this.a=d},
bXO:function bXO(d){this.a=d},
bXS:function bXS(d,e){this.a=d
this.b=e},
bXP:function bXP(d,e){this.a=d
this.b=e},
bXQ:function bXQ(d){this.a=d},
bXT:function bXT(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[113]
B.CB.prototype={
XO(d){return this.dvE(d)},
dvE(d){var x=0,w=A.l(y.e),v,u=this
var $async$XO=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zw(new B.bXR(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XO)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XO,w)},
bYb(){var x=this,w=x.a
x.y=w.gdlP().eg(new B.bXH(x),new B.bXI(x))
x.z=w.gdCi().eg(new B.bXJ(x),new B.bXK(x))
x.Q=w.gdvx().eg(new B.bXL(x),new B.bXM(x))
x.as=w.gcmd().eg(new B.bXN(x),new B.bXO(x))},
acn(d){return this.cml(d)},
cml(d){var x=0,w=A.l(y.e),v,u=this
var $async$acn=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zw(new B.bXS(u,d),"startAudioCall","Failed to start audio call",y.e),$async$acn)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$acn,w)},
qF(d){return this.dkq(d)},
dkq(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qF=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.zw(new B.bXP(u,d),"answerCall",t,y.e),$async$qF)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qF,w)},
tS(){var x=0,w=A.l(y.f),v=this
var $async$tS=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.zw(new B.bXQ(v),"endCall","Failed to end call",y.p),$async$tS)
case 2:return A.j(null,w)}})
return A.k($async$tS,w)},
bLt(){return D.dvi(new B.bXT(this),"toggleAudio","Failed to switch audio")},
cl_(d){this.e=d},
ckY(d){this.f=d},
ckZ(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a9(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckX(d){this.w=d},
gbHS(){return this.d},
gaLD(){return this.a.gaLD()},
gaLI(){return this.a.gaLI()},
gaAx(){return this.a.gaAx()},
bjm(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bjm=A.h(function(d,e){if(d===1)return A.i(e,w)
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
return A.c(v.a.iu(),$async$bjm)
case 2:v.bYb()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bjm,w)},
iu(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$iu=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLD()?6:7
break
case 6:x=8
return A.c(r.tS(),$async$iu)
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
B.bXR.prototype={
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
return A.c(s.bjm(),$async$$0)
case 5:case 4:s.a.bNL(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.t,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zV(q),$async$$0)
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
B.bXH.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bI(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aT(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:23}
B.bXI.prototype={
$1(d){return this.a.c.k(C.v,"Call state subscription error: "+A.b(d),null,null)},
$S:10}
B.bXJ.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:z+0}
B.bXK.prototype={
$1(d){return this.a.c.k(C.v,"Remote stream subscription error: "+A.b(d),null,null)},
$S:10}
B.bXL.prototype={
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
$S:23}
B.bXM.prototype={
$1(d){return this.a.c.k(C.v,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:10}
B.bXN.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:8}
B.bXO.prototype={
$1(d){return this.a.c.k(C.v,"Speaking subscription error: "+A.b(d),null,null)},
$S:10}
B.bXS.prototype={
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
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLD(),null,null)
x=3
return A.c(q.bei(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.t,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:42}
B.bXP.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.t,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.f,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qF(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:42}
B.bXQ.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.t,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tS(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:83}
B.bXT.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.t,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLt()},
$S:28};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CB,A.G)
w(A.bw,[B.bXR,B.bXS,B.bXP,B.bXQ,B.bXT])
w(A.bx,[B.bXH,B.bXI,B.bXJ,B.bXK,B.bXL,B.bXM,B.bXN,B.bXO])})()
A.aU(b.typeUniverse,JSON.parse('{"CB":{"a5w":[],"a73":[]}}'))
var y={p:A.A("b9"),e:A.A("K"),b:A.A("@"),f:A.A("~")}};
(a=>{a["mQWGkn3ygwHpPiZwIsZme/9rB8w="]=a.current})($__dart_deferred_initializers__);