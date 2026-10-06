((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
e6b(d,e){var x=new B.CB(e,d,A.aW("WebRTCManager"))
x.bY5()
return x},
CB:function CB(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bXH:function bXH(d,e){this.a=d
this.b=e},
bXx:function bXx(d){this.a=d},
bXy:function bXy(d){this.a=d},
bXz:function bXz(d){this.a=d},
bXA:function bXA(d){this.a=d},
bXB:function bXB(d){this.a=d},
bXC:function bXC(d){this.a=d},
bXD:function bXD(d){this.a=d},
bXE:function bXE(d){this.a=d},
bXI:function bXI(d,e){this.a=d
this.b=e},
bXF:function bXF(d,e){this.a=d
this.b=e},
bXG:function bXG(d){this.a=d},
bXJ:function bXJ(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[113]
B.CB.prototype={
XM(d){return this.dvw(d)},
dvw(d){var x=0,w=A.l(y.e),v,u=this
var $async$XM=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zx(new B.bXH(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XM)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XM,w)},
bY5(){var x=this,w=x.a
x.y=w.gdlF().eg(new B.bXx(x),new B.bXy(x))
x.z=w.gdCa().eg(new B.bXz(x),new B.bXA(x))
x.Q=w.gdvp().eg(new B.bXB(x),new B.bXC(x))
x.as=w.gcm4().eg(new B.bXD(x),new B.bXE(x))},
aci(d){return this.cmc(d)},
cmc(d){var x=0,w=A.l(y.e),v,u=this
var $async$aci=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.zx(new B.bXI(u,d),"startAudioCall","Failed to start audio call",y.e),$async$aci)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aci,w)},
qF(d){return this.dkg(d)},
dkg(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qF=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.zx(new B.bXF(u,d),"answerCall",t,y.e),$async$qF)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qF,w)},
tP(){var x=0,w=A.l(y.f),v=this
var $async$tP=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.zx(new B.bXG(v),"endCall","Failed to end call",y.p),$async$tP)
case 2:return A.j(null,w)}})
return A.k($async$tP,w)},
bLp(){return D.dve(new B.bXJ(this),"toggleAudio","Failed to switch audio")},
ckR(d){this.e=d},
ckP(d){this.f=d},
ckQ(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a8(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckO(d){this.w=d},
gbHP(){return this.d},
gaLz(){return this.a.gaLz()},
gaLE(){return this.a.gaLE()},
gaAs(){return this.a.gaAs()},
bjk(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bjk=A.h(function(d,e){if(d===1)return A.i(e,w)
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
return A.c(v.a.iu(),$async$bjk)
case 2:v.bY5()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bjk,w)},
iu(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$iu=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLz()?6:7
break
case 6:x=8
return A.c(r.tP(),$async$iu)
case 8:case 7:x=9
return A.c(r.iu(),$async$iu)
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
return A.k($async$iu,w)},
$ia5y:1,
$ia74:1}
var z=a.updateTypes(["~(uZ)"])
B.bXH.prototype={
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
return A.c(s.bjk(),$async$$0)
case 5:case 4:s.a.bNI(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.q,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zS(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.dt(C.dc,null,y.b),$async$$0)
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
$S:43}
B.bXx.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bI(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aT(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:23}
B.bXy.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.b(d),null,null)},
$S:10}
B.bXz.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:z+0}
B.bXA.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.b(d),null,null)},
$S:10}
B.bXB.prototype={
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
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.b(x),u,u)}}else s.k(C.q,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:23}
B.bXC.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:10}
B.bXD.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:8}
B.bXE.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.b(d),null,null)},
$S:10}
B.bXI.prototype={
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
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLz(),null,null)
x=3
return A.c(q.beg(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.q,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:43}
B.bXF.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.q,"WebRTC Manager not initialized",null,null)
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
$S:43}
B.bXG.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.q,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tP(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:76}
B.bXJ.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.q,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLp()},
$S:31};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CB,A.G)
w(A.bv,[B.bXH,B.bXI,B.bXF,B.bXG,B.bXJ])
w(A.bw,[B.bXx,B.bXy,B.bXz,B.bXA,B.bXB,B.bXC,B.bXD,B.bXE])})()
A.aU(b.typeUniverse,JSON.parse('{"CB":{"a5y":[],"a74":[]}}'))
var y={p:A.A("b9"),e:A.A("K"),b:A.A("@"),f:A.A("~")}};
(a=>{a["0LsYNIDaUFswXEzgQB/ifBA0O2c="]=a.current})($__dart_deferred_initializers__);