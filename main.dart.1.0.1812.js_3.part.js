((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dgE(d,e,f,g){return new A.QR(d,e,g,f)},
yA(d,e,f,g){var x=null
return A.dFn(d,e,f,g,g)},
dFn(d,e,f,g,h){var x=0,w=C.m(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yA=C.i(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.aZP()
p.k(B.d,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yA)
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
$.aZP().k(B.u,"Call operation failed: "+e+" - "+C.a(r),null,null)
q=A.dgB(r)
p=n
if(p==null)p=q
throw C.u(A.dgE(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.k(v,w)
case 2:return C.j(t.at(-1),w)}})
return C.l($async$yA,w)},
dgD(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.aZP()
u.k(B.d,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.d,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.t(t)
$.aZP().k(B.u,"Sync call operation failed: "+e+" - "+C.a(w),s,s)
v=A.dgB(w)
u=r
if(u==null)u=v
throw C.u(A.dgE(e,w,u,f))}},
dgB(d){var x=J.al(d).toLowerCase()
if(B.b.t(x,"permission")||B.b.t(x,"\u6b0a\u9650"))return D.anD
if(B.b.t(x,"network")||B.b.t(x,"connection")||B.b.t(x,"\u7db2\u7d61")||B.b.t(x,"\u9023\u63a5"))return D.anE
if(B.b.t(x,"timeout")||B.b.t(x,"\u8d85\u6642"))return D.anH
if(B.b.t(x,"busy")||B.b.t(x,"\u5fd9\u788c"))return D.anG
if(B.b.t(x,"unavailable")||B.b.t(x,"\u4e0d\u53ef\u7528"))return D.anF
return D.anI},
dgC(d){var x,w,v,u,t,s
try{t=J.o7(d)
if(B.b.t(t.m(d),"DioException")||B.b.t(t.m(d),"ApiException")){x=t.m(d)
w=C.bs('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dF(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aY.fc(v,null))
t=C.aW(J.aB(u,"message"))
return t}}}if(d instanceof A.QR){t=A.dgC(d.b)
return t}return null}catch(s){return null}},
QR:function QR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CF:function CF(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[24],A)
D=c[90]
A.QR.prototype={
m(d){return'Call operation "'+this.a+'" failed: '+C.a(this.b)},
gdfq(){var x=A.dgC(this.b)
if(x!=null)return x
return this.c},
$icC:1}
A.CF.prototype={
X(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.QR,C.U)
x(A.CF,C.o_)})()
C.fM(b.typeUniverse,JSON.parse('{"QR":{"cC":[]}}'))
var y={a:C.aw("V<q,@>")};(function constants(){D.anD=new A.CF(0,"permissionDenied")
D.anE=new A.CF(1,"networkError")
D.anF=new A.CF(2,"serviceUnavailable")
D.anG=new A.CF(3,"userBusy")
D.anH=new A.CF(4,"callTimeout")
D.anI=new A.CF(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e7k","aZP",()=>C.aU("CallErrorHandler"))})()};
(a=>{a["E7Xdzs+/9w3/lCFdVOG2kNgNYNQ="]=a.current})($__dart_deferred_initializers__);