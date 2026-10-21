((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
eiW(){var y=new C.cZ(new Float64Array(16))
y.hD()
return new B.aUG(y,$.aa())},
aUG:function aUG(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bSx:function bSx(d,e){this.a=d
this.b=e},
ee3(d){var y=new C.cZ(new Float64Array(16))
if(y.np(d)===0)throw C.o(C.hG(d,"other","Matrix cannot be inverted"))
return y},
a1H:function a1H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[279],B)
D=c[820]
B.aUG.prototype={
qS(d){var y=B.ee3(this.a),x=new C.eE(new Float64Array(3))
x.iI(d.a,d.b,0)
x=y.qT(x).a
return new C.M(x[0],x[1])}}
B.bSx.prototype={
W(){return"PanAxis."+this.b}}
B.a1H.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1H&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.X(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aUG,C.d7)
y(B.bSx,C.eB)
y(B.a1H,C.A)})()
C.b0(b.typeUniverse,JSON.parse('{"aUG":{"d7":["cZ"],"b2":[]}}'));(function constants(){D.ch_=new B.bSx(3,"free")})()};
(a=>{a["VP8BPMHnuWaL+CCz8vcyrpmbB2Y="]=a.current})($__dart_deferred_initializers__);