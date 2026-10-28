((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dL6(){var y=new C.cF(new Float64Array(16))
y.hl()
return new B.aM8(y,$.aa())},
aM8:function aM8(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
bDU:function bDU(d,e){this.a=d
this.b=e},
dGR(d){var y=new C.cF(new Float64Array(16))
if(y.mJ(d)===0)throw C.o(C.hb(d,"other","Matrix cannot be inverted"))
return y},
Yy:function Yy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[207],B)
D=c[742]
B.aM8.prototype={
pL(d){var y=B.dGR(this.a),x=new C.ei(new Float64Array(3))
x.ih(d.a,d.b,0)
x=y.pM(x).a
return new C.E(x[0],x[1])}}
B.bDU.prototype={
T(){return"PanAxis."+this.b}}
B.Yy.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.Yy&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gj(d){var y=this
return C.Q(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aM8,C.cA)
y(B.bDU,C.eb)
y(B.Yy,C.A)})()
C.b0(b.typeUniverse,JSON.parse('{"aM8":{"cA":["cF"],"aP":[]}}'));(function constants(){D.bXY=new B.bDU(3,"free")})()};
(a=>{a["qUfNHJD8UKsoxw5oDIeufLMMDx4="]=a.current})($__dart_deferred_initializers__);