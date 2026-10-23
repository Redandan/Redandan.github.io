((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eiV(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aS_("SellerRefundReviewRoute",new C.F6(null,d),x,A.ae,null,"")},
aS_:function aS_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSs:function aSs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2B:function a2B(d,e,f){this.a=d
this.b=e
this.c=f},
aRQ:function aRQ(d,e){this.a=d
this.b=e},
aMW:function aMW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p9:function p9(d){this.a=d},
bS3:function bS3(){},
aMX:function aMX(d,e){this.a=d
this.b=e},
eia(d,e){return C.a([d.baw(e),d.bay(e),d.bat(e),d.bax(e),d.baz(e),d.bav(e),d.bau(e)],y.x)},
dVw(d,e){switch(e){case A.dH:return d.gKj()
case A.fP:return d.gKk()
case A.fQ:return d.gKm()
case A.hh:return d.gKn()
case A.iK:return d.gKl()
case A.iL:return d.gKo()
case A.de:return d.gK7()
case A.cu:return d.gDN()
case A.ds:return d.gGR()
case A.eR:return d.gH8()
case A.eS:return d.gCF()
case A.kI:return d.ga7T()
case A.nT:return d.gze()
case A.q7:return d.gWL()
default:return e.a}},
eqX(d){if(d==null)return!1
return d===A.q6||d===A.q3||d===A.q4||d===A.q5},
eqF(d,e){if(e==null)return d.ga47()
switch(e){case A.q6:return d.gSo()
case A.q3:return d.gSk()
case A.q4:return d.gSl()
case A.q5:return d.gSn()
case A.up:return d.gSm()
default:return d.ga47()}},
equ(d){if(d==null)return D.W4
switch(d){case A.q6:return C.a([A.cu],y.z)
case A.q3:return C.a([A.ds],y.z)
case A.q4:return C.a([A.eR],y.z)
case A.q5:return C.a([A.eS],y.z)
case A.up:return D.bfR
case A.kH:case A.zQ:default:return D.W4}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aS_.prototype={}
B.aSs.prototype={}
B.a2B.prototype={}
B.aRQ.prototype={
gcge(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WK(d,e){var x=null
return this.cIU(d,e)},
cIU(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WK=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e8S()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcge().ga80())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcge().gD_())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.amg(new B.aMX(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahK())),$async$WK)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3W()
e.$0()
v=new B.a2B(!0,null,r)
x=1
break
x=8
break
case 9:h=$.egH
if(h==null)h=$.egH=D.aqJ
h=h.D(d.e.a)
if(h==null)h=D.a6o
n=d.b
m=d.c
x=11
return C.c(g.amf(new B.aMW(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagD())),$async$WK)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agE(n)
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
$.e8S().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ak1(J.as(p))
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
return C.k($async$WK,w)}}
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
B.p9.prototype={
l(d){return this.a},
A(){return this.a}}
B.bS3.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6o
case"HCT":return D.brT
case"KERRY":return D.brW
case"SF_EXPRESS":return D.bs0
case"HOME_DELIVERY_EXPRESS":return D.brV
case"TAIWAN_HOME_DELIVERY":return D.bs1
case"PLATFORM_DELIVERY":return D.brZ
case"SEVEN_ELEVEN":return D.bs_
case"FAMILY_MART":return D.brS
case"HILIFE":return D.brU
case"OK_MART":return D.brX
case"CHUNGHWA_POST":return D.brR
case"OTHER":return D.brY
case"unknown_default_open_api":return D.bs2}return null}}
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
x(B.aS_,C.bU)
w(C.A,[B.aSs,B.a2B,B.aRQ,B.aMW,B.p9,B.bS3,B.aMX])})()
C.b0(b.typeUniverse,JSON.parse('{"aS_":{"bU":["F6"]}}'))
var y={F:C.C("bv"),z:C.C("v<fs>"),x:C.C("v<n>"),C:C.C("a2B"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqJ=new B.bS3()
D.W4=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT,A.cu,A.ds,A.eR,A.eS,A.kI],y.z)
D.bfR=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT],y.z)
D.a6o=new B.p9("BLACK_CAT")
D.brR=new B.p9("CHUNGHWA_POST")
D.brS=new B.p9("FAMILY_MART")
D.brT=new B.p9("HCT")
D.brU=new B.p9("HILIFE")
D.brV=new B.p9("HOME_DELIVERY_EXPRESS")
D.brW=new B.p9("KERRY")
D.brX=new B.p9("OK_MART")
D.brY=new B.p9("OTHER")
D.brZ=new B.p9("PLATFORM_DELIVERY")
D.bs_=new B.p9("SEVEN_ELEVEN")
D.bs0=new B.p9("SF_EXPRESS")
D.bs1=new B.p9("TAIWAN_HOME_DELIVERY")
D.bs2=new B.p9("unknown_default_open_api")})();(function staticFields(){$.egH=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fcT","e8S",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["41lzxP6vf8e0giSFAOlU3WyQv4w="]=a.current})($__dart_deferred_initializers__);