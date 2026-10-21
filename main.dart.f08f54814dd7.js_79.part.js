((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,H,B={
ebG(){var x,w,v=$.px(),u=J.fg(16,y.S)
for(x=0;x<16;++x)u[x]=v.mX(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.E(u,new B.bDb(),A.W(u).k("E<1,n>")).kU(0)
return C.b.ai(w,0,8)+"-"+C.b.ai(w,8,12)+"-"+C.b.ai(w,12,16)+"-"+C.b.ai(w,16,20)+"-"+C.b.bu(w,20)},
bDb:function bDb(){},
dSN(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.ta
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.tb
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.tc
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.td
if(C.b.t(x,"ACCESS_EXPIRED"))return D.te
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.xt
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hb
return null},
e57(d,e,f){var x=e==null?null:C.b.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pO:function pO(d,e){this.a=d
this.b=e},
Do:function Do(d,e){this.a=d
this.b=e},
aGN:function aGN(d,e){this.a=d
this.b=e},
bCV:function bCV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
NA:function NA(d,e){this.a=d
this.b=e},
ai5:function ai5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
atx:function atx(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
dp7:function dp7(d){this.a=d},
dp8:function dp8(d){this.a=d},
dp_:function dp_(d,e){this.a=d
this.b=e},
doQ:function doQ(d){this.a=d},
dp6:function dp6(d,e){this.a=d
this.b=e},
dp0:function dp0(d){this.a=d},
dp1:function dp1(d,e){this.a=d
this.b=e},
dp2:function dp2(d){this.a=d},
doX:function doX(d){this.a=d},
doY:function doY(d){this.a=d},
doZ:function doZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doL:function doL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
doJ:function doJ(d){this.a=d},
doK:function doK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doI:function doI(d){this.a=d},
doG:function doG(d,e){this.a=d
this.b=e},
doH:function doH(d,e){this.a=d
this.b=e},
doD:function doD(d){this.a=d},
doC:function doC(d){this.a=d},
doW:function doW(d){this.a=d},
doS:function doS(d,e){this.a=d
this.b=e},
doT:function doT(d,e){this.a=d
this.b=e},
doU:function doU(d,e){this.a=d
this.b=e},
doV:function doV(d,e){this.a=d
this.b=e},
doR:function doR(d){this.a=d},
doP:function doP(d){this.a=d},
doO:function doO(d,e){this.a=d
this.b=e},
doN:function doN(d){this.a=d},
doM:function doM(d,e,f){this.a=d
this.b=e
this.c=f},
dp3:function dp3(d){this.a=d},
dp4:function dp4(d){this.a=d},
dp5:function dp5(d){this.a=d},
doE:function doE(d){this.a=d},
doF:function doF(d){this.a=d},
bf6:function bf6(){},
f1P(d,e,f){var x=b.G,w=A.dQ(new B.dTh(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dTg(w)},
f1Q(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dQ(new B.dTk(u,new B.dTi(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dTj(w,x)},
e4d(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.iw(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
ep1(d,e){B.dOi(A.bI(d),b.G.window.location.origin,e)},
dOi(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iw(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.b.aQ(u,e))v=!A.oD(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dTh:function dTh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTg:function dTg(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTk:function dTk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTl:function dTl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dTj:function dTj(d,e){this.a=d
this.b=e},
aiw:function aiw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baX:function baX(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dqu:function dqu(d){this.a=d},
dqv:function dqv(d){this.a=d},
egQ(d,e){return new B.F8(d,e,null)},
F8:function F8(d,e,f){this.c=d
this.d=e
this.a=f},
atN:function atN(d,e,f,g){var _=this
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
drt:function drt(d){this.a=d},
dru:function dru(d){this.a=d},
drv:function drv(d){this.a=d},
drw:function drw(d){this.a=d},
drs:function drs(d){this.a=d},
dre:function dre(d){this.a=d},
dqO:function dqO(d,e){this.a=d
this.b=e},
dqP:function dqP(d){this.a=d},
dqy:function dqy(d,e){this.a=d
this.b=e},
dqQ:function dqQ(){},
dqN:function dqN(d,e){this.a=d
this.b=e},
dqV:function dqV(d,e){this.a=d
this.b=e},
dqW:function dqW(d,e){this.a=d
this.b=e},
dqX:function dqX(d,e){this.a=d
this.b=e},
dqY:function dqY(d){this.a=d},
dqA:function dqA(d,e){this.a=d
this.b=e},
dqB:function dqB(d){this.a=d},
dqC:function dqC(d){this.a=d},
dqD:function dqD(d){this.a=d},
dqE:function dqE(d){this.a=d},
dqF:function dqF(d,e){this.a=d
this.b=e},
dqG:function dqG(d,e){this.a=d
this.b=e},
dqH:function dqH(d,e){this.a=d
this.b=e},
dqI:function dqI(d,e){this.a=d
this.b=e},
dqJ:function dqJ(d,e){this.a=d
this.b=e},
dqK:function dqK(d){this.a=d},
dr5:function dr5(d){this.a=d},
dr6:function dr6(d){this.a=d},
dr7:function dr7(d){this.a=d},
dr8:function dr8(d){this.a=d},
dr9:function dr9(d){this.a=d},
dra:function dra(d){this.a=d},
drb:function drb(d,e){this.a=d
this.b=e},
drc:function drc(d,e){this.a=d
this.b=e},
drd:function drd(d){this.a=d},
drh:function drh(d){this.a=d},
dri:function dri(d){this.a=d},
drj:function drj(d){this.a=d},
drk:function drk(d){this.a=d},
drl:function drl(d){this.a=d},
drm:function drm(d,e,f){this.a=d
this.b=e
this.c=f},
drn:function drn(d){this.a=d},
dro:function dro(d,e){this.a=d
this.b=e},
drp:function drp(d){this.a=d},
dqZ:function dqZ(d){this.a=d},
dr_:function dr_(d){this.a=d},
dr0:function dr0(d){this.a=d},
dr1:function dr1(d){this.a=d},
dr2:function dr2(d){this.a=d},
dr3:function dr3(d){this.a=d},
dr4:function dr4(d){this.a=d},
dqR:function dqR(d){this.a=d},
dqS:function dqS(){},
dqL:function dqL(){},
dqT:function dqT(d){this.a=d},
dqU:function dqU(){},
dqM:function dqM(){},
drq:function drq(d,e){this.a=d
this.b=e},
drr:function drr(d){this.a=d},
dqw:function dqw(d,e){this.a=d
this.b=e},
dqx:function dqx(d){this.a=d},
dqz:function dqz(d,e,f){this.a=d
this.b=e
this.c=f},
drf:function drf(d){this.a=d},
drg:function drg(d,e){this.a=d
this.b=e},
aGO:function aGO(d,e,f,g,h,i,j,k,l,m){var _=this
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
bCW:function bCW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
alx:function alx(d,e,f){this.c=d
this.d=e
this.a=f},
aGS:function aGS(d){this.a=d},
eK8(d){var x
if(d==null||d.length===0)return null
x=A.egO().i(0,d)
return(x==null?null:x.e===C.iQ)===!1?x:null},
Dl(d,e,f,g){var x=null
return B.eCo(d,e,f,g)},
eCo(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Dl=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.ack.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.XC():k).$0(),$async$Dl)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.ack.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.qm(s,a0),$async$Dl)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.ack.h(0,a0,q)
x=15
return A.c(s.h8("String",a0,q),$async$Dl)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.qm(s,e),$async$Dl)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.qm(s,e),$async$Dl)
case 21:case 20:case 12:o=d.$0()
$.ack.h(0,a0,o)
x=22
return A.c(s.h8("String",a0,o),$async$Dl)
case 22:n=a2
if(!n){k=A.aB("Game access attempt id was not persisted.")
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
v=$.ack.cX(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Dl,w)},
acl(d,e){var x=null
return B.eCn(d,e)},
eCn(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$acl=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eJ(0)
for(p=J.aY(l);p.F();)$.ack.M(0,p.gO())
v=3
p=m
x=6
return A.c((p==null?A.XC():p).$0(),$async$acl)
case 6:t=g
p=J.aY(l)
case 7:if(!p.F()){x=8
break}s=p.gO()
o=s
t.a.M(0,o)
x=9
return A.c($.XH().M(0,"flutter."+o),$async$acl)
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
return A.k($async$acl,w)}},D,E,F,G,N,O,P,Q,R,S,T,I
J=c[1]
A=c[0]
C=c[2]
K=c[299]
L=c[309]
M=c[318]
H=c[481]
B=a.updateHolder(c[157],B)
D=c[781]
E=c[185]
F=c[782]
G=c[658]
N=c[743]
O=c[619]
P=c[191]
Q=c[783]
R=c[442]
S=c[487]
T=c[457]
I=c[551]
B.pO.prototype={
W(){return"GameAccessIssue."+this.b}}
B.Do.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aGN.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bCV.prototype={
gqK(){var x=this
if(x.b||x.c||!x.a)return D.R9
if(x.f)return D.aQ_
switch(x.r){case D.ji:return D.aPW
case D.ta:return D.aPX
case D.tb:case D.tc:return D.aPY
case D.td:case D.hb:return D.R9
case D.te:case D.xt:case D.EO:case D.R8:case D.jj:case D.xs:return D.tf
case D.iq:return D.tf
case null:case void 0:if(x.e)return D.tf
return x.d?D.aPZ:D.tf}}}
B.NA.prototype={
W(){return"_GameProblem."+this.b}}
B.ai5.prototype={
R(){return new B.atx()},
e0A(){return this.f.$0()},
e47(){return this.r.$0()}}
B.atx.prototype={
gbLK(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dSN(v)}else v=w
return v},
gcaY(){var x,w=this.ch
if(w!=null)return w
x=this.r
if(x!=null)if(x.r)w=!x.x&&!x.y
else w=!0
else w=!1
if(!w){w=this.x
if(w==null)w=null
else{w=w.b
w=w==null?null:w.f}w=w!=null}else w=!0
return w?D.Lg:null},
ghL(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gN()&&x.a.e0A()},
Y(){var x,w,v=this
v.a6()
x=$.am.RG$
v.ax=x==null||x===C.cy
w=A.iJ(v.a.d.a.a,new B.dp7(v))
v.d!==$&&A.aK()
v.d=new E.afA(new A.Dp(w))
v.a.e.a4(v.gclb())
$.am.bs$.push(v)
$.am.y2$.push(new B.dp8(v))},
tK(){var x=this.z
if(x!=null)x.a9()
this.y=this.z=null},
bPC(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gfd())$.am.y2$.push(new B.dp_(v,w))},
clc(){var x=this
if(x.c==null||x.at||x.a.e.gN())return;++x.ay
x.bPC()
x.n(new B.doQ(x))},
ol(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cy)x.bPC()
x.n(new B.dp6(x,d))
if(x.ax&&x.ghL())x.tV(x.gbwf())},
q(){var x=this;++x.ay
x.bPC()
x.tK()
x.a.e.T(x.gclb())
$.am.iT(x)
x.a5()},
cbE(d){var x
this.CW=d instanceof A.ip?B.dSN(d.b):null
if(d instanceof E.pQ)x=D.ahn
else if(d instanceof E.v8)x=D.ahl
else if(d instanceof E.acn)x=D.ahm
else x=d instanceof E.Dn||d instanceof E.a_r?D.Lg:D.ahk
this.ch=x},
tV(d){return this.dzd(d)},
dzd(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tV=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghL()){x=1
break}q=++r.ay
r.n(new B.dp0(r))
u=4
x=7
return A.c(d.$1(q),$async$tV)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghL()&&J.p(q,r.ay))r.n(new B.dp1(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.dp2(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tV,w)},
dBF(){return this.tV(this.gbwf())},
vM(d){return this.dvB(d)},
dvB(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$vM=A.h(function(e,f){if(e===1){u.push(f)
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
return A.c(p.pU(t.a.c),$async$vM)
case 9:g.b=f
v=1
x=8
break
case 6:v=5
i=u.pop()
if(!t.ghL()||d!==t.ay)A.V(C.ap)
x=8
break
case 5:x=1
break
case 8:if(!t.ghL()||d!==t.ay)A.V(C.ap)
p=k.b
n=t.d
m=t.a
x=p==null?10:12
break
case 10:n===$&&A.e()
p=m.c
n=n.a.a
l=n.c
if(!(l instanceof A.fM))A.V(C.x)
x=13
return A.c(E.bDg(n,l.b,new B.doX(t),p),$async$vM)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fM))A.V(C.x)
j=E.ebE(n,l.b,p,new B.doY(t),null,m)
case 11:k.a=j
if(!t.ghL()||d!==t.ay)A.V(C.ap)
if(j==null)throw A.o(new E.Dn())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e79(),$async$vM)
case 14:s=f
if(!t.ghL()||d!==t.ay)A.V(C.ap)
x=15
return A.c(p.cxH(),$async$vM)
case 15:r=f
if(!t.ghL()||d!==t.ay)A.V(C.ap)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.r7(),$async$vM)
case 20:g.d=f
v=1
x=19
break
case 17:v=16
h=u.pop()
q=A.u(h)
if(!t.ghL()||d!==t.ay)A.V(C.ap)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghL()||d!==t.ay)A.V(C.ap)
t.n(new B.doZ(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vM,w)},
av1(d,e,f){return this.d12(d,e,f)},
d12(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$av1=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghL()||d!==r.ay)A.V(C.ap)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cG()
n=r.c
n.toString
m=y.y
p.sf_(A.CV(null,null,C.aj,!0,null,new B.doL(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aL(p.an(),m),$async$av1)
case 6:o=h
if(!r.ghL()||d!==r.ay)A.V(C.ap)
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
return A.k($async$av1,w)},
cYV(){return this.tV(new B.doI(this))},
cRl(){return this.tV(new B.doD(this))},
due(){return this.tV(new B.doW(this))},
dBD(){return this.tV(new B.doP(this))},
dBA(){return this.tV(new B.doN(this))},
a0s(d){return this.do9(d)},
do9(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a0s=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghL()||u.as){x=1
break}++u.ay
u.n(u.gc8U())
t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aL(d,y.X),$async$a0s)
case 3:x=u.ghL()?4:5
break
case 4:x=6
return A.c(u.tV(u.gbwf()),$async$a0s)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a0s,w)},
dBB(d){var x
switch(this.gbLK()){case D.ta:return d.gX7()
case D.tb:return d.gWY()
case D.tc:return d.gX5()
case D.td:return d.gX0()
case D.te:return d.gWX()
case D.xt:return d.gX2()
case D.hb:return d.gKz()
default:break}x=null
switch(this.gcaY()){case D.ahn:x=d.gade()
break
case D.ahl:x=d.gV1()
break
case D.ahm:x=d.gV0()
break
case D.Lh:x=d.gad8()
break
case D.Lg:x=d.gKz()
break
case D.ahk:x=d.gWV()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.c,y.J)
g.toString
x=i.f
w=x==null?h:x.gctn()
if(w==null)w=g.gamL()
if(i.at||!i.a.e.gN()){x=A.kM(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gX8(),h,h,h,h,h,h,C.aC,h,h)
u=i.a.r
return A.bQ(x,h,new A.dC(!0,!0,!0,!0,C.J,!1,A.aM(new A.J(C.aZ,A.w(A.a([v,M.dy,A.c6(A.d(g.gj6(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.I,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbLK()
o=i.dBB(g)
v=y.p
u=A.a([A.d(g.gKx(),h,h,h,h,h,h,h,h,h),C.R],v)
if(!x)C.d.v(u,A.a([i.bQl(g.gX6(),t.b+" USDT"),i.bQl(g.gX1(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(K.eq,A.d(o,D.c2v,h,h,h,h,A.I(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bsj)
n=s==null
if(!n){m=A.d(g.gada(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bQl(g.gu4(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gawU():g.gWZ()
else k=s.c?g.gX_():g.gV1()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.R],v)
if(!j||s.c)k.push(i.Ek("gameV2AcknowledgePurchase",g.gad4(),i.gcRk()))
else k.push(i.Ek("gameV2RetryPurchase",g.gadc(),i.gc80()))
u.push(A.dg(new A.J(C.C,A.w(k,C.a9,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.Ek("gameV2Purchase",g.gX3(),i.gc80()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jL.t(0,m.a))===!0?g.gad7():g.gV0(),h,h,h,h,h,h,h,h,h),C.R],v)
if(i.y!=null&&q)k.push(i.Ek("gameV2Open",g.gxd(),i.gdBC()))
j=!1
if(n)if(q)if((l?h:F.jL.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jL.t(0,m.a))===!0?g.gV2():g.gV3()
k.push(i.Ek("gameV2Reissue",j,i.gci0()))}if((l?h:F.jL.t(0,m.a))!==!0)k.push(i.bKj("gameV2End",g.gad6(),i.gdBz(),!0))
u.push(A.dg(new A.J(C.C,A.w(k,C.a9,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.Ek("gameV2Prepare",g.gV2(),i.gci0()))
if(p===D.ta)u.push(i.Ek("gameV2BindTelegram",g.gRj(),new B.dp3(i)))
if(p===D.tb||p===D.tc)u.push(i.Ek("gameV2TopUp",g.gX4(),new B.dp4(i)))
u.push(i.bKj("gameV2CheckOriginal",g.gad5(),i.gdBE(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bQ(A.kM(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,P.e7N(new B.dp5(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dC(!0,!1,!0,!0,C.J,!1,A.eL(A.a([A.aM(new A.ba(C.vZ,A.w(u,C.a9,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.c2w,Q.Q1,h,h,C.y,!1),h),h,h,h,h,h)},
bQl(d,e){var x=null
return new A.J(R.DK,A.bi(C.ld,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ad,x,4,16),x)},
bKj(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.doE(f)
x=A.fh(A.d(e,w,w,w,w,w,w,C.aC,w,w),new A.K(d,v),x,w)
v=x}else{x=this.as?w:new B.doF(f)
x=A.c6(A.d(e,w,w,w,w,w,w,C.aC,w,w),new A.K(d,v),x,w)
v=x}return new A.J(S.DH,v,w)},
Ek(d,e,f){return this.bKj(d,e,f,!1)}}
B.bf6.prototype={}
B.aiw.prototype={
R(){return new B.baX()}}
B.baX.prototype={
Y(){var x,w,v,u=this
u.a6()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.aK()
u.e=w
v=u.a.d
if(v!=null)w.id=v
v=A.dQ(new B.dqu(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.ayL()
$.BX().a9S(x,new B.dqv(u),!0)},
aV(d){var x,w
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
return new A.R2(x,null,null,C.zR,null)}}
B.F8.prototype={
R(){var x=$.al()
return new B.atN(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.px().mX(1073741824),x.$1$0(y.x))}}
B.atN.prototype={
gh6(){if(this.c!=null){var x=this.z
x=x==null?null:x.gN()
x=x!==!1}else x=!1
return x},
gEK(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gN()
if(x!==!1)if(w.gh6()){v=w.x
v===$&&A.e()
v=v.gN()}}return v},
ghz(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.nR
if(w!=null)w.cZ()
x=u.at
if(x!=null&&u.w.mp(x))return!0}catch(v){if(!(A.u(v) instanceof A.JB))throw v}u.ax=!0
u.CW=null
return!1},
gbw2(){var x,w=this.ay
if(w===$){x=$.al().$1$0(y.T)
this.ay!==$&&A.bf()
w=this.ay=new E.afA(x)}return w},
Y(){var x,w,v,u,t,s=this
s.a6()
x=$.al()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.j8(x.$1$0(y.E),s.w)
x.a4(s.gcjX())
s.y=x}if(v)s.at=s.w.bTE()
x=u?w.dYx(new B.drt(s)):w
s.x!==$&&A.aK()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.a_8()
return}t=s.d=B.eK8(v.c)
if(t==null){s.k2=!1
s.ok=D.hb
return}if(!t.gbXz()){s.k2=!1
s.ok=D.hb
return}if(t.e!==C.iQ){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.f1P(s.gbN2(),v,new B.dru(s))
x=x.f!=null?s.as:null
s.p2=B.f1Q(s.gdgZ(),x,new B.drv(s))
$.am.y2$.push(new B.drw(s))
s.cy=s.ato()
return}},
aZ(){var x,w,v=this
v.bB()
x=v.c
x.toString
v.z=A.cs(x,null,y.X)
x=v.y
if((x==null?null:x.gN())===!1)$.am.y2$.push(new B.drs(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iQ){v.k1=!0
v.f=v.c7W()}},
cjY(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gN())!==!1}if(w)return
B.ep1(A.a_(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dre(x))},
Zq(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Zq=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.arh(),$async$Zq)
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
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
x=14
return A.c(s.w.iu(),$async$Zq)
case 14:r=e
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
if(s.c!=null&&r!=null)try{if(!(s.gh6()&&s.ghz()))A.V(C.ap)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.iL().m(C.aN,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gh6()&&s.ghz())){x=1
break}$.iL().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
x=19
return A.c(s.r.ih(!0),$async$Zq)
case 19:o=e
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dqO(s,n))
try{j=J.a7P(n,4)
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.iL().m(C.aN,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh6()&&s.ghz())s.n(new B.dqP(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zq,w)},
vu(){return this.cVO()},
cVO(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$vu=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.arh(),$async$vu)
case 5:h=b0
x=6
return A.c(s.ZE(),$async$vu)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cId(),$async$vu)
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
case 10:if(!s.gEK())throw A.o(C.ap)
a2=A.mH(h.i(0,"balance"))
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
case 4:if(!(s.gh6()&&s.ghz()))A.V(C.ap)
a3=s.w
d=s.at
d.toString
q=a3.a4q(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.iu(),$async$vu)
case 18:q=b0
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
$.iL().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.iL().m(C.aN,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.Dp(),$async$vu)
case 26:m=b0
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dqy(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.iL().m(C.aN,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
$.iL().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=25
break
case 22:x=2
break
case 25:x=20
break
case 21:u=28
x=31
return A.c(s.r.Dp(),$async$vu)
case 31:j=b0
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
$.iL().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.ZE(),$async$vu)
case 32:g=b0
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
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
return A.k($async$vu,w)},
ZE(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ZE=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.ato()
v=t.ti(C.PG,new B.dqQ())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ZE,w)},
arh(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$arh=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gEK())throw A.o(C.ap)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jU(),$async$arh)
case 3:s=e
if(!u.gEK())throw A.o(C.ap)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dqN(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$arh,w)},
ato(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$ato=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bpI(k.a),$async$ato)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.p_(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.H.az(p,null)
if(!(r.gh6()&&r.ghz()))A.V(C.ap)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.iL().m(C.aN,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
j=t.pop()
n=A.u(j)
$.iL().m(C.t,"_getSlotRtpData failed",n,null)
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
return A.k($async$ato,w)},
a_8(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a_8=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbw2().pU(l),$async$a_8)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dqV(s,r))
x=1
break}s.n(new B.dqW(s,r))
x=8
return A.c(s.tJ(),$async$a_8)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.ip){q=m
$.iL().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dqX(s,q))}else{p=m
o=A.aO(k)
m=$.iL()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dqY(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a_8,w)},
tJ(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tJ=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iQ){if(s.c==null){x=1
break}s.n(new B.dqA(s,f))
x=1
break}if(!f.gbXz()){if(s.c==null){x=1
break}s.n(new B.dqB(s))
x=1
break}if(s.c!=null)s.n(new B.dqC(s))
u=4
x=7
return A.c(s.w.iu(),$async$tJ)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dqD(s))
x=1
break}if(s.c==null){x=1
break}q=s.bro(r)
if(q==null){s.n(new B.dqE(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbw2().a
if(k.a.c instanceof A.fM)A.V(C.x)
x=8
return A.c(k.IR(d),$async$tJ)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dqF(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cfe(p.r)
if(p.b!==!0||o!=null){s.n(new B.dqG(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dqH(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.iq)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dEC(!0),$async$tJ)
case 13:case 12:x=1
break
case 10:s.n(new B.dqI(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.ip){m=k
$.iL().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dqJ(s,m))}else{l=k
$.iL().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dqK(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tJ,w)},
bPx(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.a_8()
return w.tJ()},
vJ(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vJ=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iQ){if(s.c==null){x=1
break}if(h)s.n(new B.dr5(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dr6(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tJ(),$async$vJ)
case 5:x=1
break
case 4:s.n(new B.dr7(s))
u=7
x=10
return A.c(s.w.iu(),$async$vJ)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dr8(s))
x=1
break}if(s.c==null){x=1
break}o=s.bro(p)
if(o==null){s.n(new B.dr9(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bPM(o)
x=13
return A.c(s.tJ(),$async$vJ)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bOa(),$async$vJ)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbw2().a
if(h.a.c instanceof A.fM)A.V(C.x)
x=15
return A.c(h.SF(q,new E.aGR(n)),$async$vJ)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Rd?16:17
break
case 16:x=18
return A.c(s.aqZ(),$async$vJ)
case 18:if(s.c==null){x=1
break}s.n(new B.dra(s))
x=19
return A.c(s.tJ(),$async$vJ)
case 19:x=1
break
case 17:s.n(new B.drb(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.ip?20:22
break
case 20:l=h
$.iL().m(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.buA(l,D.xs)
f=l.b.toUpperCase()
x=k===D.te||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aqZ(),$async$vJ)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.drc(s,k))
x=21
break
case 22:j=h
$.iL().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.drd(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vJ,w)},
pc(d,e){return this.dED(d,!0)},
dEC(d){return this.pc(!0,d)},
dED(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$pc=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iQ){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.drh(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dri(s))
u=4
x=7
return A.c(s.w.iu(),$async$pc)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bro(p)
if(o==null){s.n(new B.drj(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bPM(o)
x=10
return A.c(s.tJ(),$async$pc)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.Ar(!0),$async$pc)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.drk(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bOb(),$async$pc)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.KI(b6.a,new B.aGS(n)),$async$pc)
case 15:m=c2
l=new A.aG(Date.now(),0,!1).a3()
k=m==null?null:E.eoQ(m.w)
j=m==null?null:E.dTP(m.f)
i=m==null?null:E.dTP(m.r)
h=m==null?null:E.dTP(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Rf
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a3().ds(l.a3()).a)<=3e8
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
if(!g)J.c3(a7,"status")
if(!f)J.c3(a7,"session_id")
if(!e)J.c3(a7,"entitlement")
if(!d)J.c3(a7,"game_key")
if(!a0)J.c3(a7,"client_session")
if(!a1)J.c3(a7,"session_started_at")
if(!a2)J.c3(a7,"session_expiry")
if(!a3)J.c3(a7,"launch_expiry")
if(!a4)J.c3(a7,"launch_expiry_bound")
if(!a5)J.c3(a7,"launch_url_untrusted")
a8=a7
$.iL().m(C.t,"game session response rejected: "+J.bh4(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.LF(b6.a,!0,m.a),$async$pc)
case 20:case 19:x=21
return A.c(s.YK(),$async$pc)
case 21:if(s.c==null){x=1
break}s.n(new B.drl(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.Ar(!0),$async$pc)
case 24:x=1
break
case 23:x=b6.e===C.iQ?25:26
break
case 25:s.n(new B.drm(s,k,h))
x=27
return A.c(s.AF(),$async$pc)
case 27:x=1
break
case 26:s.n(new B.drn(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.ip?28:30
break
case 28:a9=a7
$.iL().m(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.YK(),$async$pc)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.pc(!1,!0),$async$pc)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dro(s,a9))
x=29
break
case 30:b0=a7
$.iL().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.drp(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$pc,w)},
AF(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$AF=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.dqZ(s))
x=!k.ia(new A.aG(Date.now(),0,!1).a3())?3:4
break
case 3:x=5
return A.c(s.Ar(!0),$async$AF)
case 5:if(s.c==null){x=1
break}s.n(new B.dr_(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.iu(),$async$AF)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aO(f)
h=$.iL()
h.m(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dr0(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bro(q)
if(g==null){s.n(new B.dr1(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bPM(g)
x=13
return A.c(s.tJ(),$async$AF)
case 13:x=1
break
case 12:u=15
s.n(new B.dr2(s))
x=18
return A.c(A.uw(r,C.lI,"_self"),$async$AF)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dr3(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aO(e)
h=$.iL()
h.m(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.Ar(!0),$async$AF)
case 19:if(s.c==null){x=1
break}s.n(new B.dr4(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AF,w)},
Ar(d){return this.d6e(!0)},
d6e(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$Ar=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.LF(p.a,!0,n)
r.k4=q
u=3
x=6
return A.c(q,$async$Ar)
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
return A.k($async$Ar,w)},
LF(d,e,f){return this.d6l(d,!0,f)},
d6l(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$LF=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.PD(d,f),$async$LF)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.iL().m(C.aN,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.eK(C.Dw,null,l),$async$LF)
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
return A.c(s.YK(),$async$LF)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LF,w)},
bOa(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bOa=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcis()
v=B.Dl(new B.dqR(u),u.gcfp(),new B.dqS(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOa,w)},
aqZ(){var x=0,w=A.l(y.H),v=this
var $async$aqZ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acl(new B.dqL(),A.dK([v.gcis(),v.gcfp()],y.N)),$async$aqZ)
case 2:return A.j(null,w)}})
return A.k($async$aqZ,w)},
bOb(){var x=0,w=A.l(y.N),v,u=this
var $async$bOb=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Dl(new B.dqT(u),null,new B.dqU(),u.gcl9())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOb,w)},
YK(){var x=0,w=A.l(y.H),v=this
var $async$YK=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acl(new B.dqM(),A.dK([v.gcl9()],y.N)),$async$YK)
case 2:return A.j(null,w)}})
return A.k($async$YK,w)},
bro(d){var x=A.bHj(d),w=x==null?null:C.b.G(x)
return w==null||w.length===0?null:w},
bPM(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcis(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e57(D.R7,this.fx,"product-"+x)},
gcfp(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e57(D.R7,this.fx,x)},
gcl9(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e57(D.aPV,this.fx,x)},
cgt(d){var x,w=Date.now(),v=C.h.iX($.px().mX(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cfe(d){var x=B.dSN(d)
if(x!=null)return x
return d==null||C.b.G(d).length===0?null:D.jj},
buA(d,e){var x,w=d.a
if(w===401)return D.ji
x=B.dSN(d.b)
if(x!=null)return x
if(w===404)return D.hb
return e},
dnv(d,e){switch(e){case D.ji:return d.gamJ()
case D.ta:return d.gX7()
case D.tb:return d.gWY()
case D.tc:return d.gX5()
case D.td:return d.gX0()
case D.te:return d.gWX()
case D.xt:return d.gX2()
case D.hb:return d.gKz()
case D.EO:return d.gWZ()
case D.R8:return d.gamM()
case D.jj:return d.gWV()
case D.xs:return d.gX_()
case D.iq:return d.gamN()
case null:case void 0:return null}},
bu5(d){return this.dh_(d)},
dh_(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bu5=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gEK()
else t=u.gh6()&&u.ghz()
if(!t){v=null
x=1
break}x=3
return A.c(u.AA(d),$async$bu5)
case 3:s=f
if(r.f!=null)r=u.gEK()
else r=u.gh6()&&u.ghz()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bu5,w)},
AA(d){return this.dce(d)},
dce(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$AA=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.at(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.asl()
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
case 5:v=s.vu()
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
return A.c(k.awR(A.bb(c0.i(0,"operationId"))),$async$AA)
case 23:p=A.a_(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.KA(b4==="SPIN_RETRY_REQUEST"?A.bb(c0.i(0,"operationId")):null),$async$AA)
case 24:q=c2
p=A.q(y.N,y.z)
J.dx(p,"type","SPIN_RECOVERY_RESULT")
J.fv(p,q)
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
if(p!=null)A.aN(p,!1).f.aL(G.oX,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aN(p,!1).f.aL(N.Bb,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aN(p,!1).f.aL(O.qH,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a7z(c0.i(0,"betIndex"),4)
else{b3=A.mH(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.dd(b3)}o=a5
a6=A.mH(c0.i(0,"betAmount"))
n=a6==null?null:a6
if(o==null||n==null){p=A.a_(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=p
x=1
break}b3=r.a
a7=A.b6(c0.i(0,"mode"))
if(a7==null)a7="REAL"
a8=A.b6(c0.i(0,"clientSeed"))
if(c0.i(0,"nonce")==null)a9=null
else a9=p.f!=null?""+A.a7z(c0.i(0,"nonce"),9007199254740991):J.at(c0.i(0,"nonce"))
x=29
return A.c(p.DU(n,o,A.b6(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$AA)
case 29:m=c2
l=J.ax(m,"data")
if(J.p(J.ax(m,"success"),!0)&&y.P.b(l)){k=A.q(y.N,y.z)
J.dx(k,"type","SPIN_RESULT")
J.fv(k,l)
v=k
x=1
break}p=J.ax(m,"message")
p=A.a_(["type","SPIN_ERROR","message",J.at(p==null?"spin failed":p)],y.N,y.z)
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
v=A.a_(["type","SPIN_ERROR","message",p.f!=null?"\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u5148\u67e5\u8a62\u4e0a\u4e00\u5c40\u3002":J.at(j)],y.N,y.z)
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
return A.c(p.jU(),$async$AA)
case 34:i=c2
if(J.p(J.ax(i,"success"),!0)){p=y.h
h=p.a(J.ax(i,"data"))
i=h
p=p.a(i==null?null:J.ax(i,"userInfo"))
b0=p==null?h:p
g=b0==null?A.q(y.N,y.z):b0
p=A.mH(J.ax(g,"balance"))
if(p==null)p=null
p=A.a_(["type","BALANCE_RESULT","balance",p==null?0:p],y.N,y.z)
v=p
x=1
break}p=J.ax(i,"message")
p=A.a_(["type","BALANCE_ERROR","message",J.at(p==null?"getCurrentUser failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=33
break
case 31:u=30
b7=t.pop()
f=A.u(b7)
p=A.a_(["type","BALANCE_ERROR","message",J.at(f)],y.N,y.z)
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
return A.c(s.ZE(),$async$AA)
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
p=A.a_(["type","RTP_ERROR","message",J.at(d)],y.N,y.z)
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
p=A.mH(c0.i(0,"page"))
b1=p==null?null:C.k.dd(p)
a0=b1==null?1:b1
p=A.mH(c0.i(0,"size"))
b2=p==null?null:C.k.dd(p)
a1=b2==null?10:b2
p=s.x
p===$&&A.e()
x=44
return A.c(p.ady(a0,a1),$async$AA)
case 44:a2=c2
if(J.p(J.ax(a2,"success"),!0)){p=A.a_(["type","TRANSACTION_RESULT","data",J.ax(a2,"data")],y.N,y.z)
v=p
x=1
break}p=J.ax(a2,"message")
p=A.a_(["type","TRANSACTION_ERROR","message",J.at(p==null?"getTransactions failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=43
break
case 41:u=40
b9=t.pop()
a3=A.u(b9)
p=A.a_(["type","TRANSACTION_ERROR","message",J.at(a3)],y.N,y.z)
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
return A.k($async$AA,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gcjX())
w=x.y
if(w!=null)w.q()
w=x.p1
if(w!=null)w.$0()
w=x.p2
if(w!=null)w.$0()
if(!x.go)x.Ar(!0)
x.a5()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
if(t.Q){x=t.d
x=x==null?s:x.b
return A.bQ(A.kM(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dC(!0,!0,!0,!0,C.J,!1,A.aM(A.b5(A.w(A.a([A.d(r.gX8(),s,s,s,s,s,s,C.aC,s,s),C.a8,A.c6(A.d(r.gyP(),s,s,s,s,s,s,s,s,s),D.c4T,new B.drq(t,d),s)],y.p),C.l,s,C.e,C.I,0,C.j),C.q,s,C.w,s,s,C.aZ,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbw2()
v=t.y
v.toString
return new B.ai5(x,r,v,new B.drr(t),t.gdoe(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.v(v,A.a([w,A.ey(0,A.ic(C.bH,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbN2(),s,s,s,s,s,s,!1,C.cb),108,s,0,s,s,75)],x))
else v.push(t.cU5(d))
if(u)v.push(new A.dC(!0,!0,!0,!0,C.J,!1,new A.cd(C.hA,s,s,A.aR(s,s,s,s,D.aUo,s,s,t.gbN2(),s,s,s,s,r.gj6(),s),s),s))
return A.bQ(s,D.ayA,new A.d_(C.aY,s,C.aR,C.q,v,s),s,s,s,s,s)},
cU5(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.fy?a0.gKy():a0.gWW()
if(e.fy){a0=a0.gKy()
r=A.t(a1).ok.y
a0=new A.J(C.aZ,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.G.B(0.78)),C.aC,d,d),d)}else a0=D.bIJ
return A.aM(A.R(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.b.G(A.b(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.b.G(A.b(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbXz())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bCV(r,p,l,k===!0,u===!0,!j,i)
g=e.dnv(a0,i)
if(e.fy)f=a0.gKy()
else f=j?d:a0.gamF()
u=x==null?d:x.b
a0=u==null?a0.gamK():u
u=g==null
r=u?f:g
return new B.aGO(a0,h,q,m,r,!u,!t,new B.dqw(e,h),new B.dqx(e),d)},
dfS(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aN(x,!1).f.aL(C.cQ,y.X)
return
case 2:w.atP()
return
case 3:x=w.c
x.toString
A.aN(x,!1).f.aL(G.oX,y.X)
return
case 4:w.vJ()
return
case 5:w.AF()
return
case 6:w.bPx()
return
case 0:return}},
atP(){var x=0,w=A.l(y.H),v,u=this,t
var $async$atP=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aL(C.oy,y.X),$async$atP)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bPx(),$async$atP)
case 4:case 1:return A.j(v,w)}})
return A.k($async$atP,w)},
asl(){var x=0,w=A.l(y.H),v,u=this
var $async$asl=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.a_u(),$async$asl)
case 3:case 1:return A.j(v,w)}})
return A.k($async$asl,w)},
a_u(){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_u=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.Ar(!0),$async$a_u)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).Hq(),$async$a_u)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aN(t,!1).f.iG("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$a_u,w)},
c7W(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ab
u=b.G.window.navigator.userAgent
x=$.etq()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.am.y2$.push(new B.dqz(w,v,t))
return C.AB}u=w.ccv(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.aiw(u,x,w.gdBo(),null)},
ccv(d,e){var x,w="/games/"+d,v=C.b.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dBp(){new B.drf(this).$0()}}
B.aGO.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dC(!0,!0,!0,!0,C.J,!1,A.d4(new B.bCW(this,x,A.t(d),this.d8k(x))),null)},
d8k(d){switch(this.d.gqK().a){case 1:return d.gamI()
case 2:return d.gRj()
case 3:return d.gX4()
case 4:return d.gX3()
case 5:return d.gxd()
case 6:return d.gamH()
case 0:return null}}}
B.alx.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a1(C.G.B(0.58))
u=A.P(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aX(C.G,C.T)
return new A.J(T.eK,A.z(A.a([u,C.ai,new A.e9(1,C.ba,A.d(this.d,x,x,x,x,x,v,C.jN,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aGS.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aGS&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.b.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
A(){var x=A.q(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a1<n,@>?>(a1<n,@>)"])
B.bDb.prototype={
$1(d){return C.b.ck(C.h.iX(d,16),2,"0")},
$S:41}
B.dp7.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dp8.prototype={
$1(d){var x=this.a
if(x.ghL())x.tV(x.gbwf())
else x.clc()},
$S:2}
B.dp_.prototype={
$1(d){var x=this.a
if(x.gfd()&&this.b.c!=null)this.b.ho(x)},
$S:2}
B.doQ.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tK()
x.e=x.x=x.w=x.r=null},
$S:0}
B.dp6.prototype={
$0(){var x=this.a
x.ax=this.b===C.cy
x.as=!1
x.tK()},
$S:0}
B.dp0.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.dp1.prototype={
$0(){return this.a.cbE(this.b)},
$S:0}
B.dp2.prototype={
$0(){return this.a.as=!1},
$S:0}
B.doX.prototype={
$0(){return this.a.ghL()},
$S:1}
B.doY.prototype={
$0(){return this.a.ghL()},
$S:1}
B.doZ.prototype={
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
x=x==null?s:F.jL.t(0,x.a)}if(x!==!0){x=r.x
w=x==null
if(w)v=s
else{v=x.b
v=v==null?s:v.b}if(v!==!0){if(w)x=s
else{x=x.b
x=x==null?s:x.f}x=x!=null}else x=u}else x=u}else x=u
else x=u
if(x)r.tK()
q=q.c
if(q!=null)r.cbE(q)},
$S:0}
B.doL.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.c,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.bg(A.a([A.aH(A.d(s.gcr(),t,t,t,t,t,t,t,t,t),t,t,t,new B.doJ(v),t,t),A.c6(A.d(s.gjE(),t,t,t,t,t,t,t,t,t),D.c2u,new B.doK(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.doJ.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.doK.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gN()&&w.ax&&x.b.an().gN()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.doI.prototype={
$1(d){return this.cB7(d)},
cB7(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.a_r())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.ebG()
k=h.a.c
j=g.e
l=E.ebB(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.c,y.J)
x=3
return A.c(h.av1(d,m.gOq(),m.ad9(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghL()||d!==h.ay)A.V(C.ap)
u=5
x=8
return A.c(g.c_j(r),$async$$1)
case 8:q=a1
if(!h.ghL()||d!==h.ay)A.V(C.ap)
h.n(new B.doG(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghL()||d!==h.ay)A.V(C.ap)
x=9
return A.c(g.e5N(),$async$$1)
case 9:n=a1
if(!h.ghL()||d!==h.ay)A.V(C.ap)
h.n(new B.doH(h,n))
A.zB(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:67}
B.doG.prototype={
$0(){var x=this.a
x.w=this.b
x.tK()},
$S:0}
B.doH.prototype={
$0(){var x=this.a
x.w=this.b
x.tK()},
$S:0}
B.doD.prototype={
$1(d){return this.cB6(d)},
cB6(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dMl(r.a),$async$$1)
case 3:if(!t.ghL()||d!==t.ay)A.V(C.ap)
if(!t.ghL()||d!==t.ay)A.V(C.ap)
t.n(new B.doC(t))
x=4
return A.c(t.vM(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.doC.prototype={
$0(){return this.a.w=null},
$S:0}
B.doW.prototype={
$1(d){return this.cBa(d)},
cBa(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Dn())
t=l.c
t.toString
t=A.f(t,C.c,y.J)
t.toString
x=3
return A.c(k.cxH(),$async$$1)
case 3:s=f
if(!l.ghL()||d!==l.ay)A.V(C.ap)
l.n(new B.doS(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jL.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.av1(d,t.gV3(),t.gadb()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jL.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dMk(s.a),$async$$1)
case 9:if(!l.ghL()||d!==l.ay)A.V(C.ap)
case 8:if(p)o=s.a
else{t=B.ebG()
r=l.a.c
q=k.e
t=E.e58(t)
r=E.wj(r)
o=new E.acm(t,E.dNi(q),r)}if(!l.ghL()||d!==l.ay)A.V(C.ap)
l.n(new B.doT(l,o))
x=10
return A.c(k.e0I(o,p),$async$$1)
case 10:n=f
if(!l.ghL()||d!==l.ay)A.V(C.ap)
l.n(new B.doU(l,n))
t=l.z
if(t!=null)t.a9()
m=n.b.ds(new A.aG(Date.now(),0,!1).a3())
t=m.a<0?C.b1:m
l.z=A.dA(t,new B.doV(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.doS.prototype={
$0(){this.a.x=this.b},
$S:0}
B.doT.prototype={
$0(){var x=this.a
x.tK()
x.x=new E.M6(this.b,null)},
$S:0}
B.doU.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.doV.prototype={
$0(){var x=this.a
if(x.ghL()&&x.y===this.b)x.n(new B.doR(x))},
$S:0}
B.doR.prototype={
$0(){var x=this.a
x.tK()
x.ch=D.Lh},
$S:0}
B.doP.prototype={
$1(d){return this.cB9(d)},
cB9(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Dn())
x=3
return A.c(p.vM(d),$async$$1)
case 3:if(!p.ghL()||d!==p.ay)A.V(C.ap)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.ia(new A.aG(Date.now(),0,!1).a3())||!n.b.ia(new A.aG(Date.now(),0,!1).a3())){if(!p.ghL()||d!==p.ay)A.V(C.ap)
p.n(new B.doO(p,t))
x=1
break}if(!p.ghL()||d!==p.ay)A.V(C.ap)
p.n(p.gc8U())
p.a.toString
r=A.uw(n.a,C.lI,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghL()||d!==p.ay)A.V(C.ap)
if(!q)throw A.o(new E.v8())
x=5
return A.c(p.vM(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.doO.prototype={
$0(){var x=this.a
x.tK()
x.x=this.b
if(x.gbLK()==null&&x.gcaY()==null)x.ch=D.Lh},
$S:0}
B.doN.prototype={
$1(d){return this.cB8(d)},
cB8(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dX4(q.a),$async$$1)
case 3:t=f
if(!s.ghL()||d!==s.ay)A.V(C.ap)
s.n(new B.doM(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.doM.prototype={
$0(){var x=this.a
x.tK()
x.x=new E.M6(this.b.a,this.c)},
$S:0}
B.dp3.prototype={
$0(){return this.a.a0s(C.oy)},
$S:3}
B.dp4.prototype={
$0(){return this.a.a0s(G.oX)},
$S:3}
B.dp5.prototype={
$0(){var x=this.a;++x.ay
x.tK()
x.a.e47()},
$S:0}
B.doE.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.doF.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dTh.prototype={
$1(d){var x,w=this,v=A.iw(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.e4d(d,w.c))return
x=A.GI(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dTg.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dTi.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dTk.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.iw(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.e4d(d,r.c))return
w=A.GI(d.data)
if(!y.f.b(w))return
v=A.q(y.N,y.z)
for(u=w.geg(),u=u.gap(u);u.F();){t=u.gO()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ao("type"))return
new B.dTl(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dTl.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fX(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.e4d(s.d,s.e)){q=m.i(0,"requestId")
p=A.hC(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dx(p,"requestId",q)
o=A.bI(p)
p=s.e
if(p!=null){B.dOi(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.iw(n,"Object")
k=s.f
if(p){A.DE(n,"postMessage",o,k,y.X)
B.dOi(o,k,null)}else{B.dOi(o,k,null)
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
$S:47}
B.dTj.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dqu.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dqv.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:606}
B.drt.prototype={
$0(){return this.a.gh6()},
$S:1}
B.dru.prototype={
$0(){return this.a.gh6()},
$S:1}
B.drv.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gEK()
else x=x.gh6()&&x.ghz()
return x},
$S:1}
B.drw.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gEK()
else w=x.gh6()&&x.ghz()
if(w)x.Zq()},
$S:2}
B.drs.prototype={
$1(d){return this.a.cjY()},
$S:2}
B.dre.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dqO.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dqP.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dqy.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dqQ.prototype={
$0(){return null},
$S:16}
B.dqN.prototype={
$0(){var x=A.mH(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dqV.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.hb},
$S:0}
B.dqW.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.AO(w.b,w.gctn(),"Telegram Mini App",null,C.iQ,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dqX.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.buA(this.b,D.jj)},
$S:0}
B.dqY.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jj},
$S:0}
B.dqA.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.hb},
$S:0}
B.dqB.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.hb},
$S:0}
B.dqC.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dqD.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ji},
$S:0}
B.dqE.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ji},
$S:0}
B.dqF.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jj:D.hb},
$S:0}
B.dqG.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jj:x},
$S:0}
B.dqH.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.iq},
$S:0}
B.dqI.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cfe(x.r)
if(w==null)x=x.b===!0?null:D.jj
else x=w
v.ok=x},
$S:0}
B.dqJ.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buA(this.b,D.jj)},
$S:0}
B.dqK.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jj},
$S:0}
B.dr5.prototype={
$0(){return this.a.ok=D.hb},
$S:0}
B.dr6.prototype={
$0(){return this.a.ok=D.hb},
$S:0}
B.dr7.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dr8.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.ji},
$S:0}
B.dr9.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.ji},
$S:0}
B.dra.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.drb.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Re?D.td:D.EO},
$S:0}
B.drc.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.drd.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.xs},
$S:0}
B.drh.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.iq},
$S:0}
B.dri.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.drj.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ji},
$S:0}
B.drk.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.iq},
$S:0}
B.drl.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.iq},
$S:0}
B.drm.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.drn.prototype={
$0(){var x=this.a
x.f=x.c7W()
x.k2=!1},
$S:0}
B.dro.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buA(this.b,D.iq)},
$S:0}
B.drp.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.iq},
$S:0}
B.dqZ.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dr_.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.iq},
$S:0}
B.dr0.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ji},
$S:0}
B.dr1.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ji},
$S:0}
B.dr2.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dr3.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dr4.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.iq},
$S:0}
B.dqR.prototype={
$0(){return this.a.cgt("game-access")},
$S:27}
B.dqS.prototype={
$2(d,e){return $.iL().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:39}
B.dqL.prototype={
$2(d,e){return $.iL().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:39}
B.dqT.prototype={
$0(){return this.a.cgt("game-session")},
$S:27}
B.dqU.prototype={
$2(d,e){return $.iL().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:39}
B.dqM.prototype={
$2(d,e){return $.iL().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:39}
B.drq.prototype={
$0(){if(this.a.gh6())A.aN(this.b,!1).f.gkX().i3(0,A.a([A.jg(null,null)],y.Q))},
$S:0}
B.drr.prototype={
$0(){return this.a.gh6()},
$S:1}
B.dqw.prototype={
$0(){return this.a.dfS(this.b.gqK())},
$S:0}
B.dqx.prototype={
$0(){this.a.bPx()
return null},
$S:0}
B.dqz.prototype={
$1(d){return this.cBb(d)},
cBb(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gh6()&&g.ghz())){x=1
break}u=4
x=7
return A.c(g.w.iu(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.ih(!0),$async$$1)
case 14:p=a2
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
$.iL().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gh6()&&g.ghz()))A.V(C.ap)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a7P(q,4)
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.brt()
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.ZE(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.iL().m(C.aN,"RTP prefetch failed",n,null)
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
if(!(g.gh6()&&g.ghz())){x=1
break}$.iL().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gh6()&&g.ghz())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).Hq(),$async$$1)
case 20:if(!g.ghz()){x=1
break}g=g.ccv(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:575}
B.drf.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.vu(),$async$$0)
case 6:s=e
r=new B.drg(p,s)
r.$0()
p=y.H
x=7
return A.c(A.eK(D.aKF,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.eK(D.aKn,null,p),$async$$0)
case 8:r.$0()
v=1
x=5
break
case 3:v=2
n=u.pop()
q=A.u(n)
$.iL().m(C.aN,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:47}
B.drg.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gEK()
else x=w.gh6()&&w.ghz()
if(!x)return
w=v.f!=null?w.as:null
B.ep1(this.b,w)},
$S:0}
B.bCW.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.dh(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.amD(w)
u=A.G(8)
t=A.aL(C.G.B(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aX(C.G,C.B),C.aC,k,k)],q)
if(x.x){w=j.gKx()
p=s.z
w=A.a([H.dW,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.G.B(0.72)),C.aC,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gX6()
if(o)p="-"
o=j.gX1()
m=x.f
if(m==null)m="-"
C.d.v(w,A.a([I.Jp,new B.alx(n,p,k),new B.alx(o,m,k)],q))}C.d.v(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.axd:D.ay0)
C.d.v(r,A.a([I.Jp,A.R(k,k,k,A.d(w,k,k,k,k,k,s,C.aC,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3j,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bi(C.lc,A.a([C.mo,A.d(w.c?j.gamE():j.gWW(),k,k,k,k,k,k,C.aC,k,k)],q),C.bz,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aC,k,k)}C.d.v(r,A.a([D.bIL,A.c6(o,D.c_0,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqK()!==D.tf
else w=!1
if(w)C.d.v(r,A.a([H.dW,A.aH(A.d(j.gamG(),k,k,k,k,k,k,C.aC,k,k),D.c_n,k,k,x.z,k,k)],q))
return A.b5(new A.ba(new A.ay(0,1/0,i,1/0),A.aM(A.R(k,k,k,new A.ba(L.Nb,new A.c8(new A.T(D.auo,k,t,u,k,k,C.r),C.aw,new A.J(C.aZ,A.w(r,C.a9,k,C.e,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c6Q,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aM6,k,k,C.y)},
$S:111};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.atx.prototype,"gc8U","tK",1)
x(v,"gclb","clc",1)
x(v,"gdBE","dBF",0)
w(v,"gbwf","vM",2)
x(v,"gc80","cYV",0)
x(v,"gcRk","cRl",0)
x(v,"gci0","due",0)
x(v,"gdBC","dBD",0)
x(v,"gdBz","dBA",0)
x(v=B.atN.prototype,"gcjX","cjY",1)
w(v,"gdgZ","bu5",3)
x(v,"gbN2","asl",0)
x(v,"gdoe","a_u",0)
x(v,"gdBo","dBp",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bu,[B.bDb,B.dp8,B.dp_,B.doL,B.doI,B.doD,B.doW,B.doP,B.doN,B.dTh,B.dTk,B.dqu,B.dqv,B.drw,B.drs,B.dqz])
w(A.eA,[B.pO,B.Do,B.aGN,B.NA])
w(A.A,[B.bCV,B.aGS])
w(A.L,[B.ai5,B.aiw,B.F8])
w(A.U,[B.bf6,B.baX,B.atN])
v(B.atx,B.bf6)
w(A.bt,[B.dp7,B.doQ,B.dp6,B.dp0,B.dp1,B.dp2,B.doX,B.doY,B.doZ,B.doJ,B.doK,B.doG,B.doH,B.doC,B.doS,B.doT,B.doU,B.doV,B.doR,B.doO,B.doM,B.dp3,B.dp4,B.dp5,B.doE,B.doF,B.dTg,B.dTi,B.dTl,B.dTj,B.drt,B.dru,B.drv,B.dre,B.dqO,B.dqP,B.dqy,B.dqQ,B.dqN,B.dqV,B.dqW,B.dqX,B.dqY,B.dqA,B.dqB,B.dqC,B.dqD,B.dqE,B.dqF,B.dqG,B.dqH,B.dqI,B.dqJ,B.dqK,B.dr5,B.dr6,B.dr7,B.dr8,B.dr9,B.dra,B.drb,B.drc,B.drd,B.drh,B.dri,B.drj,B.drk,B.drl,B.drm,B.drn,B.dro,B.drp,B.dqZ,B.dr_,B.dr0,B.dr1,B.dr2,B.dr3,B.dr4,B.dqR,B.dqT,B.drq,B.drr,B.dqw,B.dqx,B.drf,B.drg])
w(A.ca,[B.dqS,B.dqL,B.dqU,B.dqM,B.bCW])
w(A.x,[B.aGO,B.alx])
x(B.bf6,A.eu)})()
A.b_(b.typeUniverse,JSON.parse('{"ai5":{"L":[],"m":[]},"atx":{"U":["ai5"],"eu":[]},"aiw":{"L":[],"m":[]},"baX":{"U":["aiw"]},"F8":{"L":[],"m":[]},"atN":{"U":["F8"]},"aGO":{"x":[],"m":[]},"alx":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.C
return{J:x("by"),u:x("B<a1<n,@>?>"),T:x("Dp"),w:x("lN"),Q:x("v<bV<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a1<n,@>"),f:x("a1<@,@>"),a:x("b8"),A:x("Mh"),N:x("n"),x:x("UM"),r:x("ft"),E:x("ec"),O:x("K<n>"),y:x("F"),z:x("@"),S:x("y"),h:x("a1<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.auo=new A.a3(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.axd=new A.a3(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.ay0=new A.a3(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.ayA=new A.a3(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aKn=new A.bG(175e4)
D.aKF=new A.bG(75e4)
D.aM6=new A.ar(20,64,20,24)
D.R7=new B.aGN(0,"purchase")
D.aPV=new B.aGN(1,"session")
D.ji=new B.pO(0,"signInRequired")
D.ta=new B.pO(1,"telegramAccountNotLinked")
D.jj=new B.pO(10,"requestFailed")
D.xs=new B.pO(11,"purchaseFailed")
D.iq=new B.pO(12,"sessionFailed")
D.tb=new B.pO(2,"insufficientBalance")
D.tc=new B.pO(3,"walletInactive")
D.td=new B.pO(4,"refundPending")
D.te=new B.pO(5,"accessExpired")
D.xt=new B.pO(6,"accessRequired")
D.hb=new B.pO(7,"gameUnavailable")
D.EO=new B.pO(8,"accessNotActive")
D.R8=new B.pO(9,"sessionDenied")
D.R9=new B.Do(0,"none")
D.aPW=new B.Do(1,"signIn")
D.aPX=new B.Do(2,"bindTelegram")
D.aPY=new B.Do(3,"topUp")
D.aPZ=new B.Do(4,"purchase")
D.aQ_=new B.Do(5,"openGame")
D.tf=new B.Do(6,"retry")
D.aUo=new A.as(C.ko,null,C.G,null,null)
D.bsj=new A.J(C.Y,C.bW,null)
D.aty=new A.o0(2.5,null,null,null,null,null,null,null,null,null)
D.bIJ=new A.ad(28,28,D.aty,null)
D.bIL=new A.ad(null,22,null,null)
D.c_0=new A.K("slot-game-access-primary",y.O)
D.c_n=new A.K("slot-game-access-refresh",y.O)
D.c2u=new A.K("gameV2Confirm",y.O)
D.c2v=new A.K("gameV2Message",y.O)
D.c2w=new A.K("gameV2Page",y.O)
D.c3j=new A.K("slot-game-access-message",y.O)
D.c4T=new A.K("retiredSlotHome",y.O)
D.c6Q=new A.K("slot-game-access-gate",y.O)
D.ahk=new B.NA(0,"request")
D.ahl=new B.NA(1,"pending")
D.ahm=new B.NA(2,"launchPending")
D.ahn=new B.NA(3,"storage")
D.Lg=new B.NA(4,"unavailable")
D.Lh=new B.NA(5,"expired")})();(function staticFields(){$.ack=function(){var x=y.N
return A.q(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fbw","etq",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"fcG","iL",()=>A.b7("SlotGamePage"))})()};
(a=>{a["5cRTrmOBO+rQEaWd1wYE+W4AUlQ="]=a.current})($__dart_deferred_initializers__);