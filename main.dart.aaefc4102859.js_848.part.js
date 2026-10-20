((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eaB(d){var x=C.Z(["orderId",d],y.w,y.b)
return new B.aOC("SellerRefundReviewRoute",new C.DS(null,d),x,A.af,null,"")},
aOC:function aOC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aP4:function aP4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0K:function a0K(d,e,f){this.a=d
this.b=e
this.c=f},
aOs:function aOs(d,e){this.a=d
this.b=e},
aJT:function aJT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
oy:function oy(d){this.a=d},
bN9:function bN9(){},
aJU:function aJU(d,e){this.a=d
this.b=e},
e9S(d,e){return C.a([d.b9i(e),d.b9k(e),d.b9f(e),d.b9j(e),d.b9l(e),d.b9h(e),d.b9g(e)],y.x)},
dNu(d,e){switch(e){case A.dC:return d.gJK()
case A.fJ:return d.gJL()
case A.fK:return d.gJN()
case A.he:return d.gJO()
case A.iD:return d.gJM()
case A.iE:return d.gJP()
case A.d7:return d.gJy()
case A.cr:return d.gDc()
case A.dl:return d.gGh()
case A.eO:return d.gGy()
case A.eP:return d.gC2()
case A.kw:return d.ga6Z()
case A.nG:return d.gwg()
case A.pO:return d.gW_()
default:return e.a}},
ein(d){if(d==null)return!1
return d===A.pN||d===A.pK||d===A.pL||d===A.pM},
ei6(d,e){if(e==null)return d.ga3c()
switch(e){case A.pN:return d.gRJ()
case A.pK:return d.gRE()
case A.pL:return d.gRF()
case A.pM:return d.gRI()
case A.u1:return d.gRH()
default:return d.ga3c()}},
ehW(d){if(d==null)return D.V0
switch(d){case A.pN:return C.a([A.cr],y.z)
case A.pK:return C.a([A.dl],y.z)
case A.pL:return C.a([A.eO],y.z)
case A.pM:return C.a([A.eP],y.z)
case A.u1:return D.bbi
case A.kv:case A.zj:default:return D.V0}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[793]
B.aOC.prototype={}
B.aP4.prototype={}
B.a0K.prototype={}
B.aOs.prototype={
gcdL(){var x=C.f(this.b,A.b,y.F)
x.toString
return x},
VZ(d,e){var x=null
return this.cFf(d,e)},
cFf(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$VZ=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e0B()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bO(s.gcdL().ga77())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bO(s.gcdL().gCn())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.alp(new B.aJU(i,h.length!==0?h:C.f(s.b,A.b,y.F).gagV())),$async$VZ)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.b,y.F).gb2G()
e.$0()
v=new B.a0K(!0,null,r)
x=1
break
x=8
break
case 9:h=$.e8o
if(h==null)h=$.e8o=D.aoO
h=h.C(d.e.a)
if(h==null)h=D.a5g
n=d.b
m=d.c
x=11
return C.c(g.alo(new B.aJT(i,h,n,m.length!==0?m:C.f(s.b,A.b,y.F).gafO())),$async$VZ)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.b,y.F).afP(n)
e.$0()
v=new B.a0K(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e0B().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.b,y.F)
j.toString
o=j.ajc(J.as(p))
if(k!=null)k.$1(o)
v=new B.a0K(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$VZ,w)}}
B.aJT.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aJT&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gj(d){var x=this,w=A.c.gj(x.a),v=C.a7(x.b),u=A.c.gj(x.c),t=A.c.gj(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
v(){var x=this,w=C.r(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
B.oy.prototype={
l(d){return this.a},
v(){return this.a}}
B.bN9.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a5g
case"HCT":return D.bn0
case"KERRY":return D.bn3
case"SF_EXPRESS":return D.bn8
case"HOME_DELIVERY_EXPRESS":return D.bn2
case"TAIWAN_HOME_DELIVERY":return D.bn9
case"PLATFORM_DELIVERY":return D.bn6
case"SEVEN_ELEVEN":return D.bn7
case"FAMILY_MART":return D.bn_
case"HILIFE":return D.bn1
case"OK_MART":return D.bn4
case"CHUNGHWA_POST":return D.bmZ
case"OTHER":return D.bn5
case"unknown_default_open_api":return D.bna}return null}}
B.aJU.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aJU&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gj(d){var x=A.c.gj(this.a),w=A.c.gj(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
v(){var x=C.r(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aOC,C.bS)
w(C.A,[B.aP4,B.a0K,B.aOs,B.aJT,B.oy,B.bN9,B.aJU])})()
C.aY(b.typeUniverse,JSON.parse('{"aOC":{"bS":["DS"]}}'))
var y={F:C.F("bv"),z:C.F("v<fj>"),x:C.F("v<n>"),C:C.F("a0K"),w:C.F("n"),b:C.F("@")};(function constants(){var x=a.makeConstList
D.aoO=new B.bN9()
D.V0=x([A.dC,A.fJ,A.fK,A.he,A.iD,A.iE,A.nG,A.cr,A.dl,A.eO,A.eP,A.kw],y.z)
D.bbi=x([A.dC,A.fJ,A.fK,A.he,A.iD,A.iE,A.nG],y.z)
D.a5g=new B.oy("BLACK_CAT")
D.bmZ=new B.oy("CHUNGHWA_POST")
D.bn_=new B.oy("FAMILY_MART")
D.bn0=new B.oy("HCT")
D.bn1=new B.oy("HILIFE")
D.bn2=new B.oy("HOME_DELIVERY_EXPRESS")
D.bn3=new B.oy("KERRY")
D.bn4=new B.oy("OK_MART")
D.bn5=new B.oy("OTHER")
D.bn6=new B.oy("PLATFORM_DELIVERY")
D.bn7=new B.oy("SEVEN_ELEVEN")
D.bn8=new B.oy("SF_EXPRESS")
D.bn9=new B.oy("TAIWAN_HOME_DELIVERY")
D.bna=new B.oy("unknown_default_open_api")})();(function staticFields(){$.e8o=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f26","e0B",()=>C.b4("SellerOrderShipmentHelper"))})()};
(a=>{a["iVWf5Gduh55+FnpK7l4GVOkblAE="]=a.current})($__dart_deferred_initializers__);