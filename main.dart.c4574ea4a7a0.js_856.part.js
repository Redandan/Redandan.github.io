((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egu(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRy("SellerRefundReviewRoute",new C.ET(null,d),x,A.ae,null,"")},
aRy:function aRy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aS0:function aS0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2n:function a2n(d,e,f){this.a=d
this.b=e
this.c=f},
aRo:function aRo(d,e){this.a=d
this.b=e},
aMv:function aMv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p4:function p4(d){this.a=d},
bRa:function bRa(){},
aMw:function aMw(d,e){this.a=d
this.b=e},
efJ(d,e){return C.a([d.bab(e),d.bad(e),d.ba8(e),d.bac(e),d.bae(e),d.baa(e),d.ba9(e)],y.x)},
dSV(d,e){switch(e){case A.dH:return d.gKd()
case A.fP:return d.gKe()
case A.fQ:return d.gKg()
case A.hi:return d.gKh()
case A.iJ:return d.gKf()
case A.iK:return d.gKi()
case A.dc:return d.gK1()
case A.cs:return d.gDN()
case A.dq:return d.gGQ()
case A.eS:return d.gH6()
case A.eT:return d.gCB()
case A.kH:return d.ga7G()
case A.nR:return d.gz9()
case A.q0:return d.gWz()
default:return e.a}},
eov(d){if(d==null)return!1
return d===A.q_||d===A.pX||d===A.pY||d===A.pZ},
eod(d,e){if(e==null)return d.ga3S()
switch(e){case A.q_:return d.gSf()
case A.pX:return d.gSb()
case A.pY:return d.gSc()
case A.pZ:return d.gSe()
case A.uh:return d.gSd()
default:return d.ga3S()}},
eo2(d){if(d==null)return D.W0
switch(d){case A.q_:return C.a([A.cs],y.z)
case A.pX:return C.a([A.dq],y.z)
case A.pY:return C.a([A.eS],y.z)
case A.pZ:return C.a([A.eT],y.z)
case A.uh:return D.bfG
case A.kG:case A.zG:default:return D.W0}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[795]
B.aRy.prototype={}
B.aS0.prototype={}
B.a2n.prototype={}
B.aRo.prototype={
gcfk(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
Wy(d,e){var x=null
return this.cHD(d,e)},
cHD(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Wy=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e6l()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bN(s.gcfk().ga7O())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bN(s.gcfk().gCX())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am3(new B.aMw(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahy())),$async$Wy)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3y()
e.$0()
v=new B.a2n(!0,null,r)
x=1
break
x=8
break
case 9:h=$.eee
if(h==null)h=$.eee=D.aqB
h=h.D(d.e.a)
if(h==null)h=D.a6j
n=d.b
m=d.c
x=11
return C.c(g.am2(new B.aMv(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagr())),$async$Wy)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).ags(n)
e.$0()
v=new B.a2n(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e6l().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajQ(J.at(p))
if(k!=null)k.$1(o)
v=new B.a2n(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Wy,w)}}
B.aMv.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMv&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bRa.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6j
case"HCT":return D.brF
case"KERRY":return D.brI
case"SF_EXPRESS":return D.brN
case"HOME_DELIVERY_EXPRESS":return D.brH
case"TAIWAN_HOME_DELIVERY":return D.brO
case"PLATFORM_DELIVERY":return D.brL
case"SEVEN_ELEVEN":return D.brM
case"FAMILY_MART":return D.brE
case"HILIFE":return D.brG
case"OK_MART":return D.brJ
case"CHUNGHWA_POST":return D.brD
case"OTHER":return D.brK
case"unknown_default_open_api":return D.brP}return null}}
B.aMw.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMw&&e.a===this.a&&e.b===this.b
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
x(B.aRy,C.bV)
w(C.A,[B.aS0,B.a2n,B.aRo,B.aMv,B.p4,B.bRa,B.aMw])})()
C.b_(b.typeUniverse,JSON.parse('{"aRy":{"bV":["ET"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2n"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqB=new B.bRa()
D.W0=x([A.dH,A.fP,A.fQ,A.hi,A.iJ,A.iK,A.nR,A.cs,A.dq,A.eS,A.eT,A.kH],y.z)
D.bfG=x([A.dH,A.fP,A.fQ,A.hi,A.iJ,A.iK,A.nR],y.z)
D.a6j=new B.p4("BLACK_CAT")
D.brD=new B.p4("CHUNGHWA_POST")
D.brE=new B.p4("FAMILY_MART")
D.brF=new B.p4("HCT")
D.brG=new B.p4("HILIFE")
D.brH=new B.p4("HOME_DELIVERY_EXPRESS")
D.brI=new B.p4("KERRY")
D.brJ=new B.p4("OK_MART")
D.brK=new B.p4("OTHER")
D.brL=new B.p4("PLATFORM_DELIVERY")
D.brM=new B.p4("SEVEN_ELEVEN")
D.brN=new B.p4("SF_EXPRESS")
D.brO=new B.p4("TAIWAN_HOME_DELIVERY")
D.brP=new B.p4("unknown_default_open_api")})();(function staticFields(){$.eee=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fag","e6l",()=>C.b6("SellerOrderShipmentHelper"))})()};
(a=>{a["zK5E5tVJy/6c2ZuGnge5a0aTgY8="]=a.current})($__dart_deferred_initializers__);