((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
eed(d,e,f,g,h,i,j,k,l,m,n){return new B.aMt(h,k,l,e,g,d,j,n,i,m,f)},
aMt:function aMt(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bR5:function bR5(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[204],B)
A=c[764]
B.aMt.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aMt)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.V.ar(e.Q,w.Q))x=e.as==w.as}else x=!0
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
B.bR5.prototype={
D(d){switch(d){case"PENDING_SHIPMENT":return A.brp
case"SHIPPED":return A.brA
case"DELIVERY_ASSIGNING":return A.brd
case"DELIVERY_ASSIGNED":return A.brc
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.brh
case"DELIVERY_PICKUP_DELAYED":return A.brk
case"DELIVERY_PICKED_UP":return A.brj
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.brg
case"DELIVERY_DELIVERY_DELAYED":return A.brf
case"DELIVERY_FAILED":return A.bri
case"DELIVERY_RETURNING":return A.brl
case"DELIVERY_COMPLETED":return A.bre
case"PURCHASE_IN_PROGRESS":return A.brr
case"PROOF_SUBMITTED":return A.brq
case"BUYER_CONFIRMED":return A.br7
case"RETURN_REQUESTED":return A.brx
case"RETURN_REJECTED":return A.brw
case"RETURN_APPROVED":return A.bru
case"RETURN_SHIPPED_BY_BUYER":return A.bry
case"RETURN_SHIPPING_DELAYED":return A.brz
case"RETURN_RECEIVED":return A.brv
case"REFUND_NO_RETURN_OFFERED":return A.brt
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brB
case"DISPUTE_OPENED":return A.brm
case"DISPUTE_RESPONDED":return A.bro
case"CANCELLED_BY_BUYER":return A.br8
case"CANCELLED_BY_SELLER":return A.bra
case"CANCELLED_BY_PLATFORM":return A.br9
case"REFUNDED":return A.brs
case"DISPUTE_RESOLVED":return A.brn
case"COMPLETED_FINAL":return A.brb
case"unknown_default_open_api":return A.brC}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aMt,B.fo,B.bR5])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.Cd=new B.bR5()
A.baY=x([],D.C("v<fo>"))
A.br7=new B.fo("BUYER_CONFIRMED")
A.br8=new B.fo("CANCELLED_BY_BUYER")
A.br9=new B.fo("CANCELLED_BY_PLATFORM")
A.bra=new B.fo("CANCELLED_BY_SELLER")
A.brb=new B.fo("COMPLETED_FINAL")
A.brc=new B.fo("DELIVERY_ASSIGNED")
A.brd=new B.fo("DELIVERY_ASSIGNING")
A.bre=new B.fo("DELIVERY_COMPLETED")
A.brf=new B.fo("DELIVERY_DELIVERY_DELAYED")
A.brg=new B.fo("DELIVERY_EN_ROUTE_TO_BUYER")
A.brh=new B.fo("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bri=new B.fo("DELIVERY_FAILED")
A.brj=new B.fo("DELIVERY_PICKED_UP")
A.brk=new B.fo("DELIVERY_PICKUP_DELAYED")
A.brl=new B.fo("DELIVERY_RETURNING")
A.brm=new B.fo("DISPUTE_OPENED")
A.brn=new B.fo("DISPUTE_RESOLVED")
A.bro=new B.fo("DISPUTE_RESPONDED")
A.brp=new B.fo("PENDING_SHIPMENT")
A.brq=new B.fo("PROOF_SUBMITTED")
A.brr=new B.fo("PURCHASE_IN_PROGRESS")
A.brs=new B.fo("REFUNDED")
A.brt=new B.fo("REFUND_NO_RETURN_OFFERED")
A.bru=new B.fo("RETURN_APPROVED")
A.brv=new B.fo("RETURN_RECEIVED")
A.brw=new B.fo("RETURN_REJECTED")
A.brx=new B.fo("RETURN_REQUESTED")
A.bry=new B.fo("RETURN_SHIPPED_BY_BUYER")
A.brz=new B.fo("RETURN_SHIPPING_DELAYED")
A.brA=new B.fo("SHIPPED")
A.brB=new B.fo("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brC=new B.fo("unknown_default_open_api")})();(function staticFields(){$.aeW=null})()};
(a=>{a["bowh+F9k1Ot/nTokbWo3IISucMQ="]=a.current})($__dart_deferred_initializers__);