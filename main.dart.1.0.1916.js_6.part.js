((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dFb(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cm
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Cn
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Co
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vn
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vo
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Cp
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hg
return null},
dol(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nC:function nC(d,e){this.a=d
this.b=e},
zA:function zA(d,e){this.a=d
this.b=e},
avx:function avx(d,e){this.a=d
this.b=e},
bj5:function bj5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ebO(d){var x=b.G,w=A.eT(new B.dd2(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dd1(w)},
ebP(d){var x=b.G,w=A.eT(new B.dd4(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dd3(w)},
doL(d){B.dnF(A.bA(d),b.G.window.location.origin)},
dnF(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ij(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aO(u,e))v=!A.ni(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dd2:function dd2(d,e){this.a=d
this.b=e},
dd1:function dd1(d){this.a=d},
dd4:function dd4(d,e){this.a=d
this.b=e},
dd5:function dd5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dd3:function dd3(d){this.a=d},
abr:function abr(d,e,f){this.c=d
this.d=e
this.a=f},
aVp:function aVp(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cQb:function cQb(d){this.a=d},
cQc:function cQc(d){this.a=d},
dzc(d,e){return new B.GX(d,e,null)},
GX:function GX(d,e,f){this.c=d
this.d=e
this.a=f},
al4:function al4(d,e,f,g){var _=this
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
cQv:function cQv(d,e){this.a=d
this.b=e},
cQw:function cQw(d,e){this.a=d
this.b=e},
cQx:function cQx(d){this.a=d},
cQf:function cQf(d,e){this.a=d
this.b=e},
cQg:function cQg(d,e){this.a=d
this.b=e},
cQy:function cQy(){},
cQD:function cQD(d,e){this.a=d
this.b=e},
cQE:function cQE(d,e){this.a=d
this.b=e},
cQF:function cQF(d,e){this.a=d
this.b=e},
cQG:function cQG(d){this.a=d},
cQi:function cQi(d,e){this.a=d
this.b=e},
cQj:function cQj(d){this.a=d},
cQk:function cQk(d){this.a=d},
cQl:function cQl(d){this.a=d},
cQm:function cQm(d){this.a=d},
cQn:function cQn(d,e){this.a=d
this.b=e},
cQo:function cQo(d,e){this.a=d
this.b=e},
cQp:function cQp(d,e){this.a=d
this.b=e},
cQq:function cQq(d,e){this.a=d
this.b=e},
cQr:function cQr(d,e){this.a=d
this.b=e},
cQs:function cQs(d){this.a=d},
cQO:function cQO(d){this.a=d},
cQP:function cQP(d){this.a=d},
cQQ:function cQQ(d){this.a=d},
cQR:function cQR(d){this.a=d},
cQS:function cQS(d){this.a=d},
cQT:function cQT(d){this.a=d},
cQU:function cQU(d,e){this.a=d
this.b=e},
cQV:function cQV(d,e){this.a=d
this.b=e},
cQW:function cQW(d){this.a=d},
cQY:function cQY(d){this.a=d},
cQZ:function cQZ(d){this.a=d},
cR_:function cR_(d){this.a=d},
cR0:function cR0(d){this.a=d},
cR1:function cR1(d){this.a=d},
cR2:function cR2(d,e,f){this.a=d
this.b=e
this.c=f},
cR3:function cR3(d){this.a=d},
cR4:function cR4(d,e){this.a=d
this.b=e},
cR5:function cR5(d){this.a=d},
cQH:function cQH(d){this.a=d},
cQI:function cQI(d){this.a=d},
cQJ:function cQJ(d){this.a=d},
cQK:function cQK(d){this.a=d},
cQL:function cQL(d){this.a=d},
cQM:function cQM(d){this.a=d},
cQN:function cQN(d){this.a=d},
cQz:function cQz(d){this.a=d},
cQA:function cQA(){},
cQt:function cQt(){},
cQB:function cQB(d){this.a=d},
cQC:function cQC(){},
cQu:function cQu(){},
cQd:function cQd(d,e){this.a=d
this.b=e},
cQe:function cQe(d){this.a=d},
cQh:function cQh(d,e,f){this.a=d
this.b=e
this.c=f},
cQX:function cQX(d){this.a=d},
avy:function avy(d,e,f,g,h,i,j,k,l,m){var _=this
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
bj6:function bj6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adr:function adr(d,e,f){this.c=d
this.d=e
this.a=f},
avC:function avC(d){this.a=d},
ecn(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.n6(v)
w=!0
if(x!=null)if(x.ge5().toLowerCase()==="https")if(x.ga1Z().length===0)w=x.gXb()&&x.gKI()!==443||!C.a8L.t(0,x.gmU().toLowerCase())||x.gKv().length===0
if(w)return null
return x.ccH("telegram.me")},
doD(d){return d.c?d:A.dsC(A.by(d),A.bB(d),A.c1(d),A.ht(d),A.me(d),A.N2(d),A.aAg(d),d.b)},
dYU(d){var x
if(d==null||d.length===0)return null
x=A.dza().j(0,d)
return(x==null?null:x.e===C.i9)===!1?x:null},
zz(d,e,f,g){var x=null
return B.dSc(d,e,f,g)},
dSc(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zz=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a5W.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dGb():k).$0(),$async$zz)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a5W.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.pC(s,a0),$async$zz)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a5W.h(0,a0,q)
x=15
return A.c(s.eQ("String",a0,q),$async$zz)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.pC(s,e),$async$zz)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.pC(s,e),$async$zz)
case 21:case 20:case 12:o=d.$0()
$.a5W.h(0,a0,o)
x=22
return A.c(s.eQ("String",a0,o),$async$zz)
case 22:n=a2
if(!n){k=A.b_("Game access attempt id was not persisted.")
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
v=$.a5W.c8(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$zz,w)},
a5X(d,e){var x=null
return B.dSb(d,e)},
dSb(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a5X=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.ex(0)
for(p=J.aY(l);p.F();)$.a5W.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dGb():p).$0(),$async$a5X)
case 6:t=g
p=J.aY(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a1G().S(0,"flutter."+o),$async$a5X)
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
return A.k($async$a5X,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[108]
B.nC.prototype={
W(){return"GameAccessIssue."+this.b}}
B.zA.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.avx.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bj5.prototype={
gn3(){var x=this
if(x.b||x.c||!x.a)return D.NB
if(x.f)return D.aGJ
switch(x.r){case D.iB:return D.aGF
case D.Cm:return D.aGG
case D.Cn:case D.Co:return D.aGH
case D.vn:case D.hg:return D.NB
case D.vo:case D.Cp:case D.Cq:case D.NA:case D.iC:case D.vm:return D.qE
case D.hL:return D.qE
case null:case void 0:if(x.e)return D.qE
return x.d?D.aGI:D.qE}}}
B.abr.prototype={
O(){return new B.aVp()}}
B.aVp.prototype={
Y(){var x,w,v,u=this
u.a5()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.b1()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.b1()
u.e=w
v=A.eT(new B.cQb(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b_N()
$.Cn().a_t(x,new B.cQc(u),!0)},
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
return A.dkj(null,C.Fq,x)}}
B.GX.prototype={
O(){var x=$.ax()
return new B.al4(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.al4.prototype={
gbzv(){var x,w=this.y
if(w===$){x=$.ax().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new A.aAu(x)}return w},
Y(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.QU()
return}w=v.d=B.dYU(x.c)
if(w==null){v.fx=!1
v.id=D.hg
return}if(!w.gbGT()){v.fx=!1
v.id=D.hg
return}if(w.e!==C.i9){v.fx=!1
v.k1=B.ebO(v.gbxx())
v.k2=B.ebP(v.gcRV())
v.ag0()
v.ax=v.ahl()
return}},
bf(){var x,w=this
w.bY()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i9){w.fr=!0
w.f=w.bRp()}},
ag0(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ag0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hz(),$async$ag0)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cQv(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.hM().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.hM().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hj(!0),$async$ag0)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cQw(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a1T(o,4))}catch(h){n=A.u(h)
$.hM().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cQx(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$ag0,w)},
yh(){return this.cx0()},
cx0(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yh=A.h(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hz(),$async$yh)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cQf(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.hM().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.hM().k(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.q0(),$async$yh)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cQg(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.X(a0.b,4))}catch(a5){n=A.u(a5)
$.hM().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.hM().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.q0(),$async$yh)
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
$.hM().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.agg(),$async$yh)
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
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$yh,w)},
agg(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$agg=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahl()
v=t.x4(C.Mf,new B.cQy())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$agg,w)},
ahl(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahl=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdo(l.a),$async$ahl)
case 7:q=e
if(J.r(J.aD(q,"success"),!0)&&y.f.b(J.aD(q,"data"))){p=A.ug(y.f.a(J.aD(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aP.iS(p,null))}catch(j){o=A.u(j)
$.hM().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.hM().k(C.q,"_getSlotRtpData failed",n,null)
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
return A.k($async$ahl,w)},
QU(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QU=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzv().nd(l),$async$QU)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cQD(s,r))
x=1
break}s.p(new B.cQE(s,r))
x=8
return A.c(s.oA(),$async$QU)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l_){q=m
$.hM().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQF(s,q))}else{p=m
o=A.aH(k)
m=$.hM()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQG(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$QU,w)},
oA(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oA=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i9){if(s.c==null){x=1
break}s.p(new B.cQi(s,f))
x=1
break}if(!f.gbGT()){if(s.c==null){x=1
break}s.p(new B.cQj(s))
x=1
break}if(s.c!=null)s.p(new B.cQk(s))
u=4
x=7
return A.c(s.w.hz(),$async$oA)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cQl(s))
x=1
break}if(s.c==null){x=1
break}q=s.beL(r)
if(q==null){s.p(new B.cQm(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzv().a.C5(d),$async$oA)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cQn(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bXP(p.r)
if(p.b!==!0||o!=null){s.p(new B.cQo(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cQp(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hL)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dbO(!0),$async$oA)
case 13:case 12:x=1
break
case 10:s.p(new B.cQq(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l_){m=k
$.hM().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQr(s,m))}else{l=k
$.hM().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cQs(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oA,w)},
bzI(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.QU()
return w.oA()},
qi(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$qi=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i9){if(s.c==null){x=1
break}if(h)s.p(new B.cQO(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cQP(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oA(),$async$qi)
case 5:x=1
break
case 4:s.p(new B.cQQ(s))
u=7
x=10
return A.c(s.w.hz(),$async$qi)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cQR(s))
x=1
break}if(s.c==null){x=1
break}o=s.beL(p)
if(o==null){s.p(new B.cQS(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bzV(o)
x=13
return A.c(s.oA(),$async$qi)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byF(),$async$qi)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzv().a.KT(q,new A.avB(n)),$async$qi)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NF?16:17
break
case 16:x=18
return A.c(s.afe(),$async$qi)
case 18:if(s.c==null){x=1
break}s.p(new B.cQT(s))
x=19
return A.c(s.oA(),$async$qi)
case 19:x=1
break
case 17:s.p(new B.cQU(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l_?20:22
break
case 20:l=h
$.hM().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhE(l,D.vm)
f=l.b.toUpperCase()
x=k===D.vo||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afe(),$async$qi)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cQV(s,k))
x=21
break
case 22:j=h
$.hM().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cQW(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$qi,w)},
lL(d,e){return this.dbP(d,!0)},
dbO(d){return this.lL(!0,d)},
dbP(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lL=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.cy
b1=s.ay
if(b6.e===C.i9){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.p(new B.cQY(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cQZ(s))
u=4
x=7
return A.c(s.w.hz(),$async$lL)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beL(p)
if(o==null){s.p(new B.cR_(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bzV(o)
x=10
return A.c(s.oA(),$async$lL)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.v6(!0),$async$lL)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cR0(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byG(),$async$lL)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DL(b6.a,new B.avC(n)),$async$lL)
case 15:m=c2
l=new A.az(Date.now(),0,!1).a0()
k=m==null?null:B.ecn(m.w)
j=m==null?null:B.doD(m.f)
i=m==null?null:B.doD(m.r)
h=m==null?null:B.doD(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NH
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bV(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.iV(l))===!0
b2=h
a3=(b2==null?null:b2.iV(l))===!0
a4=h!=null&&i!=null&&!h.iV(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.bS(a7,"status")
if(!f)J.bS(a7,"session_id")
if(!e)J.bS(a7,"entitlement")
if(!d)J.bS(a7,"game_key")
if(!a0)J.bS(a7,"client_session")
if(!a1)J.bS(a7,"session_started_at")
if(!a2)J.bS(a7,"session_expiry")
if(!a3)J.bS(a7,"launch_expiry")
if(!a4)J.bS(a7,"launch_expiry_bound")
if(!a5)J.bS(a7,"launch_url_untrusted")
a8=a7
$.hM().k(C.q,"game session response rejected: "+J.a1Q(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.Ey(b6.a,!0,m.a),$async$lL)
case 20:case 19:x=21
return A.c(s.PI(),$async$lL)
case 21:if(s.c==null){x=1
break}s.p(new B.cR1(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.v6(!0),$async$lL)
case 24:x=1
break
case 23:x=b6.e===C.i9?25:26
break
case 25:s.p(new B.cR2(s,k,h))
x=27
return A.c(s.ve(),$async$lL)
case 27:x=1
break
case 26:s.p(new B.cR3(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.l_?28:30
break
case 28:a9=a7
$.hM().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PI(),$async$lL)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lL(!1,!0),$async$lL)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cR4(s,a9))
x=29
break
case 30:b0=a7
$.hM().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cR5(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lL,w)},
ve(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ve=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cQH(s))
x=!k.iV(new A.az(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.v6(!0),$async$ve)
case 5:if(s.c==null){x=1
break}s.p(new B.cQI(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hz(),$async$ve)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aH(f)
h=$.hM()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQJ(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beL(q)
if(g==null){s.p(new B.cQK(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bzV(g)
x=13
return A.c(s.oA(),$async$ve)
case 13:x=1
break
case 12:u=15
s.p(new B.cQL(s))
x=18
return A.c(A.yk(r,C.oi,"_self"),$async$ve)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cQM(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aH(e)
h=$.hM()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.v6(!0),$async$ve)
case 19:if(s.c==null){x=1
break}s.p(new B.cQN(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ve,w)},
v6(d){return this.cHk(!0)},
cHk(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$v6=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.Ey(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$v6)
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
return A.k($async$v6,w)},
Ey(d,e,f){return this.cHr(d,!0,f)},
cHr(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ey=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.I0(d,f),$async$Ey)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.hM().k(C.aA,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.df(C.Ba,null,l),$async$Ey)
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
return A.c(s.PI(),$async$Ey)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ey,w)},
byF(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byF=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc_u()
v=B.zz(new B.cQz(u),u.gbXY(),new B.cQA(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byF,w)},
afe(){var x=0,w=A.l(y.H),v=this
var $async$afe=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a5X(new B.cQt(),A.e8([v.gc_u(),v.gbXY()],y.N)),$async$afe)
case 2:return A.j(null,w)}})
return A.k($async$afe,w)},
byG(){var x=0,w=A.l(y.N),v,u=this
var $async$byG=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.zz(new B.cQB(u),null,new B.cQC(),u.gc1w())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byG,w)},
PI(){var x=0,w=A.l(y.H),v=this
var $async$PI=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a5X(new B.cQu(),A.e8([v.gc1w()],y.N)),$async$PI)
case 2:return A.j(null,w)}})
return A.k($async$PI,w)},
beL(d){var x=A.dv8(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bzV(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_u(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.dol(D.Nz,this.cy,"product-"+x)},
gbXY(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dol(D.Nz,this.cy,x)},
gc1w(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dol(D.aGE,this.cy,x)},
bYP(d){var x,w=Date.now(),v=C.i.n5($.b_D().JM(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bXP(d){var x=B.dFb(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iC},
bhE(d,e){var x,w=d.a
if(w===401)return D.iB
x=B.dFb(d.b)
if(x!=null)return x
if(w===404)return D.hg
return e},
cXK(d,e){switch(e){case D.iB:return d.gab4()
case D.Cm:return d.gabe()
case D.Cn:return d.gaaU()
case D.Co:return d.gab9()
case D.vn:return d.gab0()
case D.vo:return d.gaaT()
case D.Cp:return d.gab2()
case D.hg:return d.gab7()
case D.Cq:return d.gaaV()
case D.NA:return d.gabb()
case D.iC:return d.gaaS()
case D.vm:return d.gaaY()
case D.hL:return d.gabc()
case null:case void 0:return null}},
EG(d){return this.cRW(d)},
cRW(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EG=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ao(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agm()
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
case 5:v=s.yh()
x=1
break
case 6:m=s.c
if(m!=null)A.aM(m,!1).f.aG(C.qs,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aM(m,!1).f.aG(C.z_,y.X)
v=null
x=1
break
case 8:u=14
b0=A.lS(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c0(b0)
a2=A.lS(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aS(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aS(b6.j(0,"clientSeed"))
a5=A.aS(b6.j(0,"nonce"))
x=17
return A.c(s.x.abo(p,q,A.aS(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$EG)
case 17:o=b8
n=J.aD(o,"data")
if(J.r(J.aD(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eE(m,"type","SPIN_RESULT")
J.hc(m,n)
v=m
x=1
break}m=J.aD(o,"message")
m=A.aa(["type","SPIN_ERROR","message",J.ao(m==null?"spin failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=16
break
case 14:u=13
b2=t.pop()
l=A.u(b2)
m=A.aa(["type","SPIN_ERROR","message",J.ao(l)],y.N,y.z)
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
return A.c(s.x.j1(),$async$EG)
case 22:k=b8
if(J.r(J.aD(k,"success"),!0)){m=y.h
j=m.a(J.aD(k,"data"))
k=j
m=m.a(k==null?null:J.aD(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.lS(J.aD(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aD(k,"message")
m=A.aa(["type","BALANCE_ERROR","message",J.ao(m==null?"getCurrentUser failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=21
break
case 19:u=18
b3=t.pop()
h=A.u(b3)
m=A.aa(["type","BALANCE_ERROR","message",J.ao(h)],y.N,y.z)
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
return A.c(s.agg(),$async$EG)
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
m=A.aa(["type","RTP_ERROR","message",J.ao(f)],y.N,y.z)
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
m=A.lS(b6.j(0,"page"))
a8=m==null?null:C.k.c0(m)
e=a8==null?1:a8
m=A.lS(b6.j(0,"size"))
a9=m==null?null:C.k.c0(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a2Y(e,d),$async$EG)
case 32:a0=b8
if(J.r(J.aD(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aD(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aD(a0,"message")
m=A.aa(["type","TRANSACTION_ERROR","message",J.ao(m==null?"getTransactions failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=31
break
case 29:u=28
b5=t.pop()
a1=A.u(b5)
m=A.aa(["type","TRANSACTION_ERROR","message",J.ao(a1)],y.N,y.z)
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
return A.k($async$EG,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.v6(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.dN(0,A.h2(C.c9,s,C.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxx(),s,s,s,s,s,s,!1,C.bX),108,s,0,s,s,75)],w))
else v.push(t.cvi(d))
if(u)v.push(new A.dG(!0,!0,!0,!0,C.J,!1,new A.ca(C.hz,s,s,A.aK(s,s,s,s,s,D.aL2,s,s,t.gbxx(),s,s,s,s,r.gh3(),s),s),s))
return A.bK(s,D.aqM,A.d2(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvi(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDG():a0.gOq()
if(e.db){a0=a0.gDG()
r=A.p(a1).ok.y
a0=new A.G(C.b2,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aH,d,d),d)}else a0=D.bw_
return A.aJ(A.J(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbGT())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bj5(r,p,l,k===!0,u===!0,!j,i)
g=e.cXK(a0,i)
if(e.db)f=a0.gDG()
else f=j?d:a0.gaaZ()
u=x==null?d:x.b
a0=u==null?a0.gab8():u
u=g==null
r=u?f:g
return new B.avy(a0,h,q,m,r,!u,!t,new B.cQd(e,h),new B.cQe(e),d)},
cQN(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aM(x,!1).f.aG(C.eq,y.X)
return
case 2:w.ahG()
return
case 3:x=w.c
x.toString
A.aM(x,!1).f.aG(C.qs,y.X)
return
case 4:w.qi()
return
case 5:w.ve()
return
case 6:w.bzI()
return
case 0:return}},
ahG(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahG=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aG(C.pO,y.X),$async$ahG)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bzI(),$async$ahG)
case 4:case 1:return A.j(v,w)}})
return A.k($async$ahG,w)},
agm(){var x=0,w=A.l(y.H),v,u=this
var $async$agm=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ahw(),$async$agm)
case 3:case 1:return A.j(v,w)}})
return A.k($async$agm,w)},
ahw(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahw=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.v6(!0),$async$ahw)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.Y(t,!1).AJ(),$async$ahw)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aM(t,!1).f.i1("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahw,w)},
bRp(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dK8()
if(x.b.test(u)){$.aF.y2$.push(new B.cQh(w,v,t))
return C.yr}return new B.abr(w.bV2(t,Date.now()),w.gd8P(),null)},
bV2(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d8Q(){new B.cQX(this).$0()}}
B.avy.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dG(!0,!0,!0,!0,C.J,!1,A.d1(new B.bj6(this,x,A.p(d),this.cJl(x))),null)},
cJl(d){switch(this.d.gn3().a){case 1:return d.gDH()
case 2:return d.gYc()
case 3:return d.gab6()
case 4:return d.gab5()
case 5:return d.guL()
case 6:return d.gab3()
case 0:return null}}}
B.adr.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.K(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.G(C.el,A.w(A.a([u,C.a9,new A.ex(1,C.bu,A.d(this.d,x,x,x,x,x,v,C.j1,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.avC.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.avC&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.o(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["a9<a3<q,@>?>(a3<q,@>)","a9<~>()","~()"])
B.dd2.prototype={
$1(d){var x,w=A.ij(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.RK(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dd1.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dd4.prototype={
$1(d){var x,w,v,u,t,s=A.ij(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.RK(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd0(),v=v.gan(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dd5(this.b,w,d,s).$0()},
$S:9}
B.dd5.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h9(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bA(q)
t=v.c.source
if(t!=null)r=A.ij(t,"Object")
else r=!1
s=v.d
if(r){A.V1(t,"postMessage",u,s,y.X)
B.dnF(u,s)}else{B.dnF(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:98}
B.dd3.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cQb.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cQc.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:610}
B.cQv.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cQw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cQx.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cQf.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cQg.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cQy.prototype={
$0(){return null},
$S:15}
B.cQD.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hg},
$S:0}
B.cQE.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xq(w.b,w.gdqq(),"Telegram Mini App",null,C.i9,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cQF.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhE(this.b,D.iC)},
$S:0}
B.cQG.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iC},
$S:0}
B.cQi.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hg},
$S:0}
B.cQj.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hg},
$S:0}
B.cQk.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cQl.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQm.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQn.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iC:D.hg},
$S:0}
B.cQo.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iC:x},
$S:0}
B.cQp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hL},
$S:0}
B.cQq.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bXP(x.r)
if(w==null)x=x.b===!0?null:D.iC
else x=w
v.id=x},
$S:0}
B.cQr.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhE(this.b,D.iC)},
$S:0}
B.cQs.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iC},
$S:0}
B.cQO.prototype={
$0(){return this.a.id=D.hg},
$S:0}
B.cQP.prototype={
$0(){return this.a.id=D.hg},
$S:0}
B.cQQ.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cQR.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cQS.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cQT.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cQU.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NG?D.vn:D.Cq},
$S:0}
B.cQV.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cQW.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vm},
$S:0}
B.cQY.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hL},
$S:0}
B.cQZ.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cR_.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cR0.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hL},
$S:0}
B.cR1.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hL},
$S:0}
B.cR2.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cR3.prototype={
$0(){var x=this.a
x.f=x.bRp()
x.fx=!1},
$S:0}
B.cR4.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhE(this.b,D.hL)},
$S:0}
B.cR5.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hL},
$S:0}
B.cQH.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cQI.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hL},
$S:0}
B.cQJ.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cQK.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cQL.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cQM.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cQN.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hL},
$S:0}
B.cQz.prototype={
$0(){return this.a.bYP("game-access")},
$S:25}
B.cQA.prototype={
$2(d,e){return $.hM().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:38}
B.cQt.prototype={
$2(d,e){return $.hM().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:38}
B.cQB.prototype={
$0(){return this.a.bYP("game-session")},
$S:25}
B.cQC.prototype={
$2(d,e){return $.hM().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:38}
B.cQu.prototype={
$2(d,e){return $.hM().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:38}
B.cQd.prototype={
$0(){return this.a.cQN(this.b.gn3())},
$S:0}
B.cQe.prototype={
$0(){this.a.bzI()
return null},
$S:0}
B.cQh.prototype={
$1(d){return this.cek(d)},
cek(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hz(),$async$$1)
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
return A.c(h.r.hj(!0),$async$$1)
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
$.hM().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a1T(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beP())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.agg(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.hM().k(C.aA,"RTP prefetch failed",n,null)
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
$.hM().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.Y(l,!1).AJ(),$async$$1)
case 23:h=h.bV2(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:485}
B.cQX.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yh(),$async$$0)
case 2:t=e
B.doL(t)
u=y.H
x=3
return A.c(A.df(D.aCL,null,u),$async$$0)
case 3:B.doL(t)
x=4
return A.c(A.df(D.aCt,null,u),$async$$0)
case 4:B.doL(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:98}
B.bj6.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cL(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aaW(w)
u=A.z(8)
t=A.aE(C.E.v(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.z),C.aH,k,k)],q)
if(x.x){w=j.gOr()
p=s.z
w=A.a([C.dV,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gaba()
if(o)p="-"
o=j.gab1()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([C.GV,new B.adr(n,p,k),new B.adr(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apq:D.aqd)
C.e.A(r,A.a([C.GV,A.J(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQn,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bp(C.pw,A.a([C.mZ,A.d(w.c?j.gaaX():j.gOq(),k,k,k,k,k,k,C.aH,k,k)],q),C.bJ,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.e.A(r,A.a([D.bw1,A.cm(o,D.bMW,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gn3()!==D.qE
else w=!1
if(w)C.e.A(r,A.a([C.dV,A.aI(A.d(j.gab_(),k,k,k,k,k,k,C.aH,k,k),D.bNg,k,k,x.z,k,k)],q))
return A.bb(new A.ba(new A.aw(0,1/0,i,1/0),A.aJ(A.J(k,k,k,new A.ba(C.K1,new A.bU(new A.L(D.aoD,k,t,u,k,k,C.r),C.aq,new A.G(C.b2,A.v(r,C.ak,k,C.d,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bSO,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.y,k,k,D.aEc,k,k,C.D)},
$S:110};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.al4.prototype,"gcRV","EG",0)
w(v,"gbxx","agm",1)
w(v,"gd8P","d8Q",2)})();(function inheritance(){var x=a.inheritMany
x(A.n9,[B.nC,B.zA,B.avx])
x(A.T,[B.bj5,B.avC])
x(A.ff,[B.dd2,B.dd4,B.cQb,B.cQc,B.cQh])
x(A.hd,[B.dd1,B.dd5,B.dd3,B.cQv,B.cQw,B.cQx,B.cQf,B.cQg,B.cQy,B.cQD,B.cQE,B.cQF,B.cQG,B.cQi,B.cQj,B.cQk,B.cQl,B.cQm,B.cQn,B.cQo,B.cQp,B.cQq,B.cQr,B.cQs,B.cQO,B.cQP,B.cQQ,B.cQR,B.cQS,B.cQT,B.cQU,B.cQV,B.cQW,B.cQY,B.cQZ,B.cR_,B.cR0,B.cR1,B.cR2,B.cR3,B.cR4,B.cR5,B.cQH,B.cQI,B.cQJ,B.cQK,B.cQL,B.cQM,B.cQN,B.cQz,B.cQB,B.cQd,B.cQe,B.cQX])
x(A.U,[B.abr,B.GX])
x(A.W,[B.aVp,B.al4])
x(A.hP,[B.cQA,B.cQt,B.cQC,B.cQu,B.bj6])
x(A.x,[B.avy,B.adr])})()
A.fu(b.typeUniverse,JSON.parse('{"abr":{"U":[],"m":[]},"aVp":{"W":["abr"]},"GX":{"U":[],"m":[]},"al4":{"W":["GX"]},"avy":{"x":[],"m":[]},"adr":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("ev"),u:x("a9<a3<q,@>?>"),T:x("Lh"),w:x("bli"),s:x("E<q>"),p:x("E<m>"),P:x("a3<q,@>"),f:x("a3<@,@>"),a:x("bn"),A:x("OO"),N:x("q"),x:x("Pj"),r:x("Hk"),O:x("V<q>"),y:x("N"),z:x("@"),h:x("a3<q,@>?"),X:x("T?"),H:x("~")}})();(function constants(){D.aoD=new A.X(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.apq=new A.X(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.aqd=new A.X(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.aqM=new A.X(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aCt=new A.bG(175e4)
D.aCL=new A.bG(75e4)
D.aEc=new A.an(20,64,20,24)
D.Nz=new B.avx(0,"purchase")
D.aGE=new B.avx(1,"session")
D.iB=new B.nC(0,"signInRequired")
D.Cm=new B.nC(1,"telegramAccountNotLinked")
D.iC=new B.nC(10,"requestFailed")
D.vm=new B.nC(11,"purchaseFailed")
D.hL=new B.nC(12,"sessionFailed")
D.Cn=new B.nC(2,"insufficientBalance")
D.Co=new B.nC(3,"walletInactive")
D.vn=new B.nC(4,"refundPending")
D.vo=new B.nC(5,"accessExpired")
D.Cp=new B.nC(6,"accessRequired")
D.hg=new B.nC(7,"gameUnavailable")
D.Cq=new B.nC(8,"accessNotActive")
D.NA=new B.nC(9,"sessionDenied")
D.NB=new B.zA(0,"none")
D.aGF=new B.zA(1,"signIn")
D.aGG=new B.zA(2,"bindTelegram")
D.aGH=new B.zA(3,"topUp")
D.aGI=new B.zA(4,"purchase")
D.aGJ=new B.zA(5,"openGame")
D.qE=new B.zA(6,"retry")
D.aL2=new A.ap(C.jw,null,C.E,null,null)
D.anQ=new A.m_(2.5,null,null,null,null,null,null,null,null,null)
D.bw_=new A.ac(28,28,D.anQ,null)
D.bw1=new A.ac(null,22,null,null)
D.bMW=new A.V("slot-game-access-primary",y.O)
D.bNg=new A.V("slot-game-access-refresh",y.O)
D.bQn=new A.V("slot-game-access-message",y.O)
D.bSO=new A.V("slot-game-access-gate",y.O)})();(function staticFields(){$.a5W=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ekH","dK8",()=>A.bg("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"elG","hM",()=>A.aW("SlotGamePage"))})()};
(a=>{a["Fg4I+Hx3HOYQO7178rrWyFqJiMg="]=a.current})($__dart_deferred_initializers__);