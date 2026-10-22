((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dA(d,e,f){var y,x=null
if(d==null)return""
y=C.e1P(d)
if(f!=null)return A.dR(f,x).bt(y)
switch(e.a){case 0:return A.dR("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dR("yyyy/MM/dd",x).bt(y)
case 2:return A.dR("HH:mm",x).bt(y)
case 3:return A.dR("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.bva(y,x)
case 5:return B.eCk(y,x)}},
eCk(d,e){var y,x=C.e1P(d),w=new A.aG(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bL(w),A.bQ(w),A.cw(w),0,0,0,0).dv(A.cJ(A.bL(x),A.bQ(x),A.cw(x),0,0,0,0)).a,864e8)
if(v===0)return A.dR("HH:mm",e).bt(x)
if(v===1){y=C.aaY(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dR("HH:mm",e).bt(x)}if(v<7)return C.bva(x,e)
return A.dR("yyyy/MM/dd",e).bt(x)},
aaX:function aaX(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[297],B)
D=c[354]
C=c[299]
B.aaX.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaX,A.eD)})();(function constants(){D.be=new B.aaX(0,"dateTime")
D.t0=new B.aaX(1,"date")
D.eo=new B.aaX(3,"dateTimeFull")})()};
(a=>{a["6i04VBJlJ3+A7dHaSrrIPpBdcDI="]=a.current})($__dart_deferred_initializers__);