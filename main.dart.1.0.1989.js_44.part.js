((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
dAF(d,e,f,g,h,i,j,k,l,m,n){return new B.aAp(h,k,l,e,g,d,j,n,i,m,f)},
aAp:function aAp(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bxE:function bxE(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[195],B)
A=c[747]
B.aAp.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aAp)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.R.ai(e.Q,w.Q))x=e.as==w.as}else x=!0
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
B.bxE.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bgh
case"SHIPPED":return A.bgs
case"DELIVERY_ASSIGNING":return A.bg5
case"DELIVERY_ASSIGNED":return A.bg4
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bg9
case"DELIVERY_PICKUP_DELAYED":return A.bgc
case"DELIVERY_PICKED_UP":return A.bgb
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bg8
case"DELIVERY_DELIVERY_DELAYED":return A.bg7
case"DELIVERY_FAILED":return A.bga
case"DELIVERY_RETURNING":return A.bgd
case"DELIVERY_COMPLETED":return A.bg6
case"PURCHASE_IN_PROGRESS":return A.bgj
case"PROOF_SUBMITTED":return A.bgi
case"BUYER_CONFIRMED":return A.bg_
case"RETURN_REQUESTED":return A.bgp
case"RETURN_REJECTED":return A.bgo
case"RETURN_APPROVED":return A.bgm
case"RETURN_SHIPPED_BY_BUYER":return A.bgq
case"RETURN_SHIPPING_DELAYED":return A.bgr
case"RETURN_RECEIVED":return A.bgn
case"REFUND_NO_RETURN_OFFERED":return A.bgl
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bgt
case"DISPUTE_OPENED":return A.bge
case"DISPUTE_RESPONDED":return A.bgg
case"CANCELLED_BY_BUYER":return A.bg0
case"CANCELLED_BY_SELLER":return A.bg2
case"CANCELLED_BY_PLATFORM":return A.bg1
case"REFUNDED":return A.bgk
case"DISPUTE_RESOLVED":return A.bgf
case"COMPLETED_FINAL":return A.bg3
case"unknown_default_open_api":return A.bgu}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.G,[B.aAp,B.eQ,B.bxE])})()
var y={g:D.A("o"),b:D.A("@")};(function constants(){var x=a.makeConstList
A.A8=new B.bxE()
A.b1D=x([],D.A("w<eQ>"))
A.bg_=new B.eQ("BUYER_CONFIRMED")
A.bg0=new B.eQ("CANCELLED_BY_BUYER")
A.bg1=new B.eQ("CANCELLED_BY_PLATFORM")
A.bg2=new B.eQ("CANCELLED_BY_SELLER")
A.bg3=new B.eQ("COMPLETED_FINAL")
A.bg4=new B.eQ("DELIVERY_ASSIGNED")
A.bg5=new B.eQ("DELIVERY_ASSIGNING")
A.bg6=new B.eQ("DELIVERY_COMPLETED")
A.bg7=new B.eQ("DELIVERY_DELIVERY_DELAYED")
A.bg8=new B.eQ("DELIVERY_EN_ROUTE_TO_BUYER")
A.bg9=new B.eQ("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bga=new B.eQ("DELIVERY_FAILED")
A.bgb=new B.eQ("DELIVERY_PICKED_UP")
A.bgc=new B.eQ("DELIVERY_PICKUP_DELAYED")
A.bgd=new B.eQ("DELIVERY_RETURNING")
A.bge=new B.eQ("DISPUTE_OPENED")
A.bgf=new B.eQ("DISPUTE_RESOLVED")
A.bgg=new B.eQ("DISPUTE_RESPONDED")
A.bgh=new B.eQ("PENDING_SHIPMENT")
A.bgi=new B.eQ("PROOF_SUBMITTED")
A.bgj=new B.eQ("PURCHASE_IN_PROGRESS")
A.bgk=new B.eQ("REFUNDED")
A.bgl=new B.eQ("REFUND_NO_RETURN_OFFERED")
A.bgm=new B.eQ("RETURN_APPROVED")
A.bgn=new B.eQ("RETURN_RECEIVED")
A.bgo=new B.eQ("RETURN_REJECTED")
A.bgp=new B.eQ("RETURN_REQUESTED")
A.bgq=new B.eQ("RETURN_SHIPPED_BY_BUYER")
A.bgr=new B.eQ("RETURN_SHIPPING_DELAYED")
A.bgs=new B.eQ("SHIPPED")
A.bgt=new B.eQ("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bgu=new B.eQ("unknown_default_open_api")})();(function staticFields(){$.a99=null})()};
(a=>{a["aUPR8UZM/TaMreQ4OzVtXuJaiOA="]=a.current})($__dart_deferred_initializers__);