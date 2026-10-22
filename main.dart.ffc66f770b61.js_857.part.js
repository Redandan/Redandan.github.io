((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eiE(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRU("SellerRefundReviewRoute",new C.F6(null,d),x,A.ae,null,"")},
aRU:function aRU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSm:function aSm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2A:function a2A(d,e,f){this.a=d
this.b=e
this.c=f},
aRK:function aRK(d,e){this.a=d
this.b=e},
aMQ:function aMQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p9:function p9(d){this.a=d},
bRV:function bRV(){},
aMR:function aMR(d,e){this.a=d
this.b=e},
ehU(d,e){return C.a([d.bap(e),d.bar(e),d.bam(e),d.baq(e),d.bas(e),d.bao(e),d.ban(e)],y.x)},
dV2(d,e){switch(e){case A.dH:return d.gKi()
case A.fP:return d.gKj()
case A.fQ:return d.gKl()
case A.hh:return d.gKm()
case A.iK:return d.gKk()
case A.iL:return d.gKn()
case A.de:return d.gK6()
case A.cu:return d.gDN()
case A.ds:return d.gGR()
case A.eR:return d.gH8()
case A.eS:return d.gCE()
case A.kI:return d.ga7P()
case A.nT:return d.gzd()
case A.q7:return d.gWH()
default:return e.a}},
eqH(d){if(d==null)return!1
return d===A.q6||d===A.q3||d===A.q4||d===A.q5},
eqp(d,e){if(e==null)return d.ga43()
switch(e){case A.q6:return d.gSn()
case A.q3:return d.gSj()
case A.q4:return d.gSk()
case A.q5:return d.gSm()
case A.un:return d.gSl()
default:return d.ga43()}},
eqe(d){if(d==null)return D.W3
switch(d){case A.q6:return C.a([A.cu],y.z)
case A.q3:return C.a([A.ds],y.z)
case A.q4:return C.a([A.eR],y.z)
case A.q5:return C.a([A.eS],y.z)
case A.un:return D.bfO
case A.kH:case A.zN:default:return D.W3}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aRU.prototype={}
B.aSm.prototype={}
B.a2A.prototype={}
B.aRK.prototype={
gcg_(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WG(d,e){var x=null
return this.cIx(d,e)},
cIx(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WG=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e8B()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcg_().ga7X())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcg_().gCZ())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.amb(new B.aMR(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahG())),$async$WG)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3P()
e.$0()
v=new B.a2A(!0,null,r)
x=1
break
x=8
break
case 9:h=$.egq
if(h==null)h=$.egq=D.aqH
h=h.D(d.e.a)
if(h==null)h=D.a6m
n=d.b
m=d.c
x=11
return C.c(g.ama(new B.aMQ(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagz())),$async$WG)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agA(n)
e.$0()
v=new B.a2A(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e8B().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajY(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2A(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WG,w)}}
B.aMQ.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMQ&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gj(d){var x=this,w=A.b.gj(x.a),v=C.a7(x.b),u=A.b.gj(x.c),t=A.b.gj(x.d)
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
B.bRV.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6m
case"HCT":return D.brQ
case"KERRY":return D.brT
case"SF_EXPRESS":return D.brY
case"HOME_DELIVERY_EXPRESS":return D.brS
case"TAIWAN_HOME_DELIVERY":return D.brZ
case"PLATFORM_DELIVERY":return D.brW
case"SEVEN_ELEVEN":return D.brX
case"FAMILY_MART":return D.brP
case"HILIFE":return D.brR
case"OK_MART":return D.brU
case"CHUNGHWA_POST":return D.brO
case"OTHER":return D.brV
case"unknown_default_open_api":return D.bs_}return null}}
B.aMR.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMR&&e.a===this.a&&e.b===this.b
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
x(B.aRU,C.bU)
w(C.A,[B.aSm,B.a2A,B.aRK,B.aMQ,B.p9,B.bRV,B.aMR])})()
C.b0(b.typeUniverse,JSON.parse('{"aRU":{"bU":["F6"]}}'))
var y={F:C.C("bv"),z:C.C("v<fr>"),x:C.C("v<n>"),C:C.C("a2A"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqH=new B.bRV()
D.W3=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT,A.cu,A.ds,A.eR,A.eS,A.kI],y.z)
D.bfO=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT],y.z)
D.a6m=new B.p9("BLACK_CAT")
D.brO=new B.p9("CHUNGHWA_POST")
D.brP=new B.p9("FAMILY_MART")
D.brQ=new B.p9("HCT")
D.brR=new B.p9("HILIFE")
D.brS=new B.p9("HOME_DELIVERY_EXPRESS")
D.brT=new B.p9("KERRY")
D.brU=new B.p9("OK_MART")
D.brV=new B.p9("OTHER")
D.brW=new B.p9("PLATFORM_DELIVERY")
D.brX=new B.p9("SEVEN_ELEVEN")
D.brY=new B.p9("SF_EXPRESS")
D.brZ=new B.p9("TAIWAN_HOME_DELIVERY")
D.bs_=new B.p9("unknown_default_open_api")})();(function staticFields(){$.egq=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fcC","e8B",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["D2E6k5SYKVx6yhJQKo9zNBClCVY="]=a.current})($__dart_deferred_initializers__);