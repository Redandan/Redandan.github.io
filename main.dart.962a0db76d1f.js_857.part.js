((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ehC(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRN("SellerRefundReviewRoute",new C.EW(null,d),x,A.ae,null,"")},
aRN:function aRN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSf:function aSf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2v:function a2v(d,e,f){this.a=d
this.b=e
this.c=f},
aRD:function aRD(d,e){this.a=d
this.b=e},
aMK:function aMK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p6:function p6(d){this.a=d},
bRu:function bRu(){},
aML:function aML(d,e){this.a=d
this.b=e},
egS(d,e){return C.a([d.bah(e),d.baj(e),d.bae(e),d.bai(e),d.bak(e),d.bag(e),d.baf(e)],y.x)},
dTZ(d,e){switch(e){case A.dH:return d.gKg()
case A.fP:return d.gKh()
case A.fQ:return d.gKj()
case A.hh:return d.gKk()
case A.iK:return d.gKi()
case A.iL:return d.gKl()
case A.de:return d.gK4()
case A.ct:return d.gDM()
case A.ds:return d.gGQ()
case A.eR:return d.gH7()
case A.eS:return d.gCD()
case A.kH:return d.ga7M()
case A.nR:return d.gzb()
case A.q2:return d.gWE()
default:return e.a}},
epG(d){if(d==null)return!1
return d===A.q1||d===A.pZ||d===A.q_||d===A.q0},
epo(d,e){if(e==null)return d.ga3Z()
switch(e){case A.q1:return d.gSk()
case A.pZ:return d.gSg()
case A.q_:return d.gSh()
case A.q0:return d.gSj()
case A.uj:return d.gSi()
default:return d.ga3Z()}},
epd(d){if(d==null)return D.W1
switch(d){case A.q1:return C.a([A.ct],y.z)
case A.pZ:return C.a([A.ds],y.z)
case A.q_:return C.a([A.eR],y.z)
case A.q0:return C.a([A.eS],y.z)
case A.uj:return D.bfL
case A.kG:case A.zK:default:return D.W1}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aRN.prototype={}
B.aSf.prototype={}
B.a2v.prototype={}
B.aRD.prototype={
gcfC(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WD(d,e){var x=null
return this.cI2(d,e)},
cI2(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WD=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e7y()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcfC().ga7U())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcfC().gCY())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am8(new B.aML(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahD())),$async$WD)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3H()
e.$0()
v=new B.a2v(!0,null,r)
x=1
break
x=8
break
case 9:h=$.efo
if(h==null)h=$.efo=D.aqE
h=h.D(d.e.a)
if(h==null)h=D.a6k
n=d.b
m=d.c
x=11
return C.c(g.am7(new B.aMK(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagw())),$async$WD)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agx(n)
e.$0()
v=new B.a2v(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e7y().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajV(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2v(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WD,w)}}
B.aMK.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMK&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.p6.prototype={
l(d){return this.a},
A(){return this.a}}
B.bRu.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6k
case"HCT":return D.brM
case"KERRY":return D.brP
case"SF_EXPRESS":return D.brU
case"HOME_DELIVERY_EXPRESS":return D.brO
case"TAIWAN_HOME_DELIVERY":return D.brV
case"PLATFORM_DELIVERY":return D.brS
case"SEVEN_ELEVEN":return D.brT
case"FAMILY_MART":return D.brL
case"HILIFE":return D.brN
case"OK_MART":return D.brQ
case"CHUNGHWA_POST":return D.brK
case"OTHER":return D.brR
case"unknown_default_open_api":return D.brW}return null}}
B.aML.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aML&&e.a===this.a&&e.b===this.b
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
x(B.aRN,C.bU)
w(C.A,[B.aSf,B.a2v,B.aRD,B.aMK,B.p6,B.bRu,B.aML])})()
C.b0(b.typeUniverse,JSON.parse('{"aRN":{"bU":["EW"]}}'))
var y={F:C.C("bv"),z:C.C("v<fr>"),x:C.C("v<n>"),C:C.C("a2v"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqE=new B.bRu()
D.W1=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nR,A.ct,A.ds,A.eR,A.eS,A.kH],y.z)
D.bfL=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nR],y.z)
D.a6k=new B.p6("BLACK_CAT")
D.brK=new B.p6("CHUNGHWA_POST")
D.brL=new B.p6("FAMILY_MART")
D.brM=new B.p6("HCT")
D.brN=new B.p6("HILIFE")
D.brO=new B.p6("HOME_DELIVERY_EXPRESS")
D.brP=new B.p6("KERRY")
D.brQ=new B.p6("OK_MART")
D.brR=new B.p6("OTHER")
D.brS=new B.p6("PLATFORM_DELIVERY")
D.brT=new B.p6("SEVEN_ELEVEN")
D.brU=new B.p6("SF_EXPRESS")
D.brV=new B.p6("TAIWAN_HOME_DELIVERY")
D.brW=new B.p6("unknown_default_open_api")})();(function staticFields(){$.efo=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fby","e7y",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["QY8wiXNcM+zWrgcvNWHC6m8+XIU="]=a.current})($__dart_deferred_initializers__);