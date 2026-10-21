((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egr(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRx("SellerRefundReviewRoute",new C.EU(null,d),x,A.ae,null,"")},
aRx:function aRx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aS_:function aS_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2l:function a2l(d,e,f){this.a=d
this.b=e
this.c=f},
aRn:function aRn(d,e){this.a=d
this.b=e},
aMu:function aMu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p4:function p4(d){this.a=d},
bRa:function bRa(){},
aMv:function aMv(d,e){this.a=d
this.b=e},
efG(d,e){return C.a([d.bab(e),d.bad(e),d.ba8(e),d.bac(e),d.bae(e),d.baa(e),d.ba9(e)],y.x)},
dSU(d,e){switch(e){case A.dH:return d.gKd()
case A.fP:return d.gKe()
case A.fQ:return d.gKg()
case A.hj:return d.gKh()
case A.iJ:return d.gKf()
case A.iK:return d.gKi()
case A.dc:return d.gK1()
case A.cs:return d.gDN()
case A.dq:return d.gGQ()
case A.eT:return d.gH6()
case A.eU:return d.gCB()
case A.kI:return d.ga7G()
case A.nR:return d.gz9()
case A.q_:return d.gWz()
default:return e.a}},
eos(d){if(d==null)return!1
return d===A.pZ||d===A.pW||d===A.pX||d===A.pY},
eoa(d,e){if(e==null)return d.ga3S()
switch(e){case A.pZ:return d.gSf()
case A.pW:return d.gSb()
case A.pX:return d.gSc()
case A.pY:return d.gSe()
case A.ui:return d.gSd()
default:return d.ga3S()}},
eo_(d){if(d==null)return D.W2
switch(d){case A.pZ:return C.a([A.cs],y.z)
case A.pW:return C.a([A.dq],y.z)
case A.pX:return C.a([A.eT],y.z)
case A.pY:return C.a([A.eU],y.z)
case A.ui:return D.bfL
case A.kH:case A.zG:default:return D.W2}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[794]
B.aRx.prototype={}
B.aS_.prototype={}
B.a2l.prototype={}
B.aRn.prototype={
gcfk(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
Wy(d,e){var x=null
return this.cHD(d,e)},
cHD(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Wy=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e6j()
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
return C.c(g.am3(new B.aMv(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahy())),$async$Wy)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3y()
e.$0()
v=new B.a2l(!0,null,r)
x=1
break
x=8
break
case 9:h=$.eec
if(h==null)h=$.eec=D.aqG
h=h.D(d.e.a)
if(h==null)h=D.a6p
n=d.b
m=d.c
x=11
return C.c(g.am2(new B.aMu(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagr())),$async$Wy)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).ags(n)
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
$.e6j().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajQ(J.as(p))
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
return C.k($async$Wy,w)}}
B.aMu.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMu&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
D(d){switch(d){case"BLACK_CAT":return D.a6p
case"HCT":return D.brI
case"KERRY":return D.brL
case"SF_EXPRESS":return D.brQ
case"HOME_DELIVERY_EXPRESS":return D.brK
case"TAIWAN_HOME_DELIVERY":return D.brR
case"PLATFORM_DELIVERY":return D.brO
case"SEVEN_ELEVEN":return D.brP
case"FAMILY_MART":return D.brH
case"HILIFE":return D.brJ
case"OK_MART":return D.brM
case"CHUNGHWA_POST":return D.brG
case"OTHER":return D.brN
case"unknown_default_open_api":return D.brS}return null}}
B.aMv.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMv&&e.a===this.a&&e.b===this.b
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
x(B.aRx,C.bV)
w(C.A,[B.aS_,B.a2l,B.aRn,B.aMu,B.p4,B.bRa,B.aMv])})()
C.b_(b.typeUniverse,JSON.parse('{"aRx":{"bV":["EU"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2l"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqG=new B.bRa()
D.W2=x([A.dH,A.fP,A.fQ,A.hj,A.iJ,A.iK,A.nR,A.cs,A.dq,A.eT,A.eU,A.kI],y.z)
D.bfL=x([A.dH,A.fP,A.fQ,A.hj,A.iJ,A.iK,A.nR],y.z)
D.a6p=new B.p4("BLACK_CAT")
D.brG=new B.p4("CHUNGHWA_POST")
D.brH=new B.p4("FAMILY_MART")
D.brI=new B.p4("HCT")
D.brJ=new B.p4("HILIFE")
D.brK=new B.p4("HOME_DELIVERY_EXPRESS")
D.brL=new B.p4("KERRY")
D.brM=new B.p4("OK_MART")
D.brN=new B.p4("OTHER")
D.brO=new B.p4("PLATFORM_DELIVERY")
D.brP=new B.p4("SEVEN_ELEVEN")
D.brQ=new B.p4("SF_EXPRESS")
D.brR=new B.p4("TAIWAN_HOME_DELIVERY")
D.brS=new B.p4("unknown_default_open_api")})();(function staticFields(){$.eec=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"faa","e6j",()=>C.b6("SellerOrderShipmentHelper"))})()};
(a=>{a["RYigVxRmOaiTjt1nAZtax+WIwac="]=a.current})($__dart_deferred_initializers__);