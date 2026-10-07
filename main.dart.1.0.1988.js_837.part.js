((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dCL(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aEW("SellerRefundReviewRoute",new C.BR(null,d),x,A.ac,null,"")},
aEW:function aEW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aFl:function aFl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Yp:function Yp(d,e,f){this.a=d
this.b=e
this.c=f},
aEM:function aEM(d,e){this.a=d
this.b=e},
aAm:function aAm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d){this.a=d},
bxA:function bxA(){},
aAn:function aAn(d,e){this.a=d
this.b=e},
dC2(d,e){return C.a([d.aYC(e),d.aYE(e),d.aYz(e),d.aYD(e),d.aYF(e),d.aYB(e),d.aYA(e)],y.x)},
dgO(d,e){switch(e){case A.dn:return d.gDI()
case A.fl:return d.gDJ()
case A.fm:return d.gDL()
case A.fO:return d.gDM()
case A.i5:return d.gDK()
case A.i6:return d.gDN()
case A.cW:return d.gDB()
case A.ci:return d.gy6()
case A.d8:return d.gAq()
case A.et:return d.gAG()
case A.eu:return d.gx0()
case A.jR:return d.gYV()
case A.mN:return d.guo()
case A.oS:return d.gOm()
default:return e.a}},
dJC(d){if(d==null)return!1
return d===A.oR||d===A.oO||d===A.oP||d===A.oQ},
dJn(d,e){if(e==null)return d.gVe()
switch(e){case A.oR:return d.gKQ()
case A.oO:return d.gKM()
case A.oP:return d.gKN()
case A.oQ:return d.gKP()
case A.rO:return d.gKO()
default:return d.gVe()}},
dJa(d){if(d==null)return D.Sy
switch(d){case A.oR:return C.a([A.ci],y.z)
case A.oO:return C.a([A.d8],y.z)
case A.oP:return C.a([A.et],y.z)
case A.oQ:return C.a([A.eu],y.z)
case A.rO:return D.b6u
case A.jQ:case A.xH:default:return D.Sy}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[786]
B.aEW.prototype={}
B.aFl.prototype={}
B.Yp.prototype={}
B.aEM.prototype={
gc2e(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
Ol(d,e){var x=null
return this.clx(d,e)},
clx(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Ol=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dtk()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bp(s.gc2e().gZ4())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bp(s.gc2e().gxo())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaN(new B.aAn(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7A())),$async$Ol)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaS5()
e.$0()
v=new B.Yp(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dAA
if(h==null)h=$.dAA=D.al8
h=h.C(d.e.a)
if(h==null)h=D.a2O
n=d.b
m=d.c
x=11
return C.c(g.aaM(new B.aAm(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6t())),$async$Ol)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6u(n)
e.$0()
v=new B.Yp(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dtk().k(A.v,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9R(J.ap(p))
if(k!=null)k.$1(o)
v=new B.Yp(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Ol,w)}}
B.aAm.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aAm&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bxA.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2O
case"HCT":return D.bgG
case"KERRY":return D.bgJ
case"SF_EXPRESS":return D.bgO
case"HOME_DELIVERY_EXPRESS":return D.bgI
case"TAIWAN_HOME_DELIVERY":return D.bgP
case"PLATFORM_DELIVERY":return D.bgM
case"SEVEN_ELEVEN":return D.bgN
case"FAMILY_MART":return D.bgF
case"HILIFE":return D.bgH
case"OK_MART":return D.bgK
case"CHUNGHWA_POST":return D.bgE
case"OTHER":return D.bgL
case"unknown_default_open_api":return D.bgQ}return null}}
B.aAn.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aAn&&e.a===this.a&&e.b===this.b
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
x(B.aEW,C.bR)
w(C.G,[B.aFl,B.Yp,B.aEM,B.aAm,B.no,B.bxA,B.aAn])})()
C.aU(b.typeUniverse,JSON.parse('{"aEW":{"bR":["BR"]}}'))
var y={F:C.A("bv"),z:C.A("v<eR>"),x:C.A("v<o>"),C:C.A("Yp"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al8=new B.bxA()
D.Sy=x([A.dn,A.fl,A.fm,A.fO,A.i5,A.i6,A.mN,A.ci,A.d8,A.et,A.eu,A.jR],y.z)
D.b6u=x([A.dn,A.fl,A.fm,A.fO,A.i5,A.i6,A.mN],y.z)
D.a2O=new B.no("BLACK_CAT")
D.bgE=new B.no("CHUNGHWA_POST")
D.bgF=new B.no("FAMILY_MART")
D.bgG=new B.no("HCT")
D.bgH=new B.no("HILIFE")
D.bgI=new B.no("HOME_DELIVERY_EXPRESS")
D.bgJ=new B.no("KERRY")
D.bgK=new B.no("OK_MART")
D.bgL=new B.no("OTHER")
D.bgM=new B.no("PLATFORM_DELIVERY")
D.bgN=new B.no("SEVEN_ELEVEN")
D.bgO=new B.no("SF_EXPRESS")
D.bgP=new B.no("TAIWAN_HOME_DELIVERY")
D.bgQ=new B.no("unknown_default_open_api")})();(function staticFields(){$.dAA=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"erv","dtk",()=>C.aX("SellerOrderShipmentHelper"))})()};
(a=>{a["whz1J4tH1BW0hPB9gwxcNoi2qJk="]=a.current})($__dart_deferred_initializers__);