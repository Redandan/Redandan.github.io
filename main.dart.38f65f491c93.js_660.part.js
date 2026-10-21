((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
oN(d,e,f,g,h,i){return new B.aaI(g,i,e,h,f,d,null)},
a1F:function a1F(d,e){this.a=d
this.b=e},
aaI:function aaI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
anN:function anN(){this.d=$
this.c=this.a=null},
cKi:function cKi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKh:function cKh(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[283]
G=c[348]
B=a.updateHolder(c[271],B)
E=c[436]
H=c[276]
I=c[277]
F=c[286]
B.a1F.prototype={
W(){return"QueryFieldType."+this.b}}
B.aaI.prototype={
P(){return new B.anN()},
cwR(d,e){return this.f.$2(d,e)}}
B.anN.prototype={
Y(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dS("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.aK()
w.d=x},
auN(){var x=0,w=A.l(y.f),v=this,u,t,s,r,q,p,o,n
var $async$auN=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.aG(Date.now(),0,!1).iw(-15768e10)
t=new A.aG(Date.now(),0,!1).iw(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new F.oO(r,s,y.g)}else s=null
x=2
return A.c(I.dW8(null,n,u,s,t),$async$auN)
case 2:q=e
if(q!=null){n=q.a
p=A.cJ(A.bL(n),A.bO(n),A.cv(n),0,0,0,0)
n=q.b
o=A.cJ(A.bL(n),A.bO(n),A.cv(n),23,59,59,0)
v.a.cwR(p,o)}return A.j(null,w)}})
return A.k($async$auN,w)},
bro(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cwR(A.cJ(A.bL(x),A.bO(x),A.cv(x),0,0,0,0),A.cJ(A.bL(w),A.bO(w),A.cv(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aG(Date.now(),0,!1),t=A.cJ(A.bL(u),A.bO(u),A.cv(u),0,0,0,0),s=t.iw(0-A.dN(A.L0(t)-1,0,0,0,0).a),r=A.cJ(A.bL(u),A.bO(u),1,0,0,0,0),q=t.iw(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.br(n)
x=w.a.e
x.toString
x=n+" ~ "+p.br(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.WK(o,D.a15(A.ce(E.aWw,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdAs(),A.f7(v,v,v,v,v,v,v,v,v,v,v,v,C.hL,v,new A.b9(A.G(10),C.B),v,v,v,v,v)),v,new B.cKh(),new B.cKi(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a2<jF<y>>(K)"])
B.cKi.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.bro(new F.oO(x,x,y.g))
break
case 1:w.a.bro(new F.oO(w.c,w.b,y.g))
break
case 2:w.a.bro(new F.oO(w.d,w.b,y.g))
break
case 3:w.a.bro(new F.oO(w.e,w.b,y.g))
break
case 4:w.a.auN()
break}},
$S:19}
B.cKh.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.mp(A.d(A.f(d,C.c,w).gblb(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.mp(A.d(A.f(d,C.c,w).gbkj(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.mp(A.d(A.f(d,C.c,w).gbf9(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.mp(A.d(A.f(d,C.c,w).gbfx(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.HO,D.mp(A.d(A.f(d,C.c,w).gbhj(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.anN.prototype,"gdAs","auN",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a1F,A.eA)
x(B.aaI,A.L)
x(B.anN,A.T)
w(A.bu,[B.cKi,B.cKh])})()
A.b_(b.typeUniverse,JSON.parse('{"aaI":{"L":[],"m":[]},"anN":{"T":["aaI"]}}'))
var y={p:A.C("by"),g:A.C("oO<aG>"),l:A.C("v<jF<y>>"),e:A.C("y"),f:A.C("~")};(function constants(){E.aR8=new A.a0(57782,"MaterialIcons",!1)
E.aWw=new A.as(E.aR8,null,null,null,null)
E.fo=new B.a1F(0,"dateRange")})()};
(a=>{a["/CKekX3zh5w8IW2qQ8O1aQsOzaU="]=a.current})($__dart_deferred_initializers__);