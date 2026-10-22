((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,H,B={
ed2(){var x,w,v=$.pA(),u=J.fg(16,y.S)
for(x=0;x<16;++x)u[x]=v.mZ(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.E(u,new B.bDF(),A.V(u).k("E<1,n>")).kU(0)
return C.b.ai(w,0,8)+"-"+C.b.ai(w,8,12)+"-"+C.b.ai(w,12,16)+"-"+C.b.ai(w,16,20)+"-"+C.b.bv(w,20)},
bDF:function bDF(){},
dU_(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.te
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.tf
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.tg
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.th
if(C.b.t(x,"ACCESS_EXPIRED"))return D.ti
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.xt
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.ha
return null},
e6u(d,e,f){var x=e==null?null:C.b.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pR:function pR(d,e){this.a=d
this.b=e},
Dn:function Dn(d,e){this.a=d
this.b=e},
aH4:function aH4(d,e){this.a=d
this.b=e},
bDo:function bDo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
NE:function NE(d,e){this.a=d
this.b=e},
aih:function aih(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
atN:function atN(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
dq7:function dq7(d){this.a=d},
dq8:function dq8(d){this.a=d},
dq_:function dq_(d,e){this.a=d
this.b=e},
dpQ:function dpQ(d){this.a=d},
dq6:function dq6(d,e){this.a=d
this.b=e},
dq0:function dq0(d){this.a=d},
dq1:function dq1(d,e){this.a=d
this.b=e},
dq2:function dq2(d){this.a=d},
dpX:function dpX(d){this.a=d},
dpY:function dpY(d){this.a=d},
dpZ:function dpZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dpL:function dpL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dpJ:function dpJ(d){this.a=d},
dpK:function dpK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dpI:function dpI(d){this.a=d},
dpG:function dpG(d,e){this.a=d
this.b=e},
dpH:function dpH(d,e){this.a=d
this.b=e},
dpD:function dpD(d){this.a=d},
dpC:function dpC(d){this.a=d},
dpW:function dpW(d){this.a=d},
dpS:function dpS(d,e){this.a=d
this.b=e},
dpT:function dpT(d,e){this.a=d
this.b=e},
dpU:function dpU(d,e){this.a=d
this.b=e},
dpV:function dpV(d,e){this.a=d
this.b=e},
dpR:function dpR(d){this.a=d},
dpP:function dpP(d){this.a=d},
dpO:function dpO(d,e){this.a=d
this.b=e},
dpN:function dpN(d){this.a=d},
dpM:function dpM(d,e,f){this.a=d
this.b=e
this.c=f},
dq3:function dq3(d){this.a=d},
dq4:function dq4(d){this.a=d},
dq5:function dq5(d){this.a=d},
dpE:function dpE(d){this.a=d},
dpF:function dpF(d){this.a=d},
bfu:function bfu(){},
f3i(d,e,f){var x=b.G,w=A.dT(new B.dUu(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dUt(w)},
f3j(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dT(new B.dUx(u,new B.dUv(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dUw(w,x)},
e5z(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.j7(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
eqp(d,e){B.dPr(A.bK(d),b.G.window.location.origin,e)},
dPr(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.j7(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.b.aR(u,e))v=!A.oF(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dUu:function dUu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUt:function dUt(d){this.a=d},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUy:function dUy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dUw:function dUw(d,e){this.a=d
this.b=e},
aiI:function aiI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbj:function bbj(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dru:function dru(d){this.a=d},
drv:function drv(d){this.a=d},
ei8(d,e){return new B.Fb(d,e,null)},
Fb:function Fb(d,e,f){this.c=d
this.d=e
this.a=f},
au2:function au2(d,e,f,g){var _=this
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
dst:function dst(d){this.a=d},
dsu:function dsu(d){this.a=d},
dsv:function dsv(d){this.a=d},
dsw:function dsw(d){this.a=d},
dss:function dss(d){this.a=d},
dse:function dse(d){this.a=d},
drO:function drO(d,e){this.a=d
this.b=e},
drP:function drP(d){this.a=d},
dry:function dry(d,e){this.a=d
this.b=e},
drQ:function drQ(){},
drN:function drN(d,e){this.a=d
this.b=e},
drV:function drV(d,e){this.a=d
this.b=e},
drW:function drW(d,e){this.a=d
this.b=e},
drX:function drX(d,e){this.a=d
this.b=e},
drY:function drY(d){this.a=d},
drA:function drA(d,e){this.a=d
this.b=e},
drB:function drB(d){this.a=d},
drC:function drC(d){this.a=d},
drD:function drD(d){this.a=d},
drE:function drE(d){this.a=d},
drF:function drF(d,e){this.a=d
this.b=e},
drG:function drG(d,e){this.a=d
this.b=e},
drH:function drH(d,e){this.a=d
this.b=e},
drI:function drI(d,e){this.a=d
this.b=e},
drJ:function drJ(d,e){this.a=d
this.b=e},
drK:function drK(d){this.a=d},
ds5:function ds5(d){this.a=d},
ds6:function ds6(d){this.a=d},
ds7:function ds7(d){this.a=d},
ds8:function ds8(d){this.a=d},
ds9:function ds9(d){this.a=d},
dsa:function dsa(d){this.a=d},
dsb:function dsb(d,e){this.a=d
this.b=e},
dsc:function dsc(d,e){this.a=d
this.b=e},
dsd:function dsd(d){this.a=d},
dsh:function dsh(d){this.a=d},
dsi:function dsi(d){this.a=d},
dsj:function dsj(d){this.a=d},
dsk:function dsk(d){this.a=d},
dsl:function dsl(d){this.a=d},
dsm:function dsm(d,e,f){this.a=d
this.b=e
this.c=f},
dsn:function dsn(d){this.a=d},
dso:function dso(d,e){this.a=d
this.b=e},
dsp:function dsp(d){this.a=d},
drZ:function drZ(d){this.a=d},
ds_:function ds_(d){this.a=d},
ds0:function ds0(d){this.a=d},
ds1:function ds1(d){this.a=d},
ds2:function ds2(d){this.a=d},
ds3:function ds3(d){this.a=d},
ds4:function ds4(d){this.a=d},
drR:function drR(d){this.a=d},
drS:function drS(){},
drL:function drL(){},
drT:function drT(d){this.a=d},
drU:function drU(){},
drM:function drM(){},
dsq:function dsq(d,e){this.a=d
this.b=e},
dsr:function dsr(d){this.a=d},
drw:function drw(d,e){this.a=d
this.b=e},
drx:function drx(d){this.a=d},
drz:function drz(d,e,f){this.a=d
this.b=e
this.c=f},
dsf:function dsf(d){this.a=d},
dsg:function dsg(d,e){this.a=d
this.b=e},
aH5:function aH5(d,e,f,g,h,i,j,k,l,m){var _=this
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
bDp:function bDp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
alL:function alL(d,e,f){this.c=d
this.d=e
this.a=f},
aH9:function aH9(d){this.a=d},
eLz(d){var x
if(d==null||d.length===0)return null
x=A.ei6().i(0,d)
return(x==null?null:x.e===C.iT)===!1?x:null},
Dk(d,e,f,g){var x=null
return B.eDO(d,e,f,g)},
eDO(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Dk=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.acw.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.XK():k).$0(),$async$Dk)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.acw.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.qn(s,a0),$async$Dk)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.acw.h(0,a0,q)
x=15
return A.c(s.ha("String",a0,q),$async$Dk)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.qn(s,e),$async$Dk)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.qn(s,e),$async$Dk)
case 21:case 20:case 12:o=d.$0()
$.acw.h(0,a0,o)
x=22
return A.c(s.ha("String",a0,o),$async$Dk)
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
v=$.acw.cT(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Dk,w)},
acx(d,e){var x=null
return B.eDN(d,e)},
eDN(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$acx=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eL(0)
for(p=J.aY(l);p.G();)$.acw.M(0,p.gP())
v=3
p=m
x=6
return A.c((p==null?A.XK():p).$0(),$async$acx)
case 6:t=g
p=J.aY(l)
case 7:if(!p.G()){x=8
break}s=p.gP()
o=s
t.a.M(0,o)
x=9
return A.c($.XP().M(0,"flutter."+o),$async$acx)
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
return A.k($async$acx,w)}},D,E,F,G,M,N,O,P,Q,R,S,I
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
B.pR.prototype={
W(){return"GameAccessIssue."+this.b}}
B.Dn.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aH4.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bDo.prototype={
gqO(){var x=this
if(x.b||x.c||!x.a)return D.Rc
if(x.f)return D.aPW
switch(x.r){case D.jl:return D.aPS
case D.te:return D.aPT
case D.tf:case D.tg:return D.aPU
case D.th:case D.ha:return D.Rc
case D.ti:case D.xt:case D.ER:case D.Rb:case D.jm:case D.xs:return D.tj
case D.it:return D.tj
case null:case void 0:if(x.e)return D.tj
return x.d?D.aPV:D.tj}}}
B.NE.prototype={
W(){return"_GameProblem."+this.b}}
B.aih.prototype={
O(){return new B.atN()},
e1h(){return this.f.$0()},
e4T(){return this.r.$0()}}
B.atN.prototype={
gbLZ(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dU_(v)}else v=w
return v},
gcbk(){var x,w=this.ch
if(w!=null)return w
x=this.r
if(x!=null)if(x.r)w=!x.x&&!x.y
else w=!0
else w=!1
if(!w){w=this.x
if(w==null)w=null
else{w=w.b
w=w==null?null:w.f}w=w!=null}else w=!0
return w?D.Li:null},
ghK(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gN()&&x.a.e1h()},
X(){var x,w,v=this
v.a6()
x=$.al.RG$
v.ax=x==null||x===C.cz
w=A.iK(v.a.d.a.a,new B.dq7(v))
v.d!==$&&A.aL()
v.d=new E.afN(new A.Do(w))
v.a.e.a4(v.gclC())
$.al.bs$.push(v)
$.al.y2$.push(new B.dq8(v))},
tP(){var x=this.z
if(x!=null)x.a7()
this.y=this.z=null},
bPV(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gff())$.al.y2$.push(new B.dq_(v,w))},
clD(){var x=this
if(x.c==null||x.at||x.a.e.gN())return;++x.ay
x.bPV()
x.n(new B.dpQ(x))},
oo(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cz)x.bPV()
x.n(new B.dq6(x,d))
if(x.ax&&x.ghK())x.u_(x.gbws())},
q(){var x=this;++x.ay
x.bPV()
x.tP()
x.a.e.T(x.gclC())
$.al.iU(x)
x.a5()},
cc_(d){var x
this.CW=d instanceof A.hy?B.dU_(d.b):null
if(d instanceof E.pT)x=D.ahm
else if(d instanceof E.va)x=D.ahk
else if(d instanceof E.acz)x=D.ahl
else x=d instanceof E.Dm||d instanceof E.a_z?D.Li:D.ahj
this.ch=x},
u_(d){return this.dzQ(d)},
dzQ(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$u_=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghK()){x=1
break}q=++r.ay
r.n(new B.dq0(r))
u=4
x=7
return A.c(d.$1(q),$async$u_)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghK()&&J.p(q,r.ay))r.n(new B.dq1(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.dq2(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$u_,w)},
dCi(){return this.u_(this.gbws())},
vR(d){return this.dwf(d)},
dwf(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return A.c(p.pX(t.a.c),$async$vR)
case 9:g.b=f
v=1
x=8
break
case 6:v=5
i=u.pop()
if(!t.ghK()||d!==t.ay)A.U(C.ao)
x=8
break
case 5:x=1
break
case 8:if(!t.ghK()||d!==t.ay)A.U(C.ao)
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
return A.c(E.bDK(n,l.b,new B.dpX(t),p),$async$vR)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fM))A.U(C.x)
j=E.ed0(n,l.b,p,new B.dpY(t),null,m)
case 11:k.a=j
if(!t.ghK()||d!==t.ay)A.U(C.ao)
if(j==null)throw A.o(new E.Dm())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e7W(),$async$vR)
case 14:s=f
if(!t.ghK()||d!==t.ay)A.U(C.ao)
x=15
return A.c(p.cy9(),$async$vR)
case 15:r=f
if(!t.ghK()||d!==t.ay)A.U(C.ao)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.rd(),$async$vR)
case 20:g.d=f
v=1
x=19
break
case 17:v=16
h=u.pop()
q=A.u(h)
if(!t.ghK()||d!==t.ay)A.U(C.ao)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghK()||d!==t.ay)A.U(C.ao)
t.n(new B.dpZ(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vR,w)},
av4(d,e,f){return this.d1z(d,e,f)},
d1z(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$av4=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghK()||d!==r.ay)A.U(C.ao)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cC()
n=r.c
n.toString
m=y.y
p.seT(A.CU(null,null,C.bi,!0,null,new B.dpL(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aM(p.an(),m),$async$av4)
case 6:o=h
if(!r.ghK()||d!==r.ay)A.U(C.ao)
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
return A.k($async$av4,w)},
cZp(){return this.u_(new B.dpI(this))},
cRQ(){return this.u_(new B.dpD(this))},
duS(){return this.u_(new B.dpW(this))},
dCg(){return this.u_(new B.dpP(this))},
dCd(){return this.u_(new B.dpN(this))},
a0r(d){return this.doL(d)},
doL(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a0r=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghK()||u.as){x=1
break}++u.ay
u.n(u.gc9g())
t=u.c
t.toString
x=3
return A.c(A.aK(t,!1).f.aM(d,y.X),$async$a0r)
case 3:x=u.ghK()?4:5
break
case 4:x=6
return A.c(u.u_(u.gbws()),$async$a0r)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a0r,w)},
dCe(d){var x
switch(this.gbLZ()){case D.te:return d.gX6()
case D.tf:return d.gWX()
case D.tg:return d.gX4()
case D.th:return d.gX_()
case D.ti:return d.gWW()
case D.xt:return d.gX1()
case D.ha:return d.gKv()
default:break}x=null
switch(this.gcbk()){case D.ahm:x=d.gadg()
break
case D.ahk:x=d.gUZ()
break
case D.ahl:x=d.gUY()
break
case D.Lj:x=d.gada()
break
case D.Li:x=d.gKv()
break
case D.ahj:x=d.gWU()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.c,y.J)
g.toString
x=i.f
w=x==null?h:x.gctP()
if(w==null)w=g.gamM()
if(i.at||!i.a.e.gN()){x=A.kQ(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gX7(),h,h,h,h,h,h,C.ay,h,h)
u=i.a.r
return A.bN(x,h,new A.dA(!0,!0,!0,!0,C.I,!1,A.aM(new A.J(C.aU,A.w(A.a([v,L.dz,A.c6(A.d(g.giO(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.H,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbLZ()
o=i.dCe(g)
v=y.p
u=A.a([A.d(g.gKt(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(!x)C.d.v(u,A.a([i.bQE(g.gX5(),t.b+" USDT"),i.bQE(g.gX0(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(O.eJ,A.d(o,D.c2A,h,h,h,h,A.Y(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bsk)
n=s==null
if(!n){m=A.d(g.gadc(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bQE(g.gu9(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gax_():g.gWY()
else k=s.c?g.gWZ():g.gUZ()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.Q],v)
if(!j||s.c)k.push(i.Ej("gameV2AcknowledgePurchase",g.gad6(),i.gcRP()))
else k.push(i.Ej("gameV2RetryPurchase",g.gadf(),i.gc8n()))
u.push(A.dg(new A.J(C.C,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.Ej("gameV2Purchase",g.gX2(),i.gc8n()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jP.t(0,m.a))===!0?g.gad9():g.gUY(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(i.y!=null&&q)k.push(i.Ej("gameV2Open",g.gxh(),i.gdCf()))
j=!1
if(n)if(q)if((l?h:F.jP.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jP.t(0,m.a))===!0?g.gV_():g.gV0()
k.push(i.Ej("gameV2Reissue",j,i.gcin()))}if((l?h:F.jP.t(0,m.a))!==!0)k.push(i.bKA("gameV2End",g.gad8(),i.gdCc(),!0))
u.push(A.dg(new A.J(C.C,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.Ej("gameV2Prepare",g.gV_(),i.gcin()))
if(p===D.te)u.push(i.Ej("gameV2BindTelegram",g.gRf(),new B.dq3(i)))
if(p===D.tf||p===D.tg)u.push(i.Ej("gameV2TopUp",g.gX3(),new B.dq4(i)))
u.push(i.bKA("gameV2CheckOriginal",g.gad7(),i.gdCh(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bN(A.kQ(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,A.e0l(h,new B.dq5(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dA(!0,!1,!0,!0,C.I,!1,A.eM(A.a([A.aM(new A.ba(C.w1,A.w(u,C.a8,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.c2B,P.Q1,h,h,C.y,!1),h),h,h,h,h,h)},
bQE(d,e){var x=null
return new A.J(Q.DN,A.bi(C.lf,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ac,x,4,16),x)},
bKA(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.dpE(f)
x=A.fl(A.d(e,w,w,w,w,w,w,C.ay,w,w),new A.H(d,v),x,w)
v=x}else{x=this.as?w:new B.dpF(f)
x=A.c6(A.d(e,w,w,w,w,w,w,C.ay,w,w),new A.H(d,v),x,w)
v=x}return new A.J(R.DK,v,w)},
Ej(d,e,f){return this.bKA(d,e,f,!1)}}
B.bfu.prototype={}
B.aiI.prototype={
O(){return new B.bbj()}}
B.bbj.prototype={
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
v=A.dT(new B.dru(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.az1()
$.BY().a9T(x,new B.drv(u),!0)},
aQ(d){var x,w
this.aZ(d)
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
return new A.R7(x,null,null,C.zS,null)}}
B.Fb.prototype={
O(){var x=$.am()
return new B.au2(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.pA().mZ(1073741824),x.$1$0(y.x))}}
B.au2.prototype={
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
ghy(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.nT
if(w!=null)w.d_()
x=u.at
if(x!=null&&u.w.ms(x))return!0}catch(v){if(!(A.u(v) instanceof A.JG))throw v}u.ax=!0
u.CW=null
return!1},
gbwe(){var x,w=this.ay
if(w===$){x=$.am().$1$0(y.T)
this.ay!==$&&A.bf()
w=this.ay=new E.afN(x)}return w},
X(){var x,w,v,u,t,s=this
s.a6()
x=$.am()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.j8(x.$1$0(y.E),s.w)
x.a4(s.gckm())
s.y=x}if(v)s.at=s.w.bTW()
x=u?w.dZe(new B.dst(s)):w
s.x!==$&&A.aL()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.a_6()
return}t=s.d=B.eLz(v.c)
if(t==null){s.k2=!1
s.ok=D.ha
return}if(!t.gbXS()){s.k2=!1
s.ok=D.ha
return}if(t.e!==C.iT){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.f3i(s.gbQX(),v,new B.dsu(s))
x=x.f!=null?s.as:null
s.p2=B.f3j(s.gdhv(),x,new B.dsv(s))
$.al.y2$.push(new B.dsw(s))
s.cy=s.atr()
return}},
b_(){var x,w,v=this
v.bz()
x=v.c
x.toString
v.z=A.cs(x,null,y.X)
x=v.y
if((x==null?null:x.gN())===!1)$.al.y2$.push(new B.dss(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iT){v.k1=!0
v.f=v.c8i()}},
ckn(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gN())!==!1}if(w)return
B.eqp(A.a_(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dse(x))},
Zm(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Zm=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.arl(),$async$Zm)
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
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
x=14
return A.c(s.w.iv(),$async$Zm)
case 14:r=e
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
if(s.c!=null&&r!=null)try{if(!(s.gh8()&&s.ghy()))A.U(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.iM().m(C.aJ,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gh8()&&s.ghy())){x=1
break}$.iM().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
x=19
return A.c(s.r.ii(!0),$async$Zm)
case 19:o=e
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.drO(s,n))
try{j=J.a7Z(n,4)
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.iM().m(C.aJ,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh8()&&s.ghy())s.n(new B.drP(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zm,w)},
vz(){return this.cWi()},
cWi(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$vz=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.arl(),$async$vz)
case 5:h=b0
x=6
return A.c(s.ZA(),$async$vz)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cII(),$async$vz)
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
case 10:if(!s.gEJ())throw A.o(C.ao)
a2=A.mJ(h.i(0,"balance"))
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
case 4:if(!(s.gh8()&&s.ghy()))A.U(C.ao)
a3=s.w
d=s.at
d.toString
q=a3.a4t(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.iv(),$async$vz)
case 18:q=b0
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
$.iM().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.iM().m(C.aJ,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.Do(),$async$vz)
case 26:m=b0
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dry(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.iM().m(C.aJ,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
$.iM().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
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
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
$.iM().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.ZA(),$async$vz)
case 32:g=b0
if(!(s.gh8()&&s.ghy()))A.U(C.ao)
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
ZA(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ZA=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.atr()
v=t.tm(C.PG,new B.drQ())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ZA,w)},
arl(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$arl=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gEJ())throw A.o(C.ao)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jU(),$async$arl)
case 3:s=e
if(!u.gEJ())throw A.o(C.ao)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.drN(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$arl,w)},
atr(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$atr=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bpT(k.a),$async$atr)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.p1(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.G.az(p,null)
if(!(r.gh8()&&r.ghy()))A.U(C.ao)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.iM().m(C.aJ,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
j=t.pop()
n=A.u(j)
$.iM().m(C.t,"_getSlotRtpData failed",n,null)
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
return A.k($async$atr,w)},
a_6(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a_6=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbwe().pX(l),$async$a_6)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.drV(s,r))
x=1
break}s.n(new B.drW(s,r))
x=8
return A.c(s.tO(),$async$a_6)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.hy){q=m
$.iM().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.drX(s,q))}else{p=m
o=A.aO(k)
m=$.iM()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.drY(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a_6,w)},
tO(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tO=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iT){if(s.c==null){x=1
break}s.n(new B.drA(s,f))
x=1
break}if(!f.gbXS()){if(s.c==null){x=1
break}s.n(new B.drB(s))
x=1
break}if(s.c!=null)s.n(new B.drC(s))
u=4
x=7
return A.c(s.w.iv(),$async$tO)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.drD(s))
x=1
break}if(s.c==null){x=1
break}q=s.brz(r)
if(q==null){s.n(new B.drE(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbwe().a
if(k.a.c instanceof A.fM)A.U(C.x)
x=8
return A.c(k.IP(d),$async$tO)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.drF(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cfz(p.r)
if(p.b!==!0||o!=null){s.n(new B.drG(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.drH(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.it)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dFf(!0),$async$tO)
case 13:case 12:x=1
break
case 10:s.n(new B.drI(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.hy){m=k
$.iM().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.drJ(s,m))}else{l=k
$.iM().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.drK(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tO,w)},
bPQ(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.a_6()
return w.tO()},
vO(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vO=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iT){if(s.c==null){x=1
break}if(h)s.n(new B.ds5(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.ds6(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tO(),$async$vO)
case 5:x=1
break
case 4:s.n(new B.ds7(s))
u=7
x=10
return A.c(s.w.iv(),$async$vO)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.ds8(s))
x=1
break}if(s.c==null){x=1
break}o=s.brz(p)
if(o==null){s.n(new B.ds9(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bQ4(o)
x=13
return A.c(s.tO(),$async$vO)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bOq(),$async$vO)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbwe().a
if(h.a.c instanceof A.fM)A.U(C.x)
x=15
return A.c(h.SD(q,new E.aH8(n)),$async$vO)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Rg?16:17
break
case 16:x=18
return A.c(s.ar2(),$async$vO)
case 18:if(s.c==null){x=1
break}s.n(new B.dsa(s))
x=19
return A.c(s.tO(),$async$vO)
case 19:x=1
break
case 17:s.n(new B.dsb(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.hy?20:22
break
case 20:l=h
$.iM().m(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.buL(l,D.xs)
f=l.b.toUpperCase()
x=k===D.ti||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.ar2(),$async$vO)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dsc(s,k))
x=21
break
case 22:j=h
$.iM().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dsd(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vO,w)},
pi(d,e){return this.dFg(d,!0)},
dFf(d){return this.pi(!0,d)},
dFg(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$pi=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iT){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.dsh(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dsi(s))
u=4
x=7
return A.c(s.w.iv(),$async$pi)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.brz(p)
if(o==null){s.n(new B.dsj(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bQ4(o)
x=10
return A.c(s.tO(),$async$pi)
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
break}s.n(new B.dsk(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bOr(),$async$pi)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.KE(b6.a,new B.aH9(n)),$async$pi)
case 15:m=c2
l=new A.aI(Date.now(),0,!1).a3()
k=m==null?null:E.eqd(m.w)
j=m==null?null:E.dV3(m.f)
i=m==null?null:E.dV3(m.r)
h=m==null?null:E.dV3(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Ri
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a3().du(l.a3()).a)<=3e8
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
$.iM().m(C.t,"game session response rejected: "+J.bhr(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.LD(b6.a,!0,m.a),$async$pi)
case 20:case 19:x=21
return A.c(s.YG(),$async$pi)
case 21:if(s.c==null){x=1
break}s.n(new B.dsl(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.At(!0),$async$pi)
case 24:x=1
break
case 23:x=b6.e===C.iT?25:26
break
case 25:s.n(new B.dsm(s,k,h))
x=27
return A.c(s.AH(),$async$pi)
case 27:x=1
break
case 26:s.n(new B.dsn(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.hy?28:30
break
case 28:a9=a7
$.iM().m(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.YG(),$async$pi)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.pi(!1,!0),$async$pi)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dso(s,a9))
x=29
break
case 30:b0=a7
$.iM().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.dsp(s))
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
break}s.n(new B.drZ(s))
x=!k.ia(new A.aI(Date.now(),0,!1).a3())?3:4
break
case 3:x=5
return A.c(s.At(!0),$async$AH)
case 5:if(s.c==null){x=1
break}s.n(new B.ds_(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.iv(),$async$AH)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aO(f)
h=$.iM()
h.m(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.n(new B.ds0(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.brz(q)
if(g==null){s.n(new B.ds1(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bQ4(g)
x=13
return A.c(s.tO(),$async$AH)
case 13:x=1
break
case 12:u=15
s.n(new B.ds2(s))
x=18
return A.c(A.uw(r,C.lK,"_self"),$async$AH)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.ds3(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aO(e)
h=$.iM()
h.m(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.At(!0),$async$AH)
case 19:if(s.c==null){x=1
break}s.n(new B.ds4(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AH,w)},
At(d){return this.d6L(!0)},
d6L(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$At=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.LD(p.a,!0,n)
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
LD(d,e,f){return this.d6S(d,!0,f)},
d6S(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$LD=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.PD(d,f),$async$LD)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.iM().m(C.aJ,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.f2(C.Dz,null,l),$async$LD)
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
return A.c(s.YG(),$async$LD)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LD,w)},
bOq(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bOq=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gciQ()
v=B.Dk(new B.drR(u),u.gcfK(),new B.drS(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOq,w)},
ar2(){var x=0,w=A.l(y.H),v=this
var $async$ar2=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acx(new B.drL(),A.dK([v.gciQ(),v.gcfK()],y.N)),$async$ar2)
case 2:return A.j(null,w)}})
return A.k($async$ar2,w)},
bOr(){var x=0,w=A.l(y.N),v,u=this
var $async$bOr=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Dk(new B.drT(u),null,new B.drU(),u.gclA())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOr,w)},
YG(){var x=0,w=A.l(y.H),v=this
var $async$YG=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.acx(new B.drM(),A.dK([v.gclA()],y.N)),$async$YG)
case 2:return A.j(null,w)}})
return A.k($async$YG,w)},
brz(d){var x=A.bHN(d),w=x==null?null:C.b.F(x)
return w==null||w.length===0?null:w},
bQ4(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gciQ(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e6u(D.Ra,this.fx,"product-"+x)},
gcfK(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e6u(D.Ra,this.fx,x)},
gclA(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e6u(D.aPR,this.fx,x)},
cgP(d){var x,w=Date.now(),v=C.h.iZ($.pA().mZ(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cfz(d){var x=B.dU_(d)
if(x!=null)return x
return d==null||C.b.F(d).length===0?null:D.jm},
buL(d,e){var x,w=d.a
if(w===401)return D.jl
x=B.dU_(d.b)
if(x!=null)return x
if(w===404)return D.ha
return e},
do6(d,e){switch(e){case D.jl:return d.gamK()
case D.te:return d.gX6()
case D.tf:return d.gWX()
case D.tg:return d.gX4()
case D.th:return d.gX_()
case D.ti:return d.gWW()
case D.xt:return d.gX1()
case D.ha:return d.gKv()
case D.ER:return d.gWY()
case D.Rb:return d.gamN()
case D.jm:return d.gWU()
case D.xs:return d.gWZ()
case D.it:return d.gamO()
case null:case void 0:return null}},
bui(d){return this.dhw(d)},
dhw(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bui=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gEJ()
else t=u.gh8()&&u.ghy()
if(!t){v=null
x=1
break}x=3
return A.c(u.AC(d),$async$bui)
case 3:s=f
if(r.f!=null)r=u.gEJ()
else r=u.gh8()&&u.ghy()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bui,w)},
AC(d){return this.dcM(d)},
dcM(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$AC=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.avv()
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
return A.c(k.awX(A.bc(c0.i(0,"operationId"))),$async$AC)
case 23:p=A.a_(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.Kw(b4==="SPIN_RETRY_REQUEST"?A.bc(c0.i(0,"operationId")):null),$async$AC)
case 24:q=c2
p=A.q(y.N,y.z)
J.dy(p,"type","SPIN_RECOVERY_RESULT")
J.fy(p,q)
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
if(p!=null)A.aK(p,!1).f.aM(G.oY,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aK(p,!1).f.aM(M.Bb,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aK(p,!1).f.aM(N.qK,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a7J(c0.i(0,"betIndex"),4)
else{b3=A.mJ(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.de(b3)}o=a5
a6=A.mJ(c0.i(0,"betAmount"))
n=a6==null?null:a6
if(o==null||n==null){p=A.a_(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=p
x=1
break}b3=r.a
a7=A.b6(c0.i(0,"mode"))
if(a7==null)a7="REAL"
a8=A.b6(c0.i(0,"clientSeed"))
if(c0.i(0,"nonce")==null)a9=null
else a9=p.f!=null?""+A.a7J(c0.i(0,"nonce"),9007199254740991):J.as(c0.i(0,"nonce"))
x=29
return A.c(p.DT(n,o,A.b6(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$AC)
case 29:m=c2
l=J.ax(m,"data")
if(J.p(J.ax(m,"success"),!0)&&y.P.b(l)){k=A.q(y.N,y.z)
J.dy(k,"type","SPIN_RESULT")
J.fy(k,l)
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
p=A.mJ(J.ax(g,"balance"))
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
return A.c(s.ZA(),$async$AC)
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
p=A.mJ(c0.i(0,"page"))
b1=p==null?null:C.k.de(p)
a0=b1==null?1:b1
p=A.mJ(c0.i(0,"size"))
b2=p==null?null:C.k.de(p)
a1=b2==null?10:b2
p=s.x
p===$&&A.e()
x=44
return A.c(p.adA(a0,a1),$async$AC)
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
if(w!=null)w.T(x.gckm())
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
return A.bN(A.kQ(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dA(!0,!0,!0,!0,C.I,!1,A.aM(A.b4(A.w(A.a([A.d(r.gX7(),s,s,s,s,s,s,C.ay,s,s),C.a7,A.c6(A.d(r.gyT(),s,s,s,s,s,s,s,s,s),D.c56,new B.dsq(t,d),s)],y.p),C.l,s,C.e,C.H,0,C.j),C.q,s,C.w,s,s,C.aU,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbwe()
v=t.y
v.toString
return new B.aih(x,r,v,new B.dsr(t),t.gdoP(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.v(v,A.a([w,A.eA(0,A.ih(C.bG,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbQX(),s,s,s,s,s,s,!1,C.cd),108,s,0,s,s,75)],x))
else v.push(t.cUA(d))
if(u)v.push(new A.dA(!0,!0,!0,!0,C.I,!1,new A.c8(C.hC,s,s,A.aR(s,s,s,s,D.aUl,s,s,t.gbQX(),s,s,s,s,r.giO(),s),s),s))
return A.bN(s,D.ayA,new A.cW(C.aT,s,C.aQ,C.q,v,s),s,s,s,s,s)},
cUA(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.fy?a0.gKu():a0.gWV()
if(e.fy){a0=a0.gKu()
r=A.t(a1).ok.y
a0=new A.J(C.aU,A.d(a0,d,d,d,d,d,r==null?d:r.a0(C.M.B(0.78)),C.ay,d,d),d)}else a0=D.bIK
return A.aM(A.Q(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbXS())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bDo(r,p,l,k===!0,u===!0,!j,i)
g=e.do6(a0,i)
if(e.fy)f=a0.gKu()
else f=j?d:a0.gamG()
u=x==null?d:x.b
a0=u==null?a0.gamL():u
u=g==null
r=u?f:g
return new B.aH5(a0,h,q,m,r,!u,!t,new B.drw(e,h),new B.drx(e),d)},
dgo(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aK(x,!1).f.aM(C.cS,y.X)
return
case 2:w.atS()
return
case 3:x=w.c
x.toString
A.aK(x,!1).f.aM(G.oY,y.X)
return
case 4:w.vO()
return
case 5:w.AH()
return
case 6:w.bPQ()
return
case 0:return}},
atS(){var x=0,w=A.l(y.H),v,u=this,t
var $async$atS=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aK(t,!1).f.aM(C.oA,y.X),$async$atS)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bPQ(),$async$atS)
case 4:case 1:return A.j(v,w)}})
return A.k($async$atS,w)},
avv(){var x=0,w=A.l(y.H),v,u=this
var $async$avv=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.a_s(),$async$avv)
case 3:case 1:return A.j(v,w)}})
return A.k($async$avv,w)},
a_s(){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_s=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.At(!0),$async$a_s)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).td(),$async$a_s)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aK(t,!1).f.ie("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$a_s,w)},
c8i(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.a9
u=b.G.window.navigator.userAgent
x=$.euO()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.al.y2$.push(new B.drz(w,v,t))
return C.AC}u=w.ccQ(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.aiI(u,x,w.gdC1(),null)},
ccQ(d,e){var x,w="/games/"+d,v=C.b.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dC2(){new B.dsf(this).$0()}}
B.aH5.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dA(!0,!0,!0,!0,C.I,!1,A.cZ(new B.bDp(this,x,A.t(d),this.d8S(x))),null)},
d8S(d){switch(this.d.gqO().a){case 1:return d.gamJ()
case 2:return d.gRf()
case 3:return d.gX3()
case 4:return d.gX2()
case 5:return d.gxh()
case 6:return d.gamI()
case 0:return null}}}
B.alL.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a0(C.M.B(0.58))
u=A.O(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aX(C.M,C.S)
return new A.J(S.eL,A.z(A.a([u,C.ah,new A.e2(1,C.b6,A.d(this.d,x,x,x,x,x,v,C.jQ,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aH9.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aH9&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.b.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
A(){var x=A.q(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a2<n,@>?>(a2<n,@>)"])
B.bDF.prototype={
$1(d){return C.b.ck(C.h.iZ(d,16),2,"0")},
$S:42}
B.dq7.prototype={
$0(){return this.a.ghK()},
$S:1}
B.dq8.prototype={
$1(d){var x=this.a
if(x.ghK())x.u_(x.gbws())
else x.clD()},
$S:2}
B.dq_.prototype={
$1(d){var x=this.a
if(x.gff()&&this.b.c!=null)this.b.ho(x)},
$S:2}
B.dpQ.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tP()
x.e=x.x=x.w=x.r=null},
$S:0}
B.dq6.prototype={
$0(){var x=this.a
x.ax=this.b===C.cz
x.as=!1
x.tP()},
$S:0}
B.dq0.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.dq1.prototype={
$0(){return this.a.cc_(this.b)},
$S:0}
B.dq2.prototype={
$0(){return this.a.as=!1},
$S:0}
B.dpX.prototype={
$0(){return this.a.ghK()},
$S:1}
B.dpY.prototype={
$0(){return this.a.ghK()},
$S:1}
B.dpZ.prototype={
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
if(x)r.tP()
q=q.c
if(q!=null)r.cc_(q)},
$S:0}
B.dpL.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.c,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.bg(A.a([A.aH(A.d(s.gcr(),t,t,t,t,t,t,t,t,t),t,t,t,new B.dpJ(v),t,t),A.c6(A.d(s.gjD(),t,t,t,t,t,t,t,t,t),D.c2z,new B.dpK(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.dpJ.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.dpK.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gN()&&w.ax&&x.b.an().gN()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.dpI.prototype={
$1(d){return this.cBB(d)},
cBB(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.a_z())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.ed2()
k=h.a.c
j=g.e
l=E.ecY(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.c,y.J)
x=3
return A.c(h.av4(d,m.gOr(),m.adb(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghK()||d!==h.ay)A.U(C.ao)
u=5
x=8
return A.c(g.c_C(r),$async$$1)
case 8:q=a1
if(!h.ghK()||d!==h.ay)A.U(C.ao)
h.n(new B.dpG(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghK()||d!==h.ay)A.U(C.ao)
x=9
return A.c(g.e6z(),$async$$1)
case 9:n=a1
if(!h.ghK()||d!==h.ay)A.U(C.ao)
h.n(new B.dpH(h,n))
A.zI(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:62}
B.dpG.prototype={
$0(){var x=this.a
x.w=this.b
x.tP()},
$S:0}
B.dpH.prototype={
$0(){var x=this.a
x.w=this.b
x.tP()},
$S:0}
B.dpD.prototype={
$1(d){return this.cBA(d)},
cBA(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dMY(r.a),$async$$1)
case 3:if(!t.ghK()||d!==t.ay)A.U(C.ao)
if(!t.ghK()||d!==t.ay)A.U(C.ao)
t.n(new B.dpC(t))
x=4
return A.c(t.vR(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dpC.prototype={
$0(){return this.a.w=null},
$S:0}
B.dpW.prototype={
$1(d){return this.cBE(d)},
cBE(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Dm())
t=l.c
t.toString
t=A.f(t,C.c,y.J)
t.toString
x=3
return A.c(k.cy9(),$async$$1)
case 3:s=f
if(!l.ghK()||d!==l.ay)A.U(C.ao)
l.n(new B.dpS(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jP.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.av4(d,t.gV0(),t.gade()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jP.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dMX(s.a),$async$$1)
case 9:if(!l.ghK()||d!==l.ay)A.U(C.ao)
case 8:if(p)o=s.a
else{t=B.ed2()
r=l.a.c
q=k.e
t=E.e6v(t)
r=E.wn(r)
o=new E.acy(t,E.dOp(q),r)}if(!l.ghK()||d!==l.ay)A.U(C.ao)
l.n(new B.dpT(l,o))
x=10
return A.c(k.e1p(o,p),$async$$1)
case 10:n=f
if(!l.ghK()||d!==l.ay)A.U(C.ao)
l.n(new B.dpU(l,n))
t=l.z
if(t!=null)t.a7()
m=n.b.du(new A.aI(Date.now(),0,!1).a3())
t=m.a<0?C.b_:m
l.z=A.du(t,new B.dpV(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dpS.prototype={
$0(){this.a.x=this.b},
$S:0}
B.dpT.prototype={
$0(){var x=this.a
x.tP()
x.x=new E.Mb(this.b,null)},
$S:0}
B.dpU.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dpV.prototype={
$0(){var x=this.a
if(x.ghK()&&x.y===this.b)x.n(new B.dpR(x))},
$S:0}
B.dpR.prototype={
$0(){var x=this.a
x.tP()
x.ch=D.Lj},
$S:0}
B.dpP.prototype={
$1(d){return this.cBD(d)},
cBD(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Dm())
x=3
return A.c(p.vR(d),$async$$1)
case 3:if(!p.ghK()||d!==p.ay)A.U(C.ao)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.ia(new A.aI(Date.now(),0,!1).a3())||!n.b.ia(new A.aI(Date.now(),0,!1).a3())){if(!p.ghK()||d!==p.ay)A.U(C.ao)
p.n(new B.dpO(p,t))
x=1
break}if(!p.ghK()||d!==p.ay)A.U(C.ao)
p.n(p.gc9g())
p.a.toString
r=A.uw(n.a,C.lK,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghK()||d!==p.ay)A.U(C.ao)
if(!q)throw A.o(new E.va())
x=5
return A.c(p.vR(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dpO.prototype={
$0(){var x=this.a
x.tP()
x.x=this.b
if(x.gbLZ()==null&&x.gcbk()==null)x.ch=D.Lj},
$S:0}
B.dpN.prototype={
$1(d){return this.cBC(d)},
cBC(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dXM(q.a),$async$$1)
case 3:t=f
if(!s.ghK()||d!==s.ay)A.U(C.ao)
s.n(new B.dpM(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.dpM.prototype={
$0(){var x=this.a
x.tP()
x.x=new E.Mb(this.b.a,this.c)},
$S:0}
B.dq3.prototype={
$0(){return this.a.a0r(C.oA)},
$S:3}
B.dq4.prototype={
$0(){return this.a.a0r(G.oY)},
$S:3}
B.dq5.prototype={
$0(){var x=this.a;++x.ay
x.tP()
x.a.e4T()},
$S:0}
B.dpE.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dpF.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dUu.prototype={
$1(d){var x,w=this,v=A.j7(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.e5z(d,w.c))return
x=A.GK(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dUt.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dUv.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dUx.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.j7(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.e5z(d,r.c))return
w=A.GK(d.data)
if(!y.f.b(w))return
v=A.q(y.N,y.z)
for(u=w.gei(),u=u.gap(u);u.G();){t=u.gP()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ao("type"))return
new B.dUy(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dUy.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fX(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.e5z(s.d,s.e)){q=m.i(0,"requestId")
p=A.ho(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dy(p,"requestId",q)
o=A.bK(p)
p=s.e
if(p!=null){B.dPr(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.j7(n,"Object")
k=s.f
if(p){A.DD(n,"postMessage",o,k,y.X)
B.dPr(o,k,null)}else{B.dPr(o,k,null)
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
B.dUw.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dru.prototype={
$1(d){return this.a.$0()},
$S:10}
B.drv.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:597}
B.dst.prototype={
$0(){return this.a.gh8()},
$S:1}
B.dsu.prototype={
$0(){return this.a.gh8()},
$S:1}
B.dsv.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gEJ()
else x=x.gh8()&&x.ghy()
return x},
$S:1}
B.dsw.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gEJ()
else w=x.gh8()&&x.ghy()
if(w)x.Zm()},
$S:2}
B.dss.prototype={
$1(d){return this.a.ckn()},
$S:2}
B.dse.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.drO.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.drP.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dry.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.drQ.prototype={
$0(){return null},
$S:16}
B.drN.prototype={
$0(){var x=A.mJ(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.drV.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.ha},
$S:0}
B.drW.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.AR(w.b,w.gctP(),"Telegram Mini App",null,C.iT,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.drX.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.buL(this.b,D.jm)},
$S:0}
B.drY.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jm},
$S:0}
B.drA.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.ha},
$S:0}
B.drB.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.ha},
$S:0}
B.drC.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.drD.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.drE.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.drF.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jm:D.ha},
$S:0}
B.drG.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jm:x},
$S:0}
B.drH.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.it},
$S:0}
B.drI.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cfz(x.r)
if(w==null)x=x.b===!0?null:D.jm
else x=w
v.ok=x},
$S:0}
B.drJ.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buL(this.b,D.jm)},
$S:0}
B.drK.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jm},
$S:0}
B.ds5.prototype={
$0(){return this.a.ok=D.ha},
$S:0}
B.ds6.prototype={
$0(){return this.a.ok=D.ha},
$S:0}
B.ds7.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.ds8.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jl},
$S:0}
B.ds9.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jl},
$S:0}
B.dsa.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dsb.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Rh?D.th:D.ER},
$S:0}
B.dsc.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dsd.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.xs},
$S:0}
B.dsh.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.it},
$S:0}
B.dsi.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.dsj.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jl},
$S:0}
B.dsk.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.it},
$S:0}
B.dsl.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.it},
$S:0}
B.dsm.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.dsn.prototype={
$0(){var x=this.a
x.f=x.c8i()
x.k2=!1},
$S:0}
B.dso.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.buL(this.b,D.it)},
$S:0}
B.dsp.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.it},
$S:0}
B.drZ.prototype={
$0(){return this.a.id=!0},
$S:0}
B.ds_.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.it},
$S:0}
B.ds0.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jl},
$S:0}
B.ds1.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jl},
$S:0}
B.ds2.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.ds3.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.ds4.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.it},
$S:0}
B.drR.prototype={
$0(){return this.a.cgP("game-access")},
$S:27}
B.drS.prototype={
$2(d,e){return $.iM().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:40}
B.drL.prototype={
$2(d,e){return $.iM().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:40}
B.drT.prototype={
$0(){return this.a.cgP("game-session")},
$S:27}
B.drU.prototype={
$2(d,e){return $.iM().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:40}
B.drM.prototype={
$2(d,e){return $.iM().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:40}
B.dsq.prototype={
$0(){if(this.a.gh8())A.aK(this.b,!1).f.gkY().hV(0,A.a([A.iq(null,null)],y.Q))},
$S:0}
B.dsr.prototype={
$0(){return this.a.gh8()},
$S:1}
B.drw.prototype={
$0(){return this.a.dgo(this.b.gqO())},
$S:0}
B.drx.prototype={
$0(){this.a.bPQ()
return null},
$S:0}
B.drz.prototype={
$1(d){return this.cBF(d)},
cBF(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gh8()&&g.ghy())){x=1
break}u=4
x=7
return A.c(g.w.iv(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gh8()&&g.ghy()))A.U(C.ao)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.ii(!0),$async$$1)
case 14:p=a2
if(!(g.gh8()&&g.ghy()))A.U(C.ao)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gh8()&&g.ghy()))A.U(C.ao)
$.iM().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gh8()&&g.ghy()))A.U(C.ao)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a7Z(q,4)
if(!(g.gh8()&&g.ghy()))A.U(C.ao)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.brE()
if(!(g.gh8()&&g.ghy()))A.U(C.ao)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh8()&&g.ghy()))A.U(C.ao)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.ZA(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.iM().m(C.aJ,"RTP prefetch failed",n,null)
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
if(!(g.gh8()&&g.ghy())){x=1
break}$.iM().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gh8()&&g.ghy())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).td(),$async$$1)
case 20:if(!g.ghy()){x=1
break}g=g.ccQ(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:544}
B.dsf.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.vz(),$async$$0)
case 6:s=e
r=new B.dsg(p,s)
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
$.iM().m(C.aJ,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:49}
B.dsg.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gEJ()
else x=w.gh8()&&w.ghy()
if(!x)return
w=v.f!=null?w.as:null
B.eqp(this.b,w)},
$S:0}
B.bDp.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.d3(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.amE(w)
u=A.G(8)
t=A.aN(C.M.B(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aX(C.M,C.F),C.ay,k,k)],q)
if(x.x){w=j.gKt()
p=s.z
w=A.a([H.dZ,A.d(w,k,k,k,k,k,p==null?k:p.a0(C.M.B(0.72)),C.ay,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gX5()
if(o)p="-"
o=j.gX0()
m=x.f
if(m==null)m="-"
C.d.v(w,A.a([I.Jp,new B.alL(n,p,k),new B.alL(o,m,k)],q))}C.d.v(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a0(x.w?D.axd:D.ay0)
C.d.v(r,A.a([I.Jp,A.Q(k,k,k,A.d(w,k,k,k,k,k,s,C.ay,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3p,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bi(C.le,A.a([C.mp,A.d(w.c?j.gamF():j.gWV(),k,k,k,k,k,k,C.ay,k,k)],q),C.bx,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.ay,k,k)}C.d.v(r,A.a([D.bIM,A.c6(o,D.c_2,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqO()!==D.tj
else w=!1
if(w)C.d.v(r,A.a([H.dZ,A.aH(A.d(j.gamH(),k,k,k,k,k,k,C.ay,k,k),D.c_p,k,k,x.z,k,k)],q))
return A.b4(new A.ba(new A.ay(0,1/0,i,1/0),A.aM(A.Q(k,k,k,new A.ba(K.Nb,new A.cb(new A.R(D.auo,k,t,u,k,k,C.r),C.at,new A.J(C.aU,A.w(r,C.a8,k,C.e,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c75,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aM3,k,k,C.y)},
$S:108};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.atN.prototype,"gc9g","tP",1)
x(v,"gclC","clD",1)
x(v,"gdCh","dCi",0)
w(v,"gbws","vR",2)
x(v,"gc8n","cZp",0)
x(v,"gcRP","cRQ",0)
x(v,"gcin","duS",0)
x(v,"gdCf","dCg",0)
x(v,"gdCc","dCd",0)
x(v=B.au2.prototype,"gckm","ckn",1)
w(v,"gdhv","bui",3)
x(v,"gbQX","avv",0)
x(v,"gdoP","a_s",0)
x(v,"gdC1","dC2",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bt,[B.bDF,B.dq8,B.dq_,B.dpL,B.dpI,B.dpD,B.dpW,B.dpP,B.dpN,B.dUu,B.dUx,B.dru,B.drv,B.dsw,B.dss,B.drz])
w(A.eC,[B.pR,B.Dn,B.aH4,B.NE])
w(A.A,[B.bDo,B.aH9])
w(A.L,[B.aih,B.aiI,B.Fb])
w(A.S,[B.bfu,B.bbj,B.au2])
v(B.atN,B.bfu)
w(A.bu,[B.dq7,B.dpQ,B.dq6,B.dq0,B.dq1,B.dq2,B.dpX,B.dpY,B.dpZ,B.dpJ,B.dpK,B.dpG,B.dpH,B.dpC,B.dpS,B.dpT,B.dpU,B.dpV,B.dpR,B.dpO,B.dpM,B.dq3,B.dq4,B.dq5,B.dpE,B.dpF,B.dUt,B.dUv,B.dUy,B.dUw,B.dst,B.dsu,B.dsv,B.dse,B.drO,B.drP,B.dry,B.drQ,B.drN,B.drV,B.drW,B.drX,B.drY,B.drA,B.drB,B.drC,B.drD,B.drE,B.drF,B.drG,B.drH,B.drI,B.drJ,B.drK,B.ds5,B.ds6,B.ds7,B.ds8,B.ds9,B.dsa,B.dsb,B.dsc,B.dsd,B.dsh,B.dsi,B.dsj,B.dsk,B.dsl,B.dsm,B.dsn,B.dso,B.dsp,B.drZ,B.ds_,B.ds0,B.ds1,B.ds2,B.ds3,B.ds4,B.drR,B.drT,B.dsq,B.dsr,B.drw,B.drx,B.dsf,B.dsg])
w(A.c9,[B.drS,B.drL,B.drU,B.drM,B.bDp])
w(A.x,[B.aH5,B.alL])
x(B.bfu,A.ev)})()
A.b0(b.typeUniverse,JSON.parse('{"aih":{"L":[],"m":[]},"atN":{"S":["aih"],"ev":[]},"aiI":{"L":[],"m":[]},"bbj":{"S":["aiI"]},"Fb":{"L":[],"m":[]},"au2":{"S":["Fb"]},"aH5":{"x":[],"m":[]},"alL":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.C
return{J:x("bv"),u:x("B<a2<n,@>?>"),T:x("Do"),w:x("lO"),Q:x("v<bU<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a2<n,@>"),f:x("a2<@,@>"),a:x("b8"),A:x("Mm"),N:x("n"),x:x("UT"),r:x("fw"),E:x("ec"),O:x("H<n>"),y:x("F"),z:x("@"),S:x("y"),h:x("a2<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.auo=new A.a3(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.axd=new A.a3(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.ay0=new A.a3(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.ayA=new A.a3(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aKm=new A.bG(175e4)
D.aKE=new A.bG(75e4)
D.aM3=new A.ar(20,64,20,24)
D.Ra=new B.aH4(0,"purchase")
D.aPR=new B.aH4(1,"session")
D.jl=new B.pR(0,"signInRequired")
D.te=new B.pR(1,"telegramAccountNotLinked")
D.jm=new B.pR(10,"requestFailed")
D.xs=new B.pR(11,"purchaseFailed")
D.it=new B.pR(12,"sessionFailed")
D.tf=new B.pR(2,"insufficientBalance")
D.tg=new B.pR(3,"walletInactive")
D.th=new B.pR(4,"refundPending")
D.ti=new B.pR(5,"accessExpired")
D.xt=new B.pR(6,"accessRequired")
D.ha=new B.pR(7,"gameUnavailable")
D.ER=new B.pR(8,"accessNotActive")
D.Rb=new B.pR(9,"sessionDenied")
D.Rc=new B.Dn(0,"none")
D.aPS=new B.Dn(1,"signIn")
D.aPT=new B.Dn(2,"bindTelegram")
D.aPU=new B.Dn(3,"topUp")
D.aPV=new B.Dn(4,"purchase")
D.aPW=new B.Dn(5,"openGame")
D.tj=new B.Dn(6,"retry")
D.aUl=new A.at(C.kr,null,C.M,null,null)
D.bsk=new A.J(C.X,C.bW,null)
D.aty=new A.o3(2.5,null,null,null,null,null,null,null,null,null)
D.bIK=new A.ad(28,28,D.aty,null)
D.bIM=new A.ad(null,22,null,null)
D.c_2=new A.H("slot-game-access-primary",y.O)
D.c_p=new A.H("slot-game-access-refresh",y.O)
D.c2z=new A.H("gameV2Confirm",y.O)
D.c2A=new A.H("gameV2Message",y.O)
D.c2B=new A.H("gameV2Page",y.O)
D.c3p=new A.H("slot-game-access-message",y.O)
D.c56=new A.H("retiredSlotHome",y.O)
D.c75=new A.H("slot-game-access-gate",y.O)
D.ahj=new B.NE(0,"request")
D.ahk=new B.NE(1,"pending")
D.ahl=new B.NE(2,"launchPending")
D.ahm=new B.NE(3,"storage")
D.Li=new B.NE(4,"unavailable")
D.Lj=new B.NE(5,"expired")})();(function staticFields(){$.acw=function(){var x=y.N
return A.q(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fd2","euO",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"fec","iM",()=>A.b7("SlotGamePage"))})()};
(a=>{a["rlE2IuFlsbYtBWdUq47MfCbyP3c="]=a.current})($__dart_deferred_initializers__);