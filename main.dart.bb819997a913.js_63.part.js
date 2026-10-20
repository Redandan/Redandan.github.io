((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dy(d,e,f){var y,x=null
if(d==null)return""
y=C.e_v(d)
if(f!=null)return A.dS(f,x).br(y)
switch(e.a){case 0:return A.dS("yyyy/MM/dd HH:mm",x).br(y)
case 1:return A.dS("yyyy/MM/dd",x).br(y)
case 2:return A.dS("HH:mm",x).br(y)
case 3:return A.dS("yyyy-MM-dd HH:mm:ss",x).br(y)
case 4:return C.buD(y,x)
case 5:return B.ezY(y,x)}},
ezY(d,e){var y,x=C.e_v(d),w=new A.aG(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bK(w),A.bO(w),A.cv(w),0,0,0,0).ds(A.cJ(A.bK(x),A.bO(x),A.cv(x),0,0,0,0)).a,864e8)
if(v===0)return A.dS("HH:mm",e).br(x)
if(v===1){y=C.aaG(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dS("HH:mm",e).br(x)}if(v<7)return C.buD(x,e)
return A.dS("yyyy/MM/dd",e).br(x)},
aaF:function aaF(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[296],B)
D=c[355]
C=c[298]
B.aaF.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaF,A.eA)})();(function constants(){D.bf=new B.aaF(0,"dateTime")
D.rS=new B.aaF(1,"date")
D.em=new B.aaF(3,"dateTimeFull")})()};
(a=>{a["AhI2hCZV4VquWCkveFB006y6CQg="]=a.current})($__dart_deferred_initializers__);