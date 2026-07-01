((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dkt(d,e,f,g){return new A.RA(d,e,g,f)},
yT(d,e,f,g){var x=null
return A.dJL(d,e,f,g,g)},
dJL(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yT=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0h()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yT)
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
$.b0h().k(B.u,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dkq(r)
p=n
if(p==null)p=q
throw C.u(A.dkt(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yT,w)},
dks(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0h()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.b0h().k(B.u,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dkq(w)
u=r
if(u==null)u=v
throw C.u(A.dkt(e,w,u,f))}},
dkq(d){var x=J.an(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aoN
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aoO
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aoR
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aoQ
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aoP
return D.aoS},
dkr(d){var x,w,v,u,t,s
try{t=J.og(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bt('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dG(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fc(v,null))
t=C.aW(J.aC(u,"message"))
return t}}}if(d instanceof A.RA){t=A.dkr(d.b)
return t}return null}catch(s){return null}},
RA:function RA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CZ:function CZ(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.RA.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdhP(){var x=A.dkr(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.CZ.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.RA,C.U)
x(A.CZ,C.o8)})()
C.fQ(b.typeUniverse,JSON.parse('{"RA":{"cC":[]}}'))
var y={a:C.au("V<q,@>")};(function constants(){D.aoN=new A.CZ(0,"permissionDenied")
D.aoO=new A.CZ(1,"networkError")
D.aoP=new A.CZ(2,"serviceUnavailable")
D.aoQ=new A.CZ(3,"userBusy")
D.aoR=new A.CZ(4,"callTimeout")
D.aoS=new A.CZ(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eci","b0h",()=>C.aU("CallErrorHandler"))})()};
(a=>{a["IaF1yJT+h9t8gd9z2oYcY2ifOC4="]=a.current})($__dart_deferred_initializers__);