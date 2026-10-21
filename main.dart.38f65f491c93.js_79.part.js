((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,H,B={
ebN(){var x,w,v=$.px(),u=J.fg(16,y.S)
for(x=0;x<16;++x)u[x]=v.mX(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.E(u,new B.bDg(),A.V(u).k("E<1,n>")).kU(0)
return C.b.ai(w,0,8)+"-"+C.b.ai(w,8,12)+"-"+C.b.ai(w,12,16)+"-"+C.b.ai(w,16,20)+"-"+C.b.bu(w,20)},
bDg:function bDg(){},
dST(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.tb
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.tc
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.td
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.te
if(C.b.t(x,"ACCESS_EXPIRED"))return D.tf
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.xq
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hb
return null},
e5d(d,e,f){var x=e==null?null:C.b.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pO:function pO(d,e){this.a=d
this.b=e},
Dm:function Dm(d,e){this.a=d
this.b=e},
aGQ:function aGQ(d,e){this.a=d
this.b=e},
bD_:function bD_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Nz:function Nz(d,e){this.a=d
this.b=e},
ai8:function ai8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
atA:function atA(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
dpd:function dpd(d){this.a=d},
dpe:function dpe(d){this.a=d},
dp5:function dp5(d,e){this.a=d
this.b=e},
doW:function doW(d){this.a=d},
dpc:function dpc(d,e){this.a=d
this.b=e},
dp6:function dp6(d){this.a=d},
dp7:function dp7(d,e){this.a=d
this.b=e},
dp8:function dp8(d){this.a=d},
dp2:function dp2(d){this.a=d},
dp3:function dp3(d){this.a=d},
dp4:function dp4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doR:function doR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
doP:function doP(d){this.a=d},
doQ:function doQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doO:function doO(d){this.a=d},
doM:function doM(d,e){this.a=d
this.b=e},
doN:function doN(d,e){this.a=d
this.b=e},
doJ:function doJ(d){this.a=d},
doI:function doI(d){this.a=d},
dp1:function dp1(d){this.a=d},
doY:function doY(d,e){this.a=d
this.b=e},
doZ:function doZ(d,e){this.a=d
this.b=e},
dp_:function dp_(d,e){this.a=d
this.b=e},
dp0:function dp0(d,e){this.a=d
this.b=e},
doX:function doX(d){this.a=d},
doV:function doV(d){this.a=d},
doU:function doU(d,e){this.a=d
this.b=e},
doT:function doT(d){this.a=d},
doS:function doS(d,e,f){this.a=d
this.b=e
this.c=f},
dp9:function dp9(d){this.a=d},
dpa:function dpa(d){this.a=d},
dpb:function dpb(d){this.a=d},
doK:function doK(d){this.a=d},
doL:function doL(d){this.a=d},
bf9:function bf9(){},
f1Y(d,e,f){var x=b.G,w=A.dR(new B.dTn(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dTm(w)},
f1Z(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dR(new B.dTq(u,new B.dTo(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dTp(w,x)},
e4j(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.ix(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
ep8(d,e){B.dOm(A.bI(d),b.G.window.location.origin,e)},
dOm(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ix(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.b.aQ(u,e))v=!A.oD(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dTn:function dTn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTm:function dTm(d){this.a=d},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTq:function dTq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTr:function dTr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dTp:function dTp(d,e){this.a=d
this.b=e},
aiz:function aiz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb_:function bb_(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dqA:function dqA(d){this.a=d},
dqB:function dqB(d){this.a=d},
egX(d,e){return new B.F7(d,e,null)},
F7:function F7(d,e,f){this.c=d
this.d=e
this.a=f},
atQ:function atQ(d,e,f,g){var _=this
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
drz:function drz(d){this.a=d},
drA:function drA(d){this.a=d},
drB:function drB(d){this.a=d},
drC:function drC(d){this.a=d},
dry:function dry(d){this.a=d},
drk:function drk(d){this.a=d},
dqU:function dqU(d,e){this.a=d
this.b=e},
dqV:function dqV(d){this.a=d},
dqE:function dqE(d,e){this.a=d
this.b=e},
dqW:function dqW(){},
dqT:function dqT(d,e){this.a=d
this.b=e},
dr0:function dr0(d,e){this.a=d
this.b=e},
dr1:function dr1(d,e){this.a=d
this.b=e},
dr2:function dr2(d,e){this.a=d
this.b=e},
dr3:function dr3(d){this.a=d},
dqG:function dqG(d,e){this.a=d
this.b=e},
dqH:function dqH(d){this.a=d},
dqI:function dqI(d){this.a=d},
dqJ:function dqJ(d){this.a=d},
dqK:function dqK(d){this.a=d},
dqL:function dqL(d,e){this.a=d
this.b=e},
dqM:function dqM(d,e){this.a=d
this.b=e},
dqN:function dqN(d,e){this.a=d
this.b=e},
dqO:function dqO(d,e){this.a=d
this.b=e},
dqP:function dqP(d,e){this.a=d
this.b=e},
dqQ:function dqQ(d){this.a=d},
drb:function drb(d){this.a=d},
drc:function drc(d){this.a=d},
drd:function drd(d){this.a=d},
dre:function dre(d){this.a=d},
drf:function drf(d){this.a=d},
drg:function drg(d){this.a=d},
drh:function drh(d,e){this.a=d
this.b=e},
dri:function dri(d,e){this.a=d
this.b=e},
drj:function drj(d){this.a=d},
drn:function drn(d){this.a=d},
dro:function dro(d){this.a=d},
drp:function drp(d){this.a=d},
drq:function drq(d){this.a=d},
drr:function drr(d){this.a=d},
drs:function drs(d,e,f){this.a=d
this.b=e
this.c=f},
drt:function drt(d){this.a=d},
dru:function dru(d,e){this.a=d
this.b=e},
drv:function drv(d){this.a=d},
dr4:function dr4(d){this.a=d},
dr5:function dr5(d){this.a=d},
dr6:function dr6(d){this.a=d},
dr7:function dr7(d){this.a=d},
dr8:function dr8(d){this.a=d},
dr9:function dr9(d){this.a=d},
dra:function dra(d){this.a=d},
dqX:function dqX(d){this.a=d},
dqY:function dqY(){},
dqR:function dqR(){},
dqZ:function dqZ(d){this.a=d},
dr_:function dr_(){},
dqS:function dqS(){},
drw:function drw(d,e){this.a=d
this.b=e},
drx:function drx(d){this.a=d},
dqC:function dqC(d,e){this.a=d
this.b=e},
dqD:function dqD(d){this.a=d},
dqF:function dqF(d,e,f){this.a=d
this.b=e
this.c=f},
drl:function drl(d){this.a=d},
drm:function drm(d,e){this.a=d
this.b=e},
aGR:function aGR(d,e,f,g,h,i,j,k,l,m){var _=this
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
bD0:function bD0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
alA:function alA(d,e,f){this.c=d
this.d=e
this.a=f},
aGV:function aGV(d){this.a=d},
eKg(d){var x
if(d==null||d.length===0)return null
x=A.egV().i(0,d)
return(x==null?null:x.e===C.iR)===!1?x:null},
Dj(d,e,f,g){var x=null
return B.eCw(d,e,f,g)},
eCw(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Dj=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.acn.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.XD():k).$0(),$async$Dj)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.acn.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.qm(s,a0),$async$Dj)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.acn.h(0,a0,q)
x=15
return A.c(s.h8("String",a0,q),$async$Dj)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.qm(s,e),$async$Dj)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.qm(s,e),$async$Dj)
case 21:case 20:case 12:o=d.$0()
$.acn.h(0,a0,o)
x=22
return A.c(s.h8("String",a0,o),$async$Dj)
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
v=$.acn.cX(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Dj,w)},
aco(d,e){var x=null
return B.eCv(d,e)},
eCv(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$aco=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eK(0)
for(p=J.aY(l);p.G();)$.acn.M(0,p.gO())
v=3
p=m
x=6
return A.c((p==null?A.XD():p).$0(),$async$aco)
case 6:t=g
p=J.aY(l)
case 7:if(!p.G()){x=8
break}s=p.gO()
o=s
t.a.M(0,o)
x=9
return A.c($.XI().M(0,"flutter."+o),$async$aco)
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
return A.k($async$aco,w)}},D,E,F,G,M,N,O,P,Q,R,S,T,I
J=c[1]
A=c[0]
C=c[2]
K=c[308]
L=c[317]
H=c[480]
B=a.updateHolder(c[157],B)
D=c[781]
E=c[185]
F=c[782]
G=c[658]
M=c[744]
N=c[618]
O=c[191]
P=c[365]
Q=c[783]
R=c[442]
S=c[486]
T=c[457]
I=c[551]
B.pO.prototype={
W(){return"GameAccessIssue."+this.b}}
B.Dm.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aGQ.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bD_.prototype={
gqL(){var x=this
if(x.b||x.c||!x.a)return D.Ra
if(x.f)return D.aPP
switch(x.r){case D.jl:return D.aPL
case D.tb:return D.aPM
case D.tc:case D.td:return D.aPN
case D.te:case D.hb:return D.Ra
case D.tf:case D.xq:case D.EN:case D.R9:case D.jm:case D.xp:return D.tg
case D.iq:return D.tg
case null:case void 0:if(x.e)return D.tg
return x.d?D.aPO:D.tg}}}
B.Nz.prototype={
W(){return"_GameProblem."+this.b}}
B.ai8.prototype={
P(){return new B.atA()},
e0D(){return this.f.$0()},
e4a(){return this.r.$0()}}
B.atA.prototype={
gbLM(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dST(v)}else v=w
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
return w?D.Le:null},
ghK(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gN()&&x.a.e0D()},
Y(){var x,w,v=this
v.a6()
x=$.al.RG$
v.ax=x==null||x===C.cz
w=A.iJ(v.a.d.a.a,new B.dpd(v))
v.d!==$&&A.aK()
v.d=new E.afD(new A.Dn(w))
v.a.e.a4(v.gcld())
$.al.bs$.push(v)
$.al.y2$.push(new B.dpe(v))},
tK(){var x=this.z
if(x!=null)x.a9()
this.y=this.z=null},
bPD(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gfe())$.al.y2$.push(new B.dp5(v,w))},
cle(){var x=this
if(x.c==null||x.at||x.a.e.gN())return;++x.ay
x.bPD()
x.n(new B.doW(x))},
ol(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cz)x.bPD()
x.n(new B.dpc(x,d))
if(x.ax&&x.ghK())x.tV(x.gbwh())},
q(){var x=this;++x.ay
x.bPD()
x.tK()
x.a.e.T(x.gcld())
$.al.iT(x)
x.a5()},
cbE(d){var x
this.CW=d instanceof A.iq?B.dST(d.b):null
if(d instanceof E.pQ)x=D.ahh
else if(d instanceof E.v8)x=D.ahf
else if(d instanceof E.acq)x=D.ahg
else x=d instanceof E.Dl||d instanceof E.a_t?D.Le:D.ahe
this.ch=x},
tV(d){return this.dzh(d)},
dzh(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tV=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghK()){x=1
break}q=++r.ay
r.n(new B.dp6(r))
u=4
x=7
return A.c(d.$1(q),$async$tV)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghK()&&J.p(q,r.ay))r.n(new B.dp7(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.dp8(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tV,w)},
dBJ(){return this.tV(this.gbwh())},
vM(d){return this.dvG(d)},
dvG(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return A.c(p.pV(t.a.c),$async$vM)
case 9:g.b=f
v=1
x=8
break
case 6:v=5
i=u.pop()
if(!t.ghK()||d!==t.ay)A.U(C.an)
x=8
break
case 5:x=1
break
case 8:if(!t.ghK()||d!==t.ay)A.U(C.an)
p=k.b
n=t.d
m=t.a
x=p==null?10:12
break
case 10:n===$&&A.e()
p=m.c
n=n.a.a
l=n.c
if(!(l instanceof A.fM))A.U(C.x)
x=13
return A.c(E.bDl(n,l.b,new B.dp2(t),p),$async$vM)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fM))A.U(C.x)
j=E.ebL(n,l.b,p,new B.dp3(t),null,m)
case 11:k.a=j
if(!t.ghK()||d!==t.ay)A.U(C.an)
if(j==null)throw A.o(new E.Dl())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e7c(),$async$vM)
case 14:s=f
if(!t.ghK()||d!==t.ay)A.U(C.an)
x=15
return A.c(p.cxL(),$async$vM)
case 15:r=f
if(!t.ghK()||d!==t.ay)A.U(C.an)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.r8(),$async$vM)
case 20:g.d=f
v=1
x=19
break
case 17:v=16
h=u.pop()
q=A.u(h)
if(!t.ghK()||d!==t.ay)A.U(C.an)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghK()||d!==t.ay)A.U(C.an)
t.n(new B.dp4(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vM,w)},
auZ(d,e,f){return this.d17(d,e,f)},
d17(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$auZ=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghK()||d!==r.ay)A.U(C.an)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cG()
n=r.c
n.toString
m=y.y
p.sf0(A.CT(null,null,C.bi,!0,null,new B.doR(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aL(p.an(),m),$async$auZ)
case 6:o=h
if(!r.ghK()||d!==r.ay)A.U(C.an)
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
return A.k($async$auZ,w)},
cYY(){return this.tV(new B.doO(this))},
cRp(){return this.tV(new B.doJ(this))},
duj(){return this.tV(new B.dp1(this))},
dBH(){return this.tV(new B.doV(this))},
dBE(){return this.tV(new B.doT(this))},
a0k(d){return this.doe(d)},
doe(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a0k=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghK()||u.as){x=1
break}++u.ay
u.n(u.gc8U())
t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aL(d,y.X),$async$a0k)
case 3:x=u.ghK()?4:5
break
case 4:x=6
return A.c(u.tV(u.gbwh()),$async$a0k)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a0k,w)},
dBF(d){var x
switch(this.gbLM()){case D.tb:return d.gX0()
case D.tc:return d.gWR()
case D.td:return d.gWZ()
case D.te:return d.gWU()
case D.tf:return d.gWQ()
case D.xq:return d.gWW()
case D.hb:return d.gKs()
default:break}x=null
switch(this.gcaY()){case D.ahh:x=d.gad8()
break
case D.ahf:x=d.gUT()
break
case D.ahg:x=d.gUS()
break
case D.Lf:x=d.gad3()
break
case D.Le:x=d.gKs()
break
case D.ahe:x=d.gWO()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.c,y.J)
g.toString
x=i.f
w=x==null?h:x.gcts()
if(w==null)w=g.gamG()
if(i.at||!i.a.e.gN()){x=A.kM(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gX1(),h,h,h,h,h,h,C.az,h,h)
u=i.a.r
return A.bQ(x,h,new A.dC(!0,!0,!0,!0,C.I,!1,A.aM(new A.J(C.aU,A.w(A.a([v,L.dz,A.c6(A.d(g.gj6(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.H,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbLM()
o=i.dBF(g)
v=y.p
u=A.a([A.d(g.gKq(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(!x)C.d.v(u,A.a([i.bQm(g.gX_(),t.b+" USDT"),i.bQm(g.gWV(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(P.eJ,A.d(o,D.c2k,h,h,h,h,A.X(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bsb)
n=s==null
if(!n){m=A.d(g.gad5(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bQm(g.gu4(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gawR():g.gWS()
else k=s.c?g.gWT():g.gUT()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.Q],v)
if(!j||s.c)k.push(i.Ek("gameV2AcknowledgePurchase",g.gad_(),i.gcRo()))
else k.push(i.Ek("gameV2RetryPurchase",g.gad7(),i.gc80()))
u.push(A.dg(new A.J(C.C,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.Ek("gameV2Purchase",g.gWX(),i.gc80()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jP.t(0,m.a))===!0?g.gad2():g.gUS(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(i.y!=null&&q)k.push(i.Ek("gameV2Open",g.gxd(),i.gdBG()))
j=!1
if(n)if(q)if((l?h:F.jP.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jP.t(0,m.a))===!0?g.gUU():g.gUV()
k.push(i.Ek("gameV2Reissue",j,i.gci1()))}if((l?h:F.jP.t(0,m.a))!==!0)k.push(i.bKl("gameV2End",g.gad1(),i.gdBD(),!0))
u.push(A.dg(new A.J(C.C,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.Ek("gameV2Prepare",g.gUU(),i.gci1()))
if(p===D.tb)u.push(i.Ek("gameV2BindTelegram",g.gRa(),new B.dp9(i)))
if(p===D.tc||p===D.td)u.push(i.Ek("gameV2TopUp",g.gWY(),new B.dpa(i)))
u.push(i.bKl("gameV2CheckOriginal",g.gad0(),i.gdBI(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bQ(A.kM(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,O.e7U(new B.dpb(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dC(!0,!1,!0,!0,C.I,!1,A.eN(A.a([A.aM(new A.ba(C.vY,A.w(u,C.a8,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.c2l,Q.Q_,h,h,C.y,!1),h),h,h,h,h,h)},
bQm(d,e){var x=null
return new A.J(R.DK,A.bi(C.lf,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ac,x,4,16),x)},
bKl(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.doK(f)
x=A.fl(A.d(e,w,w,w,w,w,w,C.az,w,w),new A.H(d,v),x,w)
v=x}else{x=this.as?w:new B.doL(f)
x=A.c6(A.d(e,w,w,w,w,w,w,C.az,w,w),new A.H(d,v),x,w)
v=x}return new A.J(S.DH,v,w)},
Ek(d,e,f){return this.bKl(d,e,f,!1)}}
B.bf9.prototype={}
B.aiz.prototype={
P(){return new B.bb_()}}
B.bb_.prototype={
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
v=A.dR(new B.dqA(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.ayO()
$.BV().a9M(x,new B.dqB(u),!0)},
aU(d){var x,w
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
return new A.R2(x,null,null,C.zO,null)}}
B.F7.prototype={
P(){var x=$.am()
return new B.atQ(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.px().mX(1073741824),x.$1$0(y.x))}}
B.atQ.prototype={
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
ghy(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.nQ
if(w!=null)w.d_()
x=u.at
if(x!=null&&u.w.mp(x))return!0}catch(v){if(!(A.u(v) instanceof A.JA))throw v}u.ax=!0
u.CW=null
return!1},
gbw4(){var x,w=this.ay
if(w===$){x=$.am().$1$0(y.T)
this.ay!==$&&A.bf()
w=this.ay=new E.afD(x)}return w},
Y(){var x,w,v,u,t,s=this
s.a6()
x=$.am()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.j7(x.$1$0(y.E),s.w)
x.a4(s.gcjY())
s.y=x}if(v)s.at=s.w.bTD()
x=u?w.dYA(new B.drz(s)):w
s.x!==$&&A.aK()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.a_0()
return}t=s.d=B.eKg(v.c)
if(t==null){s.k2=!1
s.ok=D.hb
return}if(!t.gbXy()){s.k2=!1
s.ok=D.hb
return}if(t.e!==C.iR){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.f1Y(s.gbN4(),v,new B.drA(s))
x=x.f!=null?s.as:null
s.p2=B.f1Z(s.gdh3(),x,new B.drB(s))
$.al.y2$.push(new B.drC(s))
s.cy=s.atl()
return}},
aZ(){var x,w,v=this
v.bB()
x=v.c
x.toString
v.z=A.cs(x,null,y.X)
x=v.y
if((x==null?null:x.gN())===!1)$.al.y2$.push(new B.dry(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iR){v.k1=!0
v.f=v.c7W()}},
cjZ(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gN())!==!1}if(w)return
B.ep8(A.a_(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.drk(x))},
Zi(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Zi=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.are(),$async$Zi)
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
if(!(s.gh6()&&s.ghy()))A.U(C.an)
x=14
return A.c(s.w.iu(),$async$Zi)
case 14:r=e
if(!(s.gh6()&&s.ghy()))A.U(C.an)
if(s.c!=null&&r!=null)try{if(!(s.gh6()&&s.ghy()))A.U(C.an)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.iL().m(C.aK,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gh6()&&s.ghy())){x=1
break}$.iL().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gh6()&&s.ghy()))A.U(C.an)
x=19
return A.c(s.r.ih(!0),$async$Zi)
case 19:o=e
if(!(s.gh6()&&s.ghy()))A.U(C.an)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dqU(s,n))
try{j=J.a7S(n,4)
if(!(s.gh6()&&s.ghy()))A.U(C.an)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.iL().m(C.aK,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh6()&&s.ghy())s.n(new B.dqV(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zi,w)},
vu(){return this.cVS()},
cVS(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$vu=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.are(),$async$vu)
case 5:h=b0
x=6
return A.c(s.Zw(),$async$vu)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cIh(),$async$vu)
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
case 10:if(!s.gEK())throw A.o(C.an)
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
case 4:if(!(s.gh6()&&s.ghy()))A.U(C.an)
a3=s.w
d=s.at
d.toString
q=a3.a4l(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.iu(),$async$vu)
case 18:q=b0
if(!(s.gh6()&&s.ghy()))A.U(C.an)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gh6()&&s.ghy()))A.U(C.an)
$.iL().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gh6()&&s.ghy()))A.U(C.an)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.iL().m(C.aK,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.Dp(),$async$vu)
case 26:m=b0
if(!(s.gh6()&&s.ghy()))A.U(C.an)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dqE(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gh6()&&s.ghy()))A.U(C.an)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.iL().m(C.aK,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gh6()&&s.ghy()))A.U(C.an)
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
if(!(s.gh6()&&s.ghy()))A.U(C.an)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gh6()&&s.ghy()))A.U(C.an)
$.iL().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.Zw(),$async$vu)
case 32:g=b0
if(!(s.gh6()&&s.ghy()))A.U(C.an)
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
Zw(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$Zw=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.atl()
v=t.ti(C.PD,new B.dqW())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Zw,w)},
are(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$are=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gEK())throw A.o(C.an)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jU(),$async$are)
case 3:s=e
if(!u.gEK())throw A.o(C.an)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dqT(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$are,w)},
atl(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$atl=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bpK(k.a),$async$atl)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.p_(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.G.az(p,null)
if(!(r.gh6()&&r.ghy()))A.U(C.an)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.iL().m(C.aK,"localStorage rtp write failed",o,null)}v=p
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
return A.k($async$atl,w)},
a_0(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a_0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbw4().pV(l),$async$a_0)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dr0(s,r))
x=1
break}s.n(new B.dr1(s,r))
x=8
return A.c(s.tJ(),$async$a_0)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.iq){q=m
$.iL().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dr2(s,q))}else{p=m
o=A.aO(k)
m=$.iL()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dr3(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a_0,w)},
tJ(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tJ=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iR){if(s.c==null){x=1
break}s.n(new B.dqG(s,f))
x=1
break}if(!f.gbXy()){if(s.c==null){x=1
break}s.n(new B.dqH(s))
x=1
break}if(s.c!=null)s.n(new B.dqI(s))
u=4
x=7
return A.c(s.w.iu(),$async$tJ)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dqJ(s))
x=1
break}if(s.c==null){x=1
break}q=s.brq(r)
if(q==null){s.n(new B.dqK(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbw4().a
if(k.a.c instanceof A.fM)A.U(C.x)
x=8
return A.c(k.IM(d),$async$tJ)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dqL(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cff(p.r)
if(p.b!==!0||o!=null){s.n(new B.dqM(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dqN(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.iq)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dEG(!0),$async$tJ)
case 13:case 12:x=1
break
case 10:s.n(new B.dqO(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.iq){m=k
$.iL().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dqP(s,m))}else{l=k
$.iL().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dqQ(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tJ,w)},
bPy(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.a_0()
return w.tJ()},
vJ(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vJ=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iR){if(s.c==null){x=1
break}if(h)s.n(new B.drb(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.drc(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tJ(),$async$vJ)
case 5:x=1
break
case 4:s.n(new B.drd(s))
u=7
x=10
return A.c(s.w.iu(),$async$vJ)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dre(s))
x=1
break}if(s.c==null){x=1
break}o=s.brq(p)
if(o==null){s.n(new B.drf(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bPN(o)
x=13
return A.c(s.tJ(),$async$vJ)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bOb(),$async$vJ)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbw4().a
if(h.a.c instanceof A.fM)A.U(C.x)
x=15
return A.c(h.Sx(q,new E.aGU(n)),$async$vJ)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Re?16:17
break
case 16:x=18
return A.c(s.aqW(),$async$vJ)
case 18:if(s.c==null){x=1
break}s.n(new B.drg(s))
x=19
return A.c(s.tJ(),$async$vJ)
case 19:x=1
break
case 17:s.n(new B.drh(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.iq?20:22
break
case 20:l=h
$.iL().m(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.buC(l,D.xp)
f=l.b.toUpperCase()
x=k===D.tf||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aqW(),$async$vJ)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dri(s,k))
x=21
break
case 22:j=h
$.iL().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.drj(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vJ,w)},
pd(d,e){return this.dEH(d,!0)},
dEG(d){return this.pd(!0,d)},
dEH(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$pd=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iR){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.drn(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dro(s))
u=4
x=7
return A.c(s.w.iu(),$async$pd)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.brq(p)
if(o==null){s.n(new B.drp(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bPN(o)
x=10
return A.c(s.tJ(),$async$pd)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.As(!0),$async$pd)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.drq(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bOc(),$async$pd)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.KB(b6.a,new B.aGV(n)),$async$pd)
case 15:m=c2
l=new A.aG(Date.now(),0,!1).a3()
k=m==null?null:E.eoX(m.w)
j=m==null?null:E.dTV(m.f)
i=m==null?null:E.dTV(m.r)
h=m==null?null:E.dTV(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Rg
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a3().dt(l.a3()).a)<=3e8
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
$.iL().m(C.t,"game session response rejected: "+J.bh7(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.Ly(b6.a,!0,m.a),$async$pd)
case 20:case 19:x=21
return A.c(s.YC(),$async$pd)
case 21:if(s.c==null){x=1
break}s.n(new B.drr(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.As(!0),$async$pd)
case 24:x=1
break
case 23:x=b6.e===C.iR?25:26
break
case 25:s.n(new B.drs(s,k,h))
x=27
return A.c(s.AG(),$async$pd)
case 27:x=1
break
case 26:s.n(new B.drt(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.iq?28:30
break
case 28:a9=a7
$.iL().m(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.YC(),$async$pd)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.pd(!1,!0),$async$pd)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dru(s,a9))
x=29
break
case 30:b0=a7
$.iL().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.drv(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$pd,w)},
AG(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$AG=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.dr4(s))
x=!k.ia(new A.aG(Date.now(),0,!1).a3())?3:4
break
case 3:x=5
return A.c(s.As(!0),$async$AG)
case 5:if(s.c==null){x=1
break}s.n(new B.dr5(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.iu(),$async$AG)
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
break}s.n(new B.dr6(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.brq(q)
if(g==null){s.n(new B.dr7(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bPN(g)
x=13
return A.c(s.tJ(),$async$AG)
case 13:x=1
break
case 12:u=15
s.n(new B.dr8(s))
x=18
return A.c(A.uw(r,C.lI,"_self"),$async$AG)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dr9(s))
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
return A.c(s.As(!0),$async$AG)
case 19:if(s.c==null){x=1
break}s.n(new B.dra(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AG,w)},
As(d){return this.d6j(!0)},
d6j(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$As=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.Ly(p.a,!0,n)
r.k4=q
u=3
x=6
return A.c(q,$async$As)
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
return A.k($async$As,w)},
Ly(d,e,f){return this.d6q(d,!0,f)},
d6q(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Ly=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.Pw(d,f),$async$Ly)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.iL().m(C.aK,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.eM(C.Dw,null,l),$async$Ly)
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
return A.c(s.YC(),$async$Ly)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ly,w)},
bOb(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bOb=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcit()
v=B.Dj(new B.dqX(u),u.gcfq(),new B.dqY(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOb,w)},
aqW(){var x=0,w=A.l(y.H),v=this
var $async$aqW=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aco(new B.dqR(),A.dK([v.gcit(),v.gcfq()],y.N)),$async$aqW)
case 2:return A.j(null,w)}})
return A.k($async$aqW,w)},
bOc(){var x=0,w=A.l(y.N),v,u=this
var $async$bOc=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Dj(new B.dqZ(u),null,new B.dr_(),u.gclb())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOc,w)},
YC(){var x=0,w=A.l(y.H),v=this
var $async$YC=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aco(new B.dqS(),A.dK([v.gclb()],y.N)),$async$YC)
case 2:return A.j(null,w)}})
return A.k($async$YC,w)},
brq(d){var x=A.bHo(d),w=x==null?null:C.b.F(x)
return w==null||w.length===0?null:w},
bPN(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcit(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e5d(D.R8,this.fx,"product-"+x)},
gcfq(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e5d(D.R8,this.fx,x)},
gclb(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e5d(D.aPK,this.fx,x)},
cgu(d){var x,w=Date.now(),v=C.h.iX($.px().mX(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cff(d){var x=B.dST(d)
if(x!=null)return x
return d==null||C.b.F(d).length===0?null:D.jm},
buC(d,e){var x,w=d.a
if(w===401)return D.jl
x=B.dST(d.b)
if(x!=null)return x
if(w===404)return D.hb
return e},
dnA(d,e){switch(e){case D.jl:return d.gamE()
case D.tb:return d.gX0()
case D.tc:return d.gWR()
case D.td:return d.gWZ()
case D.te:return d.gWU()
case D.tf:return d.gWQ()
case D.xq:return d.gWW()
case D.hb:return d.gKs()
case D.EN:return d.gWS()
case D.R9:return d.gamH()
case D.jm:return d.gWO()
case D.xp:return d.gWT()
case D.iq:return d.gamI()
case null:case void 0:return null}},
bu7(d){return this.dh4(d)},
dh4(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bu7=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gEK()
else t=u.gh6()&&u.ghy()
if(!t){v=null
x=1
break}x=3
return A.c(u.AB(d),$async$bu7)
case 3:s=f
if(r.f!=null)r=u.gEK()
else r=u.gh6()&&u.ghy()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bu7,w)},
AB(d){return this.dcj(d)},
dcj(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$AB=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.at(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.asi()
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
return A.c(k.awO(A.bb(c0.i(0,"operationId"))),$async$AB)
case 23:p=A.a_(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.Kt(b4==="SPIN_RETRY_REQUEST"?A.bb(c0.i(0,"operationId")):null),$async$AB)
case 24:q=c2
p=A.q(y.N,y.z)
J.dx(p,"type","SPIN_RECOVERY_RESULT")
J.fw(p,q)
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
if(p!=null)A.aN(p,!1).f.aL(G.oW,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aN(p,!1).f.aL(M.B7,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aN(p,!1).f.aL(N.qI,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a7C(c0.i(0,"betIndex"),4)
else{b3=A.mH(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.dd(b3)}o=a5
a6=A.mH(c0.i(0,"betAmount"))
n=a6==null?null:a6
if(o==null||n==null){p=A.a_(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=p
x=1
break}b3=r.a
a7=A.b5(c0.i(0,"mode"))
if(a7==null)a7="REAL"
a8=A.b5(c0.i(0,"clientSeed"))
if(c0.i(0,"nonce")==null)a9=null
else a9=p.f!=null?""+A.a7C(c0.i(0,"nonce"),9007199254740991):J.at(c0.i(0,"nonce"))
x=29
return A.c(p.DU(n,o,A.b5(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$AB)
case 29:m=c2
l=J.ax(m,"data")
if(J.p(J.ax(m,"success"),!0)&&y.P.b(l)){k=A.q(y.N,y.z)
J.dx(k,"type","SPIN_RESULT")
J.fw(k,l)
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
return A.c(p.jU(),$async$AB)
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
return A.c(s.Zw(),$async$AB)
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
return A.c(p.adt(a0,a1),$async$AB)
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
return A.k($async$AB,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gcjY())
w=x.y
if(w!=null)w.q()
w=x.p1
if(w!=null)w.$0()
w=x.p2
if(w!=null)w.$0()
if(!x.go)x.As(!0)
x.a5()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
if(t.Q){x=t.d
x=x==null?s:x.b
return A.bQ(A.kM(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dC(!0,!0,!0,!0,C.I,!1,A.aM(A.b7(A.w(A.a([A.d(r.gX1(),s,s,s,s,s,s,C.az,s,s),C.a7,A.c6(A.d(r.gyP(),s,s,s,s,s,s,s,s,s),D.c4P,new B.drw(t,d),s)],y.p),C.l,s,C.e,C.H,0,C.j),C.q,s,C.w,s,s,C.aU,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbw4()
v=t.y
v.toString
return new B.ai8(x,r,v,new B.drx(t),t.gdoj(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.v(v,A.a([w,A.ey(0,A.ic(C.bF,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbN4(),s,s,s,s,s,s,!1,C.cc),108,s,0,s,s,75)],x))
else v.push(t.cU9(d))
if(u)v.push(new A.dC(!0,!0,!0,!0,C.I,!1,new A.cc(C.hA,s,s,A.aR(s,s,s,s,D.aUe,s,s,t.gbN4(),s,s,s,s,r.gj6(),s),s),s))
return A.bQ(s,D.ayt,new A.d_(C.aT,s,C.aO,C.q,v,s),s,s,s,s,s)},
cU9(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.fy?a0.gKr():a0.gWP()
if(e.fy){a0=a0.gKr()
r=A.t(a1).ok.y
a0=new A.J(C.aU,A.d(a0,d,d,d,d,d,r==null?d:r.a0(C.M.B(0.78)),C.az,d,d),d)}else a0=D.bIA
return A.aM(A.R(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbXy())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bD_(r,p,l,k===!0,u===!0,!j,i)
g=e.dnA(a0,i)
if(e.fy)f=a0.gKr()
else f=j?d:a0.gamA()
u=x==null?d:x.b
a0=u==null?a0.gamF():u
u=g==null
r=u?f:g
return new B.aGR(a0,h,q,m,r,!u,!t,new B.dqC(e,h),new B.dqD(e),d)},
dfX(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aN(x,!1).f.aL(C.cR,y.X)
return
case 2:w.atM()
return
case 3:x=w.c
x.toString
A.aN(x,!1).f.aL(G.oW,y.X)
return
case 4:w.vJ()
return
case 5:w.AG()
return
case 6:w.bPy()
return
case 0:return}},
atM(){var x=0,w=A.l(y.H),v,u=this,t
var $async$atM=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aL(C.oy,y.X),$async$atM)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bPy(),$async$atM)
case 4:case 1:return A.j(v,w)}})
return A.k($async$atM,w)},
asi(){var x=0,w=A.l(y.H),v,u=this
var $async$asi=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.a_m(),$async$asi)
case 3:case 1:return A.j(v,w)}})
return A.k($async$asi,w)},
a_m(){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_m=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.As(!0),$async$a_m)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).Hl(),$async$a_m)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aN(t,!1).f.iG("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$a_m,w)},
c7W(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.a9
u=b.G.window.navigator.userAgent
x=$.etx()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.al.y2$.push(new B.dqF(w,v,t))
return C.Ay}u=w.ccv(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.aiz(u,x,w.gdBs(),null)},
ccv(d,e){var x,w="/games/"+d,v=C.b.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dBt(){new B.drl(this).$0()}}
B.aGR.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dC(!0,!0,!0,!0,C.I,!1,A.d4(new B.bD0(this,x,A.t(d),this.d8p(x))),null)},
d8p(d){switch(this.d.gqL().a){case 1:return d.gamD()
case 2:return d.gRa()
case 3:return d.gWY()
case 4:return d.gWX()
case 5:return d.gxd()
case 6:return d.gamC()
case 0:return null}}}
B.alA.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a0(C.M.B(0.58))
u=A.O(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aX(C.M,C.S)
return new A.J(T.eL,A.z(A.a([u,C.ah,new A.e7(1,C.b7,A.d(this.d,x,x,x,x,x,v,C.jQ,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aGV.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aGV&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.b.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
A(){var x=A.q(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a1<n,@>?>(a1<n,@>)"])
B.bDg.prototype={
$1(d){return C.b.ck(C.h.iX(d,16),2,"0")},
$S:41}
B.dpd.prototype={
$0(){return this.a.ghK()},
$S:1}
B.dpe.prototype={
$1(d){var x=this.a
if(x.ghK())x.tV(x.gbwh())
else x.cle()},
$S:2}
B.dp5.prototype={
$1(d){var x=this.a
if(x.gfe()&&this.b.c!=null)this.b.ho(x)},
$S:2}
B.doW.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tK()
x.e=x.x=x.w=x.r=null},
$S:0}
B.dpc.prototype={
$0(){var x=this.a
x.ax=this.b===C.cz
x.as=!1
x.tK()},
$S:0}
B.dp6.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.dp7.prototype={
$0(){return this.a.cbE(this.b)},
$S:0}
B.dp8.prototype={
$0(){return this.a.as=!1},
$S:0}
B.dp2.prototype={
$0(){return this.a.ghK()},
$S:1}
B.dp3.prototype={
$0(){return this.a.ghK()},
$S:1}
B.dp4.prototype={
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
if(x)r.tK()
q=q.c
if(q!=null)r.cbE(q)},
$S:0}
B.doR.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.c,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.bg(A.a([A.aH(A.d(s.gcr(),t,t,t,t,t,t,t,t,t),t,t,t,new B.doP(v),t,t),A.c6(A.d(s.gjE(),t,t,t,t,t,t,t,t,t),D.c2j,new B.doQ(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.doP.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.doQ.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gN()&&w.ax&&x.b.an().gN()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.doO.prototype={
$1(d){return this.cBb(d)},
cBb(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.a_t())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.ebN()
k=h.a.c
j=g.e
l=E.ebI(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.c,y.J)
x=3
return A.c(h.auZ(d,m.gOj(),m.ad4(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghK()||d!==h.ay)A.U(C.an)
u=5
x=8
return A.c(g.c_i(r),$async$$1)
case 8:q=a1
if(!h.ghK()||d!==h.ay)A.U(C.an)
h.n(new B.doM(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghK()||d!==h.ay)A.U(C.an)
x=9
return A.c(g.e5Q(),$async$$1)
case 9:n=a1
if(!h.ghK()||d!==h.ay)A.U(C.an)
h.n(new B.doN(h,n))
A.zC(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:63}
B.doM.prototype={
$0(){var x=this.a
x.w=this.b
x.tK()},
$S:0}
B.doN.prototype={
$0(){var x=this.a
x.w=this.b
x.tK()},
$S:0}
B.doJ.prototype={
$1(d){return this.cBa(d)},
cBa(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dMo(r.a),$async$$1)
case 3:if(!t.ghK()||d!==t.ay)A.U(C.an)
if(!t.ghK()||d!==t.ay)A.U(C.an)
t.n(new B.doI(t))
x=4
return A.c(t.vM(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:63}
B.doI.prototype={
$0(){return this.a.w=null},
$S:0}
B.dp1.prototype={
$1(d){return this.cBe(d)},
cBe(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Dl())
t=l.c
t.toString
t=A.f(t,C.c,y.J)
t.toString
x=3
return A.c(k.cxL(),$async$$1)
case 3:s=f
if(!l.ghK()||d!==l.ay)A.U(C.an)
l.n(new B.doY(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jP.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.auZ(d,t.gUV(),t.gad6()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jP.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dMn(s.a),$async$$1)
case 9:if(!l.ghK()||d!==l.ay)A.U(C.an)
case 8:if(p)o=s.a
else{t=B.ebN()
r=l.a.c
q=k.e
t=E.e5e(t)
r=E.wj(r)
o=new E.acp(t,E.dNm(q),r)}if(!l.ghK()||d!==l.ay)A.U(C.an)
l.n(new B.doZ(l,o))
x=10
return A.c(k.e0L(o,p),$async$$1)
case 10:n=f
if(!l.ghK()||d!==l.ay)A.U(C.an)
l.n(new B.dp_(l,n))
t=l.z
if(t!=null)t.a9()
m=n.b.dt(new A.aG(Date.now(),0,!1).a3())
t=m.a<0?C.b_:m
l.z=A.dA(t,new B.dp0(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:63}
B.doY.prototype={
$0(){this.a.x=this.b},
$S:0}
B.doZ.prototype={
$0(){var x=this.a
x.tK()
x.x=new E.M5(this.b,null)},
$S:0}
B.dp_.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dp0.prototype={
$0(){var x=this.a
if(x.ghK()&&x.y===this.b)x.n(new B.doX(x))},
$S:0}
B.doX.prototype={
$0(){var x=this.a
x.tK()
x.ch=D.Lf},
$S:0}
B.doV.prototype={
$1(d){return this.cBd(d)},
cBd(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Dl())
x=3
return A.c(p.vM(d),$async$$1)
case 3:if(!p.ghK()||d!==p.ay)A.U(C.an)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.ia(new A.aG(Date.now(),0,!1).a3())||!n.b.ia(new A.aG(Date.now(),0,!1).a3())){if(!p.ghK()||d!==p.ay)A.U(C.an)
p.n(new B.doU(p,t))
x=1
break}if(!p.ghK()||d!==p.ay)A.U(C.an)
p.n(p.gc8U())
p.a.toString
r=A.uw(n.a,C.lI,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghK()||d!==p.ay)A.U(C.an)
if(!q)throw A.o(new E.v8())
x=5
return A.c(p.vM(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:63}
B.doU.prototype={
$0(){var x=this.a
x.tK()
x.x=this.b
if(x.gbLM()==null&&x.gcaY()==null)x.ch=D.Lf},
$S:0}
B.doT.prototype={
$1(d){return this.cBc(d)},
cBc(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dX7(q.a),$async$$1)
case 3:t=f
if(!s.ghK()||d!==s.ay)A.U(C.an)
s.n(new B.doS(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:63}
B.doS.prototype={
$0(){var x=this.a
x.tK()
x.x=new E.M5(this.b.a,this.c)},
$S:0}
B.dp9.prototype={
$0(){return this.a.a0k(C.oy)},
$S:3}
B.dpa.prototype={
$0(){return this.a.a0k(G.oW)},
$S:3}
B.dpb.prototype={
$0(){var x=this.a;++x.ay
x.tK()
x.a.e4a()},
$S:0}
B.doK.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.doL.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dTn.prototype={
$1(d){var x,w=this,v=A.ix(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.e4j(d,w.c))return
x=A.GH(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dTm.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dTo.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dTq.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.ix(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.e4j(d,r.c))return
w=A.GH(d.data)
if(!y.f.b(w))return
v=A.q(y.N,y.z)
for(u=w.geh(),u=u.gap(u);u.G();){t=u.gO()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ao("type"))return
new B.dTr(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dTr.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fX(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.e4j(s.d,s.e)){q=m.i(0,"requestId")
p=A.hB(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dx(p,"requestId",q)
o=A.bI(p)
p=s.e
if(p!=null){B.dOm(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.ix(n,"Object")
k=s.f
if(p){A.DC(n,"postMessage",o,k,y.X)
B.dOm(o,k,null)}else{B.dOm(o,k,null)
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
$S:51}
B.dTp.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dqA.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dqB.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:606}
B.drz.prototype={
$0(){return this.a.gh6()},
$S:1}
B.drA.prototype={
$0(){return this.a.gh6()},
$S:1}
B.drB.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gEK()
else x=x.gh6()&&x.ghy()
return x},
$S:1}
B.drC.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gEK()
else w=x.gh6()&&x.ghy()
if(w)x.Zi()},
$S:2}
B.dry.prototype={
$1(d){return this.a.cjZ()},
$S:2}
B.drk.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dqU.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dqV.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dqE.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dqW.prototype={
$0(){return null},
$S:16}
B.dqT.prototype={
$0(){var x=A.mH(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dr0.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.hb},
$S:0}
B.dr1.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.AO(w.b,w.gcts(),"Telegram Mini App",null,C.iR,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dr2.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.buC(this.b,D.jm)},
$S:0}
B.dr3.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jm},
$S:0}
B.dqG.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.hb},
$S:0}
B.dqH.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.hb},
$S:0}
B.dqI.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dqJ.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.dqK.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.dqL.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jm:D.hb},
$S:0}
B.dqM.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jm:x},
$S:0}
B.dqN.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.iq},
$S:0}
B.dqO.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cff(x.r)
if(w==null)x=x.b===!0?null:D.jm
else x=w
v.ok=x},
$S:0}
B.dqP.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buC(this.b,D.jm)},
$S:0}
B.dqQ.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jm},
$S:0}
B.drb.prototype={
$0(){return this.a.ok=D.hb},
$S:0}
B.drc.prototype={
$0(){return this.a.ok=D.hb},
$S:0}
B.drd.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dre.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jl},
$S:0}
B.drf.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jl},
$S:0}
B.drg.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.drh.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Rf?D.te:D.EN},
$S:0}
B.dri.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.drj.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.xp},
$S:0}
B.drn.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.iq},
$S:0}
B.dro.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.drp.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.drq.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.iq},
$S:0}
B.drr.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.iq},
$S:0}
B.drs.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.drt.prototype={
$0(){var x=this.a
x.f=x.c7W()
x.k2=!1},
$S:0}
B.dru.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buC(this.b,D.iq)},
$S:0}
B.drv.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.iq},
$S:0}
B.dr4.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dr5.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.iq},
$S:0}
B.dr6.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jl},
$S:0}
B.dr7.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jl},
$S:0}
B.dr8.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dr9.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dra.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.iq},
$S:0}
B.dqX.prototype={
$0(){return this.a.cgu("game-access")},
$S:27}
B.dqY.prototype={
$2(d,e){return $.iL().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:39}
B.dqR.prototype={
$2(d,e){return $.iL().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:39}
B.dqZ.prototype={
$0(){return this.a.cgu("game-session")},
$S:27}
B.dr_.prototype={
$2(d,e){return $.iL().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:39}
B.dqS.prototype={
$2(d,e){return $.iL().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:39}
B.drw.prototype={
$0(){if(this.a.gh6())A.aN(this.b,!1).f.gkX().i2(0,A.a([A.jg(null,null)],y.Q))},
$S:0}
B.drx.prototype={
$0(){return this.a.gh6()},
$S:1}
B.dqC.prototype={
$0(){return this.a.dfX(this.b.gqL())},
$S:0}
B.dqD.prototype={
$0(){this.a.bPy()
return null},
$S:0}
B.dqF.prototype={
$1(d){return this.cBf(d)},
cBf(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gh6()&&g.ghy())){x=1
break}u=4
x=7
return A.c(g.w.iu(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gh6()&&g.ghy()))A.U(C.an)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.ih(!0),$async$$1)
case 14:p=a2
if(!(g.gh6()&&g.ghy()))A.U(C.an)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gh6()&&g.ghy()))A.U(C.an)
$.iL().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gh6()&&g.ghy()))A.U(C.an)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a7S(q,4)
if(!(g.gh6()&&g.ghy()))A.U(C.an)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.brv()
if(!(g.gh6()&&g.ghy()))A.U(C.an)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh6()&&g.ghy()))A.U(C.an)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.Zw(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.iL().m(C.aK,"RTP prefetch failed",n,null)
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
if(!(g.gh6()&&g.ghy())){x=1
break}$.iL().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gh6()&&g.ghy())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).Hl(),$async$$1)
case 20:if(!g.ghy()){x=1
break}g=g.ccv(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:575}
B.drl.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.vu(),$async$$0)
case 6:s=e
r=new B.drm(p,s)
r.$0()
p=y.H
x=7
return A.c(A.eM(D.aKx,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.eM(D.aKf,null,p),$async$$0)
case 8:r.$0()
v=1
x=5
break
case 3:v=2
n=u.pop()
q=A.u(n)
$.iL().m(C.aK,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:51}
B.drm.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gEK()
else x=w.gh6()&&w.ghy()
if(!x)return
w=v.f!=null?w.as:null
B.ep8(this.b,w)},
$S:0}
B.bD0.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.dh(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.amy(w)
u=A.G(8)
t=A.aL(C.M.B(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aX(C.M,C.F),C.az,k,k)],q)
if(x.x){w=j.gKq()
p=s.z
w=A.a([H.dY,A.d(w,k,k,k,k,k,p==null?k:p.a0(C.M.B(0.72)),C.az,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gX_()
if(o)p="-"
o=j.gWV()
m=x.f
if(m==null)m="-"
C.d.v(w,A.a([I.Jm,new B.alA(n,p,k),new B.alA(o,m,k)],q))}C.d.v(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a0(x.w?D.ax6:D.axU)
C.d.v(r,A.a([I.Jm,A.R(k,k,k,A.d(w,k,k,k,k,k,s,C.az,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c39,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bi(C.le,A.a([C.mn,A.d(w.c?j.gamz():j.gWP(),k,k,k,k,k,k,C.az,k,k)],q),C.bx,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.az,k,k)}C.d.v(r,A.a([D.bIC,A.c6(o,D.bZQ,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqL()!==D.tg
else w=!1
if(w)C.d.v(r,A.a([H.dY,A.aH(A.d(j.gamB(),k,k,k,k,k,k,C.az,k,k),D.c_c,k,k,x.z,k,k)],q))
return A.b7(new A.ba(new A.ay(0,1/0,i,1/0),A.aM(A.R(k,k,k,new A.ba(K.N7,new A.c8(new A.Q(D.auh,k,t,u,k,k,C.r),C.as,new A.J(C.aU,A.w(r,C.a8,k,C.e,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c6O,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aLX,k,k,C.y)},
$S:110};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.atA.prototype,"gc8U","tK",1)
x(v,"gcld","cle",1)
x(v,"gdBI","dBJ",0)
w(v,"gbwh","vM",2)
x(v,"gc80","cYY",0)
x(v,"gcRo","cRp",0)
x(v,"gci1","duj",0)
x(v,"gdBG","dBH",0)
x(v,"gdBD","dBE",0)
x(v=B.atQ.prototype,"gcjY","cjZ",1)
w(v,"gdh3","bu7",3)
x(v,"gbN4","asi",0)
x(v,"gdoj","a_m",0)
x(v,"gdBs","dBt",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bu,[B.bDg,B.dpe,B.dp5,B.doR,B.doO,B.doJ,B.dp1,B.doV,B.doT,B.dTn,B.dTq,B.dqA,B.dqB,B.drC,B.dry,B.dqF])
w(A.eA,[B.pO,B.Dm,B.aGQ,B.Nz])
w(A.A,[B.bD_,B.aGV])
w(A.L,[B.ai8,B.aiz,B.F7])
w(A.T,[B.bf9,B.bb_,B.atQ])
v(B.atA,B.bf9)
w(A.bt,[B.dpd,B.doW,B.dpc,B.dp6,B.dp7,B.dp8,B.dp2,B.dp3,B.dp4,B.doP,B.doQ,B.doM,B.doN,B.doI,B.doY,B.doZ,B.dp_,B.dp0,B.doX,B.doU,B.doS,B.dp9,B.dpa,B.dpb,B.doK,B.doL,B.dTm,B.dTo,B.dTr,B.dTp,B.drz,B.drA,B.drB,B.drk,B.dqU,B.dqV,B.dqE,B.dqW,B.dqT,B.dr0,B.dr1,B.dr2,B.dr3,B.dqG,B.dqH,B.dqI,B.dqJ,B.dqK,B.dqL,B.dqM,B.dqN,B.dqO,B.dqP,B.dqQ,B.drb,B.drc,B.drd,B.dre,B.drf,B.drg,B.drh,B.dri,B.drj,B.drn,B.dro,B.drp,B.drq,B.drr,B.drs,B.drt,B.dru,B.drv,B.dr4,B.dr5,B.dr6,B.dr7,B.dr8,B.dr9,B.dra,B.dqX,B.dqZ,B.drw,B.drx,B.dqC,B.dqD,B.drl,B.drm])
w(A.ca,[B.dqY,B.dqR,B.dr_,B.dqS,B.bD0])
w(A.x,[B.aGR,B.alA])
x(B.bf9,A.eu)})()
A.b_(b.typeUniverse,JSON.parse('{"ai8":{"L":[],"m":[]},"atA":{"T":["ai8"],"eu":[]},"aiz":{"L":[],"m":[]},"bb_":{"T":["aiz"]},"F7":{"L":[],"m":[]},"atQ":{"T":["F7"]},"aGR":{"x":[],"m":[]},"alA":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.C
return{J:x("by"),u:x("B<a1<n,@>?>"),T:x("Dn"),w:x("lO"),Q:x("v<bV<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a1<n,@>"),f:x("a1<@,@>"),a:x("b8"),A:x("Mg"),N:x("n"),x:x("UN"),r:x("fu"),E:x("ec"),O:x("H<n>"),y:x("F"),z:x("@"),S:x("y"),h:x("a1<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.auh=new A.a3(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.ax6=new A.a3(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.axU=new A.a3(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.ayt=new A.a3(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aKf=new A.bG(175e4)
D.aKx=new A.bG(75e4)
D.aLX=new A.ar(20,64,20,24)
D.R8=new B.aGQ(0,"purchase")
D.aPK=new B.aGQ(1,"session")
D.jl=new B.pO(0,"signInRequired")
D.tb=new B.pO(1,"telegramAccountNotLinked")
D.jm=new B.pO(10,"requestFailed")
D.xp=new B.pO(11,"purchaseFailed")
D.iq=new B.pO(12,"sessionFailed")
D.tc=new B.pO(2,"insufficientBalance")
D.td=new B.pO(3,"walletInactive")
D.te=new B.pO(4,"refundPending")
D.tf=new B.pO(5,"accessExpired")
D.xq=new B.pO(6,"accessRequired")
D.hb=new B.pO(7,"gameUnavailable")
D.EN=new B.pO(8,"accessNotActive")
D.R9=new B.pO(9,"sessionDenied")
D.Ra=new B.Dm(0,"none")
D.aPL=new B.Dm(1,"signIn")
D.aPM=new B.Dm(2,"bindTelegram")
D.aPN=new B.Dm(3,"topUp")
D.aPO=new B.Dm(4,"purchase")
D.aPP=new B.Dm(5,"openGame")
D.tg=new B.Dm(6,"retry")
D.aUe=new A.as(C.ks,null,C.M,null,null)
D.bsb=new A.J(C.X,C.bX,null)
D.atr=new A.o0(2.5,null,null,null,null,null,null,null,null,null)
D.bIA=new A.ad(28,28,D.atr,null)
D.bIC=new A.ad(null,22,null,null)
D.bZQ=new A.H("slot-game-access-primary",y.O)
D.c_c=new A.H("slot-game-access-refresh",y.O)
D.c2j=new A.H("gameV2Confirm",y.O)
D.c2k=new A.H("gameV2Message",y.O)
D.c2l=new A.H("gameV2Page",y.O)
D.c39=new A.H("slot-game-access-message",y.O)
D.c4P=new A.H("retiredSlotHome",y.O)
D.c6O=new A.H("slot-game-access-gate",y.O)
D.ahe=new B.Nz(0,"request")
D.ahf=new B.Nz(1,"pending")
D.ahg=new B.Nz(2,"launchPending")
D.ahh=new B.Nz(3,"storage")
D.Le=new B.Nz(4,"unavailable")
D.Lf=new B.Nz(5,"expired")})();(function staticFields(){$.acn=function(){var x=y.N
return A.q(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fbG","etx",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"fcQ","iL",()=>A.b6("SlotGamePage"))})()};
(a=>{a["Qz291XH7Omathjc2mE5MWbL3Q4E="]=a.current})($__dart_deferred_initializers__);