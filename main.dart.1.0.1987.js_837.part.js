((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dCA(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aET("SellerRefundReviewRoute",new C.BR(null,d),x,A.ac,null,"")},
aET:function aET(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aFi:function aFi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Yo:function Yo(d,e,f){this.a=d
this.b=e
this.c=f},
aEJ:function aEJ(d,e){this.a=d
this.b=e},
aAj:function aAj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d){this.a=d},
bxw:function bxw(){},
aAk:function aAk(d,e){this.a=d
this.b=e},
dBS(d,e){return C.a([d.aYz(e),d.aYB(e),d.aYw(e),d.aYA(e),d.aYC(e),d.aYy(e),d.aYx(e)],y.x)},
dgD(d,e){switch(e){case A.dn:return d.gDF()
case A.fl:return d.gDG()
case A.fm:return d.gDI()
case A.fO:return d.gDJ()
case A.i5:return d.gDH()
case A.i6:return d.gDK()
case A.cW:return d.gDy()
case A.ci:return d.gy4()
case A.d8:return d.gAn()
case A.et:return d.gAD()
case A.eu:return d.gwZ()
case A.jR:return d.gYW()
case A.mN:return d.gum()
case A.oQ:return d.gOn()
default:return e.a}},
dJr(d){if(d==null)return!1
return d===A.oP||d===A.oM||d===A.oN||d===A.oO},
dJc(d,e){if(e==null)return d.gVf()
switch(e){case A.oP:return d.gKR()
case A.oM:return d.gKN()
case A.oN:return d.gKO()
case A.oO:return d.gKQ()
case A.rO:return d.gKP()
default:return d.gVf()}},
dJ_(d){if(d==null)return D.Sy
switch(d){case A.oP:return C.a([A.ci],y.z)
case A.oM:return C.a([A.d8],y.z)
case A.oN:return C.a([A.et],y.z)
case A.oO:return C.a([A.eu],y.z)
case A.rO:return D.b6r
case A.jQ:case A.xH:default:return D.Sy}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[786]
B.aET.prototype={}
B.aFi.prototype={}
B.Yo.prototype={}
B.aEJ.prototype={
gc21(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
Om(d,e){var x=null
return this.cll(d,e)},
cll(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Om=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dt9()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bo(s.gc21().gZ5())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bo(s.gc21().gxm())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaM(new B.aAk(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7z())),$async$Om)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaS2()
e.$0()
v=new B.Yo(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dAp
if(h==null)h=$.dAp=D.al8
h=h.C(d.e.a)
if(h==null)h=D.a2O
n=d.b
m=d.c
x=11
return C.c(g.aaL(new B.aAj(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6s())),$async$Om)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6t(n)
e.$0()
v=new B.Yo(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dt9().k(A.v,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9Q(J.ap(p))
if(k!=null)k.$1(o)
v=new B.Yo(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Om,w)}}
B.aAj.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aAj&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.no.prototype={
l(d){return this.a},
B(){return this.a}}
B.bxw.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2O
case"HCT":return D.bgD
case"KERRY":return D.bgG
case"SF_EXPRESS":return D.bgL
case"HOME_DELIVERY_EXPRESS":return D.bgF
case"TAIWAN_HOME_DELIVERY":return D.bgM
case"PLATFORM_DELIVERY":return D.bgJ
case"SEVEN_ELEVEN":return D.bgK
case"FAMILY_MART":return D.bgC
case"HILIFE":return D.bgE
case"OK_MART":return D.bgH
case"CHUNGHWA_POST":return D.bgB
case"OTHER":return D.bgI
case"unknown_default_open_api":return D.bgN}return null}}
B.aAk.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aAk&&e.a===this.a&&e.b===this.b
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
x(B.aET,C.bR)
w(C.G,[B.aFi,B.Yo,B.aEJ,B.aAj,B.no,B.bxw,B.aAk])})()
C.aU(b.typeUniverse,JSON.parse('{"aET":{"bR":["BR"]}}'))
var y={F:C.A("bu"),z:C.A("v<eR>"),x:C.A("v<o>"),C:C.A("Yo"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al8=new B.bxw()
D.Sy=x([A.dn,A.fl,A.fm,A.fO,A.i5,A.i6,A.mN,A.ci,A.d8,A.et,A.eu,A.jR],y.z)
D.b6r=x([A.dn,A.fl,A.fm,A.fO,A.i5,A.i6,A.mN],y.z)
D.a2O=new B.no("BLACK_CAT")
D.bgB=new B.no("CHUNGHWA_POST")
D.bgC=new B.no("FAMILY_MART")
D.bgD=new B.no("HCT")
D.bgE=new B.no("HILIFE")
D.bgF=new B.no("HOME_DELIVERY_EXPRESS")
D.bgG=new B.no("KERRY")
D.bgH=new B.no("OK_MART")
D.bgI=new B.no("OTHER")
D.bgJ=new B.no("PLATFORM_DELIVERY")
D.bgK=new B.no("SEVEN_ELEVEN")
D.bgL=new B.no("SF_EXPRESS")
D.bgM=new B.no("TAIWAN_HOME_DELIVERY")
D.bgN=new B.no("unknown_default_open_api")})();(function staticFields(){$.dAp=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"erj","dt9",()=>C.aX("SellerOrderShipmentHelper"))})()};
(a=>{a["Ne0QE1Yz7YYHQSaoQK9LQ6bQL/Q="]=a.current})($__dart_deferred_initializers__);