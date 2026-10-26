((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,H,B={
efr(){var x,w,v=$.pF(),u=J.fh(16,y.S)
for(x=0;x<16;++x)u[x]=v.n0(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.F(u,new B.bEt(),A.U(u).k("F<1,n>")).kW(0)
return C.b.ai(w,0,8)+"-"+C.b.ai(w,8,12)+"-"+C.b.ai(w,12,16)+"-"+C.b.ai(w,16,20)+"-"+C.b.bv(w,20)},
bEt:function bEt(){},
dWz(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.tk
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.tl
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.tm
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.tn
if(C.b.t(x,"ACCESS_EXPIRED"))return D.to
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.xy
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.h9
return null},
e8R(d,e,f){var x=e==null?null:C.b.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pW:function pW(d,e){this.a=d
this.b=e},
DC:function DC(d,e){this.a=d
this.b=e},
aHw:function aHw(d,e){this.a=d
this.b=e},
bEc:function bEc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
efj(d,e,f,g){return B.Jg(d,e,f,new B.bEb(null),g)},
efi(d,e){return B.aHv(d,new B.bEa(null),e)},
bEb:function bEb(d){this.a=d},
bEa:function bEa(d){this.a=d},
Wz:function Wz(d){this.a=d},
NU:function NU(d,e){this.a=d
this.b=e},
aiJ:function aiJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aua:function aua(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
dsn:function dsn(d){this.a=d},
dso:function dso(d){this.a=d},
dsf:function dsf(d,e){this.a=d
this.b=e},
ds5:function ds5(d){this.a=d},
dsm:function dsm(d,e){this.a=d
this.b=e},
dsg:function dsg(d){this.a=d},
dsh:function dsh(d,e){this.a=d
this.b=e},
dsi:function dsi(d){this.a=d},
dsc:function dsc(d){this.a=d},
dsd:function dsd(d){this.a=d},
dse:function dse(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ds0:function ds0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
drZ:function drZ(d){this.a=d},
ds_:function ds_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
drY:function drY(d){this.a=d},
drW:function drW(d,e){this.a=d
this.b=e},
drX:function drX(d,e){this.a=d
this.b=e},
drT:function drT(d){this.a=d},
drS:function drS(d){this.a=d},
dsb:function dsb(d){this.a=d},
ds7:function ds7(d,e){this.a=d
this.b=e},
ds8:function ds8(d,e){this.a=d
this.b=e},
ds9:function ds9(d,e){this.a=d
this.b=e},
dsa:function dsa(d,e){this.a=d
this.b=e},
ds6:function ds6(d){this.a=d},
ds4:function ds4(d){this.a=d},
ds3:function ds3(d,e){this.a=d
this.b=e},
ds2:function ds2(d){this.a=d},
ds1:function ds1(d,e,f){this.a=d
this.b=e
this.c=f},
dsj:function dsj(d){this.a=d},
dsk:function dsk(d){this.a=d},
dsl:function dsl(d){this.a=d},
drU:function drU(d){this.a=d},
drV:function drV(d){this.a=d},
bg5:function bg5(){},
f5Z(d,e,f){var x=b.G,w=A.dQ(new B.dX4(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dX3(w)},
f6_(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dQ(new B.dX7(u,new B.dX5(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dX6(w,x)},
e7W(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.iD(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
esR(d,e){B.dS2(A.bK(d),b.G.window.location.origin,e)},
dS2(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iD(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.b.aR(u,e))v=!A.oK(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dX4:function dX4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dX3:function dX3(d){this.a=d},
dX5:function dX5(d,e){this.a=d
this.b=e},
dX7:function dX7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dX8:function dX8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dX6:function dX6(d,e){this.a=d
this.b=e},
aj8:function aj8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbV:function bbV(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dtK:function dtK(d){this.a=d},
dtL:function dtL(d){this.a=d},
ekB(d,e){return new B.Fo(d,e,null)},
Fo:function Fo(d,e,f){this.c=d
this.d=e
this.a=f},
auq:function auq(d,e,f,g){var _=this
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
duJ:function duJ(d){this.a=d},
duK:function duK(d){this.a=d},
duL:function duL(d){this.a=d},
duM:function duM(d){this.a=d},
duI:function duI(d){this.a=d},
duu:function duu(d){this.a=d},
du3:function du3(d,e){this.a=d
this.b=e},
du4:function du4(d){this.a=d},
dtO:function dtO(d,e){this.a=d
this.b=e},
du5:function du5(){},
du2:function du2(d,e){this.a=d
this.b=e},
dua:function dua(d,e){this.a=d
this.b=e},
dub:function dub(d,e){this.a=d
this.b=e},
duc:function duc(d,e){this.a=d
this.b=e},
dud:function dud(d){this.a=d},
dtQ:function dtQ(d,e){this.a=d
this.b=e},
dtR:function dtR(d){this.a=d},
dtS:function dtS(d){this.a=d},
dtT:function dtT(d){this.a=d},
dtU:function dtU(d){this.a=d},
dtV:function dtV(d,e){this.a=d
this.b=e},
dtW:function dtW(d,e){this.a=d
this.b=e},
dtX:function dtX(d,e){this.a=d
this.b=e},
dtY:function dtY(d,e){this.a=d
this.b=e},
dtZ:function dtZ(d,e){this.a=d
this.b=e},
du_:function du_(d){this.a=d},
dul:function dul(d){this.a=d},
dum:function dum(d){this.a=d},
dun:function dun(d){this.a=d},
duo:function duo(d){this.a=d},
dup:function dup(d){this.a=d},
duq:function duq(d){this.a=d},
dur:function dur(d,e){this.a=d
this.b=e},
dus:function dus(d,e){this.a=d
this.b=e},
dut:function dut(d){this.a=d},
dux:function dux(d){this.a=d},
duy:function duy(d){this.a=d},
duz:function duz(d){this.a=d},
duA:function duA(d){this.a=d},
duB:function duB(d){this.a=d},
duC:function duC(d,e,f){this.a=d
this.b=e
this.c=f},
duD:function duD(d){this.a=d},
duE:function duE(d,e){this.a=d
this.b=e},
duF:function duF(d){this.a=d},
due:function due(d){this.a=d},
duf:function duf(d){this.a=d},
dug:function dug(d){this.a=d},
duh:function duh(d){this.a=d},
dui:function dui(d){this.a=d},
duj:function duj(d){this.a=d},
duk:function duk(d){this.a=d},
du6:function du6(d){this.a=d},
du7:function du7(){},
du0:function du0(){},
du8:function du8(d){this.a=d},
du9:function du9(){},
du1:function du1(){},
duG:function duG(d,e){this.a=d
this.b=e},
duH:function duH(d){this.a=d},
dtM:function dtM(d,e){this.a=d
this.b=e},
dtN:function dtN(d){this.a=d},
dtP:function dtP(d,e,f){this.a=d
this.b=e
this.c=f},
duv:function duv(d){this.a=d},
duw:function duw(d,e){this.a=d
this.b=e},
aHx:function aHx(d,e,f,g,h,i,j,k,l,m){var _=this
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
bEd:function bEd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
am8:function am8(d,e,f){this.c=d
this.d=e
this.a=f},
aHB:function aHB(d){this.a=d},
Jg(d,e,f,g,h){return B.eGh(d,e,f,g,h)},
eGh(d,e,f,g,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$Jg=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=$.ad_.i(0,a0)
if(i!=null&&i.length!==0){v=i
x=1
break}u=4
x=7
return A.c(g.$0(),$async$Jg)
case 7:s=a2
r=s.a.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.ad_.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(s.a.L(0,a0),$async$Jg)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.ad_.h(0,a0,q)
x=15
return A.c(s.a.he("String",a0,q),$async$Jg)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(s.a.L(0,e),$async$Jg)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(s.a.L(0,e),$async$Jg)
case 21:case 20:case 12:o=d.$0()
$.ad_.h(0,a0,o)
x=22
return A.c(s.a.he("String",a0,o),$async$Jg)
case 22:n=a2
if(!n){k=A.aA("Game access attempt id was not persisted.")
throw A.o(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.u(h)
l=A.aO(h)
f.$2(m,l)
v=$.ad_.cL(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Jg,w)},
aHv(d,e,f){return B.eGg(d,e,f)},
eGg(d,e,f){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l
var $async$aHv=A.h(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:m=f.eO(0)
for(p=J.aY(m);p.G();)$.ad_.L(0,p.gP())
v=3
x=6
return A.c(e.$0(),$async$aHv)
case 6:t=h
p=J.aY(m)
case 7:if(!p.G()){x=8
break}s=p.gP()
o=s
t.a.a.L(0,o)
x=9
return A.c($.Y5().L(0,"flutter."+o),$async$aHv)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
l=u.pop()
r=A.u(l)
q=A.aO(l)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$aHv,w)},
eO9(d){var x
if(d==null||d.length===0)return null
x=A.ekz().i(0,d)
return(x==null?null:x.e===C.iS)===!1?x:null}},D,E,F,G,M,N,O,P,Q,R,S,I
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
B.pW.prototype={
W(){return"GameAccessIssue."+this.b}}
B.DC.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.aHw.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bEc.prototype={
gqR(){var x=this
if(x.b||x.c||!x.a)return D.Rd
if(x.f)return D.aQ0
switch(x.r){case D.jm:return D.aPX
case D.tk:return D.aPY
case D.tl:case D.tm:return D.aPZ
case D.tn:case D.h9:return D.Rd
case D.to:case D.xy:case D.F3:case D.Rc:case D.jn:case D.xx:return D.tp
case D.is:return D.tp
case null:case void 0:if(x.e)return D.tp
return x.d?D.aQ_:D.tp}}}
B.Wz.prototype={
L(d,e){return this.a.L(0,e)}}
B.NU.prototype={
W(){return"_GameProblem."+this.b}}
B.aiJ.prototype={
O(){return new B.aua()},
e2P(){return this.f.$0()},
e6r(){return this.r.$0()}}
B.aua.prototype={
gbMt(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dWz(v)}else v=w
return v},
gcc4(){var x,w=this.ch
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
return x.c!=null&&!x.at&&x.ax&&x.a.e.gM()&&x.a.e2P()},
X(){var x,w,v=this
v.a6()
x=$.ah.RG$
v.ax=x==null||x===C.cz
w=A.ii(v.a.d.a.a,new B.dsn(v))
v.d!==$&&A.aK()
v.d=new E.age(new A.DD(w))
v.a.e.a4(v.gcmx())
$.ah.bp$.push(v)
$.ah.y2$.push(new B.dso(v))},
tN(){var x=this.z
if(x!=null)x.a7()
this.y=this.z=null},
bQq(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gf7())$.ah.y2$.push(new B.dsf(v,w))},
cmy(){var x=this
if(x.c==null||x.at||x.a.e.gM())return;++x.ay
x.bQq()
x.n(new B.ds5(x))},
oo(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cz)x.bQq()
x.n(new B.dsm(x,d))
if(x.ax&&x.ghL())x.tY(x.gbwP())},
q(){var x=this;++x.ay
x.bQq()
x.tN()
x.a.e.T(x.gcmx())
$.ah.iV(x)
x.a5()},
ccK(d){var x
this.CW=d instanceof A.hs?B.dWz(d.b):null
if(d instanceof E.pY)x=D.ahp
else if(d instanceof E.vh)x=D.ahn
else if(d instanceof E.ad1)x=D.aho
else x=d instanceof E.DB||d instanceof E.a_U?D.Lj:D.ahm
this.ch=x},
tY(d){return this.dBh(d)},
dBh(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tY=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghL()){x=1
break}q=++r.ay
r.n(new B.dsg(r))
u=4
x=7
return A.c(d.$1(q),$async$tY)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghL()&&J.p(q,r.ay))r.n(new B.dsh(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.dsi(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tY,w)},
dDM(){return this.tY(this.gbwP())},
vR(d){return this.dxG(d)},
dxG(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
if(!t.ghL()||d!==t.ay)A.V(C.ak)
x=8
break
case 5:x=1
break
case 8:if(!t.ghL()||d!==t.ay)A.V(C.ak)
p=k.b
n=t.d
m=t.a
x=p==null?10:12
break
case 10:n===$&&A.e()
p=m.c
n=n.a.a
l=n.c
if(!(l instanceof A.fG))A.V(C.x)
x=13
return A.c(E.bED(n,l.b,new B.dsc(t),p),$async$vR)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fG))A.V(C.x)
j=E.efs(n,l.b,p,new B.dsd(t),null,m)
case 11:k.a=j
if(!t.ghL()||d!==t.ay)A.V(C.ak)
if(j==null)throw A.o(new E.DB())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e9z(),$async$vR)
case 14:s=f
if(!t.ghL()||d!==t.ay)A.V(C.ak)
x=15
return A.c(p.cz9(),$async$vR)
case 15:r=f
if(!t.ghL()||d!==t.ay)A.V(C.ak)
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
if(!t.ghL()||d!==t.ay)A.V(C.ak)
if(s==null&&r==null)throw h
k.c=q
x=19
break
case 16:x=1
break
case 19:if(!t.ghL()||d!==t.ay)A.V(C.ak)
t.n(new B.dse(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vR,w)},
avm(d,e,f){return this.d2S(d,e,f)},
d2S(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$avm=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghL()||d!==r.ay)A.V(C.ak)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cC()
n=r.c
n.toString
m=y.y
p.seW(A.D8(null,null,C.bi,!0,null,new B.ds0(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aK(p.an(),m),$async$avm)
case 6:o=h
if(!r.ghL()||d!==r.ay)A.V(C.ak)
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
return A.k($async$avm,w)},
d_E(){return this.tY(new B.drY(this))},
cT_(){return this.tY(new B.drT(this))},
dwj(){return this.tY(new B.dsb(this))},
dDK(){return this.tY(new B.ds4(this))},
dDH(){return this.tY(new B.ds2(this))},
a0D(d){return this.dq9(d)},
dq9(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a0D=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghL()||u.as){x=1
break}++u.ay
u.n(u.gca_())
t=u.c
t.toString
x=3
return A.c(A.aJ(t,!1).f.aK(d,y.X),$async$a0D)
case 3:x=u.ghL()?4:5
break
case 4:x=6
return A.c(u.tY(u.gbwP()),$async$a0D)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a0D,w)},
dDI(d){var x
switch(this.gbMt()){case D.tk:return d.gXf()
case D.tl:return d.gX5()
case D.tm:return d.gXd()
case D.tn:return d.gX8()
case D.to:return d.gX4()
case D.xy:return d.gXa()
case D.h9:return d.gKA()
default:break}x=null
switch(this.gcc4()){case D.ahp:x=d.gadq()
break
case D.ahn:x=d.gV5()
break
case D.aho:x=d.gV4()
break
case D.Lk:x=d.gadl()
break
case D.Lj:x=d.gKA()
break
case D.ahm:x=d.gX2()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.c,y.J)
g.toString
x=i.f
w=x==null?h:x.gcuN()
if(w==null)w=g.gamV()
if(i.at||!i.a.e.gM()){x=A.kU(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gXg(),h,h,h,h,h,h,C.az,h,h)
u=i.a.r
return A.bN(x,h,new A.dD(!0,!0,!0,!0,C.I,!1,A.aM(new A.J(C.aU,A.w(A.a([v,L.dy,A.c4(A.d(g.giP(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.H,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbMt()
o=i.dDI(g)
v=y.p
u=A.a([A.d(g.gKy(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(!x)C.d.v(u,A.a([i.bR9(g.gXe(),t.b+" USDT"),i.bR9(g.gX9(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(O.eJ,A.d(o,D.c2K,h,h,h,h,A.a_(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bsr)
n=s==null
if(!n){m=A.d(g.gadn(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bR9(g.gu7(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gaxg():g.gX6()
else k=s.c?g.gX7():g.gV5()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.Q],v)
if(!j||s.c)k.push(i.Eo("gameV2AcknowledgePurchase",g.gadh(),i.gcSZ()))
else k.push(i.Eo("gameV2RetryPurchase",g.gadp(),i.gc93()))
u.push(A.dg(new A.J(C.C,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.Eo("gameV2Purchase",g.gXb(),i.gc93()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jQ.t(0,m.a))===!0?g.gadk():g.gV4(),h,h,h,h,h,h,h,h,h),C.Q],v)
if(i.y!=null&&q)k.push(i.Eo("gameV2Open",g.gxi(),i.gdDJ()))
j=!1
if(n)if(q)if((l?h:F.jQ.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jQ.t(0,m.a))===!0?g.gV6():g.gV7()
k.push(i.Eo("gameV2Reissue",j,i.gcjd()))}if((l?h:F.jQ.t(0,m.a))!==!0)k.push(i.bL4("gameV2End",g.gadj(),i.gdDG(),!0))
u.push(A.dg(new A.J(C.C,A.w(k,C.a8,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.Eo("gameV2Prepare",g.gV6(),i.gcjd()))
if(p===D.tk)u.push(i.Eo("gameV2BindTelegram",g.gRm(),new B.dsj(i)))
if(p===D.tl||p===D.tm)u.push(i.Eo("gameV2TopUp",g.gXc(),new B.dsk(i)))
u.push(i.bL4("gameV2CheckOriginal",g.gadi(),i.gdDL(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bN(A.kU(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,A.e2J(h,new B.dsl(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dD(!0,!1,!0,!0,C.I,!1,A.eN(A.a([A.aM(new A.ba(C.w8,A.w(u,C.a8,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.c2L,P.Q2,h,h,C.y,!1),h),h,h,h,h,h)},
bR9(d,e){var x=null
return new A.J(Q.DZ,A.bi(C.k4,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ac,x,4,16),x)},
bL4(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.drU(f)
x=A.fo(A.d(e,w,w,w,w,w,w,C.az,w,w),new A.H(d,v),x,w)
v=x}else{x=this.as?w:new B.drV(f)
x=A.c4(A.d(e,w,w,w,w,w,w,C.az,w,w),new A.H(d,v),x,w)
v=x}return new A.J(R.DW,v,w)},
Eo(d,e,f){return this.bL4(d,e,f,!1)}}
B.bg5.prototype={}
B.aj8.prototype={
O(){return new B.bbV()}}
B.bbV.prototype={
X(){var x,w,v,u=this
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
v=A.dQ(new B.dtK(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.azr()
$.Cb().aa3(x,new B.dtL(u),!0)},
aP(d){var x,w
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
return new A.Rm(x,null,null,C.zZ,null)}}
B.Fo.prototype={
O(){var x=$.am()
return new B.auq(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.pF().n0(1073741824),x.$1$0(y.x))}}
B.auq.prototype={
ghc(){if(this.c!=null){var x=this.z
x=x==null?null:x.gM()
x=x!==!1}else x=!1
return x},
gEN(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gM()
if(x!==!1)if(w.ghc()){v=w.x
v===$&&A.e()
v=v.gM()}}return v},
ghz(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.nW
if(w!=null)w.ct()
x=u.at
if(x!=null&&u.w.m_(x))return!0}catch(v){if(!(A.u(v) instanceof A.JT))throw v}u.ax=!0
u.CW=null
return!1},
gbwB(){var x,w=this.ay
if(w===$){x=$.am().$1$0(y.T)
this.ay!==$&&A.bg()
w=this.ay=new E.age(x)}return w},
X(){var x,w,v,u,t,s=this
s.a6()
x=$.am()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.iF(x.$1$0(y.E),s.w)
x.a4(s.gclh())
s.y=x}if(v)s.at=s.w.aIK()
x=u?w.e_M(new B.duJ(s)):w
s.x!==$&&A.aK()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.a_g()
return}t=s.d=B.eO9(v.c)
if(t==null){s.k2=!1
s.ok=D.h9
return}if(!t.gbYp()){s.k2=!1
s.ok=D.h9
return}if(t.e!==C.iS){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.f5Z(s.gbRs(),v,new B.duK(s))
x=x.f!=null?s.as:null
s.p2=B.f6_(s.gdiQ(),x,new B.duL(s))
$.ah.y2$.push(new B.duM(s))
s.cy=s.atD()
return}},
b0(){var x,w,v=this
v.by()
x=v.c
x.toString
v.z=A.ce(x,null,y.X)
x=v.y
if((x==null?null:x.gM())===!1)$.ah.y2$.push(new B.duI(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iS){v.k1=!0
v.f=v.c8Z()}},
cli(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gM())!==!1}if(w)return
B.esR(A.X(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.duu(x))},
Zw(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Zw=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.arw(),$async$Zw)
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
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
x=14
return A.c(s.w.iy(),$async$Zw)
case 14:r=e
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
if(s.c!=null&&r!=null)try{if(!(s.ghc()&&s.ghz()))A.V(C.ak)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.iR().m(C.aJ,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.ghc()&&s.ghz())){x=1
break}$.iR().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
x=19
return A.c(s.r.ik(!0),$async$Zw)
case 19:o=e
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.du3(s,n))
try{j=J.a8s(n,4)
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.iR().m(C.aJ,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.ghc()&&s.ghz())s.n(new B.du4(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zw,w)},
vz(){return this.cXw()},
cXw(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$vz=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.arw(),$async$vz)
case 5:h=b0
x=6
return A.c(s.ZK(),$async$vz)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cJO(),$async$vz)
case 11:r=b0
u=2
x=10
break
case 8:u=7
a4=t.pop()
r=A.X(["status","unavailable"],y.N,y.z)
x=10
break
case 7:x=2
break
case 10:if(!s.gEN())throw A.o(C.ak)
a2=A.lK(h.i(0,"balance"))
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
case 4:if(!(s.ghc()&&s.ghz()))A.V(C.ak)
a3=s.w
d=s.at
d.toString
q=a3.Gt(d)
e=s.CW
a2.a=e==null?0:e
p=""
x=q==null?12:13
break
case 12:u=15
x=18
return A.c(a3.iy(),$async$vz)
case 18:q=b0
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
$.iR().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.iR().m(C.aJ,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.Dt(),$async$vz)
case 26:m=b0
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dtO(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.iR().m(C.aJ,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
$.iR().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=25
break
case 22:x=2
break
case 25:x=20
break
case 21:u=28
x=31
return A.c(s.r.Dt(),$async$vz)
case 31:j=b0
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
$.iR().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.ZK(),$async$vz)
case 32:g=b0
if(!(s.ghc()&&s.ghz()))A.V(C.ak)
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
ZK(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$ZK=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.atD()
v=t.qW(C.PI,new B.du5())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$ZK,w)},
arw(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$arw=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gEN())throw A.o(C.ak)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jz(),$async$arw)
case 3:s=e
if(!u.gEN())throw A.o(C.ak)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.du2(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$arw,w)},
atD(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$atD=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bqa(k.a),$async$atD)
case 7:q=e
if(J.p(J.av(q,"success"),!0)&&y.f.b(J.av(q,"data"))){p=A.p6(y.f.a(J.av(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.G.aw(p,null)
if(!(r.ghc()&&r.ghz()))A.V(C.ak)
b.G.window.localStorage.setItem("_flutter_game_rtp",m)}catch(i){o=A.u(i)
$.iR().m(C.aJ,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
j=t.pop()
n=A.u(j)
$.iR().m(C.t,"_getSlotRtpData failed",n,null)
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
return A.k($async$atD,w)},
a_g(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a_g=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbwB().pZ(l),$async$a_g)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dua(s,r))
x=1
break}s.n(new B.dub(s,r))
x=8
return A.c(s.tM(),$async$a_g)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.hs){q=m
$.iR().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.duc(s,q))}else{p=m
o=A.aO(k)
m=$.iR()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dud(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a_g,w)},
tM(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tM=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iS){if(s.c==null){x=1
break}s.n(new B.dtQ(s,f))
x=1
break}if(!f.gbYp()){if(s.c==null){x=1
break}s.n(new B.dtR(s))
x=1
break}if(s.c!=null)s.n(new B.dtS(s))
u=4
x=7
return A.c(s.w.iy(),$async$tM)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dtT(s))
x=1
break}if(s.c==null){x=1
break}q=s.brV(r)
if(q==null){s.n(new B.dtU(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbwB().a
if(k.a.c instanceof A.fG)A.V(C.x)
x=8
return A.c(k.IT(d),$async$tM)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dtV(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cgm(p.r)
if(p.b!==!0||o!=null){s.n(new B.dtW(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dtX(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.is)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dGL(!0),$async$tM)
case 13:case 12:x=1
break
case 10:s.n(new B.dtY(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.hs){m=k
$.iR().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dtZ(s,m))}else{l=k
$.iR().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.du_(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tM,w)},
bQl(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.a_g()
return w.tM()},
vO(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vO=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iS){if(s.c==null){x=1
break}if(h)s.n(new B.dul(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dum(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tM(),$async$vO)
case 5:x=1
break
case 4:s.n(new B.dun(s))
u=7
x=10
return A.c(s.w.iy(),$async$vO)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.duo(s))
x=1
break}if(s.c==null){x=1
break}o=s.brV(p)
if(o==null){s.n(new B.dup(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bQA(o)
x=13
return A.c(s.tM(),$async$vO)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bOV(),$async$vO)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbwB().a
if(h.a.c instanceof A.fG)A.V(C.x)
x=15
return A.c(h.SK(q,new E.aHA(n)),$async$vO)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Rh?16:17
break
case 16:x=18
return A.c(s.ard(),$async$vO)
case 18:if(s.c==null){x=1
break}s.n(new B.duq(s))
x=19
return A.c(s.tM(),$async$vO)
case 19:x=1
break
case 17:s.n(new B.dur(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.hs?20:22
break
case 20:l=h
$.iR().m(C.t,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bv7(l,D.xx)
f=l.b.toUpperCase()
x=k===D.to||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.ard(),$async$vO)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dus(s,k))
x=21
break
case 22:j=h
$.iR().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dut(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vO,w)},
pi(d,e){return this.dGM(d,!0)},
dGL(d){return this.pi(!0,d)},
dGM(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
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
if(b2){s.n(new B.dux(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.duy(s))
u=4
x=7
return A.c(s.w.iy(),$async$pi)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.brV(p)
if(o==null){s.n(new B.duz(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bQA(o)
x=10
return A.c(s.tM(),$async$pi)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.Ax(!0),$async$pi)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.duA(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bOW(),$async$pi)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.KJ(b6.a,new B.aHB(n)),$async$pi)
case 15:m=c2
l=new A.aG(Date.now(),0,!1).a3()
k=m==null?null:E.esF(m.w)
j=m==null?null:E.dXD(m.f)
i=m==null?null:E.dXD(m.r)
h=m==null?null:E.dXD(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Rj
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a3().du(l.a3()).a)<=3e8
b2=i
a2=(b2==null?null:b2.ic(l))===!0
b2=h
a3=(b2==null?null:b2.ic(l))===!0
a4=h!=null&&i!=null&&!h.ic(i)
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
$.iR().m(C.t,"game session response rejected: "+J.bi6(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.LI(b6.a,!0,m.a),$async$pi)
case 20:case 19:x=21
return A.c(s.YQ(),$async$pi)
case 21:if(s.c==null){x=1
break}s.n(new B.duB(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.Ax(!0),$async$pi)
case 24:x=1
break
case 23:x=b6.e===C.iS?25:26
break
case 25:s.n(new B.duC(s,k,h))
x=27
return A.c(s.AM(),$async$pi)
case 27:x=1
break
case 26:s.n(new B.duD(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.hs?28:30
break
case 28:a9=a7
$.iR().m(C.t,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.YQ(),$async$pi)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.pi(!1,!0),$async$pi)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.duE(s,a9))
x=29
break
case 30:b0=a7
$.iR().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.duF(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$pi,w)},
AM(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$AM=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.due(s))
x=!k.ic(new A.aG(Date.now(),0,!1).a3())?3:4
break
case 3:x=5
return A.c(s.Ax(!0),$async$AM)
case 5:if(s.c==null){x=1
break}s.n(new B.duf(s))
x=1
break
case 4:j=s.fx
q=null
u=7
x=10
return A.c(s.w.iy(),$async$AM)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aO(f)
h=$.iR()
h.m(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dug(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.brV(q)
if(g==null){s.n(new B.duh(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bQA(g)
x=13
return A.c(s.tM(),$async$AM)
case 13:x=1
break
case 12:u=15
s.n(new B.dui(s))
x=18
return A.c(A.uE(r,C.lK,"_self"),$async$AM)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.duj(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aO(e)
h=$.iR()
h.m(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.Ax(!0),$async$AM)
case 19:if(s.c==null){x=1
break}s.n(new B.duk(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$AM,w)},
Ax(d){return this.d84(!0)},
d84(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$Ax=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.LI(p.a,!0,n)
r.k4=q
u=3
x=6
return A.c(q,$async$Ax)
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
return A.k($async$Ax,w)},
LI(d,e,f){return this.d8b(d,!0,f)},
d8b(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$LI=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.PI(d,f),$async$LI)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.iR().m(C.aJ,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.f2(C.DL,null,l),$async$LI)
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
return A.c(s.YQ(),$async$LI)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LI,w)},
bOV(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bOV=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcjG()
v=B.efj(new B.du6(u),u.gcgx(),new B.du7(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOV,w)},
ard(){var x=0,w=A.l(y.H),v=this
var $async$ard=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.efi(new B.du0(),A.dK([v.gcjG(),v.gcgx()],y.N)),$async$ard)
case 2:return A.j(null,w)}})
return A.k($async$ard,w)},
bOW(){var x=0,w=A.l(y.N),v,u=this
var $async$bOW=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.efj(new B.du8(u),null,new B.du9(),u.gcmv())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bOW,w)},
YQ(){var x=0,w=A.l(y.H),v=this
var $async$YQ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.efi(new B.du1(),A.dK([v.gcmv()],y.N)),$async$YQ)
case 2:return A.j(null,w)}})
return A.k($async$YQ,w)},
brV(d){var x=A.bIM(d),w=x==null?null:C.b.F(x)
return w==null||w.length===0?null:w},
bQA(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcjG(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e8R(D.Rb,this.fx,"product-"+x)},
gcgx(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e8R(D.Rb,this.fx,x)},
gcmv(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e8R(D.aPW,this.fx,x)},
chF(d){var x,w=Date.now(),v=C.h.j_($.pF().n0(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cgm(d){var x=B.dWz(d)
if(x!=null)return x
return d==null||C.b.F(d).length===0?null:D.jn},
bv7(d,e){var x,w=d.a
if(w===401)return D.jm
x=B.dWz(d.b)
if(x!=null)return x
if(w===404)return D.h9
return e},
dpv(d,e){switch(e){case D.jm:return d.gamT()
case D.tk:return d.gXf()
case D.tl:return d.gX5()
case D.tm:return d.gXd()
case D.tn:return d.gX8()
case D.to:return d.gX4()
case D.xy:return d.gXa()
case D.h9:return d.gKA()
case D.F3:return d.gX6()
case D.Rc:return d.gamW()
case D.jn:return d.gX2()
case D.xx:return d.gX7()
case D.is:return d.gamX()
case null:case void 0:return null}},
buE(d){return this.diR(d)},
diR(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$buE=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gEN()
else t=u.ghc()&&u.ghz()
if(!t){v=null
x=1
break}x=3
return A.c(u.AH(d),$async$buE)
case 3:s=f
if(r.f!=null)r=u.gEN()
else r=u.ghc()&&u.ghz()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$buE,w)},
AH(d){return this.de4(d)},
de4(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$AH=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.avM()
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
return A.c(k.axd(A.bb(c0.i(0,"operationId"))),$async$AH)
case 23:p=A.X(["type","SPIN_ACK_RESULT"],y.N,y.z)
v=p
x=1
break
case 22:x=24
return A.c(k.KB(b4==="SPIN_RETRY_REQUEST"?A.bb(c0.i(0,"operationId")):null),$async$AH)
case 24:q=c2
p=A.q(y.N,y.z)
J.dB(p,"type","SPIN_RECOVERY_RESULT")
J.fr(p,q)
v=p
x=1
break
u=2
x=20
break
case 18:u=17
b5=t.pop()
v=A.X(["type",b4==="SPIN_ACK_REQUEST"?"SPIN_ACK_ERROR":"SPIN_RECOVERY_ERROR","message","\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u7a0d\u5f8c\u91cd\u65b0\u67e5\u8a62\u3002"],y.N,y.z)
x=1
break
x=20
break
case 17:x=2
break
case 20:x=4
break
case 9:p=s.c
if(p!=null)A.aJ(p,!1).f.aK(G.p2,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aJ(p,!1).f.aK(M.Bp,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aJ(p,!1).f.aK(N.qQ,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a8c(c0.i(0,"betIndex"),4)
else{b3=A.lK(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.dk(b3)}o=a5
a6=A.lK(c0.i(0,"betAmount"))
n=a6==null?null:a6
if(o==null||n==null){p=A.X(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=p
x=1
break}b3=r.a
a7=A.b6(c0.i(0,"mode"))
if(a7==null)a7="REAL"
a8=A.b6(c0.i(0,"clientSeed"))
if(c0.i(0,"nonce")==null)a9=null
else a9=p.f!=null?""+A.a8c(c0.i(0,"nonce"),9007199254740991):J.as(c0.i(0,"nonce"))
x=29
return A.c(p.DX(n,o,A.b6(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$AH)
case 29:m=c2
l=J.av(m,"data")
if(J.p(J.av(m,"success"),!0)&&y.P.b(l)){k=A.q(y.N,y.z)
J.dB(k,"type","SPIN_RESULT")
J.fr(k,l)
v=k
x=1
break}p=J.av(m,"message")
p=A.X(["type","SPIN_ERROR","message",J.as(p==null?"spin failed":p)],y.N,y.z)
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
v=A.X(["type","SPIN_ERROR","message",p.f!=null?"\u65cb\u8f49\u7d50\u679c\u5c1a\u672a\u78ba\u8a8d\uff0c\u8acb\u5148\u67e5\u8a62\u4e0a\u4e00\u5c40\u3002":J.as(j)],y.N,y.z)
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
return A.c(p.jz(),$async$AH)
case 34:i=c2
if(J.p(J.av(i,"success"),!0)){p=y.h
h=p.a(J.av(i,"data"))
i=h
p=p.a(i==null?null:J.av(i,"userInfo"))
b0=p==null?h:p
g=b0==null?A.q(y.N,y.z):b0
p=A.lK(J.av(g,"balance"))
if(p==null)p=null
p=A.X(["type","BALANCE_RESULT","balance",p==null?0:p],y.N,y.z)
v=p
x=1
break}p=J.av(i,"message")
p=A.X(["type","BALANCE_ERROR","message",J.as(p==null?"getCurrentUser failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=33
break
case 31:u=30
b7=t.pop()
f=A.u(b7)
p=A.X(["type","BALANCE_ERROR","message",J.as(f)],y.N,y.z)
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
return A.c(s.ZK(),$async$AH)
case 39:e=c2
if(e!=null){p=A.X(["type","RTP_RESULT","data",e],y.N,y.z)
v=p
x=1
break}p=A.X(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=p
x=1
break
u=2
x=38
break
case 36:u=35
b8=t.pop()
d=A.u(b8)
p=A.X(["type","RTP_ERROR","message",J.as(d)],y.N,y.z)
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
p=A.lK(c0.i(0,"page"))
b1=p==null?null:C.k.dk(p)
a0=b1==null?1:b1
p=A.lK(c0.i(0,"size"))
b2=p==null?null:C.k.dk(p)
a1=b2==null?10:b2
p=s.x
p===$&&A.e()
x=44
return A.c(p.adK(a0,a1),$async$AH)
case 44:a2=c2
if(J.p(J.av(a2,"success"),!0)){p=A.X(["type","TRANSACTION_RESULT","data",J.av(a2,"data")],y.N,y.z)
v=p
x=1
break}p=J.av(a2,"message")
p=A.X(["type","TRANSACTION_ERROR","message",J.as(p==null?"getTransactions failed":p)],y.N,y.z)
v=p
x=1
break
u=2
x=43
break
case 41:u=40
b9=t.pop()
a3=A.u(b9)
p=A.X(["type","TRANSACTION_ERROR","message",J.as(a3)],y.N,y.z)
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
return A.k($async$AH,w)},
q(){var x=this,w=x.y
if(w!=null)w.T(x.gclh())
w=x.y
if(w!=null)w.q()
w=x.p1
if(w!=null)w.$0()
w=x.p2
if(w!=null)w.$0()
if(!x.go)x.Ax(!0)
x.a5()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
if(t.Q){x=t.d
x=x==null?s:x.b
return A.bN(A.kU(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dD(!0,!0,!0,!0,C.I,!1,A.aM(A.b4(A.w(A.a([A.d(r.gXg(),s,s,s,s,s,s,C.az,s,s),C.a7,A.c4(A.d(r.gyV(),s,s,s,s,s,s,s,s,s),D.c5h,new B.duG(t,d),s)],y.p),C.l,s,C.e,C.H,0,C.j),C.q,s,C.w,s,s,C.aU,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbwB()
v=t.y
v.toString
return new B.aiJ(x,r,v,new B.duH(t),t.gdqd(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.v(v,A.a([w,A.eB(0,A.il(C.bF,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbRs(),s,s,s,s,s,s,!1,C.cd),108,s,0,s,s,75)],x))
else v.push(t.cVO(d))
if(u)v.push(new A.dD(!0,!0,!0,!0,C.I,!1,new A.c9(C.hC,s,s,A.aR(s,s,s,s,D.aUq,s,s,t.gbRs(),s,s,s,s,r.giP(),s),s),s))
return A.bN(s,D.ayD,new A.cU(C.aR,s,C.aQ,C.q,v,s),s,s,s,s,s)},
cVO(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.fy?a0.gKz():a0.gX3()
if(e.fy){a0=a0.gKz()
r=A.t(a1).ok.y
a0=new A.J(C.aU,A.d(a0,d,d,d,d,d,r==null?d:r.a0(C.M.B(0.78)),C.az,d,d),d)}else a0=D.bIU
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbYp())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.bEc(r,p,l,k===!0,u===!0,!j,i)
g=e.dpv(a0,i)
if(e.fy)f=a0.gKz()
else f=j?d:a0.gamP()
u=x==null?d:x.b
a0=u==null?a0.gamU():u
u=g==null
r=u?f:g
return new B.aHx(a0,h,q,m,r,!u,!t,new B.dtM(e,h),new B.dtN(e),d)},
dhH(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aJ(x,!1).f.aK(C.cS,y.X)
return
case 2:w.au6()
return
case 3:x=w.c
x.toString
A.aJ(x,!1).f.aK(G.p2,y.X)
return
case 4:w.vO()
return
case 5:w.AM()
return
case 6:w.bQl()
return
case 0:return}},
au6(){var x=0,w=A.l(y.H),v,u=this,t
var $async$au6=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aJ(t,!1).f.aK(C.oC,y.X),$async$au6)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bQl(),$async$au6)
case 4:case 1:return A.j(v,w)}})
return A.k($async$au6,w)},
avM(){var x=0,w=A.l(y.H),v,u=this
var $async$avM=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.a_C(),$async$avM)
case 3:case 1:return A.j(v,w)}})
return A.k($async$avM,w)},
a_C(){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_C=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.Ax(!0),$async$a_C)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).qK(),$async$a_C)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aJ(t,!1).f.ih("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$a_C,w)},
c8Z(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.a9
u=b.G.window.navigator.userAgent
x=$.exe()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.ah.y2$.push(new B.dtP(w,v,t))
return C.AJ}u=w.cdB(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.aj8(u,x,w.gdDv(),null)},
cdB(d,e){var x,w="/games/"+d,v=C.b.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dDw(){new B.duv(this).$0()}}
B.aHx.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dD(!0,!0,!0,!0,C.I,!1,new A.cP(new B.bEd(this,x,A.t(d),this.daa(x)),null),null)},
daa(d){switch(this.d.gqR().a){case 1:return d.gamS()
case 2:return d.gRm()
case 3:return d.gXc()
case 4:return d.gXb()
case 5:return d.gxi()
case 6:return d.gamR()
case 0:return null}}}
B.am8.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a0(C.M.B(0.58))
u=A.N(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aX(C.M,C.S)
return new A.J(S.eL,A.z(A.a([u,C.ah,new A.dW(1,C.b4,A.d(this.d,x,x,x,x,x,v,C.iT,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aHB.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aHB&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.b.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
A(){var x=A.q(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["A<~>()","~()","A<Wz>()","A<~>(y)","A<a2<n,@>?>(a2<n,@>)"])
B.bEt.prototype={
$1(d){return C.b.cm(C.h.j_(d,16),2,"0")},
$S:43}
B.bEb.prototype={
$0(){var x=0,w=A.l(y.L),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:u=B
x=3
return A.c(A.hw(),$async$$0)
case 3:v=new u.Wz(e)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:z+2}
B.bEa.prototype={
$0(){var x=0,w=A.l(y.L),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:u=B
x=3
return A.c(A.hw(),$async$$0)
case 3:v=new u.Wz(e)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:z+2}
B.dsn.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dso.prototype={
$1(d){var x=this.a
if(x.ghL())x.tY(x.gbwP())
else x.cmy()},
$S:2}
B.dsf.prototype={
$1(d){var x=this.a
if(x.gf7()&&this.b.c!=null)this.b.hk(x)},
$S:2}
B.ds5.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tN()
x.e=x.x=x.w=x.r=null},
$S:0}
B.dsm.prototype={
$0(){var x=this.a
x.ax=this.b===C.cz
x.as=!1
x.tN()},
$S:0}
B.dsg.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.dsh.prototype={
$0(){return this.a.ccK(this.b)},
$S:0}
B.dsi.prototype={
$0(){return this.a.as=!1},
$S:0}
B.dsc.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dsd.prototype={
$0(){return this.a.ghL()},
$S:1}
B.dse.prototype={
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
x=x==null?s:F.jQ.t(0,x.a)}if(x!==!0){x=r.x
w=x==null
if(w)v=s
else{v=x.b
v=v==null?s:v.b}if(v!==!0){if(w)x=s
else{x=x.b
x=x==null?s:x.f}x=x!=null}else x=u}else x=u}else x=u
else x=u
if(x)r.tN()
q=q.c
if(q!=null)r.ccK(q)},
$S:0}
B.ds0.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.c,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.bh(A.a([A.aH(A.d(s.gcs(),t,t,t,t,t,t,t,t,t),t,t,t,new B.drZ(v),t,t),A.c4(A.d(s.gjF(),t,t,t,t,t,t,t,t,t),D.c2J,new B.ds_(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.drZ.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.ds_.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gM()&&w.ax&&x.b.an().gM()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.drY.prototype={
$1(d){return this.cCB(d)},
cCB(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.a_U())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.efr()
k=h.a.c
j=g.e
l=E.efn(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.c,y.J)
x=3
return A.c(h.avm(d,m.gOw(),m.adm(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghL()||d!==h.ay)A.V(C.ak)
u=5
x=8
return A.c(g.c0a(r),$async$$1)
case 8:q=a1
if(!h.ghL()||d!==h.ay)A.V(C.ak)
h.n(new B.drW(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghL()||d!==h.ay)A.V(C.ak)
x=9
return A.c(g.e8a(),$async$$1)
case 9:n=a1
if(!h.ghL()||d!==h.ay)A.V(C.ak)
h.n(new B.drX(h,n))
A.zT(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:62}
B.drW.prototype={
$0(){var x=this.a
x.w=this.b
x.tN()},
$S:0}
B.drX.prototype={
$0(){var x=this.a
x.w=this.b
x.tN()},
$S:0}
B.drT.prototype={
$1(d){return this.cCA(d)},
cCA(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dOw(r.a),$async$$1)
case 3:if(!t.ghL()||d!==t.ay)A.V(C.ak)
if(!t.ghL()||d!==t.ay)A.V(C.ak)
t.n(new B.drS(t))
x=4
return A.c(t.vR(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.drS.prototype={
$0(){return this.a.w=null},
$S:0}
B.dsb.prototype={
$1(d){return this.cCE(d)},
cCE(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.DB())
t=l.c
t.toString
t=A.f(t,C.c,y.J)
t.toString
x=3
return A.c(k.cz9(),$async$$1)
case 3:s=f
if(!l.ghL()||d!==l.ay)A.V(C.ak)
l.n(new B.ds7(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jQ.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.avm(d,t.gV7(),t.gado()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jQ.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dOv(s.a),$async$$1)
case 9:if(!l.ghL()||d!==l.ay)A.V(C.ak)
case 8:if(p)o=s.a
else{t=B.efr()
r=l.a.c
q=k.e
t=E.e8S(t)
r=E.uD(r)
o=new E.ad0(t,E.dR1(q),r)}if(!l.ghL()||d!==l.ay)A.V(C.ak)
l.n(new B.ds8(l,o))
x=10
return A.c(k.e2X(o,p),$async$$1)
case 10:n=f
if(!l.ghL()||d!==l.ay)A.V(C.ak)
l.n(new B.ds9(l,n))
t=l.z
if(t!=null)t.a7()
m=n.b.du(new A.aG(Date.now(),0,!1).a3())
t=m.a<0?C.aZ:m
l.z=A.dt(t,new B.dsa(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.ds7.prototype={
$0(){this.a.x=this.b},
$S:0}
B.ds8.prototype={
$0(){var x=this.a
x.tN()
x.x=new E.Mn(this.b,null)},
$S:0}
B.ds9.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dsa.prototype={
$0(){var x=this.a
if(x.ghL()&&x.y===this.b)x.n(new B.ds6(x))},
$S:0}
B.ds6.prototype={
$0(){var x=this.a
x.tN()
x.ch=D.Lk},
$S:0}
B.ds4.prototype={
$1(d){return this.cCD(d)},
cCD(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.DB())
x=3
return A.c(p.vR(d),$async$$1)
case 3:if(!p.ghL()||d!==p.ay)A.V(C.ak)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.ic(new A.aG(Date.now(),0,!1).a3())||!n.b.ic(new A.aG(Date.now(),0,!1).a3())){if(!p.ghL()||d!==p.ay)A.V(C.ak)
p.n(new B.ds3(p,t))
x=1
break}if(!p.ghL()||d!==p.ay)A.V(C.ak)
p.n(p.gca_())
p.a.toString
r=A.uE(n.a,C.lK,"_self")
x=4
return A.c(r,$async$$1)
case 4:q=f
if(!p.ghL()||d!==p.ay)A.V(C.ak)
if(!q)throw A.o(new E.vh())
x=5
return A.c(p.vR(d),$async$$1)
case 5:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.ds3.prototype={
$0(){var x=this.a
x.tN()
x.x=this.b
if(x.gbMt()==null&&x.gcc4()==null)x.ch=D.Lk},
$S:0}
B.ds2.prototype={
$1(d){return this.cCC(d)},
cCC(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dZk(q.a),$async$$1)
case 3:t=f
if(!s.ghL()||d!==s.ay)A.V(C.ak)
s.n(new B.ds1(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:62}
B.ds1.prototype={
$0(){var x=this.a
x.tN()
x.x=new E.Mn(this.b.a,this.c)},
$S:0}
B.dsj.prototype={
$0(){return this.a.a0D(C.oC)},
$S:3}
B.dsk.prototype={
$0(){return this.a.a0D(G.p2)},
$S:3}
B.dsl.prototype={
$0(){var x=this.a;++x.ay
x.tN()
x.a.e6r()},
$S:0}
B.drU.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.drV.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dX4.prototype={
$1(d){var x,w=this,v=A.iD(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.e7W(d,w.c))return
x=A.GY(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dX3.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dX5.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dX7.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.iD(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.e7W(d,r.c))return
w=A.GY(d.data)
if(!y.f.b(w))return
v=A.q(y.N,y.z)
for(u=w.gei(),u=u.gaq(u);u.G();){t=u.gP()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ao("type"))return
new B.dX8(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dX8.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fP(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.e7W(s.d,s.e)){q=m.i(0,"requestId")
p=A.hh(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dB(p,"requestId",q)
o=A.bK(p)
p=s.e
if(p!=null){B.dS2(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.iD(n,"Object")
k=s.f
if(p){A.tO(n,"postMessage",o,k,y.X)
B.dS2(o,k,null)}else{B.dS2(o,k,null)
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
B.dX6.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dtK.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dtL.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:624}
B.duJ.prototype={
$0(){return this.a.ghc()},
$S:1}
B.duK.prototype={
$0(){return this.a.ghc()},
$S:1}
B.duL.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gEN()
else x=x.ghc()&&x.ghz()
return x},
$S:1}
B.duM.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gEN()
else w=x.ghc()&&x.ghz()
if(w)x.Zw()},
$S:2}
B.duI.prototype={
$1(d){return this.a.cli()},
$S:2}
B.duu.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.du3.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.du4.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dtO.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.du5.prototype={
$0(){return null},
$S:16}
B.du2.prototype={
$0(){var x=A.lK(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dua.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.h9},
$S:0}
B.dub.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.B5(w.b,w.gcuN(),"Telegram Mini App",null,C.iS,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.duc.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.bv7(this.b,D.jn)},
$S:0}
B.dud.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jn},
$S:0}
B.dtQ.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.h9},
$S:0}
B.dtR.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.h9},
$S:0}
B.dtS.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dtT.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jm},
$S:0}
B.dtU.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jm},
$S:0}
B.dtV.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jn:D.h9},
$S:0}
B.dtW.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jn:x},
$S:0}
B.dtX.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.is},
$S:0}
B.dtY.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cgm(x.r)
if(w==null)x=x.b===!0?null:D.jn
else x=w
v.ok=x},
$S:0}
B.dtZ.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.bv7(this.b,D.jn)},
$S:0}
B.du_.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jn},
$S:0}
B.dul.prototype={
$0(){return this.a.ok=D.h9},
$S:0}
B.dum.prototype={
$0(){return this.a.ok=D.h9},
$S:0}
B.dun.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.duo.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jm},
$S:0}
B.dup.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jm},
$S:0}
B.duq.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dur.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Ri?D.tn:D.F3},
$S:0}
B.dus.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dut.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.xx},
$S:0}
B.dux.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.is},
$S:0}
B.duy.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.duz.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jm},
$S:0}
B.duA.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.is},
$S:0}
B.duB.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.is},
$S:0}
B.duC.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.duD.prototype={
$0(){var x=this.a
x.f=x.c8Z()
x.k2=!1},
$S:0}
B.duE.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.bv7(this.b,D.is)},
$S:0}
B.duF.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.is},
$S:0}
B.due.prototype={
$0(){return this.a.id=!0},
$S:0}
B.duf.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.is},
$S:0}
B.dug.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jm},
$S:0}
B.duh.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jm},
$S:0}
B.dui.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.duj.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.duk.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.is},
$S:0}
B.du6.prototype={
$0(){return this.a.chF("game-access")},
$S:28}
B.du7.prototype={
$2(d,e){return $.iR().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:41}
B.du0.prototype={
$2(d,e){return $.iR().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:41}
B.du8.prototype={
$0(){return this.a.chF("game-session")},
$S:28}
B.du9.prototype={
$2(d,e){return $.iR().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:41}
B.du1.prototype={
$2(d,e){return $.iR().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:41}
B.duG.prototype={
$0(){if(this.a.ghc())A.aJ(this.b,!1).f.gkZ().hW(0,A.a([A.i0(null,null)],y.Q))},
$S:0}
B.duH.prototype={
$0(){return this.a.ghc()},
$S:1}
B.dtM.prototype={
$0(){return this.a.dhH(this.b.gqR())},
$S:0}
B.dtN.prototype={
$0(){this.a.bQl()
return null},
$S:0}
B.dtP.prototype={
$1(d){return this.cCF(d)},
cCF(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.ghc()&&g.ghz())){x=1
break}u=4
x=7
return A.c(g.w.iy(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.ghc()&&g.ghz()))A.V(C.ak)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.ik(!0),$async$$1)
case 14:p=a2
if(!(g.ghc()&&g.ghz()))A.V(C.ak)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.ghc()&&g.ghz()))A.V(C.ak)
$.iR().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.ghc()&&g.ghz()))A.V(C.ak)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a8s(q,4)
if(!(g.ghc()&&g.ghz()))A.V(C.ak)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.bs_()
if(!(g.ghc()&&g.ghz()))A.V(C.ak)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.ghc()&&g.ghz()))A.V(C.ak)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.ZK(),$async$$1)
case 19:u=4
x=18
break
case 16:u=15
e=t.pop()
n=A.u(e)
$.iR().m(C.aJ,"RTP prefetch failed",n,null)
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
if(!(g.ghc()&&g.ghz())){x=1
break}$.iR().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.ghc()&&g.ghz())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).qK(),$async$$1)
case 20:if(!g.ghz()){x=1
break}g=g.cdB(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:338}
B.duv.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.vz(),$async$$0)
case 6:s=e
r=new B.duw(p,s)
r.$0()
p=y.H
x=7
return A.c(A.f2(D.aKJ,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.f2(D.aKr,null,p),$async$$0)
case 8:r.$0()
v=1
x=5
break
case 3:v=2
n=u.pop()
q=A.u(n)
$.iR().m(C.aJ,"Game host initialization unavailable: "+J.ab(q).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$$0,w)},
$S:49}
B.duw.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gEN()
else x=w.ghc()&&w.ghz()
if(!x)return
w=v.f!=null?w.as:null
B.esR(this.b,w)},
$S:0}
B.bEd.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cU(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.amN(w)
u=A.G(8)
t=A.aN(C.M.B(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aX(C.M,C.F),C.az,k,k)],q)
if(x.x){w=j.gKy()
p=s.z
w=A.a([H.dZ,A.d(w,k,k,k,k,k,p==null?k:p.a0(C.M.B(0.72)),C.az,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gXe()
if(o)p="-"
o=j.gX9()
m=x.f
if(m==null)m="-"
C.d.v(w,A.a([I.Jy,new B.am8(n,p,k),new B.am8(o,m,k)],q))}C.d.v(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a0(x.w?D.axg:D.ay3)
C.d.v(r,A.a([I.Jy,A.S(k,k,k,A.d(w,k,k,k,k,k,s,C.az,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3A,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bi(C.lf,A.a([C.o8,A.d(w.c?j.gamO():j.gX3(),k,k,k,k,k,k,C.az,k,k)],q),C.bt,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.az,k,k)}C.d.v(r,A.a([D.bIX,A.c4(o,D.c_b,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqR()!==D.tp
else w=!1
if(w)C.d.v(r,A.a([H.dZ,A.aH(A.d(j.gamQ(),k,k,k,k,k,k,C.az,k,k),D.c_y,k,k,x.z,k,k)],q))
return A.b4(new A.ba(new A.ay(0,1/0,i,1/0),A.aM(A.S(k,k,k,new A.ba(K.Nc,new A.cb(new A.R(D.aur,k,t,u,k,k,C.r),C.au,new A.J(C.aU,A.w(r,C.a8,k,C.e,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c7g,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aM9,k,k,C.y)},
$S:102};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aua.prototype,"gca_","tN",1)
x(v,"gcmx","cmy",1)
x(v,"gdDL","dDM",0)
w(v,"gbwP","vR",3)
x(v,"gc93","d_E",0)
x(v,"gcSZ","cT_",0)
x(v,"gcjd","dwj",0)
x(v,"gdDJ","dDK",0)
x(v,"gdDG","dDH",0)
x(v=B.auq.prototype,"gclh","cli",1)
w(v,"gdiQ","buE",4)
x(v,"gbRs","avM",0)
x(v,"gdqd","a_C",0)
x(v,"gdDv","dDw",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bt,[B.bEt,B.dso,B.dsf,B.ds0,B.drY,B.drT,B.dsb,B.ds4,B.ds2,B.dX4,B.dX7,B.dtK,B.dtL,B.duM,B.duI,B.dtP])
w(A.eD,[B.pW,B.DC,B.aHw,B.NU])
w(A.B,[B.bEc,B.Wz,B.aHB])
w(A.bu,[B.bEb,B.bEa,B.dsn,B.ds5,B.dsm,B.dsg,B.dsh,B.dsi,B.dsc,B.dsd,B.dse,B.drZ,B.ds_,B.drW,B.drX,B.drS,B.ds7,B.ds8,B.ds9,B.dsa,B.ds6,B.ds3,B.ds1,B.dsj,B.dsk,B.dsl,B.drU,B.drV,B.dX3,B.dX5,B.dX8,B.dX6,B.duJ,B.duK,B.duL,B.duu,B.du3,B.du4,B.dtO,B.du5,B.du2,B.dua,B.dub,B.duc,B.dud,B.dtQ,B.dtR,B.dtS,B.dtT,B.dtU,B.dtV,B.dtW,B.dtX,B.dtY,B.dtZ,B.du_,B.dul,B.dum,B.dun,B.duo,B.dup,B.duq,B.dur,B.dus,B.dut,B.dux,B.duy,B.duz,B.duA,B.duB,B.duC,B.duD,B.duE,B.duF,B.due,B.duf,B.dug,B.duh,B.dui,B.duj,B.duk,B.du6,B.du8,B.duG,B.duH,B.dtM,B.dtN,B.duv,B.duw])
w(A.K,[B.aiJ,B.aj8,B.Fo])
w(A.Q,[B.bg5,B.bbV,B.auq])
v(B.aua,B.bg5)
w(A.c7,[B.du7,B.du0,B.du9,B.du1,B.bEd])
w(A.x,[B.aHx,B.am8])
x(B.bg5,A.es)})()
A.b1(b.typeUniverse,JSON.parse('{"aiJ":{"K":[],"m":[]},"aua":{"Q":["aiJ"],"es":[]},"aj8":{"K":[],"m":[]},"bbV":{"Q":["aj8"]},"Fo":{"K":[],"m":[]},"auq":{"Q":["Fo"]},"aHx":{"x":[],"m":[]},"am8":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.D
return{J:x("bv"),u:x("A<a2<n,@>?>"),T:x("DD"),w:x("lY"),Q:x("v<bV<B?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a2<n,@>"),f:x("a2<@,@>"),a:x("b8"),A:x("Mz"),N:x("n"),x:x("V6"),r:x("fp"),E:x("ee"),O:x("H<n>"),L:x("Wz"),y:x("E"),z:x("@"),S:x("y"),h:x("a2<n,@>?"),X:x("B?"),H:x("~")}})();(function constants(){D.aur=new A.a3(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.axg=new A.a3(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.ay3=new A.a3(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.ayD=new A.a3(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aKr=new A.bF(175e4)
D.aKJ=new A.bF(75e4)
D.aM9=new A.ar(20,64,20,24)
D.Rb=new B.aHw(0,"purchase")
D.aPW=new B.aHw(1,"session")
D.jm=new B.pW(0,"signInRequired")
D.tk=new B.pW(1,"telegramAccountNotLinked")
D.jn=new B.pW(10,"requestFailed")
D.xx=new B.pW(11,"purchaseFailed")
D.is=new B.pW(12,"sessionFailed")
D.tl=new B.pW(2,"insufficientBalance")
D.tm=new B.pW(3,"walletInactive")
D.tn=new B.pW(4,"refundPending")
D.to=new B.pW(5,"accessExpired")
D.xy=new B.pW(6,"accessRequired")
D.h9=new B.pW(7,"gameUnavailable")
D.F3=new B.pW(8,"accessNotActive")
D.Rc=new B.pW(9,"sessionDenied")
D.Rd=new B.DC(0,"none")
D.aPX=new B.DC(1,"signIn")
D.aPY=new B.DC(2,"bindTelegram")
D.aPZ=new B.DC(3,"topUp")
D.aQ_=new B.DC(4,"purchase")
D.aQ0=new B.DC(5,"openGame")
D.tp=new B.DC(6,"retry")
D.aUq=new A.at(C.ks,null,C.M,null,null)
D.bsr=new A.J(C.X,C.bV,null)
D.atB=new A.o6(2.5,null,null,null,null,null,null,null,null,null)
D.bIU=new A.ad(28,28,D.atB,null)
D.bIX=new A.ad(null,22,null,null)
D.c_b=new A.H("slot-game-access-primary",y.O)
D.c_y=new A.H("slot-game-access-refresh",y.O)
D.c2J=new A.H("gameV2Confirm",y.O)
D.c2K=new A.H("gameV2Message",y.O)
D.c2L=new A.H("gameV2Page",y.O)
D.c3A=new A.H("slot-game-access-message",y.O)
D.c5h=new A.H("retiredSlotHome",y.O)
D.c7g=new A.H("slot-game-access-gate",y.O)
D.ahm=new B.NU(0,"request")
D.ahn=new B.NU(1,"pending")
D.aho=new B.NU(2,"launchPending")
D.ahp=new B.NU(3,"storage")
D.Lj=new B.NU(4,"unavailable")
D.Lk=new B.NU(5,"expired")})();(function staticFields(){$.ad_=function(){var x=y.N
return A.q(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ffK","exe",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"fgU","iR",()=>A.b7("SlotGamePage"))})()};
(a=>{a["v0CjPdYbuBdeDP8PHOtLcxaMO6g="]=a.current})($__dart_deferred_initializers__);