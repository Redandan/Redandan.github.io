((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
djB(d,e,f,g){return new A.Rs(d,e,g,f)},
yM(d,e,f,g){var x=null
return A.dIQ(d,e,f,g,g)},
dIQ(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yM=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b03()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yM)
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
$.b03().k(B.u,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.djy(r)
p=n
if(p==null)p=q
throw C.u(A.djB(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yM,w)},
djA(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b03()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.b03().k(B.u,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.djy(w)
u=r
if(u==null)u=v
throw C.u(A.djB(e,w,u,f))}},
djy(d){var x=J.am(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aoA
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aoB
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aoE
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aoD
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aoC
return D.aoF},
djz(d){var x,w,v,u,t,s
try{t=J.oe(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bt('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dF(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fc(v,null))
t=C.aW(J.aC(u,"message"))
return t}}}if(d instanceof A.Rs){t=A.djz(d.b)
return t}return null}catch(s){return null}},
Rs:function Rs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CU:function CU(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.Rs.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdh8(){var x=A.djz(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.CU.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.Rs,C.U)
x(A.CU,C.o6)})()
C.fP(b.typeUniverse,JSON.parse('{"Rs":{"cC":[]}}'))
var y={a:C.aw("V<q,@>")};(function constants(){D.aoA=new A.CU(0,"permissionDenied")
D.aoB=new A.CU(1,"networkError")
D.aoC=new A.CU(2,"serviceUnavailable")
D.aoD=new A.CU(3,"userBusy")
D.aoE=new A.CU(4,"callTimeout")
D.aoF=new A.CU(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eb6","b03",()=>C.aU("CallErrorHandler"))})()};
(a=>{a["Fck2V94F5gVBucygo/jQ+QOmBoo="]=a.current})($__dart_deferred_initializers__);