((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
e60(d,e){var x=new B.CB(e,d,A.aX("WebRTCManager"))
x.bY_()
return x},
CB:function CB(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bXN:function bXN(d,e){this.a=d
this.b=e},
bXD:function bXD(d){this.a=d},
bXE:function bXE(d){this.a=d},
bXF:function bXF(d){this.a=d},
bXG:function bXG(d){this.a=d},
bXH:function bXH(d){this.a=d},
bXI:function bXI(d){this.a=d},
bXJ:function bXJ(d){this.a=d},
bXK:function bXK(d){this.a=d},
bXO:function bXO(d,e){this.a=d
this.b=e},
bXL:function bXL(d,e){this.a=d
this.b=e},
bXM:function bXM(d){this.a=d},
bXP:function bXP(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[113]
B.CB.prototype={
XP(d){return this.dvs(d)},
dvs(d){var x=0,w=A.l(y.e),v,u=this
var $async$XP=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zw(new B.bXN(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XP)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XP,w)},
bY_(){var x=this,w=x.a
x.y=w.gdlB().eg(new B.bXD(x),new B.bXE(x))
x.z=w.gdC6().eg(new B.bXF(x),new B.bXG(x))
x.Q=w.gdvl().eg(new B.bXH(x),new B.bXI(x))
x.as=w.gcm1().eg(new B.bXJ(x),new B.bXK(x))},
acm(d){return this.cm9(d)},
cm9(d){var x=0,w=A.l(y.e),v,u=this
var $async$acm=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zw(new B.bXO(u,d),"startAudioCall","Failed to start audio call",y.e),$async$acm)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$acm,w)},
qF(d){return this.dkc(d)},
dkc(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qF=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.zw(new B.bXL(u,d),"answerCall",t,y.e),$async$qF)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qF,w)},
tQ(){var x=0,w=A.l(y.f),v=this
var $async$tQ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.zw(new B.bXM(v),"endCall","Failed to end call",y.p),$async$tQ)
case 2:return A.j(null,w)}})
return A.k($async$tQ,w)},
bLi(){return D.dv7(new B.bXP(this),"toggleAudio","Failed to switch audio")},
ckO(d){this.e=d},
ckM(d){this.f=d},
ckN(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a9(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckL(d){this.w=d},
gbHI(){return this.d},
gaLB(){return this.a.gaLB()},
gaLG(){return this.a.gaLG()},
gaAv(){return this.a.gaAv()},
bjc(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bjc=A.h(function(d,e){if(d===1)return A.i(e,w)
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
return A.c(v.a.it(),$async$bjc)
case 2:v.bY_()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bjc,w)},
it(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$it=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLB()?6:7
break
case 6:x=8
return A.c(r.tQ(),$async$it)
case 8:case 7:x=9
return A.c(r.it(),$async$it)
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
return A.k($async$it,w)},
$ia5w:1,
$ia72:1}
var z=a.updateTypes(["~(uY)"])
B.bXN.prototype={
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
return A.c(s.bjc(),$async$$0)
case 5:case 4:s.a.bNA(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.t,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zS(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.du(C.dc,null,y.b),$async$$0)
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
B.bXD.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bI(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aT(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:23}
B.bXE.prototype={
$1(d){return this.a.c.k(C.v,"Call state subscription error: "+A.b(d),null,null)},
$S:10}
B.bXF.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:z+0}
B.bXG.prototype={
$1(d){return this.a.c.k(C.v,"Remote stream subscription error: "+A.b(d),null,null)},
$S:10}
B.bXH.prototype={
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
B.bXI.prototype={
$1(d){return this.a.c.k(C.v,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:10}
B.bXJ.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:8}
B.bXK.prototype={
$1(d){return this.a.c.k(C.v,"Speaking subscription error: "+A.b(d),null,null)},
$S:10}
B.bXO.prototype={
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
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLB(),null,null)
x=3
return A.c(q.be9(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.t,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:42}
B.bXL.prototype={
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
B.bXM.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.t,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tQ(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:83}
B.bXP.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.t,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLi()},
$S:30};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CB,A.G)
w(A.bv,[B.bXN,B.bXO,B.bXL,B.bXM,B.bXP])
w(A.bw,[B.bXD,B.bXE,B.bXF,B.bXG,B.bXH,B.bXI,B.bXJ,B.bXK])})()
A.aU(b.typeUniverse,JSON.parse('{"CB":{"a5w":[],"a72":[]}}'))
var y={p:A.A("b9"),e:A.A("K"),b:A.A("@"),f:A.A("~")}};
(a=>{a["xggHMc/OcAfjSsFDAuSK6y7Eq4s="]=a.current})($__dart_deferred_initializers__);