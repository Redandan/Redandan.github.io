((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mI(d,e,f,g,h,i){return new B.a6l(g,i,e,h,f,d,null)},
Yj:function Yj(d,e){this.a=d
this.b=e},
a6l:function a6l(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aif:function aif(){this.d=$
this.c=this.a=null},
cdU:function cdU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdT:function cdT(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[61]
E=c[48]
B.Yj.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a6l.prototype={
S(){return new B.aif()},
c8B(d,e){return this.f.$2(d,e)}}
B.aif.prototype={
a0(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dc("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.b3()
w.d=x},
ahC(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$ahC=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.az(Date.now(),0,!1).fe(-15768e10)
t=new A.az(Date.now(),0,!1).fe(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nF(r,s,y.g)}else s=null
x=2
return A.c(A.de_(null,n,u,s,t),$async$ahC)
case 2:q=e
if(q!=null){n=q.a
p=A.cg(A.bz(n),A.bC(n),A.c1(n),0,0,0,0)
n=q.b
o=A.cg(A.bz(n),A.bC(n),A.c1(n),23,59,59,0)
v.a.c8B(p,o)}return A.k(null,w)}})
return A.l($async$ahC,w)},
bca(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c8B(A.cg(A.bz(x),A.bC(x),A.c1(x),0,0,0,0),A.cg(A.bz(w),A.bC(w),A.c1(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.az(Date.now(),0,!1),t=A.cg(A.bz(u),A.bC(u),A.c1(u),0,0,0,0),s=t.fe(0-A.fc(A.Fp(t)-1,0,0,0,0).a),r=A.cg(A.bz(u),A.bC(u),1,0,0,0,0),q=t.fe(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.Qp(o,A.Xe(A.c5(D.aV5,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gd4E(),A.ex(v,v,v,v,v,v,v,v,v,v,v,v,C.hb,v,new A.aX(A.A(10),C.D),v,v,v,v,v)),v,new B.cdT(),new B.cdU(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["aa<~>()"])
B.cdU.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bca(new A.nF(x,x,y.g))
break
case 1:w.a.bca(new A.nF(w.c,w.b,y.g))
break
case 2:w.a.bca(new A.nF(w.d,w.b,y.g))
break
case 3:w.a.bca(new A.nF(w.e,w.b,y.g))
break
case 4:w.a.ahC()
break}},
$S:17}
B.cdT.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kL(A.d(A.f(d,C.c,w).gb6_(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kL(A.d(A.f(d,C.c,w).gb54(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kL(A.d(A.f(d,C.c,w).gb_P(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kL(A.d(A.f(d,C.c,w).gb0d(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.FG,A.kL(A.d(A.f(d,C.c,w).gb21(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1842};(function installTearOffs(){var x=a._instance_0u
x(B.aif.prototype,"gd4E","ahC",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Yj,A.nl)
x(B.a6l,A.W)
x(B.aif,A.a_)
w(A.fi,[B.cdU,B.cdT])})()
A.fT(b.typeUniverse,JSON.parse('{"a6l":{"W":[],"n":[]},"aif":{"a_":["a6l"]}}'))
var y={p:A.au("f9"),g:A.au("nF<az>"),l:A.au("E<lK<y>>"),e:A.au("y"),f:A.au("~")};(function constants(){D.aPP=new A.T(57782,"MaterialIcons",!1)
D.aV5=new A.aq(D.aPP,null,null,null,null)
D.eZ=new B.Yj(0,"dateRange")})()};
(a=>{a["Rdi33KhI6Ez7l6wVvRJbOndhAFA="]=a.current})($__dart_deferred_initializers__);