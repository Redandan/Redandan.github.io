((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,A,B={
dEf(){var y=new C.cH(new Float64Array(16))
y.fv()
return new B.aHI(y,$.ad())},
aHI:function aHI(d,e){var _=this
_.a=d
_.k4$=0
_.ok$=e
_.p2$=_.p1$=0},
byC:function byC(d,e){this.a=d
this.b=e},
dzJ(d){var y=new C.cH(new Float64Array(16))
if(y.kC(d)===0)throw C.t(C.hI(d,"other","Matrix cannot be inverted"))
return y},
XH:function XH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
C=c[0]
A=c[2]
B=a.updateHolder(c[266],B)
D=c[809]
B.aHI.prototype={
ne(d){var y=B.dzJ(this.a),x=new C.e8(new Float64Array(3))
x.fw(d.a,d.b,0)
x=y.nf(x).a
return new C.H(x[0],x[1])}}
B.byC.prototype={
U(){return"PanAxis."+this.b}}
B.XH.prototype={
l(d){var y=this
return"[0] "+y.a.l(0)+"\n[1] "+y.b.l(0)+"\n[2] "+y.c.l(0)+"\n[3] "+y.d.l(0)+"\n"},
n(d,e){var y=this
if(e==null)return!1
return e instanceof B.XH&&y.d.n(0,e.d)&&y.c.n(0,e.c)&&y.b.n(0,e.b)&&y.a.n(0,e.a)},
gi(d){var y=this
return C.Y(y.a,y.b,y.c,y.d,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aHI,C.cP)
y(B.byC,C.eq)
y(B.XH,C.G)})()
C.aU(b.typeUniverse,JSON.parse('{"aHI":{"cP":["cH"],"b4":[]}}'));(function constants(){D.c_S=new B.byC(3,"free")})()};
(a=>{a["oQ55XrokAV6GNM+exXnLpkI61DE="]=a.current})($__dart_deferred_initializers__);