((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dqJ(d,e,f,g){return new A.SC(d,e,g,f)},
z4(d,e,f,g){var x=null
return A.dR4(d,e,f,g,g)},
dR4(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$z4=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b2A()
p.k(B.h,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$z4)
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
$.b2A().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dqG(r)
p=n
if(p==null)p=q
throw C.t(A.dqJ(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$z4,w)},
dqI(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b2A()
u.k(B.h,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.h,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b2A().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dqG(w)
u=r
if(u==null)u=v
throw C.t(A.dqJ(e,w,u,f))}},
dqG(d){var x=J.ap(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aqN
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aqO
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aqR
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aqQ
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aqP
return D.aqS},
dqH(d){var x,w,v,u,t,s
try{t=J.pU(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bm('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dv(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fh(v,null))
t=C.aW(J.aE(u,"message"))
return t}}}if(d instanceof A.SC){t=A.dqH(d.b)
return t}return null}catch(s){return null}},
SC:function SC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dk:function Dk(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.SC.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdpu(){var x=A.dqH(this.b)
if(x!=null)return x
return this.c},
$icx:1}
A.Dk.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.SC,C.V)
x(A.Dk,C.nl)})()
C.fU(b.typeUniverse,JSON.parse('{"SC":{"cx":[]}}'))
var y={a:C.au("U<q,@>")};(function constants(){D.aqN=new A.Dk(0,"permissionDenied")
D.aqO=new A.Dk(1,"networkError")
D.aqP=new A.Dk(2,"serviceUnavailable")
D.aqQ=new A.Dk(3,"userBusy")
D.aqR=new A.Dk(4,"callTimeout")
D.aqS=new A.Dk(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ekn","b2A",()=>C.aY("CallErrorHandler"))})()};
(a=>{a["B0Z5SZeKBRhqnLT09HaPu+QemgU="]=a.current})($__dart_deferred_initializers__);