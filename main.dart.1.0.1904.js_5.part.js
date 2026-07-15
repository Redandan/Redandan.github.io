((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHt(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.Cy
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.Cz
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.CA
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.vn
if(C.b.t(x,"ACCESS_EXPIRED"))return D.vo
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.CB
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hf
return null},
dno(d,e,f){var x=e==null?null:C.b.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nT:function nT(d,e){this.a=d
this.b=e},
zQ:function zQ(d,e){this.a=d
this.b=e},
ayj:function ayj(d,e){this.a=d
this.b=e},
bjU:function bjU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
egO(d){var x=b.G,w=A.f0(new B.dci(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dch(w)},
egP(d){var x=b.G,w=A.f0(new B.dck(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dcj(w)},
dnO(d){B.dmJ(A.bB(d),b.G.window.location.origin)},
dmJ(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ix(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.b.aR(u,e))v=!A.nu(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dci:function dci(d,e){this.a=d
this.b=e},
dch:function dch(d){this.a=d},
dck:function dck(d,e){this.a=d
this.b=e},
dcl:function dcl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dcj:function dcj(d){this.a=d},
ae2:function ae2(d,e,f){this.c=d
this.d=e
this.a=f},
aYD:function aYD(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cPB:function cPB(d){this.a=d},
cPC:function cPC(d){this.a=d},
dB5(d,e){return new B.Gh(d,e,null)},
Gh:function Gh(d,e,f){this.c=d
this.d=e
this.a=f},
ao_:function ao_(d,e,f,g){var _=this
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
cPV:function cPV(d,e){this.a=d
this.b=e},
cPW:function cPW(d,e){this.a=d
this.b=e},
cPX:function cPX(d){this.a=d},
cPF:function cPF(d,e){this.a=d
this.b=e},
cPG:function cPG(d,e){this.a=d
this.b=e},
cPY:function cPY(){},
cQ2:function cQ2(d,e){this.a=d
this.b=e},
cQ3:function cQ3(d,e){this.a=d
this.b=e},
cQ4:function cQ4(d,e){this.a=d
this.b=e},
cQ5:function cQ5(d){this.a=d},
cPI:function cPI(d,e){this.a=d
this.b=e},
cPJ:function cPJ(d){this.a=d},
cPK:function cPK(d){this.a=d},
cPL:function cPL(d){this.a=d},
cPM:function cPM(d){this.a=d},
cPN:function cPN(d,e){this.a=d
this.b=e},
cPO:function cPO(d,e){this.a=d
this.b=e},
cPP:function cPP(d,e){this.a=d
this.b=e},
cPQ:function cPQ(d,e){this.a=d
this.b=e},
cPR:function cPR(d,e){this.a=d
this.b=e},
cPS:function cPS(d){this.a=d},
cQd:function cQd(d){this.a=d},
cQe:function cQe(d){this.a=d},
cQf:function cQf(d){this.a=d},
cQg:function cQg(d){this.a=d},
cQh:function cQh(d){this.a=d},
cQi:function cQi(d){this.a=d},
cQj:function cQj(d,e){this.a=d
this.b=e},
cQk:function cQk(d,e){this.a=d
this.b=e},
cQl:function cQl(d){this.a=d},
cQn:function cQn(d){this.a=d},
cQo:function cQo(d){this.a=d},
cQp:function cQp(d){this.a=d},
cQq:function cQq(d){this.a=d},
cQr:function cQr(d){this.a=d},
cQs:function cQs(d,e,f){this.a=d
this.b=e
this.c=f},
cQt:function cQt(d){this.a=d},
cQu:function cQu(d,e){this.a=d
this.b=e},
cQv:function cQv(d){this.a=d},
cQ6:function cQ6(d){this.a=d},
cQ7:function cQ7(d){this.a=d},
cQ8:function cQ8(d){this.a=d},
cQ9:function cQ9(d){this.a=d},
cQa:function cQa(d){this.a=d},
cQb:function cQb(d){this.a=d},
cQc:function cQc(d){this.a=d},
cPZ:function cPZ(d){this.a=d},
cQ_:function cQ_(){},
cPT:function cPT(){},
cQ0:function cQ0(d){this.a=d},
cQ1:function cQ1(){},
cPU:function cPU(){},
cPD:function cPD(d,e){this.a=d
this.b=e},
cPE:function cPE(d){this.a=d},
cPH:function cPH(d,e,f){this.a=d
this.b=e
this.c=f},
cQm:function cQm(d){this.a=d},
ayk:function ayk(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjV:function bjV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agn:function agn(d,e,f){this.c=d
this.d=e
this.a=f},
eho(d){var x,w,v=C.b.G(d)
if(v.length===0)return null
x=A.pw(v)
w=!0
if(x!=null)if(x.ge6().toLowerCase()==="https")if(x.ga17().length===0)w=x.gWC()&&x.gKm()!==443||!C.aaZ.t(0,x.gmP().toLowerCase())||x.gK9().length===0
if(w)return null
return x.c9Y("telegram.me")},
dnG(d){return d.c?d:A.ds7(A.bz(d),A.bC(d),A.c1(d),A.hB(d),A.n2(d),A.Mp(d),A.aDi(d),d.b)},
e2P(d){var x
if(d==null||d.length===0)return null
x=A.dB3().j(0,d)
return(x==null?null:x.e===C.i7)===!1?x:null},
zP(d,e,f,g){var x=null
return B.dVP(d,e,f,g)},
dVP(d,e,f,a0){var x=0,w=A.m(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zP=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a89.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dIq():k).$0(),$async$zP)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a89.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q2(s,a0),$async$zP)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a89.h(0,a0,q)
x=15
return A.c(s.eP("String",a0,q),$async$zP)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q2(s,e),$async$zP)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q2(s,e),$async$zP)
case 21:case 20:case 12:o=d.$0()
$.a89.h(0,a0,o)
x=22
return A.c(s.eP("String",a0,o),$async$zP)
case 22:n=a2
if(!n){k=A.b6("Game access attempt id was not persisted.")
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
v=$.a89.c6(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$zP,w)},
a8a(d,e){var x=null
return B.dVO(d,e)},
dVO(d,e){var x=0,w=A.m(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a8a=A.i(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.dk(0)
for(p=J.aL(l);p.F();)$.a89.V(0,p.gN())
v=3
p=m
x=6
return A.c((p==null?A.dIq():p).$0(),$async$a8a)
case 6:t=g
p=J.aL(l)
case 7:if(!p.F()){x=8
break}s=p.gN()
o=s
t.a.V(0,o)
x=9
return A.c($.a3u().V(0,"flutter."+o),$async$a8a)
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
return A.l($async$a8a,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[89]
B.nT.prototype={
Y(){return"GameAccessIssue."+this.b}}
B.zQ.prototype={
Y(){return"GameAccessPrimaryAction."+this.b}}
B.ayj.prototype={
Y(){return"GameAccessAttemptKind."+this.b}}
B.bjU.prototype={
gmY(){var x=this
if(x.b||x.c||!x.a)return D.PN
if(x.f)return D.aNX
switch(x.r){case D.iA:return D.aNT
case D.Cy:return D.aNU
case D.Cz:case D.CA:return D.aNV
case D.vn:case D.hf:return D.PN
case D.vo:case D.CB:case D.CC:case D.PM:case D.iB:case D.vm:return D.qF
case D.hK:return D.qF
case null:case void 0:if(x.e)return D.qF
return x.d?D.aNW:D.qF}}}
B.ae2.prototype={
T(){return new B.aYD()}}
B.aYD.prototype={
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
v=A.f0(new B.cPB(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b2W()
$.CG().ZC(x,new B.cPC(u),!0)},
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
return A.djv(null,C.FE,x)}}
B.Gh.prototype={
T(){var x=$.aA()
return new B.ao_(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.ao_.prototype={
gbx_(){var x,w=this.y
if(w===$){x=$.aA().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new A.aDz(x)}return w},
a0(){var x,w,v=this
v.a6()
x=v.a
if(x.d!=null){v.Qx()
return}w=v.d=B.e2P(x.c)
if(w==null){v.fx=!1
v.id=D.hf
return}if(!w.gbEl()){v.fx=!1
v.id=D.hf
return}if(w.e!==C.i7){v.fx=!1
v.k1=B.egO(v.gbv4())
v.k2=B.egP(v.gcP9())
v.afb()
v.ax=v.agx()
return}},
bd(){var x,w=this
w.bV()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i7){w.fr=!0
w.f=w.bOP()}},
afb(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$afb=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hw(),$async$afb)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cPV(t,s))
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
return A.c(t.r.hh(!0),$async$afb)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cPW(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a3H(o,4))}catch(h){n=A.u(h)
$.hJ().k(C.aE,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cPX(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$afb,w)},
xV(){return this.cuc()},
cuc(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$xV=A.i(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hw(),$async$xV)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cPF(a0,s))
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
return A.c(s.r.pS(),$async$xV)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cPG(a0,s))
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
return A.c(s.r.pS(),$async$xV)
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
return A.c(s.afr(),$async$xV)
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
return A.l($async$xV,w)},
afr(){var x=0,w=A.m(y.h),v,u=this,t,s
var $async$afr=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.agx()
v=t.wJ(C.Os,new B.cPY())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$afr,w)},
agx(){var x=0,w=A.m(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$agx=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bb5(l.a),$async$agx)
case 7:q=e
if(J.r(J.aE(q,"success"),!0)&&y.f.b(J.aE(q,"data"))){p=A.uB(y.f.a(J.aE(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aY.jS(p,null))}catch(j){o=A.u(j)
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
return A.l($async$agx,w)},
Qx(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Qx=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbx_().n8(l),$async$Qx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cQ2(s,r))
x=1
break}s.p(new B.cQ3(s,r))
x=8
return A.c(s.ox(),$async$Qx)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l6){q=m
$.hJ().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQ4(s,q))}else{p=m
o=A.aH(k)
m=$.hJ()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQ5(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Qx,w)},
ox(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$ox=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i7){if(s.c==null){x=1
break}s.p(new B.cPI(s,f))
x=1
break}if(!f.gbEl()){if(s.c==null){x=1
break}s.p(new B.cPJ(s))
x=1
break}if(s.c!=null)s.p(new B.cPK(s))
u=4
x=7
return A.c(s.w.hw(),$async$ox)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cPL(s))
x=1
break}if(s.c==null){x=1
break}q=s.bcr(r)
if(q==null){s.p(new B.cPM(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbx_().a.BF(d),$async$ox)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cPN(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bVc(p.r)
if(p.b!==!0||o!=null){s.p(new B.cPO(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cPP(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hK)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.d8R(!0),$async$ox)
case 13:case 12:x=1
break
case 10:s.p(new B.cPQ(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l6){m=k
$.hJ().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cPR(s,m))}else{l=k
$.hJ().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cPS(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$ox,w)},
bxb(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.Qx()
return w.ox()},
q8(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$q8=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i7){if(s.c==null){x=1
break}if(h)s.p(new B.cQd(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cQe(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.ox(),$async$q8)
case 5:x=1
break
case 4:s.p(new B.cQf(s))
u=7
x=10
return A.c(s.w.hw(),$async$q8)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cQg(s))
x=1
break}if(s.c==null){x=1
break}o=s.bcr(p)
if(o==null){s.p(new B.cQh(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bxo(o)
x=13
return A.c(s.ox(),$async$q8)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.bwa(),$async$q8)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbx_().a.KA(q,new A.a8b(n)),$async$q8)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.PR?16:17
break
case 16:x=18
return A.c(s.aep(),$async$q8)
case 18:if(s.c==null){x=1
break}s.p(new B.cQi(s))
x=19
return A.c(s.ox(),$async$q8)
case 19:x=1
break
case 17:s.p(new B.cQj(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l6?20:22
break
case 20:l=h
$.hJ().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bfl(l,D.vm)
f=l.b.toUpperCase()
x=k===D.vo||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aep(),$async$q8)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cQk(s,k))
x=21
break
case 22:j=h
$.hJ().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cQl(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$q8,w)},
lG(d,e){return this.d8S(d,!0)},
d8R(d){return this.lG(!0,d)},
d8S(b9,c0){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lG=A.i(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.cy
b1=s.ay
if(b6.e===C.i7){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.p(new B.cQn(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cQo(s))
u=4
x=7
return A.c(s.w.hw(),$async$lG)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bcr(p)
if(o==null){s.p(new B.cQp(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bxo(o)
x=10
return A.c(s.ox(),$async$lG)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.uS(!0),$async$lG)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cQq(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bwb(),$async$lG)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.Dj(b6.a,new A.a8c(n)),$async$lG)
case 15:m=c2
l=new A.az(Date.now(),0,!1).S()
k=m==null?null:B.eho(m.w)
j=m==null?null:B.dnG(m.f)
i=m==null?null:B.dnG(m.r)
h=m==null?null:B.dnG(m.x)
b2=m
g=(b2==null?null:b2.e)===C.PT
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.S().bS(l.S()).a)<=3e8
b2=i
a2=(b2==null?null:b2.iR(l))===!0
b2=h
a3=(b2==null?null:b2.iR(l))===!0
a4=h!=null&&i!=null&&!h.iR(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.b([],y.s)
if(!g)J.bV(a7,"status")
if(!f)J.bV(a7,"session_id")
if(!e)J.bV(a7,"entitlement")
if(!d)J.bV(a7,"game_key")
if(!a0)J.bV(a7,"client_session")
if(!a1)J.bV(a7,"session_started_at")
if(!a2)J.bV(a7,"session_expiry")
if(!a3)J.bV(a7,"launch_expiry")
if(!a4)J.bV(a7,"launch_expiry_bound")
if(!a5)J.bV(a7,"launch_url_untrusted")
a8=a7
$.hJ().k(C.q,"game session response rejected: "+J.a3E(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.E7(b6.a,!0,m.a),$async$lG)
case 20:case 19:x=21
return A.c(s.Pm(),$async$lG)
case 21:if(s.c==null){x=1
break}s.p(new B.cQr(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.uS(!0),$async$lG)
case 24:x=1
break
case 23:x=b6.e===C.i7?25:26
break
case 25:s.p(new B.cQs(s,k,h))
x=27
return A.c(s.v_(),$async$lG)
case 27:x=1
break
case 26:s.p(new B.cQt(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.l6?28:30
break
case 28:a9=a7
$.hJ().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.Pm(),$async$lG)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lG(!1,!0),$async$lG)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cQu(s,a9))
x=29
break
case 30:b0=a7
$.hJ().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cQv(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$lG,w)},
v_(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$v_=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cQ6(s))
x=!k.iR(new A.az(Date.now(),0,!1).S())?3:4
break
case 3:x=5
return A.c(s.uS(!0),$async$v_)
case 5:if(s.c==null){x=1
break}s.p(new B.cQ7(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hw(),$async$v_)
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
break}s.p(new B.cQ8(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bcr(q)
if(g==null){s.p(new B.cQ9(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bxo(g)
x=13
return A.c(s.ox(),$async$v_)
case 13:x=1
break
case 12:u=15
s.p(new B.cQa(s))
x=18
return A.c(A.yC(r,C.oj,"_self"),$async$v_)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cQb(s))
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
return A.c(s.uS(!0),$async$v_)
case 19:if(s.c==null){x=1
break}s.p(new B.cQc(s))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$v_,w)},
uS(d){return this.cEz(!0)},
cEz(d){var x=0,w=A.m(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$uS=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.E7(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$uS)
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
return A.l($async$uS,w)},
E7(d,e,f){return this.cEG(d,!0,f)},
cEG(d,e,f){var x=0,w=A.m(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$E7=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.HD(d,f),$async$E7)
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
return A.c(A.dd(C.Bm,null,l),$async$E7)
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
return A.c(s.Pm(),$async$E7)
case 15:case 14:v=p
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$E7,w)},
bwa(){var x=0,w=A.m(y.N),v,u=this,t
var $async$bwa=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.gbXQ()
v=B.zP(new B.cPZ(u),u.gbVl(),new B.cQ_(),t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bwa,w)},
aep(){var x=0,w=A.m(y.H),v=this
var $async$aep=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a8a(new B.cPT(),A.e8([v.gbXQ(),v.gbVl()],y.N)),$async$aep)
case 2:return A.k(null,w)}})
return A.l($async$aep,w)},
bwb(){var x=0,w=A.m(y.N),v,u=this
var $async$bwb=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:v=B.zP(new B.cQ0(u),null,new B.cQ1(),u.gbZS())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bwb,w)},
Pm(){var x=0,w=A.m(y.H),v=this
var $async$Pm=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a8a(new B.cPU(),A.e8([v.gbZS()],y.N)),$async$Pm)
case 2:return A.k(null,w)}})
return A.l($async$Pm,w)},
bcr(d){var x=A.dvw(d),w=x==null?null:C.b.G(x)
return w==null||w.length===0?null:w},
bxo(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gbXQ(){var x=this.a.d
x=A.a(x==null?"unknown":x)
return B.dno(D.PL,this.cy,"product-"+x)},
gbVl(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dno(D.PL,this.cy,x)},
gbZS(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.dno(D.aNS,this.cy,x)},
bWa(d){var x,w=Date.now(),v=C.d.n0($.b2M().Jq(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.a(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bVc(d){var x=B.dHt(d)
if(x!=null)return x
return d==null||C.b.G(d).length===0?null:D.iB},
bfl(d,e){var x,w=d.a
if(w===401)return D.iA
x=B.dHt(d.b)
if(x!=null)return x
if(w===404)return D.hf
return e},
cUZ(d,e){switch(e){case D.iA:return d.gaae()
case D.Cy:return d.gaao()
case D.Cz:return d.gaa3()
case D.CA:return d.gaaj()
case D.vn:return d.gaaa()
case D.vo:return d.gaa2()
case D.CB:return d.gaac()
case D.hf:return d.gaah()
case D.CC:return d.gaa4()
case D.PM:return d.gaal()
case D.iB:return d.gaa1()
case D.vm:return d.gaa7()
case D.hK:return d.gaam()
case null:case void 0:return null}},
Ef(d){return this.cPa(d)},
cPa(b6){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ef=A.i(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.afx()
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
case 5:v=s.xV()
x=1
break
case 6:m=s.c
if(m!=null)A.aN(m,!1).f.aG(C.qu,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aN(m,!1).f.aG(C.z7,y.X)
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
return A.c(s.x.aay(p,q,A.aW(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$Ef)
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
return A.c(s.x.jH(),$async$Ef)
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
return A.c(s.afr(),$async$Ef)
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
return A.c(s.x.a26(e,d),$async$Ef)
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
return A.l($async$Ef,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.uS(!0)
x.a7()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
x=t.f
w=y.p
v=A.b([],w)
u=x==null
if(!u)C.f.C(v,A.b([x,A.dN(0,A.h2(C.c9,s,C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbv4(),s,s,s,s,s,s,!1,C.bU),108,s,0,s,s,75)],w))
else v.push(t.cst(d))
if(u)v.push(new A.dG(!0,!0,!0,!0,C.J,!1,new A.cd(C.ij,s,s,A.aM(s,s,s,s,s,D.aSW,s,s,t.gbv4(),s,s,s,s,r.gh2(),s),s),s))
return A.bP(s,D.auJ,A.d2(C.aT,v,C.t,C.aQ,s),s,s,s,s,s)},
cst(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.db?a0.gDe():a0.gO5()
if(e.db){a0=a0.gDe()
r=A.p(a1).ok.y
a0=new A.G(C.b2,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.E.B(0.78)),C.aI,d,d),d)}else a0=D.bJ8
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbEl())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bjU(r,p,l,k===!0,u===!0,!j,i)
g=e.cUZ(a0,i)
if(e.db)f=a0.gDe()
else f=j?d:a0.gaa8()
u=x==null?d:x.b
a0=u==null?a0.gaai():u
u=g==null
r=u?f:g
return new B.ayk(a0,h,q,m,r,!u,!t,new B.cPD(e,h),new B.cPE(e),d)},
cO1(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aN(x,!1).f.aG(C.eq,y.X)
return
case 2:w.agR()
return
case 3:x=w.c
x.toString
A.aN(x,!1).f.aG(C.qu,y.X)
return
case 4:w.q8()
return
case 5:w.v_()
return
case 6:w.bxb()
return
case 0:return}},
agR(){var x=0,w=A.m(y.H),v,u=this,t
var $async$agR=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aG(C.pO,y.X),$async$agR)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bxb(),$async$agR)
case 4:case 1:return A.k(v,w)}})
return A.l($async$agR,w)},
afx(){var x=0,w=A.m(y.H),v,u=this
var $async$afx=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.agH(),$async$afx)
case 3:case 1:return A.k(v,w)}})
return A.l($async$afx,w)},
agH(){var x=0,w=A.m(y.H),v,u=this,t
var $async$agH=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.uS(!0),$async$agH)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.Y(t,!1).Am(),$async$agH)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aN(t,!1).f.i0("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$agH,w)},
bOP(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.ao
u=b.G.window.navigator.userAgent
x=$.dMn()
if(x.b.test(u)){$.aG.y2$.push(new B.cPH(w,v,t))
return C.yz}return new B.ae2(w.bSs(t,Date.now()),w.gd5U(),null)},
bSs(d,e){var x="/games/"+d
return x+(C.b.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d5V(){new B.cQm(this).$0()}}
B.ayk.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dG(!0,!0,!0,!0,C.J,!1,A.d1(new B.bjV(this,x,A.p(d),this.cGz(x))),null)},
cGz(d){switch(this.d.gmY().a){case 1:return d.gDf()
case 2:return d.gXs()
case 3:return d.gaag()
case 4:return d.gaaf()
case 5:return d.gux()
case 6:return d.gaad()
case 0:return null}}}
B.agn.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a1(C.E.B(0.58))
u=A.L(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aI(C.E,C.R)
return new A.G(C.el,A.w(A.b([u,C.a9,new A.et(1,C.bt,A.d(this.d,x,x,x,x,x,v,C.j0,x,x),x)],y.p),C.m,x,C.e,C.i,0,x,x),x)}}
var z=a.updateTypes(["a9<U<q,@>?>(U<q,@>)","a9<~>()","~()"])
B.dci.prototype={
$1(d){var x,w=A.ix(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.a3f(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dch.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dck.prototype={
$1(d){var x,w,v,u,t,s=A.ix(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.a3f(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd5(),v=v.gan(v);v.F();){u=v.gN()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dcl(this.b,w,d,s).$0()},
$S:9}
B.dcl.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h8(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bB(q)
t=v.c.source
if(t!=null)r=A.ix(t,"Object")
else r=!1
s=v.d
if(r){A.azF(t,"postMessage",u,s,y.X)
B.dmJ(u,s)}else{B.dmJ(u,s)
b.G.window.postMessage(u,s)}}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:94}
B.dcj.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cPB.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cPC.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:556}
B.cPV.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cPW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cPX.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cPF.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cPG.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cPY.prototype={
$0(){return null},
$S:14}
B.cQ2.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hf},
$S:0}
B.cQ3.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xJ(w.b,w.gdnp(),"Telegram Mini App",null,C.i7,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cQ4.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bfl(this.b,D.iB)},
$S:0}
B.cQ5.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iB},
$S:0}
B.cPI.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hf},
$S:0}
B.cPJ.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hf},
$S:0}
B.cPK.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cPL.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iA},
$S:0}
B.cPM.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iA},
$S:0}
B.cPN.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iB:D.hf},
$S:0}
B.cPO.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iB:x},
$S:0}
B.cPP.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hK},
$S:0}
B.cPQ.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bVc(x.r)
if(w==null)x=x.b===!0?null:D.iB
else x=w
v.id=x},
$S:0}
B.cPR.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bfl(this.b,D.iB)},
$S:0}
B.cPS.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iB},
$S:0}
B.cQd.prototype={
$0(){return this.a.id=D.hf},
$S:0}
B.cQe.prototype={
$0(){return this.a.id=D.hf},
$S:0}
B.cQf.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cQg.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iA},
$S:0}
B.cQh.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iA},
$S:0}
B.cQi.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cQj.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.PS?D.vn:D.CC},
$S:0}
B.cQk.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cQl.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vm},
$S:0}
B.cQn.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hK},
$S:0}
B.cQo.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cQp.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iA},
$S:0}
B.cQq.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cQr.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hK},
$S:0}
B.cQs.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cQt.prototype={
$0(){var x=this.a
x.f=x.bOP()
x.fx=!1},
$S:0}
B.cQu.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bfl(this.b,D.hK)},
$S:0}
B.cQv.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cQ6.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cQ7.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cQ8.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iA},
$S:0}
B.cQ9.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iA},
$S:0}
B.cQa.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cQb.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cQc.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cPZ.prototype={
$0(){return this.a.bWa("game-access")},
$S:25}
B.cQ_.prototype={
$2(d,e){return $.hJ().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:36}
B.cPT.prototype={
$2(d,e){return $.hJ().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:36}
B.cQ0.prototype={
$0(){return this.a.bWa("game-session")},
$S:25}
B.cQ1.prototype={
$2(d,e){return $.hJ().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:36}
B.cPU.prototype={
$2(d,e){return $.hJ().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:36}
B.cPD.prototype={
$0(){return this.a.cO1(this.b.gmY())},
$S:0}
B.cPE.prototype={
$0(){this.a.bxb()
return null},
$S:0}
B.cPH.prototype={
$1(d){return this.cbB(d)},
cbB(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hw(),$async$$1)
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
l.window.localStorage.setItem("_flutter_game_balance",J.a3H(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.bcv())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.afr(),$async$$1)
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
return A.c(A.Y(l,!1).Am(),$async$$1)
case 23:h=h.bSs(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:337}
B.cQm.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.xV(),$async$$0)
case 2:t=e
B.dnO(t)
u=y.H
x=3
return A.c(A.dd(D.aJW,null,u),$async$$0)
case 3:B.dnO(t)
x=4
return A.c(A.dd(D.aJE,null,u),$async$$0)
case 4:B.dnO(t)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:94}
B.bjV.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.j.cJ(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aa5(w)
u=A.A(8)
t=A.aF(C.E.B(0.12),C.w,1)
s=l.c.ok
r=s.f
q=y.p
r=A.b([A.d(w,k,k,k,k,k,r==null?k:r.aI(C.E,C.B),C.aI,k,k)],q)
if(x.x){w=j.gO6()
p=s.z
w=A.b([C.ed,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.E.B(0.72)),C.aI,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gaak()
if(o)p="-"
o=j.gaab()
m=x.f
if(m==null)m="-"
C.f.C(w,A.b([C.HM,new B.agn(n,p,k),new B.agn(o,m,k)],q))}C.f.C(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.atn:D.aua)
C.f.C(r,A.b([C.HM,A.J(k,k,k,A.d(w,k,k,k,k,k,s,C.aI,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3m,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.br(C.tG,A.b([C.pd,A.d(w.c?j.gaa6():j.gO5(),k,k,k,k,k,k,C.aI,k,k)],q),C.bO,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aI,k,k)}C.f.C(r,A.b([D.bJb,A.cn(o,D.c00,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gmY()!==D.qF
else w=!1
if(w)C.f.C(r,A.b([C.ed,A.aJ(A.d(j.gaa9(),k,k,k,k,k,k,C.aI,k,k),D.c0k,k,k,x.z,k,k)],q))
return A.bb(new A.ba(new A.ax(0,1/0,i,1/0),A.aK(A.J(k,k,k,new A.ba(C.La,new A.c5(new A.N(D.asA,k,t,u,k,k,C.r),C.at,new A.G(C.b2,A.v(r,C.al,k,C.e,C.I,0,C.k),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c5E,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.z,k,k,D.aLk,k,k,C.C)},
$S:111};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ao_.prototype,"gcP9","Ef",0)
w(v,"gbv4","afx",1)
w(v,"gd5U","d5V",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.nl,[B.nT,B.zQ,B.ayj])
w(B.bjU,A.V)
x(A.fi,[B.dci,B.dck,B.cPB,B.cPC,B.cPH])
x(A.ha,[B.dch,B.dcl,B.dcj,B.cPV,B.cPW,B.cPX,B.cPF,B.cPG,B.cPY,B.cQ2,B.cQ3,B.cQ4,B.cQ5,B.cPI,B.cPJ,B.cPK,B.cPL,B.cPM,B.cPN,B.cPO,B.cPP,B.cPQ,B.cPR,B.cPS,B.cQd,B.cQe,B.cQf,B.cQg,B.cQh,B.cQi,B.cQj,B.cQk,B.cQl,B.cQn,B.cQo,B.cQp,B.cQq,B.cQr,B.cQs,B.cQt,B.cQu,B.cQv,B.cQ6,B.cQ7,B.cQ8,B.cQ9,B.cQa,B.cQb,B.cQc,B.cPZ,B.cQ0,B.cPD,B.cPE,B.cQm])
x(A.W,[B.ae2,B.Gh])
x(A.a_,[B.aYD,B.ao_])
x(A.hN,[B.cQ_,B.cPT,B.cQ1,B.cPU,B.bjV])
x(A.x,[B.ayk,B.agn])})()
A.fU(b.typeUniverse,JSON.parse('{"ae2":{"W":[],"n":[]},"aYD":{"a_":["ae2"]},"Gh":{"W":[],"n":[]},"ao_":{"a_":["Gh"]},"ayk":{"x":[],"n":[]},"agn":{"x":[],"n":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("f9"),u:x("a9<U<q,@>?>"),T:x("Ks"),w:x("bmf"),s:x("E<q>"),p:x("E<n>"),P:x("U<q,@>"),f:x("U<@,@>"),a:x("bo"),A:x("Og"),N:x("q"),x:x("OP"),r:x("Gz"),O:x("X<q>"),y:x("Q"),z:x("@"),h:x("U<q,@>?"),X:x("V?"),H:x("~")}})();(function constants(){D.asA=new A.Z(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.atn=new A.Z(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.aua=new A.Z(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.A)
D.auJ=new A.Z(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aJE=new A.bJ(175e4)
D.aJW=new A.bJ(75e4)
D.aLk=new A.ao(20,64,20,24)
D.PL=new B.ayj(0,"purchase")
D.aNS=new B.ayj(1,"session")
D.iA=new B.nT(0,"signInRequired")
D.Cy=new B.nT(1,"telegramAccountNotLinked")
D.iB=new B.nT(10,"requestFailed")
D.vm=new B.nT(11,"purchaseFailed")
D.hK=new B.nT(12,"sessionFailed")
D.Cz=new B.nT(2,"insufficientBalance")
D.CA=new B.nT(3,"walletInactive")
D.vn=new B.nT(4,"refundPending")
D.vo=new B.nT(5,"accessExpired")
D.CB=new B.nT(6,"accessRequired")
D.hf=new B.nT(7,"gameUnavailable")
D.CC=new B.nT(8,"accessNotActive")
D.PM=new B.nT(9,"sessionDenied")
D.PN=new B.zQ(0,"none")
D.aNT=new B.zQ(1,"signIn")
D.aNU=new B.zQ(2,"bindTelegram")
D.aNV=new B.zQ(3,"topUp")
D.aNW=new B.zQ(4,"purchase")
D.aNX=new B.zQ(5,"openGame")
D.qF=new B.zQ(6,"retry")
D.aSW=new A.aq(C.jv,null,C.E,null,null)
D.arN=new A.mb(2.5,null,null,null,null,null,null,null,null,null)
D.bJ8=new A.ad(28,28,D.arN,null)
D.bJb=new A.ad(null,22,null,null)
D.c00=new A.X("slot-game-access-primary",y.O)
D.c0k=new A.X("slot-game-access-refresh",y.O)
D.c3m=new A.X("slot-game-access-message",y.O)
D.c5E=new A.X("slot-game-access-gate",y.O)})();(function staticFields(){$.a89=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"epw","dMn",()=>A.bm("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"equ","hJ",()=>A.aY("SlotGamePage"))})()};
(a=>{a["xk4ksbWDgnallv76i78dC5ymSco="]=a.current})($__dart_deferred_initializers__);