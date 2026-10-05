((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dBP(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aEE("SellerRefundReviewRoute",new C.BO(null,d),x,A.ac,null,"")},
aEE:function aEE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aF2:function aF2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ym:function Ym(d,e,f){this.a=d
this.b=e
this.c=f},
aEu:function aEu(d,e){this.a=d
this.b=e},
aA5:function aA5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d){this.a=d},
bx9:function bx9(){},
aA6:function aA6(d,e){this.a=d
this.b=e},
dB6(d,e){return C.a([d.aYy(e),d.aYA(e),d.aYv(e),d.aYz(e),d.aYB(e),d.aYx(e),d.aYw(e)],y.x)},
dfX(d,e){switch(e){case A.dp:return d.gDC()
case A.fl:return d.gDD()
case A.fm:return d.gDF()
case A.fN:return d.gDG()
case A.i5:return d.gDE()
case A.i6:return d.gDH()
case A.cW:return d.gDv()
case A.ch:return d.gy0()
case A.d8:return d.gAm()
case A.et:return d.gAB()
case A.eu:return d.gwV()
case A.jR:return d.gYP()
case A.mN:return d.guk()
case A.oP:return d.gOl()
default:return e.a}},
dIH(d){if(d==null)return!1
return d===A.oO||d===A.oL||d===A.oM||d===A.oN},
dIs(d,e){if(e==null)return d.gV9()
switch(e){case A.oO:return d.gKP()
case A.oL:return d.gKL()
case A.oM:return d.gKM()
case A.oN:return d.gKO()
case A.rL:return d.gKN()
default:return d.gV9()}},
dIf(d){if(d==null)return D.Sq
switch(d){case A.oO:return C.a([A.ch],y.z)
case A.oL:return C.a([A.d8],y.z)
case A.oM:return C.a([A.et],y.z)
case A.oN:return C.a([A.eu],y.z)
case A.rL:return D.b62
case A.jQ:case A.xC:default:return D.Sq}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[789]
B.aEE.prototype={}
B.aF2.prototype={}
B.Ym.prototype={}
B.aEu.prototype={
gc2_(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
Ok(d,e){var x=null
return this.clh(d,e)},
clh(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Ok=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dss()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bo(s.gc2_().gYZ())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bo(s.gc2_().gxj())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaF(new B.aA6(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7q())),$async$Ok)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaRY()
e.$0()
v=new B.Ym(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dzG
if(h==null)h=$.dzG=D.al_
h=h.C(d.e.a)
if(h==null)h=D.a2F
n=d.b
m=d.c
x=11
return C.c(g.aaE(new B.aA5(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6j())),$async$Ok)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6k(n)
e.$0()
v=new B.Ym(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dss().k(A.u,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9H(J.ap(p))
if(k!=null)k.$1(o)
v=new B.Ym(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Ok,w)}}
B.aA5.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aA5&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gi(d){var x=this,w=A.c.gi(x.a),v=C.a3(x.b),u=A.c.gi(x.c),t=A.c.gi(x.d)
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
B.bx9.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2F
case"HCT":return D.bge
case"KERRY":return D.bgh
case"SF_EXPRESS":return D.bgm
case"HOME_DELIVERY_EXPRESS":return D.bgg
case"TAIWAN_HOME_DELIVERY":return D.bgn
case"PLATFORM_DELIVERY":return D.bgk
case"SEVEN_ELEVEN":return D.bgl
case"FAMILY_MART":return D.bgd
case"HILIFE":return D.bgf
case"OK_MART":return D.bgi
case"CHUNGHWA_POST":return D.bgc
case"OTHER":return D.bgj
case"unknown_default_open_api":return D.bgo}return null}}
B.aA6.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aA6&&e.a===this.a&&e.b===this.b
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
x(B.aEE,C.bS)
w(C.G,[B.aF2,B.Ym,B.aEu,B.aA5,B.no,B.bx9,B.aA6])})()
C.aU(b.typeUniverse,JSON.parse('{"aEE":{"bS":["BO"]}}'))
var y={F:C.A("bv"),z:C.A("v<eP>"),x:C.A("v<o>"),C:C.A("Ym"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al_=new B.bx9()
D.Sq=x([A.dp,A.fl,A.fm,A.fN,A.i5,A.i6,A.mN,A.ch,A.d8,A.et,A.eu,A.jR],y.z)
D.b62=x([A.dp,A.fl,A.fm,A.fN,A.i5,A.i6,A.mN],y.z)
D.a2F=new B.no("BLACK_CAT")
D.bgc=new B.no("CHUNGHWA_POST")
D.bgd=new B.no("FAMILY_MART")
D.bge=new B.no("HCT")
D.bgf=new B.no("HILIFE")
D.bgg=new B.no("HOME_DELIVERY_EXPRESS")
D.bgh=new B.no("KERRY")
D.bgi=new B.no("OK_MART")
D.bgj=new B.no("OTHER")
D.bgk=new B.no("PLATFORM_DELIVERY")
D.bgl=new B.no("SEVEN_ELEVEN")
D.bgm=new B.no("SF_EXPRESS")
D.bgn=new B.no("TAIWAN_HOME_DELIVERY")
D.bgo=new B.no("unknown_default_open_api")})();(function staticFields(){$.dzG=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eqw","dss",()=>C.aW("SellerOrderShipmentHelper"))})()};
(a=>{a["eF2UP0vRcsGC60wSfVJ0VvIaMfc="]=a.current})($__dart_deferred_initializers__);