((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
dX_(d,e){var x=new B.G2(e,d,A.aU("WebRTCManager"))
x.bO4()
return x},
G2:function G2(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bQf:function bQf(d,e){this.a=d
this.b=e},
bQ5:function bQ5(d){this.a=d},
bQ6:function bQ6(d){this.a=d},
bQ7:function bQ7(d){this.a=d},
bQ8:function bQ8(d){this.a=d},
bQ9:function bQ9(d){this.a=d},
bQa:function bQa(d){this.a=d},
bQb:function bQb(d){this.a=d},
bQc:function bQc(d){this.a=d},
bQg:function bQg(d,e){this.a=d
this.b=e},
bQd:function bQd(d,e){this.a=d
this.b=e},
bQe:function bQe(d){this.a=d},
bQh:function bQh(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[24]
B=a.updateHolder(c[4],B)
B.G2.prototype={
OP(d){return this.diy(d)},
diy(d){var x=0,w=A.m(y.e),v,u=this
var $async$OP=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yK(new B.bQf(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$OP)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OP,w)},
bO4(){var x=this,w=x.a
x.y=w.gd8T().e5(new B.bQ5(x),new B.bQ6(x))
x.z=w.gdoC().e5(new B.bQ7(x),new B.bQ8(x))
x.Q=w.gdio().e5(new B.bQ9(x),new B.bQa(x))
x.as=w.gcb7().e5(new B.bQb(x),new B.bQc(x))},
U9(d){return this.cbf(d)},
cbf(d){var x=0,w=A.m(y.e),v,u=this
var $async$U9=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yK(new B.bQg(u,d),"startAudioCall","Failed to start audio call",y.e),$async$U9)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$U9,w)},
q9(d){return this.d7A(d)},
d7A(d){var x=0,w=A.m(y.e),v,u=this,t
var $async$q9=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yK(new B.bQd(u,d),"answerCall",t,y.e),$async$q9)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$q9,w)},
t_(){var x=0,w=A.m(y.f),v=this
var $async$t_=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yK(new B.bQe(v),"endCall","Failed to end call",y.p),$async$t_)
case 2:return A.k(null,w)}})
return A.l($async$t_,w)},
bBM(){return D.diu(new B.bQh(this),"toggleAudio","Failed to switch audio")},
c9X(d){this.e=d},
c9V(d){this.f=d},
c9W(d){var x=null,w=this.c
w.k(C.d,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.d,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.d,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.d,"   - New callback: true",x,x)
w.k(C.d,"   - Callback type: "+J.aQ(d).m(0),x,x)
this.r=d
w.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
c9U(d){this.w=d},
gbyt(){return this.d},
ga47(){return this.a.ga47()},
ga4c(){return this.a.ga4c()},
ga1y(){return this.a.ga1y()},
aqj(){var x=0,w=A.m(y.f),v=this,u,t
var $async$aqj=A.i(function(d,e){if(d===1)return A.j(e,w)
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
return A.c(v.a.ij(),$async$aqj)
case 2:v.bO4()
t.k(C.d,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.k(null,w)}})
return A.l($async$aqj,w)},
ij(){var x=0,w=A.m(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$ij=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.d,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.ga47()?6:7
break
case 6:x=8
return A.c(r.t_(),$async$ij)
case 8:case 7:x=9
return A.c(r.ij(),$async$ij)
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
return A.l($async$ij,w)},
$ia4S:1,
$iax6:1}
var z=a.updateTypes([])
B.bQf.prototype={
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
return A.c(s.aqj(),$async$$0)
case 5:case 4:s.a.bE1(q)
r.k(C.d,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.d,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.w?6:8
break
case 6:r.k(C.p,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.va(q),$async$$0)
case 9:r.k(C.d,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.d_(C.ck,null,y.b),$async$$0)
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
$S:92}
B.bQ5.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.d,"Call state changed: "+A.a(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bO(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aW(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:20}
B.bQ6.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.a(d),null,null)},
$S:7}
B.bQ7.prototype={
$1(d){var x=this.a
x.c.k(C.d,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:439}
B.bQ8.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.a(d),null,null)},
$S:7}
B.bQ9.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.d,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.m(0),u,u)
s.k(C.d,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.d,"   - Call data type: "+A.aj(d).m(0),u,u)
w=d.gcr()
s.k(C.d,"   - Call data keys: "+A.a(w.d0(w)),u,u)
s.k(C.d,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.d,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.t(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.a(x),u,u)}}else s.k(C.p,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:20}
B.bQa.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.a(d),null,null)},
$S:7}
B.bQb.prototype={
$1(d){this.a.c.k(C.d,"Speaking status changed: "+d,null,null)},
$S:6}
B.bQc.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.a(d),null,null)},
$S:7}
B.bQg.prototype={
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
t.k(C.d,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.ga47(),null,null)
x=3
return A.c(q.ajm(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.d,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.p,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:92}
B.bQd.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.p,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.d,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.q9(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:92}
B.bQe.prototype={
$0(){var x=0,w=A.m(y.p),v,u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.p,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.d,"Ending call",null,null)
x=3
return A.c(t.a.t_(),$async$$0)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:80}
B.bQh.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.p,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bBM()},
$S:35};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.G2,A.U)
w(A.h4,[B.bQf,B.bQg,B.bQd,B.bQe,B.bQh])
w(A.fe,[B.bQ5,B.bQ6,B.bQ7,B.bQ8,B.bQ9,B.bQa,B.bQb,B.bQc])})()
A.fP(b.typeUniverse,JSON.parse('{"G2":{"a4S":[],"ax6":[]}}'))
var y={p:A.aw("bm"),e:A.aw("K"),b:A.aw("@"),f:A.aw("~")}};
(a=>{a["ajqXWknRwtZDYX22j1B2s8Hbg4M="]=a.current})($__dart_deferred_initializers__);