((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ej1(d){var x=C.Y(["orderId",d],y.w,y.b)
return new B.aS1("SellerRefundReviewRoute",new C.F7(null,d),x,A.ae,null,"")},
aS1:function aS1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSu:function aSu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2C:function a2C(d,e,f){this.a=d
this.b=e
this.c=f},
aRS:function aRS(d,e){this.a=d
this.b=e},
aMX:function aMX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p9:function p9(d){this.a=d},
bS5:function bS5(){},
aMY:function aMY(d,e){this.a=d
this.b=e},
eih(d,e){return C.a([d.baA(e),d.baC(e),d.bax(e),d.baB(e),d.baD(e),d.baz(e),d.bay(e)],y.x)},
dVC(d,e){switch(e){case A.dH:return d.gKj()
case A.fP:return d.gKk()
case A.fQ:return d.gKm()
case A.hh:return d.gKn()
case A.iK:return d.gKl()
case A.iL:return d.gKo()
case A.de:return d.gK7()
case A.cu:return d.gDO()
case A.ds:return d.gGR()
case A.eR:return d.gH8()
case A.eS:return d.gCG()
case A.kI:return d.ga7U()
case A.nT:return d.gze()
case A.q7:return d.gWL()
default:return e.a}},
er4(d){if(d==null)return!1
return d===A.q6||d===A.q3||d===A.q4||d===A.q5},
eqN(d,e){if(e==null)return d.ga47()
switch(e){case A.q6:return d.gSo()
case A.q3:return d.gSk()
case A.q4:return d.gSl()
case A.q5:return d.gSn()
case A.uq:return d.gSm()
default:return d.ga47()}},
eqC(d){if(d==null)return D.W4
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
B.aS1.prototype={}
B.aSu.prototype={}
B.a2C.prototype={}
B.aRS.prototype={
gcgi(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WK(d,e){var x=null
return this.cIX(d,e)},
cIX(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WK=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e8Z()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcgi().ga81())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcgi().gD0())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.amh(new B.aMY(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahL())),$async$WK)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb4_()
e.$0()
v=new B.a2C(!0,null,r)
x=1
break
x=8
break
case 9:h=$.egO
if(h==null)h=$.egO=D.aqJ
h=h.D(d.e.a)
if(h==null)h=D.a6o
n=d.b
m=d.c
x=11
return C.c(g.amg(new B.aMX(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagE())),$async$WK)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agF(n)
e.$0()
v=new B.a2C(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e8Z().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ak2(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2C(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WK,w)}}
B.aMX.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMX&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.p9.prototype={
l(d){return this.a},
A(){return this.a}}
B.bS5.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6o
case"HCT":return D.brV
case"KERRY":return D.brY
case"SF_EXPRESS":return D.bs2
case"HOME_DELIVERY_EXPRESS":return D.brX
case"TAIWAN_HOME_DELIVERY":return D.bs3
case"PLATFORM_DELIVERY":return D.bs0
case"SEVEN_ELEVEN":return D.bs1
case"FAMILY_MART":return D.brU
case"HILIFE":return D.brW
case"OK_MART":return D.brZ
case"CHUNGHWA_POST":return D.brT
case"OTHER":return D.bs_
case"unknown_default_open_api":return D.bs4}return null}}
B.aMY.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMY&&e.a===this.a&&e.b===this.b
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
x(B.aS1,C.bV)
w(C.A,[B.aSu,B.a2C,B.aRS,B.aMX,B.p9,B.bS5,B.aMY])})()
C.b0(b.typeUniverse,JSON.parse('{"aS1":{"bV":["F7"]}}'))
var y={F:C.C("bv"),z:C.C("v<fs>"),x:C.C("v<n>"),C:C.C("a2C"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqJ=new B.bS5()
D.W4=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT,A.cu,A.ds,A.eR,A.eS,A.kI],y.z)
D.bfS=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT],y.z)
D.a6o=new B.p9("BLACK_CAT")
D.brT=new B.p9("CHUNGHWA_POST")
D.brU=new B.p9("FAMILY_MART")
D.brV=new B.p9("HCT")
D.brW=new B.p9("HILIFE")
D.brX=new B.p9("HOME_DELIVERY_EXPRESS")
D.brY=new B.p9("KERRY")
D.brZ=new B.p9("OK_MART")
D.bs_=new B.p9("OTHER")
D.bs0=new B.p9("PLATFORM_DELIVERY")
D.bs1=new B.p9("SEVEN_ELEVEN")
D.bs2=new B.p9("SF_EXPRESS")
D.bs3=new B.p9("TAIWAN_HOME_DELIVERY")
D.bs4=new B.p9("unknown_default_open_api")})();(function staticFields(){$.egO=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fd0","e8Z",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["OmhYhdwX5HMCQTNHFsgtnXT1XXo="]=a.current})($__dart_deferred_initializers__);