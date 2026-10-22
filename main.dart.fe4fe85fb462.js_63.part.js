((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dz(d,e,f){var y,x=null
if(d==null)return""
y=C.e1_(d)
if(f!=null)return A.dQ(f,x).bt(y)
switch(e.a){case 0:return A.dQ("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dQ("yyyy/MM/dd",x).bt(y)
case 2:return A.dQ("HH:mm",x).bt(y)
case 3:return A.dQ("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.bv2(y,x)
case 5:return B.eBy(y,x)}},
eBy(d,e){var y,x=C.e1_(d),w=new A.aG(Date.now(),0,!1),v=E.h.bX(A.cJ(A.bL(w),A.bQ(w),A.cw(w),0,0,0,0).du(A.cJ(A.bL(x),A.bQ(x),A.cw(x),0,0,0,0)).a,864e8)
if(v===0)return A.dQ("HH:mm",e).bt(x)
if(v===1){y=C.aaU(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dQ("HH:mm",e).bt(x)}if(v<7)return C.bv2(x,e)
return A.dQ("yyyy/MM/dd",e).bt(x)},
aaT:function aaT(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[297],B)
D=c[354]
C=c[299]
B.aaT.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.aaT,A.eC)})();(function constants(){D.be=new B.aaT(0,"dateTime")
D.rY=new B.aaT(1,"date")
D.eo=new B.aaT(3,"dateTimeFull")})()};
(a=>{a["34ULXLWOYJgLxQrFPJwrrXWxxLo="]=a.current})($__dart_deferred_initializers__);