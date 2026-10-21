((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ecL(d,e,f,g,h,i){var w,v=B.wm(i),u=e.nn(),t=A.iL(d,g)
v=new B.a_y(e,u,t,v,f,g,A.XH(),A.eoG())
w=d.c
if(!(w instanceof A.fM)||w.b!==e)A.U(D.x)
v.y=B.ecM(d,u,i)
return v},
ecM(d,e,f){var w=e.e
return"game_access_v2_"+D.d5.cg(D.bh.cg(D.G.az(A.a([d.a,w.a,w.b,w.c,f],x.f),null))).l(0)},
bDz(d,e,f,g){var w=null
return B.eDz(d,e,f,g)},
eDz(d,e,f,g){var w=0,v=A.l(x.C),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDz=A.h(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:l=null
k=d.c
if(!(k instanceof A.fM)||k.b!==e)throw A.o(D.x)
o=e.nn()
r=B.wm(g)
q=B.ecM(d,o,r)
p=new B.bDA(f,e,o)
p.$0()
t=4
w=7
return A.c(A.GH(q,new B.bDC(p,l,q,r,e,d,f),x.C),$async$bDz)
case 7:n=i
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
if(A.u(j) instanceof A.wD)throw A.o(new B.pT())
else throw j
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$bDz,v)},
pT:function pT(){},
Dl:function Dl(){},
v9:function v9(){},
a_x:function a_x(){},
Dm:function Dm(){},
acy:function acy(){},
F_:function F_(d,e,f){this.a=d
this.b=e
this.c=f},
M9:function M9(d,e){this.a=d
this.b=e},
a_y:function a_y(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=$},
bDA:function bDA(d,e,f){this.a=d
this.b=e
this.c=f},
bDB:function bDB(d,e,f){this.a=d
this.b=e
this.c=f},
bDC:function bDC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bDo:function bDo(d){this.a=d},
bDp:function bDp(d,e,f){this.a=d
this.b=e
this.c=f},
bDv:function bDv(d){this.a=d},
bDy:function bDy(d){this.a=d},
bDw:function bDw(d,e){this.a=d
this.b=e},
bDr:function bDr(d,e){this.a=d
this.b=e},
bDx:function bDx(d){this.a=d},
bDt:function bDt(d,e,f){this.a=d
this.b=e
this.c=f},
bDs:function bDs(d,e){this.a=d
this.b=e},
bDq:function bDq(d,e){this.a=d
this.b=e},
e6f(d){var w=A.az(y.a,!0,!1,!1,!1)
if(!w.b.test(d))throw A.o(C.R1)
return d.toLowerCase()},
wm(d){var w,v
if(A.eH(d))d=D.h.l(d)
if(typeof d=="string"){w=A.az("^[1-9][0-9]{0,15}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.aNO)
v=A.aZz(d,null)
if(v.bm(0,A.oA(9007199254740991))>0)throw A.o(C.aOe)
return v.dd(0)},
dTP(d){var w
if(typeof d!="string")throw A.o(D.QZ)
w=A.jp(d)
return w.jM(w.b)},
dOg(d){var w
if(typeof d=="string"){w=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R5)
return d},
ayf(d){var w,v
if(typeof d=="string"){w=A.az("^\\d{4}-\\d\\d-\\d\\dT",!0,!1,!1,!1)
w=!w.b.test(d)}else w=!0
if(w)throw A.o(C.R0)
v=A.j5(d)
if(v==null)throw A.o(C.R0)
return B.dUQ(v)},
ecI(d,e,f,g,h){var w=B.e6f(g),v=B.wm(h),u=B.dOg(f),t=B.dTP(d)
if(e<=0)A.U(C.aOU)
return new B.bDl(w,u,t,v,e)},
ecJ(d){var w,v,u
if(!J.p(d.i(0,"currency"),"USDT"))throw A.o(C.aOm)
w=A.bb(d.i(0,"operationId"))
v=B.wm(d.i(0,"productId"))
u=A.bb(d.i(0,"gameKey"))
return B.ecI(A.bb(d.i(0,"depositAmount")),B.wm(d.i(0,"entitlementDurationDays")),u,w,v)},
e1i(d,e){var w=A.bb(d.i(0,"status"))
B.ayf(d.i(0,"completedAt"))
if(!J.p(d.i(0,"operationId"),e.a)||B.wm(d.i(0,"productId"))!==e.d||!J.p(d.i(0,"currency"),"USDT")||B.dTP(d.i(0,"depositAmount"))!==e.c||!C.bGj.t(0,w))A.U(C.aOD)
return new B.bDm(w)},
eDw(d){var w=A.bb(d.i(0,"clientSessionId")),v=B.wm(d.i(0,"productId")),u=A.bb(d.i(0,"gameKey"))
w=B.e6f(w)
v=B.wm(v)
return new B.acx(w,B.dOg(u),v)},
e1h(d,e){var w,v="launchExpiresAt",u=A.bb(d.i(0,"status")),t=A.fm(d.i(0,"launchConsumed")),s=B.ayf(d.i(0,"sessionExpiresAt"))
if(d.i(0,v)!=null)B.ayf(d.i(0,v))
if(d.i(0,"endedAt")!=null)B.ayf(d.i(0,"endedAt"))
w=A.b6(d.i(0,"denyReason"))
if(!J.p(d.i(0,"gameKey"),e.b)||!J.p(d.i(0,"clientSessionId"),e.a)||!C.bFv.t(0,u)||d.ao("launchUrl"))A.U(C.aOx)
return new B.a_w(u,t,s,w)},
aS4:function aS4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l},
bDl:function bDl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bDm:function bDm(d){this.a=d},
acx:function acx(d,e,f){this.a=d
this.b=e
this.c=f},
a_w:function a_w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
a_v:function a_v(d,e,f){this.a=d
this.b=e
this.c=f},
afM:function afM(d){this.a=d},
eIm(d,e){var w=d==null,v=w?null:D.b.F(d.b),u=!0
if(!w)if(e>0)if(d.a===e)if(v!=null){w=$.et0()
if(w.b.test(v))if(d.c===D.Rd)if(d.d===D.Rf)if(d.f!==D.Re){w=d.r
w=!isFinite(w)||w<0||d.w<=0}else w=u
else w=u
else w=u
else w=u}else w=u
else w=u
else w=u
else w=u
if(w)return null
return new B.SW(v,d.e,d.f.a,d.r,d.w)},
SW:function SW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
bUO:function bUO(){},
bUP:function bUP(){},
aH3:function aH3(d){this.a=d},
epW(d){var w,v,u=d==null?null:D.b.F(d)
if(u==null||u.length===0)return null
w=A.l8(u)
v=!0
if(w!=null)if(w.gf2().toLowerCase()==="https")if(w.gnN().length===0)v=w.ga6g()&&w.gze()!==443||!D.acL.t(0,w.gi1().toLowerCase())||w.gwI().length===0
if(v)return null
return w.cyt("telegram.me")},
dUQ(d){return d.c?d:A.eaR(A.bL(d),A.bQ(d),A.cv(d),A.iG(d),A.oi(d),A.SK(d),A.aNO(d),d.b)}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[185],B)
C=c[781]
B.pT.prototype={$ibk:1}
B.Dl.prototype={$ibk:1}
B.v9.prototype={$ibk:1}
B.a_x.prototype={$ibk:1}
B.Dm.prototype={$ibk:1}
B.acy.prototype={$ibk:1}
B.F_.prototype={}
B.M9.prototype={}
B.a_y.prototype={
AA(){return A.jl(new B.bDo(this))},
bxg(d,e){if(d!==this.d||e!==this.e)throw A.o(new B.Dl())},
AC(d,e){return this.dy2(d,e)},
dy2(d,e){var w=0,v=A.l(x.q),u,t=this,s,r
var $async$AC=A.h(function(f,g){if(f===1)return A.i(g,v)
for(;;)switch(w){case 0:t.AA()
s=x.N
w=3
return A.c(t.c.X("/game-access/products/"+t.d+"/web-v2"+e,d,A.a([],x.U),null,A.a_(["Cache-Control","no-store"],s,s),A.q(s,s),null).f1(D.fz),$async$AC)
case 3:r=g
t.AA()
u=r
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$AC,v)},
cc6(d){var w,v,u
try{w=A.m4(D.av.D(d.w)).i(0,"code")
v=C.bGe.t(0,w)?A.bb(w):null
return v}catch(u){return null}},
ra(){var w=0,v=A.l(x.O),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$ra=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AC("GET",""),$async$ra)
case 3:i=e
h=i.b
if(h!==200){s=t.cc6(i)
throw A.o(A.ah(h,s==null?"Game access unavailable":s))}h=A.m4(D.av.D(i.w))
s=B.dTP(h.i(0,"requiredBalance"))
r=B.dTP(h.i(0,"currentBalance"))
q=A.fm(h.i(0,"eligible"))
p=A.fm(h.i(0,"hasActiveEntitlement"))
o=A.fm(h.i(0,"purchaseAvailable"))
n=A.fm(h.i(0,"launchAvailable"))
m=A.bb(h.i(0,"currency"))
l=A.b6(h.i(0,"denyReason"))
A.b6(h.i(0,"purchaseUnavailableReasonCode"))
A.b6(h.i(0,"launchUnavailableReasonCode"))
k=B.wm(h.i(0,"entitlementDurationDays"))
j=!0
if(B.wm(h.i(0,"productId"))===t.d)if(B.dOg(h.i(0,"gameKey"))===t.e)if(m==="USDT")if(J.p(h.i(0,"accessType"),"REFUNDABLE_TG_GAME"))if(J.p(h.i(0,"deliveryChannel"),"TELEGRAM_MINI_APP")){if(o)h=!q||p
else h=!1
if(!h)h=n&&!p
else h=j}else h=j
else h=j
else h=j
else h=j
else h=j
if(h)A.U(C.aNZ)
u=new B.aS4(s,r,m,l,q,p,o,n,k)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$ra,v)},
vD(d,e){return this.dmU(d,e,e)},
dmU(d,e,f){var w=0,v=A.l(f),u,t=2,s=[],r=this,q,p,o
var $async$vD=A.h(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:r.AA()
t=4
q=r.y
q===$&&A.e()
w=7
return A.c(A.GH(q,new B.bDp(r,d,e),e),$async$vD)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
if(A.u(o) instanceof A.wD)throw A.o(new B.pT())
else throw o
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$vD,v)},
AB(d,e,f){var w,v,u,t,s
try{w=A.b6(d.a.i(0,e))
if(w==null)return null
if(w.length>32768)throw A.o(D.ca)
v=x.P.a(D.G.bH(w,null))
if(J.p(J.ax(v,"version"),1)){u=J.ax(v,"scope")
t=this.y
t===$&&A.e()
u=!J.p(u,t)||!J.p(J.ax(v,"kind"),f)}else u=!0
if(u)throw A.o(D.ca)
if(f==="purchase")this.xE(v)
else this.LQ(v)
return v}catch(s){throw A.o(new B.pT())}},
xE(d){var w,v,u=x.P,t=B.ecJ(u.a(d.i(0,"intent")))
this.bxg(t.d,t.b)
w=A.fm(d.i(0,"rejected"))
v=d.i(0,"receipt")
if(w&&v!=null)throw A.o(D.ca)
return new B.F_(t,v==null?null:B.e1i(u.a(v),t),w)},
LQ(d){var w,v=x.P,u=B.eDw(v.a(d.i(0,"intent")))
this.bxg(u.c,u.b)
w=d.i(0,"state")
return new B.M9(u,w==null?null:B.e1h(v.a(w),u))},
rq(d,e,f){return this.dMt(d,e,f)},
dMt(d,e,f){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$rq=A.h(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:s.AA()
u=3
r=D.G.az(f,null)
w=6
return A.c(d.h9("String",e,r),$async$rq)
case 6:if(!h)throw A.o(new B.pT())
w=7
return A.c(d.hB(),$async$rq)
case 7:q=A.b6(d.a.i(0,e))
p=r
if(q==null?p!=null:q!==p)throw A.o(new B.pT())
u=1
w=5
break
case 3:u=2
n=t.pop()
throw A.o(new B.pT())
w=5
break
case 2:w=1
break
case 5:s.AA()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$rq,v)},
Zu(d,e){return this.dxy(d,e)},
dxy(d,e){var w=0,v=A.l(x.H),u=1,t=[],s=this,r,q
var $async$Zu=A.h(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:s.AA()
u=3
w=6
return A.c(d.M(0,e),$async$Zu)
case 6:if(!g)throw A.o(new B.pT())
w=7
return A.c(d.hB(),$async$Zu)
case 7:if(d.a.ao(e))throw A.o(new B.pT())
u=1
w=5
break
case 3:u=2
q=t.pop()
throw A.o(new B.pT())
w=5
break
case 2:w=1
break
case 5:s.AA()
return A.j(null,v)
case 1:return A.i(t.at(-1),v)}})
return A.k($async$Zu,v)},
atz(d){return this.dne(d)},
dne(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$atz=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AC("GET","/operations/"+d.a),$async$atz)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q!==200)throw A.o(new B.v9())
s=A.m4(D.av.D(r.w))
B.e1i(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$atz,v)},
e6k(){return this.vD(new B.bDv(this),x.t)},
e7H(){return this.vD(new B.bDy(this),x.t)},
c_y(d){return this.vD(new B.bDw(this,d),x.L)},
dMO(d){return this.vD(new B.bDr(this,d),x.H)},
aty(d){return this.dnd(d)},
dnd(d){var w=0,v=A.l(x.h),u,t=this,s,r,q
var $async$aty=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:w=3
return A.c(t.AC("GET","/sessions/"+d.a),$async$aty)
case 3:r=f
q=r.b
if(q===404){u=null
w=1
break}if(q===400&&J.p(A.m4(D.av.D(r.w)).i(0,"code"),"SESSION_NOT_FOUND")){u=null
w=1
break}if(q!==200)throw A.o(new B.v9())
s=A.m4(D.av.D(r.w))
B.e1h(s,d)
u=s
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$aty,v)},
cy5(){return this.vD(new B.bDx(this),x.g)},
e1d(d,e){return this.vD(new B.bDt(this,d,e),x.b)},
dXA(d){return this.vD(new B.bDs(this,d),x.X)},
dMN(d){return this.vD(new B.bDq(this,d),x.H)}}
B.aS4.prototype={}
B.bDl.prototype={
A(){var w=this
return A.a_(["operationId",w.a,"productId",""+w.d,"gameKey",w.b,"currency","USDT","depositAmount",w.c,"entitlementDurationDays",w.e],x.N,x.z)},
n5(d){var w=this
return w.a===d.a&&w.d===d.d&&w.b===d.b&&w.c===d.c&&w.e===d.e}}
B.bDm.prototype={}
B.acx.prototype={
A(){return A.a_(["clientSessionId",this.a,"productId",""+this.c,"gameKey",this.b],x.N,x.z)},
n5(d){return this.a===d.a&&this.c===d.c&&this.b===d.b}}
B.a_w.prototype={}
B.a_v.prototype={}
B.afM.prototype={
pV(d){return this.cCG(d)},
cCG(d){var w=0,v=A.l(x.p),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$pV=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(r.a.pV(d),$async$pV)
case 7:q=f
p=B.eIm(q,d)
if(p==null)throw A.o(C.aON)
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
return A.k($async$pV,v)}}
B.SW.prototype={
gctM(){var w=D.b.mD(this.b,A.az("[-_]",!0,!1,!1,!1)),v=A.V(w)
return new A.e9(new A.ap(w,new B.bUO(),v.k("ap<1>")),new B.bUP(),v.k("e9<1,n>")).b6(0," ")}}
B.aH3.prototype={
p(d,e){var w
if(e==null)return!1
if(this!==e)w=e instanceof B.aH3&&e.a===this.a
else w=!0
return w},
gj(d){return D.b.gj(this.a)},
l(d){return"GameAccessProductPurchaseRequest[idempotencyKey="+this.a+"]"},
A(){var w=A.q(x.N,x.z)
w.h(0,"idempotencyKey",this.a)
return w}}
var z=a.updateTypes(["B<F_?>(fK)","B<a_y?>()","B<F_>(fK)","B<M9?>(fK)","B<a_v>(fK)","B<a_w>(fK)"])
B.bDA.prototype={
$0(){return A.jl(new B.bDB(this.a,this.b,this.c))},
$S:0}
B.bDB.prototype={
$0(){return this.a.$0()&&this.b.dB(this.c)},
$S:1}
B.bDC.prototype={
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
if(n.length>32768)throw A.o(D.ca)
m=f.a(D.G.bH(n,null))
if(!J.p(J.ax(m,"version"),1)||!J.p(J.ax(m,"scope"),e)||!J.p(J.ax(m,"kind"),o))throw A.o(D.ca)
l=f.a(J.ax(m,"intent"))
k=J.p(o,"purchase")?B.ecJ(l):null
if(J.p(o,"launch")){a1=l
a2=A.bb(a1.i(0,"clientSessionId"))
a3=B.wm(a1.i(0,"productId"))
a1=A.bb(a1.i(0,"gameKey"))
a4=A.az(y.a,!0,!1,!1,!1)
if(!a4.b.test(a2))A.U(C.R1)
a3=B.wm(a3)
a4=A.az("^[a-z0-9][a-z0-9_-]{0,63}$",!0,!1,!1,!1)
a4=!a4.b.test(a1)
if(a4)A.U(C.R5)
a5=new B.acx(a2.toLowerCase(),a1,a3)}else a5=null
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
if(A.u(a9) instanceof A.a47)throw a9
else throw A.o(new B.pT())
w=6
break
case 3:w=2
break
case 6:a8.$0()
if(q==null){u=null
w=1
break}u=B.ecL(r.f,r.e,q,r.r,r.b,r.d)
w=1
break
case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$$0,v)},
$S:z+1}
B.bDo.prototype={
$0(){var w=this.a
return w.f.$0()&&w.a.dB(w.b)},
$S:1}
B.bDp.prototype={
$0(){return this.cAD(this.c)},
cAD(d){var w=0,v=A.l(d),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=r.a
o.AA()
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
throw A.o(new B.pT())
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
B.bDv.prototype={
$1(d){return this.cAI(d)},
cAI(d){var w=0,v=A.l(x.t),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.AB(d,q+":purchase","purchase")
u=s==null?null:r.xE(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDy.prototype={
$1(d){return this.cAL(d)},
cAL(d){var w=0,v=A.l(x.t),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.AB(d,o+":purchase","purchase")
if(s==null){u=null
w=1
break}r=p.xE(s)
if(r.b!=null||r.c){u=r
w=1
break}w=3
return A.c(p.atz(r.a),$async$$1)
case 3:q=f
w=q!=null?4:5
break
case 4:s.h(0,"receipt",q)
w=6
return A.c(p.rq(d,o+":purchase",s),$async$$1)
case 6:case 5:u=p.xE(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+0}
B.bDw.prototype={
$1(d){return this.cAJ(d)},
cAJ(d){var w=0,v=A.l(x.L),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:k=t.a
j=t.b
k.bxg(j.d,j.b)
s=k.y
s===$&&A.e()
r=k.AB(d,s+":purchase","purchase")
q=r==null
w=!q?3:4
break
case 3:p=k.xE(r)
if(!p.a.n5(j))throw A.o(new B.Dl())
if(p.b!=null||p.c){u=p
w=1
break}w=5
return A.c(k.atz(j),$async$$1)
case 5:o=f
w=o!=null?6:7
break
case 6:r.h(0,"receipt",o)
w=8
return A.c(k.rq(d,s+":purchase",r),$async$$1)
case 8:u=k.xE(r)
w=1
break
case 7:case 4:w=9
return A.c(k.ra(),$async$$1)
case 9:n=f
m=!0
if(n.x)if(n.r)if(!n.w){m=j.c
m=n.a!==m||n.z!==j.e||A.jp(n.b).bm(0,A.jp(m))<0}if(m)throw A.o(new B.a_x())
if(q)r=A.a_(["version",1,"scope",s,"kind","purchase","intent",j.A(),"rejected",!1],x.N,x.z)
w=10
return A.c(k.rq(d,s+":purchase",r),$async$$1)
case 10:w=11
return A.c(k.AC("PUT","/operations/"+j.a),$async$$1)
case 11:l=f
m=l.b
w=m!==200?12:13
break
case 12:w=q&&C.bER.t(0,m)?14:15
break
case 14:r.h(0,"rejected",!0)
w=16
return A.c(k.rq(d,s+":purchase",r),$async$$1)
case 16:u=k.xE(r)
w=1
break
case 15:throw A.o(new B.v9())
case 13:o=A.m4(D.av.D(l.w))
B.e1i(o,j)
r.h(0,"receipt",o)
w=17
return A.c(k.rq(d,s+":purchase",r),$async$$1)
case 17:u=k.xE(r)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+2}
B.bDr.prototype={
$1(d){return this.cAF(d)},
cAF(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:q=t.a
p=q.y
p===$&&A.e()
s=q.AB(d,p+":purchase","purchase")
if(s==null){w=1
break}r=q.xE(s)
if(!(r.b!=null||r.c)||!r.a.n5(t.b))throw A.o(new B.Dl())
w=3
return A.c(q.Zu(d,p+":purchase"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:138}
B.bDx.prototype={
$1(d){return this.cAK(d)},
cAK(d){var w=0,v=A.l(x.g),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:r=t.a
q=r.y
q===$&&A.e()
s=r.AB(d,q+":launch","launch")
if(s==null){u=null
w=1
break}p=s
w=3
return A.c(r.aty(r.LQ(s).a),$async$$1)
case 3:p.h(0,"state",f)
w=4
return A.c(r.rq(d,q+":launch",s),$async$$1)
case 4:u=r.LQ(s)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+3}
B.bDt.prototype={
$1(d){return this.cAH(d)},
cAH(a0){var w=0,v=A.l(x.b),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.h(function(a1,a2){if(a1===1)return A.i(a2,v)
for(;;)switch(w){case 0:g=t.a
f=t.b
e=f.b
g.bxg(f.c,e)
s=g.y
s===$&&A.e()
r=g.AB(a0,s+":purchase","purchase")
if(r!=null){q=g.xE(r)
q=!(q.b!=null||q.c)}else q=!1
if(q)throw A.o(new B.v9())
p=g.AB(a0,s+":launch","launch")
q=p==null
w=!q?3:4
break
case 3:if(!g.LQ(p).a.n5(f))throw A.o(new B.Dl())
d=p
w=5
return A.c(g.aty(f),$async$$1)
case 5:d.h(0,"state",a2)
w=6
return A.c(g.rq(a0,s+":launch",p),$async$$1)
case 6:o=g.LQ(p).b
if(!t.c)throw A.o(new B.acy())
if((o==null?null:C.jO.t(0,o.a))===!0)throw A.o(new B.Dm())
case 4:w=7
return A.c(g.ra(),$async$$1)
case 7:n=a2
if(!n.y||!n.w||!n.r)throw A.o(new B.Dm())
if(q)p=A.a_(["version",1,"scope",s,"kind","launch","intent",f.A()],x.N,x.z)
w=8
return A.c(g.rq(a0,s+":launch",p),$async$$1)
case 8:f=f.a
w=9
return A.c(g.AC("POST","/sessions/"+f),$async$$1)
case 9:m=a2
s=m.b
if(s!==200){l=g.cc6(m)
if(s===400&&l!=null)throw A.o(A.ah(400,l))
throw A.o(new B.v9())}s=A.m4(D.av.D(m.w))
g=g.w.$0().a3()
q=B.epW(A.b6(s.i(0,"launchUrl")))
if(q==null)q=A.U(C.aOi)
k=B.ayf(s.i(0,"launchExpiresAt"))
j=B.ayf(s.i(0,"sessionExpiresAt"))
i=q.gkD().i(0,"startapp")
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
if(g)A.U(C.aOJ)
u=new B.a_v(q,k,j)
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+4}
B.bDs.prototype={
$1(d){return this.cAG(d)},
cAG(d){var w=0,v=A.l(x.X),u,t=this,s,r,q,p,o,n,m
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:n=t.a
m=n.y
m===$&&A.e()
s=n.AB(d,m+":launch","launch")
if(s==null||!n.LQ(s).a.n5(t.b))throw A.o(new B.Dl())
r=t.b
w=3
return A.c(n.AC("POST","/sessions/"+r.a+"/end"),$async$$1)
case 3:q=f
if(q.b!==200)throw A.o(new B.v9())
p=A.m4(D.av.D(q.w))
o=B.e1h(p,r)
if(!C.jO.t(0,o.a))throw A.o(new B.v9())
s.h(0,"state",p)
w=4
return A.c(n.rq(d,m+":launch",s),$async$$1)
case 4:u=o
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:z+5}
B.bDq.prototype={
$1(d){return this.cAE(d)},
cAE(d){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
for(;;)switch(w){case 0:p=t.a
o=p.y
o===$&&A.e()
s=p.AB(d,o+":launch","launch")
if(s==null){w=1
break}r=p.LQ(s)
if(r.a.n5(t.b)){q=r.b
q=(q==null?null:C.jO.t(0,q.a))!==!0}else q=!0
if(q)throw A.o(new B.Dl())
w=3
return A.c(p.Zu(d,o+":launch"),$async$$1)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:138}
B.bUO.prototype={
$1(d){return d.length!==0},
$S:9}
B.bUP.prototype={
$1(d){return d[0].toUpperCase()+D.b.bv(d,1)},
$S:36};(function inheritance(){var w=a.inheritMany
w(A.A,[B.pT,B.Dl,B.v9,B.a_x,B.Dm,B.acy,B.F_,B.M9,B.a_y,B.aS4,B.bDl,B.bDm,B.acx,B.a_w,B.a_v,B.afM,B.SW,B.aH3])
w(A.bt,[B.bDA,B.bDB,B.bDC,B.bDo,B.bDp])
w(A.bu,[B.bDv,B.bDy,B.bDw,B.bDr,B.bDx,B.bDt,B.bDs,B.bDq,B.bUO,B.bUP])})()
A.b0(b.typeUniverse,JSON.parse('{"pT":{"bk":[]},"Dl":{"bk":[]},"v9":{"bk":[]},"a_x":{"bk":[]},"Dm":{"bk":[]},"acy":{"bk":[]}}'))
var y={a:"^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"}
var x=(function rtii(){var w=A.C
return{M:w("bY<n>"),b:w("a_v"),X:w("a_w"),f:w("v<A>"),U:w("v<ij>"),P:w("a2<n,@>"),q:w("re"),O:w("aS4"),L:w("F_"),N:w("n"),z:w("@"),C:w("a_y?"),h:w("a2<n,@>?"),p:w("SW?"),g:w("M9?"),t:w("F_?"),H:w("~")}})();(function constants(){C.aNO=new A.c4("Invalid product identifier",null,null)
C.aNZ=new A.c4("Invalid game access state",null,null)
C.aOe=new A.c4("Product identifier out of range",null,null)
C.aOi=new A.c4("Untrusted game handoff",null,null)
C.aOm=new A.c4("Invalid currency",null,null)
C.aOx=new A.c4("Game launch state mismatch",null,null)
C.R0=new A.c4("Invalid timestamp",null,null)
C.aOD=new A.c4("Game purchase receipt mismatch",null,null)
C.aOJ=new A.c4("Game launch handoff mismatch",null,null)
C.R1=new A.c4("Invalid game operation identifier",null,null)
C.aON=new A.c4("Invalid product game access descriptor",null,null)
C.R5=new A.c4("Invalid game key",null,null)
C.aOU=new A.c4("Invalid duration",null,null)
C.bER=new A.fJ([400,409,422],A.C("fJ<y>"))
C.boK={ENDED:0,EXPIRED:1,DENIED:2}
C.jO=new A.bY(C.boK,3,x.M)
C.boO={CREATED:0,ACTIVE:1,ENDED:2,EXPIRED:3,DENIED:4}
C.bFv=new A.bY(C.boO,5,x.M)
C.bnM={TELEGRAM_ACCOUNT_NOT_LINKED:0,INSUFFICIENT_BALANCE:1,WALLET_NOT_ACTIVE:2,REFUND_PENDING:3,ACCESS_EXPIRED:4,ACCESS_REQUIRED:5,SESSION_ENDED:6,SESSION_EXPIRED:7,SESSION_NOT_FOUND:8,SESSION_IDENTITY_MISMATCH:9,GAME_NOT_AVAILABLE:10}
C.bGe=new A.bY(C.bnM,11,x.M)
C.bpm={ACTIVE:0,PENDING_REFUND:1,REVOKED:2,EXPIRED:3,CANCELLED:4}
C.bGj=new A.bY(C.bpm,5,x.M)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"fau","et0",()=>A.az("^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$",!0,!1,!1,!1))})()};
(a=>{a["4vq8/7Hb9zVWQRqIDDaOjv879I8="]=a.current})($__dart_deferred_initializers__);