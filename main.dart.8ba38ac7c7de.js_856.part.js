((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ehA(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRM("SellerRefundReviewRoute",new C.EW(null,d),x,A.ae,null,"")},
aRM:function aRM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aSe:function aSe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2u:function a2u(d,e,f){this.a=d
this.b=e
this.c=f},
aRC:function aRC(d,e){this.a=d
this.b=e},
aMJ:function aMJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p6:function p6(d){this.a=d},
bRt:function bRt(){},
aMK:function aMK(d,e){this.a=d
this.b=e},
egP(d,e){return C.a([d.bai(e),d.bak(e),d.baf(e),d.baj(e),d.bal(e),d.bah(e),d.bag(e)],y.x)},
dTZ(d,e){switch(e){case A.dH:return d.gKf()
case A.fO:return d.gKg()
case A.fP:return d.gKi()
case A.hj:return d.gKj()
case A.iK:return d.gKh()
case A.iL:return d.gKk()
case A.dd:return d.gK3()
case A.cs:return d.gDM()
case A.dr:return d.gGP()
case A.eR:return d.gH6()
case A.eS:return d.gCD()
case A.kH:return d.ga7N()
case A.nS:return d.gzc()
case A.q1:return d.gWE()
default:return e.a}},
epD(d){if(d==null)return!1
return d===A.q0||d===A.pY||d===A.pZ||d===A.q_},
epl(d,e){if(e==null)return d.ga3Z()
switch(e){case A.q0:return d.gSj()
case A.pY:return d.gSf()
case A.pZ:return d.gSg()
case A.q_:return d.gSi()
case A.ui:return d.gSh()
default:return d.ga3Z()}},
epa(d){if(d==null)return D.W2
switch(d){case A.q0:return C.a([A.cs],y.z)
case A.pY:return C.a([A.dr],y.z)
case A.pZ:return C.a([A.eR],y.z)
case A.q_:return C.a([A.eS],y.z)
case A.ui:return D.bfI
case A.kG:case A.zJ:default:return D.W2}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[795]
B.aRM.prototype={}
B.aSe.prototype={}
B.a2u.prototype={}
B.aRC.prototype={
gcfF(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WD(d,e){var x=null
return this.cI4(d,e)},
cI4(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WD=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e7v()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcfF().ga7V())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcfF().gCY())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.am9(new B.aMK(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahE())),$async$WD)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3G()
e.$0()
v=new B.a2u(!0,null,r)
x=1
break
x=8
break
case 9:h=$.efl
if(h==null)h=$.efl=D.aqE
h=h.D(d.e.a)
if(h==null)h=D.a6l
n=d.b
m=d.c
x=11
return C.c(g.am8(new B.aMJ(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagx())),$async$WD)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agy(n)
e.$0()
v=new B.a2u(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e7v().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajW(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2u(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WD,w)}}
B.aMJ.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMJ&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.p6.prototype={
l(d){return this.a},
A(){return this.a}}
B.bRt.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6l
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
B.aMK.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aMK&&e.a===this.a&&e.b===this.b
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
x(B.aRM,C.bU)
w(C.A,[B.aSe,B.a2u,B.aRC,B.aMJ,B.p6,B.bRt,B.aMK])})()
C.b0(b.typeUniverse,JSON.parse('{"aRM":{"bU":["EW"]}}'))
var y={F:C.C("bw"),z:C.C("v<fp>"),x:C.C("v<n>"),C:C.C("a2u"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqE=new B.bRt()
D.W2=x([A.dH,A.fO,A.fP,A.hj,A.iK,A.iL,A.nS,A.cs,A.dr,A.eR,A.eS,A.kH],y.z)
D.bfI=x([A.dH,A.fO,A.fP,A.hj,A.iK,A.iL,A.nS],y.z)
D.a6l=new B.p6("BLACK_CAT")
D.brI=new B.p6("CHUNGHWA_POST")
D.brJ=new B.p6("FAMILY_MART")
D.brK=new B.p6("HCT")
D.brL=new B.p6("HILIFE")
D.brM=new B.p6("HOME_DELIVERY_EXPRESS")
D.brN=new B.p6("KERRY")
D.brO=new B.p6("OK_MART")
D.brP=new B.p6("OTHER")
D.brQ=new B.p6("PLATFORM_DELIVERY")
D.brR=new B.p6("SEVEN_ELEVEN")
D.brS=new B.p6("SF_EXPRESS")
D.brT=new B.p6("TAIWAN_HOME_DELIVERY")
D.brU=new B.p6("unknown_default_open_api")})();(function staticFields(){$.efl=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fbt","e7v",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["iE96DuknsY9fA5hTXGXmHgFmvEU="]=a.current})($__dart_deferred_initializers__);