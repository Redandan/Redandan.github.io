((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mM(d,e,f,g,h,i){return new B.a6B(g,i,e,h,f,d,null)},
YB:function YB(d,e){this.a=d
this.b=e},
a6B:function a6B(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aiw:function aiw(){this.d=$
this.c=this.a=null},
ceI:function ceI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceH:function ceH(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[61]
E=c[48]
B.YB.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a6B.prototype={
T(){return new B.aiw()},
c9c(d,e){return this.f.$2(d,e)}}
B.aiw.prototype={
a0(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.df("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.b3()
w.d=x},
ahQ(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$ahQ=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.az(Date.now(),0,!1).fN(-15768e10)
t=new A.az(Date.now(),0,!1).fN(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nF(r,s,y.g)}else s=null
x=2
return A.c(A.dfa(null,n,u,s,t),$async$ahQ)
case 2:q=e
if(q!=null){n=q.a
p=A.cg(A.bz(n),A.bB(n),A.c2(n),0,0,0,0)
n=q.b
o=A.cg(A.bz(n),A.bB(n),A.c2(n),23,59,59,0)
v.a.c9c(p,o)}return A.k(null,w)}})
return A.l($async$ahQ,w)},
bcv(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c9c(A.cg(A.bz(x),A.bB(x),A.c2(x),0,0,0,0),A.cg(A.bz(w),A.bB(w),A.c2(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.az(Date.now(),0,!1),t=A.cg(A.bz(u),A.bB(u),A.c2(u),0,0,0,0),s=t.fN(0-A.fc(A.Fv(t)-1,0,0,0,0).a),r=A.cg(A.bz(u),A.bB(u),1,0,0,0,0),q=t.fN(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.QH(o,A.Xw(A.c6(D.aVj,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gd5w(),A.ey(v,v,v,v,v,v,v,v,v,v,v,v,C.hd,v,new A.aX(A.A(10),C.C),v,v,v,v,v)),v,new B.ceH(),new B.ceI(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["a9<~>()"])
B.ceI.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bcv(new A.nF(x,x,y.g))
break
case 1:w.a.bcv(new A.nF(w.c,w.b,y.g))
break
case 2:w.a.bcv(new A.nF(w.d,w.b,y.g))
break
case 3:w.a.bcv(new A.nF(w.e,w.b,y.g))
break
case 4:w.a.ahQ()
break}},
$S:17}
B.ceH.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kN(A.d(A.f(d,C.c,w).gb6m(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kN(A.d(A.f(d,C.c,w).gb5r(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kN(A.d(A.f(d,C.c,w).gb0b(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kN(A.d(A.f(d,C.c,w).gb0A(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.FJ,A.kN(A.d(A.f(d,C.c,w).gb2o(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1854};(function installTearOffs(){var x=a._instance_0u
x(B.aiw.prototype,"gd5w","ahQ",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.YB,A.nm)
x(B.a6B,A.W)
x(B.aiw,A.a_)
w(A.fi,[B.ceI,B.ceH])})()
A.fU(b.typeUniverse,JSON.parse('{"a6B":{"W":[],"n":[]},"aiw":{"a_":["a6B"]}}'))
var y={p:A.au("f9"),g:A.au("nF<az>"),l:A.au("E<lL<x>>"),e:A.au("x"),f:A.au("~")};(function constants(){D.aQ3=new A.T(57782,"MaterialIcons",!1)
D.aVj=new A.aq(D.aQ3,null,null,null,null)
D.f_=new B.YB(0,"dateRange")})()};
(a=>{a["/mXqAXokBPqaP56b/Pa8RSpgN74="]=a.current})($__dart_deferred_initializers__);