((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
oN(d,e,f,g,h,i){return new B.aaE(g,i,e,h,f,d,null)},
a1D:function a1D(d,e){this.a=d
this.b=e},
aaE:function aaE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
anK:function anK(){this.d=$
this.c=this.a=null},
cKc:function cKc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKb:function cKb(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[283]
G=c[349]
B=a.updateHolder(c[271],B)
E=c[436]
H=c[276]
I=c[277]
F=c[286]
B.a1D.prototype={
W(){return"QueryFieldType."+this.b}}
B.aaE.prototype={
S(){return new B.anK()},
cwO(d,e){return this.f.$2(d,e)}}
B.anK.prototype={
Y(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dS("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.aK()
w.d=x},
auM(){var x=0,w=A.l(y.f),v=this,u,t,s,r,q,p,o,n
var $async$auM=A.h(function(d,e){if(d===1)return A.i(e,w)
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
return A.c(I.dW2(null,n,u,s,t),$async$auM)
case 2:q=e
if(q!=null){n=q.a
p=A.cJ(A.bK(n),A.bO(n),A.cv(n),0,0,0,0)
n=q.b
o=A.cJ(A.bK(n),A.bO(n),A.cv(n),23,59,59,0)
v.a.cwO(p,o)}return A.j(null,w)}})
return A.k($async$auM,w)},
brm(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cwO(A.cJ(A.bK(x),A.bO(x),A.cv(x),0,0,0,0),A.cJ(A.bK(w),A.bO(w),A.cv(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aG(Date.now(),0,!1),t=A.cJ(A.bK(u),A.bO(u),A.cv(u),0,0,0,0),s=t.iw(0-A.dM(A.L0(t)-1,0,0,0,0).a),r=A.cJ(A.bK(u),A.bO(u),1,0,0,0,0),q=t.iw(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.br(n)
x=w.a.e
x.toString
x=n+" ~ "+p.br(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.WJ(o,D.a13(A.ce(E.aWE,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdAp(),A.f3(v,v,v,v,v,v,v,v,v,v,v,v,C.hL,v,new A.b9(A.G(10),C.D),v,v,v,v,v)),v,new B.cKb(),new B.cKc(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a2<jE<y>>(M)"])
B.cKc.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.brm(new F.oO(x,x,y.g))
break
case 1:w.a.brm(new F.oO(w.c,w.b,y.g))
break
case 2:w.a.brm(new F.oO(w.d,w.b,y.g))
break
case 3:w.a.brm(new F.oO(w.e,w.b,y.g))
break
case 4:w.a.auM()
break}},
$S:19}
B.cKb.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.mp(A.d(A.f(d,C.c,w).gbl9(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.mp(A.d(A.f(d,C.c,w).gbkh(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.mp(A.d(A.f(d,C.c,w).gbf7(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.mp(A.d(A.f(d,C.c,w).gbfv(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.HR,D.mp(A.d(A.f(d,C.c,w).gbhh(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.anK.prototype,"gdAp","auM",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a1D,A.eA)
x(B.aaE,A.L)
x(B.anK,A.U)
w(A.bu,[B.cKc,B.cKb])})()
A.b_(b.typeUniverse,JSON.parse('{"aaE":{"L":[],"m":[]},"anK":{"U":["aaE"]}}'))
var y={p:A.C("by"),g:A.C("oO<aG>"),l:A.C("v<jE<y>>"),e:A.C("y"),f:A.C("~")};(function constants(){E.aRg=new A.a0(57782,"MaterialIcons",!1)
E.aWE=new A.at(E.aRg,null,null,null,null)
E.fo=new B.a1D(0,"dateRange")})()};
(a=>{a["4y9vMs4pH6Xn5mGN7W22ye0g8nQ="]=a.current})($__dart_deferred_initializers__);