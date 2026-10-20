((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dr(d,e,f){var y,x=null
if(d==null)return""
y=C.dV2(d)
if(f!=null)return A.dK(f,x).bo(y)
switch(e.a){case 0:return A.dK("yyyy/MM/dd HH:mm",x).bo(y)
case 1:return A.dK("yyyy/MM/dd",x).bo(y)
case 2:return A.dK("HH:mm",x).bo(y)
case 3:return A.dK("yyyy-MM-dd HH:mm:ss",x).bo(y)
case 4:return C.bqS(y,x)
case 5:return B.ett(y,x)}},
ett(d,e){var y,x=C.dV2(d),w=new A.aE(Date.now(),0,!1),v=E.h.c2(A.cG(A.bG(w),A.bL(w),A.cs(w),0,0,0,0).dm(A.cG(A.bG(x),A.bL(x),A.cs(x),0,0,0,0)).a,864e8)
if(v===0)return A.dK("HH:mm",e).bo(x)
if(v===1){y=C.a8T(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dK("HH:mm",e).bo(x)}if(v<7)return C.bqS(x,e)
return A.dK("yyyy/MM/dd",e).bo(x)},
a8S:function a8S(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[296],B)
D=c[355]
C=c[298]
B.a8S.prototype={
Y(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a8S,A.ew)})();(function constants(){D.bd=new B.a8S(0,"dateTime")
D.rD=new B.a8S(1,"date")
D.ej=new B.a8S(3,"dateTimeFull")})()};
(a=>{a["izrTgeq/+L7DJOvvXnKj7E8PTJg="]=a.current})($__dart_deferred_initializers__);