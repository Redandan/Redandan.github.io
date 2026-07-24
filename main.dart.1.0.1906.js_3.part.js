((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
drF(d,e,f,g){return new A.SP(d,e,g,f)},
z5(d,e,f,g){var x=null
return A.dS2(d,e,f,g,g)},
dS2(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$z5=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b2K()
p.k(B.h,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$z5)
case 7:s=j
p.k(B.h,"Call operation completed successfully: "+e,null,null)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
r=C.u(m)
$.b2K().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.drC(r)
p=n
if(p==null)p=q
throw C.t(A.drF(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$z5,w)},
drE(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b2K()
u.k(B.h,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.h,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b2K().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.drC(w)
u=r
if(u==null)u=v
throw C.t(A.drF(e,w,u,f))}},
drC(d){var x=J.ap(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aqV
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aqW
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aqZ
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aqY
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aqX
return D.ar_},
drD(d){var x,w,v,u,t,s
try{t=J.pU(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bk('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dz(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aR.f1(v,null))
t=C.aS(J.aE(u,"message"))
return t}}}if(d instanceof A.SP){t=A.drD(d.b)
return t}return null}catch(s){return null}},
SP:function SP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dm:function Dm(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[91]
A.SP.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdq0(){var x=A.drD(this.b)
if(x!=null)return x
return this.c},
$icy:1}
A.Dm.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.SP,C.V)
x(A.Dm,C.oi)})()
C.fU(b.typeUniverse,JSON.parse('{"SP":{"cy":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.aqV=new A.Dm(0,"permissionDenied")
D.aqW=new A.Dm(1,"networkError")
D.aqX=new A.Dm(2,"serviceUnavailable")
D.aqY=new A.Dm(3,"userBusy")
D.aqZ=new A.Dm(4,"callTimeout")
D.ar_=new A.Dm(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ely","b2K",()=>C.aY("CallErrorHandler"))})()};
(a=>{a["mHzM6cg0qeMhP4ihfrIasBfhrm8="]=a.current})($__dart_deferred_initializers__);