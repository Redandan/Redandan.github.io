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
C(d){switch(d){case"PENDING_SHIPMENT":return A.bmL
case"SHIPPED":return A.bmW
case"DELIVERY_ASSIGNING":return A.bmz
case"DELIVERY_ASSIGNED":return A.bmy
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bmD
case"DELIVERY_PICKUP_DELAYED":return A.bmG
case"DELIVERY_PICKED_UP":return A.bmF
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bmC
case"DELIVERY_DELIVERY_DELAYED":return A.bmB
case"DELIVERY_FAILED":return A.bmE
case"DELIVERY_RETURNING":return A.bmH
case"DELIVERY_COMPLETED":return A.bmA
case"PURCHASE_IN_PROGRESS":return A.bmN
case"PROOF_SUBMITTED":return A.bmM
case"BUYER_CONFIRMED":return A.bmt
case"RETURN_REQUESTED":return A.bmT
case"RETURN_REJECTED":return A.bmS
case"RETURN_APPROVED":return A.bmQ
case"RETURN_SHIPPED_BY_BUYER":return A.bmU
case"RETURN_SHIPPING_DELAYED":return A.bmV
case"RETURN_RECEIVED":return A.bmR
case"REFUND_NO_RETURN_OFFERED":return A.bmP
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bmX
case"DISPUTE_OPENED":return A.bmI
case"DISPUTE_RESPONDED":return A.bmK
case"CANCELLED_BY_BUYER":return A.bmu
case"CANCELLED_BY_SELLER":return A.bmw
case"CANCELLED_BY_PLATFORM":return A.bmv
case"REFUNDED":return A.bmO
case"DISPUTE_RESOLVED":return A.bmJ
case"COMPLETED_FINAL":return A.bmx
case"unknown_default_open_api":return A.bmY}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aJR,B.fi,B.bN4])})()
var y={g:D.F("n"),b:D.F("@")};(function constants(){var x=a.makeConstList
A.BO=new B.bN4()
A.b6B=x([],D.F("v<fi>"))
A.bmt=new B.fi("BUYER_CONFIRMED")
A.bmu=new B.fi("CANCELLED_BY_BUYER")
A.bmv=new B.fi("CANCELLED_BY_PLATFORM")
A.bmw=new B.fi("CANCELLED_BY_SELLER")
A.bmx=new B.fi("COMPLETED_FINAL")
A.bmy=new B.fi("DELIVERY_ASSIGNED")
A.bmz=new B.fi("DELIVERY_ASSIGNING")
A.bmA=new B.fi("DELIVERY_COMPLETED")
A.bmB=new B.fi("DELIVERY_DELIVERY_DELAYED")
A.bmC=new B.fi("DELIVERY_EN_ROUTE_TO_BUYER")
A.bmD=new B.fi("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bmE=new B.fi("DELIVERY_FAILED")
A.bmF=new B.fi("DELIVERY_PICKED_UP")
A.bmG=new B.fi("DELIVERY_PICKUP_DELAYED")
A.bmH=new B.fi("DELIVERY_RETURNING")
A.bmI=new B.fi("DISPUTE_OPENED")
A.bmJ=new B.fi("DISPUTE_RESOLVED")
A.bmK=new B.fi("DISPUTE_RESPONDED")
A.bmL=new B.fi("PENDING_SHIPMENT")
A.bmM=new B.fi("PROOF_SUBMITTED")
A.bmN=new B.fi("PURCHASE_IN_PROGRESS")
A.bmO=new B.fi("REFUNDED")
A.bmP=new B.fi("REFUND_NO_RETURN_OFFERED")
A.bmQ=new B.fi("RETURN_APPROVED")
A.bmR=new B.fi("RETURN_RECEIVED")
A.bmS=new B.fi("RETURN_REJECTED")
A.bmT=new B.fi("RETURN_REQUESTED")
A.bmU=new B.fi("RETURN_SHIPPED_BY_BUYER")
A.bmV=new B.fi("RETURN_SHIPPING_DELAYED")
A.bmW=new B.fi("SHIPPED")
A.bmX=new B.fi("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bmY=new B.fi("unknown_default_open_api")})();(function staticFields(){$.ad0=null})()};
(a=>{a["oAu+x3zeade8+2ZGuoptmOIQTzM="]=a.current})($__dart_deferred_initializers__);