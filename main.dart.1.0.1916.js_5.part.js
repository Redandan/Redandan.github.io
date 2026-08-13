((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIQ(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.CC
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.CD
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.CE
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.vs
if(C.b.t(x,"ACCESS_EXPIRED"))return D.vt
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.CF
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hg
return null},
doF(d,e,f){var x=e==null?null:C.b.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nU:function nU(d,e){this.a=d
this.b=e},
zU:function zU(d,e){this.a=d
this.b=e},
ayD:function ayD(d,e){this.a=d
this.b=e},
bkp:function bkp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eio(d){var x=b.G,w=A.f0(new B.dds(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.ddr(w)},
eip(d){var x=b.G,w=A.f0(new B.ddu(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.ddt(w)},
dp4(d){B.dnY(A.bC(d),b.G.window.location.origin)},
dnY(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ig(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.b.aQ(u,e))v=!A.nw(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dds:function dds(d,e){this.a=d
this.b=e},
ddr:function ddr(d){this.a=d},
ddu:function ddu(d,e){this.a=d
this.b=e},
ddv:function ddv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddt:function ddt(d){this.a=d},
aeh:function aeh(d,e,f){this.c=d
this.d=e
this.a=f},
aZ1:function aZ1(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cQo:function cQo(d){this.a=d},
cQp:function cQp(d){this.a=d},
dCq(d,e){return new B.Go(d,e,null)},
Go:function Go(d,e,f){this.c=d
this.d=e
this.a=f},
aoi:function aoi(d,e,f,g){var _=this
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
cQI:function cQI(d,e){this.a=d
this.b=e},
cQJ:function cQJ(d,e){this.a=d
this.b=e},
cQK:function cQK(d){this.a=d},
cQs:function cQs(d,e){this.a=d
this.b=e},
cQt:function cQt(d,e){this.a=d
this.b=e},
cQL:function cQL(){},
cQQ:function cQQ(d,e){this.a=d
this.b=e},
cQR:function cQR(d,e){this.a=d
this.b=e},
cQS:function cQS(d,e){this.a=d
this.b=e},
cQT:function cQT(d){this.a=d},
cQv:function cQv(d,e){this.a=d
this.b=e},
cQw:function cQw(d){this.a=d},
cQx:function cQx(d){this.a=d},
cQy:function cQy(d){this.a=d},
cQz:function cQz(d){this.a=d},
cQA:function cQA(d,e){this.a=d
this.b=e},
cQB:function cQB(d,e){this.a=d
this.b=e},
cQC:function cQC(d,e){this.a=d
this.b=e},
cQD:function cQD(d,e){this.a=d
this.b=e},
cQE:function cQE(d,e){this.a=d
this.b=e},
cQF:function cQF(d){this.a=d},
cR0:function cR0(d){this.a=d},
cR1:function cR1(d){this.a=d},
cR2:function cR2(d){this.a=d},
cR3:function cR3(d){this.a=d},
cR4:function cR4(d){this.a=d},
cR5:function cR5(d){this.a=d},
cR6:function cR6(d,e){this.a=d
this.b=e},
cR7:function cR7(d,e){this.a=d
this.b=e},
cR8:function cR8(d){this.a=d},
cRa:function cRa(d){this.a=d},
cRb:function cRb(d){this.a=d},
cRc:function cRc(d){this.a=d},
cRd:function cRd(d){this.a=d},
cRe:function cRe(d){this.a=d},
cRf:function cRf(d,e,f){this.a=d
this.b=e
this.c=f},
cRg:function cRg(d){this.a=d},
cRh:function cRh(d,e){this.a=d
this.b=e},
cRi:function cRi(d){this.a=d},
cQU:function cQU(d){this.a=d},
cQV:function cQV(d){this.a=d},
cQW:function cQW(d){this.a=d},
cQX:function cQX(d){this.a=d},
cQY:function cQY(d){this.a=d},
cQZ:function cQZ(d){this.a=d},
cR_:function cR_(d){this.a=d},
cQM:function cQM(d){this.a=d},
cQN:function cQN(){},
cQG:function cQG(){},
cQO:function cQO(d){this.a=d},
cQP:function cQP(){},
cQH:function cQH(){},
cQq:function cQq(d,e){this.a=d
this.b=e},
cQr:function cQr(d){this.a=d},
cQu:function cQu(d,e,f){this.a=d
this.b=e
this.c=f},
cR9:function cR9(d){this.a=d},
ayE:function ayE(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkq:function bkq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agD:function agD(d,e,f){this.c=d
this.d=e
this.a=f},
eiZ(d){var x,w,v=C.b.G(d)
if(v.length===0)return null
x=A.nk(v)
w=!0
if(x!=null)if(x.ge6().toLowerCase()==="https")if(x.ga1X().length===0)w=x.gXc()&&x.gKG()!==443||!C.ab9.t(0,x.gmS().toLowerCase())||x.gKt().length===0
if(w)return null
return x.ccz("telegram.me")},
doX(d){return d.c?d:A.dtq(A.by(d),A.bB(d),A.c2(d),A.hs(d),A.mt(d),A.MA(d),A.aDB(d),d.b)},
e4e(d){var x
if(d==null||d.length===0)return null
x=A.dCo().j(0,d)
return(x==null?null:x.e===C.i8)===!1?x:null},
zT(d,e,f,g){var x=null
return B.dXf(d,e,f,g)},
dXf(d,e,f,a0){var x=0,w=A.m(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zT=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a8o.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dJP():k).$0(),$async$zT)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a8o.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q3(s,a0),$async$zT)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a8o.h(0,a0,q)
x=15
return A.c(s.eQ("String",a0,q),$async$zT)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q3(s,e),$async$zT)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q3(s,e),$async$zT)
case 21:case 20:case 12:o=d.$0()
$.a8o.h(0,a0,o)
x=22
return A.c(s.eQ("String",a0,o),$async$zT)
case 22:n=a2
if(!n){k=A.b5("Game access attempt id was not persisted.")
throw A.t(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
m=A.u(g)
l=A.aI(g)
f.$2(m,l)
v=$.a8o.c7(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$zT,w)},
a8p(d,e){var x=null
return B.dXe(d,e)},
dXe(d,e){var x=0,w=A.m(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a8p=A.i(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.dm(0)
for(p=J.aM(l);p.F();)$.a8o.V(0,p.gN())
v=3
p=m
x=6
return A.c((p==null?A.dJP():p).$0(),$async$a8p)
case 6:t=g
p=J.aM(l)
case 7:if(!p.F()){x=8
break}s=p.gN()
o=s
t.a.V(0,o)
x=9
return A.c($.a3K().V(0,"flutter."+o),$async$a8p)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aI(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$a8p,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[102]
B.nU.prototype={
Z(){return"GameAccessIssue."+this.b}}
B.zU.prototype={
Z(){return"GameAccessPrimaryAction."+this.b}}
B.ayD.prototype={
Z(){return"GameAccessAttemptKind."+this.b}}
B.bkp.prototype={
gn1(){var x=this
if(x.b||x.c||!x.a)return D.PY
if(x.f)return D.aOa
switch(x.r){case D.iB:return D.aO6
case D.CC:return D.aO7
case D.CD:case D.CE:return D.aO8
case D.vs:case D.hg:return D.PY
case D.vt:case D.CF:case D.CG:case D.PX:case D.iC:case D.vr:return D.qH
case D.hK:return D.qH
case null:case void 0:if(x.e)return D.qH
return x.d?D.aO9:D.qH}}}
B.aeh.prototype={
T(){return new B.aZ1()}}
B.aZ1.prototype={
a0(){var x,w,v,u=this
u.a6()
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
v=A.f0(new B.cQo(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b3k()
$.CL().a_r(x,new B.cQp(u),!0)},
aM(d){var x,w
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
return A.dkG(null,C.FJ,x)}}
B.Go.prototype={
T(){var x=$.aA()
return new B.aoi(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.aoi.prototype={
gbzw(){var x,w=this.y
if(w===$){x=$.aA().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new A.aDS(x)}return w},
a0(){var x,w,v=this
v.a6()
x=v.a
if(x.d!=null){v.QX()
return}w=v.d=B.e4e(x.c)
if(w==null){v.fx=!1
v.id=D.hg
return}if(!w.gbGU()){v.fx=!1
v.id=D.hg
return}if(w.e!==C.i8){v.fx=!1
v.k1=B.eio(v.gbxz())
v.k2=B.eip(v.gcRU())
v.afY()
v.ax=v.ahj()
return}},
bd(){var x,w=this
w.bW()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i8){w.fr=!0
w.f=w.bRl()}},
afY(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$afY=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hz(),$async$afY)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cQI(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.hK().k(C.aB,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.hK().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hi(!0),$async$afY)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cQJ(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a3X(o,4))}catch(h){n=A.u(h)
$.hK().k(C.aB,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cQK(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$afY,w)},
y_(){return this.cwT()},
cwT(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$y_=A.i(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hz(),$async$y_)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cQs(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.hK().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.hK().k(C.aB,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.pS(),$async$y_)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cQt(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.X(a0.b,4))}catch(a5){n=A.u(a5)
$.hK().k(C.aB,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.hK().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.pS(),$async$y_)
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
$.hK().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.agd(),$async$y_)
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
return A.l($async$y_,w)},
agd(){var x=0,w=A.m(y.h),v,u=this,t,s
var $async$agd=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahj()
v=t.wO(C.OC,new B.cQL())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$agd,w)},
ahj(){var x=0,w=A.m(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahj=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdn(l.a),$async$ahj)
case 7:q=e
if(J.r(J.aE(q,"success"),!0)&&y.f.b(J.aE(q,"data"))){p=A.uD(y.f.a(J.aE(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aR.iR(p,null))}catch(j){o=A.u(j)
$.hK().k(C.aB,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.hK().k(C.q,"_getSlotRtpData failed",n,null)
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
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ahj,w)},
QX(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QX=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzw().nb(l),$async$QX)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cQQ(s,r))
x=1
break}s.p(new B.cQR(s,r))
x=8
return A.c(s.ox(),$async$QX)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l6){q=m
$.hK().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQS(s,q))}else{p=m
o=A.aI(k)
m=$.hK()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQT(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$QX,w)},
ox(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$ox=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i8){if(s.c==null){x=1
break}s.p(new B.cQv(s,f))
x=1
break}if(!f.gbGU()){if(s.c==null){x=1
break}s.p(new B.cQw(s))
x=1
break}if(s.c!=null)s.p(new B.cQx(s))
u=4
x=7
return A.c(s.w.hz(),$async$ox)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cQy(s))
x=1
break}if(s.c==null){x=1
break}q=s.beJ(r)
if(q==null){s.p(new B.cQz(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzw().a.BR(d),$async$ox)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cQA(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bXK(p.r)
if(p.b!==!0||o!=null){s.p(new B.cQB(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cQC(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hK)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dbO(!0),$async$ox)
case 13:case 12:x=1
break
case 10:s.p(new B.cQD(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l6){m=k
$.hK().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQE(s,m))}else{l=k
$.hK().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cQF(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ox,w)},
bzI(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.QX()
return w.ox()},
q9(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$q9=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i8){if(s.c==null){x=1
break}if(h)s.p(new B.cR0(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cR1(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.ox(),$async$q9)
case 5:x=1
break
case 4:s.p(new B.cR2(s))
u=7
x=10
return A.c(s.w.hz(),$async$q9)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cR3(s))
x=1
break}if(s.c==null){x=1
break}o=s.beJ(p)
if(o==null){s.p(new B.cR4(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bzV(o)
x=13
return A.c(s.ox(),$async$q9)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byG(),$async$q9)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzw().a.KT(q,new A.a8q(n)),$async$q9)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Q1?16:17
break
case 16:x=18
return A.c(s.afb(),$async$q9)
case 18:if(s.c==null){x=1
break}s.p(new B.cR5(s))
x=19
return A.c(s.ox(),$async$q9)
case 19:x=1
break
case 17:s.p(new B.cR6(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l6?20:22
break
case 20:l=h
$.hK().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhD(l,D.vr)
f=l.b.toUpperCase()
x=k===D.vt||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afb(),$async$q9)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cR7(s,k))
x=21
break
case 22:j=h
$.hK().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cR8(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$q9,w)},
lI(d,e){return this.dbP(d,!0)},
dbO(d){return this.lI(!0,d)},
dbP(b9,c0){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lI=A.i(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.cy
b1=s.ay
if(b6.e===C.i8){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.p(new B.cRa(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cRb(s))
u=4
x=7
return A.c(s.w.hz(),$async$lI)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beJ(p)
if(o==null){s.p(new B.cRc(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bzV(o)
x=10
return A.c(s.ox(),$async$lI)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.uV(!0),$async$lI)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cRd(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byH(),$async$lI)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.Dw(b6.a,new A.a8r(n)),$async$lI)
case 15:m=c2
l=new A.az(Date.now(),0,!1).S()
k=m==null?null:B.eiZ(m.w)
j=m==null?null:B.doX(m.f)
i=m==null?null:B.doX(m.r)
h=m==null?null:B.doX(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Q3
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.S().bT(l.S()).a)<=3e8
b2=i
a2=(b2==null?null:b2.iU(l))===!0
b2=h
a3=(b2==null?null:b2.iU(l))===!0
a4=h!=null&&i!=null&&!h.iU(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.b([],y.s)
if(!g)J.bU(a7,"status")
if(!f)J.bU(a7,"session_id")
if(!e)J.bU(a7,"entitlement")
if(!d)J.bU(a7,"game_key")
if(!a0)J.bU(a7,"client_session")
if(!a1)J.bU(a7,"session_started_at")
if(!a2)J.bU(a7,"session_expiry")
if(!a3)J.bU(a7,"launch_expiry")
if(!a4)J.bU(a7,"launch_expiry_bound")
if(!a5)J.bU(a7,"launch_url_untrusted")
a8=a7
$.hK().k(C.q,"game session response rejected: "+J.a3U(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.Ek(b6.a,!0,m.a),$async$lI)
case 20:case 19:x=21
return A.c(s.PK(),$async$lI)
case 21:if(s.c==null){x=1
break}s.p(new B.cRe(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.uV(!0),$async$lI)
case 24:x=1
break
case 23:x=b6.e===C.i8?25:26
break
case 25:s.p(new B.cRf(s,k,h))
x=27
return A.c(s.v2(),$async$lI)
case 27:x=1
break
case 26:s.p(new B.cRg(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.l6?28:30
break
case 28:a9=a7
$.hK().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PK(),$async$lI)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lI(!1,!0),$async$lI)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cRh(s,a9))
x=29
break
case 30:b0=a7
$.hK().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cRi(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$lI,w)},
v2(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$v2=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cQU(s))
x=!k.iU(new A.az(Date.now(),0,!1).S())?3:4
break
case 3:x=5
return A.c(s.uV(!0),$async$v2)
case 5:if(s.c==null){x=1
break}s.p(new B.cQV(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hz(),$async$v2)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aI(f)
h=$.hK()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQW(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beJ(q)
if(g==null){s.p(new B.cQX(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bzV(g)
x=13
return A.c(s.ox(),$async$v2)
case 13:x=1
break
case 12:u=15
s.p(new B.cQY(s))
x=18
return A.c(A.yH(r,C.ol,"_self"),$async$v2)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cQZ(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aI(e)
h=$.hK()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.uV(!0),$async$v2)
case 19:if(s.c==null){x=1
break}s.p(new B.cR_(s))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$v2,w)},
uV(d){return this.cHh(!0)},
cHh(d){var x=0,w=A.m(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$uV=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.Ek(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$uV)
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
case 5:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$uV,w)},
Ek(d,e,f){return this.cHo(d,!0,f)},
cHo(d,e,f){var x=0,w=A.m(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ek=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.HR(d,f),$async$Ek)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.hK().k(C.aB,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.d9(C.Bq,null,l),$async$Ek)
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
return A.c(s.PK(),$async$Ek)
case 15:case 14:v=p
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Ek,w)},
byG(){var x=0,w=A.m(y.N),v,u=this,t
var $async$byG=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.gc_n()
v=B.zT(new B.cQM(u),u.gbXT(),new B.cQN(),t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$byG,w)},
afb(){var x=0,w=A.m(y.H),v=this
var $async$afb=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a8p(new B.cQG(),A.e8([v.gc_n(),v.gbXT()],y.N)),$async$afb)
case 2:return A.k(null,w)}})
return A.l($async$afb,w)},
byH(){var x=0,w=A.m(y.N),v,u=this
var $async$byH=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:v=B.zT(new B.cQO(u),null,new B.cQP(),u.gc1p())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$byH,w)},
PK(){var x=0,w=A.m(y.H),v=this
var $async$PK=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a8p(new B.cQH(),A.e8([v.gc1p()],y.N)),$async$PK)
case 2:return A.k(null,w)}})
return A.l($async$PK,w)},
beJ(d){var x=A.dwP(d),w=x==null?null:C.b.G(x)
return w==null||w.length===0?null:w},
bzV(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_n(){var x=this.a.d
x=A.a(x==null?"unknown":x)
return B.doF(D.PW,this.cy,"product-"+x)},
gbXT(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.doF(D.PW,this.cy,x)},
gc1p(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.doF(D.aO5,this.cy,x)},
bYI(d){var x,w=Date.now(),v=C.d.n3($.b3a().JJ(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.a(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bXK(d){var x=B.dIQ(d)
if(x!=null)return x
return d==null||C.b.G(d).length===0?null:D.iC},
bhD(d,e){var x,w=d.a
if(w===401)return D.iB
x=B.dIQ(d.b)
if(x!=null)return x
if(w===404)return D.hg
return e},
cXK(d,e){switch(e){case D.iB:return d.gab2()
case D.CC:return d.gabc()
case D.CD:return d.gaaS()
case D.CE:return d.gab7()
case D.vs:return d.gaaZ()
case D.vt:return d.gaaR()
case D.CF:return d.gab0()
case D.hg:return d.gab5()
case D.CG:return d.gaaT()
case D.PX:return d.gab9()
case D.iC:return d.gaaQ()
case D.vr:return d.gaaW()
case D.hK:return d.gaba()
case null:case void 0:return null}},
Es(d){return this.cRV(d)},
cRV(b6){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Es=A.i(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agj()
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
case 5:v=s.y_()
x=1
break
case 6:m=s.c
if(m!=null)A.aN(m,!1).f.aH(C.qw,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aN(m,!1).f.aH(C.za,y.X)
v=null
x=1
break
case 8:u=14
b0=A.m4(b6.j(0,"betIndex"))
q=b0==null?null:C.j.bX(b0)
a2=A.m4(b6.j(0,"betAmount"))
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
return A.c(s.x.abm(p,q,A.aS(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$Es)
case 17:o=b8
n=J.aE(o,"data")
if(J.r(J.aE(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eB(m,"type","SPIN_RESULT")
J.hb(m,n)
v=m
x=1
break}m=J.aE(o,"message")
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
return A.c(s.x.jI(),$async$Es)
case 22:k=b8
if(J.r(J.aE(k,"success"),!0)){m=y.h
j=m.a(J.aE(k,"data"))
k=j
m=m.a(k==null?null:J.aE(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.m4(J.aE(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aE(k,"message")
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
return A.c(s.agd(),$async$Es)
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
m=A.m4(b6.j(0,"page"))
a8=m==null?null:C.j.bX(m)
e=a8==null?1:a8
m=A.m4(b6.j(0,"size"))
a9=m==null?null:C.j.bX(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a2W(e,d),$async$Es)
case 32:a0=b8
if(J.r(J.aE(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aE(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aE(a0,"message")
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
case 4:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Es,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.uV(!0)
x.a7()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
x=t.f
w=y.p
v=A.b([],w)
u=x==null
if(!u)C.f.C(v,A.b([x,A.dO(0,A.h2(C.ca,s,C.A,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxz(),s,s,s,s,s,s,!1,C.bX),108,s,0,s,s,75)],w))
else v.push(t.cv9(d))
if(u)v.push(new A.dB(!0,!0,!0,!0,C.H,!1,new A.cd(C.ik,s,s,A.aL(s,s,s,s,s,D.aT8,s,s,t.gbxz(),s,s,s,s,r.gh3(),s),s),s))
return A.bL(s,D.auT,A.d2(C.aU,v,C.t,C.aQ,s),s,s,s,s,s)},
cv9(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.db?a0.gDr():a0.gOr()
if(e.db){a0=a0.gDr()
r=A.p(a1).ok.y
a0=new A.G(C.b2,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.E.B(0.78)),C.aG,d,d),d)}else a0=D.bJq
return A.aJ(A.K(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.b.G(A.a(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.b.G(A.a(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbGU())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bkp(r,p,l,k===!0,u===!0,!j,i)
g=e.cXK(a0,i)
if(e.db)f=a0.gDr()
else f=j?d:a0.gaaX()
u=x==null?d:x.b
a0=u==null?a0.gab6():u
u=g==null
r=u?f:g
return new B.ayE(a0,h,q,m,r,!u,!t,new B.cQq(e,h),new B.cQr(e),d)},
cQM(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aN(x,!1).f.aH(C.er,y.X)
return
case 2:w.ahD()
return
case 3:x=w.c
x.toString
A.aN(x,!1).f.aH(C.qw,y.X)
return
case 4:w.q9()
return
case 5:w.v2()
return
case 6:w.bzI()
return
case 0:return}},
ahD(){var x=0,w=A.m(y.H),v,u=this,t
var $async$ahD=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aH(C.pQ,y.X),$async$ahD)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bzI(),$async$ahD)
case 4:case 1:return A.k(v,w)}})
return A.l($async$ahD,w)},
agj(){var x=0,w=A.m(y.H),v,u=this
var $async$agj=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.aht(),$async$agj)
case 3:case 1:return A.k(v,w)}})
return A.l($async$agj,w)},
aht(){var x=0,w=A.m(y.H),v,u=this,t
var $async$aht=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.uV(!0),$async$aht)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.Y(t,!1).wr(),$async$aht)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aN(t,!1).f.hP("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$aht,w)},
bRl(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dNN()
if(x.b.test(u)){$.aH.y2$.push(new B.cQu(w,v,t))
return C.yC}return new B.aeh(w.bUY(t,Date.now()),w.gd8P(),null)},
bUY(d,e){var x="/games/"+d
return x+(C.b.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d8Q(){new B.cR9(this).$0()}}
B.ayE.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dB(!0,!0,!0,!0,C.H,!1,A.d1(new B.bkq(this,x,A.p(d),this.cJi(x))),null)},
cJi(d){switch(this.d.gn1().a){case 1:return d.gDs()
case 2:return d.gYc()
case 3:return d.gab4()
case 4:return d.gab3()
case 5:return d.guA()
case 6:return d.gab1()
case 0:return null}}}
B.agD.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a1(C.E.B(0.58))
u=A.J(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aG(C.E,C.R)
return new A.G(C.e8,A.w(A.b([u,C.a8,new A.er(1,C.bv,A.d(this.d,x,x,x,x,x,v,C.j2,x,x),x)],y.p),C.m,x,C.e,C.i,0,x,x),x)}}
var z=a.updateTypes(["a9<U<q,@>?>(U<q,@>)","a9<~>()","~()"])
B.dds.prototype={
$1(d){var x,w=A.ig(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.Rt(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.ddr.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.ddu.prototype={
$1(d){var x,w,v,u,t,s=A.ig(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.Rt(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd4(),v=v.gam(v);v.F();){u=v.gN()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.ddv(this.b,w,d,s).$0()},
$S:9}
B.ddv.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h9(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bC(q)
t=v.c.source
if(t!=null)r=A.ig(t,"Object")
else r=!1
s=v.d
if(r){A.VC(t,"postMessage",u,s,y.X)
B.dnY(u,s)}else{B.dnY(u,s)
b.G.window.postMessage(u,s)}}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:96}
B.ddt.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cQo.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cQp.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:557}
B.cQI.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cQJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cQK.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cQs.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cQt.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cQL.prototype={
$0(){return null},
$S:13}
B.cQQ.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hg},
$S:0}
B.cQR.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xN(w.b,w.gdqp(),"Telegram Mini App",null,C.i8,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cQS.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhD(this.b,D.iC)},
$S:0}
B.cQT.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iC},
$S:0}
B.cQv.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hg},
$S:0}
B.cQw.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hg},
$S:0}
B.cQx.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cQy.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQz.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQA.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iC:D.hg},
$S:0}
B.cQB.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iC:x},
$S:0}
B.cQC.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hK},
$S:0}
B.cQD.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bXK(x.r)
if(w==null)x=x.b===!0?null:D.iC
else x=w
v.id=x},
$S:0}
B.cQE.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhD(this.b,D.iC)},
$S:0}
B.cQF.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iC},
$S:0}
B.cR0.prototype={
$0(){return this.a.id=D.hg},
$S:0}
B.cR1.prototype={
$0(){return this.a.id=D.hg},
$S:0}
B.cR2.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cR3.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cR4.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cR5.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cR6.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.Q2?D.vs:D.CG},
$S:0}
B.cR7.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cR8.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vr},
$S:0}
B.cRa.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hK},
$S:0}
B.cRb.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cRc.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cRd.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cRe.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hK},
$S:0}
B.cRf.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cRg.prototype={
$0(){var x=this.a
x.f=x.bRl()
x.fx=!1},
$S:0}
B.cRh.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhD(this.b,D.hK)},
$S:0}
B.cRi.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cQU.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cQV.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cQW.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cQX.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cQY.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cQZ.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cR_.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cQM.prototype={
$0(){return this.a.bYI("game-access")},
$S:24}
B.cQN.prototype={
$2(d,e){return $.hK().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:37}
B.cQG.prototype={
$2(d,e){return $.hK().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:37}
B.cQO.prototype={
$0(){return this.a.bYI("game-session")},
$S:24}
B.cQP.prototype={
$2(d,e){return $.hK().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:37}
B.cQH.prototype={
$2(d,e){return $.hK().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:37}
B.cQq.prototype={
$0(){return this.a.cQM(this.b.gn1())},
$S:0}
B.cQr.prototype={
$0(){this.a.bzI()
return null},
$S:0}
B.cQu.prototype={
$1(d){return this.cec(d)},
cec(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1){t.push(a1)
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
return A.c(h.r.hi(!0),$async$$1)
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
$.hK().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a3X(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beN())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.agd(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.hK().k(C.aB,"RTP prefetch failed",n,null)
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
$.hK().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.Y(l,!1).wr(),$async$$1)
case 23:h=h.bUY(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:513}
B.cR9.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.y_(),$async$$0)
case 2:t=e
B.dp4(t)
u=y.H
x=3
return A.c(A.d9(D.aK4,null,u),$async$$0)
case 3:B.dp4(t)
x=4
return A.c(A.d9(D.aJN,null,u),$async$$0)
case 4:B.dp4(t)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:96}
B.bkq.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.j.cK(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aaU(w)
u=A.A(8)
t=A.aF(C.E.B(0.12),C.w,1)
s=l.c.ok
r=s.f
q=y.p
r=A.b([A.d(w,k,k,k,k,k,r==null?k:r.aG(C.E,C.z),C.aG,k,k)],q)
if(x.x){w=j.gOs()
p=s.z
w=A.b([C.dW,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.E.B(0.72)),C.aG,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gab8()
if(o)p="-"
o=j.gab_()
m=x.f
if(m==null)m="-"
C.f.C(w,A.b([C.HS,new B.agD(n,p,k),new B.agD(o,m,k)],q))}C.f.C(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.atx:D.auk)
C.f.C(r,A.b([C.HS,A.K(k,k,k,A.d(w,k,k,k,k,k,s,C.aG,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3x,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bq(C.tJ,A.b([C.n1,A.d(w.c?j.gaaV():j.gOr(),k,k,k,k,k,k,C.aG,k,k)],q),C.bI,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aG,k,k)}C.f.C(r,A.b([D.bJs,A.cm(o,D.c08,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gn1()!==D.qH
else w=!1
if(w)C.f.C(r,A.b([C.dW,A.aK(A.d(j.gaaY(),k,k,k,k,k,k,C.aG,k,k),D.c0t,k,k,x.z,k,k)],q))
return A.bb(new A.b8(new A.ax(0,1/0,i,1/0),A.aJ(A.K(k,k,k,new A.b8(C.Lk,new A.bV(new A.L(D.asK,k,t,u,k,k,C.r),C.aq,new A.G(C.b2,A.v(r,C.am,k,C.e,C.I,0,C.k),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c66,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.A,k,k,D.aLz,k,k,C.D)},
$S:111};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aoi.prototype,"gcRU","Es",0)
w(v,"gbxz","agj",1)
w(v,"gd8P","d8Q",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.nn,[B.nU,B.zU,B.ayD])
w(B.bkp,A.V)
x(A.fi,[B.dds,B.ddu,B.cQo,B.cQp,B.cQu])
x(A.hd,[B.ddr,B.ddv,B.ddt,B.cQI,B.cQJ,B.cQK,B.cQs,B.cQt,B.cQL,B.cQQ,B.cQR,B.cQS,B.cQT,B.cQv,B.cQw,B.cQx,B.cQy,B.cQz,B.cQA,B.cQB,B.cQC,B.cQD,B.cQE,B.cQF,B.cR0,B.cR1,B.cR2,B.cR3,B.cR4,B.cR5,B.cR6,B.cR7,B.cR8,B.cRa,B.cRb,B.cRc,B.cRd,B.cRe,B.cRf,B.cRg,B.cRh,B.cRi,B.cQU,B.cQV,B.cQW,B.cQX,B.cQY,B.cQZ,B.cR_,B.cQM,B.cQO,B.cQq,B.cQr,B.cR9])
x(A.W,[B.aeh,B.Go])
x(A.Z,[B.aZ1,B.aoi])
x(A.hN,[B.cQN,B.cQG,B.cQP,B.cQH,B.bkq])
x(A.x,[B.ayE,B.agD])})()
A.fU(b.typeUniverse,JSON.parse('{"aeh":{"W":[],"n":[]},"aZ1":{"Z":["aeh"]},"Go":{"W":[],"n":[]},"aoi":{"Z":["Go"]},"ayE":{"x":[],"n":[]},"agD":{"x":[],"n":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("f9"),u:x("a9<U<q,@>?>"),T:x("KD"),w:x("bmL"),s:x("E<q>"),p:x("E<n>"),P:x("U<q,@>"),f:x("U<@,@>"),a:x("bo"),A:x("Or"),N:x("q"),x:x("P1"),r:x("GG"),O:x("X<q>"),y:x("Q"),z:x("@"),h:x("U<q,@>?"),X:x("V?"),H:x("~")}})();(function constants(){D.asK=new A.a_(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.B)
D.atx=new A.a_(1,1,0.7686274509803922,0.7686274509803922,C.B)
D.auk=new A.a_(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.B)
D.auT=new A.a_(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.B)
D.aJN=new A.bI(175e4)
D.aK4=new A.bI(75e4)
D.aLz=new A.ao(20,64,20,24)
D.PW=new B.ayD(0,"purchase")
D.aO5=new B.ayD(1,"session")
D.iB=new B.nU(0,"signInRequired")
D.CC=new B.nU(1,"telegramAccountNotLinked")
D.iC=new B.nU(10,"requestFailed")
D.vr=new B.nU(11,"purchaseFailed")
D.hK=new B.nU(12,"sessionFailed")
D.CD=new B.nU(2,"insufficientBalance")
D.CE=new B.nU(3,"walletInactive")
D.vs=new B.nU(4,"refundPending")
D.vt=new B.nU(5,"accessExpired")
D.CF=new B.nU(6,"accessRequired")
D.hg=new B.nU(7,"gameUnavailable")
D.CG=new B.nU(8,"accessNotActive")
D.PX=new B.nU(9,"sessionDenied")
D.PY=new B.zU(0,"none")
D.aO6=new B.zU(1,"signIn")
D.aO7=new B.zU(2,"bindTelegram")
D.aO8=new B.zU(3,"topUp")
D.aO9=new B.zU(4,"purchase")
D.aOa=new B.zU(5,"openGame")
D.qH=new B.zU(6,"retry")
D.aT8=new A.aq(C.jx,null,C.E,null,null)
D.arX=new A.mf(2.5,null,null,null,null,null,null,null,null,null)
D.bJq=new A.ad(28,28,D.arX,null)
D.bJs=new A.ad(null,22,null,null)
D.c08=new A.X("slot-game-access-primary",y.O)
D.c0t=new A.X("slot-game-access-refresh",y.O)
D.c3x=new A.X("slot-game-access-message",y.O)
D.c66=new A.X("slot-game-access-gate",y.O)})();(function staticFields(){$.a8o=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"erd","dNN",()=>A.bi("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"esb","hK",()=>A.aY("SlotGamePage"))})()};
(a=>{a["qhn9Zqt0rWk0k6EJJZZbdcZODfs="]=a.current})($__dart_deferred_initializers__);