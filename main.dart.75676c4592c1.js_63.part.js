((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,B={
dC(d,e,f){var y,x=null
if(d==null)return""
y=C.e2r(d)
if(f!=null)return A.dR(f,x).bt(y)
switch(e.a){case 0:return A.dR("yyyy/MM/dd HH:mm",x).bt(y)
case 1:return A.dR("yyyy/MM/dd",x).bt(y)
case 2:return A.dR("HH:mm",x).bt(y)
case 3:return A.dR("yyyy-MM-dd HH:mm:ss",x).bt(y)
case 4:return C.bvj(y,x)
case 5:return B.eD_(y,x)}},
eD_(d,e){var y,x=C.e2r(d),w=new A.aG(Date.now(),0,!1),v=E.h.bM(A.cJ(A.bL(w),A.bR(w),A.cw(w),0,0,0,0).du(A.cJ(A.bL(x),A.bR(x),A.cw(x),0,0,0,0)).a,864e8)
if(v===0)return A.dR("HH:mm",e).bt(x)
if(v===1){y=C.ab1(e)?"Yesterday":"\u6628\u5929"
return y+" "+A.dR("HH:mm",e).bt(x)}if(v<7)return C.bvj(x,e)
return A.dR("yyyy/MM/dd",e).bt(x)},
ab0:function ab0(d,e){this.a=d
this.b=e}},D,C
A=c[0]
E=c[2]
B=a.updateHolder(c[297],B)
D=c[354]
C=c[299]
B.ab0.prototype={
W(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.ab0,A.eD)})();(function constants(){D.be=new B.ab0(0,"dateTime")
D.t1=new B.ab0(1,"date")
D.eo=new B.ab0(3,"dateTimeFull")})()};
(a=>{a["H7s6CR31mwKccLMpBVgx2FHm1Rw="]=a.current})($__dart_deferred_initializers__);