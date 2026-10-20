((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ei4(){var y=new C.cZ(new Float64Array(16))
y.hE()
return new B.aUx(y,$.aa())},
aUx:function aUx(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bSj:function bSj(d,e){this.a=d
this.b=e},
edb(d){var y=new C.cZ(new Float64Array(16))
if(y.no(d)===0)throw C.o(C.hG(d,"other","Matrix cannot be inverted"))
return y},
a1D:function a1D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[278],B)
D=c[820]
B.aUx.prototype={
qP(d){var y=B.edb(this.a),x=new C.eD(new Float64Array(3))
x.iI(d.a,d.b,0)
x=y.qQ(x).a
return new C.N(x[0],x[1])}}
B.bSj.prototype={
W(){return"PanAxis."+this.b}}
B.a1D.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1D&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aUx,C.d5)
y(B.bSj,C.eA)
y(B.a1D,C.A)})()
C.b_(b.typeUniverse,JSON.parse('{"aUx":{"d5":["cZ"],"b2":[]}}'));(function constants(){D.cgO=new B.bSj(3,"free")})()};
(a=>{a["hJaZTmF0IlWHsh+7EUAvqMwsnR8="]=a.current})($__dart_deferred_initializers__);