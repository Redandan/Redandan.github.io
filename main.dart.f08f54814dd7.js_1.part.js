((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dSE(d,e,f,g){return C.f0d(d,e,f,g,g.k("0?"))},
f0d(d,e,f,g,h){var x=0,w=A.l(h),v,u,t
var $async$dSE=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:t=J
x=3
return A.c(e.$0().f2(B.cO),$async$dSE)
case 3:u=t.hs(j,new C.dSF(d,f,g)).ee(0)
B.d.fD(u,new C.dSG(f,g))
v=u.length===0?null:B.d.gP(u)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dSE,w)},
dSF:function dSF(d,e,f){this.a=d
this.b=e
this.c=f},
dSG:function dSG(d,e){this.a=d
this.b=e},
chs:function chs(d){this.a=d
this.c=!1},
cht:function cht(){},
chu:function chu(){},
Xw(){var x=0,w=A.l(y.v),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xw=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:k=A.b7("startup_background_services")
$.BV()
m=b.G
m.window.dispatchEvent(new m.Event("agora-background-services-started"))
v=3
x=6
return A.c($.Ox().cG(),$async$Xw)
case 6:k.m(B.i,"PWA log upload service initialized",null,null)
v=1
x=5
break
case 3:v=2
j=u.pop()
t=A.u(j)
k.m(B.t,"Failed to initialize PWA log upload service: "+A.b(t),null,null)
x=5
break
case 2:x=1
break
case 5:v=8
s=$.bgH()
x=11
return A.c(s.cG(),$async$Xw)
case 11:s.bEq()
k.m(B.i,"PWA signal service initialized",null,null)
v=1
x=10
break
case 8:v=7
i=u.pop()
r=A.u(i)
k.m(B.t,"Failed to initialize PWA signal service: "+A.b(r),null,null)
x=10
break
case 7:x=1
break
case 10:v=13
q=$.ayC()
x=16
return A.c(q.cG(),$async$Xw)
case 16:k.m(B.i,"PWA install service initialized",null,null)
v=1
x=15
break
case 13:v=12
h=u.pop()
p=A.u(h)
k.m(B.t,"Failed to initialize PWA install service: "+A.b(p),null,null)
x=15
break
case 12:x=1
break
case 15:v=18
o=$.etp()
x=21
return A.c(o.cG(),$async$Xw)
case 21:k.m(B.i,"Version update service initialized",null,null)
v=1
x=20
break
case 18:v=17
g=u.pop()
n=A.u(g)
k.m(B.t,"Failed to initialize version update service: "+A.b(n),null,null)
x=20
break
case 17:x=1
break
case 20:x=22
return A.c($.al().$1$0(y.e).Hb(null,null),$async$Xw)
case 22:k.m(B.i,"GlobalServiceManager initialized successfully in background",null,null)
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$Xw,w)}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[108],C)
C.chs.prototype={
cG(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$cG=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.c
if(o){x=1
break}u=4
o=s.a
o.m(B.i,"[VERSION_UPDATE] Initializing version update service...",null,null)
r=$.Ou()
x=!r.c?7:8
break
case 7:x=9
return A.c(r.cG(),$async$cG)
case 9:case 8:x=10
return A.c(s.Yy(),$async$cG)
case 10:s.c=!0
o.m(B.i,"[VERSION_UPDATE] Version update service initialized",null,null)
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.u(n)
s.a.m(B.F,"[VERSION_UPDATE] Failed to initialize: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cG,w)},
d8P(){var x,w,v,u,t,s,r,q,p,o=null
try{x=b.G.document.querySelector('meta[name="version"]')
if(x!=null){r=x.getAttribute("content")
w=r==null?"1.0.0":r
v=B.d.gP(J.XT(w,"+"))
this.a.m(B.i,"[VERSION_UPDATE] Current version from HTML meta: "+A.b(v),o,o)
return v}}catch(q){u=A.u(q)
this.a.m(B.t,"[VERSION_UPDATE] Failed to get version from HTML meta: "+A.b(u),o,o)}try{t=$.Ou()
if(t.c){p=t.V9()
return p}}catch(q){s=A.u(q)
this.a.m(B.t,"[VERSION_UPDATE] Failed to get version from AppVersionService: "+A.b(s),o,o)}return"1.0.0"},
Yy(){var x=0,w=A.l(y.v),v=1,u=[],t=this,s,r,q,p,o,n
var $async$Yy=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
s=t.d8P()
r=$.al().$1$0(y.l)
x=6
return A.c(r.lj("app_version_stored"),$async$Yy)
case 6:q=e
x=q!=null&&q!==s?7:8
break
case 7:t.a.m(B.i,"[VERSION_UPDATE] Version changed: "+q+" -> "+A.b(s),null,null)
x=9
return A.c(t.aw_(),$async$Yy)
case 9:case 8:x=10
return A.c(r.zS("app_version_stored",s),$async$Yy)
case 10:v=1
x=5
break
case 3:v=2
n=u.pop()
p=A.u(n)
t.a.m(B.t,"[VERSION_UPDATE] Failed to check version change: "+A.b(p),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$Yy,w)},
bLo(){var x=0,w=A.l(y.g),v
var $async$bLo=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=C.dSE(b.G.window.location.href,new C.cht(),new C.chu(),y.h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bLo,w)},
aw_(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o
var $async$aw_=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(s.bLo(),$async$aw_)
case 7:r=e
if(r==null){x=1
break}x=8
return A.c(A.fj(r.update(),y.q).f2(B.cO),$async$aw_)
case 8:s.a.m(B.i,"[VERSION_UPDATE] Service Worker update checked",null,null)
u=2
x=6
break
case 4:u=3
o=t.pop()
q=A.u(o)
s.a.m(B.t,"[VERSION_UPDATE] Failed to update Service Worker: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$aw_,w)}}
var z=a.updateTypes([])
C.dSF.prototype={
$1(d){return B.b.aQ(this.a,this.b.$1(d))},
$S(){return this.c.k("F(0)")}}
C.dSG.prototype={
$2(d,e){var x=this.a
return B.h.bm(J.aC(x.$1(e)),J.aC(x.$1(d)))},
$S(){return this.b.k("y(0,0)")}}
C.cht.prototype={
$0(){var x=0,w=A.l(y.z),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(A.fj(b.G.window.navigator.serviceWorker.getRegistrations(),y.c),$async$$0)
case 3:u=e
v=y.z.b(u)?u:new A.da(u,A.W(u).k("da<1,c9>"))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:1737}
C.chu.prototype={
$1(d){return d.scope},
$S:1738};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[C.dSF,C.chu])
w(C.dSG,A.ca)
w(C.chs,A.A)
w(C.cht,A.bt)})()
var y={e:A.C("QW"),c:A.C("v<A?>"),h:A.C("c9"),z:A.C("a2<c9>"),l:A.C("ec"),g:A.C("c9?"),q:A.C("A?"),v:A.C("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"fbs","etp",()=>new C.chs(A.b7("VersionUpdateService")))})()};
(a=>{a["j4bgv26RVAPPpi80rzfeO6poIGY="]=a.current})($__dart_deferred_initializers__);