((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dpu(d,e,f,g){return new A.Sn(d,e,g,f)},
z2(d,e,f,g){var x=null
return A.dPv(d,e,f,g,g)},
dPv(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$z2=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b24()
p.k(B.h,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$z2)
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
$.b24().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dpr(r)
p=n
if(p==null)p=q
throw C.t(A.dpu(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$z2,w)},
dpt(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b24()
u.k(B.h,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.h,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b24().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dpr(w)
u=r
if(u==null)u=v
throw C.t(A.dpu(e,w,u,f))}},
dpr(d){var x=J.ap(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aqw
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aqx
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aqA
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aqz
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aqy
return D.aqB},
dps(d){var x,w,v,u,t,s
try{t=J.pS(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bn('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dv(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fg(v,null))
t=C.aU(J.aE(u,"message"))
return t}}}if(d instanceof A.Sn){t=A.dps(d.b)
return t}return null}catch(s){return null}},
Sn:function Sn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Df:function Df(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.Sn.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdoI(){var x=A.dps(this.b)
if(x!=null)return x
return this.c},
$icx:1}
A.Df.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.Sn,C.V)
x(A.Df,C.nk)})()
C.fU(b.typeUniverse,JSON.parse('{"Sn":{"cx":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.aqw=new A.Df(0,"permissionDenied")
D.aqx=new A.Df(1,"networkError")
D.aqy=new A.Df(2,"serviceUnavailable")
D.aqz=new A.Df(3,"userBusy")
D.aqA=new A.Df(4,"callTimeout")
D.aqB=new A.Df(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eiF","b24",()=>C.aY("CallErrorHandler"))})()};
(a=>{a["HnP+QnBQLINFSqOG7RUzor23SPk="]=a.current})($__dart_deferred_initializers__);