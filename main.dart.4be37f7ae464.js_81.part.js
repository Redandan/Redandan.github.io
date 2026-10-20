((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
e5S(d,e,f,g,h,i){var w,v=B.vB(i),u=e.n4(),t=A.iv(d,g)
v=new B.YV(e,u,t,v,f,g,A.W8(),A.ehy())
w=d.c
if(!(w instanceof A.fE)||w.b!==e)A.W(D.x)
v.y=B.e5T(d,u,i)
return v},
e5T(d,e,f){var w=e.e
return"game_access_v2_"+D.d1.cq(D.bj.cq(D.H.av(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bzm(d,e,f,g){var w=null
return B.evQ(d,e,f,g)},
evQ(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bzm=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fE)||k.b!==e)throw A.o(D.x)
o=e.n4()
r=B.vB(g)
q=B.e5T(d,o,r)
p=new B.bzn(f,e,o)
p.$0()
t=4
w=7
return A.c(A.FB(q,new B.bzp(p,l,q,r,e,d,f),x.C),$async$bzm)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.vR)throw A.o(new B.pi())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bzm,v)},
pi:function pi(){},
Ck:function Ck(){},
uv:function uv(){},
YU:function YU(){},
Cl:function Cl(){},
aay:function aay(){},
DW:function DW(d,e,f){this.a=d
this.b=e
this.c=f},
KY:function KY(d,e){this.a=d
this.b=e},
YV:function YV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bzn:function bzn(d,e,f){this.a=d
this.b=e
this.c=f},
bzo:function bzo(d,e,f){this.a=d
this.b=e
this.c=f},
bzp:function bzp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bzb:function bzb(d){this.a=d},
bzc:function bzc(d,e,f){this.a=d
this.b=e
this.c=f},
bzi:function bzi(d){this.a=d},
bzl:function bzl(d){this.a=d},
bzj:function bzj(d,e){this.a=d
this.b=e},
bze:function bze(d,e){this.a=d
this.b=e},
bzk:function bzk(d){this.a=d},
bzg:function bzg(d,e,f){this.a=d
this.b=e
this.c=f},
bzf:function bzf(d,e){this.a=d
this.b=e},
bzd:function bzd(d,e){this.a=d
this.b=e},
e_s(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.Q_)
return d.toLowerCase()},
vB(d){var w,v
if(A.ey(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aJA)
v=A.aW7(d,null)
if(v.bk(0,A.o4(9007199254740991))>0)throw A.o(C.aK0)
return v.da(0)},
dNp(d){var w
if(typeof d!="string")throw A.o(D.PX)
w=A.j9(d)
return w.jD(w.b)},
dHZ(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.Q3)
return d},
avM(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.PZ)
v=A.iP(d)
if(v==null)throw A.o(C.PZ)
return B.dOq(v)},
e5P(d,e,f,g,h){var w=B.e_s(g),v=B.vB(h),u=B.dHZ(f),t=B.dNp(d)
if(e<=0)A.W(C.aKG)
return new B.bz8(w,u,t,v,e)},
e5Q(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aK8)
w=A.b8(d.i(0,"operationId"))
v=B.vB(d.i(0,"productId"))
u=A.b8(d.i(0,"gameKey"))
return B.e5P(A.b8(d.i(0,"depositAmount")),B.vB(d.i(0,"entitlementDurationDays")),u,w,v)},
dVF(d,e){var w=A.b8(d.i(0,"status"))
B.avM(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.vB(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dNp(d.i(0,"depositAmount"))!==e.c||!C.bBr.t(0,w))A.W(C.aKp)
return new B.bz9(w)},
evN(d){var w=A.b8(d.i(0,"clientSessionId")),v=B.vB(d.i(0,"productId")),u=A.b8(d.i(0,"gameKey"))
w=B.e_s(w)
v=B.vB(v)
return new B.aax(w,B.dHZ(u),v)},
dVE(d,e){var w,v="launchExpiresAt",u=A.b8(d.i(0,"status")),t=A.fg(d.i(0,"launchConsumed")),s=B.avM(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.avM(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.avM(d.i(0,"endedAt"))
w=A.b3(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bAD.t(0,u)||d.ar("launchUrl"))A.W(C.aKj)
return new B.YT(u,t,s,w)},
aOY:function aOY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bz8:function bz8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bz9:function bz9(d){this.a=d},
aax:function aax(d,e,f){this.a=d
this.b=e
this.c=f},
YT:function YT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
YS:function YS(d,e,f){this.a=d
this.b=e
this.c=f},
adC:function adC(d){this.a=d},
eAy(d,e){var w=d==null,v=w?null:D.c.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.elE()
if(w.b.test(v))if(d.c===D.Qb)if(d.d===D.Qd)if(d.f!==D.Qc){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.aL9(v,d.e,d.f.a,d.r,d.w)},
aL9:function aL9(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bQz:function bQz(){},
bQA:function bQA(){},
aEm:function aEm(d){this.a=d},
eiG(d){var w,v,u=d==null?null:D.c.F(d)
if(u==null||u.length===0)return null
w=A.kP(u)
v=!0
if(w!=null)if(w.geW().toLowerCase()==="https")if(w.gno().length===0)v=w.ga5t()&&w.gyL()!==443||!D.abD.t(0,w.ghT().toLowerCase())||w.gwh().length===0
if(v)return null
return w.cwa("telegram.me")},
dOq(d){return d.c?d:A.e4_(A.bG(d),A.bL(d),A.cs(d),A.iq(d),A.nP(d),A.Rm(d),A.aKW(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[780]
B.pi.prototype={$ibo:1}
B.Ck.prototype={$ibo:1}
B.uv.prototype={$ibo:1}
B.YU.prototype={$ibo:1}
B.Cl.prototype={$ibo:1}
B.aay.prototype={$ibo:1}
B.DW.prototype={}
B.KY.prototype={}
B.YV.prototype={
A4(){return A.j4(new B.bzb(this))},
bw8(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Ck())},
A6(d,e){return this.duP(d,e)},
duP(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$A6=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.A4()
s=x.N
w=3
return A.c(t.c.W("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.Z(["Cache-Control","no-store"],s,s),A.r(s,s),null).eY(D.fv),$async$A6)
case 3:r=g
t.A4()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$A6,v)},
cag(d){var w,v,u
try{w=A.lI(D.ay.C(d.w)).i(0,"code")
v=C.bBm.t(0,w)?A.b8(w):null
return v}catch(u){return null}},
qM(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$qM=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A6("GET",""),$async$qM)
case 3:i=e
h=i.b
if(h!==200){s=t.cag(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.lI(D.ay.C(i.w))
s=B.dNp(h.i(0,"requiredBalance"))
r=B.dNp(h.i(0,"currentBalance"))
q=A.fg(h.i(0,"eligible"))
p=A.fg(h.i(0,"hasActiveEntitlement"))
o=A.fg(h.i(0,"purchaseAvailable"))
n=A.fg(h.i(0,"launchAvailable"))
m=A.b8(h.i(0,"currency"))
l=A.b3(h.i(0,"denyReason"))
A.b3(h.i(0,"purchaseUnavailableReasonCode"))
A.b3(h.i(0,"launchUnavailableReasonCode"))
k=B.vB(h.i(0,"entitlementDurationDays"))
j=!0
if(B.vB(h.i(0,"productId"))===t.d)if(B.dHZ(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.W(C.aJL)
u=new B.aOY(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$qM,v)},
vc(d,e){return this.djV(d,e,e)},
djV(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vc=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.A4()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.FB(q,new B.bzc(r,d,e),e),$async$vc)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.vR)throw A.o(new B.pi())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$vc,v)},
A5(d,e,f){var w,v,u,t,s
try{w=A.b3(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.c7)
v=x.P.a(D.H.bB(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.c7)
if(f==="purchase")this.xb(v)
else this.Lj(v)
return v}catch(s){throw A.o(new B.pi())}},
xb(d){var w,v,u=x.P,t=B.e5Q(u.a(d.i(0,"intent")))
this.bw8(t.d,t.b)
w=A.fg(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.c7)
return new B.DW(t,v==null?null:B.dVF(u.a(v),t),w)},
Lj(d){var w,v=x.P,u=B.evN(v.a(d.i(0,"intent")))
this.bw8(u.c,u.b)
w=d.i(0,"state")
return new B.KY(u,w==null?null:B.dVE(v.a(w),u))},
r0(d,e,f){return this.dJg(d,e,f)},
dJg(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$r0=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.A4()
u=3
r=D.H.av(f,null)
w=6
return A.c(d.h1("String",e,r),$async$r0)
case 6:if(!h)throw A.o(new B.pi())
w=7
return A.c(d.hu(),$async$r0)
case 7:q=A.b3(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.pi())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.pi())
w=5
break
case 2:w=1
break
case 5:s.A4()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$r0,v)},
YR(d,e){return this.duk(d,e)},
duk(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$YR=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.A4()
u=3
w=6
return A.c(d.N(0,e),$async$YR)
case 6:if(!g)throw A.o(new B.pi())
w=7
return A.c(d.hu(),$async$YR)
case 7:if(d.a.ar(e))throw A.o(new B.pi())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.pi())
w=5
break
case 2:w=1
break
case 5:s.A4()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$YR,v)},
asL(d){return this.dkf(d)},
dkf(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$asL=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A6("GET","/operations/"+d.a),$async$asL)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.uv())
s=A.lI(D.ay.C(r.w))
B.dVF(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$asL,v)},
e1J(){return this.vc(new B.bzi(this),x.t)},
e34(){return this.vc(new B.bzl(this),x.t)},
bZ1(d){return this.vc(new B.bzj(this,d),x.L)},
dJA(d){return this.vc(new B.bze(this,d),x.H)},
asK(d){return this.dke(d)},
dke(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$asK=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.A6("GET","/sessions/"+d.a),$async$asK)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.lI(D.ay.C(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.uv())
s=A.lI(D.ay.C(r.w))
B.dVE(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$asK,v)},
cvN(){return this.vc(new B.bzk(this),x.g)},
dY_(d,e){return this.vc(new B.bzg(this,d,e),x.b)},
dTo(d){return this.vc(new B.bzf(this,d),x.X)},
dJz(d){return this.vc(new B.bzd(this,d),x.H)}}
B.aOY.prototype={}
B.bz8.prototype={
v(){var w=this
return A.Z(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
mP(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bz9.prototype={}
B.aax.prototype={
v(){return A.Z(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
mP(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.YT.prototype={}
B.YS.prototype={}
B.adC.prototype={
pA(d){return this.cA_(d)},
cA_(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pA=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pA(d),$async$pA)
case 7:q=f
p=B.eAy(q,d)
if(p==null)throw A.o(C.aKz)
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
return A.k($async$pA,v)}}
B.aL9.prototype={
gcrv(){var w=D.c.nu(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.dY(new A.ap(w,new B.bQz(),v.k("ap<1>")),new B.bQA(),v.k("dY<1,n>")).b2(0," ")}}
B.aEm.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aEm&&e.a===this.a
else w=!0
return w},
gj(d){return D.c.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
v(){var w=A.r(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<DW?>(fC)","B<YV?>()","B<DW>(fC)","B<KY?>(fC)","B<YS>(fC)","B<YT>(fC)"])
B.bzn.prototype={
$0(){return A.j4(new B.bzo(this.a,this.b,this.c))},
$S:0}
B.bzo.prototype={
$0(){return this.a.$0()&&this.b.du(this.c)},
$S:1}
B.bzp.prototype={
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
if(n.length>32768)throw A.o(D.c7)
m=f.a(D.H.bB(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.c7)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.e5Q(l):null
if(J.p(o,"launch")){a1=l
a2=A.b8(a1.i(0,"clientSessionId"))
a3=B.vB(a1.i(0,"productId"))
a1=A.b8(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.W(C.Q_)
a3=B.vB(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.W(C.Q3)
a5=new B.aax(a2.toLowerCase(),a1,a3)}else a5=null
j=a5
a1=k
a6=a1==null?null:a1.b
i=a6==null?j.b:a6
a1=k
a1=a1==null?null:a1.d
if((a1==null?j.c:a1)===g)a1=q!=null&&q!==i
else a1=!0
if(a1)throw A.o(D.c7)
q=i}t=2
w=6
break
case 4:t=3
a9=s.pop()
if(A.u(a9) instanceof A.a2i)throw a9
else throw A.o(new B.pi())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.e5S(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bzb.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.du(w.b)},
$S:1}
B.bzc.prototype={
$0(){return this.cxY(this.c)},
cxY(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.A4()
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
throw A.o(new B.pi())
w=6
break
case 3:w=2
break
case 6:o.A4()
u=r.b.$1(q)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S(){return this.c.k("B<0>()")}}
B.bzi.prototype={
$1(d){return this.cy2(d)},
cy2(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.A5(d,q+":purchase","purchase")
u=s==null?null:r.xb(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bzl.prototype={
$1(d){return this.cy5(d)},
cy5(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.A5(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.xb(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.asL(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.r0(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xb(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bzj.prototype={
$1(d){return this.cy3(d)},
cy3(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bw8(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.A5(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xb(r)
if(!p.a.mP(j))throw A.o(new B.Ck())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.asL(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.r0(d,s+":purchase",r),$async$$1)
case 8:u=k.xb(r)
w=1
break
case 7:case 4:w=9
return A.c(k.qM(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.j9(n.b).bk(0,A.j9(m))<0}if(m)throw A.o(new B.YU())
if(q)r=A.Z(["version",1,"scope",s,"kind","purchase","intent",j.v(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.r0(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.A6("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bA_.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.r0(d,s+":purchase",r),$async$$1)
case 16:u=k.xb(r)
w=1
break
case 15:throw A.o(new B.uv())
case 13:o=A.lI(D.ay.C(l.w))
B.dVF(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.r0(d,s+":purchase",r),$async$$1)
case 17:u=k.xb(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bze.prototype={
$1(d){return this.cy_(d)},
cy_(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.A5(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xb(s)
if(!(r.b!=null||r.c)||!r.a.mP(t.b))throw A.o(new B.Ck())
w=3
return A.c(q.YR(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:134}
B.bzk.prototype={
$1(d){return this.cy4(d)},
cy4(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.A5(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.asK(r.Lj(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.r0(d,q+":launch",s),$async$$1)
case 4:u=r.Lj(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bzg.prototype={
$1(d){return this.cy1(d)},
cy1(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bw8(f.c,e)
s=g.y
s===$&&A.e()
r=g.A5(a0,s+":purchase","purchase")
if(r!=null){q=g.xb(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.uv())
p=g.A5(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.Lj(p).a.mP(f))throw A.o(new B.Ck())
d=p
w=5
return A.c(g.asK(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.r0(a0,s+":launch",p),$async$$1)
case 6:o=g.Lj(p).b
if(!t.c)throw A.o(new B.aay())
if((o==null?null:C.jF.t(0,o.a))===!0)throw A.o(new B.Cl())
case 4:w=7
return A.c(g.qM(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Cl())
if(q)p=A.Z(["version",1,"scope",s,"kind","launch","intent",f.v()],x.N,x.z)
w=8
return A.c(g.r0(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.A6("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.cag(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.uv())}s=A.lI(D.ay.C(m.w))
g=g.w.$0().a2()
q=B.eiG(A.b3(s.i(0,"launchUrl")))
if(q==null)q=A.W(C.aK4)
k=B.avM(s.i(0,"launchExpiresAt"))
j=B.avM(s.i(0,"sessionExpiresAt"))
i=q.gkm().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.i1(g))if(j.i1(g))if(!k.i1(j))if(i!=null){g=J.bQ(i)
if(g.gK(i)===1){f=A.az("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gdt(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.W(C.aKv)
u=new B.YS(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bzf.prototype={
$1(d){return this.cy0(d)},
cy0(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.A5(d,m+":launch","launch")
if(s==null||!n.Lj(s).a.mP(t.b))throw A.o(new B.Ck())
r=t.b
w=3
return A.c(n.A6("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.uv())
p=A.lI(D.ay.C(q.w))
o=B.dVE(p,r)
if(!C.jF.t(0,o.a))throw A.o(new B.uv())
s.h(0,"state",p)
w=4
return A.c(n.r0(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bzd.prototype={
$1(d){return this.cxZ(d)},
cxZ(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.A5(d,o+":launch","launch")
if(s==null){w=1
break}r=p.Lj(s)
if(r.a.mP(t.b)){q=r.b
q=(q==null?null:C.jF.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Ck())
w=3
return A.c(p.YR(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:134}
B.bQz.prototype={
$1(d){return d.length!==0},
$S:9}
B.bQA.prototype={
$1(d){return d[0].toUpperCase()+D.c.bV(d,1)},
$S:33};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pi,B.Ck,B.uv,B.YU,B.Cl,B.aay,B.DW,B.KY,B.YV,B.aOY,B.bz8,B.bz9,B.aax,B.YT,B.YS,B.adC,B.aL9,B.aEm])
w(A.bs,[B.bzn,B.bzo,B.bzp,B.bzb,B.bzc])
w(A.bt,[B.bzi,B.bzl,B.bzj,B.bze,B.bzk,B.bzg,B.bzf,B.bzd,B.bQz,B.bQA])})()
A.aY(b.typeUniverse,JSON.parse('{"pi":{"bo":[]},"Ck":{"bo":[]},"uv":{"bo":[]},"YU":{"bo":[]},"Cl":{"bo":[]},"aay":{"bo":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.F
return{M:w("bW<n>"),b:w("YS"),X:w("YT"),f:w("v<A>"),U:w("v<i1>"),P:w("a1<n,@>"),q:w("qC"),O:w("aOY"),L:w("DW"),N:w("n"),z:w("@"),C:w("YV?"),h:w("a1<n,@>?"),p:w("aL9?"),g:w("KY?"),t:w("DW?"),H:w("~")}})();(function constants(){C.aJA=new A.c9("Invalid product identifier",null,null)
C.aJL=new A.c9("Invalid game access state",null,null)
C.aK0=new A.c9("Product identifier out of range",null,null)
C.aK4=new A.c9("Untrusted game handoff",null,null)
C.aK8=new A.c9("Invalid currency",null,null)
C.aKj=new A.c9("Game launch state mismatch",null,null)
C.PZ=new A.c9("Invalid timestamp",null,null)
C.aKp=new A.c9("Game purchase receipt mismatch",null,null)
C.aKv=new A.c9("Game launch handoff mismatch",null,null)
C.Q_=new A.c9("Invalid game operation identifier",null,null)
C.aKz=new A.c9("Invalid product game access descriptor",null,null)
C.Q3=new A.c9("Invalid game key",null,null)
C.aKG=new A.c9("Invalid duration",null,null)
C.bA_=new A.fA([400,409,422],A.F("fA<y>"))
C.bk4={ENDED:0,EXPIRED:1,DENIED:2}
C.jF=new A.bW(C.bk4,3,x.M)
C.bk8={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bAD=new A.bW(C.bk8,5,x.M)
C.bja={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bBm=new A.bW(C.bja,11,x.M)
C.bkH={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bBr=new A.bW(C.bkH,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f1e","elE",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["HNWMDCy9VghhqXaNf3nCl8K36xk="]=a.current})($__dart_deferred_initializers__);