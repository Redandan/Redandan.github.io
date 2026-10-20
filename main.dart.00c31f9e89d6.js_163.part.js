((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ebR(){var y=new C.cU(new Float64Array(16))
y.iB()
return new B.aRq(y,$.a9())},
aRq:function aRq(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bOc:function bOc(d,e){this.a=d
this.b=e},
e76(d){var y=new C.cU(new Float64Array(16))
if(y.n5(d)===0)throw C.o(C.hJ(d,"other","Matrix cannot be inverted"))
return y},
a_X:function a_X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[819]
B.aRq.prototype={
qu(d){var y=B.e76(this.a),x=new C.ev(new Float64Array(3))
x.iC(d.a,d.b,0)
x=y.qv(x).a
return new C.M(x[0],x[1])}}
B.bOc.prototype={
Y(){return"PanAxis."+this.b}}
B.a_X.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a_X&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.a0(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aRq,C.cY)
y(B.bOc,C.ew)
y(B.a_X,C.A)})()
C.aY(b.typeUniverse,JSON.parse('{"aRq":{"cY":["cU"],"b1":[]}}'));(function constants(){D.caU=new B.bOc(3,"free")})()};
(a=>{a["Qg9bmZX5H5Xb9CPAVDwlgfT6wh4="]=a.current})($__dart_deferred_initializers__);