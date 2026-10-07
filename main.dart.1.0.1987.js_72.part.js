((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
d9(d,e,f){var y,x=null
if(d==null)return""
y=C.dnj(d)
if(f!=null)return A.dq(f,x).ba(y)
switch(e.a){case 0:return A.dq("yyyy/MM/dd HH:mm",x).ba(y)
case 1:return A.dq("yyyy/MM/dd",x).ba(y)
case 2:return A.dq("HH:mm",x).ba(y)
case 3:return A.dq("yyyy-MM-dd HH:mm:ss",x).ba(y)
case 4:return C.bcR(y,x)
case 5:return B.dUd(y,x)}},
dUd(d,e){var y,x=C.dnj(d),w=new A.az(Date.now(),0,!1),v=E.i.bm(A.cr(A.bB(w),A.bE(w),A.cf(w),0,0,0,0).bR(A.cr(A.bB(x),A.bE(x),A.cf(x),0,0,0,0)).a,864e8)
if(v===0)return A.dq("HH:mm",e).ba(x)
if(v===1){y=C.a57(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dq("HH:mm",e).ba(x)}if(v<7)return C.bcR(x,e)
return A.dq("yyyy/MM/dd",e).ba(x)},
a56:function a56(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[288],B)
D=c[351]
C=c[290]
B.a56.prototype={
U(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a56,A.eq)})();(function constants(){D.b8=new B.a56(0,"dateTime")
D.qs=new B.a56(1,"date")
D.e4=new B.a56(3,"dateTimeFull")})()};
(a=>{a["CiXtOg8lBH7nA2EsOyDyAHYqKo8="]=a.current})($__dart_deferred_initializers__);