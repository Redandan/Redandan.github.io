((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eab(d){var x=C.Z(["orderId",d],y.w,y.b)
return new B.aOw("SellerRefundReviewRoute",new C.DP(null,d),x,A.af,null,"")},
aOw:function aOw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOZ:function aOZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0F:function a0F(d,e,f){this.a=d
this.b=e
this.c=f},
aOm:function aOm(d,e){this.a=d
this.b=e},
aJO:function aJO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ox:function ox(d){this.a=d},
bN0:function bN0(){},
aJP:function aJP(d,e){this.a=d
this.b=e},
e9s(d,e){return C.a([d.b8O(e),d.b8Q(e),d.b8L(e),d.b8P(e),d.b8R(e),d.b8N(e),d.b8M(e)],y.x)},
dN3(d,e){switch(e){case A.dD:return d.gJA()
case A.fJ:return d.gJB()
case A.fK:return d.gJD()
case A.hb:return d.gJE()
case A.iB:return d.gJC()
case A.iC:return d.gJF()
case A.d7:return d.gJo()
case A.cs:return d.gD9()
case A.dk:return d.gGb()
case A.eO:return d.gGr()
case A.eP:return d.gC_()
case A.kw:return d.ga6R()
case A.nE:return d.gyI()
case A.pL:return d.gVN()
default:return e.a}},
ehZ(d){if(d==null)return!1
return d===A.pK||d===A.pH||d===A.pI||d===A.pJ},
ehI(d,e){if(e==null)return d.ga30()
switch(e){case A.pK:return d.gRx()
case A.pH:return d.gRt()
case A.pI:return d.gRu()
case A.pJ:return d.gRw()
case A.tZ:return d.gRv()
default:return d.ga30()}},
ehx(d){if(d==null)return D.US
switch(d){case A.pK:return C.a([A.cs],y.z)
case A.pH:return C.a([A.dk],y.z)
case A.pI:return C.a([A.eO],y.z)
case A.pJ:return C.a([A.eP],y.z)
case A.tZ:return D.bb7
case A.kv:case A.zk:default:return D.US}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[188],B)
D=c[796]
B.aOw.prototype={}
B.aOZ.prototype={}
B.a0F.prototype={}
B.aOm.prototype={
gcdf(){var x=C.f(this.b,A.b,y.F)
x.toString
return x},
VM(d,e){var x=null
return this.cEK(d,e)},
cEK(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$VM=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e0a()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bO(s.gcdf().ga7_())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bO(s.gcdf().gCk())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.ala(new B.aJP(i,h.length!==0?h:C.f(s.b,A.b,y.F).gagH())),$async$VM)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.b,y.F).gb2l()
e.$0()
v=new B.a0F(!0,null,r)
x=1
break
x=8
break
case 9:h=$.e7Y
if(h==null)h=$.e7Y=D.aoF
h=h.C(d.e.a)
if(h==null)h=D.a57
n=d.b
m=d.c
x=11
return C.c(g.al9(new B.aJO(i,h,n,m.length!==0?m:C.f(s.b,A.b,y.F).gafA())),$async$VM)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.b,y.F).afB(n)
e.$0()
v=new B.a0F(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e0a().m(A.F,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.b,y.F)
j.toString
o=j.aiZ(J.as(p))
if(k!=null)k.$1(o)
v=new B.a0F(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$VM,w)}}
B.aJO.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aJO&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gj(d){var x=this,w=A.c.gj(x.a),v=C.a7(x.b),u=A.c.gj(x.c),t=A.c.gj(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
v(){var x=this,w=C.r(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
B.ox.prototype={
l(d){return this.a},
v(){return this.a}}
B.bN0.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a57
case"HCT":return D.bmR
case"KERRY":return D.bmU
case"SF_EXPRESS":return D.bmZ
case"HOME_DELIVERY_EXPRESS":return D.bmT
case"TAIWAN_HOME_DELIVERY":return D.bn_
case"PLATFORM_DELIVERY":return D.bmX
case"SEVEN_ELEVEN":return D.bmY
case"FAMILY_MART":return D.bmQ
case"HILIFE":return D.bmS
case"OK_MART":return D.bmV
case"CHUNGHWA_POST":return D.bmP
case"OTHER":return D.bmW
case"unknown_default_open_api":return D.bn0}return null}}
B.aJP.prototype={
p(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aJP&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gj(d){var x=A.c.gj(this.a),w=A.c.gj(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
v(){var x=C.r(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aOw,C.bS)
w(C.A,[B.aOZ,B.a0F,B.aOm,B.aJO,B.ox,B.bN0,B.aJP])})()
C.aY(b.typeUniverse,JSON.parse('{"aOw":{"bS":["DP"]}}'))
var y={F:C.F("bv"),z:C.F("v<fi>"),x:C.F("v<n>"),C:C.F("a0F"),w:C.F("n"),b:C.F("@")};(function constants(){var x=a.makeConstList
D.aoF=new B.bN0()
D.US=x([A.dD,A.fJ,A.fK,A.hb,A.iB,A.iC,A.nE,A.cs,A.dk,A.eO,A.eP,A.kw],y.z)
D.bb7=x([A.dD,A.fJ,A.fK,A.hb,A.iB,A.iC,A.nE],y.z)
D.a57=new B.ox("BLACK_CAT")
D.bmP=new B.ox("CHUNGHWA_POST")
D.bmQ=new B.ox("FAMILY_MART")
D.bmR=new B.ox("HCT")
D.bmS=new B.ox("HILIFE")
D.bmT=new B.ox("HOME_DELIVERY_EXPRESS")
D.bmU=new B.ox("KERRY")
D.bmV=new B.ox("OK_MART")
D.bmW=new B.ox("OTHER")
D.bmX=new B.ox("PLATFORM_DELIVERY")
D.bmY=new B.ox("SEVEN_ELEVEN")
D.bmZ=new B.ox("SF_EXPRESS")
D.bn_=new B.ox("TAIWAN_HOME_DELIVERY")
D.bn0=new B.ox("unknown_default_open_api")})();(function staticFields(){$.e7Y=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"f1E","e0a",()=>C.b4("SellerOrderShipmentHelper"))})()};
(a=>{a["M5zktKu3Clm5fU8DL6dXI1GatzU="]=a.current})($__dart_deferred_initializers__);