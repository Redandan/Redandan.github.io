((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dy(d,e,f){var y,x=null
if(d==null)return""
y=C.e03(d)
if(f!=null)return A.dS(f,x).bs(y)
switch(e.a){case 0:return A.dS("yyyy/MM/dd HH:mm",x).bs(y)
case 1:return A.dS("yyyy/MM/dd",x).bs(y)
case 2:return A.dS("HH:mm",x).bs(y)
case 3:return A.dS("yyyy-MM-dd HH:mm:ss",x).bs(y)
case 4:return C.buM(y,x)
case 5:return B.eAy(y,x)}},
eAy(d,e){var y,x=C.e03(d),w=new A.aG(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bL(w),A.bN(w),A.cv(w),0,0,0,0).du(A.cJ(A.bL(x),A.bN(x),A.cv(x),0,0,0,0)).a,864e8)
if(v===0)return A.dS("HH:mm",e).bs(x)
if(v===1){y=C.aaN(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dS("HH:mm",e).bs(x)}if(v<7)return C.buM(x,e)
return A.dS("yyyy/MM/dd",e).bs(x)},
aaM:function aaM(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[298],B)
D=c[356]
C=c[300]
B.aaM.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaM,A.eB)})();(function constants(){D.bd=new B.aaM(0,"dateTime")
D.rU=new B.aaM(1,"date")
D.en=new B.aaM(3,"dateTimeFull")})()};
(a=>{a["/xvPkhQjZMFsP2+exJRdZttoG84="]=a.current})($__dart_deferred_initializers__);