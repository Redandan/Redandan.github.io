((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ebs(d,e,f,g,h,i){var w,v=B.wj(i),u=e.nm(),t=A.iJ(d,g)
v=new B.a_s(e,u,t,v,f,g,A.XB(),A.enn())
w=d.c
if(!(w instanceof A.fM)||w.b!==e)A.V(D.x)
v.y=B.ebt(d,u,i)
return v},
ebt(d,e,f){var w=e.e
return"game_access_v2_"+D.d3.cg(D.bj.cg(D.H.az(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bDc(d,e,f,g){var w=null
return B.eCe(d,e,f,g)},
eCe(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDc=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fM)||k.b!==e)throw A.o(D.x)
o=e.nm()
r=B.wj(g)
q=B.ebt(d,o,r)
p=new B.bDd(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GG(q,new B.bDf(p,l,q,r,e,d,f),x.C),$async$bDc)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.wA)throw A.o(new B.pQ())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bDc,v)},
pQ:function pQ(){},
Dk:function Dk(){},
v8:function v8(){},
a_r:function a_r(){},
Dl:function Dl(){},
acn:function acn(){},
EZ:function EZ(d,e,f){this.a=d
this.b=e
this.c=f},
M5:function M5(d,e){this.a=d
this.b=e},
a_s:function a_s(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bDd:function bDd(d,e,f){this.a=d
this.b=e
this.c=f},
bDe:function bDe(d,e,f){this.a=d
this.b=e
this.c=f},
bDf:function bDf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bD1:function bD1(d){this.a=d},
bD2:function bD2(d,e,f){this.a=d
this.b=e
this.c=f},
bD8:function bD8(d){this.a=d},
bDb:function bDb(d){this.a=d},
bD9:function bD9(d,e){this.a=d
this.b=e},
bD4:function bD4(d,e){this.a=d
this.b=e},
bDa:function bDa(d){this.a=d},
bD6:function bD6(d,e,f){this.a=d
this.b=e
this.c=f},
bD5:function bD5(d,e){this.a=d
this.b=e},
bD3:function bD3(d,e){this.a=d
this.b=e},
e4X(d){var w=A.ay(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.QX)
return d.toLowerCase()},
wj(d){var w,v
if(A.eF(d))d=D.h.l(d)
if(typeof d=="string"){w=A.ay("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNR)
v=A.aZi(d,null)
if(v.bm(0,A.oy(9007199254740991))>0)throw A.o(C.aOh)
return v.dc(0)},
dSA(d){var w
if(typeof d!="string")throw A.o(D.QU)
w=A.jo(d)
return w.jM(w.b)},
dN4(d){var w
if(typeof d=="string"){w=A.ay("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R0)
return d},
ay0(d){var w,v
if(typeof d=="string"){w=A.ay("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.QW)
v=A.j4(d)
if(v==null)throw A.o(C.QW)
return B.dTB(v)},
ebp(d,e,f,g,h){var w=B.e4X(g),v=B.wj(h),u=B.dN4(f),t=B.dSA(d)
if(e<=0)A.V(C.aOX)
return new B.bCZ(w,u,t,v,e)},
ebq(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOp)
w=A.ba(d.i(0,"operationId"))
v=B.wj(d.i(0,"productId"))
u=A.ba(d.i(0,"gameKey"))
return B.ebp(A.ba(d.i(0,"depositAmount")),B.wj(d.i(0,"entitlementDurationDays")),u,w,v)},
e01(d,e){var w=A.ba(d.i(0,"status"))
B.ay0(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wj(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dSA(d.i(0,"depositAmount"))!==e.c||!C.bGi.t(0,w))A.V(C.aOG)
return new B.bD_(w)},
eCb(d){var w=A.ba(d.i(0,"clientSessionId")),v=B.wj(d.i(0,"productId")),u=A.ba(d.i(0,"gameKey"))
w=B.e4X(w)
v=B.wj(v)
return new B.acm(w,B.dN4(u),v)},
e00(d,e){var w,v="launchExpiresAt",u=A.ba(d.i(0,"status")),t=A.fm(d.i(0,"launchConsumed")),s=B.ay0(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ay0(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ay0(d.i(0,"endedAt"))
w=A.b5(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFu.t(0,u)||d.ao("launchUrl"))A.V(C.aOA)
return new B.a_q(u,t,s,w)},
aRP:function aRP(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bCZ:function bCZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bD_:function bD_(d){this.a=d},
acm:function acm(d,e,f){this.a=d
this.b=e
this.c=f},
a_q:function a_q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
a_p:function a_p(d,e,f){this.a=d
this.b=e
this.c=f},
afA:function afA(d){this.a=d},
eH1(d,e){var w=d==null,v=w?null:D.b.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.erH()
if(w.b.test(v))if(d.c===D.R8)if(d.d===D.Ra)if(d.f!==D.R9){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.aNN(v,d.e,d.f.a,d.r,d.w)},
aNN:function aNN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bUw:function bUw(){},
bUx:function bUx(){},
aGP:function aGP(d){this.a=d},
eoC(d){var w,v,u=d==null?null:D.b.F(d)
if(u==null||u.length===0)return null
w=A.l7(u)
v=!0
if(w!=null)if(w.gf0().toLowerCase()==="https")if(w.gnK().length===0)v=w.ga6d()&&w.gzb()!==443||!D.acK.t(0,w.gi0().toLowerCase())||w.gwG().length===0
if(v)return null
return w.cy1("telegram.me")},
dTB(d){return d.c?d:A.e9x(A.bK(d),A.bO(d),A.cv(d),A.iE(d),A.og(d),A.SI(d),A.aNz(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[782]
B.pQ.prototype={$ibk:1}
B.Dk.prototype={$ibk:1}
B.v8.prototype={$ibk:1}
B.a_r.prototype={$ibk:1}
B.Dl.prototype={$ibk:1}
B.acn.prototype={$ibk:1}
B.EZ.prototype={}
B.M5.prototype={}
B.a_s.prototype={
Ax(){return A.jk(new B.bD1(this))},
bx3(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Dk())},
Az(d,e){return this.dxv(d,e)},
dxv(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$Az=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.Ax()
s=x.N
w=3
return A.c(t.c.X("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.a_(["Cache-Control","no-store"],s,s),A.q(s,s),null).f2(D.fy),$async$Az)
case 3:r=g
t.Ax()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Az,v)},
cbM(d){var w,v,u
try{w=A.m3(D.ay.D(d.w)).i(0,"code")
v=C.bGd.t(0,w)?A.ba(w):null
return v}catch(u){return null}},
r7(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$r7=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET",""),$async$r7)
case 3:i=e
h=i.b
if(h!==200){s=t.cbM(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.m3(D.ay.D(i.w))
s=B.dSA(h.i(0,"requiredBalance"))
r=B.dSA(h.i(0,"currentBalance"))
q=A.fm(h.i(0,"eligible"))
p=A.fm(h.i(0,"hasActiveEntitlement"))
o=A.fm(h.i(0,"purchaseAvailable"))
n=A.fm(h.i(0,"launchAvailable"))
m=A.ba(h.i(0,"currency"))
l=A.b5(h.i(0,"denyReason"))
A.b5(h.i(0,"purchaseUnavailableReasonCode"))
A.b5(h.i(0,"launchUnavailableReasonCode"))
k=B.wj(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wj(h.i(0,"productId"))===t.d)if(B.dN4(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.V(C.aO1)
u=new B.aRP(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$r7,v)},
vA(d,e){return this.dmp(d,e,e)},
dmp(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vA=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.Ax()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GG(q,new B.bD2(r,d,e),e),$async$vA)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.wA)throw A.o(new B.pQ())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$vA,v)},
Ay(d,e,f){var w,v,u,t,s
try{w=A.b5(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.c8)
v=x.P.a(D.H.bH(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.c8)
if(f==="purchase")this.xC(v)
else this.LU(v)
return v}catch(s){throw A.o(new B.pQ())}},
xC(d){var w,v,u=x.P,t=B.ebq(u.a(d.i(0,"intent")))
this.bx3(t.d,t.b)
w=A.fm(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.c8)
return new B.EZ(t,v==null?null:B.e01(u.a(v),t),w)},
LU(d){var w,v=x.P,u=B.eCb(v.a(d.i(0,"intent")))
this.bx3(u.c,u.b)
w=d.i(0,"state")
return new B.M5(u,w==null?null:B.e00(v.a(w),u))},
rn(d,e,f){return this.dLY(d,e,f)},
dLY(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$rn=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.Ax()
u=3
r=D.H.az(f,null)
w=6
return A.c(d.h8("String",e,r),$async$rn)
case 6:if(!h)throw A.o(new B.pQ())
w=7
return A.c(d.hC(),$async$rn)
case 7:q=A.b5(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.pQ())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.pQ())
w=5
break
case 2:w=1
break
case 5:s.Ax()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$rn,v)},
Zy(d,e){return this.dx0(d,e)},
dx0(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$Zy=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.Ax()
u=3
w=6
return A.c(d.M(0,e),$async$Zy)
case 6:if(!g)throw A.o(new B.pQ())
w=7
return A.c(d.hC(),$async$Zy)
case 7:if(d.a.ao(e))throw A.o(new B.pQ())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.pQ())
w=5
break
case 2:w=1
break
case 5:s.Ax()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$Zy,v)},
atx(d){return this.dmK(d)},
dmK(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atx=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET","/operations/"+d.a),$async$atx)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.v8())
s=A.m3(D.ay.D(r.w))
B.e01(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atx,v)},
e5K(){return this.vA(new B.bD8(this),x.t)},
e76(){return this.vA(new B.bDb(this),x.t)},
c_j(d){return this.vA(new B.bD9(this,d),x.L)},
dMi(d){return this.vA(new B.bD4(this,d),x.H)},
atw(d){return this.dmJ(d)},
dmJ(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atw=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET","/sessions/"+d.a),$async$atw)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.m3(D.ay.D(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.v8())
s=A.m3(D.ay.D(r.w))
B.e00(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atw,v)},
cxE(){return this.vA(new B.bDa(this),x.g)},
e0F(d,e){return this.vA(new B.bD6(this,d,e),x.b)},
dX1(d){return this.vA(new B.bD5(this,d),x.X)},
dMh(d){return this.vA(new B.bD3(this,d),x.H)}}
B.aRP.prototype={}
B.bCZ.prototype={
A(){var w=this
return A.a_(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n4(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bD_.prototype={}
B.acm.prototype={
A(){return A.a_(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n4(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_q.prototype={}
B.a_p.prototype={}
B.afA.prototype={
pU(d){return this.cCe(d)},
cCe(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pU=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pU(d),$async$pU)
case 7:q=f
p=B.eH1(q,d)
if(p==null)throw A.o(C.aOQ)
u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
m=A.u(k)
if(m instanceof A.iq){o=m
m=o
l=m.b
if(m.a===400&&D.b.t(l.toUpperCase(),"GAME_NOT_AVAILABLE")){u=null
w=1
break}throw k}else throw k
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$pU,v)}}
B.aNN.prototype={
gctk(){var w=D.b.mB(this.b,A.ay("[-_]",!0,!1,!1,!1)),v=A.W(w)
return new A.e5(new A.aq(w,new B.bUw(),v.k("aq<1>")),new B.bUx(),v.k("e5<1,n>")).b3(0," ")}}
B.aGP.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aGP&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<EZ?>(fK)","B<a_s?>()","B<EZ>(fK)","B<M5?>(fK)","B<a_p>(fK)","B<a_q>(fK)"])
B.bDd.prototype={
$0(){return A.jk(new B.bDe(this.a,this.b,this.c))},
$S:0}
B.bDe.prototype={
$0(){return this.a.$0()&&this.b.dz(this.c)},
$S:1}
B.bDf.prototype={
$0(){var w=0,v=A.l(x.C),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$0=A.h(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a8=r.a
a8.$0()
q=null
t=4
w=7
return A.c(A.iT(),$async$$0)
case 7:p=b1
w=8
return A.c(p.hC(),$async$$0)
case 8:a8.$0()
for(h=["purchase","launch"],g=r.d,f=x.P,e=r.c,d=e+":",a0=0;a0<2;++a0){o=h[a0]
a1=A.b(o)
n=A.b5(p.a.i(0,d+a1))
if(n==null)continue
if(n.length>32768)throw A.o(D.c8)
m=f.a(D.H.bH(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.c8)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.ebq(l):null
if(J.p(o,"launch")){a1=l
a2=A.ba(a1.i(0,"clientSessionId"))
a3=B.wj(a1.i(0,"productId"))
a1=A.ba(a1.i(0,"gameKey"))
a4=A.ay(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.V(C.QX)
a3=B.wj(a3)
a4=A.ay("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.V(C.R0)
a5=new B.acm(a2.toLowerCase(),a1,a3)}else a5=null
j=a5
a1=k
a6=a1==null?null:a1.b
i=a6==null?j.b:a6
a1=k
a1=a1==null?null:a1.d
if((a1==null?j.c:a1)===g)a1=q!=null&&q!==i
else a1=!0
if(a1)throw A.o(D.c8)
q=i}t=2
w=6
break
case 4:t=3
a9=s.pop()
if(A.u(a9) instanceof A.a4_)throw a9
else throw A.o(new B.pQ())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.ebs(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bD1.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dz(w.b)},
$S:1}
B.bD2.prototype={
$0(){return this.cAb(this.c)},
cAb(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.Ax()
q=null
t=4
w=7
return A.c(o.r.$0(),$async$$0)
case 7:q=f
w=8
return A.c(q.hC(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
n=s.pop()
throw A.o(new B.pQ())
w=6
break
case 3:w=2
break
case 6:o.Ax()
u=r.b.$1(q)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S(){return this.c.k("B<0>()")}}
B.bD8.prototype={
$1(d){return this.cAg(d)},
cAg(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.Ay(d,q+":purchase","purchase")
u=s==null?null:r.xC(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDb.prototype={
$1(d){return this.cAj(d)},
cAj(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.Ay(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.xC(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.atx(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.rn(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xC(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bD9.prototype={
$1(d){return this.cAh(d)},
cAh(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bx3(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.Ay(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xC(r)
if(!p.a.n4(j))throw A.o(new B.Dk())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.atx(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.rn(d,s+":purchase",r),$async$$1)
case 8:u=k.xC(r)
w=1
break
case 7:case 4:w=9
return A.c(k.r7(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.jo(n.b).bm(0,A.jo(m))<0}if(m)throw A.o(new B.a_r())
if(q)r=A.a_(["version",1,"scope",s,"kind","purchase","intent",j.A(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.rn(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.Az("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bEQ.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.rn(d,s+":purchase",r),$async$$1)
case 16:u=k.xC(r)
w=1
break
case 15:throw A.o(new B.v8())
case 13:o=A.m3(D.ay.D(l.w))
B.e01(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.rn(d,s+":purchase",r),$async$$1)
case 17:u=k.xC(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bD4.prototype={
$1(d){return this.cAd(d)},
cAd(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.Ay(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xC(s)
if(!(r.b!=null||r.c)||!r.a.n4(t.b))throw A.o(new B.Dk())
w=3
return A.c(q.Zy(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:131}
B.bDa.prototype={
$1(d){return this.cAi(d)},
cAi(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.Ay(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.atw(r.LU(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.rn(d,q+":launch",s),$async$$1)
case 4:u=r.LU(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bD6.prototype={
$1(d){return this.cAf(d)},
cAf(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bx3(f.c,e)
s=g.y
s===$&&A.e()
r=g.Ay(a0,s+":purchase","purchase")
if(r!=null){q=g.xC(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.v8())
p=g.Ay(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.LU(p).a.n4(f))throw A.o(new B.Dk())
d=p
w=5
return A.c(g.atw(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.rn(a0,s+":launch",p),$async$$1)
case 6:o=g.LU(p).b
if(!t.c)throw A.o(new B.acn())
if((o==null?null:C.jL.t(0,o.a))===!0)throw A.o(new B.Dl())
case 4:w=7
return A.c(g.r7(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dl())
if(q)p=A.a_(["version",1,"scope",s,"kind","launch","intent",f.A()],x.N,x.z)
w=8
return A.c(g.rn(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.Az("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.cbM(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.v8())}s=A.m3(D.ay.D(m.w))
g=g.w.$0().a3()
q=B.eoC(A.b5(s.i(0,"launchUrl")))
if(q==null)q=A.V(C.aOl)
k=B.ay0(s.i(0,"launchExpiresAt"))
j=B.ay0(s.i(0,"sessionExpiresAt"))
i=q.gkA().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.ia(g))if(j.ia(g))if(!k.ia(j))if(i!=null){g=J.bS(i)
if(g.gJ(i)===1){f=A.ay("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gdd(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.V(C.aOM)
u=new B.a_p(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bD5.prototype={
$1(d){return this.cAe(d)},
cAe(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.Ay(d,m+":launch","launch")
if(s==null||!n.LU(s).a.n4(t.b))throw A.o(new B.Dk())
r=t.b
w=3
return A.c(n.Az("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.v8())
p=A.m3(D.ay.D(q.w))
o=B.e00(p,r)
if(!C.jL.t(0,o.a))throw A.o(new B.v8())
s.h(0,"state",p)
w=4
return A.c(n.rn(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bD3.prototype={
$1(d){return this.cAc(d)},
cAc(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.Ay(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LU(s)
if(r.a.n4(t.b)){q=r.b
q=(q==null?null:C.jL.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Dk())
w=3
return A.c(p.Zy(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:131}
B.bUw.prototype={
$1(d){return d.length!==0},
$S:9}
B.bUx.prototype={
$1(d){return d[0].toUpperCase()+D.b.bu(d,1)},
$S:37};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pQ,B.Dk,B.v8,B.a_r,B.Dl,B.acn,B.EZ,B.M5,B.a_s,B.aRP,B.bCZ,B.bD_,B.acm,B.a_q,B.a_p,B.afA,B.aNN,B.aGP])
w(A.bt,[B.bDd,B.bDe,B.bDf,B.bD1,B.bD2])
w(A.bu,[B.bD8,B.bDb,B.bD9,B.bD4,B.bDa,B.bD6,B.bD5,B.bD3,B.bUw,B.bUx])})()
A.b_(b.typeUniverse,JSON.parse('{"pQ":{"bk":[]},"Dk":{"bk":[]},"v8":{"bk":[]},"a_r":{"bk":[]},"Dl":{"bk":[]},"acn":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bZ<n>"),b:w("a_p"),X:w("a_q"),f:w("v<A>"),U:w("v<ig>"),P:w("a1<n,@>"),q:w("rc"),O:w("aRP"),L:w("EZ"),N:w("n"),z:w("@"),C:w("a_s?"),h:w("a1<n,@>?"),p:w("aNN?"),g:w("M5?"),t:w("EZ?"),H:w("~")}})();(function constants(){C.aNR=new A.c4("Invalid product identifier",null,null)
C.aO1=new A.c4("Invalid game access state",null,null)
C.aOh=new A.c4("Product identifier out of range",null,null)
C.aOl=new A.c4("Untrusted game handoff",null,null)
C.aOp=new A.c4("Invalid currency",null,null)
C.aOA=new A.c4("Game launch state mismatch",null,null)
C.QW=new A.c4("Invalid timestamp",null,null)
C.aOG=new A.c4("Game purchase receipt mismatch",null,null)
C.aOM=new A.c4("Game launch handoff mismatch",null,null)
C.QX=new A.c4("Invalid game operation identifier",null,null)
C.aOQ=new A.c4("Invalid product game access descriptor",null,null)
C.R0=new A.c4("Invalid game key",null,null)
C.aOX=new A.c4("Invalid duration",null,null)
C.bEQ=new A.fJ([400,409,422],A.C("fJ<y>"))
C.boK={ENDED:0,EXPIRED:1,DENIED:2}
C.jL=new A.bZ(C.boK,3,x.M)
C.boO={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFu=new A.bZ(C.boO,5,x.M)
C.bnN={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGd=new A.bZ(C.bnN,11,x.M)
C.bpm={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGi=new A.bZ(C.bpm,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f93","erH",()=>A.ay("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["hvB4YLNEoUXWtGUHyJIbhaY6zYY="]=a.current})($__dart_deferred_initializers__);