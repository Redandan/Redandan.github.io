((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ecg(){var y=new C.cT(new Float64Array(16))
y.iC()
return new B.aRw(y,$.a9())},
aRw:function aRw(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bOl:function bOl(d,e){this.a=d
this.b=e},
e7w(d){var y=new C.cT(new Float64Array(16))
if(y.n6(d)===0)throw C.o(C.hJ(d,"other","Matrix cannot be inverted"))
return y},
a01:function a01(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[817]
B.aRw.prototype={
qw(d){var y=B.e7w(this.a),x=new C.ev(new Float64Array(3))
x.iD(d.a,d.b,0)
x=y.qx(x).a
return new C.N(x[0],x[1])}}
B.bOl.prototype={
Y(){return"PanAxis."+this.b}}
B.a01.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a01&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.a0(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aRw,C.cY)
y(B.bOl,C.ew)
y(B.a01,C.A)})()
C.aY(b.typeUniverse,JSON.parse('{"aRw":{"cY":["cT"],"b1":[]}}'));(function constants(){D.cbm=new B.bOl(3,"free")})()};
(a=>{a["XfoYvhVSKEV4xlq1J848hzOCTIk="]=a.current})($__dart_deferred_initializers__);