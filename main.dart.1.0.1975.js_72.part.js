((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
d8(d,e,f){var y,x=null
if(d==null)return""
y=C.dmO(d)
if(f!=null)return A.dr(f,x).ba(y)
switch(e.a){case 0:return A.dr("yyyy/MM/dd HH:mm",x).ba(y)
case 1:return A.dr("yyyy/MM/dd",x).ba(y)
case 2:return A.dr("HH:mm",x).ba(y)
case 3:return A.dr("yyyy-MM-dd HH:mm:ss",x).ba(y)
case 4:return C.bcz(y,x)
case 5:return B.dTD(y,x)}},
dTD(d,e){var y,x=C.dmO(d),w=new A.ay(Date.now(),0,!1),v=E.i.bn(A.cr(A.bB(w),A.bE(w),A.cg(w),0,0,0,0).bU(A.cr(A.bB(x),A.bE(x),A.cg(x),0,0,0,0)).a,864e8)
if(v===0)return A.dr("HH:mm",e).ba(x)
if(v===1){y=C.a4Z(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dr("HH:mm",e).ba(x)}if(v<7)return C.bcz(x,e)
return A.dr("yyyy/MM/dd",e).ba(x)},
a4Y:function a4Y(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[287],B)
D=c[351]
C=c[289]
B.a4Y.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a4Y,A.eq)})();(function constants(){D.b7=new B.a4Y(0,"dateTime")
D.qr=new B.a4Y(1,"date")
D.e4=new B.a4Y(3,"dateTimeFull")})()};
(a=>{a["u98duHgXfWfDUmEgdZv95/oFLcc="]=a.current})($__dart_deferred_initializers__);