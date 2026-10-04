((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dFJ(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cn
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Co
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Cp
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vn
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vo
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Cq
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hi
return null},
doO(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nC:function nC(d,e){this.a=d
this.b=e},
zB:function zB(d,e){this.a=d
this.b=e},
avC:function avC(d,e){this.a=d
this.b=e},
bjd:function bjd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ecq(d){var x=b.G,w=A.eD(new B.ddv(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.ddu(w)},
ecr(d){var x=b.G,w=A.eD(new B.ddx(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.ddw(w)},
dpd(d){B.do7(A.bA(d),b.G.window.location.origin)},
do7(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.i5(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aM(u,e))v=!A.nj(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
ddv:function ddv(d,e){this.a=d
this.b=e},
ddu:function ddu(d){this.a=d},
ddx:function ddx(d,e){this.a=d
this.b=e},
ddy:function ddy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddw:function ddw(d){this.a=d},
abt:function abt(d,e,f){this.c=d
this.d=e
this.a=f},
aVw:function aVw(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cQA:function cQA(d){this.a=d},
cQB:function cQB(d){this.a=d},
dzG(d,e){return new B.GY(d,e,null)},
GY:function GY(d,e,f){this.c=d
this.d=e
this.a=f},
al7:function al7(d,e,f,g){var _=this
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
cQU:function cQU(d,e){this.a=d
this.b=e},
cQV:function cQV(d,e){this.a=d
this.b=e},
cQW:function cQW(d){this.a=d},
cQE:function cQE(d,e){this.a=d
this.b=e},
cQF:function cQF(d,e){this.a=d
this.b=e},
cQX:function cQX(){},
cR1:function cR1(d,e){this.a=d
this.b=e},
cR2:function cR2(d,e){this.a=d
this.b=e},
cR3:function cR3(d,e){this.a=d
this.b=e},
cR4:function cR4(d){this.a=d},
cQH:function cQH(d,e){this.a=d
this.b=e},
cQI:function cQI(d){this.a=d},
cQJ:function cQJ(d){this.a=d},
cQK:function cQK(d){this.a=d},
cQL:function cQL(d){this.a=d},
cQM:function cQM(d,e){this.a=d
this.b=e},
cQN:function cQN(d,e){this.a=d
this.b=e},
cQO:function cQO(d,e){this.a=d
this.b=e},
cQP:function cQP(d,e){this.a=d
this.b=e},
cQQ:function cQQ(d,e){this.a=d
this.b=e},
cQR:function cQR(d){this.a=d},
cRc:function cRc(d){this.a=d},
cRd:function cRd(d){this.a=d},
cRe:function cRe(d){this.a=d},
cRf:function cRf(d){this.a=d},
cRg:function cRg(d){this.a=d},
cRh:function cRh(d){this.a=d},
cRi:function cRi(d,e){this.a=d
this.b=e},
cRj:function cRj(d,e){this.a=d
this.b=e},
cRk:function cRk(d){this.a=d},
cRm:function cRm(d){this.a=d},
cRn:function cRn(d){this.a=d},
cRo:function cRo(d){this.a=d},
cRp:function cRp(d){this.a=d},
cRq:function cRq(d){this.a=d},
cRr:function cRr(d,e,f){this.a=d
this.b=e
this.c=f},
cRs:function cRs(d){this.a=d},
cRt:function cRt(d,e){this.a=d
this.b=e},
cRu:function cRu(d){this.a=d},
cR5:function cR5(d){this.a=d},
cR6:function cR6(d){this.a=d},
cR7:function cR7(d){this.a=d},
cR8:function cR8(d){this.a=d},
cR9:function cR9(d){this.a=d},
cRa:function cRa(d){this.a=d},
cRb:function cRb(d){this.a=d},
cQY:function cQY(d){this.a=d},
cQZ:function cQZ(){},
cQS:function cQS(){},
cR_:function cR_(d){this.a=d},
cR0:function cR0(){},
cQT:function cQT(){},
cQC:function cQC(d,e){this.a=d
this.b=e},
cQD:function cQD(d){this.a=d},
cQG:function cQG(d,e,f){this.a=d
this.b=e
this.c=f},
cRl:function cRl(d){this.a=d},
avD:function avD(d,e,f,g,h,i,j,k,l,m){var _=this
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
bje:function bje(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adt:function adt(d,e,f){this.c=d
this.d=e
this.a=f},
avH:function avH(d){this.a=d},
ed_(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.n8(v)
w=!0
if(x!=null)if(x.ge5().toLowerCase()==="https")if(x.ga1Z().length===0)w=x.gXb()&&x.gKJ()!==443||!C.a8M.t(0,x.gmV().toLowerCase())||x.gKw().length===0
if(w)return null
return x.ccR("telegram.me")},
dp5(d){return d.c?d:A.dt4(A.by(d),A.bB(d),A.c1(d),A.ht(d),A.mg(d),A.N4(d),A.aAl(d),d.b)},
dZq(d){var x
if(d==null||d.length===0)return null
x=A.dzE().j(0,d)
return(x==null?null:x.e===C.i9)===!1?x:null},
zA(d,e,f,g){var x=null
return B.dSK(d,e,f,g)},
dSK(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zA=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a5V.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dGJ():k).$0(),$async$zA)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a5V.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.pC(s,a0),$async$zA)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a5V.h(0,a0,q)
x=15
return A.c(s.eQ("String",a0,q),$async$zA)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.pC(s,e),$async$zA)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.pC(s,e),$async$zA)
case 21:case 20:case 12:o=d.$0()
$.a5V.h(0,a0,o)
x=22
return A.c(s.eQ("String",a0,o),$async$zA)
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
v=$.a5V.c8(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$zA,w)},
a5W(d,e){var x=null
return B.dSJ(d,e)},
dSJ(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a5W=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.ex(0)
for(p=J.aY(l);p.F();)$.a5V.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dGJ():p).$0(),$async$a5W)
case 6:t=g
p=J.aY(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a1G().S(0,"flutter."+o),$async$a5W)
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
return A.k($async$a5W,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[108]
B.nC.prototype={
W(){return"GameAccessIssue."+this.b}}
B.zB.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.avC.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bjd.prototype={
gn4(){var x=this
if(x.b||x.c||!x.a)return D.NC
if(x.f)return D.aGN
switch(x.r){case D.iB:return D.aGJ
case D.Cn:return D.aGK
case D.Co:case D.Cp:return D.aGL
case D.vn:case D.hi:return D.NC
case D.vo:case D.Cq:case D.Cr:case D.NB:case D.iC:case D.vm:return D.qE
case D.hL:return D.qE
case null:case void 0:if(x.e)return D.qE
return x.d?D.aGM:D.qE}}}
B.abt.prototype={
O(){return new B.aVw()}}
B.aVw.prototype={
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
v=A.eD(new B.cQA(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b_V()
$.Cq().a_t(x,new B.cQB(u),!0)},
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
return A.dkL(null,C.Fr,x)}}
B.GY.prototype={
O(){var x=$.ax()
return new B.al7(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.al7.prototype={
gbzy(){var x,w=this.y
if(w===$){x=$.ax().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new A.aAz(x)}return w},
Y(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.QV()
return}w=v.d=B.dZq(x.c)
if(w==null){v.fx=!1
v.id=D.hi
return}if(!w.gbGW()){v.fx=!1
v.id=D.hi
return}if(w.e!==C.i9){v.fx=!1
v.k1=B.ecq(v.gbxA())
v.k2=B.ecr(v.gcS3())
v.ag0()
v.ax=v.ahl()
return}},
bf(){var x,w=this
w.bY()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i9){w.fr=!0
w.f=w.bRt()}},
ag0(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ag0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hA(),$async$ag0)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cQU(t,s))
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
t.p(new B.cQV(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a1S(o,4))}catch(h){n=A.u(h)
$.hM().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cQW(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$ag0,w)},
yi(){return this.cx9()},
cx9(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yi=A.h(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hA(),$async$yi)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cQE(a0,s))
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
return A.c(s.r.q2(),$async$yi)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cQF(a0,s))
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
return A.c(s.r.q2(),$async$yi)
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
return A.c(s.agg(),$async$yi)
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
return A.k($async$yi,w)},
agg(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$agg=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahl()
v=t.x5(C.Mg,new B.cQX())
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
if(J.r(J.aE(q,"success"),!0)&&y.f.b(J.aE(q,"data"))){p=A.ug(y.f.a(J.aE(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aP.iR(p,null))}catch(j){o=A.u(j)
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
QV(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QV=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzy().nd(l),$async$QV)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cR1(s,r))
x=1
break}s.p(new B.cR2(s,r))
x=8
return A.c(s.oC(),$async$QV)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l_){q=m
$.hM().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cR3(s,q))}else{p=m
o=A.aH(k)
m=$.hM()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cR4(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$QV,w)},
oC(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oC=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i9){if(s.c==null){x=1
break}s.p(new B.cQH(s,f))
x=1
break}if(!f.gbGW()){if(s.c==null){x=1
break}s.p(new B.cQI(s))
x=1
break}if(s.c!=null)s.p(new B.cQJ(s))
u=4
x=7
return A.c(s.w.hA(),$async$oC)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cQK(s))
x=1
break}if(s.c==null){x=1
break}q=s.beL(r)
if(q==null){s.p(new B.cQL(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzy().a.C5(d),$async$oC)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cQM(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bXU(p.r)
if(p.b!==!0||o!=null){s.p(new B.cQN(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cQO(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hL)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dbY(!0),$async$oC)
case 13:case 12:x=1
break
case 10:s.p(new B.cQP(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l_){m=k
$.hM().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQQ(s,m))}else{l=k
$.hM().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cQR(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oC,w)},
bzL(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.QV()
return w.oC()},
ql(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ql=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i9){if(s.c==null){x=1
break}if(h)s.p(new B.cRc(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cRd(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oC(),$async$ql)
case 5:x=1
break
case 4:s.p(new B.cRe(s))
u=7
x=10
return A.c(s.w.hA(),$async$ql)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cRf(s))
x=1
break}if(s.c==null){x=1
break}o=s.beL(p)
if(o==null){s.p(new B.cRg(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bzY(o)
x=13
return A.c(s.oC(),$async$ql)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byI(),$async$ql)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzy().a.KU(q,new A.avG(n)),$async$ql)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NG?16:17
break
case 16:x=18
return A.c(s.afe(),$async$ql)
case 18:if(s.c==null){x=1
break}s.p(new B.cRh(s))
x=19
return A.c(s.oC(),$async$ql)
case 19:x=1
break
case 17:s.p(new B.cRi(s,m))
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
return A.c(s.afe(),$async$ql)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cRj(s,k))
x=21
break
case 22:j=h
$.hM().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cRk(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ql,w)},
lM(d,e){return this.dbZ(d,!0)},
dbY(d){return this.lM(!0,d)},
dbZ(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lM=A.h(function(c1,c2){if(c1===1){t.push(c2)
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
if(b2){s.p(new B.cRm(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cRn(s))
u=4
x=7
return A.c(s.w.hA(),$async$lM)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beL(p)
if(o==null){s.p(new B.cRo(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bzY(o)
x=10
return A.c(s.oC(),$async$lM)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.v6(!0),$async$lM)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cRp(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byJ(),$async$lM)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DL(b6.a,new B.avH(n)),$async$lM)
case 15:m=c2
l=new A.aA(Date.now(),0,!1).a0()
k=m==null?null:B.ed_(m.w)
j=m==null?null:B.dp5(m.f)
i=m==null?null:B.dp5(m.r)
h=m==null?null:B.dp5(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NI
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bV(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.iU(l))===!0
b2=h
a3=(b2==null?null:b2.iU(l))===!0
a4=h!=null&&i!=null&&!h.iU(i)
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
return A.c(s.Ey(b6.a,!0,m.a),$async$lM)
case 20:case 19:x=21
return A.c(s.PJ(),$async$lM)
case 21:if(s.c==null){x=1
break}s.p(new B.cRq(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.v6(!0),$async$lM)
case 24:x=1
break
case 23:x=b6.e===C.i9?25:26
break
case 25:s.p(new B.cRr(s,k,h))
x=27
return A.c(s.ve(),$async$lM)
case 27:x=1
break
case 26:s.p(new B.cRs(s))
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
return A.c(s.PJ(),$async$lM)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lM(!1,!0),$async$lM)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cRt(s,a9))
x=29
break
case 30:b0=a7
$.hM().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cRu(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lM,w)},
ve(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ve=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cR5(s))
x=!k.iU(new A.aA(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.v6(!0),$async$ve)
case 5:if(s.c==null){x=1
break}s.p(new B.cR6(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hA(),$async$ve)
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
break}s.p(new B.cR7(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beL(q)
if(g==null){s.p(new B.cR8(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bzY(g)
x=13
return A.c(s.oC(),$async$ve)
case 13:x=1
break
case 12:u=15
s.p(new B.cR9(s))
x=18
return A.c(A.yk(r,C.oj,"_self"),$async$ve)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cRa(s))
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
break}s.p(new B.cRb(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ve,w)},
v6(d){return this.cHt(!0)},
cHt(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
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
Ey(d,e,f){return this.cHA(d,!0,f)},
cHA(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ey=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.I1(d,f),$async$Ey)
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
return A.c(A.df(C.Bb,null,l),$async$Ey)
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
return A.c(s.PJ(),$async$Ey)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ey,w)},
byI(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byI=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc_A()
v=B.zA(new B.cQY(u),u.gbY2(),new B.cQZ(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byI,w)},
afe(){var x=0,w=A.l(y.H),v=this
var $async$afe=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a5W(new B.cQS(),A.e8([v.gc_A(),v.gbY2()],y.N)),$async$afe)
case 2:return A.j(null,w)}})
return A.k($async$afe,w)},
byJ(){var x=0,w=A.l(y.N),v,u=this
var $async$byJ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.zA(new B.cR_(u),null,new B.cR0(),u.gc1F())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byJ,w)},
PJ(){var x=0,w=A.l(y.H),v=this
var $async$PJ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a5W(new B.cQT(),A.e8([v.gc1F()],y.N)),$async$PJ)
case 2:return A.j(null,w)}})
return A.k($async$PJ,w)},
beL(d){var x=A.dvB(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bzY(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_A(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.doO(D.NA,this.cy,"product-"+x)},
gbY2(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.doO(D.NA,this.cy,x)},
gc1F(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.doO(D.aGI,this.cy,x)},
bYV(d){var x,w=Date.now(),v=C.i.mi($.b_L().JN(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bXU(d){var x=B.dFJ(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iC},
bhE(d,e){var x,w=d.a
if(w===401)return D.iB
x=B.dFJ(d.b)
if(x!=null)return x
if(w===404)return D.hi
return e},
cXT(d,e){switch(e){case D.iB:return d.gab4()
case D.Cn:return d.gabe()
case D.Co:return d.gaaU()
case D.Cp:return d.gab9()
case D.vn:return d.gab0()
case D.vo:return d.gaaT()
case D.Cq:return d.gab2()
case D.hi:return d.gab7()
case D.Cr:return d.gaaV()
case D.NB:return d.gabb()
case D.iC:return d.gaaS()
case D.vm:return d.gaaY()
case D.hL:return d.gabc()
case null:case void 0:return null}},
EG(d){return this.cS4(d)},
cS4(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
case 5:v=s.yi()
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
b0=A.lT(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c1(b0)
a2=A.lT(b6.j(0,"betAmount"))
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
n=J.aE(o,"data")
if(J.r(J.aE(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eF(m,"type","SPIN_RESULT")
J.hc(m,n)
v=m
x=1
break}m=J.aE(o,"message")
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
return A.c(s.x.j0(),$async$EG)
case 22:k=b8
if(J.r(J.aE(k,"success"),!0)){m=y.h
j=m.a(J.aE(k,"data"))
k=j
m=m.a(k==null?null:J.aE(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.lT(J.aE(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aE(k,"message")
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
m=A.lT(b6.j(0,"page"))
a8=m==null?null:C.k.c1(m)
e=a8==null?1:a8
m=A.lT(b6.j(0,"size"))
a9=m==null?null:C.k.c1(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a2Y(e,d),$async$EG)
case 32:a0=b8
if(J.r(J.aE(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aE(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aE(a0,"message")
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
if(!u)C.e.A(v,A.a([x,A.dO(0,A.h2(C.c9,s,C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxA(),s,s,s,s,s,s,!1,C.bX),108,s,0,s,s,75)],w))
else v.push(t.cvr(d))
if(u)v.push(new A.dH(!0,!0,!0,!0,C.J,!1,new A.c9(C.h2,s,s,A.aK(s,s,s,s,s,D.aL6,s,s,t.gbxA(),s,s,s,s,r.gh4(),s),s),s))
return A.bK(s,D.aqR,A.d2(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvr(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDG():a0.gOr()
if(e.db){a0=a0.gDG()
r=A.p(a1).ok.y
a0=new A.G(C.b2,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aH,d,d),d)}else a0=D.bw3
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbGW())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bjd(r,p,l,k===!0,u===!0,!j,i)
g=e.cXT(a0,i)
if(e.db)f=a0.gDG()
else f=j?d:a0.gaaZ()
u=x==null?d:x.b
a0=u==null?a0.gab8():u
u=g==null
r=u?f:g
return new B.avD(a0,h,q,m,r,!u,!t,new B.cQC(e,h),new B.cQD(e),d)},
cQW(d){var x,w=this
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
case 4:w.ql()
return
case 5:w.ve()
return
case 6:w.bzL()
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
return A.c(u.bzL(),$async$ahG)
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
A.aM(t,!1).f.hx("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahw,w)},
bRt(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dKG()
if(x.b.test(u)){$.aB.y2$.push(new B.cQG(w,v,t))
return C.yr}return new B.abt(w.bV6(t,Date.now()),w.gd9_(),null)},
bV6(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d90(){new B.cRl(this).$0()}}
B.avD.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dH(!0,!0,!0,!0,C.J,!1,A.d0(new B.bje(this,x,A.p(d),this.cJu(x))),null)},
cJu(d){switch(this.d.gn4().a){case 1:return d.gDH()
case 2:return d.gYc()
case 3:return d.gab6()
case 4:return d.gab5()
case 5:return d.guL()
case 6:return d.gab3()
case 0:return null}}}
B.adt.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.L(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.G(C.el,A.w(A.a([u,C.a9,new A.ey(1,C.bu,A.d(this.d,x,x,x,x,x,v,C.j1,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.avH.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.avH&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.o(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["a7<a3<q,@>?>(a3<q,@>)","a7<~>()","~()"])
B.ddv.prototype={
$1(d){var x,w=A.i5(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.RM(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:8}
B.ddu.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.ddx.prototype={
$1(d){var x,w,v,u,t,s=A.i5(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.RM(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd1(),v=v.gan(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.ddy(this.b,w,d,s).$0()},
$S:8}
B.ddy.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h9(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bA(q)
t=v.c.source
if(t!=null)r=A.i5(t,"Object")
else r=!1
s=v.d
if(r){A.V1(t,"postMessage",u,s,y.X)
B.do7(u,s)}else{B.do7(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:96}
B.ddw.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cQA.prototype={
$1(d){return this.a.$0()},
$S:8}
B.cQB.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:611}
B.cQU.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cQV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cQW.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cQE.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cQF.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cQX.prototype={
$0(){return null},
$S:14}
B.cR1.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hi},
$S:0}
B.cR2.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xq(w.b,w.gdqB(),"Telegram Mini App",null,C.i9,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cR3.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhE(this.b,D.iC)},
$S:0}
B.cR4.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iC},
$S:0}
B.cQH.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hi},
$S:0}
B.cQI.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hi},
$S:0}
B.cQJ.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cQK.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQL.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQM.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iC:D.hi},
$S:0}
B.cQN.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iC:x},
$S:0}
B.cQO.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hL},
$S:0}
B.cQP.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bXU(x.r)
if(w==null)x=x.b===!0?null:D.iC
else x=w
v.id=x},
$S:0}
B.cQQ.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhE(this.b,D.iC)},
$S:0}
B.cQR.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iC},
$S:0}
B.cRc.prototype={
$0(){return this.a.id=D.hi},
$S:0}
B.cRd.prototype={
$0(){return this.a.id=D.hi},
$S:0}
B.cRe.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cRf.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cRg.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cRh.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cRi.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NH?D.vn:D.Cr},
$S:0}
B.cRj.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cRk.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vm},
$S:0}
B.cRm.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hL},
$S:0}
B.cRn.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cRo.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cRp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hL},
$S:0}
B.cRq.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hL},
$S:0}
B.cRr.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cRs.prototype={
$0(){var x=this.a
x.f=x.bRt()
x.fx=!1},
$S:0}
B.cRt.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhE(this.b,D.hL)},
$S:0}
B.cRu.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hL},
$S:0}
B.cR5.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cR6.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hL},
$S:0}
B.cR7.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cR8.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cR9.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cRa.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cRb.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hL},
$S:0}
B.cQY.prototype={
$0(){return this.a.bYV("game-access")},
$S:25}
B.cQZ.prototype={
$2(d,e){return $.hM().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:38}
B.cQS.prototype={
$2(d,e){return $.hM().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:38}
B.cR_.prototype={
$0(){return this.a.bYV("game-session")},
$S:25}
B.cR0.prototype={
$2(d,e){return $.hM().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:38}
B.cQT.prototype={
$2(d,e){return $.hM().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:38}
B.cQC.prototype={
$0(){return this.a.cQW(this.b.gn4())},
$S:0}
B.cQD.prototype={
$0(){this.a.bzL()
return null},
$S:0}
B.cQG.prototype={
$1(d){return this.cet(d)},
cet(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hA(),$async$$1)
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
l.window.localStorage.setItem("_flutter_game_balance",J.a1S(q,4))
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
case 23:h=h.bV6(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:358}
B.cRl.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yi(),$async$$0)
case 2:t=e
B.dpd(t)
u=y.H
x=3
return A.c(A.df(D.aCP,null,u),$async$$0)
case 3:B.dpd(t)
x=4
return A.c(A.df(D.aCx,null,u),$async$$0)
case 4:B.dpd(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:96}
B.bje.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cp(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aaW(w)
u=A.z(8)
t=A.aF(C.E.v(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.A),C.aH,k,k)],q)
if(x.x){w=j.gOs()
p=s.z
w=A.a([C.dV,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gaba()
if(o)p="-"
o=j.gab1()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([C.GW,new B.adt(n,p,k),new B.adt(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apt:D.aqg)
C.e.A(r,A.a([C.GW,A.J(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQs,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bp(C.pw,A.a([C.n_,A.d(w.c?j.gaaX():j.gOr(),k,k,k,k,k,k,C.aH,k,k)],q),C.bJ,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.e.A(r,A.a([D.bw5,A.cm(o,D.bN_,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gn4()!==D.qE
else w=!1
if(w)C.e.A(r,A.a([C.dV,A.aI(A.d(j.gab_(),k,k,k,k,k,k,C.aH,k,k),D.bNk,k,k,x.z,k,k)],q))
return A.bb(new A.ba(new A.aw(0,1/0,i,1/0),A.aJ(A.J(k,k,k,new A.ba(C.K2,new A.bT(new A.K(D.aoG,k,t,u,k,k,C.r),C.aq,new A.G(C.b2,A.v(r,C.ak,k,C.d,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bST,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.z,k,k,D.aEg,k,k,C.D)},
$S:107};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.al7.prototype,"gcS3","EG",0)
w(v,"gbxA","agm",1)
w(v,"gd9_","d90",2)})();(function inheritance(){var x=a.inheritMany
x(A.na,[B.nC,B.zB,B.avC])
x(A.T,[B.bjd,B.avH])
x(A.ff,[B.ddv,B.ddx,B.cQA,B.cQB,B.cQG])
x(A.hd,[B.ddu,B.ddy,B.ddw,B.cQU,B.cQV,B.cQW,B.cQE,B.cQF,B.cQX,B.cR1,B.cR2,B.cR3,B.cR4,B.cQH,B.cQI,B.cQJ,B.cQK,B.cQL,B.cQM,B.cQN,B.cQO,B.cQP,B.cQQ,B.cQR,B.cRc,B.cRd,B.cRe,B.cRf,B.cRg,B.cRh,B.cRi,B.cRj,B.cRk,B.cRm,B.cRn,B.cRo,B.cRp,B.cRq,B.cRr,B.cRs,B.cRt,B.cRu,B.cR5,B.cR6,B.cR7,B.cR8,B.cR9,B.cRa,B.cRb,B.cQY,B.cR_,B.cQC,B.cQD,B.cRl])
x(A.U,[B.abt,B.GY])
x(A.W,[B.aVw,B.al7])
x(A.hP,[B.cQZ,B.cQS,B.cR0,B.cQT,B.bje])
x(A.x,[B.avD,B.adt])})()
A.fu(b.typeUniverse,JSON.parse('{"abt":{"U":[],"m":[]},"aVw":{"W":["abt"]},"GY":{"U":[],"m":[]},"al7":{"W":["GY"]},"avD":{"x":[],"m":[]},"adt":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("ew"),u:x("a7<a3<q,@>?>"),T:x("Lj"),w:x("blq"),s:x("E<q>"),p:x("E<m>"),P:x("a3<q,@>"),f:x("a3<@,@>"),a:x("bn"),A:x("OQ"),N:x("q"),x:x("Pl"),r:x("Hl"),O:x("V<q>"),y:x("N"),z:x("@"),h:x("a3<q,@>?"),X:x("T?"),H:x("~")}})();(function constants(){D.aoG=new A.X(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.y)
D.apt=new A.X(1,1,0.7686274509803922,0.7686274509803922,C.y)
D.aqg=new A.X(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.y)
D.aqR=new A.X(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.y)
D.aCx=new A.bG(175e4)
D.aCP=new A.bG(75e4)
D.aEg=new A.an(20,64,20,24)
D.NA=new B.avC(0,"purchase")
D.aGI=new B.avC(1,"session")
D.iB=new B.nC(0,"signInRequired")
D.Cn=new B.nC(1,"telegramAccountNotLinked")
D.iC=new B.nC(10,"requestFailed")
D.vm=new B.nC(11,"purchaseFailed")
D.hL=new B.nC(12,"sessionFailed")
D.Co=new B.nC(2,"insufficientBalance")
D.Cp=new B.nC(3,"walletInactive")
D.vn=new B.nC(4,"refundPending")
D.vo=new B.nC(5,"accessExpired")
D.Cq=new B.nC(6,"accessRequired")
D.hi=new B.nC(7,"gameUnavailable")
D.Cr=new B.nC(8,"accessNotActive")
D.NB=new B.nC(9,"sessionDenied")
D.NC=new B.zB(0,"none")
D.aGJ=new B.zB(1,"signIn")
D.aGK=new B.zB(2,"bindTelegram")
D.aGL=new B.zB(3,"topUp")
D.aGM=new B.zB(4,"purchase")
D.aGN=new B.zB(5,"openGame")
D.qE=new B.zB(6,"retry")
D.aL6=new A.ap(C.jw,null,C.E,null,null)
D.anT=new A.m0(2.5,null,null,null,null,null,null,null,null,null)
D.bw3=new A.ac(28,28,D.anT,null)
D.bw5=new A.ac(null,22,null,null)
D.bN_=new A.V("slot-game-access-primary",y.O)
D.bNk=new A.V("slot-game-access-refresh",y.O)
D.bQs=new A.V("slot-game-access-message",y.O)
D.bST=new A.V("slot-game-access-gate",y.O)})();(function staticFields(){$.a5V=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"elk","dKG",()=>A.bg("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"emj","hM",()=>A.aW("SlotGamePage"))})()};
(a=>{a["c/l7T23yPM2Iws+ai+VGHn96ffs="]=a.current})($__dart_deferred_initializers__);