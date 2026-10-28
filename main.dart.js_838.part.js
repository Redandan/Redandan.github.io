((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dJA(d){var x=C.W(["orderId",d],y.w,y.b)
return new B.aJp("SellerRefundReviewRoute",new C.CF(null,d),x,A.ad,null,"")},
aJp:function aJp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJN:function aJN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Zo:function Zo(d,e,f){this.a=d
this.b=e
this.c=f},
aJf:function aJf(d,e){this.a=d
this.b=e},
aad:function aad(d,e){this.a=d
this.b=e},
aF4:function aF4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ok:function ok(d){this.a=d},
bCT:function bCT(){},
aF5:function aF5(d,e){this.a=d
this.b=e},
dIS(d,e){return C.a([d.aRR(e),d.aRT(e),d.aRO(e),d.aRS(e),d.aRU(e),d.aRQ(e),d.aRP(e)],y.x)},
dnh(d,e){switch(e){case A.dU:return d.gacl()
case A.is:return d.gacm()
case A.iu:return d.gaco()
case A.iv:return d.gacq()
case A.it:return d.gacn()
case A.iw:return d.gacr()
case A.ed:return d.gPT()
case A.cu:return d.gQj()
case A.dC:return d.gY6()
case A.fW:return d.gYO()
case A.fX:return d.gZR()
case A.rI:return d.gaMh()
case A.oM:return d.gMJ()
case A.rJ:return d.gacp()
default:return e.a}},
dR7(d){if(d==null)return!1
return d===A.rH||d===A.rE||d===A.rF||d===A.rG},
dQR(d,e){if(e==null)return d.gWG()
switch(e){case A.rH:return d.ga00()
case A.rE:return d.ga_X()
case A.rF:return d.ga_Y()
case A.rG:return d.ga0_()
case A.xI:return d.ga_Z()
default:return d.gWG()}},
dQE(d){if(d==null)return D.S9
switch(d){case A.rH:return C.a([A.cu],y.z)
case A.rE:return C.a([A.dC],y.z)
case A.rF:return C.a([A.fW],y.z)
case A.rG:return C.a([A.fX],y.z)
case A.xI:return D.b2Y
case A.mH:case A.F_:default:return D.S9}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[147],B)
D=c[619]
B.aJp.prototype={}
B.aJN.prototype={}
B.Zo.prototype={}
B.aJf.prototype={
gbPZ(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
Qk(d,e){var x=null
return this.ces(d,e)},
ces(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Qk=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dAK()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bH(s.gbPZ().ga_5())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bH(s.gbPZ().gAo())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.acj(new B.aF5(i,h.length!==0?h:C.f(s.b,A.c,y.F).ga8b())),$async$Qk)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gaNI()
e.$0()
v=new B.Zo(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dHM
if(h==null)h=$.dHM=D.al_
h=h.D(d.e.a)
if(h==null)h=D.a2h
n=d.b
m=d.c
x=11
return C.c(g.aci(new B.aF4(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).ga75())),$async$Qk)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).a76(n)
e.$0()
v=new B.Zo(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dAK().m(A.z,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.aag(J.ar(p))
if(k!=null)k.$1(o)
v=new B.Zo(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Qk,w)}}
B.aad.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aad&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gj(d){var x=A.b.gj(this.a),w=A.b.gj(this.b)
return x+w},
l(d){return"OrderCancelParam[orderId="+this.a+", reason="+this.b+"]"},
v(){var x=C.q(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"reason",this.b)
return x}}
B.aF4.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aF4&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gj(d){var x=this,w=A.b.gj(x.a),v=C.ad(x.b),u=A.b.gj(x.c),t=A.b.gj(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
v(){var x=this,w=C.q(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
B.ok.prototype={
l(d){return this.a},
v(){return this.a}}
B.bCT.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a2h
case"HCT":return D.beW
case"KERRY":return D.beZ
case"SF_EXPRESS":return D.bf3
case"HOME_DELIVERY_EXPRESS":return D.beY
case"TAIWAN_HOME_DELIVERY":return D.bf4
case"PLATFORM_DELIVERY":return D.bf1
case"SEVEN_ELEVEN":return D.bf2
case"FAMILY_MART":return D.beV
case"HILIFE":return D.beX
case"OK_MART":return D.bf_
case"CHUNGHWA_POST":return D.beU
case"OTHER":return D.bf0
case"unknown_default_open_api":return D.bf5}return null}}
B.aF5.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aF5&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gj(d){var x=A.b.gj(this.a),w=A.b.gj(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
v(){var x=C.q(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aJp,C.cu)
w(C.A,[B.aJN,B.Zo,B.aJf,B.aad,B.aF4,B.ok,B.bCT,B.aF5])})()
C.b0(b.typeUniverse,JSON.parse('{"aJp":{"cu":["CF"]}}'))
var y={F:C.C("c_"),z:C.C("v<eW>"),x:C.C("v<m>"),C:C.C("Zo"),w:C.C("m"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.al_=new B.bCT()
D.OP=new C.Z(61252,"MaterialIcons",!1)
D.Pz=new C.av(D.OP,18,null,null,null)
D.S9=x([A.dU,A.is,A.iu,A.iv,A.it,A.iw,A.oM,A.cu,A.dC,A.fW,A.fX,A.rI],y.z)
D.b2Y=x([A.dU,A.is,A.iu,A.iv,A.it,A.iw,A.oM],y.z)
D.a2h=new B.ok("BLACK_CAT")
D.beU=new B.ok("CHUNGHWA_POST")
D.beV=new B.ok("FAMILY_MART")
D.beW=new B.ok("HCT")
D.beX=new B.ok("HILIFE")
D.beY=new B.ok("HOME_DELIVERY_EXPRESS")
D.beZ=new B.ok("KERRY")
D.bf_=new B.ok("OK_MART")
D.bf0=new B.ok("OTHER")
D.bf1=new B.ok("PLATFORM_DELIVERY")
D.bf2=new B.ok("SEVEN_ELEVEN")
D.bf3=new B.ok("SF_EXPRESS")
D.bf4=new B.ok("TAIWAN_HOME_DELIVERY")
D.bf5=new B.ok("unknown_default_open_api")})();(function staticFields(){$.dHM=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ezD","dAK",()=>C.b4("SellerOrderShipmentHelper"))})()};
(a=>{a["0p4FnRIsuz0pnN+Olebo81H6IY0="]=a.current})($__dart_deferred_initializers__);