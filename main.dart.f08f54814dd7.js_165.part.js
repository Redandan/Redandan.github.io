((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ei7(){var y=new C.cZ(new Float64Array(16))
y.hD()
return new B.aUx(y,$.aa())},
aUx:function aUx(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bSj:function bSj(d,e){this.a=d
this.b=e},
ede(d){var y=new C.cZ(new Float64Array(16))
if(y.no(d)===0)throw C.o(C.hG(d,"other","Matrix cannot be inverted"))
return y},
a1C:function a1C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[819]
B.aUx.prototype={
qQ(d){var y=B.ede(this.a),x=new C.eD(new Float64Array(3))
x.iI(d.a,d.b,0)
x=y.qR(x).a
return new C.N(x[0],x[1])}}
B.bSj.prototype={
W(){return"PanAxis."+this.b}}
B.a1C.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1C&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aUx,C.d6)
y(B.bSj,C.eA)
y(B.a1C,C.A)})()
C.b_(b.typeUniverse,JSON.parse('{"aUx":{"d6":["cZ"],"b2":[]}}'));(function constants(){D.cgP=new B.bSj(3,"free")})()};
(a=>{a["VrS9W83MK2OJ8RJIPZr5x2n1Lmo="]=a.current})($__dart_deferred_initializers__);