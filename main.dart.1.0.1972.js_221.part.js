((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,F,B={
dIz(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.c.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cp
if(C.c.t(x,"INSUFFICIENT_BALANCE"))return D.Cq
if(C.c.t(x,"WALLET_NOT_ACTIVE"))return D.Cr
if(C.c.t(x,"REFUND_PENDING")||C.c.t(x,"PENDING_REFUND"))return D.vp
if(C.c.t(x,"ACCESS_EXPIRED"))return D.vq
if(C.c.t(x,"ACCESS_REQUIRED")||C.c.t(x,"ENTITLEMENT_NOT_FOUND"))return D.Cs
if(C.c.t(x,"GAME_NOT_AVAILABLE"))return D.hj
return null},
drz(d,e,f){var x=e==null?null:C.c.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
o_:function o_(d,e){this.a=d
this.b=e},
AA:function AA(d,e){this.a=d
this.b=e},
awn:function awn(d,e){this.a=d
this.b=e},
bkt:function bkt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eja(d){var x=b.G,w=A.eO(new B.dfM(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dfL(w)},
ejb(d){var x=b.G,w=A.eO(new B.dfO(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dfN(w)},
drX(d){B.dqT(A.bD(d),b.G.window.location.origin)},
dqT(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.is(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.c.aO(u,e))v=!A.nM(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dfM:function dfM(d,e){this.a=d
this.b=e},
dfL:function dfL(d){this.a=d},
dfO:function dfO(d,e){this.a=d
this.b=e},
dfP:function dfP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dfN:function dfN(d){this.a=d},
ach:function ach(d,e,f){this.c=d
this.d=e
this.a=f},
aWe:function aWe(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cTf:function cTf(d){this.a=d},
cTg:function cTg(d){this.a=d},
dCo(d,e){return new B.Cg(d,e,null)},
Cg:function Cg(d,e,f){this.c=d
this.d=e
this.a=f},
alX:function alX(d,e,f,g){var _=this
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
cTz:function cTz(d,e){this.a=d
this.b=e},
cTA:function cTA(d,e){this.a=d
this.b=e},
cTB:function cTB(d){this.a=d},
cTj:function cTj(d,e){this.a=d
this.b=e},
cTk:function cTk(d,e){this.a=d
this.b=e},
cTC:function cTC(){},
cTH:function cTH(d,e){this.a=d
this.b=e},
cTI:function cTI(d,e){this.a=d
this.b=e},
cTJ:function cTJ(d,e){this.a=d
this.b=e},
cTK:function cTK(d){this.a=d},
cTm:function cTm(d,e){this.a=d
this.b=e},
cTn:function cTn(d){this.a=d},
cTo:function cTo(d){this.a=d},
cTp:function cTp(d){this.a=d},
cTq:function cTq(d){this.a=d},
cTr:function cTr(d,e){this.a=d
this.b=e},
cTs:function cTs(d,e){this.a=d
this.b=e},
cTt:function cTt(d,e){this.a=d
this.b=e},
cTu:function cTu(d,e){this.a=d
this.b=e},
cTv:function cTv(d,e){this.a=d
this.b=e},
cTw:function cTw(d){this.a=d},
cTS:function cTS(d){this.a=d},
cTT:function cTT(d){this.a=d},
cTU:function cTU(d){this.a=d},
cTV:function cTV(d){this.a=d},
cTW:function cTW(d){this.a=d},
cTX:function cTX(d){this.a=d},
cTY:function cTY(d,e){this.a=d
this.b=e},
cTZ:function cTZ(d,e){this.a=d
this.b=e},
cU_:function cU_(d){this.a=d},
cU1:function cU1(d){this.a=d},
cU2:function cU2(d){this.a=d},
cU3:function cU3(d){this.a=d},
cU4:function cU4(d){this.a=d},
cU5:function cU5(d){this.a=d},
cU6:function cU6(d,e,f){this.a=d
this.b=e
this.c=f},
cU7:function cU7(d){this.a=d},
cU8:function cU8(d,e){this.a=d
this.b=e},
cU9:function cU9(d){this.a=d},
cTL:function cTL(d){this.a=d},
cTM:function cTM(d){this.a=d},
cTN:function cTN(d){this.a=d},
cTO:function cTO(d){this.a=d},
cTP:function cTP(d){this.a=d},
cTQ:function cTQ(d){this.a=d},
cTR:function cTR(d){this.a=d},
cTD:function cTD(d){this.a=d},
cTE:function cTE(){},
cTx:function cTx(){},
cTF:function cTF(d){this.a=d},
cTG:function cTG(){},
cTy:function cTy(){},
cTh:function cTh(d,e){this.a=d
this.b=e},
cTi:function cTi(d){this.a=d},
cTl:function cTl(d,e,f){this.a=d
this.b=e
this.c=f},
cU0:function cU0(d){this.a=d},
awo:function awo(d,e,f,g,h,i,j,k,l,m){var _=this
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
bku:function bku(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeg:function aeg(d,e,f){this.c=d
this.d=e
this.a=f},
aws:function aws(d){this.a=d},
ejK(d){var x,w,v=C.c.G(d)
if(v.length===0)return null
x=A.mU(v)
w=!0
if(x!=null)if(x.ge7().toLowerCase()==="https")if(x.ga2f().length===0)w=x.gXk()&&x.gKS()!==443||!C.a8O.t(0,x.gn0().toLowerCase())||x.gKF().length===0
if(w)return null
return x.cdp("telegram.me")},
drP(d){return d.c?d:A.dvM(A.bB(d),A.bE(d),A.cg(d),A.hM(d),A.mK(d),A.OC(d),A.aB4(d),d.b)},
e2p(d){var x
if(d==null||d.length===0)return null
x=A.dCm().j(0,d)
return(x==null?null:x.e===C.ib)===!1?x:null},
Az(d,e,f,g){var x=null
return B.dW0(d,e,f,g)},
dW0(d,e,f,a0){var x=0,w=A.l(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Az=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a6D.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dJC():k).$0(),$async$Az)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a6D.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q7(s,a0),$async$Az)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a6D.h(0,a0,q)
x=15
return A.c(s.f_("String",a0,q),$async$Az)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q7(s,e),$async$Az)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q7(s,e),$async$Az)
case 21:case 20:case 12:o=d.$0()
$.a6D.h(0,a0,o)
x=22
return A.c(s.f_("String",a0,o),$async$Az)
case 22:n=a2
if(!n){k=A.b2("Game access attempt id was not persisted.")
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
v=$.a6D.c7(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$Az,w)},
a6E(d,e){var x=null
return B.dW_(d,e)},
dW_(d,e){var x=0,w=A.l(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a6E=A.h(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.er(0)
for(p=J.aY(l);p.F();)$.a6D.S(0,p.gR())
v=3
p=m
x=6
return A.c((p==null?A.dJC():p).$0(),$async$a6E)
case 6:t=g
p=J.aY(l)
case 7:if(!p.F()){x=8
break}s=p.gR()
o=s
t.a.S(0,o)
x=9
return A.c($.a2n().S(0,"flutter."+o),$async$a6E)
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
return A.k($async$a6E,w)}},D,G,H,L,M,I
J=c[1]
A=c[0]
C=c[2]
E=c[330]
K=c[331]
F=c[536]
B=a.updateHolder(c[158],B)
D=c[852]
G=c[188]
H=c[724]
L=c[810]
M=c[512]
I=c[605]
B.o_.prototype={
W(){return"GameAccessIssue."+this.b}}
B.AA.prototype={
W(){return"GameAccessPrimaryAction."+this.b}}
B.awn.prototype={
W(){return"GameAccessAttemptKind."+this.b}}
B.bkt.prototype={
gna(){var x=this
if(x.b||x.c||!x.a)return D.NH
if(x.f)return D.aGJ
switch(x.r){case D.iD:return D.aGF
case D.Cp:return D.aGG
case D.Cq:case D.Cr:return D.aGH
case D.vp:case D.hj:return D.NH
case D.vq:case D.Cs:case D.Ct:case D.NG:case D.iE:case D.vo:return D.qH
case D.hN:return D.qH
case null:case void 0:if(x.e)return D.qH
return x.d?D.aGI:D.qH}}}
B.ach.prototype={
O(){return new B.aWe()}}
B.aWe.prototype={
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
v=A.eO(new B.cTf(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b0D()
$.DD().a_K(x,new B.cTg(u),!0)},
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
return A.dnz(null,C.Fv,x)}}
B.Cg.prototype={
O(){var x=$.ay()
return new B.alX(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.alX.prototype={
gbzP(){var x,w=this.y
if(w===$){x=$.ay().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new G.aBi(x)}return w},
Z(){var x,w,v=this
v.a5()
x=v.a
if(x.d!=null){v.R2()
return}w=v.d=B.e2p(x.c)
if(w==null){v.fx=!1
v.id=D.hj
return}if(!w.gbHe()){v.fx=!1
v.id=D.hj
return}if(w.e!==C.ib){v.fx=!1
v.k1=B.eja(v.gbxS())
v.k2=B.ejb(v.gcSB())
v.agg()
v.ax=v.ahB()
return}},
b8(){var x,w=this
w.bF()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.ib){w.fr=!0
w.f=w.bRU()}},
agg(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$agg=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hE(),$async$agg)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cTz(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.i5().k(C.aA,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.i5().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.ho(!0),$async$agg)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cTA(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a2A(o,4))}catch(h){n=A.u(h)
$.i5().k(C.aA,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cTB(t))
x=10
break
case 7:x=1
break
case 10:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$agg,w)},
yu(){return this.cxF()},
cxF(){var x=0,w=A.l(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
if(s.c!=null&&a1!=null)s.p(new B.cTj(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.i5().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
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
return A.c(s.r.q6(),$async$yu)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cTk(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.k.X(a0.b,4))}catch(a5){n=A.u(a5)
$.i5().k(C.aA,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.i5().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.q6(),$async$yu)
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
$.i5().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.agw(),$async$yu)
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
agw(){var x=0,w=A.l(y.h),v,u=this,t,s
var $async$agw=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.ahB()
v=t.xi(C.Mm,new B.cTC())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$agw,w)},
ahB(){var x=0,w=A.l(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$ahB=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bdk(l.a),$async$ahB)
case 7:q=e
if(J.r(J.aH(q,"success"),!0)&&y.f.b(J.aH(q,"data"))){p=A.uY(y.f.a(J.aH(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aP.iY(p,null))}catch(j){o=A.u(j)
$.i5().k(C.aA,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.i5().k(C.q,"_getSlotRtpData failed",n,null)
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
return A.k($async$ahB,w)},
R2(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$R2=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbzP().nk(l),$async$R2)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cTH(s,r))
x=1
break}s.p(new B.cTI(s,r))
x=8
return A.c(s.oI(),$async$R2)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.lv){q=m
$.i5().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cTJ(s,q))}else{p=m
o=A.aG(k)
m=$.i5()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cTK(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$R2,w)},
oI(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oI=A.h(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.ib){if(s.c==null){x=1
break}s.p(new B.cTm(s,f))
x=1
break}if(!f.gbHe()){if(s.c==null){x=1
break}s.p(new B.cTn(s))
x=1
break}if(s.c!=null)s.p(new B.cTo(s))
u=4
x=7
return A.c(s.w.hE(),$async$oI)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cTp(s))
x=1
break}if(s.c==null){x=1
break}q=s.beJ(r)
if(q==null){s.p(new B.cTq(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbzP().a.Cd(d),$async$oI)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cTr(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bYm(p.r)
if(p.b!==!0||o!=null){s.p(new B.cTs(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cTt(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hN)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.dcA(!0),$async$oI)
case 13:case 12:x=1
break
case 10:s.p(new B.cTu(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.lv){m=k
$.i5().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cTv(s,m))}else{l=k
$.i5().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cTw(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$oI,w)},
bA1(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.R2()
return w.oI()},
qp(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$qp=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.ib){if(s.c==null){x=1
break}if(h)s.p(new B.cTS(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cTT(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oI(),$async$qp)
case 5:x=1
break
case 4:s.p(new B.cTU(s))
u=7
x=10
return A.c(s.w.hE(),$async$qp)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cTV(s))
x=1
break}if(s.c==null){x=1
break}o=s.beJ(p)
if(o==null){s.p(new B.cTW(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bAe(o)
x=13
return A.c(s.oI(),$async$qp)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.byY(),$async$qp)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbzP().a.L2(q,new G.awr(n)),$async$qp)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.NL?16:17
break
case 16:x=18
return A.c(s.afu(),$async$qp)
case 18:if(s.c==null){x=1
break}s.p(new B.cTX(s))
x=19
return A.c(s.oI(),$async$qp)
case 19:x=1
break
case 17:s.p(new B.cTY(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.lv?20:22
break
case 20:l=h
$.i5().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bhH(l,D.vo)
f=l.b.toUpperCase()
x=k===D.vq||C.c.t(f,"ENTITLEMENT_NOT_FOUND")||C.c.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.afu(),$async$qp)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cTZ(s,k))
x=21
break
case 22:j=h
$.i5().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cU_(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$qp,w)},
lU(d,e){return this.dcB(d,!0)},
dcA(d){return this.lU(!0,d)},
dcB(b9,c0){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lU=A.h(function(c1,c2){if(c1===1){t.push(c2)
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
if(b2){s.p(new B.cU1(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cU2(s))
u=4
x=7
return A.c(s.w.hE(),$async$lU)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.beJ(p)
if(o==null){s.p(new B.cU3(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bAe(o)
x=10
return A.c(s.oI(),$async$lU)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.vi(!0),$async$lU)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cU4(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.byZ(),$async$lU)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.DU(b6.a,new B.aws(n)),$async$lU)
case 15:m=c2
l=new A.az(Date.now(),0,!1).a0()
k=m==null?null:B.ejK(m.w)
j=m==null?null:B.drP(m.f)
i=m==null?null:B.drP(m.r)
h=m==null?null:B.drP(m.x)
b2=m
g=(b2==null?null:b2.e)===C.NN
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.a0().bX(l.a0()).a)<=3e8
b2=i
a2=(b2==null?null:b2.j_(l))===!0
b2=h
a3=(b2==null?null:b2.j_(l))===!0
a4=h!=null&&i!=null&&!h.j_(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.a([],y.s)
if(!g)J.bY(a7,"status")
if(!f)J.bY(a7,"session_id")
if(!e)J.bY(a7,"entitlement")
if(!d)J.bY(a7,"game_key")
if(!a0)J.bY(a7,"client_session")
if(!a1)J.bY(a7,"session_started_at")
if(!a2)J.bY(a7,"session_expiry")
if(!a3)J.bY(a7,"launch_expiry")
if(!a4)J.bY(a7,"launch_expiry_bound")
if(!a5)J.bY(a7,"launch_url_untrusted")
a8=a7
$.i5().k(C.q,"game session response rejected: "+J.a2x(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.EG(b6.a,!0,m.a),$async$lU)
case 20:case 19:x=21
return A.c(s.PR(),$async$lU)
case 21:if(s.c==null){x=1
break}s.p(new B.cU5(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.vi(!0),$async$lU)
case 24:x=1
break
case 23:x=b6.e===C.ib?25:26
break
case 25:s.p(new B.cU6(s,k,h))
x=27
return A.c(s.vq(),$async$lU)
case 27:x=1
break
case 26:s.p(new B.cU7(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.lv?28:30
break
case 28:a9=a7
$.i5().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.c.t(b5,"SESSION_ENDED")||C.c.t(b5,"SESSION_EXPIRED")||C.c.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.PR(),$async$lU)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lU(!1,!0),$async$lU)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cU8(s,a9))
x=29
break
case 30:b0=a7
$.i5().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cU9(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$lU,w)},
vq(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vq=A.h(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cTL(s))
x=!k.j_(new A.az(Date.now(),0,!1).a0())?3:4
break
case 3:x=5
return A.c(s.vi(!0),$async$vq)
case 5:if(s.c==null){x=1
break}s.p(new B.cTM(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hE(),$async$vq)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aG(f)
h=$.i5()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cTN(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.beJ(q)
if(g==null){s.p(new B.cTO(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bAe(g)
x=13
return A.c(s.oI(),$async$vq)
case 13:x=1
break
case 12:u=15
s.p(new B.cTP(s))
x=18
return A.c(A.z9(r,C.om,"_self"),$async$vq)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cTQ(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aG(e)
h=$.i5()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.vi(!0),$async$vq)
case 19:if(s.c==null){x=1
break}s.p(new B.cTR(s))
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$vq,w)},
vi(d){return this.cHZ(!0)},
cHZ(d){var x=0,w=A.l(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$vi=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.EG(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$vi)
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
return A.k($async$vi,w)},
EG(d,e,f){return this.cI5(d,!0,f)},
cI5(d,e,f){var x=0,w=A.l(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$EG=A.h(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.Ia(d,f),$async$EG)
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
return A.c(A.dr(C.Bc,null,l),$async$EG)
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
return A.c(s.PR(),$async$EG)
case 15:case 14:v=p
x=1
break
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$EG,w)},
byY(){var x=0,w=A.l(y.N),v,u=this,t
var $async$byY=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.gc01()
v=B.Az(new B.cTD(u),u.gbYv(),new B.cTE(),t)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byY,w)},
afu(){var x=0,w=A.l(y.H),v=this
var $async$afu=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6E(new B.cTx(),A.eb([v.gc01(),v.gbYv()],y.N)),$async$afu)
case 2:return A.j(null,w)}})
return A.k($async$afu,w)},
byZ(){var x=0,w=A.l(y.N),v,u=this
var $async$byZ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=B.Az(new B.cTF(u),null,new B.cTG(),u.gc28())
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byZ,w)},
PR(){var x=0,w=A.l(y.H),v=this
var $async$PR=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a6E(new B.cTy(),A.eb([v.gc28()],y.N)),$async$PR)
case 2:return A.j(null,w)}})
return A.k($async$PR,w)},
beJ(d){var x=A.dyi(d),w=x==null?null:C.c.G(x)
return w==null||w.length===0?null:w},
bAe(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gc01(){var x=this.a.d
x=A.b(x==null?"unknown":x)
return B.drz(D.NF,this.cy,"product-"+x)},
gbYv(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.drz(D.NF,this.cy,x)},
gc28(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.drz(D.aGE,this.cy,x)},
bZn(d){var x,w=Date.now(),v=C.i.mp($.b0t().JW(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.b(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bYm(d){var x=B.dIz(d)
if(x!=null)return x
return d==null||C.c.G(d).length===0?null:D.iE},
bhH(d,e){var x,w=d.a
if(w===401)return D.iD
x=B.dIz(d.b)
if(x!=null)return x
if(w===404)return D.hj
return e},
cYq(d,e){switch(e){case D.iD:return d.gabk()
case D.Cp:return d.gabu()
case D.Cq:return d.gab9()
case D.Cr:return d.gabp()
case D.vp:return d.gabg()
case D.vq:return d.gab8()
case D.Cs:return d.gabi()
case D.hj:return d.gabn()
case D.Ct:return d.gaba()
case D.NG:return d.gabr()
case D.iE:return d.gab7()
case D.vo:return d.gabd()
case D.hN:return d.gabs()
case null:case void 0:return null}},
EO(d){return this.cSC(d)},
cSC(b6){var x=0,w=A.l(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EO=A.h(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.agC()
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
if(m!=null)A.aM(m,!1).f.aG(H.qt,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aM(m,!1).f.aG(L.z1,y.X)
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
a3=A.aU(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aU(b6.j(0,"clientSeed"))
a5=A.aU(b6.j(0,"nonce"))
x=17
return A.c(s.x.abE(p,q,A.aU(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$EO)
case 17:o=b8
n=J.aH(o,"data")
if(J.r(J.aH(o,"success"),!0)&&y.P.b(n)){m=A.p(y.N,y.z)
J.eV(m,"type","SPIN_RESULT")
J.hU(m,n)
v=m
x=1
break}m=J.aH(o,"message")
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
return A.c(s.x.j7(),$async$EO)
case 22:k=b8
if(J.r(J.aH(k,"success"),!0)){m=y.h
j=m.a(J.aH(k,"data"))
k=j
m=m.a(k==null?null:J.aH(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.p(y.N,y.z):a7
m=A.ml(J.aH(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aH(k,"message")
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
return A.c(s.agw(),$async$EO)
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
return A.c(s.x.a3f(e,d),$async$EO)
case 32:a0=b8
if(J.r(J.aH(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aH(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aH(a0,"message")
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
return A.k($async$EO,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.vi(!0)
x.a6()},
u(d){var x,w,v,u,t=this,s=null,r=A.e(d,C.b,y.J)
r.toString
x=t.f
w=y.p
v=A.a([],w)
u=x==null
if(!u)C.e.A(v,A.a([x,A.e3(0,A.hg(C.bu,s,C.x,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbxS(),s,s,s,s,s,s,!1,C.bZ),108,s,0,s,s,75)],w))
else v.push(t.cvY(d))
if(u)v.push(new A.dS(!0,!0,!0,!0,C.J,!1,new A.cl(C.h3,s,s,A.aK(s,s,s,s,s,D.aKZ,s,s,t.gbxS(),s,s,s,s,r.gha(),s),s),s))
return A.bP(s,D.aqQ,A.de(C.aU,v,C.t,C.aR,s),s,s,s,s,s)},
cvY(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.e(a1,C.b,y.J)
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
if(s){u=e.db?a0.gDP():a0.gOB()
if(e.db){a0=a0.gDP()
r=A.q(a1).ok.y
a0=new A.I(E.b3,A.d(a0,d,d,d,d,d,r==null?d:r.a_(C.E.v(0.78)),C.aH,d,d),d)}else a0=D.bvH
return A.aI(A.P(d,d,d,a0,!1,d,d,d,!1,d,!1,d,d,d,d,d,d,d,d,d,d,d,u,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.p,d),d,d,d)}if((u?d:w.f)==null)q=d
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
h=new B.bkt(r,p,l,k===!0,u===!0,!j,i)
g=e.cYq(a0,i)
if(e.db)f=a0.gDP()
else f=j?d:a0.gabe()
u=x==null?d:x.b
a0=u==null?a0.gabo():u
u=g==null
r=u?f:g
return new B.awo(a0,h,q,m,r,!u,!t,new B.cTh(e,h),new B.cTi(e),d)},
cRt(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aM(x,!1).f.aG(C.er,y.X)
return
case 2:w.ahW()
return
case 3:x=w.c
x.toString
A.aM(x,!1).f.aG(H.qt,y.X)
return
case 4:w.qp()
return
case 5:w.vq()
return
case 6:w.bA1()
return
case 0:return}},
ahW(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahW=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aM(t,!1).f.aG(C.pP,y.X),$async$ahW)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bA1(),$async$ahW)
case 4:case 1:return A.j(v,w)}})
return A.k($async$ahW,w)},
agC(){var x=0,w=A.l(y.H),v,u=this
var $async$agC=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.ahM(),$async$agC)
case 3:case 1:return A.j(v,w)}})
return A.k($async$agC,w)},
ahM(){var x=0,w=A.l(y.H),v,u=this,t
var $async$ahM=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.vi(!0),$async$ahM)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.a2(t,!1).AS(),$async$ahM)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aM(t,!1).f.hk("/home",y.X)}case 1:return A.j(v,w)}})
return A.k($async$ahM,w)},
bRU(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dNA()
if(x.b.test(u)){$.ax.y2$.push(new B.cTl(w,v,t))
return C.yt}return new B.ach(w.bVy(t,Date.now()),w.gd9C(),null)},
bVy(d,e){var x="/games/"+d
return x+(C.c.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d9D(){new B.cU0(this).$0()}}
B.awo.prototype={
u(d){var x=A.e(d,C.b,y.J)
x.toString
return new A.dS(!0,!0,!0,!0,C.J,!1,A.cY(new B.bku(this,x,A.q(d),this.cK_(x))),null)},
cK_(d){switch(this.d.gna().a){case 1:return d.gDQ()
case 2:return d.gYm()
case 3:return d.gabm()
case 4:return d.gabl()
case 5:return d.guV()
case 6:return d.gabj()
case 0:return null}}}
B.aeg.prototype={
u(d){var x=null,w=A.q(d).ok.z,v=w==null,u=v?x:w.a_(C.E.v(0.58))
u=A.Q(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.Q)
return new A.I(M.em,A.z(A.a([u,C.a9,new A.eC(1,C.bm,A.d(this.d,x,x,x,x,x,v,C.j4,x,x),x)],y.p),C.m,x,C.d,C.h,0,x,x),x)}}
B.aws.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aws&&e.a===this.a
else x=!0
return x},
gi(d){var x=C.c.gi(this.a)
return x},
l(d){return"GameSessionStartRequest[clientSessionId="+this.a+"]"},
B(){var x=A.p(y.N,y.z)
x.h(0,"clientSessionId",this.a)
return x}}
var z=a.updateTypes(["S<a0<o,@>?>(a0<o,@>)","S<~>()","~()"])
B.dfM.prototype={
$1(d){var x,w=A.is(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.SX(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dfL.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dfO.prototype={
$1(d){var x,w,v,u,t,s=A.is(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.SX(d.data)
if(!y.f.b(x))return
w=A.p(y.N,y.z)
for(v=x.gd3(),v=v.gam(v);v.F();){u=v.gR()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dfP(this.b,w,d,s).$0()},
$S:9}
B.dfP.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.hp(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bD(q)
t=v.c.source
if(t!=null)r=A.is(t,"Object")
else r=!1
s=v.d
if(r){A.W1(t,"postMessage",u,s,y.X)
B.dqT(u,s)}else{B.dqT(u,s)
b.G.window.postMessage(u,s)}}return A.j(null,w)}})
return A.k($async$$0,w)},
$S:97}
B.dfN.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cTf.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cTg.prototype={
$1(d){var x=this.a.e
x===$&&A.f()
return x},
$S:480}
B.cTz.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cTA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cTB.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cTj.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cTk.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cTC.prototype={
$0(){return null},
$S:17}
B.cTH.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hj},
$S:0}
B.cTI.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.yh(w.b,w.gdrg(),"Telegram Mini App",null,C.ib,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cTJ.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bhH(this.b,D.iE)},
$S:0}
B.cTK.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iE},
$S:0}
B.cTm.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hj},
$S:0}
B.cTn.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hj},
$S:0}
B.cTo.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cTp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cTq.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cTr.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iE:D.hj},
$S:0}
B.cTs.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iE:x},
$S:0}
B.cTt.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hN},
$S:0}
B.cTu.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bYm(x.r)
if(w==null)x=x.b===!0?null:D.iE
else x=w
v.id=x},
$S:0}
B.cTv.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhH(this.b,D.iE)},
$S:0}
B.cTw.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iE},
$S:0}
B.cTS.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cTT.prototype={
$0(){return this.a.id=D.hj},
$S:0}
B.cTU.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cTV.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cTW.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iD},
$S:0}
B.cTX.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cTY.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.NM?D.vp:D.Ct},
$S:0}
B.cTZ.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cU_.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vo},
$S:0}
B.cU1.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hN},
$S:0}
B.cU2.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cU3.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iD},
$S:0}
B.cU4.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cU5.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hN},
$S:0}
B.cU6.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cU7.prototype={
$0(){var x=this.a
x.f=x.bRU()
x.fx=!1},
$S:0}
B.cU8.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bhH(this.b,D.hN)},
$S:0}
B.cU9.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hN},
$S:0}
B.cTL.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cTM.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cTN.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cTO.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iD},
$S:0}
B.cTP.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cTQ.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cTR.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hN},
$S:0}
B.cTD.prototype={
$0(){return this.a.bZn("game-access")},
$S:28}
B.cTE.prototype={
$2(d,e){return $.i5().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:39}
B.cTx.prototype={
$2(d,e){return $.i5().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:39}
B.cTF.prototype={
$0(){return this.a.bZn("game-session")},
$S:28}
B.cTG.prototype={
$2(d,e){return $.i5().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:39}
B.cTy.prototype={
$2(d,e){return $.i5().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:39}
B.cTh.prototype={
$0(){return this.a.cRt(this.b.gna())},
$S:0}
B.cTi.prototype={
$0(){this.a.bA1()
return null},
$S:0}
B.cTl.prototype={
$1(d){return this.cf1(d)},
cf1(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
return A.c(h.r.ho(!0),$async$$1)
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
$.i5().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a2A(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.beO())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.agw(),$async$$1)
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
$.i5().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.a2(l,!1).AS(),$async$$1)
case 23:h=h.bVy(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$$1,w)},
$S:375}
B.cU0.prototype={
$0(){var x=0,w=A.l(y.a),v=this,u,t
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.yu(),$async$$0)
case 2:t=e
B.drX(t)
u=y.H
x=3
return A.c(A.dr(D.aCL,null,u),$async$$0)
case 3:B.drX(t)
x=4
return A.c(A.dr(D.aCt,null,u),$async$$0)
case 4:B.drX(t)
return A.j(null,w)}})
return A.k($async$$0,w)},
$S:97}
B.bku.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.k.cf(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.abb(w)
u=A.B(8)
t=A.aE(C.E.v(0.12),C.v,1)
s=l.c.ok
r=s.f
q=y.p
r=A.a([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.B),C.aH,k,k)],q)
if(x.x){w=j.gOC()
p=s.z
w=A.a([F.dW,A.d(w,k,k,k,k,k,p==null?k:p.a_(C.E.v(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gabq()
if(o)p="-"
o=j.gabh()
m=x.f
if(m==null)m="-"
C.e.A(w,A.a([I.H1,new B.aeg(n,p,k),new B.aeg(o,m,k)],q))}C.e.A(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a_(x.w?D.apt:D.aqg)
C.e.A(r,A.a([I.H1,A.P(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bQ8,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.bq(C.nm,A.a([C.n0,A.d(w.c?j.gabc():j.gOB(),k,k,k,k,k,k,C.aH,k,k)],q),C.bG,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.e.A(r,A.a([D.bvJ,A.cD(o,D.bMD,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gna()!==D.qH
else w=!1
if(w)C.e.A(r,A.a([F.dW,A.aJ(A.d(j.gabf(),k,k,k,k,k,k,C.aH,k,k),D.bMY,k,k,x.z,k,k)],q))
return A.b4(new A.ba(new A.at(0,1/0,i,1/0),A.aI(A.P(k,k,k,new A.ba(K.K7,new A.c_(new A.O(D.aoG,k,t,u,k,k,C.r),C.aq,new A.I(E.b3,A.w(r,C.aj,k,C.d,C.H,0,C.j),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.bSA,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.x,k,k,D.aEc,k,k,C.y)},
$S:93};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.alX.prototype,"gcSB","EO",0)
w(v,"gbxS","agC",1)
w(v,"gd9C","d9D",2)})();(function inheritance(){var x=a.inheritMany
x(A.ef,[B.o_,B.AA,B.awn])
x(A.D,[B.bkt,B.aws])
x(A.bt,[B.dfM,B.dfO,B.cTf,B.cTg,B.cTl])
x(A.bv,[B.dfL,B.dfP,B.dfN,B.cTz,B.cTA,B.cTB,B.cTj,B.cTk,B.cTC,B.cTH,B.cTI,B.cTJ,B.cTK,B.cTm,B.cTn,B.cTo,B.cTp,B.cTq,B.cTr,B.cTs,B.cTt,B.cTu,B.cTv,B.cTw,B.cTS,B.cTT,B.cTU,B.cTV,B.cTW,B.cTX,B.cTY,B.cTZ,B.cU_,B.cU1,B.cU2,B.cU3,B.cU4,B.cU5,B.cU6,B.cU7,B.cU8,B.cU9,B.cTL,B.cTM,B.cTN,B.cTO,B.cTP,B.cTQ,B.cTR,B.cTD,B.cTF,B.cTh,B.cTi,B.cU0])
x(A.J,[B.ach,B.Cg])
x(A.R,[B.aWe,B.alX])
x(A.bZ,[B.cTE,B.cTx,B.cTG,B.cTy,B.bku])
x(A.x,[B.awo,B.aeg])})()
A.aS(b.typeUniverse,JSON.parse('{"ach":{"J":[],"m":[]},"aWe":{"R":["ach"]},"Cg":{"J":[],"m":[]},"alX":{"R":["Cg"]},"awo":{"x":[],"m":[]},"aeg":{"x":[],"m":[]}}'))
var y=(function rtii(){var x=A.A
return{J:x("bx"),u:x("S<a0<o,@>?>"),T:x("FN"),w:x("jT"),s:x("v<o>"),p:x("v<m>"),P:x("a0<o,@>"),f:x("a0<@,@>"),a:x("b8"),A:x("Q9"),N:x("o"),x:x("QA"),r:x("vS"),O:x("W<o>"),y:x("K"),z:x("@"),h:x("a0<o,@>?"),X:x("D?"),H:x("~")}})();(function constants(){D.aoG=new A.Z(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.apt=new A.Z(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.aqg=new A.Z(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.z)
D.aqQ=new A.Z(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aCt=new A.bL(175e4)
D.aCL=new A.bL(75e4)
D.aEc=new A.ao(20,64,20,24)
D.NF=new B.awn(0,"purchase")
D.aGE=new B.awn(1,"session")
D.iD=new B.o_(0,"signInRequired")
D.Cp=new B.o_(1,"telegramAccountNotLinked")
D.iE=new B.o_(10,"requestFailed")
D.vo=new B.o_(11,"purchaseFailed")
D.hN=new B.o_(12,"sessionFailed")
D.Cq=new B.o_(2,"insufficientBalance")
D.Cr=new B.o_(3,"walletInactive")
D.vp=new B.o_(4,"refundPending")
D.vq=new B.o_(5,"accessExpired")
D.Cs=new B.o_(6,"accessRequired")
D.hj=new B.o_(7,"gameUnavailable")
D.Ct=new B.o_(8,"accessNotActive")
D.NG=new B.o_(9,"sessionDenied")
D.NH=new B.AA(0,"none")
D.aGF=new B.AA(1,"signIn")
D.aGG=new B.AA(2,"bindTelegram")
D.aGH=new B.AA(3,"topUp")
D.aGI=new B.AA(4,"purchase")
D.aGJ=new B.AA(5,"openGame")
D.qH=new B.AA(6,"retry")
D.aKZ=new A.aq(C.jA,null,C.E,null,null)
D.anT=new A.mt(2.5,null,null,null,null,null,null,null,null,null)
D.bvH=new A.ae(28,28,D.anT,null)
D.bvJ=new A.ae(null,22,null,null)
D.bMD=new A.W("slot-game-access-primary",y.O)
D.bMY=new A.W("slot-game-access-refresh",y.O)
D.bQ8=new A.W("slot-game-access-message",y.O)
D.bSA=new A.W("slot-game-access-gate",y.O)})();(function staticFields(){$.a6D=function(){var x=y.N
return A.p(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"es0","dNA",()=>A.bg("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"et_","i5",()=>A.aW("SlotGamePage"))})()};
(a=>{a["0OXggb+zGcvzE6Um/VtqQezXMc4="]=a.current})($__dart_deferred_initializers__);