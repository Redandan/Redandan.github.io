((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ek1(){var y=new C.d_(new Float64Array(16))
y.hE()
return new B.aUW(y,$.aa())},
aUW:function aUW(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bT5:function bT5(d,e){this.a=d
this.b=e},
efb(d){var y=new C.d_(new Float64Array(16))
if(y.nq(d)===0)throw C.o(C.hH(d,"other","Matrix cannot be inverted"))
return y},
a1O:function a1O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[279],B)
D=c[822]
B.aUW.prototype={
qW(d){var y=B.efb(this.a),x=new C.eG(new Float64Array(3))
x.iK(d.a,d.b,0)
x=y.qX(x).a
return new C.M(x[0],x[1])}}
B.bT5.prototype={
W(){return"PanAxis."+this.b}}
B.a1O.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1O&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.X(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aUW,C.d4)
y(B.bT5,C.eD)
y(B.a1O,C.A)})()
C.b0(b.typeUniverse,JSON.parse('{"aUW":{"d4":["d_"],"b3":[]}}'));(function constants(){D.ch7=new B.bT5(3,"free")})()};
(a=>{a["uH95eS/dXzoHphmskOulG2aqvDo="]=a.current})($__dart_deferred_initializers__);