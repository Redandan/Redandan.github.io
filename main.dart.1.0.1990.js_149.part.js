((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dEt(){var y=new C.cH(new Float64Array(16))
y.fB()
return new B.aHP(y,$.ae())},
aHP:function aHP(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byM:function byM(d,e){this.a=d
this.b=e},
dzV(d){var y=new C.cH(new Float64Array(16))
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
B.aHP.prototype={
nf(d){var y=B.dzV(this.a),x=new C.e8(new Float64Array(3))
x.fC(d.a,d.b,0)
x=y.ng(x).a
return new C.H(x[0],x[1])}}
B.byM.prototype={
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
y(B.aHP,C.cR)
y(B.byM,C.es)
y(B.XK,C.G)})()
C.aV(b.typeUniverse,JSON.parse('{"aHP":{"cR":["cH"],"b4":[]}}'));(function constants(){D.c_N=new B.byM(3,"free")})()};
(a=>{a["c8qtSRWTt35qUbO5B1SXrY9W9JQ="]=a.current})($__dart_deferred_initializers__);