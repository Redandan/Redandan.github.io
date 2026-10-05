((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e2k(d,e){var x=new B.HI(e,d,A.aW("WebRTCManager"))
x.bY4()
return x},
HI:function HI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bVF:function bVF(d,e){this.a=d
this.b=e},
bVv:function bVv(d){this.a=d},
bVw:function bVw(d){this.a=d},
bVx:function bVx(d){this.a=d},
bVy:function bVy(d){this.a=d},
bVz:function bVz(d){this.a=d},
bVA:function bVA(d){this.a=d},
bVB:function bVB(d){this.a=d},
bVC:function bVC(d){this.a=d},
bVG:function bVG(d,e){this.a=d
this.b=e},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVE:function bVE(d){this.a=d},
bVH:function bVH(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[27]
B=a.updateHolder(c[4],B)
B.HI.prototype={
XL(d){return this.dvp(d)},
dvp(d){var x=0,w=A.l(y.e),v,u=this
var $async$XL=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yQ(new B.bVF(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XL)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XL,w)},
bY4(){var x=this,w=x.a
x.y=w.gdlw().ef(new B.bVv(x),new B.bVw(x))
x.z=w.gdBZ().ef(new B.bVx(x),new B.bVy(x))
x.Q=w.gdvi().ef(new B.bVz(x),new B.bVA(x))
x.as=w.gcm2().ef(new B.bVB(x),new B.bVC(x))},
ace(d){return this.cma(d)},
cma(d){var x=0,w=A.l(y.e),v,u=this
var $async$ace=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yQ(new B.bVG(u,d),"startAudioCall","Failed to start audio call",y.e),$async$ace)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ace,w)},
qD(d){return this.dk7(d)},
dk7(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qD=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yQ(new B.bVD(u,d),"answerCall",t,y.e),$async$qD)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qD,w)},
tO(){var x=0,w=A.l(y.f),v=this
var $async$tO=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yQ(new B.bVE(v),"endCall","Failed to end call",y.p),$async$tO)
case 2:return A.j(null,w)}})
return A.k($async$tO,w)},
bLn(){return D.dsN(new B.bVH(this),"toggleAudio","Failed to switch audio")},
ckP(d){this.e=d},
ckN(d){this.f=d},
ckO(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a4(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckM(d){this.w=d},
gbHN(){return this.d},
gaLA(){return this.a.gaLA()},
gaLF(){return this.a.gaLF()},
gaAs(){return this.a.gaAs()},
bjg(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bjg=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.f,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.ah()
u=v.z
if(u!=null)u.ah()
u=v.Q
if(u!=null)u.ah()
u=v.as
if(u!=null)u.ah()
x=2
return A.c(v.a.it(),$async$bjg)
case 2:v.bY4()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bjg,w)},
it(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$it=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLA()?6:7
break
case 6:x=8
return A.c(r.tO(),$async$it)
case 8:case 7:x=9
return A.c(r.it(),$async$it)
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
return A.k($async$it,w)},
$ia4Y:1,
$iawU:1}
var z=a.updateTypes([])
B.bVF.prototype={
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
return A.c(s.bjg(),$async$$0)
case 5:case 4:s.a.bNG(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.q,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zP(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.dh(C.cy,null,y.b),$async$$0)
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
B.bVv.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bO(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aT(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:21}
B.bVw.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.b(d),null,null)},
$S:7}
B.bVx.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:430}
B.bVy.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.b(d),null,null)},
$S:7}
B.bVz.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.f,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.f,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.f,"   - Call data type: "+A.ak(d).l(0),u,u)
w=d.gcB()
s.k(C.f,"   - Call data keys: "+A.b(w.cL(w)),u,u)
s.k(C.f,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.f,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.u(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.b(x),u,u)}}else s.k(C.q,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:21}
B.bVA.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:7}
B.bVB.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:6}
B.bVC.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.b(d),null,null)},
$S:7}
B.bVG.prototype={
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
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLA(),null,null)
x=3
return A.c(q.bek(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.q,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:49}
B.bVD.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.q,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.f,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qD(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:49}
B.bVE.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.q,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tO(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:96}
B.bVH.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.q,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLn()},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HI,A.T)
w(A.he,[B.bVF,B.bVG,B.bVD,B.bVE,B.bVH])
w(A.fh,[B.bVv,B.bVw,B.bVx,B.bVy,B.bVz,B.bVA,B.bVB,B.bVC])})()
A.fv(b.typeUniverse,JSON.parse('{"HI":{"a4Y":[],"awU":[]}}'))
var y={p:A.au("bo"),e:A.au("N"),b:A.au("@"),f:A.au("~")}};
(a=>{a["w9BqTLa4XYTI3EkixayUawWiN2s="]=a.current})($__dart_deferred_initializers__);