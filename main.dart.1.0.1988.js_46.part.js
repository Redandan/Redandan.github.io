((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
dp2(d,e,f,g,h,i,j,k,l,m,n){return new B.aAl(h,k,l,e,g,d,j,n,i,m,f)},
aAl:function aAl(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bxz:function bxz(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[195],B)
A=c[760]
B.aAl.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aAl)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.R.ai(e.Q,w.Q))x=e.as==w.as}else x=!0
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
if(x!=null)r.h(0,u,x.a0().X())
else r.h(0,u,v)
x=w.d
if(x!=null)r.h(0,"endDate",x.a0().X())
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
B.bxz.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bgq
case"SHIPPED":return A.bgB
case"DELIVERY_ASSIGNING":return A.bge
case"DELIVERY_ASSIGNED":return A.bgd
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bgi
case"DELIVERY_PICKUP_DELAYED":return A.bgl
case"DELIVERY_PICKED_UP":return A.bgk
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bgh
case"DELIVERY_DELIVERY_DELAYED":return A.bgg
case"DELIVERY_FAILED":return A.bgj
case"DELIVERY_RETURNING":return A.bgm
case"DELIVERY_COMPLETED":return A.bgf
case"PURCHASE_IN_PROGRESS":return A.bgs
case"PROOF_SUBMITTED":return A.bgr
case"BUYER_CONFIRMED":return A.bg8
case"RETURN_REQUESTED":return A.bgy
case"RETURN_REJECTED":return A.bgx
case"RETURN_APPROVED":return A.bgv
case"RETURN_SHIPPED_BY_BUYER":return A.bgz
case"RETURN_SHIPPING_DELAYED":return A.bgA
case"RETURN_RECEIVED":return A.bgw
case"REFUND_NO_RETURN_OFFERED":return A.bgu
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bgC
case"DISPUTE_OPENED":return A.bgn
case"DISPUTE_RESPONDED":return A.bgp
case"CANCELLED_BY_BUYER":return A.bg9
case"CANCELLED_BY_SELLER":return A.bgb
case"CANCELLED_BY_PLATFORM":return A.bga
case"REFUNDED":return A.bgt
case"DISPUTE_RESOLVED":return A.bgo
case"COMPLETED_FINAL":return A.bgc
case"unknown_default_open_api":return A.bgD}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.G,[B.aAl,B.eQ,B.bxz])})()
var y={g:D.A("o"),b:D.A("@")};(function constants(){var x=a.makeConstList
A.A7=new B.bxz()
A.b1L=x([],D.A("v<eQ>"))
A.bg8=new B.eQ("BUYER_CONFIRMED")
A.bg9=new B.eQ("CANCELLED_BY_BUYER")
A.bga=new B.eQ("CANCELLED_BY_PLATFORM")
A.bgb=new B.eQ("CANCELLED_BY_SELLER")
A.bgc=new B.eQ("COMPLETED_FINAL")
A.bgd=new B.eQ("DELIVERY_ASSIGNED")
A.bge=new B.eQ("DELIVERY_ASSIGNING")
A.bgf=new B.eQ("DELIVERY_COMPLETED")
A.bgg=new B.eQ("DELIVERY_DELIVERY_DELAYED")
A.bgh=new B.eQ("DELIVERY_EN_ROUTE_TO_BUYER")
A.bgi=new B.eQ("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bgj=new B.eQ("DELIVERY_FAILED")
A.bgk=new B.eQ("DELIVERY_PICKED_UP")
A.bgl=new B.eQ("DELIVERY_PICKUP_DELAYED")
A.bgm=new B.eQ("DELIVERY_RETURNING")
A.bgn=new B.eQ("DISPUTE_OPENED")
A.bgo=new B.eQ("DISPUTE_RESOLVED")
A.bgp=new B.eQ("DISPUTE_RESPONDED")
A.bgq=new B.eQ("PENDING_SHIPMENT")
A.bgr=new B.eQ("PROOF_SUBMITTED")
A.bgs=new B.eQ("PURCHASE_IN_PROGRESS")
A.bgt=new B.eQ("REFUNDED")
A.bgu=new B.eQ("REFUND_NO_RETURN_OFFERED")
A.bgv=new B.eQ("RETURN_APPROVED")
A.bgw=new B.eQ("RETURN_RECEIVED")
A.bgx=new B.eQ("RETURN_REJECTED")
A.bgy=new B.eQ("RETURN_REQUESTED")
A.bgz=new B.eQ("RETURN_SHIPPED_BY_BUYER")
A.bgA=new B.eQ("RETURN_SHIPPING_DELAYED")
A.bgB=new B.eQ("SHIPPED")
A.bgC=new B.eQ("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bgD=new B.eQ("unknown_default_open_api")})();(function staticFields(){$.a9a=null})()};
(a=>{a["OOwTwYJ9hruankBCiOcVDZ6Zk0Q="]=a.current})($__dart_deferred_initializers__);