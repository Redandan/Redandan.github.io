((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ecX(d,e,f,g,h,i){var w,v=B.wn(i),u=e.no(),t=A.iK(d,g)
v=new B.a_A(e,u,t,v,f,g,A.XK(),A.eoR())
w=d.c
if(!(w instanceof A.fM)||w.b!==e)A.U(D.x)
v.y=B.ecY(d,u,i)
return v},
ecY(d,e,f){var w=e.e
return"game_access_v2_"+D.d6.cg(D.bh.cg(D.G.az(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bDK(d,e,f,g){var w=null
return B.eDN(d,e,f,g)},
eDN(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDK=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fM)||k.b!==e)throw A.o(D.x)
o=e.no()
r=B.wn(g)
q=B.ecY(d,o,r)
p=new B.bDL(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GI(q,new B.bDN(p,l,q,r,e,d,f),x.C),$async$bDK)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.wE)throw A.o(new B.pS())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bDK,v)},
pS:function pS(){},
Dl:function Dl(){},
va:function va(){},
a_z:function a_z(){},
Dm:function Dm(){},
acz:function acz(){},
F0:function F0(d,e,f){this.a=d
this.b=e
this.c=f},
Mb:function Mb(d,e){this.a=d
this.b=e},
a_A:function a_A(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bDL:function bDL(d,e,f){this.a=d
this.b=e
this.c=f},
bDM:function bDM(d,e,f){this.a=d
this.b=e
this.c=f},
bDN:function bDN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bDz:function bDz(d){this.a=d},
bDA:function bDA(d,e,f){this.a=d
this.b=e
this.c=f},
bDG:function bDG(d){this.a=d},
bDJ:function bDJ(d){this.a=d},
bDH:function bDH(d,e){this.a=d
this.b=e},
bDC:function bDC(d,e){this.a=d
this.b=e},
bDI:function bDI(d){this.a=d},
bDE:function bDE(d,e,f){this.a=d
this.b=e
this.c=f},
bDD:function bDD(d,e){this.a=d
this.b=e},
bDB:function bDB(d,e){this.a=d
this.b=e},
e6r(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.QZ)
return d.toLowerCase()},
wn(d){var w,v
if(A.eI(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNR)
v=A.aZG(d,null)
if(v.bn(0,A.oA(9007199254740991))>0)throw A.o(C.aOh)
return v.de(0)},
dTX(d){var w
if(typeof d!="string")throw A.o(D.QW)
w=A.jq(d)
return w.jM(w.b)},
dOl(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R2)
return d},
ayj(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.QY)
v=A.j4(d)
if(v==null)throw A.o(C.QY)
return B.dV_(v)},
ecU(d,e,f,g,h){var w=B.e6r(g),v=B.wn(h),u=B.dOl(f),t=B.dTX(d)
if(e<=0)A.U(C.aOX)
return new B.bDw(w,u,t,v,e)},
ecV(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOp)
w=A.bc(d.i(0,"operationId"))
v=B.wn(d.i(0,"productId"))
u=A.bc(d.i(0,"gameKey"))
return B.ecU(A.bc(d.i(0,"depositAmount")),B.wn(d.i(0,"entitlementDurationDays")),u,w,v)},
e1s(d,e){var w=A.bc(d.i(0,"status"))
B.ayj(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wn(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dTX(d.i(0,"depositAmount"))!==e.c||!C.bGj.t(0,w))A.U(C.aOG)
return new B.bDx(w)},
eDK(d){var w=A.bc(d.i(0,"clientSessionId")),v=B.wn(d.i(0,"productId")),u=A.bc(d.i(0,"gameKey"))
w=B.e6r(w)
v=B.wn(v)
return new B.acy(w,B.dOl(u),v)},
e1r(d,e){var w,v="launchExpiresAt",u=A.bc(d.i(0,"status")),t=A.fm(d.i(0,"launchConsumed")),s=B.ayj(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ayj(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ayj(d.i(0,"endedAt"))
w=A.b6(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFv.t(0,u)||d.ao("launchUrl"))A.U(C.aOA)
return new B.a_y(u,t,s,w)},
aS9:function aS9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bDw:function bDw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bDx:function bDx(d){this.a=d},
acy:function acy(d,e,f){this.a=d
this.b=e
this.c=f},
a_y:function a_y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
a_x:function a_x(d,e,f){this.a=d
this.b=e
this.c=f},
afN:function afN(d){this.a=d},
eIA(d,e){var w=d==null,v=w?null:D.b.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.etd()
if(w.b.test(v))if(d.c===D.Ra)if(d.d===D.Rc)if(d.f!==D.Rb){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.SZ(v,d.e,d.f.a,d.r,d.w)},
SZ:function SZ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bUS:function bUS(){},
bUT:function bUT(){},
aH8:function aH8(d){this.a=d},
eq8(d){var w,v,u=d==null?null:D.b.F(d)
if(u==null||u.length===0)return null
w=A.l8(u)
v=!0
if(w!=null)if(w.gf2().toLowerCase()==="https")if(w.gnM().length===0)v=w.ga6g()&&w.gzd()!==443||!D.acK.t(0,w.gi1().toLowerCase())||w.gwL().length===0
if(v)return null
return w.cyv("telegram.me")},
dV_(d){return d.c?d:A.eb2(A.bL(d),A.bQ(d),A.cv(d),A.iF(d),A.oj(d),A.SN(d),A.aNT(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[187],B)
C=c[784]
B.pS.prototype={$ibk:1}
B.Dl.prototype={$ibk:1}
B.va.prototype={$ibk:1}
B.a_z.prototype={$ibk:1}
B.Dm.prototype={$ibk:1}
B.acz.prototype={$ibk:1}
B.F0.prototype={}
B.Mb.prototype={}
B.a_A.prototype={
Ay(){return A.jm(new B.bDz(this))},
bxf(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Dl())},
AA(d,e){return this.dy7(d,e)},
dy7(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$AA=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.Ay()
s=x.N
w=3
return A.c(t.c.Y("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.a_(["Cache-Control","no-store"],s,s),A.q(s,s),null).eQ(D.fA),$async$AA)
case 3:r=g
t.Ay()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$AA,v)},
cc6(d){var w,v,u
try{w=A.m6(D.av.D(d.w)).i(0,"code")
v=C.bGe.t(0,w)?A.bc(w):null
return v}catch(u){return null}},
rb(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$rb=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AA("GET",""),$async$rb)
case 3:i=e
h=i.b
if(h!==200){s=t.cc6(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.m6(D.av.D(i.w))
s=B.dTX(h.i(0,"requiredBalance"))
r=B.dTX(h.i(0,"currentBalance"))
q=A.fm(h.i(0,"eligible"))
p=A.fm(h.i(0,"hasActiveEntitlement"))
o=A.fm(h.i(0,"purchaseAvailable"))
n=A.fm(h.i(0,"launchAvailable"))
m=A.bc(h.i(0,"currency"))
l=A.b6(h.i(0,"denyReason"))
A.b6(h.i(0,"purchaseUnavailableReasonCode"))
A.b6(h.i(0,"launchUnavailableReasonCode"))
k=B.wn(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wn(h.i(0,"productId"))===t.d)if(B.dOl(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.U(C.aO1)
u=new B.aS9(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$rb,v)},
vF(d,e){return this.dn0(d,e,e)},
dn0(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vF=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.Ay()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GI(q,new B.bDA(r,d,e),e),$async$vF)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.wE)throw A.o(new B.pS())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$vF,v)},
Az(d,e,f){var w,v,u,t,s
try{w=A.b6(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.cc)
v=x.P.a(D.G.bH(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.cc)
if(f==="purchase")this.xG(v)
else this.LS(v)
return v}catch(s){throw A.o(new B.pS())}},
xG(d){var w,v,u=x.P,t=B.ecV(u.a(d.i(0,"intent")))
this.bxf(t.d,t.b)
w=A.fm(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.cc)
return new B.F0(t,v==null?null:B.e1s(u.a(v),t),w)},
LS(d){var w,v=x.P,u=B.eDK(v.a(d.i(0,"intent")))
this.bxf(u.c,u.b)
w=d.i(0,"state")
return new B.Mb(u,w==null?null:B.e1r(v.a(w),u))},
rr(d,e,f){return this.dMz(d,e,f)},
dMz(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$rr=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.Ay()
u=3
r=D.G.az(f,null)
w=6
return A.c(d.ha("String",e,r),$async$rr)
case 6:if(!h)throw A.o(new B.pS())
w=7
return A.c(d.hB(),$async$rr)
case 7:q=A.b6(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.pS())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.pS())
w=5
break
case 2:w=1
break
case 5:s.Ay()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$rr,v)},
Zu(d,e){return this.dxD(d,e)},
dxD(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$Zu=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.Ay()
u=3
w=6
return A.c(d.M(0,e),$async$Zu)
case 6:if(!g)throw A.o(new B.pS())
w=7
return A.c(d.hB(),$async$Zu)
case 7:if(d.a.ao(e))throw A.o(new B.pS())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.pS())
w=5
break
case 2:w=1
break
case 5:s.Ay()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$Zu,v)},
atz(d){return this.dnl(d)},
dnl(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atz=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AA("GET","/operations/"+d.a),$async$atz)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.va())
s=A.m6(D.av.D(r.w))
B.e1s(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atz,v)},
e6v(){return this.vF(new B.bDG(this),x.t)},
e7S(){return this.vF(new B.bDJ(this),x.t)},
c_z(d){return this.vF(new B.bDH(this,d),x.L)},
dMU(d){return this.vF(new B.bDC(this,d),x.H)},
aty(d){return this.dnk(d)},
dnk(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$aty=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AA("GET","/sessions/"+d.a),$async$aty)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.m6(D.av.D(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.va())
s=A.m6(D.av.D(r.w))
B.e1r(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$aty,v)},
cy6(){return this.vF(new B.bDI(this),x.g)},
e1l(d,e){return this.vF(new B.bDE(this,d,e),x.b)},
dXI(d){return this.vF(new B.bDD(this,d),x.X)},
dMT(d){return this.vF(new B.bDB(this,d),x.H)}}
B.aS9.prototype={}
B.bDw.prototype={
A(){var w=this
return A.a_(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n6(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bDx.prototype={}
B.acy.prototype={
A(){return A.a_(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n6(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_y.prototype={}
B.a_x.prototype={}
B.afN.prototype={
pW(d){return this.cCJ(d)},
cCJ(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pW=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pW(d),$async$pW)
case 7:q=f
p=B.eIA(q,d)
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
return A.k($async$pW,v)}}
B.SZ.prototype={
gctM(){var w=D.b.mE(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.e8(new A.ap(w,new B.bUS(),v.k("ap<1>")),new B.bUT(),v.k("e8<1,n>")).b7(0," ")}}
B.aH8.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aH8&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<F0?>(fK)","B<a_A?>()","B<F0>(fK)","B<Mb?>(fK)","B<a_x>(fK)","B<a_y>(fK)"])
B.bDL.prototype={
$0(){return A.jm(new B.bDM(this.a,this.b,this.c))},
$S:0}
B.bDM.prototype={
$0(){return this.a.$0()&&this.b.dB(this.c)},
$S:1}
B.bDN.prototype={
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
return A.c(p.hB(),$async$$0)
case 8:a8.$0()
for(h=["purchase","launch"],g=r.d,f=x.P,e=r.c,d=e+":",a0=0;a0<2;++a0){o=h[a0]
a1=A.b(o)
n=A.b6(p.a.i(0,d+a1))
if(n==null)continue
if(n.length>32768)throw A.o(D.cc)
m=f.a(D.G.bH(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.cc)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.ecV(l):null
if(J.p(o,"launch")){a1=l
a2=A.bc(a1.i(0,"clientSessionId"))
a3=B.wn(a1.i(0,"productId"))
a1=A.bc(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.U(C.QZ)
a3=B.wn(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.U(C.R2)
a5=new B.acy(a2.toLowerCase(),a1,a3)}else a5=null
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
if(A.u(a9) instanceof A.a48)throw a9
else throw A.o(new B.pS())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.ecX(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bDz.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dB(w.b)},
$S:1}
B.bDA.prototype={
$0(){return this.cAF(this.c)},
cAF(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.Ay()
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
throw A.o(new B.pS())
w=6
break
case 3:w=2
break
case 6:o.Ay()
u=r.b.$1(q)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S(){return this.c.k("B<0>()")}}
B.bDG.prototype={
$1(d){return this.cAK(d)},
cAK(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.Az(d,q+":purchase","purchase")
u=s==null?null:r.xG(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDJ.prototype={
$1(d){return this.cAN(d)},
cAN(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.Az(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.xG(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.atz(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.rr(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xG(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDH.prototype={
$1(d){return this.cAL(d)},
cAL(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bxf(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.Az(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xG(r)
if(!p.a.n6(j))throw A.o(new B.Dl())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.atz(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.rr(d,s+":purchase",r),$async$$1)
case 8:u=k.xG(r)
w=1
break
case 7:case 4:w=9
return A.c(k.rb(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.jq(n.b).bn(0,A.jq(m))<0}if(m)throw A.o(new B.a_z())
if(q)r=A.a_(["version",1,"scope",s,"kind","purchase","intent",j.A(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.rr(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.AA("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bER.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.rr(d,s+":purchase",r),$async$$1)
case 16:u=k.xG(r)
w=1
break
case 15:throw A.o(new B.va())
case 13:o=A.m6(D.av.D(l.w))
B.e1s(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.rr(d,s+":purchase",r),$async$$1)
case 17:u=k.xG(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bDC.prototype={
$1(d){return this.cAH(d)},
cAH(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.Az(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xG(s)
if(!(r.b!=null||r.c)||!r.a.n6(t.b))throw A.o(new B.Dl())
w=3
return A.c(q.Zu(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:141}
B.bDI.prototype={
$1(d){return this.cAM(d)},
cAM(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.Az(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.aty(r.LS(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.rr(d,q+":launch",s),$async$$1)
case 4:u=r.LS(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bDE.prototype={
$1(d){return this.cAJ(d)},
cAJ(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bxf(f.c,e)
s=g.y
s===$&&A.e()
r=g.Az(a0,s+":purchase","purchase")
if(r!=null){q=g.xG(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.va())
p=g.Az(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.LS(p).a.n6(f))throw A.o(new B.Dl())
d=p
w=5
return A.c(g.aty(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.rr(a0,s+":launch",p),$async$$1)
case 6:o=g.LS(p).b
if(!t.c)throw A.o(new B.acz())
if((o==null?null:C.jP.t(0,o.a))===!0)throw A.o(new B.Dm())
case 4:w=7
return A.c(g.rb(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dm())
if(q)p=A.a_(["version",1,"scope",s,"kind","launch","intent",f.A()],x.N,x.z)
w=8
return A.c(g.rr(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.AA("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.cc6(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.va())}s=A.m6(D.av.D(m.w))
g=g.w.$0().a3()
q=B.eq8(A.b6(s.i(0,"launchUrl")))
if(q==null)q=A.U(C.aOl)
k=B.ayj(s.i(0,"launchExpiresAt"))
j=B.ayj(s.i(0,"sessionExpiresAt"))
i=q.gkD().i(0,"startapp")
h=!0
if(J.p(s.i(0,"gameKey"),e))if(J.p(s.i(0,"clientSessionId"),f))if(k.ia(g))if(j.ia(g))if(!k.ia(j))if(i!=null){g=J.bV(i)
if(g.gJ(i)===1){f=A.az("^[1-9][0-9]{0,18}_[A-Za-z0-9_-]{43}$",!0,!1,!1,!1)
g=g.gdf(i)
g=!f.b.test(g)}else g=h}else g=h
else g=h
else g=h
else g=h
else g=h
else g=h
if(g)A.U(C.aOM)
u=new B.a_x(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bDD.prototype={
$1(d){return this.cAI(d)},
cAI(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.Az(d,m+":launch","launch")
if(s==null||!n.LS(s).a.n6(t.b))throw A.o(new B.Dl())
r=t.b
w=3
return A.c(n.AA("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.va())
p=A.m6(D.av.D(q.w))
o=B.e1r(p,r)
if(!C.jP.t(0,o.a))throw A.o(new B.va())
s.h(0,"state",p)
w=4
return A.c(n.rr(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bDB.prototype={
$1(d){return this.cAG(d)},
cAG(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.Az(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LS(s)
if(r.a.n6(t.b)){q=r.b
q=(q==null?null:C.jP.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Dl())
w=3
return A.c(p.Zu(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:141}
B.bUS.prototype={
$1(d){return d.length!==0},
$S:9}
B.bUT.prototype={
$1(d){return d[0].toUpperCase()+D.b.bv(d,1)},
$S:38};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pS,B.Dl,B.va,B.a_z,B.Dm,B.acz,B.F0,B.Mb,B.a_A,B.aS9,B.bDw,B.bDx,B.acy,B.a_y,B.a_x,B.afN,B.SZ,B.aH8])
w(A.bu,[B.bDL,B.bDM,B.bDN,B.bDz,B.bDA])
w(A.bt,[B.bDG,B.bDJ,B.bDH,B.bDC,B.bDI,B.bDE,B.bDD,B.bDB,B.bUS,B.bUT])})()
A.b0(b.typeUniverse,JSON.parse('{"pS":{"bk":[]},"Dl":{"bk":[]},"va":{"bk":[]},"a_z":{"bk":[]},"Dm":{"bk":[]},"acz":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bY<n>"),b:w("a_x"),X:w("a_y"),f:w("v<A>"),U:w("v<il>"),P:w("a2<n,@>"),q:w("re"),O:w("aS9"),L:w("F0"),N:w("n"),z:w("@"),C:w("a_A?"),h:w("a2<n,@>?"),p:w("SZ?"),g:w("Mb?"),t:w("F0?"),H:w("~")}})();(function constants(){C.aNR=new A.c4("Invalid product identifier",null,null)
C.aO1=new A.c4("Invalid game access state",null,null)
C.aOh=new A.c4("Product identifier out of range",null,null)
C.aOl=new A.c4("Untrusted game handoff",null,null)
C.aOp=new A.c4("Invalid currency",null,null)
C.aOA=new A.c4("Game launch state mismatch",null,null)
C.QY=new A.c4("Invalid timestamp",null,null)
C.aOG=new A.c4("Game purchase receipt mismatch",null,null)
C.aOM=new A.c4("Game launch handoff mismatch",null,null)
C.QZ=new A.c4("Invalid game operation identifier",null,null)
C.aOQ=new A.c4("Invalid product game access descriptor",null,null)
C.R2=new A.c4("Invalid game key",null,null)
C.aOX=new A.c4("Invalid duration",null,null)
C.bER=new A.fJ([400,409,422],A.C("fJ<y>"))
C.boM={ENDED:0,EXPIRED:1,DENIED:2}
C.jP=new A.bY(C.boM,3,x.M)
C.boQ={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFv=new A.bY(C.boQ,5,x.M)
C.bnO={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGe=new A.bY(C.bnO,11,x.M)
C.bpo={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGj=new A.bY(C.bpo,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"faJ","etd",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["Ftw/KrUtnbhfhnOWKK4EB0kxuSo="]=a.current})($__dart_deferred_initializers__);