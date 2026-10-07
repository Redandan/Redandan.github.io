((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dCH(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aEU("SellerRefundReviewRoute",new C.BS(null,d),x,A.ac,null,"")},
aEU:function aEU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aFj:function aFj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Yu:function Yu(d,e,f){this.a=d
this.b=e
this.c=f},
aEK:function aEK(d,e){this.a=d
this.b=e},
aAk:function aAk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
np:function np(d){this.a=d},
bxx:function bxx(){},
aAl:function aAl(d,e){this.a=d
this.b=e},
dBZ(d,e){return C.a([d.aYC(e),d.aYE(e),d.aYz(e),d.aYD(e),d.aYF(e),d.aYB(e),d.aYA(e)],y.x)},
dgJ(d,e){switch(e){case A.dn:return d.gDF()
case A.fl:return d.gDG()
case A.fm:return d.gDI()
case A.fO:return d.gDJ()
case A.i5:return d.gDH()
case A.i6:return d.gDK()
case A.cV:return d.gDy()
case A.ci:return d.gy4()
case A.d8:return d.gAn()
case A.et:return d.gAD()
case A.eu:return d.gwY()
case A.jR:return d.gYT()
case A.mN:return d.gul()
case A.oQ:return d.gOl()
default:return e.a}},
dJz(d){if(d==null)return!1
return d===A.oP||d===A.oM||d===A.oN||d===A.oO},
dJk(d,e){if(e==null)return d.gVc()
switch(e){case A.oP:return d.gKP()
case A.oM:return d.gKL()
case A.oN:return d.gKM()
case A.oO:return d.gKO()
case A.rN:return d.gKN()
default:return d.gVc()}},
dJ7(d){if(d==null)return D.Sx
switch(d){case A.oP:return C.a([A.ci],y.z)
case A.oM:return C.a([A.d8],y.z)
case A.oN:return C.a([A.et],y.z)
case A.oO:return C.a([A.eu],y.z)
case A.rN:return D.b6k
case A.jQ:case A.xG:default:return D.Sx}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[788]
B.aEU.prototype={}
B.aFj.prototype={}
B.Yu.prototype={}
B.aEK.prototype={
gc25(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
Ok(d,e){var x=null
return this.clo(d,e)},
clo(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Ok=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dth()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bo(s.gc25().gZ2())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bo(s.gc25().gxl())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaI(new B.aAl(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7v())),$async$Ok)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaS2()
e.$0()
v=new B.Yu(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dAw
if(h==null)h=$.dAw=D.al8
h=h.C(d.e.a)
if(h==null)h=D.a2N
n=d.b
m=d.c
x=11
return C.c(g.aaH(new B.aAk(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6o())),$async$Ok)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6p(n)
e.$0()
v=new B.Yu(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dth().k(A.u,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9M(J.ap(p))
if(k!=null)k.$1(o)
v=new B.Yu(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Ok,w)}}
B.aAk.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aAk&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gi(d){var x=this,w=A.c.gi(x.a),v=C.a2(x.b),u=A.c.gi(x.c),t=A.c.gi(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
B(){var x=this,w=C.p(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
B.np.prototype={
l(d){return this.a},
B(){return this.a}}
B.bxx.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2N
case"HCT":return D.bgw
case"KERRY":return D.bgz
case"SF_EXPRESS":return D.bgE
case"HOME_DELIVERY_EXPRESS":return D.bgy
case"TAIWAN_HOME_DELIVERY":return D.bgF
case"PLATFORM_DELIVERY":return D.bgC
case"SEVEN_ELEVEN":return D.bgD
case"FAMILY_MART":return D.bgv
case"HILIFE":return D.bgx
case"OK_MART":return D.bgA
case"CHUNGHWA_POST":return D.bgu
case"OTHER":return D.bgB
case"unknown_default_open_api":return D.bgG}return null}}
B.aAl.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aAl&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gi(d){var x=A.c.gi(this.a),w=A.c.gi(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
B(){var x=C.p(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aEU,C.bQ)
w(C.G,[B.aFj,B.Yu,B.aEK,B.aAk,B.np,B.bxx,B.aAl])})()
C.aU(b.typeUniverse,JSON.parse('{"aEU":{"bQ":["BS"]}}'))
var y={F:C.A("bu"),z:C.A("v<eQ>"),x:C.A("v<o>"),C:C.A("Yu"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al8=new B.bxx()
D.Sx=x([A.dn,A.fl,A.fm,A.fO,A.i5,A.i6,A.mN,A.ci,A.d8,A.et,A.eu,A.jR],y.z)
D.b6k=x([A.dn,A.fl,A.fm,A.fO,A.i5,A.i6,A.mN],y.z)
D.a2N=new B.np("BLACK_CAT")
D.bgu=new B.np("CHUNGHWA_POST")
D.bgv=new B.np("FAMILY_MART")
D.bgw=new B.np("HCT")
D.bgx=new B.np("HILIFE")
D.bgy=new B.np("HOME_DELIVERY_EXPRESS")
D.bgz=new B.np("KERRY")
D.bgA=new B.np("OK_MART")
D.bgB=new B.np("OTHER")
D.bgC=new B.np("PLATFORM_DELIVERY")
D.bgD=new B.np("SEVEN_ELEVEN")
D.bgE=new B.np("SF_EXPRESS")
D.bgF=new B.np("TAIWAN_HOME_DELIVERY")
D.bgG=new B.np("unknown_default_open_api")})();(function staticFields(){$.dAw=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"erv","dth",()=>C.aW("SellerOrderShipmentHelper"))})()};
(a=>{a["sKOOT/PUBgAwMNedcAXHJDLob9M="]=a.current})($__dart_deferred_initializers__);