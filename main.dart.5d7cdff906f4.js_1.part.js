((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dTR(d,e,f,g){return C.f1H(d,e,f,g,g.k("0?"))},
f1H(d,e,f,g,h){var x=0,w=A.l(h),v,u,t
var $async$dTR=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:t=J
x=3
return A.c(e.$0().eQ(B.cP),$async$dTR)
case 3:u=t.hs(j,new C.dTS(d,f,g)).eh(0)
B.d.fU(u,new C.dTT(f,g))
v=u.length===0?null:B.d.gR(u)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$dTR,w)},
dTS:function dTS(d,e,f){this.a=d
this.b=e
this.c=f},
dTT:function dTT(d,e){this.a=d
this.b=e},
chP:function chP(d){this.a=d
this.c=!1},
chQ:function chQ(){},
chR:function chR(){},
XE(){var x=0,w=A.l(y.v),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$XE=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:k=A.b7("startup_background_services")
$.uz()
m=b.G
m.window.dispatchEvent(new m.Event("agora-background-services-started"))
v=3
x=6
return A.c($.OC().cu(),$async$XE)
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
s=$.bh3()
x=11
return A.c(s.cu(),$async$XE)
case 11:s.bEG()
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
q=$.ayT()
x=16
return A.c(q.cu(),$async$XE)
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
o=$.euM()
x=21
return A.c(o.cu(),$async$XE)
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
return A.c($.am().$1$0(y.e).Hc(null,null),$async$XE)
case 22:k.m(B.i,"GlobalServiceManager initialized successfully in background",null,null)
return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$XE,w)}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[108],C)
C.chP.prototype={
cu(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$cu=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.c
if(o){x=1
break}u=4
o=s.a
o.m(B.i,"[VERSION_UPDATE] Initializing version update service...",null,null)
r=$.Oz()
x=!r.c?7:8
break
case 7:x=9
return A.c(r.cu(),$async$cu)
case 9:case 8:x=10
return A.c(s.YC(),$async$cu)
case 10:s.c=!0
o.m(B.i,"[VERSION_UPDATE] Version update service initialized",null,null)
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.u(n)
s.a.m(B.E,"[VERSION_UPDATE] Failed to initialize: "+A.b(q),null,null)
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cu,w)},
d9l(){var x,w,v,u,t,s,r,q,p,o=null
try{x=b.G.document.querySelector('meta[name="version"]')
if(x!=null){r=x.getAttribute("content")
w=r==null?"1.0.0":r
v=B.d.gR(J.Y_(w,"+"))
this.a.m(B.i,"[VERSION_UPDATE] Current version from HTML meta: "+A.b(v),o,o)
return v}}catch(q){u=A.u(q)
this.a.m(B.t,"[VERSION_UPDATE] Failed to get version from HTML meta: "+A.b(u),o,o)}try{t=$.Oz()
if(t.c){p=t.Vf()
return p}}catch(q){s=A.u(q)
this.a.m(B.t,"[VERSION_UPDATE] Failed to get version from AppVersionService: "+A.b(s),o,o)}return"1.0.0"},
YC(){var x=0,w=A.l(y.v),v=1,u=[],t=this,s,r,q,p,o,n
var $async$YC=A.h(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
s=t.d9l()
r=$.am().$1$0(y.l)
x=6
return A.c(r.lj("app_version_stored"),$async$YC)
case 6:q=e
x=q!=null&&q!==s?7:8
break
case 7:t.a.m(B.i,"[VERSION_UPDATE] Version changed: "+q+" -> "+A.b(s),null,null)
x=9
return A.c(t.aw8(),$async$YC)
case 9:case 8:x=10
return A.c(r.zV("app_version_stored",s),$async$YC)
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
return A.k($async$YC,w)},
bLC(){var x=0,w=A.l(y.g),v
var $async$bLC=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:v=C.dTR(b.G.window.location.href,new C.chQ(),new C.chR(),y.h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bLC,w)},
aw8(){var x=0,w=A.l(y.v),v,u=2,t=[],s=this,r,q,p,o
var $async$aw8=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.c(s.bLC(),$async$aw8)
case 7:r=e
if(r==null){x=1
break}x=8
return A.c(A.fi(r.update(),y.q).eQ(B.cP),$async$aw8)
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
return A.k($async$aw8,w)}}
var z=a.updateTypes([])
C.dTS.prototype={
$1(d){return B.b.aR(this.a,this.b.$1(d))},
$S(){return this.c.k("F(0)")}}
C.dTT.prototype={
$2(d,e){var x=this.a
return B.h.bn(J.aC(x.$1(e)),J.aC(x.$1(d)))},
$S(){return this.b.k("y(0,0)")}}
C.chQ.prototype={
$0(){var x=0,w=A.l(y.z),v,u
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(A.fi(b.G.window.navigator.serviceWorker.getRegistrations(),y.c),$async$$0)
case 3:u=e
v=y.z.b(u)?u:new A.db(u,A.V(u).k("db<1,ca>"))
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$$0,w)},
$S:1751}
C.chR.prototype={
$1(d){return d.scope},
$S:1752};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[C.dTS,C.chR])
w(C.dTT,A.c9)
w(C.chP,A.A)
w(C.chQ,A.bu)})()
var y={e:A.C("R0"),c:A.C("v<A?>"),h:A.C("ca"),z:A.C("a1<ca>"),l:A.C("ec"),g:A.C("ca?"),q:A.C("A?"),v:A.C("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"fcZ","euM",()=>new C.chP(A.b7("VersionUpdateService")))})()};
(a=>{a["5SZLiMsIeoAOaxho3MK0GH1Pl2o="]=a.current})($__dart_deferred_initializers__);