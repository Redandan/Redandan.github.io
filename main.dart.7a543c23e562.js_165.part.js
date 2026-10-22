((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ejA(){var y=new C.d_(new Float64Array(16))
y.hD()
return new B.aUR(y,$.aa())},
aUR:function aUR(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bST:function bST(d,e){this.a=d
this.b=e},
eeJ(d){var y=new C.d_(new Float64Array(16))
if(y.nq(d)===0)throw C.o(C.hH(d,"other","Matrix cannot be inverted"))
return y},
a1N:function a1N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[279],B)
D=c[822]
B.aUR.prototype={
qT(d){var y=B.eeJ(this.a),x=new C.eF(new Float64Array(3))
x.iJ(d.a,d.b,0)
x=y.qU(x).a
return new C.M(x[0],x[1])}}
B.bST.prototype={
W(){return"PanAxis."+this.b}}
B.a1N.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1N&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.X(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aUR,C.d4)
y(B.bST,C.eC)
y(B.a1N,C.A)})()
C.b0(b.typeUniverse,JSON.parse('{"aUR":{"d4":["d_"],"b3":[]}}'));(function constants(){D.ch4=new B.bST(3,"free")})()};
(a=>{a["26RjFsGvFSRcR2+rAb8vvBG8u2I="]=a.current})($__dart_deferred_initializers__);