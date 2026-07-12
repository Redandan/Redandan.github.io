((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mI(d,e,f,g,h,i){return new B.a6b(g,i,e,h,f,d,null)},
Y9:function Y9(d,e){this.a=d
this.b=e},
a6b:function a6b(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ai3:function ai3(){this.d=$
this.c=this.a=null},
cdm:function cdm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdl:function cdl(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[61]
E=c[48]
B.Y9.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a6b.prototype={
T(){return new B.ai3()},
c8e(d,e){return this.f.$2(d,e)}}
B.ai3.prototype={
a0(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dc("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.b4()
w.d=x},
ahw(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$ahw=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.az(Date.now(),0,!1).fJ(-15768e10)
t=new A.az(Date.now(),0,!1).fJ(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nE(r,s,y.g)}else s=null
x=2
return A.c(A.ddc(null,n,u,s,t),$async$ahw)
case 2:q=e
if(q!=null){n=q.a
p=A.cg(A.bz(n),A.bC(n),A.c2(n),0,0,0,0)
n=q.b
o=A.cg(A.bz(n),A.bC(n),A.c2(n),23,59,59,0)
v.a.c8e(p,o)}return A.k(null,w)}})
return A.l($async$ahw,w)},
bbT(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c8e(A.cg(A.bz(x),A.bC(x),A.c2(x),0,0,0,0),A.cg(A.bz(w),A.bC(w),A.c2(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.az(Date.now(),0,!1),t=A.cg(A.bz(u),A.bC(u),A.c2(u),0,0,0,0),s=t.fJ(0-A.fc(A.Fj(t)-1,0,0,0,0).a),r=A.cg(A.bz(u),A.bC(u),1,0,0,0,0),q=t.fJ(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.Qi(o,A.X4(A.c5(D.aUp,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gd4d(),A.ew(v,v,v,v,v,v,v,v,v,v,v,v,C.hb,v,new A.aX(A.A(10),C.D),v,v,v,v,v)),v,new B.cdl(),new B.cdm(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["aa<~>()"])
B.cdm.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bbT(new A.nE(x,x,y.g))
break
case 1:w.a.bbT(new A.nE(w.c,w.b,y.g))
break
case 2:w.a.bbT(new A.nE(w.d,w.b,y.g))
break
case 3:w.a.bbT(new A.nE(w.e,w.b,y.g))
break
case 4:w.a.ahw()
break}},
$S:17}
B.cdl.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kK(A.d(A.f(d,C.c,w).gb5H(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kK(A.d(A.f(d,C.c,w).gb4M(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kK(A.d(A.f(d,C.c,w).gb_w(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kK(A.d(A.f(d,C.c,w).gb_V(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.FG,A.kK(A.d(A.f(d,C.c,w).gb1J(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1839};(function installTearOffs(){var x=a._instance_0u
x(B.ai3.prototype,"gd4d","ahw",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Y9,A.nk)
x(B.a6b,A.W)
x(B.ai3,A.a_)
w(A.fi,[B.cdm,B.cdl])})()
A.fU(b.typeUniverse,JSON.parse('{"a6b":{"W":[],"n":[]},"ai3":{"a_":["a6b"]}}'))
var y={p:A.au("f9"),g:A.au("nE<az>"),l:A.au("E<lJ<y>>"),e:A.au("y"),f:A.au("~")};(function constants(){D.aP9=new A.T(57782,"MaterialIcons",!1)
D.aUp=new A.aq(D.aP9,null,null,null,null)
D.eZ=new B.Y9(0,"dateRange")})()};
(a=>{a["ChLgunza4cejp6ccW6TBOAFS09A="]=a.current})($__dart_deferred_initializers__);