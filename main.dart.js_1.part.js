((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dn7(d,e,f,g){return C.eq3(d,e,f,g,g.k("0?"))},
eq3(d,e,f,g,h){var x=0,w=A.l(h),v,u,t
var $async$dn7=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:t=J
x=3
return A.c(e.$0().fZ(B.cV),$async$dn7)
case 3:u=t.i0(j,new C.dn8(d,f,g)).eP(0)
B.d.hF(u,new C.dn9(f,g))
v=u.length===0?null:B.d.gV(u)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dn7,w)},
dn8:function dn8(d,e,f){this.a=d
this.b=e
this.c=f},
dn9:function dn9(d,e){this.a=d
this.b=e},
c0e:function c0e(d){this.a=d
this.c=!1},
c0f:function c0f(){},
c0g:function c0g(){},
Ty(){var x=0,w=A.l(y.v),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ty=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:k=A.b4("startup_background_services")
$.Aj()
m=b.G
m.window.dispatchEvent(new m.Event("agora-background-services-started"))
v=3
x=6
return A.c($.L3().cw(),$async$Ty)
case 6:k.m(B.i,"PWA log upload service initialized",null,null)
v=1
x=5
break
case 3:v=2
j=u.pop()
t=A.u(j)
k.m(B.q,"Failed to initialize PWA log upload service: "+A.b(t),null,null)
x=5
break
case 2:x=1
break
case 5:v=8
s=$.b6g()
x=11
return A.c(s.cw(),$async$Ty)
case 11:s.bhr()
k.m(B.i,"PWA signal service initialized",null,null)
v=1
x=10
break
case 8:v=7
i=u.pop()
r=A.u(i)
k.m(B.q,"Failed to initialize PWA signal service: "+A.b(r),null,null)
x=10
break
case 7:x=1
break
case 10:v=13
q=$.dt7()
x=16
return A.c(q.cw(),$async$Ty)
case 16:k.m(B.i,"PWA install service initialized",null,null)
v=1
x=15
break
case 13:v=12
h=u.pop()
p=A.u(h)
k.m(B.q,"Failed to initialize PWA install service: "+A.b(p),null,null)
x=15
break
case 12:x=1
break
case 15:v=18
o=$.dVV()
x=21
return A.c(o.cw(),$async$Ty)
case 21:k.m(B.i,"Version update service initialized",null,null)
v=1
x=20
break
case 18:v=17
g=u.pop()
n=A.u(g)
k.m(B.q,"Failed to initialize version update service: "+A.b(n),null,null)
x=20
break
case 17:x=1
break
case 20:x=22
return A.c($.ap().$1$0(y.e).E4(null,null),$async$Ty)
case 22:k.m(B.i,"GlobalServiceManager initialized successfully in background",null,null)
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$Ty,w)}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[82],C)
C.c0e.prototype={
cw(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$cw=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.c
if(o){x=1
break}u=4
o=s.a
o.m(B.i,"[VERSION_UPDATE] Initializing version update service...",null,null)
r=$.L_()
x=!r.c?7:8
break
case 7:x=9
return A.c(r.cw(),$async$cw)
case 9:case 8:x=10
return A.c(s.RN(),$async$cw)
case 10:s.c=!0
o.m(B.i,"[VERSION_UPDATE] Version update service initialized",null,null)
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.u(n)
s.a.m(B.z,"[VERSION_UPDATE] Failed to initialize: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cw,w)},
cDc(){var x,w,v,u,t,s,r,q,p,o=null
try{x=b.G.document.querySelector('meta[name="version"]')
if(x!=null){r=x.getAttribute("content")
w=r==null?"1.0.0":r
v=B.d.gV(J.a3t(w,"+"))
this.a.m(B.i,"[VERSION_UPDATE] Current version from HTML meta: "+A.b(v),o,o)
return v}}catch(q){u=A.u(q)
this.a.m(B.q,"[VERSION_UPDATE] Failed to get version from HTML meta: "+A.b(u),o,o)}try{t=$.L_()
if(t.c){p=t.OX()
return p}}catch(q){s=A.u(q)
this.a.m(B.q,"[VERSION_UPDATE] Failed to get version from AppVersionService: "+A.b(s),o,o)}return"1.0.0"},
RN(){var x=0,w=A.l(y.v),v=1,u=[],t=this,s,r,q,p,o,n
var $async$RN=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
s=t.cDc()
r=$.ap().$1$0(y.l)
x=6
return A.c(r.kK("app_version_stored"),$async$RN)
case 6:q=e
x=q!=null&&q!==s?7:8
break
case 7:t.a.m(B.i,"[VERSION_UPDATE] Version changed: "+q+" -> "+A.b(s),null,null)
x=9
return A.c(t.akV(),$async$RN)
case 9:case 8:x=10
return A.c(r.xZ("app_version_stored",s),$async$RN)
case 10:v=1
x=5
break
case 3:v=2
n=u.pop()
p=A.u(n)
t.a.m(B.q,"[VERSION_UPDATE] Failed to check version change: "+A.b(p),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$RN,w)},
bnK(){var x=0,w=A.l(y.g),v
var $async$bnK=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=C.dn7(b.G.window.location.href,new C.c0f(),new C.c0g(),y.h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bnK,w)},
akV(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o
var $async$akV=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(s.bnK(),$async$akV)
case 7:r=e
if(r==null){x=1
break}x=8
return A.c(A.eZ(r.update(),y.q).fZ(B.cV),$async$akV)
case 8:s.a.m(B.i,"[VERSION_UPDATE] Service Worker update checked",null,null)
u=2
x=6
break
case 4:u=3
o=t.pop()
q=A.u(o)
s.a.m(B.q,"[VERSION_UPDATE] Failed to update Service Worker: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$akV,w)}}
var z=a.updateTypes([])
C.dn8.prototype={
$1(d){return B.b.aT(this.a,this.b.$1(d))},
$S(){return this.c.k("B(0)")}}
C.dn9.prototype={
$2(d,e){var x=this.a
return B.f.c6(J.aI(x.$1(e)),J.aI(x.$1(d)))},
$S(){return this.b.k("w(0,0)")}}
C.c0f.prototype={
$0(){var x=0,w=A.l(y.z),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(A.eZ(b.G.window.navigator.serviceWorker.getRegistrations(),y.c),$async$$0)
case 3:u=e
v=y.z.b(u)?u:new A.d2(u,A.P(u).k("d2<1,bW>"))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:1561}
C.c0g.prototype={
$1(d){return d.scope},
$S:1562};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bN,[C.dn8,C.c0g])
w(C.dn9,A.cp)
w(C.c0e,A.A)
w(C.c0f,A.bT)})()
var y={e:A.C("Nn"),c:A.C("v<A?>"),h:A.C("bW"),z:A.C("V<bW>"),l:A.C("fL"),g:A.C("bW?"),q:A.C("A?"),v:A.C("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"eAX","dVV",()=>new C.c0e(A.b4("VersionUpdateService")))})()};
(a=>{a["MxRxRUD2G6PENxPYAmDVYCITj7w="]=a.current})($__dart_deferred_initializers__);