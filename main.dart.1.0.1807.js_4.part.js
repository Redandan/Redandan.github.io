((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
dUD(d,e){var x=new B.FO(e,d,A.aU("WebRTCManager"))
x.bNL()
return x},
FO:function FO(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bP9:function bP9(d,e){this.a=d
this.b=e},
bP_:function bP_(d){this.a=d},
bP0:function bP0(d){this.a=d},
bP1:function bP1(d){this.a=d},
bP2:function bP2(d){this.a=d},
bP3:function bP3(d){this.a=d},
bP4:function bP4(d){this.a=d},
bP5:function bP5(d){this.a=d},
bP6:function bP6(d){this.a=d},
bPa:function bPa(d,e){this.a=d
this.b=e},
bP7:function bP7(d,e){this.a=d
this.b=e},
bP8:function bP8(d){this.a=d},
bPb:function bPb(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[24]
B=a.updateHolder(c[4],B)
B.FO.prototype={
OH(d){return this.dhC(d)},
dhC(d){var x=0,w=A.m(y.e),v,u=this
var $async$OH=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yB(new B.bP9(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$OH)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$OH,w)},
bNL(){var x=this,w=x.a
x.y=w.gd7Z().e2(new B.bP_(x),new B.bP0(x))
x.z=w.gdnH().e2(new B.bP1(x),new B.bP2(x))
x.Q=w.gdhu().e2(new B.bP3(x),new B.bP4(x))
x.as=w.gcaK().e2(new B.bP5(x),new B.bP6(x))},
U2(d){return this.caS(d)},
caS(d){var x=0,w=A.m(y.e),v,u=this
var $async$U2=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yB(new B.bPa(u,d),"startAudioCall","Failed to start audio call",y.e),$async$U2)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$U2,w)},
qa(d){return this.d6G(d)},
d6G(d){var x=0,w=A.m(y.e),v,u=this,t
var $async$qa=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yB(new B.bP7(u,d),"answerCall",t,y.e),$async$qa)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$qa,w)},
t1(){var x=0,w=A.m(y.f),v=this
var $async$t1=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yB(new B.bP8(v),"endCall","Failed to end call",y.p),$async$t1)
case 2:return A.k(null,w)}})
return A.l($async$t1,w)},
bBw(){return D.dgC(new B.bPb(this),"toggleAudio","Failed to switch audio")},
c9z(d){this.e=d},
c9x(d){this.f=d},
c9y(d){var x=null,w=this.c
w.k(C.d,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.d,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.d,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.d,"   - New callback: true",x,x)
w.k(C.d,"   - Callback type: "+J.aQ(d).m(0),x,x)
this.r=d
w.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
c9w(d){this.w=d},
gbyh(){return this.d},
ga3Y(){return this.a.ga3Y()},
ga42(){return this.a.ga42()},
ga1o(){return this.a.ga1o()},
aq4(){var x=0,w=A.m(y.f),v=this,u,t
var $async$aq4=A.i(function(d,e){if(d===1)return A.j(e,w)
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
return A.c(v.a.ij(),$async$aq4)
case 2:v.bNL()
t.k(C.d,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.k(null,w)}})
return A.l($async$aq4,w)},
ij(){var x=0,w=A.m(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$ij=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.d,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.ga3Y()?6:7
break
case 6:x=8
return A.c(r.t1(),$async$ij)
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
$ia4n:1,
$iaws:1}
var z=a.updateTypes([])
B.bP9.prototype={
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
return A.c(s.aq4(),$async$$0)
case 5:case 4:s.a.bDK(q)
r.k(C.d,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.d,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.w?6:8
break
case 6:r.k(C.p,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.vb(q),$async$$0)
case 9:r.k(C.d,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.cV(C.ci,null,y.b),$async$$0)
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
B.bP_.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.d,"Call state changed: "+A.a(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bM(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aW(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:20}
B.bP0.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.a(d),null,null)},
$S:7}
B.bP1.prototype={
$1(d){var x=this.a
x.c.k(C.d,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:459}
B.bP2.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.a(d),null,null)},
$S:7}
B.bP3.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.d,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.m(0),u,u)
s.k(C.d,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.d,"   - Call data type: "+A.ai(d).m(0),u,u)
w=d.gcq()
s.k(C.d,"   - Call data keys: "+A.a(w.d0(w)),u,u)
s.k(C.d,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.d,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.d,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.t(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.a(x),u,u)}}else s.k(C.p,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:20}
B.bP4.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.a(d),null,null)},
$S:7}
B.bP5.prototype={
$1(d){this.a.c.k(C.d,"Speaking status changed: "+d,null,null)},
$S:6}
B.bP6.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.a(d),null,null)},
$S:7}
B.bPa.prototype={
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
t.k(C.d,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.ga3Y(),null,null)
x=3
return A.c(q.aja(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.d,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.p,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:92}
B.bP7.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.p,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.d,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qa(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:92}
B.bP8.prototype={
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
$S:87}
B.bPb.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.p,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bBw()},
$S:35};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.FO,A.U)
w(A.h3,[B.bP9,B.bPa,B.bP7,B.bP8,B.bPb])
w(A.fd,[B.bP_,B.bP0,B.bP1,B.bP2,B.bP3,B.bP4,B.bP5,B.bP6])})()
A.fM(b.typeUniverse,JSON.parse('{"FO":{"a4n":[],"aws":[]}}'))
var y={p:A.aw("bl"),e:A.aw("I"),b:A.aw("@"),f:A.aw("~")}};
(a=>{a["RKK7pnS54vD+1KokQ+ZOCE37Vwg="]=a.current})($__dart_deferred_initializers__);