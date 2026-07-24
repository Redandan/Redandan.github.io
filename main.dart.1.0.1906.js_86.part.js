((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
dYe(d){var x=b.G,w=A.eR(new B.cYy(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.cYx(w)},
dYf(d){var x=b.G,w=A.eR(new B.cYA(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.cYz(w)},
cYy:function cYy(d,e){this.a=d
this.b=e},
cYx:function cYx(d){this.a=d},
cYA:function cYA(d,e){this.a=d
this.b=e},
cYB:function cYB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cYz:function cYz(d){this.a=d},
aam:function aam(d,e,f){this.c=d
this.d=e
this.a=f},
aSE:function aSE(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cCM:function cCM(d){this.a=d},
cCN:function cCN(d){this.a=d},
dL3(d){return new B.F0(d,null)},
F0:function F0(d,e){this.c=d
this.a=e},
ajS:function ajS(d,e,f){var _=this
_.d=!0
_.e=null
_.r=_.f=$
_.w=d
_.x=e
_.y=f
_.c=_.a=_.at=_.as=_.Q=_.z=null},
cCZ:function cCZ(d){this.a=d},
cCY:function cCY(d){this.a=d},
cCV:function cCV(d,e){this.a=d
this.b=e},
cCW:function cCW(d,e){this.a=d
this.b=e},
cCX:function cCX(d){this.a=d},
cCQ:function cCQ(d,e){this.a=d
this.b=e},
cCR:function cCR(d,e){this.a=d
this.b=e},
cCT:function cCT(d){this.a=d},
cCU:function cCU(d){this.a=d},
cCS:function cCS(d,e){this.a=d
this.b=e},
dL1(){var x,w=$.dkt
if(w==null){w=A.o(y.N,y.K)
x=0
for(;x<1;++x)w.h(0,"moon_dance",D.TE[x])
$.dkt=w}return w}},E
J=c[1]
A=c[0]
C=c[2]
D=c[93]
B=a.updateHolder(c[24],B)
E=c[95]
B.aam.prototype={
S(){return new B.aSE()},
diF(){return this.d.$0()}}
B.aSE.prototype={
a_(){var x,w,v,u=this
u.a5()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.bp()
u.d=x
w=b.G.document.createElement("iframe")
w.src=u.a.c
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.bp()
u.e=w
v=A.eR(new B.cCM(u))
u.f!==$&&A.bp()
u.f=v
w.addEventListener("load",v)
$.aXO()
$.BP().Q5(x,new B.cCN(u),!0)},
aJ(d){var x,w
this.b0(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.h()
w.src=x}},
q(){var x,w=this.e
w===$&&A.h()
x=this.f
x===$&&A.h()
w.removeEventListener("load",x)
this.a7()},
u(d){var x=this.d
x===$&&A.h()
return A.d4C(null,C.DX,x)}}
B.F0.prototype={
S(){var x=$.ay()
return new B.ajS(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A))}}
B.ajS.prototype={
a_(){var x,w,v=this,u=4283785416,t="moon_dance/index.html"
v.a5()
x=v.a.c
x=B.dL1().k(0,x)==null
w=x?null:u
w=A.cO(w==null?u:w)
v.r!==$&&A.bp()
v.r=w
x=x?null:t
x=v.cni(x==null?t:x)
v.f!==$&&A.bp()
v.f=x
v.e=A.dB(E.aDe,new B.cCZ(v))
v.as=B.dYe(v.gbRZ())
v.at=B.dYf(v.gcEN())
v.Vu()},
Vu(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Vu=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.x.hO(),$async$Vu)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cCV(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.t(h)
$.v9().j(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.t(j)
$.v9().j(C.p,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.w.eL(!0),$async$Vu)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cCW(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a01(o,4))}catch(h){n=A.t(h)
$.v9().j(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cCX(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Vu,w)},
Je(){return this.ckF()},
ckF(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Je=A.i(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:f={}
e=s.Q
f.a=e
j=s.z
f.b=j==null?0:j
r=""
x=e==null?3:4
break
case 3:u=6
x=9
return A.c(s.x.hO(),$async$Je)
case 9:e=a4
f.a=e
if(s.c!=null&&e!=null)s.p(new B.cCQ(f,s))
u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.t(d)
$.v9().j(C.p,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=f.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a2){p=A.t(a2)
$.v9().j(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.z==null?10:12
break
case 10:u=14
x=17
return A.c(s.w.pD(),$async$Je)
case 17:o=a4
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
f.b=j==null?0:j
if(s.c!=null)s.p(new B.cCR(f,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.W(f.b,4))}catch(a2){n=A.t(a2)
$.v9().j(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a0=t.pop()
m=A.t(a0)
$.v9().j(C.p,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.w.pD(),$async$Je)
case 22:l=a4
h=l
g=h==null?null:h.b
r=g==null?"":g
u=2
x=21
break
case 19:u=18
a1=t.pop()
k=A.t(a1)
$.v9().j(C.p,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=f.b
f=f.a
if(f==null)f=""
v=A.a8(["type","HOST_INIT","jwt",f,"balance",h,"demoMode",h<0.25,"username",r],y.N,y.z)
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Je,w)},
Ci(d){return this.cEO(d)},
cEO(b5){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$Ci=A.i(function(b6,b7){if(b6===1){t.push(b7)
x=u}for(;;)switch(x){case 0:a9=b5.k(0,"type")
b0=a9==null?null:J.aj(a9)
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
case 5:v=s.Je()
x=1
break
case 6:s.Y7()
v=null
x=1
break
case 7:n=s.c
if(n!=null)A.aY(n,!1).f.aW(C.zN,y.X)
v=null
x=1
break
case 8:n=s.c
if(n!=null)A.aY(n,!1).f.aW(C.GX,y.X)
v=null
x=1
break
case 9:u=15
a9=A.mk(b5.k(0,"betIndex"))
r=a9==null?null:C.j.cf(a9)
a1=A.mk(b5.k(0,"betAmount"))
q=a1==null?null:a1
if(r==null||q==null){n=A.a8(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=n
x=1
break}a9=s.a.c
a2=A.aW(b5.k(0,"mode"))
if(a2==null)a2="REAL"
a3=A.aW(b5.k(0,"clientSeed"))
a4=A.aW(b5.k(0,"nonce"))
x=18
return A.c(s.y.Tx(q,r,A.aW(b5.k(0,"clientRoundId")),a3,a9,a2,a4),$async$Ci)
case 18:p=b7
o=J.aB(p,"data")
if(J.r(J.aB(p,"success"),!0)&&y.P.b(o)){n=A.o(y.N,y.z)
J.en(n,"type","SPIN_RESULT")
J.id(n,o)
v=n
x=1
break}n=J.aB(p,"message")
n=A.a8(["type","SPIN_ERROR","message",J.aj(n==null?"spin failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=17
break
case 15:u=14
b1=t.pop()
m=A.t(b1)
n=A.a8(["type","SPIN_ERROR","message",J.aj(m)],y.N,y.z)
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
return A.c(s.y.kG(),$async$Ci)
case 23:l=b7
if(J.r(J.aB(l,"success"),!0)){n=y.h
k=n.a(J.aB(l,"data"))
l=k
n=n.a(l==null?null:J.aB(l,"userInfo"))
a6=n==null?k:n
j=a6==null?A.o(y.N,y.z):a6
n=A.mk(J.aB(j,"balance"))
if(n==null)n=null
n=A.a8(["type","BALANCE_RESULT","balance",n==null?0:n],y.N,y.z)
v=n
x=1
break}n=J.aB(l,"message")
n=A.a8(["type","BALANCE_ERROR","message",J.aj(n==null?"getCurrentUser failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=22
break
case 20:u=19
b2=t.pop()
i=A.t(b2)
n=A.a8(["type","BALANCE_ERROR","message",J.aj(i)],y.N,y.z)
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
return A.c(s.y.RX(),$async$Ci)
case 28:h=b7
if(J.r(J.aB(h,"success"),!0)){n=A.a8(["type","RTP_RESULT","data",J.aB(h,"data")],y.N,y.z)
v=n
x=1
break}n=J.aB(h,"message")
n=A.a8(["type","RTP_ERROR","message",J.aj(n==null?"getRtpTable failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=27
break
case 25:u=24
b3=t.pop()
g=A.t(b3)
n=A.a8(["type","RTP_ERROR","message",J.aj(g)],y.N,y.z)
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
n=A.mk(b5.k(0,"page"))
a7=n==null?null:C.j.cf(n)
f=a7==null?1:a7
n=A.mk(b5.k(0,"size"))
a8=n==null?null:C.j.cf(n)
e=a8==null?10:a8
x=33
return A.c(s.y.S1(f,e),$async$Ci)
case 33:d=b7
if(J.r(J.aB(d,"success"),!0)){n=A.a8(["type","TRANSACTION_RESULT","data",J.aB(d,"data")],y.N,y.z)
v=n
x=1
break}n=J.aB(d,"message")
n=A.a8(["type","TRANSACTION_ERROR","message",J.aj(n==null?"getTransactions failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=32
break
case 30:u=29
b4=t.pop()
a0=A.t(b4)
n=A.a8(["type","TRANSACTION_ERROR","message",J.aj(a0)],y.N,y.z)
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
return A.l($async$Ci,w)},
q(){var x=this,w=x.as
if(w!=null)w.$0()
w=x.at
if(w!=null)w.$0()
w=x.e
if(w!=null)w.aj()
x.a7()},
u(d){var x,w=this,v=null,u=w.f
u===$&&A.h()
u=A.b([u],y.p)
if(w.d){x=w.r
x===$&&A.h()
u.push(A.aF(A.fq(v,x,v,v,v,v,v,v,v,v),v,v,v))}u.push(A.eh(0,A.fQ(C.c4,v,C.A,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.gbRZ(),v,v,v,v,v,v,!1,C.bN),108,v,0,v,v,75))
return A.bM(v,D.zi,A.di(C.aZ,u,C.r,C.b_,v),v,v,v,v,v)},
Y7(){var x=0,w=A.m(y.H),v,u=this
var $async$Y7=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.aoH(),$async$Y7)
case 3:case 1:return A.k(v,w)}})
return A.l($async$Y7,w)},
aoH(){var x=0,w=A.m(y.H),v,u=this,t
var $async$aoH=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=3
return A.c(A.a_(t,!1).vO(),$async$aoH)
case 3:if(!e&&u.c!=null){t=u.c
t.toString
A.aY(t,!1).f.ij("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$aoH,w)},
cni(d){var x=b.G.window.navigator.userAgent,w=$.duP()
if(w.b.test(x)){$.aD.y2$.push(new B.cCS(this,d))
return C.xb}return new B.aam("/games/"+d+"?flutter=1",new B.cCT(this),null)}}
var z=a.updateTypes(["ab<Z<q,@>?>(Z<q,@>)","ab<~>()"])
B.cYy.prototype={
$1(d){var x,w=A.ja(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.a_z(d.data)
if(y.f.b(x)&&J.r(x.k(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:8}
B.cYx.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cYA.prototype={
$1(d){var x,w,v,u,t,s=A.ja(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.a_z(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd7(),v=v.gap(v);v.F();){u=v.gP()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.cYB(this.b,w,d,s).$0()},
$S:8}
B.cYB.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=v.a.$1(v.b)
x=2
return A.c(y.u.b(s)?s:A.h2(s,y.h),$async$$0)
case 2:r=e
if(r!=null){u=v.c.source
if(u!=null)s=A.ja(u,"Window")
else s=!1
t=v.d
if(s)u.postMessage(A.bv(r),t)
else b.G.window.postMessage(A.bv(r),t)}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:94}
B.cYz.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cCM.prototype={
$1(d){return this.a.a.diF()},
$S:8}
B.cCN.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:389}
B.cCZ.prototype={
$0(){var x=this.a
if(x.c!=null&&x.d)x.p(new B.cCY(x))},
$S:0}
B.cCY.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cCV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cCW.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cCX.prototype={
$0(){return this.a.z=0},
$S:0}
B.cCQ.prototype={
$0(){return this.b.Q=this.a.a},
$S:0}
B.cCR.prototype={
$0(){return this.b.z=this.a.b},
$S:0}
B.cCT.prototype={
$0(){var x=this.a,w=x.e
if(w!=null)w.aj()
if(x.c!=null&&x.d)x.p(new B.cCU(x))},
$S:0}
B.cCU.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cCS.prototype={
$1(d){return this.c2G(d)},
c2G(a2){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$$1=A.i(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:e=s.a
if(e.c==null){x=1
break}u=4
k=e.Q
x=k==null?7:9
break
case 7:x=10
return A.c(e.x.hO(),$async$$1)
case 10:x=8
break
case 9:a4=k
case 8:j=a4
r=j==null?"":j
i=e.z
k=i==null
q=k?0:i
x=k?11:12
break
case 11:u=14
x=17
return A.c(e.w.eL(!0),$async$$1)
case 17:p=a4
k=p
i=k==null?null:k.f
q=i==null?0:i
u=4
x=16
break
case 14:u=13
d=t.pop()
o=A.t(d)
$.v9().j(C.p,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:k=b.G
k.window.localStorage.setItem("_flutter_game_jwt",r)
k.window.localStorage.setItem("_flutter_game_balance",J.a01(q,4))
g=e.y
k.window.localStorage.setItem("_flutter_game_api_base",g.alr())
k.window.localStorage.setItem("_flutter_game_id",e.a.c)
u=19
x=22
return A.c(g.RX(),$async$$1)
case 22:n=a4
if(J.r(J.aB(n,"success"),!0))k.window.localStorage.setItem("_flutter_game_rtp",C.aW.kq(J.aB(n,"data"),null))
u=4
x=21
break
case 19:u=18
a0=t.pop()
m=A.t(a0)
$.v9().j(C.aA,"RTP prefetch failed",m,null)
x=21
break
case 18:x=4
break
case 21:u=2
x=6
break
case 4:u=3
a1=t.pop()
l=A.t(a1)
$.v9().j(C.p,"mobile postFrame slot game prep failed",l,null)
x=6
break
case 3:x=2
break
case 6:e=e.c
if(e==null){x=1
break}x=23
return A.c(A.a_(e,!1).vO(),$async$$1)
case 23:f=Date.now()
b.G.window.location.assign("/games/"+s.b+"?flutter=1&_ts="+f)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:492};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ajS.prototype,"gcEN","Ci",0)
w(v,"gbRZ","Y7",1)})();(function inheritance(){var x=a.inheritMany
x(A.f_,[B.cYy,B.cYA,B.cCM,B.cCN,B.cCS])
x(A.fW,[B.cYx,B.cYB,B.cYz,B.cCZ,B.cCY,B.cCV,B.cCW,B.cCX,B.cCQ,B.cCR,B.cCT,B.cCU])
x(A.T,[B.aam,B.F0])
x(A.Y,[B.aSE,B.ajS])})()
A.fD(b.typeUniverse,JSON.parse('{"aam":{"T":[],"n":[]},"aSE":{"Y":["aam"]},"F0":{"T":[],"n":[]},"ajS":{"Y":["F0"]}}'))
var y=(function rtii(){var x=A.au
return{u:x("ab<Z<q,@>?>"),w:x("bfb"),p:x("F<n>"),P:x("Z<q,@>"),f:x("Z<@,@>"),a:x("bk"),K:x("W1"),A:x("Mb"),N:x("q"),r:x("MP"),z:x("@"),h:x("Z<q,@>?"),X:x("S?"),H:x("~")}})();(function constants(){E.aDe=new A.bK(8e6)})();(function staticFields(){$.dkt=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e5D","duP",()=>A.bq("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"e6B","v9",()=>A.aU("SlotGamePage"))})()};
(a=>{a["mrMqfgVdAqr0DjPrhZfBP8dDAmU="]=a.current})($__dart_deferred_initializers__);