((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,H,B={
edG(){var x,w,v=$.pC(),u=J.fh(16,y.S)
for(x=0;x<16;++x)u[x]=v.mZ(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.E(u,new B.bDM(),A.V(u).k("E<1,n>")).kV(0)
return C.b.ai(w,0,8)+"-"+C.b.ai(w,8,12)+"-"+C.b.ai(w,12,16)+"-"+C.b.ai(w,16,20)+"-"+C.b.bu(w,20)},
bDM:function bDM(){},
dUF(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.tg
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.th
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.ti
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.tj
if(C.b.t(x,"ACCESS_EXPIRED"))return D.tk
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.xu
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.h9
return null},
e77(d,e,f){var x=e==null?null:C.b.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pT:function pT(d,e){this.a=d
this.b=e},
Dv:function Dv(d,e){this.a=d
this.b=e},
aH8:function aH8(d,e){this.a=d
this.b=e},
bDv:function bDv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
NM:function NM(d,e){this.a=d
this.b=e},
ail:function ail(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
atQ:function atQ(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
dqK:function dqK(d){this.a=d},
dqL:function dqL(d){this.a=d},
dqC:function dqC(d,e){this.a=d
this.b=e},
dqs:function dqs(d){this.a=d},
dqJ:function dqJ(d,e){this.a=d
this.b=e},
dqD:function dqD(d){this.a=d},
dqE:function dqE(d,e){this.a=d
this.b=e},
dqF:function dqF(d){this.a=d},
dqz:function dqz(d){this.a=d},
dqA:function dqA(d){this.a=d},
dqB:function dqB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dqn:function dqn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dql:function dql(d){this.a=d},
dqm:function dqm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dqk:function dqk(d){this.a=d},
dqi:function dqi(d,e){this.a=d
this.b=e},
dqj:function dqj(d,e){this.a=d
this.b=e},
dqf:function dqf(d){this.a=d},
dqe:function dqe(d){this.a=d},
dqy:function dqy(d){this.a=d},
dqu:function dqu(d,e){this.a=d
this.b=e},
dqv:function dqv(d,e){this.a=d
this.b=e},
dqw:function dqw(d,e){this.a=d
this.b=e},
dqx:function dqx(d,e){this.a=d
this.b=e},
dqt:function dqt(d){this.a=d},
dqr:function dqr(d){this.a=d},
dqq:function dqq(d,e){this.a=d
this.b=e},
dqp:function dqp(d){this.a=d},
dqo:function dqo(d,e,f){this.a=d
this.b=e
this.c=f},
dqG:function dqG(d){this.a=d},
dqH:function dqH(d){this.a=d},
dqI:function dqI(d){this.a=d},
dqg:function dqg(d){this.a=d},
dqh:function dqh(d){this.a=d},
bfz:function bfz(){},
f3X(d,e,f){var x=b.G,w=A.dQ(new B.dV9(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dV8(w)},
f3Y(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dQ(new B.dVc(u,new B.dVa(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dVb(w,x)},
e6c(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.iS(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
er0(d,e){B.dQ6(A.bK(d),b.G.window.location.origin,e)},
dQ6(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iS(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.b.aR(u,e))v=!A.oH(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dV9:function dV9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dV8:function dV8(d){this.a=d},
dVa:function dVa(d,e){this.a=d
this.b=e},
dVc:function dVc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVd:function dVd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dVb:function dVb(d,e){this.a=d
this.b=e},
aiM:function aiM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbo:function bbo(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
ds6:function ds6(d){this.a=d},
ds7:function ds7(d){this.a=d},
eiM(d,e){return new B.Fl(d,e,null)},
Fl:function Fl(d,e,f){this.c=d
this.d=e
this.a=f},
au5:function au5(d,e,f,g){var _=this
_.f=_.e=_.d=null
_.r=d
_.w=e
_.x=$
_.z=_.y=null
_.Q=!1
_.as=f
_.at=null
_.ax=!1
_.ay=$
_.ch=g
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.k1=_.id=_.go=_.fy=!1
_.k2=!0
_.k3=!1
_.c=_.a=_.p2=_.p1=_.ok=_.k4=null},
dt5:function dt5(d){this.a=d},
dt6:function dt6(d){this.a=d},
dt7:function dt7(d){this.a=d},
dt8:function dt8(d){this.a=d},
dt4:function dt4(d){this.a=d},
dsR:function dsR(d){this.a=d},
dsq:function dsq(d,e){this.a=d
this.b=e},
dsr:function dsr(d){this.a=d},
dsa:function dsa(d,e){this.a=d
this.b=e},
dss:function dss(){},
dsp:function dsp(d,e){this.a=d
this.b=e},
dsx:function dsx(d,e){this.a=d
this.b=e},
dsy:function dsy(d,e){this.a=d
this.b=e},
dsz:function dsz(d,e){this.a=d
this.b=e},
dsA:function dsA(d){this.a=d},
dsc:function dsc(d,e){this.a=d
this.b=e},
dsd:function dsd(d){this.a=d},
dse:function dse(d){this.a=d},
dsf:function dsf(d){this.a=d},
dsg:function dsg(d){this.a=d},
dsh:function dsh(d,e){this.a=d
this.b=e},
dsi:function dsi(d,e){this.a=d
this.b=e},
dsj:function dsj(d,e){this.a=d
this.b=e},
dsk:function dsk(d,e){this.a=d
this.b=e},
dsl:function dsl(d,e){this.a=d
this.b=e},
dsm:function dsm(d){this.a=d},
dsI:function dsI(d){this.a=d},
dsJ:function dsJ(d){this.a=d},
dsK:function dsK(d){this.a=d},
dsL:function dsL(d){this.a=d},
dsM:function dsM(d){this.a=d},
dsN:function dsN(d){this.a=d},
dsO:function dsO(d,e){this.a=d
this.b=e},
dsP:function dsP(d,e){this.a=d
this.b=e},
dsQ:function dsQ(d){this.a=d},
dsU:function dsU(d){this.a=d},
dsV:function dsV(d){this.a=d},
dsW:function dsW(d){this.a=d},
dsX:function dsX(d){this.a=d},
dsY:function dsY(d){this.a=d},
dsZ:function dsZ(d,e,f){this.a=d
this.b=e
this.c=f},
dt_:function dt_(d){this.a=d},
dt0:function dt0(d,e){this.a=d
this.b=e},
dt1:function dt1(d){this.a=d},
dsB:function dsB(d){this.a=d},
dsC:function dsC(d){this.a=d},
dsD:function dsD(d){this.a=d},
dsE:function dsE(d){this.a=d},
dsF:function dsF(d){this.a=d},
dsG:function dsG(d){this.a=d},
dsH:function dsH(d){this.a=d},
dst:function dst(d){this.a=d},
dsu:function dsu(){},
dsn:function dsn(){},
dsv:function dsv(d){this.a=d},
dsw:function dsw(){},
dso:function dso(){},
dt2:function dt2(d,e){this.a=d
this.b=e},
dt3:function dt3(d){this.a=d},
ds8:function ds8(d,e){this.a=d
this.b=e},
ds9:function ds9(d){this.a=d},
dsb:function dsb(d,e,f){this.a=d
this.b=e
this.c=f},
dsS:function dsS(d){this.a=d},
dsT:function dsT(d,e){this.a=d
this.b=e},
aH9:function aH9(d,e,f,g,h,i,j,k,l,m){var _=this
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
bDw:function bDw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
alO:function alO(d,e,f){this.c=d
this.d=e
this.a=f},
aHd:function aHd(d){this.a=d},
eMd(d){var x
if(d==null||d.length===0)return null
x=A.eiK().i(0,d)
return(x==null?null:x.e===C.iS)===!1?x:null},
Ds(d,e,f,g){var x=null
return B.eEo(d,e,f,g)},
eEo(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ds=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.acB.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.XO():k).$0(),$async$Ds)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.acB.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.qp(s,a0),$async$Ds)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.acB.h(0,a0,q)
x=15
return A.c(s.ha("String",a0,q),$async$Ds)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.qp(s,e),$async$Ds)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.qp(s,e),$async$Ds)
case 21:case 20:case 12:o=d.$0()
$.acB.h(0,a0,o)
x=22
return A.c(s.ha("String",a0,o),$async$Ds)
case 22:n=a2
if(!n){k=A.aA("Game access attempt id was not persisted.")
throw A.o(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
m=A.u(g)
l=A.aO(g)
f.$2(m,l)
v=$.acB.cJ(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ds,w)},
acC(d,e){var x=null
return B.eEn(d,e)},
eEn(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$acC=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eN(0)
for(p=J.aX(l);p.G();)$.acB.M(0,p.gP())
v=3
p=m
x=6
return A.c((p==null?A.XO():p).$0(),$async$acC)
case 6:t=g
p=J.aX(l)
case 7:if(!p.G()){x=8
break}s=p.gP()
o=s
t.a.M(0,o)
x=9
return A.c($.XT().M(0,"flutter."+o),$async$acC)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aO(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$acC,w)}},D,E,F,G,M,N,O,P,Q,R,S,I
J=c[1]
A=c[0]
C=c[2]
K=c[309]
L=c[318]
H=c[478]
B=a.updateHolder(c[157],B)
D=c[783]
E=c[187]
F=c[784]
G=c[659]
M=c[746]
N=c[618]
O=c[366]
P=c[785]
Q=c[440]
R=c[484]
S=c[455]
I=c[551]
B.pT.prototype={
W(){return"GameAccessIssue."+this.b}}
B.Dv.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aH8.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bDv.prototype={
gqQ(){var x=this
if(x.b||x.c||!x.a)return D.Rb
if(x.f)return D.aPX
switch(x.r){case D.jl:return D.aPT
case D.tg:return D.aPU
case D.th:case D.ti:return D.aPV
case D.tj:case D.h9:return D.Rb
case D.tk:case D.xu:case D.EZ:case D.Ra:case D.jm:case D.xt:return D.tl
case D.is:return D.tl
case null:case void 0:if(x.e)return D.tl
return x.d?D.aPW:D.tl}}}
B.NM.prototype={
W(){return"_GameProblem."+this.b}}
B.ail.prototype={
O(){return new B.atQ()},
e1C(){return this.f.$0()},
e5d(){return this.r.$0()}}
B.atQ.prototype={
gbM_(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dUF(v)}else v=w
return v},
gcbs(){var x,w=this.ch
if(w!=null)return w
x=this.r
if(x!=null)if(x.r)w=!x.x&&!x.y
else w=!0
else w=!1
if(!w){w=this.x
if(w==null)w=null
else{w=w.b
w=w==null?null:w.f}w=w!=null}else w=!0
return w?D.Lj:null},
ghL(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gN()&&x.a.e1C()},
X(){var x,w,v=this
v.a6()
x=$.ah.RG$
v.ax=x==null||x===C.cz
w=A.iu(v.a.d.a.a,new B.dqK(v))
v.d!==$&&A.aL()
v.d=new E.afR(new A.Dw(w))
v.a.e.a4(v.gclP())
$.ah.bs$.push(v)
$.ah.y2$.push(new B.dqL(v))},
tO(){var x=this.z
if(x!=null)x.a7()
this.y=this.z=null},
bPX(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gfg())$.ah.y2$.push(new B.dqC(v,w))},
clQ(){var x=this
if(x.c==null||x.at||x.a.e.gN())return;++x.ay
x.bPX()
x.n(new B.dqs(x))},
on(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cz)x.bPX()
x.n(new B.dqJ(x,d))
if(x.ax&&x.ghL())x.tZ(x.gbwu())},
q(){var x=this;++x.ay
x.bPX()
x.tO()
x.a.e.T(x.gclP())
$.ah.iU(x)
x.a5()},
cc7(d){var x
this.CW=d instanceof A.hy?B.dUF(d.b):null
if(d instanceof E.pV)x=D.ahm
else if(d instanceof E.vd)x=D.ahk
else if(d instanceof E.acE)x=D.ahl
else x=d instanceof E.Du||d instanceof E.a_D?D.Lj:D.ahj
this.ch=x},
tZ(d){return this.dAa(d)},
dAa(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tZ=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghL()){x=1
break}q=++r.ay
r.n(new B.dqD(r))
u=4
x=7
return A.c(d.$1(q),$async$tZ)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghL()&&J.p(q,r.ay))r.n(new B.dqE(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.dqF(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tZ,w)},
dCD(){return this.tZ(this.gbwu())},
vR(d){return this.dwA(d)},
dwA(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$vR=A.h(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:k={}
j=k.a=t.e
k.b=t.f
x=j==null?2:4
break
case 2:v=6
p=t.d
p===$&&A.e()
g=k
x=9
return A.c(p.pZ(t.a.c),$async$vR)
case 9:g.b=f
v=1
x=8
break
case 6:v=5
i=u.pop()
if(!t.ghL()||d!==t.ay)A.U(C.am)
x=8
break
case 5:x=1
break
case 8:if(!t.ghL()||d!==t.ay)A.U(C.am)
p=k.b
n=t.d
m=t.a
x=p==null?10:12
break
case 10:n===$&&A.e()
p=m.c
n=n.a.a
l=n.c
if(!(l instanceof A.fN))A.U(C.x)
x=13
return A.c(E.bDR(n,l.b,new B.dqz(t),p),$async$vR)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fN))A.U(C.x)
j=E.edE(n,l.b,p,new B.dqA(t),null,m)
case 11:k.a=j
if(!t.ghL()||d!==t.ay)A.U(C.am)
if(j==null)throw A.o(new E.Du())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e8g(),$async$vR)
case 14:s=f
if(!t.ghL()||d!==t.ay)A.U(C.am)
x=15
return A.c(p.cyn(),$async$vR)
case 15:r=f
if(!t.ghL()||d!==t.ay)A.U(C.am)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.rf(),$async$vR)
case 20:g.d=f
v=1
x=19
break
case 17:v=16
h=u.pop()
q=A.u(h)
if(!t.ghL()||d!==t.ay)A.U(C.am)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghL()||d!==t.ay)A.U(C.am)
t.n(new B.dqB(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vR,w)},
av7(d,e,f){return this.d1S(d,e,f)},
d1S(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$av7=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghL()||d!==r.ay)A.U(C.am)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cC()
n=r.c
n.toString
m=y.y
p.seU(A.D1(null,null,C.bi,!0,null,new B.dqn(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aK(p.an(),m),$async$av7)
case 6:o=h
if(!r.ghL()||d!==r.ay)A.U(C.am)
n=J.p(o,!0)
v=n
s=[1]
x=4
break
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
n=r.Q
m=p.an()
if(n==null?m==null:n===m)r.Q=null
x=s.pop()
break
case 5:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$av7,w)},
cZE(){return this.tZ(new B.dqk(this))},
cS5(){return this.tZ(new B.dqf(this))},
dve(){return this.tZ(new B.dqy(this))},
dCB(){return this.tZ(new B.dqr(this))},
dCy(){return this.tZ(new B.dqp(this))},
a0v(d){return this.dp4(d)},
dp4(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a0v=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghL()||u.as){x=1
break}++u.ay
u.n(u.gc9o())
t=u.c
t.toString
x=3
return A.c(A.aJ(t,!1).f.aK(d,y.X),$async$a0v)
case 3:x=u.ghL()?4:5
break
case 4:x=6
return A.c(u.tZ(u.gbwu()),$async$a0v)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a0v,w)},
dCz(d){var x
switch(this.gbM_()){case D.tg:return d.gX9()
case D.th:return d.gX_()
case D.ti:return d.gX7()
case D.tj:return d.gX2()
case D.tk:return d.gWZ()
case D.xu:return d.gX4()
case D.h9:return d.gKy()
default:break}x=null
switch(this.gcbs()){case D.ahm:x=d.gadh()
break
case D.ahk:x=d.gV1()
break
case D.ahl:x=d.gV0()
break
case D.Lk:x=d.gadb()
break
case D.Lj:x=d.gKy()
break
case D.ahj:x=d.gWX()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.c,y.J)
g.toString
x=i.f
w=x==null?h:x.gcu2()
if(w==null)w=g.gamN()
if(i.at||!i.a.e.gN()){x=A.kS(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gXa(),h,h,h,h,h,h,C.az,h,h)
u=i.a.r
return A.bN(x,h,new A.dC(!0,!0,!0,!0,C.I,!1,A.aM(new A.J(C.aU,A.w(A.a([v,L.dy,A.c7(A.d(g.giO(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.H,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbM_()
o=i.dCz(g)
v=y.p
u=A.a([A.d(g.gKw(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(!x)C.d.v(u,A.a([i.bQG(g.gX8(),t.b+" USDT"),i.bQG(g.gX3(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(O.eJ,A.d(o,D.c2y,h,h,h,h,A.Y(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bsl)
n=s==null
if(!n){m=A.d(g.gade(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bQG(g.gu8(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gax2():g.gX0()
else k=s.c?g.gX1():g.gV1()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.Q],v)
if(!j||s.c)k.push(i.Ej("gameV2AcknowledgePurchase",g.gad7(),i.gcS4()))
else k.push(i.Ej("gameV2RetryPurchase",g.gadg(),i.gc8s()))
u.push(A.dg(new A.J(C.B,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.Ej("gameV2Purchase",g.gX5(),i.gc8s()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jP.t(0,m.a))===!0?g.gada():g.gV0(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(i.y!=null&&q)k.push(i.Ej("gameV2Open",g.gxk(),i.gdCA()))
j=!1
if(n)if(q)if((l?h:F.jP.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jP.t(0,m.a))===!0?g.gV2():g.gV3()
k.push(i.Ej("gameV2Reissue",j,i.gciw()))}if((l?h:F.jP.t(0,m.a))!==!0)k.push(i.bKC("gameV2End",g.gad9(),i.gdCx(),!0))
u.push(A.dg(new A.J(C.B,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.Ej("gameV2Prepare",g.gV2(),i.gciw()))
if(p===D.tg)u.push(i.Ej("gameV2BindTelegram",g.gRj(),new B.dqG(i)))
if(p===D.th||p===D.ti)u.push(i.Ej("gameV2TopUp",g.gX6(),new B.dqH(i)))
u.push(i.bKC("gameV2CheckOriginal",g.gad8(),i.gdCC(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bN(A.kS(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,A.e1_(h,new B.dqI(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dC(!0,!1,!0,!0,C.I,!1,A.eM(A.a([A.aM(new A.ba(C.w3,A.w(u,C.a8,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.c2z,P.Q2,h,h,C.y,!1),h),h,h,h,h,h)},
bQG(d,e){var x=null
return new A.J(Q.DU,A.bi(C.lf,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ac,x,4,16),x)},
bKC(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.dqg(f)
x=A.fn(A.d(e,w,w,w,w,w,w,C.az,w,w),new A.H(d,v),x,w)
v=x}else{x=this.as?w:new B.dqh(f)
x=A.c7(A.d(e,w,w,w,w,w,w,C.az,w,w),new A.H(d,v),x,w)
v=x}return new A.J(R.DR,v,w)},
Ej(d,e,f){return this.bKC(d,e,f,!1)}}
B.bfz.prototype={}
B.aiM.prototype={
O(){return new B.bbo()}}
B.bbo.prototype={
X(){var x,w,v,u=this
u.a6()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.aL()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.aL()
u.e=w
v=u.a.d
if(v!=null)w.id=v
v=A.dQ(new B.ds6(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.az5()
$.C5().a9U(x,new B.ds7(u),!0)},
aQ(d){var x,w
this.b_(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.e()
w.src=x}},
q(){var x,w=this,v=w.f
if(v!=null){x=w.e
x===$&&A.e()
x.removeEventListener("load",v)}x=w.e
x===$&&A.e()
x.src="about:blank"
x.remove()
w.a5()},
u(d){var x=this.d
x===$&&A.e()
return new A.Rd(x,null,null,C.zU,null)}}
B.Fl.prototype={
O(){var x=$.am()
return new B.au5(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.pC().mZ(1073741824),x.$1$0(y.x))}}
B.au5.prototype={
gh8(){if(this.c!=null){var x=this.z
x=x==null?null:x.gN()
x=x!==!1}else x=!1
return x},
gEJ(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gN()
if(x!==!1)if(w.gh8()){v=w.x
v===$&&A.e()
v=v.gN()}}return v},
ghz(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.nU
if(w!=null)w.cE()
x=u.at
if(x!=null&&u.w.lY(x))return!0}catch(v){if(!(A.u(v) instanceof A.JP))throw v}u.ax=!0
u.CW=null
return!1},
gbwg(){var x,w=this.ay
if(w===$){x=$.am().$1$0(y.T)
this.ay!==$&&A.bf()
w=this.ay=new E.afR(x)}return w},
X(){var x,w,v,u,t,s=this
s.a6()
x=$.am()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.ja(x.$1$0(y.E),s.w)
x.a4(s.gckz())
s.y=x}if(v)s.at=s.w.aIx()
x=u?w.dZz(new B.dt5(s)):w
s.x!==$&&A.aL()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.a_9()
return}t=s.d=B.eMd(v.c)
if(t==null){s.k2=!1
s.ok=D.h9
return}if(!t.gbXV()){s.k2=!1
s.ok=D.h9
return}if(t.e!==C.iS){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.f3X(s.gbQZ(),v,new B.dt6(s))
x=x.f!=null?s.as:null
s.p2=B.f3Y(s.gdhO(),x,new B.dt7(s))
$.ah.y2$.push(new B.dt8(s))
s.cy=s.ats()
return}},
b0(){var x,w,v=this
v.bA()
x=v.c
x.toString
v.z=A.ck(x,null,y.X)
x=v.y
if((x==null?null:x.gN())===!1)$.ah.y2$.push(new B.dt4(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iS){v.k1=!0
v.f=v.c8n()}},
ckA(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gN())!==!1}if(w)return
B.er0(A.a_(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dsR(x))},
Zp(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Zp=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.arm(),$async$Zp)
case 9:u=2
x=8
break
case 6:u=5
i=t.pop()
x=8
break
case 5:x=2
break
case 8:x=1
break
case 4:u=11
if(!(s.gh8()&&s.ghz()))A.U(C.am)
x=14
return A.c(s.w.iw(),$async$Zp)
case 14:r=e
if(!(s.gh8()&&s.ghz()))A.U(C.am)
if(s.c!=null&&r!=null)try{if(!(s.gh8()&&s.ghz()))A.U(C.am)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.iO().m(C.aJ,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gh8()&&s.ghz())){x=1
break}$.iO().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gh8()&&s.ghz()))A.U(C.am)
x=19
return A.c(s.r.ii(!0),$async$Zp)
case 19:o=e
if(!(s.gh8()&&s.ghz()))A.U(C.am)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dsq(s,n))
try{j=J.a83(n,4)
if(!(s.gh8()&&s.ghz()))A.U(C.am)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.iO().m(C.aJ,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh8()&&s.ghz())s.n(new B.dsr(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zp,w)},
vz(){return this.cWx()},
cWx(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$vz=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.arm(),$async$vz)
case 5:h=b0
x=6
return A.c(s.ZD(),$async$vz)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cIY(),$async$vz)
case 11:r=b0
u=2
x=10
break
case 8:u=7
a4=t.pop()
r=A.a_(["status","unavailable"],y.N,y.z)
x=10
break
case 7:x=2
break
case 10:if(!s.gEJ())throw A.o(C.am)
a2=A.lG(h.i(0,"balance"))
e=a2==null?null:a2
if(e==null)e=0
a2=A.q(y.N,y.z)
a2.h(0,"type","HOST_INIT")
a2.h(0,"authMode","v2-http-only")
a2.h(0,"hostAuthenticated",!0)
a2.h(0,"balance",e)
a2.h(0,"demoMode",e<0.25)
a3=h.i(0,"username")
a2.h(0,"username",a3==null?"":a3)
a2.h(0,"slotOperation",r)
if(g!=null)a2.h(0,"rtp",g)
v=a2
x=1
break
case 4:if(!(s.gh8()&&s.ghz()))A.U(C.am)
a3=s.w
d=s.at
d.toString
q=a3.Gs(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.iw(),$async$vz)
case 18:q=b0
if(!(s.gh8()&&s.ghz()))A.U(C.am)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gh8()&&s.ghz()))A.U(C.am)
$.iO().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gh8()&&s.ghz()))A.U(C.am)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.iO().m(C.aJ,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.Do(),$async$vz)
case 26:m=b0
if(!(s.gh8()&&s.ghz()))A.U(C.am)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dsa(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gh8()&&s.ghz()))A.U(C.am)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.iO().m(C.aJ,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gh8()&&s.ghz()))A.U(C.am)
$.iO().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=25
break
case 22:x=2
break
case 25:x=20
break
case 21:u=28
x=31
return A.c(s.r.Do(),$async$vz)
case 31:j=b0
if(!(s.gh8()&&s.ghz()))A.U(C.am)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gh8()&&s.ghz()))A.U(C.am)
$.iO().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.ZD(),$async$vz)
case 32:g=b0
if(!(s.gh8()&&s.ghz()))A.U(C.am)
d=A.q(y.N,y.z)
d.h(0,"type","HOST_INIT")
a1=q
d.h(0,"jwt",a1==null?"":a1)
d.h(0,"balance",a2.a)
d.h(0,"demoMode",a3<0.25)
d.h(0,"username",p)
if(g!=null)d.h(0,"rtp",g)
v=d
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vz,w)},
ZD(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ZD=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.ats()
v=t.qV(C.PI,new B.dss())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ZD,w)},
arm(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$arm=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gEJ())throw A.o(C.am)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jU(),$async$arm)
case 3:s=e
if(!u.gEJ())throw A.o(C.am)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dsp(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$arm,w)},
ats(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$ats=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bpW(k.a),$async$ats)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.p3(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.G.aw(p,null)
if(!(r.gh8()&&r.ghz()))A.U(C.am)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.iO().m(C.aJ,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
j=t.pop()
n=A.u(j)
$.iO().m(C.t,"_getSlotRtpData failed",n,null)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.cx==null)r.cy=null
x=s.pop()
break
case 6:v=null
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ats,w)},
a_9(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a_9=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbwg().pZ(l),$async$a_9)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dsx(s,r))
x=1
break}s.n(new B.dsy(s,r))
x=8
return A.c(s.tN(),$async$a_9)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.hy){q=m
$.iO().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dsz(s,q))}else{p=m
o=A.aO(k)
m=$.iO()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dsA(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a_9,w)},
tN(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tN=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iS){if(s.c==null){x=1
break}s.n(new B.dsc(s,f))
x=1
break}if(!f.gbXV()){if(s.c==null){x=1
break}s.n(new B.dsd(s))
x=1
break}if(s.c!=null)s.n(new B.dse(s))
u=4
x=7
return A.c(s.w.iw(),$async$tN)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dsf(s))
x=1
break}if(s.c==null){x=1
break}q=s.brC(r)
if(q==null){s.n(new B.dsg(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbwg().a
if(k.a.c instanceof A.fN)A.U(C.x)
x=8
return A.c(k.IS(d),$async$tN)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dsh(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cfI(p.r)
if(p.b!==!0||o!=null){s.n(new B.dsi(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dsj(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.is)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dFB(!0),$async$tN)
case 13:case 12:x=1
break
case 10:s.n(new B.dsk(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.hy){m=k
$.iO().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dsl(s,m))}else{l=k
$.iO().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dsm(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tN,w)},
bPS(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.a_9()
return w.tN()},
vO(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vO=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iS){if(s.c==null){x=1
break}if(h)s.n(new B.dsI(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dsJ(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tN(),$async$vO)
case 5:x=1
break
case 4:s.n(new B.dsK(s))
u=7
x=10
return A.c(s.w.iw(),$async$vO)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dsL(s))
x=1
break}if(s.c==null){x=1
break}o=s.brC(p)
if(o==null){s.n(new B.dsM(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bQ6(o)
x=13
return A.c(s.tN(),$async$vO)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bOr(),$async$vO)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbwg().a
if(h.a.c instanceof A.fN)A.U(C.x)
x=15
return A.c(h.SH(q,new E.aHc(n)),$async$vO)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Rf?16:17
break
case 16:x=18
return A.c(s.ar3(),$async$vO)
case 18:if(s.c==null){x=1
break}s.n(new B.dsN(s))
x=19
return A.c(s.tN(),$async$vO)
case 19:x=1
break
case 17:s.n(new B.dsO(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.hy?20:22
break
case 20:l=h
$.iO().m(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.buP(l,D.xt)
f=l.b.toUpperCase()
x=k===D.tk||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.ar3(),$async$vO)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dsP(s,k))
x=21
break
case 22:j=h
$.iO().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dsQ(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vO,w)},
pi(d,e){return this.dFC(d,!0)},
dFB(d){return this.pi(!0,d)},
dFC(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$pi=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iS){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.dsU(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dsV(s))
u=4
x=7
return A.c(s.w.iw(),$async$pi)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.brC(p)
if(o==null){s.n(new B.dsW(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bQ6(o)
x=10
return A.c(s.tN(),$async$pi)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.At(!0),$async$pi)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.dsX(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bOs(),$async$pi)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.KH(b6.a,new B.aHd(n)),$async$pi)
case 15:m=c2
l=new A.aG(Date.now(),0,!1).a3()
k=m==null?null:E.eqP(m.w)
j=m==null?null:E.dVJ(m.f)
i=m==null?null:E.dVJ(m.r)
h=m==null?null:E.dVJ(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Rh
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a3().dv(l.a3()).a)<=3e8
b2=i
a2=(b2==null?null:b2.ia(l))===!0
b2=h
a3=(b2==null?null:b2.ia(l))===!0
a4=h!=null&&i!=null&&!h.ia(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.c2(a7,"status")
if(!f)J.c2(a7,"session_id")
if(!e)J.c2(a7,"entitlement")
if(!d)J.c2(a7,"game_key")
if(!a0)J.c2(a7,"client_session")
if(!a1)J.c2(a7,"session_started_at")
if(!a2)J.c2(a7,"session_expiry")
if(!a3)J.c2(a7,"launch_expiry")
if(!a4)J.c2(a7,"launch_expiry_bound")
if(!a5)J.c2(a7,"launch_url_untrusted")
a8=a7
$.iO().m(C.t,"game session response rejected: "+J.bhy(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.LG(b6.a,!0,m.a),$async$pi)
case 20:case 19:x=21
return A.c(s.YJ(),$async$pi)
case 21:if(s.c==null){x=1
break}s.n(new B.dsY(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.At(!0),$async$pi)
case 24:x=1
break
case 23:x=b6.e===C.iS?25:26
break
case 25:s.n(new B.dsZ(s,k,h))
x=27
return A.c(s.AH(),$async$pi)
case 27:x=1
break
case 26:s.n(new B.dt_(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.hy?28:30
break
case 28:a9=a7
$.iO().m(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.YJ(),$async$pi)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.pi(!1,!0),$async$pi)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dt0(s,a9))
x=29
break
case 30:b0=a7
$.iO().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.dt1(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$pi,w)},
AH(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$AH=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.dsB(s))
x=!k.ia(new A.aG(Date.now(),0,!1).a3())?3:4
break
case 3:x=5
return A.c(s.At(!0),$async$AH)
case 5:if(s.c==null){x=1
break}s.n(new B.dsC(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.iw(),$async$AH)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aO(f)
h=$.iO()
h.m(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dsD(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.brC(q)
if(g==null){s.n(new B.dsE(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bQ6(g)
x=13
return A.c(s.tN(),$async$AH)
case 13:x=1
break
case 12:u=15
s.n(new B.dsF(s))
x=18
return A.c(A.uA(r,C.lK,"_self"),$async$AH)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dsG(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aO(e)
h=$.iO()
h.m(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.At(!0),$async$AH)
case 19:if(s.c==null){x=1
break}s.n(new B.dsH(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AH,w)},
At(d){return this.d73(!0)},
d73(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$At=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.LG(p.a,!0,n)
r.k4=q
u=3
x=6
return A.c(q,$async$At)
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
m=r.k4
l=q
if(m==null?l==null:m===l)r.k4=null
x=s.pop()
break
case 5:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$At,w)},
LG(d,e,f){return this.d7a(d,!0,f)},
d7a(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$LG=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.PG(d,f),$async$LG)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.iO().m(C.aJ,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.f2(C.DG,null,l),$async$LG)
case 12:case 11:x=8
break
case 5:x=2
break
case 8:++n
x=3
break
case 4:x=p?13:14
break
case 13:m=s.dx
if((m==null?null:m.a)===f)s.dx=null
s.fr=s.dy=null
x=15
return A.c(s.YJ(),$async$LG)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LG,w)},
bOr(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bOr=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcj_()
v=B.Ds(new B.dst(u),u.gcfT(),new B.dsu(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOr,w)},
ar3(){var x=0,w=A.l(y.H),v=this
var $async$ar3=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acC(new B.dsn(),A.dK([v.gcj_(),v.gcfT()],y.N)),$async$ar3)
case 2:return A.j(null,w)}})
return A.k($async$ar3,w)},
bOs(){var x=0,w=A.l(y.N),v,u=this
var $async$bOs=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Ds(new B.dsv(u),null,new B.dsw(),u.gclN())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOs,w)},
YJ(){var x=0,w=A.l(y.H),v=this
var $async$YJ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acC(new B.dso(),A.dK([v.gclN()],y.N)),$async$YJ)
case 2:return A.j(null,w)}})
return A.k($async$YJ,w)},
brC(d){var x=A.bI_(d),w=x==null?null:C.b.F(x)
return w==null||w.length===0?null:w},
bQ6(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcj_(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e77(D.R9,this.fx,"product-"+x)},
gcfT(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e77(D.R9,this.fx,x)},
gclN(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e77(D.aPS,this.fx,x)},
cgY(d){var x,w=Date.now(),v=C.h.iZ($.pC().mZ(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cfI(d){var x=B.dUF(d)
if(x!=null)return x
return d==null||C.b.F(d).length===0?null:D.jm},
buP(d,e){var x,w=d.a
if(w===401)return D.jl
x=B.dUF(d.b)
if(x!=null)return x
if(w===404)return D.h9
return e},
doq(d,e){switch(e){case D.jl:return d.gamL()
case D.tg:return d.gX9()
case D.th:return d.gX_()
case D.ti:return d.gX7()
case D.tj:return d.gX2()
case D.tk:return d.gWZ()
case D.xu:return d.gX4()
case D.h9:return d.gKy()
case D.EZ:return d.gX0()
case D.Ra:return d.gamO()
case D.jm:return d.gWX()
case D.xt:return d.gX1()
case D.is:return d.gamP()
case null:case void 0:return null}},
bul(d){return this.dhP(d)},
dhP(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bul=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gEJ()
else t=u.gh8()&&u.ghz()
if(!t){v=null
x=1
break}x=3
return A.c(u.AC(d),$async$bul)
case 3:s=f
if(r.f!=null)r=u.gEJ()
else r=u.gh8()&&u.ghz()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bul,w)},
AC(d){return this.dd4(d)},
dd4(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$AC=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.avy()
v=null
x=1
break}r=s.d
if(r==null){v=null
x=1
break}case 3:switch(b4){case"GAME_READY":x=5
break
case"SPIN_RECOVERY_REQUEST":x=6
break
case"SPIN_RETRY_REQUEST":x=7
break
case"SPIN_ACK_REQUEST":x=8
break
case"GO_DEPOSIT":x=9
break
case"GO_WITHDRAW":x=10
break
case"GO_TRANSACTIONS":x=11
break
case"SPIN_REQUEST":x=12
break
case"BALANCE_REQUEST":x=13
break
case"RTP_REQUEST":x=14
break
case"TRANSACTION_REQUEST":x=15
break
default:x=16
break}break
case 5:v=s.vz()
x=1
break
case 6:case 7:case 8:k=s.x
k===$&&A.e()
if(k.f==null){v=null
x=1
break}u=18
x=b4==="SPIN_ACK_REQUEST"?21:22
break
case 21:x=23
return A.c(k.ax_(A.bb(c0.i(0,"operationId"))),$async$AC)
case 23:p=A.a_(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.Kz(b4==="SPIN_RETRY_REQUEST"?A.bb(c0.i(0,"operationId")):null),$async$AC)
case 24:q=c2
p=A.q(y.N,y.z)
J.dz(p,"type","SPIN_RECOVERY_RESULT")
J.fz(p,q)
v=p
x=1
break
u=2
x=20
break
case 18:u=17
b5=t.pop()
v=A.a_(["type",b4==="SPIN_ACK_REQUEST"?"SPIN_ACK_ERROR":"SPIN_RECOVERY_ERROR","message","\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u7a0d\u5f8c\u91cd\u65b0\u67e5\u8a62\u3002"],y.N,y.z)
x=1
break
x=20
break
case 17:x=2
break
case 20:x=4
break
case 9:p=s.c
if(p!=null)A.aJ(p,!1).f.aK(G.p1,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aJ(p,!1).f.aK(M.Bj,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aJ(p,!1).f.aK(N.qO,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a7O(c0.i(0,"betIndex"),4)
else{b3=A.lG(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.df(b3)}o=a5
a6=A.lG(c0.i(0,"betAmount"))
n=a6==null?null:a6
if(o==null||n==null){p=A.a_(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=p
x=1
break}b3=r.a
a7=A.b6(c0.i(0,"mode"))
if(a7==null)a7="REAL"
a8=A.b6(c0.i(0,"clientSeed"))
if(c0.i(0,"nonce")==null)a9=null
else a9=p.f!=null?""+A.a7O(c0.i(0,"nonce"),9007199254740991):J.as(c0.i(0,"nonce"))
x=29
return A.c(p.DT(n,o,A.b6(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$AC)
case 29:m=c2
l=J.ax(m,"data")
if(J.p(J.ax(m,"success"),!0)&&y.P.b(l)){k=A.q(y.N,y.z)
J.dz(k,"type","SPIN_RESULT")
J.fz(k,l)
v=k
x=1
break}p=J.ax(m,"message")
p=A.a_(["type","SPIN_ERROR","message",J.as(p==null?"spin failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=28
break
case 26:u=25
b6=t.pop()
j=A.u(b6)
p=s.x
p===$&&A.e()
v=A.a_(["type","SPIN_ERROR","message",p.f!=null?"\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u5148\u67e5\u8a62\u4e0a\u4e00\u5c40\u3002":J.as(j)],y.N,y.z)
x=1
break
x=28
break
case 25:x=2
break
case 28:x=4
break
case 13:u=31
p=s.x
p===$&&A.e()
x=34
return A.c(p.jU(),$async$AC)
case 34:i=c2
if(J.p(J.ax(i,"success"),!0)){p=y.h
h=p.a(J.ax(i,"data"))
i=h
p=p.a(i==null?null:J.ax(i,"userInfo"))
b0=p==null?h:p
g=b0==null?A.q(y.N,y.z):b0
p=A.lG(J.ax(g,"balance"))
if(p==null)p=null
p=A.a_(["type","BALANCE_RESULT","balance",p==null?0:p],y.N,y.z)
v=p
x=1
break}p=J.ax(i,"message")
p=A.a_(["type","BALANCE_ERROR","message",J.as(p==null?"getCurrentUser failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=33
break
case 31:u=30
b7=t.pop()
f=A.u(b7)
p=A.a_(["type","BALANCE_ERROR","message",J.as(f)],y.N,y.z)
v=p
x=1
break
x=33
break
case 30:x=2
break
case 33:x=4
break
case 14:u=36
x=39
return A.c(s.ZD(),$async$AC)
case 39:e=c2
if(e!=null){p=A.a_(["type","RTP_RESULT","data",e],y.N,y.z)
v=p
x=1
break}p=A.a_(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=p
x=1
break
u=2
x=38
break
case 36:u=35
b8=t.pop()
d=A.u(b8)
p=A.a_(["type","RTP_ERROR","message",J.as(d)],y.N,y.z)
v=p
x=1
break
x=38
break
case 35:x=2
break
case 38:x=4
break
case 15:u=41
p=A.lG(c0.i(0,"page"))
b1=p==null?null:C.k.df(p)
a0=b1==null?1:b1
p=A.lG(c0.i(0,"size"))
b2=p==null?null:C.k.df(p)
a1=b2==null?10:b2
p=s.x
p===$&&A.e()
x=44
return A.c(p.adB(a0,a1),$async$AC)
case 44:a2=c2
if(J.p(J.ax(a2,"success"),!0)){p=A.a_(["type","TRANSACTION_RESULT","data",J.ax(a2,"data")],y.N,y.z)
v=p
x=1
break}p=J.ax(a2,"message")
p=A.a_(["type","TRANSACTION_ERROR","message",J.as(p==null?"getTransactions failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=43
break
case 41:u=40
b9=t.pop()
a3=A.u(b9)
p=A.a_(["type","TRANSACTION_ERROR","message",J.as(a3)],y.N,y.z)
v=p
x=1
break
x=43
break
case 40:x=2
break
case 43:x=4
break
case 16:v=null
x=1
break
case 4:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AC,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gckz())
w=x.y
if(w!=null)w.q()
w=x.p1
if(w!=null)w.$0()
w=x.p2
if(w!=null)w.$0()
if(!x.go)x.At(!0)
x.a5()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
if(t.Q){x=t.d
x=x==null?s:x.b
return A.bN(A.kS(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dC(!0,!0,!0,!0,C.I,!1,A.aM(A.b4(A.w(A.a([A.d(r.gXa(),s,s,s,s,s,s,C.az,s,s),C.a7,A.c7(A.d(r.gyT(),s,s,s,s,s,s,s,s,s),D.c54,new B.dt2(t,d),s)],y.p),C.l,s,C.e,C.H,0,C.j),C.q,s,C.w,s,s,C.aU,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbwg()
v=t.y
v.toString
return new B.ail(x,r,v,new B.dt3(t),t.gdp8(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.v(v,A.a([w,A.eB(0,A.ij(C.bF,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbQZ(),s,s,s,s,s,s,!1,C.cd),108,s,0,s,s,75)],x))
else v.push(t.cUP(d))
if(u)v.push(new A.dC(!0,!0,!0,!0,C.I,!1,new A.c9(C.hB,s,s,A.aR(s,s,s,s,D.aUm,s,s,t.gbQZ(),s,s,s,s,r.giO(),s),s),s))
return A.bN(s,D.ayA,new A.cX(C.aT,s,C.aQ,C.q,v,s),s,s,s,s,s)},
cUP(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
a0.toString
x=e.d
w=e.db
v=e.e
u=w==null
t=(u?d:w.c)===!0
if(e.a.d!=null)if(e.ok==null){s=!0
if(!e.k2)if(!e.id)if(!e.fy)r=t&&e.dy==null
else r=s
else r=s
else r=s
s=r}else s=!1
else s=!1
if(s){u=e.fy?a0.gKx():a0.gWY()
if(e.fy){a0=a0.gKx()
r=A.t(a1).ok.y
a0=new A.J(C.aU,A.d(a0,d,d,d,d,d,r==null?d:r.a0(C.M.B(0.78)),C.az,d,d),d)}else a0=D.bIL
return A.aM(A.S(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.b.F(A.b(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.b.F(A.b(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbXV())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bDv(r,p,l,k===!0,u===!0,!j,i)
g=e.doq(a0,i)
if(e.fy)f=a0.gKx()
else f=j?d:a0.gamH()
u=x==null?d:x.b
a0=u==null?a0.gamM():u
u=g==null
r=u?f:g
return new B.aH9(a0,h,q,m,r,!u,!t,new B.ds8(e,h),new B.ds9(e),d)},
dgH(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aJ(x,!1).f.aK(C.cS,y.X)
return
case 2:w.atV()
return
case 3:x=w.c
x.toString
A.aJ(x,!1).f.aK(G.p1,y.X)
return
case 4:w.vO()
return
case 5:w.AH()
return
case 6:w.bPS()
return
case 0:return}},
atV(){var x=0,w=A.l(y.H),v,u=this,t
var $async$atV=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aJ(t,!1).f.aK(C.oC,y.X),$async$atV)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bPS(),$async$atV)
case 4:case 1:return A.j(v,w)}})
return A.k($async$atV,w)},
avy(){var x=0,w=A.l(y.H),v,u=this
var $async$avy=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.a_v(),$async$avy)
case 3:case 1:return A.j(v,w)}})
return A.k($async$avy,w)},
a_v(){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_v=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.At(!0),$async$a_v)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).qJ(),$async$a_v)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aJ(t,!1).f.ie("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$a_v,w)},
c8n(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.a9
u=b.G.window.navigator.userAgent
x=$.evo()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.ah.y2$.push(new B.dsb(w,v,t))
return C.AE}u=w.ccY(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.aiM(u,x,w.gdCm(),null)},
ccY(d,e){var x,w="/games/"+d,v=C.b.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dCn(){new B.dsS(this).$0()}}
B.aH9.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dC(!0,!0,!0,!0,C.I,!1,A.d2(new B.bDw(this,x,A.t(d),this.d9a(x))),null)},
d9a(d){switch(this.d.gqQ().a){case 1:return d.gamK()
case 2:return d.gRj()
case 3:return d.gX6()
case 4:return d.gX5()
case 5:return d.gxk()
case 6:return d.gamJ()
case 0:return null}}}
B.alO.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a0(C.M.B(0.58))
u=A.P(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aX(C.M,C.S)
return new A.J(S.eL,A.z(A.a([u,C.ah,new A.e3(1,C.b6,A.d(this.d,x,x,x,x,x,v,C.jQ,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aHd.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aHd&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.b.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
A(){var x=A.q(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a2<n,@>?>(a2<n,@>)"])
B.bDM.prototype={
$1(d){return C.b.cl(C.h.iZ(d,16),2,"0")},
$S:42}
B.dqK.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dqL.prototype={
$1(d){var x=this.a
if(x.ghL())x.tZ(x.gbwu())
else x.clQ()},
$S:2}
B.dqC.prototype={
$1(d){var x=this.a
if(x.gfg()&&this.b.c!=null)this.b.hp(x)},
$S:2}
B.dqs.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tO()
x.e=x.x=x.w=x.r=null},
$S:0}
B.dqJ.prototype={
$0(){var x=this.a
x.ax=this.b===C.cz
x.as=!1
x.tO()},
$S:0}
B.dqD.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.dqE.prototype={
$0(){return this.a.cc7(this.b)},
$S:0}
B.dqF.prototype={
$0(){return this.a.as=!1},
$S:0}
B.dqz.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dqA.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dqB.prototype={
$0(){var x,w,v,u,t=this,s=null,r=t.b,q=t.a
r.e=q.a
r.f=q.b
x=r.r=q.d
r.w=t.c
w=r.x=t.d
v=x==null
u=!0
if((v?s:x.r)===!0)if((v?s:x.y)===!0){if(w==null)x=s
else{x=w.b
x=x==null?s:F.jP.t(0,x.a)}if(x!==!0){x=r.x
w=x==null
if(w)v=s
else{v=x.b
v=v==null?s:v.b}if(v!==!0){if(w)x=s
else{x=x.b
x=x==null?s:x.f}x=x!=null}else x=u}else x=u}else x=u
else x=u
if(x)r.tO()
q=q.c
if(q!=null)r.cc7(q)},
$S:0}
B.dqn.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.c,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.bg(A.a([A.aI(A.d(s.gcr(),t,t,t,t,t,t,t,t,t),t,t,t,new B.dql(v),t,t),A.c7(A.d(s.gjD(),t,t,t,t,t,t,t,t,t),D.c2x,new B.dqm(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.dql.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.dqm.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gN()&&w.ax&&x.b.an().gN()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.dqk.prototype={
$1(d){return this.cBP(d)},
cBP(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.a_D())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.edG()
k=h.a.c
j=g.e
l=E.edB(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.c,y.J)
x=3
return A.c(h.av7(d,m.gOu(),m.adc(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghL()||d!==h.ay)A.U(C.am)
u=5
x=8
return A.c(g.c_F(r),$async$$1)
case 8:q=a1
if(!h.ghL()||d!==h.ay)A.U(C.am)
h.n(new B.dqi(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghL()||d!==h.ay)A.U(C.am)
x=9
return A.c(g.e6U(),$async$$1)
case 9:n=a1
if(!h.ghL()||d!==h.ay)A.U(C.am)
h.n(new B.dqj(h,n))
A.zN(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:62}
B.dqi.prototype={
$0(){var x=this.a
x.w=this.b
x.tO()},
$S:0}
B.dqj.prototype={
$0(){var x=this.a
x.w=this.b
x.tO()},
$S:0}
B.dqf.prototype={
$1(d){return this.cBO(d)},
cBO(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dNj(r.a),$async$$1)
case 3:if(!t.ghL()||d!==t.ay)A.U(C.am)
if(!t.ghL()||d!==t.ay)A.U(C.am)
t.n(new B.dqe(t))
x=4
return A.c(t.vR(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dqe.prototype={
$0(){return this.a.w=null},
$S:0}
B.dqy.prototype={
$1(d){return this.cBS(d)},
cBS(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Du())
t=l.c
t.toString
t=A.f(t,C.c,y.J)
t.toString
x=3
return A.c(k.cyn(),$async$$1)
case 3:s=f
if(!l.ghL()||d!==l.ay)A.U(C.am)
l.n(new B.dqu(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jP.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.av7(d,t.gV3(),t.gadf()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jP.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dNi(s.a),$async$$1)
case 9:if(!l.ghL()||d!==l.ay)A.U(C.am)
case 8:if(p)o=s.a
else{t=B.edG()
r=l.a.c
q=k.e
t=E.e78(t)
r=E.wq(r)
o=new E.acD(t,E.dP4(q),r)}if(!l.ghL()||d!==l.ay)A.U(C.am)
l.n(new B.dqv(l,o))
x=10
return A.c(k.e1K(o,p),$async$$1)
case 10:n=f
if(!l.ghL()||d!==l.ay)A.U(C.am)
l.n(new B.dqw(l,n))
t=l.z
if(t!=null)t.a7()
m=n.b.dv(new A.aG(Date.now(),0,!1).a3())
t=m.a<0?C.aZ:m
l.z=A.dv(t,new B.dqx(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dqu.prototype={
$0(){this.a.x=this.b},
$S:0}
B.dqv.prototype={
$0(){var x=this.a
x.tO()
x.x=new E.Mj(this.b,null)},
$S:0}
B.dqw.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dqx.prototype={
$0(){var x=this.a
if(x.ghL()&&x.y===this.b)x.n(new B.dqt(x))},
$S:0}
B.dqt.prototype={
$0(){var x=this.a
x.tO()
x.ch=D.Lk},
$S:0}
B.dqr.prototype={
$1(d){return this.cBR(d)},
cBR(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Du())
x=3
return A.c(p.vR(d),$async$$1)
case 3:if(!p.ghL()||d!==p.ay)A.U(C.am)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.ia(new A.aG(Date.now(),0,!1).a3())||!n.b.ia(new A.aG(Date.now(),0,!1).a3())){if(!p.ghL()||d!==p.ay)A.U(C.am)
p.n(new B.dqq(p,t))
x=1
break}if(!p.ghL()||d!==p.ay)A.U(C.am)
p.n(p.gc9o())
p.a.toString
r=A.uA(n.a,C.lK,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghL()||d!==p.ay)A.U(C.am)
if(!q)throw A.o(new E.vd())
x=5
return A.c(p.vR(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dqq.prototype={
$0(){var x=this.a
x.tO()
x.x=this.b
if(x.gbM_()==null&&x.gcbs()==null)x.ch=D.Lk},
$S:0}
B.dqp.prototype={
$1(d){return this.cBQ(d)},
cBQ(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dY7(q.a),$async$$1)
case 3:t=f
if(!s.ghL()||d!==s.ay)A.U(C.am)
s.n(new B.dqo(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dqo.prototype={
$0(){var x=this.a
x.tO()
x.x=new E.Mj(this.b.a,this.c)},
$S:0}
B.dqG.prototype={
$0(){return this.a.a0v(C.oC)},
$S:3}
B.dqH.prototype={
$0(){return this.a.a0v(G.p1)},
$S:3}
B.dqI.prototype={
$0(){var x=this.a;++x.ay
x.tO()
x.a.e5d()},
$S:0}
B.dqg.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dqh.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dV9.prototype={
$1(d){var x,w=this,v=A.iS(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.e6c(d,w.c))return
x=A.GT(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dV8.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dVa.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dVc.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.iS(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.e6c(d,r.c))return
w=A.GT(d.data)
if(!y.f.b(w))return
v=A.q(y.N,y.z)
for(u=w.gei(),u=u.gap(u);u.G();){t=u.gP()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ao("type"))return
new B.dVd(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dVd.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fZ(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.e6c(s.d,s.e)){q=m.i(0,"requestId")
p=A.hp(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dz(p,"requestId",q)
o=A.bK(p)
p=s.e
if(p!=null){B.dQ6(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.iS(n,"Object")
k=s.f
if(p){A.tK(n,"postMessage",o,k,y.X)
B.dQ6(o,k,null)}else{B.dQ6(o,k,null)
b.G.window.postMessage(o,k)}}u=2
x=6
break
case 4:u=3
i=t.pop()
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$0,w)},
$S:49}
B.dVb.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.ds6.prototype={
$1(d){return this.a.$0()},
$S:10}
B.ds7.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:617}
B.dt5.prototype={
$0(){return this.a.gh8()},
$S:1}
B.dt6.prototype={
$0(){return this.a.gh8()},
$S:1}
B.dt7.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gEJ()
else x=x.gh8()&&x.ghz()
return x},
$S:1}
B.dt8.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gEJ()
else w=x.gh8()&&x.ghz()
if(w)x.Zp()},
$S:2}
B.dt4.prototype={
$1(d){return this.a.ckA()},
$S:2}
B.dsR.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dsq.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dsr.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dsa.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dss.prototype={
$0(){return null},
$S:16}
B.dsp.prototype={
$0(){var x=A.lG(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dsx.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.h9},
$S:0}
B.dsy.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.AY(w.b,w.gcu2(),"Telegram Mini App",null,C.iS,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dsz.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.buP(this.b,D.jm)},
$S:0}
B.dsA.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jm},
$S:0}
B.dsc.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.h9},
$S:0}
B.dsd.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.h9},
$S:0}
B.dse.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dsf.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.dsg.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.dsh.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jm:D.h9},
$S:0}
B.dsi.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jm:x},
$S:0}
B.dsj.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.is},
$S:0}
B.dsk.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cfI(x.r)
if(w==null)x=x.b===!0?null:D.jm
else x=w
v.ok=x},
$S:0}
B.dsl.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buP(this.b,D.jm)},
$S:0}
B.dsm.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jm},
$S:0}
B.dsI.prototype={
$0(){return this.a.ok=D.h9},
$S:0}
B.dsJ.prototype={
$0(){return this.a.ok=D.h9},
$S:0}
B.dsK.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dsL.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jl},
$S:0}
B.dsM.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jl},
$S:0}
B.dsN.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dsO.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Rg?D.tj:D.EZ},
$S:0}
B.dsP.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dsQ.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.xt},
$S:0}
B.dsU.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.is},
$S:0}
B.dsV.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.dsW.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.dsX.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.is},
$S:0}
B.dsY.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.is},
$S:0}
B.dsZ.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.dt_.prototype={
$0(){var x=this.a
x.f=x.c8n()
x.k2=!1},
$S:0}
B.dt0.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buP(this.b,D.is)},
$S:0}
B.dt1.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.is},
$S:0}
B.dsB.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dsC.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.is},
$S:0}
B.dsD.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jl},
$S:0}
B.dsE.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jl},
$S:0}
B.dsF.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dsG.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dsH.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.is},
$S:0}
B.dst.prototype={
$0(){return this.a.cgY("game-access")},
$S:28}
B.dsu.prototype={
$2(d,e){return $.iO().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:40}
B.dsn.prototype={
$2(d,e){return $.iO().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:40}
B.dsv.prototype={
$0(){return this.a.cgY("game-session")},
$S:28}
B.dsw.prototype={
$2(d,e){return $.iO().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:40}
B.dso.prototype={
$2(d,e){return $.iO().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:40}
B.dt2.prototype={
$0(){if(this.a.gh8())A.aJ(this.b,!1).f.gkY().hV(0,A.a([A.ie(null,null)],y.Q))},
$S:0}
B.dt3.prototype={
$0(){return this.a.gh8()},
$S:1}
B.ds8.prototype={
$0(){return this.a.dgH(this.b.gqQ())},
$S:0}
B.ds9.prototype={
$0(){this.a.bPS()
return null},
$S:0}
B.dsb.prototype={
$1(d){return this.cBT(d)},
cBT(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gh8()&&g.ghz())){x=1
break}u=4
x=7
return A.c(g.w.iw(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gh8()&&g.ghz()))A.U(C.am)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.ii(!0),$async$$1)
case 14:p=a2
if(!(g.gh8()&&g.ghz()))A.U(C.am)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gh8()&&g.ghz()))A.U(C.am)
$.iO().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gh8()&&g.ghz()))A.U(C.am)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a83(q,4)
if(!(g.gh8()&&g.ghz()))A.U(C.am)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.brH()
if(!(g.gh8()&&g.ghz()))A.U(C.am)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh8()&&g.ghz()))A.U(C.am)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.ZD(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.iO().m(C.aJ,"RTP prefetch failed",n,null)
x=18
break
case 15:x=4
break
case 18:u=2
x=6
break
case 4:u=3
d=t.pop()
m=A.u(d)
if(!(g.gh8()&&g.ghz())){x=1
break}$.iO().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gh8()&&g.ghz())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).qJ(),$async$$1)
case 20:if(!g.ghz()){x=1
break}g=g.ccY(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:584}
B.dsS.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.vz(),$async$$0)
case 6:s=e
r=new B.dsT(p,s)
r.$0()
p=y.H
x=7
return A.c(A.f2(D.aKE,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.f2(D.aKm,null,p),$async$$0)
case 8:r.$0()
v=1
x=5
break
case 3:v=2
n=u.pop()
q=A.u(n)
$.iO().m(C.aJ,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:49}
B.dsT.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gEJ()
else x=w.gh8()&&w.ghz()
if(!x)return
w=v.f!=null?w.as:null
B.er0(this.b,w)},
$S:0}
B.bDw.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.d0(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.amF(w)
u=A.G(8)
t=A.aN(C.M.B(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aX(C.M,C.F),C.az,k,k)],q)
if(x.x){w=j.gKw()
p=s.z
w=A.a([H.dZ,A.d(w,k,k,k,k,k,p==null?k:p.a0(C.M.B(0.72)),C.az,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gX8()
if(o)p="-"
o=j.gX3()
m=x.f
if(m==null)m="-"
C.d.v(w,A.a([I.Jx,new B.alO(n,p,k),new B.alO(o,m,k)],q))}C.d.v(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a0(x.w?D.axd:D.ay0)
C.d.v(r,A.a([I.Jx,A.S(k,k,k,A.d(w,k,k,k,k,k,s,C.az,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3n,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bi(C.le,A.a([C.o8,A.d(w.c?j.gamG():j.gWY(),k,k,k,k,k,k,C.az,k,k)],q),C.by,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.az,k,k)}C.d.v(r,A.a([D.bIN,A.c7(o,D.c_0,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqQ()!==D.tl
else w=!1
if(w)C.d.v(r,A.a([H.dZ,A.aI(A.d(j.gamI(),k,k,k,k,k,k,C.az,k,k),D.c_n,k,k,x.z,k,k)],q))
return A.b4(new A.ba(new A.ay(0,1/0,i,1/0),A.aM(A.S(k,k,k,new A.ba(K.Nc,new A.cb(new A.R(D.auo,k,t,u,k,k,C.r),C.au,new A.J(C.aU,A.w(r,C.a8,k,C.e,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c73,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aM4,k,k,C.y)},
$S:102};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.atQ.prototype,"gc9o","tO",1)
x(v,"gclP","clQ",1)
x(v,"gdCC","dCD",0)
w(v,"gbwu","vR",2)
x(v,"gc8s","cZE",0)
x(v,"gcS4","cS5",0)
x(v,"gciw","dve",0)
x(v,"gdCA","dCB",0)
x(v,"gdCx","dCy",0)
x(v=B.au5.prototype,"gckz","ckA",1)
w(v,"gdhO","bul",3)
x(v,"gbQZ","avy",0)
x(v,"gdp8","a_v",0)
x(v,"gdCm","dCn",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bt,[B.bDM,B.dqL,B.dqC,B.dqn,B.dqk,B.dqf,B.dqy,B.dqr,B.dqp,B.dV9,B.dVc,B.ds6,B.ds7,B.dt8,B.dt4,B.dsb])
w(A.eD,[B.pT,B.Dv,B.aH8,B.NM])
w(A.A,[B.bDv,B.aHd])
w(A.K,[B.ail,B.aiM,B.Fl])
w(A.Q,[B.bfz,B.bbo,B.au5])
v(B.atQ,B.bfz)
w(A.bu,[B.dqK,B.dqs,B.dqJ,B.dqD,B.dqE,B.dqF,B.dqz,B.dqA,B.dqB,B.dql,B.dqm,B.dqi,B.dqj,B.dqe,B.dqu,B.dqv,B.dqw,B.dqx,B.dqt,B.dqq,B.dqo,B.dqG,B.dqH,B.dqI,B.dqg,B.dqh,B.dV8,B.dVa,B.dVd,B.dVb,B.dt5,B.dt6,B.dt7,B.dsR,B.dsq,B.dsr,B.dsa,B.dss,B.dsp,B.dsx,B.dsy,B.dsz,B.dsA,B.dsc,B.dsd,B.dse,B.dsf,B.dsg,B.dsh,B.dsi,B.dsj,B.dsk,B.dsl,B.dsm,B.dsI,B.dsJ,B.dsK,B.dsL,B.dsM,B.dsN,B.dsO,B.dsP,B.dsQ,B.dsU,B.dsV,B.dsW,B.dsX,B.dsY,B.dsZ,B.dt_,B.dt0,B.dt1,B.dsB,B.dsC,B.dsD,B.dsE,B.dsF,B.dsG,B.dsH,B.dst,B.dsv,B.dt2,B.dt3,B.ds8,B.ds9,B.dsS,B.dsT])
w(A.c6,[B.dsu,B.dsn,B.dsw,B.dso,B.bDw])
w(A.x,[B.aH9,B.alO])
x(B.bfz,A.ew)})()
A.b0(b.typeUniverse,JSON.parse('{"ail":{"K":[],"m":[]},"atQ":{"Q":["ail"],"ew":[]},"aiM":{"K":[],"m":[]},"bbo":{"Q":["aiM"]},"Fl":{"K":[],"m":[]},"au5":{"Q":["Fl"]},"aH9":{"x":[],"m":[]},"alO":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.C
return{J:x("bv"),u:x("B<a2<n,@>?>"),T:x("Dw"),w:x("lS"),Q:x("v<bU<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a2<n,@>"),f:x("a2<@,@>"),a:x("b8"),A:x("Mu"),N:x("n"),x:x("UY"),r:x("fx"),E:x("ec"),O:x("H<n>"),y:x("F"),z:x("@"),S:x("y"),h:x("a2<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.auo=new A.a3(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.axd=new A.a3(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.ay0=new A.a3(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.ayA=new A.a3(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aKm=new A.bG(175e4)
D.aKE=new A.bG(75e4)
D.aM4=new A.ar(20,64,20,24)
D.R9=new B.aH8(0,"purchase")
D.aPS=new B.aH8(1,"session")
D.jl=new B.pT(0,"signInRequired")
D.tg=new B.pT(1,"telegramAccountNotLinked")
D.jm=new B.pT(10,"requestFailed")
D.xt=new B.pT(11,"purchaseFailed")
D.is=new B.pT(12,"sessionFailed")
D.th=new B.pT(2,"insufficientBalance")
D.ti=new B.pT(3,"walletInactive")
D.tj=new B.pT(4,"refundPending")
D.tk=new B.pT(5,"accessExpired")
D.xu=new B.pT(6,"accessRequired")
D.h9=new B.pT(7,"gameUnavailable")
D.EZ=new B.pT(8,"accessNotActive")
D.Ra=new B.pT(9,"sessionDenied")
D.Rb=new B.Dv(0,"none")
D.aPT=new B.Dv(1,"signIn")
D.aPU=new B.Dv(2,"bindTelegram")
D.aPV=new B.Dv(3,"topUp")
D.aPW=new B.Dv(4,"purchase")
D.aPX=new B.Dv(5,"openGame")
D.tl=new B.Dv(6,"retry")
D.aUm=new A.at(C.kr,null,C.M,null,null)
D.bsl=new A.J(C.X,C.bW,null)
D.aty=new A.o5(2.5,null,null,null,null,null,null,null,null,null)
D.bIL=new A.ad(28,28,D.aty,null)
D.bIN=new A.ad(null,22,null,null)
D.c_0=new A.H("slot-game-access-primary",y.O)
D.c_n=new A.H("slot-game-access-refresh",y.O)
D.c2x=new A.H("gameV2Confirm",y.O)
D.c2y=new A.H("gameV2Message",y.O)
D.c2z=new A.H("gameV2Page",y.O)
D.c3n=new A.H("slot-game-access-message",y.O)
D.c54=new A.H("retiredSlotHome",y.O)
D.c73=new A.H("slot-game-access-gate",y.O)
D.ahj=new B.NM(0,"request")
D.ahk=new B.NM(1,"pending")
D.ahl=new B.NM(2,"launchPending")
D.ahm=new B.NM(3,"storage")
D.Lj=new B.NM(4,"unavailable")
D.Lk=new B.NM(5,"expired")})();(function staticFields(){$.acB=function(){var x=y.N
return A.q(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fdH","evo",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"feR","iO",()=>A.b7("SlotGamePage"))})()};
(a=>{a["Rj6JfV8cC78Ribf3BmlXOYcY28U="]=a.current})($__dart_deferred_initializers__);