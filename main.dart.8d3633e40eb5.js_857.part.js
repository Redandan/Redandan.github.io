((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eij(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRS("SellerRefundReviewRoute",new C.F5(null,d),x,A.ae,null,"")},
aRS:function aRS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSk:function aSk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2z:function a2z(d,e,f){this.a=d
this.b=e
this.c=f},
aRI:function aRI(d,e){this.a=d
this.b=e},
aMO:function aMO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p8:function p8(d){this.a=d},
bRU:function bRU(){},
aMP:function aMP(d,e){this.a=d
this.b=e},
ehz(d,e){return C.a([d.ban(e),d.bap(e),d.bak(e),d.bao(e),d.baq(e),d.bam(e),d.bal(e)],y.x)},
dUI(d,e){switch(e){case A.dH:return d.gKj()
case A.fP:return d.gKk()
case A.fQ:return d.gKm()
case A.hh:return d.gKn()
case A.iK:return d.gKl()
case A.iL:return d.gKo()
case A.de:return d.gK7()
case A.ct:return d.gDM()
case A.ds:return d.gGS()
case A.eR:return d.gH9()
case A.eS:return d.gCD()
case A.kH:return d.ga7P()
case A.nT:return d.gzc()
case A.q6:return d.gWI()
default:return e.a}},
eqm(d){if(d==null)return!1
return d===A.q5||d===A.q2||d===A.q3||d===A.q4},
eq4(d,e){if(e==null)return d.ga43()
switch(e){case A.q5:return d.gSo()
case A.q2:return d.gSk()
case A.q3:return d.gSl()
case A.q4:return d.gSn()
case A.ul:return d.gSm()
default:return d.ga43()}},
epU(d){if(d==null)return D.W3
switch(d){case A.q5:return C.a([A.ct],y.z)
case A.q2:return C.a([A.ds],y.z)
case A.q3:return C.a([A.eR],y.z)
case A.q4:return C.a([A.eS],y.z)
case A.ul:return D.bfO
case A.kG:case A.zM:default:return D.W3}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aRS.prototype={}
B.aSk.prototype={}
B.a2z.prototype={}
B.aRI.prototype={
gcfO(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WH(d,e){var x=null
return this.cIl(d,e)},
cIl(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WH=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e8g()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcfO().ga7X())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcfO().gCY())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.amb(new B.aMP(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahG())),$async$WH)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3N()
e.$0()
v=new B.a2z(!0,null,r)
x=1
break
x=8
break
case 9:h=$.eg5
if(h==null)h=$.eg5=D.aqH
h=h.D(d.e.a)
if(h==null)h=D.a6m
n=d.b
m=d.c
x=11
return C.c(g.ama(new B.aMO(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagz())),$async$WH)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agA(n)
e.$0()
v=new B.a2z(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e8g().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajY(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2z(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WH,w)}}
B.aMO.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMO&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.p8.prototype={
l(d){return this.a},
A(){return this.a}}
B.bRU.prototype={
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
B.aMP.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMP&&e.a===this.a&&e.b===this.b
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
x(B.aRS,C.bU)
w(C.A,[B.aSk,B.a2z,B.aRI,B.aMO,B.p8,B.bRU,B.aMP])})()
C.b0(b.typeUniverse,JSON.parse('{"aRS":{"bU":["F5"]}}'))
var y={F:C.C("bv"),z:C.C("v<fs>"),x:C.C("v<n>"),C:C.C("a2z"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqH=new B.bRU()
D.W3=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT,A.ct,A.ds,A.eR,A.eS,A.kH],y.z)
D.bfO=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nT],y.z)
D.a6m=new B.p8("BLACK_CAT")
D.brO=new B.p8("CHUNGHWA_POST")
D.brP=new B.p8("FAMILY_MART")
D.brQ=new B.p8("HCT")
D.brR=new B.p8("HILIFE")
D.brS=new B.p8("HOME_DELIVERY_EXPRESS")
D.brT=new B.p8("KERRY")
D.brU=new B.p8("OK_MART")
D.brV=new B.p8("OTHER")
D.brW=new B.p8("PLATFORM_DELIVERY")
D.brX=new B.p8("SEVEN_ELEVEN")
D.brY=new B.p8("SF_EXPRESS")
D.brZ=new B.p8("TAIWAN_HOME_DELIVERY")
D.bs_=new B.p8("unknown_default_open_api")})();(function staticFields(){$.eg5=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fch","e8g",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["lyacZIpSHC/yasdHHnQJAWQ25dY="]=a.current})($__dart_deferred_initializers__);