((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B,A={
aaW(d){var y,x
if(d==null)y=null
else{x=d.toLowerCase()
y=C.aU(x,"-","_")}if(y!=="en")x=(y==null?null:B.b.aR(y,"en_"))===!0
else x=!0
return x},
bv9(d,e){var y,x=A.e1u(d),w=new C.aG(Date.now(),0,!1).dv(x).a
if(w<0)return C.dR("yyyy/MM/dd HH:mm",e).bt(x)
if(B.h.bX(w,1e6)<60)return A.aaW(e)?"Just now":"\u525b\u525b"
y=B.h.bX(w,6e7)
if(y<60){w=""+y
return A.aaW(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=B.h.bX(w,36e8)
if(y<24){w=""+y
return A.aaW(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=B.h.bX(w,864e8)
if(w===1)return A.aaW(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.aaW(e)?w+" days ago":w+" \u5929\u524d"}return C.dR("yyyy/MM/dd",e).bt(x)},
e1u(d){if(!d.c)return d
return d.fK()}}
C=c[0]
B=c[2]
A=a.updateHolder(c[299],A)
var z=a.updateTypes([])};
(a=>{a["aGb+4wGB5xdYbuXOtlrE22/xYJQ="]=a.current})($__dart_deferred_initializers__);