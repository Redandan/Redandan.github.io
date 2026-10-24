((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dB(d,e,f){var y,x=null
if(d==null)return""
y=C.e2a(d)
if(f!=null)return A.dR(f,x).bt(y)
switch(e.a){case 0:return A.dR("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dR("yyyy/MM/dd",x).bt(y)
case 2:return A.dR("HH:mm",x).bt(y)
case 3:return A.dR("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.bvk(y,x)
case 5:return B.eCG(y,x)}},
eCG(d,e){var y,x=C.e2a(d),w=new A.aF(Date.now(),0,!1),v=E.h.bM(A.cJ(A.bL(w),A.bQ(w),A.cw(w),0,0,0,0).dt(A.cJ(A.bL(x),A.bQ(x),A.cw(x),0,0,0,0)).a,864e8)
if(v===0)return A.dR("HH:mm",e).bt(x)
if(v===1){y=C.ab0(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dR("HH:mm",e).bt(x)}if(v<7)return C.bvk(x,e)
return A.dR("yyyy/MM/dd",e).bt(x)},
ab_:function ab_(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[297],B)
D=c[354]
C=c[299]
B.ab_.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.ab_,A.eD)})();(function constants(){D.be=new B.ab_(0,"dateTime")
D.t0=new B.ab_(1,"date")
D.eo=new B.ab_(3,"dateTimeFull")})()};
(a=>{a["A+IqaKeaumVxW0vtZll3PJsHcMQ="]=a.current})($__dart_deferred_initializers__);