((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dEl(){var y=new C.cH(new Float64Array(16))
y.fz()
return new B.aHN(y,$.ae())},
aHN:function aHN(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byK:function byK(d,e){this.a=d
this.b=e},
dzO(d){var y=new C.cH(new Float64Array(16))
if(y.kD(d)===0)throw C.t(C.hE(d,"other","Matrix cannot be inverted"))
return y},
XK:function XK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[265],B)
D=c[794]
B.aHN.prototype={
nf(d){var y=B.dzO(this.a),x=new C.e8(new Float64Array(3))
x.fA(d.a,d.b,0)
x=y.ng(x).a
return new C.H(x[0],x[1])}}
B.byK.prototype={
U(){return"PanAxis."+this.b}}
B.XK.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XK&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHN,C.cR)
y(B.byK,C.es)
y(B.XK,C.G)})()
C.aV(b.typeUniverse,JSON.parse('{"aHN":{"cR":["cH"],"b4":[]}}'));(function constants(){D.c_I=new B.byK(3,"free")})()};
(a=>{a["aV/2d3SrQNAdXvW3j0psU2FdbQo="]=a.current})($__dart_deferred_initializers__);