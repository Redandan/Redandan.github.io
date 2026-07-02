((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dm2(d,e,f,g){return new A.RN(d,e,g,f)},
yX(d,e,f,g){var x=null
return A.dLq(d,e,f,g,g)},
dLq(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yX=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0V()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yX)
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
$.b0V().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dm_(r)
p=n
if(p==null)p=q
throw C.u(A.dm2(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yX,w)},
dm1(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0V()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.b0V().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dm_(w)
u=r
if(u==null)u=v
throw C.u(A.dm2(e,w,u,f))}},
dm_(d){var x=J.an(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.apm
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.apn
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.apq
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.app
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.apo
return D.apr},
dm0(d){var x,w,v,u,t,s
try{t=J.oi(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bu('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.b0.fz(v,null))
t=C.aY(J.aC(u,"message"))
return t}}}if(d instanceof A.RN){t=A.dm0(d.b)
return t}return null}catch(s){return null}},
RN:function RN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D3:function D3(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.RN.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdkB(){var x=A.dm0(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.D3.prototype={
Z(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.RN,C.V)
x(A.D3,C.oa)})()
C.fR(b.typeUniverse,JSON.parse('{"RN":{"cC":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.apm=new A.D3(0,"permissionDenied")
D.apn=new A.D3(1,"networkError")
D.apo=new A.D3(2,"serviceUnavailable")
D.app=new A.D3(3,"userBusy")
D.apq=new A.D3(4,"callTimeout")
D.apr=new A.D3(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ee2","b0V",()=>C.aV("CallErrorHandler"))})()};
(a=>{a["dNjkcP+PS20okxPK0c3380MvXi4="]=a.current})($__dart_deferred_initializers__);