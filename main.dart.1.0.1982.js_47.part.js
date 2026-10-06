((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
dp_(d,e,f,g,h,i,j,k,l,m,n){return new B.aAk(h,k,l,e,g,d,j,n,i,m,f)},
aAk:function aAk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eP:function eP(d){this.a=d},
bxw:function bxw(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[195],B)
A=c[762]
B.aAk.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aAk)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.R.ai(e.Q,w.Q))x=e.as==w.as}else x=!0
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
if(x!=null)r.h(0,u,x.a0().W())
else r.h(0,u,v)
x=w.d
if(x!=null)r.h(0,"endDate",x.a0().W())
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
B.eP.prototype={
l(d){return this.a},
B(){return this.a}}
B.bxw.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bgg
case"SHIPPED":return A.bgr
case"DELIVERY_ASSIGNING":return A.bg4
case"DELIVERY_ASSIGNED":return A.bg3
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bg8
case"DELIVERY_PICKUP_DELAYED":return A.bgb
case"DELIVERY_PICKED_UP":return A.bga
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bg7
case"DELIVERY_DELIVERY_DELAYED":return A.bg6
case"DELIVERY_FAILED":return A.bg9
case"DELIVERY_RETURNING":return A.bgc
case"DELIVERY_COMPLETED":return A.bg5
case"PURCHASE_IN_PROGRESS":return A.bgi
case"PROOF_SUBMITTED":return A.bgh
case"BUYER_CONFIRMED":return A.bfZ
case"RETURN_REQUESTED":return A.bgo
case"RETURN_REJECTED":return A.bgn
case"RETURN_APPROVED":return A.bgl
case"RETURN_SHIPPED_BY_BUYER":return A.bgp
case"RETURN_SHIPPING_DELAYED":return A.bgq
case"RETURN_RECEIVED":return A.bgm
case"REFUND_NO_RETURN_OFFERED":return A.bgk
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bgs
case"DISPUTE_OPENED":return A.bgd
case"DISPUTE_RESPONDED":return A.bgf
case"CANCELLED_BY_BUYER":return A.bg_
case"CANCELLED_BY_SELLER":return A.bg1
case"CANCELLED_BY_PLATFORM":return A.bg0
case"REFUNDED":return A.bgj
case"DISPUTE_RESOLVED":return A.bge
case"COMPLETED_FINAL":return A.bg2
case"unknown_default_open_api":return A.bgt}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.G,[B.aAk,B.eP,B.bxw])})()
var y={g:D.A("o"),b:D.A("@")};(function constants(){var x=a.makeConstList
A.A6=new B.bxw()
A.b1B=x([],D.A("v<eP>"))
A.bfZ=new B.eP("BUYER_CONFIRMED")
A.bg_=new B.eP("CANCELLED_BY_BUYER")
A.bg0=new B.eP("CANCELLED_BY_PLATFORM")
A.bg1=new B.eP("CANCELLED_BY_SELLER")
A.bg2=new B.eP("COMPLETED_FINAL")
A.bg3=new B.eP("DELIVERY_ASSIGNED")
A.bg4=new B.eP("DELIVERY_ASSIGNING")
A.bg5=new B.eP("DELIVERY_COMPLETED")
A.bg6=new B.eP("DELIVERY_DELIVERY_DELAYED")
A.bg7=new B.eP("DELIVERY_EN_ROUTE_TO_BUYER")
A.bg8=new B.eP("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bg9=new B.eP("DELIVERY_FAILED")
A.bga=new B.eP("DELIVERY_PICKED_UP")
A.bgb=new B.eP("DELIVERY_PICKUP_DELAYED")
A.bgc=new B.eP("DELIVERY_RETURNING")
A.bgd=new B.eP("DISPUTE_OPENED")
A.bge=new B.eP("DISPUTE_RESOLVED")
A.bgf=new B.eP("DISPUTE_RESPONDED")
A.bgg=new B.eP("PENDING_SHIPMENT")
A.bgh=new B.eP("PROOF_SUBMITTED")
A.bgi=new B.eP("PURCHASE_IN_PROGRESS")
A.bgj=new B.eP("REFUNDED")
A.bgk=new B.eP("REFUND_NO_RETURN_OFFERED")
A.bgl=new B.eP("RETURN_APPROVED")
A.bgm=new B.eP("RETURN_RECEIVED")
A.bgn=new B.eP("RETURN_REJECTED")
A.bgo=new B.eP("RETURN_REQUESTED")
A.bgp=new B.eP("RETURN_SHIPPED_BY_BUYER")
A.bgq=new B.eP("RETURN_SHIPPING_DELAYED")
A.bgr=new B.eP("SHIPPED")
A.bgs=new B.eP("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bgt=new B.eP("unknown_default_open_api")})();(function staticFields(){$.a9b=null})()};
(a=>{a["/oS1c5ssjVGmZjkgkUxcSxwJIOU="]=a.current})($__dart_deferred_initializers__);