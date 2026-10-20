((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
e5H(d,e,f,g,h,i){var w,v=B.vB(i),u=e.n3(),t=A.iv(d,g)
v=new B.YS(e,u,t,v,f,g,A.W7(),A.ehm())
w=d.c
if(!(w instanceof A.fE)||w.b!==e)A.W(D.x)
v.y=B.e5I(d,u,i)
return v},
e5I(d,e,f){var w=e.e
return"game_access_v2_"+D.d0.cp(D.bj.cp(D.H.av(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bzj(d,e,f,g){var w=null
return B.evC(d,e,f,g)},
evC(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bzj=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fE)||k.b!==e)throw A.o(D.x)
o=e.n3()
r=B.vB(g)
q=B.e5I(d,o,r)
p=new B.bzk(f,e,o)
p.$0()
t=4
w=7
return A.c(A.FB(q,new B.bzm(p,l,q,r,e,d,f),x.C),$async$bzj)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.vR)throw A.o(new B.ph())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bzj,v)},
ph:function ph(){},
Cl:function Cl(){},
uv:function uv(){},
YR:function YR(){},
Cm:function Cm(){},
aax:function aax(){},
DW:function DW(d,e,f){this.a=d
this.b=e
this.c=f},
KY:function KY(d,e){this.a=d
this.b=e},
YS:function YS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bzk:function bzk(d,e,f){this.a=d
this.b=e
this.c=f},
bzl:function bzl(d,e,f){this.a=d
this.b=e
this.c=f},
bzm:function bzm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bz8:function bz8(d){this.a=d},
bz9:function bz9(d,e,f){this.a=d
this.b=e
this.c=f},
bzf:function bzf(d){this.a=d},
bzi:function bzi(d){this.a=d},
bzg:function bzg(d,e){this.a=d
this.b=e},
bzb:function bzb(d,e){this.a=d
this.b=e},
bzh:function bzh(d){this.a=d},
bzd:function bzd(d,e,f){this.a=d
this.b=e
this.c=f},
bzc:function bzc(d,e){this.a=d
this.b=e},
bza:function bza(d,e){this.a=d
this.b=e},
e_h(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.Q1)
return d.toLowerCase()},
vB(d){var w,v
if(A.ey(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aJx)
v=A.aW5(d,null)
if(v.bk(0,A.o4(9007199254740991))>0)throw A.o(C.aJY)
return v.da(0)},
dNd(d){var w
if(typeof d!="string")throw A.o(D.PZ)
w=A.j9(d)
return w.jC(w.b)},
dHO(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.Q5)
return d},
avK(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.Q0)
v=A.iP(d)
if(v==null)throw A.o(C.Q0)
return B.dOe(v)},
e5E(d,e,f,g,h){var w=B.e_h(g),v=B.vB(h),u=B.dHO(f),t=B.dNd(d)
if(e<=0)A.W(C.aKD)
return new B.bz5(w,u,t,v,e)},
e5F(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aK5)
w=A.b8(d.i(0,"operationId"))
v=B.vB(d.i(0,"productId"))
u=A.b8(d.i(0,"gameKey"))
return B.e5E(A.b8(d.i(0,"depositAmount")),B.vB(d.i(0,"entitlementDurationDays")),u,w,v)},
dVs(d,e){var w=A.b8(d.i(0,"status"))
B.avK(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.vB(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dNd(d.i(0,"depositAmount"))!==e.c||!C.bBo.t(0,w))A.W(C.aKm)
return new B.bz6(w)},
evz(d){var w=A.b8(d.i(0,"clientSessionId")),v=B.vB(d.i(0,"productId")),u=A.b8(d.i(0,"gameKey"))
w=B.e_h(w)
v=B.vB(v)
return new B.aaw(w,B.dHO(u),v)},
dVr(d,e){var w,v="launchExpiresAt",u=A.b8(d.i(0,"status")),t=A.fe(d.i(0,"launchConsumed")),s=B.avK(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.avK(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.avK(d.i(0,"endedAt"))
w=A.b3(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bAA.t(0,u)||d.ar("launchUrl"))A.W(C.aKg)
return new B.YQ(u,t,s,w)},
aOW:function aOW(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bz5:function bz5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bz6:function bz6(d){this.a=d},
aaw:function aaw(d,e,f){this.a=d
this.b=e
this.c=f},
YQ:function YQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
YP:function YP(d,e,f){this.a=d
this.b=e
this.c=f},
adA:function adA(d){this.a=d},
eAj(d,e){var w=d==null,v=w?null:D.c.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.elq()
if(w.b.test(v))if(d.c===D.Qd)if(d.d===D.Qf)if(d.f!==D.Qe){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.aL7(v,d.e,d.f.a,d.r,d.w)},
aL7:function aL7(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bQv:function bQv(){},
bQw:function bQw(){},
aEk:function aEk(d){this.a=d},
eiu(d){var w,v,u=d==null?null:D.c.F(d)
if(u==null||u.length===0)return null
w=A.kO(u)
v=!0
if(w!=null)if(w.geW().toLowerCase()==="https")if(w.gnn().length===0)v=w.ga5j()&&w.gyK()!==443||!D.abA.t(0,w.ghT().toLowerCase())||w.gwf().length===0
if(v)return null
return w.cvN("telegram.me")},
dOe(d){return d.c?d:A.e3P(A.bG(d),A.bL(d),A.cs(d),A.iq(d),A.nP(d),A.Rm(d),A.aKU(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[782]
B.ph.prototype={$ibo:1}
B.Cl.prototype={$ibo:1}
B.uv.prototype={$ibo:1}
B.YR.prototype={$ibo:1}
B.Cm.prototype={$ibo:1}
B.aax.prototype={$ibo:1}
B.DW.prototype={}
B.KY.prototype={}
B.YS.prototype={
A3(){return A.j4(new B.bz8(this))},
bvM(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Cl())},
A5(d,e){return this.dus(d,e)},
dus(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$A5=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.A3()
s=x.N
w=3
return A.c(t.c.W("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.Z(["Cache-Control","no-store"],s,s),A.r(s,s),null).eY(D.fu),$async$A5)
case 3:r=g
t.A3()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$A5,v)},
c9T(d){var w,v,u
try{w=A.lJ(D.ay.C(d.w)).i(0,"code")
v=C.bBj.t(0,w)?A.b8(w):null
return v}catch(u){return null}},
qL(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$qL=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A5("GET",""),$async$qL)
case 3:i=e
h=i.b
if(h!==200){s=t.c9T(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.lJ(D.ay.C(i.w))
s=B.dNd(h.i(0,"requiredBalance"))
r=B.dNd(h.i(0,"currentBalance"))
q=A.fe(h.i(0,"eligible"))
p=A.fe(h.i(0,"hasActiveEntitlement"))
o=A.fe(h.i(0,"purchaseAvailable"))
n=A.fe(h.i(0,"launchAvailable"))
m=A.b8(h.i(0,"currency"))
l=A.b3(h.i(0,"denyReason"))
A.b3(h.i(0,"purchaseUnavailableReasonCode"))
A.b3(h.i(0,"launchUnavailableReasonCode"))
k=B.vB(h.i(0,"entitlementDurationDays"))
j=!0
if(B.vB(h.i(0,"productId"))===t.d)if(B.dHO(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.W(C.aJI)
u=new B.aOW(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$qL,v)},
va(d,e){return this.djz(d,e,e)},
djz(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$va=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.A3()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.FB(q,new B.bz9(r,d,e),e),$async$va)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.vR)throw A.o(new B.ph())
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
else this.La(v)
return v}catch(s){throw A.o(new B.ph())}},
x9(d){var w,v,u=x.P,t=B.e5F(u.a(d.i(0,"intent")))
this.bvM(t.d,t.b)
w=A.fe(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.c8)
return new B.DW(t,v==null?null:B.dVs(u.a(v),t),w)},
La(d){var w,v=x.P,u=B.evz(v.a(d.i(0,"intent")))
this.bvM(u.c,u.b)
w=d.i(0,"state")
return new B.KY(u,w==null?null:B.dVr(v.a(w),u))},
r_(d,e,f){return this.dIS(d,e,f)},
dIS(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$r_=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.A3()
u=3
r=D.H.av(f,null)
w=6
return A.c(d.h1("String",e,r),$async$r_)
case 6:if(!h)throw A.o(new B.ph())
w=7
return A.c(d.hu(),$async$r_)
case 7:q=A.b3(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.ph())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.ph())
w=5
break
case 2:w=1
break
case 5:s.A3()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$r_,v)},
YE(d,e){return this.dtY(d,e)},
dtY(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$YE=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.A3()
u=3
w=6
return A.c(d.N(0,e),$async$YE)
case 6:if(!g)throw A.o(new B.ph())
w=7
return A.c(d.hu(),$async$YE)
case 7:if(d.a.ar(e))throw A.o(new B.ph())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.ph())
w=5
break
case 2:w=1
break
case 5:s.A3()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$YE,v)},
asv(d){return this.djU(d)},
djU(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$asv=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A5("GET","/operations/"+d.a),$async$asv)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.uv())
s=A.lJ(D.ay.C(r.w))
B.dVs(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$asv,v)},
e1k(){return this.va(new B.bzf(this),x.t)},
e2G(){return this.va(new B.bzi(this),x.t)},
bYE(d){return this.va(new B.bzg(this,d),x.L)},
dJb(d){return this.va(new B.bzb(this,d),x.H)},
asu(d){return this.djT(d)},
djT(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$asu=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A5("GET","/sessions/"+d.a),$async$asu)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.lJ(D.ay.C(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.uv())
s=A.lJ(D.ay.C(r.w))
B.dVr(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$asu,v)},
cvp(){return this.va(new B.bzh(this),x.g)},
dXB(d,e){return this.va(new B.bzd(this,d,e),x.b)},
dT_(d){return this.va(new B.bzc(this,d),x.X)},
dJa(d){return this.va(new B.bza(this,d),x.H)}}
B.aOW.prototype={}
B.bz5.prototype={
v(){var w=this
return A.Z(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
mO(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bz6.prototype={}
B.aaw.prototype={
v(){return A.Z(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
mO(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.YQ.prototype={}
B.YP.prototype={}
B.adA.prototype={
pz(d){return this.czC(d)},
czC(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pz=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pz(d),$async$pz)
case 7:q=f
p=B.eAj(q,d)
if(p==null)throw A.o(C.aKw)
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
return A.k($async$pz,v)}}
B.aL7.prototype={
gcr7(){var w=D.c.nt(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.dY(new A.ap(w,new B.bQv(),v.k("ap<1>")),new B.bQw(),v.k("dY<1,n>")).b2(0," ")}}
B.aEk.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aEk&&e.a===this.a
else w=!0
return w},
gj(d){return D.c.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
v(){var w=A.r(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<DW?>(fC)","B<YS?>()","B<DW>(fC)","B<KY?>(fC)","B<YP>(fC)","B<YQ>(fC)"])
B.bzk.prototype={
$0(){return A.j4(new B.bzl(this.a,this.b,this.c))},
$S:0}
B.bzl.prototype={
$0(){return this.a.$0()&&this.b.du(this.c)},
$S:1}
B.bzm.prototype={
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
k=J.p(o,"purchase")?B.e5F(l):null
if(J.p(o,"launch")){a1=l
a2=A.b8(a1.i(0,"clientSessionId"))
a3=B.vB(a1.i(0,"productId"))
a1=A.b8(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.W(C.Q1)
a3=B.vB(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.W(C.Q5)
a5=new B.aaw(a2.toLowerCase(),a1,a3)}else a5=null
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
if(A.u(a9) instanceof A.a2f)throw a9
else throw A.o(new B.ph())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.e5H(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bz8.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.du(w.b)},
$S:1}
B.bz9.prototype={
$0(){return this.cxA(this.c)},
cxA(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
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
throw A.o(new B.ph())
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
B.bzf.prototype={
$1(d){return this.cxF(d)},
cxF(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
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
B.bzi.prototype={
$1(d){return this.cxI(d)},
cxI(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
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
return A.c(p.asv(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.r_(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.x9(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bzg.prototype={
$1(d){return this.cxG(d)},
cxG(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bvM(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.A4(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.x9(r)
if(!p.a.mO(j))throw A.o(new B.Cl())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.asv(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.r_(d,s+":purchase",r),$async$$1)
case 8:u=k.x9(r)
w=1
break
case 7:case 4:w=9
return A.c(k.qL(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.j9(n.b).bk(0,A.j9(m))<0}if(m)throw A.o(new B.YR())
if(q)r=A.Z(["version",1,"scope",s,"kind","purchase","intent",j.v(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.r_(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.A5("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bzX.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.r_(d,s+":purchase",r),$async$$1)
case 16:u=k.x9(r)
w=1
break
case 15:throw A.o(new B.uv())
case 13:o=A.lJ(D.ay.C(l.w))
B.dVs(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.r_(d,s+":purchase",r),$async$$1)
case 17:u=k.x9(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bzb.prototype={
$1(d){return this.cxC(d)},
cxC(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.A4(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.x9(s)
if(!(r.b!=null||r.c)||!r.a.mO(t.b))throw A.o(new B.Cl())
w=3
return A.c(q.YE(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:147}
B.bzh.prototype={
$1(d){return this.cxH(d)},
cxH(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.A4(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.asu(r.La(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.r_(d,q+":launch",s),$async$$1)
case 4:u=r.La(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bzd.prototype={
$1(d){return this.cxE(d)},
cxE(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bvM(f.c,e)
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
case 3:if(!g.La(p).a.mO(f))throw A.o(new B.Cl())
d=p
w=5
return A.c(g.asu(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.r_(a0,s+":launch",p),$async$$1)
case 6:o=g.La(p).b
if(!t.c)throw A.o(new B.aax())
if((o==null?null:C.jE.t(0,o.a))===!0)throw A.o(new B.Cm())
case 4:w=7
return A.c(g.qL(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Cm())
if(q)p=A.Z(["version",1,"scope",s,"kind","launch","intent",f.v()],x.N,x.z)
w=8
return A.c(g.r_(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.A5("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.c9T(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.uv())}s=A.lJ(D.ay.C(m.w))
g=g.w.$0().a2()
q=B.eiu(A.b3(s.i(0,"launchUrl")))
if(q==null)q=A.W(C.aK1)
k=B.avK(s.i(0,"launchExpiresAt"))
j=B.avK(s.i(0,"sessionExpiresAt"))
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
if(g)A.W(C.aKs)
u=new B.YP(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bzc.prototype={
$1(d){return this.cxD(d)},
cxD(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.A4(d,m+":launch","launch")
if(s==null||!n.La(s).a.mO(t.b))throw A.o(new B.Cl())
r=t.b
w=3
return A.c(n.A5("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.uv())
p=A.lJ(D.ay.C(q.w))
o=B.dVr(p,r)
if(!C.jE.t(0,o.a))throw A.o(new B.uv())
s.h(0,"state",p)
w=4
return A.c(n.r_(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bza.prototype={
$1(d){return this.cxB(d)},
cxB(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.A4(d,o+":launch","launch")
if(s==null){w=1
break}r=p.La(s)
if(r.a.mO(t.b)){q=r.b
q=(q==null?null:C.jE.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Cl())
w=3
return A.c(p.YE(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:147}
B.bQv.prototype={
$1(d){return d.length!==0},
$S:9}
B.bQw.prototype={
$1(d){return d[0].toUpperCase()+D.c.bV(d,1)},
$S:35};(function inheritance(){var w=a.inheritMany
w(A.A,[B.ph,B.Cl,B.uv,B.YR,B.Cm,B.aax,B.DW,B.KY,B.YS,B.aOW,B.bz5,B.bz6,B.aaw,B.YQ,B.YP,B.adA,B.aL7,B.aEk])
w(A.bs,[B.bzk,B.bzl,B.bzm,B.bz8,B.bz9])
w(A.bt,[B.bzf,B.bzi,B.bzg,B.bzb,B.bzh,B.bzd,B.bzc,B.bza,B.bQv,B.bQw])})()
A.aY(b.typeUniverse,JSON.parse('{"ph":{"bo":[]},"Cl":{"bo":[]},"uv":{"bo":[]},"YR":{"bo":[]},"Cm":{"bo":[]},"aax":{"bo":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.F
return{M:w("bW<n>"),b:w("YP"),X:w("YQ"),f:w("v<A>"),U:w("v<i0>"),P:w("a1<n,@>"),q:w("qC"),O:w("aOW"),L:w("DW"),N:w("n"),z:w("@"),C:w("YS?"),h:w("a1<n,@>?"),p:w("aL7?"),g:w("KY?"),t:w("DW?"),H:w("~")}})();(function constants(){C.aJx=new A.c9("Invalid product identifier",null,null)
C.aJI=new A.c9("Invalid game access state",null,null)
C.aJY=new A.c9("Product identifier out of range",null,null)
C.aK1=new A.c9("Untrusted game handoff",null,null)
C.aK5=new A.c9("Invalid currency",null,null)
C.aKg=new A.c9("Game launch state mismatch",null,null)
C.Q0=new A.c9("Invalid timestamp",null,null)
C.aKm=new A.c9("Game purchase receipt mismatch",null,null)
C.aKs=new A.c9("Game launch handoff mismatch",null,null)
C.Q1=new A.c9("Invalid game operation identifier",null,null)
C.aKw=new A.c9("Invalid product game access descriptor",null,null)
C.Q5=new A.c9("Invalid game key",null,null)
C.aKD=new A.c9("Invalid duration",null,null)
C.bzX=new A.fA([400,409,422],A.F("fA<y>"))
C.bk4={ENDED:0,EXPIRED:1,DENIED:2}
C.jE=new A.bW(C.bk4,3,x.M)
C.bk8={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bAA=new A.bW(C.bk8,5,x.M)
C.bja={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bBj=new A.bW(C.bja,11,x.M)
C.bkH={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bBo=new A.bW(C.bkH,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f1_","elq",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["ihCKa9Q8WJeCIkjqIdSNWJlnqMo="]=a.current})($__dart_deferred_initializers__);