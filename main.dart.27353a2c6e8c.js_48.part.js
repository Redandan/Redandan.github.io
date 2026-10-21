((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
eeX(d,e,f,g,h,i,j,k,l,m,n){return new B.aMA(h,k,l,e,g,d,j,n,i,m,f)},
aMA:function aMA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bRg:function bRg(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[203],B)
A=c[764]
B.aMA.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aMA)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.U.ar(e.Q,w.Q))x=e.as==w.as}else x=!0
return x},
gj(d){var x,w,v,u,t,s,r=this,q=C.h.gj(r.a),p=C.h.gj(r.b),o=r.c
o=o==null?0:D.X(o.a,o.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
x=r.d
x=x==null?0:D.X(x.a,x.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
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
B.bRg.prototype={
D(d){switch(d){case"PENDING_SHIPMENT":return A.brq
case"SHIPPED":return A.brB
case"DELIVERY_ASSIGNING":return A.bre
case"DELIVERY_ASSIGNED":return A.brd
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.bri
case"DELIVERY_PICKUP_DELAYED":return A.brl
case"DELIVERY_PICKED_UP":return A.brk
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.brh
case"DELIVERY_DELIVERY_DELAYED":return A.brg
case"DELIVERY_FAILED":return A.brj
case"DELIVERY_RETURNING":return A.brm
case"DELIVERY_COMPLETED":return A.brf
case"PURCHASE_IN_PROGRESS":return A.brs
case"PROOF_SUBMITTED":return A.brr
case"BUYER_CONFIRMED":return A.br8
case"RETURN_REQUESTED":return A.bry
case"RETURN_REJECTED":return A.brx
case"RETURN_APPROVED":return A.brv
case"RETURN_SHIPPED_BY_BUYER":return A.brz
case"RETURN_SHIPPING_DELAYED":return A.brA
case"RETURN_RECEIVED":return A.brw
case"REFUND_NO_RETURN_OFFERED":return A.bru
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brC
case"DISPUTE_OPENED":return A.brn
case"DISPUTE_RESPONDED":return A.brp
case"CANCELLED_BY_BUYER":return A.br9
case"CANCELLED_BY_SELLER":return A.brb
case"CANCELLED_BY_PLATFORM":return A.bra
case"REFUNDED":return A.brt
case"DISPUTE_RESOLVED":return A.bro
case"COMPLETED_FINAL":return A.brc
case"unknown_default_open_api":return A.brD}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aMA,B.fo,B.bRg])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.Ce=new B.bRg()
A.baZ=x([],D.C("v<fo>"))
A.br8=new B.fo("BUYER_CONFIRMED")
A.br9=new B.fo("CANCELLED_BY_BUYER")
A.bra=new B.fo("CANCELLED_BY_PLATFORM")
A.brb=new B.fo("CANCELLED_BY_SELLER")
A.brc=new B.fo("COMPLETED_FINAL")
A.brd=new B.fo("DELIVERY_ASSIGNED")
A.bre=new B.fo("DELIVERY_ASSIGNING")
A.brf=new B.fo("DELIVERY_COMPLETED")
A.brg=new B.fo("DELIVERY_DELIVERY_DELAYED")
A.brh=new B.fo("DELIVERY_EN_ROUTE_TO_BUYER")
A.bri=new B.fo("DELIVERY_EN_ROUTE_TO_PICKUP")
A.brj=new B.fo("DELIVERY_FAILED")
A.brk=new B.fo("DELIVERY_PICKED_UP")
A.brl=new B.fo("DELIVERY_PICKUP_DELAYED")
A.brm=new B.fo("DELIVERY_RETURNING")
A.brn=new B.fo("DISPUTE_OPENED")
A.bro=new B.fo("DISPUTE_RESOLVED")
A.brp=new B.fo("DISPUTE_RESPONDED")
A.brq=new B.fo("PENDING_SHIPMENT")
A.brr=new B.fo("PROOF_SUBMITTED")
A.brs=new B.fo("PURCHASE_IN_PROGRESS")
A.brt=new B.fo("REFUNDED")
A.bru=new B.fo("REFUND_NO_RETURN_OFFERED")
A.brv=new B.fo("RETURN_APPROVED")
A.brw=new B.fo("RETURN_RECEIVED")
A.brx=new B.fo("RETURN_REJECTED")
A.bry=new B.fo("RETURN_REQUESTED")
A.brz=new B.fo("RETURN_SHIPPED_BY_BUYER")
A.brA=new B.fo("RETURN_SHIPPING_DELAYED")
A.brB=new B.fo("SHIPPED")
A.brC=new B.fo("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brD=new B.fo("unknown_default_open_api")})();(function staticFields(){$.af1=null})()};
(a=>{a["WCPYEFvOVrOOiTMtmfHKTzCw3DA="]=a.current})($__dart_deferred_initializers__);