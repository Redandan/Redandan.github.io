((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
a68(d){return!1},
e5(d,e,f){var y,x=null
if(d==null)return""
y=A.dum(d)
if(f!=null)return B.dD(f,x).bs(y)
switch(e.a){case 0:return B.dD("yyyy/MM/dd HH:mm",x).bs(y)
case 1:return B.dD("yyyy/MM/dd",x).bs(y)
case 2:return B.dD("HH:mm",x).bs(y)
case 3:return B.dD("yyyy-MM-dd HH:mm:ss",x).bs(y)
case 4:return A.duk(y,x)
case 5:return A.e1b(y,x)}},
duk(d,e){var y,x=A.dum(d),w=new B.aC(Date.now(),0,!1).dB(x).a
if(w<0)return B.dD("yyyy/MM/dd HH:mm",e).bs(x)
if(C.f.c0(w,1e6)<60)return A.a68(e)?"Just now":"\u525b\u525b"
y=C.f.c0(w,6e7)
if(y<60){w=""+y
return A.a68(e)?w+" minutes ago":w+" \u5206\u9418\u524d"}y=C.f.c0(w,36e8)
if(y<24){w=""+y
return A.a68(e)?w+" hours ago":w+" \u5c0f\u6642\u524d"}w=C.f.c0(w,864e8)
if(w===1)return A.a68(e)?"Yesterday":"\u6628\u5929"
if(w<7){w=""+w
return A.a68(e)?w+" days ago":w+" \u5929\u524d"}return B.dD("yyyy/MM/dd",e).bs(x)},
e1b(d,e){var y,x=A.dum(d),w=new B.aC(Date.now(),0,!1),v=C.f.c0(B.co(B.bC(w),B.bO(w),B.ch(w),0,0,0,0).dB(B.co(B.bC(x),B.bO(x),B.ch(x),0,0,0,0)).a,864e8)
if(v===0)return B.dD("HH:mm",e).bs(x)
if(v===1){y=A.a68(e)?"Yesterday":"\u6628\u5929"
return y+" "+B.dD("HH:mm",e).bs(x)}if(v<7)return A.duk(x,e)
return B.dD("yyyy/MM/dd",e).bs(x)},
dum(d){if(!d.c)return d
return d.hf()},
a67:function a67(d,e){this.a=d
this.b=e}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[249],A)
D=c[336]
A.a67.prototype={
T(){return"DateTimeFormatType."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(A.a67,B.eb)})();(function constants(){D.bD=new A.a67(0,"dateTime")
D.qu=new A.a67(1,"date")
D.dK=new A.a67(3,"dateTimeFull")})()};
(a=>{a["yRV8awhzCCLa1ISofZkAyHB+odg="]=a.current})($__dart_deferred_initializers__);