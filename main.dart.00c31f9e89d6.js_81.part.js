((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
e5x(d,e,f,g,h,i){var w,v=B.vB(i),u=e.n3(),t=A.iv(d,g)
v=new B.YR(e,u,t,v,f,g,A.W8(),A.ehc())
w=d.c
if(!(w instanceof A.fE)||w.b!==e)A.W(D.x)
v.y=B.e5y(d,u,i)
return v},
e5y(d,e,f){var w=e.e
return"game_access_v2_"+D.d1.cp(D.bj.cp(D.H.av(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bze(d,e,f,g){var w=null
return B.evr(d,e,f,g)},
evr(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bze=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fE)||k.b!==e)throw A.o(D.x)
o=e.n3()
r=B.vB(g)
q=B.e5y(d,o,r)
p=new B.bzf(f,e,o)
p.$0()
t=4
w=7
return A.c(A.FA(q,new B.bzh(p,l,q,r,e,d,f),x.C),$async$bze)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.vR)throw A.o(new B.pg())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bze,v)},
pg:function pg(){},
Cj:function Cj(){},
uv:function uv(){},
YQ:function YQ(){},
Ck:function Ck(){},
aay:function aay(){},
DU:function DU(d,e,f){this.a=d
this.b=e
this.c=f},
KZ:function KZ(d,e){this.a=d
this.b=e},
YR:function YR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bzf:function bzf(d,e,f){this.a=d
this.b=e
this.c=f},
bzg:function bzg(d,e,f){this.a=d
this.b=e
this.c=f},
bzh:function bzh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bz3:function bz3(d){this.a=d},
bz4:function bz4(d,e,f){this.a=d
this.b=e
this.c=f},
bza:function bza(d){this.a=d},
bzd:function bzd(d){this.a=d},
bzb:function bzb(d,e){this.a=d
this.b=e},
bz6:function bz6(d,e){this.a=d
this.b=e},
bzc:function bzc(d){this.a=d},
bz8:function bz8(d,e,f){this.a=d
this.b=e
this.c=f},
bz7:function bz7(d,e){this.a=d
this.b=e},
bz5:function bz5(d,e){this.a=d
this.b=e},
e_7(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.PY)
return d.toLowerCase()},
vB(d){var w,v
if(A.ey(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aJq)
v=A.aW2(d,null)
if(v.bk(0,A.o3(9007199254740991))>0)throw A.o(C.aJR)
return v.da(0)},
dN1(d){var w
if(typeof d!="string")throw A.o(D.PV)
w=A.j9(d)
return w.jC(w.b)},
dHC(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.Q1)
return d},
avJ(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.PX)
v=A.iP(d)
if(v==null)throw A.o(C.PX)
return B.dO2(v)},
e5u(d,e,f,g,h){var w=B.e_7(g),v=B.vB(h),u=B.dHC(f),t=B.dN1(d)
if(e<=0)A.W(C.aKw)
return new B.bz0(w,u,t,v,e)},
e5v(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aJZ)
w=A.b8(d.i(0,"operationId"))
v=B.vB(d.i(0,"productId"))
u=A.b8(d.i(0,"gameKey"))
return B.e5u(A.b8(d.i(0,"depositAmount")),B.vB(d.i(0,"entitlementDurationDays")),u,w,v)},
dVi(d,e){var w=A.b8(d.i(0,"status"))
B.avJ(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.vB(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dN1(d.i(0,"depositAmount"))!==e.c||!C.bBd.t(0,w))A.W(C.aKf)
return new B.bz1(w)},
evo(d){var w=A.b8(d.i(0,"clientSessionId")),v=B.vB(d.i(0,"productId")),u=A.b8(d.i(0,"gameKey"))
w=B.e_7(w)
v=B.vB(v)
return new B.aax(w,B.dHC(u),v)},
dVh(d,e){var w,v="launchExpiresAt",u=A.b8(d.i(0,"status")),t=A.ff(d.i(0,"launchConsumed")),s=B.avJ(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.avJ(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.avJ(d.i(0,"endedAt"))
w=A.b3(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bAp.t(0,u)||d.ar("launchUrl"))A.W(C.aK9)
return new B.YP(u,t,s,w)},
aOT:function aOT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bz0:function bz0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bz1:function bz1(d){this.a=d},
aax:function aax(d,e,f){this.a=d
this.b=e
this.c=f},
YP:function YP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
YO:function YO(d,e,f){this.a=d
this.b=e
this.c=f},
adB:function adB(d){this.a=d},
eA8(d,e){var w=d==null,v=w?null:D.c.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.elg()
if(w.b.test(v))if(d.c===D.Q9)if(d.d===D.Qb)if(d.f!==D.Qa){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.aL5(v,d.e,d.f.a,d.r,d.w)},
aL5:function aL5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bQq:function bQq(){},
bQr:function bQr(){},
aEi:function aEi(d){this.a=d},
eik(d){var w,v,u=d==null?null:D.c.F(d)
if(u==null||u.length===0)return null
w=A.kO(u)
v=!0
if(w!=null)if(w.geW().toLowerCase()==="https")if(w.gnn().length===0)v=w.ga5j()&&w.gyK()!==443||!D.abv.t(0,w.ghT().toLowerCase())||w.gwf().length===0
if(v)return null
return w.cvF("telegram.me")},
dO2(d){return d.c?d:A.e3G(A.bG(d),A.bK(d),A.cs(d),A.iq(d),A.nO(d),A.Rm(d),A.aKS(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[784]
B.pg.prototype={$ibo:1}
B.Cj.prototype={$ibo:1}
B.uv.prototype={$ibo:1}
B.YQ.prototype={$ibo:1}
B.Ck.prototype={$ibo:1}
B.aay.prototype={$ibo:1}
B.DU.prototype={}
B.KZ.prototype={}
B.YR.prototype={
A3(){return A.j4(new B.bz3(this))},
bvF(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Cj())},
A5(d,e){return this.dui(d,e)},
dui(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$A5=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.A3()
s=x.N
w=3
return A.c(t.c.W("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.Z(["Cache-Control","no-store"],s,s),A.r(s,s),null).eY(D.fv),$async$A5)
case 3:r=g
t.A3()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$A5,v)},
c9L(d){var w,v,u
try{w=A.lI(D.ay.C(d.w)).i(0,"code")
v=C.bB8.t(0,w)?A.b8(w):null
return v}catch(u){return null}},
qK(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$qK=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A5("GET",""),$async$qK)
case 3:i=e
h=i.b
if(h!==200){s=t.c9L(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.lI(D.ay.C(i.w))
s=B.dN1(h.i(0,"requiredBalance"))
r=B.dN1(h.i(0,"currentBalance"))
q=A.ff(h.i(0,"eligible"))
p=A.ff(h.i(0,"hasActiveEntitlement"))
o=A.ff(h.i(0,"purchaseAvailable"))
n=A.ff(h.i(0,"launchAvailable"))
m=A.b8(h.i(0,"currency"))
l=A.b3(h.i(0,"denyReason"))
A.b3(h.i(0,"purchaseUnavailableReasonCode"))
A.b3(h.i(0,"launchUnavailableReasonCode"))
k=B.vB(h.i(0,"entitlementDurationDays"))
j=!0
if(B.vB(h.i(0,"productId"))===t.d)if(B.dHC(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.W(C.aJB)
u=new B.aOT(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$qK,v)},
va(d,e){return this.djp(d,e,e)},
djp(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$va=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.A3()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.FA(q,new B.bz4(r,d,e),e),$async$va)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.vR)throw A.o(new B.pg())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$va,v)},
A4(d,e,f){var w,v,u,t,s
try{w=A.b3(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.c8)
v=x.P.a(D.H.bB(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.c8)
if(f==="purchase")this.x9(v)
else this.L9(v)
return v}catch(s){throw A.o(new B.pg())}},
x9(d){var w,v,u=x.P,t=B.e5v(u.a(d.i(0,"intent")))
this.bvF(t.d,t.b)
w=A.ff(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.c8)
return new B.DU(t,v==null?null:B.dVi(u.a(v),t),w)},
L9(d){var w,v=x.P,u=B.evo(v.a(d.i(0,"intent")))
this.bvF(u.c,u.b)
w=d.i(0,"state")
return new B.KZ(u,w==null?null:B.dVh(v.a(w),u))},
qZ(d,e,f){return this.dII(d,e,f)},
dII(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$qZ=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.A3()
u=3
r=D.H.av(f,null)
w=6
return A.c(d.h0("String",e,r),$async$qZ)
case 6:if(!h)throw A.o(new B.pg())
w=7
return A.c(d.hu(),$async$qZ)
case 7:q=A.b3(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.pg())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.pg())
w=5
break
case 2:w=1
break
case 5:s.A3()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$qZ,v)},
YD(d,e){return this.dtO(d,e)},
dtO(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$YD=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.A3()
u=3
w=6
return A.c(d.N(0,e),$async$YD)
case 6:if(!g)throw A.o(new B.pg())
w=7
return A.c(d.hu(),$async$YD)
case 7:if(d.a.ar(e))throw A.o(new B.pg())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.pg())
w=5
break
case 2:w=1
break
case 5:s.A3()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$YD,v)},
asq(d){return this.djK(d)},
djK(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$asq=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A5("GET","/operations/"+d.a),$async$asq)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.uv())
s=A.lI(D.ay.C(r.w))
B.dVi(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$asq,v)},
e1a(){return this.va(new B.bza(this),x.t)},
e2w(){return this.va(new B.bzd(this),x.t)},
bYw(d){return this.va(new B.bzb(this,d),x.L)},
dJ1(d){return this.va(new B.bz6(this,d),x.H)},
asp(d){return this.djJ(d)},
djJ(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$asp=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A5("GET","/sessions/"+d.a),$async$asp)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.lI(D.ay.C(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.uv())
s=A.lI(D.ay.C(r.w))
B.dVh(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$asp,v)},
cvh(){return this.va(new B.bzc(this),x.g)},
dXr(d,e){return this.va(new B.bz8(this,d,e),x.b)},
dSQ(d){return this.va(new B.bz7(this,d),x.X)},
dJ0(d){return this.va(new B.bz5(this,d),x.H)}}
B.aOT.prototype={}
B.bz0.prototype={
v(){var w=this
return A.Z(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
mN(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bz1.prototype={}
B.aax.prototype={
v(){return A.Z(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
mN(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.YP.prototype={}
B.YO.prototype={}
B.adB.prototype={
py(d){return this.czu(d)},
czu(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$py=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.py(d),$async$py)
case 7:q=f
p=B.eA8(q,d)
if(p==null)throw A.o(C.aKp)
u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
m=A.u(k)
if(m instanceof A.i9){o=m
m=o
l=m.b
if(m.a===400&&D.c.t(l.toUpperCase(),"GAME_NOT_AVAILABLE")){u=null
w=1
break}throw k}else throw k
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$py,v)}}
B.aL5.prototype={
gcr_(){var w=D.c.nt(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.dY(new A.ap(w,new B.bQq(),v.k("ap<1>")),new B.bQr(),v.k("dY<1,n>")).b2(0," ")}}
B.aEi.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aEi&&e.a===this.a
else w=!0
return w},
gj(d){return D.c.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
v(){var w=A.r(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<DU?>(fC)","B<YR?>()","B<DU>(fC)","B<KZ?>(fC)","B<YO>(fC)","B<YP>(fC)"])
B.bzf.prototype={
$0(){return A.j4(new B.bzg(this.a,this.b,this.c))},
$S:0}
B.bzg.prototype={
$0(){return this.a.$0()&&this.b.du(this.c)},
$S:1}
B.bzh.prototype={
$0(){var w=0,v=A.l(x.C),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$0=A.h(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a8=r.a
a8.$0()
q=null
t=4
w=7
return A.c(A.iG(),$async$$0)
case 7:p=b1
w=8
return A.c(p.hu(),$async$$0)
case 8:a8.$0()
for(h=["purchase","launch"],g=r.d,f=x.P,e=r.c,d=e+":",a0=0;a0<2;++a0){o=h[a0]
a1=A.b(o)
n=A.b3(p.a.i(0,d+a1))
if(n==null)continue
if(n.length>32768)throw A.o(D.c8)
m=f.a(D.H.bB(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.c8)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.e5v(l):null
if(J.p(o,"launch")){a1=l
a2=A.b8(a1.i(0,"clientSessionId"))
a3=B.vB(a1.i(0,"productId"))
a1=A.b8(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.W(C.PY)
a3=B.vB(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.W(C.Q1)
a5=new B.aax(a2.toLowerCase(),a1,a3)}else a5=null
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
if(A.u(a9) instanceof A.a2e)throw a9
else throw A.o(new B.pg())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.e5x(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bz3.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.du(w.b)},
$S:1}
B.bz4.prototype={
$0(){return this.cxs(this.c)},
cxs(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.A3()
q=null
t=4
w=7
return A.c(o.r.$0(),$async$$0)
case 7:q=f
w=8
return A.c(q.hu(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
n=s.pop()
throw A.o(new B.pg())
w=6
break
case 3:w=2
break
case 6:o.A3()
u=r.b.$1(q)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S(){return this.c.k("B<0>()")}}
B.bza.prototype={
$1(d){return this.cxx(d)},
cxx(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.A4(d,q+":purchase","purchase")
u=s==null?null:r.x9(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bzd.prototype={
$1(d){return this.cxA(d)},
cxA(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.A4(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.x9(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.asq(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.qZ(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.x9(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bzb.prototype={
$1(d){return this.cxy(d)},
cxy(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bvF(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.A4(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.x9(r)
if(!p.a.mN(j))throw A.o(new B.Cj())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.asq(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.qZ(d,s+":purchase",r),$async$$1)
case 8:u=k.x9(r)
w=1
break
case 7:case 4:w=9
return A.c(k.qK(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.j9(n.b).bk(0,A.j9(m))<0}if(m)throw A.o(new B.YQ())
if(q)r=A.Z(["version",1,"scope",s,"kind","purchase","intent",j.v(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.qZ(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.A5("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bzM.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.qZ(d,s+":purchase",r),$async$$1)
case 16:u=k.x9(r)
w=1
break
case 15:throw A.o(new B.uv())
case 13:o=A.lI(D.ay.C(l.w))
B.dVi(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.qZ(d,s+":purchase",r),$async$$1)
case 17:u=k.x9(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bz6.prototype={
$1(d){return this.cxu(d)},
cxu(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.A4(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.x9(s)
if(!(r.b!=null||r.c)||!r.a.mN(t.b))throw A.o(new B.Cj())
w=3
return A.c(q.YD(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:137}
B.bzc.prototype={
$1(d){return this.cxz(d)},
cxz(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.A4(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.asp(r.L9(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.qZ(d,q+":launch",s),$async$$1)
case 4:u=r.L9(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bz8.prototype={
$1(d){return this.cxw(d)},
cxw(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bvF(f.c,e)
s=g.y
s===$&&A.e()
r=g.A4(a0,s+":purchase","purchase")
if(r!=null){q=g.x9(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.uv())
p=g.A4(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.L9(p).a.mN(f))throw A.o(new B.Cj())
d=p
w=5
return A.c(g.asp(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.qZ(a0,s+":launch",p),$async$$1)
case 6:o=g.L9(p).b
if(!t.c)throw A.o(new B.aay())
if((o==null?null:C.jD.t(0,o.a))===!0)throw A.o(new B.Ck())
case 4:w=7
return A.c(g.qK(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Ck())
if(q)p=A.Z(["version",1,"scope",s,"kind","launch","intent",f.v()],x.N,x.z)
w=8
return A.c(g.qZ(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.A5("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.c9L(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.uv())}s=A.lI(D.ay.C(m.w))
g=g.w.$0().a2()
q=B.eik(A.b3(s.i(0,"launchUrl")))
if(q==null)q=A.W(C.aJV)
k=B.avJ(s.i(0,"launchExpiresAt"))
j=B.avJ(s.i(0,"sessionExpiresAt"))
i=q.gkl().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.i1(g))if(j.i1(g))if(!k.i1(j))if(i!=null){g=J.bQ(i)
if(g.gK(i)===1){f=A.az("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gds(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.W(C.aKl)
u=new B.YO(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bz7.prototype={
$1(d){return this.cxv(d)},
cxv(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.A4(d,m+":launch","launch")
if(s==null||!n.L9(s).a.mN(t.b))throw A.o(new B.Cj())
r=t.b
w=3
return A.c(n.A5("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.uv())
p=A.lI(D.ay.C(q.w))
o=B.dVh(p,r)
if(!C.jD.t(0,o.a))throw A.o(new B.uv())
s.h(0,"state",p)
w=4
return A.c(n.qZ(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bz5.prototype={
$1(d){return this.cxt(d)},
cxt(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.A4(d,o+":launch","launch")
if(s==null){w=1
break}r=p.L9(s)
if(r.a.mN(t.b)){q=r.b
q=(q==null?null:C.jD.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Cj())
w=3
return A.c(p.YD(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:137}
B.bQq.prototype={
$1(d){return d.length!==0},
$S:9}
B.bQr.prototype={
$1(d){return d[0].toUpperCase()+D.c.bV(d,1)},
$S:36};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pg,B.Cj,B.uv,B.YQ,B.Ck,B.aay,B.DU,B.KZ,B.YR,B.aOT,B.bz0,B.bz1,B.aax,B.YP,B.YO,B.adB,B.aL5,B.aEi])
w(A.bs,[B.bzf,B.bzg,B.bzh,B.bz3,B.bz4])
w(A.bt,[B.bza,B.bzd,B.bzb,B.bz6,B.bzc,B.bz8,B.bz7,B.bz5,B.bQq,B.bQr])})()
A.aY(b.typeUniverse,JSON.parse('{"pg":{"bo":[]},"Cj":{"bo":[]},"uv":{"bo":[]},"YQ":{"bo":[]},"Ck":{"bo":[]},"aay":{"bo":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.F
return{M:w("bW<n>"),b:w("YO"),X:w("YP"),f:w("v<A>"),U:w("v<i0>"),P:w("a1<n,@>"),q:w("qC"),O:w("aOT"),L:w("DU"),N:w("n"),z:w("@"),C:w("YR?"),h:w("a1<n,@>?"),p:w("aL5?"),g:w("KZ?"),t:w("DU?"),H:w("~")}})();(function constants(){C.aJq=new A.c9("Invalid product identifier",null,null)
C.aJB=new A.c9("Invalid game access state",null,null)
C.aJR=new A.c9("Product identifier out of range",null,null)
C.aJV=new A.c9("Untrusted game handoff",null,null)
C.aJZ=new A.c9("Invalid currency",null,null)
C.aK9=new A.c9("Game launch state mismatch",null,null)
C.PX=new A.c9("Invalid timestamp",null,null)
C.aKf=new A.c9("Game purchase receipt mismatch",null,null)
C.aKl=new A.c9("Game launch handoff mismatch",null,null)
C.PY=new A.c9("Invalid game operation identifier",null,null)
C.aKp=new A.c9("Invalid product game access descriptor",null,null)
C.Q1=new A.c9("Invalid game key",null,null)
C.aKw=new A.c9("Invalid duration",null,null)
C.bzM=new A.fA([400,409,422],A.F("fA<y>"))
C.bjV={ENDED:0,EXPIRED:1,DENIED:2}
C.jD=new A.bW(C.bjV,3,x.M)
C.bjZ={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bAp=new A.bW(C.bjZ,5,x.M)
C.bj0={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bB8=new A.bW(C.bj0,11,x.M)
C.bkx={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bBd=new A.bW(C.bkx,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f0P","elg",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["844JTSdQpJZI3v1vGpCgiLKH4Cc="]=a.current})($__dart_deferred_initializers__);