((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e02(d,e){var x=new B.Gk(e,d,A.aV("WebRTCManager"))
x.bRh()
return x},
Gk:function Gk(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bRR:function bRR(d,e){this.a=d
this.b=e},
bRH:function bRH(d){this.a=d},
bRI:function bRI(d){this.a=d},
bRJ:function bRJ(d){this.a=d},
bRK:function bRK(d){this.a=d},
bRL:function bRL(d){this.a=d},
bRM:function bRM(d){this.a=d},
bRN:function bRN(d){this.a=d},
bRO:function bRO(d){this.a=d},
bRS:function bRS(d,e){this.a=d
this.b=e},
bRP:function bRP(d,e){this.a=d
this.b=e},
bRQ:function bRQ(d){this.a=d},
bRT:function bRT(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[24]
B=a.updateHolder(c[4],B)
B.Gk.prototype={
Pq(d){return this.dmL(d)},
dmL(d){var x=0,w=A.m(y.e),v,u=this
var $async$Pq=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yX(new B.bRR(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$Pq)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Pq,w)},
bRh(){var x=this,w=x.a
x.y=w.gdcV().e7(new B.bRH(x),new B.bRI(x))
x.z=w.gdt4().e7(new B.bRJ(x),new B.bRK(x))
x.Q=w.gdmD().e7(new B.bRL(x),new B.bRM(x))
x.as=w.gcer().e7(new B.bRN(x),new B.bRO(x))},
UP(d){return this.cez(d)},
cez(d){var x=0,w=A.m(y.e),v,u=this
var $async$UP=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yX(new B.bRS(u,d),"startAudioCall","Failed to start audio call",y.e),$async$UP)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$UP,w)},
qc(d){return this.dbw(d)},
dbw(d){var x=0,w=A.m(y.e),v,u=this,t
var $async$qc=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yX(new B.bRP(u,d),"answerCall",t,y.e),$async$qc)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$qc,w)},
t3(){var x=0,w=A.m(y.f),v=this
var $async$t3=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yX(new B.bRQ(v),"endCall","Failed to end call",y.p),$async$t3)
case 2:return A.k(null,w)}})
return A.l($async$t3,w)},
bET(){return D.dm1(new B.bRT(this),"toggleAudio","Failed to switch audio")},
cdg(d){this.e=d},
cde(d){this.f=d},
cdf(d){var x=null,w=this.c
w.k(C.d,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.d,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.d,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.d,"   - New callback: true",x,x)
w.k(C.d,"   - Callback type: "+J.aQ(d).l(0),x,x)
this.r=d
w.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
cdd(d){this.w=d},
gbBq(){return this.d},
ga58(){return this.a.ga58()},
ga5d(){return this.a.ga5d()},
ga2z(){return this.a.ga2z()},
arP(){var x=0,w=A.m(y.f),v=this,u,t
var $async$arP=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.d,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.aj()
u=v.z
if(u!=null)u.aj()
u=v.Q
if(u!=null)u.aj()
u=v.as
if(u!=null)u.aj()
x=2
return A.c(v.a.ik(),$async$arP)
case 2:v.bRh()
t.k(C.d,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.k(null,w)}})
return A.l($async$arP,w)},
ik(){var x=0,w=A.m(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$ik=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.d,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.ga58()?6:7
break
case 6:x=8
return A.c(r.t3(),$async$ik)
case 8:case 7:x=9
return A.c(r.ik(),$async$ik)
case 9:p.k(C.d,"\u2705 [WebRTC Manager] WebRTC Manager reset successfully",null,null)
v=1
x=5
break
case 3:v=2
o=u.pop()
s=A.t(o)
p.k(C.v,"\u274c [WebRTC Manager] Failed to reset WebRTC Manager: "+A.a(s),null,null)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$ik,w)},
$ia60:1,
$iay9:1}
var z=a.updateTypes([])
B.bRR.prototype={
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
return A.c(s.arP(),$async$$0)
case 5:case 4:s.a.bH9(q)
r.k(C.d,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.d,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.w?6:8
break
case 6:r.k(C.p,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.vh(q),$async$$0)
case 9:r.k(C.d,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.d_(C.cl,null,y.b),$async$$0)
case 10:if(!t.w){r.k(C.v,"\u274c [WebRTC Manager] Failed to establish SSE connection",null,null)
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
$S:91}
B.bRH.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.d,"Call state changed: "+A.a(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bR(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aY(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:20}
B.bRI.prototype={
$1(d){return this.a.c.k(C.v,"Call state subscription error: "+A.a(d),null,null)},
$S:7}
B.bRJ.prototype={
$1(d){var x=this.a
x.c.k(C.d,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:400}
B.bRK.prototype={
$1(d){return this.a.c.k(C.v,"Remote stream subscription error: "+A.a(d),null,null)},
$S:7}
B.bRL.prototype={
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
s.k(C.v,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.a(x),u,u)}}else s.k(C.p,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:20}
B.bRM.prototype={
$1(d){return this.a.c.k(C.v,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.a(d),null,null)},
$S:7}
B.bRN.prototype={
$1(d){this.a.c.k(C.d,"Speaking status changed: "+d,null,null)},
$S:6}
B.bRO.prototype={
$1(d){return this.a.c.k(C.v,"Speaking subscription error: "+A.a(d),null,null)},
$S:7}
B.bRS.prototype={
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
t.k(C.d,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.ga58(),null,null)
x=3
return A.c(q.akP(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.d,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.p,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:91}
B.bRP.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.p,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.d,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qc(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:91}
B.bRQ.prototype={
$0(){var x=0,w=A.m(y.p),v,u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.p,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.d,"Ending call",null,null)
x=3
return A.c(t.a.t3(),$async$$0)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:78}
B.bRT.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.p,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bET()},
$S:35};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Gk,A.V)
w(A.h6,[B.bRR,B.bRS,B.bRP,B.bRQ,B.bRT])
w(A.fg,[B.bRH,B.bRI,B.bRJ,B.bRK,B.bRL,B.bRM,B.bRN,B.bRO])})()
A.fR(b.typeUniverse,JSON.parse('{"Gk":{"a60":[],"ay9":[]}}'))
var y={p:A.au("bn"),e:A.au("K"),b:A.au("@"),f:A.au("~")}};
(a=>{a["/ChwDmwTfFbh91gyWLteWXmxnD8="]=a.current})($__dart_deferred_initializers__);