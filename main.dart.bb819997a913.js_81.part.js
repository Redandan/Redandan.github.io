((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ebB(d,e,f,g,h,i){var w,v=B.wj(i),u=e.nm(),t=A.iJ(d,g)
v=new B.a_s(e,u,t,v,f,g,A.XC(),A.eny())
w=d.c
if(!(w instanceof A.fM)||w.b!==e)A.V(D.x)
v.y=B.ebC(d,u,i)
return v},
ebC(d,e,f){var w=e.e
return"game_access_v2_"+D.d3.cg(D.bj.cg(D.H.az(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bDg(d,e,f,g){var w=null
return B.eCp(d,e,f,g)},
eCp(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDg=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fM)||k.b!==e)throw A.o(D.x)
o=e.nm()
r=B.wj(g)
q=B.ebC(d,o,r)
p=new B.bDh(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GG(q,new B.bDj(p,l,q,r,e,d,f),x.C),$async$bDg)
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
return A.k($async$bDg,v)},
pQ:function pQ(){},
Dm:function Dm(){},
v8:function v8(){},
a_r:function a_r(){},
Dn:function Dn(){},
acn:function acn(){},
EZ:function EZ(d,e,f){this.a=d
this.b=e
this.c=f},
M6:function M6(d,e){this.a=d
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
bDh:function bDh(d,e,f){this.a=d
this.b=e
this.c=f},
bDi:function bDi(d,e,f){this.a=d
this.b=e
this.c=f},
bDj:function bDj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bD5:function bD5(d){this.a=d},
bD6:function bD6(d,e,f){this.a=d
this.b=e
this.c=f},
bDc:function bDc(d){this.a=d},
bDf:function bDf(d){this.a=d},
bDd:function bDd(d,e){this.a=d
this.b=e},
bD8:function bD8(d,e){this.a=d
this.b=e},
bDe:function bDe(d){this.a=d},
bDa:function bDa(d,e,f){this.a=d
this.b=e
this.c=f},
bD9:function bD9(d,e){this.a=d
this.b=e},
bD7:function bD7(d,e){this.a=d
this.b=e},
e55(d){var w=A.ay(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.QZ)
return d.toLowerCase()},
wj(d){var w,v
if(A.eF(d))d=D.h.l(d)
if(typeof d=="string"){w=A.ay("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNW)
v=A.aZm(d,null)
if(v.bm(0,A.oy(9007199254740991))>0)throw A.o(C.aOm)
return v.dd(0)},
dSL(d){var w
if(typeof d!="string")throw A.o(D.QW)
w=A.jo(d)
return w.jM(w.b)},
dNf(d){var w
if(typeof d=="string"){w=A.ay("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R2)
return d},
ay2(d){var w,v
if(typeof d=="string"){w=A.ay("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.QY)
v=A.j5(d)
if(v==null)throw A.o(C.QY)
return B.dTM(v)},
eby(d,e,f,g,h){var w=B.e55(g),v=B.wj(h),u=B.dNf(f),t=B.dSL(d)
if(e<=0)A.V(C.aP1)
return new B.bD2(w,u,t,v,e)},
ebz(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOu)
w=A.bb(d.i(0,"operationId"))
v=B.wj(d.i(0,"productId"))
u=A.bb(d.i(0,"gameKey"))
return B.eby(A.bb(d.i(0,"depositAmount")),B.wj(d.i(0,"entitlementDurationDays")),u,w,v)},
e0c(d,e){var w=A.bb(d.i(0,"status"))
B.ay2(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wj(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dSL(d.i(0,"depositAmount"))!==e.c||!C.bGl.t(0,w))A.V(C.aOL)
return new B.bD3(w)},
eCm(d){var w=A.bb(d.i(0,"clientSessionId")),v=B.wj(d.i(0,"productId")),u=A.bb(d.i(0,"gameKey"))
w=B.e55(w)
v=B.wj(v)
return new B.acm(w,B.dNf(u),v)},
e0b(d,e){var w,v="launchExpiresAt",u=A.bb(d.i(0,"status")),t=A.fm(d.i(0,"launchConsumed")),s=B.ay2(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ay2(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ay2(d.i(0,"endedAt"))
w=A.b6(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFx.t(0,u)||d.ao("launchUrl"))A.V(C.aOF)
return new B.a_q(u,t,s,w)},
aRS:function aRS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bD2:function bD2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bD3:function bD3(d){this.a=d},
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
eHc(d,e){var w=d==null,v=w?null:D.b.G(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.erS()
if(w.b.test(v))if(d.c===D.Ra)if(d.d===D.Rc)if(d.f!==D.Rb){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.aNP(v,d.e,d.f.a,d.r,d.w)},
aNP:function aNP(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bUB:function bUB(){},
bUC:function bUC(){},
aGR:function aGR(d){this.a=d},
eoN(d){var w,v,u=d==null?null:D.b.G(d)
if(u==null||u.length===0)return null
w=A.l7(u)
v=!0
if(w!=null)if(w.gf0().toLowerCase()==="https")if(w.gnK().length===0)v=w.ga6d()&&w.gzb()!==443||!D.acN.t(0,w.gi0().toLowerCase())||w.gwG().length===0
if(v)return null
return w.cy2("telegram.me")},
dTM(d){return d.c?d:A.e9G(A.bK(d),A.bO(d),A.cv(d),A.iD(d),A.og(d),A.SI(d),A.aNB(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[783]
B.pQ.prototype={$ibk:1}
B.Dm.prototype={$ibk:1}
B.v8.prototype={$ibk:1}
B.a_r.prototype={$ibk:1}
B.Dn.prototype={$ibk:1}
B.acn.prototype={$ibk:1}
B.EZ.prototype={}
B.M6.prototype={}
B.a_s.prototype={
Ax(){return A.jk(new B.bD5(this))},
bx3(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Dm())},
Az(d,e){return this.dxw(d,e)},
dxw(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$Az=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.Ax()
s=x.N
w=3
return A.c(t.c.X("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.a_(["Cache-Control","no-store"],s,s),A.q(s,s),null).f2(D.fz),$async$Az)
case 3:r=g
t.Ax()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$Az,v)},
cbM(d){var w,v,u
try{w=A.m3(D.ay.D(d.w)).i(0,"code")
v=C.bGg.t(0,w)?A.bb(w):null
return v}catch(u){return null}},
r7(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$r7=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET",""),$async$r7)
case 3:i=e
h=i.b
if(h!==200){s=t.cbM(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.m3(D.ay.D(i.w))
s=B.dSL(h.i(0,"requiredBalance"))
r=B.dSL(h.i(0,"currentBalance"))
q=A.fm(h.i(0,"eligible"))
p=A.fm(h.i(0,"hasActiveEntitlement"))
o=A.fm(h.i(0,"purchaseAvailable"))
n=A.fm(h.i(0,"launchAvailable"))
m=A.bb(h.i(0,"currency"))
l=A.b6(h.i(0,"denyReason"))
A.b6(h.i(0,"purchaseUnavailableReasonCode"))
A.b6(h.i(0,"launchUnavailableReasonCode"))
k=B.wj(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wj(h.i(0,"productId"))===t.d)if(B.dNf(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.V(C.aO6)
u=new B.aRS(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$r7,v)},
vA(d,e){return this.dmq(d,e,e)},
dmq(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vA=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.Ax()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GG(q,new B.bD6(r,d,e),e),$async$vA)
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
try{w=A.b6(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.c8)
v=x.P.a(D.H.bH(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.c8)
if(f==="purchase")this.xC(v)
else this.LV(v)
return v}catch(s){throw A.o(new B.pQ())}},
xC(d){var w,v,u=x.P,t=B.ebz(u.a(d.i(0,"intent")))
this.bx3(t.d,t.b)
w=A.fm(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.c8)
return new B.EZ(t,v==null?null:B.e0c(u.a(v),t),w)},
LV(d){var w,v=x.P,u=B.eCm(v.a(d.i(0,"intent")))
this.bx3(u.c,u.b)
w=d.i(0,"state")
return new B.M6(u,w==null?null:B.e0b(v.a(w),u))},
rn(d,e,f){return this.dLZ(d,e,f)},
dLZ(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$rn=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.Ax()
u=3
r=D.H.az(f,null)
w=6
return A.c(d.h8("String",e,r),$async$rn)
case 6:if(!h)throw A.o(new B.pQ())
w=7
return A.c(d.hC(),$async$rn)
case 7:q=A.b6(d.a.i(0,e))
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
Zz(d,e){return this.dx1(d,e)},
dx1(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$Zz=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.Ax()
u=3
w=6
return A.c(d.M(0,e),$async$Zz)
case 6:if(!g)throw A.o(new B.pQ())
w=7
return A.c(d.hC(),$async$Zz)
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
return A.k($async$Zz,v)},
atx(d){return this.dmL(d)},
dmL(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atx=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.Az("GET","/operations/"+d.a),$async$atx)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.v8())
s=A.m3(D.ay.D(r.w))
B.e0c(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atx,v)},
e5L(){return this.vA(new B.bDc(this),x.t)},
e77(){return this.vA(new B.bDf(this),x.t)},
c_i(d){return this.vA(new B.bDd(this,d),x.L)},
dMj(d){return this.vA(new B.bD8(this,d),x.H)},
atw(d){return this.dmK(d)},
dmK(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
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
B.e0b(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atw,v)},
cxF(){return this.vA(new B.bDe(this),x.g)},
e0G(d,e){return this.vA(new B.bDa(this,d,e),x.b)},
dX2(d){return this.vA(new B.bD9(this,d),x.X)},
dMi(d){return this.vA(new B.bD7(this,d),x.H)}}
B.aRS.prototype={}
B.bD2.prototype={
A(){var w=this
return A.a_(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n4(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bD3.prototype={}
B.acm.prototype={
A(){return A.a_(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n4(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_q.prototype={}
B.a_p.prototype={}
B.afA.prototype={
pU(d){return this.cCf(d)},
cCf(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pU=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pU(d),$async$pU)
case 7:q=f
p=B.eHc(q,d)
if(p==null)throw A.o(C.aOV)
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
return A.k($async$pU,v)}}
B.aNP.prototype={
gctl(){var w=D.b.mB(this.b,A.ay("[-_]",!0,!1,!1,!1)),v=A.W(w)
return new A.e7(new A.ap(w,new B.bUB(),v.k("ap<1>")),new B.bUC(),v.k("e7<1,n>")).b3(0," ")}}
B.aGR.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aGR&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<EZ?>(fK)","B<a_s?>()","B<EZ>(fK)","B<M6?>(fK)","B<a_p>(fK)","B<a_q>(fK)"])
B.bDh.prototype={
$0(){return A.jk(new B.bDi(this.a,this.b,this.c))},
$S:0}
B.bDi.prototype={
$0(){return this.a.$0()&&this.b.dz(this.c)},
$S:1}
B.bDj.prototype={
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
return A.c(p.hC(),$async$$0)
case 8:a8.$0()
for(h=["purchase","launch"],g=r.d,f=x.P,e=r.c,d=e+":",a0=0;a0<2;++a0){o=h[a0]
a1=A.b(o)
n=A.b6(p.a.i(0,d+a1))
if(n==null)continue
if(n.length>32768)throw A.o(D.c8)
m=f.a(D.H.bH(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.c8)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.ebz(l):null
if(J.p(o,"launch")){a1=l
a2=A.bb(a1.i(0,"clientSessionId"))
a3=B.wj(a1.i(0,"productId"))
a1=A.bb(a1.i(0,"gameKey"))
a4=A.ay(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.V(C.QZ)
a3=B.wj(a3)
a4=A.ay("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.V(C.R2)
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
break}u=B.ebB(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bD5.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dz(w.b)},
$S:1}
B.bD6.prototype={
$0(){return this.cAc(this.c)},
cAc(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
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
B.bDc.prototype={
$1(d){return this.cAh(d)},
cAh(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
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
B.bDf.prototype={
$1(d){return this.cAk(d)},
cAk(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
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
B.bDd.prototype={
$1(d){return this.cAi(d)},
cAi(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
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
if(!p.a.n4(j))throw A.o(new B.Dm())
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
case 12:w=q&&C.bET.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.rn(d,s+":purchase",r),$async$$1)
case 16:u=k.xC(r)
w=1
break
case 15:throw A.o(new B.v8())
case 13:o=A.m3(D.ay.D(l.w))
B.e0c(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.rn(d,s+":purchase",r),$async$$1)
case 17:u=k.xC(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bD8.prototype={
$1(d){return this.cAe(d)},
cAe(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.Ay(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xC(s)
if(!(r.b!=null||r.c)||!r.a.n4(t.b))throw A.o(new B.Dm())
w=3
return A.c(q.Zz(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:134}
B.bDe.prototype={
$1(d){return this.cAj(d)},
cAj(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.Ay(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.atw(r.LV(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.rn(d,q+":launch",s),$async$$1)
case 4:u=r.LV(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bDa.prototype={
$1(d){return this.cAg(d)},
cAg(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
case 3:if(!g.LV(p).a.n4(f))throw A.o(new B.Dm())
d=p
w=5
return A.c(g.atw(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.rn(a0,s+":launch",p),$async$$1)
case 6:o=g.LV(p).b
if(!t.c)throw A.o(new B.acn())
if((o==null?null:C.jL.t(0,o.a))===!0)throw A.o(new B.Dn())
case 4:w=7
return A.c(g.r7(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dn())
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
q=B.eoN(A.b6(s.i(0,"launchUrl")))
if(q==null)q=A.V(C.aOq)
k=B.ay2(s.i(0,"launchExpiresAt"))
j=B.ay2(s.i(0,"sessionExpiresAt"))
i=q.gkA().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.ia(g))if(j.ia(g))if(!k.ia(j))if(i!=null){g=J.bS(i)
if(g.gJ(i)===1){f=A.ay("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gde(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.V(C.aOR)
u=new B.a_p(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bD9.prototype={
$1(d){return this.cAf(d)},
cAf(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.Ay(d,m+":launch","launch")
if(s==null||!n.LV(s).a.n4(t.b))throw A.o(new B.Dm())
r=t.b
w=3
return A.c(n.Az("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.v8())
p=A.m3(D.ay.D(q.w))
o=B.e0b(p,r)
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
B.bD7.prototype={
$1(d){return this.cAd(d)},
cAd(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.Ay(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LV(s)
if(r.a.n4(t.b)){q=r.b
q=(q==null?null:C.jL.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Dm())
w=3
return A.c(p.Zz(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:134}
B.bUB.prototype={
$1(d){return d.length!==0},
$S:9}
B.bUC.prototype={
$1(d){return d[0].toUpperCase()+D.b.bu(d,1)},
$S:34};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pQ,B.Dm,B.v8,B.a_r,B.Dn,B.acn,B.EZ,B.M6,B.a_s,B.aRS,B.bD2,B.bD3,B.acm,B.a_q,B.a_p,B.afA,B.aNP,B.aGR])
w(A.bt,[B.bDh,B.bDi,B.bDj,B.bD5,B.bD6])
w(A.bu,[B.bDc,B.bDf,B.bDd,B.bD8,B.bDe,B.bDa,B.bD9,B.bD7,B.bUB,B.bUC])})()
A.b_(b.typeUniverse,JSON.parse('{"pQ":{"bk":[]},"Dm":{"bk":[]},"v8":{"bk":[]},"a_r":{"bk":[]},"Dn":{"bk":[]},"acn":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bZ<n>"),b:w("a_p"),X:w("a_q"),f:w("v<A>"),U:w("v<ig>"),P:w("a1<n,@>"),q:w("rc"),O:w("aRS"),L:w("EZ"),N:w("n"),z:w("@"),C:w("a_s?"),h:w("a1<n,@>?"),p:w("aNP?"),g:w("M6?"),t:w("EZ?"),H:w("~")}})();(function constants(){C.aNW=new A.c4("Invalid product identifier",null,null)
C.aO6=new A.c4("Invalid game access state",null,null)
C.aOm=new A.c4("Product identifier out of range",null,null)
C.aOq=new A.c4("Untrusted game handoff",null,null)
C.aOu=new A.c4("Invalid currency",null,null)
C.aOF=new A.c4("Game launch state mismatch",null,null)
C.QY=new A.c4("Invalid timestamp",null,null)
C.aOL=new A.c4("Game purchase receipt mismatch",null,null)
C.aOR=new A.c4("Game launch handoff mismatch",null,null)
C.QZ=new A.c4("Invalid game operation identifier",null,null)
C.aOV=new A.c4("Invalid product game access descriptor",null,null)
C.R2=new A.c4("Invalid game key",null,null)
C.aP1=new A.c4("Invalid duration",null,null)
C.bET=new A.fJ([400,409,422],A.C("fJ<y>"))
C.boO={ENDED:0,EXPIRED:1,DENIED:2}
C.jL=new A.bZ(C.boO,3,x.M)
C.boS={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFx=new A.bZ(C.boS,5,x.M)
C.bnR={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGg=new A.bZ(C.bnR,11,x.M)
C.bpq={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGl=new A.bZ(C.bpq,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f9e","erS",()=>A.ay("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["Nv0+y37gCkdP7Zl3rfja46EUuc8="]=a.current})($__dart_deferred_initializers__);