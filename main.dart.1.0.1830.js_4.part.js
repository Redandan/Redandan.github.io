((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e_v(d,e){var x=new B.Gk(e,d,A.aU("WebRTCManager"))
x.bQq()
return x},
Gk:function Gk(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bRs:function bRs(d,e){this.a=d
this.b=e},
bRi:function bRi(d){this.a=d},
bRj:function bRj(d){this.a=d},
bRk:function bRk(d){this.a=d},
bRl:function bRl(d){this.a=d},
bRm:function bRm(d){this.a=d},
bRn:function bRn(d){this.a=d},
bRo:function bRo(d){this.a=d},
bRp:function bRp(d){this.a=d},
bRt:function bRt(d,e){this.a=d
this.b=e},
bRq:function bRq(d,e){this.a=d
this.b=e},
bRr:function bRr(d){this.a=d},
bRu:function bRu(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[25]
B=a.updateHolder(c[4],B)
B.Gk.prototype={
Pp(d){return this.dlP(d)},
dlP(d){var x=0,w=A.m(y.e),v,u=this
var $async$Pp=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yW(new B.bRs(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$Pp)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Pp,w)},
bQq(){var x=this,w=x.a
x.y=w.gdc_().e6(new B.bRi(x),new B.bRj(x))
x.z=w.gds8().e6(new B.bRk(x),new B.bRl(x))
x.Q=w.gdlH().e6(new B.bRm(x),new B.bRn(x))
x.as=w.gcdA().e6(new B.bRo(x),new B.bRp(x))},
Uy(d){return this.cdI(d)},
cdI(d){var x=0,w=A.m(y.e),v,u=this
var $async$Uy=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yW(new B.bRt(u,d),"startAudioCall","Failed to start audio call",y.e),$async$Uy)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Uy,w)},
qd(d){return this.daB(d)},
daB(d){var x=0,w=A.m(y.e),v,u=this,t
var $async$qd=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yW(new B.bRq(u,d),"answerCall",t,y.e),$async$qd)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$qd,w)},
t4(){var x=0,w=A.m(y.f),v=this
var $async$t4=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yW(new B.bRr(v),"endCall","Failed to end call",y.p),$async$t4)
case 2:return A.k(null,w)}})
return A.l($async$t4,w)},
bDY(){return D.dlx(new B.bRu(this),"toggleAudio","Failed to switch audio")},
ccp(d){this.e=d},
ccn(d){this.f=d},
cco(d){var x=null,w=this.c
w.k(C.d,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.d,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.d,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.d,"   - New callback: true",x,x)
w.k(C.d,"   - Callback type: "+J.aQ(d).l(0),x,x)
this.r=d
w.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ccm(d){this.w=d},
gbAv(){return this.d},
ga4P(){return this.a.ga4P()},
ga4U(){return this.a.ga4U()},
ga2f(){return this.a.ga2f()},
arH(){var x=0,w=A.m(y.f),v=this,u,t
var $async$arH=A.i(function(d,e){if(d===1)return A.j(e,w)
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
return A.c(v.a.il(),$async$arH)
case 2:v.bQq()
t.k(C.d,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.k(null,w)}})
return A.l($async$arH,w)},
il(){var x=0,w=A.m(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$il=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.d,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.ga4P()?6:7
break
case 6:x=8
return A.c(r.t4(),$async$il)
case 8:case 7:x=9
return A.c(r.il(),$async$il)
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
return A.l($async$il,w)},
$ia5S:1,
$iaxX:1}
var z=a.updateTypes([])
B.bRs.prototype={
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
return A.c(s.arH(),$async$$0)
case 5:case 4:s.a.bGe(q)
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
return A.c(A.d_(C.cq,null,y.b),$async$$0)
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
$S:98}
B.bRi.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.d,"Call state changed: "+A.a(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bR(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aX(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:20}
B.bRj.prototype={
$1(d){return this.a.c.k(C.v,"Call state subscription error: "+A.a(d),null,null)},
$S:7}
B.bRk.prototype={
$1(d){var x=this.a
x.c.k(C.d,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:400}
B.bRl.prototype={
$1(d){return this.a.c.k(C.v,"Remote stream subscription error: "+A.a(d),null,null)},
$S:7}
B.bRm.prototype={
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
B.bRn.prototype={
$1(d){return this.a.c.k(C.v,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.a(d),null,null)},
$S:7}
B.bRo.prototype={
$1(d){this.a.c.k(C.d,"Speaking status changed: "+d,null,null)},
$S:6}
B.bRp.prototype={
$1(d){return this.a.c.k(C.v,"Speaking subscription error: "+A.a(d),null,null)},
$S:7}
B.bRt.prototype={
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
t.k(C.d,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.ga4P(),null,null)
x=3
return A.c(q.akI(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.d,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.p,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:98}
B.bRq.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.p,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.d,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qd(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:98}
B.bRr.prototype={
$0(){var x=0,w=A.m(y.p),v,u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.p,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.d,"Ending call",null,null)
x=3
return A.c(t.a.t4(),$async$$0)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:86}
B.bRu.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.p,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bDY()},
$S:35};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Gk,A.V)
w(A.fY,[B.bRs,B.bRt,B.bRq,B.bRr,B.bRu])
w(A.fg,[B.bRi,B.bRj,B.bRk,B.bRl,B.bRm,B.bRn,B.bRo,B.bRp])})()
A.fI(b.typeUniverse,JSON.parse('{"Gk":{"a5S":[],"axX":[]}}'))
var y={p:A.at("bn"),e:A.at("K"),b:A.at("@"),f:A.at("~")}};
(a=>{a["BQlnLYOQpWFRj7JZu5AOTJx/QPw="]=a.current})($__dart_deferred_initializers__);