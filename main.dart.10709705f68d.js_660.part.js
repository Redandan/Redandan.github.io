((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
oP(d,e,f,g,h,i){return new B.aaO(g,i,e,h,f,d,null)},
a1J:function a1J(d,e){this.a=d
this.b=e},
aaO:function aaO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
anW:function anW(){this.d=$
this.c=this.a=null},
cKz:function cKz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKy:function cKy(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[282]
G=c[347]
B=a.updateHolder(c[270],B)
E=c[434]
H=c[275]
I=c[276]
F=c[285]
B.a1J.prototype={
W(){return"QueryFieldType."+this.b}}
B.aaO.prototype={
O(){return new B.anW()},
cxb(d,e){return this.f.$2(d,e)}}
B.anW.prototype={
Y(){var x,w=this
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
return A.c(I.dX4(null,n,u,s,t),$async$auR)
case 2:q=e
if(q!=null){n=q.a
p=A.cJ(A.bL(n),A.bQ(n),A.cv(n),0,0,0,0)
n=q.b
o=A.cJ(A.bL(n),A.bQ(n),A.cv(n),23,59,59,0)
v.a.cxb(p,o)}return A.j(null,w)}})
return A.k($async$auR,w)},
bru(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cxb(A.cJ(A.bL(x),A.bQ(x),A.cv(x),0,0,0,0),A.cJ(A.bL(w),A.bQ(w),A.cv(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aH(Date.now(),0,!1),t=A.cJ(A.bL(u),A.bQ(u),A.cv(u),0,0,0,0),s=t.ix(0-A.dN(A.L4(t)-1,0,0,0,0).a),r=A.cJ(A.bL(u),A.bQ(u),1,0,0,0,0),q=t.ix(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.bt(n)
x=w.a.e
x.toString
x=n+" ~ "+p.bt(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.WO(o,D.a1b(A.ce(E.aWz,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdAS(),A.f7(v,v,v,v,v,v,v,v,v,v,v,v,C.hM,v,new A.b9(A.G(10),C.B),v,v,v,v,v)),v,new B.cKy(),new B.cKz(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a1<jF<y>>(K)"])
B.cKz.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bru(new F.oQ(x,x,y.g))
break
case 1:w.a.bru(new F.oQ(w.c,w.b,y.g))
break
case 2:w.a.bru(new F.oQ(w.d,w.b,y.g))
break
case 3:w.a.bru(new F.oQ(w.e,w.b,y.g))
break
case 4:w.a.auR()
break}},
$S:19}
B.cKy.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.mp(A.d(A.f(d,C.c,w).gblh(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.mp(A.d(A.f(d,C.c,w).gbkp(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.mp(A.d(A.f(d,C.c,w).gbff(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.mp(A.d(A.f(d,C.c,w).gbfD(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.HQ,D.mp(A.d(A.f(d,C.c,w).gbhp(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.anW.prototype,"gdAS","auR",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a1J,A.eB)
x(B.aaO,A.L)
x(B.anW,A.S)
w(A.bu,[B.cKz,B.cKy])})()
A.b0(b.typeUniverse,JSON.parse('{"aaO":{"L":[],"m":[]},"anW":{"S":["aaO"]}}'))
var y={p:A.C("bw"),g:A.C("oQ<aH>"),l:A.C("v<jF<y>>"),e:A.C("y"),f:A.C("~")};(function constants(){E.aRb=new A.a0(57782,"MaterialIcons",!1)
E.aWz=new A.at(E.aRb,null,null,null,null)
E.fn=new B.a1J(0,"dateRange")})()};
(a=>{a["QekxdMmoeRjbXVd56HtCfdbwLpw="]=a.current})($__dart_deferred_initializers__);