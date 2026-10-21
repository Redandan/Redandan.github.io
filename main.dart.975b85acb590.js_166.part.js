((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
eia(){var y=new C.cZ(new Float64Array(16))
y.hD()
return new B.aUz(y,$.aa())},
aUz:function aUz(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bSm:function bSm(d,e){this.a=d
this.b=e},
edi(d){var y=new C.cZ(new Float64Array(16))
if(y.no(d)===0)throw C.o(C.hF(d,"other","Matrix cannot be inverted"))
return y},
a1C:function a1C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[818]
B.aUz.prototype={
qQ(d){var y=B.edi(this.a),x=new C.eE(new Float64Array(3))
x.iI(d.a,d.b,0)
x=y.qR(x).a
return new C.M(x[0],x[1])}}
B.bSm.prototype={
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
y(B.aUz,C.d6)
y(B.bSm,C.eA)
y(B.a1C,C.A)})()
C.b_(b.typeUniverse,JSON.parse('{"aUz":{"d6":["cZ"],"b2":[]}}'));(function constants(){D.cgQ=new B.bSm(3,"free")})()};
(a=>{a["mXUd/2oznwZxW77aPS1gDFbt0tQ="]=a.current})($__dart_deferred_initializers__);