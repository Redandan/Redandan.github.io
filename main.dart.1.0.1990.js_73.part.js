((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
d8(d,e,f){var y,x=null
if(d==null)return""
y=C.dnq(d)
if(f!=null)return A.dr(f,x).ba(y)
switch(e.a){case 0:return A.dr("yyyy/MM/dd HH:mm",x).ba(y)
case 1:return A.dr("yyyy/MM/dd",x).ba(y)
case 2:return A.dr("HH:mm",x).ba(y)
case 3:return A.dr("yyyy-MM-dd HH:mm:ss",x).ba(y)
case 4:return C.bcT(y,x)
case 5:return B.dUl(y,x)}},
dUl(d,e){var y,x=C.dnq(d),w=new A.az(Date.now(),0,!1),v=E.i.bm(A.cr(A.bB(w),A.bE(w),A.cf(w),0,0,0,0).bR(A.cr(A.bB(x),A.bE(x),A.cf(x),0,0,0,0)).a,864e8)
if(v===0)return A.dr("HH:mm",e).ba(x)
if(v===1){y=C.a59(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dr("HH:mm",e).ba(x)}if(v<7)return C.bcT(x,e)
return A.dr("yyyy/MM/dd",e).ba(x)},
a58:function a58(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[288],B)
D=c[352]
C=c[290]
B.a58.prototype={
V(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a58,A.eq)})();(function constants(){D.b8=new B.a58(0,"dateTime")
D.qs=new B.a58(1,"date")
D.e4=new B.a58(3,"dateTimeFull")})()};
(a=>{a["mfFC8kmYwg5L8xmm/hPOoVIA2rw="]=a.current})($__dart_deferred_initializers__);