((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mx(d,e,f,g,h,i){return new B.a3V(g,i,e,h,f,d,null)},
W_:function W_(d,e){this.a=d
this.b=e},
a3V:function a3V(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afW:function afW(){this.d=$
this.c=this.a=null},
c7u:function c7u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7t:function c7t(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[61]
E=c[48]
B.W_.prototype={
X(){return"QueryFieldType."+this.b}}
B.a3V.prototype={
S(){return new B.afW()},
c1r(d,e){return this.f.$2(d,e)}}
B.afW.prototype={
a_(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.de("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.bj()
w.d=x},
Yf(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$Yf=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.at(Date.now(),0,!1).fK(-15768e10)
t=new A.at(Date.now(),0,!1).fK(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nm(r,s,y.g)}else s=null
x=2
return A.c(A.d4Q(null,n,u,s,t),$async$Yf)
case 2:q=e
if(q!=null){n=q.a
p=A.c9(A.bu(n),A.bA(n),A.c0(n),0,0,0,0)
n=q.b
o=A.c9(A.bu(n),A.bA(n),A.c0(n),23,59,59,0)
v.a.c1r(p,o)}return A.k(null,w)}})
return A.l($async$Yf,w)},
am0(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c1r(A.c9(A.bu(x),A.bA(x),A.c0(x),0,0,0,0),A.c9(A.bu(w),A.bA(w),A.c0(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.at(Date.now(),0,!1),t=A.c9(A.bu(u),A.bA(u),A.c0(u),0,0,0,0),s=t.fK(0-A.f5(A.EC(t)-1,0,0,0,0).a),r=A.c9(A.bu(u),A.bA(u),1,0,0,0,0),q=t.fK(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.OZ(o,A.a8C(A.cu(D.aOP,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gcWG(),A.eG(v,v,v,v,v,v,v,v,v,v,v,v,C.hA,v,new A.aV(A.D(10),C.B),v,v,v,v,v)),v,new B.c7t(),new B.c7u(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["ad<~>()"])
B.c7u.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.am0(new A.nm(x,x,y.g))
break
case 1:w.a.am0(new A.nm(w.c,w.b,y.g))
break
case 2:w.a.am0(new A.nm(w.d,w.b,y.g))
break
case 3:w.a.am0(new A.nm(w.e,w.b,y.g))
break
case 4:w.a.Yf()
break}},
$S:17}
B.c7t.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kx(A.d(A.f(d,C.c,w).gbdT(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kx(A.d(A.f(d,C.c,w).gbcY(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kx(A.d(A.f(d,C.c,w).gb7I(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kx(A.d(A.f(d,C.c,w).gb86(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.Eq,A.kx(A.d(A.f(d,C.c,w).gb9V(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1792};(function installTearOffs(){var x=a._instance_0u
x(B.afW.prototype,"gcWG","Yf",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.W_,A.o0)
x(B.a3V,A.W)
x(B.afW,A.a_)
w(A.fd,[B.c7u,B.c7t])})()
A.fM(b.typeUniverse,JSON.parse('{"a3V":{"W":[],"n":[]},"afW":{"a_":["a3V"]}}'))
var y={p:A.aw("fk"),g:A.aw("nm<at>"),l:A.aw("E<lv<x>>"),e:A.aw("x"),f:A.aw("~")};(function constants(){D.aJT=new A.T(57782,"MaterialIcons",!1)
D.aOP=new A.ap(D.aJT,null,null,null,null)
D.eU=new B.W_(0,"dateRange")})()};
(a=>{a["RySL2O/MsCdk6lXAP7Uu8TVG8y4="]=a.current})($__dart_deferred_initializers__);