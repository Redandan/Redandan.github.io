((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,F,B={
dIx(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Co
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Cp
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Cq
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vp
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vq
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Cr
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hj
return null},
drx(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
o0:function o0(d,e){this.a=d
this.b=e},
An:function An(d,e){this.a=d
this.b=e},
awn:function awn(d,e){this.a=d
this.b=e},
bko:function bko(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejd(d){var x=b.G,w=A.eM(new B.dgn(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dgm(w)},
eje(d){var x=b.G,w=A.eM(new B.dgp(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dgo(w)},
drW(d){B.dqR(A.bD(d),b.G.window.location.origin)},
dqR(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iq(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aO(u,e))v=!A.nL(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dgn:function dgn(d,e){this.a=d
this.b=e},
dgm:function dgm(d){this.a=d},
dgp:function dgp(d,e){this.a=d
this.b=e},
dgq:function dgq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgo:function dgo(d){this.a=d},
acg:function acg(d,e,f){this.c=d
this.d=e
this.a=f},
aWf:function aWf(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cTm:function cTm(d){this.a=d},
cTn:function cTn(d){this.a=d},
dCo(d,e){return new B.C1(d,e,null)},
C1:function C1(d,e,f){this.c=d
this.d=e
this.a=f},
alW:function alW(d,e,f,g){var _=this
_.f=_.e=_.d=null
_.r=d
_.w=e
_.x=f
_.y=$
_.z=g
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=null
_.fr=_.dy=_.dx=_.db=!1
_.fx=!0
_.fy=!1
_.c=_.a=_.k2=_.k1=_.id=_.go=null},
cTG:function cTG(d,e){this.a=d
this.b=e},
cTH:function cTH(d,e){this.a=d
this.b=e},
cTI:function cTI(d){this.a=d},
cTq:function cTq(d,e){this.a=d
this.b=e},
cTr:function cTr(d,e){this.a=d
this.b=e},
cTJ:function cTJ(){},
cTO:function cTO(d,e){this.a=d
this.b=e},
cTP:function cTP(d,e){this.a=d
this.b=e},
cTQ:function cTQ(d,e){this.a=d
this.b=e},
cTR:function cTR(d){this.a=d},
cTt:function cTt(d,e){this.a=d
this.b=e},
cTu:function cTu(d){this.a=d},
cTv:function cTv(d){this.a=d},
cTw:function cTw(d){this.a=d},
cTx:function cTx(d){this.a=d},
cTy:function cTy(d,e){this.a=d
this.b=e},
cTz:function cTz(d,e){this.a=d
this.b=e},
cTA:function cTA(d,e){this.a=d
this.b=e},
cTB:function cTB(d,e){this.a=d
this.b=e},
cTC:function cTC(d,e){this.a=d
this.b=e},
cTD:function cTD(d){this.a=d},
cTZ:function cTZ(d){this.a=d},
cU_:function cU_(d){this.a=d},
cU0:function cU0(d){this.a=d},
cU1:function cU1(d){this.a=d},
cU2:function cU2(d){this.a=d},
cU3:function cU3(d){this.a=d},
cU4:function cU4(d,e){this.a=d
this.b=e},
cU5:function cU5(d,e){this.a=d
this.b=e},
cU6:function cU6(d){this.a=d},
cU8:function cU8(d){this.a=d},
cU9:function cU9(d){this.a=d},
cUa:function cUa(d){this.a=d},
cUb:function cUb(d){this.a=d},
cUc:function cUc(d){this.a=d},
cUd:function cUd(d,e,f){this.a=d
this.b=e
this.c=f},
cUe:function cUe(d){this.a=d},
cUf:function cUf(d,e){this.a=d
this.b=e},
cUg:function cUg(d){this.a=d},
cTS:function cTS(d){this.a=d},
cTT:function cTT(d){this.a=d},
cTU:function cTU(d){this.a=d},
cTV:function cTV(d){this.a=d},
cTW:function cTW(d){this.a=d},
cTX:function cTX(d){this.a=d},
cTY:function cTY(d){this.a=d},
cTK:function cTK(d){this.a=d},
cTL:function cTL(){},
cTE:function cTE(){},
cTM:function cTM(d){this.a=d},
cTN:function cTN(){},
cTF:function cTF(){},
cTo:function cTo(d,e){this.a=d
this.b=e},
cTp:function cTp(d){this.a=d},
cTs:function cTs(d,e,f){this.a=d
this.b=e
this.c=f},
cU7:function cU7(d){this.a=d},
awo:function awo(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
bkp:function bkp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aef:function aef(d,e,f){this.c=d
this.d=e
this.a=f},
aws:function aws(d){this.a=d},
ejM(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.mS(v)
w=!0
if(x!=null)if(x.ge7().toLowerCase()==="https")if(x.ga2h().length===0)w=x.gXl()&&x.gKR()!==443||!C.a8O.t(0,x.gn1().toLowerCase())||x.gKE().length===0
if(w)return null
return x.cdm("telegram.me")},
drO(d){return d.c?d:A.dvL(A.bB(d),A.bE(d),A.cf(d),A.hN(d),A.mI(d),A.Ov(d),A.aB4(d),d.b)},
e2o(d){var x
if(d==null||d.length===0)return null
x=A.dCm().j(0,d)
return(x==null?null:x.e===C.ib)===!1?x:null},
Am(d,e,f,g){var x=null
return B.dW0(d,e,f,g)},
dW0(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Am=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a6C.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dJB():k).$0(),$async$Am)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a6C.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q0(s,a0),$async$Am)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a6C.h(0,a0,q)
x=15
return A.c(s.eS("String",a0,q),$async$Am)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q0(s,e),$async$Am)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q0(s,e),$async$Am)
case 21:case 20:case 12:o=d.$0()
$.a6C.h(0,a0,o)
x=22
return A.c(s.eS("String",a0,o),$async$Am)
case 22:n=a2
if(!n){k=A.b1("Game access attempt id was not persisted.")
throw A.t(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
m=A.u(g)
l=A.aH(g)
f.$2(m,l)
v=$.a6C.c5(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Am,w)},
a6D(d,e){var x=null
return B.dW_(d,e)},
dW_(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a6D=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.er(0)
for(p=J.aY(l);p.F();)$.a6C.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dJB():p).$0(),$async$a6D)
case 6:t=g
p=J.aY(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a2m().S(0,"flutter."+o),$async$a6D)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aH(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$a6D,w)}},D,G,H,L,M,I
J=c[1]
A=c[0]
C=c[2]
E=c[301]
K=c[302]
F=c[477]
B=a.updateHolder(c[151],B)
D=c[776]
G=c[177]
H=c[656]
L=c[738]
M=c[453]
I=c[546]
B.o0.prototype={
W(){return"GameAccessIssue."+this.b}}
B.An.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.awn.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bko.prototype={
gnb(){var x=this
if(x.b||x.c||!x.a)return D.NG
if(x.f)return D.aGJ
switch(x.r){case D.iD:return D.aGF
case D.Co:return D.aGG
case D.Cp:case D.Cq:return D.aGH
case D.vp:case D.hj:return D.NG
case D.vq:case D.Cr:case D.Cs:case D.NF:case D.iE:case D.vo:return D.qG
case D.hN:return D.qG
case null:case void 0:if(x.e)return D.qG
return x.d?D.aGI:D.qG}}}
B.acg.prototype={
O(){return new B.aWf()}}
B.aWf.prototype={
Z(){var x,w,v,u=this
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
v=A.eM(new B.cTm(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b0E()
$.Dn().a_L(x,new B.cTn(u),!0)},
aK(d){var x,w
this.b1(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.f()
w.src=x}},
q(){var x,w=this.f
if(w!=null){x=this.e
x===$&&A.f()
x.removeEventListener("load",w)}this.a6()},
u(d){var x=this.d
x===$&&A.f()
return A.dny(null,C.Ft,x)}}
B.C1.prototype={
O(){var x=$.az()
return new B.alW(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.alW.prototype={
gbzN(){var x,w=this.y
if(w===$){x=$.az().$1$0(y.T)
this.y!==$&&A.bc()
w=this.y=new G.aBi(x)}return w},
Z(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.R1()
return}w=v.d=B.e2o(x.c)
if(w==null){v.fx=!1
v.id=D.hj
return}if(!w.gbHc()){v.fx=!1
v.id=D.hj
return}if(w.e!==C.ib){v.fx=!1
v.k1=B.ejd(v.gbxQ())
v.k2=B.eje(v.gcSv())
v.agc()
v.ax=v.ahx()
return}},
b8(){var x,w=this
w.bF()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.ib){w.fr=!0
w.f=w.bRS()}},
agc(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$agc=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hE(),$async$agc)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cTG(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.i4().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.i4().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hm(!0),$async$agc)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cTH(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a2z(o,4))}catch(h){n=A.u(h)
$.i4().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cTI(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$agc,w)},
yu(){return this.cxB()},
cxB(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yu=A.h(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:a0={}
a1=s.as
a0.a=a1
j=s.Q
a0.b=j==null?0:j
r=""
x=a1==null?3:4
break
case 3:u=6
x=9
return A.c(s.w.hE(),$async$yu)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cTq(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.i4().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.i4().k(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.q9(),$async$yu)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cTr(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.X(a0.b,4))}catch(a5){n=A.u(a5)
$.i4().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.i4().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.q9(),$async$yu)
case 22:l=a7
h=l
g=h==null?null:h.b
r=g==null?"":g
u=2
x=21
break
case 19:u=18
a4=t.pop()
k=A.u(a4)
$.i4().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.ags(),$async$yu)
case 23:f=a7
e=A.p(y.N,y.z)
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
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$yu,w)},
ags(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ags=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahx()
v=t.uz(C.Ml,new B.cTJ())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ags,w)},
ahx(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahx=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdg(l.a),$async$ahx)
case 7:q=e
if(J.r(J.aG(q,"success"),!0)&&y.f.b(J.aG(q,"data"))){p=A.uP(y.f.a(J.aG(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aO.iC(p,null))}catch(j){o=A.u(j)
$.i4().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.i4().k(C.q,"_getSlotRtpData failed",n,null)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.at==null)r.ax=null
x=s.pop()
break
case 6:v=null
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ahx,w)},
R1(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$R1=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzN().nk(l),$async$R1)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cTO(s,r))
x=1
break}s.p(new B.cTP(s,r))
x=8
return A.c(s.oK(),$async$R1)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.ls){q=m
$.i4().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cTQ(s,q))}else{p=m
o=A.aH(k)
m=$.i4()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cTR(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$R1,w)},
oK(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oK=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.ib){if(s.c==null){x=1
break}s.p(new B.cTt(s,f))
x=1
break}if(!f.gbHc()){if(s.c==null){x=1
break}s.p(new B.cTu(s))
x=1
break}if(s.c!=null)s.p(new B.cTv(s))
u=4
x=7
return A.c(s.w.hE(),$async$oK)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cTw(s))
x=1
break}if(s.c==null){x=1
break}q=s.beG(r)
if(q==null){s.p(new B.cTx(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzN().a.Cd(d),$async$oK)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cTy(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bYj(p.r)
if(p.b!==!0||o!=null){s.p(new B.cTz(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cTA(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hN)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dct(!0),$async$oK)
case 13:case 12:x=1
break
case 10:s.p(new B.cTB(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.ls){m=k
$.i4().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cTC(s,m))}else{l=k
$.i4().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cTD(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oK,w)},
bA_(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.R1()
return w.oK()},
qq(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$qq=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.ib){if(s.c==null){x=1
break}if(h)s.p(new B.cTZ(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cU_(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oK(),$async$qq)
case 5:x=1
break
case 4:s.p(new B.cU0(s))
u=7
x=10
return A.c(s.w.hE(),$async$qq)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cU1(s))
x=1
break}if(s.c==null){x=1
break}o=s.beG(p)
if(o==null){s.p(new B.cU2(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bAc(o)
x=13
return A.c(s.oK(),$async$qq)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byW(),$async$qq)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzN().a.L1(q,new G.awr(n)),$async$qq)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NK?16:17
break
case 16:x=18
return A.c(s.afq(),$async$qq)
case 18:if(s.c==null){x=1
break}s.p(new B.cU3(s))
x=19
return A.c(s.oK(),$async$qq)
case 19:x=1
break
case 17:s.p(new B.cU4(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.ls?20:22
break
case 20:l=h
$.i4().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhE(l,D.vo)
f=l.b.toUpperCase()
x=k===D.vq||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afq(),$async$qq)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cU5(s,k))
x=21
break
case 22:j=h
$.i4().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cU6(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$qq,w)},
lU(d,e){return this.dcu(d,!0)},
dct(d){return this.lU(!0,d)},
dcu(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lU=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.cy
b1=s.ay
if(b6.e===C.ib){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.p(new B.cU8(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cU9(s))
u=4
x=7
return A.c(s.w.hE(),$async$lU)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beG(p)
if(o==null){s.p(new B.cUa(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bAc(o)
x=10
return A.c(s.oK(),$async$lU)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.vk(!0),$async$lU)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cUb(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byX(),$async$lU)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DU(b6.a,new B.aws(n)),$async$lU)
case 15:m=c2
l=new A.ax(Date.now(),0,!1).a0()
k=m==null?null:B.ejM(m.w)
j=m==null?null:B.drO(m.f)
i=m==null?null:B.drO(m.r)
h=m==null?null:B.drO(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NM
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bR(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.ip(l))===!0
b2=h
a3=(b2==null?null:b2.ip(l))===!0
a4=h!=null&&i!=null&&!h.ip(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.bY(a7,"status")
if(!f)J.bY(a7,"session_id")
if(!e)J.bY(a7,"entitlement")
if(!d)J.bY(a7,"game_key")
if(!a0)J.bY(a7,"client_session")
if(!a1)J.bY(a7,"session_started_at")
if(!a2)J.bY(a7,"session_expiry")
if(!a3)J.bY(a7,"launch_expiry")
if(!a4)J.bY(a7,"launch_expiry_bound")
if(!a5)J.bY(a7,"launch_url_untrusted")
a8=a7
$.i4().k(C.q,"game session response rejected: "+J.a2w(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.EG(b6.a,!0,m.a),$async$lU)
case 20:case 19:x=21
return A.c(s.PQ(),$async$lU)
case 21:if(s.c==null){x=1
break}s.p(new B.cUc(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.vk(!0),$async$lU)
case 24:x=1
break
case 23:x=b6.e===C.ib?25:26
break
case 25:s.p(new B.cUd(s,k,h))
x=27
return A.c(s.vs(),$async$lU)
case 27:x=1
break
case 26:s.p(new B.cUe(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.ls?28:30
break
case 28:a9=a7
$.i4().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PQ(),$async$lU)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lU(!1,!0),$async$lU)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cUf(s,a9))
x=29
break
case 30:b0=a7
$.i4().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cUg(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lU,w)},
vs(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vs=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cTS(s))
x=!k.ip(new A.ax(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.vk(!0),$async$vs)
case 5:if(s.c==null){x=1
break}s.p(new B.cTT(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hE(),$async$vs)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aH(f)
h=$.i4()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cTU(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beG(q)
if(g==null){s.p(new B.cTV(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bAc(g)
x=13
return A.c(s.oK(),$async$vs)
case 13:x=1
break
case 12:u=15
s.p(new B.cTW(s))
x=18
return A.c(A.z2(r,C.ol,"_self"),$async$vs)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cTX(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aH(e)
h=$.i4()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.vk(!0),$async$vs)
case 19:if(s.c==null){x=1
break}s.p(new B.cTY(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vs,w)},
vk(d){return this.cHT(!0)},
cHT(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$vk=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.EG(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$vk)
case 6:m=f
v=m
s=[1]
x=4
break
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
m=r.go
l=q
if(m==null?l==null:m===l)r.go=null
x=s.pop()
break
case 5:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vk,w)},
EG(d,e,f){return this.cI_(d,!0,f)},
cI_(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EG=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.Ib(d,f),$async$EG)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.i4().k(C.aA,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.ds(C.Bb,null,l),$async$EG)
case 12:case 11:x=8
break
case 5:x=2
break
case 8:++n
x=3
break
case 4:x=p?13:14
break
case 13:m=s.ch
if((m==null?null:m.a)===f)s.ch=null
s.cx=s.CW=null
x=15
return A.c(s.PQ(),$async$EG)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EG,w)},
byW(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byW=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc_Z()
v=B.Am(new B.cTK(u),u.gbYs(),new B.cTL(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byW,w)},
afq(){var x=0,w=A.l(y.H),v=this
var $async$afq=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6D(new B.cTE(),A.eb([v.gc_Z(),v.gbYs()],y.N)),$async$afq)
case 2:return A.j(null,w)}})
return A.k($async$afq,w)},
byX(){var x=0,w=A.l(y.N),v,u=this
var $async$byX=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Am(new B.cTM(u),null,new B.cTN(),u.gc25())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byX,w)},
PQ(){var x=0,w=A.l(y.H),v=this
var $async$PQ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6D(new B.cTF(),A.eb([v.gc25()],y.N)),$async$PQ)
case 2:return A.j(null,w)}})
return A.k($async$PQ,w)},
beG(d){var x=A.dyg(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bAc(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_Z(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.drx(D.NE,this.cy,"product-"+x)},
gbYs(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.drx(D.NE,this.cy,x)},
gc25(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.drx(D.aGE,this.cy,x)},
bZk(d){var x,w=Date.now(),v=C.i.mq($.b0u().JV(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bYj(d){var x=B.dIx(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iE},
bhE(d,e){var x,w=d.a
if(w===401)return D.iD
x=B.dIx(d.b)
if(x!=null)return x
if(w===404)return D.hj
return e},
cYk(d,e){switch(e){case D.iD:return d.gabk()
case D.Co:return d.gabu()
case D.Cp:return d.gab9()
case D.Cq:return d.gabp()
case D.vp:return d.gabg()
case D.vq:return d.gab8()
case D.Cr:return d.gabi()
case D.hj:return d.gabn()
case D.Cs:return d.gaba()
case D.NF:return d.gabr()
case D.iE:return d.gab7()
case D.vo:return d.gabd()
case D.hN:return d.gabs()
case null:case void 0:return null}},
EO(d){return this.cSw(d)},
cSw(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EO=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agy()
v=null
x=1
break}r=s.d
if(r==null){v=null
x=1
break}case 3:switch(b1){case"GAME_READY":x=5
break
case"GO_DEPOSIT":x=6
break
case"GO_WITHDRAW":x=7
break
case"SPIN_REQUEST":x=8
break
case"BALANCE_REQUEST":x=9
break
case"RTP_REQUEST":x=10
break
case"TRANSACTION_REQUEST":x=11
break
default:x=12
break}break
case 5:v=s.yu()
x=1
break
case 6:m=s.c
if(m!=null)A.aL(m,!1).f.aG(H.qs,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aL(m,!1).f.aG(L.z0,y.X)
v=null
x=1
break
case 8:u=14
b0=A.mk(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c2(b0)
a2=A.mk(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aT(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aT(b6.j(0,"clientSeed"))
a5=A.aT(b6.j(0,"nonce"))
x=17
return A.c(s.x.abE(p,q,A.aT(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$EO)
case 17:o=b8
n=J.aG(o,"data")
if(J.r(J.aG(o,"success"),!0)&&y.P.b(n)){m=A.p(y.N,y.z)
J.eV(m,"type","SPIN_RESULT")
J.hU(m,n)
v=m
x=1
break}m=J.aG(o,"message")
m=A.aa(["type","SPIN_ERROR","message",J.ap(m==null?"spin failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=16
break
case 14:u=13
b2=t.pop()
l=A.u(b2)
m=A.aa(["type","SPIN_ERROR","message",J.ap(l)],y.N,y.z)
v=m
x=1
break
x=16
break
case 13:x=2
break
case 16:x=4
break
case 9:u=19
x=22
return A.c(s.x.j7(),$async$EO)
case 22:k=b8
if(J.r(J.aG(k,"success"),!0)){m=y.h
j=m.a(J.aG(k,"data"))
k=j
m=m.a(k==null?null:J.aG(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.p(y.N,y.z):a7
m=A.mk(J.aG(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aG(k,"message")
m=A.aa(["type","BALANCE_ERROR","message",J.ap(m==null?"getCurrentUser failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=21
break
case 19:u=18
b3=t.pop()
h=A.u(b3)
m=A.aa(["type","BALANCE_ERROR","message",J.ap(h)],y.N,y.z)
v=m
x=1
break
x=21
break
case 18:x=2
break
case 21:x=4
break
case 10:u=24
x=27
return A.c(s.ags(),$async$EO)
case 27:g=b8
if(g!=null){m=A.aa(["type","RTP_RESULT","data",g],y.N,y.z)
v=m
x=1
break}m=A.aa(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=m
x=1
break
u=2
x=26
break
case 24:u=23
b4=t.pop()
f=A.u(b4)
m=A.aa(["type","RTP_ERROR","message",J.ap(f)],y.N,y.z)
v=m
x=1
break
x=26
break
case 23:x=2
break
case 26:x=4
break
case 11:u=29
m=A.mk(b6.j(0,"page"))
a8=m==null?null:C.k.c2(m)
e=a8==null?1:a8
m=A.mk(b6.j(0,"size"))
a9=m==null?null:C.k.c2(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a3h(e,d),$async$EO)
case 32:a0=b8
if(J.r(J.aG(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aG(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aG(a0,"message")
m=A.aa(["type","TRANSACTION_ERROR","message",J.ap(m==null?"getTransactions failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=31
break
case 29:u=28
b5=t.pop()
a1=A.u(b5)
m=A.aa(["type","TRANSACTION_ERROR","message",J.ap(a1)],y.N,y.z)
v=m
x=1
break
x=31
break
case 28:x=2
break
case 31:x=4
break
case 12:v=null
x=1
break
case 4:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EO,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.vk(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.e2(0,A.hc(C.bu,s,C.x,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxQ(),s,s,s,s,s,s,!1,C.bZ),108,s,0,s,s,75)],w))
else v.push(t.cvU(d))
if(u)v.push(new A.dS(!0,!0,!0,!0,C.J,!1,new A.cl(C.h3,s,s,A.aK(s,s,s,s,s,D.aL_,s,s,t.gbxQ(),s,s,s,s,r.gh8(),s),s),s))
return A.bP(s,D.aqQ,A.de(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvU(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
a0.toString
x=e.d
w=e.ay
v=e.e
u=w==null
t=(u?d:w.c)===!0
if(e.a.d!=null)if(e.id==null){s=!0
if(!e.fx)if(!e.dy)if(!e.db)r=t&&e.CW==null
else r=s
else r=s
else r=s
s=r}else s=!1
else s=!1
if(s){u=e.db?a0.gDP():a0.gOA()
if(e.db){a0=a0.gDP()
r=A.q(a1).ok.y
a0=new A.I(E.b3,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aH,d,d),d)}else a0=D.bvH
return A.aI(A.P(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.c.G(A.b(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.c.G(A.b(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbHc())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bko(r,p,l,k===!0,u===!0,!j,i)
g=e.cYk(a0,i)
if(e.db)f=a0.gDP()
else f=j?d:a0.gabe()
u=x==null?d:x.b
a0=u==null?a0.gabo():u
u=g==null
r=u?f:g
return new B.awo(a0,h,q,m,r,!u,!t,new B.cTo(e,h),new B.cTp(e),d)},
cRn(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aL(x,!1).f.aG(C.er,y.X)
return
case 2:w.ahS()
return
case 3:x=w.c
x.toString
A.aL(x,!1).f.aG(H.qs,y.X)
return
case 4:w.qq()
return
case 5:w.vs()
return
case 6:w.bA_()
return
case 0:return}},
ahS(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahS=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aL(t,!1).f.aG(C.pN,y.X),$async$ahS)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bA_(),$async$ahS)
case 4:case 1:return A.j(v,w)}})
return A.k($async$ahS,w)},
agy(){var x=0,w=A.l(y.H),v,u=this
var $async$agy=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ahI(),$async$agy)
case 3:case 1:return A.j(v,w)}})
return A.k($async$agy,w)},
ahI(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahI=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.vk(!0),$async$ahI)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.a4(t,!1).AS(),$async$ahI)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aL(t,!1).f.hB("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahI,w)},
bRS(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dNz()
if(x.b.test(u)){$.ay.y2$.push(new B.cTs(w,v,t))
return C.ys}return new B.acg(w.bVv(t,Date.now()),w.gd9x(),null)},
bVv(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d9y(){new B.cU7(this).$0()}}
B.awo.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dS(!0,!0,!0,!0,C.J,!1,A.cW(new B.bkp(this,x,A.q(d),this.cJU(x))),null)},
cJU(d){switch(this.d.gnb().a){case 1:return d.gDQ()
case 2:return d.gYn()
case 3:return d.gabm()
case 4:return d.gabl()
case 5:return d.guX()
case 6:return d.gabj()
case 0:return null}}}
B.aef.prototype={
u(d){var x=null,w=A.q(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.Q(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.I(M.em,A.y(A.a([u,C.a9,new A.eB(1,C.bm,A.d(this.d,x,x,x,x,x,v,C.j4,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.aws.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aws&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.p(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["T<a0<o,@>?>(a0<o,@>)","T<~>()","~()"])
B.dgn.prototype={
$1(d){var x,w=A.iq(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.SV(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dgm.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dgp.prototype={
$1(d){var x,w,v,u,t,s=A.iq(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.SV(d.data)
if(!y.f.b(x))return
w=A.p(y.N,y.z)
for(v=x.gd3(),v=v.gam(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dgq(this.b,w,d,s).$0()},
$S:9}
B.dgq.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.hl(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bD(q)
t=v.c.source
if(t!=null)r=A.iq(t,"Object")
else r=!1
s=v.d
if(r){A.W1(t,"postMessage",u,s,y.X)
B.dqR(u,s)}else{B.dqR(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:98}
B.dgo.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cTm.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cTn.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:418}
B.cTG.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cTH.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cTI.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cTq.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cTr.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cTJ.prototype={
$0(){return null},
$S:17}
B.cTO.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hj},
$S:0}
B.cTP.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.y9(w.b,w.gdr9(),"Telegram Mini App",null,C.ib,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cTQ.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhE(this.b,D.iE)},
$S:0}
B.cTR.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iE},
$S:0}
B.cTt.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hj},
$S:0}
B.cTu.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hj},
$S:0}
B.cTv.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cTw.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cTx.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cTy.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iE:D.hj},
$S:0}
B.cTz.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iE:x},
$S:0}
B.cTA.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hN},
$S:0}
B.cTB.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bYj(x.r)
if(w==null)x=x.b===!0?null:D.iE
else x=w
v.id=x},
$S:0}
B.cTC.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhE(this.b,D.iE)},
$S:0}
B.cTD.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cTZ.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cU_.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cU0.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cU1.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cU2.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cU3.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cU4.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NL?D.vp:D.Cs},
$S:0}
B.cU5.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cU6.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vo},
$S:0}
B.cU8.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hN},
$S:0}
B.cU9.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cUa.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cUb.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cUc.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hN},
$S:0}
B.cUd.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cUe.prototype={
$0(){var x=this.a
x.f=x.bRS()
x.fx=!1},
$S:0}
B.cUf.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhE(this.b,D.hN)},
$S:0}
B.cUg.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cTS.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cTT.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cTU.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cTV.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cTW.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cTX.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cTY.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cTK.prototype={
$0(){return this.a.bZk("game-access")},
$S:29}
B.cTL.prototype={
$2(d,e){return $.i4().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:41}
B.cTE.prototype={
$2(d,e){return $.i4().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:41}
B.cTM.prototype={
$0(){return this.a.bZk("game-session")},
$S:29}
B.cTN.prototype={
$2(d,e){return $.i4().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:41}
B.cTF.prototype={
$2(d,e){return $.i4().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:41}
B.cTo.prototype={
$0(){return this.a.cRn(this.b.gnb())},
$S:0}
B.cTp.prototype={
$0(){this.a.bA_()
return null},
$S:0}
B.cTs.prototype={
$1(d){return this.ceZ(d)},
ceZ(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hE(),$async$$1)
case 10:x=8
break
case 9:a1=l
case 8:k=a1
r=k==null?"":k
j=h.Q
l=j==null
q=l?0:j
x=l?11:12
break
case 11:u=14
x=17
return A.c(h.r.hm(!0),$async$$1)
case 17:p=a1
l=p
j=l==null?null:l.f
q=j==null?0:j
u=4
x=16
break
case 14:u=13
g=t.pop()
o=A.u(g)
$.i4().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a2z(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beL())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.ags(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.i4().k(C.aA,"RTP prefetch failed",n,null)
x=21
break
case 18:x=4
break
case 21:u=2
x=6
break
case 4:u=3
e=t.pop()
m=A.u(e)
$.i4().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.a4(l,!1).AS(),$async$$1)
case 23:h=h.bVv(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:552}
B.cU7.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yu(),$async$$0)
case 2:t=e
B.drW(t)
u=y.H
x=3
return A.c(A.ds(D.aCL,null,u),$async$$0)
case 3:B.drW(t)
x=4
return A.c(A.ds(D.aCt,null,u),$async$$0)
case 4:B.drW(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:98}
B.bkp.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cf(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.abb(w)
u=A.B(8)
t=A.aE(C.E.v(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.A),C.aH,k,k)],q)
if(x.x){w=j.gOB()
p=s.z
w=A.a([F.dW,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gabq()
if(o)p="-"
o=j.gabh()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([I.H0,new B.aef(n,p,k),new B.aef(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apt:D.aqg)
C.e.A(r,A.a([I.H0,A.P(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQ8,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bp(C.nm,A.a([C.n0,A.d(w.c?j.gabc():j.gOA(),k,k,k,k,k,k,C.aH,k,k)],q),C.bG,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.e.A(r,A.a([D.bvJ,A.cD(o,D.bMD,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gnb()!==D.qG
else w=!1
if(w)C.e.A(r,A.a([F.dW,A.aJ(A.d(j.gabf(),k,k,k,k,k,k,C.aH,k,k),D.bMY,k,k,x.z,k,k)],q))
return A.b4(new A.bb(new A.at(0,1/0,i,1/0),A.aI(A.P(k,k,k,new A.bb(K.K6,new A.bZ(new A.O(D.aoG,k,t,u,k,k,C.r),C.aq,new A.I(E.b3,A.w(r,C.aj,k,C.d,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bSA,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.x,k,k,D.aEc,k,k,C.y)},
$S:100};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.alW.prototype,"gcSv","EO",0)
w(v,"gbxQ","agy",1)
w(v,"gd9x","d9y",2)})();(function inheritance(){var x=a.inheritMany
x(A.eq,[B.o0,B.An,B.awn])
x(A.G,[B.bko,B.aws])
x(A.bw,[B.dgn,B.dgp,B.cTm,B.cTn,B.cTs])
x(A.bv,[B.dgm,B.dgq,B.dgo,B.cTG,B.cTH,B.cTI,B.cTq,B.cTr,B.cTJ,B.cTO,B.cTP,B.cTQ,B.cTR,B.cTt,B.cTu,B.cTv,B.cTw,B.cTx,B.cTy,B.cTz,B.cTA,B.cTB,B.cTC,B.cTD,B.cTZ,B.cU_,B.cU0,B.cU1,B.cU2,B.cU3,B.cU4,B.cU5,B.cU6,B.cU8,B.cU9,B.cUa,B.cUb,B.cUc,B.cUd,B.cUe,B.cUf,B.cUg,B.cTS,B.cTT,B.cTU,B.cTV,B.cTW,B.cTX,B.cTY,B.cTK,B.cTM,B.cTo,B.cTp,B.cU7])
x(A.J,[B.acg,B.C1])
x(A.R,[B.aWf,B.alW])
x(A.c2,[B.cTL,B.cTE,B.cTN,B.cTF,B.bkp])
x(A.x,[B.awo,B.aef])})()
A.aV(b.typeUniverse,JSON.parse('{"acg":{"J":[],"m":[]},"aWf":{"R":["acg"]},"C1":{"J":[],"m":[]},"alW":{"R":["C1"]},"awo":{"x":[],"m":[]},"aef":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.A
return{J:x("bu"),u:x("T<a0<o,@>?>"),T:x("Fq"),w:x("jQ"),s:x("v<o>"),p:x("v<m>"),P:x("a0<o,@>"),f:x("a0<@,@>"),a:x("b8"),A:x("Q6"),N:x("o"),x:x("Qy"),r:x("vN"),O:x("W<o>"),y:x("L"),z:x("@"),h:x("a0<o,@>?"),X:x("G?"),H:x("~")}})();(function constants(){D.aoG=new A.Z(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.apt=new A.Z(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.aqg=new A.Z(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.z)
D.aqQ=new A.Z(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aCt=new A.bL(175e4)
D.aCL=new A.bL(75e4)
D.aEc=new A.ao(20,64,20,24)
D.NE=new B.awn(0,"purchase")
D.aGE=new B.awn(1,"session")
D.iD=new B.o0(0,"signInRequired")
D.Co=new B.o0(1,"telegramAccountNotLinked")
D.iE=new B.o0(10,"requestFailed")
D.vo=new B.o0(11,"purchaseFailed")
D.hN=new B.o0(12,"sessionFailed")
D.Cp=new B.o0(2,"insufficientBalance")
D.Cq=new B.o0(3,"walletInactive")
D.vp=new B.o0(4,"refundPending")
D.vq=new B.o0(5,"accessExpired")
D.Cr=new B.o0(6,"accessRequired")
D.hj=new B.o0(7,"gameUnavailable")
D.Cs=new B.o0(8,"accessNotActive")
D.NF=new B.o0(9,"sessionDenied")
D.NG=new B.An(0,"none")
D.aGF=new B.An(1,"signIn")
D.aGG=new B.An(2,"bindTelegram")
D.aGH=new B.An(3,"topUp")
D.aGI=new B.An(4,"purchase")
D.aGJ=new B.An(5,"openGame")
D.qG=new B.An(6,"retry")
D.aL_=new A.aq(C.jA,null,C.E,null,null)
D.anT=new A.mr(2.5,null,null,null,null,null,null,null,null,null)
D.bvH=new A.ae(28,28,D.anT,null)
D.bvJ=new A.ae(null,22,null,null)
D.bMD=new A.W("slot-game-access-primary",y.O)
D.bMY=new A.W("slot-game-access-refresh",y.O)
D.bQ8=new A.W("slot-game-access-message",y.O)
D.bSA=new A.W("slot-game-access-gate",y.O)})();(function staticFields(){$.a6C=function(){var x=y.N
return A.p(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"es4","dNz",()=>A.bg("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"et3","i4",()=>A.aW("SlotGamePage"))})()};
(a=>{a["QTlHgG2wLQ9mOl2PtEpoVtYZXJU="]=a.current})($__dart_deferred_initializers__);