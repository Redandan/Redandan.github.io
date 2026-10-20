((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,H,B={
ebu(){var x,w,v=$.px(),u=J.fg(16,y.S)
for(x=0;x<16;++x)u[x]=v.mX(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.E(u,new B.bD7(),A.W(u).k("E<1,n>")).kT(0)
return C.b.ai(w,0,8)+"-"+C.b.ai(w,8,12)+"-"+C.b.ai(w,12,16)+"-"+C.b.ai(w,16,20)+"-"+C.b.bu(w,20)},
bD7:function bD7(){},
dSz(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.t8
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.t9
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.ta
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.tb
if(C.b.t(x,"ACCESS_EXPIRED"))return D.tc
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.xq
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hb
return null},
e4W(d,e,f){var x=e==null?null:C.b.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pO:function pO(d,e){this.a=d
this.b=e},
Dm:function Dm(d,e){this.a=d
this.b=e},
aGL:function aGL(d,e){this.a=d
this.b=e},
bCR:function bCR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Nz:function Nz(d,e){this.a=d
this.b=e},
ai5:function ai5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
atv:function atv(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
doU:function doU(d){this.a=d},
doV:function doV(d){this.a=d},
doM:function doM(d,e){this.a=d
this.b=e},
doC:function doC(d){this.a=d},
doT:function doT(d,e){this.a=d
this.b=e},
doN:function doN(d){this.a=d},
doO:function doO(d,e){this.a=d
this.b=e},
doP:function doP(d){this.a=d},
doJ:function doJ(d){this.a=d},
doK:function doK(d){this.a=d},
doL:function doL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dox:function dox(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dov:function dov(d){this.a=d},
dow:function dow(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dou:function dou(d){this.a=d},
dos:function dos(d,e){this.a=d
this.b=e},
dot:function dot(d,e){this.a=d
this.b=e},
dop:function dop(d){this.a=d},
doo:function doo(d){this.a=d},
doI:function doI(d){this.a=d},
doE:function doE(d,e){this.a=d
this.b=e},
doF:function doF(d,e){this.a=d
this.b=e},
doG:function doG(d,e){this.a=d
this.b=e},
doH:function doH(d,e){this.a=d
this.b=e},
doD:function doD(d){this.a=d},
doB:function doB(d){this.a=d},
doA:function doA(d,e){this.a=d
this.b=e},
doz:function doz(d){this.a=d},
doy:function doy(d,e,f){this.a=d
this.b=e
this.c=f},
doQ:function doQ(d){this.a=d},
doR:function doR(d){this.a=d},
doS:function doS(d){this.a=d},
doq:function doq(d){this.a=d},
dor:function dor(d){this.a=d},
bf2:function bf2(){},
f1B(d,e,f){var x=b.G,w=A.dQ(new B.dT3(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dT2(w)},
f1C(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dQ(new B.dT6(u,new B.dT4(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dT5(w,x)},
e41(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.ix(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
eoO(d,e){B.dO4(A.bI(d),b.G.window.location.origin,e)},
dO4(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
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
dT3:function dT3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT2:function dT2(d){this.a=d},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT6:function dT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT7:function dT7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dT5:function dT5(d,e){this.a=d
this.b=e},
aiw:function aiw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baT:function baT(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dqg:function dqg(d){this.a=d},
dqh:function dqh(d){this.a=d},
egE(d,e){return new B.F8(d,e,null)},
F8:function F8(d,e,f){this.c=d
this.d=e
this.a=f},
atL:function atL(d,e,f,g){var _=this
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
drf:function drf(d){this.a=d},
drg:function drg(d){this.a=d},
drh:function drh(d){this.a=d},
dri:function dri(d){this.a=d},
dre:function dre(d){this.a=d},
dr0:function dr0(d){this.a=d},
dqA:function dqA(d,e){this.a=d
this.b=e},
dqB:function dqB(d){this.a=d},
dqk:function dqk(d,e){this.a=d
this.b=e},
dqC:function dqC(){},
dqz:function dqz(d,e){this.a=d
this.b=e},
dqH:function dqH(d,e){this.a=d
this.b=e},
dqI:function dqI(d,e){this.a=d
this.b=e},
dqJ:function dqJ(d,e){this.a=d
this.b=e},
dqK:function dqK(d){this.a=d},
dqm:function dqm(d,e){this.a=d
this.b=e},
dqn:function dqn(d){this.a=d},
dqo:function dqo(d){this.a=d},
dqp:function dqp(d){this.a=d},
dqq:function dqq(d){this.a=d},
dqr:function dqr(d,e){this.a=d
this.b=e},
dqs:function dqs(d,e){this.a=d
this.b=e},
dqt:function dqt(d,e){this.a=d
this.b=e},
dqu:function dqu(d,e){this.a=d
this.b=e},
dqv:function dqv(d,e){this.a=d
this.b=e},
dqw:function dqw(d){this.a=d},
dqS:function dqS(d){this.a=d},
dqT:function dqT(d){this.a=d},
dqU:function dqU(d){this.a=d},
dqV:function dqV(d){this.a=d},
dqW:function dqW(d){this.a=d},
dqX:function dqX(d){this.a=d},
dqY:function dqY(d,e){this.a=d
this.b=e},
dqZ:function dqZ(d,e){this.a=d
this.b=e},
dr_:function dr_(d){this.a=d},
dr3:function dr3(d){this.a=d},
dr4:function dr4(d){this.a=d},
dr5:function dr5(d){this.a=d},
dr6:function dr6(d){this.a=d},
dr7:function dr7(d){this.a=d},
dr8:function dr8(d,e,f){this.a=d
this.b=e
this.c=f},
dr9:function dr9(d){this.a=d},
dra:function dra(d,e){this.a=d
this.b=e},
drb:function drb(d){this.a=d},
dqL:function dqL(d){this.a=d},
dqM:function dqM(d){this.a=d},
dqN:function dqN(d){this.a=d},
dqO:function dqO(d){this.a=d},
dqP:function dqP(d){this.a=d},
dqQ:function dqQ(d){this.a=d},
dqR:function dqR(d){this.a=d},
dqD:function dqD(d){this.a=d},
dqE:function dqE(){},
dqx:function dqx(){},
dqF:function dqF(d){this.a=d},
dqG:function dqG(){},
dqy:function dqy(){},
drc:function drc(d,e){this.a=d
this.b=e},
drd:function drd(d){this.a=d},
dqi:function dqi(d,e){this.a=d
this.b=e},
dqj:function dqj(d){this.a=d},
dql:function dql(d,e,f){this.a=d
this.b=e
this.c=f},
dr1:function dr1(d){this.a=d},
dr2:function dr2(d,e){this.a=d
this.b=e},
aGM:function aGM(d,e,f,g,h,i,j,k,l,m){var _=this
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
bCS:function bCS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
alx:function alx(d,e,f){this.c=d
this.d=e
this.a=f},
aGQ:function aGQ(d){this.a=d},
eJU(d){var x
if(d==null||d.length===0)return null
x=A.egC().i(0,d)
return(x==null?null:x.e===C.iP)===!1?x:null},
Dj(d,e,f,g){var x=null
return B.eCa(d,e,f,g)},
eCa(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Dj=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.ack.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.XB():k).$0(),$async$Dj)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.ack.h(0,a0,r)
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
case 13:$.ack.h(0,a0,q)
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
$.ack.h(0,a0,o)
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
v=$.ack.cX(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Dj,w)},
acl(d,e){var x=null
return B.eC9(d,e)},
eC9(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$acl=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eJ(0)
for(p=J.aY(l);p.G();)$.ack.M(0,p.gO())
v=3
p=m
x=6
return A.c((p==null?A.XB():p).$0(),$async$acl)
case 6:t=g
p=J.aY(l)
case 7:if(!p.G()){x=8
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
G=c[659]
N=c[743]
O=c[620]
P=c[191]
Q=c[783]
R=c[442]
S=c[487]
T=c[457]
I=c[551]
B.pO.prototype={
W(){return"GameAccessIssue."+this.b}}
B.Dm.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aGL.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bCR.prototype={
gqK(){var x=this
if(x.b||x.c||!x.a)return D.R7
if(x.f)return D.aPV
switch(x.r){case D.ji:return D.aPR
case D.t8:return D.aPS
case D.t9:case D.ta:return D.aPT
case D.tb:case D.hb:return D.R7
case D.tc:case D.xq:case D.EK:case D.R6:case D.jj:case D.xp:return D.td
case D.ip:return D.td
case null:case void 0:if(x.e)return D.td
return x.d?D.aPU:D.td}}}
B.Nz.prototype={
W(){return"_GameProblem."+this.b}}
B.ai5.prototype={
R(){return new B.atv()},
e0x(){return this.f.$0()},
e44(){return this.r.$0()}}
B.atv.prototype={
gbLK(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dSz(v)}else v=w
return v},
gcaW(){var x,w=this.ch
if(w!=null)return w
x=this.r
if(x!=null)if(x.r)w=!x.x&&!x.y
else w=!0
else w=!1
if(!w){w=this.x
if(w==null)w=null
else{w=w.b
w=w==null?null:w.f}w=w!=null}else w=!0
return w?D.Lc:null},
ghL(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gN()&&x.a.e0x()},
Y(){var x,w,v=this
v.a6()
x=$.am.RG$
v.ax=x==null||x===C.cx
w=A.iJ(v.a.d.a.a,new B.doU(v))
v.d!==$&&A.aK()
v.d=new E.afA(new A.Dn(w))
v.a.e.a4(v.gcl8())
$.am.bs$.push(v)
$.am.y2$.push(new B.doV(v))},
tK(){var x=this.z
if(x!=null)x.a9()
this.y=this.z=null},
bPC(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gfd())$.am.y2$.push(new B.doM(v,w))},
cl9(){var x=this
if(x.c==null||x.at||x.a.e.gN())return;++x.ay
x.bPC()
x.n(new B.doC(x))},
oj(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cx)x.bPC()
x.n(new B.doT(x,d))
if(x.ax&&x.ghL())x.tV(x.gbwe())},
q(){var x=this;++x.ay
x.bPC()
x.tK()
x.a.e.T(x.gcl8())
$.am.iT(x)
x.a5()},
cbC(d){var x
this.CW=d instanceof A.iq?B.dSz(d.b):null
if(d instanceof E.pQ)x=D.ahk
else if(d instanceof E.v8)x=D.ahi
else if(d instanceof E.acn)x=D.ahj
else x=d instanceof E.Dl||d instanceof E.a_r?D.Lc:D.ahh
this.ch=x},
tV(d){return this.dza(d)},
dza(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tV=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghL()){x=1
break}q=++r.ay
r.n(new B.doN(r))
u=4
x=7
return A.c(d.$1(q),$async$tV)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghL()&&J.p(q,r.ay))r.n(new B.doO(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.doP(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tV,w)},
dBC(){return this.tV(this.gbwe())},
vM(d){return this.dvy(d)},
dvy(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return A.c(E.bDc(n,l.b,new B.doJ(t),p),$async$vM)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fM))A.V(C.x)
j=E.ebs(n,l.b,p,new B.doK(t),null,m)
case 11:k.a=j
if(!t.ghL()||d!==t.ay)A.V(C.ap)
if(j==null)throw A.o(new E.Dl())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e76(),$async$vM)
case 14:s=f
if(!t.ghL()||d!==t.ay)A.V(C.ap)
x=15
return A.c(p.cxE(),$async$vM)
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
t.n(new B.doL(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vM,w)},
av0(d,e,f){return this.d1_(d,e,f)},
d1_(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$av0=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghL()||d!==r.ay)A.V(C.ap)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cG()
n=r.c
n.toString
m=y.y
p.sf_(A.CT(null,null,C.aj,!0,null,new B.dox(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aL(p.an(),m),$async$av0)
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
return A.k($async$av0,w)},
cYS(){return this.tV(new B.dou(this))},
cRi(){return this.tV(new B.dop(this))},
dub(){return this.tV(new B.doI(this))},
dBA(){return this.tV(new B.doB(this))},
dBx(){return this.tV(new B.doz(this))},
a0r(d){return this.do6(d)},
do6(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a0r=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghL()||u.as){x=1
break}++u.ay
u.n(u.gc8T())
t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aL(d,y.X),$async$a0r)
case 3:x=u.ghL()?4:5
break
case 4:x=6
return A.c(u.tV(u.gbwe()),$async$a0r)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a0r,w)},
dBy(d){var x
switch(this.gbLK()){case D.t8:return d.gX6()
case D.t9:return d.gWX()
case D.ta:return d.gX4()
case D.tb:return d.gX_()
case D.tc:return d.gWW()
case D.xq:return d.gX1()
case D.hb:return d.gKy()
default:break}x=null
switch(this.gcaW()){case D.ahk:x=d.gade()
break
case D.ahi:x=d.gV1()
break
case D.ahj:x=d.gV0()
break
case D.Ld:x=d.gad8()
break
case D.Lc:x=d.gKy()
break
case D.ahh:x=d.gWU()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.c,y.J)
g.toString
x=i.f
w=x==null?h:x.gctk()
if(w==null)w=g.gamK()
if(i.at||!i.a.e.gN()){x=A.kM(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gX7(),h,h,h,h,h,h,C.aE,h,h)
u=i.a.r
return A.bQ(x,h,new A.dE(!0,!0,!0,!0,C.K,!1,A.aM(new A.J(C.aX,A.w(A.a([v,M.dw,A.c6(A.d(g.gj6(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.I,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbLK()
o=i.dBy(g)
v=y.p
u=A.a([A.d(g.gKw(),h,h,h,h,h,h,h,h,h),C.S],v)
if(!x)C.d.v(u,A.a([i.bQl(g.gX5(),t.b+" USDT"),i.bQl(g.gX0(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(K.eq,A.d(o,D.c2s,h,h,h,h,A.I(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bsf)
n=s==null
if(!n){m=A.d(g.gada(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bQl(g.gu4(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gawT():g.gWY()
else k=s.c?g.gWZ():g.gV1()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.S],v)
if(!j||s.c)k.push(i.Ei("gameV2AcknowledgePurchase",g.gad4(),i.gcRh()))
else k.push(i.Ei("gameV2RetryPurchase",g.gadc(),i.gc8_()))
u.push(A.dg(new A.J(C.D,A.w(k,C.a9,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.Ei("gameV2Purchase",g.gX2(),i.gc8_()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jL.t(0,m.a))===!0?g.gad7():g.gV0(),h,h,h,h,h,h,h,h,h),C.S],v)
if(i.y!=null&&q)k.push(i.Ei("gameV2Open",g.gxd(),i.gdBz()))
j=!1
if(n)if(q)if((l?h:F.jL.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jL.t(0,m.a))===!0?g.gV2():g.gV3()
k.push(i.Ei("gameV2Reissue",j,i.gchZ()))}if((l?h:F.jL.t(0,m.a))!==!0)k.push(i.bKj("gameV2End",g.gad6(),i.gdBw(),!0))
u.push(A.dg(new A.J(C.D,A.w(k,C.a9,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.Ei("gameV2Prepare",g.gV2(),i.gchZ()))
if(p===D.t8)u.push(i.Ei("gameV2BindTelegram",g.gRj(),new B.doQ(i)))
if(p===D.t9||p===D.ta)u.push(i.Ei("gameV2TopUp",g.gX3(),new B.doR(i)))
u.push(i.bKj("gameV2CheckOriginal",g.gad5(),i.gdBB(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bQ(A.kM(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,P.e7B(new B.doS(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dE(!0,!1,!0,!0,C.K,!1,A.eL(A.a([A.aM(new A.bc(C.vV,A.w(u,C.a9,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.c2t,Q.PZ,h,h,C.y,!1),h),h,h,h,h,h)},
bQl(d,e){var x=null
return new A.J(R.DH,A.bi(C.lc,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ad,x,4,16),x)},
bKj(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.doq(f)
x=A.fl(A.d(e,w,w,w,w,w,w,C.aE,w,w),new A.K(d,v),x,w)
v=x}else{x=this.as?w:new B.dor(f)
x=A.c6(A.d(e,w,w,w,w,w,w,C.aE,w,w),new A.K(d,v),x,w)
v=x}return new A.J(S.DE,v,w)},
Ei(d,e,f){return this.bKj(d,e,f,!1)}}
B.bf2.prototype={}
B.aiw.prototype={
R(){return new B.baT()}}
B.baT.prototype={
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
v=A.dQ(new B.dqg(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.ayJ()
$.BV().a9S(x,new B.dqh(u),!0)},
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
return new A.R2(x,null,null,C.zO,null)}}
B.F8.prototype={
R(){var x=$.al()
return new B.atL(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.px().mX(1073741824),x.$1$0(y.x))}}
B.atL.prototype={
gh6(){if(this.c!=null){var x=this.z
x=x==null?null:x.gN()
x=x!==!1}else x=!1
return x},
gEH(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gN()
if(x!==!1)if(w.gh6()){v=w.x
v===$&&A.e()
v=v.gN()}}return v},
ghz(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.nQ
if(w!=null)w.cZ()
x=u.at
if(x!=null&&u.w.mp(x))return!0}catch(v){if(!(A.u(v) instanceof A.JA))throw v}u.ax=!0
u.CW=null
return!1},
gbw1(){var x,w=this.ay
if(w===$){x=$.al().$1$0(y.T)
this.ay!==$&&A.bf()
w=this.ay=new E.afA(x)}return w},
Y(){var x,w,v,u,t,s=this
s.a6()
x=$.al()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.j7(x.$1$0(y.E),s.w)
x.a4(s.gcjU())
s.y=x}if(v)s.at=s.w.bTE()
x=u?w.dYu(new B.drf(s)):w
s.x!==$&&A.aK()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.a_7()
return}t=s.d=B.eJU(v.c)
if(t==null){s.k2=!1
s.ok=D.hb
return}if(!t.gbXz()){s.k2=!1
s.ok=D.hb
return}if(t.e!==C.iP){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.f1B(s.gbN2(),v,new B.drg(s))
x=x.f!=null?s.as:null
s.p2=B.f1C(s.gdgW(),x,new B.drh(s))
$.am.y2$.push(new B.dri(s))
s.cy=s.atn()
return}},
aZ(){var x,w,v=this
v.bB()
x=v.c
x.toString
v.z=A.cs(x,null,y.X)
x=v.y
if((x==null?null:x.gN())===!1)$.am.y2$.push(new B.dre(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iP){v.k1=!0
v.f=v.c7V()}},
cjV(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gN())!==!1}if(w)return
B.eoO(A.a_(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dr0(x))},
Zp(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Zp=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.arg(),$async$Zp)
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
return A.c(s.w.iu(),$async$Zp)
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
return A.c(s.r.ih(!0),$async$Zp)
case 19:o=e
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dqA(s,n))
try{j=J.a7P(n,4)
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.iL().m(C.aN,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh6()&&s.ghz())s.n(new B.dqB(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zp,w)},
vu(){return this.cVL()},
cVL(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$vu=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.arg(),$async$vu)
case 5:h=b0
x=6
return A.c(s.ZD(),$async$vu)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cIa(),$async$vu)
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
case 10:if(!s.gEH())throw A.o(C.ap)
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
return A.c(s.r.Dn(),$async$vu)
case 26:m=b0
if(!(s.gh6()&&s.ghz()))A.V(C.ap)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dqk(a2,s))
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
return A.c(s.r.Dn(),$async$vu)
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
return A.c(s.ZD(),$async$vu)
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
ZD(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ZD=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.atn()
v=t.ti(C.PD,new B.dqC())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ZD,w)},
arg(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$arg=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gEH())throw A.o(C.ap)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jU(),$async$arg)
case 3:s=e
if(!u.gEH())throw A.o(C.ap)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dqz(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$arg,w)},
atn(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$atn=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bpH(k.a),$async$atn)
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
return A.k($async$atn,w)},
a_7(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a_7=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbw1().pU(l),$async$a_7)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dqH(s,r))
x=1
break}s.n(new B.dqI(s,r))
x=8
return A.c(s.tJ(),$async$a_7)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.iq){q=m
$.iL().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dqJ(s,q))}else{p=m
o=A.aO(k)
m=$.iL()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dqK(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a_7,w)},
tJ(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tJ=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iP){if(s.c==null){x=1
break}s.n(new B.dqm(s,f))
x=1
break}if(!f.gbXz()){if(s.c==null){x=1
break}s.n(new B.dqn(s))
x=1
break}if(s.c!=null)s.n(new B.dqo(s))
u=4
x=7
return A.c(s.w.iu(),$async$tJ)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dqp(s))
x=1
break}if(s.c==null){x=1
break}q=s.brn(r)
if(q==null){s.n(new B.dqq(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbw1().a
if(k.a.c instanceof A.fM)A.V(C.x)
x=8
return A.c(k.IP(d),$async$tJ)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dqr(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cfc(p.r)
if(p.b!==!0||o!=null){s.n(new B.dqs(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dqt(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.ip)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dEz(!0),$async$tJ)
case 13:case 12:x=1
break
case 10:s.n(new B.dqu(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.iq){m=k
$.iL().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dqv(s,m))}else{l=k
$.iL().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dqw(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tJ,w)},
bPx(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.a_7()
return w.tJ()},
vJ(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vJ=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iP){if(s.c==null){x=1
break}if(h)s.n(new B.dqS(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dqT(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tJ(),$async$vJ)
case 5:x=1
break
case 4:s.n(new B.dqU(s))
u=7
x=10
return A.c(s.w.iu(),$async$vJ)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dqV(s))
x=1
break}if(s.c==null){x=1
break}o=s.brn(p)
if(o==null){s.n(new B.dqW(s))
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
break}h=s.gbw1().a
if(h.a.c instanceof A.fM)A.V(C.x)
x=15
return A.c(h.SF(q,new E.aGP(n)),$async$vJ)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Rb?16:17
break
case 16:x=18
return A.c(s.aqY(),$async$vJ)
case 18:if(s.c==null){x=1
break}s.n(new B.dqX(s))
x=19
return A.c(s.tJ(),$async$vJ)
case 19:x=1
break
case 17:s.n(new B.dqY(s,m))
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
k=s.buz(l,D.xp)
f=l.b.toUpperCase()
x=k===D.tc||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aqY(),$async$vJ)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dqZ(s,k))
x=21
break
case 22:j=h
$.iL().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dr_(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vJ,w)},
pc(d,e){return this.dEA(d,!0)},
dEz(d){return this.pc(!0,d)},
dEA(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$pc=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iP){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.dr3(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dr4(s))
u=4
x=7
return A.c(s.w.iu(),$async$pc)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.brn(p)
if(o==null){s.n(new B.dr5(s))
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
break}s.n(new B.dr6(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bOb(),$async$pc)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.KH(b6.a,new B.aGQ(n)),$async$pc)
case 15:m=c2
l=new A.aG(Date.now(),0,!1).a3()
k=m==null?null:E.eoC(m.w)
j=m==null?null:E.dTB(m.f)
i=m==null?null:E.dTB(m.r)
h=m==null?null:E.dTB(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Rd
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
$.iL().m(C.t,"game session response rejected: "+J.bh0(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.LE(b6.a,!0,m.a),$async$pc)
case 20:case 19:x=21
return A.c(s.YJ(),$async$pc)
case 21:if(s.c==null){x=1
break}s.n(new B.dr7(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.Ar(!0),$async$pc)
case 24:x=1
break
case 23:x=b6.e===C.iP?25:26
break
case 25:s.n(new B.dr8(s,k,h))
x=27
return A.c(s.AF(),$async$pc)
case 27:x=1
break
case 26:s.n(new B.dr9(s))
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
return A.c(s.YJ(),$async$pc)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.pc(!1,!0),$async$pc)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dra(s,a9))
x=29
break
case 30:b0=a7
$.iL().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.drb(s))
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
break}s.n(new B.dqL(s))
x=!k.ia(new A.aG(Date.now(),0,!1).a3())?3:4
break
case 3:x=5
return A.c(s.Ar(!0),$async$AF)
case 5:if(s.c==null){x=1
break}s.n(new B.dqM(s))
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
break}s.n(new B.dqN(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.brn(q)
if(g==null){s.n(new B.dqO(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bPM(g)
x=13
return A.c(s.tJ(),$async$AF)
case 13:x=1
break
case 12:u=15
s.n(new B.dqP(s))
x=18
return A.c(A.uw(r,C.lH,"_self"),$async$AF)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dqQ(s))
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
break}s.n(new B.dqR(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AF,w)},
Ar(d){return this.d6b(!0)},
d6b(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$Ar=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.LE(p.a,!0,n)
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
LE(d,e,f){return this.d6i(d,!0,f)},
d6i(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$LE=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.PD(d,f),$async$LE)
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
return A.c(A.eK(C.Dt,null,l),$async$LE)
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
return A.c(s.YJ(),$async$LE)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LE,w)},
bOa(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bOa=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcip()
v=B.Dj(new B.dqD(u),u.gcfn(),new B.dqE(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOa,w)},
aqY(){var x=0,w=A.l(y.H),v=this
var $async$aqY=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acl(new B.dqx(),A.dK([v.gcip(),v.gcfn()],y.N)),$async$aqY)
case 2:return A.j(null,w)}})
return A.k($async$aqY,w)},
bOb(){var x=0,w=A.l(y.N),v,u=this
var $async$bOb=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Dj(new B.dqF(u),null,new B.dqG(),u.gcl6())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOb,w)},
YJ(){var x=0,w=A.l(y.H),v=this
var $async$YJ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acl(new B.dqy(),A.dK([v.gcl6()],y.N)),$async$YJ)
case 2:return A.j(null,w)}})
return A.k($async$YJ,w)},
brn(d){var x=A.bHe(d),w=x==null?null:C.b.F(x)
return w==null||w.length===0?null:w},
bPM(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcip(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e4W(D.R5,this.fx,"product-"+x)},
gcfn(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e4W(D.R5,this.fx,x)},
gcl6(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e4W(D.aPQ,this.fx,x)},
cgr(d){var x,w=Date.now(),v=C.h.iX($.px().mX(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cfc(d){var x=B.dSz(d)
if(x!=null)return x
return d==null||C.b.F(d).length===0?null:D.jj},
buz(d,e){var x,w=d.a
if(w===401)return D.ji
x=B.dSz(d.b)
if(x!=null)return x
if(w===404)return D.hb
return e},
dns(d,e){switch(e){case D.ji:return d.gamI()
case D.t8:return d.gX6()
case D.t9:return d.gWX()
case D.ta:return d.gX4()
case D.tb:return d.gX_()
case D.tc:return d.gWW()
case D.xq:return d.gX1()
case D.hb:return d.gKy()
case D.EK:return d.gWY()
case D.R6:return d.gamL()
case D.jj:return d.gWU()
case D.xp:return d.gWZ()
case D.ip:return d.gamM()
case null:case void 0:return null}},
bu4(d){return this.dgX(d)},
dgX(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bu4=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gEH()
else t=u.gh6()&&u.ghz()
if(!t){v=null
x=1
break}x=3
return A.c(u.AA(d),$async$bu4)
case 3:s=f
if(r.f!=null)r=u.gEH()
else r=u.gh6()&&u.ghz()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bu4,w)},
AA(d){return this.dcb(d)},
dcb(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$AA=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.ask()
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
return A.c(k.awQ(A.ba(c0.i(0,"operationId"))),$async$AA)
case 23:p=A.a_(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.Kz(b4==="SPIN_RETRY_REQUEST"?A.ba(c0.i(0,"operationId")):null),$async$AA)
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
if(p!=null)A.aN(p,!1).f.aL(G.oW,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aN(p,!1).f.aL(N.B9,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aN(p,!1).f.aL(O.qG,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a7z(c0.i(0,"betIndex"),4)
else{b3=A.mH(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.dc(b3)}o=a5
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
else a9=p.f!=null?""+A.a7z(c0.i(0,"nonce"),9007199254740991):J.as(c0.i(0,"nonce"))
x=29
return A.c(p.DS(n,o,A.b5(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$AA)
case 29:m=c2
l=J.ax(m,"data")
if(J.p(J.ax(m,"success"),!0)&&y.P.b(l)){k=A.q(y.N,y.z)
J.dx(k,"type","SPIN_RESULT")
J.fv(k,l)
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
return A.c(s.ZD(),$async$AA)
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
p=A.mH(c0.i(0,"page"))
b1=p==null?null:C.k.dc(p)
a0=b1==null?1:b1
p=A.mH(c0.i(0,"size"))
b2=p==null?null:C.k.dc(p)
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
return A.k($async$AA,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gcjU())
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
return A.bQ(A.kM(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dE(!0,!0,!0,!0,C.K,!1,A.aM(A.b7(A.w(A.a([A.d(r.gX7(),s,s,s,s,s,s,C.aE,s,s),C.a8,A.c6(A.d(r.gyP(),s,s,s,s,s,s,s,s,s),D.c4O,new B.drc(t,d),s)],y.p),C.l,s,C.e,C.I,0,C.j),C.q,s,C.w,s,s,C.aX,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbw1()
v=t.y
v.toString
return new B.ai5(x,r,v,new B.drd(t),t.gdob(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.v(v,A.a([w,A.ey(0,A.ic(C.bH,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbN2(),s,s,s,s,s,s,!1,C.ca),108,s,0,s,s,75)],x))
else v.push(t.cU2(d))
if(u)v.push(new A.dE(!0,!0,!0,!0,C.K,!1,new A.cg(C.hA,s,s,A.aR(s,s,s,s,D.aUk,s,s,t.gbN2(),s,s,s,s,r.gj6(),s),s),s))
return A.bQ(s,D.ayv,new A.d_(C.aZ,s,C.aR,C.q,v,s),s,s,s,s,s)},
cU2(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.fy?a0.gKx():a0.gWV()
if(e.fy){a0=a0.gKx()
r=A.t(a1).ok.y
a0=new A.J(C.aX,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.G.B(0.78)),C.aE,d,d),d)}else a0=D.bIG
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbXz())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bCR(r,p,l,k===!0,u===!0,!j,i)
g=e.dns(a0,i)
if(e.fy)f=a0.gKx()
else f=j?d:a0.gamE()
u=x==null?d:x.b
a0=u==null?a0.gamJ():u
u=g==null
r=u?f:g
return new B.aGM(a0,h,q,m,r,!u,!t,new B.dqi(e,h),new B.dqj(e),d)},
dfP(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aN(x,!1).f.aL(C.cP,y.X)
return
case 2:w.atO()
return
case 3:x=w.c
x.toString
A.aN(x,!1).f.aL(G.oW,y.X)
return
case 4:w.vJ()
return
case 5:w.AF()
return
case 6:w.bPx()
return
case 0:return}},
atO(){var x=0,w=A.l(y.H),v,u=this,t
var $async$atO=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aL(C.ow,y.X),$async$atO)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bPx(),$async$atO)
case 4:case 1:return A.j(v,w)}})
return A.k($async$atO,w)},
ask(){var x=0,w=A.l(y.H),v,u=this
var $async$ask=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.a_t(),$async$ask)
case 3:case 1:return A.j(v,w)}})
return A.k($async$ask,w)},
a_t(){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_t=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.Ar(!0),$async$a_t)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).Ho(),$async$a_t)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aN(t,!1).f.iG("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$a_t,w)},
c7V(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ac
u=b.G.window.navigator.userAgent
x=$.etc()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.am.y2$.push(new B.dql(w,v,t))
return C.Az}u=w.cct(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.aiw(u,x,w.gdBl(),null)},
cct(d,e){var x,w="/games/"+d,v=C.b.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dBm(){new B.dr1(this).$0()}}
B.aGM.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dE(!0,!0,!0,!0,C.K,!1,A.dd(new B.bCS(this,x,A.t(d),this.d8h(x))),null)},
d8h(d){switch(this.d.gqK().a){case 1:return d.gamH()
case 2:return d.gRj()
case 3:return d.gX3()
case 4:return d.gX2()
case 5:return d.gxd()
case 6:return d.gamG()
case 0:return null}}}
B.alx.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a1(C.G.B(0.58))
u=A.P(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aX(C.G,C.T)
return new A.J(T.eJ,A.z(A.a([u,C.ai,new A.ed(1,C.bb,A.d(this.d,x,x,x,x,x,v,C.jM,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aGQ.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aGQ&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.b.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
A(){var x=A.q(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a1<n,@>?>(a1<n,@>)"])
B.bD7.prototype={
$1(d){return C.b.ck(C.h.iX(d,16),2,"0")},
$S:41}
B.doU.prototype={
$0(){return this.a.ghL()},
$S:1}
B.doV.prototype={
$1(d){var x=this.a
if(x.ghL())x.tV(x.gbwe())
else x.cl9()},
$S:2}
B.doM.prototype={
$1(d){var x=this.a
if(x.gfd()&&this.b.c!=null)this.b.ho(x)},
$S:2}
B.doC.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tK()
x.e=x.x=x.w=x.r=null},
$S:0}
B.doT.prototype={
$0(){var x=this.a
x.ax=this.b===C.cx
x.as=!1
x.tK()},
$S:0}
B.doN.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.doO.prototype={
$0(){return this.a.cbC(this.b)},
$S:0}
B.doP.prototype={
$0(){return this.a.as=!1},
$S:0}
B.doJ.prototype={
$0(){return this.a.ghL()},
$S:1}
B.doK.prototype={
$0(){return this.a.ghL()},
$S:1}
B.doL.prototype={
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
if(q!=null)r.cbC(q)},
$S:0}
B.dox.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.c,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.bg(A.a([A.aH(A.d(s.gcr(),t,t,t,t,t,t,t,t,t),t,t,t,new B.dov(v),t,t),A.c6(A.d(s.gjE(),t,t,t,t,t,t,t,t,t),D.c2r,new B.dow(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.dov.prototype={
$0(){return this.a.ag(!1)},
$S:0}
B.dow.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gN()&&w.ax&&x.b.an().gN()&&x.c===w.ay)x.d.ag(!0)},
$S:0}
B.dou.prototype={
$1(d){return this.cB4(d)},
cB4(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.a_r())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.ebu()
k=h.a.c
j=g.e
l=E.ebp(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.c,y.J)
x=3
return A.c(h.av0(d,m.gOq(),m.ad9(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghL()||d!==h.ay)A.V(C.ap)
u=5
x=8
return A.c(g.c_j(r),$async$$1)
case 8:q=a1
if(!h.ghL()||d!==h.ay)A.V(C.ap)
h.n(new B.dos(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghL()||d!==h.ay)A.V(C.ap)
x=9
return A.c(g.e5K(),$async$$1)
case 9:n=a1
if(!h.ghL()||d!==h.ay)A.V(C.ap)
h.n(new B.dot(h,n))
A.zA(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:65}
B.dos.prototype={
$0(){var x=this.a
x.w=this.b
x.tK()},
$S:0}
B.dot.prototype={
$0(){var x=this.a
x.w=this.b
x.tK()},
$S:0}
B.dop.prototype={
$1(d){return this.cB3(d)},
cB3(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dMi(r.a),$async$$1)
case 3:if(!t.ghL()||d!==t.ay)A.V(C.ap)
if(!t.ghL()||d!==t.ay)A.V(C.ap)
t.n(new B.doo(t))
x=4
return A.c(t.vM(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:65}
B.doo.prototype={
$0(){return this.a.w=null},
$S:0}
B.doI.prototype={
$1(d){return this.cB7(d)},
cB7(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Dl())
t=l.c
t.toString
t=A.f(t,C.c,y.J)
t.toString
x=3
return A.c(k.cxE(),$async$$1)
case 3:s=f
if(!l.ghL()||d!==l.ay)A.V(C.ap)
l.n(new B.doE(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jL.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.av0(d,t.gV3(),t.gadb()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jL.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dMh(s.a),$async$$1)
case 9:if(!l.ghL()||d!==l.ay)A.V(C.ap)
case 8:if(p)o=s.a
else{t=B.ebu()
r=l.a.c
q=k.e
t=E.e4X(t)
r=E.wj(r)
o=new E.acm(t,E.dN4(q),r)}if(!l.ghL()||d!==l.ay)A.V(C.ap)
l.n(new B.doF(l,o))
x=10
return A.c(k.e0F(o,p),$async$$1)
case 10:n=f
if(!l.ghL()||d!==l.ay)A.V(C.ap)
l.n(new B.doG(l,n))
t=l.z
if(t!=null)t.a9()
m=n.b.ds(new A.aG(Date.now(),0,!1).a3())
t=m.a<0?C.b1:m
l.z=A.dA(t,new B.doH(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:65}
B.doE.prototype={
$0(){this.a.x=this.b},
$S:0}
B.doF.prototype={
$0(){var x=this.a
x.tK()
x.x=new E.M5(this.b,null)},
$S:0}
B.doG.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.doH.prototype={
$0(){var x=this.a
if(x.ghL()&&x.y===this.b)x.n(new B.doD(x))},
$S:0}
B.doD.prototype={
$0(){var x=this.a
x.tK()
x.ch=D.Ld},
$S:0}
B.doB.prototype={
$1(d){return this.cB6(d)},
cB6(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Dl())
x=3
return A.c(p.vM(d),$async$$1)
case 3:if(!p.ghL()||d!==p.ay)A.V(C.ap)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.ia(new A.aG(Date.now(),0,!1).a3())||!n.b.ia(new A.aG(Date.now(),0,!1).a3())){if(!p.ghL()||d!==p.ay)A.V(C.ap)
p.n(new B.doA(p,t))
x=1
break}if(!p.ghL()||d!==p.ay)A.V(C.ap)
p.n(p.gc8T())
p.a.toString
r=A.uw(n.a,C.lH,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghL()||d!==p.ay)A.V(C.ap)
if(!q)throw A.o(new E.v8())
x=5
return A.c(p.vM(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:65}
B.doA.prototype={
$0(){var x=this.a
x.tK()
x.x=this.b
if(x.gbLK()==null&&x.gcaW()==null)x.ch=D.Ld},
$S:0}
B.doz.prototype={
$1(d){return this.cB5(d)},
cB5(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dX1(q.a),$async$$1)
case 3:t=f
if(!s.ghL()||d!==s.ay)A.V(C.ap)
s.n(new B.doy(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:65}
B.doy.prototype={
$0(){var x=this.a
x.tK()
x.x=new E.M5(this.b.a,this.c)},
$S:0}
B.doQ.prototype={
$0(){return this.a.a0r(C.ow)},
$S:3}
B.doR.prototype={
$0(){return this.a.a0r(G.oW)},
$S:3}
B.doS.prototype={
$0(){var x=this.a;++x.ay
x.tK()
x.a.e44()},
$S:0}
B.doq.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dor.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dT3.prototype={
$1(d){var x,w=this,v=A.ix(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.e41(d,w.c))return
x=A.GI(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dT2.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dT4.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dT6.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.ix(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.e41(d,r.c))return
w=A.GI(d.data)
if(!y.f.b(w))return
v=A.q(y.N,y.z)
for(u=w.geg(),u=u.gap(u);u.G();){t=u.gO()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ao("type"))return
new B.dT7(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dT7.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fX(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.e41(s.d,s.e)){q=m.i(0,"requestId")
p=A.hC(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dx(p,"requestId",q)
o=A.bI(p)
p=s.e
if(p!=null){B.dO4(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.ix(n,"Object")
k=s.f
if(p){A.DC(n,"postMessage",o,k,y.X)
B.dO4(o,k,null)}else{B.dO4(o,k,null)
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
$S:52}
B.dT5.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dqg.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dqh.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:604}
B.drf.prototype={
$0(){return this.a.gh6()},
$S:1}
B.drg.prototype={
$0(){return this.a.gh6()},
$S:1}
B.drh.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gEH()
else x=x.gh6()&&x.ghz()
return x},
$S:1}
B.dri.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gEH()
else w=x.gh6()&&x.ghz()
if(w)x.Zp()},
$S:2}
B.dre.prototype={
$1(d){return this.a.cjV()},
$S:2}
B.dr0.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dqA.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dqB.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dqk.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dqC.prototype={
$0(){return null},
$S:16}
B.dqz.prototype={
$0(){var x=A.mH(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dqH.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.hb},
$S:0}
B.dqI.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.AM(w.b,w.gctk(),"Telegram Mini App",null,C.iP,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dqJ.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.buz(this.b,D.jj)},
$S:0}
B.dqK.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jj},
$S:0}
B.dqm.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.hb},
$S:0}
B.dqn.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.hb},
$S:0}
B.dqo.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dqp.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ji},
$S:0}
B.dqq.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ji},
$S:0}
B.dqr.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jj:D.hb},
$S:0}
B.dqs.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jj:x},
$S:0}
B.dqt.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.ip},
$S:0}
B.dqu.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cfc(x.r)
if(w==null)x=x.b===!0?null:D.jj
else x=w
v.ok=x},
$S:0}
B.dqv.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buz(this.b,D.jj)},
$S:0}
B.dqw.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jj},
$S:0}
B.dqS.prototype={
$0(){return this.a.ok=D.hb},
$S:0}
B.dqT.prototype={
$0(){return this.a.ok=D.hb},
$S:0}
B.dqU.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dqV.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.ji},
$S:0}
B.dqW.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.ji},
$S:0}
B.dqX.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dqY.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Rc?D.tb:D.EK},
$S:0}
B.dqZ.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dr_.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.xp},
$S:0}
B.dr3.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.ip},
$S:0}
B.dr4.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.dr5.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ji},
$S:0}
B.dr6.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ip},
$S:0}
B.dr7.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.ip},
$S:0}
B.dr8.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.dr9.prototype={
$0(){var x=this.a
x.f=x.c7V()
x.k2=!1},
$S:0}
B.dra.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buz(this.b,D.ip)},
$S:0}
B.drb.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ip},
$S:0}
B.dqL.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dqM.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ip},
$S:0}
B.dqN.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ji},
$S:0}
B.dqO.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ji},
$S:0}
B.dqP.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dqQ.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dqR.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ip},
$S:0}
B.dqD.prototype={
$0(){return this.a.cgr("game-access")},
$S:27}
B.dqE.prototype={
$2(d,e){return $.iL().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:39}
B.dqx.prototype={
$2(d,e){return $.iL().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:39}
B.dqF.prototype={
$0(){return this.a.cgr("game-session")},
$S:27}
B.dqG.prototype={
$2(d,e){return $.iL().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:39}
B.dqy.prototype={
$2(d,e){return $.iL().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:39}
B.drc.prototype={
$0(){if(this.a.gh6())A.aN(this.b,!1).f.gkW().i3(0,A.a([A.jg(null,null)],y.Q))},
$S:0}
B.drd.prototype={
$0(){return this.a.gh6()},
$S:1}
B.dqi.prototype={
$0(){return this.a.dfP(this.b.gqK())},
$S:0}
B.dqj.prototype={
$0(){this.a.bPx()
return null},
$S:0}
B.dql.prototype={
$1(d){return this.cB8(d)},
cB8(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
h=h.brs()
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh6()&&g.ghz()))A.V(C.ap)
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
return A.c(A.ac(j,!1).Ho(),$async$$1)
case 20:if(!g.ghz()){x=1
break}g=g.cct(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:573}
B.dr1.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.vu(),$async$$0)
case 6:s=e
r=new B.dr2(p,s)
r.$0()
p=y.H
x=7
return A.c(A.eK(D.aKA,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.eK(D.aKi,null,p),$async$$0)
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
$S:52}
B.dr2.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gEH()
else x=w.gh6()&&w.ghz()
if(!x)return
w=v.f!=null?w.as:null
B.eoO(this.b,w)},
$S:0}
B.bCS.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.dn(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.amC(w)
u=A.G(8)
t=A.aL(C.G.B(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aX(C.G,C.B),C.aE,k,k)],q)
if(x.x){w=j.gKw()
p=s.z
w=A.a([H.dW,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.G.B(0.72)),C.aE,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gX5()
if(o)p="-"
o=j.gX0()
m=x.f
if(m==null)m="-"
C.d.v(w,A.a([I.Jl,new B.alx(n,p,k),new B.alx(o,m,k)],q))}C.d.v(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.ax8:D.axW)
C.d.v(r,A.a([I.Jl,A.R(k,k,k,A.d(w,k,k,k,k,k,s,C.aE,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3g,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bi(C.lb,A.a([C.mo,A.d(w.c?j.gamD():j.gWV(),k,k,k,k,k,k,C.aE,k,k)],q),C.bz,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aE,k,k)}C.d.v(r,A.a([D.bII,A.c6(o,D.bZY,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqK()!==D.td
else w=!1
if(w)C.d.v(r,A.a([H.dW,A.aH(A.d(j.gamF(),k,k,k,k,k,k,C.aE,k,k),D.c_k,k,k,x.z,k,k)],q))
return A.b7(new A.bc(new A.az(0,1/0,i,1/0),A.aM(A.R(k,k,k,new A.bc(L.N8,new A.ca(new A.S(D.auj,k,t,u,k,k,C.r),C.aw,new A.J(C.aX,A.w(r,C.a9,k,C.e,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c6L,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aM1,k,k,C.y)},
$S:103};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.atv.prototype,"gc8T","tK",1)
x(v,"gcl8","cl9",1)
x(v,"gdBB","dBC",0)
w(v,"gbwe","vM",2)
x(v,"gc8_","cYS",0)
x(v,"gcRh","cRi",0)
x(v,"gchZ","dub",0)
x(v,"gdBz","dBA",0)
x(v,"gdBw","dBx",0)
x(v=B.atL.prototype,"gcjU","cjV",1)
w(v,"gdgW","bu4",3)
x(v,"gbN2","ask",0)
x(v,"gdob","a_t",0)
x(v,"gdBl","dBm",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bu,[B.bD7,B.doV,B.doM,B.dox,B.dou,B.dop,B.doI,B.doB,B.doz,B.dT3,B.dT6,B.dqg,B.dqh,B.dri,B.dre,B.dql])
w(A.eA,[B.pO,B.Dm,B.aGL,B.Nz])
w(A.A,[B.bCR,B.aGQ])
w(A.L,[B.ai5,B.aiw,B.F8])
w(A.U,[B.bf2,B.baT,B.atL])
v(B.atv,B.bf2)
w(A.bt,[B.doU,B.doC,B.doT,B.doN,B.doO,B.doP,B.doJ,B.doK,B.doL,B.dov,B.dow,B.dos,B.dot,B.doo,B.doE,B.doF,B.doG,B.doH,B.doD,B.doA,B.doy,B.doQ,B.doR,B.doS,B.doq,B.dor,B.dT2,B.dT4,B.dT7,B.dT5,B.drf,B.drg,B.drh,B.dr0,B.dqA,B.dqB,B.dqk,B.dqC,B.dqz,B.dqH,B.dqI,B.dqJ,B.dqK,B.dqm,B.dqn,B.dqo,B.dqp,B.dqq,B.dqr,B.dqs,B.dqt,B.dqu,B.dqv,B.dqw,B.dqS,B.dqT,B.dqU,B.dqV,B.dqW,B.dqX,B.dqY,B.dqZ,B.dr_,B.dr3,B.dr4,B.dr5,B.dr6,B.dr7,B.dr8,B.dr9,B.dra,B.drb,B.dqL,B.dqM,B.dqN,B.dqO,B.dqP,B.dqQ,B.dqR,B.dqD,B.dqF,B.drc,B.drd,B.dqi,B.dqj,B.dr1,B.dr2])
w(A.c9,[B.dqE,B.dqx,B.dqG,B.dqy,B.bCS])
w(A.x,[B.aGM,B.alx])
x(B.bf2,A.eu)})()
A.b_(b.typeUniverse,JSON.parse('{"ai5":{"L":[],"m":[]},"atv":{"U":["ai5"],"eu":[]},"aiw":{"L":[],"m":[]},"baT":{"U":["aiw"]},"F8":{"L":[],"m":[]},"atL":{"U":["F8"]},"aGM":{"x":[],"m":[]},"alx":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.C
return{J:x("by"),u:x("B<a1<n,@>?>"),T:x("Dn"),w:x("lN"),Q:x("v<bV<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a1<n,@>"),f:x("a1<@,@>"),a:x("b8"),A:x("Mg"),N:x("n"),x:x("UM"),r:x("ft"),E:x("eb"),O:x("K<n>"),y:x("F"),z:x("@"),S:x("y"),h:x("a1<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.auj=new A.a3(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.ax8=new A.a3(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.axW=new A.a3(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.ayv=new A.a3(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aKi=new A.bG(175e4)
D.aKA=new A.bG(75e4)
D.aM1=new A.ar(20,64,20,24)
D.R5=new B.aGL(0,"purchase")
D.aPQ=new B.aGL(1,"session")
D.ji=new B.pO(0,"signInRequired")
D.t8=new B.pO(1,"telegramAccountNotLinked")
D.jj=new B.pO(10,"requestFailed")
D.xp=new B.pO(11,"purchaseFailed")
D.ip=new B.pO(12,"sessionFailed")
D.t9=new B.pO(2,"insufficientBalance")
D.ta=new B.pO(3,"walletInactive")
D.tb=new B.pO(4,"refundPending")
D.tc=new B.pO(5,"accessExpired")
D.xq=new B.pO(6,"accessRequired")
D.hb=new B.pO(7,"gameUnavailable")
D.EK=new B.pO(8,"accessNotActive")
D.R6=new B.pO(9,"sessionDenied")
D.R7=new B.Dm(0,"none")
D.aPR=new B.Dm(1,"signIn")
D.aPS=new B.Dm(2,"bindTelegram")
D.aPT=new B.Dm(3,"topUp")
D.aPU=new B.Dm(4,"purchase")
D.aPV=new B.Dm(5,"openGame")
D.td=new B.Dm(6,"retry")
D.aUk=new A.at(C.kn,null,C.G,null,null)
D.bsf=new A.J(C.Y,C.bX,null)
D.att=new A.o_(2.5,null,null,null,null,null,null,null,null,null)
D.bIG=new A.ad(28,28,D.att,null)
D.bII=new A.ad(null,22,null,null)
D.bZY=new A.K("slot-game-access-primary",y.O)
D.c_k=new A.K("slot-game-access-refresh",y.O)
D.c2r=new A.K("gameV2Confirm",y.O)
D.c2s=new A.K("gameV2Message",y.O)
D.c2t=new A.K("gameV2Page",y.O)
D.c3g=new A.K("slot-game-access-message",y.O)
D.c4O=new A.K("retiredSlotHome",y.O)
D.c6L=new A.K("slot-game-access-gate",y.O)
D.ahh=new B.Nz(0,"request")
D.ahi=new B.Nz(1,"pending")
D.ahj=new B.Nz(2,"launchPending")
D.ahk=new B.Nz(3,"storage")
D.Lc=new B.Nz(4,"unavailable")
D.Ld=new B.Nz(5,"expired")})();(function staticFields(){$.ack=function(){var x=y.N
return A.q(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fbi","etc",()=>A.ay("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"fcs","iL",()=>A.b6("SlotGamePage"))})()};
(a=>{a["5e+X9yX8wGMwSm6489PbQRlWdA0="]=a.current})($__dart_deferred_initializers__);