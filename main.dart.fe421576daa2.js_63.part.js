((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dz(d,e,f){var y,x=null
if(d==null)return""
y=C.e0n(d)
if(f!=null)return A.dS(f,x).bt(y)
switch(e.a){case 0:return A.dS("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dS("yyyy/MM/dd",x).bt(y)
case 2:return A.dS("HH:mm",x).bt(y)
case 3:return A.dS("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.buS(y,x)
case 5:return B.eAS(y,x)}},
eAS(d,e){var y,x=C.e0n(d),w=new A.aH(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bL(w),A.bQ(w),A.cv(w),0,0,0,0).dt(A.cJ(A.bL(x),A.bQ(x),A.cv(x),0,0,0,0)).a,864e8)
if(v===0)return A.dS("HH:mm",e).bt(x)
if(v===1){y=C.aaO(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dS("HH:mm",e).bt(x)}if(v<7)return C.buS(x,e)
return A.dS("yyyy/MM/dd",e).bt(x)},
aaN:function aaN(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[297],B)
D=c[355]
C=c[299]
B.aaN.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaN,A.eB)})();(function constants(){D.bd=new B.aaN(0,"dateTime")
D.rV=new B.aaN(1,"date")
D.en=new B.aaN(3,"dateTimeFull")})()};
(a=>{a["0aWaGutAWJB0dnqO7eUt51iiQ6I="]=a.current})($__dart_deferred_initializers__);