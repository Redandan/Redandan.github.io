((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eal(d){var x=C.Z(["orderId",d],y.w,y.b)
return new B.aOz("SellerRefundReviewRoute",new C.DR(null,d),x,A.af,null,"")},
aOz:function aOz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aP1:function aP1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0G:function a0G(d,e,f){this.a=d
this.b=e
this.c=f},
aOp:function aOp(d,e){this.a=d
this.b=e},
aJQ:function aJQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
oy:function oy(d){this.a=d},
bN5:function bN5(){},
aJR:function aJR(d,e){this.a=d
this.b=e},
e9C(d,e){return C.a([d.b8X(e),d.b8Z(e),d.b8U(e),d.b8Y(e),d.b9_(e),d.b8W(e),d.b8V(e)],y.x)},
dNf(d,e){switch(e){case A.dD:return d.gJA()
case A.fI:return d.gJB()
case A.fJ:return d.gJD()
case A.hb:return d.gJE()
case A.iB:return d.gJC()
case A.iC:return d.gJF()
case A.d7:return d.gJo()
case A.cs:return d.gDb()
case A.dk:return d.gGc()
case A.eO:return d.gGs()
case A.eP:return d.gC1()
case A.kw:return d.ga6R()
case A.nE:return d.gyI()
case A.pN:return d.gVO()
default:return e.a}},
ei8(d){if(d==null)return!1
return d===A.pM||d===A.pJ||d===A.pK||d===A.pL},
ehS(d,e){if(e==null)return d.ga30()
switch(e){case A.pM:return d.gRz()
case A.pJ:return d.gRv()
case A.pK:return d.gRw()
case A.pL:return d.gRy()
case A.u0:return d.gRx()
default:return d.ga30()}},
ehH(d){if(d==null)return D.UX
switch(d){case A.pM:return C.a([A.cs],y.z)
case A.pJ:return C.a([A.dk],y.z)
case A.pK:return C.a([A.eO],y.z)
case A.pL:return C.a([A.eP],y.z)
case A.u0:return D.bbh
case A.kv:case A.zk:default:return D.UX}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[794]
B.aOz.prototype={}
B.aP1.prototype={}
B.a0G.prototype={}
B.aOp.prototype={
gcdn(){var x=C.f(this.b,A.b,y.F)
x.toString
return x},
VN(d,e){var x=null
return this.cES(d,e)},
cES(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$VN=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e0k()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bO(s.gcdn().ga7_())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bO(s.gcdn().gCm())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.ale(new B.aJR(i,h.length!==0?h:C.f(s.b,A.b,y.F).gagL())),$async$VN)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.b,y.F).gb2q()
e.$0()
v=new B.a0G(!0,null,r)
x=1
break
x=8
break
case 9:h=$.e88
if(h==null)h=$.e88=D.aoL
h=h.C(d.e.a)
if(h==null)h=D.a5c
n=d.b
m=d.c
x=11
return C.c(g.ald(new B.aJQ(i,h,n,m.length!==0?m:C.f(s.b,A.b,y.F).gafE())),$async$VN)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.b,y.F).afF(n)
e.$0()
v=new B.a0G(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e0k().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.b,y.F)
j.toString
o=j.aj2(J.as(p))
if(k!=null)k.$1(o)
v=new B.a0G(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$VN,w)}}
B.aJQ.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aJQ&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bN5.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a5c
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
B.aJR.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aJR&&e.a===this.a&&e.b===this.b
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
x(B.aOz,C.bS)
w(C.A,[B.aP1,B.a0G,B.aOp,B.aJQ,B.oy,B.bN5,B.aJR])})()
C.aY(b.typeUniverse,JSON.parse('{"aOz":{"bS":["DR"]}}'))
var y={F:C.F("bv"),z:C.F("v<fh>"),x:C.F("v<n>"),C:C.F("a0G"),w:C.F("n"),b:C.F("@")};(function constants(){var x=a.makeConstList
D.aoL=new B.bN5()
D.UX=x([A.dD,A.fI,A.fJ,A.hb,A.iB,A.iC,A.nE,A.cs,A.dk,A.eO,A.eP,A.kw],y.z)
D.bbh=x([A.dD,A.fI,A.fJ,A.hb,A.iB,A.iC,A.nE],y.z)
D.a5c=new B.oy("BLACK_CAT")
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
D.bna=new B.oy("unknown_default_open_api")})();(function staticFields(){$.e88=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f1P","e0k",()=>C.b4("SellerOrderShipmentHelper"))})()};
(a=>{a["K4gXCF8gvYvnx91Uq/qXxAyCeuI="]=a.current})($__dart_deferred_initializers__);