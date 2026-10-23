((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B,A={
ab0(d){var y,x
if(d==null)y=null
else{x=d.toLowerCase()
y=C.aU(x,"-","_")}if(y!=="en")x=(y==null?null:B.b.aR(y,"en_"))===!0
else x=!0
return x},
bvk(d,e){var y,x=A.e27(d),w=new C.aF(Date.now(),0,!1).dt(x).a
if(w<0)return C.dR("yyyy/MM/dd HH:mm",e).bt(x)
if(B.h.bM(w,1e6)<60)return A.ab0(e)?"Just now":"\u525b\u525b"
y=B.h.bM(w,6e7)
if(y<60){w=""+y
return A.ab0(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=B.h.bM(w,36e8)
if(y<24){w=""+y
return A.ab0(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=B.h.bM(w,864e8)
if(w===1)return A.ab0(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.ab0(e)?w+" days ago":w+" \u5929\u524d"}return C.dR("yyyy/MM/dd",e).bt(x)},
e27(d){if(!d.c)return d
return d.fK()}}
C=c[0]
B=c[2]
A=a.updateHolder(c[299],A)
var z=a.updateTypes([])};
(a=>{a["chrKQ9JaxgEum6O5VIOaOi8cTLQ="]=a.current})($__dart_deferred_initializers__);