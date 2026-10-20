((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,L,M,H,B={
e5z(){var x,w,v=$.oX(),u=J.f9(16,y.S)
for(x=0;x<16;++x)u[x]=v.mD(256)
u[6]=u[6]&15|64
u[8]=u[8]&63|128
w=new A.C(u,new B.bz9(),A.V(u).k("C<1,n>")).lg(0)
return C.c.am(w,0,8)+"-"+C.c.am(w,8,12)+"-"+C.c.am(w,12,16)+"-"+C.c.am(w,16,20)+"-"+C.c.bV(w,20)},
bz9:function bz9(){},
dN0(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.rR
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.rS
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.rT
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.rU
if(C.c.t(x,"ACCESS_EXPIRED"))return D.rV
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.x3
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.h5
return null},
e_6(d,e,f){var x=e==null?null:C.c.F(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
pe:function pe(d,e){this.a=d
this.b=e},
Cl:function Cl(d,e){this.a=d
this.b=e},
aEe:function aEe(d,e){this.a=d
this.b=e},
byT:function byT(d,e,f,g,h,i,j){var _=this
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
ard:function ard(){var _=this
_.d=$
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=null
_.at=_.as=!1
_.ax=!0
_.ay=0
_.c=_.a=_.CW=_.ch=null},
djD:function djD(d){this.a=d},
djE:function djE(d){this.a=d},
djv:function djv(d,e){this.a=d
this.b=e},
djl:function djl(d){this.a=d},
djC:function djC(d,e){this.a=d
this.b=e},
djw:function djw(d){this.a=d},
djx:function djx(d,e){this.a=d
this.b=e},
djy:function djy(d){this.a=d},
djs:function djs(d){this.a=d},
djt:function djt(d){this.a=d},
dju:function dju(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djg:function djg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dje:function dje(d){this.a=d},
djf:function djf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djd:function djd(d){this.a=d},
djb:function djb(d,e){this.a=d
this.b=e},
djc:function djc(d,e){this.a=d
this.b=e},
dj8:function dj8(d){this.a=d},
dj7:function dj7(d){this.a=d},
djr:function djr(d){this.a=d},
djn:function djn(d,e){this.a=d
this.b=e},
djo:function djo(d,e){this.a=d
this.b=e},
djp:function djp(d,e){this.a=d
this.b=e},
djq:function djq(d,e){this.a=d
this.b=e},
djm:function djm(d){this.a=d},
djk:function djk(d){this.a=d},
djj:function djj(d,e){this.a=d
this.b=e},
dji:function dji(d){this.a=d},
djh:function djh(d,e,f){this.a=d
this.b=e
this.c=f},
djz:function djz(d){this.a=d},
djA:function djA(d){this.a=d},
djB:function djB(d){this.a=d},
dj9:function dj9(d){this.a=d},
dja:function dja(d){this.a=d},
bbp:function bbp(){},
eUS(d,e,f){var x=b.G,w=A.dI(new B.dNv(x.window.location.origin,f,e,d))
x.window.addEventListener("message",w)
return new B.dNu(w)},
eUT(d,e,f){var x,w={},v=b.G,u=v.window.location.origin
w.a=!0
x=A.dI(new B.dNy(u,new B.dNw(w,f),e,d))
v.window.addEventListener("message",x)
return new B.dNx(w,x)},
dZc(d,e){var x,w,v
if(e==null)return!0
x=b.G.document.getElementById(e)
w=!1
if(x!=null)if(A.ii(x,"HTMLIFrameElement")){w=d.source
v=x.contentWindow
v=w==null?v==null:w===v
w=v}return w},
eis(d,e){B.dIA(A.bF(d),b.G.window.location.origin,e)},
dIA(d,e,f){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ii(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
if(f!=null&&!J.p(w.id,f))continue
u=w.src
if(C.c.aV(u,e))v=!A.oW(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dNv:function dNv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNu:function dNu(d){this.a=d},
dNw:function dNw(d,e){this.a=d
this.b=e},
dNy:function dNy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNz:function dNz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dNx:function dNx(d,e){this.a=d
this.b=e},
agp:function agp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7s:function b7s(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dl_:function dl_(d){this.a=d},
dl0:function dl0(d){this.a=d},
eaD(d,e){return new B.E5(d,e,null)},
E5:function E5(d,e,f){this.c=d
this.d=e
this.a=f},
art:function art(d,e,f,g){var _=this
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
dlZ:function dlZ(d){this.a=d},
dm_:function dm_(d){this.a=d},
dm0:function dm0(d){this.a=d},
dm1:function dm1(d){this.a=d},
dlY:function dlY(d){this.a=d},
dlK:function dlK(d){this.a=d},
dlj:function dlj(d,e){this.a=d
this.b=e},
dlk:function dlk(d){this.a=d},
dl3:function dl3(d,e){this.a=d
this.b=e},
dll:function dll(){},
dli:function dli(d,e){this.a=d
this.b=e},
dlq:function dlq(d,e){this.a=d
this.b=e},
dlr:function dlr(d,e){this.a=d
this.b=e},
dls:function dls(d,e){this.a=d
this.b=e},
dlt:function dlt(d){this.a=d},
dl5:function dl5(d,e){this.a=d
this.b=e},
dl6:function dl6(d){this.a=d},
dl7:function dl7(d){this.a=d},
dl8:function dl8(d){this.a=d},
dl9:function dl9(d){this.a=d},
dla:function dla(d,e){this.a=d
this.b=e},
dlb:function dlb(d,e){this.a=d
this.b=e},
dlc:function dlc(d,e){this.a=d
this.b=e},
dld:function dld(d,e){this.a=d
this.b=e},
dle:function dle(d,e){this.a=d
this.b=e},
dlf:function dlf(d){this.a=d},
dlB:function dlB(d){this.a=d},
dlC:function dlC(d){this.a=d},
dlD:function dlD(d){this.a=d},
dlE:function dlE(d){this.a=d},
dlF:function dlF(d){this.a=d},
dlG:function dlG(d){this.a=d},
dlH:function dlH(d,e){this.a=d
this.b=e},
dlI:function dlI(d,e){this.a=d
this.b=e},
dlJ:function dlJ(d){this.a=d},
dlN:function dlN(d){this.a=d},
dlO:function dlO(d){this.a=d},
dlP:function dlP(d){this.a=d},
dlQ:function dlQ(d){this.a=d},
dlR:function dlR(d){this.a=d},
dlS:function dlS(d,e,f){this.a=d
this.b=e
this.c=f},
dlT:function dlT(d){this.a=d},
dlU:function dlU(d,e){this.a=d
this.b=e},
dlV:function dlV(d){this.a=d},
dlu:function dlu(d){this.a=d},
dlv:function dlv(d){this.a=d},
dlw:function dlw(d){this.a=d},
dlx:function dlx(d){this.a=d},
dly:function dly(d){this.a=d},
dlz:function dlz(d){this.a=d},
dlA:function dlA(d){this.a=d},
dlm:function dlm(d){this.a=d},
dln:function dln(){},
dlg:function dlg(){},
dlo:function dlo(d){this.a=d},
dlp:function dlp(){},
dlh:function dlh(){},
dlW:function dlW(d,e){this.a=d
this.b=e},
dlX:function dlX(d){this.a=d},
dl1:function dl1(d,e){this.a=d
this.b=e},
dl2:function dl2(d){this.a=d},
dl4:function dl4(d,e,f){this.a=d
this.b=e
this.c=f},
dlL:function dlL(d){this.a=d},
dlM:function dlM(d,e){this.a=d
this.b=e},
aEf:function aEf(d,e,f,g,h,i,j,k,l,m){var _=this
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
byU:function byU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajf:function ajf(d,e,f){this.c=d
this.d=e
this.a=f},
aEj:function aEj(d){this.a=d},
eCY(d){var x
if(d==null||d.length===0)return null
x=A.eaB().i(0,d)
return(x==null?null:x.e===C.iH)===!1?x:null},
Ci(d,e,f,g){var x=null
return B.evn(d,e,f,g)},
evn(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ci=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.aav.i(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.W8():k).$0(),$async$Ci)
case 7:s=a2
r=s.a.i(0,a0)
if(typeof r=="string"&&r.length!==0){$.aav.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.pP(s,a0),$async$Ci)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.i(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.aav.h(0,a0,q)
x=15
return A.c(s.h0("String",a0,q),$async$Ci)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.pP(s,e),$async$Ci)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.pP(s,e),$async$Ci)
case 21:case 20:case 12:o=d.$0()
$.aav.h(0,a0,o)
x=22
return A.c(s.h0("String",a0,o),$async$Ci)
case 22:n=a2
if(!n){k=A.aN("Game access attempt id was not persisted.")
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
v=$.aav.dv(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ci,w)},
aaw(d,e){var x=null
return B.evm(d,e)},
evm(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$aaw=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.eE(0)
for(p=J.aZ(l);p.G();)$.aav.N(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.W8():p).$0(),$async$aaw)
case 6:t=g
p=J.aZ(l)
case 7:if(!p.G()){x=8
break}s=p.gR()
o=s
t.a.N(0,o)
x=9
return A.c($.Wb().N(0,"flutter."+o),$async$aaw)
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
return A.k($async$aaw,w)}},D,E,F,G,N,O,P,Q,R,S,T,I
J=c[1]
A=c[0]
C=c[2]
K=c[299]
L=c[309]
M=c[318]
H=c[482]
B=a.updateHolder(c[157],B)
D=c[783]
E=c[185]
F=c[784]
G=c[662]
N=c[746]
O=c[622]
P=c[191]
Q=c[785]
R=c[443]
S=c[488]
T=c[458]
I=c[552]
B.pe.prototype={
Y(){return"GameAccessIssue."+this.b}}
B.Cl.prototype={
Y(){return"GameAccessPrimaryAction."+this.b}}
B.aEe.prototype={
Y(){return"GameAccessAttemptKind."+this.b}}
B.byT.prototype={
gqq(){var x=this
if(x.b||x.c||!x.a)return D.Q8
if(x.f)return D.aLu
switch(x.r){case D.jb:return D.aLq
case D.rR:return D.aLr
case D.rS:case D.rT:return D.aLs
case D.rU:case D.h5:return D.Q8
case D.rV:case D.x3:case D.Ei:case D.Q7:case D.jc:case D.x2:return D.rW
case D.ih:return D.rW
case null:case void 0:if(x.e)return D.rW
return x.d?D.aLt:D.rW}}}
B.Mo.prototype={
Y(){return"_GameProblem."+this.b}}
B.ag_.prototype={
P(){return new B.ard()},
dXj(){return this.f.$0()},
e_G(){return this.r.$0()}}
B.ard.prototype={
gbKe(){var x=this,w=null,v=x.CW
if(v==null)if(x.ch==null){v=x.r
v=v==null?w:v.d
if(v==null){v=x.x
if(v==null)v=w
else{v=v.b
v=v==null?w:v.f}}v=B.dN0(v)}else v=w
return v},
gc8V(){var x,w=this.ch
if(w!=null)return w
x=this.r
if(x!=null)if(x.r)w=!x.x&&!x.y
else w=!0
else w=!1
if(!w){w=this.x
if(w==null)w=null
else{w=w.b
w=w==null?null:w.f}w=w!=null}else w=!0
return w?D.Ks:null},
ghD(){var x=this
return x.c!=null&&!x.at&&x.ax&&x.a.e.gM()&&x.a.dXj()},
X(){var x,w,v=this
v.a6()
x=$.am.RG$
v.ax=x==null||x===C.cx
w=A.iv(v.a.d.a.a,new B.djD(v))
v.d!==$&&A.aJ()
v.d=new E.adB(new A.Cm(w))
v.a.e.a4(v.gciY())
$.am.bq$.push(v)
$.am.y2$.push(new B.djE(v))},
tn(){var x=this.z
if(x!=null)x.a8()
this.y=this.z=null},
bO5(){var x,w,v=this.Q
this.Q=null
x=v==null
w=x?null:v.b
if(!x&&w!=null&&v.gf7())$.am.y2$.push(new B.djv(v,w))},
ciZ(){var x=this
if(x.c==null||x.at||x.a.e.gM())return;++x.ay
x.bO5()
x.n(new B.djl(x))},
nX(d){var x=this
if(x.c==null)return;++x.ay
if(d!==C.cx)x.bO5()
x.n(new B.djC(x,d))
if(x.ax&&x.ghD())x.tz(x.gbuR())},
q(){var x=this;++x.ay
x.bO5()
x.tn()
x.a.e.T(x.gciY())
$.am.iL(x)
x.a5()},
c9B(d){var x
this.CW=d instanceof A.i9?B.dN0(d.b):null
if(d instanceof E.pg)x=D.afW
else if(d instanceof E.uv)x=D.afU
else if(d instanceof E.aay)x=D.afV
else x=d instanceof E.Ck||d instanceof E.YQ?D.Ks:D.afT
this.ch=x},
tz(d){return this.dvY(d)},
dvY(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n
var $async$tz=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(r.as||!r.ghD()){x=1
break}q=++r.ay
r.n(new B.djw(r))
u=4
x=7
return A.c(d.$1(q),$async$tz)
case 7:s.push(6)
x=5
break
case 4:u=3
n=t.pop()
p=A.u(n)
if(r.ghD()&&J.p(q,r.ay))r.n(new B.djx(r,p))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null&&J.p(q,r.ay))r.n(new B.djy(r))
x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tz,w)},
dyp(){return this.tz(this.gbuR())},
vk(d){return this.dsm(d)},
dsm(d){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return A.c(p.py(t.a.c),$async$vk)
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
return A.c(E.bze(n,l.b,new B.djs(t),p),$async$vk)
case 13:j=f
x=11
break
case 12:n===$&&A.e()
m=m.c
p=p.b
n=n.a.a
l=n.c
if(!(l instanceof A.fE))A.W(C.x)
j=E.e5x(n,l.b,p,new B.djt(t),null,m)
case 11:k.a=j
if(!t.ghD()||d!==t.ay)A.W(C.ao)
if(j==null)throw A.o(new E.Ck())
p=j
x=3
break
case 4:p=j
case 3:x=14
return A.c(p.e2w(),$async$vk)
case 14:s=f
if(!t.ghD()||d!==t.ay)A.W(C.ao)
x=15
return A.c(p.cvh(),$async$vk)
case 15:r=f
if(!t.ghD()||d!==t.ay)A.W(C.ao)
k.c=k.d=null
v=17
g=k
x=20
return A.c(p.qK(),$async$vk)
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
t.n(new B.dju(k,t,s,r))
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$vk,w)},
atT(d,e,f){return this.cZ5(d,e,f)},
cZ5(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$atT=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(!r.ghD()||d!==r.ay)A.W(C.ao)
n=r.c
n.toString
q=A.ac(n,!0)
p=A.cA()
n=r.c
n.toString
m=y.y
p.seT(A.BS(null,null,C.aj,!0,null,new B.djg(r,e,f,q,p,d),n,!1,null,null,null,null,!0,m))
r.Q=p.an()
u=3
x=6
return A.c(q.aK(p.an(),m),$async$atT)
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
return A.k($async$atT,w)},
cW_(){return this.tz(new B.djd(this))},
cOq(){return this.tz(new B.dj8(this))},
dr1(){return this.tz(new B.djr(this))},
dyn(){return this.tz(new B.djk(this))},
dyk(){return this.tz(new B.dji(this))},
a_u(d){return this.dl4(d)},
dl4(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$a_u=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!u.ghD()||u.as){x=1
break}++u.ay
u.n(u.gc6U())
t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aK(d,y.X),$async$a_u)
case 3:x=u.ghD()?4:5
break
case 4:x=6
return A.c(u.tz(u.gbuR()),$async$a_u)
case 6:case 5:case 1:return A.j(v,w)}})
return A.k($async$a_u,w)},
dyl(d){var x
switch(this.gbKe()){case D.rR:return d.gWe()
case D.rS:return d.gW4()
case D.rT:return d.gWc()
case D.rU:return d.gW7()
case D.rV:return d.gW3()
case D.x3:return d.gW9()
case D.h5:return d.gJQ()
default:break}x=null
switch(this.gc8V()){case D.afW:x=d.gaci()
break
case D.afU:x=d.gU5()
break
case D.afV:x=d.gU4()
break
case D.Kt:x=d.gacd()
break
case D.Ks:x=d.gJQ()
break
case D.afT:x=d.gW1()
break
case null:case void 0:break}return x},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.f(d,C.b,y.J)
g.toString
x=i.f
w=x==null?h:x.gcr_()
if(w==null)w=g.galN()
if(i.at||!i.a.e.gM()){x=A.kv(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,A.d(w,h,h,h,h,h,h,h,h,h),h,h,h,1,h,!0)
v=A.d(g.gWf(),h,h,h,h,h,h,C.aH,h,h)
u=i.a.r
return A.bN(x,h,new A.dA(!0,!0,!0,!0,C.K,!1,A.aK(new A.J(C.aW,A.w(A.a([v,M.du,A.c0(A.d(g.giX(),h,h,h,h,h,h,h,h,h),h,u,h)],y.p),C.l,h,C.e,C.I,0,C.j),h),h,h,h),h),h,h,h,h,h)}t=i.r
s=i.w
r=i.x
x=t==null
if((x?h:t.y)===!0)q=(x?h:t.r)===!0
else q=!1
p=i.gbKe()
o=i.dyl(g)
v=y.p
u=A.a([A.d(g.gJN(),h,h,h,h,h,h,h,h,h),C.S],v)
if(!x)C.d.B(u,A.a([i.bOP(g.gWd(),t.b+" USDT"),i.bOP(g.gW8(),t.a+" USDT")],v))
if(o!=null)u.push(new A.J(K.eo,A.d(o,D.bY_,h,h,h,h,A.H(h,h,A.t(d).ax.fy,h,h,h,h,h,h,h,h,h,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
if(i.as)u.push(D.bnm)
n=s==null
if(!n){m=A.d(g.gacf(),h,h,h,h,h,A.t(d).ok.w,h,h,h)
l=i.bOP(g.gtI(),s.a.c+" USDT")
k=s.b
j=k==null
if(!j)k=k.a==="ACTIVE"?g.gavK():g.gW5()
else k=s.c?g.gW6():g.gU5()
k=A.a([m,l,A.d(k,h,h,h,h,h,h,h,h,h),C.S],v)
if(!j||s.c)k.push(i.DG("gameV2AcknowledgePurchase",g.gac9(),i.gcOp()))
else k.push(i.DG("gameV2RetryPurchase",g.gach(),i.gc61()))
u.push(A.d5(new A.J(C.E,A.w(k,C.ab,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n){m=(x?h:t.x)===!0
x=m}else x=!1
if(x)u.push(i.DG("gameV2Purchase",g.gWa(),i.gc61()))
x=r==null
if(!x){m=r.b
l=m==null
k=A.a([A.d((l?h:F.jD.t(0,m.a))===!0?g.gacc():g.gU4(),h,h,h,h,h,h,h,h,h),C.S],v)
if(i.y!=null&&q)k.push(i.DG("gameV2Open",g.gwK(),i.gdym()))
j=!1
if(n)if(q)if((l?h:F.jD.t(0,m.a))!==!0)j=(l?h:m.f)==null
else j=!0
if(j){j=(l?h:F.jD.t(0,m.a))===!0?g.gU6():g.gU7()
k.push(i.DG("gameV2Reissue",j,i.gcfS()))}if((l?h:F.jD.t(0,m.a))!==!0)k.push(i.bIN("gameV2End",g.gacb(),i.gdyj(),!0))
u.push(A.d5(new A.J(C.E,A.w(k,C.ab,h,C.e,C.f,0,C.j),h),h,h,h,h,h,h,h))}if(n&&x&&q)u.push(i.DG("gameV2Prepare",g.gU6(),i.gcfS()))
if(p===D.rR)u.push(i.DG("gameV2BindTelegram",g.gQs(),new B.djz(i)))
if(p===D.rS||p===D.rT)u.push(i.DG("gameV2TopUp",g.gWb(),new B.djA(i)))
u.push(i.bIN("gameV2CheckOriginal",g.gaca(),i.gdyo(),!0))
g=A.d(w,h,h,h,h,h,h,h,h,h)
return A.bN(A.kv(h,h,h,!0,!0,h,h,1,h,h,h,!1,h,!1,h,h,P.e1L(new B.djB(i)),h,!0,h,h,h,h,h,g,h,h,h,1,h,!0),h,new A.dA(!0,!1,!0,!0,C.K,!1,A.eD(A.a([A.aK(new A.ba(C.vC,A.w(u,C.ab,h,C.e,C.f,0,C.j),h),h,h,h)],v),h,D.bY0,Q.P0,h,h,C.y,!1),h),h,h,h,h,h)},
bOP(d,e){var x=null
return new A.J(R.Dh,A.bh(C.l4,A.a([A.d(d,x,x,x,x,x,x,x,x,x),A.d(e,x,x,x,x,x,x,x,x,x)],y.p),C.ad,x,4,16),x)},
bIN(d,e,f,g){var x,w=null,v=y.O
if(g){x=this.as?w:new B.dj9(f)
x=A.fj(A.d(e,w,w,w,w,w,w,C.aH,w,w),new A.N(d,v),x,w)
v=x}else{x=this.as?w:new B.dja(f)
x=A.c0(A.d(e,w,w,w,w,w,w,C.aH,w,w),new A.N(d,v),x,w)
v=x}return new A.J(S.De,v,w)},
DG(d,e,f){return this.bIN(d,e,f,!1)}}
B.bbp.prototype={}
B.agp.prototype={
P(){return new B.b7s()}}
B.b7s.prototype={
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
v=A.dI(new B.dl_(u.a.e))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.awr()
$.AY().a8X(x,new B.dl0(u),!0)},
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
B.E5.prototype={
P(){var x=$.ak()
return new B.art(x.$1$0(y.w),x.$1$0(y.r),"agora-slot-"+1000*Date.now()+"-"+$.oX().mD(1073741824),x.$1$0(y.x))}}
B.art.prototype={
gfZ(){if(this.c!=null){var x=this.z
x=x==null?null:x.gM()
x=x!==!1}else x=!1
return x},
gE4(){var x,w=this,v=!1
if(!w.Q){x=w.y
x=x==null?null:x.gM()
if(x!==!1)if(w.gfZ()){v=w.x
v===$&&A.e()
v=v.gM()}}return v},
ghr(){var x,w,v,u=this
if(u.ax)return!1
try{w=$.no
if(w!=null)w.cY()
x=u.at
if(x!=null&&u.w.m9(x))return!0}catch(v){if(!(A.u(v) instanceof A.Iv))throw v}u.ax=!0
u.CW=null
return!1},
gbuE(){var x,w=this.ay
if(w===$){x=$.ak().$1$0(y.T)
this.ay!==$&&A.bg()
w=this.ay=new E.adB(x)}return w},
X(){var x,w,v,u,t,s=this
s.a6()
x=$.ak()
w=x.$1$0(y.A)
v=w.f==null
u=!v
if(u){x=A.iS(x.$1$0(y.E),s.w)
x.a4(s.gchJ())
s.y=x}if(v)s.at=s.w.bS2()
x=u?w.dUg(new B.dlZ(s)):w
s.x!==$&&A.aJ()
s.x=x
v=s.a
if(v.d!=null){if(x.f==null)s.Zb()
return}t=s.d=B.eCY(v.c)
if(t==null){s.k2=!1
s.ok=D.h5
return}if(!t.gbVQ()){s.k2=!1
s.ok=D.h5
return}if(t.e!==C.iH){s.k2=!1
v=x.f!=null?s.as:null
s.p1=B.eUS(s.gbLx(),v,new B.dm_(s))
x=x.f!=null?s.as:null
s.p2=B.eUT(s.gddY(),x,new B.dm0(s))
$.am.y2$.push(new B.dm1(s))
s.cy=s.asg()
return}},
aZ(){var x,w,v=this
v.by()
x=v.c
x.toString
v.z=A.cr(x,null,y.X)
x=v.y
if((x==null?null:x.gM())===!1)$.am.y2$.push(new B.dlY(v))
w=v.d
if(!v.k1&&w!=null&&w.e!==C.iH){v.k1=!0
v.f=v.c5X()}},
chK(){var x=this,w=!0
if(x.c!=null)if(!x.Q){w=x.y
w=(w==null?null:w.gM())!==!1}if(w)return
B.eis(A.Z(["type","HOST_RETIRED"],y.N,y.z),x.as)
x.n(new B.dlK(x))},
Yu(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Yu=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:j=s.x
j===$&&A.e()
x=j.f!=null?3:4
break
case 3:u=6
x=9
return A.c(s.aq9(),$async$Yu)
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
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
x=14
return A.c(s.w.ik(),$async$Yu)
case 14:r=e
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
if(s.c!=null&&r!=null)try{if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(f){q=A.u(f)
$.ix().m(C.aO,"localStorage jwt write failed (private mode?)",q,null)}u=2
x=13
break
case 11:u=10
h=t.pop()
p=A.u(h)
if(!(s.gfZ()&&s.ghr())){x=1
break}$.ix().m(C.t,"_fetchUserInfo: getValidToken failed",p,null)
x=13
break
case 10:x=2
break
case 13:u=16
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
x=19
return A.c(s.r.i7(!0),$async$Yu)
case 19:o=e
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
if(s.c!=null){j=o
k=j==null?null:j.f
n=k==null?0:k
s.n(new B.dlj(s,n))
try{j=J.a65(n,4)
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",j)}catch(f){m=A.u(f)
$.ix().m(C.aO,"localStorage balance write failed",m,null)}}u=2
x=18
break
case 16:u=15
g=t.pop()
if(s.gfZ()&&s.ghr())s.n(new B.dlk(s))
x=18
break
case 15:x=2
break
case 18:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Yu,w)},
v4(){return this.cST()},
cST(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$v4=A.h(function(a9,b0){if(a9===1){t.push(b0)
x=u}for(;;)switch(x){case 0:a2={}
a3=s.x
a3===$&&A.e()
x=a3.f!=null?3:4
break
case 3:x=5
return A.c(s.aq9(),$async$v4)
case 5:h=b0
x=6
return A.c(s.YI(),$async$v4)
case 6:g=b0
r=null
u=8
x=11
return A.c(a3.cFm(),$async$v4)
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
case 10:if(!s.gE4())throw A.o(C.ao)
a2=A.mg(h.i(0,"balance"))
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
case 4:if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
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
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
u=2
x=17
break
case 15:u=14
a5=t.pop()
o=A.u(a5)
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getValidToken failed",o,null)
x=17
break
case 14:x=2
break
case 17:case 13:a3=q
if(a3!=null)try{a3=q
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_jwt",a3)}catch(a8){n=A.u(a8)
$.ix().m(C.aO,"localStorage jwt write failed in shim",n,null)}x=s.CW==null?19:21
break
case 19:u=23
x=26
return A.c(s.r.CM(),$async$v4)
case 26:m=b0
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
a3=m
a0=a3==null?null:a3.b
p=a0==null?"":a0
a3=m
e=a3==null?null:a3.f
a2.a=e==null?0:e
if(s.c!=null)s.n(new B.dl3(a2,s))
try{a3=C.k.Z(a2.a,4)
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
b.G.window.localStorage.setItem("_flutter_game_balance",a3)}catch(a8){l=A.u(a8)
$.ix().m(C.aO,"localStorage balance write failed in shim",l,null)}u=2
x=25
break
case 23:u=22
a6=t.pop()
k=A.u(a6)
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getProfile failed",k,null)
x=25
break
case 22:x=2
break
case 25:x=20
break
case 21:u=28
x=31
return A.c(s.r.CM(),$async$v4)
case 31:j=b0
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
a3=j
a0=a3==null?null:a3.b
p=a0==null?"":a0
u=2
x=30
break
case 28:u=27
a7=t.pop()
i=A.u(a7)
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
$.ix().m(C.t,"_buildHostInitPayload: getProfile failed",i,null)
x=30
break
case 27:x=2
break
case 30:case 20:a3=a2.a
x=32
return A.c(s.YI(),$async$v4)
case 32:g=b0
if(!(s.gfZ()&&s.ghr()))A.W(C.ao)
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
YI(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$YI=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.cx
if(s!=null){v=s
x=1
break}t=u.cy
if(t==null)t=u.cy=u.asg()
v=t.rW(C.OF,new B.dll())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$YI,w)},
aq9(){var x=0,w=A.l(y.P),v,u=this,t,s,r
var $async$aq9=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(!u.gE4())throw A.o(C.ao)
t=u.x
t===$&&A.e()
x=3
return A.c(t.jL(),$async$aq9)
case 3:s=e
if(!u.gE4())throw A.o(C.ao)
r=y.P.a(s.i(0,"data"))
if(u.c!=null)u.n(new B.dli(u,r))
v=r
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$aq9,w)},
asg(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$asg=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.d
if(k==null){v=null
x=1
break}u=4
m=r.x
m===$&&A.e()
x=7
return A.c(m.bol(k.a),$async$asg)
case 7:q=e
if(J.p(J.ax(q,"success"),!0)&&y.f.b(J.ax(q,"data"))){p=A.os(y.f.a(J.ax(q,"data")),y.N,y.z)
r.cx=p
if(m.f==null)try{m=C.H.av(p,null)
if(!(r.gfZ()&&r.ghr()))A.W(C.ao)
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
return A.k($async$asg,w)},
Zb(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Zb=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbuE().py(l),$async$Zb)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.n(new B.dlq(s,r))
x=1
break}s.n(new B.dlr(s,r))
x=8
return A.c(s.tm(),$async$Zb)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.i9){q=m
$.ix().m(C.t,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dls(s,q))}else{p=m
o=A.aO(k)
m=$.ix()
m.m(C.t,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dlt(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Zb,w)},
tm(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$tm=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.iH){if(s.c==null){x=1
break}s.n(new B.dl5(s,f))
x=1
break}if(!f.gbVQ()){if(s.c==null){x=1
break}s.n(new B.dl6(s))
x=1
break}if(s.c!=null)s.n(new B.dl7(s))
u=4
x=7
return A.c(s.w.ik(),$async$tm)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.n(new B.dl8(s))
x=1
break}if(s.c==null){x=1
break}q=s.bq1(r)
if(q==null){s.n(new B.dl9(s))
x=1
break}k=s.fx
if(k!=null&&k!==q)s.dx=null
s.fx=q
k=s.gbuE().a
if(k.a.c instanceof A.fE)A.W(C.x)
x=8
return A.c(k.I6(d),$async$tm)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.n(new B.dla(s,p))
x=1
break}s.db=p
x=p.c===!0?9:10
break
case 9:o=s.cd9(p.r)
if(p.b!==!0||o!=null){s.n(new B.dlb(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.n(new B.dlc(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.ih)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dBm(!0),$async$tm)
case 13:case 12:x=1
break
case 10:s.n(new B.dld(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.i9){m=k
$.ix().m(C.t,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.n(new B.dle(s,m))}else{l=k
$.ix().m(C.t,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.n(new B.dlf(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$tm,w)},
bO0(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.Zb()
return w.tm()},
vi(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vi=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.k2||s.k3){x=1
break}i=s.d
r=s.fx
h=i==null
if(h||i.e!==C.iH){if(s.c==null){x=1
break}if(h)s.n(new B.dlB(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.n(new B.dlC(s))
x=1
break}h=s.db
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.tm(),$async$vi)
case 5:x=1
break
case 4:s.n(new B.dlD(s))
u=7
x=10
return A.c(s.w.ik(),$async$vi)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.n(new B.dlE(s))
x=1
break}if(s.c==null){x=1
break}o=s.bq1(p)
if(o==null){s.n(new B.dlF(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bOf(o)
x=13
return A.c(s.tm(),$async$vi)
case 13:x=1
break
case 12:s.fx=o
x=14
return A.c(s.bMF(),$async$vi)
case 14:n=a0
if(s.c==null){x=1
break}h=s.gbuE().a
if(h.a.c instanceof A.fE)A.W(C.x)
x=15
return A.c(h.RN(q,new E.aEi(n)),$async$vi)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.Qc?16:17
break
case 16:x=18
return A.c(s.apT(),$async$vi)
case 18:if(s.c==null){x=1
break}s.n(new B.dlG(s))
x=19
return A.c(s.tm(),$async$vi)
case 19:x=1
break
case 17:s.n(new B.dlH(s,m))
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
k=s.btd(l,D.x2)
f=l.b.toUpperCase()
x=k===D.rV||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.apT(),$async$vi)
case 25:case 24:if(s.c==null){x=1
break}s.n(new B.dlI(s,k))
x=21
break
case 22:j=h
$.ix().m(C.t,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.n(new B.dlJ(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vi,w)},
oO(d,e){return this.dBn(d,!0)},
dBm(d){return this.oO(!0,d)},
dBn(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$oO=A.h(function(c1,c2){if(c1===1){t.push(c2)
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
if(b2){s.n(new B.dlN(s))
x=1
break}q=b1==null?null:b1.w
s.n(new B.dlO(s))
u=4
x=7
return A.c(s.w.ik(),$async$oO)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bq1(p)
if(o==null){s.n(new B.dlP(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bOf(o)
x=10
return A.c(s.tm(),$async$oO)
case 10:x=1
break
case 9:s.fx=o
b8=s.dx!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.zY(!0),$async$oO)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.n(new B.dlQ(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bMG(),$async$oO)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.ch.JY(b6.a,new B.aEj(n)),$async$oO)
case 15:m=c2
l=new A.aE(Date.now(),0,!1).a2()
k=m==null?null:E.eik(m.w)
j=m==null?null:E.dO2(m.f)
i=m==null?null:E.dO2(m.r)
h=m==null?null:E.dO2(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Qe
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
$.ix().m(C.t,"game session response rejected: "+J.bdj(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.KU(b6.a,!0,m.a),$async$oO)
case 20:case 19:x=21
return A.c(s.XO(),$async$oO)
case 21:if(s.c==null){x=1
break}s.n(new B.dlR(s))
x=1
break
case 17:s.dx=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.zY(!0),$async$oO)
case 24:x=1
break
case 23:x=b6.e===C.iH?25:26
break
case 25:s.n(new B.dlS(s,k,h))
x=27
return A.c(s.Ab(),$async$oO)
case 27:x=1
break
case 26:s.n(new B.dlT(s))
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
return A.c(s.XO(),$async$oO)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.oO(!1,!0),$async$oO)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.n(new B.dlU(s,a9))
x=29
break
case 30:b0=a7
$.ix().m(C.t,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.n(new B.dlV(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oO,w)},
Ab(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ab=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.id){x=1
break}r=s.dy
k=s.fr
if(r==null||k==null){x=1
break}s.n(new B.dlu(s))
x=!k.i1(new A.aE(Date.now(),0,!1).a2())?3:4
break
case 3:x=5
return A.c(s.zY(!0),$async$Ab)
case 5:if(s.c==null){x=1
break}s.n(new B.dlv(s))
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
o=A.aO(f)
h=$.ix()
h.m(C.t,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.n(new B.dlw(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bq1(q)
if(g==null){s.n(new B.dlx(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bOf(g)
x=13
return A.c(s.tm(),$async$Ab)
case 13:x=1
break
case 12:u=15
s.n(new B.dly(s))
x=18
return A.c(A.tV(r,C.ly,"_self"),$async$Ab)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.n(new B.dlz(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aO(e)
h=$.ix()
h.m(C.t,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.zY(!0),$async$Ab)
case 19:if(s.c==null){x=1
break}s.n(new B.dlA(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Ab,w)},
zY(d){return this.d3e(!0)},
d3e(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$zY=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.k4
if(k!=null){v=k
x=1
break}p=r.d
o=r.dx
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.KU(p.a,!0,n)
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
KU(d,e,f){return this.d3l(d,!0,f)},
d3l(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$KU=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.ch
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.OQ(d,f),$async$KU)
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
return A.c(A.eC(C.D3,null,l),$async$KU)
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
return A.c(s.XO(),$async$KU)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$KU,w)},
bMF(){var x=0,w=A.l(y.N),v,u=this,t
var $async$bMF=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gcgi()
v=B.Ci(new B.dlm(u),u.gcdk(),new B.dln(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bMF,w)},
apT(){var x=0,w=A.l(y.H),v=this
var $async$apT=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aaw(new B.dlg(),A.dG([v.gcgi(),v.gcdk()],y.N)),$async$apT)
case 2:return A.j(null,w)}})
return A.k($async$apT,w)},
bMG(){var x=0,w=A.l(y.N),v,u=this
var $async$bMG=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Ci(new B.dlo(u),null,new B.dlp(),u.gciW())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bMG,w)},
XO(){var x=0,w=A.l(y.H),v=this
var $async$XO=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.aaw(new B.dlh(),A.dG([v.gciW()],y.N)),$async$XO)
case 2:return A.j(null,w)}})
return A.k($async$XO,w)},
bq1(d){var x=A.bDe(d),w=x==null?null:C.c.F(x)
return w==null||w.length===0?null:w},
bOf(d){var x=this
x.fx=d
x.fr=x.dy=x.dx=x.db=null
x.k3=x.k2=x.id=x.go=x.fy=!1
x.ok=null},
gcgi(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.e_6(D.Q6,this.fx,"product-"+x)},
gcdk(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e_6(D.Q6,this.fx,x)},
gciW(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.e_6(D.aLp,this.fx,x)},
cen(d){var x,w=Date.now(),v=C.h.jJ($.oX().mD(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
cd9(d){var x=B.dN0(d)
if(x!=null)return x
return d==null||C.c.F(d).length===0?null:D.jc},
btd(d,e){var x,w=d.a
if(w===401)return D.jb
x=B.dN0(d.b)
if(x!=null)return x
if(w===404)return D.h5
return e},
dkq(d,e){switch(e){case D.jb:return d.galL()
case D.rR:return d.gWe()
case D.rS:return d.gW4()
case D.rT:return d.gWc()
case D.rU:return d.gW7()
case D.rV:return d.gW3()
case D.x3:return d.gW9()
case D.h5:return d.gJQ()
case D.Ei:return d.gW5()
case D.Q7:return d.galO()
case D.jc:return d.gW1()
case D.x2:return d.gW6()
case D.ih:return d.galP()
case null:case void 0:return null}},
bsJ(d){return this.ddZ(d)},
ddZ(d){var x=0,w=A.l(y.h),v,u=this,t,s,r
var $async$bsJ=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=u.x
r===$&&A.e()
if(r.f!=null)t=u.gE4()
else t=u.gfZ()&&u.ghr()
if(!t){v=null
x=1
break}x=3
return A.c(u.A6(d),$async$bsJ)
case 3:s=f
if(r.f!=null)r=u.gE4()
else r=u.gfZ()&&u.ghr()
if(!r){v=null
x=1
break}v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bsJ,w)},
A6(d){return this.d9d(d)},
d9d(c0){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$A6=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b3=c0.i(0,"type")
b4=b3==null?null:J.as(b3)
if(b4==null){v=null
x=1
break}if(b4==="GO_BACK"){s.ard()
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
return A.c(k.avH(A.b8(c0.i(0,"operationId"))),$async$A6)
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
if(p!=null)A.aM(p,!1).f.aK(G.oJ,y.X)
v=null
x=1
break
case 10:p=s.c
if(p!=null)A.aM(p,!1).f.aK(N.AP,y.X)
v=null
x=1
break
case 11:p=s.c
if(p!=null)A.aM(p,!1).f.aK(O.qr,y.X)
v=null
x=1
break
case 12:u=26
p=s.x
p===$&&A.e()
if(p.f!=null)a5=A.a5O(c0.i(0,"betIndex"),4)
else{b3=A.mg(c0.i(0,"betIndex"))
a5=b3==null?null:C.k.da(b3)}o=a5
a6=A.mg(c0.i(0,"betAmount"))
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
return A.c(p.Dg(n,o,A.b3(c0.i(0,"clientRoundId")),a8,b3,a7,a9),$async$A6)
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
p=A.mg(J.ax(g,"balance"))
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
return A.c(s.YI(),$async$A6)
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
p=A.mg(c0.i(0,"page"))
b1=p==null?null:C.k.da(p)
a0=b1==null?1:b1
p=A.mg(c0.i(0,"size"))
b2=p==null?null:C.k.da(p)
a1=b2==null?10:b2
p=s.x
p===$&&A.e()
x=44
return A.c(p.acB(a0,a1),$async$A6)
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
if(w!=null)w.T(x.gchJ())
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
return A.bN(A.kv(s,s,s,!0,!0,s,s,1,s,s,s,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,A.d(x==null?"":x,s,s,s,s,s,s,s,s,s),s,s,s,1,s,!0),s,new A.dA(!0,!0,!0,!0,C.K,!1,A.aK(A.b5(A.w(A.a([A.d(r.gWf(),s,s,s,s,s,s,C.aH,s,s),C.a8,A.c0(A.d(r.gym(),s,s,s,s,s,s,s,s,s),D.c_7,new B.dlW(t,d),s)],y.p),C.l,s,C.e,C.I,0,C.j),C.q,s,C.w,s,s,C.aW,s,s,C.y),s,s,s),s),s,s,s,s,s)}w=t.f
x=t.a.d
if(x!=null){v=t.x
v===$&&A.e()
v=v.f!=null}else v=!1
if(v){r=t.gbuE()
v=t.y
v.toString
return new B.ag_(x,r,v,new B.dlX(t),t.gdl9(),s)}x=y.p
v=A.a([],x)
u=w==null
if(!u)C.d.B(v,A.a([w,A.es(0,A.hM(C.bE,s,C.w,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbLx(),s,s,s,s,s,s,!1,C.c5),108,s,0,s,s,75)],x))
else v.push(t.cRa(d))
if(u)v.push(new A.dA(!0,!0,!0,!0,C.K,!1,new A.cc(C.hs,s,s,A.aQ(s,s,s,s,s,D.aPR,s,s,t.gbLx(),s,s,s,s,r.giX(),s),s),s))
return A.bN(s,D.auq,new A.cT(C.aY,s,C.aT,C.q,v,s),s,s,s,s,s)},
cRa(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.b,y.J)
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
if(s){u=e.fy?a0.gJO():a0.gW2()
if(e.fy){a0=a0.gJO()
r=A.t(a1).ok.y
a0=new A.J(C.aW,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.G.A(0.78)),C.aH,d,d),d)}else a0=D.bDC
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbVQ())===!0
else r=!1
p=e.k2
l=e.k3
k=u?d:w.b
u=u?d:w.c
j=e.dy==null
i=e.ok
h=new B.byT(r,p,l,k===!0,u===!0,!j,i)
g=e.dkq(a0,i)
if(e.fy)f=a0.gJO()
else f=j?d:a0.galI()
u=x==null?d:x.b
a0=u==null?a0.galM():u
u=g==null
r=u?f:g
return new B.aEf(a0,h,q,m,r,!u,!t,new B.dl1(e,h),new B.dl2(e),d)},
dcR(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aM(x,!1).f.aK(C.cV,y.X)
return
case 2:w.asH()
return
case 3:x=w.c
x.toString
A.aM(x,!1).f.aK(G.oJ,y.X)
return
case 4:w.vi()
return
case 5:w.Ab()
return
case 6:w.bO0()
return
case 0:return}},
asH(){var x=0,w=A.l(y.H),v,u=this,t
var $async$asH=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aK(C.oj,y.X),$async$asH)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bO0(),$async$asH)
case 4:case 1:return A.j(v,w)}})
return A.k($async$asH,w)},
ard(){var x=0,w=A.l(y.H),v,u=this
var $async$ard=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.Zw(),$async$ard)
case 3:case 1:return A.j(v,w)}})
return A.k($async$ard,w)},
Zw(){var x=0,w=A.l(y.H),v,u=this,t
var $async$Zw=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.go?3:4
break
case 3:x=5
return A.c(u.zY(!0),$async$Zw)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.ac(t,!1).GH(),$async$Zw)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aM(t,!1).f.iy("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$Zw,w)},
c5X(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ac
u=b.G.window.navigator.userAgent
x=$.emK()
if(x.b.test(u)){u=w.x
u===$&&A.e()
u=u.f==null}else u=!1
if(u){$.am.y2$.push(new B.dl4(w,v,t))
return C.Ae}u=w.cas(t,Date.now())
x=w.x
x===$&&A.e()
x=x.f!=null?w.as:null
return new B.agp(u,x,w.gdy8(),null)},
cas(d,e){var x,w="/games/"+d,v=C.c.t(w,"?")?"&":"?",u=this.x
u===$&&A.e()
x=u.f!=null?"&v2host=1":""
return w+v+"flutter=1"+x+"&_ts="+e},
dy9(){new B.dlL(this).$0()}}
B.aEf.prototype={
u(d){var x=A.f(d,C.b,y.J)
x.toString
return new A.dA(!0,!0,!0,!0,C.K,!1,A.da(new B.byU(this,x,A.t(d),this.d5k(x))),null)},
d5k(d){switch(this.d.gqq().a){case 1:return d.gJP()
case 2:return d.gQs()
case 3:return d.gWb()
case 4:return d.gWa()
case 5:return d.gwK()
case 6:return d.galK()
case 0:return null}}}
B.ajf.prototype={
u(d){var x=null,w=A.t(d).ok.z,v=w==null,u=v?x:w.a1(C.G.A(0.58))
u=A.R(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aW(C.G,C.T)
return new A.J(T.eH,A.z(A.a([u,C.ai,new A.ed(1,C.bd,A.d(this.d,x,x,x,x,x,v,C.jE,x,x),x)],y.p),C.m,x,C.e,C.f,0,x,x),x)}}
B.aEj.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aEj&&e.a===this.a
else x=!0
return x},
gj(d){var x=C.c.gj(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
v(){var x=A.r(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["B<~>()","~()","B<~>(y)","B<a1<n,@>?>(a1<n,@>)"])
B.bz9.prototype={
$1(d){return C.c.cm(C.h.jJ(d,16),2,"0")},
$S:43}
B.djD.prototype={
$0(){return this.a.ghD()},
$S:1}
B.djE.prototype={
$1(d){var x=this.a
if(x.ghD())x.tz(x.gbuR())
else x.ciZ()},
$S:2}
B.djv.prototype={
$1(d){var x=this.a
if(x.gf7()&&this.b.c!=null)this.b.hg(x)},
$S:2}
B.djl.prototype={
$0(){var x=this.a
x.at=!0
x.as=!1
x.tn()
x.e=x.x=x.w=x.r=null},
$S:0}
B.djC.prototype={
$0(){var x=this.a
x.ax=this.b===C.cx
x.as=!1
x.tn()},
$S:0}
B.djw.prototype={
$0(){var x=this.a
x.as=!0
x.CW=x.ch=null},
$S:0}
B.djx.prototype={
$0(){return this.a.c9B(this.b)},
$S:0}
B.djy.prototype={
$0(){return this.a.as=!1},
$S:0}
B.djs.prototype={
$0(){return this.a.ghD()},
$S:1}
B.djt.prototype={
$0(){return this.a.ghD()},
$S:1}
B.dju.prototype={
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
x=x==null?s:F.jD.t(0,x.a)}if(x!==!0){x=r.x
w=x==null
if(w)v=s
else{v=x.b
v=v==null?s:v.b}if(v!==!0){if(w)x=s
else{x=x.b
x=x==null?s:x.f}x=x!=null}else x=u}else x=u}else x=u
else x=u
if(x)r.tn()
q=q.c
if(q!=null)r.c9B(q)},
$S:0}
B.djg.prototype={
$1(d){var x,w,v,u=this,t=null,s=A.f(d,C.b,y.J)
s.toString
x=A.d(u.b,t,t,t,t,t,t,t,t,t)
w=A.d(u.c,t,t,t,t,t,t,t,t,t)
v=u.d
return A.be(A.a([A.aF(A.d(s.gco(),t,t,t,t,t,t,t,t,t),t,t,t,new B.dje(v),t,t),A.c0(A.d(s.gju(),t,t,t,t,t,t,t,t,t),D.bXZ,new B.djf(u.a,u.e,u.f,v),t)],y.p),t,t,w,t,t,!1,t,x)},
$S:6}
B.dje.prototype={
$0(){return this.a.af(!1)},
$S:0}
B.djf.prototype={
$0(){var x=this,w=x.a
if(w.a.e.gM()&&w.ax&&x.b.an().gM()&&x.c===w.ay)x.d.af(!0)},
$S:0}
B.djd.prototype={
$1(d){return this.cyl(d)},
cyl(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
g=h.e
f=h.r
if(g!=null)m=h.w==null&&f==null
else m=!0
if(m)throw A.o(new E.YQ())
m=h.w
l=m==null?null:m.a
if(l==null){m=B.e5z()
k=h.a.c
j=g.e
l=E.e5u(f.a,f.z,j,m,k)}r=l
m=h.c
m.toString
m=A.f(m,C.b,y.J)
x=3
return A.c(h.atT(d,m.gND(),m.ace(r.c+" USDT",r.e)),$async$$1)
case 3:if(!a1){x=1
break}if(!h.ghD()||d!==h.ay)A.W(C.ao)
u=5
x=8
return A.c(g.bYw(r),$async$$1)
case 8:q=a1
if(!h.ghD()||d!==h.ay)A.W(C.ao)
h.n(new B.djb(h,q))
u=2
x=7
break
case 5:u=4
e=t.pop()
p=A.u(e)
o=A.aO(e)
if(!h.ghD()||d!==h.ay)A.W(C.ao)
x=9
return A.c(g.e1a(),$async$$1)
case 9:n=a1
if(!h.ghD()||d!==h.ay)A.W(C.ao)
h.n(new B.djc(h,n))
A.C0(p,o)
x=7
break
case 4:x=2
break
case 7:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:67}
B.djb.prototype={
$0(){var x=this.a
x.w=this.b
x.tn()},
$S:0}
B.djc.prototype={
$0(){var x=this.a
x.w=this.b
x.tn()},
$S:0}
B.dj8.prototype={
$1(d){return this.cyk(d)},
cyk(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.a
s=t.e
r=t.w
if(s==null||r==null){x=1
break}x=3
return A.c(s.dJ1(r.a),$async$$1)
case 3:if(!t.ghD()||d!==t.ay)A.W(C.ao)
if(!t.ghD()||d!==t.ay)A.W(C.ao)
t.n(new B.dj7(t))
x=4
return A.c(t.vk(d),$async$$1)
case 4:case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.dj7.prototype={
$0(){return this.a.w=null},
$S:0}
B.djr.prototype={
$1(d){return this.cyo(d)},
cyo(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:l=u.a
k=l.e
if(k==null)throw A.o(new E.Ck())
t=l.c
t.toString
t=A.f(t,C.b,y.J)
t.toString
x=3
return A.c(k.cvh(),$async$$1)
case 3:s=f
if(!l.ghD()||d!==l.ay)A.W(C.ao)
l.n(new B.djn(l,s))
r=s==null
if(!r){q=s.b
p=(q==null?null:F.jD.t(0,q.a))!==!0}else p=!1
x=p?4:5
break
case 4:x=6
return A.c(l.atT(d,t.gU7(),t.gacg()),$async$$1)
case 6:if(!f){x=1
break}case 5:if(r)t=null
else{t=s.b
t=t==null?null:F.jD.t(0,t.a)}x=t===!0?7:8
break
case 7:x=9
return A.c(k.dJ0(s.a),$async$$1)
case 9:if(!l.ghD()||d!==l.ay)A.W(C.ao)
case 8:if(p)o=s.a
else{t=B.e5z()
r=l.a.c
q=k.e
t=E.e_7(t)
r=E.vB(r)
o=new E.aax(t,E.dHC(q),r)}if(!l.ghD()||d!==l.ay)A.W(C.ao)
l.n(new B.djo(l,o))
x=10
return A.c(k.dXr(o,p),$async$$1)
case 10:n=f
if(!l.ghD()||d!==l.ay)A.W(C.ao)
l.n(new B.djp(l,n))
t=l.z
if(t!=null)t.a8()
m=n.b.dm(new A.aE(Date.now(),0,!1).a2())
t=m.a<0?C.b_:m
l.z=A.dt(t,new B.djq(l,n))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.djn.prototype={
$0(){this.a.x=this.b},
$S:0}
B.djo.prototype={
$0(){var x=this.a
x.tn()
x.x=new E.KZ(this.b,null)},
$S:0}
B.djp.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.djq.prototype={
$0(){var x=this.a
if(x.ghD()&&x.y===this.b)x.n(new B.djm(x))},
$S:0}
B.djm.prototype={
$0(){var x=this.a
x.tn()
x.ch=D.Kt},
$S:0}
B.djk.prototype={
$1(d){return this.cyn(d)},
cyn(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:p=u.a
o=p.e
n=p.y
if(o==null||n==null)throw A.o(new E.Ck())
x=3
return A.c(p.vk(d),$async$$1)
case 3:if(!p.ghD()||d!==p.ay)A.W(C.ao)
t=p.x
s=t==null?null:t.b
if(p.y!==n||s==null||s.a!=="ACTIVE"||s.b||s.f!=null||!s.c.i1(new A.aE(Date.now(),0,!1).a2())||!n.b.i1(new A.aE(Date.now(),0,!1).a2())){if(!p.ghD()||d!==p.ay)A.W(C.ao)
p.n(new B.djj(p,t))
x=1
break}if(!p.ghD()||d!==p.ay)A.W(C.ao)
p.n(p.gc6U())
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
B.djj.prototype={
$0(){var x=this.a
x.tn()
x.x=this.b
if(x.gbKe()==null&&x.gc8V()==null)x.ch=D.Kt},
$S:0}
B.dji.prototype={
$1(d){return this.cym(d)},
cym(d){var x=0,w=A.l(y.H),v,u=this,t,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=u.a
r=s.e
q=s.x
if(r==null||q==null){x=1
break}x=3
return A.c(r.dSQ(q.a),$async$$1)
case 3:t=f
if(!s.ghD()||d!==s.ay)A.W(C.ao)
s.n(new B.djh(s,q,t))
case 1:return A.j(v,w)}})
return A.k($async$$1,w)},
$S:67}
B.djh.prototype={
$0(){var x=this.a
x.tn()
x.x=new E.KZ(this.b.a,this.c)},
$S:0}
B.djz.prototype={
$0(){return this.a.a_u(C.oj)},
$S:3}
B.djA.prototype={
$0(){return this.a.a_u(G.oJ)},
$S:3}
B.djB.prototype={
$0(){var x=this.a;++x.ay
x.tn()
x.a.e_G()},
$S:0}
B.dj9.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dja.prototype={
$0(){this.a.$0()
return null},
$S:0}
B.dNv.prototype={
$1(d){var x,w=this,v=A.ii(d,"MessageEvent")
if(!v)return
if(!J.p(d.origin,w.a))return
v=w.b.$0()
if(J.p(v,!1)||!B.dZc(d,w.c))return
x=A.FC(d.data)
if(y.f.b(x)&&J.p(x.i(0,"action"),"slotGameGoBack"))w.d.$0()},
$S:10}
B.dNu.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dNw.prototype={
$0(){if(this.a.a){var x=this.b.$0()
if(x==null)x=!0}else x=!1
return x},
$S:1}
B.dNy.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=A.ii(d,"MessageEvent")
if(!q)return
q=r.a
if(!J.p(d.origin,q))return
x=r.b
if(!x.$0()||!B.dZc(d,r.c))return
w=A.FC(d.data)
if(!y.f.b(w))return
v=A.r(y.N,y.z)
for(u=w.gee(),u=u.gap(u);u.G();){t=u.gR()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.ar("type"))return
new B.dNz(r.d,v,x,d,r.c,q).$0()},
$S:10}
B.dNz.prototype={
$0(){var x=0,w=A.l(y.a),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$$0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
m=s.b
l=s.a.$1(m)
x=7
return A.c(y.u.b(l)?l:A.fN(l,y.h),$async$$0)
case 7:r=e
if(r!=null&&s.c.$0()&&B.dZc(s.d,s.e)){q=m.i(0,"requestId")
p=A.hx(r,y.N,y.z)
if(typeof q=="string"&&q.length!==0&&q.length<=128)J.dq(p,"requestId",q)
o=A.bF(p)
p=s.e
if(p!=null){B.dIA(o,s.f,p)
x=1
break}n=s.d.source
p=n!=null&&n!=null&&A.ii(n,"Object")
k=s.f
if(p){A.CA(n,"postMessage",o,k,y.X)
B.dIA(o,k,null)}else{B.dIA(o,k,null)
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
B.dNx.prototype={
$0(){this.a.a=!1
b.G.window.removeEventListener("message",this.b)},
$S:0}
B.dl_.prototype={
$1(d){return this.a.$0()},
$S:10}
B.dl0.prototype={
$1(d){var x=this.a.e
x===$&&A.e()
return x},
$S:601}
B.dlZ.prototype={
$0(){return this.a.gfZ()},
$S:1}
B.dm_.prototype={
$0(){return this.a.gfZ()},
$S:1}
B.dm0.prototype={
$0(){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)x=x.gE4()
else x=x.gfZ()&&x.ghr()
return x},
$S:1}
B.dm1.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.e()
if(w.f!=null)w=x.gE4()
else w=x.gfZ()&&x.ghr()
if(w)x.Yu()},
$S:2}
B.dlY.prototype={
$1(d){return this.a.chK()},
$S:2}
B.dlK.prototype={
$0(){var x=this.a
x.Q=!0
x.f=x.CW=null},
$S:0}
B.dlj.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dlk.prototype={
$0(){return this.a.CW=0},
$S:0}
B.dl3.prototype={
$0(){return this.b.CW=this.a.a},
$S:0}
B.dll.prototype={
$0(){return null},
$S:16}
B.dli.prototype={
$0(){var x=A.mg(this.b.i(0,"balance"))
if(x==null)x=null
return this.a.CW=x},
$S:0}
B.dlq.prototype={
$0(){var x=this.a
x.k2=!1
x.e=this.b
x.d=null
x.ok=D.h5},
$S:0}
B.dlr.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.zT(w.b,w.gcr_(),"Telegram Mini App",null,C.iH,4279724935,"\ud83c\udfae",null,!1)
x.k2=!0
x.ok=null},
$S:0}
B.dls.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=x.btd(this.b,D.jc)},
$S:0}
B.dlt.prototype={
$0(){var x=this.a
x.k2=!1
x.d=x.e=null
x.ok=D.jc},
$S:0}
B.dl5.prototype={
$0(){var x=this.a
x.k2=!1
if(this.b==null)x.ok=D.h5},
$S:0}
B.dl6.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=D.h5},
$S:0}
B.dl7.prototype={
$0(){var x=this.a
x.k2=!0
x.fr=x.dy=x.ok=null
x.id=x.go=x.fy=!1},
$S:0}
B.dl8.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jb},
$S:0}
B.dl9.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jb},
$S:0}
B.dla.prototype={
$0(){var x=this.a
x.k2=!1
x.db=null
x.ok=this.b==null?D.jc:D.h5},
$S:0}
B.dlb.prototype={
$0(){var x,w=this.a
w.k2=!1
x=this.b
w.ok=x==null?D.jc:x},
$S:0}
B.dlc.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=this.b?null:D.ih},
$S:0}
B.dld.prototype={
$0(){var x,w,v=this.a
v.k2=!1
x=this.b
w=v.cd9(x.r)
if(w==null)x=x.b===!0?null:D.jc
else x=w
v.ok=x},
$S:0}
B.dle.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.btd(this.b,D.jc)},
$S:0}
B.dlf.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jc},
$S:0}
B.dlB.prototype={
$0(){return this.a.ok=D.h5},
$S:0}
B.dlC.prototype={
$0(){return this.a.ok=D.h5},
$S:0}
B.dlD.prototype={
$0(){var x=this.a
x.k3=!0
x.ok=null},
$S:0}
B.dlE.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jb},
$S:0}
B.dlF.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.jb},
$S:0}
B.dlG.prototype={
$0(){return this.a.k3=!1},
$S:0}
B.dlH.prototype={
$0(){var x,w=this.a
w.k3=!1
x=this.b
w.ok=(x==null?null:x.b)===C.Qd?D.rU:D.Ei},
$S:0}
B.dlI.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=this.b},
$S:0}
B.dlJ.prototype={
$0(){var x=this.a
x.k3=!1
x.ok=D.x2},
$S:0}
B.dlN.prototype={
$0(){var x=this.a
x.k3=x.k2=!1
x.fr=x.dy=null
x.ok=D.ih},
$S:0}
B.dlO.prototype={
$0(){var x=this.a
x.k2=!0
x.k3=!1
x.fr=x.dy=x.ok=null},
$S:0}
B.dlP.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.jb},
$S:0}
B.dlQ.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ih},
$S:0}
B.dlR.prototype={
$0(){var x=this.a
x.k2=!1
x.fr=x.dy=x.dx=null
x.ok=D.ih},
$S:0}
B.dlS.prototype={
$0(){var x=this.a
x.dy=this.b
x.fr=this.c
x.k2=x.go=x.fy=!1},
$S:0}
B.dlT.prototype={
$0(){var x=this.a
x.f=x.c5X()
x.k2=!1},
$S:0}
B.dlU.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=x.btd(this.b,D.ih)},
$S:0}
B.dlV.prototype={
$0(){var x=this.a
x.k2=!1
x.ok=D.ih},
$S:0}
B.dlu.prototype={
$0(){return this.a.id=!0},
$S:0}
B.dlv.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ih},
$S:0}
B.dlw.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jb},
$S:0}
B.dlx.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.jb},
$S:0}
B.dly.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.go=!0},
$S:0}
B.dlz.prototype={
$0(){var x=this.a
x.fy=!0
x.id=!1},
$S:0}
B.dlA.prototype={
$0(){var x=this.a
x.fr=x.dy=null
x.id=x.go=x.fy=!1
x.ok=D.ih},
$S:0}
B.dlm.prototype={
$0(){return this.a.cen("game-access")},
$S:27}
B.dln.prototype={
$2(d,e){return $.ix().m(C.t,"game access purchase attempt persistence unavailable",d,e)},
$S:40}
B.dlg.prototype={
$2(d,e){return $.ix().m(C.t,"game access purchase attempt cleanup unavailable",d,e)},
$S:40}
B.dlo.prototype={
$0(){return this.a.cen("game-session")},
$S:27}
B.dlp.prototype={
$2(d,e){return $.ix().m(C.t,"game session attempt persistence unavailable",d,e)},
$S:40}
B.dlh.prototype={
$2(d,e){return $.ix().m(C.t,"game session attempt cleanup unavailable",d,e)},
$S:40}
B.dlW.prototype={
$0(){if(this.a.gfZ())A.aM(this.b,!1).f.gkE().hW(0,A.a([A.j0(null,null)],y.Q))},
$S:0}
B.dlX.prototype={
$0(){return this.a.gfZ()},
$S:1}
B.dl1.prototype={
$0(){return this.a.dcR(this.b.gqq())},
$S:0}
B.dl2.prototype={
$0(){this.a.bO0()
return null},
$S:0}
B.dl4.prototype={
$1(d){return this.cyp(d)},
cyp(a0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(!(g.gfZ()&&g.ghr())){x=1
break}u=4
x=7
return A.c(g.w.ik(),$async$$1)
case 7:l=a2
r=l==null?"":l
if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
k=g.CW
j=k==null
q=j?0:k
x=j?8:9
break
case 8:u=11
x=14
return A.c(g.r.i7(!0),$async$$1)
case 14:p=a2
if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
j=p
k=j==null?null:j.f
q=k==null?0:k
u=4
x=13
break
case 11:u=10
f=t.pop()
o=A.u(f)
if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
$.ix().m(C.t,"mobile fallback getProfile failed",o,null)
x=13
break
case 10:x=4
break
case 13:case 9:if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
j=b.G
j.window.localStorage.setItem("_flutter_game_jwt",r)
h=J.a65(q,4)
if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_balance",h)
h=g.x
h===$&&A.e()
h=h.bq6()
if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_api_base",h)
if(!(g.gfZ()&&g.ghr()))A.W(C.ao)
j.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=16
x=19
return A.c(g.YI(),$async$$1)
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
if(!(g.gfZ()&&g.ghr())){x=1
break}$.ix().m(C.t,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:if(g.c!=null)j=!(g.gfZ()&&g.ghr())
else j=!0
if(j){x=1
break}j=g.c
j.toString
x=20
return A.c(A.ac(j,!1).GH(),$async$$1)
case 20:if(!g.ghr()){x=1
break}g=g.cas(s.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:570}
B.dlL.prototype={
$0(){var x=0,w=A.l(y.a),v=1,u=[],t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
p=t.a
x=6
return A.c(p.v4(),$async$$0)
case 6:s=e
r=new B.dlM(p,s)
r.$0()
p=y.H
x=7
return A.c(A.eC(D.aGk,null,p),$async$$0)
case 7:r.$0()
x=8
return A.c(A.eC(D.aG2,null,p),$async$$0)
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
$S:51}
B.dlM.prototype={
$0(){var x,w=this.a,v=w.x
v===$&&A.e()
if(v.f!=null)x=w.gE4()
else x=w.gfZ()&&w.ghr()
if(!x)return
w=v.f!=null?w.as:null
B.eis(this.b,w)},
$S:0}
B.byU.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.dN(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.alG(w)
u=A.G(8)
t=A.aL(C.G.A(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aW(C.G,C.A),C.aH,k,k)],q)
if(x.x){w=j.gJN()
p=s.z
w=A.a([H.dT,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.G.A(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gWd()
if(o)p="-"
o=j.gW8()
m=x.f
if(m==null)m="-"
C.d.B(w,A.a([I.IR,new B.ajf(n,p,k),new B.ajf(o,m,k)],q))}C.d.B(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.at3:D.atR)
C.d.B(r,A.a([I.IR,A.Q(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bYN,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bh(C.l3,A.a([C.nS,A.d(w.c?j.galH():j.gW2(),k,k,k,k,k,k,C.aH,k,k)],q),C.by,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.d.B(r,A.a([D.bDE,A.c0(o,D.bUz,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gqq()!==D.rW
else w=!1
if(w)C.d.B(r,A.a([H.dT,A.aF(A.d(j.galJ(),k,k,k,k,k,k,C.aH,k,k),D.bUV,k,k,x.z,k,k)],q))
return A.b5(new A.ba(new A.ay(0,1/0,i,1/0),A.aK(A.Q(k,k,k,new A.ba(L.Mk,new A.c6(new A.S(D.asg,k,t,u,k,k,C.r),C.aw,new A.J(C.aW,A.w(r,C.ab,k,C.e,C.I,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c14,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.q,k,C.w,k,k,D.aHL,k,k,C.y)},
$S:110};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ard.prototype,"gc6U","tn",1)
x(v,"gciY","ciZ",1)
x(v,"gdyo","dyp",0)
w(v,"gbuR","vk",2)
x(v,"gc61","cW_",0)
x(v,"gcOp","cOq",0)
x(v,"gcfS","dr1",0)
x(v,"gdym","dyn",0)
x(v,"gdyj","dyk",0)
x(v=B.art.prototype,"gchJ","chK",1)
w(v,"gddY","bsJ",3)
x(v,"gbLx","ard",0)
x(v,"gdl9","Zw",0)
x(v,"gdy8","dy9",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.bt,[B.bz9,B.djE,B.djv,B.djg,B.djd,B.dj8,B.djr,B.djk,B.dji,B.dNv,B.dNy,B.dl_,B.dl0,B.dm1,B.dlY,B.dl4])
w(A.ew,[B.pe,B.Cl,B.aEe,B.Mo])
w(A.A,[B.byT,B.aEj])
w(A.K,[B.ag_,B.agp,B.E5])
w(A.U,[B.bbp,B.b7s,B.art])
v(B.ard,B.bbp)
w(A.bs,[B.djD,B.djl,B.djC,B.djw,B.djx,B.djy,B.djs,B.djt,B.dju,B.dje,B.djf,B.djb,B.djc,B.dj7,B.djn,B.djo,B.djp,B.djq,B.djm,B.djj,B.djh,B.djz,B.djA,B.djB,B.dj9,B.dja,B.dNu,B.dNw,B.dNz,B.dNx,B.dlZ,B.dm_,B.dm0,B.dlK,B.dlj,B.dlk,B.dl3,B.dll,B.dli,B.dlq,B.dlr,B.dls,B.dlt,B.dl5,B.dl6,B.dl7,B.dl8,B.dl9,B.dla,B.dlb,B.dlc,B.dld,B.dle,B.dlf,B.dlB,B.dlC,B.dlD,B.dlE,B.dlF,B.dlG,B.dlH,B.dlI,B.dlJ,B.dlN,B.dlO,B.dlP,B.dlQ,B.dlR,B.dlS,B.dlT,B.dlU,B.dlV,B.dlu,B.dlv,B.dlw,B.dlx,B.dly,B.dlz,B.dlA,B.dlm,B.dlo,B.dlW,B.dlX,B.dl1,B.dl2,B.dlL,B.dlM])
w(A.c5,[B.dln,B.dlg,B.dlp,B.dlh,B.byU])
w(A.x,[B.aEf,B.ajf])
x(B.bbp,A.em)})()
A.aY(b.typeUniverse,JSON.parse('{"ag_":{"K":[],"m":[]},"ard":{"U":["ag_"],"em":[]},"agp":{"K":[],"m":[]},"b7s":{"U":["agp"]},"E5":{"K":[],"m":[]},"art":{"U":["E5"]},"aEf":{"x":[],"m":[]},"ajf":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.F
return{J:x("bv"),u:x("B<a1<n,@>?>"),T:x("Cm"),w:x("lp"),Q:x("v<bS<A?>>"),s:x("v<n>"),p:x("v<m>"),P:x("a1<n,@>"),f:x("a1<@,@>"),a:x("b7"),A:x("L9"),N:x("n"),x:x("Tl"),r:x("fn"),E:x("e5"),O:x("N<n>"),y:x("D"),z:x("@"),S:x("y"),h:x("a1<n,@>?"),X:x("A?"),H:x("~")}})();(function constants(){D.asg=new A.a2(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.at3=new A.a2(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.atR=new A.a2(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.z)
D.auq=new A.a2(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aG2=new A.bC(175e4)
D.aGk=new A.bC(75e4)
D.aHL=new A.ar(20,64,20,24)
D.Q6=new B.aEe(0,"purchase")
D.aLp=new B.aEe(1,"session")
D.jb=new B.pe(0,"signInRequired")
D.rR=new B.pe(1,"telegramAccountNotLinked")
D.jc=new B.pe(10,"requestFailed")
D.x2=new B.pe(11,"purchaseFailed")
D.ih=new B.pe(12,"sessionFailed")
D.rS=new B.pe(2,"insufficientBalance")
D.rT=new B.pe(3,"walletInactive")
D.rU=new B.pe(4,"refundPending")
D.rV=new B.pe(5,"accessExpired")
D.x3=new B.pe(6,"accessRequired")
D.h5=new B.pe(7,"gameUnavailable")
D.Ei=new B.pe(8,"accessNotActive")
D.Q7=new B.pe(9,"sessionDenied")
D.Q8=new B.Cl(0,"none")
D.aLq=new B.Cl(1,"signIn")
D.aLr=new B.Cl(2,"bindTelegram")
D.aLs=new B.Cl(3,"topUp")
D.aLt=new B.Cl(4,"purchase")
D.aLu=new B.Cl(5,"openGame")
D.rW=new B.Cl(6,"retry")
D.aPR=new A.at(C.ke,null,C.G,null,null)
D.bnm=new A.J(C.Y,C.bV,null)
D.art=new A.ny(2.5,null,null,null,null,null,null,null,null,null)
D.bDC=new A.ad(28,28,D.art,null)
D.bDE=new A.ad(null,22,null,null)
D.bUz=new A.N("slot-game-access-primary",y.O)
D.bUV=new A.N("slot-game-access-refresh",y.O)
D.bXZ=new A.N("gameV2Confirm",y.O)
D.bY_=new A.N("gameV2Message",y.O)
D.bY0=new A.N("gameV2Page",y.O)
D.bYN=new A.N("slot-game-access-message",y.O)
D.c_7=new A.N("retiredSlotHome",y.O)
D.c14=new A.N("slot-game-access-gate",y.O)
D.afT=new B.Mo(0,"request")
D.afU=new B.Mo(1,"pending")
D.afV=new B.Mo(2,"launchPending")
D.afW=new B.Mo(3,"storage")
D.Ks=new B.Mo(4,"unavailable")
D.Kt=new B.Mo(5,"expired")})();(function staticFields(){$.aav=function(){var x=y.N
return A.r(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f30","emK",()=>A.az("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"f4a","ix",()=>A.b4("SlotGamePage"))})()};
(a=>{a["dEXolQ7yt0FVlJqw1GQHJNHsboo="]=a.current})($__dart_deferred_initializers__);