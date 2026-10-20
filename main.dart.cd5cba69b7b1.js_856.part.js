((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egb(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRs("SellerRefundReviewRoute",new C.EU(null,d),x,A.af,null,"")},
aRs:function aRs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aRV:function aRV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2l:function a2l(d,e,f){this.a=d
this.b=e
this.c=f},
aRi:function aRi(d,e){this.a=d
this.b=e},
aMq:function aMq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p4:function p4(d){this.a=d},
bR2:function bR2(){},
aMr:function aMr(d,e){this.a=d
this.b=e},
efq(d,e){return C.a([d.ba8(e),d.baa(e),d.ba5(e),d.ba9(e),d.bab(e),d.ba7(e),d.ba6(e)],y.x)},
dSC(d,e){switch(e){case A.dE:return d.gKi()
case A.fM:return d.gKj()
case A.fN:return d.gKl()
case A.hi:return d.gKm()
case A.iI:return d.gKk()
case A.iJ:return d.gKn()
case A.d9:return d.gK6()
case A.cs:return d.gDL()
case A.dn:return d.gGS()
case A.eQ:return d.gH9()
case A.eR:return d.gCz()
case A.kE:return d.ga7J()
case A.nS:return d.gwF()
case A.q_:return d.gWG()
default:return e.a}},
eoa(d){if(d==null)return!1
return d===A.pZ||d===A.pW||d===A.pX||d===A.pY},
enT(d,e){if(e==null)return d.ga3Y()
switch(e){case A.pZ:return d.gSn()
case A.pW:return d.gSj()
case A.pX:return d.gSk()
case A.pY:return d.gSm()
case A.uf:return d.gSl()
default:return d.ga3Y()}},
enI(d){if(d==null)return D.VZ
switch(d){case A.pZ:return C.a([A.cs],y.z)
case A.pW:return C.a([A.dn],y.z)
case A.pX:return C.a([A.eQ],y.z)
case A.pY:return C.a([A.eR],y.z)
case A.uf:return D.bfM
case A.kD:case A.zG:default:return D.VZ}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[794]
B.aRs.prototype={}
B.aRV.prototype={}
B.a2l.prototype={}
B.aRi.prototype={
gcfi(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WF(d,e){var x=null
return this.cHy(d,e)},
cHy(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WF=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e62()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bN(s.gcfi().ga7S())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bN(s.gcfi().gCU())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am8(new B.aMr(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahD())),$async$WF)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3x()
e.$0()
v=new B.a2l(!0,null,r)
x=1
break
x=8
break
case 9:h=$.edW
if(h==null)h=$.edW=D.aqD
h=h.D(d.e.a)
if(h==null)h=D.a6k
n=d.b
m=d.c
x=11
return C.c(g.am7(new B.aMq(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagw())),$async$WF)
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
$.e62().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajV(J.as(p))
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
return C.k($async$WF,w)}}
B.aMq.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMq&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bR2.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6k
case"HCT":return D.brJ
case"KERRY":return D.brM
case"SF_EXPRESS":return D.brR
case"HOME_DELIVERY_EXPRESS":return D.brL
case"TAIWAN_HOME_DELIVERY":return D.brS
case"PLATFORM_DELIVERY":return D.brP
case"SEVEN_ELEVEN":return D.brQ
case"FAMILY_MART":return D.brI
case"HILIFE":return D.brK
case"OK_MART":return D.brN
case"CHUNGHWA_POST":return D.brH
case"OTHER":return D.brO
case"unknown_default_open_api":return D.brT}return null}}
B.aMr.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMr&&e.a===this.a&&e.b===this.b
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
x(B.aRs,C.bV)
w(C.A,[B.aRV,B.a2l,B.aRi,B.aMq,B.p4,B.bR2,B.aMr])})()
C.b_(b.typeUniverse,JSON.parse('{"aRs":{"bV":["EU"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2l"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqD=new B.bR2()
D.VZ=x([A.dE,A.fM,A.fN,A.hi,A.iI,A.iJ,A.nS,A.cs,A.dn,A.eQ,A.eR,A.kE],y.z)
D.bfM=x([A.dE,A.fM,A.fN,A.hi,A.iI,A.iJ,A.nS],y.z)
D.a6k=new B.p4("BLACK_CAT")
D.brH=new B.p4("CHUNGHWA_POST")
D.brI=new B.p4("FAMILY_MART")
D.brJ=new B.p4("HCT")
D.brK=new B.p4("HILIFE")
D.brL=new B.p4("HOME_DELIVERY_EXPRESS")
D.brM=new B.p4("KERRY")
D.brN=new B.p4("OK_MART")
D.brO=new B.p4("OTHER")
D.brP=new B.p4("PLATFORM_DELIVERY")
D.brQ=new B.p4("SEVEN_ELEVEN")
D.brR=new B.p4("SF_EXPRESS")
D.brS=new B.p4("TAIWAN_HOME_DELIVERY")
D.brT=new B.p4("unknown_default_open_api")})();(function staticFields(){$.edW=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f9T","e62",()=>C.b6("SellerOrderShipmentHelper"))})()};
(a=>{a["C1bUL9loS1Z20D946jff7SG0WXc="]=a.current})($__dart_deferred_initializers__);