((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dly(d,e,f,g){return new A.RJ(d,e,g,f)},
yW(d,e,f,g){var x=null
return A.dKR(d,e,f,g,g)},
dKR(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yW=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b0C()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yW)
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
$.b0C().k(B.v,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dlv(r)
p=n
if(p==null)p=q
throw C.u(A.dly(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yW,w)},
dlx(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b0C()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.b0C().k(B.v,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dlv(w)
u=r
if(u==null)u=v
throw C.u(A.dly(e,w,u,f))}},
dlv(d){var x=J.an(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.ap7
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.ap8
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.apb
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.apa
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.ap9
return D.apc},
dlw(d){var x,w,v,u,t,s
try{t=J.og(d)
if(B.b.t(t.l(d),"DioException")||B.b.t(t.l(d),"ApiException")){x=t.l(d)
w=C.bu('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dH(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aX.fc(v,null))
t=C.aX(J.aC(u,"message"))
return t}}}if(d instanceof A.RJ){t=A.dlw(d.b)
return t}return null}catch(s){return null}},
RJ:function RJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D2:function D2(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[25],A)
D=c[92]
A.RJ.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdjL(){var x=A.dlw(this.b)
if(x!=null)return x
return this.c},
$icD:1}
A.D2.prototype={
Z(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.RJ,C.W)
x(A.D2,C.o8)})()
C.fI(b.typeUniverse,JSON.parse('{"RJ":{"cD":[]}}'))
var y={a:C.at("U<q,@>")};(function constants(){D.ap7=new A.D2(0,"permissionDenied")
D.ap8=new A.D2(1,"networkError")
D.ap9=new A.D2(2,"serviceUnavailable")
D.apa=new A.D2(3,"userBusy")
D.apb=new A.D2(4,"callTimeout")
D.apc=new A.D2(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"edv","b0C",()=>C.aU("CallErrorHandler"))})()};
(a=>{a["bvOc5wU9hcW3P50NvVvxXfDNXyc="]=a.current})($__dart_deferred_initializers__);