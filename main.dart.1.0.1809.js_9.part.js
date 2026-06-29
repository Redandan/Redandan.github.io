((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,E,B={
mu(d,e,f,g,h,i){return new B.a3R(g,i,e,h,f,d,null)},
VY:function VY(d,e){this.a=d
this.b=e},
a3R:function a3R(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afS:function afS(){this.d=$
this.c=this.a=null},
c7k:function c7k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7j:function c7j(){},
a8y:function a8y(d){this.a=d},
aQV:function aQV(){this.c=this.a=null}},D
A=c[0]
C=c[2]
E=c[48]
B=a.updateHolder(c[46],B)
D=c[61]
B.VY.prototype={
X(){return"QueryFieldType."+this.b}}
B.a3R.prototype={
S(){return new B.afS()},
c1l(d,e){return this.f.$2(d,e)}}
B.afS.prototype={
a_(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.de("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.bj()
w.d=x},
Yg(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$Yg=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.at(Date.now(),0,!1).fL(-15768e10)
t=new A.at(Date.now(),0,!1).fL(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nk(r,s,y.g)}else s=null
x=2
return A.c(A.d4F(null,n,u,s,t),$async$Yg)
case 2:q=e
if(q!=null){n=q.a
p=A.c9(A.bu(n),A.bA(n),A.c0(n),0,0,0,0)
n=q.b
o=A.c9(A.bu(n),A.bA(n),A.c0(n),23,59,59,0)
v.a.c1l(p,o)}return A.k(null,w)}})
return A.l($async$Yg,w)},
am0(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c1l(A.c9(A.bu(x),A.bA(x),A.c0(x),0,0,0,0),A.c9(A.bu(w),A.bA(w),A.c0(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.at(Date.now(),0,!1),t=A.c9(A.bu(u),A.bA(u),A.c0(u),0,0,0,0),s=t.fL(0-A.f5(A.Ey(t)-1,0,0,0,0).a),r=A.c9(A.bu(u),A.bA(u),1,0,0,0,0),q=t.fL(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.OV(o,A.aAb(A.ct(D.aOO,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gcWv(),A.eG(v,v,v,v,v,v,v,v,v,v,v,v,C.hA,v,new A.aV(A.D(10),C.B),v,v,v,v,v)),v,new B.c7j(),new B.c7k(w,t,s,r,q),v,y.e),v)}}
B.a8y.prototype={
S(){return new B.aQV()}}
B.aQV.prototype={
u(d){var x=null
this.a.toString
return A.nw(x,x,16,x,x,x)}}
var z=a.updateTypes(["ad<~>()"])
B.c7k.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.am0(new A.nk(x,x,y.g))
break
case 1:w.a.am0(new A.nk(w.c,w.b,y.g))
break
case 2:w.a.am0(new A.nk(w.d,w.b,y.g))
break
case 3:w.a.am0(new A.nk(w.e,w.b,y.g))
break
case 4:w.a.Yg()
break}},
$S:17}
B.c7j.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.l0(A.d(A.f(d,C.c,w).gbdQ(),x,x,x,x,x,x,x,x,x),!0,0,v),A.l0(A.d(A.f(d,C.c,w).gbcV(),x,x,x,x,x,x,x,x,x),!0,1,v),A.l0(A.d(A.f(d,C.c,w).gb7F(),x,x,x,x,x,x,x,x,x),!0,2,v),A.l0(A.d(A.f(d,C.c,w).gb83(),x,x,x,x,x,x,x,x,x),!0,3,v),D.a6j,A.l0(A.d(A.f(d,C.c,w).gb9S(),x,x,x,x,x,x,x,x,x),!0,4,v)],y.l)},
$S:1789};(function installTearOffs(){var x=a._instance_0u
x(B.afS.prototype,"gcWv","Yg",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.VY,A.o_)
x(B.a3R,A.W)
w(A.a0,[B.afS,B.aQV])
w(A.fd,[B.c7k,B.c7j])
x(B.a8y,A.nF)})()
A.fM(b.typeUniverse,JSON.parse('{"a3R":{"W":[],"n":[]},"afS":{"a0":["a3R"]},"a8y":{"nF":["0&"],"W":[],"n":[]},"aQV":{"a0":["a8y"]}}'))
var y={p:A.aw("fk"),g:A.aw("nk<at>"),l:A.aw("E<nF<x>>"),e:A.aw("x"),f:A.aw("~")};(function constants(){D.aJT=new A.T(57782,"MaterialIcons",!1)
D.aOO=new A.ap(D.aJT,null,null,null,null)
D.a6j=new B.a8y(null)
D.eU=new B.VY(0,"dateRange")})()};
(a=>{a["PXX5BncbYdah/tIiV9HkH4yZXYo="]=a.current})($__dart_deferred_initializers__);