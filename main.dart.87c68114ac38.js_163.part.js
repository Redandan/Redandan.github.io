((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ec0(){var y=new C.cU(new Float64Array(16))
y.iB()
return new B.aRt(y,$.a9())},
aRt:function aRt(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bOh:function bOh(d,e){this.a=d
this.b=e},
e7g(d){var y=new C.cU(new Float64Array(16))
if(y.n5(d)===0)throw C.o(C.hJ(d,"other","Matrix cannot be inverted"))
return y},
a_Y:function a_Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[817]
B.aRt.prototype={
qv(d){var y=B.e7g(this.a),x=new C.ev(new Float64Array(3))
x.iC(d.a,d.b,0)
x=y.qw(x).a
return new C.N(x[0],x[1])}}
B.bOh.prototype={
Y(){return"PanAxis."+this.b}}
B.a_Y.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a_Y&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.a0(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aRt,C.cY)
y(B.bOh,C.ew)
y(B.a_Y,C.A)})()
C.aY(b.typeUniverse,JSON.parse('{"aRt":{"cY":["cU"],"b1":[]}}'));(function constants(){D.cbb=new B.bOh(3,"free")})()};
(a=>{a["o6w8tDEDfva6sO/cMDjBqFJN3kA="]=a.current})($__dart_deferred_initializers__);