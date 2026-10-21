((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dy(d,e,f){var y,x=null
if(d==null)return""
y=C.e_D(d)
if(f!=null)return A.dS(f,x).br(y)
switch(e.a){case 0:return A.dS("yyyy/MM/dd HH:mm",x).br(y)
case 1:return A.dS("yyyy/MM/dd",x).br(y)
case 2:return A.dS("HH:mm",x).br(y)
case 3:return A.dS("yyyy-MM-dd HH:mm:ss",x).br(y)
case 4:return C.buH(y,x)
case 5:return B.eA7(y,x)}},
eA7(d,e){var y,x=C.e_D(d),w=new A.aG(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bK(w),A.bO(w),A.cv(w),0,0,0,0).dt(A.cJ(A.bK(x),A.bO(x),A.cv(x),0,0,0,0)).a,864e8)
if(v===0)return A.dS("HH:mm",e).br(x)
if(v===1){y=C.aaK(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dS("HH:mm",e).br(x)}if(v<7)return C.buH(x,e)
return A.dS("yyyy/MM/dd",e).br(x)},
aaJ:function aaJ(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[296],B)
D=c[354]
C=c[298]
B.aaJ.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaJ,A.eA)})();(function constants(){D.bc=new B.aaJ(0,"dateTime")
D.rU=new B.aaJ(1,"date")
D.em=new B.aaJ(3,"dateTimeFull")})()};
(a=>{a["7PAJiyJXmNIO9kQJqYp4BNjzmN8="]=a.current})($__dart_deferred_initializers__);