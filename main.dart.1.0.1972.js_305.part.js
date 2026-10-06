((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dDu(){var y=new C.cI(new Float64Array(16))
y.fA()
return new B.aHq(y,$.ac())},
aHq:function aHq(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byf:function byf(d,e){this.a=d
this.b=e},
dz_(d){var y=new C.cI(new Float64Array(16))
if(y.kz(d)===0)throw C.t(C.hE(d,"other","Matrix cannot be inverted"))
return y},
XE:function XE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[287],B)
D=c[888]
B.aHq.prototype={
nd(d){var y=B.dz_(this.a),x=new C.e8(new Float64Array(3))
x.fB(d.a,d.b,0)
x=y.ne(x).a
return new C.H(x[0],x[1])}}
B.byf.prototype={
W(){return"PanAxis."+this.b}}
B.XE.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XE&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHq,C.cO)
y(B.byf,C.ef)
y(B.XE,C.D)})()
C.aS(b.typeUniverse,JSON.parse('{"aHq":{"cO":["cI"],"b3":[]}}'));(function constants(){D.c_n=new B.byf(3,"free")})()};
(a=>{a["3O4x8nZnvTwe/2bsXz12pNY8IAs="]=a.current})($__dart_deferred_initializers__);