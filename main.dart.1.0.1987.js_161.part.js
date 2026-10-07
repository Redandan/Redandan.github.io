((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dE4(){var y=new C.cH(new Float64Array(16))
y.fv()
return new B.aHF(y,$.ad())},
aHF:function aHF(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byy:function byy(d,e){this.a=d
this.b=e},
dzy(d){var y=new C.cH(new Float64Array(16))
if(y.kC(d)===0)throw C.t(C.hI(d,"other","Matrix cannot be inverted"))
return y},
XG:function XG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[266],B)
D=c[809]
B.aHF.prototype={
ne(d){var y=B.dzy(this.a),x=new C.e8(new Float64Array(3))
x.fw(d.a,d.b,0)
x=y.nf(x).a
return new C.H(x[0],x[1])}}
B.byy.prototype={
U(){return"PanAxis."+this.b}}
B.XG.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XG&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHF,C.cP)
y(B.byy,C.eq)
y(B.XG,C.G)})()
C.aU(b.typeUniverse,JSON.parse('{"aHF":{"cP":["cH"],"b4":[]}}'));(function constants(){D.c_P=new B.byy(3,"free")})()};
(a=>{a["KT0SNG/SNfs/Pv7SlQS3K8pELYI="]=a.current})($__dart_deferred_initializers__);