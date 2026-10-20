((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,H,B={
e6_(){var x,w,v=$.oZ(),u=J.fa(16,y.S)
for(x=0;x<16;++x)u[x]=v.mG(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.C(u,new B.bzi(),A.V(u).k("C<1,n>")).lg(0)
return C.c.am(w,0,8)+"-"+C.c.am(w,8,12)+"-"+C.c.am(w,12,16)+"-"+C.c.am(w,16,20)+"-"+C.c.bV(w,20)},
bzi:function bzi(){},
dNr(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.rU
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.rV
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.rW
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.rX
if(C.c.t(x,"ACCESS_EXPIRED"))return D.rY
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.x5
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.h7
return null},
e_x(d,e,f){var x=e==null?null:C.c.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pg:function pg(d,e){this.a=d
this.b=e},
Cn:function Cn(d,e){this.a=d
this.b=e},
aEj:function aEj(d,e){this.a=d
this.b=e},
bz1:function bz1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Mp:function Mp(d,e){this.a=d
this.b=e},
ag2:function ag2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
arh:function arh(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
dk2:function dk2(d){this.a=d},
dk3:function dk3(d){this.a=d},
djV:function djV(d,e){this.a=d
this.b=e},
djL:function djL(d){this.a=d},
dk1:function dk1(d,e){this.a=d
this.b=e},
djW:function djW(d){this.a=d},
djX:function djX(d,e){this.a=d
this.b=e},
djY:function djY(d){this.a=d},
djS:function djS(d){this.a=d},
djT:function djT(d){this.a=d},
djU:function djU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djG:function djG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djE:function djE(d){this.a=d},
djF:function djF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djD:function djD(d){this.a=d},
djB:function djB(d,e){this.a=d
this.b=e},
djC:function djC(d,e){this.a=d
this.b=e},
djy:function djy(d){this.a=d},
djx:function djx(d){this.a=d},
djR:function djR(d){this.a=d},
djN:function djN(d,e){this.a=d
this.b=e},
djO:function djO(d,e){this.a=d
this.b=e},
djP:function djP(d,e){this.a=d
this.b=e},
djQ:function djQ(d,e){this.a=d
this.b=e},
djM:function djM(d){this.a=d},
djK:function djK(d){this.a=d},
djJ:function djJ(d,e){this.a=d
this.b=e},
djI:function djI(d){this.a=d},
djH:function djH(d,e,f){this.a=d
this.b=e
this.c=f},
djZ:function djZ(d){this.a=d},
dk_:function dk_(d){this.a=d},
dk0:function dk0(d){this.a=d},
djz:function djz(d){this.a=d},
djA:function djA(d){this.a=d},
bbv:function bbv(){},
eVk(d,e,f){var x=b.G,w=A.dI(new B.dNW(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dNV(w)},
eVl(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dI(new B.dNZ(u,new B.dNX(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dNY(w,x)},
dZE(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.ii(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
eiR(d,e){B.dJ_(A.bF(d),b.G.window.location.origin,e)},
dJ_(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ii(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.c.aV(u,e))v=!A.oY(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dNW:function dNW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNV:function dNV(d){this.a=d},
dNX:function dNX(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dO_:function dO_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dNY:function dNY(d,e){this.a=d
this.b=e},
ags:function ags(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7y:function b7y(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dlp:function dlp(d){this.a=d},
dlq:function dlq(d){this.a=d},
eb2(d,e){return new B.E7(d,e,null)},
E7:function E7(d,e,f){this.c=d
this.d=e
this.a=f},
arx:function arx(d,e,f,g){var _=this
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
dmo:function dmo(d){this.a=d},
dmp:function dmp(d){this.a=d},
dmq:function dmq(d){this.a=d},
dmr:function dmr(d){this.a=d},
dmn:function dmn(d){this.a=d},
dm9:function dm9(d){this.a=d},
dlJ:function dlJ(d,e){this.a=d
this.b=e},
dlK:function dlK(d){this.a=d},
dlt:function dlt(d,e){this.a=d
this.b=e},
dlL:function dlL(){},
dlI:function dlI(d,e){this.a=d
this.b=e},
dlQ:function dlQ(d,e){this.a=d
this.b=e},
dlR:function dlR(d,e){this.a=d
this.b=e},
dlS:function dlS(d,e){this.a=d
this.b=e},
dlT:function dlT(d){this.a=d},
dlv:function dlv(d,e){this.a=d
this.b=e},
dlw:function dlw(d){this.a=d},
dlx:function dlx(d){this.a=d},
dly:function dly(d){this.a=d},
dlz:function dlz(d){this.a=d},
dlA:function dlA(d,e){this.a=d
this.b=e},
dlB:function dlB(d,e){this.a=d
this.b=e},
dlC:function dlC(d,e){this.a=d
this.b=e},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlE:function dlE(d,e){this.a=d
this.b=e},
dlF:function dlF(d){this.a=d},
dm0:function dm0(d){this.a=d},
dm1:function dm1(d){this.a=d},
dm2:function dm2(d){this.a=d},
dm3:function dm3(d){this.a=d},
dm4:function dm4(d){this.a=d},
dm5:function dm5(d){this.a=d},
dm6:function dm6(d,e){this.a=d
this.b=e},
dm7:function dm7(d,e){this.a=d
this.b=e},
dm8:function dm8(d){this.a=d},
dmc:function dmc(d){this.a=d},
dmd:function dmd(d){this.a=d},
dme:function dme(d){this.a=d},
dmf:function dmf(d){this.a=d},
dmg:function dmg(d){this.a=d},
dmh:function dmh(d,e,f){this.a=d
this.b=e
this.c=f},
dmi:function dmi(d){this.a=d},
dmj:function dmj(d,e){this.a=d
this.b=e},
dmk:function dmk(d){this.a=d},
dlU:function dlU(d){this.a=d},
dlV:function dlV(d){this.a=d},
dlW:function dlW(d){this.a=d},
dlX:function dlX(d){this.a=d},
dlY:function dlY(d){this.a=d},
dlZ:function dlZ(d){this.a=d},
dm_:function dm_(d){this.a=d},
dlM:function dlM(d){this.a=d},
dlN:function dlN(){},
dlG:function dlG(){},
dlO:function dlO(d){this.a=d},
dlP:function dlP(){},
dlH:function dlH(){},
dml:function dml(d,e){this.a=d
this.b=e},
dmm:function dmm(d){this.a=d},
dlr:function dlr(d,e){this.a=d
this.b=e},
dls:function dls(d){this.a=d},
dlu:function dlu(d,e,f){this.a=d
this.b=e
this.c=f},
dma:function dma(d){this.a=d},
dmb:function dmb(d,e){this.a=d
this.b=e},
aEk:function aEk(d,e,f,g,h,i,j,k,l,m){var _=this
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
bz2:function bz2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aji:function aji(d,e,f){this.c=d
this.d=e
this.a=f},
aEo:function aEo(d){this.a=d},
eDq(d){var x
if(d==null||d.length===0)return null
x=A.eb0().i(0,d)
return(x==null?null:x.e===C.iJ)===!1?x:null},
Ck(d,e,f,g){var x=null
return B.evP(d,e,f,g)},
evP(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ck=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.aaw.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.W9():k).$0(),$async$Ck)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.aaw.h(0,a0,r)
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
case 13:$.aaw.h(0,a0,q)
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
$.aaw.h(0,a0,o)
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
v=$.aaw.dv(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ck,w)},
aax(d,e){var x=null
return B.evO(d,e)},
evO(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$aax=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eE(0)
for(p=J.aZ(l);p.G();)$.aaw.N(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.W9():p).$0(),$async$aax)
case 6:t=g
p=J.aZ(l)
case 7:if(!p.G()){x=8
break}s=p.gR()
o=s
t.a.N(0,o)
x=9
return A.c($.We().N(0,"flutter."+o),$async$aax)
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
return A.k($async$aax,w)}},D,E,F,G,N,O,P,Q,R,S,T,I
J=c[1]
A=c[0]
C=c[2]
K=c[299]
L=c[309]
M=c[318]
H=c[481]
B=a.updateHolder(c[157],B)
D=c[780]
E=c[185]
F=c[781]
G=c[659]
N=c[743]
O=c[620]
P=c[191]
Q=c[782]
R=c[442]
S=c[487]
T=c[457]
I=c[551]
B.pg.prototype={
Y(){return"GameAccessIssue."+this.b}}
B.Cn.prototype={
Y(){return"GameAccessPrimaryAction."+this.b}}
B.aEj.prototype={
Y(){return"GameAccessAttemptKind."+this.b}}
B.bz1.prototype={
gqs(){var x=this
if(x.b||x.c||!x.a)return D.Qb
if(x.f)return D.aLE
switch(x.r){case D.jc:return D.aLA
case D.rU:return D.aLB
case D.rV:case D.rW:return D.aLC
case D.rX:case D.h7:return D.Qb
case D.rY:case D.x5:case D.Ei:case D.Qa:case D.jd:case D.x4:return D.rZ
case D.ik:return D.rZ
case null:case void 0:if(x.e)return D.rZ
return x.d?D.aLD:D.rZ}}}
B.Mp.prototype={
Y(){return"_GameProblem."+this.b}}
B.ag2.prototype={
P(){return new B.arh()},
dXT(){return this.f.$0()},
e0f(){return this.r.$0()}}
B.arh.prototype={
gbKJ(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dNr(v)}else v=w
return v},
gc9q(){var x,w=this.ch
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
ghE(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gM()&&x.a.dXT()},
X(){var x,w,v=this
v.a6()
x=$.al.RG$
v.ax=x==null||x===C.cw
w=A.iv(v.a.d.a.a,new B.dk2(v))
v.d!==$&&A.aJ()
v.d=new E.adD(new A.Co(w))
v.a.e.a4(v.gcjt())
$.al.bq$.push(v)
$.al.y2$.push(new B.dk3(v))},
tq(){var x=this.z
if(x!=null)x.a8()
this.y=this.z=null},
bOA(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gf7())$.al.y2$.push(new B.djV(v,w))},
cju(){var x=this
if(x.c==null||x.at||x.a.e.gM())return;++x.ay
x.bOA()
x.n(new B.djL(x))},
nY(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cw)x.bOA()
x.n(new B.dk1(x,d))
if(x.ax&&x.ghE())x.tB(x.gbvk())},
q(){var x=this;++x.ay
x.bOA()
x.tq()
x.a.e.T(x.gcjt())
$.al.iM(x)
x.a5()},
ca6(d){var x
this.CW=d instanceof A.i9?B.dNr(d.b):null
if(d instanceof E.pi)x=D.ag3
else if(d instanceof E.uv)x=D.ag1
else if(d instanceof E.aaz)x=D.ag2
else x=d instanceof E.Cm||d instanceof E.YV?D.Kv:D.ag0
this.ch=x},
tB(d){return this.dwv(d)},
dwv(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tB=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghE()){x=1
break}q=++r.ay
r.n(new B.djW(r))
u=4
x=7
return A.c(d.$1(q),$async$tB)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghE()&&J.p(q,r.ay))r.n(new B.djX(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.djY(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tB,w)},
dyX(){return this.tB(this.gbvk())},
vm(d){return this.dsU(d)},
dsU(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$vm=A.h(function(e,f){if(e===1){u.push(f)
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
return A.c(p.pA(t.a.c),$async$vm)
case 9:g.b=f
v=1
x=8
break
case 6:v=5
i=u.pop()
if(!t.ghE()||d!==t.ay)A.W(C.ao)
x=8
break
case 5:x=1
break
case 8:if(!t.ghE()||d!==t.ay)A.W(C.ao)
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
return A.c(E.bzn(n,l.b,new B.djS(t),p),$async$vm)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fE))A.W(C.x)
j=E.e5Y(n,l.b,p,new B.djT(t),null,m)
case 11:k.a=j
if(!t.ghE()||d!==t.ay)A.W(C.ao)
if(j==null)throw A.o(new E.Cm())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e35(),$async$vm)
case 14:s=f
if(!t.ghE()||d!==t.ay)A.W(C.ao)
x=15
return A.c(p.cvN(),$async$vm)
case 15:r=f
if(!t.ghE()||d!==t.ay)A.W(C.ao)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.qM(),$async$vm)
case 20:g.d=f
v=1
x=19
break
case 17:v=16
h=u.pop()
q=A.u(h)
if(!t.ghE()||d!==t.ay)A.W(C.ao)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghE()||d!==t.ay)A.W(C.ao)
t.n(new B.djU(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vm,w)},
aud(d,e,f){return this.cZC(d,e,f)},
cZC(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$aud=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghE()||d!==r.ay)A.W(C.ao)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cA()
n=r.c
n.toString
m=y.y
p.seU(A.BV(null,null,C.aj,!0,null,new B.djG(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aK(p.an(),m),$async$aud)
case 6:o=h
if(!r.ghE()||d!==r.ay)A.W(C.ao)
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
return A.k($async$aud,w)},
cWu(){return this.tB(new B.djD(this))},
cOV(){return this.tB(new B.djy(this))},
dry(){return this.tB(new B.djR(this))},
dyV(){return this.tB(new B.djK(this))},
dyS(){return this.tB(new B.djI(this))},
a_I(d){return this.dlA(d)},
dlA(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_I=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghE()||u.as){x=1
break}++u.ay
u.n(u.gc7q())
t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aK(d,y.X),$async$a_I)
case 3:x=u.ghE()?4:5
break
case 4:x=6
return A.c(u.tB(u.gbvk()),$async$a_I)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a_I,w)},
dyT(d){var x
switch(this.gbKJ()){case D.rU:return d.gWq()
case D.rV:return d.gWg()
case D.rW:return d.gWo()
case D.rX:return d.gWj()
case D.rY:return d.gWf()
case D.x5:return d.gWl()
case D.h7:return d.gK_()
default:break}x=null
switch(this.gc9q()){case D.ag3:x=d.gacv()
break
case D.ag1:x=d.gUk()
break
case D.ag2:x=d.gUj()
break
case D.Kw:x=d.gacq()
break
case D.Kv:x=d.gK_()
break
case D.ag0:x=d.gWd()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.b,y.J)
g.toString
x=i.f
w=x==null?h:x.gcrv()
if(w==null)w=g.gam1()
if(i.at||!i.a.e.gM()){x=A.kw(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gWr(),h,h,h,h,h,h,C.aE,h,h)
u=i.a.r
return A.bN(x,h,new A.dx(!0,!0,!0,!0,C.K,!1,A.aK(new A.J(C.aW,A.w(A.a([v,M.dt,A.c0(A.d(g.giY(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.I,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbKJ()
o=i.dyT(g)
v=y.p
u=A.a([A.d(g.gJY(),h,h,h,h,h,h,h,h,h),C.S],v)
if(!x)C.d.B(u,A.a([i.bPj(g.gWp(),t.b+" USDT"),i.bPj(g.gWk(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(K.eo,A.d(o,D.bYf,h,h,h,h,A.I(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bnx)
n=s==null
if(!n){m=A.d(g.gacs(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bPj(g.gtK(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gaw4():g.gWh()
else k=s.c?g.gWi():g.gUk()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.S],v)
if(!j||s.c)k.push(i.DJ("gameV2AcknowledgePurchase",g.gacm(),i.gcOU()))
else k.push(i.DJ("gameV2RetryPurchase",g.gacu(),i.gc6y()))
u.push(A.d7(new A.J(C.D,A.w(k,C.a9,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.DJ("gameV2Purchase",g.gWm(),i.gc6y()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jF.t(0,m.a))===!0?g.gacp():g.gUj(),h,h,h,h,h,h,h,h,h),C.S],v)
if(i.y!=null&&q)k.push(i.DJ("gameV2Open",g.gwM(),i.gdyU()))
j=!1
if(n)if(q)if((l?h:F.jF.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jF.t(0,m.a))===!0?g.gUl():g.gUm()
k.push(i.DJ("gameV2Reissue",j,i.gcgn()))}if((l?h:F.jF.t(0,m.a))!==!0)k.push(i.bJh("gameV2End",g.gaco(),i.gdyR(),!0))
u.push(A.d7(new A.J(C.D,A.w(k,C.a9,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.DJ("gameV2Prepare",g.gUl(),i.gcgn()))
if(p===D.rU)u.push(i.DJ("gameV2BindTelegram",g.gQE(),new B.djZ(i)))
if(p===D.rV||p===D.rW)u.push(i.DJ("gameV2TopUp",g.gWn(),new B.dk_(i)))
u.push(i.bJh("gameV2CheckOriginal",g.gacn(),i.gdyW(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bN(A.kw(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,P.e2b(new B.dk0(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dx(!0,!1,!0,!0,C.K,!1,A.eE(A.a([A.aK(new A.ba(C.vD,A.w(u,C.a9,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.bYg,Q.P3,h,h,C.y,!1),h),h,h,h,h,h)},
bPj(d,e){var x=null
return new A.J(R.Dh,A.bh(C.l4,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ad,x,4,16),x)},
bJh(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.djz(f)
x=A.ff(A.d(e,w,w,w,w,w,w,C.aE,w,w),new A.K(d,v),x,w)
v=x}else{x=this.as?w:new B.djA(f)
x=A.c0(A.d(e,w,w,w,w,w,w,C.aE,w,w),new A.K(d,v),x,w)
v=x}return new A.J(S.De,v,w)},
DJ(d,e,f){return this.bJh(d,e,f,!1)}}
B.bbv.prototype={}
B.ags.prototype={
P(){return new B.b7y()}}
B.b7y.prototype={
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
v=A.dI(new B.dlp(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.awv()
$.B_().a99(x,new B.dlq(u),!0)},
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
return new A.PP(x,null,null,C.zs,null)}}
B.E7.prototype={
P(){var x=$.ak()
return new B.arx(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.oZ().mG(1073741824),x.$1$0(y.x))}}
B.arx.prototype={
gh_(){if(this.c!=null){var x=this.z
x=x==null?null:x.gM()
x=x!==!1}else x=!1
return x},
gE7(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gM()
if(x!==!1)if(w.gh_()){v=w.x
v===$&&A.e()
v=v.gM()}}return v},
ghs(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.no
if(w!=null)w.cY()
x=u.at
if(x!=null&&u.w.ma(x))return!0}catch(v){if(!(A.u(v) instanceof A.Iw))throw v}u.ax=!0
u.CW=null
return!1},
gbv7(){var x,w=this.ay
if(w===$){x=$.ak().$1$0(y.T)
this.ay!==$&&A.bg()
w=this.ay=new E.adD(x)}return w},
X(){var x,w,v,u,t,s=this
s.a6()
x=$.ak()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.iS(x.$1$0(y.E),s.w)
x.a4(s.gcie())
s.y=x}if(v)s.at=s.w.bSy()
x=u?w.dUQ(new B.dmo(s)):w
s.x!==$&&A.aJ()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.Zp()
return}t=s.d=B.eDq(v.c)
if(t==null){s.k2=!1
s.ok=D.h7
return}if(!t.gbWl()){s.k2=!1
s.ok=D.h7
return}if(t.e!==C.iJ){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.eVk(s.gbM1(),v,new B.dmp(s))
x=x.f!=null?s.as:null
s.p2=B.eVl(s.gdet(),x,new B.dmq(s))
$.al.y2$.push(new B.dmr(s))
s.cy=s.asB()
return}},
aZ(){var x,w,v=this
v.by()
x=v.c
x.toString
v.z=A.cp(x,null,y.X)
x=v.y
if((x==null?null:x.gM())===!1)$.al.y2$.push(new B.dmn(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iJ){v.k1=!0
v.f=v.c6t()}},
cif(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gM())!==!1}if(w)return
B.eiR(A.Z(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dm9(x))},
YI(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$YI=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.aqt(),$async$YI)
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
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
x=14
return A.c(s.w.il(),$async$YI)
case 14:r=e
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
if(s.c!=null&&r!=null)try{if(!(s.gh_()&&s.ghs()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.ix().m(C.aN,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gh_()&&s.ghs())){x=1
break}$.ix().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
x=19
return A.c(s.r.i8(!0),$async$YI)
case 19:o=e
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dlJ(s,n))
try{j=J.a67(n,4)
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.ix().m(C.aN,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gh_()&&s.ghs())s.n(new B.dlK(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$YI,w)},
v6(){return this.cTn()},
cTn(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$v6=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.aqt(),$async$v6)
case 5:h=b0
x=6
return A.c(s.YW(),$async$v6)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cFS(),$async$v6)
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
case 10:if(!s.gE7())throw A.o(C.ao)
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
case 4:if(!(s.gh_()&&s.ghs()))A.W(C.ao)
a3=s.w
d=s.at
d.toString
q=a3.a3F(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.il(),$async$v6)
case 18:q=b0
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.ix().m(C.aN,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.CP(),$async$v6)
case 26:m=b0
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dlt(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.ix().m(C.aN,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=25
break
case 22:x=2
break
case 25:x=20
break
case 21:u=28
x=31
return A.c(s.r.CP(),$async$v6)
case 31:j=b0
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.YW(),$async$v6)
case 32:g=b0
if(!(s.gh_()&&s.ghs()))A.W(C.ao)
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
return A.k($async$v6,w)},
YW(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$YW=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.asB()
v=t.rY(C.OI,new B.dlL())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$YW,w)},
aqt(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$aqt=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gE7())throw A.o(C.ao)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jM(),$async$aqt)
case 3:s=e
if(!u.gE7())throw A.o(C.ao)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dlI(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aqt,w)},
asB(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$asB=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.boO(k.a),$async$asB)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.ot(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.H.av(p,null)
if(!(r.gh_()&&r.ghs()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.ix().m(C.aN,"localStorage rtp write failed",o,null)}v=p
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
return A.k($async$asB,w)},
Zp(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Zp=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbv7().pA(l),$async$Zp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dlQ(s,r))
x=1
break}s.n(new B.dlR(s,r))
x=8
return A.c(s.tp(),$async$Zp)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.i9){q=m
$.ix().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dlS(s,q))}else{p=m
o=A.aN(k)
m=$.ix()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dlT(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zp,w)},
tp(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tp=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iJ){if(s.c==null){x=1
break}s.n(new B.dlv(s,f))
x=1
break}if(!f.gbWl()){if(s.c==null){x=1
break}s.n(new B.dlw(s))
x=1
break}if(s.c!=null)s.n(new B.dlx(s))
u=4
x=7
return A.c(s.w.il(),$async$tp)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dly(s))
x=1
break}if(s.c==null){x=1
break}q=s.bqu(r)
if(q==null){s.n(new B.dlz(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbv7().a
if(k.a.c instanceof A.fE)A.W(C.x)
x=8
return A.c(k.If(d),$async$tp)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dlA(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cdF(p.r)
if(p.b!==!0||o!=null){s.n(new B.dlB(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dlC(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.ik)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dBU(!0),$async$tp)
case 13:case 12:x=1
break
case 10:s.n(new B.dlD(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.i9){m=k
$.ix().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dlE(s,m))}else{l=k
$.ix().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dlF(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tp,w)},
bOv(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.Zp()
return w.tp()},
vk(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vk=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iJ){if(s.c==null){x=1
break}if(h)s.n(new B.dm0(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dm1(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tp(),$async$vk)
case 5:x=1
break
case 4:s.n(new B.dm2(s))
u=7
x=10
return A.c(s.w.il(),$async$vk)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dm3(s))
x=1
break}if(s.c==null){x=1
break}o=s.bqu(p)
if(o==null){s.n(new B.dm4(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bOK(o)
x=13
return A.c(s.tp(),$async$vk)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bN9(),$async$vk)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbv7().a
if(h.a.c instanceof A.fE)A.W(C.x)
x=15
return A.c(h.S0(q,new E.aEn(n)),$async$vk)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Qf?16:17
break
case 16:x=18
return A.c(s.aqc(),$async$vk)
case 18:if(s.c==null){x=1
break}s.n(new B.dm5(s))
x=19
return A.c(s.tp(),$async$vk)
case 19:x=1
break
case 17:s.n(new B.dm6(s,m))
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
k=s.btG(l,D.x4)
f=l.b.toUpperCase()
x=k===D.rY||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aqc(),$async$vk)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dm7(s,k))
x=21
break
case 22:j=h
$.ix().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dm8(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vk,w)},
oR(d,e){return this.dBV(d,!0)},
dBU(d){return this.oR(!0,d)},
dBV(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$oR=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.fx
b1=s.db
if(b6.e===C.iJ){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.n(new B.dmc(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dmd(s))
u=4
x=7
return A.c(s.w.il(),$async$oR)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bqu(p)
if(o==null){s.n(new B.dme(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bOK(o)
x=10
return A.c(s.tp(),$async$oR)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.zZ(!0),$async$oR)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.dmf(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bNa(),$async$oR)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.K8(b6.a,new B.aEo(n)),$async$oR)
case 15:m=c2
l=new A.aE(Date.now(),0,!1).a2()
k=m==null?null:E.eiJ(m.w)
j=m==null?null:E.dOt(m.f)
i=m==null?null:E.dOt(m.r)
h=m==null?null:E.dOt(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Qh
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a2().dm(l.a2()).a)<=3e8
b2=i
a2=(b2==null?null:b2.i2(l))===!0
b2=h
a3=(b2==null?null:b2.i2(l))===!0
a4=h!=null&&i!=null&&!h.i2(i)
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
$.ix().m(C.t,"game session response rejected: "+J.bdp(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.L4(b6.a,!0,m.a),$async$oR)
case 20:case 19:x=21
return A.c(s.Y1(),$async$oR)
case 21:if(s.c==null){x=1
break}s.n(new B.dmg(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.zZ(!0),$async$oR)
case 24:x=1
break
case 23:x=b6.e===C.iJ?25:26
break
case 25:s.n(new B.dmh(s,k,h))
x=27
return A.c(s.Ac(),$async$oR)
case 27:x=1
break
case 26:s.n(new B.dmi(s))
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
return A.c(s.Y1(),$async$oR)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.oR(!1,!0),$async$oR)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dmj(s,a9))
x=29
break
case 30:b0=a7
$.ix().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.dmk(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oR,w)},
Ac(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ac=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.dlU(s))
x=!k.i2(new A.aE(Date.now(),0,!1).a2())?3:4
break
case 3:x=5
return A.c(s.zZ(!0),$async$Ac)
case 5:if(s.c==null){x=1
break}s.n(new B.dlV(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.il(),$async$Ac)
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
break}s.n(new B.dlW(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bqu(q)
if(g==null){s.n(new B.dlX(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bOK(g)
x=13
return A.c(s.tp(),$async$Ac)
case 13:x=1
break
case 12:u=15
s.n(new B.dlY(s))
x=18
return A.c(A.tW(r,C.lz,"_self"),$async$Ac)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dlZ(s))
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
return A.c(s.zZ(!0),$async$Ac)
case 19:if(s.c==null){x=1
break}s.n(new B.dm_(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ac,w)},
zZ(d){return this.d3K(!0)},
d3K(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$zZ=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.L4(p.a,!0,n)
r.k4=q
u=3
x=6
return A.c(q,$async$zZ)
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
return A.k($async$zZ,w)},
L4(d,e,f){return this.d3R(d,!0,f)},
d3R(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$L4=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.P0(d,f),$async$L4)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.ix().m(C.aN,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.eD(C.D3,null,l),$async$L4)
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
return A.c(s.Y1(),$async$L4)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$L4,w)},
bN9(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bN9=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcgO()
v=B.Ck(new B.dlM(u),u.gcdQ(),new B.dlN(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bN9,w)},
aqc(){var x=0,w=A.l(y.H),v=this
var $async$aqc=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aax(new B.dlG(),A.dG([v.gcgO(),v.gcdQ()],y.N)),$async$aqc)
case 2:return A.j(null,w)}})
return A.k($async$aqc,w)},
bNa(){var x=0,w=A.l(y.N),v,u=this
var $async$bNa=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Ck(new B.dlO(u),null,new B.dlP(),u.gcjr())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bNa,w)},
Y1(){var x=0,w=A.l(y.H),v=this
var $async$Y1=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aax(new B.dlH(),A.dG([v.gcjr()],y.N)),$async$Y1)
case 2:return A.j(null,w)}})
return A.k($async$Y1,w)},
bqu(d){var x=A.bDn(d),w=x==null?null:C.c.F(x)
return w==null||w.length===0?null:w},
bOK(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcgO(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e_x(D.Q9,this.fx,"product-"+x)},
gcdQ(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e_x(D.Q9,this.fx,x)},
gcjr(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e_x(D.aLz,this.fx,x)},
ceT(d){var x,w=Date.now(),v=C.h.jK($.oZ().mG(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cdF(d){var x=B.dNr(d)
if(x!=null)return x
return d==null||C.c.F(d).length===0?null:D.jd},
btG(d,e){var x,w=d.a
if(w===401)return D.jc
x=B.dNr(d.b)
if(x!=null)return x
if(w===404)return D.h7
return e},
dkW(d,e){switch(e){case D.jc:return d.gam_()
case D.rU:return d.gWq()
case D.rV:return d.gWg()
case D.rW:return d.gWo()
case D.rX:return d.gWj()
case D.rY:return d.gWf()
case D.x5:return d.gWl()
case D.h7:return d.gK_()
case D.Ei:return d.gWh()
case D.Qa:return d.gam2()
case D.jd:return d.gWd()
case D.x4:return d.gWi()
case D.ik:return d.gam3()
case null:case void 0:return null}},
btb(d){return this.deu(d)},
deu(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$btb=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gE7()
else t=u.gh_()&&u.ghs()
if(!t){v=null
x=1
break}x=3
return A.c(u.A7(d),$async$btb)
case 3:s=f
if(r.f!=null)r=u.gE7()
else r=u.gh_()&&u.ghs()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$btb,w)},
A7(d){return this.d9J(d)},
d9J(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$A7=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.ary()
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
case 5:v=s.v6()
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
return A.c(k.aw1(A.b8(c0.i(0,"operationId"))),$async$A7)
case 23:p=A.Z(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.K0(b4==="SPIN_RETRY_REQUEST"?A.b8(c0.i(0,"operationId")):null),$async$A7)
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
if(p!=null)A.aM(p,!1).f.aK(O.qu,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a5R(c0.i(0,"betIndex"),4)
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
else a9=p.f!=null?""+A.a5R(c0.i(0,"nonce"),9007199254740991):J.as(c0.i(0,"nonce"))
x=29
return A.c(p.Dj(n,o,A.b3(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$A7)
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
return A.c(p.jM(),$async$A7)
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
return A.c(s.YW(),$async$A7)
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
return A.c(p.acP(a0,a1),$async$A7)
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
return A.k($async$A7,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gcie())
w=x.y
if(w!=null)w.q()
w=x.p1
if(w!=null)w.$0()
w=x.p2
if(w!=null)w.$0()
if(!x.go)x.zZ(!0)
x.a5()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.b,y.J)
r.toString
if(t.Q){x=t.d
x=x==null?s:x.b
return A.bN(A.kw(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dx(!0,!0,!0,!0,C.K,!1,A.aK(A.b5(A.w(A.a([A.d(r.gWr(),s,s,s,s,s,s,C.aE,s,s),C.a8,A.c0(A.d(r.gyo(),s,s,s,s,s,s,s,s,s),D.c_B,new B.dml(t,d),s)],y.p),C.l,s,C.e,C.I,0,C.j),C.q,s,C.w,s,s,C.aW,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbv7()
v=t.y
v.toString
return new B.ag2(x,r,v,new B.dmm(t),t.gdlF(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.B(v,A.a([w,A.eu(0,A.hZ(C.bG,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbM1(),s,s,s,s,s,s,!1,C.c8),108,s,0,s,s,75)],x))
else v.push(t.cRF(d))
if(u)v.push(new A.dx(!0,!0,!0,!0,C.K,!1,new A.cd(C.hv,s,s,A.aQ(s,s,s,s,D.aQ2,s,s,t.gbM1(),s,s,s,s,r.giY(),s),s),s))
return A.bN(s,D.auz,new A.cV(C.aY,s,C.aT,C.q,v,s),s,s,s,s,s)},
cRF(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.b,y.J)
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
if(s){u=e.fy?a0.gJZ():a0.gWe()
if(e.fy){a0=a0.gJZ()
r=A.t(a1).ok.y
a0=new A.J(C.aW,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.G.A(0.78)),C.aE,d,d),d)}else a0=D.bDP
return A.aK(A.R(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbWl())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bz1(r,p,l,k===!0,u===!0,!j,i)
g=e.dkW(a0,i)
if(e.fy)f=a0.gJZ()
else f=j?d:a0.galW()
u=x==null?d:x.b
a0=u==null?a0.gam0():u
u=g==null
r=u?f:g
return new B.aEk(a0,h,q,m,r,!u,!t,new B.dlr(e,h),new B.dls(e),d)},
ddm(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aM(x,!1).f.aK(C.cN,y.X)
return
case 2:w.at1()
return
case 3:x=w.c
x.toString
A.aM(x,!1).f.aK(G.oK,y.X)
return
case 4:w.vk()
return
case 5:w.Ac()
return
case 6:w.bOv()
return
case 0:return}},
at1(){var x=0,w=A.l(y.H),v,u=this,t
var $async$at1=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aK(C.ok,y.X),$async$at1)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bOv(),$async$at1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$at1,w)},
ary(){var x=0,w=A.l(y.H),v,u=this
var $async$ary=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ZK(),$async$ary)
case 3:case 1:return A.j(v,w)}})
return A.k($async$ary,w)},
ZK(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ZK=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.zZ(!0),$async$ZK)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).GO(),$async$ZK)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aM(t,!1).f.iz("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ZK,w)},
c6t(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ac
u=b.G.window.navigator.userAgent
x=$.ena()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.al.y2$.push(new B.dlu(w,v,t))
return C.Ad}u=w.caY(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.ags(u,x,w.gdyG(),null)},
caY(d,e){var x,w="/games/"+d,v=C.c.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dyH(){new B.dma(this).$0()}}
B.aEk.prototype={
u(d){var x=A.f(d,C.b,y.J)
x.toString
return new A.dx(!0,!0,!0,!0,C.K,!1,A.d4(new B.bz2(this,x,A.t(d),this.d5Q(x))),null)},
d5Q(d){switch(this.d.gqs().a){case 1:return d.galZ()
case 2:return d.gQE()
case 3:return d.gWn()
case 4:return d.gWm()
case 5:return d.gwM()
case 6:return d.galY()
case 0:return null}}}
B.aji.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a1(C.G.A(0.58))
u=A.P(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aW(C.G,C.T)
return new A.J(T.eH,A.z(A.a([u,C.ai,new A.e7(1,C.ba,A.d(this.d,x,x,x,x,x,v,C.jG,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aEo.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aEo&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.c.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
v(){var x=A.r(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a1<n,@>?>(a1<n,@>)"])
B.bzi.prototype={
$1(d){return C.c.cm(C.h.jK(d,16),2,"0")},
$S:44}
B.dk2.prototype={
$0(){return this.a.ghE()},
$S:1}
B.dk3.prototype={
$1(d){var x=this.a
if(x.ghE())x.tB(x.gbvk())
else x.cju()},
$S:2}
B.djV.prototype={
$1(d){var x=this.a
if(x.gf7()&&this.b.c!=null)this.b.hg(x)},
$S:2}
B.djL.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tq()
x.e=x.x=x.w=x.r=null},
$S:0}
B.dk1.prototype={
$0(){var x=this.a
x.ax=this.b===C.cw
x.as=!1
x.tq()},
$S:0}
B.djW.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.djX.prototype={
$0(){return this.a.ca6(this.b)},
$S:0}
B.djY.prototype={
$0(){return this.a.as=!1},
$S:0}
B.djS.prototype={
$0(){return this.a.ghE()},
$S:1}
B.djT.prototype={
$0(){return this.a.ghE()},
$S:1}
B.djU.prototype={
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
x=x==null?s:F.jF.t(0,x.a)}if(x!==!0){x=r.x
w=x==null
if(w)v=s
else{v=x.b
v=v==null?s:v.b}if(v!==!0){if(w)x=s
else{x=x.b
x=x==null?s:x.f}x=x!=null}else x=u}else x=u}else x=u
else x=u
if(x)r.tq()
q=q.c
if(q!=null)r.ca6(q)},
$S:0}
B.djG.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.b,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.be(A.a([A.aF(A.d(s.gcp(),t,t,t,t,t,t,t,t,t),t,t,t,new B.djE(v),t,t),A.c0(A.d(s.gjv(),t,t,t,t,t,t,t,t,t),D.bYe,new B.djF(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.djE.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.djF.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gM()&&w.ax&&x.b.an().gM()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.djD.prototype={
$1(d){return this.cyR(d)},
cyR(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.YV())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.e6_()
k=h.a.c
j=g.e
l=E.e5V(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.b,y.J)
x=3
return A.c(h.aud(d,m.gNO(),m.acr(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghE()||d!==h.ay)A.W(C.ao)
u=5
x=8
return A.c(g.bZ1(r),$async$$1)
case 8:q=a1
if(!h.ghE()||d!==h.ay)A.W(C.ao)
h.n(new B.djB(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aN(e)
if(!h.ghE()||d!==h.ay)A.W(C.ao)
x=9
return A.c(g.e1K(),$async$$1)
case 9:n=a1
if(!h.ghE()||d!==h.ay)A.W(C.ao)
h.n(new B.djC(h,n))
A.yI(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:62}
B.djB.prototype={
$0(){var x=this.a
x.w=this.b
x.tq()},
$S:0}
B.djC.prototype={
$0(){var x=this.a
x.w=this.b
x.tq()},
$S:0}
B.djy.prototype={
$1(d){return this.cyQ(d)},
cyQ(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dJB(r.a),$async$$1)
case 3:if(!t.ghE()||d!==t.ay)A.W(C.ao)
if(!t.ghE()||d!==t.ay)A.W(C.ao)
t.n(new B.djx(t))
x=4
return A.c(t.vm(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.djx.prototype={
$0(){return this.a.w=null},
$S:0}
B.djR.prototype={
$1(d){return this.cyU(d)},
cyU(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Cm())
t=l.c
t.toString
t=A.f(t,C.b,y.J)
t.toString
x=3
return A.c(k.cvN(),$async$$1)
case 3:s=f
if(!l.ghE()||d!==l.ay)A.W(C.ao)
l.n(new B.djN(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jF.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.aud(d,t.gUm(),t.gact()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jF.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dJA(s.a),$async$$1)
case 9:if(!l.ghE()||d!==l.ay)A.W(C.ao)
case 8:if(p)o=s.a
else{t=B.e6_()
r=l.a.c
q=k.e
t=E.e_y(t)
r=E.vB(r)
o=new E.aay(t,E.dI1(q),r)}if(!l.ghE()||d!==l.ay)A.W(C.ao)
l.n(new B.djO(l,o))
x=10
return A.c(k.dY0(o,p),$async$$1)
case 10:n=f
if(!l.ghE()||d!==l.ay)A.W(C.ao)
l.n(new B.djP(l,n))
t=l.z
if(t!=null)t.a8()
m=n.b.dm(new A.aE(Date.now(),0,!1).a2())
t=m.a<0?C.b_:m
l.z=A.dt(t,new B.djQ(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.djN.prototype={
$0(){this.a.x=this.b},
$S:0}
B.djO.prototype={
$0(){var x=this.a
x.tq()
x.x=new E.KZ(this.b,null)},
$S:0}
B.djP.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.djQ.prototype={
$0(){var x=this.a
if(x.ghE()&&x.y===this.b)x.n(new B.djM(x))},
$S:0}
B.djM.prototype={
$0(){var x=this.a
x.tq()
x.ch=D.Kw},
$S:0}
B.djK.prototype={
$1(d){return this.cyT(d)},
cyT(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Cm())
x=3
return A.c(p.vm(d),$async$$1)
case 3:if(!p.ghE()||d!==p.ay)A.W(C.ao)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.i2(new A.aE(Date.now(),0,!1).a2())||!n.b.i2(new A.aE(Date.now(),0,!1).a2())){if(!p.ghE()||d!==p.ay)A.W(C.ao)
p.n(new B.djJ(p,t))
x=1
break}if(!p.ghE()||d!==p.ay)A.W(C.ao)
p.n(p.gc7q())
p.a.toString
r=A.tW(n.a,C.lz,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghE()||d!==p.ay)A.W(C.ao)
if(!q)throw A.o(new E.uv())
x=5
return A.c(p.vm(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.djJ.prototype={
$0(){var x=this.a
x.tq()
x.x=this.b
if(x.gbKJ()==null&&x.gc9q()==null)x.ch=D.Kw},
$S:0}
B.djI.prototype={
$1(d){return this.cyS(d)},
cyS(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dTp(q.a),$async$$1)
case 3:t=f
if(!s.ghE()||d!==s.ay)A.W(C.ao)
s.n(new B.djH(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.djH.prototype={
$0(){var x=this.a
x.tq()
x.x=new E.KZ(this.b.a,this.c)},
$S:0}
B.djZ.prototype={
$0(){return this.a.a_I(C.ok)},
$S:3}
B.dk_.prototype={
$0(){return this.a.a_I(G.oK)},
$S:3}
B.dk0.prototype={
$0(){var x=this.a;++x.ay
x.tq()
x.a.e0f()},
$S:0}
B.djz.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.djA.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dNW.prototype={
$1(d){var x,w=this,v=A.ii(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.dZE(d,w.c))return
x=A.FE(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dNV.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dNX.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dNZ.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.ii(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.dZE(d,r.c))return
w=A.FE(d.data)
if(!y.f.b(w))return
v=A.r(y.N,y.z)
for(u=w.gee(),u=u.gap(u);u.G();){t=u.gR()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ar("type"))return
new B.dO_(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dO_.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fN(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.dZE(s.d,s.e)){q=m.i(0,"requestId")
p=A.hx(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dq(p,"requestId",q)
o=A.bF(p)
p=s.e
if(p!=null){B.dJ_(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.ii(n,"Object")
k=s.f
if(p){A.CC(n,"postMessage",o,k,y.X)
B.dJ_(o,k,null)}else{B.dJ_(o,k,null)
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
B.dNY.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dlp.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dlq.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:603}
B.dmo.prototype={
$0(){return this.a.gh_()},
$S:1}
B.dmp.prototype={
$0(){return this.a.gh_()},
$S:1}
B.dmq.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gE7()
else x=x.gh_()&&x.ghs()
return x},
$S:1}
B.dmr.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gE7()
else w=x.gh_()&&x.ghs()
if(w)x.YI()},
$S:2}
B.dmn.prototype={
$1(d){return this.a.cif()},
$S:2}
B.dm9.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dlJ.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dlK.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dlt.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dlL.prototype={
$0(){return null},
$S:16}
B.dlI.prototype={
$0(){var x=A.mh(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dlQ.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.h7},
$S:0}
B.dlR.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.zU(w.b,w.gcrv(),"Telegram Mini App",null,C.iJ,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dlS.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.btG(this.b,D.jd)},
$S:0}
B.dlT.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jd},
$S:0}
B.dlv.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.h7},
$S:0}
B.dlw.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.h7},
$S:0}
B.dlx.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dly.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jc},
$S:0}
B.dlz.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jc},
$S:0}
B.dlA.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jd:D.h7},
$S:0}
B.dlB.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jd:x},
$S:0}
B.dlC.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.ik},
$S:0}
B.dlD.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cdF(x.r)
if(w==null)x=x.b===!0?null:D.jd
else x=w
v.ok=x},
$S:0}
B.dlE.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.btG(this.b,D.jd)},
$S:0}
B.dlF.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jd},
$S:0}
B.dm0.prototype={
$0(){return this.a.ok=D.h7},
$S:0}
B.dm1.prototype={
$0(){return this.a.ok=D.h7},
$S:0}
B.dm2.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dm3.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jc},
$S:0}
B.dm4.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jc},
$S:0}
B.dm5.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dm6.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Qg?D.rX:D.Ei},
$S:0}
B.dm7.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dm8.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.x4},
$S:0}
B.dmc.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.ik},
$S:0}
B.dmd.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.dme.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jc},
$S:0}
B.dmf.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ik},
$S:0}
B.dmg.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.ik},
$S:0}
B.dmh.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.dmi.prototype={
$0(){var x=this.a
x.f=x.c6t()
x.k2=!1},
$S:0}
B.dmj.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.btG(this.b,D.ik)},
$S:0}
B.dmk.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ik},
$S:0}
B.dlU.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dlV.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ik},
$S:0}
B.dlW.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jc},
$S:0}
B.dlX.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jc},
$S:0}
B.dlY.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dlZ.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dm_.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ik},
$S:0}
B.dlM.prototype={
$0(){return this.a.ceT("game-access")},
$S:27}
B.dlN.prototype={
$2(d,e){return $.ix().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:38}
B.dlG.prototype={
$2(d,e){return $.ix().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:38}
B.dlO.prototype={
$0(){return this.a.ceT("game-session")},
$S:27}
B.dlP.prototype={
$2(d,e){return $.ix().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:38}
B.dlH.prototype={
$2(d,e){return $.ix().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:38}
B.dml.prototype={
$0(){if(this.a.gh_())A.aM(this.b,!1).f.gkF().hX(0,A.a([A.j0(null,null)],y.Q))},
$S:0}
B.dmm.prototype={
$0(){return this.a.gh_()},
$S:1}
B.dlr.prototype={
$0(){return this.a.ddm(this.b.gqs())},
$S:0}
B.dls.prototype={
$0(){this.a.bOv()
return null},
$S:0}
B.dlu.prototype={
$1(d){return this.cyV(d)},
cyV(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gh_()&&g.ghs())){x=1
break}u=4
x=7
return A.c(g.w.il(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gh_()&&g.ghs()))A.W(C.ao)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.i8(!0),$async$$1)
case 14:p=a2
if(!(g.gh_()&&g.ghs()))A.W(C.ao)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gh_()&&g.ghs()))A.W(C.ao)
$.ix().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gh_()&&g.ghs()))A.W(C.ao)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a67(q,4)
if(!(g.gh_()&&g.ghs()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.bqz()
if(!(g.gh_()&&g.ghs()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gh_()&&g.ghs()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.YW(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.ix().m(C.aN,"RTP prefetch failed",n,null)
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
if(!(g.gh_()&&g.ghs())){x=1
break}$.ix().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gh_()&&g.ghs())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).GO(),$async$$1)
case 20:if(!g.ghs()){x=1
break}g=g.caY(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:572}
B.dma.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.v6(),$async$$0)
case 6:s=e
r=new B.dmb(p,s)
r.$0()
p=y.H
x=7
return A.c(A.eD(D.aGs,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.eD(D.aGa,null,p),$async$$0)
case 8:r.$0()
v=1
x=5
break
case 3:v=2
n=u.pop()
q=A.u(n)
$.ix().m(C.aN,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:52}
B.dmb.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gE7()
else x=w.gh_()&&w.ghs()
if(!x)return
w=v.f!=null?w.as:null
B.eiR(this.b,w)},
$S:0}
B.bz2.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.dN(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.alU(w)
u=A.G(8)
t=A.aL(C.G.A(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aW(C.G,C.B),C.aE,k,k)],q)
if(x.x){w=j.gJY()
p=s.z
w=A.a([H.dT,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.G.A(0.72)),C.aE,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gWp()
if(o)p="-"
o=j.gWk()
m=x.f
if(m==null)m="-"
C.d.B(w,A.a([I.IT,new B.aji(n,p,k),new B.aji(o,m,k)],q))}C.d.B(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.atc:D.au_)
C.d.B(r,A.a([I.IT,A.R(k,k,k,A.d(w,k,k,k,k,k,s,C.aE,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bZ3,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bh(C.l3,A.a([C.me,A.d(w.c?j.galV():j.gWe(),k,k,k,k,k,k,C.aE,k,k)],q),C.by,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aE,k,k)}C.d.B(r,A.a([D.bDR,A.c0(o,D.bUL,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqs()!==D.rZ
else w=!1
if(w)C.d.B(r,A.a([H.dT,A.aF(A.d(j.galX(),k,k,k,k,k,k,C.aE,k,k),D.bV7,k,k,x.z,k,k)],q))
return A.b5(new A.ba(new A.ay(0,1/0,i,1/0),A.aK(A.R(k,k,k,new A.ba(L.Mn,new A.c6(new A.S(D.asp,k,t,u,k,k,C.r),C.aw,new A.J(C.aW,A.w(r,C.a9,k,C.e,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c1y,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aHT,k,k,C.y)},
$S:109};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.arh.prototype,"gc7q","tq",1)
x(v,"gcjt","cju",1)
x(v,"gdyW","dyX",0)
w(v,"gbvk","vm",2)
x(v,"gc6y","cWu",0)
x(v,"gcOU","cOV",0)
x(v,"gcgn","dry",0)
x(v,"gdyU","dyV",0)
x(v,"gdyR","dyS",0)
x(v=B.arx.prototype,"gcie","cif",1)
w(v,"gdet","btb",3)
x(v,"gbM1","ary",0)
x(v,"gdlF","ZK",0)
x(v,"gdyG","dyH",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bt,[B.bzi,B.dk3,B.djV,B.djG,B.djD,B.djy,B.djR,B.djK,B.djI,B.dNW,B.dNZ,B.dlp,B.dlq,B.dmr,B.dmn,B.dlu])
w(A.ew,[B.pg,B.Cn,B.aEj,B.Mp])
w(A.A,[B.bz1,B.aEo])
w(A.L,[B.ag2,B.ags,B.E7])
w(A.U,[B.bbv,B.b7y,B.arx])
v(B.arh,B.bbv)
w(A.bs,[B.dk2,B.djL,B.dk1,B.djW,B.djX,B.djY,B.djS,B.djT,B.djU,B.djE,B.djF,B.djB,B.djC,B.djx,B.djN,B.djO,B.djP,B.djQ,B.djM,B.djJ,B.djH,B.djZ,B.dk_,B.dk0,B.djz,B.djA,B.dNV,B.dNX,B.dO_,B.dNY,B.dmo,B.dmp,B.dmq,B.dm9,B.dlJ,B.dlK,B.dlt,B.dlL,B.dlI,B.dlQ,B.dlR,B.dlS,B.dlT,B.dlv,B.dlw,B.dlx,B.dly,B.dlz,B.dlA,B.dlB,B.dlC,B.dlD,B.dlE,B.dlF,B.dm0,B.dm1,B.dm2,B.dm3,B.dm4,B.dm5,B.dm6,B.dm7,B.dm8,B.dmc,B.dmd,B.dme,B.dmf,B.dmg,B.dmh,B.dmi,B.dmj,B.dmk,B.dlU,B.dlV,B.dlW,B.dlX,B.dlY,B.dlZ,B.dm_,B.dlM,B.dlO,B.dml,B.dmm,B.dlr,B.dls,B.dma,B.dmb])
w(A.c5,[B.dlN,B.dlG,B.dlP,B.dlH,B.bz2])
w(A.x,[B.aEk,B.aji])
x(B.bbv,A.em)})()
A.aY(b.typeUniverse,JSON.parse('{"ag2":{"L":[],"m":[]},"arh":{"U":["ag2"],"em":[]},"ags":{"L":[],"m":[]},"b7y":{"U":["ags"]},"E7":{"L":[],"m":[]},"arx":{"U":["E7"]},"aEk":{"x":[],"m":[]},"aji":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.F
return{J:x("bv"),u:x("B<a1<n,@>?>"),T:x("Co"),w:x("lq"),Q:x("v<bS<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a1<n,@>"),f:x("a1<@,@>"),a:x("b7"),A:x("L9"),N:x("n"),x:x("To"),r:x("fn"),E:x("e5"),O:x("K<n>"),y:x("D"),z:x("@"),S:x("y"),h:x("a1<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.asp=new A.a2(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.atc=new A.a2(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.au_=new A.a2(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.auz=new A.a2(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aGa=new A.bC(175e4)
D.aGs=new A.bC(75e4)
D.aHT=new A.ar(20,64,20,24)
D.Q9=new B.aEj(0,"purchase")
D.aLz=new B.aEj(1,"session")
D.jc=new B.pg(0,"signInRequired")
D.rU=new B.pg(1,"telegramAccountNotLinked")
D.jd=new B.pg(10,"requestFailed")
D.x4=new B.pg(11,"purchaseFailed")
D.ik=new B.pg(12,"sessionFailed")
D.rV=new B.pg(2,"insufficientBalance")
D.rW=new B.pg(3,"walletInactive")
D.rX=new B.pg(4,"refundPending")
D.rY=new B.pg(5,"accessExpired")
D.x5=new B.pg(6,"accessRequired")
D.h7=new B.pg(7,"gameUnavailable")
D.Ei=new B.pg(8,"accessNotActive")
D.Qa=new B.pg(9,"sessionDenied")
D.Qb=new B.Cn(0,"none")
D.aLA=new B.Cn(1,"signIn")
D.aLB=new B.Cn(2,"bindTelegram")
D.aLC=new B.Cn(3,"topUp")
D.aLD=new B.Cn(4,"purchase")
D.aLE=new B.Cn(5,"openGame")
D.rZ=new B.Cn(6,"retry")
D.aQ2=new A.at(C.kf,null,C.G,null,null)
D.bnx=new A.J(C.Y,C.bW,null)
D.arC=new A.ny(2.5,null,null,null,null,null,null,null,null,null)
D.bDP=new A.ad(28,28,D.arC,null)
D.bDR=new A.ad(null,22,null,null)
D.bUL=new A.K("slot-game-access-primary",y.O)
D.bV7=new A.K("slot-game-access-refresh",y.O)
D.bYe=new A.K("gameV2Confirm",y.O)
D.bYf=new A.K("gameV2Message",y.O)
D.bYg=new A.K("gameV2Page",y.O)
D.bZ3=new A.K("slot-game-access-message",y.O)
D.c_B=new A.K("retiredSlotHome",y.O)
D.c1y=new A.K("slot-game-access-gate",y.O)
D.ag0=new B.Mp(0,"request")
D.ag1=new B.Mp(1,"pending")
D.ag2=new B.Mp(2,"launchPending")
D.ag3=new B.Mp(3,"storage")
D.Kv=new B.Mp(4,"unavailable")
D.Kw=new B.Mp(5,"expired")})();(function staticFields(){$.aaw=function(){var x=y.N
return A.r(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f3t","ena",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"f4D","ix",()=>A.b4("SlotGamePage"))})()};
(a=>{a["Jed4T5a+kMpmbdrBRV4K2pME5G8="]=a.current})($__dart_deferred_initializers__);