((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dvf(d,e,f,g){return new A.U9(d,e,g,f)},
zx(d,e,f,g){var x=null
return A.dSH(d,e,f,g,g)},
dSH(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$zx=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0y()
p.k(B.f,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$zx)
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
$.b0y().k(B.u,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.dvc(r)
p=n
if(p==null)p=q
throw C.t(A.dvf(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$zx,w)},
dve(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0y()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b0y().k(B.u,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.dvc(w)
u=r
if(u==null)u=v
throw C.t(A.dvf(e,w,u,f))}},
dvc(d){var x=J.ap(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.anp
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.anq
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.ant
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.ans
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.anr
return D.anu},
dvd(d){var x,w,v,u,t,s
try{t=J.pS(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.be('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aF.ea(v,null))
t=C.aT(J.aE(u,"message"))
return t}}}if(d instanceof A.U9){t=A.dvd(d.b)
return t}return null}catch(s){return null}},
U9:function U9(d,e,f,g){var _=this
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
D=c[747]
A.U9.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdtq(){var x=A.dvd(this.b)
if(x!=null)return x
return this.c},
$icz:1}
A.Ep.prototype={
V(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.U9,C.G)
x(A.Ep,C.eq)})()
C.aU(b.typeUniverse,JSON.parse('{"U9":{"cz":[]}}'))
var y={a:C.A("a0<o,@>")};(function constants(){D.anp=new A.Ep(0,"permissionDenied")
D.anq=new A.Ep(1,"networkError")
D.anr=new A.Ep(2,"serviceUnavailable")
D.ans=new A.Ep(3,"userBusy")
D.ant=new A.Ep(4,"callTimeout")
D.anu=new A.Ep(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"enE","b0y",()=>C.aW("CallErrorHandler"))})()};
(a=>{a["PO57mYh5iUJqg2bO+Q4msmHz50Y="]=a.current})($__dart_deferred_initializers__);