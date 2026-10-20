((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B,A={
aaG(d){var y,x
if(d==null)y=null
else{x=d.toLowerCase()
y=C.aT(x,"-","_")}if(y!=="en")x=(y==null?null:B.b.aQ(y,"en_"))===!0
else x=!0
return x},
buA(d,e){var y,x=A.e_m(d),w=new C.aG(Date.now(),0,!1).ds(x).a
if(w<0)return C.dS("yyyy/MM/dd HH:mm",e).br(x)
if(B.h.bX(w,1e6)<60)return A.aaG(e)?"Just now":"\u525b\u525b"
y=B.h.bX(w,6e7)
if(y<60){w=""+y
return A.aaG(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=B.h.bX(w,36e8)
if(y<24){w=""+y
return A.aaG(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=B.h.bX(w,864e8)
if(w===1)return A.aaG(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.aaG(e)?w+" days ago":w+" \u5929\u524d"}return C.dS("yyyy/MM/dd",e).br(x)},
e_m(d){if(!d.c)return d
return d.fI()}}
C=c[0]
B=c[2]
A=a.updateHolder(c[298],A)
var z=a.updateTypes([])};
(a=>{a["FRdORMhZCpaL4P5wKWO/KqV8+Tk="]=a.current})($__dart_deferred_initializers__);