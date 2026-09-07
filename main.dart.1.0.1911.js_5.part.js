((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e0Z(d,e){var x=new B.HE(e,d,A.aX("WebRTCManager"))
x.bXR()
return x},
HE:function HE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bUR:function bUR(d,e){this.a=d
this.b=e},
bUH:function bUH(d){this.a=d},
bUI:function bUI(d){this.a=d},
bUJ:function bUJ(d){this.a=d},
bUK:function bUK(d){this.a=d},
bUL:function bUL(d){this.a=d},
bUM:function bUM(d){this.a=d},
bUN:function bUN(d){this.a=d},
bUO:function bUO(d){this.a=d},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUP:function bUP(d,e){this.a=d
this.b=e},
bUQ:function bUQ(d){this.a=d},
bUT:function bUT(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[27]
B=a.updateHolder(c[4],B)
B.HE.prototype={
XD(d){return this.dv_(d)},
dv_(d){var x=0,w=A.l(y.e),v,u=this
var $async$XD=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yO(new B.bUR(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$XD)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$XD,w)},
bXR(){var x=this,w=x.a
x.y=w.gdla().ed(new B.bUH(x),new B.bUI(x))
x.z=w.gdBz().ed(new B.bUJ(x),new B.bUK(x))
x.Q=w.gduT().ed(new B.bUL(x),new B.bUM(x))
x.as=w.gclE().ed(new B.bUN(x),new B.bUO(x))},
ac3(d){return this.clM(d)},
clM(d){var x=0,w=A.l(y.e),v,u=this
var $async$ac3=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.yO(new B.bUS(u,d),"startAudioCall","Failed to start audio call",y.e),$async$ac3)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ac3,w)},
qv(d){return this.djL(d)},
djL(d){var x=0,w=A.l(y.e),v,u=this,t
var $async$qv=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.yO(new B.bUP(u,d),"answerCall",t,y.e),$async$qv)
case 3:v=f
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$qv,w)},
tE(){var x=0,w=A.l(y.f),v=this
var $async$tE=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.yO(new B.bUQ(v),"endCall","Failed to end call",y.p),$async$tE)
case 2:return A.j(null,w)}})
return A.k($async$tE,w)},
bLf(){return D.drK(new B.bUT(this),"toggleAudio","Failed to switch audio")},
ckq(d){this.e=d},
cko(d){this.f=d},
ckp(d){var x=null,w=this.c
w.k(C.f,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.f,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.f,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.f,"   - New callback: true",x,x)
w.k(C.f,"   - Callback type: "+J.a4(d).l(0),x,x)
this.r=d
w.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
ckn(d){this.w=d},
gbHI(){return this.d},
gaLM(){return this.a.gaLM()},
gaLR(){return this.a.gaLR()},
gaAF(){return this.a.gaAF()},
bju(){var x=0,w=A.l(y.f),v=this,u,t
var $async$bju=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.f,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.aj()
u=v.z
if(u!=null)u.aj()
u=v.Q
if(u!=null)u.aj()
u=v.as
if(u!=null)u.aj()
x=2
return A.c(v.a.il(),$async$bju)
case 2:v.bXR()
t.k(C.f,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.j(null,w)}})
return A.k($async$bju,w)},
il(){var x=0,w=A.l(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$il=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.f,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaLM()?6:7
break
case 6:x=8
return A.c(r.tE(),$async$il)
case 8:case 7:x=9
return A.c(r.il(),$async$il)
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
return A.k($async$il,w)},
$ia4N:1,
$iawx:1}
var z=a.updateTypes([])
B.bUR.prototype={
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
return A.c(s.bju(),$async$$0)
case 5:case 4:s.a.bNA(q)
r.k(C.f,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.f,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.q,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.zH(q),$async$$0)
case 9:r.k(C.f,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.df(C.cy,null,y.b),$async$$0)
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
$S:50}
B.bUH.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.f,"Call state changed: "+A.b(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bO(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aS(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:21}
B.bUI.prototype={
$1(d){return this.a.c.k(C.u,"Call state subscription error: "+A.b(d),null,null)},
$S:7}
B.bUJ.prototype={
$1(d){var x=this.a
x.c.k(C.f,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:452}
B.bUK.prototype={
$1(d){return this.a.c.k(C.u,"Remote stream subscription error: "+A.b(d),null,null)},
$S:7}
B.bUL.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.f,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.f,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.f,"   - Call data type: "+A.ak(d).l(0),u,u)
w=d.gcv()
s.k(C.f,"   - Call data keys: "+A.b(w.cX(w)),u,u)
s.k(C.f,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.f,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.f,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.u(v)
s.k(C.u,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.b(x),u,u)}}else s.k(C.q,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:21}
B.bUM.prototype={
$1(d){return this.a.c.k(C.u,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.b(d),null,null)},
$S:7}
B.bUN.prototype={
$1(d){this.a.c.k(C.f,"Speaking status changed: "+d,null,null)},
$S:6}
B.bUO.prototype={
$1(d){return this.a.c.k(C.u,"Speaking subscription error: "+A.b(d),null,null)},
$S:7}
B.bUS.prototype={
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
t.k(C.f,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaLM(),null,null)
x=3
return A.c(q.bey(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.f,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.q,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:50}
B.bUP.prototype={
$0(){var x=0,w=A.l(y.e),v,u=this,t,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.q,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.f,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qv(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:50}
B.bUQ.prototype={
$0(){var x=0,w=A.l(y.p),v,u=this,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.q,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.f,"Ending call",null,null)
x=3
return A.c(t.a.tE(),$async$$0)
case 3:case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:96}
B.bUT.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.q,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bLf()},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HE,A.T)
w(A.he,[B.bUR,B.bUS,B.bUP,B.bUQ,B.bUT])
w(A.ff,[B.bUH,B.bUI,B.bUJ,B.bUK,B.bUL,B.bUM,B.bUN,B.bUO])})()
A.fu(b.typeUniverse,JSON.parse('{"HE":{"a4N":[],"awx":[]}}'))
var y={p:A.au("bn"),e:A.au("N"),b:A.au("@"),f:A.au("~")}};
(a=>{a["sHBELcUmDjJlrDs2oDbo3bPwOos="]=a.current})($__dart_deferred_initializers__);