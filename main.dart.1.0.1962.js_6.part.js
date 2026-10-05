((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dGh(d){var x=d==null?null:d.toUpperCase()
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
dpl(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nD:function nD(d,e){this.a=d
this.b=e},
zB:function zB(d,e){this.a=d
this.b=e},
avQ:function avQ(d,e){this.a=d
this.b=e},
bjr:function bjr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ed_(d){var x=b.G,w=A.eE(new B.ddZ(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.ddY(w)},
ed0(d){var x=b.G,w=A.eE(new B.de0(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.de_(w)},
dpJ(d){B.doF(A.bA(d),b.G.window.location.origin)},
doF(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.i6(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aO(u,e))v=!A.nk(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
ddZ:function ddZ(d,e){this.a=d
this.b=e},
ddY:function ddY(d){this.a=d},
de0:function de0(d,e){this.a=d
this.b=e},
de1:function de1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
de_:function de_(d){this.a=d},
abE:function abE(d,e,f){this.c=d
this.d=e
this.a=f},
aVJ:function aVJ(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cR3:function cR3(d){this.a=d},
cR4:function cR4(d){this.a=d},
dA9(d,e){return new B.H1(d,e,null)},
H1:function H1(d,e,f){this.c=d
this.d=e
this.a=f},
all:function all(d,e,f,g){var _=this
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
cRn:function cRn(d,e){this.a=d
this.b=e},
cRo:function cRo(d,e){this.a=d
this.b=e},
cRp:function cRp(d){this.a=d},
cR7:function cR7(d,e){this.a=d
this.b=e},
cR8:function cR8(d,e){this.a=d
this.b=e},
cRq:function cRq(){},
cRv:function cRv(d,e){this.a=d
this.b=e},
cRw:function cRw(d,e){this.a=d
this.b=e},
cRx:function cRx(d,e){this.a=d
this.b=e},
cRy:function cRy(d){this.a=d},
cRa:function cRa(d,e){this.a=d
this.b=e},
cRb:function cRb(d){this.a=d},
cRc:function cRc(d){this.a=d},
cRd:function cRd(d){this.a=d},
cRe:function cRe(d){this.a=d},
cRf:function cRf(d,e){this.a=d
this.b=e},
cRg:function cRg(d,e){this.a=d
this.b=e},
cRh:function cRh(d,e){this.a=d
this.b=e},
cRi:function cRi(d,e){this.a=d
this.b=e},
cRj:function cRj(d,e){this.a=d
this.b=e},
cRk:function cRk(d){this.a=d},
cRG:function cRG(d){this.a=d},
cRH:function cRH(d){this.a=d},
cRI:function cRI(d){this.a=d},
cRJ:function cRJ(d){this.a=d},
cRK:function cRK(d){this.a=d},
cRL:function cRL(d){this.a=d},
cRM:function cRM(d,e){this.a=d
this.b=e},
cRN:function cRN(d,e){this.a=d
this.b=e},
cRO:function cRO(d){this.a=d},
cRQ:function cRQ(d){this.a=d},
cRR:function cRR(d){this.a=d},
cRS:function cRS(d){this.a=d},
cRT:function cRT(d){this.a=d},
cRU:function cRU(d){this.a=d},
cRV:function cRV(d,e,f){this.a=d
this.b=e
this.c=f},
cRW:function cRW(d){this.a=d},
cRX:function cRX(d,e){this.a=d
this.b=e},
cRY:function cRY(d){this.a=d},
cRz:function cRz(d){this.a=d},
cRA:function cRA(d){this.a=d},
cRB:function cRB(d){this.a=d},
cRC:function cRC(d){this.a=d},
cRD:function cRD(d){this.a=d},
cRE:function cRE(d){this.a=d},
cRF:function cRF(d){this.a=d},
cRr:function cRr(d){this.a=d},
cRs:function cRs(){},
cRl:function cRl(){},
cRt:function cRt(d){this.a=d},
cRu:function cRu(){},
cRm:function cRm(){},
cR5:function cR5(d,e){this.a=d
this.b=e},
cR6:function cR6(d){this.a=d},
cR9:function cR9(d,e,f){this.a=d
this.b=e
this.c=f},
cRP:function cRP(d){this.a=d},
avR:function avR(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjs:function bjs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adG:function adG(d,e,f){this.c=d
this.d=e
this.a=f},
avV:function avV(d){this.a=d},
edz(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.n9(v)
w=!0
if(x!=null)if(x.ge5().toLowerCase()==="https")if(x.ga1Y().length===0)w=x.gXa()&&x.gKJ()!==443||!C.a8Q.t(0,x.gmW().toLowerCase())||x.gKw().length===0
if(w)return null
return x.ccW("telegram.me")},
dpB(d){return d.c?d:A.dty(A.by(d),A.bB(d),A.c2(d),A.hs(d),A.mg(d),A.N4(d),A.aAy(d),d.b)},
e_0(d){var x
if(d==null||d.length===0)return null
x=A.dA7().j(0,d)
return(x==null?null:x.e===C.i9)===!1?x:null},
zA(d,e,f,g){var x=null
return B.dTk(d,e,f,g)},
dTk(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zA=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a62.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dHj():k).$0(),$async$zA)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a62.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.pD(s,a0),$async$zA)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a62.h(0,a0,q)
x=15
return A.c(s.eY("String",a0,q),$async$zA)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.pD(s,e),$async$zA)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.pD(s,e),$async$zA)
case 21:case 20:case 12:o=d.$0()
$.a62.h(0,a0,o)
x=22
return A.c(s.eY("String",a0,o),$async$zA)
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
v=$.a62.c7(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$zA,w)},
a63(d,e){var x=null
return B.dTj(d,e)},
dTj(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a63=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.ep(0)
for(p=J.aY(l);p.F();)$.a62.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dHj():p).$0(),$async$a63)
case 6:t=g
p=J.aY(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a1J().S(0,"flutter."+o),$async$a63)
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
return A.k($async$a63,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[108]
B.nD.prototype={
X(){return"GameAccessIssue."+this.b}}
B.zB.prototype={
X(){return"GameAccessPrimaryAction."+this.b}}
B.avQ.prototype={
X(){return"GameAccessAttemptKind."+this.b}}
B.bjr.prototype={
gn4(){var x=this
if(x.b||x.c||!x.a)return D.NF
if(x.f)return D.aGV
switch(x.r){case D.iB:return D.aGR
case D.Cq:return D.aGS
case D.Cr:case D.Cs:return D.aGT
case D.vo:case D.hj:return D.NF
case D.vp:case D.Ct:case D.Cu:case D.NE:case D.iC:case D.vn:return D.qF
case D.hK:return D.qF
case null:case void 0:if(x.e)return D.qF
return x.d?D.aGU:D.qF}}}
B.abE.prototype={
O(){return new B.aVJ()}}
B.aVJ.prototype={
Z(){var x,w,v,u=this
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
v=A.eE(new B.cR3(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b08()
$.Cr().a_t(x,new B.cR4(u),!0)},
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
return A.dlj(null,C.Fu,x)}}
B.H1.prototype={
O(){var x=$.ax()
return new B.all(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.all.prototype={
gbzC(){var x,w=this.y
if(w===$){x=$.ax().$1$0(y.T)
this.y!==$&&A.bc()
w=this.y=new A.aAM(x)}return w},
Z(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.QU()
return}w=v.d=B.e_0(x.c)
if(w==null){v.fx=!1
v.id=D.hj
return}if(!w.gbGX()){v.fx=!1
v.id=D.hj
return}if(w.e!==C.i9){v.fx=!1
v.k1=B.ed_(v.gbxD())
v.k2=B.ed0(v.gcS7())
v.afZ()
v.ax=v.ahj()
return}},
be(){var x,w=this
w.bY()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i9){w.fr=!0
w.f=w.bRw()}},
afZ(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$afZ=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hB(),$async$afZ)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cRn(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.hN().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.hN().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hj(!0),$async$afZ)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cRo(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a1W(o,4))}catch(h){n=A.u(h)
$.hN().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cRp(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$afZ,w)},
yk(){return this.cxe()},
cxe(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yk=A.h(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hB(),$async$yk)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cR7(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.hN().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.hN().k(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.q2(),$async$yk)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cR8(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.W(a0.b,4))}catch(a5){n=A.u(a5)
$.hN().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.hN().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.q2(),$async$yk)
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
$.hN().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.age(),$async$yk)
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
return A.k($async$yk,w)},
age(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$age=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahj()
v=t.x6(C.Mk,new B.cRq())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$age,w)},
ahj(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahj=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdl(l.a),$async$ahj)
case 7:q=e
if(J.r(J.aH(q,"success"),!0)&&y.f.b(J.aH(q,"data"))){p=A.ui(y.f.a(J.aH(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aP.iR(p,null))}catch(j){o=A.u(j)
$.hN().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.hN().k(C.q,"_getSlotRtpData failed",n,null)
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
return A.k($async$ahj,w)},
QU(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$QU=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzC().ne(l),$async$QU)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cRv(s,r))
x=1
break}s.p(new B.cRw(s,r))
x=8
return A.c(s.oC(),$async$QU)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l0){q=m
$.hN().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cRx(s,q))}else{p=m
o=A.aG(k)
m=$.hN()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cRy(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$QU,w)},
oC(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oC=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i9){if(s.c==null){x=1
break}s.p(new B.cRa(s,f))
x=1
break}if(!f.gbGX()){if(s.c==null){x=1
break}s.p(new B.cRb(s))
x=1
break}if(s.c!=null)s.p(new B.cRc(s))
u=4
x=7
return A.c(s.w.hB(),$async$oC)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cRd(s))
x=1
break}if(s.c==null){x=1
break}q=s.beI(r)
if(q==null){s.p(new B.cRe(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzC().a.C7(d),$async$oC)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cRf(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bXX(p.r)
if(p.b!==!0||o!=null){s.p(new B.cRg(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cRh(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hK)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dc4(!0),$async$oC)
case 13:case 12:x=1
break
case 10:s.p(new B.cRi(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l0){m=k
$.hN().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cRj(s,m))}else{l=k
$.hN().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cRk(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oC,w)},
bzP(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.QU()
return w.oC()},
ql(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ql=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i9){if(s.c==null){x=1
break}if(h)s.p(new B.cRG(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cRH(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oC(),$async$ql)
case 5:x=1
break
case 4:s.p(new B.cRI(s))
u=7
x=10
return A.c(s.w.hB(),$async$ql)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cRJ(s))
x=1
break}if(s.c==null){x=1
break}o=s.beI(p)
if(o==null){s.p(new B.cRK(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bA1(o)
x=13
return A.c(s.oC(),$async$ql)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byL(),$async$ql)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzC().a.KU(q,new A.avU(n)),$async$ql)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NJ?16:17
break
case 16:x=18
return A.c(s.afc(),$async$ql)
case 18:if(s.c==null){x=1
break}s.p(new B.cRL(s))
x=19
return A.c(s.oC(),$async$ql)
case 19:x=1
break
case 17:s.p(new B.cRM(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l0?20:22
break
case 20:l=h
$.hN().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhB(l,D.vn)
f=l.b.toUpperCase()
x=k===D.vp||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afc(),$async$ql)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cRN(s,k))
x=21
break
case 22:j=h
$.hN().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cRO(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ql,w)},
lO(d,e){return this.dc5(d,!0)},
dc4(d){return this.lO(!0,d)},
dc5(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lO=A.h(function(c1,c2){if(c1===1){t.push(c2)
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
if(b2){s.p(new B.cRQ(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cRR(s))
u=4
x=7
return A.c(s.w.hB(),$async$lO)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beI(p)
if(o==null){s.p(new B.cRS(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bA1(o)
x=10
return A.c(s.oC(),$async$lO)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.v8(!0),$async$lO)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cRT(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byM(),$async$lO)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DN(b6.a,new B.avV(n)),$async$lO)
case 15:m=c2
l=new A.aB(Date.now(),0,!1).a0()
k=m==null?null:B.edz(m.w)
j=m==null?null:B.dpB(m.f)
i=m==null?null:B.dpB(m.r)
h=m==null?null:B.dpB(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NL
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
$.hN().k(C.q,"game session response rejected: "+J.a1T(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.EA(b6.a,!0,m.a),$async$lO)
case 20:case 19:x=21
return A.c(s.PI(),$async$lO)
case 21:if(s.c==null){x=1
break}s.p(new B.cRU(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.v8(!0),$async$lO)
case 24:x=1
break
case 23:x=b6.e===C.i9?25:26
break
case 25:s.p(new B.cRV(s,k,h))
x=27
return A.c(s.vg(),$async$lO)
case 27:x=1
break
case 26:s.p(new B.cRW(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.l0?28:30
break
case 28:a9=a7
$.hN().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PI(),$async$lO)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lO(!1,!0),$async$lO)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cRX(s,a9))
x=29
break
case 30:b0=a7
$.hN().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cRY(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lO,w)},
vg(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vg=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cRz(s))
x=!k.iU(new A.aB(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.v8(!0),$async$vg)
case 5:if(s.c==null){x=1
break}s.p(new B.cRA(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hB(),$async$vg)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aG(f)
h=$.hN()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cRB(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beI(q)
if(g==null){s.p(new B.cRC(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bA1(g)
x=13
return A.c(s.oC(),$async$vg)
case 13:x=1
break
case 12:u=15
s.p(new B.cRD(s))
x=18
return A.c(A.yl(r,C.ok,"_self"),$async$vg)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cRE(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aG(e)
h=$.hN()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.v8(!0),$async$vg)
case 19:if(s.c==null){x=1
break}s.p(new B.cRF(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vg,w)},
v8(d){return this.cHx(!0)},
cHx(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$v8=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.EA(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$v8)
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
return A.k($async$v8,w)},
EA(d,e,f){return this.cHE(d,!0,f)},
cHE(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EA=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.I1(d,f),$async$EA)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.hN().k(C.aA,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.dg(C.Bd,null,l),$async$EA)
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
return A.c(s.PI(),$async$EA)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EA,w)},
byL(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byL=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc_D()
v=B.zA(new B.cRr(u),u.gbY5(),new B.cRs(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byL,w)},
afc(){var x=0,w=A.l(y.H),v=this
var $async$afc=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a63(new B.cRl(),A.dZ([v.gc_D(),v.gbY5()],y.N)),$async$afc)
case 2:return A.j(null,w)}})
return A.k($async$afc,w)},
byM(){var x=0,w=A.l(y.N),v,u=this
var $async$byM=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.zA(new B.cRt(u),null,new B.cRu(),u.gc1I())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byM,w)},
PI(){var x=0,w=A.l(y.H),v=this
var $async$PI=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a63(new B.cRm(),A.dZ([v.gc1I()],y.N)),$async$PI)
case 2:return A.j(null,w)}})
return A.k($async$PI,w)},
beI(d){var x=A.dw4(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bA1(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_D(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.dpl(D.ND,this.cy,"product-"+x)},
gbY5(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dpl(D.ND,this.cy,x)},
gc1I(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dpl(D.aGQ,this.cy,x)},
bYY(d){var x,w=Date.now(),v=C.i.ml($.b_Z().JN(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bXX(d){var x=B.dGh(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iC},
bhB(d,e){var x,w=d.a
if(w===401)return D.iB
x=B.dGh(d.b)
if(x!=null)return x
if(w===404)return D.hj
return e},
cXX(d,e){switch(e){case D.iB:return d.gab3()
case D.Cq:return d.gabd()
case D.Cr:return d.gaaT()
case D.Cs:return d.gab8()
case D.vo:return d.gab_()
case D.vp:return d.gaaS()
case D.Ct:return d.gab1()
case D.hj:return d.gab6()
case D.Cu:return d.gaaU()
case D.NE:return d.gaba()
case D.iC:return d.gaaR()
case D.vn:return d.gaaX()
case D.hK:return d.gabb()
case null:case void 0:return null}},
EI(d){return this.cS8(d)},
cS8(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EI=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ao(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agk()
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
case 5:v=s.yk()
x=1
break
case 6:m=s.c
if(m!=null)A.aL(m,!1).f.aG(C.qs,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aL(m,!1).f.aG(C.z1,y.X)
v=null
x=1
break
case 8:u=14
b0=A.lU(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c2(b0)
a2=A.lU(b6.j(0,"betAmount"))
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
return A.c(s.x.abn(p,q,A.aT(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$EI)
case 17:o=b8
n=J.aH(o,"data")
if(J.r(J.aH(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eG(m,"type","SPIN_RESULT")
J.hb(m,n)
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
return A.c(s.x.j0(),$async$EI)
case 22:k=b8
if(J.r(J.aH(k,"success"),!0)){m=y.h
j=m.a(J.aH(k,"data"))
k=j
m=m.a(k==null?null:J.aH(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.lU(J.aH(i,"balance"))
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
return A.c(s.age(),$async$EI)
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
m=A.lU(b6.j(0,"page"))
a8=m==null?null:C.k.c2(m)
e=a8==null?1:a8
m=A.lU(b6.j(0,"size"))
a9=m==null?null:C.k.c2(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a2X(e,d),$async$EI)
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
return A.k($async$EI,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.v8(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.dP(0,A.h1(C.c9,s,C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxD(),s,s,s,s,s,s,!1,C.bY),108,s,0,s,s,75)],w))
else v.push(t.cvx(d))
if(u)v.push(new A.dG(!0,!0,!0,!0,C.J,!1,new A.c8(C.h2,s,s,A.aK(s,s,s,s,s,D.aLd,s,s,t.gbxD(),s,s,s,s,r.gh4(),s),s),s))
return A.bK(s,D.aqX,A.d3(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvx(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDI():a0.gOr()
if(e.db){a0=a0.gDI()
r=A.p(a1).ok.y
a0=new A.G(C.b3,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aH,d,d),d)}else a0=D.bwc
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbGX())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bjr(r,p,l,k===!0,u===!0,!j,i)
g=e.cXX(a0,i)
if(e.db)f=a0.gDI()
else f=j?d:a0.gaaY()
u=x==null?d:x.b
a0=u==null?a0.gab7():u
u=g==null
r=u?f:g
return new B.avR(a0,h,q,m,r,!u,!t,new B.cR5(e,h),new B.cR6(e),d)},
cR_(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aL(x,!1).f.aG(C.er,y.X)
return
case 2:w.ahE()
return
case 3:x=w.c
x.toString
A.aL(x,!1).f.aG(C.qs,y.X)
return
case 4:w.ql()
return
case 5:w.vg()
return
case 6:w.bzP()
return
case 0:return}},
ahE(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahE=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aL(t,!1).f.aG(C.pO,y.X),$async$ahE)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bzP(),$async$ahE)
case 4:case 1:return A.j(v,w)}})
return A.k($async$ahE,w)},
agk(){var x=0,w=A.l(y.H),v,u=this
var $async$agk=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ahu(),$async$agk)
case 3:case 1:return A.j(v,w)}})
return A.k($async$agk,w)},
ahu(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahu=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.v8(!0),$async$ahu)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.Y(t,!1).AL(),$async$ahu)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aL(t,!1).f.hy("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahu,w)},
bRw(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dLg()
if(x.b.test(u)){$.ay.y2$.push(new B.cR9(w,v,t))
return C.yt}return new B.abE(w.bV9(t,Date.now()),w.gd96(),null)},
bV9(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d97(){new B.cRP(this).$0()}}
B.avR.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dG(!0,!0,!0,!0,C.J,!1,A.cZ(new B.bjs(this,x,A.p(d),this.cJy(x))),null)},
cJy(d){switch(this.d.gn4().a){case 1:return d.gDJ()
case 2:return d.gYc()
case 3:return d.gab5()
case 4:return d.gab4()
case 5:return d.guN()
case 6:return d.gab2()
case 0:return null}}}
B.adG.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.L(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.G(C.em,A.w(A.a([u,C.a9,new A.ez(1,C.bu,A.d(this.d,x,x,x,x,x,v,C.j1,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.avV.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.avV&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.o(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["a9<a3<q,@>?>(a3<q,@>)","a9<~>()","~()"])
B.ddZ.prototype={
$1(d){var x,w=A.i6(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.RO(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:8}
B.ddY.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.de0.prototype={
$1(d){var x,w,v,u,t,s=A.i6(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.RO(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd2(),v=v.gam(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.de1(this.b,w,d,s).$0()},
$S:8}
B.de1.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h8(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bA(q)
t=v.c.source
if(t!=null)r=A.i6(t,"Object")
else r=!1
s=v.d
if(r){A.V3(t,"postMessage",u,s,y.X)
B.doF(u,s)}else{B.doF(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:100}
B.de_.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cR3.prototype={
$1(d){return this.a.$0()},
$S:8}
B.cR4.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:533}
B.cRn.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cRo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cRp.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cR7.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cR8.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cRq.prototype={
$0(){return null},
$S:15}
B.cRv.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hj},
$S:0}
B.cRw.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xq(w.b,w.gdqI(),"Telegram Mini App",null,C.i9,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cRx.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhB(this.b,D.iC)},
$S:0}
B.cRy.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iC},
$S:0}
B.cRa.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hj},
$S:0}
B.cRb.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hj},
$S:0}
B.cRc.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cRd.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cRe.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cRf.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iC:D.hj},
$S:0}
B.cRg.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iC:x},
$S:0}
B.cRh.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hK},
$S:0}
B.cRi.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bXX(x.r)
if(w==null)x=x.b===!0?null:D.iC
else x=w
v.id=x},
$S:0}
B.cRj.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhB(this.b,D.iC)},
$S:0}
B.cRk.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iC},
$S:0}
B.cRG.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cRH.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cRI.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cRJ.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cRK.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iB},
$S:0}
B.cRL.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cRM.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NK?D.vo:D.Cu},
$S:0}
B.cRN.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cRO.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vn},
$S:0}
B.cRQ.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hK},
$S:0}
B.cRR.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cRS.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cRT.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cRU.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hK},
$S:0}
B.cRV.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cRW.prototype={
$0(){var x=this.a
x.f=x.bRw()
x.fx=!1},
$S:0}
B.cRX.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhB(this.b,D.hK)},
$S:0}
B.cRY.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cRz.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cRA.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cRB.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cRC.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iB},
$S:0}
B.cRD.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cRE.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cRF.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cRr.prototype={
$0(){return this.a.bYY("game-access")},
$S:24}
B.cRs.prototype={
$2(d,e){return $.hN().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:38}
B.cRl.prototype={
$2(d,e){return $.hN().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:38}
B.cRt.prototype={
$0(){return this.a.bYY("game-session")},
$S:24}
B.cRu.prototype={
$2(d,e){return $.hN().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:38}
B.cRm.prototype={
$2(d,e){return $.hN().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:38}
B.cR5.prototype={
$0(){return this.a.cR_(this.b.gn4())},
$S:0}
B.cR6.prototype={
$0(){this.a.bzP()
return null},
$S:0}
B.cR9.prototype={
$1(d){return this.cex(d)},
cex(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hB(),$async$$1)
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
$.hN().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a1W(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beM())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.age(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.hN().k(C.aA,"RTP prefetch failed",n,null)
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
$.hN().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.Y(l,!1).AL(),$async$$1)
case 23:h=h.bV9(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:574}
B.cRP.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yk(),$async$$0)
case 2:t=e
B.dpJ(t)
u=y.H
x=3
return A.c(A.dg(D.aCW,null,u),$async$$0)
case 3:B.dpJ(t)
x=4
return A.c(A.dg(D.aCE,null,u),$async$$0)
case 4:B.dpJ(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:100}
B.bjs.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.ci(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aaV(w)
u=A.z(8)
t=A.aE(C.E.v(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.A),C.aH,k,k)],q)
if(x.x){w=j.gOs()
p=s.z
w=A.a([C.dW,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gab9()
if(o)p="-"
o=j.gab0()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([C.GZ,new B.adG(n,p,k),new B.adG(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apA:D.aqn)
C.e.A(r,A.a([C.GZ,A.J(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQH,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bo(C.nl,A.a([C.n_,A.d(w.c?j.gaaW():j.gOr(),k,k,k,k,k,k,C.aH,k,k)],q),C.bG,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.e.A(r,A.a([D.bwe,A.cn(o,D.bNd,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gn4()!==D.qF
else w=!1
if(w)C.e.A(r,A.a([C.dW,A.aI(A.d(j.gaaZ(),k,k,k,k,k,k,C.aH,k,k),D.bNy,k,k,x.z,k,k)],q))
return A.bb(new A.b8(new A.av(0,1/0,i,1/0),A.aJ(A.J(k,k,k,new A.b8(C.K4,new A.bT(new A.K(D.aoN,k,t,u,k,k,C.r),C.aq,new A.G(C.b3,A.v(r,C.ak,k,C.d,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bT9,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.z,k,k,D.aEm,k,k,C.D)},
$S:116};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.all.prototype,"gcS7","EI",0)
w(v,"gbxD","agk",1)
w(v,"gd96","d97",2)})();(function inheritance(){var x=a.inheritMany
x(A.nb,[B.nD,B.zB,B.avQ])
x(A.T,[B.bjr,B.avV])
x(A.ff,[B.ddZ,B.de0,B.cR3,B.cR4,B.cR9])
x(A.hc,[B.ddY,B.de1,B.de_,B.cRn,B.cRo,B.cRp,B.cR7,B.cR8,B.cRq,B.cRv,B.cRw,B.cRx,B.cRy,B.cRa,B.cRb,B.cRc,B.cRd,B.cRe,B.cRf,B.cRg,B.cRh,B.cRi,B.cRj,B.cRk,B.cRG,B.cRH,B.cRI,B.cRJ,B.cRK,B.cRL,B.cRM,B.cRN,B.cRO,B.cRQ,B.cRR,B.cRS,B.cRT,B.cRU,B.cRV,B.cRW,B.cRX,B.cRY,B.cRz,B.cRA,B.cRB,B.cRC,B.cRD,B.cRE,B.cRF,B.cRr,B.cRt,B.cR5,B.cR6,B.cRP])
x(A.U,[B.abE,B.H1])
x(A.X,[B.aVJ,B.all])
x(A.hR,[B.cRs,B.cRl,B.cRu,B.cRm,B.bjs])
x(A.x,[B.avR,B.adG])})()
A.fu(b.typeUniverse,JSON.parse('{"abE":{"U":[],"m":[]},"aVJ":{"X":["abE"]},"H1":{"U":[],"m":[]},"all":{"X":["H1"]},"avR":{"x":[],"m":[]},"adG":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("ex"),u:x("a9<a3<q,@>?>"),T:x("Lk"),w:x("blE"),s:x("E<q>"),p:x("E<m>"),P:x("a3<q,@>"),f:x("a3<@,@>"),a:x("bn"),A:x("OQ"),N:x("q"),x:x("Pm"),r:x("Hn"),O:x("V<q>"),y:x("N"),z:x("@"),h:x("a3<q,@>?"),X:x("T?"),H:x("~")}})();(function constants(){D.aoN=new A.W(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.y)
D.apA=new A.W(1,1,0.7686274509803922,0.7686274509803922,C.y)
D.aqn=new A.W(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.y)
D.aqX=new A.W(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.y)
D.aCE=new A.bG(175e4)
D.aCW=new A.bG(75e4)
D.aEm=new A.an(20,64,20,24)
D.ND=new B.avQ(0,"purchase")
D.aGQ=new B.avQ(1,"session")
D.iB=new B.nD(0,"signInRequired")
D.Cq=new B.nD(1,"telegramAccountNotLinked")
D.iC=new B.nD(10,"requestFailed")
D.vn=new B.nD(11,"purchaseFailed")
D.hK=new B.nD(12,"sessionFailed")
D.Cr=new B.nD(2,"insufficientBalance")
D.Cs=new B.nD(3,"walletInactive")
D.vo=new B.nD(4,"refundPending")
D.vp=new B.nD(5,"accessExpired")
D.Ct=new B.nD(6,"accessRequired")
D.hj=new B.nD(7,"gameUnavailable")
D.Cu=new B.nD(8,"accessNotActive")
D.NE=new B.nD(9,"sessionDenied")
D.NF=new B.zB(0,"none")
D.aGR=new B.zB(1,"signIn")
D.aGS=new B.zB(2,"bindTelegram")
D.aGT=new B.zB(3,"topUp")
D.aGU=new B.zB(4,"purchase")
D.aGV=new B.zB(5,"openGame")
D.qF=new B.zB(6,"retry")
D.aLd=new A.ap(C.jw,null,C.E,null,null)
D.ao_=new A.m0(2.5,null,null,null,null,null,null,null,null,null)
D.bwc=new A.ac(28,28,D.ao_,null)
D.bwe=new A.ac(null,22,null,null)
D.bNd=new A.V("slot-game-access-primary",y.O)
D.bNy=new A.V("slot-game-access-refresh",y.O)
D.bQH=new A.V("slot-game-access-message",y.O)
D.bT9=new A.V("slot-game-access-gate",y.O)})();(function staticFields(){$.a62=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"elS","dLg",()=>A.be("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"emR","hN",()=>A.aW("SlotGamePage"))})()};
(a=>{a["pzOdNZjv31kYPoPD/PI3WnfldL8="]=a.current})($__dart_deferred_initializers__);