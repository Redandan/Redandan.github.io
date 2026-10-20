((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egd(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRt("SellerRefundReviewRoute",new C.EU(null,d),x,A.af,null,"")},
aRt:function aRt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aRW:function aRW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2l:function a2l(d,e,f){this.a=d
this.b=e
this.c=f},
aRj:function aRj(d,e){this.a=d
this.b=e},
aMq:function aMq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p4:function p4(d){this.a=d},
bR3:function bR3(){},
aMr:function aMr(d,e){this.a=d
this.b=e},
efs(d,e){return C.a([d.ba9(e),d.bab(e),d.ba6(e),d.baa(e),d.bac(e),d.ba8(e),d.ba7(e)],y.x)},
dSE(d,e){switch(e){case A.dF:return d.gKi()
case A.fN:return d.gKj()
case A.fO:return d.gKl()
case A.hi:return d.gKm()
case A.iJ:return d.gKk()
case A.iK:return d.gKn()
case A.d9:return d.gK6()
case A.cs:return d.gDL()
case A.dn:return d.gGS()
case A.eQ:return d.gH9()
case A.eR:return d.gCz()
case A.kE:return d.ga7J()
case A.nS:return d.gwF()
case A.q_:return d.gWG()
default:return e.a}},
eoc(d){if(d==null)return!1
return d===A.pZ||d===A.pW||d===A.pX||d===A.pY},
enV(d,e){if(e==null)return d.ga3Y()
switch(e){case A.pZ:return d.gSn()
case A.pW:return d.gSj()
case A.pX:return d.gSk()
case A.pY:return d.gSm()
case A.uh:return d.gSl()
default:return d.ga3Y()}},
enK(d){if(d==null)return D.VZ
switch(d){case A.pZ:return C.a([A.cs],y.z)
case A.pW:return C.a([A.dn],y.z)
case A.pX:return C.a([A.eQ],y.z)
case A.pY:return C.a([A.eR],y.z)
case A.uh:return D.bfN
case A.kD:case A.zH:default:return D.VZ}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[795]
B.aRt.prototype={}
B.aRW.prototype={}
B.a2l.prototype={}
B.aRj.prototype={
gcfj(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WF(d,e){var x=null
return this.cHz(d,e)},
cHz(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WF=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e64()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bN(s.gcfj().ga7S())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bN(s.gcfj().gCU())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am9(new B.aMr(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahE())),$async$WF)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3z()
e.$0()
v=new B.a2l(!0,null,r)
x=1
break
x=8
break
case 9:h=$.edY
if(h==null)h=$.edY=D.aqE
h=h.D(d.e.a)
if(h==null)h=D.a6k
n=d.b
m=d.c
x=11
return C.c(g.am8(new B.aMq(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagx())),$async$WF)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agy(n)
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
$.e64().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajW(J.as(p))
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
B.bR3.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6k
case"HCT":return D.brK
case"KERRY":return D.brN
case"SF_EXPRESS":return D.brS
case"HOME_DELIVERY_EXPRESS":return D.brM
case"TAIWAN_HOME_DELIVERY":return D.brT
case"PLATFORM_DELIVERY":return D.brQ
case"SEVEN_ELEVEN":return D.brR
case"FAMILY_MART":return D.brJ
case"HILIFE":return D.brL
case"OK_MART":return D.brO
case"CHUNGHWA_POST":return D.brI
case"OTHER":return D.brP
case"unknown_default_open_api":return D.brU}return null}}
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
x(B.aRt,C.bV)
w(C.A,[B.aRW,B.a2l,B.aRj,B.aMq,B.p4,B.bR3,B.aMr])})()
C.b_(b.typeUniverse,JSON.parse('{"aRt":{"bV":["EU"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2l"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqE=new B.bR3()
D.VZ=x([A.dF,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nS,A.cs,A.dn,A.eQ,A.eR,A.kE],y.z)
D.bfN=x([A.dF,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nS],y.z)
D.a6k=new B.p4("BLACK_CAT")
D.brI=new B.p4("CHUNGHWA_POST")
D.brJ=new B.p4("FAMILY_MART")
D.brK=new B.p4("HCT")
D.brL=new B.p4("HILIFE")
D.brM=new B.p4("HOME_DELIVERY_EXPRESS")
D.brN=new B.p4("KERRY")
D.brO=new B.p4("OK_MART")
D.brP=new B.p4("OTHER")
D.brQ=new B.p4("PLATFORM_DELIVERY")
D.brR=new B.p4("SEVEN_ELEVEN")
D.brS=new B.p4("SF_EXPRESS")
D.brT=new B.p4("TAIWAN_HOME_DELIVERY")
D.brU=new B.p4("unknown_default_open_api")})();(function staticFields(){$.edY=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f9V","e64",()=>C.b6("SellerOrderShipmentHelper"))})()};
(a=>{a["qr/tc9L9ssfZQ3K8dJPo36mUSfk="]=a.current})($__dart_deferred_initializers__);