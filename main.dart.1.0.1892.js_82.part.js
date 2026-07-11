((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
eeu(d){var w=b.G,v=A.f0(new B.daA(w.window.location.origin,d))
w.window.addEventListener("message",v)
return new B.daz(v)},
eev(d){var w=b.G,v=A.f0(new B.daC(w.window.location.origin,d))
w.window.addEventListener("message",v)
return new B.daB(v)},
dlZ(d){B.dkX(A.bB(d),b.G.window.location.origin)},
dkX(d,e){var w,v,u,t,s=b.G.document.querySelectorAll("iframe")
for(w=0;w<s.length;++w){v=s.item(w)
if(v!=null){u=A.iv(v,"HTMLIFrameElement")
u=!u}else u=!0
if(u)continue
t=v.src
if(C.b.aS(t,e))u=!A.ns(t,"/games/",0)
else u=!0
if(u)continue
u=v.contentWindow
if(u!=null)u.postMessage(d,e)}},
daA:function daA(d,e){this.a=d
this.b=e},
daz:function daz(d){this.a=d},
daC:function daC(d,e){this.a=d
this.b=e},
daD:function daD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
daB:function daB(d){this.a=d},
adG:function adG(d,e,f){this.c=d
this.d=e
this.a=f},
aY1:function aY1(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cOz:function cOz(d){this.a=d},
cOA:function cOA(d){this.a=d},
e0w(d){return new B.G4(d,null)},
G4:function G4(d,e){this.c=d
this.a=e},
anD:function anD(d,e,f,g,h){var _=this
_.d=$
_.e=null
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.ay=_.ax=_.at=_.as=_.Q=_.z=null
_.ch=!0
_.cy=_.cx=_.CW=!1
_.c=_.a=_.dy=_.dx=_.db=null},
cOK:function cOK(d,e){this.a=d
this.b=e},
cOL:function cOL(d,e){this.a=d
this.b=e},
cOM:function cOM(d){this.a=d},
cOC:function cOC(d,e){this.a=d
this.b=e},
cOD:function cOD(d,e){this.a=d
this.b=e},
cON:function cON(){},
cOF:function cOF(d){this.a=d},
cOG:function cOG(d){this.a=d},
cOH:function cOH(d,e){this.a=d
this.b=e},
cOI:function cOI(d,e){this.a=d
this.b=e},
cOJ:function cOJ(d){this.a=d},
cOP:function cOP(d){this.a=d},
cOQ:function cOQ(d,e){this.a=d
this.b=e},
cOR:function cOR(d,e,f){this.a=d
this.b=e
this.c=f},
cOS:function cOS(d,e){this.a=d
this.b=e},
cOT:function cOT(d){this.a=d},
cOB:function cOB(d){this.a=d},
cOE:function cOE(d,e,f){this.a=d
this.b=e
this.c=f},
cOO:function cOO(d){this.a=d},
ag0:function ag0(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[89]
B.adG.prototype={
T(){return new B.aY1()}}
B.aY1.prototype={
a0(){var w,v,u,t=this
t.a6()
w="slot-game-frame-"+1000*Date.now()
t.d!==$&&A.b4()
t.d=w
v=b.G.document.createElement("iframe")
v.style.border="0"
v.style.width="100%"
v.style.height="100%"
v.style.display="block"
v.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
t.e!==$&&A.b4()
t.e=v
u=A.f0(new B.cOz(t.a.d))
t.f=u
v.addEventListener("load",u)
v.src=t.a.c
$.b2k()
$.Cx().Zg(w,new B.cOA(t),!0)},
aM(d){var w,v
this.b1(d)
w=this.a.c
if(d.c!==w){v=this.e
v===$&&A.h()
v.src=w}},
q(){var w,v=this.f
if(v!=null){w=this.e
w===$&&A.h()
w.removeEventListener("load",v)}this.a7()},
u(d){var w=this.d
w===$&&A.h()
return A.dhM(null,C.Fm,w)}}
B.G4.prototype={
T(){var w=$.aA()
return new B.anD(w.$1$0(x.w),w.$1$0(x.r),w.$1$0(x.A),w.$1$0(x.G),w.$1$0(x.x))}}
B.anD.prototype={
a0(){var w,v=this
v.a6()
w=v.a.c
w=A.dz1().j(0,w)
if(w==null)w=D.bKr
v.d!==$&&A.b4()
v.d=w
v.dx=B.eeu(v.gbtP())
v.dy=B.eev(v.gcNz())
v.aer()
v.at=v.afK()
v.DF()},
aer(){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$aer=A.i(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.c(s.r.il(),$async$aer)
case 6:r=e
if(s.c!=null&&r!=null){s.p(new B.cOK(s,r))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(g){q=A.u(g)
$.m2().k(C.aE,"localStorage jwt write failed (private mode?)",q,null)}}u=1
w=5
break
case 3:u=2
i=t.pop()
p=A.u(i)
$.m2().k(C.q,"_fetchUserInfo: getValidToken failed",p,null)
w=5
break
case 2:w=1
break
case 5:u=8
w=11
return A.c(s.f.hg(!0),$async$aer)
case 11:o=e
if(s.c!=null){k=o
j=k==null?null:k.f
n=j==null?0:j
s.p(new B.cOL(s,n))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a3p(n,4))}catch(g){m=A.u(g)
$.m2().k(C.aE,"localStorage balance write failed",m,null)}}u=1
w=10
break
case 8:u=7
h=t.pop()
if(s.c!=null)s.p(new B.cOM(s))
w=10
break
case 7:w=1
break
case 10:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$aer,v)},
xH(){return this.csH()},
csH(){var w=0,v=A.m(x.P),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$xH=A.i(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a1={}
a2=r.Q
a1.a=a2
i=r.z
a1.b=i==null?0:i
q=""
w=a2==null?3:4
break
case 3:t=6
w=9
return A.c(r.r.il(),$async$xH)
case 9:a2=a8
a1.a=a2
if(r.c!=null&&a2!=null)r.p(new B.cOC(a1,r))
t=2
w=8
break
case 6:t=5
a3=s.pop()
p=A.u(a3)
$.m2().k(C.q,"_buildHostInitPayload: getValidToken failed",p,null)
w=8
break
case 5:w=2
break
case 8:case 4:g=a1.a
if(g!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",g)}catch(a6){o=A.u(a6)
$.m2().k(C.aE,"localStorage jwt write failed in shim",o,null)}w=r.z==null?10:12
break
case 10:t=14
w=17
return A.c(r.f.pM(),$async$xH)
case 17:n=a8
g=n
f=g==null?null:g.b
q=f==null?"":f
g=n
i=g==null?null:g.f
a1.b=i==null?0:i
if(r.c!=null)r.p(new B.cOD(a1,r))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.Y(a1.b,4))}catch(a6){m=A.u(a6)
$.m2().k(C.aE,"localStorage balance write failed in shim",m,null)}t=2
w=16
break
case 14:t=13
a4=s.pop()
l=A.u(a4)
$.m2().k(C.q,"_buildHostInitPayload: getProfile failed",l,null)
w=16
break
case 13:w=2
break
case 16:w=11
break
case 12:t=19
w=22
return A.c(r.f.pM(),$async$xH)
case 22:k=a8
g=k
f=g==null?null:g.b
q=f==null?"":f
t=2
w=21
break
case 19:t=18
a5=s.pop()
j=A.u(a5)
$.m2().k(C.q,"_buildHostInitPayload: getProfile failed",j,null)
w=21
break
case 18:w=2
break
case 21:case 11:g=a1.b
w=23
return A.c(r.aeG(),$async$xH)
case 23:e=a8
d=A.o(x.N,x.z)
d.h(0,"type","HOST_INIT")
a0=a1.a
d.h(0,"jwt",a0==null?"":a0)
d.h(0,"balance",a1.b)
d.h(0,"demoMode",g<0.25)
d.h(0,"username",q)
if(e!=null)d.h(0,"rtp",e)
u=d
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$xH,v)},
aeG(){var w=0,v=A.m(x.h),u,t=this,s,r
var $async$aeG=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:r=t.as
if(r!=null){u=r
w=1
break}s=t.at
if(s==null)s=t.at=t.afK()
u=s.wx(C.O7,new B.cON())
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aeG,v)},
afK(){var w=0,v=A.m(x.h),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$afK=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(q.w.b9S(q.a.c),$async$afK)
case 7:p=e
if(J.r(J.aE(p,"success"),!0)&&x.f.b(J.aE(p,"data"))){o=A.uv(x.f.a(J.aE(p,"data")),x.N,x.z)
q.as=o
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.aY.jQ(o,null))}catch(j){n=A.u(j)
$.m2().k(C.aE,"localStorage rtp write failed",n,null)}u=o
r=[1]
w=5
break}r.push(6)
w=5
break
case 4:t=3
k=s.pop()
m=A.u(k)
$.m2().k(C.q,"_getSlotRtpData failed",m,null)
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.as==null)q.at=null
w=r.pop()
break
case 6:u=null
w=1
break
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$afK,v)},
DF(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$DF=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.c!=null)r.p(new B.cOF(r))
t=4
w=7
return A.c(r.r.il(),$async$DF)
case 7:q=e
if(q==null||q.length===0){if(r.c==null){w=1
break}r.p(new B.cOG(r))
w=1
break}w=8
return A.c(r.x.Bp(r.a.c),$async$DF)
case 8:p=e
if(r.c==null){w=1
break}r.ax=p
m=p
w=(m==null?null:m.c)===!0?9:10
break
case 9:m=p
w=11
return A.c(r.bgz(m==null?null:m.w),$async$DF)
case 11:w=1
break
case 10:r.p(new B.cOH(r,p))
t=2
w=6
break
case 4:t=3
k=s.pop()
m=A.u(k)
if(m instanceof A.mD){o=m
$.m2().k(C.q,"getMyAccess failed: "+o.a+" "+o.b,null,null)
if(r.c==null){w=1
break}r.p(new B.cOI(r,o))}else{n=m
$.m2().k(C.q,"getMyAccess failed",n,null)
if(r.c==null){w=1
break}r.p(new B.cOJ(r))}w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$DF,v)},
bgz(d){return this.d7i(d)},
d7i(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$bgz=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(r.c==null){w=1
break}r.p(new B.cOP(r))
t=4
w=7
return A.c(r.y.D3(r.a.c,new A.a7Q(r.cU9("game-session"),null,null)),$async$bgz)
case 7:q=f
if(r.c==null){w=1
break}n=q
if((n==null?null:n.e)!==C.Pr){r.p(new B.cOQ(r,q))
w=1
break}r.p(new B.cOR(r,q,d))
t=2
w=6
break
case 4:t=3
l=s.pop()
n=A.u(l)
if(n instanceof A.mD){p=n
$.m2().k(C.q,"start game session failed: "+p.a+" "+p.b,null,null)
if(r.c==null){w=1
break}r.p(new B.cOS(r,p))}else{o=n
$.m2().k(C.q,"start game session failed",o,null)
if(r.c==null){w=1
break}r.p(new B.cOT(r))}w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$bgz,v)},
aei(){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$aei=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=q.ay
m=n==null?null:n.a
if(q.cx||m==null){w=1
break}q.cx=!0
t=4
w=7
return A.c(q.y.Hp(q.a.c,m),$async$aei)
case 7:r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=A.u(l)
$.m2().k(C.aE,"end game session failed",p,null)
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.cx=!1
w=r.pop()
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$aei,v)},
cU9(d){var w=Date.now(),v=C.d.mX($.b2a().Jc(0),16)
return d+"-"+this.a.c+"-"+1000*w+"-"+v},
bLj(d){switch(d){case"INSUFFICIENT_BALANCE":return y.a
case"REFUND_PENDING":return"The refund is still pending. Refresh after it completes."
case null:case void 0:case"":return null
default:return d}},
d4t(d){var w,v=null,u=d==null
if((u?v:d.e)===C.Ps){w=this.bLj(u?v:d.f)
return w==null?"Game session was denied.":w}if((u?v:d.e)==null)return v
return"Game session status is "+d.e.a+"."},
bM4(d){var w=d.b
if(w.length!==0){if(C.b.t(w,"INSUFFICIENT_BALANCE"))return y.a
if(C.b.t(w,"REFUND_PENDING"))return"Refund is pending. Please refresh after it completes."
return w}return"Request failed. Please try again."},
E_(d){return this.cNA(d)},
cNA(b6){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E_=A.i(function(b7,b8){if(b7===1){s.push(b8)
w=t}for(;;)switch(w){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ap(b0)
if(b1==null){u=null
w=1
break}case 3:switch(b1){case"GAME_READY":w=5
break
case"GO_BACK":w=6
break
case"GO_DEPOSIT":w=7
break
case"GO_WITHDRAW":w=8
break
case"SPIN_REQUEST":w=9
break
case"BALANCE_REQUEST":w=10
break
case"RTP_REQUEST":w=11
break
case"TRANSACTION_REQUEST":w=12
break
default:w=13
break}break
case 5:u=r.xH()
w=1
break
case 6:r.aeL()
u=null
w=1
break
case 7:m=r.c
if(m!=null)A.aQ(m,!1).f.aH(C.uL,x.X)
u=null
w=1
break
case 8:m=r.c
if(m!=null)A.aQ(m,!1).f.aH(C.yV,x.X)
u=null
w=1
break
case 9:t=15
b0=A.mB(b6.j(0,"betIndex"))
q=b0==null?null:C.j.ce(b0)
a2=A.mB(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.ab(["type","SPIN_ERROR","message","betIndex and betAmount are required"],x.N,x.z)
u=m
w=1
break}b0=r.a.c
a3=A.aV(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aV(b6.j(0,"clientSeed"))
a5=A.aV(b6.j(0,"nonce"))
w=18
return A.c(r.w.a9P(p,q,A.aV(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$E_)
case 18:o=b8
n=J.aE(o,"data")
if(J.r(J.aE(o,"success"),!0)&&x.P.b(n)){m=A.o(x.N,x.z)
J.eA(m,"type","SPIN_RESULT")
J.hf(m,n)
u=m
w=1
break}m=J.aE(o,"message")
m=A.ab(["type","SPIN_ERROR","message",J.ap(m==null?"spin failed":m)],x.N,x.z)
u=m
w=1
break
t=2
w=17
break
case 15:t=14
b2=s.pop()
l=A.u(b2)
m=A.ab(["type","SPIN_ERROR","message",J.ap(l)],x.N,x.z)
u=m
w=1
break
w=17
break
case 14:w=2
break
case 17:w=4
break
case 10:t=20
w=23
return A.c(r.w.jF(),$async$E_)
case 23:k=b8
if(J.r(J.aE(k,"success"),!0)){m=x.h
j=m.a(J.aE(k,"data"))
k=j
m=m.a(k==null?null:J.aE(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(x.N,x.z):a7
m=A.mB(J.aE(i,"balance"))
if(m==null)m=null
m=A.ab(["type","BALANCE_RESULT","balance",m==null?0:m],x.N,x.z)
u=m
w=1
break}m=J.aE(k,"message")
m=A.ab(["type","BALANCE_ERROR","message",J.ap(m==null?"getCurrentUser failed":m)],x.N,x.z)
u=m
w=1
break
t=2
w=22
break
case 20:t=19
b3=s.pop()
h=A.u(b3)
m=A.ab(["type","BALANCE_ERROR","message",J.ap(h)],x.N,x.z)
u=m
w=1
break
w=22
break
case 19:w=2
break
case 22:w=4
break
case 11:t=25
w=28
return A.c(r.aeG(),$async$E_)
case 28:g=b8
if(g!=null){m=A.ab(["type","RTP_RESULT","data",g],x.N,x.z)
u=m
w=1
break}m=A.ab(["type","RTP_ERROR","message","getRtpTable failed"],x.N,x.z)
u=m
w=1
break
t=2
w=27
break
case 25:t=24
b4=s.pop()
f=A.u(b4)
m=A.ab(["type","RTP_ERROR","message",J.ap(f)],x.N,x.z)
u=m
w=1
break
w=27
break
case 24:w=2
break
case 27:w=4
break
case 12:t=30
m=A.mB(b6.j(0,"page"))
a8=m==null?null:C.j.ce(m)
e=a8==null?1:a8
m=A.mB(b6.j(0,"size"))
a9=m==null?null:C.j.ce(m)
d=a9==null?10:a9
w=33
return A.c(r.w.a1K(e,d),$async$E_)
case 33:a0=b8
if(J.r(J.aE(a0,"success"),!0)){m=A.ab(["type","TRANSACTION_RESULT","data",J.aE(a0,"data")],x.N,x.z)
u=m
w=1
break}m=J.aE(a0,"message")
m=A.ab(["type","TRANSACTION_ERROR","message",J.ap(m==null?"getTransactions failed":m)],x.N,x.z)
u=m
w=1
break
t=2
w=32
break
case 30:t=29
b5=s.pop()
a1=A.u(b5)
m=A.ab(["type","TRANSACTION_ERROR","message",J.ap(a1)],x.N,x.z)
u=m
w=1
break
w=32
break
case 29:w=2
break
case 32:w=4
break
case 13:u=null
w=1
break
case 4:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$E_,v)},
q(){var w=this,v=w.dx
if(v!=null)v.$0()
v=w.dy
if(v!=null)v.$0()
w.aei()
w.a7()},
u(d){var w=this,v=null,u=w.e,t=x.p,s=A.b([],t),r=u==null
if(!r)C.f.C(s,A.b([u,A.dM(0,A.h_(C.c8,v,C.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.gbtP(),v,v,v,v,v,v,!1,C.bU),108,v,0,v,v,75)],t))
else s.push(w.cqY(d))
if(r)s.push(new A.dO(!0,!0,!0,!0,C.J,!1,new A.ce(C.ie,v,v,A.aM(v,v,v,v,v,D.aRK,v,v,w.gbtP(),v,v,v,v,"Back",v),v),v))
return A.bO(v,D.au6,A.d1(C.aT,s,C.t,C.aQ,v),v,v,v,v,v)},
cqY(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.p(d),j=m.ax,i=j==null
if((i?l:j.f)==null)w=l
else{v=j.f
u=j.d
if(u==null)u=""
w=C.b.G(A.a(v)+" "+u)}if((i?l:j.e)==null)t=l
else{i=j.e
v=j.d
if(v==null)v=""
t=C.b.G(A.a(i)+" "+v)}i=m.cy
if(!i)if(!m.ch)if(!m.CW)m.d===$&&A.h()
if(i)s="Sign in"
else if(m.CW)s="Processing..."
else{i=m.ch?"Checking...":"Start with refundable access"
s=i}i=A.A(18)
v=A.aF(C.E.B(0.12),C.w,1)
m.d===$&&A.h()
u=k.ok
r=u.f
r=A.d("Moon Dance Stage",l,l,l,l,l,r==null?l:r.aJ(C.E,C.B),C.aO,l,l)
u=u.z
q=u==null
p=x.p
r=A.b([r,C.ee,A.d("This game requires an active refundable access check before launch.",l,l,l,l,l,q?l:u.a1(C.E.B(0.72)),C.aO,l,l)],p)
o=w==null
if(!o||t!=null){o=o?"-":w
n=t==null?"-":t
C.f.C(r,A.b([C.Ht,new B.ag0("Wallet",o,l),new B.ag0("Required",n,l)],p))}o=m.db
if(o!=null)C.f.C(r,A.b([C.Ht,A.d(o,l,l,l,l,l,q?l:u.a1(D.asM),C.aO,l,l)],p))
r.push(D.bHT)
u=!m.ch
if(!u||m.CW)q=l
else if(m.cy)q=new B.cOB(d)
else q=m.gbNW()
r.push(A.cq(!u||m.CW?A.w(A.b([C.p6,C.iV,A.d(s,l,l,l,l,l,l,l,l,l)],p),C.l,l,C.b_,C.I,0,l,l):A.d(s,l,l,l,l,l,l,l,l,l),l,q,l))
r.push(C.ee)
r.push(A.aI(D.bUH,l,l,l,m.ch||m.CW?l:m.gbNW(),l,l))
return A.aK(new A.ba(C.KQ,new A.G(C.b2,new A.c7(new A.L(D.arZ,l,v,i,l,l,C.r),C.au,new A.G(C.b2,A.v(r,C.an,l,C.e,C.I,0,C.k),l),l),l),l),l,l,l)},
aeL(){var w=0,v=A.m(x.H),u,t=this
var $async$aeL=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}w=3
return A.c(t.afU(),$async$aeL)
case 3:case 1:return A.k(u,v)}})
return A.l($async$aeL,v)},
afU(){var w=0,v=A.m(x.H),u,t=this,s
var $async$afU=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}w=3
return A.c(t.aei(),$async$afU)
case 3:s=t.c
if(s==null){w=1
break}w=4
return A.c(A.X(s,!1).A7(),$async$afU)
case 4:if(!e&&t.c!=null){s=t.c
s.toString
A.aQ(s,!1).f.ih("/home",x.X)}case 1:return A.k(u,v)}})
return A.l($async$afU,v)},
cvE(d,e){var w=b.G.window.navigator.userAgent,v=$.dKb()
if(v.b.test(w)){$.aG.y2$.push(new B.cOE(this,d,e))
return C.ym}return new B.adG(this.bRa(d,e,Date.now()),this.gd4k(),null)},
bRa(d,e,f){var w=e!=null&&C.b.aS(e,"/")?e:"/games/"+d
return w+(C.b.t(w,"?")?"&":"?")+"flutter=1&_ts="+f},
d4l(){new B.cOO(this).$0()}}
B.ag0.prototype={
u(d){var w=null,v=A.p(d).ok.z,u=v==null,t=u?w:v.a1(C.E.B(0.58))
t=A.d(this.c,w,w,w,w,w,t,w,w,w)
u=u?w:v.aJ(C.E,C.R)
return new A.G(C.em,A.w(A.b([t,A.d(this.d,w,w,w,w,w,u,w,w,w)],x.p),C.l,w,C.bf,C.i,0,w,w),w)}}
var z=a.updateTypes(["aa<~>()","aa<U<q,@>?>(U<q,@>)","~()"])
B.daA.prototype={
$1(d){var w,v=A.iv(d,"MessageEvent")
if(!v)return
if(!J.r(d.origin,this.a))return
w=A.a3_(d.data)
if(x.f.b(w)&&J.r(w.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.daz.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.daC.prototype={
$1(d){var w,v,u,t,s,r=A.iv(d,"MessageEvent")
if(!r)return
r=this.a
if(!J.r(d.origin,r))return
w=A.a3_(d.data)
if(!x.f.b(w))return
v=A.o(x.N,x.z)
for(u=w.gd5(),u=u.gan(u);u.F();){t=u.gN()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.aE("type"))return
new B.daD(this.b,v,d,r).$0()},
$S:9}
B.daD.prototype={
$0(){var w=0,v=A.m(x.a),u=this,t,s,r,q,p
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:q=u.a.$1(u.b)
w=2
return A.c(x.u.b(q)?q:A.he(q,x.h),$async$$0)
case 2:p=e
if(p!=null){t=A.bB(p)
s=u.c.source
if(s!=null)q=A.iv(s,"Object")
else q=!1
r=u.d
if(q){A.azf(s,"postMessage",t,r,x.X)
B.dkX(t,r)}else{B.dkX(t,r)
b.G.window.postMessage(t,r)}}return A.k(null,v)}})
return A.l($async$$0,v)},
$S:98}
B.daB.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cOz.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cOA.prototype={
$1(d){var w=this.a.e
w===$&&A.h()
return w},
$S:374}
B.cOK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cOL.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cOM.prototype={
$0(){return this.a.z=0},
$S:0}
B.cOC.prototype={
$0(){return this.b.Q=this.a.a},
$S:0}
B.cOD.prototype={
$0(){return this.b.z=this.a.b},
$S:0}
B.cON.prototype={
$0(){return null},
$S:14}
B.cOF.prototype={
$0(){var w=this.a
w.ch=!0
w.db=null
w.cy=!1},
$S:0}
B.cOG.prototype={
$0(){var w=this.a
w.ch=!1
w.cy=!0
w.db="Sign in to play this game."},
$S:0}
B.cOH.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b
v.db=v.bLj(w==null?null:w.r)},
$S:0}
B.cOI.prototype={
$0(){var w,v,u=this.a
u.ch=!1
w=this.b
v=w.a===401
u.cy=v
u.db=v?"Sign in to play this game.":u.bM4(w)},
$S:0}
B.cOJ.prototype={
$0(){var w=this.a
w.ch=!1
w.db="Unable to verify game access. Please try again."},
$S:0}
B.cOP.prototype={
$0(){var w=this.a
w.ch=!0
w.CW=!1
w.db=null},
$S:0}
B.cOQ.prototype={
$0(){var w,v=this.a
v.ch=!1
v.ay=null
w=v.d4t(this.b)
v.db=w==null?"Game session was denied.":w},
$S:0}
B.cOR.prototype={
$0(){var w=this.a
w.ay=this.b
w.d===$&&A.h()
w.e=w.cvE("moon_dance/index.html",this.c)
w.ch=!1},
$S:0}
B.cOS.prototype={
$0(){var w,v,u=this.a
u.ch=!1
w=this.b
v=w.a===401
u.cy=v
u.db=v?"Sign in to play this game.":u.bM4(w)},
$S:0}
B.cOT.prototype={
$0(){var w=this.a
w.ch=!1
w.db="Unable to start the game session. Please retry."},
$S:0}
B.cOB.prototype={
$0(){return A.aQ(this.a,!1).f.aH(C.dQ,x.X)},
$S:0}
B.cOE.prototype={
$1(d){return this.ca9(d)},
ca9(a0){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.i(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:g=r.a
if(g.c==null){w=1
break}t=4
k=g.Q
w=k==null?7:9
break
case 7:w=10
return A.c(g.r.il(),$async$$1)
case 10:w=8
break
case 9:a2=k
case 8:j=a2
q=j==null?"":j
i=g.z
k=i==null
p=k?0:i
w=k?11:12
break
case 11:t=14
w=17
return A.c(g.f.hg(!0),$async$$1)
case 17:o=a2
k=o
i=k==null?null:k.f
p=i==null?0:i
t=4
w=16
break
case 14:t=13
f=s.pop()
n=A.u(f)
$.m2().k(C.q,"mobile fallback getProfile failed",n,null)
w=16
break
case 13:w=4
break
case 16:case 12:k=b.G
k.window.localStorage.setItem("_flutter_game_jwt",q)
k.window.localStorage.setItem("_flutter_game_balance",J.a3p(p,4))
k.window.localStorage.setItem("_flutter_game_api_base",g.w.bbg())
k.window.localStorage.setItem("_flutter_game_id",g.a.c)
t=19
w=22
return A.c(g.aeG(),$async$$1)
case 22:t=4
w=21
break
case 19:t=18
e=s.pop()
m=A.u(e)
$.m2().k(C.aE,"RTP prefetch failed",m,null)
w=21
break
case 18:w=4
break
case 21:t=2
w=6
break
case 4:t=3
d=s.pop()
l=A.u(d)
$.m2().k(C.q,"mobile postFrame slot game prep failed",l,null)
w=6
break
case 3:w=2
break
case 6:k=g.c
if(k==null){w=1
break}w=23
return A.c(A.X(k,!1).A7(),$async$$1)
case 23:g=g.bRa(r.b,r.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$$1,v)},
$S:485}
B.cOO.prototype={
$0(){var w=0,v=A.m(x.a),u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=2
return A.c(u.a.xH(),$async$$0)
case 2:s=e
B.dlZ(s)
t=x.H
w=3
return A.c(A.de(D.aJj,null,t),$async$$0)
case 3:B.dlZ(s)
w=4
return A.c(A.de(D.aJ1,null,t),$async$$0)
case 4:B.dlZ(s)
return A.k(null,v)}})
return A.l($async$$0,v)},
$S:98};(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=B.anD.prototype,"gbNW","DF",0)
v(u,"gcNz","E_",1)
w(u,"gbtP","aeL",0)
w(u,"gd4k","d4l",2)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.fi,[B.daA,B.daC,B.cOz,B.cOA,B.cOE])
w(A.h8,[B.daz,B.daD,B.daB,B.cOK,B.cOL,B.cOM,B.cOC,B.cOD,B.cON,B.cOF,B.cOG,B.cOH,B.cOI,B.cOJ,B.cOP,B.cOQ,B.cOR,B.cOS,B.cOT,B.cOB,B.cOO])
w(A.W,[B.adG,B.G4])
w(A.Z,[B.aY1,B.anD])
v(B.ag0,A.x)})()
A.fT(b.typeUniverse,JSON.parse('{"adG":{"W":[],"n":[]},"aY1":{"Z":["adG"]},"G4":{"W":[],"n":[]},"anD":{"Z":["G4"]},"ag0":{"x":[],"n":[]}}'))
var y={a:"Your wallet balance is not enough for the refundable access check."}
var x=(function rtii(){var w=A.au
return{u:w("aa<U<q,@>?>"),G:w("Kg"),w:w("bly"),p:w("E<n>"),P:w("U<q,@>"),f:w("U<@,@>"),a:w("bo"),A:w("O2"),N:w("q"),x:w("OB"),r:w("Gm"),z:w("@"),h:w("U<q,@>?"),X:w("V?"),H:w("~")}})();(function constants(){D.arZ=new A.Y(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.A)
D.asM=new A.Y(1,1,0.7686274509803922,0.7686274509803922,C.A)
D.au6=new A.Y(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.A)
D.aJ1=new A.bJ(175e4)
D.aJj=new A.bJ(75e4)
D.aRK=new A.aq(C.jq,null,C.E,null,null)
D.bHT=new A.ad(null,22,null,null)
D.bKr=new A.xF(null,!1)
D.bUH=new A.bf("Refresh access",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"en9","dKb",()=>A.bn("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
w($,"eo7","m2",()=>A.aY("SlotGamePage"))})()};
(a=>{a["ts/PUH9OCGyQ5tbaHbiO/hLNar4="]=a.current})($__dart_deferred_initializers__);