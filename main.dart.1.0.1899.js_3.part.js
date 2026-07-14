((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dqb(d,e,f,g){return new A.St(d,e,g,f)},
z3(d,e,f,g){var x=null
return A.dQo(d,e,f,g,g)},
dQo(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$z3=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b2m()
p.k(B.h,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$z3)
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
$.b2m().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dq8(r)
p=n
if(p==null)p=q
throw C.t(A.dqb(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$z3,w)},
dqa(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b2m()
u.k(B.h,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.h,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b2m().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dq8(w)
u=r
if(u==null)u=v
throw C.t(A.dqb(e,w,u,f))}},
dq8(d){var x=J.ap(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aqF
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aqG
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aqJ
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aqI
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aqH
return D.aqK},
dq9(d){var x,w,v,u,t,s
try{t=J.pT(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bm('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dv(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aZ.fi(v,null))
t=C.aW(J.aE(u,"message"))
return t}}}if(d instanceof A.St){t=A.dq9(d.b)
return t}return null}catch(s){return null}},
St:function St(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dh:function Dh(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.St.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdoU(){var x=A.dq9(this.b)
if(x!=null)return x
return this.c},
$icx:1}
A.Dh.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.St,C.V)
x(A.Dh,C.nl)})()
C.fT(b.typeUniverse,JSON.parse('{"St":{"cx":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.aqF=new A.Dh(0,"permissionDenied")
D.aqG=new A.Dh(1,"networkError")
D.aqH=new A.Dh(2,"serviceUnavailable")
D.aqI=new A.Dh(3,"userBusy")
D.aqJ=new A.Dh(4,"callTimeout")
D.aqK=new A.Dh(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ejG","b2m",()=>C.aY("CallErrorHandler"))})()};
(a=>{a["4bnuWv21lUREAdQo29qMGzQdU7Q="]=a.current})($__dart_deferred_initializers__);