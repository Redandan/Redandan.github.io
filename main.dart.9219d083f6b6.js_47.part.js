((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
ee6(d,e,f,g,h,i,j,k,l,m,n){return new B.aMq(h,k,l,e,g,d,j,n,i,m,f)},
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
A=c[763]
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
D(d){switch(d){case"PENDING_SHIPMENT":return A.brx
case"SHIPPED":return A.brI
case"DELIVERY_ASSIGNING":return A.brl
case"DELIVERY_ASSIGNED":return A.brk
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.brp
case"DELIVERY_PICKUP_DELAYED":return A.brs
case"DELIVERY_PICKED_UP":return A.brr
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.bro
case"DELIVERY_DELIVERY_DELAYED":return A.brn
case"DELIVERY_FAILED":return A.brq
case"DELIVERY_RETURNING":return A.brt
case"DELIVERY_COMPLETED":return A.brm
case"PURCHASE_IN_PROGRESS":return A.brz
case"PROOF_SUBMITTED":return A.bry
case"BUYER_CONFIRMED":return A.brf
case"RETURN_REQUESTED":return A.brF
case"RETURN_REJECTED":return A.brE
case"RETURN_APPROVED":return A.brC
case"RETURN_SHIPPED_BY_BUYER":return A.brG
case"RETURN_SHIPPING_DELAYED":return A.brH
case"RETURN_RECEIVED":return A.brD
case"REFUND_NO_RETURN_OFFERED":return A.brB
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brJ
case"DISPUTE_OPENED":return A.bru
case"DISPUTE_RESPONDED":return A.brw
case"CANCELLED_BY_BUYER":return A.brg
case"CANCELLED_BY_SELLER":return A.bri
case"CANCELLED_BY_PLATFORM":return A.brh
case"REFUNDED":return A.brA
case"DISPUTE_RESOLVED":return A.brv
case"COMPLETED_FINAL":return A.brj
case"unknown_default_open_api":return A.brK}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aMq,B.fo,B.bR2])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.Ce=new B.bR2()
A.bb7=x([],D.C("v<fo>"))
A.brf=new B.fo("BUYER_CONFIRMED")
A.brg=new B.fo("CANCELLED_BY_BUYER")
A.brh=new B.fo("CANCELLED_BY_PLATFORM")
A.bri=new B.fo("CANCELLED_BY_SELLER")
A.brj=new B.fo("COMPLETED_FINAL")
A.brk=new B.fo("DELIVERY_ASSIGNED")
A.brl=new B.fo("DELIVERY_ASSIGNING")
A.brm=new B.fo("DELIVERY_COMPLETED")
A.brn=new B.fo("DELIVERY_DELIVERY_DELAYED")
A.bro=new B.fo("DELIVERY_EN_ROUTE_TO_BUYER")
A.brp=new B.fo("DELIVERY_EN_ROUTE_TO_PICKUP")
A.brq=new B.fo("DELIVERY_FAILED")
A.brr=new B.fo("DELIVERY_PICKED_UP")
A.brs=new B.fo("DELIVERY_PICKUP_DELAYED")
A.brt=new B.fo("DELIVERY_RETURNING")
A.bru=new B.fo("DISPUTE_OPENED")
A.brv=new B.fo("DISPUTE_RESOLVED")
A.brw=new B.fo("DISPUTE_RESPONDED")
A.brx=new B.fo("PENDING_SHIPMENT")
A.bry=new B.fo("PROOF_SUBMITTED")
A.brz=new B.fo("PURCHASE_IN_PROGRESS")
A.brA=new B.fo("REFUNDED")
A.brB=new B.fo("REFUND_NO_RETURN_OFFERED")
A.brC=new B.fo("RETURN_APPROVED")
A.brD=new B.fo("RETURN_RECEIVED")
A.brE=new B.fo("RETURN_REJECTED")
A.brF=new B.fo("RETURN_REQUESTED")
A.brG=new B.fo("RETURN_SHIPPED_BY_BUYER")
A.brH=new B.fo("RETURN_SHIPPING_DELAYED")
A.brI=new B.fo("SHIPPED")
A.brJ=new B.fo("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brK=new B.fo("unknown_default_open_api")})();(function staticFields(){$.aeT=null})()};
(a=>{a["r+ASxB0t//nJOk14CDLH4CNA3CA="]=a.current})($__dart_deferred_initializers__);