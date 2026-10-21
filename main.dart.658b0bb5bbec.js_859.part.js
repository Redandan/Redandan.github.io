((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egV(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRB("SellerRefundReviewRoute",new C.ET(null,d),x,A.ae,null,"")},
aRB:function aRB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aS3:function aS3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2q:function a2q(d,e,f){this.a=d
this.b=e
this.c=f},
aRr:function aRr(d,e){this.a=d
this.b=e},
aMz:function aMz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p5:function p5(d){this.a=d},
bRf:function bRf(){},
aMA:function aMA(d,e){this.a=d
this.b=e},
eg9(d,e){return C.a([d.baf(e),d.bah(e),d.bac(e),d.bag(e),d.bai(e),d.bae(e),d.bad(e)],y.x)},
dTm(d,e){switch(e){case A.dH:return d.gKd()
case A.fO:return d.gKe()
case A.fP:return d.gKg()
case A.hh:return d.gKh()
case A.iJ:return d.gKf()
case A.iK:return d.gKi()
case A.dc:return d.gK1()
case A.cs:return d.gDN()
case A.dr:return d.gGQ()
case A.eR:return d.gH6()
case A.eS:return d.gCC()
case A.kH:return d.ga7K()
case A.nS:return d.gzc()
case A.q1:return d.gWC()
default:return e.a}},
eoW(d){if(d==null)return!1
return d===A.q0||d===A.pY||d===A.pZ||d===A.q_},
eoE(d,e){if(e==null)return d.ga3W()
switch(e){case A.q0:return d.gSi()
case A.pY:return d.gSe()
case A.pZ:return d.gSf()
case A.q_:return d.gSh()
case A.uh:return d.gSg()
default:return d.ga3W()}},
eot(d){if(d==null)return D.W0
switch(d){case A.q0:return C.a([A.cs],y.z)
case A.pY:return C.a([A.dr],y.z)
case A.pZ:return C.a([A.eR],y.z)
case A.q_:return C.a([A.eS],y.z)
case A.uh:return D.bfH
case A.kG:case A.zJ:default:return D.W0}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[797]
B.aRB.prototype={}
B.aS3.prototype={}
B.a2q.prototype={}
B.aRr.prototype={
gcfv(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WB(d,e){var x=null
return this.cHN(d,e)},
cHN(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WB=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e6N()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bQ(s.gcfv().ga7S())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bQ(s.gcfv().gCY())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am7(new B.aMA(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahC())),$async$WB)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3C()
e.$0()
v=new B.a2q(!0,null,r)
x=1
break
x=8
break
case 9:h=$.eeF
if(h==null)h=$.eeF=D.aqC
h=h.D(d.e.a)
if(h==null)h=D.a6j
n=d.b
m=d.c
x=11
return C.c(g.am6(new B.aMz(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagv())),$async$WB)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agw(n)
e.$0()
v=new B.a2q(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e6N().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajU(J.at(p))
if(k!=null)k.$1(o)
v=new B.a2q(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WB,w)}}
B.aMz.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMz&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.p5.prototype={
l(d){return this.a},
A(){return this.a}}
B.bRf.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6j
case"HCT":return D.brG
case"KERRY":return D.brJ
case"SF_EXPRESS":return D.brO
case"HOME_DELIVERY_EXPRESS":return D.brI
case"TAIWAN_HOME_DELIVERY":return D.brP
case"PLATFORM_DELIVERY":return D.brM
case"SEVEN_ELEVEN":return D.brN
case"FAMILY_MART":return D.brF
case"HILIFE":return D.brH
case"OK_MART":return D.brK
case"CHUNGHWA_POST":return D.brE
case"OTHER":return D.brL
case"unknown_default_open_api":return D.brQ}return null}}
B.aMA.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMA&&e.a===this.a&&e.b===this.b
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
x(B.aRB,C.bV)
w(C.A,[B.aS3,B.a2q,B.aRr,B.aMz,B.p5,B.bRf,B.aMA])})()
C.b0(b.typeUniverse,JSON.parse('{"aRB":{"bV":["ET"]}}'))
var y={F:C.C("bw"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2q"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqC=new B.bRf()
D.W0=x([A.dH,A.fO,A.fP,A.hh,A.iJ,A.iK,A.nS,A.cs,A.dr,A.eR,A.eS,A.kH],y.z)
D.bfH=x([A.dH,A.fO,A.fP,A.hh,A.iJ,A.iK,A.nS],y.z)
D.a6j=new B.p5("BLACK_CAT")
D.brE=new B.p5("CHUNGHWA_POST")
D.brF=new B.p5("FAMILY_MART")
D.brG=new B.p5("HCT")
D.brH=new B.p5("HILIFE")
D.brI=new B.p5("HOME_DELIVERY_EXPRESS")
D.brJ=new B.p5("KERRY")
D.brK=new B.p5("OK_MART")
D.brL=new B.p5("OTHER")
D.brM=new B.p5("PLATFORM_DELIVERY")
D.brN=new B.p5("SEVEN_ELEVEN")
D.brO=new B.p5("SF_EXPRESS")
D.brP=new B.p5("TAIWAN_HOME_DELIVERY")
D.brQ=new B.p5("unknown_default_open_api")})();(function staticFields(){$.eeF=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"faH","e6N",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["iYKf/dnykZayY4L6honE6lkpNOA="]=a.current})($__dart_deferred_initializers__);