((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mI(d,e,f,g,h,i){return new B.a6k(g,i,e,h,f,d,null)},
Yh:function Yh(d,e){this.a=d
this.b=e},
a6k:function a6k(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aie:function aie(){this.d=$
this.c=this.a=null},
cdN:function cdN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdM:function cdM(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[61]
E=c[48]
B.Yh.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a6k.prototype={
T(){return new B.aie()},
c8l(d,e){return this.f.$2(d,e)}}
B.aie.prototype={
a0(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dc("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.b4()
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
return A.c(A.ddS(null,n,u,s,t),$async$ahC)
case 2:q=e
if(q!=null){n=q.a
p=A.cg(A.bz(n),A.bC(n),A.c1(n),0,0,0,0)
n=q.b
o=A.cg(A.bz(n),A.bC(n),A.c1(n),23,59,59,0)
v.a.c8l(p,o)}return A.k(null,w)}})
return A.l($async$ahC,w)},
bbW(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c8l(A.cg(A.bz(x),A.bC(x),A.c1(x),0,0,0,0),A.cg(A.bz(w),A.bC(w),A.c1(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.az(Date.now(),0,!1),t=A.cg(A.bz(u),A.bC(u),A.c1(u),0,0,0,0),s=t.fe(0-A.fc(A.Fo(t)-1,0,0,0,0).a),r=A.cg(A.bz(u),A.bC(u),1,0,0,0,0),q=t.fe(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.Qo(o,A.Xc(A.c5(D.aV3,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gd4n(),A.ew(v,v,v,v,v,v,v,v,v,v,v,v,C.hb,v,new A.aX(A.A(10),C.D),v,v,v,v,v)),v,new B.cdM(),new B.cdN(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["aa<~>()"])
B.cdN.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bbW(new A.nF(x,x,y.g))
break
case 1:w.a.bbW(new A.nF(w.c,w.b,y.g))
break
case 2:w.a.bbW(new A.nF(w.d,w.b,y.g))
break
case 3:w.a.bbW(new A.nF(w.e,w.b,y.g))
break
case 4:w.a.ahC()
break}},
$S:17}
B.cdM.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kL(A.d(A.f(d,C.c,w).gb5L(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kL(A.d(A.f(d,C.c,w).gb4Q(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kL(A.d(A.f(d,C.c,w).gb_A(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kL(A.d(A.f(d,C.c,w).gb_Z(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.FF,A.kL(A.d(A.f(d,C.c,w).gb1N(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1841};(function installTearOffs(){var x=a._instance_0u
x(B.aie.prototype,"gd4n","ahC",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Yh,A.nl)
x(B.a6k,A.W)
x(B.aie,A.a_)
w(A.fi,[B.cdN,B.cdM])})()
A.fT(b.typeUniverse,JSON.parse('{"a6k":{"W":[],"n":[]},"aie":{"a_":["a6k"]}}'))
var y={p:A.au("f9"),g:A.au("nF<az>"),l:A.au("E<lK<y>>"),e:A.au("y"),f:A.au("~")};(function constants(){D.aPO=new A.T(57782,"MaterialIcons",!1)
D.aV3=new A.aq(D.aPO,null,null,null,null)
D.eZ=new B.Yh(0,"dateRange")})()};
(a=>{a["r0vqc9VTyTv79fSTX9iPqo70/VA="]=a.current})($__dart_deferred_initializers__);