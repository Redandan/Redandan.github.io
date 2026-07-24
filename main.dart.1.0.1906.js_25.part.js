((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mM(d,e,f,g,h,i){return new B.a6B(g,i,e,h,f,d,null)},
YA:function YA(d,e){this.a=d
this.b=e},
a6B:function a6B(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aiv:function aiv(){this.d=$
this.c=this.a=null},
ceF:function ceF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceE:function ceE(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[45],B)
D=c[60]
E=c[46]
B.YA.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a6B.prototype={
T(){return new B.aiv()},
c95(d,e){return this.f.$2(d,e)}}
B.aiv.prototype={
a_(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.de("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.b3()
w.d=x},
ahS(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$ahS=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.aA(Date.now(),0,!1).fL(-15768e10)
t=new A.aA(Date.now(),0,!1).fL(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nD(r,s,y.g)}else s=null
x=2
return A.c(A.dfc(null,n,u,s,t),$async$ahS)
case 2:q=e
if(q!=null){n=q.a
p=A.cg(A.bz(n),A.bB(n),A.c2(n),0,0,0,0)
n=q.b
o=A.cg(A.bz(n),A.bB(n),A.c2(n),23,59,59,0)
v.a.c95(p,o)}return A.k(null,w)}})
return A.l($async$ahS,w)},
bcm(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c95(A.cg(A.bz(x),A.bB(x),A.c2(x),0,0,0,0),A.cg(A.bz(w),A.bB(w),A.c2(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aA(Date.now(),0,!1),t=A.cg(A.bz(u),A.bB(u),A.c2(u),0,0,0,0),s=t.fL(0-A.fb(A.Fu(t)-1,0,0,0,0).a),r=A.cg(A.bz(u),A.bB(u),1,0,0,0,0),q=t.fL(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.QF(o,A.Xv(A.c5(D.aVi,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gd5p(),A.ey(v,v,v,v,v,v,v,v,v,v,v,v,C.hc,v,new A.aX(A.A(10),C.C),v,v,v,v,v)),v,new B.ceE(),new B.ceF(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["a9<~>()"])
B.ceF.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bcm(new A.nD(x,x,y.g))
break
case 1:w.a.bcm(new A.nD(w.c,w.b,y.g))
break
case 2:w.a.bcm(new A.nD(w.d,w.b,y.g))
break
case 3:w.a.bcm(new A.nD(w.e,w.b,y.g))
break
case 4:w.a.ahS()
break}},
$S:17}
B.ceE.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kN(A.d(A.f(d,C.c,w).gb6e(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kN(A.d(A.f(d,C.c,w).gb5j(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kN(A.d(A.f(d,C.c,w).gb03(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kN(A.d(A.f(d,C.c,w).gb0s(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.FI,A.kN(A.d(A.f(d,C.c,w).gb2g(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1854};(function installTearOffs(){var x=a._instance_0u
x(B.aiv.prototype,"gd5p","ahS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.YA,A.oi)
x(B.a6B,A.W)
x(B.aiv,A.Z)
w(A.fp,[B.ceF,B.ceE])})()
A.fU(b.typeUniverse,JSON.parse('{"a6B":{"W":[],"n":[]},"aiv":{"Z":["a6B"]}}'))
var y={p:A.au("fh"),g:A.au("nD<aA>"),l:A.au("E<lM<x>>"),e:A.au("x"),f:A.au("~")};(function constants(){D.aQ2=new A.T(57782,"MaterialIcons",!1)
D.aVi=new A.aq(D.aQ2,null,null,null,null)
D.eZ=new B.YA(0,"dateRange")})()};
(a=>{a["Cp3yfsqHXNVrt4stXEW1AZNQ6HI="]=a.current})($__dart_deferred_initializers__);