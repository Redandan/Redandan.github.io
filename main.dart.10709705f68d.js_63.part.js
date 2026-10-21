((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dz(d,e,f){var y,x=null
if(d==null)return""
y=C.e0B(d)
if(f!=null)return A.dS(f,x).bt(y)
switch(e.a){case 0:return A.dS("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dS("yyyy/MM/dd",x).bt(y)
case 2:return A.dS("HH:mm",x).bt(y)
case 3:return A.dS("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.buV(y,x)
case 5:return B.eB6(y,x)}},
eB6(d,e){var y,x=C.e0B(d),w=new A.aH(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bL(w),A.bQ(w),A.cv(w),0,0,0,0).dt(A.cJ(A.bL(x),A.bQ(x),A.cv(x),0,0,0,0)).a,864e8)
if(v===0)return A.dS("HH:mm",e).bt(x)
if(v===1){y=C.aaQ(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dS("HH:mm",e).bt(x)}if(v<7)return C.buV(x,e)
return A.dS("yyyy/MM/dd",e).bt(x)},
aaP:function aaP(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[295],B)
D=c[352]
C=c[297]
B.aaP.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaP,A.eB)})();(function constants(){D.bd=new B.aaP(0,"dateTime")
D.rW=new B.aaP(1,"date")
D.en=new B.aaP(3,"dateTimeFull")})()};
(a=>{a["/+7bTgVxxpaxNo1o8qOZC6qDOcE="]=a.current})($__dart_deferred_initializers__);