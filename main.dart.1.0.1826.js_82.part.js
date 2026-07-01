((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
e7E(d){var x=b.G,w=A.eV(new B.d5x(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.d5w(w)},
e7F(d){var x=b.G,w=A.eV(new B.d5z(x.window.location.origin,d))
x.window.addEventListener("message",w)
return new B.d5y(w)},
dgM(d){B.dfM(A.bz(d),b.G.window.location.origin)},
dfM(d,e){var x,w,v,u,t=b.G.document.querySelectorAll("iframe")
for(x=0;x<t.length;++x){w=t.item(x)
if(w!=null){v=A.iq(w,"HTMLIFrameElement")
v=!v}else v=!0
if(v)continue
u=w.src
if(C.b.aX(u,e))v=!A.oi(u,"/games/",0)
else v=!0
if(v)continue
v=w.contentWindow
if(v!=null)v.postMessage(d,e)}},
d5x:function d5x(d,e){this.a=d
this.b=e},
d5w:function d5w(d){this.a=d},
d5z:function d5z(d,e){this.a=d
this.b=e},
d5A:function d5A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d5y:function d5y(d){this.a=d},
acp:function acp(d,e,f){this.c=d
this.d=e
this.a=f},
aWa:function aWa(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cKf:function cKf(d){this.a=d},
cKg:function cKg(d){this.a=d},
dVb(d){return new B.FE(d,null)},
FE:function FE(d,e){this.c=d
this.a=e},
amf:function amf(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.c=_.a=_.as=_.Q=_.z=_.y=_.x=_.w=null},
cKk:function cKk(d,e){this.a=d
this.b=e},
cKl:function cKl(d,e){this.a=d
this.b=e},
cKm:function cKm(d){this.a=d},
cKh:function cKh(d,e){this.a=d
this.b=e},
cKi:function cKi(d,e){this.a=d
this.b=e},
cKn:function cKn(){},
cKj:function cKj(d,e){this.a=d
this.b=e},
cKo:function cKo(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[89]
B.acp.prototype={
T(){return new B.aWa()}}
B.aWa.prototype={
a0(){var x,w,v,u=this
u.a6()
x="slot-game-frame-"+1000*Date.now()
u.d!==$&&A.b8()
u.d=x
w=b.G.document.createElement("iframe")
w.style.border="0"
w.style.width="100%"
w.style.height="100%"
w.style.display="block"
w.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
u.e!==$&&A.b8()
u.e=w
v=A.eV(new B.cKf(u.a.d))
u.f=v
w.addEventListener("load",v)
w.src=u.a.c
$.b0o()
$.Ci().QK(x,new B.cKg(u),!0)},
aI(d){var x,w
this.b0(d)
x=this.a.c
if(d.c!==x){w=this.e
w===$&&A.h()
w.src=x}},
q(){var x,w=this.f
if(w!=null){x=this.e
x===$&&A.h()
x.removeEventListener("load",w)}this.a8()},
u(d){var x=this.d
x===$&&A.h()
return A.dcE(null,C.Ex,x)}}
B.FE.prototype={
T(){var x=$.aA()
return new B.amf(x.$1$0(y.w),x.$1$0(y.r),x.$1$0(y.A))}}
B.amf.prototype={
a0(){var x,w=this
w.a6()
x=w.a.c
A.dtt().j(0,x)
x=w.cpZ("moon_dance/index.html")
w.d!==$&&A.b8()
w.d=x
w.Q=B.e7E(w.gbNh())
w.as=B.e7F(w.gcHF())
w.Wg()
w.z=w.Xy()},
Wg(){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Wg=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.c(t.f.hP(),$async$Wg)
case 6:s=e
if(t.c!=null&&s!=null){t.p(new B.cKk(t,s))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",s)}catch(h){r=A.t(h)
$.r3().k(C.aC,"localStorage jwt write failed (private mode?)",r,null)}}v=1
x=5
break
case 3:v=2
j=u.pop()
q=A.t(j)
$.r3().k(C.p,"_fetchUserInfo: getValidToken failed",q,null)
x=5
break
case 2:x=1
break
case 5:v=8
x=11
return A.c(t.e.eq(!0),$async$Wg)
case 11:p=e
if(t.c!=null){l=p
k=l==null?null:l.f
o=k==null?0:k
t.p(new B.cKl(t,o))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a1W(o,4))}catch(h){n=A.t(h)
$.r3().k(C.aC,"localStorage balance write failed",n,null)}}v=1
x=10
break
case 8:v=7
i=u.pop()
if(t.c!=null)t.p(new B.cKm(t))
x=10
break
case 7:x=1
break
case 10:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$Wg,w)},
xh(){return this.cn6()},
cn6(){var x=0,w=A.m(y.P),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$xh=A.i(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:a0={}
a1=s.x
a0.a=a1
j=s.w
a0.b=j==null?0:j
r=""
x=a1==null?3:4
break
case 3:u=6
x=9
return A.c(s.f.hP(),$async$xh)
case 9:a1=a7
a0.a=a1
if(s.c!=null&&a1!=null)s.p(new B.cKh(a0,s))
u=2
x=8
break
case 6:u=5
a2=t.pop()
q=A.t(a2)
$.r3().k(C.p,"_buildHostInitPayload: getValidToken failed",q,null)
x=8
break
case 5:x=2
break
case 8:case 4:h=a0.a
if(h!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",h)}catch(a5){p=A.t(a5)
$.r3().k(C.aC,"localStorage jwt write failed in shim",p,null)}x=s.w==null?10:12
break
case 10:u=14
x=17
return A.c(s.e.pH(),$async$xh)
case 17:o=a7
h=o
g=h==null?null:h.b
r=g==null?"":g
h=o
j=h==null?null:h.f
a0.b=j==null?0:j
if(s.c!=null)s.p(new B.cKi(a0,s))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.X(a0.b,4))}catch(a5){n=A.t(a5)
$.r3().k(C.aC,"localStorage balance write failed in shim",n,null)}u=2
x=16
break
case 14:u=13
a3=t.pop()
m=A.t(a3)
$.r3().k(C.p,"_buildHostInitPayload: getProfile failed",m,null)
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:u=19
x=22
return A.c(s.e.pH(),$async$xh)
case 22:l=a7
h=l
g=h==null?null:h.b
r=g==null?"":g
u=2
x=21
break
case 19:u=18
a4=t.pop()
k=A.t(a4)
$.r3().k(C.p,"_buildHostInitPayload: getProfile failed",k,null)
x=21
break
case 18:x=2
break
case 21:case 11:h=a0.b
x=23
return A.c(s.Wv(),$async$xh)
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
return A.l($async$xh,w)},
Wv(){var x=0,w=A.m(y.h),v,u=this,t,s
var $async$Wv=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:s=u.y
if(s!=null){v=s
x=1
break}t=u.z
if(t==null)t=u.z=u.Xy()
v=t.wf(C.N2,new B.cKn())
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$Wv,w)},
Xy(){var x=0,w=A.m(y.h),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$Xy=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(r.r.ab8(r.a.c),$async$Xy)
case 7:q=e
if(J.r(J.aC(q,"success"),!0)&&y.f.b(J.aC(q,"data"))){p=A.ww(y.f.a(J.aC(q,"data")),y.N,y.z)
r.y=p
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aY.kt(p,null))}catch(k){o=A.t(k)
$.r3().k(C.aC,"localStorage rtp write failed",o,null)}v=p
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
l=t.pop()
n=A.t(l)
$.r3().k(C.p,"_getSlotRtpData failed",n,null)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.y==null)r.z=null
x=s.pop()
break
case 6:v=null
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Xy,w)},
Cz(d){return this.cHG(d)},
cHG(b5){var x=0,w=A.m(y.h),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$Cz=A.i(function(b6,b7){if(b6===1){t.push(b7)
x=u}for(;;)switch(x){case 0:a9=b5.j(0,"type")
b0=a9==null?null:J.am(a9)
if(b0==null){v=null
x=1
break}case 3:switch(b0){case"GAME_READY":x=5
break
case"GO_BACK":x=6
break
case"GO_DEPOSIT":x=7
break
case"GO_WITHDRAW":x=8
break
case"SPIN_REQUEST":x=9
break
case"BALANCE_REQUEST":x=10
break
case"RTP_REQUEST":x=11
break
case"TRANSACTION_REQUEST":x=12
break
default:x=13
break}break
case 5:v=s.xh()
x=1
break
case 6:s.WA()
v=null
x=1
break
case 7:n=s.c
if(n!=null)A.aX(n,!1).f.aQ(C.Al,y.X)
v=null
x=1
break
case 8:n=s.c
if(n!=null)A.aX(n,!1).f.aQ(C.ym,y.X)
v=null
x=1
break
case 9:u=15
a9=A.mv(b5.j(0,"betIndex"))
r=a9==null?null:C.j.cd(a9)
a1=A.mv(b5.j(0,"betAmount"))
q=a1==null?null:a1
if(r==null||q==null){n=A.aa(["type","SPIN_ERROR","message","betIndex and betAmount are required"],y.N,y.z)
v=n
x=1
break}a9=s.a.c
a2=A.aW(b5.j(0,"mode"))
if(a2==null)a2="REAL"
a3=A.aW(b5.j(0,"clientSeed"))
a4=A.aW(b5.j(0,"nonce"))
x=18
return A.c(s.r.Uc(q,r,A.aW(b5.j(0,"clientRoundId")),a3,a9,a2,a4),$async$Cz)
case 18:p=b7
o=J.aC(p,"data")
if(J.r(J.aC(p,"success"),!0)&&y.P.b(o)){n=A.o(y.N,y.z)
J.eq(n,"type","SPIN_RESULT")
J.hC(n,o)
v=n
x=1
break}n=J.aC(p,"message")
n=A.aa(["type","SPIN_ERROR","message",J.am(n==null?"spin failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=17
break
case 15:u=14
b1=t.pop()
m=A.t(b1)
n=A.aa(["type","SPIN_ERROR","message",J.am(m)],y.N,y.z)
v=n
x=1
break
x=17
break
case 14:x=2
break
case 17:x=4
break
case 10:u=20
x=23
return A.c(s.r.k_(),$async$Cz)
case 23:l=b7
if(J.r(J.aC(l,"success"),!0)){n=y.h
k=n.a(J.aC(l,"data"))
l=k
n=n.a(l==null?null:J.aC(l,"userInfo"))
a6=n==null?k:n
j=a6==null?A.o(y.N,y.z):a6
n=A.mv(J.aC(j,"balance"))
if(n==null)n=null
n=A.aa(["type","BALANCE_RESULT","balance",n==null?0:n],y.N,y.z)
v=n
x=1
break}n=J.aC(l,"message")
n=A.aa(["type","BALANCE_ERROR","message",J.am(n==null?"getCurrentUser failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=22
break
case 20:u=19
b2=t.pop()
i=A.t(b2)
n=A.aa(["type","BALANCE_ERROR","message",J.am(i)],y.N,y.z)
v=n
x=1
break
x=22
break
case 19:x=2
break
case 22:x=4
break
case 11:u=25
x=28
return A.c(s.Wv(),$async$Cz)
case 28:h=b7
if(h!=null){n=A.aa(["type","RTP_RESULT","data",h],y.N,y.z)
v=n
x=1
break}n=A.aa(["type","RTP_ERROR","message","getRtpTable failed"],y.N,y.z)
v=n
x=1
break
u=2
x=27
break
case 25:u=24
b3=t.pop()
g=A.t(b3)
n=A.aa(["type","RTP_ERROR","message",J.am(g)],y.N,y.z)
v=n
x=1
break
x=27
break
case 24:x=2
break
case 27:x=4
break
case 12:u=30
n=A.mv(b5.j(0,"page"))
a7=n==null?null:C.j.cd(n)
f=a7==null?1:a7
n=A.mv(b5.j(0,"size"))
a8=n==null?null:C.j.cd(n)
e=a8==null?10:a8
x=33
return A.c(s.r.SJ(f,e),$async$Cz)
case 33:d=b7
if(J.r(J.aC(d,"success"),!0)){n=A.aa(["type","TRANSACTION_RESULT","data",J.aC(d,"data")],y.N,y.z)
v=n
x=1
break}n=J.aC(d,"message")
n=A.aa(["type","TRANSACTION_ERROR","message",J.am(n==null?"getTransactions failed":n)],y.N,y.z)
v=n
x=1
break
u=2
x=32
break
case 30:u=29
b4=t.pop()
a0=A.t(b4)
n=A.aa(["type","TRANSACTION_ERROR","message",J.am(a0)],y.N,y.z)
v=n
x=1
break
x=32
break
case 29:x=2
break
case 32:x=4
break
case 13:v=null
x=1
break
case 4:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Cz,w)},
q(){var x=this.Q
if(x!=null)x.$0()
x=this.as
if(x!=null)x.$0()
this.a8()},
u(d){var x=null,w=this.d
w===$&&A.h()
return A.bQ(x,D.asl,A.d4(C.aT,A.b([w,A.dH(0,A.h8(C.ca,x,C.z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.gbNh(),x,x,x,x,x,x,!1,C.bT),108,x,0,x,x,75)],y.p),C.t,C.aP,x),x,x,x,x,x)},
WA(){var x=0,w=A.m(y.H),v,u=this
var $async$WA=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.c(u.aq_(),$async$WA)
case 3:case 1:return A.k(v,w)}})
return A.l($async$WA,w)},
aq_(){var x=0,w=A.m(y.H),v,u=this,t
var $async$aq_=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.c
if(t==null){x=1
break}x=3
return A.c(A.X(t,!1).zn(),$async$aq_)
case 3:if(!e&&u.c!=null){t=u.c
t.toString
A.aX(t,!1).f.ii("/home",y.X)}case 1:return A.k(v,w)}})
return A.l($async$aq_,w)},
cpZ(d){var x=b.G.window.navigator.userAgent,w=$.dEb()
if(w.b.test(x)){$.aE.y2$.push(new B.cKj(this,d))
return C.xO}return new B.acp("/games/"+d+"?flutter=1&_ts="+Date.now(),this.gcYT(),null)},
cYU(){new B.cKo(this).$0()}}
var z=a.updateTypes(["ab<V<q,@>?>(V<q,@>)","ab<~>()","~()"])
B.d5x.prototype={
$1(d){var x,w=A.iq(d,"MessageEvent")
if(!w)return
if(!J.r(d.origin,this.a))return
x=A.a1t(d.data)
if(y.f.b(x)&&J.r(x.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:8}
B.d5w.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.d5z.prototype={
$1(d){var x,w,v,u,t,s=A.iq(d,"MessageEvent")
if(!s)return
s=this.a
if(!J.r(d.origin,s))return
x=A.a1t(d.data)
if(!y.f.b(x))return
w=A.o(y.N,y.z)
for(v=x.gd8(),v=v.gap(v);v.F();){u=v.gN()
t=u.a
if(typeof t=="string")w.h(0,t,u.b)}if(!w.aE("type"))return
new B.d5A(this.b,w,d,s).$0()},
$S:8}
B.d5A.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t,s,r,q
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=v.a.$1(v.b)
x=2
return A.c(y.u.b(r)?r:A.h3(r,y.h),$async$$0)
case 2:q=e
if(q!=null){u=A.bz(q)
t=v.c.source
if(t!=null)r=A.iq(t,"Object")
else r=!1
s=v.d
if(r){A.axR(t,"postMessage",u,s,y.X)
B.dfM(u,s)}else{B.dfM(u,s)
b.G.window.postMessage(u,s)}}return A.k(null,w)}})
return A.l($async$$0,w)},
$S:84}
B.d5y.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cKf.prototype={
$1(d){return this.a.$0()},
$S:8}
B.cKg.prototype={
$1(d){var x=this.a.e
x===$&&A.h()
return x},
$S:471}
B.cKk.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cKl.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cKm.prototype={
$0(){return this.a.w=0},
$S:0}
B.cKh.prototype={
$0(){return this.b.x=this.a.a},
$S:0}
B.cKi.prototype={
$0(){return this.b.w=this.a.b},
$S:0}
B.cKn.prototype={
$0(){return null},
$S:16}
B.cKj.prototype={
$1(d){return this.c4T(d)},
c4T(a0){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.i(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:g=s.a
if(g.c==null){x=1
break}u=4
l=g.x
x=l==null?7:9
break
case 7:x=10
return A.c(g.f.hP(),$async$$1)
case 10:x=8
break
case 9:a2=l
case 8:k=a2
r=k==null?"":k
j=g.w
l=j==null
q=l?0:j
x=l?11:12
break
case 11:u=14
x=17
return A.c(g.e.eq(!0),$async$$1)
case 17:p=a2
l=p
j=l==null?null:l.f
q=j==null?0:j
u=4
x=16
break
case 14:u=13
f=t.pop()
o=A.t(f)
$.r3().k(C.p,"mobile fallback getProfile failed",o,null)
x=16
break
case 13:x=4
break
case 16:case 12:l=b.G
l.window.localStorage.setItem("_flutter_game_jwt",r)
l.window.localStorage.setItem("_flutter_game_balance",J.a1W(q,4))
l.window.localStorage.setItem("_flutter_game_api_base",g.r.amB())
l.window.localStorage.setItem("_flutter_game_id",g.a.c)
u=19
x=22
return A.c(g.Wv(),$async$$1)
case 22:u=4
x=21
break
case 19:u=18
e=t.pop()
n=A.t(e)
$.r3().k(C.aC,"RTP prefetch failed",n,null)
x=21
break
case 18:x=4
break
case 21:u=2
x=6
break
case 4:u=3
d=t.pop()
m=A.t(d)
$.r3().k(C.p,"mobile postFrame slot game prep failed",m,null)
x=6
break
case 3:x=2
break
case 6:g=g.c
if(g==null){x=1
break}x=23
return A.c(A.X(g,!1).zn(),$async$$1)
case 23:h=Date.now()
b.G.window.location.assign("/games/"+s.b+"?flutter=1&_ts="+h)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:477}
B.cKo.prototype={
$0(){var x=0,w=A.m(y.a),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=2
return A.c(v.a.xh(),$async$$0)
case 2:t=e
B.dgM(t)
u=y.H
x=3
return A.c(A.d_(D.aGM,null,u),$async$$0)
case 3:B.dgM(t)
x=4
return A.c(A.d_(D.aGu,null,u),$async$$0)
case 4:B.dgM(t)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:84};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.amf.prototype,"gcHF","Cz",0)
w(v,"gbNh","WA",1)
w(v,"gcYT","cYU",2)})();(function inheritance(){var x=a.inheritMany
x(A.ff,[B.d5x,B.d5z,B.cKf,B.cKg,B.cKj])
x(A.h5,[B.d5w,B.d5A,B.d5y,B.cKk,B.cKl,B.cKm,B.cKh,B.cKi,B.cKn,B.cKo])
x(A.W,[B.acp,B.FE])
x(A.Z,[B.aWa,B.amf])})()
A.fP(b.typeUniverse,JSON.parse('{"acp":{"W":[],"n":[]},"aWa":{"Z":["acp"]},"FE":{"W":[],"n":[]},"amf":{"Z":["FE"]}}'))
var y=(function rtii(){var x=A.aw
return{u:x("ab<V<q,@>?>"),w:x("bj9"),p:x("E<n>"),P:x("V<q,@>"),f:x("V<@,@>"),a:x("bn"),A:x("Nj"),N:x("q"),r:x("NZ"),z:x("@"),h:x("V<q,@>?"),X:x("U?"),H:x("~")}})();(function constants(){D.asl=new A.a0(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.y)
D.aGu=new A.bH(175e4)
D.aGM=new A.bH(75e4)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eg3","dEb",()=>A.bt("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
x($,"eh1","r3",()=>A.aU("SlotGamePage"))})()};
(a=>{a["jP+EqKfJ0660TLf5xnnwW7kgUJo="]=a.current})($__dart_deferred_initializers__);