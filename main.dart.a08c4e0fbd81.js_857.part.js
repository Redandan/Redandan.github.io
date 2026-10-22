((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
ehG(d){var x=C.a_(["orderId",d],y.w,y.b)
return new B.aRN("SellerRefundReviewRoute",new C.EW(null,d),x,A.ae,null,"")},
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
a2v:function a2v(d,e,f){this.a=d
this.b=e
this.c=f},
aRD:function aRD(d,e){this.a=d
this.b=e},
aMK:function aMK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p6:function p6(d){this.a=d},
bRu:function bRu(){},
aML:function aML(d,e){this.a=d
this.b=e},
egW(d,e){return C.a([d.bak(e),d.bam(e),d.bah(e),d.bal(e),d.ban(e),d.baj(e),d.bai(e)],y.x)},
dU2(d,e){switch(e){case A.dI:return d.gKg()
case A.fP:return d.gKh()
case A.fQ:return d.gKj()
case A.hi:return d.gKk()
case A.iL:return d.gKi()
case A.iM:return d.gKl()
case A.de:return d.gK4()
case A.ct:return d.gDM()
case A.ds:return d.gGQ()
case A.eR:return d.gH7()
case A.eS:return d.gCD()
case A.kH:return d.ga7O()
case A.nS:return d.gzc()
case A.q2:return d.gWF()
default:return e.a}},
epL(d){if(d==null)return!1
return d===A.q1||d===A.pZ||d===A.q_||d===A.q0},
ept(d,e){if(e==null)return d.ga4_()
switch(e){case A.q1:return d.gSk()
case A.pZ:return d.gSg()
case A.q_:return d.gSh()
case A.q0:return d.gSj()
case A.uj:return d.gSi()
default:return d.ga4_()}},
epi(d){if(d==null)return D.W4
switch(d){case A.q1:return C.a([A.ct],y.z)
case A.pZ:return C.a([A.ds],y.z)
case A.q_:return C.a([A.eR],y.z)
case A.q0:return C.a([A.eS],y.z)
case A.uj:return D.bfN
case A.kG:case A.zK:default:return D.W4}}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[190],B)
D=c[796]
B.aRN.prototype={}
B.aSf.prototype={}
B.a2v.prototype={}
B.aRD.prototype={
gcfF(){var x=C.f(this.b,A.c,y.F)
x.toString
return x},
WE(d,e){var x=null
return this.cI5(d,e)},
cI5(d,e){var x=0,w=C.l(y.C),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$WE=C.h(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:k=null
j=$.e7C()
i=d.a
h=d.d
g=h?"platform":"logistics"
j.m(A.i,"SellerOrderShipmentHelper: shipOrder called for order "+i+" with type: "+g,null,null)
u=4
if(i.length===0){j=C.bP(s.gcfF().ga7W())
throw C.o(j)}if(!h&&d.b.length===0){j=C.bP(s.gcfF().gCY())
throw C.o(j)}j.m(A.i,"SellerOrderShipmentHelper: Validating inputs completed",null,null)
g=s.a
x=h?7:9
break
case 7:h=d.c
x=10
return C.c(g.ama(new B.aML(i,h.length!==0?h:C.f(s.b,A.c,y.F).gahF())),$async$WE)
case 10:j.m(A.i,"SellerOrderShipmentHelper: Platform ship order API call completed successfully",null,null)
r=C.f(s.b,A.c,y.F).gb3I()
e.$0()
v=new B.a2v(!0,null,r)
x=1
break
x=8
break
case 9:h=$.efs
if(h==null)h=$.efs=D.aqG
h=h.D(d.e.a)
if(h==null)h=D.a6n
n=d.b
m=d.c
x=11
return C.c(g.am9(new B.aMK(i,h,n,m.length!==0?m:C.f(s.b,A.c,y.F).gagy())),$async$WE)
case 11:j.m(A.i,"SellerOrderShipmentHelper: Logistics ship order API call completed successfully",null,null)
q=C.f(s.b,A.c,y.F).agz(n)
e.$0()
v=new B.a2v(!0,null,q)
x=1
break
case 8:u=2
x=6
break
case 4:u=3
f=t.pop()
p=C.u(f)
$.e7C().m(A.E,"SellerOrderShipmentHelper: Error shipping order: "+C.b(p),null,null)
j=C.f(s.b,A.c,y.F)
j.toString
o=j.ajX(J.as(p))
if(k!=null)k.$1(o)
v=new B.a2v(!1,o,null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.j(v,w)
case 2:return C.i(t.at(-1),w)}})
return C.k($async$WE,w)}}
B.aMK.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof B.aMK&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d
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
B.bRu.prototype={
D(d){switch(d){case"BLACK_CAT":return D.a6n
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
w(C.A,[B.aSf,B.a2v,B.aRD,B.aMK,B.p6,B.bRu,B.aML])})()
C.b0(b.typeUniverse,JSON.parse('{"aRN":{"bU":["EW"]}}'))
var y={F:C.C("bv"),z:C.C("v<fr>"),x:C.C("v<n>"),C:C.C("a2v"),w:C.C("n"),b:C.C("@")};(function constants(){var x=a.makeConstList
D.aqG=new B.bRu()
D.W4=x([A.dI,A.fP,A.fQ,A.hi,A.iL,A.iM,A.nS,A.ct,A.ds,A.eR,A.eS,A.kH],y.z)
D.bfN=x([A.dI,A.fP,A.fQ,A.hi,A.iL,A.iM,A.nS],y.z)
D.a6n=new B.p6("BLACK_CAT")
D.brM=new B.p6("CHUNGHWA_POST")
D.brN=new B.p6("FAMILY_MART")
D.brO=new B.p6("HCT")
D.brP=new B.p6("HILIFE")
D.brQ=new B.p6("HOME_DELIVERY_EXPRESS")
D.brR=new B.p6("KERRY")
D.brS=new B.p6("OK_MART")
D.brT=new B.p6("OTHER")
D.brU=new B.p6("PLATFORM_DELIVERY")
D.brV=new B.p6("SEVEN_ELEVEN")
D.brW=new B.p6("SF_EXPRESS")
D.brX=new B.p6("TAIWAN_HOME_DELIVERY")
D.brY=new B.p6("unknown_default_open_api")})();(function staticFields(){$.efs=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"fbD","e7C",()=>C.b7("SellerOrderShipmentHelper"))})()};
(a=>{a["TC+aW+Nx2NSuyuYVfB965MPG4NY="]=a.current})($__dart_deferred_initializers__);