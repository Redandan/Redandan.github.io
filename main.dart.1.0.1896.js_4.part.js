((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
e4i(d,e){var x=new B.GF(e,d,A.aY("WebRTCManager"))
x.bUg()
return x},
GF:function GF(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=null},
bTS:function bTS(d,e){this.a=d
this.b=e},
bTI:function bTI(d){this.a=d},
bTJ:function bTJ(d){this.a=d},
bTK:function bTK(d){this.a=d},
bTL:function bTL(d){this.a=d},
bTM:function bTM(d){this.a=d},
bTN:function bTN(d){this.a=d},
bTO:function bTO(d){this.a=d},
bTP:function bTP(d){this.a=d},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTQ:function bTQ(d,e){this.a=d
this.b=e},
bTR:function bTR(d){this.a=d},
bTU:function bTU(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
D=c[24]
B=a.updateHolder(c[4],B)
B.GF.prototype={
WI(d){return this.dqN(d)},
dqN(d){var x=0,w=A.m(y.e),v,u=this
var $async$WI=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.z2(new B.bTS(u,d),"initialize","Failed to initialize WebRTC manager",y.e),$async$WI)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$WI,w)},
bUg(){var x=this,w=x.a
x.y=w.gdgU().ee(new B.bTI(x),new B.bTJ(x))
x.z=w.gdxb().ee(new B.bTK(x),new B.bTL(x))
x.Q=w.gdqG().ee(new B.bTM(x),new B.bTN(x))
x.as=w.gchL().ee(new B.bTO(x),new B.bTP(x))},
ab0(d){return this.chT(d)},
chT(d){var x=0,w=A.m(y.e),v,u=this
var $async$ab0=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.c(D.z2(new B.bTT(u,d),"startAudioCall","Failed to start audio call",y.e),$async$ab0)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$ab0,w)},
qh(d){return this.dfv(d)},
dfv(d){var x=0,w=A.m(y.e),v,u=this,t
var $async$qh=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=d?"Failed to answer call":"Failed to reject call"
x=3
return A.c(D.z2(new B.bTQ(u,d),"answerCall",t,y.e),$async$qh)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$qh,w)},
tp(){var x=0,w=A.m(y.f),v=this
var $async$tp=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(D.z2(new B.bTR(v),"endCall","Failed to end call",y.p),$async$tp)
case 2:return A.k(null,w)}})
return A.l($async$tp,w)},
bHK(){return D.dpt(new B.bTU(this),"toggleAudio","Failed to switch audio")},
cgz(d){this.e=d},
cgx(d){this.f=d},
cgy(d){var x=null,w=this.c
w.k(C.h,"\ud83d\udcde [WebRTC Manager] Setting incoming call callback",x,x)
w.k(C.h,"\ud83d\udd0d [WebRTC Manager] Callback verification:",x,x)
w.k(C.h,"   - Previous callback: "+(this.r!=null),x,x)
w.k(C.h,"   - New callback: true",x,x)
w.k(C.h,"   - Callback type: "+J.a4(d).l(0),x,x)
this.r=d
w.k(C.h,"\u2705 [WebRTC Manager] Incoming call callback set successfully",x,x)},
cgw(d){this.w=d},
gbEd(){return this.d},
gaJQ(){return this.a.gaJQ()},
gaJV(){return this.a.gaJV()},
gayr(){return this.a.gayr()},
bgd(){var x=0,w=A.m(y.f),v=this,u,t
var $async$bgd=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=v.c
t.k(C.h,"\ud83d\udd04 [WebRTC Manager] Reinitializing WebRTC service...",null,null)
u=v.y
if(u!=null)u.ai()
u=v.z
if(u!=null)u.ai()
u=v.Q
if(u!=null)u.ai()
u=v.as
if(u!=null)u.ai()
x=2
return A.c(v.a.ij(),$async$bgd)
case 2:v.bUg()
t.k(C.h,"\u2705 [WebRTC Manager] WebRTC service reinitialized successfully",null,null)
return A.k(null,w)}})
return A.l($async$bgd,w)},
ij(){var x=0,w=A.m(y.f),v=1,u=[],t=this,s,r,q,p,o
var $async$ij=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:p=t.c
p.k(C.h,"\ud83d\udd04 [WebRTC Manager] Resetting WebRTC Manager...",null,null)
v=3
r=t.a
x=r.gaJQ()?6:7
break
case 6:x=8
return A.c(r.tp(),$async$ij)
case 8:case 7:x=9
return A.c(r.ij(),$async$ij)
case 9:p.k(C.h,"\u2705 [WebRTC Manager] WebRTC Manager reset successfully",null,null)
v=1
x=5
break
case 3:v=2
o=u.pop()
s=A.u(o)
p.k(C.v,"\u274c [WebRTC Manager] Failed to reset WebRTC Manager: "+A.a(s),null,null)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$ij,w)},
$ia6D:1,
$iayY:1}
var z=a.updateTypes([])
B.bTS.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
r=s.c
q=u.b
r.k(C.h,"\ud83d\ude80 [WebRTC Manager] Initializing WebRTC Manager for user: "+q,null,null)
r.k(C.h,"\ud83d\udcca [WebRTC Manager] Current state: isInitialized="+s.d,null,null)
x=s.d?3:4
break
case 3:r.k(C.h,"\ud83d\udd04 [WebRTC Manager] Already initialized, reinitializing WebRTC service...",null,null)
x=5
return A.c(s.bgd(),$async$$0)
case 5:case 4:s.a.bK2(q)
r.k(C.h,"\u2705 [WebRTC Manager] User ID set in WebRTC service",null,null)
r.k(C.h,"\ud83d\udd17 [WebRTC Manager] Checking SSE connection status...",null,null)
t=s.b
x=!t.y?6:8
break
case 6:r.k(C.q,"\u26a0\ufe0f [WebRTC Manager] SSE not connected, attempting to connect...",null,null)
x=9
return A.c(t.za(q),$async$$0)
case 9:r.k(C.h,"\u23f3 [WebRTC Manager] Waiting for SSE connection to establish...",null,null)
x=10
return A.c(A.dd(C.cw,null,y.b),$async$$0)
case 10:if(!t.y){r.k(C.v,"\u274c [WebRTC Manager] Failed to establish SSE connection",null,null)
v=!1
x=1
break}r.k(C.h,"\u2705 [WebRTC Manager] SSE connection established",null,null)
x=7
break
case 8:r.k(C.h,"\u2705 [WebRTC Manager] SSE already connected",null,null)
case 7:s.d=!0
r.k(C.h,"\ud83c\udf89 [WebRTC Manager] WebRTC Manager initialized successfully for user: "+q,null,null)
v=!0
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:50}
B.bTI.prototype={
$1(d){var x,w="state",v=this.a
v.c.k(C.h,"Call state changed: "+A.a(d.j(0,w)),null,null)
x=v.f
if(x!=null)x.$1(A.bU(d.j(0,w)))
if(J.r(d.j(0,w),"ended")){v=v.w
if(v!=null){x=A.aU(d.j(0,"callId"))
v.$1(x==null?"":x)}}},
$S:21}
B.bTJ.prototype={
$1(d){return this.a.c.k(C.v,"Call state subscription error: "+A.a(d),null,null)},
$S:7}
B.bTK.prototype={
$1(d){var x=this.a
x.c.k(C.h,"Remote stream received",null,null)
x=x.e
if(x!=null)x.$1(d)},
$S:425}
B.bTL.prototype={
$1(d){return this.a.c.k(C.v,"Remote stream subscription error: "+A.a(d),null,null)},
$S:7}
B.bTM.prototype={
$1(d){var x,w,v,u=null,t=this.a,s=t.c
s.k(C.h,"\ud83d\udcde [WebRTC Manager] Incoming call received: "+d.l(0),u,u)
s.k(C.h,"\ud83d\udd0d [WebRTC Manager] Incoming call processing:",u,u)
s.k(C.h,"   - Call data type: "+A.al(d).l(0),u,u)
w=d.gct()
s.k(C.h,"   - Call data keys: "+A.a(w.cZ(w)),u,u)
s.k(C.h,"   - Callback available: "+(t.r!=null),u,u)
if(t.r!=null){s.k(C.h,"\ud83d\udcde [WebRTC Manager] Calling incoming call callback...",u,u)
try{t.r.$1(d)
s.k(C.h,"\u2705 [WebRTC Manager] Incoming call callback executed successfully",u,u)}catch(v){x=A.u(v)
s.k(C.v,"\u274c [WebRTC Manager] Incoming call callback failed: "+A.a(x),u,u)}}else s.k(C.q,"\u26a0\ufe0f [WebRTC Manager] No incoming call callback set",u,u)},
$S:21}
B.bTN.prototype={
$1(d){return this.a.c.k(C.v,"\u274c [WebRTC Manager] Incoming call subscription error: "+A.a(d),null,null)},
$S:7}
B.bTO.prototype={
$1(d){this.a.c.k(C.h,"Speaking status changed: "+d,null,null)},
$S:6}
B.bTP.prototype={
$1(d){return this.a.c.k(C.v,"Speaking subscription error: "+A.a(d),null,null)},
$S:7}
B.bTT.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:q=u.a
if(!q.d){q.c.k(C.q,"\u26a0\ufe0f [WebRTC Manager] WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=q.c
s=u.b
t.k(C.h,"\ud83d\udcde [WebRTC Manager] Starting audio call to: "+s,null,null)
q=q.a
t.k(C.h,"\ud83d\udcca [WebRTC Manager] Call state: isCallActive="+q.gaJQ(),null,null)
x=3
return A.c(q.bbm(s,"audio"),$async$$0)
case 3:r=e
if(r)t.k(C.h,"\ud83c\udf89 [WebRTC Manager] Audio call started successfully",null,null)
else t.k(C.q,"\u26a0\ufe0f [WebRTC Manager] Failed to start audio call",null,null)
v=r
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:50}
B.bTQ.prototype={
$0(){var x=0,w=A.m(y.e),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.a
if(!s.d){s.c.k(C.q,"WebRTC Manager not initialized",null,null)
v=!1
x=1
break}t=u.b
s.c.k(C.h,"Answering call, accepted: "+t,null,null)
x=3
return A.c(s.a.qh(t),$async$$0)
case 3:v=e
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:50}
B.bTR.prototype={
$0(){var x=0,w=A.m(y.p),v,u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d){t.c.k(C.q,"WebRTC Manager not initialized",null,null)
x=1
break}t.c.k(C.h,"Ending call",null,null)
x=3
return A.c(t.a.tp(),$async$$0)
case 3:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:94}
B.bTU.prototype={
$0(){var x=this.a
if(!x.d){x.c.k(C.q,"WebRTC Manager not initialized",null,null)
return!1}return x.a.bHK()},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.GF,A.V)
w(A.h9,[B.bTS,B.bTT,B.bTQ,B.bTR,B.bTU])
w(A.fi,[B.bTI,B.bTJ,B.bTK,B.bTL,B.bTM,B.bTN,B.bTO,B.bTP])})()
A.fU(b.typeUniverse,JSON.parse('{"GF":{"a6D":[],"ayY":[]}}'))
var y={p:A.au("bo"),e:A.au("O"),b:A.au("@"),f:A.au("~")}};
(a=>{a["0rgQWqwtI0TdCTGqM8ZKTaOwbmc="]=a.current})($__dart_deferred_initializers__);