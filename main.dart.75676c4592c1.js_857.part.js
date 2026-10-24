((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ejj(d){var x=C.X(["orderId",d],y.w,y.b)
return new B.aS0("SellerRefundReviewRoute",new C.F9(null,d),x,A.ae,null,"")},
aS0:function aS0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSt:function aSt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2B:function a2B(d,e,f){this.a=d
this.b=e
this.c=f},
aRR:function aRR(d,e){this.a=d
this.b=e},
aMW:function aMW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pb:function pb(d){this.a=d},
bS5:function bS5(){},
aMX:function aMX(d,e){this.a=d
this.b=e},
eiy(d,e){return C.a([d.baD(e),d.baF(e),d.baA(e),d.baE(e),d.baG(e),d.baC(e),d.baB(e)],y.x)},
dVR(d,e){switch(e){case A.dH:return d.gKl()
case A.fP:return d.gKm()
case A.fQ:return d.gKo()
case A.hi:return d.gKp()
case A.iK:return d.gKn()
case A.iL:return d.gKq()
case A.de:return d.gK9()
case A.cu:return d.gDP()
case A.ds:return d.gGT()
case A.eR:return d.gHa()
case A.eS:return d.gCI()
case A.kI:return d.ga7X()
case A.nT:return d.gze()
case A.q7:return d.gWO()
default:return e.a}},
erm(d){if(d==null)return!1
return d===A.q6||d===A.q3||d===A.q4||d===A.q5},
er4(d,e){if(e==null)return d.ga4a()
switch(e){case A.q6:return d.gSr()
case A.q3:return d.gSn()
case A.q4:return d.gSo()
case A.q5:return d.gSq()
case A.uq:return d.gSp()
default:return d.ga4a()}},
eqU(d){if(d==null)return D.W4
switch(d){case A.q6:return C.a([A.cu],y.z)
case A.q3:return C.a([A.ds],y.z)
case A.q4:return C.a([A.eR],y.z)
case A.q5:return C.a([A.eS],y.z)
case A.uq:return D.bfS
case A.kH:case A.zR:default:return D.W4}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aS0.prototype={}
B.aSt.prototype={}
B.a2B.prototype={}
B.aRR.prototype={
gcgm(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WN(d,e){var x=null
return this.cJ4(d,e)},
cJ4(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WN=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e9d()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bQ(s.gcgm().ga84())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bQ(s.gcgm().gD2())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.amk(new B.aMX(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahO())),$async$WN)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb42()
e.$0()
v=new B.a2B(!0,null,r)
x=1
break
x=8
break
case 9:h=$.eh3
if(h==null)h=$.eh3=D.aqJ
h=h.D(d.e.a)
if(h==null)h=D.a6o
n=d.b
m=d.c
x=11
return C.c(g.amj(new B.aMW(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagH())),$async$WN)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agI(n)
e.$0()
v=new B.a2B(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e9d().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ak5(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2B(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WN,w)}}
B.aMW.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMW&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gj(d){var x=this,w=A.b.gj(x.a),v=C.a8(x.b),u=A.b.gj(x.c),t=A.b.gj(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
A(){var x=this,w=C.q(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
B.pb.prototype={
l(d){return this.a},
A(){return this.a}}
B.bS5.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6o
case"HCT":return D.brW
case"KERRY":return D.brZ
case"SF_EXPRESS":return D.bs3
case"HOME_DELIVERY_EXPRESS":return D.brY
case"TAIWAN_HOME_DELIVERY":return D.bs4
case"PLATFORM_DELIVERY":return D.bs1
case"SEVEN_ELEVEN":return D.bs2
case"FAMILY_MART":return D.brV
case"HILIFE":return D.brX
case"OK_MART":return D.bs_
case"CHUNGHWA_POST":return D.brU
case"OTHER":return D.bs0
case"unknown_default_open_api":return D.bs5}return null}}
B.aMX.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMX&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gj(d){var x=A.b.gj(this.a),w=A.b.gj(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
A(){var x=C.q(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aS0,C.bV)
w(C.A,[B.aSt,B.a2B,B.aRR,B.aMW,B.pb,B.bS5,B.aMX])})()
C.b0(b.typeUniverse,JSON.parse('{"aS0":{"bV":["F9"]}}'))
var y={F:C.C("bv"),z:C.C("v<fu>"),x:C.C("v<n>"),C:C.C("a2B"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqJ=new B.bS5()
D.W4=x([A.dH,A.fP,A.fQ,A.hi,A.iK,A.iL,A.nT,A.cu,A.ds,A.eR,A.eS,A.kI],y.z)
D.bfS=x([A.dH,A.fP,A.fQ,A.hi,A.iK,A.iL,A.nT],y.z)
D.a6o=new B.pb("BLACK_CAT")
D.brU=new B.pb("CHUNGHWA_POST")
D.brV=new B.pb("FAMILY_MART")
D.brW=new B.pb("HCT")
D.brX=new B.pb("HILIFE")
D.brY=new B.pb("HOME_DELIVERY_EXPRESS")
D.brZ=new B.pb("KERRY")
D.bs_=new B.pb("OK_MART")
D.bs0=new B.pb("OTHER")
D.bs1=new B.pb("PLATFORM_DELIVERY")
D.bs2=new B.pb("SEVEN_ELEVEN")
D.bs3=new B.pb("SF_EXPRESS")
D.bs4=new B.pb("TAIWAN_HOME_DELIVERY")
D.bs5=new B.pb("unknown_default_open_api")})();(function staticFields(){$.eh3=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fdi","e9d",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["jdfeVDp3t7lMHfUJnOAMy76XmU8="]=a.current})($__dart_deferred_initializers__);