((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dr(d,e,f){var y,x=null
if(d==null)return""
y=C.dUB(d)
if(f!=null)return A.dK(f,x).bn(y)
switch(e.a){case 0:return A.dK("yyyy/MM/dd HH:mm",x).bn(y)
case 1:return A.dK("yyyy/MM/dd",x).bn(y)
case 2:return A.dK("HH:mm",x).bn(y)
case 3:return A.dK("yyyy-MM-dd HH:mm:ss",x).bn(y)
case 4:return C.bqJ(y,x)
case 5:return B.et0(y,x)}},
et0(d,e){var y,x=C.dUB(d),w=new A.aE(Date.now(),0,!1),v=E.h.c2(A.cG(A.bG(w),A.bK(w),A.cs(w),0,0,0,0).dm(A.cG(A.bG(x),A.bK(x),A.cs(x),0,0,0,0)).a,864e8)
if(v===0)return A.dK("HH:mm",e).bn(x)
if(v===1){y=C.a8R(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dK("HH:mm",e).bn(x)}if(v<7)return C.bqJ(x,e)
return A.dK("yyyy/MM/dd",e).bn(x)},
a8Q:function a8Q(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[296],B)
D=c[355]
C=c[298]
B.a8Q.prototype={
Y(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a8Q,A.ew)})();(function constants(){D.bc=new B.a8Q(0,"dateTime")
D.rA=new B.a8Q(1,"date")
D.ej=new B.a8Q(3,"dateTimeFull")})()};
(a=>{a["1o9ZEAO6XaQ01gFEzfZ7Chx7w6Y="]=a.current})($__dart_deferred_initializers__);