((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dvn(d,e,f,g){return new A.U8(d,e,g,f)},
zw(d,e,f,g){var x=null
return A.dSS(d,e,f,g,g)},
dSS(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$zw=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0G()
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
$.b0G().k(B.v,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.dvk(r)
p=n
if(p==null)p=q
throw C.t(A.dvn(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$zw,w)},
dvm(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0G()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b0G().k(B.v,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.dvk(w)
u=r
if(u==null)u=v
throw C.t(A.dvn(e,w,u,f))}},
dvk(d){var x=J.ap(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.anm
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.ann
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.anq
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.anp
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.ano
return D.anr},
dvl(d){var x,w,v,u,t,s
try{t=J.pT(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bc('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aF.dP(v,null))
t=C.aT(J.aJ(u,"message"))
return t}}}if(d instanceof A.U8){t=A.dvl(d.b)
return t}return null}catch(s){return null}},
U8:function U8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Eq:function Eq(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[113],A)
D=c[732]
A.U8.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdtq(){var x=A.dvl(this.b)
if(x!=null)return x
return this.c},
$icw:1}
A.Eq.prototype={
U(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.U8,C.G)
x(A.Eq,C.es)})()
C.aV(b.typeUniverse,JSON.parse('{"U8":{"cw":[]}}'))
var y={a:C.A("a0<o,@>")};(function constants(){D.anm=new A.Eq(0,"permissionDenied")
D.ann=new A.Eq(1,"networkError")
D.ano=new A.Eq(2,"serviceUnavailable")
D.anp=new A.Eq(3,"userBusy")
D.anq=new A.Eq(4,"callTimeout")
D.anr=new A.Eq(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"enN","b0G",()=>C.aX("CallErrorHandler"))})()};
(a=>{a["zD+kCs5drBXYJFx8SxdUtX0EOVc="]=a.current})($__dart_deferred_initializers__);