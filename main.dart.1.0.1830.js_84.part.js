((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ea2(d){var x=b.G,w=A.eY(new B.d7r(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.d7q(w)},
ea3(d){var x=b.G,w=A.eY(new B.d7t(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.d7s(w)},
diJ(d){B.dhI(A.bB(d),b.G.window.location.origin)},
dhI(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ir(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.b.aX(u,e))v=!A.ok(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
d7r:function d7r(d,e){this.a=d
this.b=e},
d7q:function d7q(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7u:function d7u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7s:function d7s(d){this.a=d},
acV:function acV(d,e,f){this.c=d
this.d=e
this.a=f},
aWI:function aWI(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cLL:function cLL(d){this.a=d},
cLM:function cLM(d){this.a=d},
dXj(d){return new B.FO(d,null)},
FO:function FO(d,e){this.c=d
this.a=e},
amL:function amL(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.c=_.a=_.as=_.Q=_.z=_.y=_.x=_.w=null},
cLQ:function cLQ(d,e){this.a=d
this.b=e},
cLR:function cLR(d,e){this.a=d
this.b=e},
cLS:function cLS(d){this.a=d},
cLN:function cLN(d,e){this.a=d
this.b=e},
cLO:function cLO(d,e){this.a=d
this.b=e},
cLT:function cLT(){},
cLP:function cLP(d,e){this.a=d
this.b=e},
cLU:function cLU(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[24],B)
D=c[91]
B.acV.prototype={
T(){return new B.aWI()}}
B.aWI.prototype={
a0(){var x,w,v,u=this
u.a5()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.b5()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.b5()
u.e=w
v=A.eY(new B.cLL(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b0V()
$.Cq().Rc(x,new B.cLM(u),!0)},
aK(d){var x,w
this.b1(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.h()
w.src=x}},
q(){var x,w=this.f
if(w!=null){x=this.e
x===$&&A.h()
x.removeEventListener("load",w)}this.a7()},
u(d){var x=this.d
x===$&&A.h()
return A.dez(null,C.ER,x)}}
B.FO.prototype={
T(){var x=$.az()
return new B.amL(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A))}}
B.amL.prototype={
a0(){var x,w=this
w.a5()
x=w.a.c
A.dvq().j(0,x)
x=w.cs8("moon_dance/index.html")
w.d!==$&&A.b5()
w.d=x
w.Q=B.ea2(w.gbP8())
w.as=B.ea3(w.gcJO())
w.Wx()
w.z=w.XR()},
Wx(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Wx=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.f.hQ(),$async$Wx)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cLQ(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.t(h)
$.rb().k(C.aE,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.t(j)
$.rb().k(C.p,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.e.eq(!0),$async$Wx)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cLR(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a2L(o,4))}catch(h){n=A.t(h)
$.rb().k(C.aE,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cLS(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Wx,w)},
xn(){return this.cpc()},
cpc(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$xn=A.i(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:a0={}
a1=s.x
a0.a=a1
j=s.w
a0.b=j==null?0:j
r=""
x=a1==null?3:4
break
case 3:u=6
x=9
return A.c(s.f.hQ(),$async$xn)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cLN(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.t(a2)
$.rb().k(C.p,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.t(a5)
$.rb().k(C.aE,"localStorage jwt write failed in shim",p,null)}x=s.w==null?10:12
break
case 10:u=14
x=17
return A.c(s.e.pJ(),$async$xn)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cLO(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.Y(a0.b,4))}catch(a5){n=A.t(a5)
$.rb().k(C.aE,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.t(a3)
$.rb().k(C.p,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.e.pJ(),$async$xn)
case 22:l=a7
h=l
g=h==null?null:h.b
r=g==null?"":g
u=2
x=21
break
case 19:u=18
a4=t.pop()
k=A.t(a4)
$.rb().k(C.p,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.WM(),$async$xn)
case 23:f=a7
e=A.o(y.N,y.z)
e.h(0,"type","HOST_INIT")
d=a0.a
e.h(0,"jwt",d==null?"":d)
e.h(0,"balance",a0.b)
e.h(0,"demoMode",h<0.25)
e.h(0,"username",r)
if(f!=null)e.h(0,"rtp",f)
v=e
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$xn,w)},
WM(){var x=0,w=A.m(y.h),v,u=this,t,s
var $async$WM=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.y
if(s!=null){v=s
x=1
break}t=u.z
if(t==null)t=u.z=u.XR()
v=t.wk(C.NA,new B.cLT())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$WM,w)},
XR(){var x=0,w=A.m(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$XR=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(r.r.abM(r.a.c),$async$XR)
case 7:q=e
if(J.r(J.aC(q,"success"),!0)&&y.f.b(J.aC(q,"data"))){p=A.wG(y.f.a(J.aC(q,"data")),y.N,y.z)
r.y=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aX.ky(p,null))}catch(k){o=A.t(k)
$.rb().k(C.aE,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
l=t.pop()
n=A.t(l)
$.rb().k(C.p,"_getSlotRtpData failed",n,null)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.y==null)r.z=null
x=s.pop()
break
case 6:v=null
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$XR,w)},
CL(d){return this.cJP(d)},
cJP(b5){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$CL=A.i(function(b6,b7){if(b6===1){t.push(b7)
x=u}for(;;)switch(x){case 0:a9=b5.j(0,"type")
b0=a9==null?null:J.an(a9)
if(b0==null){v=null
x=1
break}case 3:switch(b0){case"GAME_READY":x=5
break
case"GO_BACK":x=6
break
case"GO_DEPOSIT":x=7
break
case"GO_WITHDRAW":x=8
break
case"SPIN_REQUEST":x=9
break
case"BALANCE_REQUEST":x=10
break
case"RTP_REQUEST":x=11
break
case"TRANSACTION_REQUEST":x=12
break
default:x=13
break}break
case 5:v=s.xn()
x=1
break
case 6:s.WR()
v=null
x=1
break
case 7:n=s.c
if(n!=null)A.aZ(n,!1).f.aR(C.uw,y.X)
v=null
x=1
break
case 8:n=s.c
if(n!=null)A.aZ(n,!1).f.aR(C.yE,y.X)
v=null
x=1
break
case 9:u=15
a9=A.mz(b5.j(0,"betIndex"))
r=a9==null?null:C.j.cd(a9)
a1=A.mz(b5.j(0,"betAmount"))
q=a1==null?null:a1
if(r==null||q==null){n=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=n
x=1
break}a9=s.a.c
a2=A.aX(b5.j(0,"mode"))
if(a2==null)a2="REAL"
a3=A.aX(b5.j(0,"clientSeed"))
a4=A.aX(b5.j(0,"nonce"))
x=18
return A.c(s.r.Ur(q,r,A.aX(b5.j(0,"clientRoundId")),a3,a9,a2,a4),$async$CL)
case 18:p=b7
o=J.aC(p,"data")
if(J.r(J.aC(p,"success"),!0)&&y.P.b(o)){n=A.o(y.N,y.z)
J.er(n,"type","SPIN_RESULT")
J.hb(n,o)
v=n
x=1
break}n=J.aC(p,"message")
n=A.aa(["type","SPIN_ERROR","message",J.an(n==null?"spin failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=17
break
case 15:u=14
b1=t.pop()
m=A.t(b1)
n=A.aa(["type","SPIN_ERROR","message",J.an(m)],y.N,y.z)
v=n
x=1
break
x=17
break
case 14:x=2
break
case 17:x=4
break
case 10:u=20
x=23
return A.c(s.r.k7(),$async$CL)
case 23:l=b7
if(J.r(J.aC(l,"success"),!0)){n=y.h
k=n.a(J.aC(l,"data"))
l=k
n=n.a(l==null?null:J.aC(l,"userInfo"))
a6=n==null?k:n
j=a6==null?A.o(y.N,y.z):a6
n=A.mz(J.aC(j,"balance"))
if(n==null)n=null
n=A.aa(["type","BALANCE_RESULT","balance",n==null?0:n],y.N,y.z)
v=n
x=1
break}n=J.aC(l,"message")
n=A.aa(["type","BALANCE_ERROR","message",J.an(n==null?"getCurrentUser failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=22
break
case 20:u=19
b2=t.pop()
i=A.t(b2)
n=A.aa(["type","BALANCE_ERROR","message",J.an(i)],y.N,y.z)
v=n
x=1
break
x=22
break
case 19:x=2
break
case 22:x=4
break
case 11:u=25
x=28
return A.c(s.WM(),$async$CL)
case 28:h=b7
if(h!=null){n=A.aa(["type","RTP_RESULT","data",h],y.N,y.z)
v=n
x=1
break}n=A.aa(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=n
x=1
break
u=2
x=27
break
case 25:u=24
b3=t.pop()
g=A.t(b3)
n=A.aa(["type","RTP_ERROR","message",J.an(g)],y.N,y.z)
v=n
x=1
break
x=27
break
case 24:x=2
break
case 27:x=4
break
case 12:u=30
n=A.mz(b5.j(0,"page"))
a7=n==null?null:C.j.cd(n)
f=a7==null?1:a7
n=A.mz(b5.j(0,"size"))
a8=n==null?null:C.j.cd(n)
e=a8==null?10:a8
x=33
return A.c(s.r.SV(f,e),$async$CL)
case 33:d=b7
if(J.r(J.aC(d,"success"),!0)){n=A.aa(["type","TRANSACTION_RESULT","data",J.aC(d,"data")],y.N,y.z)
v=n
x=1
break}n=J.aC(d,"message")
n=A.aa(["type","TRANSACTION_ERROR","message",J.an(n==null?"getTransactions failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=32
break
case 30:u=29
b4=t.pop()
a0=A.t(b4)
n=A.aa(["type","TRANSACTION_ERROR","message",J.an(a0)],y.N,y.z)
v=n
x=1
break
x=32
break
case 29:x=2
break
case 32:x=4
break
case 13:v=null
x=1
break
case 4:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$CL,w)},
q(){var x=this.Q
if(x!=null)x.$0()
x=this.as
if(x!=null)x.$0()
this.a7()},
u(d){var x=null,w=this.d
w===$&&A.h()
return A.bN(x,D.at2,A.d4(C.aT,A.b([w,A.dJ(0,A.h9(C.cb,x,C.z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.gbP8(),x,x,x,x,x,x,!1,C.bU),108,x,0,x,x,75)],y.p),C.t,C.aP,x),x,x,x,x,x)},
WR(){var x=0,w=A.m(y.H),v,u=this
var $async$WR=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ar3(),$async$WR)
case 3:case 1:return A.k(v,w)}})
return A.l($async$WR,w)},
ar3(){var x=0,w=A.m(y.H),v,u=this,t
var $async$ar3=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=3
return A.c(A.X(t,!1).zx(),$async$ar3)
case 3:if(!e&&u.c!=null){t=u.c
t.toString
A.aZ(t,!1).f.ik("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$ar3,w)},
cs8(d){var x=b.G.window.navigator.userAgent,w=$.dGc()
if(w.b.test(x)){$.aE.y2$.push(new B.cLP(this,d))
return C.y3}return new B.acV("/games/"+d+"?flutter=1&_ts="+Date.now(),this.gd0e(),null)},
d0f(){new B.cLU(this).$0()}}
var z=a.updateTypes(["ab<U<q,@>?>(U<q,@>)","ab<~>()","~()"])
B.d7r.prototype={
$1(d){var x,w=A.ir(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.a2i(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.d7q.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.d7t.prototype={
$1(d){var x,w,v,u,t,s=A.ir(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.a2i(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd8(),v=v.gao(v);v.F();){u=v.gN()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aE("type"))return
new B.d7u(this.b,w,d,s).$0()},
$S:9}
B.d7u.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h4(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bB(q)
t=v.c.source
if(t!=null)r=A.ir(t,"Object")
else r=!1
s=v.d
if(r){A.ayk(t,"postMessage",u,s,y.X)
B.dhI(u,s)}else{B.dhI(u,s)
b.G.window.postMessage(u,s)}}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:86}
B.d7s.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cLL.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cLM.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:399}
B.cLQ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cLR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cLS.prototype={
$0(){return this.a.w=0},
$S:0}
B.cLN.prototype={
$0(){return this.b.x=this.a.a},
$S:0}
B.cLO.prototype={
$0(){return this.b.w=this.a.b},
$S:0}
B.cLT.prototype={
$0(){return null},
$S:16}
B.cLP.prototype={
$1(d){return this.c6P(d)},
c6P(a0){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(g.c==null){x=1
break}u=4
l=g.x
x=l==null?7:9
break
case 7:x=10
return A.c(g.f.hQ(),$async$$1)
case 10:x=8
break
case 9:a2=l
case 8:k=a2
r=k==null?"":k
j=g.w
l=j==null
q=l?0:j
x=l?11:12
break
case 11:u=14
x=17
return A.c(g.e.eq(!0),$async$$1)
case 17:p=a2
l=p
j=l==null?null:l.f
q=j==null?0:j
u=4
x=16
break
case 14:u=13
f=t.pop()
o=A.t(f)
$.rb().k(C.p,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a2L(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",g.r.anG())
l.window.localStorage.setItem("_flutter_game_id",g.a.c)
u=19
x=22
return A.c(g.WM(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
e=t.pop()
n=A.t(e)
$.rb().k(C.aE,"RTP prefetch failed",n,null)
x=21
break
case 18:x=4
break
case 21:u=2
x=6
break
case 4:u=3
d=t.pop()
m=A.t(d)
$.rb().k(C.p,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:g=g.c
if(g==null){x=1
break}x=23
return A.c(A.X(g,!1).zx(),$async$$1)
case 23:h=Date.now()
b.G.window.location.assign("/games/"+s.b+"?flutter=1&_ts="+h)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:462}
B.cLU.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.xn(),$async$$0)
case 2:t=e
B.diJ(t)
u=y.H
x=3
return A.c(A.d_(D.aI2,null,u),$async$$0)
case 3:B.diJ(t)
x=4
return A.c(A.d_(D.aHL,null,u),$async$$0)
case 4:B.diJ(t)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:86};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.amL.prototype,"gcJO","CL",0)
w(v,"gbP8","WR",1)
w(v,"gd0e","d0f",2)})();(function inheritance(){var x=a.inheritMany
x(A.fg,[B.d7r,B.d7t,B.cLL,B.cLM,B.cLP])
x(A.fY,[B.d7q,B.d7u,B.d7s,B.cLQ,B.cLR,B.cLS,B.cLN,B.cLO,B.cLT,B.cLU])
x(A.W,[B.acV,B.FO])
x(A.Z,[B.aWI,B.amL])})()
A.fI(b.typeUniverse,JSON.parse('{"acV":{"W":[],"n":[]},"aWI":{"Z":["acV"]},"FO":{"W":[],"n":[]},"amL":{"Z":["FO"]}}'))
var y=(function rtii(){var x=A.at
return{u:x("ab<U<q,@>?>"),w:x("bjO"),p:x("E<n>"),P:x("U<q,@>"),f:x("U<@,@>"),a:x("bn"),A:x("Ny"),N:x("q"),r:x("Od"),z:x("@"),h:x("U<q,@>?"),X:x("V?"),H:x("~")}})();(function constants(){D.at2=new A.Y(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.y)
D.aHL=new A.bJ(175e4)
D.aI2=new A.bJ(75e4)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eiu","dGc",()=>A.bu("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"ejs","rb",()=>A.aU("SlotGamePage"))})()};
(a=>{a["Rj6ZReQRrDZRkJ7gs5kG/Lzt+7g="]=a.current})($__dart_deferred_initializers__);