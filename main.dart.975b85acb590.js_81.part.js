((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ebJ(d,e,f,g,h,i){var w,v=B.wj(i),u=e.nm(),t=A.iJ(d,g)
v=new B.a_s(e,u,t,v,f,g,A.XC(),A.enF())
w=d.c
if(!(w instanceof A.fM)||w.b!==e)A.U(D.x)
v.y=B.ebK(d,u,i)
return v},
ebK(d,e,f){var w=e.e
return"game_access_v2_"+D.d5.cg(D.bg.cg(D.G.az(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bDk(d,e,f,g){var w=null
return B.eCw(d,e,f,g)},
eCw(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDk=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fM)||k.b!==e)throw A.o(D.x)
o=e.nm()
r=B.wj(g)
q=B.ebK(d,o,r)
p=new B.bDl(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GF(q,new B.bDn(p,l,q,r,e,d,f),x.C),$async$bDk)
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
return A.k($async$bDk,v)},
pQ:function pQ(){},
Dl:function Dl(){},
v8:function v8(){},
a_r:function a_r(){},
Dm:function Dm(){},
acp:function acp(){},
EY:function EY(d,e,f){this.a=d
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
bDl:function bDl(d,e,f){this.a=d
this.b=e
this.c=f},
bDm:function bDm(d,e,f){this.a=d
this.b=e
this.c=f},
bDn:function bDn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bD9:function bD9(d){this.a=d},
bDa:function bDa(d,e,f){this.a=d
this.b=e
this.c=f},
bDg:function bDg(d){this.a=d},
bDj:function bDj(d){this.a=d},
bDh:function bDh(d,e){this.a=d
this.b=e},
bDc:function bDc(d,e){this.a=d
this.b=e},
bDi:function bDi(d){this.a=d},
bDe:function bDe(d,e,f){this.a=d
this.b=e
this.c=f},
bDd:function bDd(d,e){this.a=d
this.b=e},
bDb:function bDb(d,e){this.a=d
this.b=e},
e5d(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.R0)
return d.toLowerCase()},
wj(d){var w,v
if(A.eH(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNR)
v=A.aZo(d,null)
if(v.bm(0,A.oy(9007199254740991))>0)throw A.o(C.aOh)
return v.dd(0)},
dSS(d){var w
if(typeof d!="string")throw A.o(D.QY)
w=A.jo(d)
return w.jM(w.b)},
dNk(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R4)
return d},
ay4(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R_)
v=A.j5(d)
if(v==null)throw A.o(C.R_)
return B.dTT(v)},
ebG(d,e,f,g,h){var w=B.e5d(g),v=B.wj(h),u=B.dNk(f),t=B.dSS(d)
if(e<=0)A.U(C.aOX)
return new B.bD6(w,u,t,v,e)},
ebH(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOp)
w=A.bb(d.i(0,"operationId"))
v=B.wj(d.i(0,"productId"))
u=A.bb(d.i(0,"gameKey"))
return B.ebG(A.bb(d.i(0,"depositAmount")),B.wj(d.i(0,"entitlementDurationDays")),u,w,v)},
e0j(d,e){var w=A.bb(d.i(0,"status"))
B.ay4(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wj(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dSS(d.i(0,"depositAmount"))!==e.c||!C.bGg.t(0,w))A.U(C.aOG)
return new B.bD7(w)},
eCt(d){var w=A.bb(d.i(0,"clientSessionId")),v=B.wj(d.i(0,"productId")),u=A.bb(d.i(0,"gameKey"))
w=B.e5d(w)
v=B.wj(v)
return new B.aco(w,B.dNk(u),v)},
e0i(d,e){var w,v="launchExpiresAt",u=A.bb(d.i(0,"status")),t=A.fm(d.i(0,"launchConsumed")),s=B.ay4(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ay4(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ay4(d.i(0,"endedAt"))
w=A.b5(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFs.t(0,u)||d.ao("launchUrl"))A.U(C.aOA)
return new B.a_q(u,t,s,w)},
aRU:function aRU(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bD6:function bD6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bD7:function bD7(d){this.a=d},
aco:function aco(d,e,f){this.a=d
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
afC:function afC(d){this.a=d},
eHi(d,e){var w=d==null,v=w?null:D.b.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.erZ()
if(w.b.test(v))if(d.c===D.Rc)if(d.d===D.Re)if(d.f!==D.Rd){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.aNR(v,d.e,d.f.a,d.r,d.w)},
aNR:function aNR(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bUD:function bUD(){},
bUE:function bUE(){},
aGT:function aGT(d){this.a=d},
eoU(d){var w,v,u=d==null?null:D.b.F(d)
if(u==null||u.length===0)return null
w=A.l7(u)
v=!0
if(w!=null)if(w.gf1().toLowerCase()==="https")if(w.gnL().length===0)v=w.ga69()&&w.gzb()!==443||!D.acP.t(0,w.gi0().toLowerCase())||w.gwG().length===0
if(v)return null
return w.cy6("telegram.me")},
dTT(d){return d.c?d:A.e9O(A.bK(d),A.bO(d),A.cv(d),A.iD(d),A.og(d),A.SI(d),A.aND(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[782]
B.pQ.prototype={$ibk:1}
B.Dl.prototype={$ibk:1}
B.v8.prototype={$ibk:1}
B.a_r.prototype={$ibk:1}
B.Dm.prototype={$ibk:1}
B.acp.prototype={$ibk:1}
B.EY.prototype={}
B.M5.prototype={}
B.a_s.prototype={
Ax(){return A.jk(new B.bD9(this))},
bx6(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Dl())},
Az(d,e){return this.dxB(d,e)},
dxB(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$Az=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.Ax()
s=x.N
w=3
return A.c(t.c.X("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.a_(["Cache-Control","no-store"],s,s),A.q(s,s),null).f3(D.fB),$async$Az)
case 3:r=g
t.Ax()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Az,v)},
cbN(d){var w,v,u
try{w=A.m4(D.av.D(d.w)).i(0,"code")
v=C.bGb.t(0,w)?A.bb(w):null
return v}catch(u){return null}},
r8(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$r8=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET",""),$async$r8)
case 3:i=e
h=i.b
if(h!==200){s=t.cbN(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.m4(D.av.D(i.w))
s=B.dSS(h.i(0,"requiredBalance"))
r=B.dSS(h.i(0,"currentBalance"))
q=A.fm(h.i(0,"eligible"))
p=A.fm(h.i(0,"hasActiveEntitlement"))
o=A.fm(h.i(0,"purchaseAvailable"))
n=A.fm(h.i(0,"launchAvailable"))
m=A.bb(h.i(0,"currency"))
l=A.b5(h.i(0,"denyReason"))
A.b5(h.i(0,"purchaseUnavailableReasonCode"))
A.b5(h.i(0,"launchUnavailableReasonCode"))
k=B.wj(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wj(h.i(0,"productId"))===t.d)if(B.dNk(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.U(C.aO1)
u=new B.aRU(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$r8,v)},
vA(d,e){return this.dmv(d,e,e)},
dmv(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vA=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.Ax()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GF(q,new B.bDa(r,d,e),e),$async$vA)
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
if(w.length>32768)throw A.o(D.ca)
v=x.P.a(D.G.bH(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.ca)
if(f==="purchase")this.xC(v)
else this.LN(v)
return v}catch(s){throw A.o(new B.pQ())}},
xC(d){var w,v,u=x.P,t=B.ebH(u.a(d.i(0,"intent")))
this.bx6(t.d,t.b)
w=A.fm(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.ca)
return new B.EY(t,v==null?null:B.e0j(u.a(v),t),w)},
LN(d){var w,v=x.P,u=B.eCt(v.a(d.i(0,"intent")))
this.bx6(u.c,u.b)
w=d.i(0,"state")
return new B.M5(u,w==null?null:B.e0i(v.a(w),u))},
ro(d,e,f){return this.dM2(d,e,f)},
dM2(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ro=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.Ax()
u=3
r=D.G.az(f,null)
w=6
return A.c(d.h8("String",e,r),$async$ro)
case 6:if(!h)throw A.o(new B.pQ())
w=7
return A.c(d.hB(),$async$ro)
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
return A.k($async$ro,v)},
Zr(d,e){return this.dx6(d,e)},
dx6(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$Zr=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.Ax()
u=3
w=6
return A.c(d.M(0,e),$async$Zr)
case 6:if(!g)throw A.o(new B.pQ())
w=7
return A.c(d.hB(),$async$Zr)
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
return A.k($async$Zr,v)},
atu(d){return this.dmQ(d)},
dmQ(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atu=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET","/operations/"+d.a),$async$atu)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.v8())
s=A.m4(D.av.D(r.w))
B.e0j(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atu,v)},
e5P(){return this.vA(new B.bDg(this),x.t)},
e7b(){return this.vA(new B.bDj(this),x.t)},
c_i(d){return this.vA(new B.bDh(this,d),x.L)},
dMn(d){return this.vA(new B.bDc(this,d),x.H)},
att(d){return this.dmP(d)},
dmP(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$att=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET","/sessions/"+d.a),$async$att)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.m4(D.av.D(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.v8())
s=A.m4(D.av.D(r.w))
B.e0i(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$att,v)},
cxJ(){return this.vA(new B.bDi(this),x.g)},
e0K(d,e){return this.vA(new B.bDe(this,d,e),x.b)},
dX6(d){return this.vA(new B.bDd(this,d),x.X)},
dMm(d){return this.vA(new B.bDb(this,d),x.H)}}
B.aRU.prototype={}
B.bD6.prototype={
A(){var w=this
return A.a_(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n4(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bD7.prototype={}
B.aco.prototype={
A(){return A.a_(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n4(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_q.prototype={}
B.a_p.prototype={}
B.afC.prototype={
pV(d){return this.cCj(d)},
cCj(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pV=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pV(d),$async$pV)
case 7:q=f
p=B.eHi(q,d)
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
if(m instanceof A.ip){o=m
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
return A.k($async$pV,v)}}
B.aNR.prototype={
gctq(){var w=D.b.mB(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.e7(new A.ap(w,new B.bUD(),v.k("ap<1>")),new B.bUE(),v.k("e7<1,n>")).b3(0," ")}}
B.aGT.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aGT&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<EY?>(fK)","B<a_s?>()","B<EY>(fK)","B<M5?>(fK)","B<a_p>(fK)","B<a_q>(fK)"])
B.bDl.prototype={
$0(){return A.jk(new B.bDm(this.a,this.b,this.c))},
$S:0}
B.bDm.prototype={
$0(){return this.a.$0()&&this.b.dA(this.c)},
$S:1}
B.bDn.prototype={
$0(){var w=0,v=A.l(x.C),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$0=A.h(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a8=r.a
a8.$0()
q=null
t=4
w=7
return A.c(A.iU(),$async$$0)
case 7:p=b1
w=8
return A.c(p.hB(),$async$$0)
case 8:a8.$0()
for(h=["purchase","launch"],g=r.d,f=x.P,e=r.c,d=e+":",a0=0;a0<2;++a0){o=h[a0]
a1=A.b(o)
n=A.b5(p.a.i(0,d+a1))
if(n==null)continue
if(n.length>32768)throw A.o(D.ca)
m=f.a(D.G.bH(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.ca)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.ebH(l):null
if(J.p(o,"launch")){a1=l
a2=A.bb(a1.i(0,"clientSessionId"))
a3=B.wj(a1.i(0,"productId"))
a1=A.bb(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.U(C.R0)
a3=B.wj(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.U(C.R4)
a5=new B.aco(a2.toLowerCase(),a1,a3)}else a5=null
j=a5
a1=k
a6=a1==null?null:a1.b
i=a6==null?j.b:a6
a1=k
a1=a1==null?null:a1.d
if((a1==null?j.c:a1)===g)a1=q!=null&&q!==i
else a1=!0
if(a1)throw A.o(D.ca)
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
break}u=B.ebJ(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bD9.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dA(w.b)},
$S:1}
B.bDa.prototype={
$0(){return this.cAg(this.c)},
cAg(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.Ax()
q=null
t=4
w=7
return A.c(o.r.$0(),$async$$0)
case 7:q=f
w=8
return A.c(q.hB(),$async$$0)
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
B.bDg.prototype={
$1(d){return this.cAl(d)},
cAl(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
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
B.bDj.prototype={
$1(d){return this.cAo(d)},
cAo(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
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
return A.c(p.atu(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.ro(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xC(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDh.prototype={
$1(d){return this.cAm(d)},
cAm(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bx6(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.Ay(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xC(r)
if(!p.a.n4(j))throw A.o(new B.Dl())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.atu(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.ro(d,s+":purchase",r),$async$$1)
case 8:u=k.xC(r)
w=1
break
case 7:case 4:w=9
return A.c(k.r8(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.jo(n.b).bm(0,A.jo(m))<0}if(m)throw A.o(new B.a_r())
if(q)r=A.a_(["version",1,"scope",s,"kind","purchase","intent",j.A(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.ro(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.Az("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bEO.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.ro(d,s+":purchase",r),$async$$1)
case 16:u=k.xC(r)
w=1
break
case 15:throw A.o(new B.v8())
case 13:o=A.m4(D.av.D(l.w))
B.e0j(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.ro(d,s+":purchase",r),$async$$1)
case 17:u=k.xC(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bDc.prototype={
$1(d){return this.cAi(d)},
cAi(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.Ay(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xC(s)
if(!(r.b!=null||r.c)||!r.a.n4(t.b))throw A.o(new B.Dl())
w=3
return A.c(q.Zr(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:151}
B.bDi.prototype={
$1(d){return this.cAn(d)},
cAn(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.Ay(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.att(r.LN(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.ro(d,q+":launch",s),$async$$1)
case 4:u=r.LN(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bDe.prototype={
$1(d){return this.cAk(d)},
cAk(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bx6(f.c,e)
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
case 3:if(!g.LN(p).a.n4(f))throw A.o(new B.Dl())
d=p
w=5
return A.c(g.att(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.ro(a0,s+":launch",p),$async$$1)
case 6:o=g.LN(p).b
if(!t.c)throw A.o(new B.acp())
if((o==null?null:C.jO.t(0,o.a))===!0)throw A.o(new B.Dm())
case 4:w=7
return A.c(g.r8(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dm())
if(q)p=A.a_(["version",1,"scope",s,"kind","launch","intent",f.A()],x.N,x.z)
w=8
return A.c(g.ro(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.Az("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.cbN(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.v8())}s=A.m4(D.av.D(m.w))
g=g.w.$0().a3()
q=B.eoU(A.b5(s.i(0,"launchUrl")))
if(q==null)q=A.U(C.aOl)
k=B.ay4(s.i(0,"launchExpiresAt"))
j=B.ay4(s.i(0,"sessionExpiresAt"))
i=q.gkB().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.ia(g))if(j.ia(g))if(!k.ia(j))if(i!=null){g=J.bS(i)
if(g.gJ(i)===1){f=A.az("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gde(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.U(C.aOM)
u=new B.a_p(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bDd.prototype={
$1(d){return this.cAj(d)},
cAj(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.Ay(d,m+":launch","launch")
if(s==null||!n.LN(s).a.n4(t.b))throw A.o(new B.Dl())
r=t.b
w=3
return A.c(n.Az("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.v8())
p=A.m4(D.av.D(q.w))
o=B.e0i(p,r)
if(!C.jO.t(0,o.a))throw A.o(new B.v8())
s.h(0,"state",p)
w=4
return A.c(n.ro(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bDb.prototype={
$1(d){return this.cAh(d)},
cAh(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.Ay(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LN(s)
if(r.a.n4(t.b)){q=r.b
q=(q==null?null:C.jO.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Dl())
w=3
return A.c(p.Zr(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:151}
B.bUD.prototype={
$1(d){return d.length!==0},
$S:9}
B.bUE.prototype={
$1(d){return d[0].toUpperCase()+D.b.bu(d,1)},
$S:36};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pQ,B.Dl,B.v8,B.a_r,B.Dm,B.acp,B.EY,B.M5,B.a_s,B.aRU,B.bD6,B.bD7,B.aco,B.a_q,B.a_p,B.afC,B.aNR,B.aGT])
w(A.bt,[B.bDl,B.bDm,B.bDn,B.bD9,B.bDa])
w(A.bu,[B.bDg,B.bDj,B.bDh,B.bDc,B.bDi,B.bDe,B.bDd,B.bDb,B.bUD,B.bUE])})()
A.b_(b.typeUniverse,JSON.parse('{"pQ":{"bk":[]},"Dl":{"bk":[]},"v8":{"bk":[]},"a_r":{"bk":[]},"Dm":{"bk":[]},"acp":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bZ<n>"),b:w("a_p"),X:w("a_q"),f:w("v<A>"),U:w("v<ig>"),P:w("a1<n,@>"),q:w("rd"),O:w("aRU"),L:w("EY"),N:w("n"),z:w("@"),C:w("a_s?"),h:w("a1<n,@>?"),p:w("aNR?"),g:w("M5?"),t:w("EY?"),H:w("~")}})();(function constants(){C.aNR=new A.c4("Invalid product identifier",null,null)
C.aO1=new A.c4("Invalid game access state",null,null)
C.aOh=new A.c4("Product identifier out of range",null,null)
C.aOl=new A.c4("Untrusted game handoff",null,null)
C.aOp=new A.c4("Invalid currency",null,null)
C.aOA=new A.c4("Game launch state mismatch",null,null)
C.R_=new A.c4("Invalid timestamp",null,null)
C.aOG=new A.c4("Game purchase receipt mismatch",null,null)
C.aOM=new A.c4("Game launch handoff mismatch",null,null)
C.R0=new A.c4("Invalid game operation identifier",null,null)
C.aOQ=new A.c4("Invalid product game access descriptor",null,null)
C.R4=new A.c4("Invalid game key",null,null)
C.aOX=new A.c4("Invalid duration",null,null)
C.bEO=new A.fJ([400,409,422],A.C("fJ<y>"))
C.boJ={ENDED:0,EXPIRED:1,DENIED:2}
C.jO=new A.bZ(C.boJ,3,x.M)
C.boN={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFs=new A.bZ(C.boN,5,x.M)
C.bnM={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGb=new A.bZ(C.bnM,11,x.M)
C.bpl={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGg=new A.bZ(C.bpl,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f9l","erZ",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["CcR0MJPx7euKaMjh6PUvvbxUZGs="]=a.current})($__dart_deferred_initializers__);