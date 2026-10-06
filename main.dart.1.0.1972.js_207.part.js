((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
d9(d,e,f){var y,x=null
if(d==null)return""
y=C.dmO(d)
if(f!=null)return A.dq(f,x).ba(y)
switch(e.a){case 0:return A.dq("yyyy/MM/dd HH:mm",x).ba(y)
case 1:return A.dq("yyyy/MM/dd",x).ba(y)
case 2:return A.dq("HH:mm",x).ba(y)
case 3:return A.dq("yyyy-MM-dd HH:mm:ss",x).ba(y)
case 4:return C.bcz(y,x)
case 5:return B.dTD(y,x)}},
dTD(d,e){var y,x=C.dmO(d),w=new A.az(Date.now(),0,!1),v=E.i.bn(A.cr(A.bB(w),A.bE(w),A.cg(w),0,0,0,0).bX(A.cr(A.bB(x),A.bE(x),A.cg(x),0,0,0,0)).a,864e8)
if(v===0)return A.dq("HH:mm",e).ba(x)
if(v===1){y=C.a5_(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dq("HH:mm",e).ba(x)}if(v<7)return C.bcz(x,e)
return A.dq("yyyy/MM/dd",e).ba(x)},
a4Z:function a4Z(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[312],B)
D=c[410]
C=c[314]
B.a4Z.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.a4Z,A.ef)})();(function constants(){D.b7=new B.a4Z(0,"dateTime")
D.qq=new B.a4Z(1,"date")
D.e4=new B.a4Z(3,"dateTimeFull")})()};
(a=>{a["a0EHtsK7WihrpzpcPEKAzrnxz7U="]=a.current})($__dart_deferred_initializers__);