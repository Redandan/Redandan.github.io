((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dz(d,e,f){var y,x=null
if(d==null)return""
y=C.e0M(d)
if(f!=null)return A.dQ(f,x).bt(y)
switch(e.a){case 0:return A.dQ("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dQ("yyyy/MM/dd",x).bt(y)
case 2:return A.dQ("HH:mm",x).bt(y)
case 3:return A.dQ("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.bv2(y,x)
case 5:return B.eBk(y,x)}},
eBk(d,e){var y,x=C.e0M(d),w=new A.aG(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bL(w),A.bQ(w),A.cv(w),0,0,0,0).du(A.cJ(A.bL(x),A.bQ(x),A.cv(x),0,0,0,0)).a,864e8)
if(v===0)return A.dQ("HH:mm",e).bt(x)
if(v===1){y=C.aaR(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dQ("HH:mm",e).bt(x)}if(v<7)return C.bv2(x,e)
return A.dQ("yyyy/MM/dd",e).bt(x)},
aaQ:function aaQ(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[297],B)
D=c[354]
C=c[299]
B.aaQ.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaQ,A.eC)})();(function constants(){D.be=new B.aaQ(0,"dateTime")
D.rX=new B.aaQ(1,"date")
D.eo=new B.aaQ(3,"dateTimeFull")})()};
(a=>{a["WDZf3iGa/TwP/icCoOJcMRT6HV4="]=a.current})($__dart_deferred_initializers__);