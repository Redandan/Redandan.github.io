((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
egq(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRw("SellerRefundReviewRoute",new C.EU(null,d),x,A.af,null,"")},
aRw:function aRw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aRZ:function aRZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2l:function a2l(d,e,f){this.a=d
this.b=e
this.c=f},
aRm:function aRm(d,e){this.a=d
this.b=e},
aMt:function aMt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p4:function p4(d){this.a=d},
bR9:function bR9(){},
aMu:function aMu(d,e){this.a=d
this.b=e},
efF(d,e){return C.a([d.bab(e),d.bad(e),d.ba8(e),d.bac(e),d.bae(e),d.baa(e),d.ba9(e)],y.x)},
dST(d,e){switch(e){case A.dG:return d.gKd()
case A.fN:return d.gKe()
case A.fO:return d.gKg()
case A.hi:return d.gKh()
case A.iJ:return d.gKf()
case A.iK:return d.gKi()
case A.db:return d.gK1()
case A.ct:return d.gDN()
case A.dp:return d.gGQ()
case A.eR:return d.gH6()
case A.eS:return d.gCB()
case A.kG:return d.ga7H()
case A.nS:return d.gz9()
case A.q0:return d.gWz()
default:return e.a}},
eor(d){if(d==null)return!1
return d===A.q_||d===A.pX||d===A.pY||d===A.pZ},
eo9(d,e){if(e==null)return d.ga3S()
switch(e){case A.q_:return d.gSf()
case A.pX:return d.gSb()
case A.pY:return d.gSc()
case A.pZ:return d.gSe()
case A.ui:return d.gSd()
default:return d.ga3S()}},
enZ(d){if(d==null)return D.W_
switch(d){case A.q_:return C.a([A.ct],y.z)
case A.pX:return C.a([A.dp],y.z)
case A.pY:return C.a([A.eR],y.z)
case A.pZ:return C.a([A.eS],y.z)
case A.ui:return D.bfM
case A.kF:case A.zI:default:return D.W_}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[795]
B.aRw.prototype={}
B.aRZ.prototype={}
B.a2l.prototype={}
B.aRm.prototype={
gcfl(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
Wy(d,e){var x=null
return this.cHD(d,e)},
cHD(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Wy=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e6i()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bN(s.gcfl().ga7Q())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bN(s.gcfl().gCX())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am5(new B.aMu(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahA())),$async$Wy)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3y()
e.$0()
v=new B.a2l(!0,null,r)
x=1
break
x=8
break
case 9:h=$.eeb
if(h==null)h=$.eeb=D.aqE
h=h.D(d.e.a)
if(h==null)h=D.a6m
n=d.b
m=d.c
x=11
return C.c(g.am4(new B.aMt(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagt())),$async$Wy)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agu(n)
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
$.e6i().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajS(J.as(p))
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
B.aMt.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMt&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bR9.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6m
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
B.aMu.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMu&&e.a===this.a&&e.b===this.b
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
x(B.aRw,C.bV)
w(C.A,[B.aRZ,B.a2l,B.aRm,B.aMt,B.p4,B.bR9,B.aMu])})()
C.b_(b.typeUniverse,JSON.parse('{"aRw":{"bV":["EU"]}}'))
var y={F:C.C("by"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2l"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqE=new B.bR9()
D.W_=x([A.dG,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nS,A.ct,A.dp,A.eR,A.eS,A.kG],y.z)
D.bfM=x([A.dG,A.fN,A.fO,A.hi,A.iJ,A.iK,A.nS],y.z)
D.a6m=new B.p4("BLACK_CAT")
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
D.brT=new B.p4("unknown_default_open_api")})();(function staticFields(){$.eeb=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fa9","e6i",()=>C.b6("SellerOrderShipmentHelper"))})()};
(a=>{a["/8Ex7tklKe1YDp3+6XZ5E1pcnMw="]=a.current})($__dart_deferred_initializers__);