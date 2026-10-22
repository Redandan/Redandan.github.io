((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ejj(){var y=new C.d0(new Float64Array(16))
y.hD()
return new B.aUO(y,$.aa())},
aUO:function aUO(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bSF:function bSF(d,e){this.a=d
this.b=e},
eer(d){var y=new C.d0(new Float64Array(16))
if(y.np(d)===0)throw C.o(C.hG(d,"other","Matrix cannot be inverted"))
return y},
a1J:function a1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[279],B)
D=c[820]
B.aUO.prototype={
qT(d){var y=B.eer(this.a),x=new C.eF(new Float64Array(3))
x.iJ(d.a,d.b,0)
x=y.qU(x).a
return new C.M(x[0],x[1])}}
B.bSF.prototype={
W(){return"PanAxis."+this.b}}
B.a1J.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1J&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.X(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aUO,C.d7)
y(B.bSF,C.eC)
y(B.a1J,C.A)})()
C.b0(b.typeUniverse,JSON.parse('{"aUO":{"d7":["d0"],"b2":[]}}'));(function constants(){D.ch3=new B.bSF(3,"free")})()};
(a=>{a["tw0QlCXS1h6vW7DOc8q2AnbRSUI="]=a.current})($__dart_deferred_initializers__);