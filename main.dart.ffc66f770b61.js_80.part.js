((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
edZ(d,e,f,g,h,i){var w,v=B.wr(i),u=e.np(),t=A.iu(d,g)
v=new B.a_E(e,u,t,v,f,g,A.XO(),A.epS())
w=d.c
if(!(w instanceof A.fM)||w.b!==e)A.U(D.x)
v.y=B.ee_(d,u,i)
return v},
ee_(d,e,f){var w=e.e
return"game_access_v2_"+D.d6.ci(D.bh.ci(D.G.aw(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bDS(d,e,f,g){var w=null
return B.eEN(d,e,f,g)},
eEN(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDS=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fM)||k.b!==e)throw A.o(D.x)
o=e.np()
r=B.wr(g)
q=B.ee_(d,o,r)
p=new B.bDT(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GS(q,new B.bDV(p,l,q,r,e,d,f),x.C),$async$bDS)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.wI)throw A.o(new B.pX())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bDS,v)},
pX:function pX(){},
Du:function Du(){},
vd:function vd(){},
a_D:function a_D(){},
Dv:function Dv(){},
acG:function acG(){},
Fb:function Fb(d,e,f){this.a=d
this.b=e
this.c=f},
Mj:function Mj(d,e){this.a=d
this.b=e},
a_E:function a_E(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bDT:function bDT(d,e,f){this.a=d
this.b=e
this.c=f},
bDU:function bDU(d,e,f){this.a=d
this.b=e
this.c=f},
bDV:function bDV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bDH:function bDH(d){this.a=d},
bDI:function bDI(d,e,f){this.a=d
this.b=e
this.c=f},
bDO:function bDO(d){this.a=d},
bDR:function bDR(d){this.a=d},
bDP:function bDP(d,e){this.a=d
this.b=e},
bDK:function bDK(d,e){this.a=d
this.b=e},
bDQ:function bDQ(d){this.a=d},
bDM:function bDM(d,e,f){this.a=d
this.b=e
this.c=f},
bDL:function bDL(d,e){this.a=d
this.b=e},
bDJ:function bDJ(d,e){this.a=d
this.b=e},
e7t(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.R0)
return d.toLowerCase()},
wr(d){var w,v
if(A.er(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNT)
v=A.aZN(d,null)
if(v.bo(0,A.oD(9007199254740991))>0)throw A.o(C.aOj)
return v.df(0)},
dV0(d){var w
if(typeof d!="string")throw A.o(D.QY)
w=A.js(d)
return w.jN(w.b)},
dPp(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R4)
return d},
ayo(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R_)
v=A.j7(d)
if(v==null)throw A.o(C.R_)
return B.dW3(v)},
edW(d,e,f,g,h){var w=B.e7t(g),v=B.wr(h),u=B.dPp(f),t=B.dV0(d)
if(e<=0)A.U(C.aOZ)
return new B.bDE(w,u,t,v,e)},
edX(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOr)
w=A.bb(d.i(0,"operationId"))
v=B.wr(d.i(0,"productId"))
u=A.bb(d.i(0,"gameKey"))
return B.edW(A.bb(d.i(0,"depositAmount")),B.wr(d.i(0,"entitlementDurationDays")),u,w,v)},
e2v(d,e){var w=A.bb(d.i(0,"status"))
B.ayo(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wr(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dV0(d.i(0,"depositAmount"))!==e.c||!C.bGo.t(0,w))A.U(C.aOI)
return new B.bDF(w)},
eEK(d){var w=A.bb(d.i(0,"clientSessionId")),v=B.wr(d.i(0,"productId")),u=A.bb(d.i(0,"gameKey"))
w=B.e7t(w)
v=B.wr(v)
return new B.acF(w,B.dPp(u),v)},
e2u(d,e){var w,v="launchExpiresAt",u=A.bb(d.i(0,"status")),t=A.fn(d.i(0,"launchConsumed")),s=B.ayo(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ayo(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ayo(d.i(0,"endedAt"))
w=A.b6(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFA.t(0,u)||d.ao("launchUrl"))A.U(C.aOC)
return new B.a_C(u,t,s,w)},
aSg:function aSg(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bDE:function bDE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bDF:function bDF(d){this.a=d},
acF:function acF(d,e,f){this.a=d
this.b=e
this.c=f},
a_C:function a_C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
a_B:function a_B(d,e,f){this.a=d
this.b=e
this.c=f},
afT:function afT(d){this.a=d},
eJE(d,e){var w=d==null,v=w?null:D.b.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.eud()
if(w.b.test(v))if(d.c===D.Rc)if(d.d===D.Re)if(d.f!==D.Rd){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.T5(v,d.e,d.f.a,d.r,d.w)},
T5:function T5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bVi:function bVi(){},
bVj:function bVj(){},
aHe:function aHe(d){this.a=d},
er9(d){var w,v,u=d==null?null:D.b.F(d)
if(u==null||u.length===0)return null
w=A.lc(u)
v=!0
if(w!=null)if(w.gf3().toLowerCase()==="https")if(w.gnN().length===0)v=w.ga6j()&&w.gzf()!==443||!D.acM.t(0,w.gi2().toLowerCase())||w.gwN().length===0
if(v)return null
return w.cyY("telegram.me")},
dW3(d){return d.c?d:A.ec4(A.bL(d),A.bQ(d),A.cw(d),A.iH(d),A.om(d),A.SU(d),A.aNZ(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[187],B)
C=c[784]
B.pX.prototype={$ibk:1}
B.Du.prototype={$ibk:1}
B.vd.prototype={$ibk:1}
B.a_D.prototype={$ibk:1}
B.Dv.prototype={$ibk:1}
B.acG.prototype={$ibk:1}
B.Fb.prototype={}
B.Mj.prototype={}
B.a_E.prototype={
AA(){return A.jo(new B.bDH(this))},
bxr(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Du())},
AC(d,e){return this.dyN(d,e)},
dyN(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$AC=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.AA()
s=x.N
w=3
return A.c(t.c.Y("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.a_(["Cache-Control","no-store"],s,s),A.q(s,s),null).eS(D.fA),$async$AC)
case 3:r=g
t.AA()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$AC,v)},
cct(d){var w,v,u
try{w=A.me(D.at.D(d.w)).i(0,"code")
v=C.bGj.t(0,w)?A.bb(w):null
return v}catch(u){return null}},
re(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$re=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AC("GET",""),$async$re)
case 3:i=e
h=i.b
if(h!==200){s=t.cct(i)
throw A.o(A.ak(h,s==null?"Game access unavailable":s))}h=A.me(D.at.D(i.w))
s=B.dV0(h.i(0,"requiredBalance"))
r=B.dV0(h.i(0,"currentBalance"))
q=A.fn(h.i(0,"eligible"))
p=A.fn(h.i(0,"hasActiveEntitlement"))
o=A.fn(h.i(0,"purchaseAvailable"))
n=A.fn(h.i(0,"launchAvailable"))
m=A.bb(h.i(0,"currency"))
l=A.b6(h.i(0,"denyReason"))
A.b6(h.i(0,"purchaseUnavailableReasonCode"))
A.b6(h.i(0,"launchUnavailableReasonCode"))
k=B.wr(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wr(h.i(0,"productId"))===t.d)if(B.dPp(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.U(C.aO3)
u=new B.aSg(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$re,v)},
vE(d,e){return this.dnD(d,e,e)},
dnD(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vE=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.AA()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GS(q,new B.bDI(r,d,e),e),$async$vE)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.wI)throw A.o(new B.pX())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$vE,v)},
AB(d,e,f){var w,v,u,t,s
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
else this.LU(v)
return v}catch(s){throw A.o(new B.pX())}},
xI(d){var w,v,u=x.P,t=B.edX(u.a(d.i(0,"intent")))
this.bxr(t.d,t.b)
w=A.fn(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.cc)
return new B.Fb(t,v==null?null:B.e2v(u.a(v),t),w)},
LU(d){var w,v=x.P,u=B.eEK(v.a(d.i(0,"intent")))
this.bxr(u.c,u.b)
w=d.i(0,"state")
return new B.Mj(u,w==null?null:B.e2u(v.a(w),u))},
rs(d,e,f){return this.dNh(d,e,f)},
dNh(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$rs=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.AA()
u=3
r=D.G.aw(f,null)
w=6
return A.c(d.hb("String",e,r),$async$rs)
case 6:if(!h)throw A.o(new B.pX())
w=7
return A.c(d.hC(),$async$rs)
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
case 5:s.AA()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$rs,v)},
Zx(d,e){return this.dyj(d,e)},
dyj(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$Zx=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.AA()
u=3
w=6
return A.c(d.M(0,e),$async$Zx)
case 6:if(!g)throw A.o(new B.pX())
w=7
return A.c(d.hC(),$async$Zx)
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
case 5:s.AA()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$Zx,v)},
atD(d){return this.dnY(d)},
dnY(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atD=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AC("GET","/operations/"+d.a),$async$atD)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.vd())
s=A.me(D.at.D(r.w))
B.e2v(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atD,v)},
e7c(){return this.vE(new B.bDO(this),x.t)},
e8z(){return this.vE(new B.bDR(this),x.t)},
c_Q(d){return this.vE(new B.bDP(this,d),x.L)},
dNC(d){return this.vE(new B.bDK(this,d),x.H)},
atC(d){return this.dnX(d)},
dnX(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atC=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AC("GET","/sessions/"+d.a),$async$atC)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.me(D.at.D(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.vd())
s=A.me(D.at.D(r.w))
B.e2u(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atC,v)},
cyz(){return this.vE(new B.bDQ(this),x.g)},
e22(d,e){return this.vE(new B.bDM(this,d,e),x.b)},
dYq(d){return this.vE(new B.bDL(this,d),x.X)},
dNB(d){return this.vE(new B.bDJ(this,d),x.H)}}
B.aSg.prototype={}
B.bDE.prototype={
A(){var w=this
return A.a_(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n6(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bDF.prototype={}
B.acF.prototype={
A(){return A.a_(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n6(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_C.prototype={}
B.a_B.prototype={}
B.afT.prototype={
pZ(d){return this.cDb(d)},
cDb(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pZ=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pZ(d),$async$pZ)
case 7:q=f
p=B.eJE(q,d)
if(p==null)throw A.o(C.aOS)
u=p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
m=A.u(k)
if(m instanceof A.hx){o=m
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
B.T5.prototype={
gcue(){var w=D.b.mE(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.e1(new A.ao(w,new B.bVi(),v.k("ao<1>")),new B.bVj(),v.k("e1<1,n>")).b6(0," ")}}
B.aHe.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aHe&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<Fb?>(fK)","B<a_E?>()","B<Fb>(fK)","B<Mj?>(fK)","B<a_B>(fK)","B<a_C>(fK)"])
B.bDT.prototype={
$0(){return A.jo(new B.bDU(this.a,this.b,this.c))},
$S:0}
B.bDU.prototype={
$0(){return this.a.$0()&&this.b.dB(this.c)},
$S:1}
B.bDV.prototype={
$0(){var w=0,v=A.l(x.C),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$0=A.h(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a8=r.a
a8.$0()
q=null
t=4
w=7
return A.c(A.iW(),$async$$0)
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
k=J.p(o,"purchase")?B.edX(l):null
if(J.p(o,"launch")){a1=l
a2=A.bb(a1.i(0,"clientSessionId"))
a3=B.wr(a1.i(0,"productId"))
a1=A.bb(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.U(C.R0)
a3=B.wr(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.U(C.R4)
a5=new B.acF(a2.toLowerCase(),a1,a3)}else a5=null
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
if(A.u(a9) instanceof A.a4d)throw a9
else throw A.o(new B.pX())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.edZ(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bDH.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dB(w.b)},
$S:1}
B.bDI.prototype={
$0(){return this.cB6(this.c)},
cB6(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.AA()
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
case 6:o.AA()
u=r.b.$1(q)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S(){return this.c.k("B<0>()")}}
B.bDO.prototype={
$1(d){return this.cBb(d)},
cBb(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.AB(d,q+":purchase","purchase")
u=s==null?null:r.xI(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDR.prototype={
$1(d){return this.cBe(d)},
cBe(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.AB(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.xI(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.atD(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.rs(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xI(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDP.prototype={
$1(d){return this.cBc(d)},
cBc(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bxr(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.AB(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xI(r)
if(!p.a.n6(j))throw A.o(new B.Du())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.atD(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.rs(d,s+":purchase",r),$async$$1)
case 8:u=k.xI(r)
w=1
break
case 7:case 4:w=9
return A.c(k.re(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.js(n.b).bo(0,A.js(m))<0}if(m)throw A.o(new B.a_D())
if(q)r=A.a_(["version",1,"scope",s,"kind","purchase","intent",j.A(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.rs(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.AC("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bEV.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.rs(d,s+":purchase",r),$async$$1)
case 16:u=k.xI(r)
w=1
break
case 15:throw A.o(new B.vd())
case 13:o=A.me(D.at.D(l.w))
B.e2v(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.rs(d,s+":purchase",r),$async$$1)
case 17:u=k.xI(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bDK.prototype={
$1(d){return this.cB8(d)},
cB8(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.AB(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xI(s)
if(!(r.b!=null||r.c)||!r.a.n6(t.b))throw A.o(new B.Du())
w=3
return A.c(q.Zx(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:145}
B.bDQ.prototype={
$1(d){return this.cBd(d)},
cBd(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.AB(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.atC(r.LU(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.rs(d,q+":launch",s),$async$$1)
case 4:u=r.LU(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bDM.prototype={
$1(d){return this.cBa(d)},
cBa(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bxr(f.c,e)
s=g.y
s===$&&A.e()
r=g.AB(a0,s+":purchase","purchase")
if(r!=null){q=g.xI(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.vd())
p=g.AB(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.LU(p).a.n6(f))throw A.o(new B.Du())
d=p
w=5
return A.c(g.atC(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.rs(a0,s+":launch",p),$async$$1)
case 6:o=g.LU(p).b
if(!t.c)throw A.o(new B.acG())
if((o==null?null:C.jP.t(0,o.a))===!0)throw A.o(new B.Dv())
case 4:w=7
return A.c(g.re(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dv())
if(q)p=A.a_(["version",1,"scope",s,"kind","launch","intent",f.A()],x.N,x.z)
w=8
return A.c(g.rs(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.AC("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.cct(m)
if(s===400&&l!=null)throw A.o(A.ak(400,l))
throw A.o(new B.vd())}s=A.me(D.at.D(m.w))
g=g.w.$0().a3()
q=B.er9(A.b6(s.i(0,"launchUrl")))
if(q==null)q=A.U(C.aOn)
k=B.ayo(s.i(0,"launchExpiresAt"))
j=B.ayo(s.i(0,"sessionExpiresAt"))
i=q.gkF().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.ib(g))if(j.ib(g))if(!k.ib(j))if(i!=null){g=J.bV(i)
if(g.gJ(i)===1){f=A.az("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gd_(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.U(C.aOO)
u=new B.a_B(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bDL.prototype={
$1(d){return this.cB9(d)},
cB9(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.AB(d,m+":launch","launch")
if(s==null||!n.LU(s).a.n6(t.b))throw A.o(new B.Du())
r=t.b
w=3
return A.c(n.AC("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.vd())
p=A.me(D.at.D(q.w))
o=B.e2u(p,r)
if(!C.jP.t(0,o.a))throw A.o(new B.vd())
s.h(0,"state",p)
w=4
return A.c(n.rs(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bDJ.prototype={
$1(d){return this.cB7(d)},
cB7(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.AB(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LU(s)
if(r.a.n6(t.b)){q=r.b
q=(q==null?null:C.jP.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Du())
w=3
return A.c(p.Zx(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:145}
B.bVi.prototype={
$1(d){return d.length!==0},
$S:9}
B.bVj.prototype={
$1(d){return d[0].toUpperCase()+D.b.bu(d,1)},
$S:38};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pX,B.Du,B.vd,B.a_D,B.Dv,B.acG,B.Fb,B.Mj,B.a_E,B.aSg,B.bDE,B.bDF,B.acF,B.a_C,B.a_B,B.afT,B.T5,B.aHe])
w(A.bu,[B.bDT,B.bDU,B.bDV,B.bDH,B.bDI])
w(A.bt,[B.bDO,B.bDR,B.bDP,B.bDK,B.bDQ,B.bDM,B.bDL,B.bDJ,B.bVi,B.bVj])})()
A.b0(b.typeUniverse,JSON.parse('{"pX":{"bk":[]},"Du":{"bk":[]},"vd":{"bk":[]},"a_D":{"bk":[]},"Dv":{"bk":[]},"acG":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bW<n>"),b:w("a_B"),X:w("a_C"),f:w("v<A>"),U:w("v<io>"),P:w("a2<n,@>"),q:w("ri"),O:w("aSg"),L:w("Fb"),N:w("n"),z:w("@"),C:w("a_E?"),h:w("a2<n,@>?"),p:w("T5?"),g:w("Mj?"),t:w("Fb?"),H:w("~")}})();(function constants(){C.aNT=new A.c4("Invalid product identifier",null,null)
C.aO3=new A.c4("Invalid game access state",null,null)
C.aOj=new A.c4("Product identifier out of range",null,null)
C.aOn=new A.c4("Untrusted game handoff",null,null)
C.aOr=new A.c4("Invalid currency",null,null)
C.aOC=new A.c4("Game launch state mismatch",null,null)
C.R_=new A.c4("Invalid timestamp",null,null)
C.aOI=new A.c4("Game purchase receipt mismatch",null,null)
C.aOO=new A.c4("Game launch handoff mismatch",null,null)
C.R0=new A.c4("Invalid game operation identifier",null,null)
C.aOS=new A.c4("Invalid product game access descriptor",null,null)
C.R4=new A.c4("Invalid game key",null,null)
C.aOZ=new A.c4("Invalid duration",null,null)
C.bEV=new A.fJ([400,409,422],A.C("fJ<y>"))
C.boR={ENDED:0,EXPIRED:1,DENIED:2}
C.jP=new A.bW(C.boR,3,x.M)
C.boV={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFA=new A.bW(C.boV,5,x.M)
C.bnS={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGj=new A.bW(C.bnS,11,x.M)
C.bpt={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGo=new A.bW(C.bpt,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"fbN","eud",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["2KB7XfNFh+OPmurWjIre8lsEqys="]=a.current})($__dart_deferred_initializers__);