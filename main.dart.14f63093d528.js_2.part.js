((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={bIx:function bIx(d){this.a=d
this.b=null
this.c=!1},bIy:function bIy(d){this.a=d},bIz:function bIz(d){this.a=d}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[92],C)
C.bIx.prototype={
cw(){var x=0,w=A.l(y.f),v,u=this,t,s,r,q
var $async$cw=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:q=u.c
if(q){x=1
break}try{q=u.a
q.m(B.i,"[PWA] Initializing PWA install service...",null,null)
s=b.G
s.window.addEventListener("beforeinstallprompt",A.dL(new C.bIy(u)))
s.window.addEventListener("appinstalled",A.dL(new C.bIz(u)))
if(u.b8n())q.m(B.i,"[PWA] App is running in standalone mode",null,null)
u.c=!0
q.m(B.i,"[PWA] PWA install service initialized",null,null)}catch(p){t=A.u(p)
u.a.m(B.z,"[PWA] Failed to initialize PWA install service: "+A.b(t),null,null)}case 1:return A.j(v,w)}})
return A.k($async$cw,w)},
b8n(){var x,w,v,u,t
try{u=b.G
if(u.window.matchMedia("(display-mode: standalone)").matches)return!0
try{x=u.window.navigator.standalone
if(x!=null&&J.p(x,!0))return!0}catch(t){w=A.u(t)
this.a.m(B.aR,"navigator.standalone probe failed (non-iOS Safari)",w,null)}return!1}catch(t){v=A.u(t)
this.a.m(B.q,"[PWA] Failed to check installation status: "+A.b(v),null,null)
return!1}},
bhf(){var x=0,w=A.l(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$bhf=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.b
if(m==null){s.a.m(B.q,"[PWA] No deferred prompt available",null,null)
v=!1
x=1
break}u=4
p=s.a
p.m(B.i,"[PWA] Prompting user to install...",null,null)
o=y.a
r=A.yo(m,"prompt",null,null,o)
x=r!=null&&r!=null&&A.jy(r,"Promise")?7:8
break
case 7:x=9
return A.c(A.eZ(A.fy(r),o),$async$bhf)
case 9:case 8:p.m(B.i,"[PWA] Install prompt shown",null,null)
s.b=null
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.u(l)
s.a.m(B.z,"[PWA] Failed to prompt install: "+A.b(q),null,null)
s.b=null
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$bhf,w)}}
var z=a.updateTypes([])
C.bIy.prototype={
$1(d){var x
d.preventDefault()
x=this.a
x.b=d
$.b6g().aSr(B.a6z,!0)
x.a.m(B.i,"[PWA] beforeinstallprompt event captured",null,null)},
$S:29}
C.bIz.prototype={
$1(d){var x=this.a
x.a.m(B.i,"[PWA] App installed successfully",null,null)
x.b=null
$.b6g().dvF(B.a6y)},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.bIx,A.A)
w(A.bN,[C.bIy,C.bIz])})()
var y={e:A.C("B"),a:A.C("A?"),f:A.C("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"ez0","dt7",()=>new C.bIx(A.b4("PwaInstallService")))})()};
(a=>{a["7dD228UytR/VqpKeAjWdEUQVqSM="]=a.current})($__dart_deferred_initializers__);