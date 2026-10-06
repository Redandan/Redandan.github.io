((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B,A={
a59(d){var y,x
if(d==null)y=null
else{x=d.toLowerCase()
y=C.aR(x,"-","_")}if(y!=="en")x=(y==null?null:B.c.aN(y,"en_"))===!0
else x=!0
return x},
bcT(d,e){var y,x=A.dnq(d),w=new C.az(Date.now(),0,!1).bR(x).a
if(w<0)return C.dr("yyyy/MM/dd HH:mm",e).ba(x)
if(B.i.bm(w,1e6)<60)return A.a59(e)?"Just now":"\u525b\u525b"
y=B.i.bm(w,6e7)
if(y<60){w=""+y
return A.a59(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=B.i.bm(w,36e8)
if(y<24){w=""+y
return A.a59(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=B.i.bm(w,864e8)
if(w===1)return A.a59(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.a59(e)?w+" days ago":w+" \u5929\u524d"}return C.dr("yyyy/MM/dd",e).ba(x)},
dnq(d){if(!d.c)return d
return d.eq()}}
C=c[0]
B=c[2]
A=a.updateHolder(c[290],A)
var z=a.updateTypes([])};
(a=>{a["fuPTrhmpp182OKaeHPJ1HEvLj3s="]=a.current})($__dart_deferred_initializers__);