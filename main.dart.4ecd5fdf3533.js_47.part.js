((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
e8n(d,e,f,g,h,i,j,k,l,m,n){return new B.aJR(h,k,l,e,g,d,j,n,i,m,f)},
aJR:function aJR(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.w=h
_.x=i
_.y=j
_.Q=k
_.as=l
_.at=m
_.ax=n},
fi:function fi(d){this.a=d},
bN4:function bN4(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[204],B)
A=c[764]
B.aJR.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aJR)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.V.ao(e.Q,w.Q))x=e.as==w.as}else x=!0
return x},
gj(d){var x,w,v,u,t,s,r=this,q=C.h.gj(r.a),p=C.h.gj(r.b),o=r.c
o=o==null?0:D.a0(o.a,o.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
x=r.d
x=x==null?0:D.a0(x.a,x.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
w=r.w
w=w==null?0:C.c.gj(w)
v=r.x
v=v==null?0:C.h.gj(v)
u=r.y
u=u==null?0:C.h.gj(u)
t=D.a7(r.Q)
s=r.as
s=s==null?0:D.a7(s)
return q+p+o+x+w+v+u+t+s},
l(d){var x=this
return"OrderSearchParam[page="+x.a+", size="+x.b+", startDate="+D.b(x.c)+", endDate="+D.b(x.d)+", keyword=null, sortBy=null, sortDirection=null, orderId="+D.b(x.w)+", buyerId="+D.b(x.x)+", sellerId="+D.b(x.y)+", productId=null, status="+D.b(x.Q)+", searchDateType="+D.b(x.as)+", startTime="+D.b(x.at)+", endTime="+D.b(x.ax)+"]"},
v(){var x,w=this,v=null,u="startDate",t="sellerId",s="searchDateType",r=D.r(y.g,y.b)
r.h(0,"page",w.a)
r.h(0,"size",w.b)
x=w.c
if(x!=null)r.h(0,u,x.a2().a_())
else r.h(0,u,v)
x=w.d
if(x!=null)r.h(0,"endDate",x.a2().a_())
else r.h(0,"endDate",v)
r.h(0,"keyword",v)
r.h(0,"sortBy",v)
r.h(0,"sortDirection",v)
x=w.w
if(x!=null)r.h(0,"orderId",x)
else r.h(0,"orderId",v)
x=w.x
if(x!=null)r.h(0,"buyerId",x)
else r.h(0,"buyerId",v)
x=w.y
if(x!=null)r.h(0,t,x)
else r.h(0,t,v)
r.h(0,"productId",v)
r.h(0,"status",w.Q)
x=w.as
if(x!=null)r.h(0,s,x)
else r.h(0,s,v)
r.h(0,"startTime",v)
r.h(0,"endTime",v)
return r}}
B.fi.prototype={
l(d){return this.a},
v(){return this.a}}
B.bN4.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bmM
case"SHIPPED":return A.bmX
case"DELIVERY_ASSIGNING":return A.bmA
case"DELIVERY_ASSIGNED":return A.bmz
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bmE
case"DELIVERY_PICKUP_DELAYED":return A.bmH
case"DELIVERY_PICKED_UP":return A.bmG
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bmD
case"DELIVERY_DELIVERY_DELAYED":return A.bmC
case"DELIVERY_FAILED":return A.bmF
case"DELIVERY_RETURNING":return A.bmI
case"DELIVERY_COMPLETED":return A.bmB
case"PURCHASE_IN_PROGRESS":return A.bmO
case"PROOF_SUBMITTED":return A.bmN
case"BUYER_CONFIRMED":return A.bmu
case"RETURN_REQUESTED":return A.bmU
case"RETURN_REJECTED":return A.bmT
case"RETURN_APPROVED":return A.bmR
case"RETURN_SHIPPED_BY_BUYER":return A.bmV
case"RETURN_SHIPPING_DELAYED":return A.bmW
case"RETURN_RECEIVED":return A.bmS
case"REFUND_NO_RETURN_OFFERED":return A.bmQ
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bmY
case"DISPUTE_OPENED":return A.bmJ
case"DISPUTE_RESPONDED":return A.bmL
case"CANCELLED_BY_BUYER":return A.bmv
case"CANCELLED_BY_SELLER":return A.bmx
case"CANCELLED_BY_PLATFORM":return A.bmw
case"REFUNDED":return A.bmP
case"DISPUTE_RESOLVED":return A.bmK
case"COMPLETED_FINAL":return A.bmy
case"unknown_default_open_api":return A.bmZ}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aJR,B.fi,B.bN4])})()
var y={g:D.F("n"),b:D.F("@")};(function constants(){var x=a.makeConstList
A.BO=new B.bN4()
A.b6C=x([],D.F("v<fi>"))
A.bmu=new B.fi("BUYER_CONFIRMED")
A.bmv=new B.fi("CANCELLED_BY_BUYER")
A.bmw=new B.fi("CANCELLED_BY_PLATFORM")
A.bmx=new B.fi("CANCELLED_BY_SELLER")
A.bmy=new B.fi("COMPLETED_FINAL")
A.bmz=new B.fi("DELIVERY_ASSIGNED")
A.bmA=new B.fi("DELIVERY_ASSIGNING")
A.bmB=new B.fi("DELIVERY_COMPLETED")
A.bmC=new B.fi("DELIVERY_DELIVERY_DELAYED")
A.bmD=new B.fi("DELIVERY_EN_ROUTE_TO_BUYER")
A.bmE=new B.fi("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bmF=new B.fi("DELIVERY_FAILED")
A.bmG=new B.fi("DELIVERY_PICKED_UP")
A.bmH=new B.fi("DELIVERY_PICKUP_DELAYED")
A.bmI=new B.fi("DELIVERY_RETURNING")
A.bmJ=new B.fi("DISPUTE_OPENED")
A.bmK=new B.fi("DISPUTE_RESOLVED")
A.bmL=new B.fi("DISPUTE_RESPONDED")
A.bmM=new B.fi("PENDING_SHIPMENT")
A.bmN=new B.fi("PROOF_SUBMITTED")
A.bmO=new B.fi("PURCHASE_IN_PROGRESS")
A.bmP=new B.fi("REFUNDED")
A.bmQ=new B.fi("REFUND_NO_RETURN_OFFERED")
A.bmR=new B.fi("RETURN_APPROVED")
A.bmS=new B.fi("RETURN_RECEIVED")
A.bmT=new B.fi("RETURN_REJECTED")
A.bmU=new B.fi("RETURN_REQUESTED")
A.bmV=new B.fi("RETURN_SHIPPED_BY_BUYER")
A.bmW=new B.fi("RETURN_SHIPPING_DELAYED")
A.bmX=new B.fi("SHIPPED")
A.bmY=new B.fi("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bmZ=new B.fi("unknown_default_open_api")})();(function staticFields(){$.ad0=null})()};
(a=>{a["nf5w5rnLzB4Dptsjtuhjc53mHSE="]=a.current})($__dart_deferred_initializers__);