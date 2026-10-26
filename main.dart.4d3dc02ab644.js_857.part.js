((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ek8(d){var x=C.X(["orderId",d],y.w,y.b)
return new B.aSj("SellerRefundReviewRoute",new C.F9(null,d),x,A.ae,null,"")},
aSj:function aSj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSM:function aSM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2S:function a2S(d,e,f){this.a=d
this.b=e
this.c=f},
aS9:function aS9(d,e){this.a=d
this.b=e},
aNe:function aNe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pb:function pb(d){this.a=d},
bSJ:function bSJ(){},
aNf:function aNf(d,e){this.a=d
this.b=e},
ejn(d,e){return C.a([d.baC(e),d.baE(e),d.baz(e),d.baD(e),d.baF(e),d.baB(e),d.baA(e)],y.x)},
dWC(d,e){switch(e){case A.dH:return d.gKl()
case A.fO:return d.gKm()
case A.fP:return d.gKo()
case A.hi:return d.gKp()
case A.iK:return d.gKn()
case A.iL:return d.gKq()
case A.de:return d.gK9()
case A.cu:return d.gDQ()
case A.ds:return d.gGT()
case A.eR:return d.gHa()
case A.eS:return d.gCJ()
case A.kI:return d.ga7Y()
case A.nT:return d.gze()
case A.q7:return d.gWO()
default:return e.a}},
esc(d){if(d==null)return!1
return d===A.q6||d===A.q3||d===A.q4||d===A.q5},
erV(d,e){if(e==null)return d.ga4b()
switch(e){case A.q6:return d.gSr()
case A.q3:return d.gSn()
case A.q4:return d.gSo()
case A.q5:return d.gSq()
case A.uq:return d.gSp()
default:return d.ga4b()}},
erK(d){if(d==null)return D.W5
switch(d){case A.q6:return C.a([A.cu],y.z)
case A.q3:return C.a([A.ds],y.z)
case A.q4:return C.a([A.eR],y.z)
case A.q5:return C.a([A.eS],y.z)
case A.uq:return D.bfS
case A.kH:case A.zR:default:return D.W5}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aSj.prototype={}
B.aSM.prototype={}
B.a2S.prototype={}
B.aS9.prototype={
gcgs(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WN(d,e){var x=null
return this.cJb(d,e)},
cJb(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WN=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.ea_()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bQ(s.gcgs().ga85())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bQ(s.gcgs().gD3())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.amj(new B.aNf(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahP())),$async$WN)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb41()
e.$0()
v=new B.a2S(!0,null,r)
x=1
break
x=8
break
case 9:h=$.ehT
if(h==null)h=$.ehT=D.aqK
h=h.D(d.e.a)
if(h==null)h=D.a6p
n=d.b
m=d.c
x=11
return C.c(g.ami(new B.aNe(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagI())),$async$WN)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agJ(n)
e.$0()
v=new B.a2S(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.ea_().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ak6(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2S(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WN,w)}}
B.aNe.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aNe&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bSJ.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6p
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
B.aNf.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aNf&&e.a===this.a&&e.b===this.b
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
x(B.aSj,C.bV)
w(C.B,[B.aSM,B.a2S,B.aS9,B.aNe,B.pb,B.bSJ,B.aNf])})()
C.b1(b.typeUniverse,JSON.parse('{"aSj":{"bV":["F9"]}}'))
var y={F:C.D("bv"),z:C.D("v<fu>"),x:C.D("v<n>"),C:C.D("a2S"),w:C.D("n"),b:C.D("@")};(function constants(){var x=a.makeConstList
D.aqK=new B.bSJ()
D.W5=x([A.dH,A.fO,A.fP,A.hi,A.iK,A.iL,A.nT,A.cu,A.ds,A.eR,A.eS,A.kI],y.z)
D.bfS=x([A.dH,A.fO,A.fP,A.hi,A.iK,A.iL,A.nT],y.z)
D.a6p=new B.pb("BLACK_CAT")
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
D.bs5=new B.pb("unknown_default_open_api")})();(function staticFields(){$.ehT=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fek","ea_",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["j/rR/pLdpA9mgZu9a1Hte97V+Ps="]=a.current})($__dart_deferred_initializers__);