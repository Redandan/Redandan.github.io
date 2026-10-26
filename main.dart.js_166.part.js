((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
elR(){var y=new C.d0(new Float64Array(16))
y.hE()
return new B.aVn(y,$.aa())},
aVn:function aVn(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bTV:function bTV(d,e){this.a=d
this.b=e},
egZ(d){var y=new C.d0(new Float64Array(16))
if(y.nt(d)===0)throw C.o(C.hE(d,"other","Matrix cannot be inverted"))
return y},
a25:function a25(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[279],B)
D=c[822]
B.aVn.prototype={
qX(d){var y=B.egZ(this.a),x=new C.eH(new Float64Array(3))
x.iL(d.a,d.b,0)
x=y.qY(x).a
return new C.M(x[0],x[1])}}
B.bTV.prototype={
W(){return"PanAxis."+this.b}}
B.a25.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a25&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.Z(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aVn,C.d4)
y(B.bTV,C.eD)
y(B.a25,C.B)})()
C.b1(b.typeUniverse,JSON.parse('{"aVn":{"d4":["d0"],"aX":[]}}'));(function constants(){D.chk=new B.bTV(3,"free")})()};
(a=>{a["t+30uNn560tpylS1e9pzPcjcbfY="]=a.current})($__dart_deferred_initializers__);