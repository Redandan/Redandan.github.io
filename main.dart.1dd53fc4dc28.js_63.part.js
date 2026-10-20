((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dr(d,e,f){var y,x=null
if(d==null)return""
y=C.dUZ(d)
if(f!=null)return A.dK(f,x).bo(y)
switch(e.a){case 0:return A.dK("yyyy/MM/dd HH:mm",x).bo(y)
case 1:return A.dK("yyyy/MM/dd",x).bo(y)
case 2:return A.dK("HH:mm",x).bo(y)
case 3:return A.dK("yyyy-MM-dd HH:mm:ss",x).bo(y)
case 4:return C.bqR(y,x)
case 5:return B.etp(y,x)}},
etp(d,e){var y,x=C.dUZ(d),w=new A.aE(Date.now(),0,!1),v=E.h.c2(A.cG(A.bG(w),A.bL(w),A.cs(w),0,0,0,0).dm(A.cG(A.bG(x),A.bL(x),A.cs(x),0,0,0,0)).a,864e8)
if(v===0)return A.dK("HH:mm",e).bo(x)
if(v===1){y=C.a8S(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dK("HH:mm",e).bo(x)}if(v<7)return C.bqR(x,e)
return A.dK("yyyy/MM/dd",e).bo(x)},
a8R:function a8R(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[295],B)
D=c[354]
C=c[297]
B.a8R.prototype={
Y(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a8R,A.ew)})();(function constants(){D.bd=new B.a8R(0,"dateTime")
D.rC=new B.a8R(1,"date")
D.ej=new B.a8R(3,"dateTimeFull")})()};
(a=>{a["v8huAJdkezwHHuW1Bkq9xur2dnk="]=a.current})($__dart_deferred_initializers__);