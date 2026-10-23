((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
oS(d,e,f,g,h,i){return new B.aaX(g,i,e,h,f,d,null)},
a1Q:function a1Q(d,e){this.a=d
this.b=e},
aaX:function aaX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ao5:function ao5(){this.d=$
this.c=this.a=null},
cLA:function cLA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cLz:function cLz(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[284]
G=c[349]
B=a.updateHolder(c[272],B)
E=c[434]
H=c[277]
I=c[278]
F=c[287]
B.a1Q.prototype={
W(){return"QueryFieldType."+this.b}}
B.aaX.prototype={
O(){return new B.ao5()},
cxY(d,e){return this.f.$2(d,e)}}
B.ao5.prototype={
X(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dR("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.aL()
w.d=x},
av2(){var x=0,w=A.l(y.f),v=this,u,t,s,r,q,p,o,n
var $async$av2=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.aF(Date.now(),0,!1).ip(-15768e10)
t=new A.aF(Date.now(),0,!1).ip(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new F.oT(r,s,y.g)}else s=null
x=2
return A.c(I.dYA(null,n,u,s,t),$async$av2)
case 2:q=e
if(q!=null){n=q.a
p=A.cJ(A.bL(n),A.bQ(n),A.cw(n),0,0,0,0)
n=q.b
o=A.cJ(A.bL(n),A.bQ(n),A.cw(n),23,59,59,0)
v.a.cxY(p,o)}return A.j(null,w)}})
return A.k($async$av2,w)},
brL(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cxY(A.cJ(A.bL(x),A.bQ(x),A.cw(x),0,0,0,0),A.cJ(A.bL(w),A.bQ(w),A.cw(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aF(Date.now(),0,!1),t=A.cJ(A.bL(u),A.bQ(u),A.cw(u),0,0,0,0),s=t.ip(0-A.dV(A.Ld(t)-1,0,0,0,0).a),r=A.cJ(A.bL(u),A.bQ(u),1,0,0,0,0),q=t.ip(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.bt(n)
x=w.a.e
x.toString
x=n+" ~ "+p.bt(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.WW(o,D.a1h(A.ce(E.aWH,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdC3(),A.f7(v,v,v,v,v,v,v,v,v,v,v,v,C.hN,v,new A.b9(A.G(10),C.B),v,v,v,v,v)),v,new B.cLz(),new B.cLA(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a1<jI<y>>(L)"])
B.cLA.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.brL(new F.oT(x,x,y.g))
break
case 1:w.a.brL(new F.oT(w.c,w.b,y.g))
break
case 2:w.a.brL(new F.oT(w.d,w.b,y.g))
break
case 3:w.a.brL(new F.oT(w.e,w.b,y.g))
break
case 4:w.a.av2()
break}},
$S:19}
B.cLz.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.mw(A.d(A.f(d,C.c,w).gblw(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.mw(A.d(A.f(d,C.c,w).gbkE(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.mw(A.d(A.f(d,C.c,w).gbfu(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.mw(A.d(A.f(d,C.c,w).gbfS(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.HY,D.mw(A.d(A.f(d,C.c,w).gbhE(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.ao5.prototype,"gdC3","av2",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a1Q,A.eD)
x(B.aaX,A.K)
x(B.ao5,A.Q)
w(A.bt,[B.cLA,B.cLz])})()
A.b0(b.typeUniverse,JSON.parse('{"aaX":{"K":[],"m":[]},"ao5":{"Q":["aaX"]}}'))
var y={p:A.C("bv"),g:A.C("oT<aF>"),l:A.C("v<jI<y>>"),e:A.C("y"),f:A.C("~")};(function constants(){E.aRj=new A.a0(57782,"MaterialIcons",!1)
E.aWH=new A.at(E.aRj,null,null,null,null)
E.fn=new B.a1Q(0,"dateRange")})()};
(a=>{a["wKYcegJfSgIBMrgw5E7/VKQT0uo="]=a.current})($__dart_deferred_initializers__);