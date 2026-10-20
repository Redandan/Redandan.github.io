((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dNf(d,e,f,g){return C.eTI(d,e,f,g,g.k("0?"))},
eTI(d,e,f,g,h){var x=0,w=A.l(h),v,u,t
var $async$dNf=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:t=J
x=3
return A.c(e.$0().eY(B.cL),$async$dNf)
case 3:u=t.hf(j,new C.dNg(d,f,g)).eh(0)
B.d.fD(u,new C.dNh(f,g))
v=u.length===0?null:B.d.gS(u)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dNf,w)},
dNg:function dNg(d,e,f){this.a=d
this.b=e
this.c=f},
dNh:function dNh(d,e){this.a=d
this.b=e},
cd3:function cd3(d){this.a=d
this.c=!1},
cd4:function cd4(){},
cd5:function cd5(){},
W2(){var x=0,w=A.l(y.v),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W2=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:k=A.b4("startup_background_services")
$.AY()
m=b.G
m.window.dispatchEvent(new m.Event("agora-background-services-started"))
v=3
x=6
return A.c($.Nh().cF(),$async$W2)
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
s=$.bd1()
x=11
return A.c(s.cF(),$async$W2)
case 11:s.bDs()
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
q=$.awl()
x=16
return A.c(q.cF(),$async$W2)
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
o=$.en5()
x=21
return A.c(o.cF(),$async$W2)
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
return A.c($.ak().$1$0(y.e).GC(null,null),$async$W2)
case 22:k.m(B.i,"GlobalServiceManager initialized successfully in background",null,null)
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$W2,w)}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[108],C)
C.cd3.prototype={
cF(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$cF=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.c
if(o){x=1
break}u=4
o=s.a
o.m(B.i,"[VERSION_UPDATE] Initializing version update service...",null,null)
r=$.Ne()
x=!r.c?7:8
break
case 7:x=9
return A.c(r.cF(),$async$cF)
case 9:case 8:x=10
return A.c(s.XY(),$async$cF)
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
return A.k($async$cF,w)},
d6j(){var x,w,v,u,t,s,r,q,p,o=null
try{x=b.G.document.querySelector('meta[name="version"]')
if(x!=null){r=x.getAttribute("content")
w=r==null?"1.0.0":r
v=B.d.gS(J.Wo(w,"+"))
this.a.m(B.i,"[VERSION_UPDATE] Current version from HTML meta: "+A.b(v),o,o)
return v}}catch(q){u=A.u(q)
this.a.m(B.t,"[VERSION_UPDATE] Failed to get version from HTML meta: "+A.b(u),o,o)}try{t=$.Ne()
if(t.c){p=t.UC()
return p}}catch(q){s=A.u(q)
this.a.m(B.t,"[VERSION_UPDATE] Failed to get version from AppVersionService: "+A.b(s),o,o)}return"1.0.0"},
XY(){var x=0,w=A.l(y.v),v=1,u=[],t=this,s,r,q,p,o,n
var $async$XY=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
s=t.d6j()
r=$.ak().$1$0(y.l)
x=6
return A.c(r.l2("app_version_stored"),$async$XY)
case 6:q=e
x=q!=null&&q!==s?7:8
break
case 7:t.a.m(B.i,"[VERSION_UPDATE] Version changed: "+q+" -> "+A.b(s),null,null)
x=9
return A.c(t.avd(),$async$XY)
case 9:case 8:x=10
return A.c(r.zp("app_version_stored",s),$async$XY)
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
return A.k($async$XY,w)},
bKm(){var x=0,w=A.l(y.g),v
var $async$bKm=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=C.dNf(b.G.window.location.href,new C.cd4(),new C.cd5(),y.h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bKm,w)},
avd(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o
var $async$avd=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(s.bKm(),$async$avd)
case 7:r=e
if(r==null){x=1
break}x=8
return A.c(A.fc(r.update(),y.q).eY(B.cL),$async$avd)
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
return A.k($async$avd,w)}}
var z=a.updateTypes([])
C.dNg.prototype={
$1(d){return B.c.aV(this.a,this.b.$1(d))},
$S(){return this.c.k("D(0)")}}
C.dNh.prototype={
$2(d,e){var x=this.a
return B.h.bk(J.aB(x.$1(e)),J.aB(x.$1(d)))},
$S(){return this.b.k("y(0,0)")}}
C.cd4.prototype={
$0(){var x=0,w=A.l(y.z),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(A.fc(b.G.window.navigator.serviceWorker.getRegistrations(),y.c),$async$$0)
case 3:u=e
v=y.z.b(u)?u:new A.d1(u,A.V(u).k("d1<1,c4>"))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:1729}
C.cd5.prototype={
$1(d){return d.scope},
$S:1730};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[C.dNg,C.cd5])
w(C.dNh,A.c5)
w(C.cd3,A.A)
w(C.cd4,A.bs)})()
var y={e:A.F("PG"),c:A.F("v<A?>"),h:A.F("c4"),z:A.F("a3<c4>"),l:A.F("e5"),g:A.F("c4?"),q:A.F("A?"),v:A.F("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"f3m","en5",()=>new C.cd3(A.b4("VersionUpdateService")))})()};
(a=>{a["1AnEl9seaCqNs8v8uCnxg3FuZKg="]=a.current})($__dart_deferred_initializers__);