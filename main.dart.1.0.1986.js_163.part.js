((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dE1(){var y=new C.cH(new Float64Array(16))
y.fv()
return new B.aHE(y,$.ad())},
aHE:function aHE(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byy:function byy(d,e){this.a=d
this.b=e},
dzv(d){var y=new C.cH(new Float64Array(16))
if(y.kC(d)===0)throw C.t(C.hH(d,"other","Matrix cannot be inverted"))
return y},
XI:function XI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[266],B)
D=c[811]
B.aHE.prototype={
nd(d){var y=B.dzv(this.a),x=new C.e8(new Float64Array(3))
x.fw(d.a,d.b,0)
x=y.ne(x).a
return new C.H(x[0],x[1])}}
B.byy.prototype={
U(){return"PanAxis."+this.b}}
B.XI.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XI&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHE,C.cO)
y(B.byy,C.eq)
y(B.XI,C.G)})()
C.aU(b.typeUniverse,JSON.parse('{"aHE":{"cO":["cH"],"b4":[]}}'));(function constants(){D.c_J=new B.byy(3,"free")})()};
(a=>{a["8Z+yPUKPebCASEyWXBgCQsCa5To="]=a.current})($__dart_deferred_initializers__);