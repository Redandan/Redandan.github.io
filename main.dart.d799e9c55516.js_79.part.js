((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,H,B={
e5J(){var x,w,v=$.oY(),u=J.f9(16,y.S)
for(x=0;x<16;++x)u[x]=v.mE(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.C(u,new B.bze(),A.V(u).k("C<1,n>")).lf(0)
return C.c.am(w,0,8)+"-"+C.c.am(w,8,12)+"-"+C.c.am(w,12,16)+"-"+C.c.am(w,16,20)+"-"+C.c.bV(w,20)},
bze:function bze(){},
dNc(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.rS
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.rT
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.rU
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.rV
if(C.c.t(x,"ACCESS_EXPIRED"))return D.rW
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.x5
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.h5
return null},
e_g(d,e,f){var x=e==null?null:C.c.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pf:function pf(d,e){this.a=d
this.b=e},
Cn:function Cn(d,e){this.a=d
this.b=e},
aEg:function aEg(d,e){this.a=d
this.b=e},
byY:function byY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Mo:function Mo(d,e){this.a=d
this.b=e},
ag_:function ag_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
are:function are(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
djP:function djP(d){this.a=d},
djQ:function djQ(d){this.a=d},
djH:function djH(d,e){this.a=d
this.b=e},
djx:function djx(d){this.a=d},
djO:function djO(d,e){this.a=d
this.b=e},
djI:function djI(d){this.a=d},
djJ:function djJ(d,e){this.a=d
this.b=e},
djK:function djK(d){this.a=d},
djE:function djE(d){this.a=d},
djF:function djF(d){this.a=d},
djG:function djG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djs:function djs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djq:function djq(d){this.a=d},
djr:function djr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djp:function djp(d){this.a=d},
djn:function djn(d,e){this.a=d
this.b=e},
djo:function djo(d,e){this.a=d
this.b=e},
djk:function djk(d){this.a=d},
djj:function djj(d){this.a=d},
djD:function djD(d){this.a=d},
djz:function djz(d,e){this.a=d
this.b=e},
djA:function djA(d,e){this.a=d
this.b=e},
djB:function djB(d,e){this.a=d
this.b=e},
djC:function djC(d,e){this.a=d
this.b=e},
djy:function djy(d){this.a=d},
djw:function djw(d){this.a=d},
djv:function djv(d,e){this.a=d
this.b=e},
dju:function dju(d){this.a=d},
djt:function djt(d,e,f){this.a=d
this.b=e
this.c=f},
djL:function djL(d){this.a=d},
djM:function djM(d){this.a=d},
djN:function djN(d){this.a=d},
djl:function djl(d){this.a=d},
djm:function djm(d){this.a=d},
bbr:function bbr(){},
eV2(d,e,f){var x=b.G,w=A.dI(new B.dNH(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dNG(w)},
eV3(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dI(new B.dNK(u,new B.dNI(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dNJ(w,x)},
dZm(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.ii(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
eiC(d,e){B.dIM(A.bF(d),b.G.window.location.origin,e)},
dIM(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ii(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.c.aV(u,e))v=!A.oX(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dNH:function dNH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNG:function dNG(d){this.a=d},
dNI:function dNI(d,e){this.a=d
this.b=e},
dNK:function dNK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNL:function dNL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
agp:function agp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7u:function b7u(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dlb:function dlb(d){this.a=d},
dlc:function dlc(d){this.a=d},
eaN(d,e){return new B.E6(d,e,null)},
E6:function E6(d,e,f){this.c=d
this.d=e
this.a=f},
aru:function aru(d,e,f,g){var _=this
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
dma:function dma(d){this.a=d},
dmb:function dmb(d){this.a=d},
dmc:function dmc(d){this.a=d},
dmd:function dmd(d){this.a=d},
dm9:function dm9(d){this.a=d},
dlW:function dlW(d){this.a=d},
dlv:function dlv(d,e){this.a=d
this.b=e},
dlw:function dlw(d){this.a=d},
dlf:function dlf(d,e){this.a=d
this.b=e},
dlx:function dlx(){},
dlu:function dlu(d,e){this.a=d
this.b=e},
dlC:function dlC(d,e){this.a=d
this.b=e},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlE:function dlE(d,e){this.a=d
this.b=e},
dlF:function dlF(d){this.a=d},
dlh:function dlh(d,e){this.a=d
this.b=e},
dli:function dli(d){this.a=d},
dlj:function dlj(d){this.a=d},
dlk:function dlk(d){this.a=d},
dll:function dll(d){this.a=d},
dlm:function dlm(d,e){this.a=d
this.b=e},
dln:function dln(d,e){this.a=d
this.b=e},
dlo:function dlo(d,e){this.a=d
this.b=e},
dlp:function dlp(d,e){this.a=d
this.b=e},
dlq:function dlq(d,e){this.a=d
this.b=e},
dlr:function dlr(d){this.a=d},
dlN:function dlN(d){this.a=d},
dlO:function dlO(d){this.a=d},
dlP:function dlP(d){this.a=d},
dlQ:function dlQ(d){this.a=d},
dlR:function dlR(d){this.a=d},
dlS:function dlS(d){this.a=d},
dlT:function dlT(d,e){this.a=d
this.b=e},
dlU:function dlU(d,e){this.a=d
this.b=e},
dlV:function dlV(d){this.a=d},
dlZ:function dlZ(d){this.a=d},
dm_:function dm_(d){this.a=d},
dm0:function dm0(d){this.a=d},
dm1:function dm1(d){this.a=d},
dm2:function dm2(d){this.a=d},
dm3:function dm3(d,e,f){this.a=d
this.b=e
this.c=f},
dm4:function dm4(d){this.a=d},
dm5:function dm5(d,e){this.a=d
this.b=e},
dm6:function dm6(d){this.a=d},
dlG:function dlG(d){this.a=d},
dlH:function dlH(d){this.a=d},
dlI:function dlI(d){this.a=d},
dlJ:function dlJ(d){this.a=d},
dlK:function dlK(d){this.a=d},
dlL:function dlL(d){this.a=d},
dlM:function dlM(d){this.a=d},
dly:function dly(d){this.a=d},
dlz:function dlz(){},
dls:function dls(){},
dlA:function dlA(d){this.a=d},
dlB:function dlB(){},
dlt:function dlt(){},
dm7:function dm7(d,e){this.a=d
this.b=e},
dm8:function dm8(d){this.a=d},
dld:function dld(d,e){this.a=d
this.b=e},
dle:function dle(d){this.a=d},
dlg:function dlg(d,e,f){this.a=d
this.b=e
this.c=f},
dlX:function dlX(d){this.a=d},
dlY:function dlY(d,e){this.a=d
this.b=e},
aEh:function aEh(d,e,f,g,h,i,j,k,l,m){var _=this
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
byZ:function byZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajf:function ajf(d,e,f){this.c=d
this.d=e
this.a=f},
aEl:function aEl(d){this.a=d},
eD8(d){var x
if(d==null||d.length===0)return null
x=A.eaL().i(0,d)
return(x==null?null:x.e===C.iH)===!1?x:null},
Ck(d,e,f,g){var x=null
return B.evy(d,e,f,g)},
evy(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ck=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.aau.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.W7():k).$0(),$async$Ck)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.aau.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.pP(s,a0),$async$Ck)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.aau.h(0,a0,q)
x=15
return A.c(s.h1("String",a0,q),$async$Ck)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.pP(s,e),$async$Ck)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.pP(s,e),$async$Ck)
case 21:case 20:case 12:o=d.$0()
$.aau.h(0,a0,o)
x=22
return A.c(s.h1("String",a0,o),$async$Ck)
case 22:n=a2
if(!n){k=A.aO("Game access attempt id was not persisted.")
throw A.o(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
m=A.u(g)
l=A.aN(g)
f.$2(m,l)
v=$.aau.dv(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ck,w)},
aav(d,e){var x=null
return B.evx(d,e)},
evx(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$aav=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eE(0)
for(p=J.aZ(l);p.G();)$.aau.N(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.W7():p).$0(),$async$aav)
case 6:t=g
p=J.aZ(l)
case 7:if(!p.G()){x=8
break}s=p.gR()
o=s
t.a.N(0,o)
x=9
return A.c($.Wb().N(0,"flutter."+o),$async$aav)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aN(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$aav,w)}},D,E,F,G,N,O,P,Q,R,S,T,I
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
G=c[661]
N=c[744]
O=c[621]
P=c[191]
Q=c[783]
R=c[442]
S=c[487]
T=c[457]
I=c[551]
B.pf.prototype={
Y(){return"GameAccessIssue."+this.b}}
B.Cn.prototype={
Y(){return"GameAccessPrimaryAction."+this.b}}
B.aEg.prototype={
Y(){return"GameAccessAttemptKind."+this.b}}
B.byY.prototype={
gqr(){var x=this
if(x.b||x.c||!x.a)return D.Qc
if(x.f)return D.aLB
switch(x.r){case D.jb:return D.aLx
case D.rS:return D.aLy
case D.rT:case D.rU:return D.aLz
case D.rV:case D.h5:return D.Qc
case D.rW:case D.x5:case D.Ei:case D.Qb:case D.jc:case D.x4:return D.rX
case D.ih:return D.rX
case null:case void 0:if(x.e)return D.rX
return x.d?D.aLA:D.rX}}}
B.Mo.prototype={
Y(){return"_GameProblem."+this.b}}
B.ag_.prototype={
P(){return new B.are()},
dXt(){return this.f.$0()},
e_Q(){return this.r.$0()}}
B.are.prototype={
gbKm(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dNc(v)}else v=w
return v},
gc92(){var x,w=this.ch
if(w!=null)return w
x=this.r
if(x!=null)if(x.r)w=!x.x&&!x.y
else w=!0
else w=!1
if(!w){w=this.x
if(w==null)w=null
else{w=w.b
w=w==null?null:w.f}w=w!=null}else w=!0
return w?D.Kv:null},
ghD(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gM()&&x.a.dXt()},
X(){var x,w,v=this
v.a6()
x=$.am.RG$
v.ax=x==null||x===C.cx
w=A.iv(v.a.d.a.a,new B.djP(v))
v.d!==$&&A.aJ()
v.d=new E.adA(new A.Co(w))
v.a.e.a4(v.gcj5())
$.am.bq$.push(v)
$.am.y2$.push(new B.djQ(v))},
tn(){var x=this.z
if(x!=null)x.a8()
this.y=this.z=null},
bOd(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gf7())$.am.y2$.push(new B.djH(v,w))},
cj6(){var x=this
if(x.c==null||x.at||x.a.e.gM())return;++x.ay
x.bOd()
x.n(new B.djx(x))},
nX(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cx)x.bOd()
x.n(new B.djO(x,d))
if(x.ax&&x.ghD())x.tz(x.gbuY())},
q(){var x=this;++x.ay
x.bOd()
x.tn()
x.a.e.T(x.gcj5())
$.am.iL(x)
x.a5()},
c9J(d){var x
this.CW=d instanceof A.i9?B.dNc(d.b):null
if(d instanceof E.ph)x=D.ag1
else if(d instanceof E.uv)x=D.ag_
else if(d instanceof E.aax)x=D.ag0
else x=d instanceof E.Cm||d instanceof E.YR?D.Kv:D.afZ
this.ch=x},
tz(d){return this.dw7(d)},
dw7(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tz=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghD()){x=1
break}q=++r.ay
r.n(new B.djI(r))
u=4
x=7
return A.c(d.$1(q),$async$tz)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghD()&&J.p(q,r.ay))r.n(new B.djJ(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.djK(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tz,w)},
dyz(){return this.tz(this.gbuY())},
vk(d){return this.dsw(d)},
dsw(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$vk=A.h(function(e,f){if(e===1){u.push(f)
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
return A.c(p.pz(t.a.c),$async$vk)
case 9:g.b=f
v=1
x=8
break
case 6:v=5
i=u.pop()
if(!t.ghD()||d!==t.ay)A.W(C.ao)
x=8
break
case 5:x=1
break
case 8:if(!t.ghD()||d!==t.ay)A.W(C.ao)
p=k.b
n=t.d
m=t.a
x=p==null?10:12
break
case 10:n===$&&A.e()
p=m.c
n=n.a.a
l=n.c
if(!(l instanceof A.fE))A.W(C.x)
x=13
return A.c(E.bzj(n,l.b,new B.djE(t),p),$async$vk)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fE))A.W(C.x)
j=E.e5H(n,l.b,p,new B.djF(t),null,m)
case 11:k.a=j
if(!t.ghD()||d!==t.ay)A.W(C.ao)
if(j==null)throw A.o(new E.Cm())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e2G(),$async$vk)
case 14:s=f
if(!t.ghD()||d!==t.ay)A.W(C.ao)
x=15
return A.c(p.cvp(),$async$vk)
case 15:r=f
if(!t.ghD()||d!==t.ay)A.W(C.ao)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.qL(),$async$vk)
case 20:g.d=f
v=1
x=19
break
case 17:v=16
h=u.pop()
q=A.u(h)
if(!t.ghD()||d!==t.ay)A.W(C.ao)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghD()||d!==t.ay)A.W(C.ao)
t.n(new B.djG(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vk,w)},
atY(d,e,f){return this.cZe(d,e,f)},
cZe(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$atY=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghD()||d!==r.ay)A.W(C.ao)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cA()
n=r.c
n.toString
m=y.y
p.seU(A.BV(null,null,C.ai,!0,null,new B.djs(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aK(p.an(),m),$async$atY)
case 6:o=h
if(!r.ghD()||d!==r.ay)A.W(C.ao)
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
return A.k($async$atY,w)},
cW6(){return this.tz(new B.djp(this))},
cOx(){return this.tz(new B.djk(this))},
drb(){return this.tz(new B.djD(this))},
dyx(){return this.tz(new B.djw(this))},
dyu(){return this.tz(new B.dju(this))},
a_v(d){return this.dle(d)},
dle(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_v=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghD()||u.as){x=1
break}++u.ay
u.n(u.gc71())
t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aK(d,y.X),$async$a_v)
case 3:x=u.ghD()?4:5
break
case 4:x=6
return A.c(u.tz(u.gbuY()),$async$a_v)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a_v,w)},
dyv(d){var x
switch(this.gbKm()){case D.rS:return d.gWf()
case D.rT:return d.gW5()
case D.rU:return d.gWd()
case D.rV:return d.gW8()
case D.rW:return d.gW4()
case D.x5:return d.gWa()
case D.h5:return d.gJQ()
default:break}x=null
switch(this.gc92()){case D.ag1:x=d.gacl()
break
case D.ag_:x=d.gU7()
break
case D.ag0:x=d.gU6()
break
case D.Kw:x=d.gacg()
break
case D.Kv:x=d.gJQ()
break
case D.afZ:x=d.gW2()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.b,y.J)
g.toString
x=i.f
w=x==null?h:x.gcr7()
if(w==null)w=g.galR()
if(i.at||!i.a.e.gM()){x=A.kv(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gWg(),h,h,h,h,h,h,C.aH,h,h)
u=i.a.r
return A.bN(x,h,new A.dA(!0,!0,!0,!0,C.K,!1,A.aK(new A.J(C.aW,A.w(A.a([v,M.du,A.c0(A.d(g.giX(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.I,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbKm()
o=i.dyv(g)
v=y.p
u=A.a([A.d(g.gJN(),h,h,h,h,h,h,h,h,h),C.S],v)
if(!x)C.d.B(u,A.a([i.bOX(g.gWe(),t.b+" USDT"),i.bOX(g.gW9(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(K.eo,A.d(o,D.bYc,h,h,h,h,A.H(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bnw)
n=s==null
if(!n){m=A.d(g.gaci(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bOX(g.gtI(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gavP():g.gW6()
else k=s.c?g.gW7():g.gU7()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.S],v)
if(!j||s.c)k.push(i.DI("gameV2AcknowledgePurchase",g.gacc(),i.gcOw()))
else k.push(i.DI("gameV2RetryPurchase",g.gack(),i.gc69()))
u.push(A.d6(new A.J(C.E,A.w(k,C.ab,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.DI("gameV2Purchase",g.gWb(),i.gc69()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jE.t(0,m.a))===!0?g.gacf():g.gU6(),h,h,h,h,h,h,h,h,h),C.S],v)
if(i.y!=null&&q)k.push(i.DI("gameV2Open",g.gwK(),i.gdyw()))
j=!1
if(n)if(q)if((l?h:F.jE.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jE.t(0,m.a))===!0?g.gU8():g.gU9()
k.push(i.DI("gameV2Reissue",j,i.gcg_()))}if((l?h:F.jE.t(0,m.a))!==!0)k.push(i.bIV("gameV2End",g.gace(),i.gdyt(),!0))
u.push(A.d6(new A.J(C.E,A.w(k,C.ab,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.DI("gameV2Prepare",g.gU8(),i.gcg_()))
if(p===D.rS)u.push(i.DI("gameV2BindTelegram",g.gQu(),new B.djL(i)))
if(p===D.rT||p===D.rU)u.push(i.DI("gameV2TopUp",g.gWc(),new B.djM(i)))
u.push(i.bIV("gameV2CheckOriginal",g.gacd(),i.gdyy(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bN(A.kv(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,P.e1V(new B.djN(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dA(!0,!1,!0,!0,C.K,!1,A.eE(A.a([A.aK(new A.ba(C.vE,A.w(u,C.ab,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.bYd,Q.P4,h,h,C.y,!1),h),h,h,h,h,h)},
bOX(d,e){var x=null
return new A.J(R.Dh,A.bh(C.l4,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ad,x,4,16),x)},
bIV(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.djl(f)
x=A.fi(A.d(e,w,w,w,w,w,w,C.aH,w,w),new A.K(d,v),x,w)
v=x}else{x=this.as?w:new B.djm(f)
x=A.c0(A.d(e,w,w,w,w,w,w,C.aH,w,w),new A.K(d,v),x,w)
v=x}return new A.J(S.De,v,w)},
DI(d,e,f){return this.bIV(d,e,f,!1)}}
B.bbr.prototype={}
B.agp.prototype={
P(){return new B.b7u()}}
B.b7u.prototype={
X(){var x,w,v,u=this
u.a6()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.aJ()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.aJ()
u.e=w
v=u.a.d
if(v!=null)w.id=v
v=A.dI(new B.dlb(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.aws()
$.B_().a8Z(x,new B.dlc(u),!0)},
aT(d){var x,w
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
return new A.PN(x,null,null,C.zt,null)}}
B.E6.prototype={
P(){var x=$.ak()
return new B.aru(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.oY().mE(1073741824),x.$1$0(y.x))}}
B.aru.prototype={
gh_(){if(this.c!=null){var x=this.z
x=x==null?null:x.gM()
x=x!==!1}else x=!1
return x},
gE6(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gM()
if(x!==!1)if(w.gh_()){v=w.x
v===$&&A.e()
v=v.gM()}}return v},
ghr(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.np
if(w!=null)w.cY()
x=u.at
if(x!=null&&u.w.m9(x))return!0}catch(v){if(!(A.u(v) instanceof A.Iv))throw v}u.ax=!0
u.CW=null
return!1},
gbuL(){var x,w=this.ay
if(w===$){x=$.ak().$1$0(y.T)
this.ay!==$&&A.bg()
w=this.ay=new E.adA(x)}return w},
X(){var x,w,v,u,t,s=this
s.a6()
x=$.ak()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.iS(x.$1$0(y.E),s.w)
x.a4(s.gchR())
s.y=x}if(v)s.at=s.w.bSa()
x=u?w.dUq(new B.dma(s)):w
s.x!==$&&A.aJ()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.Zc()
return}t=s.d=B.eD8(v.c)
if(t==null){s.k2=!1
s.ok=D.h5
return}if(!t.gbVY()){s.k2=!1
s.ok=D.h5
return}if(t.e!==C.iH){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.eV2(s.gbLF(),v,new B.dmb(s))
x=x.f!=null?s.as:null
s.p2=B.eV3(s.gde7(),x,new B.dmc(s))
$.am.y2$.push(new B.dmd(s))
s.cy=s.asl()
return}},
aZ(){var x,w,v=this
v.by()
x=v.c
x.toString
v.z=A.co(x,null,y.X)
x=v.y
if((x==null?null:x.gM())===!1)$.am.y2$.push(new B.dm9(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iH){v.k1=!0
v.f=v.c64()}},
chS(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gM())!==!1}if(w)return
B.eiC(A.Z(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dlW(x))},
Yv(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Yv=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.aqd(),$async$Yv)
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
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
x=14
return A.c(s.w.ik(),$async$Yv)
case 14:r=e
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
if(s.c!=null&&r!=null)try{if(!(s.gh_()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.ix().m(C.aO,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gh_()&&s.ghr())){x=1
break}$.ix().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
x=19
return A.c(s.r.i7(!0),$async$Yv)
case 19:o=e
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dlv(s,n))
try{j=J.a65(n,4)
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.ix().m(C.aO,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh_()&&s.ghr())s.n(new B.dlw(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Yv,w)},
v4(){return this.cT_()},
cT_(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$v4=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.aqd(),$async$v4)
case 5:h=b0
x=6
return A.c(s.YJ(),$async$v4)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cFu(),$async$v4)
case 11:r=b0
u=2
x=10
break
case 8:u=7
a4=t.pop()
r=A.Z(["status","unavailable"],y.N,y.z)
x=10
break
case 7:x=2
break
case 10:if(!s.gE6())throw A.o(C.ao)
a2=A.mh(h.i(0,"balance"))
e=a2==null?null:a2
if(e==null)e=0
a2=A.r(y.N,y.z)
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
case 4:if(!(s.gh_()&&s.ghr()))A.W(C.ao)
a3=s.w
d=s.at
d.toString
q=a3.a3u(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.ik(),$async$v4)
case 18:q=b0
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.ix().m(C.aO,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.CO(),$async$v4)
case 26:m=b0
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dlf(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.ix().m(C.aO,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=25
break
case 22:x=2
break
case 25:x=20
break
case 21:u=28
x=31
return A.c(s.r.CO(),$async$v4)
case 31:j=b0
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.YJ(),$async$v4)
case 32:g=b0
if(!(s.gh_()&&s.ghr()))A.W(C.ao)
d=A.r(y.N,y.z)
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
return A.k($async$v4,w)},
YJ(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$YJ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.asl()
v=t.rW(C.OJ,new B.dlx())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$YJ,w)},
aqd(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$aqd=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gE6())throw A.o(C.ao)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jL(),$async$aqd)
case 3:s=e
if(!u.gE6())throw A.o(C.ao)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dlu(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aqd,w)},
asl(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$asl=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bos(k.a),$async$asl)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.ot(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.H.av(p,null)
if(!(r.gh_()&&r.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.ix().m(C.aO,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
j=t.pop()
n=A.u(j)
$.ix().m(C.t,"_getSlotRtpData failed",n,null)
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
return A.k($async$asl,w)},
Zc(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Zc=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbuL().pz(l),$async$Zc)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dlC(s,r))
x=1
break}s.n(new B.dlD(s,r))
x=8
return A.c(s.tm(),$async$Zc)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.i9){q=m
$.ix().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dlE(s,q))}else{p=m
o=A.aN(k)
m=$.ix()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dlF(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zc,w)},
tm(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tm=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iH){if(s.c==null){x=1
break}s.n(new B.dlh(s,f))
x=1
break}if(!f.gbVY()){if(s.c==null){x=1
break}s.n(new B.dli(s))
x=1
break}if(s.c!=null)s.n(new B.dlj(s))
u=4
x=7
return A.c(s.w.ik(),$async$tm)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dlk(s))
x=1
break}if(s.c==null){x=1
break}q=s.bq8(r)
if(q==null){s.n(new B.dll(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbuL().a
if(k.a.c instanceof A.fE)A.W(C.x)
x=8
return A.c(k.I6(d),$async$tm)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dlm(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cdh(p.r)
if(p.b!==!0||o!=null){s.n(new B.dln(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dlo(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.ih)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dBw(!0),$async$tm)
case 13:case 12:x=1
break
case 10:s.n(new B.dlp(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.i9){m=k
$.ix().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dlq(s,m))}else{l=k
$.ix().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dlr(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tm,w)},
bO8(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.Zc()
return w.tm()},
vi(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vi=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iH){if(s.c==null){x=1
break}if(h)s.n(new B.dlN(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dlO(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tm(),$async$vi)
case 5:x=1
break
case 4:s.n(new B.dlP(s))
u=7
x=10
return A.c(s.w.ik(),$async$vi)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dlQ(s))
x=1
break}if(s.c==null){x=1
break}o=s.bq8(p)
if(o==null){s.n(new B.dlR(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bOn(o)
x=13
return A.c(s.tm(),$async$vi)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bMN(),$async$vi)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbuL().a
if(h.a.c instanceof A.fE)A.W(C.x)
x=15
return A.c(h.RP(q,new E.aEk(n)),$async$vi)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Qg?16:17
break
case 16:x=18
return A.c(s.apX(),$async$vi)
case 18:if(s.c==null){x=1
break}s.n(new B.dlS(s))
x=19
return A.c(s.tm(),$async$vi)
case 19:x=1
break
case 17:s.n(new B.dlT(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.i9?20:22
break
case 20:l=h
$.ix().m(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.btk(l,D.x4)
f=l.b.toUpperCase()
x=k===D.rW||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.apX(),$async$vi)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dlU(s,k))
x=21
break
case 22:j=h
$.ix().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dlV(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vi,w)},
oP(d,e){return this.dBx(d,!0)},
dBw(d){return this.oP(!0,d)},
dBx(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$oP=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iH){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.dlZ(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dm_(s))
u=4
x=7
return A.c(s.w.ik(),$async$oP)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bq8(p)
if(o==null){s.n(new B.dm0(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bOn(o)
x=10
return A.c(s.tm(),$async$oP)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.zY(!0),$async$oP)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.dm1(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bMO(),$async$oP)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.JZ(b6.a,new B.aEl(n)),$async$oP)
case 15:m=c2
l=new A.aE(Date.now(),0,!1).a2()
k=m==null?null:E.eiu(m.w)
j=m==null?null:E.dOe(m.f)
i=m==null?null:E.dOe(m.r)
h=m==null?null:E.dOe(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Qi
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a2().dm(l.a2()).a)<=3e8
b2=i
a2=(b2==null?null:b2.i1(l))===!0
b2=h
a3=(b2==null?null:b2.i1(l))===!0
a4=h!=null&&i!=null&&!h.i1(i)
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
$.ix().m(C.t,"game session response rejected: "+J.bdl(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.KV(b6.a,!0,m.a),$async$oP)
case 20:case 19:x=21
return A.c(s.XP(),$async$oP)
case 21:if(s.c==null){x=1
break}s.n(new B.dm2(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.zY(!0),$async$oP)
case 24:x=1
break
case 23:x=b6.e===C.iH?25:26
break
case 25:s.n(new B.dm3(s,k,h))
x=27
return A.c(s.Ab(),$async$oP)
case 27:x=1
break
case 26:s.n(new B.dm4(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.i9?28:30
break
case 28:a9=a7
$.ix().m(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.XP(),$async$oP)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.oP(!1,!0),$async$oP)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dm5(s,a9))
x=29
break
case 30:b0=a7
$.ix().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.dm6(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oP,w)},
Ab(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ab=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.dlG(s))
x=!k.i1(new A.aE(Date.now(),0,!1).a2())?3:4
break
case 3:x=5
return A.c(s.zY(!0),$async$Ab)
case 5:if(s.c==null){x=1
break}s.n(new B.dlH(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.ik(),$async$Ab)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aN(f)
h=$.ix()
h.m(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dlI(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bq8(q)
if(g==null){s.n(new B.dlJ(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bOn(g)
x=13
return A.c(s.tm(),$async$Ab)
case 13:x=1
break
case 12:u=15
s.n(new B.dlK(s))
x=18
return A.c(A.tV(r,C.ly,"_self"),$async$Ab)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dlL(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aN(e)
h=$.ix()
h.m(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.zY(!0),$async$Ab)
case 19:if(s.c==null){x=1
break}s.n(new B.dlM(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ab,w)},
zY(d){return this.d3o(!0)},
d3o(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$zY=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.KV(p.a,!0,n)
r.k4=q
u=3
x=6
return A.c(q,$async$zY)
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
return A.k($async$zY,w)},
KV(d,e,f){return this.d3v(d,!0,f)},
d3v(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$KV=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.OS(d,f),$async$KV)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.ix().m(C.aO,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.eD(C.D3,null,l),$async$KV)
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
return A.c(s.XP(),$async$KV)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$KV,w)},
bMN(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bMN=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcgq()
v=B.Ck(new B.dly(u),u.gcds(),new B.dlz(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bMN,w)},
apX(){var x=0,w=A.l(y.H),v=this
var $async$apX=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aav(new B.dls(),A.dG([v.gcgq(),v.gcds()],y.N)),$async$apX)
case 2:return A.j(null,w)}})
return A.k($async$apX,w)},
bMO(){var x=0,w=A.l(y.N),v,u=this
var $async$bMO=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Ck(new B.dlA(u),null,new B.dlB(),u.gcj3())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bMO,w)},
XP(){var x=0,w=A.l(y.H),v=this
var $async$XP=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aav(new B.dlt(),A.dG([v.gcj3()],y.N)),$async$XP)
case 2:return A.j(null,w)}})
return A.k($async$XP,w)},
bq8(d){var x=A.bDj(d),w=x==null?null:C.c.F(x)
return w==null||w.length===0?null:w},
bOn(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcgq(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e_g(D.Qa,this.fx,"product-"+x)},
gcds(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e_g(D.Qa,this.fx,x)},
gcj3(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e_g(D.aLw,this.fx,x)},
cev(d){var x,w=Date.now(),v=C.h.jJ($.oY().mE(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cdh(d){var x=B.dNc(d)
if(x!=null)return x
return d==null||C.c.F(d).length===0?null:D.jc},
btk(d,e){var x,w=d.a
if(w===401)return D.jb
x=B.dNc(d.b)
if(x!=null)return x
if(w===404)return D.h5
return e},
dkA(d,e){switch(e){case D.jb:return d.galP()
case D.rS:return d.gWf()
case D.rT:return d.gW5()
case D.rU:return d.gWd()
case D.rV:return d.gW8()
case D.rW:return d.gW4()
case D.x5:return d.gWa()
case D.h5:return d.gJQ()
case D.Ei:return d.gW6()
case D.Qb:return d.galS()
case D.jc:return d.gW2()
case D.x4:return d.gW7()
case D.ih:return d.galT()
case null:case void 0:return null}},
bsQ(d){return this.de8(d)},
de8(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bsQ=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gE6()
else t=u.gh_()&&u.ghr()
if(!t){v=null
x=1
break}x=3
return A.c(u.A6(d),$async$bsQ)
case 3:s=f
if(r.f!=null)r=u.gE6()
else r=u.gh_()&&u.ghr()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bsQ,w)},
A6(d){return this.d9n(d)},
d9n(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$A6=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.ari()
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
case 5:v=s.v4()
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
return A.c(k.avM(A.b8(c0.i(0,"operationId"))),$async$A6)
case 23:p=A.Z(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.JR(b4==="SPIN_RETRY_REQUEST"?A.b8(c0.i(0,"operationId")):null),$async$A6)
case 24:q=c2
p=A.r(y.N,y.z)
J.dq(p,"type","SPIN_RECOVERY_RESULT")
J.fp(p,q)
v=p
x=1
break
u=2
x=20
break
case 18:u=17
b5=t.pop()
v=A.Z(["type",b4==="SPIN_ACK_REQUEST"?"SPIN_ACK_ERROR":"SPIN_RECOVERY_ERROR","message","\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u7a0d\u5f8c\u91cd\u65b0\u67e5\u8a62\u3002"],y.N,y.z)
x=1
break
x=20
break
case 17:x=2
break
case 20:x=4
break
case 9:p=s.c
if(p!=null)A.aM(p,!1).f.aK(G.oK,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aM(p,!1).f.aK(N.AP,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aM(p,!1).f.aK(O.qs,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a5O(c0.i(0,"betIndex"),4)
else{b3=A.mh(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.da(b3)}o=a5
a6=A.mh(c0.i(0,"betAmount"))
n=a6==null?null:a6
if(o==null||n==null){p=A.Z(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=p
x=1
break}b3=r.a
a7=A.b3(c0.i(0,"mode"))
if(a7==null)a7="REAL"
a8=A.b3(c0.i(0,"clientSeed"))
if(c0.i(0,"nonce")==null)a9=null
else a9=p.f!=null?""+A.a5O(c0.i(0,"nonce"),9007199254740991):J.as(c0.i(0,"nonce"))
x=29
return A.c(p.Di(n,o,A.b3(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$A6)
case 29:m=c2
l=J.ax(m,"data")
if(J.p(J.ax(m,"success"),!0)&&y.P.b(l)){k=A.r(y.N,y.z)
J.dq(k,"type","SPIN_RESULT")
J.fp(k,l)
v=k
x=1
break}p=J.ax(m,"message")
p=A.Z(["type","SPIN_ERROR","message",J.as(p==null?"spin failed":p)],y.N,y.z)
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
v=A.Z(["type","SPIN_ERROR","message",p.f!=null?"\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u5148\u67e5\u8a62\u4e0a\u4e00\u5c40\u3002":J.as(j)],y.N,y.z)
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
return A.c(p.jL(),$async$A6)
case 34:i=c2
if(J.p(J.ax(i,"success"),!0)){p=y.h
h=p.a(J.ax(i,"data"))
i=h
p=p.a(i==null?null:J.ax(i,"userInfo"))
b0=p==null?h:p
g=b0==null?A.r(y.N,y.z):b0
p=A.mh(J.ax(g,"balance"))
if(p==null)p=null
p=A.Z(["type","BALANCE_RESULT","balance",p==null?0:p],y.N,y.z)
v=p
x=1
break}p=J.ax(i,"message")
p=A.Z(["type","BALANCE_ERROR","message",J.as(p==null?"getCurrentUser failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=33
break
case 31:u=30
b7=t.pop()
f=A.u(b7)
p=A.Z(["type","BALANCE_ERROR","message",J.as(f)],y.N,y.z)
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
return A.c(s.YJ(),$async$A6)
case 39:e=c2
if(e!=null){p=A.Z(["type","RTP_RESULT","data",e],y.N,y.z)
v=p
x=1
break}p=A.Z(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=p
x=1
break
u=2
x=38
break
case 36:u=35
b8=t.pop()
d=A.u(b8)
p=A.Z(["type","RTP_ERROR","message",J.as(d)],y.N,y.z)
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
p=A.mh(c0.i(0,"page"))
b1=p==null?null:C.k.da(p)
a0=b1==null?1:b1
p=A.mh(c0.i(0,"size"))
b2=p==null?null:C.k.da(p)
a1=b2==null?10:b2
p=s.x
p===$&&A.e()
x=44
return A.c(p.acF(a0,a1),$async$A6)
case 44:a2=c2
if(J.p(J.ax(a2,"success"),!0)){p=A.Z(["type","TRANSACTION_RESULT","data",J.ax(a2,"data")],y.N,y.z)
v=p
x=1
break}p=J.ax(a2,"message")
p=A.Z(["type","TRANSACTION_ERROR","message",J.as(p==null?"getTransactions failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=43
break
case 41:u=40
b9=t.pop()
a3=A.u(b9)
p=A.Z(["type","TRANSACTION_ERROR","message",J.as(a3)],y.N,y.z)
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
return A.k($async$A6,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gchR())
w=x.y
if(w!=null)w.q()
w=x.p1
if(w!=null)w.$0()
w=x.p2
if(w!=null)w.$0()
if(!x.go)x.zY(!0)
x.a5()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.b,y.J)
r.toString
if(t.Q){x=t.d
x=x==null?s:x.b
return A.bN(A.kv(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dA(!0,!0,!0,!0,C.K,!1,A.aK(A.b5(A.w(A.a([A.d(r.gWg(),s,s,s,s,s,s,C.aH,s,s),C.a8,A.c0(A.d(r.gym(),s,s,s,s,s,s,s,s,s),D.c_q,new B.dm7(t,d),s)],y.p),C.l,s,C.e,C.I,0,C.j),C.q,s,C.w,s,s,C.aW,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbuL()
v=t.y
v.toString
return new B.ag_(x,r,v,new B.dm8(t),t.gdlj(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.B(v,A.a([w,A.es(0,A.hM(C.bE,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbLF(),s,s,s,s,s,s,!1,C.c5),108,s,0,s,s,75)],x))
else v.push(t.cRh(d))
if(u)v.push(new A.dA(!0,!0,!0,!0,C.K,!1,new A.cc(C.hs,s,s,A.aQ(s,s,s,s,s,D.aQ_,s,s,t.gbLF(),s,s,s,s,r.giX(),s),s),s))
return A.bN(s,D.auw,new A.cT(C.aY,s,C.aT,C.q,v,s),s,s,s,s,s)},
cRh(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.b,y.J)
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
if(s){u=e.fy?a0.gJO():a0.gW3()
if(e.fy){a0=a0.gJO()
r=A.t(a1).ok.y
a0=new A.J(C.aW,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.G.A(0.78)),C.aH,d,d),d)}else a0=D.bDM
return A.aK(A.Q(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.c.F(A.b(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.c.F(A.b(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbVY())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.byY(r,p,l,k===!0,u===!0,!j,i)
g=e.dkA(a0,i)
if(e.fy)f=a0.gJO()
else f=j?d:a0.galM()
u=x==null?d:x.b
a0=u==null?a0.galQ():u
u=g==null
r=u?f:g
return new B.aEh(a0,h,q,m,r,!u,!t,new B.dld(e,h),new B.dle(e),d)},
dd0(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aM(x,!1).f.aK(C.cN,y.X)
return
case 2:w.asM()
return
case 3:x=w.c
x.toString
A.aM(x,!1).f.aK(G.oK,y.X)
return
case 4:w.vi()
return
case 5:w.Ab()
return
case 6:w.bO8()
return
case 0:return}},
asM(){var x=0,w=A.l(y.H),v,u=this,t
var $async$asM=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aK(C.ok,y.X),$async$asM)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bO8(),$async$asM)
case 4:case 1:return A.j(v,w)}})
return A.k($async$asM,w)},
ari(){var x=0,w=A.l(y.H),v,u=this
var $async$ari=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.Zx(),$async$ari)
case 3:case 1:return A.j(v,w)}})
return A.k($async$ari,w)},
Zx(){var x=0,w=A.l(y.H),v,u=this,t
var $async$Zx=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.zY(!0),$async$Zx)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).GH(),$async$Zx)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aM(t,!1).f.iy("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$Zx,w)},
c64(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ac
u=b.G.window.navigator.userAgent
x=$.emU()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.am.y2$.push(new B.dlg(w,v,t))
return C.Ae}u=w.caA(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.agp(u,x,w.gdyi(),null)},
caA(d,e){var x,w="/games/"+d,v=C.c.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dyj(){new B.dlX(this).$0()}}
B.aEh.prototype={
u(d){var x=A.f(d,C.b,y.J)
x.toString
return new A.dA(!0,!0,!0,!0,C.K,!1,A.da(new B.byZ(this,x,A.t(d),this.d5u(x))),null)},
d5u(d){switch(this.d.gqr().a){case 1:return d.gJP()
case 2:return d.gQu()
case 3:return d.gWc()
case 4:return d.gWb()
case 5:return d.gwK()
case 6:return d.galO()
case 0:return null}}}
B.ajf.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a1(C.G.A(0.58))
u=A.R(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aW(C.G,C.T)
return new A.J(T.eH,A.z(A.a([u,C.aj,new A.ed(1,C.bd,A.d(this.d,x,x,x,x,x,v,C.jF,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aEl.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aEl&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.c.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
v(){var x=A.r(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a1<n,@>?>(a1<n,@>)"])
B.bze.prototype={
$1(d){return C.c.cm(C.h.jJ(d,16),2,"0")},
$S:44}
B.djP.prototype={
$0(){return this.a.ghD()},
$S:1}
B.djQ.prototype={
$1(d){var x=this.a
if(x.ghD())x.tz(x.gbuY())
else x.cj6()},
$S:2}
B.djH.prototype={
$1(d){var x=this.a
if(x.gf7()&&this.b.c!=null)this.b.hg(x)},
$S:2}
B.djx.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tn()
x.e=x.x=x.w=x.r=null},
$S:0}
B.djO.prototype={
$0(){var x=this.a
x.ax=this.b===C.cx
x.as=!1
x.tn()},
$S:0}
B.djI.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.djJ.prototype={
$0(){return this.a.c9J(this.b)},
$S:0}
B.djK.prototype={
$0(){return this.a.as=!1},
$S:0}
B.djE.prototype={
$0(){return this.a.ghD()},
$S:1}
B.djF.prototype={
$0(){return this.a.ghD()},
$S:1}
B.djG.prototype={
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
x=x==null?s:F.jE.t(0,x.a)}if(x!==!0){x=r.x
w=x==null
if(w)v=s
else{v=x.b
v=v==null?s:v.b}if(v!==!0){if(w)x=s
else{x=x.b
x=x==null?s:x.f}x=x!=null}else x=u}else x=u}else x=u
else x=u
if(x)r.tn()
q=q.c
if(q!=null)r.c9J(q)},
$S:0}
B.djs.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.b,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.be(A.a([A.aF(A.d(s.gco(),t,t,t,t,t,t,t,t,t),t,t,t,new B.djq(v),t,t),A.c0(A.d(s.gju(),t,t,t,t,t,t,t,t,t),D.bYb,new B.djr(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.djq.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.djr.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gM()&&w.ax&&x.b.an().gM()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.djp.prototype={
$1(d){return this.cyt(d)},
cyt(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.YR())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.e5J()
k=h.a.c
j=g.e
l=E.e5E(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.b,y.J)
x=3
return A.c(h.atY(d,m.gNF(),m.ach(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghD()||d!==h.ay)A.W(C.ao)
u=5
x=8
return A.c(g.bYE(r),$async$$1)
case 8:q=a1
if(!h.ghD()||d!==h.ay)A.W(C.ao)
h.n(new B.djn(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aN(e)
if(!h.ghD()||d!==h.ay)A.W(C.ao)
x=9
return A.c(g.e1k(),$async$$1)
case 9:n=a1
if(!h.ghD()||d!==h.ay)A.W(C.ao)
h.n(new B.djo(h,n))
A.yJ(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:67}
B.djn.prototype={
$0(){var x=this.a
x.w=this.b
x.tn()},
$S:0}
B.djo.prototype={
$0(){var x=this.a
x.w=this.b
x.tn()},
$S:0}
B.djk.prototype={
$1(d){return this.cys(d)},
cys(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dJb(r.a),$async$$1)
case 3:if(!t.ghD()||d!==t.ay)A.W(C.ao)
if(!t.ghD()||d!==t.ay)A.W(C.ao)
t.n(new B.djj(t))
x=4
return A.c(t.vk(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.djj.prototype={
$0(){return this.a.w=null},
$S:0}
B.djD.prototype={
$1(d){return this.cyw(d)},
cyw(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Cm())
t=l.c
t.toString
t=A.f(t,C.b,y.J)
t.toString
x=3
return A.c(k.cvp(),$async$$1)
case 3:s=f
if(!l.ghD()||d!==l.ay)A.W(C.ao)
l.n(new B.djz(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jE.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.atY(d,t.gU9(),t.gacj()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jE.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dJa(s.a),$async$$1)
case 9:if(!l.ghD()||d!==l.ay)A.W(C.ao)
case 8:if(p)o=s.a
else{t=B.e5J()
r=l.a.c
q=k.e
t=E.e_h(t)
r=E.vB(r)
o=new E.aaw(t,E.dHO(q),r)}if(!l.ghD()||d!==l.ay)A.W(C.ao)
l.n(new B.djA(l,o))
x=10
return A.c(k.dXB(o,p),$async$$1)
case 10:n=f
if(!l.ghD()||d!==l.ay)A.W(C.ao)
l.n(new B.djB(l,n))
t=l.z
if(t!=null)t.a8()
m=n.b.dm(new A.aE(Date.now(),0,!1).a2())
t=m.a<0?C.b_:m
l.z=A.dt(t,new B.djC(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.djz.prototype={
$0(){this.a.x=this.b},
$S:0}
B.djA.prototype={
$0(){var x=this.a
x.tn()
x.x=new E.KY(this.b,null)},
$S:0}
B.djB.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.djC.prototype={
$0(){var x=this.a
if(x.ghD()&&x.y===this.b)x.n(new B.djy(x))},
$S:0}
B.djy.prototype={
$0(){var x=this.a
x.tn()
x.ch=D.Kw},
$S:0}
B.djw.prototype={
$1(d){return this.cyv(d)},
cyv(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Cm())
x=3
return A.c(p.vk(d),$async$$1)
case 3:if(!p.ghD()||d!==p.ay)A.W(C.ao)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.i1(new A.aE(Date.now(),0,!1).a2())||!n.b.i1(new A.aE(Date.now(),0,!1).a2())){if(!p.ghD()||d!==p.ay)A.W(C.ao)
p.n(new B.djv(p,t))
x=1
break}if(!p.ghD()||d!==p.ay)A.W(C.ao)
p.n(p.gc71())
p.a.toString
r=A.tV(n.a,C.ly,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghD()||d!==p.ay)A.W(C.ao)
if(!q)throw A.o(new E.uv())
x=5
return A.c(p.vk(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.djv.prototype={
$0(){var x=this.a
x.tn()
x.x=this.b
if(x.gbKm()==null&&x.gc92()==null)x.ch=D.Kw},
$S:0}
B.dju.prototype={
$1(d){return this.cyu(d)},
cyu(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dT_(q.a),$async$$1)
case 3:t=f
if(!s.ghD()||d!==s.ay)A.W(C.ao)
s.n(new B.djt(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.djt.prototype={
$0(){var x=this.a
x.tn()
x.x=new E.KY(this.b.a,this.c)},
$S:0}
B.djL.prototype={
$0(){return this.a.a_v(C.ok)},
$S:3}
B.djM.prototype={
$0(){return this.a.a_v(G.oK)},
$S:3}
B.djN.prototype={
$0(){var x=this.a;++x.ay
x.tn()
x.a.e_Q()},
$S:0}
B.djl.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.djm.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dNH.prototype={
$1(d){var x,w=this,v=A.ii(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.dZm(d,w.c))return
x=A.FD(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dNG.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dNI.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dNK.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.ii(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.dZm(d,r.c))return
w=A.FD(d.data)
if(!y.f.b(w))return
v=A.r(y.N,y.z)
for(u=w.gee(),u=u.gap(u);u.G();){t=u.gR()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ar("type"))return
new B.dNL(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dNL.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fN(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.dZm(s.d,s.e)){q=m.i(0,"requestId")
p=A.hx(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dq(p,"requestId",q)
o=A.bF(p)
p=s.e
if(p!=null){B.dIM(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.ii(n,"Object")
k=s.f
if(p){A.CC(n,"postMessage",o,k,y.X)
B.dIM(o,k,null)}else{B.dIM(o,k,null)
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
B.dNJ.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dlb.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dlc.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:602}
B.dma.prototype={
$0(){return this.a.gh_()},
$S:1}
B.dmb.prototype={
$0(){return this.a.gh_()},
$S:1}
B.dmc.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gE6()
else x=x.gh_()&&x.ghr()
return x},
$S:1}
B.dmd.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gE6()
else w=x.gh_()&&x.ghr()
if(w)x.Yv()},
$S:2}
B.dm9.prototype={
$1(d){return this.a.chS()},
$S:2}
B.dlW.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dlv.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dlw.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dlf.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dlx.prototype={
$0(){return null},
$S:16}
B.dlu.prototype={
$0(){var x=A.mh(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dlC.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.h5},
$S:0}
B.dlD.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.zV(w.b,w.gcr7(),"Telegram Mini App",null,C.iH,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dlE.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.btk(this.b,D.jc)},
$S:0}
B.dlF.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jc},
$S:0}
B.dlh.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.h5},
$S:0}
B.dli.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.h5},
$S:0}
B.dlj.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dlk.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jb},
$S:0}
B.dll.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jb},
$S:0}
B.dlm.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jc:D.h5},
$S:0}
B.dln.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jc:x},
$S:0}
B.dlo.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.ih},
$S:0}
B.dlp.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cdh(x.r)
if(w==null)x=x.b===!0?null:D.jc
else x=w
v.ok=x},
$S:0}
B.dlq.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.btk(this.b,D.jc)},
$S:0}
B.dlr.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jc},
$S:0}
B.dlN.prototype={
$0(){return this.a.ok=D.h5},
$S:0}
B.dlO.prototype={
$0(){return this.a.ok=D.h5},
$S:0}
B.dlP.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dlQ.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jb},
$S:0}
B.dlR.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jb},
$S:0}
B.dlS.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dlT.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Qh?D.rV:D.Ei},
$S:0}
B.dlU.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dlV.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.x4},
$S:0}
B.dlZ.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.ih},
$S:0}
B.dm_.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.dm0.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jb},
$S:0}
B.dm1.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ih},
$S:0}
B.dm2.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.ih},
$S:0}
B.dm3.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.dm4.prototype={
$0(){var x=this.a
x.f=x.c64()
x.k2=!1},
$S:0}
B.dm5.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.btk(this.b,D.ih)},
$S:0}
B.dm6.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ih},
$S:0}
B.dlG.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dlH.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ih},
$S:0}
B.dlI.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jb},
$S:0}
B.dlJ.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jb},
$S:0}
B.dlK.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dlL.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dlM.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ih},
$S:0}
B.dly.prototype={
$0(){return this.a.cev("game-access")},
$S:27}
B.dlz.prototype={
$2(d,e){return $.ix().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:38}
B.dls.prototype={
$2(d,e){return $.ix().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:38}
B.dlA.prototype={
$0(){return this.a.cev("game-session")},
$S:27}
B.dlB.prototype={
$2(d,e){return $.ix().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:38}
B.dlt.prototype={
$2(d,e){return $.ix().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:38}
B.dm7.prototype={
$0(){if(this.a.gh_())A.aM(this.b,!1).f.gkE().hW(0,A.a([A.j0(null,null)],y.Q))},
$S:0}
B.dm8.prototype={
$0(){return this.a.gh_()},
$S:1}
B.dld.prototype={
$0(){return this.a.dd0(this.b.gqr())},
$S:0}
B.dle.prototype={
$0(){this.a.bO8()
return null},
$S:0}
B.dlg.prototype={
$1(d){return this.cyx(d)},
cyx(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gh_()&&g.ghr())){x=1
break}u=4
x=7
return A.c(g.w.ik(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gh_()&&g.ghr()))A.W(C.ao)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.i7(!0),$async$$1)
case 14:p=a2
if(!(g.gh_()&&g.ghr()))A.W(C.ao)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gh_()&&g.ghr()))A.W(C.ao)
$.ix().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gh_()&&g.ghr()))A.W(C.ao)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a65(q,4)
if(!(g.gh_()&&g.ghr()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.bqd()
if(!(g.gh_()&&g.ghr()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh_()&&g.ghr()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.YJ(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.ix().m(C.aO,"RTP prefetch failed",n,null)
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
if(!(g.gh_()&&g.ghr())){x=1
break}$.ix().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gh_()&&g.ghr())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).GH(),$async$$1)
case 20:if(!g.ghr()){x=1
break}g=g.caA(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:571}
B.dlX.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.v4(),$async$$0)
case 6:s=e
r=new B.dlY(p,s)
r.$0()
p=y.H
x=7
return A.c(A.eD(D.aGq,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.eD(D.aG8,null,p),$async$$0)
case 8:r.$0()
v=1
x=5
break
case 3:v=2
n=u.pop()
q=A.u(n)
$.ix().m(C.aO,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:52}
B.dlY.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gE6()
else x=w.gh_()&&w.ghr()
if(!x)return
w=v.f!=null?w.as:null
B.eiC(this.b,w)},
$S:0}
B.byZ.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.dN(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.alK(w)
u=A.G(8)
t=A.aL(C.G.A(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aW(C.G,C.B),C.aH,k,k)],q)
if(x.x){w=j.gJN()
p=s.z
w=A.a([H.dT,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.G.A(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gWe()
if(o)p="-"
o=j.gW9()
m=x.f
if(m==null)m="-"
C.d.B(w,A.a([I.IU,new B.ajf(n,p,k),new B.ajf(o,m,k)],q))}C.d.B(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.at9:D.atX)
C.d.B(r,A.a([I.IU,A.Q(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bZ_,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bh(C.l3,A.a([C.nS,A.d(w.c?j.galL():j.gW3(),k,k,k,k,k,k,C.aH,k,k)],q),C.by,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.d.B(r,A.a([D.bDO,A.c0(o,D.bUJ,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqr()!==D.rX
else w=!1
if(w)C.d.B(r,A.a([H.dT,A.aF(A.d(j.galN(),k,k,k,k,k,k,C.aH,k,k),D.bV4,k,k,x.z,k,k)],q))
return A.b5(new A.ba(new A.ay(0,1/0,i,1/0),A.aK(A.Q(k,k,k,new A.ba(L.Mo,new A.c6(new A.S(D.asm,k,t,u,k,k,C.r),C.aw,new A.J(C.aW,A.w(r,C.ab,k,C.e,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c1n,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aHR,k,k,C.y)},
$S:104};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.are.prototype,"gc71","tn",1)
x(v,"gcj5","cj6",1)
x(v,"gdyy","dyz",0)
w(v,"gbuY","vk",2)
x(v,"gc69","cW6",0)
x(v,"gcOw","cOx",0)
x(v,"gcg_","drb",0)
x(v,"gdyw","dyx",0)
x(v,"gdyt","dyu",0)
x(v=B.aru.prototype,"gchR","chS",1)
w(v,"gde7","bsQ",3)
x(v,"gbLF","ari",0)
x(v,"gdlj","Zx",0)
x(v,"gdyi","dyj",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bt,[B.bze,B.djQ,B.djH,B.djs,B.djp,B.djk,B.djD,B.djw,B.dju,B.dNH,B.dNK,B.dlb,B.dlc,B.dmd,B.dm9,B.dlg])
w(A.ew,[B.pf,B.Cn,B.aEg,B.Mo])
w(A.A,[B.byY,B.aEl])
w(A.L,[B.ag_,B.agp,B.E6])
w(A.U,[B.bbr,B.b7u,B.aru])
v(B.are,B.bbr)
w(A.bs,[B.djP,B.djx,B.djO,B.djI,B.djJ,B.djK,B.djE,B.djF,B.djG,B.djq,B.djr,B.djn,B.djo,B.djj,B.djz,B.djA,B.djB,B.djC,B.djy,B.djv,B.djt,B.djL,B.djM,B.djN,B.djl,B.djm,B.dNG,B.dNI,B.dNL,B.dNJ,B.dma,B.dmb,B.dmc,B.dlW,B.dlv,B.dlw,B.dlf,B.dlx,B.dlu,B.dlC,B.dlD,B.dlE,B.dlF,B.dlh,B.dli,B.dlj,B.dlk,B.dll,B.dlm,B.dln,B.dlo,B.dlp,B.dlq,B.dlr,B.dlN,B.dlO,B.dlP,B.dlQ,B.dlR,B.dlS,B.dlT,B.dlU,B.dlV,B.dlZ,B.dm_,B.dm0,B.dm1,B.dm2,B.dm3,B.dm4,B.dm5,B.dm6,B.dlG,B.dlH,B.dlI,B.dlJ,B.dlK,B.dlL,B.dlM,B.dly,B.dlA,B.dm7,B.dm8,B.dld,B.dle,B.dlX,B.dlY])
w(A.c5,[B.dlz,B.dls,B.dlB,B.dlt,B.byZ])
w(A.x,[B.aEh,B.ajf])
x(B.bbr,A.em)})()
A.aY(b.typeUniverse,JSON.parse('{"ag_":{"L":[],"m":[]},"are":{"U":["ag_"],"em":[]},"agp":{"L":[],"m":[]},"b7u":{"U":["agp"]},"E6":{"L":[],"m":[]},"aru":{"U":["E6"]},"aEh":{"x":[],"m":[]},"ajf":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.F
return{J:x("bv"),u:x("B<a1<n,@>?>"),T:x("Co"),w:x("lp"),Q:x("v<bS<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a1<n,@>"),f:x("a1<@,@>"),a:x("b7"),A:x("L8"),N:x("n"),x:x("Tl"),r:x("fn"),E:x("e5"),O:x("K<n>"),y:x("D"),z:x("@"),S:x("y"),h:x("a1<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.asm=new A.a2(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.at9=new A.a2(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.atX=new A.a2(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.auw=new A.a2(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aG8=new A.bC(175e4)
D.aGq=new A.bC(75e4)
D.aHR=new A.ar(20,64,20,24)
D.Qa=new B.aEg(0,"purchase")
D.aLw=new B.aEg(1,"session")
D.jb=new B.pf(0,"signInRequired")
D.rS=new B.pf(1,"telegramAccountNotLinked")
D.jc=new B.pf(10,"requestFailed")
D.x4=new B.pf(11,"purchaseFailed")
D.ih=new B.pf(12,"sessionFailed")
D.rT=new B.pf(2,"insufficientBalance")
D.rU=new B.pf(3,"walletInactive")
D.rV=new B.pf(4,"refundPending")
D.rW=new B.pf(5,"accessExpired")
D.x5=new B.pf(6,"accessRequired")
D.h5=new B.pf(7,"gameUnavailable")
D.Ei=new B.pf(8,"accessNotActive")
D.Qb=new B.pf(9,"sessionDenied")
D.Qc=new B.Cn(0,"none")
D.aLx=new B.Cn(1,"signIn")
D.aLy=new B.Cn(2,"bindTelegram")
D.aLz=new B.Cn(3,"topUp")
D.aLA=new B.Cn(4,"purchase")
D.aLB=new B.Cn(5,"openGame")
D.rX=new B.Cn(6,"retry")
D.aQ_=new A.at(C.kf,null,C.G,null,null)
D.bnw=new A.J(C.Y,C.bV,null)
D.arz=new A.nz(2.5,null,null,null,null,null,null,null,null,null)
D.bDM=new A.ad(28,28,D.arz,null)
D.bDO=new A.ad(null,22,null,null)
D.bUJ=new A.K("slot-game-access-primary",y.O)
D.bV4=new A.K("slot-game-access-refresh",y.O)
D.bYb=new A.K("gameV2Confirm",y.O)
D.bYc=new A.K("gameV2Message",y.O)
D.bYd=new A.K("gameV2Page",y.O)
D.bZ_=new A.K("slot-game-access-message",y.O)
D.c_q=new A.K("retiredSlotHome",y.O)
D.c1n=new A.K("slot-game-access-gate",y.O)
D.afZ=new B.Mo(0,"request")
D.ag_=new B.Mo(1,"pending")
D.ag0=new B.Mo(2,"launchPending")
D.ag1=new B.Mo(3,"storage")
D.Kv=new B.Mo(4,"unavailable")
D.Kw=new B.Mo(5,"expired")})();(function staticFields(){$.aau=function(){var x=y.N
return A.r(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f3b","emU",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"f4l","ix",()=>A.b4("SlotGamePage"))})()};
(a=>{a["h1xlrnWIbYsZsDwBkJedWRRcSSc="]=a.current})($__dart_deferred_initializers__);