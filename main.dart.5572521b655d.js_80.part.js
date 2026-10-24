((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
eem(d,e,f,g,h,i){var w,v=B.wt(i),u=e.nq(),t=A.iu(d,g)
v=new B.a_G(e,u,t,v,f,g,A.XQ(),A.eqf())
w=d.c
if(!(w instanceof A.fF)||w.b!==e)A.T(D.x)
v.y=B.een(d,u,i)
return v},
een(d,e,f){var w=e.e
return"game_access_v2_"+D.d6.cj(D.bh.cj(D.G.aw(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bE1(d,e,f,g){var w=null
return B.eFa(d,e,f,g)},
eFa(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bE1=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fF)||k.b!==e)throw A.o(D.x)
o=e.nq()
r=B.wt(g)
q=B.een(d,o,r)
p=new B.bE2(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GT(q,new B.bE4(p,l,q,r,e,d,f),x.C),$async$bE1)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.wL)throw A.o(new B.pX())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bE1,v)},
pX:function pX(){},
Dx:function Dx(){},
vg:function vg(){},
a_F:function a_F(){},
Dy:function Dy(){},
acK:function acK(){},
Fc:function Fc(d,e,f){this.a=d
this.b=e
this.c=f},
Mj:function Mj(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bE2:function bE2(d,e,f){this.a=d
this.b=e
this.c=f},
bE3:function bE3(d,e,f){this.a=d
this.b=e
this.c=f},
bE4:function bE4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bDR:function bDR(d){this.a=d},
bDS:function bDS(d,e,f){this.a=d
this.b=e
this.c=f},
bDY:function bDY(d){this.a=d},
bE0:function bE0(d){this.a=d},
bDZ:function bDZ(d,e){this.a=d
this.b=e},
bDU:function bDU(d,e){this.a=d
this.b=e},
bE_:function bE_(d){this.a=d},
bDW:function bDW(d,e,f){this.a=d
this.b=e
this.c=f},
bDV:function bDV(d,e){this.a=d
this.b=e},
bDT:function bDT(d,e){this.a=d
this.b=e},
e7Q(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.R1)
return d.toLowerCase()},
wt(d){var w,v
if(A.ek(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNX)
v=A.aZV(d,null)
if(v.bn(0,A.oD(9007199254740991))>0)throw A.o(C.aOn)
return v.dt(0)},
dVA(d){var w
if(typeof d!="string")throw A.o(D.QZ)
w=A.js(d)
return w.jO(w.b)},
dQ1(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R5)
return d},
ayv(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R0)
v=A.j9(d)
if(v==null)throw A.o(C.R0)
return B.dWC(v)},
eej(d,e,f,g,h){var w=B.e7Q(g),v=B.wt(h),u=B.dQ1(f),t=B.dVA(d)
if(e<=0)A.T(C.aP2)
return new B.bDO(w,u,t,v,e)},
eek(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOv)
w=A.bb(d.i(0,"operationId"))
v=B.wt(d.i(0,"productId"))
u=A.bb(d.i(0,"gameKey"))
return B.eej(A.bb(d.i(0,"depositAmount")),B.wt(d.i(0,"entitlementDurationDays")),u,w,v)},
e2S(d,e){var w=A.bb(d.i(0,"status"))
B.ayv(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wt(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dVA(d.i(0,"depositAmount"))!==e.c||!C.bGv.t(0,w))A.T(C.aOM)
return new B.bDP(w)},
eF7(d){var w=A.bb(d.i(0,"clientSessionId")),v=B.wt(d.i(0,"productId")),u=A.bb(d.i(0,"gameKey"))
w=B.e7Q(w)
v=B.wt(v)
return new B.acJ(w,B.dQ1(u),v)},
e2R(d,e){var w,v="launchExpiresAt",u=A.bb(d.i(0,"status")),t=A.fp(d.i(0,"launchConsumed")),s=B.ayv(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ayv(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ayv(d.i(0,"endedAt"))
w=A.b6(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFH.t(0,u)||d.ao("launchUrl"))A.T(C.aOG)
return new B.a_E(u,t,s,w)},
aSo:function aSo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bDO:function bDO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bDP:function bDP(d){this.a=d},
acJ:function acJ(d,e,f){this.a=d
this.b=e
this.c=f},
a_E:function a_E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
a_D:function a_D(d,e,f){this.a=d
this.b=e
this.c=f},
afY:function afY(d){this.a=d},
eK2(d,e){var w=d==null,v=w?null:D.b.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.euB()
if(w.b.test(v))if(d.c===D.Rd)if(d.d===D.Rf)if(d.f!==D.Re){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.T7(v,d.e,d.f.a,d.r,d.w)},
T7:function T7(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bVt:function bVt(){},
bVu:function bVu(){},
aHk:function aHk(d){this.a=d},
erx(d){var w,v,u=d==null?null:D.b.F(d)
if(u==null||u.length===0)return null
w=A.lc(u)
v=!0
if(w!=null)if(w.gf3().toLowerCase()==="https")if(w.gnO().length===0)v=w.ga6o()&&w.gzg()!==443||!D.acO.t(0,w.gi2().toLowerCase())||w.gwN().length===0
if(v)return null
return w.czk("telegram.me")},
dWC(d){return d.c?d:A.ecs(A.bL(d),A.bQ(d),A.cw(d),A.iJ(d),A.om(d),A.SW(d),A.aO5(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[187],B)
C=c[784]
B.pX.prototype={$ibk:1}
B.Dx.prototype={$ibk:1}
B.vg.prototype={$ibk:1}
B.a_F.prototype={$ibk:1}
B.Dy.prototype={$ibk:1}
B.acK.prototype={$ibk:1}
B.Fc.prototype={}
B.Mj.prototype={}
B.a_G.prototype={
AC(){return A.jo(new B.bDR(this))},
bxD(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Dx())},
AE(d,e){return this.dzj(d,e)},
dzj(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$AE=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.AC()
s=x.N
w=3
return A.c(t.c.Y("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.Y(["Cache-Control","no-store"],s,s),A.q(s,s),null).eS(D.fA),$async$AE)
case 3:r=g
t.AC()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$AE,v)},
ccM(d){var w,v,u
try{w=A.mg(D.ar.D(d.w)).i(0,"code")
v=C.bGq.t(0,w)?A.bb(w):null
return v}catch(u){return null}},
rf(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$rf=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AE("GET",""),$async$rf)
case 3:i=e
h=i.b
if(h!==200){s=t.ccM(i)
throw A.o(A.aj(h,s==null?"Game access unavailable":s))}h=A.mg(D.ar.D(i.w))
s=B.dVA(h.i(0,"requiredBalance"))
r=B.dVA(h.i(0,"currentBalance"))
q=A.fp(h.i(0,"eligible"))
p=A.fp(h.i(0,"hasActiveEntitlement"))
o=A.fp(h.i(0,"purchaseAvailable"))
n=A.fp(h.i(0,"launchAvailable"))
m=A.bb(h.i(0,"currency"))
l=A.b6(h.i(0,"denyReason"))
A.b6(h.i(0,"purchaseUnavailableReasonCode"))
A.b6(h.i(0,"launchUnavailableReasonCode"))
k=B.wt(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wt(h.i(0,"productId"))===t.d)if(B.dQ1(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.T(C.aO7)
u=new B.aSo(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$rf,v)},
vE(d,e){return this.do8(d,e,e)},
do8(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vE=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.AC()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GT(q,new B.bDS(r,d,e),e),$async$vE)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.wL)throw A.o(new B.pX())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$vE,v)},
AD(d,e,f){var w,v,u,t,s
try{w=A.b6(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.cc)
v=x.P.a(D.G.bD(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.cc)
if(f==="purchase")this.xI(v)
else this.LV(v)
return v}catch(s){throw A.o(new B.pX())}},
xI(d){var w,v,u=x.P,t=B.eek(u.a(d.i(0,"intent")))
this.bxD(t.d,t.b)
w=A.fp(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.cc)
return new B.Fc(t,v==null?null:B.e2S(u.a(v),t),w)},
LV(d){var w,v=x.P,u=B.eF7(v.a(d.i(0,"intent")))
this.bxD(u.c,u.b)
w=d.i(0,"state")
return new B.Mj(u,w==null?null:B.e2R(v.a(w),u))},
rt(d,e,f){return this.dNS(d,e,f)},
dNS(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$rt=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.AC()
u=3
r=D.G.aw(f,null)
w=6
return A.c(d.hc("String",e,r),$async$rt)
case 6:if(!h)throw A.o(new B.pX())
w=7
return A.c(d.hC(),$async$rt)
case 7:q=A.b6(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.pX())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.pX())
w=5
break
case 2:w=1
break
case 5:s.AC()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$rt,v)},
ZB(d,e){return this.dyQ(d,e)},
dyQ(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$ZB=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.AC()
u=3
w=6
return A.c(d.N(0,e),$async$ZB)
case 6:if(!g)throw A.o(new B.pX())
w=7
return A.c(d.hC(),$async$ZB)
case 7:if(d.a.ao(e))throw A.o(new B.pX())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.pX())
w=5
break
case 2:w=1
break
case 5:s.AC()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$ZB,v)},
atM(d){return this.dot(d)},
dot(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atM=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AE("GET","/operations/"+d.a),$async$atM)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.vg())
s=A.mg(D.ar.D(r.w))
B.e2S(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atM,v)},
e7Q(){return this.vE(new B.bDY(this),x.t)},
e9d(){return this.vE(new B.bE0(this),x.t)},
c04(d){return this.vE(new B.bDZ(this,d),x.L)},
dOc(d){return this.vE(new B.bDU(this,d),x.H)},
atL(d){return this.dos(d)},
dos(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atL=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AE("GET","/sessions/"+d.a),$async$atL)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.mg(D.ar.D(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.vg())
s=A.mg(D.ar.D(r.w))
B.e2R(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atL,v)},
cyW(){return this.vE(new B.bE_(this),x.g)},
e2D(d,e){return this.vE(new B.bDW(this,d,e),x.b)},
dZ0(d){return this.vE(new B.bDV(this,d),x.X)},
dOb(d){return this.vE(new B.bDT(this,d),x.H)}}
B.aSo.prototype={}
B.bDO.prototype={
A(){var w=this
return A.Y(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n7(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bDP.prototype={}
B.acJ.prototype={
A(){return A.Y(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n7(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_E.prototype={}
B.a_D.prototype={}
B.afY.prototype={
pZ(d){return this.cDy(d)},
cDy(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pZ=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pZ(d),$async$pZ)
case 7:q=f
p=B.eK2(q,d)
if(p==null)throw A.o(C.aOW)
u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
m=A.u(k)
if(m instanceof A.ht){o=m
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
return A.k($async$pZ,v)}}
B.T7.prototype={
gcuA(){var w=D.b.mE(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.e2(new A.ao(w,new B.bVt(),v.k("ao<1>")),new B.bVu(),v.k("e2<1,n>")).b6(0," ")}}
B.aHk.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aHk&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<Fc?>(fM)","B<a_G?>()","B<Fc>(fM)","B<Mj?>(fM)","B<a_D>(fM)","B<a_E>(fM)"])
B.bE2.prototype={
$0(){return A.jo(new B.bE3(this.a,this.b,this.c))},
$S:0}
B.bE3.prototype={
$0(){return this.a.$0()&&this.b.dC(this.c)},
$S:1}
B.bE4.prototype={
$0(){var w=0,v=A.l(x.C),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$0=A.h(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a8=r.a
a8.$0()
q=null
t=4
w=7
return A.c(A.iY(),$async$$0)
case 7:p=b1
w=8
return A.c(p.hC(),$async$$0)
case 8:a8.$0()
for(h=["purchase","launch"],g=r.d,f=x.P,e=r.c,d=e+":",a0=0;a0<2;++a0){o=h[a0]
a1=A.b(o)
n=A.b6(p.a.i(0,d+a1))
if(n==null)continue
if(n.length>32768)throw A.o(D.cc)
m=f.a(D.G.bD(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.cc)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.eek(l):null
if(J.p(o,"launch")){a1=l
a2=A.bb(a1.i(0,"clientSessionId"))
a3=B.wt(a1.i(0,"productId"))
a1=A.bb(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.T(C.R1)
a3=B.wt(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.T(C.R5)
a5=new B.acJ(a2.toLowerCase(),a1,a3)}else a5=null
j=a5
a1=k
a6=a1==null?null:a1.b
i=a6==null?j.b:a6
a1=k
a1=a1==null?null:a1.d
if((a1==null?j.c:a1)===g)a1=q!=null&&q!==i
else a1=!0
if(a1)throw A.o(D.cc)
q=i}t=2
w=6
break
case 4:t=3
a9=s.pop()
if(A.u(a9) instanceof A.a4f)throw a9
else throw A.o(new B.pX())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.eem(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bDR.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dC(w.b)},
$S:1}
B.bDS.prototype={
$0(){return this.cBt(this.c)},
cBt(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.AC()
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
throw A.o(new B.pX())
w=6
break
case 3:w=2
break
case 6:o.AC()
u=r.b.$1(q)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S(){return this.c.k("B<0>()")}}
B.bDY.prototype={
$1(d){return this.cBy(d)},
cBy(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.AD(d,q+":purchase","purchase")
u=s==null?null:r.xI(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bE0.prototype={
$1(d){return this.cBB(d)},
cBB(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.AD(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.xI(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.atM(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.rt(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xI(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDZ.prototype={
$1(d){return this.cBz(d)},
cBz(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bxD(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.AD(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xI(r)
if(!p.a.n7(j))throw A.o(new B.Dx())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.atM(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.rt(d,s+":purchase",r),$async$$1)
case 8:u=k.xI(r)
w=1
break
case 7:case 4:w=9
return A.c(k.rf(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.js(n.b).bn(0,A.js(m))<0}if(m)throw A.o(new B.a_F())
if(q)r=A.Y(["version",1,"scope",s,"kind","purchase","intent",j.A(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.rt(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.AE("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bF0.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.rt(d,s+":purchase",r),$async$$1)
case 16:u=k.xI(r)
w=1
break
case 15:throw A.o(new B.vg())
case 13:o=A.mg(D.ar.D(l.w))
B.e2S(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.rt(d,s+":purchase",r),$async$$1)
case 17:u=k.xI(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bDU.prototype={
$1(d){return this.cBv(d)},
cBv(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.AD(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xI(s)
if(!(r.b!=null||r.c)||!r.a.n7(t.b))throw A.o(new B.Dx())
w=3
return A.c(q.ZB(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:145}
B.bE_.prototype={
$1(d){return this.cBA(d)},
cBA(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.AD(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.atL(r.LV(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.rt(d,q+":launch",s),$async$$1)
case 4:u=r.LV(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bDW.prototype={
$1(d){return this.cBx(d)},
cBx(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bxD(f.c,e)
s=g.y
s===$&&A.e()
r=g.AD(a0,s+":purchase","purchase")
if(r!=null){q=g.xI(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.vg())
p=g.AD(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.LV(p).a.n7(f))throw A.o(new B.Dx())
d=p
w=5
return A.c(g.atL(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.rt(a0,s+":launch",p),$async$$1)
case 6:o=g.LV(p).b
if(!t.c)throw A.o(new B.acK())
if((o==null?null:C.jQ.t(0,o.a))===!0)throw A.o(new B.Dy())
case 4:w=7
return A.c(g.rf(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dy())
if(q)p=A.Y(["version",1,"scope",s,"kind","launch","intent",f.A()],x.N,x.z)
w=8
return A.c(g.rt(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.AE("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.ccM(m)
if(s===400&&l!=null)throw A.o(A.aj(400,l))
throw A.o(new B.vg())}s=A.mg(D.ar.D(m.w))
g=g.w.$0().a3()
q=B.erx(A.b6(s.i(0,"launchUrl")))
if(q==null)q=A.T(C.aOr)
k=B.ayv(s.i(0,"launchExpiresAt"))
j=B.ayv(s.i(0,"sessionExpiresAt"))
i=q.gkH().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.ib(g))if(j.ib(g))if(!k.ib(j))if(i!=null){g=J.bW(i)
if(g.gJ(i)===1){f=A.az("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gcZ(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.T(C.aOS)
u=new B.a_D(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bDV.prototype={
$1(d){return this.cBw(d)},
cBw(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.AD(d,m+":launch","launch")
if(s==null||!n.LV(s).a.n7(t.b))throw A.o(new B.Dx())
r=t.b
w=3
return A.c(n.AE("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.vg())
p=A.mg(D.ar.D(q.w))
o=B.e2R(p,r)
if(!C.jQ.t(0,o.a))throw A.o(new B.vg())
s.h(0,"state",p)
w=4
return A.c(n.rt(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bDT.prototype={
$1(d){return this.cBu(d)},
cBu(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.AD(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LV(s)
if(r.a.n7(t.b)){q=r.b
q=(q==null?null:C.jQ.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Dx())
w=3
return A.c(p.ZB(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:145}
B.bVt.prototype={
$1(d){return d.length!==0},
$S:9}
B.bVu.prototype={
$1(d){return d[0].toUpperCase()+D.b.bu(d,1)},
$S:38};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pX,B.Dx,B.vg,B.a_F,B.Dy,B.acK,B.Fc,B.Mj,B.a_G,B.aSo,B.bDO,B.bDP,B.acJ,B.a_E,B.a_D,B.afY,B.T7,B.aHk])
w(A.bu,[B.bE2,B.bE3,B.bE4,B.bDR,B.bDS])
w(A.bt,[B.bDY,B.bE0,B.bDZ,B.bDU,B.bE_,B.bDW,B.bDV,B.bDT,B.bVt,B.bVu])})()
A.b0(b.typeUniverse,JSON.parse('{"pX":{"bk":[]},"Dx":{"bk":[]},"vg":{"bk":[]},"a_F":{"bk":[]},"Dy":{"bk":[]},"acK":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bT<n>"),b:w("a_D"),X:w("a_E"),f:w("v<A>"),U:w("v<io>"),P:w("a2<n,@>"),q:w("rl"),O:w("aSo"),L:w("Fc"),N:w("n"),z:w("@"),C:w("a_G?"),h:w("a2<n,@>?"),p:w("T7?"),g:w("Mj?"),t:w("Fc?"),H:w("~")}})();(function constants(){C.aNX=new A.c5("Invalid product identifier",null,null)
C.aO7=new A.c5("Invalid game access state",null,null)
C.aOn=new A.c5("Product identifier out of range",null,null)
C.aOr=new A.c5("Untrusted game handoff",null,null)
C.aOv=new A.c5("Invalid currency",null,null)
C.aOG=new A.c5("Game launch state mismatch",null,null)
C.R0=new A.c5("Invalid timestamp",null,null)
C.aOM=new A.c5("Game purchase receipt mismatch",null,null)
C.aOS=new A.c5("Game launch handoff mismatch",null,null)
C.R1=new A.c5("Invalid game operation identifier",null,null)
C.aOW=new A.c5("Invalid product game access descriptor",null,null)
C.R5=new A.c5("Invalid game key",null,null)
C.aP2=new A.c5("Invalid duration",null,null)
C.bF0=new A.fL([400,409,422],A.C("fL<y>"))
C.boW={ENDED:0,EXPIRED:1,DENIED:2}
C.jQ=new A.bT(C.boW,3,x.M)
C.bp_={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFH=new A.bT(C.bp_,5,x.M)
C.bnX={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGq=new A.bT(C.bnX,11,x.M)
C.bpy={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGv=new A.bT(C.bpy,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"fcb","euB",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["XGWKBPirUojqiXaqIcls5POMFXk="]=a.current})($__dart_deferred_initializers__);