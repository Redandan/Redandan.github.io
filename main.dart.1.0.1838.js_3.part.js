((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dm3(d,e,f,g){return new A.RO(d,e,g,f)},
yY(d,e,f,g){var x=null
return A.dLr(d,e,f,g,g)},
dLr(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yY=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0W()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yY)
case 7:s=j
p.k(B.d,"Call operation completed successfully: "+e,null,null)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
r=C.t(m)
$.b0W().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dm0(r)
p=n
if(p==null)p=q
throw C.u(A.dm3(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yY,w)},
dm2(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0W()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.b0W().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dm0(w)
u=r
if(u==null)u=v
throw C.u(A.dm3(e,w,u,f))}},
dm0(d){var x=J.an(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.apn
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.apo
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.apr
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.apq
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.app
return D.aps},
dm1(d){var x,w,v,u,t,s
try{t=J.oi(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bu('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.b0.fz(v,null))
t=C.aY(J.aC(u,"message"))
return t}}}if(d instanceof A.RO){t=A.dm1(d.b)
return t}return null}catch(s){return null}},
RO:function RO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D5:function D5(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.RO.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdkK(){var x=A.dm1(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.D5.prototype={
Z(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.RO,C.V)
x(A.D5,C.oa)})()
C.fR(b.typeUniverse,JSON.parse('{"RO":{"cC":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.apn=new A.D5(0,"permissionDenied")
D.apo=new A.D5(1,"networkError")
D.app=new A.D5(2,"serviceUnavailable")
D.apq=new A.D5(3,"userBusy")
D.apr=new A.D5(4,"callTimeout")
D.aps=new A.D5(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ee3","b0W",()=>C.aV("CallErrorHandler"))})()};
(a=>{a["fdeuZooisJDEKpZM3uvk9hBf31w="]=a.current})($__dart_deferred_initializers__);