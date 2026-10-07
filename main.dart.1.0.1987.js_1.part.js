((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dgu(d,e,f,g){return C.eio(d,e,f,g,g.m("0?"))},
eio(d,e,f,g,h){var x=0,w=A.l(h),v,u,t
var $async$dgu=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:t=J
x=3
return A.c(e.$0().iu(B.cR),$async$dgu)
case 3:u=t.fT(j,new C.dgv(d,f,g)).cJ(0)
B.e.dS(u,new C.dgw(f,g))
v=u.length===0?null:B.e.gM(u)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dgu,w)},
dgv:function dgv(d,e,f){this.a=d
this.b=e
this.c=f},
dgw:function dgw(d,e){this.a=d
this.b=e},
bWs:function bWs(d){this.a=d
this.c=!1},
bWt:function bWt(){},
bWu:function bWu(){},
T1(){var x=0,w=A.l(y.v),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T1=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:k=A.aX("startup_background_services")
$.a2p()
m=b.G
m.window.dispatchEvent(new m.Event("agora-background-services-started"))
v=3
x=6
return A.c($.Kw().bW(),$async$T1)
case 6:k.k(B.f,"PWA log upload service initialized",null,null)
v=1
x=5
break
case 3:v=2
j=u.pop()
t=A.u(j)
k.k(B.t,"Failed to initialize PWA log upload service: "+A.b(t),null,null)
x=5
break
case 2:x=1
break
case 5:v=8
s=$.b0G()
x=11
return A.c(s.bW(),$async$T1)
case 11:s.bq7()
k.k(B.f,"PWA signal service initialized",null,null)
v=1
x=10
break
case 8:v=7
i=u.pop()
r=A.u(i)
k.k(B.t,"Failed to initialize PWA signal service: "+A.b(r),null,null)
x=10
break
case 7:x=1
break
case 10:v=13
q=$.aqp()
x=16
return A.c(q.bW(),$async$T1)
case 16:k.k(B.f,"PWA install service initialized",null,null)
v=1
x=15
break
case 13:v=12
h=u.pop()
p=A.u(h)
k.k(B.t,"Failed to initialize PWA install service: "+A.b(p),null,null)
x=15
break
case 12:x=1
break
case 15:v=18
o=$.dO6()
x=21
return A.c(o.bW(),$async$T1)
case 21:k.k(B.f,"Version update service initialized",null,null)
v=1
x=20
break
case 18:v=17
g=u.pop()
n=A.u(g)
k.k(B.t,"Failed to initialize version update service: "+A.b(n),null,null)
x=20
break
case 17:x=1
break
case 20:x=22
return A.c($.aw().$1$0(y.e).AH(null,null),$async$T1)
case 22:k.k(B.f,"GlobalServiceManager initialized successfully in background",null,null)
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$T1,w)}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[108],C)
C.bWs.prototype={
bW(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$bW=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.c
if(o){x=1
break}u=4
o=s.a
o.k(B.f,"[VERSION_UPDATE] Initializing version update service...",null,null)
r=$.Ku()
x=!r.c?7:8
break
case 7:x=9
return A.c(r.bW(),$async$bW)
case 9:case 8:x=10
return A.c(s.PP(),$async$bW)
case 10:s.c=!0
o.k(B.f,"[VERSION_UPDATE] Version update service initialized",null,null)
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.u(n)
s.a.k(B.v,"[VERSION_UPDATE] Failed to initialize: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$bW,w)},
cKq(){var x,w,v,u,t,s,r,q,p,o=null
try{x=b.G.document.querySelector('meta[name="version"]')
if(x!=null){r=x.getAttribute("content")
w=r==null?"1.0.0":r
v=B.e.gM(J.b16(w,"+"))
this.a.k(B.f,"[VERSION_UPDATE] Current version from HTML meta: "+A.b(v),o,o)
return v}}catch(q){u=A.u(q)
this.a.k(B.t,"[VERSION_UPDATE] Failed to get version from HTML meta: "+A.b(u),o,o)}try{t=$.Ku()
if(t.c){p=t.Nj()
return p}}catch(q){s=A.u(q)
this.a.k(B.t,"[VERSION_UPDATE] Failed to get version from AppVersionService: "+A.b(s),o,o)}return"1.0.0"},
PP(){var x=0,w=A.l(y.v),v=1,u=[],t=this,s,r,q,p,o,n
var $async$PP=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
s=t.cKq()
r=$.aw().$1$0(y.l)
x=6
return A.c(r.kk("app_version_stored"),$async$PP)
case 6:q=e
x=q!=null&&q!==s?7:8
break
case 7:t.a.k(B.f,"[VERSION_UPDATE] Version changed: "+q+" -> "+A.b(s),null,null)
x=9
return A.c(t.ak2(),$async$PP)
case 9:case 8:x=10
return A.c(r.aas("app_version_stored",s),$async$PP)
case 10:v=1
x=5
break
case 3:v=2
n=u.pop()
p=A.u(n)
t.a.k(B.t,"[VERSION_UPDATE] Failed to check version change: "+A.b(p),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$PP,w)},
bwn(){var x=0,w=A.l(y.g),v
var $async$bwn=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=C.dgu(b.G.window.location.href,new C.bWt(),new C.bWu(),y.h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bwn,w)},
ak2(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o
var $async$ak2=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(s.bwn(),$async$ak2)
case 7:r=e
if(r==null){x=1
break}x=8
return A.c(A.fc(r.update(),y.q).iu(B.cR),$async$ak2)
case 8:s.a.k(B.f,"[VERSION_UPDATE] Service Worker update checked",null,null)
u=2
x=6
break
case 4:u=3
o=t.pop()
q=A.u(o)
s.a.k(B.t,"[VERSION_UPDATE] Failed to update Service Worker: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$ak2,w)}}
var z=a.updateTypes([])
C.dgv.prototype={
$1(d){return B.c.aN(this.a,this.b.$1(d))},
$S(){return this.c.m("K(0)")}}
C.dgw.prototype={
$2(d,e){var x=this.a
return B.i.bt(J.aD(x.$1(e)),J.aD(x.$1(d)))},
$S(){return this.b.m("z(0,0)")}}
C.bWt.prototype={
$0(){var x=0,w=A.l(y.z),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(A.fc(b.G.window.navigator.serviceWorker.getRegistrations(),y.c),$async$$0)
case 3:u=e
v=y.z.b(u)?u:new A.cN(u,A.V(u).m("cN<1,bW>"))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:1557}
C.bWu.prototype={
$1(d){return d.scope},
$S:1558};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[C.dgv,C.bWu])
w(C.dgw,A.c1)
w(C.bWs,A.G)
w(C.bWt,A.bv)})()
var y={e:A.A("MX"),c:A.A("v<G?>"),h:A.A("bW"),z:A.A("a6<bW>"),l:A.A("kl"),g:A.A("bW?"),q:A.A("G?"),v:A.A("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"esB","dO6",()=>new C.bWs(A.aX("VersionUpdateService")))})()};
(a=>{a["ryEi0OJep4PvqjCz5/dFzVd3C90="]=a.current})($__dart_deferred_initializers__);