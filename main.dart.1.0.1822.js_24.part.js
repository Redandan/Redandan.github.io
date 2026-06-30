((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
mA(d,e,f,g,h,i){return new B.a4k(g,i,e,h,f,d,null)},
Wm:function Wm(d,e){this.a=d
this.b=e},
a4k:function a4k(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ago:function ago(){this.d=$
this.c=this.a=null},
c8P:function c8P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8O:function c8O(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[61]
E=c[48]
B.Wm.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a4k.prototype={
T(){return new B.ago()},
c1O(d,e){return this.f.$2(d,e)}}
B.ago.prototype={
a_(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.de("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.be()
w.d=x},
Yq(){var x=0,w=A.m(y.f),v=this,u,t,s,r,q,p,o,n
var $async$Yq=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.av(Date.now(),0,!1).fK(-15768e10)
t=new A.av(Date.now(),0,!1).fK(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new A.nq(r,s,y.g)}else s=null
x=2
return A.c(A.d6v(null,n,u,s,t),$async$Yq)
case 2:q=e
if(q!=null){n=q.a
p=A.c9(A.bu(n),A.bA(n),A.c1(n),0,0,0,0)
n=q.b
o=A.c9(A.bu(n),A.bA(n),A.c1(n),23,59,59,0)
v.a.c1O(p,o)}return A.k(null,w)}})
return A.l($async$Yq,w)},
amc(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.c1O(A.c9(A.bu(x),A.bA(x),A.c1(x),0,0,0,0),A.c9(A.bu(w),A.bA(w),A.c1(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.av(Date.now(),0,!1),t=A.c9(A.bu(u),A.bA(u),A.c1(u),0,0,0,0),s=t.fK(0-A.f8(A.EN(t)-1,0,0,0,0).a),r=A.c9(A.bu(u),A.bA(u),1,0,0,0,0),q=t.fK(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.h()
n=p.b9(n)
x=w.a.e
x.toString
x=n+" ~ "+p.b9(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new E.Ph(o,A.Vs(A.cr(D.aPS,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gcXp(),A.eG(v,v,v,v,v,v,v,v,v,v,v,v,C.hC,v,new A.aV(A.B(10),C.C),v,v,v,v,v)),v,new B.c8O(),new B.c8P(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["ac<~>()"])
B.c8P.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.amc(new A.nq(x,x,y.g))
break
case 1:w.a.amc(new A.nq(w.c,w.b,y.g))
break
case 2:w.a.amc(new A.nq(w.d,w.b,y.g))
break
case 3:w.a.amc(new A.nq(w.e,w.b,y.g))
break
case 4:w.a.Yq()
break}},
$S:17}
B.c8O.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.b([A.kA(A.d(A.f(d,C.c,w).gbe5(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),A.kA(A.d(A.f(d,C.c,w).gbda(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),A.kA(A.d(A.f(d,C.c,w).gb7V(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),A.kA(A.d(A.f(d,C.c,w).gb8j(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),C.Ex,A.kA(A.d(A.f(d,C.c,w).gba7(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:1804};(function installTearOffs(){var x=a._instance_0u
x(B.ago.prototype,"gcXp","Yq",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Wm,A.o5)
x(B.a4k,A.W)
x(B.ago,A.a_)
w(A.fe,[B.c8P,B.c8O])})()
A.fP(b.typeUniverse,JSON.parse('{"a4k":{"W":[],"n":[]},"ago":{"a_":["a4k"]}}'))
var y={p:A.aw("fn"),g:A.aw("nq<av>"),l:A.aw("E<ly<x>>"),e:A.aw("x"),f:A.aw("~")};(function constants(){D.aKT=new A.T(57782,"MaterialIcons",!1)
D.aPS=new A.ap(D.aKT,null,null,null,null)
D.eW=new B.Wm(0,"dateRange")})()};
(a=>{a["Rj7NXQR3z0X1Grjm1jhm23AuaCM="]=a.current})($__dart_deferred_initializers__);