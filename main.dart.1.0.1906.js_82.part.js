((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ed3(d){var w=b.G,v=A.eZ(new B.d9T(w.window.location.origin,d))
w.window.addEventListener("message",v)
return new B.d9S(v)},
ed4(d){var w=b.G,v=A.eZ(new B.d9V(w.window.location.origin,d))
w.window.addEventListener("message",v)
return new B.d9U(v)},
dla(d){B.dk8(A.bB(d),b.G.window.location.origin)},
dk8(d,e){var w,v,u,t,s=b.G.document.querySelectorAll("iframe")
for(w=0;w<s.length;++w){v=s.item(w)
if(v!=null){u=A.it(v,"HTMLIFrameElement")
u=!u}else u=!0
if(u)continue
t=v.src
if(C.b.aR(t,e))u=!A.nt(t,"/games/",0)
else u=!0
if(u)continue
u=v.contentWindow
if(u!=null)u.postMessage(d,e)}},
d9T:function d9T(d,e){this.a=d
this.b=e},
d9S:function d9S(d){this.a=d},
d9V:function d9V(d,e){this.a=d
this.b=e},
d9W:function d9W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d9U:function d9U(d){this.a=d},
adx:function adx(d,e,f){this.c=d
this.d=e
this.a=f},
aXS:function aXS(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
cNU:function cNU(d){this.a=d},
cNV:function cNV(d){this.a=d},
e_m(d){return new B.G_(d,null)},
G_:function G_(d,e){this.c=d
this.a=e},
ans:function ans(d,e,f,g,h){var _=this
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
cO4:function cO4(d,e){this.a=d
this.b=e},
cO5:function cO5(d,e){this.a=d
this.b=e},
cO6:function cO6(d){this.a=d},
cNX:function cNX(d,e){this.a=d
this.b=e},
cNY:function cNY(d,e){this.a=d
this.b=e},
cO7:function cO7(){},
cO_:function cO_(d){this.a=d},
cO0:function cO0(d){this.a=d},
cO1:function cO1(d,e){this.a=d
this.b=e},
cO2:function cO2(d,e){this.a=d
this.b=e},
cO3:function cO3(d){this.a=d},
cO9:function cO9(d){this.a=d},
cOa:function cOa(d,e){this.a=d
this.b=e},
cOb:function cOb(d,e,f){this.a=d
this.b=e
this.c=f},
cOc:function cOc(d,e){this.a=d
this.b=e},
cOd:function cOd(d){this.a=d},
cNW:function cNW(d){this.a=d},
cNZ:function cNZ(d,e,f){this.a=d
this.b=e
this.c=f},
cO8:function cO8(d){this.a=d},
afS:function afS(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[89]
B.adx.prototype={
T(){return new B.aXS()}}
B.aXS.prototype={
a0(){var w,v,u,t=this
t.a6()
w="slot-game-frame-"+1000*Date.now()
t.d!==$&&A.b2()
t.d=w
v=b.G.document.createElement("iframe")
v.style.border="0"
v.style.width="100%"
v.style.height="100%"
v.style.display="block"
v.allow="autoplay; fullscreen; clipboard-read; clipboard-write"
t.e!==$&&A.b2()
t.e=v
u=A.eZ(new B.cNU(t.a.d))
t.f=u
v.addEventListener("load",u)
v.src=t.a.c
$.b28()
$.Cw().Zj(w,new B.cNV(t),!0)},
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
return A.dgY(null,C.Fh,w)}}
B.G_.prototype={
T(){var w=$.aA()
return new B.ans(w.$1$0(x.w),w.$1$0(x.r),w.$1$0(x.A),w.$1$0(x.G),w.$1$0(x.x))}}
B.ans.prototype={
a0(){var w,v=this
v.a6()
w=v.a.c
w=A.dy4().j(0,w)
if(w==null)w=D.bK8
v.d!==$&&A.b2()
v.d=w
v.dx=B.ed3(v.gbte())
v.dy=B.ed4(v.gcMD())
v.aeh()
v.at=v.afB()
v.DS()},
aeh(){var w=0,v=A.m(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$aeh=A.i(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.c(s.r.hC(),$async$aeh)
case 6:r=e
if(s.c!=null&&r!=null){s.p(new B.cO4(s,r))
try{b.G.window.localStorage.setItem("_flutter_game_jwt",r)}catch(g){q=A.t(g)
$.m2().k(C.aE,"localStorage jwt write failed (private mode?)",q,null)}}u=1
w=5
break
case 3:u=2
i=t.pop()
p=A.t(i)
$.m2().k(C.p,"_fetchUserInfo: getValidToken failed",p,null)
w=5
break
case 2:w=1
break
case 5:u=8
w=11
return A.c(s.f.ei(!0),$async$aeh)
case 11:o=e
if(s.c!=null){k=o
j=k==null?null:k.f
n=j==null?0:j
s.p(new B.cO5(s,n))
try{b.G.window.localStorage.setItem("_flutter_game_balance",J.a3g(n,4))}catch(g){m=A.t(g)
$.m2().k(C.aE,"localStorage balance write failed",m,null)}}u=1
w=10
break
case 8:u=7
h=t.pop()
if(s.c!=null)s.p(new B.cO6(s))
w=10
break
case 7:w=1
break
case 10:return A.k(null,v)
case 1:return A.j(t.at(-1),v)}})
return A.l($async$aeh,v)},
xZ(){return this.crT()},
crT(){var w=0,v=A.m(x.P),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$xZ=A.i(function(a7,a8){if(a7===1){s.push(a8)
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
return A.c(r.r.hC(),$async$xZ)
case 9:a2=a8
a1.a=a2
if(r.c!=null&&a2!=null)r.p(new B.cNX(a1,r))
t=2
w=8
break
case 6:t=5
a3=s.pop()
p=A.t(a3)
$.m2().k(C.p,"_buildHostInitPayload: getValidToken failed",p,null)
w=8
break
case 5:w=2
break
case 8:case 4:g=a1.a
if(g!=null)try{b.G.window.localStorage.setItem("_flutter_game_jwt",g)}catch(a6){o=A.t(a6)
$.m2().k(C.aE,"localStorage jwt write failed in shim",o,null)}w=r.z==null?10:12
break
case 10:t=14
w=17
return A.c(r.f.pU(),$async$xZ)
case 17:n=a8
g=n
f=g==null?null:g.b
q=f==null?"":f
g=n
i=g==null?null:g.f
a1.b=i==null?0:i
if(r.c!=null)r.p(new B.cNY(a1,r))
try{b.G.window.localStorage.setItem("_flutter_game_balance",C.j.Y(a1.b,4))}catch(a6){m=A.t(a6)
$.m2().k(C.aE,"localStorage balance write failed in shim",m,null)}t=2
w=16
break
case 14:t=13
a4=s.pop()
l=A.t(a4)
$.m2().k(C.p,"_buildHostInitPayload: getProfile failed",l,null)
w=16
break
case 13:w=2
break
case 16:w=11
break
case 12:t=19
w=22
return A.c(r.f.pU(),$async$xZ)
case 22:k=a8
g=k
f=g==null?null:g.b
q=f==null?"":f
t=2
w=21
break
case 19:t=18
a5=s.pop()
j=A.t(a5)
$.m2().k(C.p,"_buildHostInitPayload: getProfile failed",j,null)
w=21
break
case 18:w=2
break
case 21:case 11:g=a1.b
w=23
return A.c(r.aew(),$async$xZ)
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
return A.l($async$xZ,v)},
aew(){var w=0,v=A.m(x.h),u,t=this,s,r
var $async$aew=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:r=t.as
if(r!=null){u=r
w=1
break}s=t.at
if(s==null)s=t.at=t.afB()
u=s.wL(C.O1,new B.cO7())
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aew,v)},
afB(){var w=0,v=A.m(x.h),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$afB=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.c(q.w.b9p(q.a.c),$async$afB)
case 7:p=e
if(J.r(J.aD(p,"success"),!0)&&x.f.b(J.aD(p,"data"))){o=A.ut(x.f.a(J.aD(p,"data")),x.N,x.z)
q.as=o
try{b.G.window.localStorage.setItem("_flutter_game_rtp",C.b1.kB(o,null))}catch(j){n=A.t(j)
$.m2().k(C.aE,"localStorage rtp write failed",n,null)}u=o
r=[1]
w=5
break}r.push(6)
w=5
break
case 4:t=3
k=s.pop()
m=A.t(k)
$.m2().k(C.p,"_getSlotRtpData failed",m,null)
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
return A.l($async$afB,v)},
DS(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$DS=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.c!=null)r.p(new B.cO_(r))
t=4
w=7
return A.c(r.r.hC(),$async$DS)
case 7:q=e
if(q==null||q.length===0){if(r.c==null){w=1
break}r.p(new B.cO0(r))
w=1
break}w=8
return A.c(r.x.BC(r.a.c),$async$DS)
case 8:p=e
if(r.c==null){w=1
break}r.ax=p
m=p
w=(m==null?null:m.c)===!0?9:10
break
case 9:m=p
w=11
return A.c(r.bg0(m==null?null:m.w),$async$DS)
case 11:w=1
break
case 10:r.p(new B.cO1(r,p))
t=2
w=6
break
case 4:t=3
k=s.pop()
m=A.t(k)
if(m instanceof A.mD){o=m
$.m2().k(C.p,"getMyAccess failed: "+o.a+" "+o.b,null,null)
if(r.c==null){w=1
break}r.p(new B.cO2(r,o))}else{n=m
$.m2().k(C.p,"getMyAccess failed",n,null)
if(r.c==null){w=1
break}r.p(new B.cO3(r))}w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$DS,v)},
bg0(d){return this.d6j(d)},
d6j(d){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$bg0=A.i(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(r.c==null){w=1
break}r.p(new B.cO9(r))
t=4
w=7
return A.c(r.y.Dh(r.a.c,new A.a7I(r.cTb("game-session"),null,null)),$async$bg0)
case 7:q=f
if(r.c==null){w=1
break}n=q
if((n==null?null:n.e)!==C.Pk){r.p(new B.cOa(r,q))
w=1
break}r.p(new B.cOb(r,q,d))
t=2
w=6
break
case 4:t=3
l=s.pop()
n=A.t(l)
if(n instanceof A.mD){p=n
$.m2().k(C.p,"start game session failed: "+p.a+" "+p.b,null,null)
if(r.c==null){w=1
break}r.p(new B.cOc(r,p))}else{o=n
$.m2().k(C.p,"start game session failed",o,null)
if(r.c==null){w=1
break}r.p(new B.cOd(r))}w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$bg0,v)},
ae7(){var w=0,v=A.m(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$ae7=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=q.ay
m=n==null?null:n.a
if(q.cx||m==null){w=1
break}q.cx=!0
t=4
w=7
return A.c(q.y.HD(q.a.c,m),$async$ae7)
case 7:r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=A.t(l)
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
return A.l($async$ae7,v)},
cTb(d){var w=Date.now(),v=C.d.n0($.b1Y().Jp(0),16)
return d+"-"+this.a.c+"-"+1000*w+"-"+v},
bKG(d){switch(d){case"INSUFFICIENT_BALANCE":return y.a
case"REFUND_PENDING":return"The refund is still pending. Refresh after it completes."
case null:case void 0:case"":return null
default:return d}},
d3t(d){var w,v=null,u=d==null
if((u?v:d.e)===C.Pl){w=this.bKG(u?v:d.f)
return w==null?"Game session was denied.":w}if((u?v:d.e)==null)return v
return"Game session status is "+d.e.a+"."},
bLr(d){var w=d.b
if(w.length!==0){if(C.b.t(w,"INSUFFICIENT_BALANCE"))return y.a
if(C.b.t(w,"REFUND_PENDING"))return"Refund is pending. Please refresh after it completes."
return w}return"Request failed. Please try again."},
Ec(d){return this.cME(d)},
cME(b6){var w=0,v=A.m(x.h),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ec=A.i(function(b7,b8){if(b7===1){s.push(b8)
w=t}for(;;)switch(w){case 0:b0=b6.j(0,"type")
b1=b0==null?null:J.ao(b0)
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
case 5:u=r.xZ()
w=1
break
case 6:r.aeB()
u=null
w=1
break
case 7:m=r.c
if(m!=null)A.aP(m,!1).f.aH(C.uI,x.X)
u=null
w=1
break
case 8:m=r.c
if(m!=null)A.aP(m,!1).f.aH(C.yU,x.X)
u=null
w=1
break
case 9:t=15
b0=A.mB(b6.j(0,"betIndex"))
q=b0==null?null:C.j.ce(b0)
a2=A.mB(b6.j(0,"betAmount"))
p=a2==null?null:a2
if(q==null||p==null){m=A.a9(["type","SPIN_ERROR","message","betIndex and betAmount are required"],x.N,x.z)
u=m
w=1
break}b0=r.a.c
a3=A.aZ(b6.j(0,"mode"))
if(a3==null)a3="REAL"
a4=A.aZ(b6.j(0,"clientSeed"))
a5=A.aZ(b6.j(0,"nonce"))
w=18
return A.c(r.w.a9K(p,q,A.aZ(b6.j(0,"clientRoundId")),a4,b0,a3,a5),$async$Ec)
case 18:o=b8
n=J.aD(o,"data")
if(J.r(J.aD(o,"success"),!0)&&x.P.b(n)){m=A.o(x.N,x.z)
J.et(m,"type","SPIN_RESULT")
J.he(m,n)
u=m
w=1
break}m=J.aD(o,"message")
m=A.a9(["type","SPIN_ERROR","message",J.ao(m==null?"spin failed":m)],x.N,x.z)
u=m
w=1
break
t=2
w=17
break
case 15:t=14
b2=s.pop()
l=A.t(b2)
m=A.a9(["type","SPIN_ERROR","message",J.ao(l)],x.N,x.z)
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
return A.c(r.w.ka(),$async$Ec)
case 23:k=b8
if(J.r(J.aD(k,"success"),!0)){m=x.h
j=m.a(J.aD(k,"data"))
k=j
m=m.a(k==null?null:J.aD(k,"userInfo"))
a7=m==null?j:m
i=a7==null?A.o(x.N,x.z):a7
m=A.mB(J.aD(i,"balance"))
if(m==null)m=null
m=A.a9(["type","BALANCE_RESULT","balance",m==null?0:m],x.N,x.z)
u=m
w=1
break}m=J.aD(k,"message")
m=A.a9(["type","BALANCE_ERROR","message",J.ao(m==null?"getCurrentUser failed":m)],x.N,x.z)
u=m
w=1
break
t=2
w=22
break
case 20:t=19
b3=s.pop()
h=A.t(b3)
m=A.a9(["type","BALANCE_ERROR","message",J.ao(h)],x.N,x.z)
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
return A.c(r.aew(),$async$Ec)
case 28:g=b8
if(g!=null){m=A.a9(["type","RTP_RESULT","data",g],x.N,x.z)
u=m
w=1
break}m=A.a9(["type","RTP_ERROR","message","getRtpTable failed"],x.N,x.z)
u=m
w=1
break
t=2
w=27
break
case 25:t=24
b4=s.pop()
f=A.t(b4)
m=A.a9(["type","RTP_ERROR","message",J.ao(f)],x.N,x.z)
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
return A.c(r.w.a1M(e,d),$async$Ec)
case 33:a0=b8
if(J.r(J.aD(a0,"success"),!0)){m=A.a9(["type","TRANSACTION_RESULT","data",J.aD(a0,"data")],x.N,x.z)
u=m
w=1
break}m=J.aD(a0,"message")
m=A.a9(["type","TRANSACTION_ERROR","message",J.ao(m==null?"getTransactions failed":m)],x.N,x.z)
u=m
w=1
break
t=2
w=32
break
case 30:t=29
b5=s.pop()
a1=A.t(b5)
m=A.a9(["type","TRANSACTION_ERROR","message",J.ao(a1)],x.N,x.z)
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
return A.l($async$Ec,v)},
q(){var w=this,v=w.dx
if(v!=null)v.$0()
v=w.dy
if(v!=null)v.$0()
w.ae7()
w.a7()},
u(d){var w=this,v=null,u=w.e,t=x.p,s=A.b([],t),r=u==null
if(!r)C.h.C(s,A.b([u,A.dL(0,A.h0(C.c8,v,C.A,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.gbte(),v,v,v,v,v,v,!1,C.bT),108,v,0,v,v,75)],t))
else s.push(w.cq9(d))
if(r)s.push(new A.dN(!0,!0,!0,!0,C.J,!1,new A.ch(C.ie,v,v,A.aL(v,v,v,v,v,D.aRB,v,v,w.gbte(),v,v,v,v,"Back",v),v),v))
return A.bP(v,D.atW,A.d2(C.aT,s,C.t,C.aQ,v),v,v,v,v,v)},
cq9(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.p(d),j=m.ax,i=j==null
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
v=A.aE(C.E.B(0.12),C.w,1)
m.d===$&&A.h()
u=k.ok
r=u.f
r=A.d("Moon Dance Stage",l,l,l,l,l,r==null?l:r.aK(C.E,C.B),C.aO,l,l)
u=u.z
q=u==null
p=x.p
r=A.b([r,C.ee,A.d("This game requires an active refundable access check before launch.",l,l,l,l,l,q?l:u.a1(C.E.B(0.72)),C.aO,l,l)],p)
o=w==null
if(!o||t!=null){o=o?"-":w
n=t==null?"-":t
C.h.C(r,A.b([C.Ho,new B.afS("Wallet",o,l),new B.afS("Required",n,l)],p))}o=m.db
if(o!=null)C.h.C(r,A.b([C.Ho,A.d(o,l,l,l,l,l,q?l:u.a1(D.asB),C.aO,l,l)],p))
r.push(D.bHA)
u=!m.ch
if(!u||m.CW)q=l
else if(m.cy)q=new B.cNW(d)
else q=m.gbNl()
r.push(A.cq(!u||m.CW?A.w(A.b([C.p4,C.iV,A.d(s,l,l,l,l,l,l,l,l,l)],p),C.l,l,C.aZ,C.I,0,l,l):A.d(s,l,l,l,l,l,l,l,l,l),l,q,l))
r.push(C.ee)
r.push(A.aH(D.bUo,l,l,l,m.ch||m.CW?l:m.gbNl(),l,l))
return A.aJ(new A.b9(C.KK,new A.G(C.b2,new A.c8(new A.L(D.arO,l,v,i,l,l,C.r),C.au,new A.G(C.b2,A.v(r,C.ao,l,C.f,C.I,0,C.k),l),l),l),l),l,l,l)},
aeB(){var w=0,v=A.m(x.H),u,t=this
var $async$aeB=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}w=3
return A.c(t.afK(),$async$aeB)
case 3:case 1:return A.k(u,v)}})
return A.l($async$aeB,v)},
afK(){var w=0,v=A.m(x.H),u,t=this,s
var $async$afK=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}w=3
return A.c(t.ae7(),$async$afK)
case 3:s=t.c
if(s==null){w=1
break}w=4
return A.c(A.X(s,!1).Ak(),$async$afK)
case 4:if(!e&&t.c!=null){s=t.c
s.toString
A.aP(s,!1).f.io("/home",x.X)}case 1:return A.k(u,v)}})
return A.l($async$afK,v)},
cuX(d,e){var w=b.G.window.navigator.userAgent,v=$.dJ3()
if(v.b.test(w)){$.aF.y2$.push(new B.cNZ(this,d,e))
return C.yl}return new B.adx(this.bQx(d,e,Date.now()),this.gd3k(),null)},
bQx(d,e,f){var w=e!=null&&C.b.aR(e,"/")?e:"/games/"+d
return w+(C.b.t(w,"?")?"&":"?")+"flutter=1&_ts="+f},
d3l(){new B.cO8(this).$0()}}
B.afS.prototype={
u(d){var w=null,v=A.p(d).ok.z,u=v==null,t=u?w:v.a1(C.E.B(0.58))
t=A.d(this.c,w,w,w,w,w,t,w,w,w)
u=u?w:v.aK(C.E,C.R)
return new A.G(C.em,A.w(A.b([t,A.d(this.d,w,w,w,w,w,u,w,w,w)],x.p),C.l,w,C.bf,C.i,0,w,w),w)}}
var z=a.updateTypes(["ab<~>()","ab<U<q,@>?>(U<q,@>)","~()"])
B.d9T.prototype={
$1(d){var w,v=A.it(d,"MessageEvent")
if(!v)return
if(!J.r(d.origin,this.a))return
w=A.a2R(d.data)
if(x.f.b(w)&&J.r(w.j(0,"action"),"slotGameGoBack"))this.b.$0()},
$S:9}
B.d9S.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.d9V.prototype={
$1(d){var w,v,u,t,s,r=A.it(d,"MessageEvent")
if(!r)return
r=this.a
if(!J.r(d.origin,r))return
w=A.a2R(d.data)
if(!x.f.b(w))return
v=A.o(x.N,x.z)
for(u=w.gdc(),u=u.gap(u);u.F();){t=u.gN()
s=t.a
if(typeof s=="string")v.h(0,s,t.b)}if(!v.aE("type"))return
new B.d9W(this.b,v,d,r).$0()},
$S:9}
B.d9W.prototype={
$0(){var w=0,v=A.m(x.a),u=this,t,s,r,q,p
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:q=u.a.$1(u.b)
w=2
return A.c(x.u.b(q)?q:A.fX(q,x.h),$async$$0)
case 2:p=e
if(p!=null){t=A.bB(p)
s=u.c.source
if(s!=null)q=A.it(s,"Object")
else q=!1
r=u.d
if(q){A.az6(s,"postMessage",t,r,x.X)
B.dk8(t,r)}else{B.dk8(t,r)
b.G.window.postMessage(t,r)}}return A.k(null,v)}})
return A.l($async$$0,v)},
$S:80}
B.d9U.prototype={
$0(){return b.G.window.removeEventListener("message",this.a)},
$S:0}
B.cNU.prototype={
$1(d){return this.a.$0()},
$S:9}
B.cNV.prototype={
$1(d){var w=this.a.e
w===$&&A.h()
return w},
$S:530}
B.cO4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.cO5.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cO6.prototype={
$0(){return this.a.z=0},
$S:0}
B.cNX.prototype={
$0(){return this.b.Q=this.a.a},
$S:0}
B.cNY.prototype={
$0(){return this.b.z=this.a.b},
$S:0}
B.cO7.prototype={
$0(){return null},
$S:16}
B.cO_.prototype={
$0(){var w=this.a
w.ch=!0
w.db=null
w.cy=!1},
$S:0}
B.cO0.prototype={
$0(){var w=this.a
w.ch=!1
w.cy=!0
w.db="Sign in to play this game."},
$S:0}
B.cO1.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b
v.db=v.bKG(w==null?null:w.r)},
$S:0}
B.cO2.prototype={
$0(){var w,v,u=this.a
u.ch=!1
w=this.b
v=w.a===401
u.cy=v
u.db=v?"Sign in to play this game.":u.bLr(w)},
$S:0}
B.cO3.prototype={
$0(){var w=this.a
w.ch=!1
w.db="Unable to verify game access. Please try again."},
$S:0}
B.cO9.prototype={
$0(){var w=this.a
w.ch=!0
w.CW=!1
w.db=null},
$S:0}
B.cOa.prototype={
$0(){var w,v=this.a
v.ch=!1
v.ay=null
w=v.d3t(this.b)
v.db=w==null?"Game session was denied.":w},
$S:0}
B.cOb.prototype={
$0(){var w=this.a
w.ay=this.b
w.d===$&&A.h()
w.e=w.cuX("moon_dance/index.html",this.c)
w.ch=!1},
$S:0}
B.cOc.prototype={
$0(){var w,v,u=this.a
u.ch=!1
w=this.b
v=w.a===401
u.cy=v
u.db=v?"Sign in to play this game.":u.bLr(w)},
$S:0}
B.cOd.prototype={
$0(){var w=this.a
w.ch=!1
w.db="Unable to start the game session. Please retry."},
$S:0}
B.cNW.prototype={
$0(){return A.aP(this.a,!1).f.aH(C.dQ,x.X)},
$S:0}
B.cNZ.prototype={
$1(d){return this.c9l(d)},
c9l(a0){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.i(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:g=r.a
if(g.c==null){w=1
break}t=4
k=g.Q
w=k==null?7:9
break
case 7:w=10
return A.c(g.r.hC(),$async$$1)
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
return A.c(g.f.ei(!0),$async$$1)
case 17:o=a2
k=o
i=k==null?null:k.f
p=i==null?0:i
t=4
w=16
break
case 14:t=13
f=s.pop()
n=A.t(f)
$.m2().k(C.p,"mobile fallback getProfile failed",n,null)
w=16
break
case 13:w=4
break
case 16:case 12:k=b.G
k.window.localStorage.setItem("_flutter_game_jwt",q)
k.window.localStorage.setItem("_flutter_game_balance",J.a3g(p,4))
k.window.localStorage.setItem("_flutter_game_api_base",g.w.baP())
k.window.localStorage.setItem("_flutter_game_id",g.a.c)
t=19
w=22
return A.c(g.aew(),$async$$1)
case 22:t=4
w=21
break
case 19:t=18
e=s.pop()
m=A.t(e)
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
l=A.t(d)
$.m2().k(C.p,"mobile postFrame slot game prep failed",l,null)
w=6
break
case 3:w=2
break
case 6:k=g.c
if(k==null){w=1
break}w=23
return A.c(A.X(k,!1).Ak(),$async$$1)
case 23:g=g.bQx(r.b,r.c,Date.now())
b.G.window.location.assign(g)
case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$$1,v)},
$S:508}
B.cO8.prototype={
$0(){var w=0,v=A.m(x.a),u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:w=2
return A.c(u.a.xZ(),$async$$0)
case 2:s=e
B.dla(s)
t=x.H
w=3
return A.c(A.d1(D.aJ7,null,t),$async$$0)
case 3:B.dla(s)
w=4
return A.c(A.d1(D.aIQ,null,t),$async$$0)
case 4:B.dla(s)
return A.k(null,v)}})
return A.l($async$$0,v)},
$S:80};(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=B.ans.prototype,"gbNl","DS",0)
v(u,"gcMD","Ec",1)
w(u,"gbte","aeB",0)
w(u,"gd3k","d3l",2)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.fh,[B.d9T,B.d9V,B.cNU,B.cNV,B.cNZ])
w(A.h8,[B.d9S,B.d9W,B.d9U,B.cO4,B.cO5,B.cO6,B.cNX,B.cNY,B.cO7,B.cO_,B.cO0,B.cO1,B.cO2,B.cO3,B.cO9,B.cOa,B.cOb,B.cOc,B.cOd,B.cNW,B.cO8])
w(A.W,[B.adx,B.G_])
w(A.Z,[B.aXS,B.ans])
v(B.afS,A.x)})()
A.fT(b.typeUniverse,JSON.parse('{"adx":{"W":[],"n":[]},"aXS":{"Z":["adx"]},"G_":{"W":[],"n":[]},"ans":{"Z":["G_"]},"afS":{"x":[],"n":[]}}'))
var y={a:"Your wallet balance is not enough for the refundable access check."}
var x=(function rtii(){var w=A.au
return{u:w("ab<U<q,@>?>"),G:w("K8"),w:w("blm"),p:w("E<n>"),P:w("U<q,@>"),f:w("U<@,@>"),a:w("bn"),A:w("NV"),N:w("q"),x:w("Os"),r:w("OA"),z:w("@"),h:w("U<q,@>?"),X:w("V?"),H:w("~")}})();(function constants(){D.arO=new A.Y(1,0.08235294117647059,0.08235294117647059,0.15294117647058825,C.z)
D.asB=new A.Y(1,1,0.7686274509803922,0.7686274509803922,C.z)
D.atW=new A.Y(1,0.0196078431372549,0.00784313725490196,0.09411764705882353,C.z)
D.aIQ=new A.bJ(175e4)
D.aJ7=new A.bJ(75e4)
D.aRB=new A.ap(C.jp,null,C.E,null,null)
D.bHA=new A.ac(null,22,null,null)
D.bK8=new A.xE(null,!1)
D.bUo=new A.be("Refresh access",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ely","dJ3",()=>A.bt("Mobi|Android|iPhone|iPad|iPod",!1,!1,!1,!1))
w($,"emw","m2",()=>A.aX("SlotGamePage"))})()};
(a=>{a["qfc792rO/NkFHzIDsWg3ppqDLig="]=a.current})($__dart_deferred_initializers__);