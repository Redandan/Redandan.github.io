((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIo(d){var x=d==null?null:d.toUpperCase()
if(x==null)x=""
if(x.length===0)return null
if(C.b.t(x,"TELEGRAM_ACCOUNT_NOT_LINKED"))return D.CA
if(C.b.t(x,"INSUFFICIENT_BALANCE"))return D.CB
if(C.b.t(x,"WALLET_NOT_ACTIVE"))return D.CC
if(C.b.t(x,"REFUND_PENDING")||C.b.t(x,"PENDING_REFUND"))return D.vo
if(C.b.t(x,"ACCESS_EXPIRED"))return D.vp
if(C.b.t(x,"ACCESS_REQUIRED")||C.b.t(x,"ENTITLEMENT_NOT_FOUND"))return D.CD
if(C.b.t(x,"GAME_NOT_AVAILABLE"))return D.hf
return null},
doi(d,e,f){var x=e==null?null:C.b.G(e),w=x==null||x.length===0?"current":x
return"game_access_"+d.b+"_attempt_"+w+"_"+f},
nR:function nR(d,e){this.a=d
this.b=e},
zR:function zR(d,e){this.a=d
this.b=e},
ayu:function ayu(d,e){this.a=d
this.b=e},
bka:function bka(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ehW(d){var x=b.G,w=A.f0(new B.dd6(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dd5(w)},
ehX(d){var x=b.G,w=A.f0(new B.dd8(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.dd7(w)},
doJ(d){B.dnC(A.bC(d),b.G.window.location.origin)},
dnC(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.ie(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.b.aQ(u,e))v=!A.nt(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd5:function dd5(d){this.a=d},
dd8:function dd8(d,e){this.a=d
this.b=e},
dd9:function dd9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dd7:function dd7(d){this.a=d},
aed:function aed(d,e,f){this.c=d
this.d=e
this.a=f},
aYO:function aYO(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cQ4:function cQ4(d){this.a=d},
cQ5:function cQ5(d){this.a=d},
dC_(d,e){return new B.Gj(d,e,null)},
Gj:function Gj(d,e,f){this.c=d
this.d=e
this.a=f},
aoa:function aoa(d,e,f,g){var _=this
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
cQo:function cQo(d,e){this.a=d
this.b=e},
cQp:function cQp(d,e){this.a=d
this.b=e},
cQq:function cQq(d){this.a=d},
cQ8:function cQ8(d,e){this.a=d
this.b=e},
cQ9:function cQ9(d,e){this.a=d
this.b=e},
cQr:function cQr(){},
cQw:function cQw(d,e){this.a=d
this.b=e},
cQx:function cQx(d,e){this.a=d
this.b=e},
cQy:function cQy(d,e){this.a=d
this.b=e},
cQz:function cQz(d){this.a=d},
cQb:function cQb(d,e){this.a=d
this.b=e},
cQc:function cQc(d){this.a=d},
cQd:function cQd(d){this.a=d},
cQe:function cQe(d){this.a=d},
cQf:function cQf(d){this.a=d},
cQg:function cQg(d,e){this.a=d
this.b=e},
cQh:function cQh(d,e){this.a=d
this.b=e},
cQi:function cQi(d,e){this.a=d
this.b=e},
cQj:function cQj(d,e){this.a=d
this.b=e},
cQk:function cQk(d,e){this.a=d
this.b=e},
cQl:function cQl(d){this.a=d},
cQH:function cQH(d){this.a=d},
cQI:function cQI(d){this.a=d},
cQJ:function cQJ(d){this.a=d},
cQK:function cQK(d){this.a=d},
cQL:function cQL(d){this.a=d},
cQM:function cQM(d){this.a=d},
cQN:function cQN(d,e){this.a=d
this.b=e},
cQO:function cQO(d,e){this.a=d
this.b=e},
cQP:function cQP(d){this.a=d},
cQR:function cQR(d){this.a=d},
cQS:function cQS(d){this.a=d},
cQT:function cQT(d){this.a=d},
cQU:function cQU(d){this.a=d},
cQV:function cQV(d){this.a=d},
cQW:function cQW(d,e,f){this.a=d
this.b=e
this.c=f},
cQX:function cQX(d){this.a=d},
cQY:function cQY(d,e){this.a=d
this.b=e},
cQZ:function cQZ(d){this.a=d},
cQA:function cQA(d){this.a=d},
cQB:function cQB(d){this.a=d},
cQC:function cQC(d){this.a=d},
cQD:function cQD(d){this.a=d},
cQE:function cQE(d){this.a=d},
cQF:function cQF(d){this.a=d},
cQG:function cQG(d){this.a=d},
cQs:function cQs(d){this.a=d},
cQt:function cQt(){},
cQm:function cQm(){},
cQu:function cQu(d){this.a=d},
cQv:function cQv(){},
cQn:function cQn(){},
cQ6:function cQ6(d,e){this.a=d
this.b=e},
cQ7:function cQ7(d){this.a=d},
cQa:function cQa(d,e,f){this.a=d
this.b=e
this.c=f},
cQQ:function cQQ(d){this.a=d},
ayv:function ayv(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkb:function bkb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agy:function agy(d,e,f){this.c=d
this.d=e
this.a=f},
eiw(d){var x,w,v=C.b.G(d)
if(v.length===0)return null
x=A.px(v)
w=!0
if(x!=null)if(x.ge6().toLowerCase()==="https")if(x.ga1c().length===0)w=x.gWs()&&x.gKo()!==443||!C.ab7.t(0,x.gmQ().toLowerCase())||x.gKb().length===0
if(w)return null
return x.cae("telegram.me")},
doA(d){return d.c?d:A.dt3(A.bz(d),A.bB(d),A.c2(d),A.hq(d),A.mq(d),A.Mz(d),A.aDs(d),d.b)},
e3M(d){var x
if(d==null||d.length===0)return null
x=A.dBY().j(0,d)
return(x==null?null:x.e===C.i8)===!1?x:null},
zQ(d,e,f,g){var x=null
return B.dWN(d,e,f,g)},
dWN(d,e,f,a0){var x=0,w=A.m(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$zQ=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:i=null
h=$.a8k.j(0,a0)
if(h!=null&&h.length!==0){v=h
x=1
break}u=4
k=i
x=7
return A.c((k==null?A.dJm():k).$0(),$async$zQ)
case 7:s=a2
r=s.a.j(0,a0)
if(typeof r=="string"&&r.length!==0){$.a8k.h(0,a0,r)
v=r
x=1
break}x=r!=null?8:9
break
case 8:x=10
return A.c(J.q3(s,a0),$async$zQ)
case 10:case 9:x=e!=null&&e!==a0?11:12
break
case 11:q=s.a.j(0,e)
x=typeof q=="string"&&q.length!==0?13:14
break
case 13:$.a8k.h(0,a0,q)
x=15
return A.c(s.eQ("String",a0,q),$async$zQ)
case 15:p=a2
x=p?16:17
break
case 16:x=18
return A.c(J.q3(s,e),$async$zQ)
case 18:case 17:v=q
x=1
break
case 14:x=q!=null?19:20
break
case 19:x=21
return A.c(J.q3(s,e),$async$zQ)
case 21:case 20:case 12:o=d.$0()
$.a8k.h(0,a0,o)
x=22
return A.c(s.eQ("String",a0,o),$async$zQ)
case 22:n=a2
if(!n){k=A.b4("Game access attempt id was not persisted.")
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
v=$.a8k.c7(a0,d)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$zQ,w)},
a8l(d,e){var x=null
return B.dWM(d,e)},
dWM(d,e){var x=0,w=A.m(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k
var $async$a8l=A.i(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:m=null
l=e.dk(0)
for(p=J.aL(l);p.F();)$.a8k.V(0,p.gN())
v=3
p=m
x=6
return A.c((p==null?A.dJm():p).$0(),$async$a8l)
case 6:t=g
p=J.aL(l)
case 7:if(!p.F()){x=8
break}s=p.gN()
o=s
t.a.V(0,o)
x=9
return A.c($.a3G().V(0,"flutter."+o),$async$a8l)
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
return A.l($async$a8l,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[98]
B.nR.prototype={
Y(){return"GameAccessIssue."+this.b}}
B.zR.prototype={
Y(){return"GameAccessPrimaryAction."+this.b}}
B.ayu.prototype={
Y(){return"GameAccessAttemptKind."+this.b}}
B.bka.prototype={
gmZ(){var x=this
if(x.b||x.c||!x.a)return D.PU
if(x.f)return D.aO5
switch(x.r){case D.iH:return D.aO1
case D.CA:return D.aO2
case D.CB:case D.CC:return D.aO3
case D.vo:case D.hf:return D.PU
case D.vp:case D.CD:case D.CE:case D.PT:case D.iI:case D.vn:return D.qE
case D.hK:return D.qE
case null:case void 0:if(x.e)return D.qE
return x.d?D.aO4:D.qE}}}
B.aed.prototype={
T(){return new B.aYO()}}
B.aYO.prototype={
a_(){var x,w,v,u=this
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
v=A.f0(new B.cQ4(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b35()
$.CH().Zt(x,new B.cQ5(u),!0)},
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
return A.dkj(null,C.FE,x)}}
B.Gj.prototype={
T(){var x=$.az()
return new B.aoa(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A),x.$1$0(y.x))}}
B.aoa.prototype={
gbx6(){var x,w=this.y
if(w===$){x=$.az().$1$0(y.T)
this.y!==$&&A.bd()
w=this.y=new A.aDJ(x)}return w},
a_(){var x,w,v=this
v.a6()
x=v.a
if(x.d!=null){v.Qk()
return}w=v.d=B.e3M(x.c)
if(w==null){v.fx=!1
v.id=D.hf
return}if(!w.gbEu()){v.fx=!1
v.id=D.hf
return}if(w.e!==C.i8){v.fx=!1
v.k1=B.ehW(v.gbva())
v.k2=B.ehX(v.gcPv())
v.afh()
v.ax=v.agD()
return}},
bd(){var x,w=this
w.bW()
x=w.d
if(!w.fr&&x!=null&&x.e!==C.i8){w.fr=!0
w.f=w.bP0()}},
afh(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$afh=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.w.hz(),$async$afh)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cQo(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.u(h)
$.hK().k(C.aB,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.u(j)
$.hK().k(C.q,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.r.hi(!0),$async$afh)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cQp(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a3T(o,4))}catch(h){n=A.u(h)
$.hK().k(C.aB,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cQq(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$afh,w)},
xY(){return this.cuv()},
cuv(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$xY=A.i(function(a6,a7){if(a6===1){t.push(a7)
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
return A.c(s.w.hz(),$async$xY)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cQ8(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.u(a2)
$.hK().k(C.q,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.u(a5)
$.hK().k(C.aB,"localStorage jwt write failed in shim",p,null)}x=s.Q==null?10:12
break
case 10:u=14
x=17
return A.c(s.r.om(),$async$xY)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cQ9(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.Z(a0.b,4))}catch(a5){n=A.u(a5)
$.hK().k(C.aB,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.u(a3)
$.hK().k(C.q,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.r.om(),$async$xY)
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
$.hK().k(C.q,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.afx(),$async$xY)
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
return A.l($async$xY,w)},
afx(){var x=0,w=A.m(y.h),v,u=this,t,s
var $async$afx=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.at
if(s!=null){v=s
x=1
break}t=u.ax
if(t==null)t=u.ax=u.agD()
v=t.wL(C.Ox,new B.cQr())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$afx,w)},
agD(){var x=0,w=A.m(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$agD=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=r.d
if(l==null){v=null
x=1
break}u=4
x=7
return A.c(r.x.bb2(l.a),$async$agD)
case 7:q=e
if(J.r(J.aE(q,"success"),!0)&&y.f.b(J.aE(q,"data"))){p=A.uC(y.f.a(J.aE(q,"data")),y.N,y.z)
r.at=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aR.iP(p,null))}catch(j){o=A.u(j)
$.hK().k(C.aB,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=A.u(k)
$.hK().k(C.q,"_getSlotRtpData failed",n,null)
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
return A.l($async$agD,w)},
Qk(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Qk=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d
if(l==null){x=1
break}u=4
x=7
return A.c(s.gbx6().n9(l),$async$Qk)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||!r.c){s.p(new B.cQw(s,r))
x=1
break}s.p(new B.cQx(s,r))
x=8
return A.c(s.oy(),$async$Qk)
case 8:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.u(k)
if(m instanceof A.l6){q=m
$.hK().k(C.q,"get product game descriptor failed: "+q.a+" "+q.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQy(s,q))}else{p=m
o=A.aH(k)
m=$.hK()
m.k(C.q,"get product game descriptor failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQz(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Qk,w)},
oy(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$oy=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=s.d
e=s.e
d=s.a.d
if(f==null||e==null||d==null||f.e!==C.i8){if(s.c==null){x=1
break}s.p(new B.cQb(s,f))
x=1
break}if(!f.gbEu()){if(s.c==null){x=1
break}s.p(new B.cQc(s))
x=1
break}if(s.c!=null)s.p(new B.cQd(s))
u=4
x=7
return A.c(s.w.hz(),$async$oy)
case 7:r=a2
if(r==null||r.length===0){if(s.c==null){x=1
break}s.p(new B.cQe(s))
x=1
break}if(s.c==null){x=1
break}q=s.bco(r)
if(q==null){s.p(new B.cQf(s))
x=1
break}k=s.cy
if(k!=null&&k!==q)s.ch=null
s.cy=q
x=8
return A.c(s.gbx6().a.BI(d),$async$oy)
case 8:p=a2
if(s.c==null){x=1
break}if(p==null||p.a!==f.a||p.b==null||p.c==null){s.p(new B.cQg(s,p))
x=1
break}s.ay=p
x=p.c===!0?9:10
break
case 9:o=s.bVq(p.r)
if(p.b!==!0||o!=null){s.p(new B.cQh(s,o))
x=1
break}if(p.w!=null){k=p.w
k.toString
j=k>0}else j=!1
n=j
s.p(new B.cQi(s,n))
k=p.b
i=p.c
h=p.w
x=(n?null:D.hK)==null&&k===!0&&i===!0&&h!=null&&h>0?11:12
break
case 11:x=13
return A.c(s.d9j(!0),$async$oy)
case 13:case 12:x=1
break
case 10:s.p(new B.cQj(s,p))
u=2
x=6
break
case 4:u=3
a0=t.pop()
k=A.u(a0)
if(k instanceof A.l6){m=k
$.hK().k(C.q,"getMyAccess failed: "+m.a+" "+m.b,null,null)
if(s.c==null){x=1
break}s.p(new B.cQk(s,m))}else{l=k
$.hK().k(C.q,"getMyAccess failed",l,null)
if(s.c==null){x=1
break}s.p(new B.cQl(s))}x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$oy,w)},
bxi(){var x,w=this
if(w.a.d!=null)x=w.e==null||w.d==null
else x=!1
if(x)return w.Qk()
return w.oy()},
q8(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$q8=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.fx||s.fy){x=1
break}i=s.d
r=s.cy
h=i==null
if(h||i.e!==C.i8){if(s.c==null){x=1
break}if(h)s.p(new B.cQH(s))
x=1
break}q=s.a.d
if(q!=null){h=s.e
h=h==null?null:h.b
h=h!==i.a}else h=!0
if(h){if(s.c==null){x=1
break}s.p(new B.cQI(s))
x=1
break}h=s.ay
x=(h==null?null:h.b)!==!0?3:4
break
case 3:x=5
return A.c(s.oy(),$async$q8)
case 5:x=1
break
case 4:s.p(new B.cQJ(s))
u=7
x=10
return A.c(s.w.hz(),$async$q8)
case 10:p=a0
if(p==null||p.length===0){if(s.c==null){x=1
break}s.p(new B.cQK(s))
x=1
break}if(s.c==null){x=1
break}o=s.bco(p)
if(o==null){s.p(new B.cQL(s))
x=1
break}x=r==null||r!==o?11:12
break
case 11:s.bxv(o)
x=13
return A.c(s.oy(),$async$q8)
case 13:x=1
break
case 12:s.cy=o
x=14
return A.c(s.bwg(),$async$q8)
case 14:n=a0
if(s.c==null){x=1
break}x=15
return A.c(s.gbx6().a.KC(q,new A.a8m(n)),$async$q8)
case 15:m=a0
if(s.c==null){x=1
break}h=m
x=(h==null?null:h.b)===C.PY?16:17
break
case 16:x=18
return A.c(s.aev(),$async$q8)
case 18:if(s.c==null){x=1
break}s.p(new B.cQM(s))
x=19
return A.c(s.oy(),$async$q8)
case 19:x=1
break
case 17:s.p(new B.cQN(s,m))
u=2
x=9
break
case 7:u=6
e=t.pop()
h=A.u(e)
x=h instanceof A.l6?20:22
break
case 20:l=h
$.hK().k(C.q,"purchase game access failed: "+l.a+" "+l.b,null,null)
k=s.bfi(l,D.vn)
f=l.b.toUpperCase()
x=k===D.vp||C.b.t(f,"ENTITLEMENT_NOT_FOUND")||C.b.t(f,"IDEMPOTENCY_CONFLICT")?23:24
break
case 23:x=25
return A.c(s.aev(),$async$q8)
case 25:case 24:if(s.c==null){x=1
break}s.p(new B.cQO(s,k))
x=21
break
case 22:j=h
$.hK().k(C.q,"purchase game access failed",j,null)
if(s.c==null){x=1
break}s.p(new B.cQP(s))
case 21:x=9
break
case 6:x=2
break
case 9:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$q8,w)},
lH(d,e){return this.d9k(d,!0)},
d9j(d){return this.lH(!0,d)},
d9k(b9,c0){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$lH=A.i(function(c1,c2){if(c1===1){t.push(c2)
x=u}for(;;)switch(x){case 0:b6=s.d
if(s.c==null||b6==null){x=1
break}r=s.cy
b1=s.ay
if(b6.e===C.i8){b2=b1==null
b3=!0
if((b2?null:b1.b)===!0)if((b2?null:b1.c)===!0)if((b2?null:b1.w)!=null){b2=b1.w
b2.toString
b2=b2<=0}else b2=b3
else b2=b3
else b2=b3}else b2=!1
if(b2){s.p(new B.cQR(s))
x=1
break}q=b1==null?null:b1.w
s.p(new B.cQS(s))
u=4
x=7
return A.c(s.w.hz(),$async$lH)
case 7:p=c2
if(s.c==null){x=1
break}o=p==null||p.length===0?null:s.bco(p)
if(o==null){s.p(new B.cQT(s))
x=1
break}x=r==null||r!==o?8:9
break
case 8:s.bxv(o)
x=10
return A.c(s.oy(),$async$lH)
case 10:x=1
break
case 9:s.cy=o
b8=s.ch!=null
if(b8){x=11
break}else c2=b8
x=12
break
case 11:x=13
return A.c(s.uT(!0),$async$lH)
case 13:c2=!c2
case 12:if(c2){if(s.c==null){x=1
break}s.p(new B.cQU(s))
x=1
break}if(s.c==null){x=1
break}x=14
return A.c(s.bwh(),$async$lH)
case 14:n=c2
if(s.c==null){x=1
break}x=15
return A.c(s.z.Dl(b6.a,new A.a8n(n)),$async$lH)
case 15:m=c2
l=new A.aA(Date.now(),0,!1).S()
k=m==null?null:B.eiw(m.w)
j=m==null?null:B.doA(m.f)
i=m==null?null:B.doA(m.r)
h=m==null?null:B.doA(m.x)
b2=m
g=(b2==null?null:b2.e)===C.Q_
f=m!=null&&m.a>0
e=m!=null&&m.b>0&&m.b===q
d=m!=null&&m.c===b6.a
b2=m
b2=b2==null?null:b2.d
b3=n
a0=b2==null?b3==null:b2===b3
a1=j!=null&&Math.abs(j.S().bT(l.S()).a)<=3e8
b2=i
a2=(b2==null?null:b2.iS(l))===!0
b2=h
a3=(b2==null?null:b2.iS(l))===!0
a4=h!=null&&i!=null&&!h.iS(i)
a5=k!=null
a6=g&&f&&e&&d&&a0&&a1&&a2&&a3&&a4&&a5
x=!a6?16:17
break
case 16:a7=A.b([],y.s)
if(!g)J.bU(a7,"status")
if(!f)J.bU(a7,"session_id")
if(!e)J.bU(a7,"entitlement")
if(!d)J.bU(a7,"game_key")
if(!a0)J.bU(a7,"client_session")
if(!a1)J.bU(a7,"session_started_at")
if(!a2)J.bU(a7,"session_expiry")
if(!a3)J.bU(a7,"launch_expiry")
if(!a4)J.bU(a7,"launch_expiry_bound")
if(!a5)J.bU(a7,"launch_url_untrusted")
a8=a7
$.hK().k(C.q,"game session response rejected: "+J.a3Q(a8,","),null,null)
x=g&&f&&d?18:19
break
case 18:x=20
return A.c(s.E9(b6.a,!0,m.a),$async$lH)
case 20:case 19:x=21
return A.c(s.P8(),$async$lH)
case 21:if(s.c==null){x=1
break}s.p(new B.cQV(s))
x=1
break
case 17:s.ch=m
x=s.c==null?22:23
break
case 22:x=24
return A.c(s.uT(!0),$async$lH)
case 24:x=1
break
case 23:x=b6.e===C.i8?25:26
break
case 25:s.p(new B.cQW(s,k,h))
x=27
return A.c(s.v0(),$async$lH)
case 27:x=1
break
case 26:s.p(new B.cQX(s))
u=2
x=6
break
case 4:u=3
b7=t.pop()
a7=A.u(b7)
x=a7 instanceof A.l6?28:30
break
case 28:a9=a7
$.hK().k(C.q,"start game session failed: "+a9.a+" "+a9.b,null,null)
if(b9){b5=a9.b.toUpperCase()
a7=C.b.t(b5,"SESSION_ENDED")||C.b.t(b5,"SESSION_EXPIRED")||C.b.t(b5,"SESSION_IDENTITY_MISMATCH")}else a7=!1
x=a7?31:32
break
case 31:x=33
return A.c(s.P8(),$async$lH)
case 33:if(s.c==null){x=1
break}x=34
return A.c(s.lH(!1,!0),$async$lH)
case 34:x=1
break
case 32:if(s.c==null){x=1
break}s.p(new B.cQY(s,a9))
x=29
break
case 30:b0=a7
$.hK().k(C.q,"start game session failed",b0,null)
if(s.c==null){x=1
break}s.p(new B.cQZ(s))
case 29:x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$lH,w)},
v0(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$v0=A.i(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:if(s.dy){x=1
break}r=s.CW
k=s.cx
if(r==null||k==null){x=1
break}s.p(new B.cQA(s))
x=!k.iS(new A.aA(Date.now(),0,!1).S())?3:4
break
case 3:x=5
return A.c(s.uT(!0),$async$v0)
case 5:if(s.c==null){x=1
break}s.p(new B.cQB(s))
x=1
break
case 4:j=s.cy
q=null
u=7
x=10
return A.c(s.w.hz(),$async$v0)
case 10:q=a0
u=2
x=9
break
case 7:u=6
f=t.pop()
p=A.u(f)
o=A.aH(f)
h=$.hK()
h.k(C.q,"external game auth refresh failed",p,o)
if(s.c==null){x=1
break}s.p(new B.cQC(s))
x=1
break
x=9
break
case 6:x=2
break
case 9:if(s.c==null){x=1
break}g=q==null||q.length===0?null:s.bco(q)
if(g==null){s.p(new B.cQD(s))
x=1
break}x=j==null||j!==g?11:12
break
case 11:s.bxv(g)
x=13
return A.c(s.oy(),$async$v0)
case 13:x=1
break
case 12:u=15
s.p(new B.cQE(s))
x=18
return A.c(A.yD(r,C.ok,"_self"),$async$v0)
case 18:n=a0
if(s.c==null){x=1
break}if(n){s.p(new B.cQF(s))
x=1
break}u=2
x=17
break
case 15:u=14
e=t.pop()
m=A.u(e)
l=A.aH(e)
h=$.hK()
h.k(C.q,"external game launch failed",m,l)
x=17
break
case 14:x=2
break
case 17:x=19
return A.c(s.uT(!0),$async$v0)
case 19:if(s.c==null){x=1
break}s.p(new B.cQG(s))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$v0,w)},
uT(d){return this.cET(!0)},
cET(d){var x=0,w=A.m(y.y),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$uT=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=r.go
if(k!=null){v=k
x=1
break}p=r.d
o=r.ch
n=o==null?null:o.a
if(p==null||n==null){v=!0
x=1
break}q=r.E9(p.a,!0,n)
r.go=q
u=3
x=6
return A.c(q,$async$uT)
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
return A.l($async$uT,w)},
E9(d,e,f){return this.cF_(d,!0,f)},
cF_(d,e,f){var x=0,w=A.m(y.y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$E9=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:p=!1
o=2
n=0
m=s.z
l=y.H
case 3:if(!(n<o&&!p)){x=4
break}u=6
x=9
return A.c(m.HF(d,f),$async$E9)
case 9:p=!0
u=2
x=8
break
case 6:u=5
k=t.pop()
r=A.u(k)
$.hK().k(C.aB,"end game session failed",r,null)
x=n+1<o?10:11
break
case 10:x=12
return A.c(A.df(C.Bp,null,l),$async$E9)
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
return A.c(s.P8(),$async$E9)
case 15:case 14:v=p
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$E9,w)},
bwg(){var x=0,w=A.m(y.N),v,u=this,t
var $async$bwg=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.gbY3()
v=B.zQ(new B.cQs(u),u.gbVz(),new B.cQt(),t)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bwg,w)},
aev(){var x=0,w=A.m(y.H),v=this
var $async$aev=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a8l(new B.cQm(),A.e7([v.gbY3(),v.gbVz()],y.N)),$async$aev)
case 2:return A.k(null,w)}})
return A.l($async$aev,w)},
bwh(){var x=0,w=A.m(y.N),v,u=this
var $async$bwh=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:v=B.zQ(new B.cQu(u),null,new B.cQv(),u.gc_5())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bwh,w)},
P8(){var x=0,w=A.m(y.H),v=this
var $async$P8=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(B.a8l(new B.cQn(),A.e7([v.gc_5()],y.N)),$async$P8)
case 2:return A.k(null,w)}})
return A.l($async$P8,w)},
bco(d){var x=A.dwr(d),w=x==null?null:C.b.G(x)
return w==null||w.length===0?null:w},
bxv(d){var x=this
x.cy=d
x.cx=x.CW=x.ch=x.ay=null
x.fy=x.fx=x.dy=x.dx=x.db=!1
x.id=null},
gbY3(){var x=this.a.d
x=A.a(x==null?"unknown":x)
return B.doi(D.PS,this.cy,"product-"+x)},
gbVz(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.doi(D.PS,this.cy,x)},
gc_5(){var x=this.d
x=x==null?null:x.a
if(x==null)x=this.a.c
if(x==null)x="unknown"
return B.doi(D.aO0,this.cy,x)},
bWo(d){var x,w=Date.now(),v=C.d.n1($.b2W().Jr(4294967296),16),u=this.d
u=u==null?null:u.a
x=u==null?this.a.c:u
if(x==null){u=this.a.d
x="product-"+A.a(u==null?"unknown":u)}return d+"-"+x+"-"+1000*w+"-"+v},
bVq(d){var x=B.dIo(d)
if(x!=null)return x
return d==null||C.b.G(d).length===0?null:D.iI},
bfi(d,e){var x,w=d.a
if(w===401)return D.iH
x=B.dIo(d.b)
if(x!=null)return x
if(w===404)return D.hf
return e},
cVl(d,e){switch(e){case D.iH:return d.gaak()
case D.CA:return d.gaau()
case D.CB:return d.gaa9()
case D.CC:return d.gaap()
case D.vo:return d.gaag()
case D.vp:return d.gaa8()
case D.CD:return d.gaai()
case D.hf:return d.gaan()
case D.CE:return d.gaaa()
case D.PT:return d.gaar()
case D.iI:return d.gaa7()
case D.vn:return d.gaad()
case D.hK:return d.gaas()
case null:case void 0:return null}},
Eh(d){return this.cPw(d)},
cPw(b6){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Eh=A.i(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){v=null
x=1
break}if(b1==="GO_BACK"){s.afD()
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
case 5:v=s.xY()
x=1
break
case 6:m=s.c
if(m!=null)A.aN(m,!1).f.aG(C.qt,y.X)
v=null
x=1
break
case 7:m=s.c
if(m!=null)A.aN(m,!1).f.aG(C.zb,y.X)
v=null
x=1
break
case 8:u=14
b0=A.m4(b6.j(0,"betIndex"))
q=b0==null?null:C.j.bZ(b0)
a2=A.m4(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=m
x=1
break}b0=r.a
a3=A.aS(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aS(b6.j(0,"clientSeed"))
a5=A.aS(b6.j(0,"nonce"))
x=17
return A.c(s.x.aaE(p,q,A.aS(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$Eh)
case 17:o=b8
n=J.aE(o,"data")
if(J.r(J.aE(o,"success"),!0)&&y.P.b(n)){m=A.o(y.N,y.z)
J.eB(m,"type","SPIN_RESULT")
J.hg(m,n)
v=m
x=1
break}m=J.aE(o,"message")
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
return A.c(s.x.jH(),$async$Eh)
case 22:k=b8
if(J.r(J.aE(k,"success"),!0)){m=y.h
j=m.a(J.aE(k,"data"))
k=j
m=m.a(k==null?null:J.aE(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(y.N,y.z):a7
m=A.m4(J.aE(i,"balance"))
if(m==null)m=null
m=A.aa(["type","BALANCE_RESULT","balance",m==null?0:m],y.N,y.z)
v=m
x=1
break}m=J.aE(k,"message")
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
return A.c(s.afx(),$async$Eh)
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
m=A.m4(b6.j(0,"page"))
a8=m==null?null:C.j.bZ(m)
e=a8==null?1:a8
m=A.m4(b6.j(0,"size"))
a9=m==null?null:C.j.bZ(m)
d=a9==null?10:a9
x=32
return A.c(s.x.a2c(e,d),$async$Eh)
case 32:a0=b8
if(J.r(J.aE(a0,"success"),!0)){m=A.aa(["type","TRANSACTION_RESULT","data",J.aE(a0,"data")],y.N,y.z)
v=m
x=1
break}m=J.aE(a0,"message")
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
case 4:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Eh,w)},
q(){var x=this,w=x.k1
if(w!=null)w.$0()
w=x.k2
if(w!=null)w.$0()
if(!x.dx)x.uT(!0)
x.a7()},
u(d){var x,w,v,u,t=this,s=null,r=A.f(d,C.c,y.J)
r.toString
x=t.f
w=y.p
v=A.b([],w)
u=x==null
if(!u)C.f.C(v,A.b([x,A.dN(0,A.h2(C.c9,s,C.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbva(),s,s,s,s,s,s,!1,C.bV),108,s,0,s,s,75)],w))
else v.push(t.csM(d))
if(u)v.push(new A.dB(!0,!0,!0,!0,C.J,!1,new A.cd(C.ir,s,s,A.aM(s,s,s,s,s,D.aT3,s,s,t.gbva(),s,s,s,s,r.gh2(),s),s),s))
return A.bJ(s,D.auS,A.d1(C.aU,v,C.t,C.aQ,s),s,s,s,s,s)},
csM(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=A.f(a1,C.c,y.J)
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
if(s){u=e.db?a0.gDg():a0.gNS()
if(e.db){a0=a0.gDg()
r=A.p(a1).ok.y
a0=new A.G(C.b2,A.d(a0,d,d,d,d,d,r==null?d:r.a1(C.E.B(0.78)),C.aH,d,d),d)}else a0=D.bJl
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
if((v==null?d:v.c)===!0)r=(x==null?d:x.gbEu())===!0
else r=!1
p=e.fx
l=e.fy
k=u?d:w.b
u=u?d:w.c
j=e.CW==null
i=e.id
h=new B.bka(r,p,l,k===!0,u===!0,!j,i)
g=e.cVl(a0,i)
if(e.db)f=a0.gDg()
else f=j?d:a0.gaae()
u=x==null?d:x.b
a0=u==null?a0.gaao():u
u=g==null
r=u?f:g
return new B.ayv(a0,h,q,m,r,!u,!t,new B.cQ6(e,h),new B.cQ7(e),d)},
cOn(d){var x,w=this
switch(d.a){case 1:x=w.c
x.toString
A.aN(x,!1).f.aG(C.er,y.X)
return
case 2:w.agX()
return
case 3:x=w.c
x.toString
A.aN(x,!1).f.aG(C.qt,y.X)
return
case 4:w.q8()
return
case 5:w.v0()
return
case 6:w.bxi()
return
case 0:return}},
agX(){var x=0,w=A.m(y.H),v,u=this,t
var $async$agX=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
t.toString
x=3
return A.c(A.aN(t,!1).f.aG(C.pN,y.X),$async$agX)
case 3:if(u.c==null){x=1
break}x=4
return A.c(u.bxi(),$async$agX)
case 4:case 1:return A.k(v,w)}})
return A.l($async$agX,w)},
afD(){var x=0,w=A.m(y.H),v,u=this
var $async$afD=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.agN(),$async$afD)
case 3:case 1:return A.k(v,w)}})
return A.l($async$afD,w)},
agN(){var x=0,w=A.m(y.H),v,u=this,t
var $async$agN=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=!u.dx?3:4
break
case 3:x=5
return A.c(u.uT(!0),$async$agN)
case 5:t=u.c
if(t==null){x=1
break}case 4:x=6
return A.c(A.Y(t,!1).Ap(),$async$agN)
case 6:if(!e&&u.c!=null){t=u.c
t.toString
A.aN(t,!1).f.hP("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$agN,w)},
bP0(){var x,w=this,v=w.d,u=v==null,t=u?null:v.d
if(u||t==null||t.length===0)return C.an
u=b.G.window.navigator.userAgent
x=$.dNk()
if(x.b.test(u)){$.aG.y2$.push(new B.cQa(w,v,t))
return C.yC}return new B.aed(w.bSE(t,Date.now()),w.gd6l(),null)},
bSE(d,e){var x="/games/"+d
return x+(C.b.t(x,"?")?"&":"?")+"flutter=1&_ts="+e},
d6m(){new B.cQQ(this).$0()}}
B.ayv.prototype={
u(d){var x=A.f(d,C.c,y.J)
x.toString
return new A.dB(!0,!0,!0,!0,C.J,!1,A.d0(new B.bkb(this,x,A.p(d),this.cGU(x))),null)},
cGU(d){switch(this.d.gmZ().a){case 1:return d.gDh()
case 2:return d.gXi()
case 3:return d.gaam()
case 4:return d.gaal()
case 5:return d.guy()
case 6:return d.gaaj()
case 0:return null}}}
B.agy.prototype={
u(d){var x=null,w=A.p(d).ok.z,v=w==null,u=v?x:w.a1(C.E.B(0.58))
u=A.K(A.d(this.c,x,x,x,x,x,u,x,x,x),1,x)
v=v?x:w.aH(C.E,C.R)
return new A.G(C.e7,A.w(A.b([u,C.ad,new A.et(1,C.bv,A.d(this.d,x,x,x,x,x,v,C.j8,x,x),x)],y.p),C.m,x,C.e,C.i,0,x,x),x)}}
var z=a.updateTypes(["a9<U<q,@>?>(U<q,@>)","a9<~>()","~()"])
B.dd6.prototype={
$1(d){var x,w=A.ie(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.Ro(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.dd5.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.dd8.prototype={
$1(d){var x,w,v,u,t,s=A.ie(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.Ro(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd3(),v=v.gan(v);v.F();){u=v.gN()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aD("type"))return
new B.dd9(this.b,w,d,s).$0()},
$S:9}
B.dd9.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h8(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bC(q)
t=v.c.source
if(t!=null)r=A.ie(t,"Object")
else r=!1
s=v.d
if(r){A.Vx(t,"postMessage",u,s,y.X)
B.dnC(u,s)}else{B.dnC(u,s)
b.G.window.postMessage(u,s)}}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:99}
B.dd7.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cQ4.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cQ5.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:532}
B.cQo.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cQp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cQq.prototype={
$0(){return this.a.Q=0},
$S:0}
B.cQ8.prototype={
$0(){return this.b.as=this.a.a},
$S:0}
B.cQ9.prototype={
$0(){return this.b.Q=this.a.b},
$S:0}
B.cQr.prototype={
$0(){return null},
$S:14}
B.cQw.prototype={
$0(){var x=this.a
x.fx=!1
x.e=this.b
x.d=null
x.id=D.hf},
$S:0}
B.cQx.prototype={
$0(){var x=this.a,w=x.e=this.b
x.d=new A.xJ(w.b,w.gdnW(),"Telegram Mini App",null,C.i8,4279724935,"\ud83c\udfae",null,!1)
x.fx=!0
x.id=null},
$S:0}
B.cQy.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=x.bfi(this.b,D.iI)},
$S:0}
B.cQz.prototype={
$0(){var x=this.a
x.fx=!1
x.d=x.e=null
x.id=D.iI},
$S:0}
B.cQb.prototype={
$0(){var x=this.a
x.fx=!1
if(this.b==null)x.id=D.hf},
$S:0}
B.cQc.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=D.hf},
$S:0}
B.cQd.prototype={
$0(){var x=this.a
x.fx=!0
x.cx=x.CW=x.id=null
x.dy=x.dx=x.db=!1},
$S:0}
B.cQe.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iH},
$S:0}
B.cQf.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iH},
$S:0}
B.cQg.prototype={
$0(){var x=this.a
x.fx=!1
x.ay=null
x.id=this.b==null?D.iI:D.hf},
$S:0}
B.cQh.prototype={
$0(){var x,w=this.a
w.fx=!1
x=this.b
w.id=x==null?D.iI:x},
$S:0}
B.cQi.prototype={
$0(){var x=this.a
x.fx=!1
x.id=this.b?null:D.hK},
$S:0}
B.cQj.prototype={
$0(){var x,w,v=this.a
v.fx=!1
x=this.b
w=v.bVq(x.r)
if(w==null)x=x.b===!0?null:D.iI
else x=w
v.id=x},
$S:0}
B.cQk.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bfi(this.b,D.iI)},
$S:0}
B.cQl.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iI},
$S:0}
B.cQH.prototype={
$0(){return this.a.id=D.hf},
$S:0}
B.cQI.prototype={
$0(){return this.a.id=D.hf},
$S:0}
B.cQJ.prototype={
$0(){var x=this.a
x.fy=!0
x.id=null},
$S:0}
B.cQK.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iH},
$S:0}
B.cQL.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.iH},
$S:0}
B.cQM.prototype={
$0(){return this.a.fy=!1},
$S:0}
B.cQN.prototype={
$0(){var x,w=this.a
w.fy=!1
x=this.b
w.id=(x==null?null:x.b)===C.PZ?D.vo:D.CE},
$S:0}
B.cQO.prototype={
$0(){var x=this.a
x.fy=!1
x.id=this.b},
$S:0}
B.cQP.prototype={
$0(){var x=this.a
x.fy=!1
x.id=D.vn},
$S:0}
B.cQR.prototype={
$0(){var x=this.a
x.fy=x.fx=!1
x.cx=x.CW=null
x.id=D.hK},
$S:0}
B.cQS.prototype={
$0(){var x=this.a
x.fx=!0
x.fy=!1
x.cx=x.CW=x.id=null},
$S:0}
B.cQT.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.iH},
$S:0}
B.cQU.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cQV.prototype={
$0(){var x=this.a
x.fx=!1
x.cx=x.CW=x.ch=null
x.id=D.hK},
$S:0}
B.cQW.prototype={
$0(){var x=this.a
x.CW=this.b
x.cx=this.c
x.fx=x.dx=x.db=!1},
$S:0}
B.cQX.prototype={
$0(){var x=this.a
x.f=x.bP0()
x.fx=!1},
$S:0}
B.cQY.prototype={
$0(){var x=this.a
x.fx=!1
x.id=x.bfi(this.b,D.hK)},
$S:0}
B.cQZ.prototype={
$0(){var x=this.a
x.fx=!1
x.id=D.hK},
$S:0}
B.cQA.prototype={
$0(){return this.a.dy=!0},
$S:0}
B.cQB.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cQC.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iH},
$S:0}
B.cQD.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.iH},
$S:0}
B.cQE.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dx=!0},
$S:0}
B.cQF.prototype={
$0(){var x=this.a
x.db=!0
x.dy=!1},
$S:0}
B.cQG.prototype={
$0(){var x=this.a
x.cx=x.CW=null
x.dy=x.dx=x.db=!1
x.id=D.hK},
$S:0}
B.cQs.prototype={
$0(){return this.a.bWo("game-access")},
$S:23}
B.cQt.prototype={
$2(d,e){return $.hK().k(C.q,"game access purchase attempt persistence unavailable",d,e)},
$S:37}
B.cQm.prototype={
$2(d,e){return $.hK().k(C.q,"game access purchase attempt cleanup unavailable",d,e)},
$S:37}
B.cQu.prototype={
$0(){return this.a.bWo("game-session")},
$S:23}
B.cQv.prototype={
$2(d,e){return $.hK().k(C.q,"game session attempt persistence unavailable",d,e)},
$S:37}
B.cQn.prototype={
$2(d,e){return $.hK().k(C.q,"game session attempt cleanup unavailable",d,e)},
$S:37}
B.cQ6.prototype={
$0(){return this.a.cOn(this.b.gmZ())},
$S:0}
B.cQ7.prototype={
$0(){this.a.bxi()
return null},
$S:0}
B.cQa.prototype={
$1(d){return this.cbS(d)},
cbS(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.i(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:h=s.a
if(h.c==null){x=1
break}u=4
l=h.as
x=l==null?7:9
break
case 7:x=10
return A.c(h.w.hz(),$async$$1)
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
return A.c(h.r.hi(!0),$async$$1)
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
$.hK().k(C.q,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a3T(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",h.x.bcs())
l.window.localStorage.setItem("_flutter_game_id",s.b.a)
u=19
x=22
return A.c(h.afx(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
f=t.pop()
n=A.u(f)
$.hK().k(C.aB,"RTP prefetch failed",n,null)
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
$.hK().k(C.q,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:l=h.c
if(l==null){x=1
break}x=23
return A.c(A.Y(l,!1).Ap(),$async$$1)
case 23:h=h.bSE(s.c,Date.now())
b.G.window.location.assign(h)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:515}
B.cQQ.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.xY(),$async$$0)
case 2:t=e
B.doJ(t)
u=y.H
x=3
return A.c(A.df(D.aK3,null,u),$async$$0)
case 3:B.doJ(t)
x=4
return A.c(A.df(D.aJM,null,u),$async$$0)
case 4:B.doJ(t)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:99}
B.bkb.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.d,i=j<1/0?C.j.cK(j-88,0,1/0):0
j=l.b
x=l.a
w=x.c
v=j.aab(w)
u=A.A(8)
t=A.aF(C.E.B(0.12),C.w,1)
s=l.c.ok
r=s.f
q=y.p
r=A.b([A.d(w,k,k,k,k,k,r==null?k:r.aH(C.E,C.A),C.aH,k,k)],q)
if(x.x){w=j.gNT()
p=s.z
w=A.b([C.ee,A.d(w,k,k,k,k,k,p==null?k:p.a1(C.E.B(0.72)),C.aH,k,k)],q)
p=x.e
o=p==null
if(!o||x.f!=null){n=j.gaaq()
if(o)p="-"
o=j.gaah()
m=x.f
if(m==null)m="-"
C.f.C(w,A.b([C.HO,new B.agy(n,p,k),new B.agy(o,m,k)],q))}C.f.C(r,w)}w=x.r
if(w!=null){s=s.z
if(s==null)s=k
else s=s.a1(x.w?D.atw:D.auj)
C.f.C(r,A.b([C.HO,A.J(k,k,k,A.d(w,k,k,k,k,k,s,C.aH,k,k),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c3y,w,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k)],q))}w=x.d
s=!w.b
if(!s||w.c||l.d!=null){p=!s||w.c?k:x.y
if(!s||w.c)o=A.br(C.tE,A.b([C.n4,A.d(w.c?j.gaac():j.gNS(),k,k,k,k,k,k,C.aH,k,k)],q),C.bM,k,6,10)
else{o=l.d
o.toString
o=A.d(o,k,k,k,k,k,k,C.aH,k,k)}C.f.C(r,A.b([D.bJn,A.cn(o,D.c0c,p,k)],q))}if(w.a)w=!(!s||w.c)&&!w.f&&w.gmZ()!==D.qE
else w=!1
if(w)C.f.C(r,A.b([C.ee,A.aJ(A.d(j.gaaf(),k,k,k,k,k,k,C.aH,k,k),D.c0x,k,k,x.z,k,k)],q))
return A.bb(new A.ba(new A.ax(0,1/0,i,1/0),A.aK(A.J(k,k,k,new A.ba(C.Le,new A.bW(new A.L(D.asJ,k,t,u,k,k,C.r),C.aq,new A.G(C.b2,A.v(r,C.ao,k,C.e,C.H,0,C.k),k),k),k),!0,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,D.c5L,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p,k),k,k,k),k),C.t,k,C.z,k,k,D.aLu,k,k,C.D)},
$S:105};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aoa.prototype,"gcPv","Eh",0)
w(v,"gbva","afD",1)
w(v,"gd6l","d6m",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.oi,[B.nR,B.zR,B.ayu])
w(B.bka,A.V)
x(A.fp,[B.dd6,B.dd8,B.cQ4,B.cQ5,B.cQa])
x(A.ha,[B.dd5,B.dd9,B.dd7,B.cQo,B.cQp,B.cQq,B.cQ8,B.cQ9,B.cQr,B.cQw,B.cQx,B.cQy,B.cQz,B.cQb,B.cQc,B.cQd,B.cQe,B.cQf,B.cQg,B.cQh,B.cQi,B.cQj,B.cQk,B.cQl,B.cQH,B.cQI,B.cQJ,B.cQK,B.cQL,B.cQM,B.cQN,B.cQO,B.cQP,B.cQR,B.cQS,B.cQT,B.cQU,B.cQV,B.cQW,B.cQX,B.cQY,B.cQZ,B.cQA,B.cQB,B.cQC,B.cQD,B.cQE,B.cQF,B.cQG,B.cQs,B.cQu,B.cQ6,B.cQ7,B.cQQ])
x(A.W,[B.aed,B.Gj])
x(A.Z,[B.aYO,B.aoa])
x(A.hX,[B.cQt,B.cQm,B.cQv,B.cQn,B.bkb])
x(A.y,[B.ayv,B.agy])})()
A.fU(b.typeUniverse,JSON.parse('{"aed":{"W":[],"n":[]},"aYO":{"Z":["aed"]},"Gj":{"W":[],"n":[]},"aoa":{"Z":["Gj"]},"ayv":{"y":[],"n":[]},"agy":{"y":[],"n":[]}}'))
var y=(function rtii(){var x=A.au
return{J:x("fh"),u:x("a9<U<q,@>?>"),T:x("KB"),w:x("bmw"),s:x("E<q>"),p:x("E<n>"),P:x("U<q,@>"),f:x("U<@,@>"),a:x("bo"),A:x("Oq"),N:x("q"),x:x("P0"),r:x("GB"),O:x("X<q>"),y:x("Q"),z:x("@"),h:x("U<q,@>?"),X:x("V?"),H:x("~")}})();(function constants(){D.asJ=new A.a_(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.B)
D.atw=new A.a_(1,1,0.7686274509803922,0.7686274509803922,C.B)
D.auj=new A.a_(1,0.7215686274509804,0.9490196078431372,0.8156862745098039,C.B)
D.auS=new A.a_(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.B)
D.aJM=new A.bI(175e4)
D.aK3=new A.bI(75e4)
D.aLu=new A.ao(20,64,20,24)
D.PS=new B.ayu(0,"purchase")
D.aO0=new B.ayu(1,"session")
D.iH=new B.nR(0,"signInRequired")
D.CA=new B.nR(1,"telegramAccountNotLinked")
D.iI=new B.nR(10,"requestFailed")
D.vn=new B.nR(11,"purchaseFailed")
D.hK=new B.nR(12,"sessionFailed")
D.CB=new B.nR(2,"insufficientBalance")
D.CC=new B.nR(3,"walletInactive")
D.vo=new B.nR(4,"refundPending")
D.vp=new B.nR(5,"accessExpired")
D.CD=new B.nR(6,"accessRequired")
D.hf=new B.nR(7,"gameUnavailable")
D.CE=new B.nR(8,"accessNotActive")
D.PT=new B.nR(9,"sessionDenied")
D.PU=new B.zR(0,"none")
D.aO1=new B.zR(1,"signIn")
D.aO2=new B.zR(2,"bindTelegram")
D.aO3=new B.zR(3,"topUp")
D.aO4=new B.zR(4,"purchase")
D.aO5=new B.zR(5,"openGame")
D.qE=new B.zR(6,"retry")
D.aT3=new A.aq(C.jA,null,C.E,null,null)
D.arW=new A.mc(2.5,null,null,null,null,null,null,null,null,null)
D.bJl=new A.ad(28,28,D.arW,null)
D.bJn=new A.ad(null,22,null,null)
D.c0c=new A.X("slot-game-access-primary",y.O)
D.c0x=new A.X("slot-game-access-refresh",y.O)
D.c3y=new A.X("slot-game-access-message",y.O)
D.c5L=new A.X("slot-game-access-gate",y.O)})();(function staticFields(){$.a8k=function(){var x=y.N
return A.o(x,x)}()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eqJ","dNk",()=>A.bk("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"erH","hK",()=>A.aY("SlotGamePage"))})()};
(a=>{a["wGBW+FgcA1enf49G89qR0UFNOrg="]=a.current})($__dart_deferred_initializers__);