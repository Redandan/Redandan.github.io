((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
ee4(d,e,f,g,h,i,j,k,l,m,n){return new B.aMq(h,k,l,e,g,d,j,n,i,m,f)},
aMq:function aMq(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fo:function fo(d){this.a=d},
bR2:function bR2(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[204],B)
A=c[764]
B.aMq.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aMq)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.W.aq(e.Q,w.Q))x=e.as==w.as}else x=!0
return x},
gj(d){var x,w,v,u,t,s,r=this,q=C.h.gj(r.a),p=C.h.gj(r.b),o=r.c
o=o==null?0:D.Y(o.a,o.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
x=r.d
x=x==null?0:D.Y(x.a,x.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
w=r.w
w=w==null?0:C.b.gj(w)
v=r.x
v=v==null?0:C.h.gj(v)
u=r.y
u=u==null?0:C.h.gj(u)
t=D.a8(r.Q)
s=r.as
s=s==null?0:D.a8(s)
return q+p+o+x+w+v+u+t+s},
l(d){var x=this
return"OrderSearchParam[page="+x.a+", size="+x.b+", startDate="+D.b(x.c)+", endDate="+D.b(x.d)+", keyword=null, sortBy=null, sortDirection=null, orderId="+D.b(x.w)+", buyerId="+D.b(x.x)+", sellerId="+D.b(x.y)+", productId=null, status="+D.b(x.Q)+", searchDateType="+D.b(x.as)+", startTime="+D.b(x.at)+", endTime="+D.b(x.ax)+"]"},
A(){var x,w=this,v=null,u="startDate",t="sellerId",s="searchDateType",r=D.q(y.g,y.b)
r.h(0,"page",w.a)
r.h(0,"size",w.b)
x=w.c
if(x!=null)r.h(0,u,x.a3().a_())
else r.h(0,u,v)
x=w.d
if(x!=null)r.h(0,"endDate",x.a3().a_())
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
B.fo.prototype={
l(d){return this.a},
A(){return this.a}}
B.bR2.prototype={
D(d){switch(d){case"PENDING_SHIPMENT":return A.brw
case"SHIPPED":return A.brH
case"DELIVERY_ASSIGNING":return A.brk
case"DELIVERY_ASSIGNED":return A.brj
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bro
case"DELIVERY_PICKUP_DELAYED":return A.brr
case"DELIVERY_PICKED_UP":return A.brq
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.brn
case"DELIVERY_DELIVERY_DELAYED":return A.brm
case"DELIVERY_FAILED":return A.brp
case"DELIVERY_RETURNING":return A.brs
case"DELIVERY_COMPLETED":return A.brl
case"PURCHASE_IN_PROGRESS":return A.bry
case"PROOF_SUBMITTED":return A.brx
case"BUYER_CONFIRMED":return A.bre
case"RETURN_REQUESTED":return A.brE
case"RETURN_REJECTED":return A.brD
case"RETURN_APPROVED":return A.brB
case"RETURN_SHIPPED_BY_BUYER":return A.brF
case"RETURN_SHIPPING_DELAYED":return A.brG
case"RETURN_RECEIVED":return A.brC
case"REFUND_NO_RETURN_OFFERED":return A.brA
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brI
case"DISPUTE_OPENED":return A.brt
case"DISPUTE_RESPONDED":return A.brv
case"CANCELLED_BY_BUYER":return A.brf
case"CANCELLED_BY_SELLER":return A.brh
case"CANCELLED_BY_PLATFORM":return A.brg
case"REFUNDED":return A.brz
case"DISPUTE_RESOLVED":return A.bru
case"COMPLETED_FINAL":return A.bri
case"unknown_default_open_api":return A.brJ}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aMq,B.fo,B.bR2])})()
var y={g:D.B("n"),b:D.B("@")};(function constants(){var x=a.makeConstList
A.Cc=new B.bR2()
A.bb6=x([],D.B("v<fo>"))
A.bre=new B.fo("BUYER_CONFIRMED")
A.brf=new B.fo("CANCELLED_BY_BUYER")
A.brg=new B.fo("CANCELLED_BY_PLATFORM")
A.brh=new B.fo("CANCELLED_BY_SELLER")
A.bri=new B.fo("COMPLETED_FINAL")
A.brj=new B.fo("DELIVERY_ASSIGNED")
A.brk=new B.fo("DELIVERY_ASSIGNING")
A.brl=new B.fo("DELIVERY_COMPLETED")
A.brm=new B.fo("DELIVERY_DELIVERY_DELAYED")
A.brn=new B.fo("DELIVERY_EN_ROUTE_TO_BUYER")
A.bro=new B.fo("DELIVERY_EN_ROUTE_TO_PICKUP")
A.brp=new B.fo("DELIVERY_FAILED")
A.brq=new B.fo("DELIVERY_PICKED_UP")
A.brr=new B.fo("DELIVERY_PICKUP_DELAYED")
A.brs=new B.fo("DELIVERY_RETURNING")
A.brt=new B.fo("DISPUTE_OPENED")
A.bru=new B.fo("DISPUTE_RESOLVED")
A.brv=new B.fo("DISPUTE_RESPONDED")
A.brw=new B.fo("PENDING_SHIPMENT")
A.brx=new B.fo("PROOF_SUBMITTED")
A.bry=new B.fo("PURCHASE_IN_PROGRESS")
A.brz=new B.fo("REFUNDED")
A.brA=new B.fo("REFUND_NO_RETURN_OFFERED")
A.brB=new B.fo("RETURN_APPROVED")
A.brC=new B.fo("RETURN_RECEIVED")
A.brD=new B.fo("RETURN_REJECTED")
A.brE=new B.fo("RETURN_REQUESTED")
A.brF=new B.fo("RETURN_SHIPPED_BY_BUYER")
A.brG=new B.fo("RETURN_SHIPPING_DELAYED")
A.brH=new B.fo("SHIPPED")
A.brI=new B.fo("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brJ=new B.fo("unknown_default_open_api")})();(function staticFields(){$.aeU=null})()};
(a=>{a["6jHQcSubKyYs3l4zvGz+maYaIxc="]=a.current})($__dart_deferred_initializers__);