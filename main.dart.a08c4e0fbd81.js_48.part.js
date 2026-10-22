((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,C,B={
efr(d,e,f,g,h,i,j,k,l,m,n){return new B.aMI(h,k,l,e,g,d,j,n,i,m,f)},
aMI:function aMI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fq:function fq(d){this.a=d},
bRp:function bRp(){}},A
J=c[1]
D=c[0]
C=c[2]
B=a.updateHolder(c[205],B)
A=c[766]
B.aMI.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aMI)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.w==w.w)if(e.x==w.x)if(e.y==w.y)if(C.U.ar(e.Q,w.Q))x=e.as==w.as}else x=!0
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
B.fq.prototype={
l(d){return this.a},
A(){return this.a}}
B.bRp.prototype={
D(d){switch(d){case"PENDING_SHIPMENT":return A.bry
case"SHIPPED":return A.brJ
case"DELIVERY_ASSIGNING":return A.brm
case"DELIVERY_ASSIGNED":return A.brl
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.brq
case"DELIVERY_PICKUP_DELAYED":return A.brt
case"DELIVERY_PICKED_UP":return A.brs
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.brp
case"DELIVERY_DELIVERY_DELAYED":return A.bro
case"DELIVERY_FAILED":return A.brr
case"DELIVERY_RETURNING":return A.bru
case"DELIVERY_COMPLETED":return A.brn
case"PURCHASE_IN_PROGRESS":return A.brA
case"PROOF_SUBMITTED":return A.brz
case"BUYER_CONFIRMED":return A.brg
case"RETURN_REQUESTED":return A.brG
case"RETURN_REJECTED":return A.brF
case"RETURN_APPROVED":return A.brD
case"RETURN_SHIPPED_BY_BUYER":return A.brH
case"RETURN_SHIPPING_DELAYED":return A.brI
case"RETURN_RECEIVED":return A.brE
case"REFUND_NO_RETURN_OFFERED":return A.brC
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brK
case"DISPUTE_OPENED":return A.brv
case"DISPUTE_RESPONDED":return A.brx
case"CANCELLED_BY_BUYER":return A.brh
case"CANCELLED_BY_SELLER":return A.brj
case"CANCELLED_BY_PLATFORM":return A.bri
case"REFUNDED":return A.brB
case"DISPUTE_RESOLVED":return A.brw
case"COMPLETED_FINAL":return A.brk
case"unknown_default_open_api":return A.brL}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[B.aMI,B.fq,B.bRp])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.Cg=new B.bRp()
A.bb4=x([],D.C("v<fq>"))
A.brg=new B.fq("BUYER_CONFIRMED")
A.brh=new B.fq("CANCELLED_BY_BUYER")
A.bri=new B.fq("CANCELLED_BY_PLATFORM")
A.brj=new B.fq("CANCELLED_BY_SELLER")
A.brk=new B.fq("COMPLETED_FINAL")
A.brl=new B.fq("DELIVERY_ASSIGNED")
A.brm=new B.fq("DELIVERY_ASSIGNING")
A.brn=new B.fq("DELIVERY_COMPLETED")
A.bro=new B.fq("DELIVERY_DELIVERY_DELAYED")
A.brp=new B.fq("DELIVERY_EN_ROUTE_TO_BUYER")
A.brq=new B.fq("DELIVERY_EN_ROUTE_TO_PICKUP")
A.brr=new B.fq("DELIVERY_FAILED")
A.brs=new B.fq("DELIVERY_PICKED_UP")
A.brt=new B.fq("DELIVERY_PICKUP_DELAYED")
A.bru=new B.fq("DELIVERY_RETURNING")
A.brv=new B.fq("DISPUTE_OPENED")
A.brw=new B.fq("DISPUTE_RESOLVED")
A.brx=new B.fq("DISPUTE_RESPONDED")
A.bry=new B.fq("PENDING_SHIPMENT")
A.brz=new B.fq("PROOF_SUBMITTED")
A.brA=new B.fq("PURCHASE_IN_PROGRESS")
A.brB=new B.fq("REFUNDED")
A.brC=new B.fq("REFUND_NO_RETURN_OFFERED")
A.brD=new B.fq("RETURN_APPROVED")
A.brE=new B.fq("RETURN_RECEIVED")
A.brF=new B.fq("RETURN_REJECTED")
A.brG=new B.fq("RETURN_REQUESTED")
A.brH=new B.fq("RETURN_SHIPPED_BY_BUYER")
A.brI=new B.fq("RETURN_SHIPPING_DELAYED")
A.brJ=new B.fq("SHIPPED")
A.brK=new B.fq("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brL=new B.fq("unknown_default_open_api")})();(function staticFields(){$.af4=null})()};
(a=>{a["Wtjenlgy4cXfDVzheEJED6EC9Os="]=a.current})($__dart_deferred_initializers__);