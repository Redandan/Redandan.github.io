((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,D,G,B={
oO(d,e,f,g,h,i){return new B.aaL(g,i,e,h,f,d,null)},
a1I:function a1I(d,e){this.a=d
this.b=e},
aaL:function aaL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
anR:function anR(){this.d=$
this.c=this.a=null},
cKr:function cKr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKq:function cKq(){}},E,H,I,F
A=c[0]
C=c[2]
D=c[285]
G=c[350]
B=a.updateHolder(c[273],B)
E=c[438]
H=c[278]
I=c[279]
F=c[288]
B.a1I.prototype={
W(){return"QueryFieldType."+this.b}}
B.aaL.prototype={
P(){return new B.anR()},
cwZ(d,e){return this.f.$2(d,e)}}
B.anR.prototype={
Y(){var x,w=this
w.a6()
x=w.a.w
if(x==null)x=A.dS("yyyy-MM-dd HH:mm:ss",null)
w.d!==$&&A.aK()
w.d=x},
auQ(){var x=0,w=A.l(y.f),v=this,u,t,s,r,q,p,o,n
var $async$auQ=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:n=v.c
n.toString
u=new A.aG(Date.now(),0,!1).ix(-15768e10)
t=new A.aG(Date.now(),0,!1).ix(31536e9)
s=v.a
r=s.d
if(r!=null&&s.e!=null){s=s.e
s.toString
s=new F.oP(r,s,y.g)}else s=null
x=2
return A.c(I.dWz(null,n,u,s,t),$async$auQ)
case 2:q=e
if(q!=null){n=q.a
p=A.cJ(A.bL(n),A.bN(n),A.cv(n),0,0,0,0)
n=q.b
o=A.cJ(A.bL(n),A.bN(n),A.cv(n),23,59,59,0)
v.a.cwZ(p,o)}return A.j(null,w)}})
return A.k($async$auQ,w)},
brs(d){var x,w,v=this.a
v.toString
x=d.a
w=d.b
v.cwZ(A.cJ(A.bL(x),A.bN(x),A.cv(x),0,0,0,0),A.cJ(A.bL(w),A.bN(w),A.cv(w),23,59,59,0))},
u(d){var x,w=this,v=null,u=new A.aG(Date.now(),0,!1),t=A.cJ(A.bL(u),A.bN(u),A.cv(u),0,0,0,0),s=t.ix(0-A.dN(A.L2(t)-1,0,0,0,0).a),r=A.cJ(A.bL(u),A.bN(u),1,0,0,0,0),q=t.ix(-2592e9),p=w.a,o=p.c,n=p.d
if(n!=null&&p.e!=null){p=w.d
p===$&&A.e()
n=p.bs(n)
x=w.a.e
x.toString
x=n+" ~ "+p.bs(x)
p=x}else{p=p.r
if(p==null)p="Select a date range"}return new H.WN(o,D.a18(A.ce(E.aWx,v,A.d(p,v,v,v,v,v,v,v,v,v),w.gdAD(),A.f7(v,v,v,v,v,v,v,v,v,v,v,v,C.hL,v,new A.b9(A.G(10),C.B),v,v,v,v,v)),v,new B.cKq(),new B.cKr(w,t,s,r,q),v,y.e),v)}}
var z=a.updateTypes(["B<~>()","a1<jF<y>>(K)"])
B.cKr.prototype={
$1(d){var x,w=this
switch(d){case 0:x=w.b
w.a.brs(new F.oP(x,x,y.g))
break
case 1:w.a.brs(new F.oP(w.c,w.b,y.g))
break
case 2:w.a.brs(new F.oP(w.d,w.b,y.g))
break
case 3:w.a.brs(new F.oP(w.e,w.b,y.g))
break
case 4:w.a.auQ()
break}},
$S:19}
B.cKq.prototype={
$1(d){var x=null,w=y.p,v=y.e
return A.a([D.mo(A.d(A.f(d,C.c,w).gblf(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,0,v),D.mo(A.d(A.f(d,C.c,w).gbkn(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,1,v),D.mo(A.d(A.f(d,C.c,w).gbfd(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,2,v),D.mo(A.d(A.f(d,C.c,w).gbfB(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,3,v),G.HP,D.mo(A.d(A.f(d,C.c,w).gbhn(),x,x,x,x,x,x,x,x,x),!0,48,x,x,x,x,x,4,v)],y.l)},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.anR.prototype,"gdAD","auQ",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a1I,A.eB)
x(B.aaL,A.L)
x(B.anR,A.T)
w(A.bu,[B.cKr,B.cKq])})()
A.b0(b.typeUniverse,JSON.parse('{"aaL":{"L":[],"m":[]},"anR":{"T":["aaL"]}}'))
var y={p:A.C("bw"),g:A.C("oP<aG>"),l:A.C("v<jF<y>>"),e:A.C("y"),f:A.C("~")};(function constants(){E.aR9=new A.a0(57782,"MaterialIcons",!1)
E.aWx=new A.as(E.aR9,null,null,null,null)
E.fn=new B.a1I(0,"dateRange")})()};
(a=>{a["H76yxDjooDvwIoe/gTkfnC1SOt8="]=a.current})($__dart_deferred_initializers__);