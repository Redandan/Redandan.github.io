((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
ekJ(){var y=new C.d_(new Float64Array(16))
y.hE()
return new B.aV5(y,$.aa())},
aV5:function aV5(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bTh:function bTh(d,e){this.a=d
this.b=e},
efT(d){var y=new C.d_(new Float64Array(16))
if(y.ns(d)===0)throw C.o(C.hF(d,"other","Matrix cannot be inverted"))
return y},
a1Q:function a1Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[279],B)
D=c[822]
B.aV5.prototype={
qX(d){var y=B.efT(this.a),x=new C.eG(new Float64Array(3))
x.iL(d.a,d.b,0)
x=y.qY(x).a
return new C.M(x[0],x[1])}}
B.bTh.prototype={
W(){return"PanAxis."+this.b}}
B.a1Q.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
p(d,e){var y=this
if(e==null)return!1
return e instanceof B.a1Q&&y.d.p(0,e.d)&&y.c.p(0,e.c)&&y.b.p(0,e.b)&&y.a.p(0,e.a)},
gj(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aV5,C.d4)
y(B.bTh,C.eD)
y(B.a1Q,C.A)})()
C.b0(b.typeUniverse,JSON.parse('{"aV5":{"d4":["d_"],"b1":[]}}'));(function constants(){D.chg=new B.bTh(3,"free")})()};
(a=>{a["YrCExniMiCiRgnreffLgSVPxMUo="]=a.current})($__dart_deferred_initializers__);