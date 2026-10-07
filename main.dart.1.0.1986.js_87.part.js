((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,F,B={
dJ4(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Ct
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Cu
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Cv
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vu
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vv
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Cw
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hj
return null},
ds1(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
o2:function o2(d,e){this.a=d
this.b=e},
Ar:function Ar(d,e){this.a=d
this.b=e},
awB:function awB(d,e){this.a=d
this.b=e},
bkK:function bkK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejL(d){var x=b.G,w=A.eL(new B.dgS(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dgR(w)},
ejM(d){var x=b.G,w=A.eL(new B.dgU(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dgT(w)},
dsq(d){B.drk(A.bD(d),b.G.window.location.origin)},
drk(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iq(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aN(u,e))v=!A.nN(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dgS:function dgS(d,e){this.a=d
this.b=e},
dgR:function dgR(d){this.a=d},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgV:function dgV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgT:function dgT(d){this.a=d},
acp:function acp(d,e,f){this.c=d
this.d=e
this.a=f},
aWs:function aWs(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cTR:function cTR(d){this.a=d},
cTS:function cTS(d){this.a=d},
dCW(d,e){return new B.C5(d,e,null)},
C5:function C5(d,e,f){this.c=d
this.d=e
this.a=f},
am5:function am5(d,e,f,g){var _=this
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
cUa:function cUa(d,e){this.a=d
this.b=e},
cUb:function cUb(d,e){this.a=d
this.b=e},
cUc:function cUc(d){this.a=d},
cTV:function cTV(d,e){this.a=d
this.b=e},
cTW:function cTW(d,e){this.a=d
this.b=e},
cUd:function cUd(){},
cUi:function cUi(d,e){this.a=d
this.b=e},
cUj:function cUj(d,e){this.a=d
this.b=e},
cUk:function cUk(d,e){this.a=d
this.b=e},
cUl:function cUl(d){this.a=d},
cTY:function cTY(d,e){this.a=d
this.b=e},
cTZ:function cTZ(d){this.a=d},
cU_:function cU_(d){this.a=d},
cU0:function cU0(d){this.a=d},
cU1:function cU1(d){this.a=d},
cU2:function cU2(d,e){this.a=d
this.b=e},
cU3:function cU3(d,e){this.a=d
this.b=e},
cU4:function cU4(d,e){this.a=d
this.b=e},
cU5:function cU5(d,e){this.a=d
this.b=e},
cU6:function cU6(d,e){this.a=d
this.b=e},
cU7:function cU7(d){this.a=d},
cUt:function cUt(d){this.a=d},
cUu:function cUu(d){this.a=d},
cUv:function cUv(d){this.a=d},
cUw:function cUw(d){this.a=d},
cUx:function cUx(d){this.a=d},
cUy:function cUy(d){this.a=d},
cUz:function cUz(d,e){this.a=d
this.b=e},
cUA:function cUA(d,e){this.a=d
this.b=e},
cUB:function cUB(d){this.a=d},
cUD:function cUD(d){this.a=d},
cUE:function cUE(d){this.a=d},
cUF:function cUF(d){this.a=d},
cUG:function cUG(d){this.a=d},
cUH:function cUH(d){this.a=d},
cUI:function cUI(d,e,f){this.a=d
this.b=e
this.c=f},
cUJ:function cUJ(d){this.a=d},
cUK:function cUK(d,e){this.a=d
this.b=e},
cUL:function cUL(d){this.a=d},
cUm:function cUm(d){this.a=d},
cUn:function cUn(d){this.a=d},
cUo:function cUo(d){this.a=d},
cUp:function cUp(d){this.a=d},
cUq:function cUq(d){this.a=d},
cUr:function cUr(d){this.a=d},
cUs:function cUs(d){this.a=d},
cUe:function cUe(d){this.a=d},
cUf:function cUf(){},
cU8:function cU8(){},
cUg:function cUg(d){this.a=d},
cUh:function cUh(){},
cU9:function cU9(){},
cTT:function cTT(d,e){this.a=d
this.b=e},
cTU:function cTU(d){this.a=d},
cTX:function cTX(d,e,f){this.a=d
this.b=e
this.c=f},
cUC:function cUC(d){this.a=d},
awC:function awC(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkL:function bkL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeo:function aeo(d,e,f){this.c=d
this.d=e
this.a=f},
awG:function awG(d){this.a=d},
ekj(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.nC(v)
w=!0
if(x!=null)if(x.ge8().toLowerCase()==="https")if(x.ga2o().length===0)w=x.gXq()&&x.gKT()!==443||!C.a8X.t(0,x.gn1().toLowerCase())||x.gKG().length===0
if(w)return null
return x.cdl("telegram.me")},
dsi(d){return d.c?d:A.dwh(A.bB(d),A.bE(d),A.cf(d),A.hQ(d),A.mK(d),A.OA(d),A.aBh(d),d.b)},
e2V(d){var x
if(d==null||d.length===0)return null
x=A.dCU().j(0,d)
return(x==null?null:x.e===C.ib)===!1?x:null},
Aq(d,e,f,g){var x=null
return B.dWA(d,e,f,g)},
dWA(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Aq=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a6L.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dsw():k).$0(),$async$Aq)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a6L.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q2(s,a0),$async$Aq)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a6L.h(0,a0,q)
x=15
return A.c(s.eI("String",a0,q),$async$Aq)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q2(s,e),$async$Aq)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q2(s,e),$async$Aq)
case 21:case 20:case 12:o=d.$0()
$.a6L.h(0,a0,o)
x=22
return A.c(s.eI("String",a0,o),$async$Aq)
case 22:n=a2
if(!n){k=A.b_("Game access attempt id was not persisted.")
throw A.t(k)}v=o
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
m=A.u(g)
l=A.aG(g)
f.$2(m,l)
v=$.a6L.c5(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Aq,w)},
a6M(d,e){var x=null
return B.dWz(d,e)},
dWz(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a6M=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.er(0)
for(p=J.aZ(l);p.F();)$.a6L.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dsw():p).$0(),$async$a6M)
case 6:t=g
p=J.aZ(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a2r().S(0,"flutter."+o),$async$a6M)
case 9:x=7
break
case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
r=A.u(k)
q=A.aG(k)
d.$2(r,q)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$a6M,w)}},D,G,H,L,M,I
J=c[1]
A=c[0]
C=c[2]
E=c[302]
K=c[303]
F=c[478]
B=a.updateHolder(c[151],B)
D=c[777]
G=c[177]
H=c[658]
L=c[740]
M=c[454]
I=c[548]
B.o2.prototype={
U(){return"GameAccessIssue."+this.b}}
B.Ar.prototype={
U(){return"GameAccessPrimaryAction."+this.b}}
B.awB.prototype={
U(){return"GameAccessAttemptKind."+this.b}}
B.bkK.prototype={
gnb(){var x=this
if(x.b||x.c||!x.a)return D.NP
if(x.f)return D.aH2
switch(x.r){case D.iD:return D.aGZ
case D.Ct:return D.aH_
case D.Cu:case D.Cv:return D.aH0
case D.vu:case D.hj:return D.NP
case D.vv:case D.Cw:case D.Cx:case D.NO:case D.iE:case D.vt:return D.qJ
case D.hN:return D.qJ
case null:case void 0:if(x.e)return D.qJ
return x.d?D.aH1:D.qJ}}}
B.acp.prototype={
O(){return new B.aWs()}}
B.aWs.prototype={
Z(){var x,w,v,u=this
u.a5()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.b5()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.b5()
u.e=w
v=A.eL(new B.cTR(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b0Q()
$.Dr().a_R(x,new B.cTS(u),!0)},
aK(d){var x,w
this.b1(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.f()
w.src=x}},
q(){var x,w=this.f
if(w!=null){x=this.e
x===$&&A.f()
x.removeEventListener("load",w)}this.a6()},
u(d){var x=this.d
x===$&&A.f()
return A.do1(null,C.Fy,x)}}
B.C5.prototype={
O(){var x=$.aw()
return new B.am5(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.am5.prototype={
gbzP(){var x,w=this.y
if(w===$){x=$.aw().$1$0(y.T)
this.y!==$&&A.bc()
w=this.y=new G.aBv(x)}return w},
Z(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.R0()
return}w=v.d=B.e2V(x.c)
if(w==null){v.fx=!1
v.id=D.hj
return}if(!w.gbHe()){v.fx=!1
v.id=D.hj
return}if(w.e!==C.ib){v.fx=!1
v.k1=B.ejL(v.gbxS())
v.k2=B.ejM(v.gcSt())
v.agk()
v.ax=v.ahF()
return}},
b8(){var x,w=this
w.bF()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.ib){w.fr=!0
w.f=w.bRR()}},
agk(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$agk=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hE(),$async$agk)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cUa(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.i5().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.i5().k(C.r,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hm(!0),$async$agk)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cUb(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a2D(o,4))}catch(h){n=A.u(h)
$.i5().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cUc(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$agk,w)},
yu(){return this.cxy()},
cxy(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yu=A.h(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hE(),$async$yu)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cTV(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.i5().k(C.r,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.i5().k(C.aA,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.qa(),$async$yu)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cTW(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.W(a0.b,4))}catch(a5){n=A.u(a5)
$.i5().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.i5().k(C.r,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.qa(),$async$yu)
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
$.i5().k(C.r,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.agA(),$async$yu)
case 23:f=a7
e=A.p(y.N,y.z)
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
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$yu,w)},
agA(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$agA=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahF()
v=t.uz(C.Mu,new B.cUd())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$agA,w)},
ahF(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahF=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdk(l.a),$async$ahF)
case 7:q=e
if(J.r(J.aJ(q,"success"),!0)&&y.f.b(J.aJ(q,"data"))){p=A.uT(y.f.a(J.aJ(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aF.hd(p,null))}catch(j){o=A.u(j)
$.i5().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.i5().k(C.r,"_getSlotRtpData failed",n,null)
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
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ahF,w)},
R0(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$R0=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzP().nk(l),$async$R0)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cUi(s,r))
x=1
break}s.p(new B.cUj(s,r))
x=8
return A.c(s.oK(),$async$R0)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.kU){q=m
$.i5().k(C.r,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cUk(s,q))}else{p=m
o=A.aG(k)
m=$.i5()
m.k(C.r,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cUl(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$R0,w)},
oK(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oK=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.ib){if(s.c==null){x=1
break}s.p(new B.cTY(s,f))
x=1
break}if(!f.gbHe()){if(s.c==null){x=1
break}s.p(new B.cTZ(s))
x=1
break}if(s.c!=null)s.p(new B.cU_(s))
u=4
x=7
return A.c(s.w.hE(),$async$oK)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cU0(s))
x=1
break}if(s.c==null){x=1
break}q=s.beL(r)
if(q==null){s.p(new B.cU1(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzP().a.Cg(d),$async$oK)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cU2(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bYi(p.r)
if(p.b!==!0||o!=null){s.p(new B.cU3(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cU4(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hN)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dcw(!0),$async$oK)
case 13:case 12:x=1
break
case 10:s.p(new B.cU5(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.kU){m=k
$.i5().k(C.r,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cU6(s,m))}else{l=k
$.i5().k(C.r,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cU7(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oK,w)},
bA2(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.R0()
return w.oK()},
qr(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$qr=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.ib){if(s.c==null){x=1
break}if(h)s.p(new B.cUt(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cUu(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oK(),$async$qr)
case 5:x=1
break
case 4:s.p(new B.cUv(s))
u=7
x=10
return A.c(s.w.hE(),$async$qr)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cUw(s))
x=1
break}if(s.c==null){x=1
break}o=s.beL(p)
if(o==null){s.p(new B.cUx(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bAg(o)
x=13
return A.c(s.oK(),$async$qr)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byY(),$async$qr)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzP().a.L3(q,new G.awF(n)),$async$qr)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NT?16:17
break
case 16:x=18
return A.c(s.afx(),$async$qr)
case 18:if(s.c==null){x=1
break}s.p(new B.cUy(s))
x=19
return A.c(s.oK(),$async$qr)
case 19:x=1
break
case 17:s.p(new B.cUz(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.kU?20:22
break
case 20:l=h
$.i5().k(C.r,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhH(l,D.vt)
f=l.b.toUpperCase()
x=k===D.vv||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afx(),$async$qr)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cUA(s,k))
x=21
break
case 22:j=h
$.i5().k(C.r,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cUB(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$qr,w)},
lX(d,e){return this.dcx(d,!0)},
dcw(d){return this.lX(!0,d)},
dcx(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lX=A.h(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.cy
b1=s.ay
if(b6.e===C.ib){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.p(new B.cUD(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cUE(s))
u=4
x=7
return A.c(s.w.hE(),$async$lX)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beL(p)
if(o==null){s.p(new B.cUF(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bAg(o)
x=10
return A.c(s.oK(),$async$lX)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.vk(!0),$async$lX)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cUG(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byZ(),$async$lX)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DX(b6.a,new B.awG(n)),$async$lX)
case 15:m=c2
l=new A.az(Date.now(),0,!1).a0()
k=m==null?null:B.ekj(m.w)
j=m==null?null:B.dsi(m.f)
i=m==null?null:B.dsi(m.r)
h=m==null?null:B.dsi(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NV
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bR(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.iq(l))===!0
b2=h
a3=(b2==null?null:b2.iq(l))===!0
a4=h!=null&&i!=null&&!h.iq(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.c9(a7,"status")
if(!f)J.c9(a7,"session_id")
if(!e)J.c9(a7,"entitlement")
if(!d)J.c9(a7,"game_key")
if(!a0)J.c9(a7,"client_session")
if(!a1)J.c9(a7,"session_started_at")
if(!a2)J.c9(a7,"session_expiry")
if(!a3)J.c9(a7,"launch_expiry")
if(!a4)J.c9(a7,"launch_expiry_bound")
if(!a5)J.c9(a7,"launch_url_untrusted")
a8=a7
$.i5().k(C.r,"game session response rejected: "+J.b14(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.EJ(b6.a,!0,m.a),$async$lX)
case 20:case 19:x=21
return A.c(s.PR(),$async$lX)
case 21:if(s.c==null){x=1
break}s.p(new B.cUH(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.vk(!0),$async$lX)
case 24:x=1
break
case 23:x=b6.e===C.ib?25:26
break
case 25:s.p(new B.cUI(s,k,h))
x=27
return A.c(s.vs(),$async$lX)
case 27:x=1
break
case 26:s.p(new B.cUJ(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.kU?28:30
break
case 28:a9=a7
$.i5().k(C.r,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PR(),$async$lX)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lX(!1,!0),$async$lX)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cUK(s,a9))
x=29
break
case 30:b0=a7
$.i5().k(C.r,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cUL(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lX,w)},
vs(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vs=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cUm(s))
x=!k.iq(new A.az(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.vk(!0),$async$vs)
case 5:if(s.c==null){x=1
break}s.p(new B.cUn(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hE(),$async$vs)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aG(f)
h=$.i5()
h.k(C.r,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cUo(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beL(q)
if(g==null){s.p(new B.cUp(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bAg(g)
x=13
return A.c(s.oK(),$async$vs)
case 13:x=1
break
case 12:u=15
s.p(new B.cUq(s))
x=18
return A.c(A.z5(r,C.on,"_self"),$async$vs)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cUr(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aG(e)
h=$.i5()
h.k(C.r,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.vk(!0),$async$vs)
case 19:if(s.c==null){x=1
break}s.p(new B.cUs(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vs,w)},
vk(d){return this.cHR(!0)},
cHR(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$vk=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.EJ(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$vk)
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
case 5:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vk,w)},
EJ(d,e,f){return this.cHY(d,!0,f)},
cHY(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EJ=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.If(d,f),$async$EJ)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.i5().k(C.aA,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.du(C.Bg,null,l),$async$EJ)
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
return A.c(s.PR(),$async$EJ)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EJ,w)},
byY(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byY=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc_X()
v=B.Aq(new B.cUe(u),u.gbYr(),new B.cUf(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byY,w)},
afx(){var x=0,w=A.l(y.H),v=this
var $async$afx=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6M(new B.cU8(),A.eb([v.gc_X(),v.gbYr()],y.N)),$async$afx)
case 2:return A.j(null,w)}})
return A.k($async$afx,w)},
byZ(){var x=0,w=A.l(y.N),v,u=this
var $async$byZ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Aq(new B.cUg(u),null,new B.cUh(),u.gc23())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byZ,w)},
PR(){var x=0,w=A.l(y.H),v=this
var $async$PR=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6M(new B.cU9(),A.eb([v.gc23()],y.N)),$async$PR)
case 2:return A.j(null,w)}})
return A.k($async$PR,w)},
beL(d){var x=A.bog(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bAg(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc_X(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.ds1(D.NN,this.cy,"product-"+x)},
gbYr(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.ds1(D.NN,this.cy,x)},
gc23(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.ds1(D.aGY,this.cy,x)},
bZj(d){var x,w=Date.now(),v=C.i.lA($.aqq().B1(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bYi(d){var x=B.dJ4(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iE},
bhH(d,e){var x,w=d.a
if(w===401)return D.iD
x=B.dJ4(d.b)
if(x!=null)return x
if(w===404)return D.hj
return e},
cYl(d,e){switch(e){case D.iD:return d.gabq()
case D.Ct:return d.gabA()
case D.Cu:return d.gabf()
case D.Cv:return d.gabv()
case D.vu:return d.gabm()
case D.vv:return d.gabe()
case D.Cw:return d.gabo()
case D.hj:return d.gabt()
case D.Cx:return d.gabg()
case D.NO:return d.gabx()
case D.iE:return d.gabd()
case D.vt:return d.gabj()
case D.hN:return d.gaby()
case null:case void 0:return null}},
ER(d){return this.cSu(d)},
cSu(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$ER=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agG()
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
case 5:v=s.yu()
x=1
break
case 6:m=s.c
if(m!=null)A.aL(m,!1).f.aG(H.qv,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aL(m,!1).f.aG(L.z5,y.X)
v=null
x=1
break
case 8:u=14
b0=A.ml(b6.j(0,"betIndex"))
q=b0==null?null:C.k.c2(b0)
a2=A.ml(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aT(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aT(b6.j(0,"clientSeed"))
a5=A.aT(b6.j(0,"nonce"))
x=17
return A.c(s.x.abK(p,q,A.aT(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$ER)
case 17:o=b8
n=J.aJ(o,"data")
if(J.r(J.aJ(o,"success"),!0)&&y.P.b(n)){m=A.p(y.N,y.z)
J.eF(m,"type","SPIN_RESULT")
J.hE(m,n)
v=m
x=1
break}m=J.aJ(o,"message")
m=A.aa(["type","SPIN_ERROR","message",J.ap(m==null?"spin failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=16
break
case 14:u=13
b2=t.pop()
l=A.u(b2)
m=A.aa(["type","SPIN_ERROR","message",J.ap(l)],y.N,y.z)
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
return A.c(s.x.j9(),$async$ER)
case 22:k=b8
if(J.r(J.aJ(k,"success"),!0)){m=y.h
j=m.a(J.aJ(k,"data"))
k=j
m=m.a(k==null?null:J.aJ(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.p(y.N,y.z):a7
m=A.ml(J.aJ(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aJ(k,"message")
m=A.aa(["type","BALANCE_ERROR","message",J.ap(m==null?"getCurrentUser failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=21
break
case 19:u=18
b3=t.pop()
h=A.u(b3)
m=A.aa(["type","BALANCE_ERROR","message",J.ap(h)],y.N,y.z)
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
return A.c(s.agA(),$async$ER)
case 27:g=b8
if(g!=null){m=A.aa(["type","RTP_RESULT","data",g],y.N,y.z)
v=m
x=1
break}m=A.aa(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=m
x=1
break
u=2
x=26
break
case 24:u=23
b4=t.pop()
f=A.u(b4)
m=A.aa(["type","RTP_ERROR","message",J.ap(f)],y.N,y.z)
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
m=A.ml(b6.j(0,"page"))
a8=m==null?null:C.k.c2(m)
e=a8==null?1:a8
m=A.ml(b6.j(0,"size"))
a9=m==null?null:C.k.c2(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a3n(e,d),$async$ER)
case 32:a0=b8
if(J.r(J.aJ(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aJ(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aJ(a0,"message")
m=A.aa(["type","TRANSACTION_ERROR","message",J.ap(m==null?"getTransactions failed":m)],y.N,y.z)
v=m
x=1
break
u=2
x=31
break
case 29:u=28
b5=t.pop()
a1=A.u(b5)
m=A.aa(["type","TRANSACTION_ERROR","message",J.ap(a1)],y.N,y.z)
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
case 4:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ER,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.vk(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.e1(0,A.he(C.bu,s,C.x,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxS(),s,s,s,s,s,s,!1,C.bZ),108,s,0,s,s,75)],w))
else v.push(t.cvR(d))
if(u)v.push(new A.dS(!0,!0,!0,!0,C.J,!1,new A.ck(C.h4,s,s,A.aK(s,s,s,s,s,D.aLj,s,s,t.gbxS(),s,s,s,s,r.gh7(),s),s),s))
return A.bR(s,D.ar0,A.de(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvR(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDS():a0.gOC()
if(e.db){a0=a0.gDS()
r=A.q(a1).ok.y
a0=new A.I(E.b3,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aI,d,d),d)}else a0=D.bw1
return A.aH(A.P(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
else{r=w.f
p=w.d
if(p==null)p=v==null?d:v.d
if(p==null)p=""
q=C.c.G(A.b(r)+" "+p)}o=u?d:w.e
if(o==null)o=v==null?d:v.e
r=u?d:w.d
if(r==null){r=v==null?d:v.d
n=r}else n=r
if(n==null)n=""
m=o==null?d:C.c.G(A.b(o)+" "+n)
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbHe())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bkK(r,p,l,k===!0,u===!0,!j,i)
g=e.cYl(a0,i)
if(e.db)f=a0.gDS()
else f=j?d:a0.gabk()
u=x==null?d:x.b
a0=u==null?a0.gabu():u
u=g==null
r=u?f:g
return new B.awC(a0,h,q,m,r,!u,!t,new B.cTT(e,h),new B.cTU(e),d)},
cRl(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aL(x,!1).f.aG(C.er,y.X)
return
case 2:w.ai0()
return
case 3:x=w.c
x.toString
A.aL(x,!1).f.aG(H.qv,y.X)
return
case 4:w.qr()
return
case 5:w.vs()
return
case 6:w.bA2()
return
case 0:return}},
ai0(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ai0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aL(t,!1).f.aG(C.pP,y.X),$async$ai0)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bA2(),$async$ai0)
case 4:case 1:return A.j(v,w)}})
return A.k($async$ai0,w)},
agG(){var x=0,w=A.l(y.H),v,u=this
var $async$agG=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ahR(),$async$agG)
case 3:case 1:return A.j(v,w)}})
return A.k($async$agG,w)},
ahR(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahR=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.vk(!0),$async$ahR)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.a5(t,!1).AU(),$async$ahR)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aL(t,!1).f.hB("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahR,w)},
bRR(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.an
u=b.G.window.navigator.userAgent
x=$.dO5()
if(x.b.test(u)){$.ax.y2$.push(new B.cTX(w,v,t))
return C.yx}return new B.acp(w.bVu(t,Date.now()),w.gd9A(),null)},
bVu(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d9B(){new B.cUC(this).$0()}}
B.awC.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dS(!0,!0,!0,!0,C.J,!1,A.cW(new B.bkL(this,x,A.q(d),this.cJS(x))),null)},
cJS(d){switch(this.d.gnb().a){case 1:return d.gDT()
case 2:return d.gYs()
case 3:return d.gabs()
case 4:return d.gabr()
case 5:return d.guW()
case 6:return d.gabp()
case 0:return null}}}
B.aeo.prototype={
u(d){var x=null,w=A.q(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.Q(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.I(M.em,A.y(A.a([u,C.aa,new A.ew(1,C.bl,A.d(this.d,x,x,x,x,x,v,C.j4,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.awG.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.awG&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.p(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["T<a0<o,@>?>(a0<o,@>)","T<~>()","~()"])
B.dgS.prototype={
$1(d){var x,w=A.iq(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.SZ(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dgR.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dgU.prototype={
$1(d){var x,w,v,u,t,s=A.iq(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.SZ(d.data)
if(!y.f.b(x))return
w=A.p(y.N,y.z)
for(v=x.gd4(),v=v.gam(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dgV(this.b,w,d,s).$0()},
$S:9}
B.dgV.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.hn(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bD(q)
t=v.c.source
if(t!=null)r=A.iq(t,"Object")
else r=!1
s=v.d
if(r){A.W4(t,"postMessage",u,s,y.X)
B.drk(u,s)}else{B.drk(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:83}
B.dgT.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cTR.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cTS.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:503}
B.cUa.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cUb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cUc.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cTV.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cTW.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cUd.prototype={
$0(){return null},
$S:17}
B.cUi.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hj},
$S:0}
B.cUj.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.yc(w.b,w.gdrb(),"Telegram Mini App",null,C.ib,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cUk.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhH(this.b,D.iE)},
$S:0}
B.cUl.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iE},
$S:0}
B.cTY.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hj},
$S:0}
B.cTZ.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hj},
$S:0}
B.cU_.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cU0.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cU1.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cU2.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iE:D.hj},
$S:0}
B.cU3.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iE:x},
$S:0}
B.cU4.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hN},
$S:0}
B.cU5.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bYi(x.r)
if(w==null)x=x.b===!0?null:D.iE
else x=w
v.id=x},
$S:0}
B.cU6.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhH(this.b,D.iE)},
$S:0}
B.cU7.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cUt.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cUu.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cUv.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cUw.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cUx.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cUy.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cUz.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NU?D.vu:D.Cx},
$S:0}
B.cUA.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cUB.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vt},
$S:0}
B.cUD.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hN},
$S:0}
B.cUE.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cUF.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cUG.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cUH.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hN},
$S:0}
B.cUI.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cUJ.prototype={
$0(){var x=this.a
x.f=x.bRR()
x.fx=!1},
$S:0}
B.cUK.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhH(this.b,D.hN)},
$S:0}
B.cUL.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cUm.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cUn.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cUo.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cUp.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cUq.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cUr.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cUs.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cUe.prototype={
$0(){return this.a.bZj("game-access")},
$S:27}
B.cUf.prototype={
$2(d,e){return $.i5().k(C.r,"game access purchase attempt persistence unavailable",d,e)},
$S:39}
B.cU8.prototype={
$2(d,e){return $.i5().k(C.r,"game access purchase attempt cleanup unavailable",d,e)},
$S:39}
B.cUg.prototype={
$0(){return this.a.bZj("game-session")},
$S:27}
B.cUh.prototype={
$2(d,e){return $.i5().k(C.r,"game session attempt persistence unavailable",d,e)},
$S:39}
B.cU9.prototype={
$2(d,e){return $.i5().k(C.r,"game session attempt cleanup unavailable",d,e)},
$S:39}
B.cTT.prototype={
$0(){return this.a.cRl(this.b.gnb())},
$S:0}
B.cTU.prototype={
$0(){this.a.bA2()
return null},
$S:0}
B.cTX.prototype={
$1(d){return this.ceY(d)},
ceY(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hE(),$async$$1)
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
return A.c(h.r.hm(!0),$async$$1)
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
$.i5().k(C.r,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a2D(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beQ())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.agA(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.i5().k(C.aA,"RTP prefetch failed",n,null)
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
$.i5().k(C.r,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.a5(l,!1).AU(),$async$$1)
case 23:h=h.bVu(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:354}
B.cUC.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yu(),$async$$0)
case 2:t=e
B.dsq(t)
u=y.H
x=3
return A.c(A.du(D.aCZ,null,u),$async$$0)
case 3:B.dsq(t)
x=4
return A.c(A.du(D.aCG,null,u),$async$$0)
case 4:B.dsq(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:83}
B.bkL.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cf(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.abh(w)
u=A.B(8)
t=A.aE(C.E.v(0.12),C.u,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.B),C.aI,k,k)],q)
if(x.x){w=j.gOD()
p=s.z
w=A.a([F.dW,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aI,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gabw()
if(o)p="-"
o=j.gabn()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([I.H5,new B.aeo(n,p,k),new B.aeo(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apE:D.aqr)
C.e.A(r,A.a([I.H5,A.P(k,k,k,A.d(w,k,k,k,k,k,s,C.aI,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQu,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bp(C.nm,A.a([C.n0,A.d(w.c?j.gabi():j.gOC(),k,k,k,k,k,k,C.aI,k,k)],q),C.bG,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aI,k,k)}C.e.A(r,A.a([D.bw3,A.cD(o,D.bMY,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gnb()!==D.qJ
else w=!1
if(w)C.e.A(r,A.a([F.dW,A.aI(A.d(j.gabl(),k,k,k,k,k,k,C.aI,k,k),D.bNi,k,k,x.z,k,k)],q))
return A.b3(new A.ba(new A.at(0,1/0,i,1/0),A.aH(A.P(k,k,k,new A.ba(K.Kb,new A.bZ(new A.O(D.aoR,k,t,u,k,k,C.q),C.aq,new A.I(E.b3,A.w(r,C.ak,k,C.d,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bSW,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.x,k,k,D.aEq,k,k,C.y)},
$S:96};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.am5.prototype,"gcSt","ER",0)
w(v,"gbxS","agG",1)
w(v,"gd9A","d9B",2)})();(function inheritance(){var x=a.inheritMany
x(A.eq,[B.o2,B.Ar,B.awB])
x(A.G,[B.bkK,B.awG])
x(A.bw,[B.dgS,B.dgU,B.cTR,B.cTS,B.cTX])
x(A.bv,[B.dgR,B.dgV,B.dgT,B.cUa,B.cUb,B.cUc,B.cTV,B.cTW,B.cUd,B.cUi,B.cUj,B.cUk,B.cUl,B.cTY,B.cTZ,B.cU_,B.cU0,B.cU1,B.cU2,B.cU3,B.cU4,B.cU5,B.cU6,B.cU7,B.cUt,B.cUu,B.cUv,B.cUw,B.cUx,B.cUy,B.cUz,B.cUA,B.cUB,B.cUD,B.cUE,B.cUF,B.cUG,B.cUH,B.cUI,B.cUJ,B.cUK,B.cUL,B.cUm,B.cUn,B.cUo,B.cUp,B.cUq,B.cUr,B.cUs,B.cUe,B.cUg,B.cTT,B.cTU,B.cUC])
x(A.J,[B.acp,B.C5])
x(A.R,[B.aWs,B.am5])
x(A.c1,[B.cUf,B.cU8,B.cUh,B.cU9,B.bkL])
x(A.x,[B.awC,B.aeo])})()
A.aU(b.typeUniverse,JSON.parse('{"acp":{"J":[],"m":[]},"aWs":{"R":["acp"]},"C5":{"J":[],"m":[]},"am5":{"R":["C5"]},"awC":{"x":[],"m":[]},"aeo":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.A
return{J:x("bu"),u:x("T<a0<o,@>?>"),T:x("Ft"),w:x("jR"),s:x("v<o>"),p:x("v<m>"),P:x("a0<o,@>"),f:x("a0<@,@>"),a:x("b9"),A:x("Qb"),N:x("o"),x:x("QC"),r:x("vQ"),O:x("W<o>"),y:x("K"),z:x("@"),h:x("a0<o,@>?"),X:x("G?"),H:x("~")}})();(function constants(){D.aoR=new A.Z(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.apE=new A.Z(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.aqr=new A.Z(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.z)
D.ar0=new A.Z(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aCG=new A.bK(175e4)
D.aCZ=new A.bK(75e4)
D.aEq=new A.ao(20,64,20,24)
D.NN=new B.awB(0,"purchase")
D.aGY=new B.awB(1,"session")
D.iD=new B.o2(0,"signInRequired")
D.Ct=new B.o2(1,"telegramAccountNotLinked")
D.iE=new B.o2(10,"requestFailed")
D.vt=new B.o2(11,"purchaseFailed")
D.hN=new B.o2(12,"sessionFailed")
D.Cu=new B.o2(2,"insufficientBalance")
D.Cv=new B.o2(3,"walletInactive")
D.vu=new B.o2(4,"refundPending")
D.vv=new B.o2(5,"accessExpired")
D.Cw=new B.o2(6,"accessRequired")
D.hj=new B.o2(7,"gameUnavailable")
D.Cx=new B.o2(8,"accessNotActive")
D.NO=new B.o2(9,"sessionDenied")
D.NP=new B.Ar(0,"none")
D.aGZ=new B.Ar(1,"signIn")
D.aH_=new B.Ar(2,"bindTelegram")
D.aH0=new B.Ar(3,"topUp")
D.aH1=new B.Ar(4,"purchase")
D.aH2=new B.Ar(5,"openGame")
D.qJ=new B.Ar(6,"retry")
D.aLj=new A.aq(C.jA,null,C.E,null,null)
D.ao3=new A.ms(2.5,null,null,null,null,null,null,null,null,null)
D.bw1=new A.ae(28,28,D.ao3,null)
D.bw3=new A.ae(null,22,null,null)
D.bMY=new A.W("slot-game-access-primary",y.O)
D.bNi=new A.W("slot-game-access-refresh",y.O)
D.bQu=new A.W("slot-game-access-message",y.O)
D.bSW=new A.W("slot-game-access-gate",y.O)})();(function staticFields(){$.a6L=function(){var x=y.N
return A.p(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"esC","dO5",()=>A.be("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"etB","i5",()=>A.aX("SlotGamePage"))})()};
(a=>{a["/4TyFxVucjUO7ze54ARap+uL7yU="]=a.current})($__dart_deferred_initializers__);