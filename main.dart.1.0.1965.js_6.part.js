((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dGG(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cq
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Cr
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Cs
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vo
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vp
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Ct
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hj
return null},
dpJ(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nI:function nI(d,e){this.a=d
this.b=e},
zE:function zE(d,e){this.a=d
this.b=e},
aw3:function aw3(d,e){this.a=d
this.b=e},
bjL:function bjL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eds(d){var x=b.G,w=A.eE(new B.dex(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dew(w)},
edt(d){var x=b.G,w=A.eE(new B.dez(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dey(w)},
dq6(d){B.dp2(A.bA(d),b.G.window.location.origin)},
dp2(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.i9(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aO(u,e))v=!A.np(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dex:function dex(d,e){this.a=d
this.b=e},
dew:function dew(d){this.a=d},
dez:function dez(d,e){this.a=d
this.b=e},
deA:function deA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dey:function dey(d){this.a=d},
abT:function abT(d,e,f){this.c=d
this.d=e
this.a=f},
aW_:function aW_(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cRv:function cRv(d){this.a=d},
cRw:function cRw(d){this.a=d},
dAx(d,e){return new B.H4(d,e,null)},
H4:function H4(d,e,f){this.c=d
this.d=e
this.a=f},
alB:function alB(d,e,f,g){var _=this
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
cRP:function cRP(d,e){this.a=d
this.b=e},
cRQ:function cRQ(d,e){this.a=d
this.b=e},
cRR:function cRR(d){this.a=d},
cRz:function cRz(d,e){this.a=d
this.b=e},
cRA:function cRA(d,e){this.a=d
this.b=e},
cRS:function cRS(){},
cRX:function cRX(d,e){this.a=d
this.b=e},
cRY:function cRY(d,e){this.a=d
this.b=e},
cRZ:function cRZ(d,e){this.a=d
this.b=e},
cS_:function cS_(d){this.a=d},
cRC:function cRC(d,e){this.a=d
this.b=e},
cRD:function cRD(d){this.a=d},
cRE:function cRE(d){this.a=d},
cRF:function cRF(d){this.a=d},
cRG:function cRG(d){this.a=d},
cRH:function cRH(d,e){this.a=d
this.b=e},
cRI:function cRI(d,e){this.a=d
this.b=e},
cRJ:function cRJ(d,e){this.a=d
this.b=e},
cRK:function cRK(d,e){this.a=d
this.b=e},
cRL:function cRL(d,e){this.a=d
this.b=e},
cRM:function cRM(d){this.a=d},
cS7:function cS7(d){this.a=d},
cS8:function cS8(d){this.a=d},
cS9:function cS9(d){this.a=d},
cSa:function cSa(d){this.a=d},
cSb:function cSb(d){this.a=d},
cSc:function cSc(d){this.a=d},
cSd:function cSd(d,e){this.a=d
this.b=e},
cSe:function cSe(d,e){this.a=d
this.b=e},
cSf:function cSf(d){this.a=d},
cSh:function cSh(d){this.a=d},
cSi:function cSi(d){this.a=d},
cSj:function cSj(d){this.a=d},
cSk:function cSk(d){this.a=d},
cSl:function cSl(d){this.a=d},
cSm:function cSm(d,e,f){this.a=d
this.b=e
this.c=f},
cSn:function cSn(d){this.a=d},
cSo:function cSo(d,e){this.a=d
this.b=e},
cSp:function cSp(d){this.a=d},
cS0:function cS0(d){this.a=d},
cS1:function cS1(d){this.a=d},
cS2:function cS2(d){this.a=d},
cS3:function cS3(d){this.a=d},
cS4:function cS4(d){this.a=d},
cS5:function cS5(d){this.a=d},
cS6:function cS6(d){this.a=d},
cRT:function cRT(d){this.a=d},
cRU:function cRU(){},
cRN:function cRN(){},
cRV:function cRV(d){this.a=d},
cRW:function cRW(){},
cRO:function cRO(){},
cRx:function cRx(d,e){this.a=d
this.b=e},
cRy:function cRy(d){this.a=d},
cRB:function cRB(d,e,f){this.a=d
this.b=e
this.c=f},
cSg:function cSg(d){this.a=d},
aw4:function aw4(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjM:function bjM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adV:function adV(d,e,f){this.c=d
this.d=e
this.a=f},
aw8:function aw8(d){this.a=d},
ee1(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.mx(v)
w=!0
if(x!=null)if(x.ge7().toLowerCase()==="https")if(x.ga2a().length===0)w=x.gXk()&&x.gKR()!==443||!C.a8S.t(0,x.gn0().toLowerCase())||x.gKE().length===0
if(w)return null
return x.cdf("telegram.me")},
dpZ(d){return d.c?d:A.dtV(A.by(d),A.bB(d),A.c5(d),A.ht(d),A.mk(d),A.N9(d),A.aAN(d),d.b)},
e_s(d){var x
if(d==null||d.length===0)return null
x=A.dAv().j(0,d)
return(x==null?null:x.e===C.ib)===!1?x:null},
zD(d,e,f,g){var x=null
return B.dTL(d,e,f,g)},
dTL(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zD=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a6h.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dHJ():k).$0(),$async$zD)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a6h.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.pI(s,a0),$async$zD)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a6h.h(0,a0,q)
x=15
return A.c(s.f_("String",a0,q),$async$zD)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.pI(s,e),$async$zD)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.pI(s,e),$async$zD)
case 21:case 20:case 12:o=d.$0()
$.a6h.h(0,a0,o)
x=22
return A.c(s.f_("String",a0,o),$async$zD)
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
l=A.aG(g)
f.$2(m,l)
v=$.a6h.c7(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$zD,w)},
a6i(d,e){var x=null
return B.dTK(d,e)},
dTK(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a6i=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.er(0)
for(p=J.aX(l);p.F();)$.a6h.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dHJ():p).$0(),$async$a6i)
case 6:t=g
p=J.aX(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a1W().S(0,"flutter."+o),$async$a6i)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aG(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$a6i,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[108]
B.nI.prototype={
W(){return"GameAccessIssue."+this.b}}
B.zE.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aw3.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bjL.prototype={
gna(){var x=this
if(x.b||x.c||!x.a)return D.NF
if(x.f)return D.aH_
switch(x.r){case D.iD:return D.aGW
case D.Cq:return D.aGX
case D.Cr:case D.Cs:return D.aGY
case D.vo:case D.hj:return D.NF
case D.vp:case D.Ct:case D.Cu:case D.NE:case D.iE:case D.vn:return D.qG
case D.hM:return D.qG
case null:case void 0:if(x.e)return D.qG
return x.d?D.aGZ:D.qG}}}
B.abT.prototype={
O(){return new B.aW_()}}
B.aW_.prototype={
Z(){var x,w,v,u=this
u.a5()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.b3()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.b3()
u.e=w
v=A.eE(new B.cRv(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b0p()
$.Cu().a_F(x,new B.cRw(u),!0)},
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
return A.dlH(null,C.Fu,x)}}
B.H4.prototype={
O(){var x=$.ay()
return new B.alB(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.alB.prototype={
gbzG(){var x,w=this.y
if(w===$){x=$.ay().$1$0(y.T)
this.y!==$&&A.bb()
w=this.y=new A.aB0(x)}return w},
Z(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.R2()
return}w=v.d=B.e_s(x.c)
if(w==null){v.fx=!1
v.id=D.hj
return}if(!w.gbH5()){v.fx=!1
v.id=D.hj
return}if(w.e!==C.ib){v.fx=!1
v.k1=B.eds(v.gbxH())
v.k2=B.edt(v.gcSp())
v.agc()
v.ax=v.ahx()
return}},
b8(){var x,w=this
w.bF()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.ib){w.fr=!0
w.f=w.bRL()}},
agc(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$agc=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hE(),$async$agc)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cRP(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.hP().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.hP().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
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
t.p(new B.cRQ(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a28(o,4))}catch(h){n=A.u(h)
$.hP().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cRR(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$agc,w)},
yt(){return this.cxv()},
cxv(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yt=A.h(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hE(),$async$yt)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cRz(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.hP().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.hP().k(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.q6(),$async$yt)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cRA(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.X(a0.b,4))}catch(a5){n=A.u(a5)
$.hP().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.hP().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.q6(),$async$yt)
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
$.hP().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.ags(),$async$yt)
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
return A.k($async$yt,w)},
ags(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ags=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahx()
v=t.xh(C.Mk,new B.cRS())
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
return A.c(r.x.bde(l.a),$async$ahx)
case 7:q=e
if(J.r(J.aH(q,"success"),!0)&&y.f.b(J.aH(q,"data"))){p=A.um(y.f.a(J.aH(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aP.iY(p,null))}catch(j){o=A.u(j)
$.hP().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.hP().k(C.q,"_getSlotRtpData failed",n,null)
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
R2(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$R2=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzG().nk(l),$async$R2)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cRX(s,r))
x=1
break}s.p(new B.cRY(s,r))
x=8
return A.c(s.oI(),$async$R2)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l2){q=m
$.hP().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cRZ(s,q))}else{p=m
o=A.aG(k)
m=$.hP()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cS_(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$R2,w)},
oI(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oI=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.ib){if(s.c==null){x=1
break}s.p(new B.cRC(s,f))
x=1
break}if(!f.gbH5()){if(s.c==null){x=1
break}s.p(new B.cRD(s))
x=1
break}if(s.c!=null)s.p(new B.cRE(s))
u=4
x=7
return A.c(s.w.hE(),$async$oI)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cRF(s))
x=1
break}if(s.c==null){x=1
break}q=s.beD(r)
if(q==null){s.p(new B.cRG(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzG().a.Cd(d),$async$oI)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cRH(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bYc(p.r)
if(p.b!==!0||o!=null){s.p(new B.cRI(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cRJ(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hM)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dcm(!0),$async$oI)
case 13:case 12:x=1
break
case 10:s.p(new B.cRK(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l2){m=k
$.hP().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cRL(s,m))}else{l=k
$.hP().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cRM(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oI,w)},
bzT(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.R2()
return w.oI()},
qp(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$qp=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.ib){if(s.c==null){x=1
break}if(h)s.p(new B.cS7(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cS8(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oI(),$async$qp)
case 5:x=1
break
case 4:s.p(new B.cS9(s))
u=7
x=10
return A.c(s.w.hE(),$async$qp)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cSa(s))
x=1
break}if(s.c==null){x=1
break}o=s.beD(p)
if(o==null){s.p(new B.cSb(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bA5(o)
x=13
return A.c(s.oI(),$async$qp)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byP(),$async$qp)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzG().a.L1(q,new A.aw7(n)),$async$qp)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NJ?16:17
break
case 16:x=18
return A.c(s.afq(),$async$qp)
case 18:if(s.c==null){x=1
break}s.p(new B.cSc(s))
x=19
return A.c(s.oI(),$async$qp)
case 19:x=1
break
case 17:s.p(new B.cSd(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l2?20:22
break
case 20:l=h
$.hP().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhy(l,D.vn)
f=l.b.toUpperCase()
x=k===D.vp||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afq(),$async$qp)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cSe(s,k))
x=21
break
case 22:j=h
$.hP().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cSf(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$qp,w)},
lT(d,e){return this.dcn(d,!0)},
dcm(d){return this.lT(!0,d)},
dcn(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lT=A.h(function(c1,c2){if(c1===1){t.push(c2)
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
if(b2){s.p(new B.cSh(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cSi(s))
u=4
x=7
return A.c(s.w.hE(),$async$lT)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beD(p)
if(o==null){s.p(new B.cSj(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bA5(o)
x=10
return A.c(s.oI(),$async$lT)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.vi(!0),$async$lT)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cSk(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byQ(),$async$lT)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DT(b6.a,new B.aw8(n)),$async$lT)
case 15:m=c2
l=new A.aB(Date.now(),0,!1).a0()
k=m==null?null:B.ee1(m.w)
j=m==null?null:B.dpZ(m.f)
i=m==null?null:B.dpZ(m.r)
h=m==null?null:B.dpZ(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NL
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bW(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.j_(l))===!0
b2=h
a3=(b2==null?null:b2.j_(l))===!0
a4=h!=null&&i!=null&&!h.j_(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.bT(a7,"status")
if(!f)J.bT(a7,"session_id")
if(!e)J.bT(a7,"entitlement")
if(!d)J.bT(a7,"game_key")
if(!a0)J.bT(a7,"client_session")
if(!a1)J.bT(a7,"session_started_at")
if(!a2)J.bT(a7,"session_expiry")
if(!a3)J.bT(a7,"launch_expiry")
if(!a4)J.bT(a7,"launch_expiry_bound")
if(!a5)J.bT(a7,"launch_url_untrusted")
a8=a7
$.hP().k(C.q,"game session response rejected: "+J.a25(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.EF(b6.a,!0,m.a),$async$lT)
case 20:case 19:x=21
return A.c(s.PR(),$async$lT)
case 21:if(s.c==null){x=1
break}s.p(new B.cSl(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.vi(!0),$async$lT)
case 24:x=1
break
case 23:x=b6.e===C.ib?25:26
break
case 25:s.p(new B.cSm(s,k,h))
x=27
return A.c(s.vq(),$async$lT)
case 27:x=1
break
case 26:s.p(new B.cSn(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.l2?28:30
break
case 28:a9=a7
$.hP().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PR(),$async$lT)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lT(!1,!0),$async$lT)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cSo(s,a9))
x=29
break
case 30:b0=a7
$.hP().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cSp(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lT,w)},
vq(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vq=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cS0(s))
x=!k.j_(new A.aB(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.vi(!0),$async$vq)
case 5:if(s.c==null){x=1
break}s.p(new B.cS1(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hE(),$async$vq)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aG(f)
h=$.hP()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cS2(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beD(q)
if(g==null){s.p(new B.cS3(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bA5(g)
x=13
return A.c(s.oI(),$async$vq)
case 13:x=1
break
case 12:u=15
s.p(new B.cS4(s))
x=18
return A.c(A.yo(r,C.om,"_self"),$async$vq)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cS5(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aG(e)
h=$.hP()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.vi(!0),$async$vq)
case 19:if(s.c==null){x=1
break}s.p(new B.cS6(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vq,w)},
vi(d){return this.cHN(!0)},
cHN(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$vi=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.EF(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$vi)
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
return A.k($async$vi,w)},
EF(d,e,f){return this.cHU(d,!0,f)},
cHU(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EF=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.I9(d,f),$async$EF)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.hP().k(C.aA,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.dh(C.Bd,null,l),$async$EF)
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
return A.c(s.PR(),$async$EF)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EF,w)},
byP(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byP=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc_T()
v=B.zD(new B.cRT(u),u.gbYl(),new B.cRU(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byP,w)},
afq(){var x=0,w=A.l(y.H),v=this
var $async$afq=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6i(new B.cRN(),A.e_([v.gc_T(),v.gbYl()],y.N)),$async$afq)
case 2:return A.j(null,w)}})
return A.k($async$afq,w)},
byQ(){var x=0,w=A.l(y.N),v,u=this
var $async$byQ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.zD(new B.cRV(u),null,new B.cRW(),u.gc1Z())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byQ,w)},
PR(){var x=0,w=A.l(y.H),v=this
var $async$PR=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6i(new B.cRO(),A.e_([v.gc1Z()],y.N)),$async$PR)
case 2:return A.j(null,w)}})
return A.k($async$PR,w)},
beD(d){var x=A.dws(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bA5(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_T(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.dpJ(D.ND,this.cy,"product-"+x)},
gbYl(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dpJ(D.ND,this.cy,x)},
gc1Z(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dpJ(D.aGV,this.cy,x)},
bZd(d){var x,w=Date.now(),v=C.i.mp($.b0f().JV(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bYc(d){var x=B.dGG(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iE},
bhy(d,e){var x,w=d.a
if(w===401)return D.iD
x=B.dGG(d.b)
if(x!=null)return x
if(w===404)return D.hj
return e},
cYe(d,e){switch(e){case D.iD:return d.gabg()
case D.Cq:return d.gabq()
case D.Cr:return d.gab5()
case D.Cs:return d.gabl()
case D.vo:return d.gabc()
case D.vp:return d.gab4()
case D.Ct:return d.gabe()
case D.hj:return d.gabj()
case D.Cu:return d.gab6()
case D.NE:return d.gabn()
case D.iE:return d.gab3()
case D.vn:return d.gab9()
case D.hM:return d.gabo()
case null:case void 0:return null}},
EN(d){return this.cSq(d)},
cSq(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EN=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ao(b0)
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
case 5:v=s.yt()
x=1
break
case 6:m=s.c
if(m!=null)A.aL(m,!1).f.aG(C.qt,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aL(m,!1).f.aG(C.z1,y.X)
v=null
x=1
break
case 8:u=14
b0=A.lX(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c2(b0)
a2=A.lX(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.a8(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aT(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aT(b6.j(0,"clientSeed"))
a5=A.aT(b6.j(0,"nonce"))
x=17
return A.c(s.x.abA(p,q,A.aT(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$EN)
case 17:o=b8
n=J.aH(o,"data")
if(J.r(J.aH(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eG(m,"type","SPIN_RESULT")
J.hB(m,n)
v=m
x=1
break}m=J.aH(o,"message")
m=A.a8(["type","SPIN_ERROR","message",J.ao(m==null?"spin failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=16
break
case 14:u=13
b2=t.pop()
l=A.u(b2)
m=A.a8(["type","SPIN_ERROR","message",J.ao(l)],y.N,y.z)
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
return A.c(s.x.j7(),$async$EN)
case 22:k=b8
if(J.r(J.aH(k,"success"),!0)){m=y.h
j=m.a(J.aH(k,"data"))
k=j
m=m.a(k==null?null:J.aH(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.lX(J.aH(i,"balance"))
if(m==null)m=null
m=A.a8(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aH(k,"message")
m=A.a8(["type","BALANCE_ERROR","message",J.ao(m==null?"getCurrentUser failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=21
break
case 19:u=18
b3=t.pop()
h=A.u(b3)
m=A.a8(["type","BALANCE_ERROR","message",J.ao(h)],y.N,y.z)
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
return A.c(s.ags(),$async$EN)
case 27:g=b8
if(g!=null){m=A.a8(["type","RTP_RESULT","data",g],y.N,y.z)
v=m
x=1
break}m=A.a8(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=m
x=1
break
u=2
x=26
break
case 24:u=23
b4=t.pop()
f=A.u(b4)
m=A.a8(["type","RTP_ERROR","message",J.ao(f)],y.N,y.z)
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
m=A.lX(b6.j(0,"page"))
a8=m==null?null:C.k.c2(m)
e=a8==null?1:a8
m=A.lX(b6.j(0,"size"))
a9=m==null?null:C.k.c2(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a3a(e,d),$async$EN)
case 32:a0=b8
if(J.r(J.aH(a0,"success"),!0)){m=A.a8(["type","TRANSACTION_RESULT","data",J.aH(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aH(a0,"message")
m=A.a8(["type","TRANSACTION_ERROR","message",J.ao(m==null?"getTransactions failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=31
break
case 29:u=28
b5=t.pop()
a1=A.u(b5)
m=A.a8(["type","TRANSACTION_ERROR","message",J.ao(a1)],y.N,y.z)
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
return A.k($async$EN,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.vi(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.dR(0,A.h2(C.bt,s,C.x,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxH(),s,s,s,s,s,s,!1,C.bZ),108,s,0,s,s,75)],w))
else v.push(t.cvO(d))
if(u)v.push(new A.dH(!0,!0,!0,!0,C.J,!1,new A.cb(C.h2,s,s,A.aK(s,s,s,s,s,D.aLi,s,s,t.gbxH(),s,s,s,s,r.gh7(),s),s),s))
return A.bK(s,D.ar0,A.d5(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvO(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDO():a0.gOB()
if(e.db){a0=a0.gDO()
r=A.p(a1).ok.y
a0=new A.G(C.b3,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aH,d,d),d)}else a0=D.bwg
return A.aI(A.K(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbH5())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bjL(r,p,l,k===!0,u===!0,!j,i)
g=e.cYe(a0,i)
if(e.db)f=a0.gDO()
else f=j?d:a0.gaba()
u=x==null?d:x.b
a0=u==null?a0.gabk():u
u=g==null
r=u?f:g
return new B.aw4(a0,h,q,m,r,!u,!t,new B.cRx(e,h),new B.cRy(e),d)},
cRh(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aL(x,!1).f.aG(C.er,y.X)
return
case 2:w.ahS()
return
case 3:x=w.c
x.toString
A.aL(x,!1).f.aG(C.qt,y.X)
return
case 4:w.qp()
return
case 5:w.vq()
return
case 6:w.bzT()
return
case 0:return}},
ahS(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahS=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aL(t,!1).f.aG(C.pP,y.X),$async$ahS)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bzT(),$async$ahS)
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
return A.c(u.vi(!0),$async$ahI)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.Z(t,!1).AS(),$async$ahI)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aL(t,!1).f.hB("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahI,w)},
bRL(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dLH()
if(x.b.test(u)){$.ax.y2$.push(new B.cRB(w,v,t))
return C.yt}return new B.abT(w.bVo(t,Date.now()),w.gd9o(),null)},
bVo(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d9p(){new B.cSg(this).$0()}}
B.aw4.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dH(!0,!0,!0,!0,C.J,!1,A.cR(new B.bjM(this,x,A.p(d),this.cJO(x))),null)},
cJO(d){switch(this.d.gna().a){case 1:return d.gDP()
case 2:return d.gYm()
case 3:return d.gabi()
case 4:return d.gabh()
case 5:return d.guV()
case 6:return d.gabf()
case 0:return null}}}
B.adV.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.M(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.G(C.em,A.w(A.a([u,C.ad,new A.et(1,C.bs,A.d(this.d,x,x,x,x,x,v,C.j4,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.aw8.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aw8&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.o(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["a9<a3<q,@>?>(a3<q,@>)","a9<~>()","~()"])
B.dex.prototype={
$1(d){var x,w=A.i9(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.RU(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:8}
B.dew.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dez.prototype={
$1(d){var x,w,v,u,t,s=A.i9(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.RU(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd3(),v=v.gam(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.deA(this.b,w,d,s).$0()},
$S:8}
B.deA.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h9(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bA(q)
t=v.c.source
if(t!=null)r=A.i9(t,"Object")
else r=!1
s=v.d
if(r){A.Vb(t,"postMessage",u,s,y.X)
B.dp2(u,s)}else{B.dp2(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:99}
B.dey.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cRv.prototype={
$1(d){return this.a.$0()},
$S:8}
B.cRw.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:535}
B.cRP.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cRQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cRR.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cRz.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cRA.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cRS.prototype={
$0(){return null},
$S:15}
B.cRX.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hj},
$S:0}
B.cRY.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xt(w.b,w.gdr1(),"Telegram Mini App",null,C.ib,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cRZ.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhy(this.b,D.iE)},
$S:0}
B.cS_.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iE},
$S:0}
B.cRC.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hj},
$S:0}
B.cRD.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hj},
$S:0}
B.cRE.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cRF.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cRG.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cRH.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iE:D.hj},
$S:0}
B.cRI.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iE:x},
$S:0}
B.cRJ.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hM},
$S:0}
B.cRK.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bYc(x.r)
if(w==null)x=x.b===!0?null:D.iE
else x=w
v.id=x},
$S:0}
B.cRL.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhy(this.b,D.iE)},
$S:0}
B.cRM.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cS7.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cS8.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cS9.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cSa.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cSb.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cSc.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cSd.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NK?D.vo:D.Cu},
$S:0}
B.cSe.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cSf.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vn},
$S:0}
B.cSh.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hM},
$S:0}
B.cSi.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cSj.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cSk.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hM},
$S:0}
B.cSl.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hM},
$S:0}
B.cSm.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cSn.prototype={
$0(){var x=this.a
x.f=x.bRL()
x.fx=!1},
$S:0}
B.cSo.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhy(this.b,D.hM)},
$S:0}
B.cSp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hM},
$S:0}
B.cS0.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cS1.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hM},
$S:0}
B.cS2.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cS3.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cS4.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cS5.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cS6.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hM},
$S:0}
B.cRT.prototype={
$0(){return this.a.bZd("game-access")},
$S:24}
B.cRU.prototype={
$2(d,e){return $.hP().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:38}
B.cRN.prototype={
$2(d,e){return $.hP().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:38}
B.cRV.prototype={
$0(){return this.a.bZd("game-session")},
$S:24}
B.cRW.prototype={
$2(d,e){return $.hP().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:38}
B.cRO.prototype={
$2(d,e){return $.hP().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:38}
B.cRx.prototype={
$0(){return this.a.cRh(this.b.gna())},
$S:0}
B.cRy.prototype={
$0(){this.a.bzT()
return null},
$S:0}
B.cRB.prototype={
$1(d){return this.ceS(d)},
ceS(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
$.hP().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a28(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beH())
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
$.hP().k(C.aA,"RTP prefetch failed",n,null)
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
$.hP().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.Z(l,!1).AS(),$async$$1)
case 23:h=h.bVo(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:574}
B.cSg.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yt(),$async$$0)
case 2:t=e
B.dq6(t)
u=y.H
x=3
return A.c(A.dh(D.aD0,null,u),$async$$0)
case 3:B.dq6(t)
x=4
return A.c(A.dh(D.aCJ,null,u),$async$$0)
case 4:B.dq6(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:99}
B.bjM.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.ci(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.ab7(w)
u=A.z(8)
t=A.aE(C.E.v(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.A),C.aH,k,k)],q)
if(x.x){w=j.gOC()
p=s.z
w=A.a([C.dW,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gabm()
if(o)p="-"
o=j.gabd()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([C.H_,new B.adV(n,p,k),new B.adV(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apE:D.aqr)
C.e.A(r,A.a([C.H_,A.K(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQM,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bm(C.nm,A.a([C.n0,A.d(w.c?j.gab8():j.gOB(),k,k,k,k,k,k,C.aH,k,k)],q),C.bG,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.e.A(r,A.a([D.bwi,A.cu(o,D.bNh,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gna()!==D.qG
else w=!1
if(w)C.e.A(r,A.a([C.dW,A.aJ(A.d(j.gabb(),k,k,k,k,k,k,C.aH,k,k),D.bNC,k,k,x.z,k,k)],q))
return A.b2(new A.b9(new A.av(0,1/0,i,1/0),A.aI(A.K(k,k,k,new A.b9(C.K5,new A.bU(new A.J(D.aoR,k,t,u,k,k,C.r),C.aq,new A.G(C.b3,A.v(r,C.aj,k,C.d,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bTe,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.x,k,k,D.aEr,k,k,C.y)},
$S:97};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.alB.prototype,"gcSp","EN",0)
w(v,"gbxH","agy",1)
w(v,"gd9o","d9p",2)})();(function inheritance(){var x=a.inheritMany
x(A.ng,[B.nI,B.zE,B.aw3])
x(A.T,[B.bjL,B.aw8])
x(A.fh,[B.dex,B.dez,B.cRv,B.cRw,B.cRB])
x(A.hd,[B.dew,B.deA,B.dey,B.cRP,B.cRQ,B.cRR,B.cRz,B.cRA,B.cRS,B.cRX,B.cRY,B.cRZ,B.cS_,B.cRC,B.cRD,B.cRE,B.cRF,B.cRG,B.cRH,B.cRI,B.cRJ,B.cRK,B.cRL,B.cRM,B.cS7,B.cS8,B.cS9,B.cSa,B.cSb,B.cSc,B.cSd,B.cSe,B.cSf,B.cSh,B.cSi,B.cSj,B.cSk,B.cSl,B.cSm,B.cSn,B.cSo,B.cSp,B.cS0,B.cS1,B.cS2,B.cS3,B.cS4,B.cS5,B.cS6,B.cRT,B.cRV,B.cRx,B.cRy,B.cSg])
x(A.U,[B.abT,B.H4])
x(A.W,[B.aW_,B.alB])
x(A.hT,[B.cRU,B.cRN,B.cRW,B.cRO,B.bjM])
x(A.x,[B.aw4,B.adV])})()
A.fv(b.typeUniverse,JSON.parse('{"abT":{"U":[],"m":[]},"aW_":{"W":["abT"]},"H4":{"U":[],"m":[]},"alB":{"W":["H4"]},"aw4":{"x":[],"m":[]},"adV":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("ey"),u:x("a9<a3<q,@>?>"),T:x("Lo"),w:x("blX"),s:x("E<q>"),p:x("E<m>"),P:x("a3<q,@>"),f:x("a3<@,@>"),a:x("bo"),A:x("OV"),N:x("q"),x:x("Pr"),r:x("Hq"),O:x("V<q>"),y:x("N"),z:x("@"),h:x("a3<q,@>?"),X:x("T?"),H:x("~")}})();(function constants(){D.aoR=new A.X(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.apE=new A.X(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.aqr=new A.X(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.z)
D.ar0=new A.X(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aCJ=new A.bG(175e4)
D.aD0=new A.bG(75e4)
D.aEr=new A.an(20,64,20,24)
D.ND=new B.aw3(0,"purchase")
D.aGV=new B.aw3(1,"session")
D.iD=new B.nI(0,"signInRequired")
D.Cq=new B.nI(1,"telegramAccountNotLinked")
D.iE=new B.nI(10,"requestFailed")
D.vn=new B.nI(11,"purchaseFailed")
D.hM=new B.nI(12,"sessionFailed")
D.Cr=new B.nI(2,"insufficientBalance")
D.Cs=new B.nI(3,"walletInactive")
D.vo=new B.nI(4,"refundPending")
D.vp=new B.nI(5,"accessExpired")
D.Ct=new B.nI(6,"accessRequired")
D.hj=new B.nI(7,"gameUnavailable")
D.Cu=new B.nI(8,"accessNotActive")
D.NE=new B.nI(9,"sessionDenied")
D.NF=new B.zE(0,"none")
D.aGW=new B.zE(1,"signIn")
D.aGX=new B.zE(2,"bindTelegram")
D.aGY=new B.zE(3,"topUp")
D.aGZ=new B.zE(4,"purchase")
D.aH_=new B.zE(5,"openGame")
D.qG=new B.zE(6,"retry")
D.aLi=new A.ap(C.jA,null,C.E,null,null)
D.ao3=new A.m3(2.5,null,null,null,null,null,null,null,null,null)
D.bwg=new A.ad(28,28,D.ao3,null)
D.bwi=new A.ad(null,22,null,null)
D.bNh=new A.V("slot-game-access-primary",y.O)
D.bNC=new A.V("slot-game-access-refresh",y.O)
D.bQM=new A.V("slot-game-access-message",y.O)
D.bTe=new A.V("slot-game-access-gate",y.O)})();(function staticFields(){$.a6h=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"emh","dLH",()=>A.be("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"eng","hP",()=>A.aV("SlotGamePage"))})()};
(a=>{a["T3s9l3QP3Rhf93G6pJvvqq3uri8="]=a.current})($__dart_deferred_initializers__);