((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,E,B={
mu(d,e,f,g,h,i){return new B.a3R(g,i,e,h,f,d,null)},
VZ:function VZ(d,e){this.a=d
this.b=e},
a3R:function a3R(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afR:function afR(){this.d=$
this.c=this.a=null},
c7i:function c7i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7h:function c7h(){},
a8y:function a8y(d){this.a=d},
aQT:function aQT(){this.c=this.a=null}},D
A=c[0]
C=c[2]
E=c[48]
B=a.updateHolder(c[46],B)
D=c[61]
B.VZ.prototype={
X(){return"QueryFieldType."+this.b}}
B.a3R.prototype={
S(){return new B.afR()},
c1o(d,e){return this.f.$2(d,e)}}
B.afR.prototype={
a_(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.de("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.bj()
w.d=x},
Yi(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$Yi=A.i(function(d,e){if(d===1)return A.j(e,w)
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
return A.c(A.d4D(null,n,u,s,t),$async$Yi)
case 2:q=e
if(q!=null){n=q.a
p=A.c9(A.bu(n),A.bA(n),A.c0(n),0,0,0,0)
n=q.b
o=A.c9(A.bu(n),A.bA(n),A.c0(n),23,59,59,0)
v.a.c1o(p,o)}return A.k(null,w)}})
return A.l($async$Yi,w)},
am0(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c1o(A.c9(A.bu(x),A.bA(x),A.c0(x),0,0,0,0),A.c9(A.bu(w),A.bA(w),A.c0(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.at(Date.now(),0,!1),t=A.c9(A.bu(u),A.bA(u),A.c0(u),0,0,0,0),s=t.fL(0-A.f5(A.Ez(t)-1,0,0,0,0).a),r=A.c9(A.bu(u),A.bA(u),1,0,0,0,0),q=t.fL(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.OX(o,A.aAa(A.ct(D.aOO,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gcWz(),A.eH(v,v,v,v,v,v,v,v,v,v,v,v,C.hA,v,new A.aV(A.D(10),C.B),v,v,v,v,v)),v,new B.c7h(),new B.c7i(w,t,s,r,q),v,y.e),v)}}
B.a8y.prototype={
S(){return new B.aQT()}}
B.aQT.prototype={
u(d){var x=null
this.a.toString
return A.nw(x,x,16,x,x,x)}}
var z=a.updateTypes(["ad<~>()"])
B.c7i.prototype={
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
case 4:w.a.Yi()
break}},
$S:17}
B.c7h.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.l0(A.d(A.f(d,C.c,w).gbdT(),x,x,x,x,x,x,x,x,x),!0,0,v),A.l0(A.d(A.f(d,C.c,w).gbcY(),x,x,x,x,x,x,x,x,x),!0,1,v),A.l0(A.d(A.f(d,C.c,w).gb7I(),x,x,x,x,x,x,x,x,x),!0,2,v),A.l0(A.d(A.f(d,C.c,w).gb86(),x,x,x,x,x,x,x,x,x),!0,3,v),D.a6j,A.l0(A.d(A.f(d,C.c,w).gb9V(),x,x,x,x,x,x,x,x,x),!0,4,v)],y.l)},
$S:1789};(function installTearOffs(){var x=a._instance_0u
x(B.afR.prototype,"gcWz","Yi",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.VZ,A.o_)
x(B.a3R,A.W)
w(A.a0,[B.afR,B.aQT])
w(A.fd,[B.c7i,B.c7h])
x(B.a8y,A.nF)})()
A.fM(b.typeUniverse,JSON.parse('{"a3R":{"W":[],"n":[]},"afR":{"a0":["a3R"]},"a8y":{"nF":["0&"],"W":[],"n":[]},"aQT":{"a0":["a8y"]}}'))
var y={p:A.aw("fk"),g:A.aw("nk<at>"),l:A.aw("E<nF<x>>"),e:A.aw("x"),f:A.aw("~")};(function constants(){D.aJT=new A.T(57782,"MaterialIcons",!1)
D.aOO=new A.ap(D.aJT,null,null,null,null)
D.a6j=new B.a8y(null)
D.eU=new B.VZ(0,"dateRange")})()};
(a=>{a["dpqwzMx86XOwRWuUGahknlK36jo="]=a.current})($__dart_deferred_initializers__);