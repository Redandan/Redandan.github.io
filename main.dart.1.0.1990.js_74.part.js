((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,E,B={
dJx(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cv
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Cw
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Cx
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vy
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vz
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Cy
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hj
return null},
dsr(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
o1:function o1(d,e){this.a=d
this.b=e},
At:function At(d,e){this.a=d
this.b=e},
awK:function awK(d,e){this.a=d
this.b=e},
bkV:function bkV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ekj(d){var x=b.G,w=A.eL(new B.dhh(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dhg(w)},
ekk(d){var x=b.G,w=A.eL(new B.dhj(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dhi(w)},
dsP(d){B.drK(A.bD(d),b.G.window.location.origin)},
drK(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iq(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aN(u,e))v=!A.nM(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dhh:function dhh(d,e){this.a=d
this.b=e},
dhg:function dhg(d){this.a=d},
dhj:function dhj(d,e){this.a=d
this.b=e},
dhk:function dhk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhi:function dhi(d){this.a=d},
act:function act(d,e,f){this.c=d
this.d=e
this.a=f},
aWE:function aWE(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cU9:function cU9(d){this.a=d},
cUa:function cUa(d){this.a=d},
dDn(d,e){return new B.C8(d,e,null)},
C8:function C8(d,e,f){this.c=d
this.d=e
this.a=f},
amd:function amd(d,e,f,g){var _=this
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
cUt:function cUt(d,e){this.a=d
this.b=e},
cUu:function cUu(d,e){this.a=d
this.b=e},
cUv:function cUv(d){this.a=d},
cUd:function cUd(d,e){this.a=d
this.b=e},
cUe:function cUe(d,e){this.a=d
this.b=e},
cUw:function cUw(){},
cUB:function cUB(d,e){this.a=d
this.b=e},
cUC:function cUC(d,e){this.a=d
this.b=e},
cUD:function cUD(d,e){this.a=d
this.b=e},
cUE:function cUE(d){this.a=d},
cUg:function cUg(d,e){this.a=d
this.b=e},
cUh:function cUh(d){this.a=d},
cUi:function cUi(d){this.a=d},
cUj:function cUj(d){this.a=d},
cUk:function cUk(d){this.a=d},
cUl:function cUl(d,e){this.a=d
this.b=e},
cUm:function cUm(d,e){this.a=d
this.b=e},
cUn:function cUn(d,e){this.a=d
this.b=e},
cUo:function cUo(d,e){this.a=d
this.b=e},
cUp:function cUp(d,e){this.a=d
this.b=e},
cUq:function cUq(d){this.a=d},
cUM:function cUM(d){this.a=d},
cUN:function cUN(d){this.a=d},
cUO:function cUO(d){this.a=d},
cUP:function cUP(d){this.a=d},
cUQ:function cUQ(d){this.a=d},
cUR:function cUR(d){this.a=d},
cUS:function cUS(d,e){this.a=d
this.b=e},
cUT:function cUT(d,e){this.a=d
this.b=e},
cUU:function cUU(d){this.a=d},
cUW:function cUW(d){this.a=d},
cUX:function cUX(d){this.a=d},
cUY:function cUY(d){this.a=d},
cUZ:function cUZ(d){this.a=d},
cV_:function cV_(d){this.a=d},
cV0:function cV0(d,e,f){this.a=d
this.b=e
this.c=f},
cV1:function cV1(d){this.a=d},
cV2:function cV2(d,e){this.a=d
this.b=e},
cV3:function cV3(d){this.a=d},
cUF:function cUF(d){this.a=d},
cUG:function cUG(d){this.a=d},
cUH:function cUH(d){this.a=d},
cUI:function cUI(d){this.a=d},
cUJ:function cUJ(d){this.a=d},
cUK:function cUK(d){this.a=d},
cUL:function cUL(d){this.a=d},
cUx:function cUx(d){this.a=d},
cUy:function cUy(){},
cUr:function cUr(){},
cUz:function cUz(d){this.a=d},
cUA:function cUA(){},
cUs:function cUs(){},
cUb:function cUb(d,e){this.a=d
this.b=e},
cUc:function cUc(d){this.a=d},
cUf:function cUf(d,e,f){this.a=d
this.b=e
this.c=f},
cUV:function cUV(d){this.a=d},
awL:function awL(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkW:function bkW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeu:function aeu(d,e,f){this.c=d
this.d=e
this.a=f},
awP:function awP(d){this.a=d},
ekS(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.nB(v)
w=!0
if(x!=null)if(x.ge8().toLowerCase()==="https")if(x.ga2u().length===0)w=x.gXw()&&x.gKY()!==443||!C.a8Y.t(0,x.gn3().toLowerCase())||x.gKL().length===0
if(w)return null
return x.cdC("telegram.me")},
dsH(d){return d.c?d:A.dwG(A.bB(d),A.bE(d),A.cf(d),A.hP(d),A.mL(d),A.OB(d),A.aBr(d),d.b)},
e3n(d){var x
if(d==null||d.length===0)return null
x=A.dDl().j(0,d)
return(x==null?null:x.e===C.ib)===!1?x:null},
As(d,e,f,g){var x=null
return B.dX2(d,e,f,g)},
dX2(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$As=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a6M.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dsV():k).$0(),$async$As)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a6M.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q2(s,a0),$async$As)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a6M.h(0,a0,q)
x=15
return A.c(s.eJ("String",a0,q),$async$As)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q2(s,e),$async$As)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q2(s,e),$async$As)
case 21:case 20:case 12:o=d.$0()
$.a6M.h(0,a0,o)
x=22
return A.c(s.eJ("String",a0,o),$async$As)
case 22:n=a2
if(!n){k=A.b0("Game access attempt id was not persisted.")
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
v=$.a6M.c5(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$As,w)},
a6N(d,e){var x=null
return B.dX1(d,e)},
dX1(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a6N=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.ei(0)
for(p=J.aZ(l);p.F();)$.a6M.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dsV():p).$0(),$async$a6N)
case 6:t=g
p=J.aZ(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a2r().S(0,"flutter."+o),$async$a6N)
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
return A.k($async$a6N,w)}},D,F,G,K,L,H
J=c[1]
A=c[0]
C=c[2]
I=c[296]
E=c[465]
B=a.updateHolder(c[151],B)
D=c[760]
F=c[177]
G=c[643]
K=c[725]
L=c[441]
H=c[534]
B.o1.prototype={
U(){return"GameAccessIssue."+this.b}}
B.At.prototype={
U(){return"GameAccessPrimaryAction."+this.b}}
B.awK.prototype={
U(){return"GameAccessAttemptKind."+this.b}}
B.bkV.prototype={
gnd(){var x=this
if(x.b||x.c||!x.a)return D.NR
if(x.f)return D.aH2
switch(x.r){case D.iE:return D.aGZ
case D.Cv:return D.aH_
case D.Cw:case D.Cx:return D.aH0
case D.vy:case D.hj:return D.NR
case D.vz:case D.Cy:case D.Cz:case D.NQ:case D.iF:case D.vx:return D.qL
case D.hN:return D.qL
case null:case void 0:if(x.e)return D.qL
return x.d?D.aH1:D.qL}}}
B.act.prototype={
O(){return new B.aWE()}}
B.aWE.prototype={
Y(){var x,w,v,u=this
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
v=A.eL(new B.cU9(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b11()
$.Du().a_X(x,new B.cUa(u),!0)},
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
return A.dos(null,C.FB,x)}}
B.C8.prototype={
O(){var x=$.av()
return new B.amd(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.amd.prototype={
gbA1(){var x,w=this.y
if(w===$){x=$.av().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new F.aBF(x)}return w},
Y(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.R5()
return}w=v.d=B.e3n(x.c)
if(w==null){v.fx=!1
v.id=D.hj
return}if(!w.gbHr()){v.fx=!1
v.id=D.hj
return}if(w.e!==C.ib){v.fx=!1
v.k1=B.ekj(v.gby3())
v.k2=B.ekk(v.gcSN())
v.agp()
v.ax=v.ahK()
return}},
b8(){var x,w=this
w.bG()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.ib){w.fr=!0
w.f=w.bS4()}},
agp(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$agp=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.fz(),$async$agp)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cUt(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.i5().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.i5().k(C.t,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.fR(!0),$async$agp)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cUu(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a2D(o,4))}catch(h){n=A.u(h)
$.i5().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cUv(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$agp,w)},
yz(){return this.cxT()},
cxT(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yz=A.h(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.fz(),$async$yz)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cUd(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.i5().k(C.t,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.i5().k(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.qb(),$async$yz)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cUe(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.W(a0.b,4))}catch(a5){n=A.u(a5)
$.i5().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.i5().k(C.t,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.qb(),$async$yz)
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
$.i5().k(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.agF(),$async$yz)
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
return A.k($async$yz,w)},
agF(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$agF=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahK()
v=t.rA(C.Mx,new B.cUw())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$agF,w)},
ahK(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahK=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdu(l.a),$async$ahK)
case 7:q=e
if(J.r(J.aJ(q,"success"),!0)&&y.f.b(J.aJ(q,"data"))){p=A.uT(y.f.a(J.aJ(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aD.hg(p,null))}catch(j){o=A.u(j)
$.i5().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.i5().k(C.t,"_getSlotRtpData failed",n,null)
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
return A.k($async$ahK,w)},
R5(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$R5=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbA1().nm(l),$async$R5)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cUB(s,r))
x=1
break}s.p(new B.cUC(s,r))
x=8
return A.c(s.oL(),$async$R5)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.k6){q=m
$.i5().k(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cUD(s,q))}else{p=m
o=A.aG(k)
m=$.i5()
m.k(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cUE(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$R5,w)},
oL(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oL=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.ib){if(s.c==null){x=1
break}s.p(new B.cUg(s,f))
x=1
break}if(!f.gbHr()){if(s.c==null){x=1
break}s.p(new B.cUh(s))
x=1
break}if(s.c!=null)s.p(new B.cUi(s))
u=4
x=7
return A.c(s.w.fz(),$async$oL)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cUj(s))
x=1
break}if(s.c==null){x=1
break}q=s.beW(r)
if(q==null){s.p(new B.cUk(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbA1().a.Cl(d),$async$oL)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cUl(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bYz(p.r)
if(p.b!==!0||o!=null){s.p(new B.cUm(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cUn(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hN)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dcO(!0),$async$oL)
case 13:case 12:x=1
break
case 10:s.p(new B.cUo(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.k6){m=k
$.i5().k(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cUp(s,m))}else{l=k
$.i5().k(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cUq(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oL,w)},
bAf(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.R5()
return w.oL()},
qs(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$qs=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.ib){if(s.c==null){x=1
break}if(h)s.p(new B.cUM(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cUN(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oL(),$async$qs)
case 5:x=1
break
case 4:s.p(new B.cUO(s))
u=7
x=10
return A.c(s.w.fz(),$async$qs)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cUP(s))
x=1
break}if(s.c==null){x=1
break}o=s.beW(p)
if(o==null){s.p(new B.cUQ(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bAt(o)
x=13
return A.c(s.oL(),$async$qs)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.bz9(),$async$qs)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbA1().a.L8(q,new F.awO(n)),$async$qs)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NV?16:17
break
case 16:x=18
return A.c(s.afC(),$async$qs)
case 18:if(s.c==null){x=1
break}s.p(new B.cUR(s))
x=19
return A.c(s.oL(),$async$qs)
case 19:x=1
break
case 17:s.p(new B.cUS(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.k6?20:22
break
case 20:l=h
$.i5().k(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhT(l,D.vx)
f=l.b.toUpperCase()
x=k===D.vz||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afC(),$async$qs)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cUT(s,k))
x=21
break
case 22:j=h
$.i5().k(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cUU(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$qs,w)},
lZ(d,e){return this.dcP(d,!0)},
dcO(d){return this.lZ(!0,d)},
dcP(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lZ=A.h(function(c1,c2){if(c1===1){t.push(c2)
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
if(b2){s.p(new B.cUW(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cUX(s))
u=4
x=7
return A.c(s.w.fz(),$async$lZ)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beW(p)
if(o==null){s.p(new B.cUY(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bAt(o)
x=10
return A.c(s.oL(),$async$lZ)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.vo(!0),$async$lZ)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cUZ(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bza(),$async$lZ)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.E2(b6.a,new B.awP(n)),$async$lZ)
case 15:m=c2
l=new A.ay(Date.now(),0,!1).a0()
k=m==null?null:B.ekS(m.w)
j=m==null?null:B.dsH(m.f)
i=m==null?null:B.dsH(m.r)
h=m==null?null:B.dsH(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NX
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bS(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.ir(l))===!0
b2=h
a3=(b2==null?null:b2.ir(l))===!0
a4=h!=null&&i!=null&&!h.ir(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.c9(a7,"status")
if(!f)J.c9(a7,"session_id")
if(!e)J.c9(a7,"entitlement")
if(!d)J.c9(a7,"game_key")
if(!a0)J.c9(a7,"client_session")
if(!a1)J.c9(a7,"session_started_at")
if(!a2)J.c9(a7,"session_expiry")
if(!a3)J.c9(a7,"launch_expiry")
if(!a4)J.c9(a7,"launch_expiry_bound")
if(!a5)J.c9(a7,"launch_url_untrusted")
a8=a7
$.i5().k(C.t,"game session response rejected: "+J.b1g(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.EP(b6.a,!0,m.a),$async$lZ)
case 20:case 19:x=21
return A.c(s.PX(),$async$lZ)
case 21:if(s.c==null){x=1
break}s.p(new B.cV_(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.vo(!0),$async$lZ)
case 24:x=1
break
case 23:x=b6.e===C.ib?25:26
break
case 25:s.p(new B.cV0(s,k,h))
x=27
return A.c(s.vx(),$async$lZ)
case 27:x=1
break
case 26:s.p(new B.cV1(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.k6?28:30
break
case 28:a9=a7
$.i5().k(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PX(),$async$lZ)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lZ(!1,!0),$async$lZ)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cV2(s,a9))
x=29
break
case 30:b0=a7
$.i5().k(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cV3(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lZ,w)},
vx(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vx=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cUF(s))
x=!k.ir(new A.ay(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.vo(!0),$async$vx)
case 5:if(s.c==null){x=1
break}s.p(new B.cUG(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.fz(),$async$vx)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aG(f)
h=$.i5()
h.k(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cUH(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beW(q)
if(g==null){s.p(new B.cUI(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bAt(g)
x=13
return A.c(s.oL(),$async$vx)
case 13:x=1
break
case 12:u=15
s.p(new B.cUJ(s))
x=18
return A.c(A.z5(r,C.op,"_self"),$async$vx)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cUK(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aG(e)
h=$.i5()
h.k(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.vo(!0),$async$vx)
case 19:if(s.c==null){x=1
break}s.p(new B.cUL(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vx,w)},
vo(d){return this.cIa(!0)},
cIa(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$vo=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.EP(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$vo)
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
return A.k($async$vo,w)},
EP(d,e,f){return this.cIh(d,!0,f)},
cIh(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EP=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.Ij(d,f),$async$EP)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.i5().k(C.aA,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.dt(C.Bj,null,l),$async$EP)
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
return A.c(s.PX(),$async$EP)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EP,w)},
bz9(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bz9=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc0c()
v=B.As(new B.cUx(u),u.gbYH(),new B.cUy(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bz9,w)},
afC(){var x=0,w=A.l(y.H),v=this
var $async$afC=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6N(new B.cUr(),A.ec([v.gc0c(),v.gbYH()],y.N)),$async$afC)
case 2:return A.j(null,w)}})
return A.k($async$afC,w)},
bza(){var x=0,w=A.l(y.N),v,u=this
var $async$bza=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.As(new B.cUz(u),null,new B.cUA(),u.gc2m())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bza,w)},
PX(){var x=0,w=A.l(y.H),v=this
var $async$PX=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6N(new B.cUs(),A.ec([v.gc2m()],y.N)),$async$PX)
case 2:return A.j(null,w)}})
return A.k($async$PX,w)},
beW(d){var x=A.bor(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bAt(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc0c(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.dsr(D.NP,this.cy,"product-"+x)},
gbYH(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dsr(D.NP,this.cy,x)},
gc2m(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dsr(D.aGY,this.cy,x)},
bZB(d){var x,w=Date.now(),v=C.i.lC($.aqA().B6(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bYz(d){var x=B.dJx(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iF},
bhT(d,e){var x,w=d.a
if(w===401)return D.iE
x=B.dJx(d.b)
if(x!=null)return x
if(w===404)return D.hj
return e},
cYF(d,e){switch(e){case D.iE:return d.gabu()
case D.Cv:return d.gabE()
case D.Cw:return d.gabj()
case D.Cx:return d.gabz()
case D.vy:return d.gabq()
case D.vz:return d.gabi()
case D.Cy:return d.gabs()
case D.hj:return d.gabx()
case D.Cz:return d.gabk()
case D.NQ:return d.gabB()
case D.iF:return d.gabh()
case D.vx:return d.gabn()
case D.hN:return d.gabC()
case null:case void 0:return null}},
EX(d){return this.cSO(d)},
cSO(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EX=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agM()
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
case 5:v=s.yz()
x=1
break
case 6:m=s.c
if(m!=null)A.aL(m,!1).f.aG(G.qx,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aL(m,!1).f.aG(K.z8,y.X)
v=null
x=1
break
case 8:u=14
b0=A.mn(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c2(b0)
a2=A.mn(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aQ(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aQ(b6.j(0,"clientSeed"))
a5=A.aQ(b6.j(0,"nonce"))
x=17
return A.c(s.x.abO(p,q,A.aQ(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$EX)
case 17:o=b8
n=J.aJ(o,"data")
if(J.r(J.aJ(o,"success"),!0)&&y.P.b(n)){m=A.p(y.N,y.z)
J.eG(m,"type","SPIN_RESULT")
J.hB(m,n)
v=m
x=1
break}m=J.aJ(o,"message")
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
return A.c(s.x.iO(),$async$EX)
case 22:k=b8
if(J.r(J.aJ(k,"success"),!0)){m=y.h
j=m.a(J.aJ(k,"data"))
k=j
m=m.a(k==null?null:J.aJ(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.p(y.N,y.z):a7
m=A.mn(J.aJ(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aJ(k,"message")
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
return A.c(s.agF(),$async$EX)
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
m=A.mn(b6.j(0,"page"))
a8=m==null?null:C.k.c2(m)
e=a8==null?1:a8
m=A.mn(b6.j(0,"size"))
a9=m==null?null:C.k.c2(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a3r(e,d),$async$EX)
case 32:a0=b8
if(J.r(J.aJ(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aJ(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aJ(a0,"message")
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
return A.k($async$EX,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.vo(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.e1(0,A.hf(C.bu,s,C.x,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gby3(),s,s,s,s,s,s,!1,C.bZ),108,s,0,s,s,75)],w))
else v.push(t.cwb(d))
if(u)v.push(new A.dS(!0,!0,!0,!0,C.I,!1,new A.ci(C.h4,s,s,A.aK(s,s,s,s,s,D.aLj,s,s,t.gby3(),s,s,s,s,r.gha(),s),s),s))
return A.bQ(s,D.ar_,new A.cL(C.aT,s,C.aP,C.r,v,s),s,s,s,s,s)},
cwb(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDY():a0.gOI()
if(e.db){a0=a0.gDY()
r=A.q(a1).ok.y
a0=new A.I(C.b4,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aI,d,d),d)}else a0=D.bw3
return A.aH(A.P(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbHr())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bkV(r,p,l,k===!0,u===!0,!j,i)
g=e.cYF(a0,i)
if(e.db)f=a0.gDY()
else f=j?d:a0.gabo()
u=x==null?d:x.b
a0=u==null?a0.gaby():u
u=g==null
r=u?f:g
return new B.awL(a0,h,q,m,r,!u,!t,new B.cUb(e,h),new B.cUc(e),d)},
cRF(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aL(x,!1).f.aG(C.es,y.X)
return
case 2:w.ai5()
return
case 3:x=w.c
x.toString
A.aL(x,!1).f.aG(G.qx,y.X)
return
case 4:w.qs()
return
case 5:w.vx()
return
case 6:w.bAf()
return
case 0:return}},
ai5(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ai5=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aL(t,!1).f.aG(C.pR,y.X),$async$ai5)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bAf(),$async$ai5)
case 4:case 1:return A.j(v,w)}})
return A.k($async$ai5,w)},
agM(){var x=0,w=A.l(y.H),v,u=this
var $async$agM=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ahW(),$async$agM)
case 3:case 1:return A.j(v,w)}})
return A.k($async$agM,w)},
ahW(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahW=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.vo(!0),$async$ahW)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.a5(t,!1).AZ(),$async$ahW)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aL(t,!1).f.hD("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahW,w)},
bS4(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.an
u=b.G.window.navigator.userAgent
x=$.dOz()
if(x.b.test(u)){$.aw.y2$.push(new B.cUf(w,v,t))
return C.yA}return new B.act(w.bVM(t,Date.now()),w.gd9S(),null)},
bVM(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d9T(){new B.cUV(this).$0()}}
B.awL.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dS(!0,!0,!0,!0,C.I,!1,A.cX(new B.bkW(this,x,A.q(d),this.cKb(x))),null)},
cKb(d){switch(this.d.gnd().a){case 1:return d.gDZ()
case 2:return d.gYz()
case 3:return d.gabw()
case 4:return d.gabv()
case 5:return d.guZ()
case 6:return d.gabt()
case 0:return null}}}
B.aeu.prototype={
u(d){var x=null,w=A.q(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.Q(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.I(L.en,A.y(A.a([u,C.aa,new A.ew(1,C.bk,A.d(this.d,x,x,x,x,x,v,C.j5,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.awP.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.awP&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.p(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["T<a0<o,@>?>(a0<o,@>)","T<~>()","~()"])
B.dhh.prototype={
$1(d){var x,w=A.iq(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.T3(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dhg.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dhj.prototype={
$1(d){var x,w,v,u,t,s=A.iq(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.T3(d.data)
if(!y.f.b(x))return
w=A.p(y.N,y.z)
for(v=x.gd4(),v=v.gam(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dhk(this.b,w,d,s).$0()},
$S:9}
B.dhk.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h6(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bD(q)
t=v.c.source
if(t!=null)r=A.iq(t,"Object")
else r=!1
s=v.d
if(r){A.W6(t,"postMessage",u,s,y.X)
B.drK(u,s)}else{B.drK(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:82}
B.dhi.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cU9.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cUa.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:549}
B.cUt.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cUu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cUv.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cUd.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cUe.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cUw.prototype={
$0(){return null},
$S:15}
B.cUB.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hj},
$S:0}
B.cUC.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.yb(w.b,w.gdrp(),"Telegram Mini App",null,C.ib,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cUD.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhT(this.b,D.iF)},
$S:0}
B.cUE.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iF},
$S:0}
B.cUg.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hj},
$S:0}
B.cUh.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hj},
$S:0}
B.cUi.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cUj.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cUk.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cUl.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iF:D.hj},
$S:0}
B.cUm.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iF:x},
$S:0}
B.cUn.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hN},
$S:0}
B.cUo.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bYz(x.r)
if(w==null)x=x.b===!0?null:D.iF
else x=w
v.id=x},
$S:0}
B.cUp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhT(this.b,D.iF)},
$S:0}
B.cUq.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iF},
$S:0}
B.cUM.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cUN.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cUO.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cUP.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iE},
$S:0}
B.cUQ.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iE},
$S:0}
B.cUR.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cUS.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NW?D.vy:D.Cz},
$S:0}
B.cUT.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cUU.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vx},
$S:0}
B.cUW.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hN},
$S:0}
B.cUX.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cUY.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cUZ.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cV_.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hN},
$S:0}
B.cV0.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cV1.prototype={
$0(){var x=this.a
x.f=x.bS4()
x.fx=!1},
$S:0}
B.cV2.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhT(this.b,D.hN)},
$S:0}
B.cV3.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cUF.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cUG.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cUH.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iE},
$S:0}
B.cUI.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iE},
$S:0}
B.cUJ.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cUK.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cUL.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cUx.prototype={
$0(){return this.a.bZB("game-access")},
$S:28}
B.cUy.prototype={
$2(d,e){return $.i5().k(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:40}
B.cUr.prototype={
$2(d,e){return $.i5().k(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:40}
B.cUz.prototype={
$0(){return this.a.bZB("game-session")},
$S:28}
B.cUA.prototype={
$2(d,e){return $.i5().k(C.t,"game session attempt persistence unavailable",d,e)},
$S:40}
B.cUs.prototype={
$2(d,e){return $.i5().k(C.t,"game session attempt cleanup unavailable",d,e)},
$S:40}
B.cUb.prototype={
$0(){return this.a.cRF(this.b.gnd())},
$S:0}
B.cUc.prototype={
$0(){this.a.bAf()
return null},
$S:0}
B.cUf.prototype={
$1(d){return this.cfe(d)},
cfe(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.fz(),$async$$1)
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
return A.c(h.r.fR(!0),$async$$1)
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
$.i5().k(C.t,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a2D(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.bf0())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.agF(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.i5().k(C.aA,"RTP prefetch failed",n,null)
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
$.i5().k(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.a5(l,!1).AZ(),$async$$1)
case 23:h=h.bVM(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:518}
B.cUV.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yz(),$async$$0)
case 2:t=e
B.dsP(t)
u=y.H
x=3
return A.c(A.dt(D.aCW,null,u),$async$$0)
case 3:B.dsP(t)
x=4
return A.c(A.dt(D.aCC,null,u),$async$$0)
case 4:B.dsP(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:82}
B.bkW.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cf(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.abl(w)
u=A.B(8)
t=A.aE(C.E.v(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.A),C.aI,k,k)],q)
if(x.x){w=j.gOJ()
p=s.z
w=A.a([E.dG,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aI,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gabA()
if(o)p="-"
o=j.gabr()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([H.H7,new B.aeu(n,p,k),new B.aeu(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apD:D.aqq)
C.e.A(r,A.a([H.H7,A.P(k,k,k,A.d(w,k,k,k,k,k,s,C.aI,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQv,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bo(C.nm,A.a([C.n0,A.d(w.c?j.gabm():j.gOI(),k,k,k,k,k,k,C.aI,k,k)],q),C.bG,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aI,k,k)}C.e.A(r,A.a([D.bw5,A.cC(o,D.bMZ,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gnd()!==D.qL
else w=!1
if(w)C.e.A(r,A.a([E.dG,A.aI(A.d(j.gabp(),k,k,k,k,k,k,C.aI,k,k),D.bNj,k,k,x.z,k,k)],q))
return A.b2(new A.ba(new A.at(0,1/0,i,1/0),A.aH(A.P(k,k,k,new A.ba(I.Kd,new A.bZ(new A.O(D.aoQ,k,t,u,k,k,C.q),C.aq,new A.I(C.b4,A.v(r,C.aj,k,C.d,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bSZ,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.r,k,C.x,k,k,D.aEo,k,k,C.y)},
$S:98};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.amd.prototype,"gcSN","EX",0)
w(v,"gby3","agM",1)
w(v,"gd9S","d9T",2)})();(function inheritance(){var x=a.inheritMany
x(A.es,[B.o1,B.At,B.awK])
x(A.G,[B.bkV,B.awP])
x(A.by,[B.dhh,B.dhj,B.cU9,B.cUa,B.cUf])
x(A.bw,[B.dhg,B.dhk,B.dhi,B.cUt,B.cUu,B.cUv,B.cUd,B.cUe,B.cUw,B.cUB,B.cUC,B.cUD,B.cUE,B.cUg,B.cUh,B.cUi,B.cUj,B.cUk,B.cUl,B.cUm,B.cUn,B.cUo,B.cUp,B.cUq,B.cUM,B.cUN,B.cUO,B.cUP,B.cUQ,B.cUR,B.cUS,B.cUT,B.cUU,B.cUW,B.cUX,B.cUY,B.cUZ,B.cV_,B.cV0,B.cV1,B.cV2,B.cV3,B.cUF,B.cUG,B.cUH,B.cUI,B.cUJ,B.cUK,B.cUL,B.cUx,B.cUz,B.cUb,B.cUc,B.cUV])
x(A.J,[B.act,B.C8])
x(A.R,[B.aWE,B.amd])
x(A.c0,[B.cUy,B.cUr,B.cUA,B.cUs,B.bkW])
x(A.x,[B.awL,B.aeu])})()
A.aV(b.typeUniverse,JSON.parse('{"act":{"J":[],"m":[]},"aWE":{"R":["act"]},"C8":{"J":[],"m":[]},"amd":{"R":["C8"]},"awL":{"x":[],"m":[]},"aeu":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.A
return{J:x("bv"),u:x("T<a0<o,@>?>"),T:x("Fx"),w:x("jS"),s:x("w<o>"),p:x("w<m>"),P:x("a0<o,@>"),f:x("a0<@,@>"),a:x("b9"),A:x("Qd"),N:x("o"),x:x("QE"),r:x("vP"),O:x("W<o>"),y:x("K"),z:x("@"),h:x("a0<o,@>?"),X:x("G?"),H:x("~")}})();(function constants(){D.aoQ=new A.Z(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.apD=new A.Z(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.aqq=new A.Z(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.z)
D.ar_=new A.Z(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aCC=new A.bK(175e4)
D.aCW=new A.bK(75e4)
D.aEo=new A.ao(20,64,20,24)
D.NP=new B.awK(0,"purchase")
D.aGY=new B.awK(1,"session")
D.iE=new B.o1(0,"signInRequired")
D.Cv=new B.o1(1,"telegramAccountNotLinked")
D.iF=new B.o1(10,"requestFailed")
D.vx=new B.o1(11,"purchaseFailed")
D.hN=new B.o1(12,"sessionFailed")
D.Cw=new B.o1(2,"insufficientBalance")
D.Cx=new B.o1(3,"walletInactive")
D.vy=new B.o1(4,"refundPending")
D.vz=new B.o1(5,"accessExpired")
D.Cy=new B.o1(6,"accessRequired")
D.hj=new B.o1(7,"gameUnavailable")
D.Cz=new B.o1(8,"accessNotActive")
D.NQ=new B.o1(9,"sessionDenied")
D.NR=new B.At(0,"none")
D.aGZ=new B.At(1,"signIn")
D.aH_=new B.At(2,"bindTelegram")
D.aH0=new B.At(3,"topUp")
D.aH1=new B.At(4,"purchase")
D.aH2=new B.At(5,"openGame")
D.qL=new B.At(6,"retry")
D.aLj=new A.aq(C.jA,null,C.E,null,null)
D.ao2=new A.mv(2.5,null,null,null,null,null,null,null,null,null)
D.bw3=new A.ab(28,28,D.ao2,null)
D.bw5=new A.ab(null,22,null,null)
D.bMZ=new A.W("slot-game-access-primary",y.O)
D.bNj=new A.W("slot-game-access-refresh",y.O)
D.bQv=new A.W("slot-game-access-message",y.O)
D.bSZ=new A.W("slot-game-access-gate",y.O)})();(function staticFields(){$.a6M=function(){var x=y.N
return A.p(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"etc","dOz",()=>A.bc("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"eub","i5",()=>A.aX("SlotGamePage"))})()};
(a=>{a["Yk0mvr61x6eZwpWzYRBKPG7GYhI="]=a.current})($__dart_deferred_initializers__);