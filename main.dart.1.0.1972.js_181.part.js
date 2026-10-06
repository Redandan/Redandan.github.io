((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
dom(d,e,f,g,h,i,j,k,l,m,n){return new B.aA6(h,k,l,e,g,d,j,n,i,m,f)},
aA6:function aA6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eQ:function eQ(d){this.a=d},
bxd:function bxd(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[209],B)
A=c[833]
B.aA6.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aA6)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.R.ai(e.Q,w.Q))x=e.as==w.as}else x=!0
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
B.eQ.prototype={
l(d){return this.a},
B(){return this.a}}
B.bxd.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bg_
case"SHIPPED":return A.bga
case"DELIVERY_ASSIGNING":return A.bfO
case"DELIVERY_ASSIGNED":return A.bfN
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bfS
case"DELIVERY_PICKUP_DELAYED":return A.bfV
case"DELIVERY_PICKED_UP":return A.bfU
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bfR
case"DELIVERY_DELIVERY_DELAYED":return A.bfQ
case"DELIVERY_FAILED":return A.bfT
case"DELIVERY_RETURNING":return A.bfW
case"DELIVERY_COMPLETED":return A.bfP
case"PURCHASE_IN_PROGRESS":return A.bg1
case"PROOF_SUBMITTED":return A.bg0
case"BUYER_CONFIRMED":return A.bfI
case"RETURN_REQUESTED":return A.bg7
case"RETURN_REJECTED":return A.bg6
case"RETURN_APPROVED":return A.bg4
case"RETURN_SHIPPED_BY_BUYER":return A.bg8
case"RETURN_SHIPPING_DELAYED":return A.bg9
case"RETURN_RECEIVED":return A.bg5
case"REFUND_NO_RETURN_OFFERED":return A.bg3
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bgb
case"DISPUTE_OPENED":return A.bfX
case"DISPUTE_RESPONDED":return A.bfZ
case"CANCELLED_BY_BUYER":return A.bfJ
case"CANCELLED_BY_SELLER":return A.bfL
case"CANCELLED_BY_PLATFORM":return A.bfK
case"REFUNDED":return A.bg2
case"DISPUTE_RESOLVED":return A.bfY
case"COMPLETED_FINAL":return A.bfM
case"unknown_default_open_api":return A.bgc}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.D,[B.aA6,B.eQ,B.bxd])})()
var y={g:D.A("o"),b:D.A("@")};(function constants(){var x=a.makeConstList
A.A2=new B.bxd()
A.b1j=x([],D.A("v<eQ>"))
A.bfI=new B.eQ("BUYER_CONFIRMED")
A.bfJ=new B.eQ("CANCELLED_BY_BUYER")
A.bfK=new B.eQ("CANCELLED_BY_PLATFORM")
A.bfL=new B.eQ("CANCELLED_BY_SELLER")
A.bfM=new B.eQ("COMPLETED_FINAL")
A.bfN=new B.eQ("DELIVERY_ASSIGNED")
A.bfO=new B.eQ("DELIVERY_ASSIGNING")
A.bfP=new B.eQ("DELIVERY_COMPLETED")
A.bfQ=new B.eQ("DELIVERY_DELIVERY_DELAYED")
A.bfR=new B.eQ("DELIVERY_EN_ROUTE_TO_BUYER")
A.bfS=new B.eQ("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bfT=new B.eQ("DELIVERY_FAILED")
A.bfU=new B.eQ("DELIVERY_PICKED_UP")
A.bfV=new B.eQ("DELIVERY_PICKUP_DELAYED")
A.bfW=new B.eQ("DELIVERY_RETURNING")
A.bfX=new B.eQ("DISPUTE_OPENED")
A.bfY=new B.eQ("DISPUTE_RESOLVED")
A.bfZ=new B.eQ("DISPUTE_RESPONDED")
A.bg_=new B.eQ("PENDING_SHIPMENT")
A.bg0=new B.eQ("PROOF_SUBMITTED")
A.bg1=new B.eQ("PURCHASE_IN_PROGRESS")
A.bg2=new B.eQ("REFUNDED")
A.bg3=new B.eQ("REFUND_NO_RETURN_OFFERED")
A.bg4=new B.eQ("RETURN_APPROVED")
A.bg5=new B.eQ("RETURN_RECEIVED")
A.bg6=new B.eQ("RETURN_REJECTED")
A.bg7=new B.eQ("RETURN_REQUESTED")
A.bg8=new B.eQ("RETURN_SHIPPED_BY_BUYER")
A.bg9=new B.eQ("RETURN_SHIPPING_DELAYED")
A.bga=new B.eQ("SHIPPED")
A.bgb=new B.eQ("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bgc=new B.eQ("unknown_default_open_api")})();(function staticFields(){$.a91=null})()};
(a=>{a["m3YFzBel+LuvEuvUaKpt47JZv8s="]=a.current})($__dart_deferred_initializers__);