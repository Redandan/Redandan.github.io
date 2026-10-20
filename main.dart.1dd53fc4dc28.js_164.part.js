((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ecb(){var y=new C.cT(new Float64Array(16))
y.iB()
return new B.aRv(y,$.a9())},
aRv:function aRv(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bOk:function bOk(d,e){this.a=d
this.b=e},
e7r(d){var y=new C.cT(new Float64Array(16))
if(y.n6(d)===0)throw C.o(C.hJ(d,"other","Matrix cannot be inverted"))
return y},
a00:function a00(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[816]
B.aRv.prototype={
qw(d){var y=B.e7r(this.a),x=new C.ev(new Float64Array(3))
x.iC(d.a,d.b,0)
x=y.qx(x).a
return new C.N(x[0],x[1])}}
B.bOk.prototype={
Y(){return"PanAxis."+this.b}}
B.a00.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a00&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.a0(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aRv,C.cY)
y(B.bOk,C.ew)
y(B.a00,C.A)})()
C.aY(b.typeUniverse,JSON.parse('{"aRv":{"cY":["cT"],"b1":[]}}'));(function constants(){D.cbl=new B.bOk(3,"free")})()};
(a=>{a["OMOgAjp4L08ElsM8/ueTtHETrog="]=a.current})($__dart_deferred_initializers__);