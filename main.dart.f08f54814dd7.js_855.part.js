((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ego(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRv("SellerRefundReviewRoute",new C.EU(null,d),x,A.af,null,"")},
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
efD(d,e){return C.a([d.ba9(e),d.bab(e),d.ba6(e),d.baa(e),d.bac(e),d.ba8(e),d.ba7(e)],y.x)},
dSQ(d,e){switch(e){case A.dG:return d.gKd()
case A.fN:return d.gKe()
case A.fO:return d.gKg()
case A.hi:return d.gKh()
case A.iJ:return d.gKf()
case A.iK:return d.gKi()
case A.db:return d.gK1()
case A.ct:return d.gDM()
case A.dp:return d.gGQ()
case A.eR:return d.gH6()
case A.eS:return d.gCA()
case A.kF:return d.ga7G()
case A.nT:return d.gz9()
case A.q_:return d.gWz()
default:return e.a}},
eop(d){if(d==null)return!1
return d===A.pZ||d===A.pW||d===A.pX||d===A.pY},
eo7(d,e){if(e==null)return d.ga3R()
switch(e){case A.pZ:return d.gSf()
case A.pW:return d.gSb()
case A.pX:return d.gSc()
case A.pY:return d.gSe()
case A.uh:return d.gSd()
default:return d.ga3R()}},
enX(d){if(d==null)return D.W_
switch(d){case A.pZ:return C.a([A.ct],y.z)
case A.pW:return C.a([A.dp],y.z)
case A.pX:return C.a([A.eR],y.z)
case A.pY:return C.a([A.eS],y.z)
case A.uh:return D.bfN
case A.kE:case A.zJ:default:return D.W_}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[794]
B.aRv.prototype={}
B.aRY.prototype={}
B.a2l.prototype={}
B.aRl.prototype={
gcfk(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
Wy(d,e){var x=null
return this.cHC(d,e)},
cHC(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Wy=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e6f()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bN(s.gcfk().ga7P())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bN(s.gcfk().gCV())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am4(new B.aMt(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahz())),$async$Wy)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3w()
e.$0()
v=new B.a2l(!0,null,r)
x=1
break
x=8
break
case 9:h=$.ee8
if(h==null)h=$.ee8=D.aqF
h=h.D(d.e.a)
if(h==null)h=D.a6m
n=d.b
m=d.c
x=11
return C.c(g.am3(new B.aMs(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gags())),$async$Wy)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agt(n)
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
$.e6f().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajR(J.as(p))
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
D(d){switch(d){case"BLACK_CAT":return D.a6m
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
C.b_(b.typeUniverse,JSON.parse('{"aRv":{"bV":["EU"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2l"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqF=new B.bR7()
D.W_=x([A.dG,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nT,A.ct,A.dp,A.eR,A.eS,A.kF],y.z)
D.bfN=x([A.dG,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nT],y.z)
D.a6m=new B.p4("BLACK_CAT")
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
D.brU=new B.p4("unknown_default_open_api")})();(function staticFields(){$.ee8=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fa6","e6f",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["xVk683GOaqoTiq0eFachXFRRYmQ="]=a.current})($__dart_deferred_initializers__);