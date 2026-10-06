((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dfl(d,e,f,g){return C.ehK(d,e,f,g,g.m("0?"))},
ehK(d,e,f,g,h){var x=0,w=A.l(h),v,u,t
var $async$dfl=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:t=J
x=3
return A.c(e.$0().nc(B.d3),$async$dfl)
case 3:u=t.fW(j,new C.dfm(d,f,g)).cL(0)
B.e.dS(u,new C.dfn(f,g))
v=u.length===0?null:B.e.gM(u)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dfl,w)},
dfm:function dfm(d,e,f){this.a=d
this.b=e
this.c=f},
dfn:function dfn(d,e){this.a=d
this.b=e},
bW2:function bW2(d){this.a=d
this.c=!1},
bW3:function bW3(){},
bW4:function bW4(){},
T1(){var x=0,w=A.l(y.v),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T1=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:k=A.aW("startup_background_services")
$.a2l()
m=b.G
m.window.dispatchEvent(new m.Event("agora-background-services-started"))
v=3
x=6
return A.c($.KR().bU(),$async$T1)
case 6:k.k(B.f,"PWA log upload service initialized",null,null)
v=1
x=5
break
case 3:v=2
j=u.pop()
t=A.u(j)
k.k(B.q,"Failed to initialize PWA log upload service: "+A.b(t),null,null)
x=5
break
case 2:x=1
break
case 5:v=8
s=$.b0s()
x=11
return A.c(s.bU(),$async$T1)
case 11:s.bq6()
k.k(B.f,"PWA signal service initialized",null,null)
v=1
x=10
break
case 8:v=7
i=u.pop()
r=A.u(i)
k.k(B.q,"Failed to initialize PWA signal service: "+A.b(r),null,null)
x=10
break
case 7:x=1
break
case 10:v=13
q=$.aqh()
x=16
return A.c(q.bU(),$async$T1)
case 16:k.k(B.f,"PWA install service initialized",null,null)
v=1
x=15
break
case 13:v=12
h=u.pop()
p=A.u(h)
k.k(B.q,"Failed to initialize PWA install service: "+A.b(p),null,null)
x=15
break
case 12:x=1
break
case 15:v=18
o=$.dNy()
x=21
return A.c(o.bU(),$async$T1)
case 21:k.k(B.f,"Version update service initialized",null,null)
v=1
x=20
break
case 18:v=17
g=u.pop()
n=A.u(g)
k.k(B.q,"Failed to initialize version update service: "+A.b(n),null,null)
x=20
break
case 17:x=1
break
case 20:x=22
return A.c($.ay().$1$0(y.e).AF(null,null),$async$T1)
case 22:k.k(B.f,"GlobalServiceManager initialized successfully in background",null,null)
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$T1,w)}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[110],C)
C.bW2.prototype={
bU(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$bU=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.c
if(o){x=1
break}u=4
o=s.a
o.k(B.f,"[VERSION_UPDATE] Initializing version update service...",null,null)
r=$.KP()
x=!r.c?7:8
break
case 7:x=9
return A.c(r.bU(),$async$bU)
case 9:case 8:x=10
return A.c(s.PO(),$async$bU)
case 10:s.c=!0
o.k(B.f,"[VERSION_UPDATE] Version update service initialized",null,null)
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.u(n)
s.a.k(B.u,"[VERSION_UPDATE] Failed to initialize: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$bU,w)},
cKr(){var x,w,v,u,t,s,r,q,p,o=null
try{x=b.G.document.querySelector('meta[name="version"]')
if(x!=null){r=x.getAttribute("content")
w=r==null?"1.0.0":r
v=B.e.gM(J.aqA(w,"+"))
this.a.k(B.f,"[VERSION_UPDATE] Current version from HTML meta: "+A.b(v),o,o)
return v}}catch(q){u=A.u(q)
this.a.k(B.q,"[VERSION_UPDATE] Failed to get version from HTML meta: "+A.b(u),o,o)}try{t=$.KP()
if(t.c){p=t.Nh()
return p}}catch(q){s=A.u(q)
this.a.k(B.q,"[VERSION_UPDATE] Failed to get version from AppVersionService: "+A.b(s),o,o)}return"1.0.0"},
PO(){var x=0,w=A.l(y.v),v=1,u=[],t=this,s,r,q,p,o,n
var $async$PO=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
s=t.cKr()
r=$.ay().$1$0(y.l)
x=6
return A.c(r.kh("app_version_stored"),$async$PO)
case 6:q=e
x=q!=null&&q!==s?7:8
break
case 7:t.a.k(B.f,"[VERSION_UPDATE] Version changed: "+q+" -> "+A.b(s),null,null)
x=9
return A.c(t.ajU(),$async$PO)
case 9:case 8:x=10
return A.c(r.aaj("app_version_stored",s),$async$PO)
case 10:v=1
x=5
break
case 3:v=2
n=u.pop()
p=A.u(n)
t.a.k(B.q,"[VERSION_UPDATE] Failed to check version change: "+A.b(p),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$PO,w)},
bwm(){var x=0,w=A.l(y.g),v
var $async$bwm=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=C.dfl(b.G.window.location.href,new C.bW3(),new C.bW4(),y.h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bwm,w)},
ajU(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o
var $async$ajU=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(s.bwm(),$async$ajU)
case 7:r=e
if(r==null){x=1
break}x=8
return A.c(A.fr(r.update(),y.q).nc(B.d3),$async$ajU)
case 8:s.a.k(B.f,"[VERSION_UPDATE] Service Worker update checked",null,null)
u=2
x=6
break
case 4:u=3
o=t.pop()
q=A.u(o)
s.a.k(B.q,"[VERSION_UPDATE] Failed to update Service Worker: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ajU,w)}}
var z=a.updateTypes([])
C.dfm.prototype={
$1(d){return B.c.aO(this.a,this.b.$1(d))},
$S(){return this.c.m("K(0)")}}
C.dfn.prototype={
$2(d,e){var x=this.a
return B.i.bu(J.aB(x.$1(e)),J.aB(x.$1(d)))},
$S(){return this.b.m("y(0,0)")}}
C.bW3.prototype={
$0(){var x=0,w=A.l(y.z),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(A.fr(b.G.window.navigator.serviceWorker.getRegistrations(),y.c),$async$$0)
case 3:u=e
v=y.z.b(u)?u:new A.cP(u,A.V(u).m("cP<1,c5>"))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:1354}
C.bW4.prototype={
$1(d){return d.scope},
$S:1355};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[C.dfm,C.bW4])
w(C.dfn,A.bZ)
w(C.bW2,A.D)
w(C.bW3,A.bv)})()
var y={e:A.A("N_"),c:A.A("v<D?>"),h:A.A("c5"),z:A.A("a4<c5>"),l:A.A("k3"),g:A.A("c5?"),q:A.A("D?"),v:A.A("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"erX","dNy",()=>new C.bW2(A.aW("VersionUpdateService")))})()};
(a=>{a["bi1zj+lEDS8wTBE0RnMJjSVvYr4="]=a.current})($__dart_deferred_initializers__);