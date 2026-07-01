((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
diN(d,e,f,g){return new A.Rl(d,e,g,f)},
yK(d,e,f,g){var x=null
return A.dHY(d,e,f,g,g)},
dHY(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yK=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b_Q()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yK)
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
$.b_Q().k(B.u,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.diK(r)
p=n
if(p==null)p=q
throw C.u(A.diN(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yK,w)},
diM(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b_Q()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.b_Q().k(B.u,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.diK(w)
u=r
if(u==null)u=v
throw C.u(A.diN(e,w,u,f))}},
diK(d){var x=J.al(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.aom
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.aon
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.aoq
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.aop
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.aoo
return D.aor},
diL(d){var x,w,v,u,t,s
try{t=J.od(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bs('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dF(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fc(v,null))
t=C.aW(J.aC(u,"message"))
return t}}}if(d instanceof A.Rl){t=A.diL(d.b)
return t}return null}catch(s){return null}},
Rl:function Rl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CQ:function CQ(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.Rl.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdgx(){var x=A.diL(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.CQ.prototype={
Y(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.Rl,C.U)
x(A.CQ,C.o5)})()
C.fP(b.typeUniverse,JSON.parse('{"Rl":{"cC":[]}}'))
var y={a:C.aw("V<q,@>")};(function constants(){D.aom=new A.CQ(0,"permissionDenied")
D.aon=new A.CQ(1,"networkError")
D.aoo=new A.CQ(2,"serviceUnavailable")
D.aop=new A.CQ(3,"userBusy")
D.aoq=new A.CQ(4,"callTimeout")
D.aor=new A.CQ(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ea9","b_Q",()=>C.aU("CallErrorHandler"))})()};
(a=>{a["cPBjhNAHFCSwii6VBPAYavbpNp8="]=a.current})($__dart_deferred_initializers__);