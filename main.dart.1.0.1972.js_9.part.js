((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
duq(d,e,f,g){return new A.U1(d,e,g,f)},
zu(d,e,f,g){var x=null
return A.dRO(d,e,f,g,g)},
dRO(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$zu=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0h()
p.k(B.f,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$zu)
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
$.b0h().k(B.u,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.dun(r)
p=n
if(p==null)p=q
throw C.t(A.duq(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$zu,w)},
dup(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0h()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b0h().k(B.u,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.dun(w)
u=r
if(u==null)u=v
throw C.t(A.duq(e,w,u,f))}},
dun(d){var x=J.ap(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.ang
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.anh
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.ank
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.anj
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.ani
return D.anl},
duo(d){var x,w,v,u,t,s
try{t=J.pR(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bg('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aP.eG(v,null))
t=C.aT(J.aH(u,"message"))
return t}}}if(d instanceof A.U1){t=A.duo(d.b)
return t}return null}catch(s){return null}},
U1:function U1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
El:function El(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[113],A)
D=c[747]
A.U1.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdti(){var x=A.duo(this.b)
if(x!=null)return x
return this.c},
$icG:1}
A.El.prototype={
W(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.U1,C.G)
x(A.El,C.el)})()
C.aU(b.typeUniverse,JSON.parse('{"U1":{"cG":[]}}'))
var y={a:C.A("a0<o,@>")};(function constants(){D.ang=new A.El(0,"permissionDenied")
D.anh=new A.El(1,"networkError")
D.ani=new A.El(2,"serviceUnavailable")
D.anj=new A.El(3,"userBusy")
D.ank=new A.El(4,"callTimeout")
D.anl=new A.El(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"emF","b0h",()=>C.aW("CallErrorHandler"))})()};
(a=>{a["2hNf52hZBWDyaXa3Z2B9Nd5QW6k="]=a.current})($__dart_deferred_initializers__);