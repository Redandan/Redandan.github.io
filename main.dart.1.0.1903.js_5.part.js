((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dGW(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cx
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.Cy
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.Cz
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.vn
if(C.b.t(x,"ACCESS_EXPIRED"))return D.vo
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.CA
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hf
return null},
dn_(d,e,f){var x=e==null?null:C.b.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nT:function nT(d,e){this.a=d
this.b=e},
zO:function zO(d,e){this.a=d
this.b=e},
aye:function aye(d,e){this.a=d
this.b=e},
bjI:function bjI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
egc(d){var x=b.G,w=A.f0(new B.dbW(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dbV(w)},
egd(d){var x=b.G,w=A.f0(new B.dbY(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dbX(w)},
dno(d){B.dmk(A.bB(d),b.G.window.location.origin)},
dmk(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iw(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.b.aU(u,e))v=!A.nu(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dbW:function dbW(d,e){this.a=d
this.b=e},
dbV:function dbV(d){this.a=d},
dbY:function dbY(d,e){this.a=d
this.b=e},
dbZ:function dbZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dbX:function dbX(d){this.a=d},
adY:function adY(d,e,f){this.c=d
this.d=e
this.a=f},
aYr:function aYr(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cPe:function cPe(d){this.a=d},
cPf:function cPf(d){this.a=d},
dAA(d,e){return new B.Ge(d,e,null)},
Ge:function Ge(d,e,f){this.c=d
this.d=e
this.a=f},
anV:function anV(d,e,f,g){var _=this
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
cPy:function cPy(d,e){this.a=d
this.b=e},
cPz:function cPz(d,e){this.a=d
this.b=e},
cPA:function cPA(d){this.a=d},
cPi:function cPi(d,e){this.a=d
this.b=e},
cPj:function cPj(d,e){this.a=d
this.b=e},
cPB:function cPB(){},
cPG:function cPG(d,e){this.a=d
this.b=e},
cPH:function cPH(d,e){this.a=d
this.b=e},
cPI:function cPI(d,e){this.a=d
this.b=e},
cPJ:function cPJ(d){this.a=d},
cPl:function cPl(d,e){this.a=d
this.b=e},
cPm:function cPm(d){this.a=d},
cPn:function cPn(d){this.a=d},
cPo:function cPo(d){this.a=d},
cPp:function cPp(d){this.a=d},
cPq:function cPq(d,e){this.a=d
this.b=e},
cPr:function cPr(d,e){this.a=d
this.b=e},
cPs:function cPs(d,e){this.a=d
this.b=e},
cPt:function cPt(d,e){this.a=d
this.b=e},
cPu:function cPu(d,e){this.a=d
this.b=e},
cPv:function cPv(d){this.a=d},
cPR:function cPR(d){this.a=d},
cPS:function cPS(d){this.a=d},
cPT:function cPT(d){this.a=d},
cPU:function cPU(d){this.a=d},
cPV:function cPV(d){this.a=d},
cPW:function cPW(d){this.a=d},
cPX:function cPX(d,e){this.a=d
this.b=e},
cPY:function cPY(d,e){this.a=d
this.b=e},
cPZ:function cPZ(d){this.a=d},
cQ0:function cQ0(d){this.a=d},
cQ1:function cQ1(d){this.a=d},
cQ2:function cQ2(d){this.a=d},
cQ3:function cQ3(d){this.a=d},
cQ4:function cQ4(d){this.a=d},
cQ5:function cQ5(d,e,f){this.a=d
this.b=e
this.c=f},
cQ6:function cQ6(d){this.a=d},
cQ7:function cQ7(d,e){this.a=d
this.b=e},
cQ8:function cQ8(d){this.a=d},
cPK:function cPK(d){this.a=d},
cPL:function cPL(d){this.a=d},
cPM:function cPM(d){this.a=d},
cPN:function cPN(d){this.a=d},
cPO:function cPO(d){this.a=d},
cPP:function cPP(d){this.a=d},
cPQ:function cPQ(d){this.a=d},
cPC:function cPC(d){this.a=d},
cPD:function cPD(){},
cPw:function cPw(){},
cPE:function cPE(d){this.a=d},
cPF:function cPF(){},
cPx:function cPx(){},
cPg:function cPg(d,e){this.a=d
this.b=e},
cPh:function cPh(d){this.a=d},
cPk:function cPk(d,e,f){this.a=d
this.b=e
this.c=f},
cQ_:function cQ_(d){this.a=d},
ayf:function ayf(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjJ:function bjJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agi:function agi(d,e,f){this.c=d
this.d=e
this.a=f},
egN(d){var x,w,v=C.b.G(d)
if(v.length===0)return null
x=A.r2(v)
w=!0
if(x!=null)if(x.ge6().toLowerCase()==="https")if(x.ga12().length===0)w=x.gWx()&&x.gKk()!==443||!C.aaW.t(0,x.gmN().toLowerCase())||x.gK7().length===0
if(w)return null
return x.c9G("telegram.me")},
dck(d,e){var x=d.c?d:A.drI(A.bz(d),A.bC(d),A.c1(d),A.hB(d),A.n2(d),A.Ml(d),A.aD9(d),d.b)
return x.fe(e.a)},
efC(d,e){var x=d.U(),w=B.dck(e,C.aS)
if(B.dn8(w,x))return C.aS
return B.dn8(w.fe(288e8),x)?D.aJJ:C.aS},
dn8(d,e){return Math.abs(d.U().bS(e.U()).a)<=3e8},
e2e(d){var x
if(d==null||d.length===0)return null
x=A.dAy().j(0,d)
return(x==null?null:x.e===C.i7)===!1?x:null},
zN(d,e,f,g){var x=null
return B.dVf(d,e,f,g)},
dVf(d,e,f,a0){var x=0,w=A.m(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zN=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a84.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dHS():k).$0(),$async$zN)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a84.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.tV(s,a0),$async$zN)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a84.h(0,a0,q)
x=15
return A.c(s.eX("String",a0,q),$async$zN)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.tV(s,e),$async$zN)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.tV(s,e),$async$zN)
case 21:case 20:case 12:o=d.$0()
$.a84.h(0,a0,o)
x=22
return A.c(s.eX("String",a0,o),$async$zN)
case 22:n=a2
if(!n){k=A.b7("Game access attempt id was not persisted.")
throw A.t(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
m=A.u(g)
l=A.aH(g)
f.$2(m,l)
v=$.a84.c6(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$zN,w)},
a85(d,e){var x=null
return B.dVe(d,e)},
dVe(d,e){var x=0,w=A.m(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a85=A.i(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.dk(0)
for(p=J.aL(l);p.F();)$.a84.V(0,p.gN())
v=3
p=m
x=6
return A.c((p==null?A.dHS():p).$0(),$async$a85)
case 6:t=g
p=J.aL(l)
case 7:if(!p.F()){x=8
break}s=p.gN()
o=s
t.a.V(0,o)
x=9
return A.c($.a3q().V(0,"flutter."+o),$async$a85)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aH(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$a85,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[89]
B.nT.prototype={
Y(){return"GameAccessIssue."+this.b}}
B.zO.prototype={
Y(){return"GameAccessPrimaryAction."+this.b}}
B.aye.prototype={
Y(){return"GameAccessAttemptKind."+this.b}}
B.bjI.prototype={
gmX(){var x=this
if(x.b||x.c||!x.a)return D.PJ
if(x.f)return D.aNS
switch(x.r){case D.iz:return D.aNO
case D.Cx:return D.aNP
case D.Cy:case D.Cz:return D.aNQ
case D.vn:case D.hf:return D.PJ
case D.vo:case D.CA:case D.CB:case D.PI:case D.iA:case D.vm:return D.qF
case D.hK:return D.qF
case null:case void 0:if(x.e)return D.qF
return x.d?D.aNR:D.qF}}}
B.adY.prototype={
S(){return new B.aYr()}}
B.aYr.prototype={
a0(){var x,w,v,u=this
u.a6()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.b3()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.b3()
u.e=w
v=A.f0(new B.cPe(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b2K()
$.CE().Zx(x,new B.cPf(u),!0)},
aM(d){var x,w
this.b1(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.h()
w.src=x}},
q(){var x,w=this.f
if(w!=null){x=this.e
x===$&&A.h()
x.removeEventListener("load",w)}this.a7()},
u(d){var x=this.d
x===$&&A.h()
return A.dj6(null,C.FC,x)}}
B.Ge.prototype={
S(){var x=$.aA()
return new B.anV(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.anV.prototype={
gbwK(){var x,w=this.y
if(w===$){x=$.aA().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new A.aDq(x)}return w},
a0(){var x,w,v=this
v.a6()
x=v.a
if(x.d!=null){v.Qu()
return}w=v.d=B.e2e(x.c)
if(w==null){v.fx=!1
v.id=D.hf
return}if(!w.gbE5()){v.fx=!1
v.id=D.hf
return}if(w.e!==C.i7){v.fx=!1
v.k1=B.egc(v.gbuO())
v.k2=B.egd(v.gcOQ())
v.af5()
v.ax=v.agq()
return}},
bd(){var x,w=this
w.bV()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i7){w.fr=!0
w.f=w.bOA()}},
af5(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$af5=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hx(),$async$af5)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cPy(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.hJ().k(C.aE,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.hJ().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hh(!0),$async$af5)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cPz(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a3D(o,4))}catch(h){n=A.u(h)
$.hJ().k(C.aE,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cPA(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$af5,w)},
xP(){return this.ctU()},
ctU(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$xP=A.i(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hx(),$async$xP)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cPi(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.hJ().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.hJ().k(C.aE,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.pQ(),$async$xP)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cPj(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.Z(a0.b,4))}catch(a5){n=A.u(a5)
$.hJ().k(C.aE,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.hJ().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.pQ(),$async$xP)
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
$.hJ().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.afk(),$async$xP)
case 23:f=a7
e=A.o(y.N,y.z)
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
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$xP,w)},
afk(){var x=0,w=A.m(y.h),v,u=this,t,s
var $async$afk=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.agq()
v=t.wF(C.Oo,new B.cPB())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$afk,w)},
agq(){var x=0,w=A.m(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$agq=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.baR(l.a),$async$agq)
case 7:q=e
if(J.r(J.aE(q,"success"),!0)&&y.f.b(J.aE(q,"data"))){p=A.uA(y.f.a(J.aE(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aZ.jS(p,null))}catch(j){o=A.u(j)
$.hJ().k(C.aE,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.hJ().k(C.q,"_getSlotRtpData failed",n,null)
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
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$agq,w)},
Qu(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Qu=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbwK().n7(l),$async$Qu)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cPG(s,r))
x=1
break}s.p(new B.cPH(s,r))
x=8
return A.c(s.ow(),$async$Qu)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l5){q=m
$.hJ().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cPI(s,q))}else{p=m
o=A.aH(k)
m=$.hJ()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cPJ(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Qu,w)},
ow(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$ow=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i7){if(s.c==null){x=1
break}s.p(new B.cPl(s,f))
x=1
break}if(!f.gbE5()){if(s.c==null){x=1
break}s.p(new B.cPm(s))
x=1
break}if(s.c!=null)s.p(new B.cPn(s))
u=4
x=7
return A.c(s.w.hx(),$async$ow)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cPo(s))
x=1
break}if(s.c==null){x=1
break}q=s.bcc(r)
if(q==null){s.p(new B.cPp(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbwK().a.BB(d),$async$ow)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cPq(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bUY(p.r)
if(p.b!==!0||o!=null){s.p(new B.cPr(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cPs(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hK)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.d8x(!0),$async$ow)
case 13:case 12:x=1
break
case 10:s.p(new B.cPt(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l5){m=k
$.hJ().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cPu(s,m))}else{l=k
$.hJ().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cPv(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ow,w)},
bwW(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.Qu()
return w.ow()},
q6(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$q6=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i7){if(s.c==null){x=1
break}if(h)s.p(new B.cPR(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cPS(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.ow(),$async$q6)
case 5:x=1
break
case 4:s.p(new B.cPT(s))
u=7
x=10
return A.c(s.w.hx(),$async$q6)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cPU(s))
x=1
break}if(s.c==null){x=1
break}o=s.bcc(p)
if(o==null){s.p(new B.cPV(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bx8(o)
x=13
return A.c(s.ow(),$async$q6)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.bvU(),$async$q6)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbwK().a.Ky(q,new A.a86(n)),$async$q6)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.PN?16:17
break
case 16:x=18
return A.c(s.aej(),$async$q6)
case 18:if(s.c==null){x=1
break}s.p(new B.cPW(s))
x=19
return A.c(s.ow(),$async$q6)
case 19:x=1
break
case 17:s.p(new B.cPX(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l5?20:22
break
case 20:l=h
$.hJ().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bf6(l,D.vm)
f=l.b.toUpperCase()
x=k===D.vo||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aej(),$async$q6)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cPY(s,k))
x=21
break
case 22:j=h
$.hJ().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cPZ(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$q6,w)},
lG(d,e){return this.d8y(d,!0)},
d8x(d){return this.lG(!0,d)},
d8y(c0,c1){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$lG=A.i(function(c2,c3){if(c2===1){t.push(c3)
x=u}for(;;)switch(x){case 0:b7=s.d
if(s.c==null||b7==null){x=1
break}r=s.cy
b2=s.ay
if(b7.e===C.i7){b3=b2==null
b4=!0
if((b3?null:b2.b)===!0)if((b3?null:b2.c)===!0)if((b3?null:b2.w)!=null){b3=b2.w
b3.toString
b3=b3<=0}else b3=b4
else b3=b4
else b3=b4}else b3=!1
if(b3){s.p(new B.cQ0(s))
x=1
break}q=b2==null?null:b2.w
s.p(new B.cQ1(s))
u=4
x=7
return A.c(s.w.hx(),$async$lG)
case 7:p=c3
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bcc(p)
if(o==null){s.p(new B.cQ2(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bx8(o)
x=10
return A.c(s.ow(),$async$lG)
case 10:x=1
break
case 9:s.cy=o
b9=s.ch!=null
if(b9){x=11
break}else c3=b9
x=12
break
case 11:x=13
return A.c(s.uQ(!0),$async$lG)
case 13:c3=!c3
case 12:if(c3){if(s.c==null){x=1
break}s.p(new B.cQ3(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bvV(),$async$lG)
case 14:n=c3
if(s.c==null){x=1
break}x=15
return A.c(s.z.Dh(b7.a,new A.a87(n)),$async$lG)
case 15:m=c3
l=new A.az(Date.now(),0,!1).U()
k=m==null?null:B.egN(m.w)
j=m==null?C.aS:B.efC(l,m.f)
i=m==null?null:B.dck(m.f,j)
h=m==null?null:B.dck(m.r,j)
g=m==null?null:B.dck(m.x,j)
b3=m
f=(b3==null?null:b3.e)===C.PP
e=m!=null&&m.a>0
d=m!=null&&m.b>0&&m.b===q
a0=m!=null&&m.c===b7.a
b3=m
b3=b3==null?null:b3.d
b4=n
a1=b3==null?b4==null:b3===b4
a2=i!=null&&B.dn8(i,l)
b3=h
a3=(b3==null?null:b3.iR(l))===!0
b3=g
a4=(b3==null?null:b3.iR(l))===!0
a5=g!=null&&h!=null&&!g.iR(h)
a6=k!=null
a7=f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5&&a6
x=!a7?16:17
break
case 16:a8=A.b([],y.s)
if(!f)J.bV(a8,"status")
if(!e)J.bV(a8,"session_id")
if(!d)J.bV(a8,"entitlement")
if(!a0)J.bV(a8,"game_key")
if(!a1)J.bV(a8,"client_session")
if(!a2)J.bV(a8,"session_started_at")
if(!a3)J.bV(a8,"session_expiry")
if(!a4)J.bV(a8,"launch_expiry")
if(!a5)J.bV(a8,"launch_expiry_bound")
if(!a6)J.bV(a8,"launch_url_untrusted")
a9=a8
$.hJ().k(C.q,"game session response rejected: "+J.a3A(a9,","),null,null)
x=f&&e&&a0?18:19
break
case 18:x=20
return A.c(s.E5(b7.a,!0,m.a),$async$lG)
case 20:case 19:x=21
return A.c(s.Pj(),$async$lG)
case 21:if(s.c==null){x=1
break}s.p(new B.cQ4(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.uQ(!0),$async$lG)
case 24:x=1
break
case 23:x=b7.e===C.i7?25:26
break
case 25:s.p(new B.cQ5(s,k,g))
x=27
return A.c(s.uY(),$async$lG)
case 27:x=1
break
case 26:s.p(new B.cQ6(s))
u=2
x=6
break
case 4:u=3
b8=t.pop()
a8=A.u(b8)
x=a8 instanceof A.l5?28:30
break
case 28:b0=a8
$.hJ().k(C.q,"start game session failed: "+b0.a+" "+b0.b,null,null)
if(c0){b6=b0.b.toUpperCase()
a8=C.b.t(b6,"SESSION_ENDED")||C.b.t(b6,"SESSION_EXPIRED")||C.b.t(b6,"SESSION_IDENTITY_MISMATCH")}else a8=!1
x=a8?31:32
break
case 31:x=33
return A.c(s.Pj(),$async$lG)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lG(!1,!0),$async$lG)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cQ7(s,b0))
x=29
break
case 30:b1=a8
$.hJ().k(C.q,"start game session failed",b1,null)
if(s.c==null){x=1
break}s.p(new B.cQ8(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$lG,w)},
uY(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uY=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cPK(s))
x=!k.iR(new A.az(Date.now(),0,!1).U())?3:4
break
case 3:x=5
return A.c(s.uQ(!0),$async$uY)
case 5:if(s.c==null){x=1
break}s.p(new B.cPL(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hx(),$async$uY)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aH(f)
h=$.hJ()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cPM(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bcc(q)
if(g==null){s.p(new B.cPN(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bx8(g)
x=13
return A.c(s.ow(),$async$uY)
case 13:x=1
break
case 12:u=15
s.p(new B.cPO(s))
x=18
return A.c(A.yB(r,C.oj,"_self"),$async$uY)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cPP(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aH(e)
h=$.hJ()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.uQ(!0),$async$uY)
case 19:if(s.c==null){x=1
break}s.p(new B.cPQ(s))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$uY,w)},
uQ(d){return this.cEf(!0)},
cEf(d){var x=0,w=A.m(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$uQ=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.E5(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$uQ)
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
case 5:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$uQ,w)},
E5(d,e,f){return this.cEm(d,!0,f)},
cEm(d,e,f){var x=0,w=A.m(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$E5=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.HB(d,f),$async$E5)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.hJ().k(C.aE,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.dd(C.Bl,null,l),$async$E5)
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
return A.c(s.Pj(),$async$E5)
case 15:case 14:v=p
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$E5,w)},
bvU(){var x=0,w=A.m(y.N),v,u=this,t
var $async$bvU=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.gbXA()
v=B.zN(new B.cPC(u),u.gbV6(),new B.cPD(),t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bvU,w)},
aej(){var x=0,w=A.m(y.H),v=this
var $async$aej=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a85(new B.cPw(),A.e6([v.gbXA(),v.gbV6()],y.N)),$async$aej)
case 2:return A.k(null,w)}})
return A.l($async$aej,w)},
bvV(){var x=0,w=A.m(y.N),v,u=this
var $async$bvV=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:v=B.zN(new B.cPE(u),null,new B.cPF(),u.gbZC())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bvV,w)},
Pj(){var x=0,w=A.m(y.H),v=this
var $async$Pj=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a85(new B.cPx(),A.e6([v.gbZC()],y.N)),$async$Pj)
case 2:return A.k(null,w)}})
return A.l($async$Pj,w)},
bcc(d){var x=A.dv4(d),w=x==null?null:C.b.G(x)
return w==null||w.length===0?null:w},
bx8(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gbXA(){var x=this.a.d
x=A.a(x==null?"unknown":x)
return B.dn_(D.PH,this.cy,"product-"+x)},
gbV6(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dn_(D.PH,this.cy,x)},
gbZC(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dn_(D.aNN,this.cy,x)},
bVW(d){var x,w=Date.now(),v=C.d.n_($.b2A().Jo(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.a(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bUY(d){var x=B.dGW(d)
if(x!=null)return x
return d==null||C.b.G(d).length===0?null:D.iA},
bf6(d,e){var x,w=d.a
if(w===401)return D.iz
x=B.dGW(d.b)
if(x!=null)return x
if(w===404)return D.hf
return e},
cUF(d,e){switch(e){case D.iz:return d.gaa9()
case D.Cx:return d.gaaj()
case D.Cy:return d.ga9Z()
case D.Cz:return d.gaae()
case D.vn:return d.gaa5()
case D.vo:return d.ga9Y()
case D.CA:return d.gaa7()
case D.hf:return d.gaac()
case D.CB:return d.gaa_()
case D.PI:return d.gaag()
case D.iA:return d.ga9X()
case D.vm:return d.gaa2()
case D.hK:return d.gaah()
case null:case void 0:return null}},
Ed(d){return this.cOR(d)},
cOR(b6){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ed=A.i(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.afq()
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
case 5:v=s.xP()
x=1
break
case 6:m=s.c
if(m!=null)A.aP(m,!1).f.aG(C.qu,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aP(m,!1).f.aG(C.z6,y.X)
v=null
x=1
break
case 8:u=14
b0=A.mD(b6.j(0,"betIndex"))
q=b0==null?null:C.j.ce(b0)
a2=A.mD(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.ab(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aW(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aW(b6.j(0,"clientSeed"))
a5=A.aW(b6.j(0,"nonce"))
x=17
return A.c(s.x.aat(p,q,A.aW(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$Ed)
case 17:o=b8
n=J.aE(o,"data")
if(J.r(J.aE(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eA(m,"type","SPIN_RESULT")
J.hg(m,n)
v=m
x=1
break}m=J.aE(o,"message")
m=A.ab(["type","SPIN_ERROR","message",J.ap(m==null?"spin failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=16
break
case 14:u=13
b2=t.pop()
l=A.u(b2)
m=A.ab(["type","SPIN_ERROR","message",J.ap(l)],y.N,y.z)
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
return A.c(s.x.jH(),$async$Ed)
case 22:k=b8
if(J.r(J.aE(k,"success"),!0)){m=y.h
j=m.a(J.aE(k,"data"))
k=j
m=m.a(k==null?null:J.aE(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.mD(J.aE(i,"balance"))
if(m==null)m=null
m=A.ab(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aE(k,"message")
m=A.ab(["type","BALANCE_ERROR","message",J.ap(m==null?"getCurrentUser failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=21
break
case 19:u=18
b3=t.pop()
h=A.u(b3)
m=A.ab(["type","BALANCE_ERROR","message",J.ap(h)],y.N,y.z)
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
return A.c(s.afk(),$async$Ed)
case 27:g=b8
if(g!=null){m=A.ab(["type","RTP_RESULT","data",g],y.N,y.z)
v=m
x=1
break}m=A.ab(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=m
x=1
break
u=2
x=26
break
case 24:u=23
b4=t.pop()
f=A.u(b4)
m=A.ab(["type","RTP_ERROR","message",J.ap(f)],y.N,y.z)
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
m=A.mD(b6.j(0,"page"))
a8=m==null?null:C.j.ce(m)
e=a8==null?1:a8
m=A.mD(b6.j(0,"size"))
a9=m==null?null:C.j.ce(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a21(e,d),$async$Ed)
case 32:a0=b8
if(J.r(J.aE(a0,"success"),!0)){m=A.ab(["type","TRANSACTION_RESULT","data",J.aE(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aE(a0,"message")
m=A.ab(["type","TRANSACTION_ERROR","message",J.ap(m==null?"getTransactions failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=31
break
case 29:u=28
b5=t.pop()
a1=A.u(b5)
m=A.ab(["type","TRANSACTION_ERROR","message",J.ap(a1)],y.N,y.z)
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
case 4:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Ed,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.uQ(!0)
x.a7()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
x=t.f
w=y.p
v=A.b([],w)
u=x==null
if(!u)C.f.C(v,A.b([x,A.dN(0,A.h1(C.c8,s,C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbuO(),s,s,s,s,s,s,!1,C.bU),108,s,0,s,s,75)],w))
else v.push(t.cs9(d))
if(u)v.push(new A.dG(!0,!0,!0,!0,C.J,!1,new A.ce(C.ii,s,s,A.aM(s,s,s,s,s,D.aSR,s,s,t.gbuO(),s,s,s,s,r.gh2(),s),s),s))
return A.bP(s,D.auD,A.d2(C.aU,v,C.t,C.aQ,s),s,s,s,s,s)},
cs9(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.db?a0.gDc():a0.gO2()
if(e.db){a0=a0.gDc()
r=A.p(a1).ok.y
a0=new A.G(C.b2,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.E.B(0.78)),C.aI,d,d),d)}else a0=D.bIZ
return A.aK(A.J(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.b.G(A.a(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.b.G(A.a(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbE5())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bjI(r,p,l,k===!0,u===!0,!j,i)
g=e.cUF(a0,i)
if(e.db)f=a0.gDc()
else f=j?d:a0.gaa3()
u=x==null?d:x.b
a0=u==null?a0.gaad():u
u=g==null
r=u?f:g
return new B.ayf(a0,h,q,m,r,!u,!t,new B.cPg(e,h),new B.cPh(e),d)},
cNI(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aP(x,!1).f.aG(C.dQ,y.X)
return
case 2:w.agK()
return
case 3:x=w.c
x.toString
A.aP(x,!1).f.aG(C.qu,y.X)
return
case 4:w.q6()
return
case 5:w.uY()
return
case 6:w.bwW()
return
case 0:return}},
agK(){var x=0,w=A.m(y.H),v,u=this,t
var $async$agK=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aP(t,!1).f.aG(C.pO,y.X),$async$agK)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bwW(),$async$agK)
case 4:case 1:return A.k(v,w)}})
return A.l($async$agK,w)},
afq(){var x=0,w=A.m(y.H),v,u=this
var $async$afq=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.agA(),$async$afq)
case 3:case 1:return A.k(v,w)}})
return A.l($async$afq,w)},
agA(){var x=0,w=A.m(y.H),v,u=this,t
var $async$agA=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.uQ(!0),$async$agA)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.X(t,!1).Ai(),$async$agA)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aP(t,!1).f.ii("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$agA,w)},
bOA(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.an
u=b.G.window.navigator.userAgent
x=$.dLO()
if(x.b.test(u)){$.aG.y2$.push(new B.cPk(w,v,t))
return C.yy}return new B.adY(w.bSd(t,Date.now()),w.gd5A(),null)},
bSd(d,e){var x="/games/"+d
return x+(C.b.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d5B(){new B.cQ_(this).$0()}}
B.ayf.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dG(!0,!0,!0,!0,C.J,!1,A.d1(new B.bjJ(this,x,A.p(d),this.cGf(x))),null)},
cGf(d){switch(this.d.gmX().a){case 1:return d.gDd()
case 2:return d.gXn()
case 3:return d.gaab()
case 4:return d.gaaa()
case 5:return d.guv()
case 6:return d.gaa8()
case 0:return null}}}
B.agi.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a1(C.E.B(0.58))
u=A.K(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aI(C.E,C.R)
return new A.G(C.em,A.w(A.b([u,C.a9,new A.et(1,C.bt,A.d(this.d,x,x,x,x,x,v,C.j_,x,x),x)],y.p),C.m,x,C.e,C.i,0,x,x),x)}}
var z=a.updateTypes(["aa<U<q,@>?>(U<q,@>)","aa<~>()","~()"])
B.dbW.prototype={
$1(d){var x,w=A.iw(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.a3b(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dbV.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dbY.prototype={
$1(d){var x,w,v,u,t,s=A.iw(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.a3b(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd5(),v=v.gan(v);v.F();){u=v.gN()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aE("type"))return
new B.dbZ(this.b,w,d,s).$0()},
$S:9}
B.dbZ.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h7(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bB(q)
t=v.c.source
if(t!=null)r=A.iw(t,"Object")
else r=!1
s=v.d
if(r){A.azz(t,"postMessage",u,s,y.X)
B.dmk(u,s)}else{B.dmk(u,s)
b.G.window.postMessage(u,s)}}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:95}
B.dbX.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cPe.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cPf.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:555}
B.cPy.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cPz.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cPA.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cPi.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cPj.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cPB.prototype={
$0(){return null},
$S:14}
B.cPG.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hf},
$S:0}
B.cPH.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xI(w.b,w.gdn5(),"Telegram Mini App",null,C.i7,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cPI.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bf6(this.b,D.iA)},
$S:0}
B.cPJ.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iA},
$S:0}
B.cPl.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hf},
$S:0}
B.cPm.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hf},
$S:0}
B.cPn.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cPo.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iz},
$S:0}
B.cPp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iz},
$S:0}
B.cPq.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iA:D.hf},
$S:0}
B.cPr.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iA:x},
$S:0}
B.cPs.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hK},
$S:0}
B.cPt.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bUY(x.r)
if(w==null)x=x.b===!0?null:D.iA
else x=w
v.id=x},
$S:0}
B.cPu.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bf6(this.b,D.iA)},
$S:0}
B.cPv.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iA},
$S:0}
B.cPR.prototype={
$0(){return this.a.id=D.hf},
$S:0}
B.cPS.prototype={
$0(){return this.a.id=D.hf},
$S:0}
B.cPT.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cPU.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iz},
$S:0}
B.cPV.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iz},
$S:0}
B.cPW.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cPX.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.PO?D.vn:D.CB},
$S:0}
B.cPY.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cPZ.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vm},
$S:0}
B.cQ0.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hK},
$S:0}
B.cQ1.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cQ2.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iz},
$S:0}
B.cQ3.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cQ4.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hK},
$S:0}
B.cQ5.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cQ6.prototype={
$0(){var x=this.a
x.f=x.bOA()
x.fx=!1},
$S:0}
B.cQ7.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bf6(this.b,D.hK)},
$S:0}
B.cQ8.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cPK.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cPL.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cPM.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iz},
$S:0}
B.cPN.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iz},
$S:0}
B.cPO.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cPP.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cPQ.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cPC.prototype={
$0(){return this.a.bVW("game-access")},
$S:23}
B.cPD.prototype={
$2(d,e){return $.hJ().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:37}
B.cPw.prototype={
$2(d,e){return $.hJ().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:37}
B.cPE.prototype={
$0(){return this.a.bVW("game-session")},
$S:23}
B.cPF.prototype={
$2(d,e){return $.hJ().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:37}
B.cPx.prototype={
$2(d,e){return $.hJ().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:37}
B.cPg.prototype={
$0(){return this.a.cNI(this.b.gmX())},
$S:0}
B.cPh.prototype={
$0(){this.a.bwW()
return null},
$S:0}
B.cPk.prototype={
$1(d){return this.cbi(d)},
cbi(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hx(),$async$$1)
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
return A.c(h.r.hh(!0),$async$$1)
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
$.hJ().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a3D(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.bcg())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.afk(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.hJ().k(C.aE,"RTP prefetch failed",n,null)
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
$.hJ().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.X(l,!1).Ai(),$async$$1)
case 23:h=h.bSd(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:474}
B.cQ_.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.xP(),$async$$0)
case 2:t=e
B.dno(t)
u=y.H
x=3
return A.c(A.dd(D.aJR,null,u),$async$$0)
case 3:B.dno(t)
x=4
return A.c(A.dd(D.aJy,null,u),$async$$0)
case 4:B.dno(t)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:95}
B.bjJ.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.j.cJ(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aa0(w)
u=A.A(8)
t=A.aF(C.E.B(0.12),C.w,1)
s=l.c.ok
r=s.f
q=y.p
r=A.b([A.d(w,k,k,k,k,k,r==null?k:r.aI(C.E,C.B),C.aI,k,k)],q)
if(x.x){w=j.gO3()
p=s.z
w=A.b([C.ee,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.E.B(0.72)),C.aI,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gaaf()
if(o)p="-"
o=j.gaa6()
m=x.f
if(m==null)m="-"
C.f.C(w,A.b([C.HK,new B.agi(n,p,k),new B.agi(o,m,k)],q))}C.f.C(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.ath:D.au4)
C.f.C(r,A.b([C.HK,A.J(k,k,k,A.d(w,k,k,k,k,k,s,C.aI,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c36,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.br(C.tG,A.b([C.pd,A.d(w.c?j.gaa1():j.gO2(),k,k,k,k,k,k,C.aI,k,k)],q),C.bO,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aI,k,k)}C.f.C(r,A.b([D.bJ1,A.cq(o,D.c_R,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gmX()!==D.qF
else w=!1
if(w)C.f.C(r,A.b([C.ee,A.aJ(A.d(j.gaa4(),k,k,k,k,k,k,C.aI,k,k),D.c0a,k,k,x.z,k,k)],q))
return A.bb(new A.ba(new A.ax(0,1/0,i,1/0),A.aK(A.J(k,k,k,new A.ba(C.L6,new A.c7(new A.M(D.asu,k,t,u,k,k,C.r),C.au,new A.G(C.b2,A.v(r,C.ao,k,C.e,C.I,0,C.k),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c5o,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.z,k,k,D.aLf,k,k,C.C)},
$S:110};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.anV.prototype,"gcOQ","Ed",0)
w(v,"gbuO","afq",1)
w(v,"gd5A","d5B",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.nl,[B.nT,B.zO,B.aye])
w(B.bjI,A.V)
x(A.fi,[B.dbW,B.dbY,B.cPe,B.cPf,B.cPk])
x(A.h9,[B.dbV,B.dbZ,B.dbX,B.cPy,B.cPz,B.cPA,B.cPi,B.cPj,B.cPB,B.cPG,B.cPH,B.cPI,B.cPJ,B.cPl,B.cPm,B.cPn,B.cPo,B.cPp,B.cPq,B.cPr,B.cPs,B.cPt,B.cPu,B.cPv,B.cPR,B.cPS,B.cPT,B.cPU,B.cPV,B.cPW,B.cPX,B.cPY,B.cPZ,B.cQ0,B.cQ1,B.cQ2,B.cQ3,B.cQ4,B.cQ5,B.cQ6,B.cQ7,B.cQ8,B.cPK,B.cPL,B.cPM,B.cPN,B.cPO,B.cPP,B.cPQ,B.cPC,B.cPE,B.cPg,B.cPh,B.cQ_])
x(A.W,[B.adY,B.Ge])
x(A.a_,[B.aYr,B.anV])
x(A.hN,[B.cPD,B.cPw,B.cPF,B.cPx,B.bjJ])
x(A.x,[B.ayf,B.agi])})()
A.fT(b.typeUniverse,JSON.parse('{"adY":{"W":[],"n":[]},"aYr":{"a_":["adY"]},"Ge":{"W":[],"n":[]},"anV":{"a_":["Ge"]},"ayf":{"x":[],"n":[]},"agi":{"x":[],"n":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("f9"),u:x("aa<U<q,@>?>"),T:x("Kp"),w:x("bm1"),s:x("E<q>"),p:x("E<n>"),P:x("U<q,@>"),f:x("U<@,@>"),a:x("bo"),A:x("Oc"),N:x("q"),x:x("OL"),r:x("Gw"),O:x("Y<q>"),y:x("P"),z:x("@"),h:x("U<q,@>?"),X:x("V?"),H:x("~")}})();(function constants(){D.asu=new A.Z(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.ath=new A.Z(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.au4=new A.Z(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.auD=new A.Z(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aJy=new A.bI(175e4)
D.aJJ=new A.bI(288e8)
D.aJR=new A.bI(75e4)
D.aLf=new A.ao(20,64,20,24)
D.PH=new B.aye(0,"purchase")
D.aNN=new B.aye(1,"session")
D.iz=new B.nT(0,"signInRequired")
D.Cx=new B.nT(1,"telegramAccountNotLinked")
D.iA=new B.nT(10,"requestFailed")
D.vm=new B.nT(11,"purchaseFailed")
D.hK=new B.nT(12,"sessionFailed")
D.Cy=new B.nT(2,"insufficientBalance")
D.Cz=new B.nT(3,"walletInactive")
D.vn=new B.nT(4,"refundPending")
D.vo=new B.nT(5,"accessExpired")
D.CA=new B.nT(6,"accessRequired")
D.hf=new B.nT(7,"gameUnavailable")
D.CB=new B.nT(8,"accessNotActive")
D.PI=new B.nT(9,"sessionDenied")
D.PJ=new B.zO(0,"none")
D.aNO=new B.zO(1,"signIn")
D.aNP=new B.zO(2,"bindTelegram")
D.aNQ=new B.zO(3,"topUp")
D.aNR=new B.zO(4,"purchase")
D.aNS=new B.zO(5,"openGame")
D.qF=new B.zO(6,"retry")
D.aSR=new A.aq(C.jv,null,C.E,null,null)
D.arH=new A.mb(2.5,null,null,null,null,null,null,null,null,null)
D.bIZ=new A.ad(28,28,D.arH,null)
D.bJ1=new A.ad(null,22,null,null)
D.c_R=new A.Y("slot-game-access-primary",y.O)
D.c0a=new A.Y("slot-game-access-refresh",y.O)
D.c36=new A.Y("slot-game-access-message",y.O)
D.c5o=new A.Y("slot-game-access-gate",y.O)})();(function staticFields(){$.a84=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eoV","dLO",()=>A.bm("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"epT","hJ",()=>A.aY("SlotGamePage"))})()};
(a=>{a["bkJJsH3nIVzpSyeSr/O5z/DYKVI="]=a.current})($__dart_deferred_initializers__);