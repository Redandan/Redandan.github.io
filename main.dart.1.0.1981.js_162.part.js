((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dDv(){var y=new C.cH(new Float64Array(16))
y.fz()
return new B.aHr(y,$.ad())},
aHr:function aHr(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byb:function byb(d,e){this.a=d
this.b=e},
dyZ(d){var y=new C.cH(new Float64Array(16))
if(y.kC(d)===0)throw C.t(C.hE(d,"other","Matrix cannot be inverted"))
return y},
XG:function XG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[265],B)
D=c[809]
B.aHr.prototype={
nd(d){var y=B.dyZ(this.a),x=new C.e8(new Float64Array(3))
x.fA(d.a,d.b,0)
x=y.ne(x).a
return new C.H(x[0],x[1])}}
B.byb.prototype={
W(){return"PanAxis."+this.b}}
B.XG.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XG&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHr,C.cO)
y(B.byb,C.eq)
y(B.XG,C.G)})()
C.aV(b.typeUniverse,JSON.parse('{"aHr":{"cO":["cH"],"b3":[]}}'));(function constants(){D.c_n=new B.byb(3,"free")})()};
(a=>{a["xsDmrzCKwyXaXYHUwULDu4llUrM="]=a.current})($__dart_deferred_initializers__);