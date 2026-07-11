((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
doU(d,e,f,g){return new A.Sk(d,e,g,f)},
z_(d,e,f,g){var x=null
return A.dOT(d,e,f,g,g)},
dOT(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$z_=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b1Z()
p.k(B.h,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$z_)
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
$.b1Z().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.doR(r)
p=n
if(p==null)p=q
throw C.t(A.doU(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$z_,w)},
doT(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b1Z()
u.k(B.h,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.h,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b1Z().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.doR(w)
u=r
if(u==null)u=v
throw C.t(A.doU(e,w,u,f))}},
doR(d){var x=J.ap(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aqb
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aqc
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aqf
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aqe
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aqd
return D.aqg},
doS(d){var x,w,v,u,t,s
try{t=J.pR(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bn('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dv(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fg(v,null))
t=C.aV(J.aE(u,"message"))
return t}}}if(d instanceof A.Sk){t=A.doS(d.b)
return t}return null}catch(s){return null}},
Sk:function Sk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dc:function Dc(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.Sk.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdnU(){var x=A.doS(this.b)
if(x!=null)return x
return this.c},
$icx:1}
A.Dc.prototype={
Z(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.Sk,C.V)
x(A.Dc,C.oh)})()
C.fT(b.typeUniverse,JSON.parse('{"Sk":{"cx":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.aqb=new A.Dc(0,"permissionDenied")
D.aqc=new A.Dc(1,"networkError")
D.aqd=new A.Dc(2,"serviceUnavailable")
D.aqe=new A.Dc(3,"userBusy")
D.aqf=new A.Dc(4,"callTimeout")
D.aqg=new A.Dc(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ei3","b1Z",()=>C.aY("CallErrorHandler"))})()};
(a=>{a["XXr5zoAzGivh0xQcy02/cHINi9g="]=a.current})($__dart_deferred_initializers__);