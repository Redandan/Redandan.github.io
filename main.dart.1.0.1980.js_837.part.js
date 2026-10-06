((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dC_(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aEG("SellerRefundReviewRoute",new C.BO(null,d),x,A.ac,null,"")},
aEG:function aEG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aF4:function aF4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Yn:function Yn(d,e,f){this.a=d
this.b=e
this.c=f},
aEw:function aEw(d,e){this.a=d
this.b=e},
aA6:function aA6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d){this.a=d},
bx9:function bx9(){},
aA7:function aA7(d,e){this.a=d
this.b=e},
dBh(d,e){return C.a([d.aYt(e),d.aYv(e),d.aYq(e),d.aYu(e),d.aYw(e),d.aYs(e),d.aYr(e)],y.x)},
dg5(d,e){switch(e){case A.dn:return d.gDC()
case A.fl:return d.gDD()
case A.fm:return d.gDF()
case A.fN:return d.gDG()
case A.i5:return d.gDE()
case A.i6:return d.gDH()
case A.cV:return d.gDv()
case A.ch:return d.gy4()
case A.d9:return d.gAm()
case A.et:return d.gAB()
case A.eu:return d.gwY()
case A.jR:return d.gYQ()
case A.mN:return d.gul()
case A.oO:return d.gOk()
default:return e.a}},
dIR(d){if(d==null)return!1
return d===A.oN||d===A.oK||d===A.oL||d===A.oM},
dIC(d,e){if(e==null)return d.gV9()
switch(e){case A.oN:return d.gKO()
case A.oK:return d.gKK()
case A.oL:return d.gKL()
case A.oM:return d.gKN()
case A.rK:return d.gKM()
default:return d.gV9()}},
dIp(d){if(d==null)return D.Sp
switch(d){case A.oN:return C.a([A.ch],y.z)
case A.oK:return C.a([A.d9],y.z)
case A.oL:return C.a([A.et],y.z)
case A.oM:return C.a([A.eu],y.z)
case A.rK:return D.b64
case A.jQ:case A.xB:default:return D.Sp}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[787]
B.aEG.prototype={}
B.aF4.prototype={}
B.Yn.prototype={}
B.aEw.prototype={
gc1Y(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
Oj(d,e){var x=null
return this.clf(d,e)},
clf(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Oj=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dsB()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bo(s.gc1Y().gZ_())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bo(s.gc1Y().gxl())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaF(new B.aA7(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7s())),$async$Oj)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaRT()
e.$0()
v=new B.Yn(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dzP
if(h==null)h=$.dzP=D.al_
h=h.C(d.e.a)
if(h==null)h=D.a2F
n=d.b
m=d.c
x=11
return C.c(g.aaE(new B.aA6(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6l())),$async$Oj)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6m(n)
e.$0()
v=new B.Yn(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dsB().k(A.u,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9J(J.ap(p))
if(k!=null)k.$1(o)
v=new B.Yn(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$Oj,w)}}
B.aA6.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aA6&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gi(d){var x=this,w=A.c.gi(x.a),v=C.a2(x.b),u=A.c.gi(x.c),t=A.c.gi(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
B(){var x=this,w=C.p(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
B.no.prototype={
l(d){return this.a},
B(){return this.a}}
B.bx9.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2F
case"HCT":return D.bgg
case"KERRY":return D.bgj
case"SF_EXPRESS":return D.bgo
case"HOME_DELIVERY_EXPRESS":return D.bgi
case"TAIWAN_HOME_DELIVERY":return D.bgp
case"PLATFORM_DELIVERY":return D.bgm
case"SEVEN_ELEVEN":return D.bgn
case"FAMILY_MART":return D.bgf
case"HILIFE":return D.bgh
case"OK_MART":return D.bgk
case"CHUNGHWA_POST":return D.bge
case"OTHER":return D.bgl
case"unknown_default_open_api":return D.bgq}return null}}
B.aA7.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aA7&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gi(d){var x=A.c.gi(this.a),w=A.c.gi(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
B(){var x=C.p(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aEG,C.bS)
w(C.G,[B.aF4,B.Yn,B.aEw,B.aA6,B.no,B.bx9,B.aA7])})()
C.aV(b.typeUniverse,JSON.parse('{"aEG":{"bS":["BO"]}}'))
var y={F:C.A("bu"),z:C.A("v<eP>"),x:C.A("v<o>"),C:C.A("Yn"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al_=new B.bx9()
D.Sp=x([A.dn,A.fl,A.fm,A.fN,A.i5,A.i6,A.mN,A.ch,A.d9,A.et,A.eu,A.jR],y.z)
D.b64=x([A.dn,A.fl,A.fm,A.fN,A.i5,A.i6,A.mN],y.z)
D.a2F=new B.no("BLACK_CAT")
D.bge=new B.no("CHUNGHWA_POST")
D.bgf=new B.no("FAMILY_MART")
D.bgg=new B.no("HCT")
D.bgh=new B.no("HILIFE")
D.bgi=new B.no("HOME_DELIVERY_EXPRESS")
D.bgj=new B.no("KERRY")
D.bgk=new B.no("OK_MART")
D.bgl=new B.no("OTHER")
D.bgm=new B.no("PLATFORM_DELIVERY")
D.bgn=new B.no("SEVEN_ELEVEN")
D.bgo=new B.no("SF_EXPRESS")
D.bgp=new B.no("TAIWAN_HOME_DELIVERY")
D.bgq=new B.no("unknown_default_open_api")})();(function staticFields(){$.dzP=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eqJ","dsB",()=>C.aW("SellerOrderShipmentHelper"))})()};
(a=>{a["/L/XFrWKPHCeo2TCJnsWH1QnwlA="]=a.current})($__dart_deferred_initializers__);