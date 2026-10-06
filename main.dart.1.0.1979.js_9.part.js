((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dut(d,e,f,g){return new A.U2(d,e,g,f)},
zu(d,e,f,g){var x=null
return A.dRT(d,e,f,g,g)},
dRT(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$zu=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0j()
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
$.b0j().k(B.u,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.duq(r)
p=n
if(p==null)p=q
throw C.t(A.dut(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$zu,w)},
dus(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0j()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b0j().k(B.u,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.duq(w)
u=r
if(u==null)u=v
throw C.t(A.dut(e,w,u,f))}},
duq(d){var x=J.ap(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.anf
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.ang
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.anj
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.ani
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.anh
return D.ank},
dur(d){var x,w,v,u,t,s
try{t=J.pR(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bg('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aO.ey(v,null))
t=C.aT(J.aG(u,"message"))
return t}}}if(d instanceof A.U2){t=A.dur(d.b)
return t}return null}catch(s){return null}},
U2:function U2(d,e,f,g){var _=this
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
D=c[745]
A.U2.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdt7(){var x=A.dur(this.b)
if(x!=null)return x
return this.c},
$icF:1}
A.El.prototype={
W(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.U2,C.G)
x(A.El,C.eq)})()
C.aV(b.typeUniverse,JSON.parse('{"U2":{"cF":[]}}'))
var y={a:C.A("a0<o,@>")};(function constants(){D.anf=new A.El(0,"permissionDenied")
D.ang=new A.El(1,"networkError")
D.anh=new A.El(2,"serviceUnavailable")
D.ani=new A.El(3,"userBusy")
D.anj=new A.El(4,"callTimeout")
D.ank=new A.El(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"emM","b0j",()=>C.aW("CallErrorHandler"))})()};
(a=>{a["pq6WcWpE28JeJuQ54O3XXQArEDg="]=a.current})($__dart_deferred_initializers__);