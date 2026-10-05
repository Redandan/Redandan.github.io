((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A={
dsk(d,e,f,g){return new A.SW(d,e,g,f)},
yN(d,e,f,g){var x=null
return A.dPt(d,e,f,g,g)},
dPt(d,e,f,g,h){var x=0,w=C.l(h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$yN=C.h(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:n=null
u=4
p=$.b_L()
p.k(B.f,"Starting call operation: "+e,null,null)
x=7
return C.c(d.$0(),$async$yN)
case 7:s=j
p.k(B.f,"Call operation completed successfully: "+e,null,null)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
r=C.u(m)
$.b_L().k(B.u,"Call operation failed: "+e+" - "+C.b(r),null,null)
q=A.dsh(r)
p=n
if(p==null)p=q
throw C.t(A.dsk(e,r,p,f))
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$yN,w)},
dsj(d,e,f){var x,w,v,u,t,s=null,r=null
try{u=$.b_L()
u.k(B.f,"Starting sync call operation: "+e,s,s)
x=d.$0()
u.k(B.f,"Sync call operation completed successfully: "+e,s,s)
return x}catch(t){w=C.u(t)
$.b_L().k(B.u,"Sync call operation failed: "+e+" - "+C.b(w),s,s)
v=A.dsh(w)
u=r
if(u==null)u=v
throw C.t(A.dsk(e,w,u,f))}},
dsh(d){var x=J.ao(d).toLowerCase()
if(B.c.t(x,"permission")||B.c.t(x,"\u6b0a\u9650"))return D.ank
if(B.c.t(x,"network")||B.c.t(x,"connection")||B.c.t(x,"\u7db2\u7d61")||B.c.t(x,"\u9023\u63a5"))return D.anl
if(B.c.t(x,"timeout")||B.c.t(x,"\u8d85\u6642"))return D.ano
if(B.c.t(x,"busy")||B.c.t(x,"\u5fd9\u788c"))return D.ann
if(B.c.t(x,"unavailable")||B.c.t(x,"\u4e0d\u53ef\u7528"))return D.anm
return D.anp},
dsi(d){var x,w,v,u,t,s
try{t=J.pt(d)
if(B.c.t(t.l(d),"DioException")||B.c.t(t.l(d),"ApiException")){x=t.l(d)
w=C.be('\\{[^}]*"message"[^}]*\\}',!0,!1,!1,!1).dE(x)
if(w!=null){v=w.b[0]
if(v!=null){u=y.a.a(B.aP.eE(v,null))
t=C.aT(J.aH(u,"message"))
return t}}}if(d instanceof A.SW){t=A.dsi(d.b)
return t}return null}catch(s){return null}},
SW:function SW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dk:function Dk(d,e){this.a=d
this.b=e}},D
J=c[1]
C=c[0]
B=c[2]
A=a.updateHolder(c[27],A)
D=c[93]
A.SW.prototype={
l(d){return'Call operation "'+this.a+'" failed: '+C.b(this.b)},
gdsM(){var x=A.dsi(this.b)
if(x!=null)return x
return this.c},
$icA:1}
A.Dk.prototype={
X(){return"CallErrorType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(A.SW,C.T)
x(A.Dk,C.nb)})()
C.fu(b.typeUniverse,JSON.parse('{"SW":{"cA":[]}}'))
var y={a:C.au("a3<q,@>")};(function constants(){D.ank=new A.Dk(0,"permissionDenied")
D.anl=new A.Dk(1,"networkError")
D.anm=new A.Dk(2,"serviceUnavailable")
D.ann=new A.Dk(3,"userBusy")
D.ano=new A.Dk(4,"callTimeout")
D.anp=new A.Dk(5,"unknown")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"egC","b_L",()=>C.aW("CallErrorHandler"))})()};
(a=>{a["l9B5DnNTyRo8tx7pZWy3Jd9gz60="]=a.current})($__dart_deferred_initializers__);