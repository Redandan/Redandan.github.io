((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dCZ(d){var x=C.aa(["orderId",d],y.w,y.b)
return new B.aF2("SellerRefundReviewRoute",new C.BU(null,d),x,A.ac,null,"")},
aF2:function aF2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aFs:function aFs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ys:function Ys(d,e,f){this.a=d
this.b=e
this.c=f},
aET:function aET(d,e){this.a=d
this.b=e},
aAs:function aAs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d){this.a=d},
bxH:function bxH(){},
aAt:function aAt(d,e){this.a=d
this.b=e},
dCf(d,e){return C.a([d.aYH(e),d.aYJ(e),d.aYE(e),d.aYI(e),d.aYK(e),d.aYG(e),d.aYF(e)],y.x)},
dh_(d,e){switch(e){case A.dn:return d.gDL()
case A.fm:return d.gDM()
case A.fn:return d.gDO()
case A.fO:return d.gDP()
case A.i5:return d.gDN()
case A.i6:return d.gDQ()
case A.cW:return d.gDE()
case A.ci:return d.gya()
case A.d8:return d.gAt()
case A.eu:return d.gAJ()
case A.ev:return d.gx6()
case A.jR:return d.gZ0()
case A.mN:return d.guq()
case A.oS:return d.gOs()
default:return e.a}},
dJS(d){if(d==null)return!1
return d===A.oR||d===A.oO||d===A.oP||d===A.oQ},
dJC(d,e){if(e==null)return d.gVj()
switch(e){case A.oR:return d.gKV()
case A.oO:return d.gKR()
case A.oP:return d.gKS()
case A.oQ:return d.gKU()
case A.rP:return d.gKT()
default:return d.gVj()}},
dJp(d){if(d==null)return D.SA
switch(d){case A.oR:return C.a([A.ci],y.z)
case A.oO:return C.a([A.d8],y.z)
case A.oP:return C.a([A.eu],y.z)
case A.oQ:return C.a([A.ev],y.z)
case A.rP:return D.b6o
case A.jQ:case A.xK:default:return D.SA}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[180],B)
D=c[771]
B.aF2.prototype={}
B.aFs.prototype={}
B.Ys.prototype={}
B.aET.prototype={
gc2e(){var x=C.e(this.b,A.b,y.F)
x.toString
return x},
Or(d,e){var x=null
return this.clv(d,e)},
clv(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Or=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dtv()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(A.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bq(s.gc2e().gZa())
throw C.t(j)}if(!h&&d.b.length===0){j=C.bq(s.gc2e().gxt())
throw C.t(j)}j.k(A.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.aaP(new B.aAt(i,h.length!==0?h:C.e(s.b,A.b,y.F).ga7C())),$async$Or)
case 10:j.k(A.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.e(s.b,A.b,y.F).gaSa()
e.$0()
v=new B.Ys(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dAN
if(h==null)h=$.dAN=D.al7
h=h.C(d.e.a)
if(h==null)h=D.a2P
n=d.b
m=d.c
x=11
return C.c(g.aaO(new B.aAs(i,h,n,m.length!==0?m:C.e(s.b,A.b,y.F).ga6v())),$async$Or)
case 11:j.k(A.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.e(s.b,A.b,y.F).a6w(n)
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
$.dtv().k(A.v,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.e(s.b,A.b,y.F)
j.toString
o=j.a9T(J.ap(p))
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
return C.k($async$Or,w)}}
B.aAs.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aAs&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bxH.prototype={
C(d){switch(d){case"BLACK_CAT":return D.a2P
case"HCT":return D.bgB
case"KERRY":return D.bgE
case"SF_EXPRESS":return D.bgJ
case"HOME_DELIVERY_EXPRESS":return D.bgD
case"TAIWAN_HOME_DELIVERY":return D.bgK
case"PLATFORM_DELIVERY":return D.bgH
case"SEVEN_ELEVEN":return D.bgI
case"FAMILY_MART":return D.bgA
case"HILIFE":return D.bgC
case"OK_MART":return D.bgF
case"CHUNGHWA_POST":return D.bgz
case"OTHER":return D.bgG
case"unknown_default_open_api":return D.bgL}return null}}
B.aAt.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof B.aAt&&e.a===this.a&&e.b===this.b
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
x(B.aF2,C.bS)
w(C.G,[B.aFs,B.Ys,B.aET,B.aAs,B.no,B.bxH,B.aAt])})()
C.aV(b.typeUniverse,JSON.parse('{"aF2":{"bS":["BU"]}}'))
var y={F:C.A("bv"),z:C.A("w<eR>"),x:C.A("w<o>"),C:C.A("Ys"),w:C.A("o"),b:C.A("@")};(function constants(){var x=a.makeConstList
D.al7=new B.bxH()
D.SA=x([A.dn,A.fm,A.fn,A.fO,A.i5,A.i6,A.mN,A.ci,A.d8,A.eu,A.ev,A.jR],y.z)
D.b6o=x([A.dn,A.fm,A.fn,A.fO,A.i5,A.i6,A.mN],y.z)
D.a2P=new B.no("BLACK_CAT")
D.bgz=new B.no("CHUNGHWA_POST")
D.bgA=new B.no("FAMILY_MART")
D.bgB=new B.no("HCT")
D.bgC=new B.no("HILIFE")
D.bgD=new B.no("HOME_DELIVERY_EXPRESS")
D.bgE=new B.no("KERRY")
D.bgF=new B.no("OK_MART")
D.bgG=new B.no("OTHER")
D.bgH=new B.no("PLATFORM_DELIVERY")
D.bgI=new B.no("SEVEN_ELEVEN")
D.bgJ=new B.no("SF_EXPRESS")
D.bgK=new B.no("TAIWAN_HOME_DELIVERY")
D.bgL=new B.no("unknown_default_open_api")})();(function staticFields(){$.dAN=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"erR","dtv",()=>C.aX("SellerOrderShipmentHelper"))})()};
(a=>{a["IYRAeXP1KTIWDfydK4ANqtu/U1c="]=a.current})($__dart_deferred_initializers__);