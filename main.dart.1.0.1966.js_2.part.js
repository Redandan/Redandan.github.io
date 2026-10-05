((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dsW(d,e,f,g){return new A.T5(d,e,g,f)},
yQ(d,e,f,g){var x=null
return A.dQ8(d,e,f,g,g)},
dQ8(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yQ=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b07()
p.k(B.f,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yQ)
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
$.b07().k(B.u,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.dsT(r)
p=n
if(p==null)p=q
throw C.t(A.dsW(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$yQ,w)},
dsV(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b07()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b07().k(B.u,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.dsT(w)
u=r
if(u==null)u=v
throw C.t(A.dsW(e,w,u,f))}},
dsT(d){var x=J.ao(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.anr
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.ans
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.anv
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.anu
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.ant
return D.anw},
dsU(d){var x,w,v,u,t,s
try{t=J.py(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.be('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aP.eG(v,null))
t=C.aT(J.aH(u,"message"))
return t}}}if(d instanceof A.T5){t=A.dsU(d.b)
return t}return null}catch(s){return null}},
T5:function T5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dp:function Dp(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[27],A)
D=c[93]
A.T5.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdtd(){var x=A.dsU(this.b)
if(x!=null)return x
return this.c},
$icB:1}
A.Dp.prototype={
W(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.T5,C.T)
x(A.Dp,C.ng)})()
C.fu(b.typeUniverse,JSON.parse('{"T5":{"cB":[]}}'))
var y={a:C.au("a3<q,@>")};(function constants(){D.anr=new A.Dp(0,"permissionDenied")
D.ans=new A.Dp(1,"networkError")
D.ant=new A.Dp(2,"serviceUnavailable")
D.anu=new A.Dp(3,"userBusy")
D.anv=new A.Dp(4,"callTimeout")
D.anw=new A.Dp(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ehg","b07",()=>C.aV("CallErrorHandler"))})()};
(a=>{a["FvIFqFs3hlG0cZyLhTVmxemQiXY="]=a.current})($__dart_deferred_initializers__);