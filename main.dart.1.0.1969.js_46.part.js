((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
do9(d,e,f,g,h,i,j,k,l,m,n){return new B.aA2(h,k,l,e,g,d,j,n,i,m,f)},
aA2:function aA2(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eN:function eN(d){this.a=d},
bx5:function bx5(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[195],B)
A=c[761]
B.aA2.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aA2)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.R.ai(e.Q,w.Q))x=e.as==w.as}else x=!0
return x},
gi(d){var x,w,v,u,t,s,r=this,q=C.i.gi(r.a),p=C.i.gi(r.b),o=r.c
o=o==null?0:D.Y(o.a,o.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
x=r.d
x=x==null?0:D.Y(x.a,x.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
w=r.w
w=w==null?0:C.c.gi(w)
v=r.x
v=v==null?0:C.i.gi(v)
u=r.y
u=u==null?0:C.i.gi(u)
t=D.a3(r.Q)
s=r.as
s=s==null?0:D.a3(s)
return q+p+o+x+w+v+u+t+s},
l(d){var x=this
return"OrderSearchParam[page="+x.a+", size="+x.b+", startDate="+D.b(x.c)+", endDate="+D.b(x.d)+", keyword=null, sortBy=null, sortDirection=null, orderId="+D.b(x.w)+", buyerId="+D.b(x.x)+", sellerId="+D.b(x.y)+", productId=null, status="+D.b(x.Q)+", searchDateType="+D.b(x.as)+", startTime="+D.b(x.at)+", endTime="+D.b(x.ax)+"]"},
B(){var x,w=this,v=null,u="startDate",t="sellerId",s="searchDateType",r=D.p(y.g,y.b)
r.h(0,"page",w.a)
r.h(0,"size",w.b)
x=w.c
if(x!=null)r.h(0,u,x.a0().V())
else r.h(0,u,v)
x=w.d
if(x!=null)r.h(0,"endDate",x.a0().V())
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
B.eN.prototype={
l(d){return this.a},
B(){return this.a}}
B.bx5.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bfZ
case"SHIPPED":return A.bg9
case"DELIVERY_ASSIGNING":return A.bfN
case"DELIVERY_ASSIGNED":return A.bfM
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bfR
case"DELIVERY_PICKUP_DELAYED":return A.bfU
case"DELIVERY_PICKED_UP":return A.bfT
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bfQ
case"DELIVERY_DELIVERY_DELAYED":return A.bfP
case"DELIVERY_FAILED":return A.bfS
case"DELIVERY_RETURNING":return A.bfV
case"DELIVERY_COMPLETED":return A.bfO
case"PURCHASE_IN_PROGRESS":return A.bg0
case"PROOF_SUBMITTED":return A.bg_
case"BUYER_CONFIRMED":return A.bfH
case"RETURN_REQUESTED":return A.bg6
case"RETURN_REJECTED":return A.bg5
case"RETURN_APPROVED":return A.bg3
case"RETURN_SHIPPED_BY_BUYER":return A.bg7
case"RETURN_SHIPPING_DELAYED":return A.bg8
case"RETURN_RECEIVED":return A.bg4
case"REFUND_NO_RETURN_OFFERED":return A.bg2
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bga
case"DISPUTE_OPENED":return A.bfW
case"DISPUTE_RESPONDED":return A.bfY
case"CANCELLED_BY_BUYER":return A.bfI
case"CANCELLED_BY_SELLER":return A.bfK
case"CANCELLED_BY_PLATFORM":return A.bfJ
case"REFUNDED":return A.bg1
case"DISPUTE_RESOLVED":return A.bfX
case"COMPLETED_FINAL":return A.bfL
case"unknown_default_open_api":return A.bgb}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.G,[B.aA2,B.eN,B.bx5])})()
var y={g:D.B("o"),b:D.B("@")};(function constants(){var x=a.makeConstList
A.A2=new B.bx5()
A.b1j=x([],D.B("v<eN>"))
A.bfH=new B.eN("BUYER_CONFIRMED")
A.bfI=new B.eN("CANCELLED_BY_BUYER")
A.bfJ=new B.eN("CANCELLED_BY_PLATFORM")
A.bfK=new B.eN("CANCELLED_BY_SELLER")
A.bfL=new B.eN("COMPLETED_FINAL")
A.bfM=new B.eN("DELIVERY_ASSIGNED")
A.bfN=new B.eN("DELIVERY_ASSIGNING")
A.bfO=new B.eN("DELIVERY_COMPLETED")
A.bfP=new B.eN("DELIVERY_DELIVERY_DELAYED")
A.bfQ=new B.eN("DELIVERY_EN_ROUTE_TO_BUYER")
A.bfR=new B.eN("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bfS=new B.eN("DELIVERY_FAILED")
A.bfT=new B.eN("DELIVERY_PICKED_UP")
A.bfU=new B.eN("DELIVERY_PICKUP_DELAYED")
A.bfV=new B.eN("DELIVERY_RETURNING")
A.bfW=new B.eN("DISPUTE_OPENED")
A.bfX=new B.eN("DISPUTE_RESOLVED")
A.bfY=new B.eN("DISPUTE_RESPONDED")
A.bfZ=new B.eN("PENDING_SHIPMENT")
A.bg_=new B.eN("PROOF_SUBMITTED")
A.bg0=new B.eN("PURCHASE_IN_PROGRESS")
A.bg1=new B.eN("REFUNDED")
A.bg2=new B.eN("REFUND_NO_RETURN_OFFERED")
A.bg3=new B.eN("RETURN_APPROVED")
A.bg4=new B.eN("RETURN_RECEIVED")
A.bg5=new B.eN("RETURN_REJECTED")
A.bg6=new B.eN("RETURN_REQUESTED")
A.bg7=new B.eN("RETURN_SHIPPED_BY_BUYER")
A.bg8=new B.eN("RETURN_SHIPPING_DELAYED")
A.bg9=new B.eN("SHIPPED")
A.bga=new B.eN("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bgb=new B.eN("unknown_default_open_api")})();(function staticFields(){$.a8Z=null})()};
(a=>{a["6fW8XbehoxLREO5fIuzTaAD1/HE="]=a.current})($__dart_deferred_initializers__);