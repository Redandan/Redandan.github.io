((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
oP(d,e,f,g,h,i){return new B.aaO(g,i,e,h,f,d,null)},
a1K:function a1K(d,e){this.a=d
this.b=e},
aaO:function aaO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
anX:function anX(){this.d=$
this.c=this.a=null},
cKD:function cKD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKC:function cKC(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[284]
G=c[349]
B=a.updateHolder(c[272],B)
E=c[434]
H=c[277]
I=c[278]
F=c[287]
B.a1K.prototype={
W(){return"QueryFieldType."+this.b}}
B.aaO.prototype={
O(){return new B.anX()},
cxe(d,e){return this.f.$2(d,e)}}
B.anX.prototype={
X(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dS("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.aL()
w.d=x},
auR(){var x=0,w=A.l(y.f),v=this,u,t,s,r,q,p,o,n
var $async$auR=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.aH(Date.now(),0,!1).ix(-15768e10)
t=new A.aH(Date.now(),0,!1).ix(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new F.oQ(r,s,y.g)}else s=null
x=2
return A.c(I.dXc(null,n,u,s,t),$async$auR)
case 2:q=e
if(q!=null){n=q.a
p=A.cJ(A.bL(n),A.bQ(n),A.cv(n),0,0,0,0)
n=q.b
o=A.cJ(A.bL(n),A.bQ(n),A.cv(n),23,59,59,0)
v.a.cxe(p,o)}return A.j(null,w)}})
return A.k($async$auR,w)},
brv(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cxe(A.cJ(A.bL(x),A.bQ(x),A.cv(x),0,0,0,0),A.cJ(A.bL(w),A.bQ(w),A.cv(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aH(Date.now(),0,!1),t=A.cJ(A.bL(u),A.bQ(u),A.cv(u),0,0,0,0),s=t.ix(0-A.dN(A.L6(t)-1,0,0,0,0).a),r=A.cJ(A.bL(u),A.bQ(u),1,0,0,0,0),q=t.ix(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.bt(n)
x=w.a.e
x.toString
x=n+" ~ "+p.bt(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.WQ(o,D.a1b(A.ce(E.aWz,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdB_(),A.f7(v,v,v,v,v,v,v,v,v,v,v,v,C.hM,v,new A.b9(A.G(10),C.B),v,v,v,v,v)),v,new B.cKC(),new B.cKD(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a1<jH<y>>(K)"])
B.cKD.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.brv(new F.oQ(x,x,y.g))
break
case 1:w.a.brv(new F.oQ(w.c,w.b,y.g))
break
case 2:w.a.brv(new F.oQ(w.d,w.b,y.g))
break
case 3:w.a.brv(new F.oQ(w.e,w.b,y.g))
break
case 4:w.a.auR()
break}},
$S:19}
B.cKC.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.mp(A.d(A.f(d,C.c,w).gbli(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.mp(A.d(A.f(d,C.c,w).gbkq(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.mp(A.d(A.f(d,C.c,w).gbfg(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.mp(A.d(A.f(d,C.c,w).gbfE(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.HO,D.mp(A.d(A.f(d,C.c,w).gbhq(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.anX.prototype,"gdB_","auR",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a1K,A.eC)
x(B.aaO,A.L)
x(B.anX,A.S)
w(A.bt,[B.cKD,B.cKC])})()
A.b0(b.typeUniverse,JSON.parse('{"aaO":{"L":[],"m":[]},"anX":{"S":["aaO"]}}'))
var y={p:A.C("bw"),g:A.C("oQ<aH>"),l:A.C("v<jH<y>>"),e:A.C("y"),f:A.C("~")};(function constants(){E.aRb=new A.a0(57782,"MaterialIcons",!1)
E.aWz=new A.at(E.aRb,null,null,null,null)
E.fn=new B.a1K(0,"dateRange")})()};
(a=>{a["If1Gaq3Cl3MlYLtaMu+bQPQvK44="]=a.current})($__dart_deferred_initializers__);