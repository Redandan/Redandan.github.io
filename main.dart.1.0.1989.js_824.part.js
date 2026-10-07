((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dCR(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aF0("SellerRefundReviewRoute",new C.BR(null,d),x,A.ac,null,"")},
aF0:function aF0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aFq:function aFq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ys:function Ys(d,e,f){this.a=d
this.b=e
this.c=f},
aER:function aER(d,e){this.a=d
this.b=e},
aAq:function aAq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nn:function nn(d){this.a=d},
bxF:function bxF(){},
aAr:function aAr(d,e){this.a=d
this.b=e},
dC8(d,e){return C.a([d.aYB(e),d.aYD(e),d.aYy(e),d.aYC(e),d.aYE(e),d.aYA(e),d.aYz(e)],y.x)},
dgT(d,e){switch(e){case A.dn:return d.gDI()
case A.fm:return d.gDJ()
case A.fn:return d.gDL()
case A.fO:return d.gDM()
case A.i5:return d.gDK()
case A.i6:return d.gDN()
case A.cW:return d.gDB()
case A.ci:return d.gy7()
case A.d8:return d.gAp()
case A.eu:return d.gAF()
case A.ev:return d.gx4()
case A.jR:return d.gYX()
case A.mN:return d.guo()
case A.oS:return d.gOo()
default:return e.a}},
dJK(d){if(d==null)return!1
return d===A.oR||d===A.oO||d===A.oP||d===A.oQ},
dJu(d,e){if(e==null)return d.gVg()
switch(e){case A.oR:return d.gKR()
case A.oO:return d.gKN()
case A.oP:return d.gKO()
case A.oQ:return d.gKQ()
case A.rP:return d.gKP()
default:return d.gVg()}},
dJh(d){if(d==null)return D.Sy
switch(d){case A.oR:return C.a([A.ci],y.z)
case A.oO:return C.a([A.d8],y.z)
case A.oP:return C.a([A.eu],y.z)
case A.oQ:return C.a([A.ev],y.z)
case A.rP:return D.b6l
case A.jQ:case A.xJ:default:return D.Sy}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[771]
B.aF0.prototype={}
B.aFq.prototype={}
B.Ys.prototype={}
B.aER.prototype={
gc27(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
On(d,e){var x=null
return this.clq(d,e)},
clq(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$On=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dto()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bp(s.gc27().gZ6())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bp(s.gc27().gxq())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaM(new B.aAr(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7z())),$async$On)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaS4()
e.$0()
v=new B.Ys(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dAG
if(h==null)h=$.dAG=D.al5
h=h.C(d.e.a)
if(h==null)h=D.a2N
n=d.b
m=d.c
x=11
return C.c(g.aaL(new B.aAq(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6s())),$async$On)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6t(n)
e.$0()
v=new B.Ys(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.dto().k(A.v,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9Q(J.ap(p))
if(k!=null)k.$1(o)
v=new B.Ys(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$On,w)}}
B.aAq.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aAq&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.nn.prototype={
l(d){return this.a},
B(){return this.a}}
B.bxF.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2N
case"HCT":return D.bgx
case"KERRY":return D.bgA
case"SF_EXPRESS":return D.bgF
case"HOME_DELIVERY_EXPRESS":return D.bgz
case"TAIWAN_HOME_DELIVERY":return D.bgG
case"PLATFORM_DELIVERY":return D.bgD
case"SEVEN_ELEVEN":return D.bgE
case"FAMILY_MART":return D.bgw
case"HILIFE":return D.bgy
case"OK_MART":return D.bgB
case"CHUNGHWA_POST":return D.bgv
case"OTHER":return D.bgC
case"unknown_default_open_api":return D.bgH}return null}}
B.aAr.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aAr&&e.a===this.a&&e.b===this.b
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
x(B.aF0,C.bS)
w(C.G,[B.aFq,B.Ys,B.aER,B.aAq,B.nn,B.bxF,B.aAr])})()
C.aV(b.typeUniverse,JSON.parse('{"aF0":{"bS":["BR"]}}'))
var y={F:C.A("bv"),z:C.A("w<eR>"),x:C.A("w<o>"),C:C.A("Ys"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al5=new B.bxF()
D.Sy=x([A.dn,A.fm,A.fn,A.fO,A.i5,A.i6,A.mN,A.ci,A.d8,A.eu,A.ev,A.jR],y.z)
D.b6l=x([A.dn,A.fm,A.fn,A.fO,A.i5,A.i6,A.mN],y.z)
D.a2N=new B.nn("BLACK_CAT")
D.bgv=new B.nn("CHUNGHWA_POST")
D.bgw=new B.nn("FAMILY_MART")
D.bgx=new B.nn("HCT")
D.bgy=new B.nn("HILIFE")
D.bgz=new B.nn("HOME_DELIVERY_EXPRESS")
D.bgA=new B.nn("KERRY")
D.bgB=new B.nn("OK_MART")
D.bgC=new B.nn("OTHER")
D.bgD=new B.nn("PLATFORM_DELIVERY")
D.bgE=new B.nn("SEVEN_ELEVEN")
D.bgF=new B.nn("SF_EXPRESS")
D.bgG=new B.nn("TAIWAN_HOME_DELIVERY")
D.bgH=new B.nn("unknown_default_open_api")})();(function staticFields(){$.dAG=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"erE","dto",()=>C.aX("SellerOrderShipmentHelper"))})()};
(a=>{a["nY608/dKtpLK0q+xJesjFiyyoqU="]=a.current})($__dart_deferred_initializers__);