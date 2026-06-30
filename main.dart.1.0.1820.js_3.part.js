((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dgQ(d,e,f,g){return new A.QV(d,e,g,f)},
yC(d,e,f,g){var x=null
return A.dFz(d,e,f,g,g)},
dFz(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yC=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.aZU()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yC)
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
$.aZU().k(B.u,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dgN(r)
p=n
if(p==null)p=q
throw C.u(A.dgQ(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yC,w)},
dgP(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.aZU()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.aZU().k(B.u,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dgN(w)
u=r
if(u==null)u=v
throw C.u(A.dgQ(e,w,u,f))}},
dgN(d){var x=J.al(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.anD
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.anE
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.anH
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.anG
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.anF
return D.anI},
dgO(d){var x,w,v,u,t,s
try{t=J.o8(d)
if(B.b.t(t.m(d),"DioException")||B.b.t(t.m(d),"ApiException")){x=t.m(d)
w=C.bs('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dF(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fc(v,null))
t=C.aW(J.aB(u,"message"))
return t}}}if(d instanceof A.QV){t=A.dgO(d.b)
return t}return null}catch(s){return null}},
QV:function QV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CH:function CH(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.QV.prototype={
m(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdfD(){var x=A.dgO(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.CH.prototype={
X(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.QV,C.U)
x(A.CH,C.o0)})()
C.fM(b.typeUniverse,JSON.parse('{"QV":{"cC":[]}}'))
var y={a:C.aw("V<q,@>")};(function constants(){D.anD=new A.CH(0,"permissionDenied")
D.anE=new A.CH(1,"networkError")
D.anF=new A.CH(2,"serviceUnavailable")
D.anG=new A.CH(3,"userBusy")
D.anH=new A.CH(4,"callTimeout")
D.anI=new A.CH(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e7w","aZU",()=>C.aU("CallErrorHandler"))})()};
(a=>{a["Xm4YRw0AOwKNEWiIUyB0zbF6ric="]=a.current})($__dart_deferred_initializers__);