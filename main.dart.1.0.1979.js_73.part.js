((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B,A={
a4Z(d){var y,x
if(d==null)y=null
else{x=d.toLowerCase()
y=C.aR(x,"-","_")}if(y!=="en")x=(y==null?null:B.c.aO(y,"en_"))===!0
else x=!0
return x},
bcy(d,e){var y,x=A.dmI(d),w=new C.ay(Date.now(),0,!1).bU(x).a
if(w<0)return C.dr("yyyy/MM/dd HH:mm",e).ba(x)
if(B.i.bn(w,1e6)<60)return A.a4Z(e)?"Just now":"\u525b\u525b"
y=B.i.bn(w,6e7)
if(y<60){w=""+y
return A.a4Z(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=B.i.bn(w,36e8)
if(y<24){w=""+y
return A.a4Z(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=B.i.bn(w,864e8)
if(w===1)return A.a4Z(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.a4Z(e)?w+" days ago":w+" \u5929\u524d"}return C.dr("yyyy/MM/dd",e).ba(x)},
dmI(d){if(!d.c)return d
return d.eq()}}
C=c[0]
B=c[2]
A=a.updateHolder(c[289],A)
var z=a.updateTypes([])};
(a=>{a["MyQjtOF2z50YDoATb8O3+wlXNyA="]=a.current})($__dart_deferred_initializers__);