((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B,A={
a8R(d){var y,x
if(d==null)y=null
else{x=d.toLowerCase()
y=C.aU(x,"-","_")}if(y!=="en")x=(y==null?null:B.c.aV(y,"en_"))===!0
else x=!0
return x},
bqO(d,e){var y,x=A.dUM(d),w=new C.aE(Date.now(),0,!1).dm(x).a
if(w<0)return C.dK("yyyy/MM/dd HH:mm",e).bo(x)
if(B.h.c2(w,1e6)<60)return A.a8R(e)?"Just now":"\u525b\u525b"
y=B.h.c2(w,6e7)
if(y<60){w=""+y
return A.a8R(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=B.h.c2(w,36e8)
if(y<24){w=""+y
return A.a8R(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=B.h.c2(w,864e8)
if(w===1)return A.a8R(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.a8R(e)?w+" days ago":w+" \u5929\u524d"}return C.dK("yyyy/MM/dd",e).bo(x)},
dUM(d){if(!d.c)return d
return d.fC()}}
C=c[0]
B=c[2]
A=a.updateHolder(c[298],A)
var z=a.updateTypes([])};
(a=>{a["PIkS/d5wExbnmAtL2TDtXofJSOI="]=a.current})($__dart_deferred_initializers__);