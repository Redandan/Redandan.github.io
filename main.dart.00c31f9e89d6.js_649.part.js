((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
of(d,e,f,g,h,i){return new B.a8P(g,i,e,h,f,d,null)},
a_Y:function a_Y(d,e){this.a=d
this.b=e},
a8P:function a8P(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alq:function alq(){this.d=$
this.c=this.a=null},
cF1:function cF1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cF0:function cF0(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[283]
G=c[349]
B=a.updateHolder(c[272],B)
E=c[437]
H=c[276]
I=c[277]
F=c[286]
B.a_Y.prototype={
Y(){return"QueryFieldType."+this.b}}
B.a8P.prototype={
P(){return new B.alq()},
cuq(d,e){return this.f.$2(d,e)}}
B.alq.prototype={
X(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dK("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.aJ()
w.d=x},
atH(){var x=0,w=A.l(y.f),v=this,u,t,s,r,q,p,o,n
var $async$atH=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.aE(Date.now(),0,!1).io(-15768e10)
t=new A.aE(Date.now(),0,!1).io(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new F.og(r,s,y.g)}else s=null
x=2
return A.c(I.dQb(null,n,u,s,t),$async$atH)
case 2:q=e
if(q!=null){n=q.a
p=A.cG(A.bG(n),A.bK(n),A.cs(n),0,0,0,0)
n=q.b
o=A.cG(A.bG(n),A.bK(n),A.cs(n),23,59,59,0)
v.a.cuq(p,o)}return A.j(null,w)}})
return A.k($async$atH,w)},
bq_(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cuq(A.cG(A.bG(x),A.bK(x),A.cs(x),0,0,0,0),A.cG(A.bG(w),A.bK(w),A.cs(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aE(Date.now(),0,!1),t=A.cG(A.bG(u),A.bK(u),A.cs(u),0,0,0,0),s=t.io(0-A.dE(A.JU(t)-1,0,0,0,0).a),r=A.cG(A.bG(u),A.bK(u),1,0,0,0,0),q=t.io(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.bn(n)
x=w.a.e
x.toString
x=n+" ~ "+p.bn(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.Vf(o,D.a_o(A.cd(E.aS9,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdx8(),A.fe(v,v,v,v,v,v,v,v,v,v,v,v,C.hE,v,new A.b6(A.G(10),C.C),v,v,v,v,v)),v,new B.cF0(),new B.cF1(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a3<jp<y>>(L)"])
B.cF1.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bq_(new F.og(x,x,y.g))
break
case 1:w.a.bq_(new F.og(w.c,w.b,y.g))
break
case 2:w.a.bq_(new F.og(w.d,w.b,y.g))
break
case 3:w.a.bq_(new F.og(w.e,w.b,y.g))
break
case 4:w.a.atH()
break}},
$S:19}
B.cF0.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.m0(A.d(A.f(d,C.b,w).gbjN(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.m0(A.d(A.f(d,C.b,w).gbiV(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.m0(A.d(A.f(d,C.b,w).gbdL(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.m0(A.d(A.f(d,C.b,w).gbe8(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.Hk,D.m0(A.d(A.f(d,C.b,w).gbfV(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.alq.prototype,"gdx8","atH",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a_Y,A.ew)
x(B.a8P,A.K)
x(B.alq,A.U)
w(A.bt,[B.cF1,B.cF0])})()
A.aY(b.typeUniverse,JSON.parse('{"a8P":{"K":[],"m":[]},"alq":{"U":["a8P"]}}'))
var y={p:A.F("bv"),g:A.F("og<aE>"),l:A.F("v<jp<y>>"),e:A.F("y"),f:A.F("~")};(function constants(){E.aMN=new A.a_(57782,"MaterialIcons",!1)
E.aS9=new A.at(E.aMN,null,null,null,null)
E.fk=new B.a_Y(0,"dateRange")})()};
(a=>{a["7zakeSHdhXx75yV22jvmK+wi5SA="]=a.current})($__dart_deferred_initializers__);