((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
dog(d,e,f,g,h,i,j,k,l,m,n){return new B.aA5(h,k,l,e,g,d,j,n,i,m,f)},
aA5:function aA5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eO:function eO(d){this.a=d},
bx8:function bx8(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[195],B)
A=c[760]
B.aA5.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aA5)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.R.ai(e.Q,w.Q))x=e.as==w.as}else x=!0
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
t=D.a2(r.Q)
s=r.as
s=s==null?0:D.a2(s)
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
B.eO.prototype={
l(d){return this.a},
B(){return this.a}}
B.bx8.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bg0
case"SHIPPED":return A.bgb
case"DELIVERY_ASSIGNING":return A.bfP
case"DELIVERY_ASSIGNED":return A.bfO
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bfT
case"DELIVERY_PICKUP_DELAYED":return A.bfW
case"DELIVERY_PICKED_UP":return A.bfV
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bfS
case"DELIVERY_DELIVERY_DELAYED":return A.bfR
case"DELIVERY_FAILED":return A.bfU
case"DELIVERY_RETURNING":return A.bfX
case"DELIVERY_COMPLETED":return A.bfQ
case"PURCHASE_IN_PROGRESS":return A.bg2
case"PROOF_SUBMITTED":return A.bg1
case"BUYER_CONFIRMED":return A.bfJ
case"RETURN_REQUESTED":return A.bg8
case"RETURN_REJECTED":return A.bg7
case"RETURN_APPROVED":return A.bg5
case"RETURN_SHIPPED_BY_BUYER":return A.bg9
case"RETURN_SHIPPING_DELAYED":return A.bga
case"RETURN_RECEIVED":return A.bg6
case"REFUND_NO_RETURN_OFFERED":return A.bg4
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bgc
case"DISPUTE_OPENED":return A.bfY
case"DISPUTE_RESPONDED":return A.bg_
case"CANCELLED_BY_BUYER":return A.bfK
case"CANCELLED_BY_SELLER":return A.bfM
case"CANCELLED_BY_PLATFORM":return A.bfL
case"REFUNDED":return A.bg3
case"DISPUTE_RESOLVED":return A.bfZ
case"COMPLETED_FINAL":return A.bfN
case"unknown_default_open_api":return A.bgd}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.G,[B.aA5,B.eO,B.bx8])})()
var y={g:D.A("o"),b:D.A("@")};(function constants(){var x=a.makeConstList
A.A1=new B.bx8()
A.b1k=x([],D.A("v<eO>"))
A.bfJ=new B.eO("BUYER_CONFIRMED")
A.bfK=new B.eO("CANCELLED_BY_BUYER")
A.bfL=new B.eO("CANCELLED_BY_PLATFORM")
A.bfM=new B.eO("CANCELLED_BY_SELLER")
A.bfN=new B.eO("COMPLETED_FINAL")
A.bfO=new B.eO("DELIVERY_ASSIGNED")
A.bfP=new B.eO("DELIVERY_ASSIGNING")
A.bfQ=new B.eO("DELIVERY_COMPLETED")
A.bfR=new B.eO("DELIVERY_DELIVERY_DELAYED")
A.bfS=new B.eO("DELIVERY_EN_ROUTE_TO_BUYER")
A.bfT=new B.eO("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bfU=new B.eO("DELIVERY_FAILED")
A.bfV=new B.eO("DELIVERY_PICKED_UP")
A.bfW=new B.eO("DELIVERY_PICKUP_DELAYED")
A.bfX=new B.eO("DELIVERY_RETURNING")
A.bfY=new B.eO("DISPUTE_OPENED")
A.bfZ=new B.eO("DISPUTE_RESOLVED")
A.bg_=new B.eO("DISPUTE_RESPONDED")
A.bg0=new B.eO("PENDING_SHIPMENT")
A.bg1=new B.eO("PROOF_SUBMITTED")
A.bg2=new B.eO("PURCHASE_IN_PROGRESS")
A.bg3=new B.eO("REFUNDED")
A.bg4=new B.eO("REFUND_NO_RETURN_OFFERED")
A.bg5=new B.eO("RETURN_APPROVED")
A.bg6=new B.eO("RETURN_RECEIVED")
A.bg7=new B.eO("RETURN_REJECTED")
A.bg8=new B.eO("RETURN_REQUESTED")
A.bg9=new B.eO("RETURN_SHIPPED_BY_BUYER")
A.bga=new B.eO("RETURN_SHIPPING_DELAYED")
A.bgb=new B.eO("SHIPPED")
A.bgc=new B.eO("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bgd=new B.eO("unknown_default_open_api")})();(function staticFields(){$.a91=null})()};
(a=>{a["Kt2dHe6XNMOS+7AZvWmf8CEmVFs="]=a.current})($__dart_deferred_initializers__);