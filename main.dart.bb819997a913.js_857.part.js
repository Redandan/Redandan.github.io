((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egk(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRv("SellerRefundReviewRoute",new C.EV(null,d),x,A.af,null,"")},
aRv:function aRv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aRY:function aRY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2l:function a2l(d,e,f){this.a=d
this.b=e
this.c=f},
aRl:function aRl(d,e){this.a=d
this.b=e},
aMs:function aMs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p4:function p4(d){this.a=d},
bR7:function bR7(){},
aMt:function aMt(d,e){this.a=d
this.b=e},
efz(d,e){return C.a([d.ba8(e),d.baa(e),d.ba5(e),d.ba9(e),d.bab(e),d.ba7(e),d.ba6(e)],y.x)},
dSN(d,e){switch(e){case A.dG:return d.gKj()
case A.fN:return d.gKk()
case A.fO:return d.gKm()
case A.hi:return d.gKn()
case A.iJ:return d.gKl()
case A.iK:return d.gKo()
case A.da:return d.gK7()
case A.cs:return d.gDM()
case A.dn:return d.gGT()
case A.eR:return d.gHa()
case A.eS:return d.gCz()
case A.kE:return d.ga7J()
case A.nS:return d.gwF()
case A.q0:return d.gWH()
default:return e.a}},
eol(d){if(d==null)return!1
return d===A.q_||d===A.pX||d===A.pY||d===A.pZ},
eo3(d,e){if(e==null)return d.ga3Y()
switch(e){case A.q_:return d.gSo()
case A.pX:return d.gSk()
case A.pY:return d.gSl()
case A.pZ:return d.gSn()
case A.uh:return d.gSm()
default:return d.ga3Y()}},
enT(d){if(d==null)return D.W1
switch(d){case A.q_:return C.a([A.cs],y.z)
case A.pX:return C.a([A.dn],y.z)
case A.pY:return C.a([A.eR],y.z)
case A.pZ:return C.a([A.eS],y.z)
case A.uh:return D.bfQ
case A.kD:case A.zH:default:return D.W1}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[795]
B.aRv.prototype={}
B.aRY.prototype={}
B.a2l.prototype={}
B.aRl.prototype={
gcfi(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WG(d,e){var x=null
return this.cHz(d,e)},
cHz(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WG=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e6b()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bN(s.gcfi().ga7S())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bN(s.gcfi().gCV())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am8(new B.aMt(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahD())),$async$WG)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3y()
e.$0()
v=new B.a2l(!0,null,r)
x=1
break
x=8
break
case 9:h=$.ee4
if(h==null)h=$.ee4=D.aqI
h=h.D(d.e.a)
if(h==null)h=D.a6n
n=d.b
m=d.c
x=11
return C.c(g.am7(new B.aMs(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagw())),$async$WG)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agx(n)
e.$0()
v=new B.a2l(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e6b().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajV(J.at(p))
if(k!=null)k.$1(o)
v=new B.a2l(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WG,w)}}
B.aMs.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMs&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.p4.prototype={
l(d){return this.a},
A(){return this.a}}
B.bR7.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6n
case"HCT":return D.brN
case"KERRY":return D.brQ
case"SF_EXPRESS":return D.brV
case"HOME_DELIVERY_EXPRESS":return D.brP
case"TAIWAN_HOME_DELIVERY":return D.brW
case"PLATFORM_DELIVERY":return D.brT
case"SEVEN_ELEVEN":return D.brU
case"FAMILY_MART":return D.brM
case"HILIFE":return D.brO
case"OK_MART":return D.brR
case"CHUNGHWA_POST":return D.brL
case"OTHER":return D.brS
case"unknown_default_open_api":return D.brX}return null}}
B.aMt.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMt&&e.a===this.a&&e.b===this.b
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
x(B.aRv,C.bV)
w(C.A,[B.aRY,B.a2l,B.aRl,B.aMs,B.p4,B.bR7,B.aMt])})()
C.b_(b.typeUniverse,JSON.parse('{"aRv":{"bV":["EV"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2l"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqI=new B.bR7()
D.W1=x([A.dG,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nS,A.cs,A.dn,A.eR,A.eS,A.kE],y.z)
D.bfQ=x([A.dG,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nS],y.z)
D.a6n=new B.p4("BLACK_CAT")
D.brL=new B.p4("CHUNGHWA_POST")
D.brM=new B.p4("FAMILY_MART")
D.brN=new B.p4("HCT")
D.brO=new B.p4("HILIFE")
D.brP=new B.p4("HOME_DELIVERY_EXPRESS")
D.brQ=new B.p4("KERRY")
D.brR=new B.p4("OK_MART")
D.brS=new B.p4("OTHER")
D.brT=new B.p4("PLATFORM_DELIVERY")
D.brU=new B.p4("SEVEN_ELEVEN")
D.brV=new B.p4("SF_EXPRESS")
D.brW=new B.p4("TAIWAN_HOME_DELIVERY")
D.brX=new B.p4("unknown_default_open_api")})();(function staticFields(){$.ee4=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fa3","e6b",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["acz9/wAVYD97sz6/hNrCQqBUykE="]=a.current})($__dart_deferred_initializers__);