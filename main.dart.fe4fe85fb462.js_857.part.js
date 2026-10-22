((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ehQ(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRN("SellerRefundReviewRoute",new C.F_(null,d),x,A.ae,null,"")},
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
a2x:function a2x(d,e,f){this.a=d
this.b=e
this.c=f},
aRD:function aRD(d,e){this.a=d
this.b=e},
aMK:function aMK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p7:function p7(d){this.a=d},
bRH:function bRH(){},
aML:function aML(d,e){this.a=d
this.b=e},
eh5(d,e){return C.a([d.bak(e),d.bam(e),d.bah(e),d.bal(e),d.ban(e),d.baj(e),d.bai(e)],y.x)},
dUc(d,e){switch(e){case A.dH:return d.gKi()
case A.fP:return d.gKj()
case A.fQ:return d.gKl()
case A.hh:return d.gKm()
case A.iK:return d.gKk()
case A.iL:return d.gKn()
case A.de:return d.gK6()
case A.ct:return d.gDN()
case A.ds:return d.gGS()
case A.eR:return d.gH9()
case A.eS:return d.gCE()
case A.kH:return d.ga7O()
case A.nR:return d.gzc()
case A.q4:return d.gWH()
default:return e.a}},
epU(d){if(d==null)return!1
return d===A.q3||d===A.q0||d===A.q1||d===A.q2},
epC(d,e){if(e==null)return d.ga42()
switch(e){case A.q3:return d.gSn()
case A.q0:return d.gSj()
case A.q1:return d.gSk()
case A.q2:return d.gSm()
case A.uk:return d.gSl()
default:return d.ga42()}},
epr(d){if(d==null)return D.W2
switch(d){case A.q3:return C.a([A.ct],y.z)
case A.q0:return C.a([A.ds],y.z)
case A.q1:return C.a([A.eR],y.z)
case A.q2:return C.a([A.eS],y.z)
case A.uk:return D.bfN
case A.kG:case A.zL:default:return D.W2}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aRN.prototype={}
B.aSf.prototype={}
B.a2x.prototype={}
B.aRD.prototype={
gcfF(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WG(d,e){var x=null
return this.cI8(d,e)},
cI8(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WG=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e7M()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcfF().ga7W())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcfF().gCZ())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.ama(new B.aML(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahF())),$async$WG)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3K()
e.$0()
v=new B.a2x(!0,null,r)
x=1
break
x=8
break
case 9:h=$.efC
if(h==null)h=$.efC=D.aqG
h=h.D(d.e.a)
if(h==null)h=D.a6l
n=d.b
m=d.c
x=11
return C.c(g.am9(new B.aMK(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagy())),$async$WG)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agz(n)
e.$0()
v=new B.a2x(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e7M().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajX(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2x(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WG,w)}}
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
B.p7.prototype={
l(d){return this.a},
A(){return this.a}}
B.bRH.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6l
case"HCT":return D.brO
case"KERRY":return D.brR
case"SF_EXPRESS":return D.brW
case"HOME_DELIVERY_EXPRESS":return D.brQ
case"TAIWAN_HOME_DELIVERY":return D.brX
case"PLATFORM_DELIVERY":return D.brU
case"SEVEN_ELEVEN":return D.brV
case"FAMILY_MART":return D.brN
case"HILIFE":return D.brP
case"OK_MART":return D.brS
case"CHUNGHWA_POST":return D.brM
case"OTHER":return D.brT
case"unknown_default_open_api":return D.brY}return null}}
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
w(C.A,[B.aSf,B.a2x,B.aRD,B.aMK,B.p7,B.bRH,B.aML])})()
C.b0(b.typeUniverse,JSON.parse('{"aRN":{"bU":["F_"]}}'))
var y={F:C.C("bv"),z:C.C("v<fr>"),x:C.C("v<n>"),C:C.C("a2x"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqG=new B.bRH()
D.W2=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nR,A.ct,A.ds,A.eR,A.eS,A.kH],y.z)
D.bfN=x([A.dH,A.fP,A.fQ,A.hh,A.iK,A.iL,A.nR],y.z)
D.a6l=new B.p7("BLACK_CAT")
D.brM=new B.p7("CHUNGHWA_POST")
D.brN=new B.p7("FAMILY_MART")
D.brO=new B.p7("HCT")
D.brP=new B.p7("HILIFE")
D.brQ=new B.p7("HOME_DELIVERY_EXPRESS")
D.brR=new B.p7("KERRY")
D.brS=new B.p7("OK_MART")
D.brT=new B.p7("OTHER")
D.brU=new B.p7("PLATFORM_DELIVERY")
D.brV=new B.p7("SEVEN_ELEVEN")
D.brW=new B.p7("SF_EXPRESS")
D.brX=new B.p7("TAIWAN_HOME_DELIVERY")
D.brY=new B.p7("unknown_default_open_api")})();(function staticFields(){$.efC=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fbO","e7M",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["O+7Pzybv19XwzbO6v/zh71C7kXc="]=a.current})($__dart_deferred_initializers__);