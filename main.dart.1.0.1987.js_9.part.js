((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dv8(d,e,f,g){return new A.U3(d,e,g,f)},
zw(d,e,f,g){var x=null
return A.dSz(d,e,f,g,g)},
dSz(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$zw=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0w()
p.k(B.f,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$zw)
case 7:s=j
p.k(B.f,"Call operation completed successfully: "+e,null,null)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
r=C.u(m)
$.b0w().k(B.v,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.dv5(r)
p=n
if(p==null)p=q
throw C.t(A.dv8(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$zw,w)},
dv7(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0w()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b0w().k(B.v,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.dv5(w)
u=r
if(u==null)u=v
throw C.t(A.dv8(e,w,u,f))}},
dv5(d){var x=J.ap(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.anp
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.anq
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.ant
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.ans
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.anr
return D.anu},
dv6(d){var x,w,v,u,t,s
try{t=J.pT(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.be('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aF.e3(v,null))
t=C.aT(J.aJ(u,"message"))
return t}}}if(d instanceof A.U3){t=A.dv6(d.b)
return t}return null}catch(s){return null}},
U3:function U3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ep:function Ep(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[113],A)
D=c[745]
A.U3.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdtm(){var x=A.dv6(this.b)
if(x!=null)return x
return this.c},
$icz:1}
A.Ep.prototype={
U(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.U3,C.G)
x(A.Ep,C.eq)})()
C.aU(b.typeUniverse,JSON.parse('{"U3":{"cz":[]}}'))
var y={a:C.A("a0<o,@>")};(function constants(){D.anp=new A.Ep(0,"permissionDenied")
D.anq=new A.Ep(1,"networkError")
D.anr=new A.Ep(2,"serviceUnavailable")
D.ans=new A.Ep(3,"userBusy")
D.ant=new A.Ep(4,"callTimeout")
D.anu=new A.Ep(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ens","b0w",()=>C.aX("CallErrorHandler"))})()};
(a=>{a["AtjdWPLwvCC57QS8I42+36BT+9w="]=a.current})($__dart_deferred_initializers__);