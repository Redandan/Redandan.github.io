((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
e7X(d,e,f,g,h,i,j,k,l,m,n){return new B.aJM(h,k,l,e,g,d,j,n,i,m,f)},
aJM:function aJM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fh:function fh(d){this.a=d},
bMW:function bMW(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[204],B)
A=c[767]
B.aJM.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aJM)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.V.ao(e.Q,w.Q))x=e.as==w.as}else x=!0
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
B.fh.prototype={
l(d){return this.a},
v(){return this.a}}
B.bMW.prototype={
C(d){switch(d){case"PENDING_SHIPMENT":return A.bmB
case"SHIPPED":return A.bmM
case"DELIVERY_ASSIGNING":return A.bmp
case"DELIVERY_ASSIGNED":return A.bmo
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bmt
case"DELIVERY_PICKUP_DELAYED":return A.bmw
case"DELIVERY_PICKED_UP":return A.bmv
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bms
case"DELIVERY_DELIVERY_DELAYED":return A.bmr
case"DELIVERY_FAILED":return A.bmu
case"DELIVERY_RETURNING":return A.bmx
case"DELIVERY_COMPLETED":return A.bmq
case"PURCHASE_IN_PROGRESS":return A.bmD
case"PROOF_SUBMITTED":return A.bmC
case"BUYER_CONFIRMED":return A.bmj
case"RETURN_REQUESTED":return A.bmJ
case"RETURN_REJECTED":return A.bmI
case"RETURN_APPROVED":return A.bmG
case"RETURN_SHIPPED_BY_BUYER":return A.bmK
case"RETURN_SHIPPING_DELAYED":return A.bmL
case"RETURN_RECEIVED":return A.bmH
case"REFUND_NO_RETURN_OFFERED":return A.bmF
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.bmN
case"DISPUTE_OPENED":return A.bmy
case"DISPUTE_RESPONDED":return A.bmA
case"CANCELLED_BY_BUYER":return A.bmk
case"CANCELLED_BY_SELLER":return A.bmm
case"CANCELLED_BY_PLATFORM":return A.bml
case"REFUNDED":return A.bmE
case"DISPUTE_RESOLVED":return A.bmz
case"COMPLETED_FINAL":return A.bmn
case"unknown_default_open_api":return A.bmO}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aJM,B.fh,B.bMW])})()
var y={g:D.F("n"),b:D.F("@")};(function constants(){var x=a.makeConstList
A.BN=new B.bMW()
A.b6p=x([],D.F("v<fh>"))
A.bmj=new B.fh("BUYER_CONFIRMED")
A.bmk=new B.fh("CANCELLED_BY_BUYER")
A.bml=new B.fh("CANCELLED_BY_PLATFORM")
A.bmm=new B.fh("CANCELLED_BY_SELLER")
A.bmn=new B.fh("COMPLETED_FINAL")
A.bmo=new B.fh("DELIVERY_ASSIGNED")
A.bmp=new B.fh("DELIVERY_ASSIGNING")
A.bmq=new B.fh("DELIVERY_COMPLETED")
A.bmr=new B.fh("DELIVERY_DELIVERY_DELAYED")
A.bms=new B.fh("DELIVERY_EN_ROUTE_TO_BUYER")
A.bmt=new B.fh("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bmu=new B.fh("DELIVERY_FAILED")
A.bmv=new B.fh("DELIVERY_PICKED_UP")
A.bmw=new B.fh("DELIVERY_PICKUP_DELAYED")
A.bmx=new B.fh("DELIVERY_RETURNING")
A.bmy=new B.fh("DISPUTE_OPENED")
A.bmz=new B.fh("DISPUTE_RESOLVED")
A.bmA=new B.fh("DISPUTE_RESPONDED")
A.bmB=new B.fh("PENDING_SHIPMENT")
A.bmC=new B.fh("PROOF_SUBMITTED")
A.bmD=new B.fh("PURCHASE_IN_PROGRESS")
A.bmE=new B.fh("REFUNDED")
A.bmF=new B.fh("REFUND_NO_RETURN_OFFERED")
A.bmG=new B.fh("RETURN_APPROVED")
A.bmH=new B.fh("RETURN_RECEIVED")
A.bmI=new B.fh("RETURN_REJECTED")
A.bmJ=new B.fh("RETURN_REQUESTED")
A.bmK=new B.fh("RETURN_SHIPPED_BY_BUYER")
A.bmL=new B.fh("RETURN_SHIPPING_DELAYED")
A.bmM=new B.fh("SHIPPED")
A.bmN=new B.fh("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.bmO=new B.fh("unknown_default_open_api")})();(function staticFields(){$.ad_=null})()};
(a=>{a["Db5WpSbzQ9550XT98bZLf/Eo9w8="]=a.current})($__dart_deferred_initializers__);