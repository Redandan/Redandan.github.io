((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dEb(){var y=new C.cH(new Float64Array(16))
y.fz()
return new B.aHG(y,$.ad())},
aHG:function aHG(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byz:function byz(d,e){this.a=d
this.b=e},
dzF(d){var y=new C.cH(new Float64Array(16))
if(y.kB(d)===0)throw C.t(C.hG(d,"other","Matrix cannot be inverted"))
return y},
XM:function XM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[266],B)
D=c[811]
B.aHG.prototype={
nd(d){var y=B.dzF(this.a),x=new C.e8(new Float64Array(3))
x.fA(d.a,d.b,0)
x=y.ne(x).a
return new C.H(x[0],x[1])}}
B.byz.prototype={
V(){return"PanAxis."+this.b}}
B.XM.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XM&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHG,C.cO)
y(B.byz,C.eq)
y(B.XM,C.G)})()
C.aU(b.typeUniverse,JSON.parse('{"aHG":{"cO":["cH"],"b4":[]}}'));(function constants(){D.c_E=new B.byz(3,"free")})()};
(a=>{a["neNdPfj4rn7yEyo27OEF4foCHu8="]=a.current})($__dart_deferred_initializers__);