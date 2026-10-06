((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,E,F,H,D,G,A={
dC_(d){var x=B.aa(["orderId",d],y.w,y.b)
return new A.aEG("SellerRefundReviewRoute",new B.C3(null,d),x,E.ac,null,"")},
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
aA7:function aA7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nr:function nr(d){this.a=d},
bxe:function bxe(){},
aA8:function aA8(d,e){this.a=d
this.b=e},
dBh(d,e){return B.a([d.aYy(e),d.aYA(e),d.aYv(e),d.aYz(e),d.aYB(e),d.aYx(e),d.aYw(e)],y.x)},
dfu(d,e){switch(e){case D.dp:return d.gDC()
case D.fl:return d.gDD()
case D.fm:return d.gDF()
case D.fN:return d.gDG()
case D.i5:return d.gDE()
case D.i6:return d.gDH()
case H.cW:return d.gDv()
case D.ch:return d.gy3()
case D.d7:return d.gAn()
case D.et:return d.gAB()
case D.eu:return d.gwW()
case G.jR:return d.gYP()
case G.mN:return d.guk()
case G.oP:return d.gOl()
default:return e.a}},
dIT(d){if(d==null)return!1
return d===F.oO||d===F.oL||d===F.oM||d===F.oN},
dIE(d,e){if(e==null)return d.gV9()
switch(e){case F.oO:return d.gKP()
case F.oL:return d.gKL()
case F.oM:return d.gKM()
case F.oN:return d.gKO()
case F.rL:return d.gKN()
default:return d.gV9()}},
dIr(d){if(d==null)return C.Sq
switch(d){case F.oO:return B.a([D.ch],y.z)
case F.oL:return B.a([D.d7],y.z)
case F.oM:return B.a([D.et],y.z)
case F.oN:return B.a([D.eu],y.z)
case F.rL:return C.b62
case F.jQ:case F.xC:default:return C.Sq}}},C
J=c[1]
B=c[0]
E=c[2]
F=c[348]
H=c[350]
D=c[349]
G=c[351]
A=a.updateHolder(c[191],A)
C=c[864]
A.aEG.prototype={}
A.aF4.prototype={}
A.Yn.prototype={}
A.aEw.prototype={
gc20(){var x=B.e(this.b,E.b,y.F)
x.toString
return x},
Ok(d,e){var x=null
return this.clj(d,e)},
clj(d,e){var x=0,w=B.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Ok=B.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.dsC()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.k(E.f,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=B.bp(s.gc20().gYZ())
throw B.t(j)}if(!h&&d.b.length===0){j=B.bp(s.gc20().gxk())
throw B.t(j)}j.k(E.f,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return B.c(g.aaF(new A.aA8(i,h.length!==0?h:B.e(s.b,E.b,y.F).ga7q())),$async$Ok)
case 10:j.k(E.f,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=B.e(s.b,E.b,y.F).gaRY()
e.$0()
v=new A.Yn(!0,null,r)
x=1
break
x=8
break
case 9:h=$.dzR
if(h==null)h=$.dzR=C.al_
h=h.C(d.e.a)
if(h==null)h=C.a2F
n=d.b
m=d.c
x=11
return B.c(g.aaE(new A.aA7(i,h,n,m.length!==0?m:B.e(s.b,E.b,y.F).ga6j())),$async$Ok)
case 11:j.k(E.f,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=B.e(s.b,E.b,y.F).a6k(n)
e.$0()
v=new A.Yn(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=B.u(f)
$.dsC().k(E.u,"SellerOrderShipmentHelper: Error shipping order: "+B.b(p),null,null)
j=B.e(s.b,E.b,y.F)
j.toString
o=j.a9H(J.ap(p))
if(k!=null)k.$1(o)
v=new A.Yn(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.j(v,w)
case 2:return B.i(t.at(-1),w)}})
return B.k($async$Ok,w)}}
A.aA7.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof A.aA7&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
else x=!0
return x},
gi(d){var x=this,w=E.c.gi(x.a),v=B.a3(x.b),u=E.c.gi(x.c),t=E.c.gi(x.d)
return w+v+u+t},
l(d){var x=this
return"OrderShipLogisticsParam[orderId="+x.a+", shippingCompany="+x.b.l(0)+", trackingNumber="+x.c+", remark="+x.d+"]"},
B(){var x=this,w=B.p(y.w,y.b)
w.h(0,"orderId",x.a)
w.h(0,"shippingCompany",x.b)
w.h(0,"trackingNumber",x.c)
w.h(0,"remark",x.d)
return w}}
A.nr.prototype={
l(d){return this.a},
B(){return this.a}}
A.bxe.prototype={
C(d){switch(d){case"BLACK_CAT":return C.a2F
case"HCT":return C.bgf
case"KERRY":return C.bgi
case"SF_EXPRESS":return C.bgn
case"HOME_DELIVERY_EXPRESS":return C.bgh
case"TAIWAN_HOME_DELIVERY":return C.bgo
case"PLATFORM_DELIVERY":return C.bgl
case"SEVEN_ELEVEN":return C.bgm
case"FAMILY_MART":return C.bge
case"HILIFE":return C.bgg
case"OK_MART":return C.bgj
case"CHUNGHWA_POST":return C.bgd
case"OTHER":return C.bgk
case"unknown_default_open_api":return C.bgp}return null}}
A.aA8.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof A.aA8&&e.a===this.a&&e.b===this.b
else x=!0
return x},
gi(d){var x=E.c.gi(this.a),w=E.c.gi(this.b)
return x+w},
l(d){return"OrderShipPlatformParam[orderId="+this.a+", remark="+this.b+"]"},
B(){var x=B.p(y.w,y.b)
x.h(0,"orderId",this.a)
x.h(0,"remark",this.b)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.aEG,B.bS)
w(B.D,[A.aF4,A.Yn,A.aEw,A.aA7,A.nr,A.bxe,A.aA8])})()
B.aS(b.typeUniverse,JSON.parse('{"aEG":{"bS":["C3"]}}'))
var y={F:B.A("bx"),z:B.A("v<ey>"),x:B.A("v<o>"),C:B.A("Yn"),w:B.A("o"),b:B.A("@")};(function constants(){var x=a.makeConstList
C.al_=new A.bxe()
C.Sq=x([D.dp,D.fl,D.fm,D.fN,D.i5,D.i6,G.mN,D.ch,D.d7,D.et,D.eu,G.jR],y.z)
C.b62=x([D.dp,D.fl,D.fm,D.fN,D.i5,D.i6,G.mN],y.z)
C.a2F=new A.nr("BLACK_CAT")
C.bgd=new A.nr("CHUNGHWA_POST")
C.bge=new A.nr("FAMILY_MART")
C.bgf=new A.nr("HCT")
C.bgg=new A.nr("HILIFE")
C.bgh=new A.nr("HOME_DELIVERY_EXPRESS")
C.bgi=new A.nr("KERRY")
C.bgj=new A.nr("OK_MART")
C.bgk=new A.nr("OTHER")
C.bgl=new A.nr("PLATFORM_DELIVERY")
C.bgm=new A.nr("SEVEN_ELEVEN")
C.bgn=new A.nr("SF_EXPRESS")
C.bgo=new A.nr("TAIWAN_HOME_DELIVERY")
C.bgp=new A.nr("unknown_default_open_api")})();(function staticFields(){$.dzR=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"eqF","dsC",()=>B.aW("SellerOrderShipmentHelper"))})()};
(a=>{a["lWzmgTuu3TBn2lYM4Bw4SiuOkbE="]=a.current})($__dart_deferred_initializers__);