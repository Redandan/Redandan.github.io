((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,B,C={a0O:function a0O(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r},fh:function fh(d){this.a=d},bRq:function bRq(){},E0:function E0(d){this.a=d}},A
J=c[1]
D=c[0]
B=c[2]
C=a.updateHolder(c[268],C)
A=c[766]
C.a0O.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof C.a0O&&e.a==w.a&&e.b==w.b&&J.p(e.c,w.c)&&J.p(e.d,w.d)&&e.e==w.e&&e.f==w.f&&e.r==w.r&&e.w==w.w&&e.x==w.x&&e.y==w.y&&e.z==w.z&&B.U.ar(e.Q,w.Q)&&e.as==w.as&&e.at==w.at&&e.ax==w.ax
else x=!0
return x},
gj(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i=i==null?0:B.h.gj(i)
x=j.b
x=x==null?0:B.h.gj(x)
w=j.c
w=w==null?0:D.X(w.a,w.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
v=j.d
v=v==null?0:D.X(v.a,v.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
u=j.e
u=u==null?0:B.b.gj(u)
t=j.f
t=t==null?0:B.b.gj(t)
s=j.r
s=s==null?0:B.b.gj(s)
r=j.w
r=r==null?0:B.b.gj(r)
q=j.x
q=q==null?0:B.h.gj(q)
p=j.y
p=p==null?0:B.h.gj(p)
o=j.z
o=o==null?0:B.h.gj(o)
n=D.a7(j.Q)
m=j.as
m=m==null?0:D.a7(m)
l=j.at
l=l==null?0:B.b.gj(l)
k=j.ax
k=k==null?0:B.b.gj(k)
return i+x+w+v+u+t+s+r+q+p+o+n+m+l+k},
l(d){var x=this
return"OrderSearchParam[page="+D.b(x.a)+", size="+D.b(x.b)+", startDate="+D.b(x.c)+", endDate="+D.b(x.d)+", keyword="+D.b(x.e)+", sortBy="+D.b(x.f)+", sortDirection="+D.b(x.r)+", orderId="+D.b(x.w)+", buyerId="+D.b(x.x)+", sellerId="+D.b(x.y)+", productId="+D.b(x.z)+", status="+D.b(x.Q)+", searchDateType="+D.b(x.as)+", startTime="+D.b(x.at)+", endTime="+D.b(x.ax)+"]"},
A(){var x=this,w=null,v="startDate",u="sortDirection",t="sellerId",s="productId",r="searchDateType",q="startTime",p=D.q(y.g,y.b),o=x.a
if(o!=null)p.h(0,"page",o)
else p.h(0,"page",w)
o=x.b
if(o!=null)p.h(0,"size",o)
else p.h(0,"size",w)
o=x.c
if(o!=null)p.h(0,v,o.a3().a_())
else p.h(0,v,w)
o=x.d
if(o!=null)p.h(0,"endDate",o.a3().a_())
else p.h(0,"endDate",w)
o=x.e
if(o!=null)p.h(0,"keyword",o)
else p.h(0,"keyword",w)
o=x.f
if(o!=null)p.h(0,"sortBy",o)
else p.h(0,"sortBy",w)
o=x.r
if(o!=null)p.h(0,u,o)
else p.h(0,u,w)
o=x.w
if(o!=null)p.h(0,"orderId",o)
else p.h(0,"orderId",w)
o=x.x
if(o!=null)p.h(0,"buyerId",o)
else p.h(0,"buyerId",w)
o=x.y
if(o!=null)p.h(0,t,o)
else p.h(0,t,w)
o=x.z
if(o!=null)p.h(0,s,o)
else p.h(0,s,w)
p.h(0,"status",x.Q)
o=x.as
if(o!=null)p.h(0,r,o)
else p.h(0,r,w)
o=x.at
if(o!=null)p.h(0,q,o)
else p.h(0,q,w)
o=x.ax
if(o!=null)p.h(0,"endTime",o)
else p.h(0,"endTime",w)
return p}}
C.fh.prototype={
l(d){return this.a},
A(){return this.a}}
C.bRq.prototype={
D(d){if(d!=null)switch(d){case"PENDING_SHIPMENT":return A.bry
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
C.E0.prototype={
l(d){return this.a},
A(){return this.a}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[C.a0O,C.fh,C.bRq,C.E0])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.wc=new C.bRq()
A.bb4=x([],D.C("v<fh>"))
A.a6k=new C.E0("CREATED_TIME")
A.HA=new C.E0("UPDATED_TIME")
A.brg=new C.fh("BUYER_CONFIRMED")
A.brh=new C.fh("CANCELLED_BY_BUYER")
A.bri=new C.fh("CANCELLED_BY_PLATFORM")
A.brj=new C.fh("CANCELLED_BY_SELLER")
A.brk=new C.fh("COMPLETED_FINAL")
A.brl=new C.fh("DELIVERY_ASSIGNED")
A.brm=new C.fh("DELIVERY_ASSIGNING")
A.brn=new C.fh("DELIVERY_COMPLETED")
A.bro=new C.fh("DELIVERY_DELIVERY_DELAYED")
A.brp=new C.fh("DELIVERY_EN_ROUTE_TO_BUYER")
A.brq=new C.fh("DELIVERY_EN_ROUTE_TO_PICKUP")
A.brr=new C.fh("DELIVERY_FAILED")
A.brs=new C.fh("DELIVERY_PICKED_UP")
A.brt=new C.fh("DELIVERY_PICKUP_DELAYED")
A.bru=new C.fh("DELIVERY_RETURNING")
A.brv=new C.fh("DISPUTE_OPENED")
A.brw=new C.fh("DISPUTE_RESOLVED")
A.brx=new C.fh("DISPUTE_RESPONDED")
A.bry=new C.fh("PENDING_SHIPMENT")
A.brz=new C.fh("PROOF_SUBMITTED")
A.brA=new C.fh("PURCHASE_IN_PROGRESS")
A.brB=new C.fh("REFUNDED")
A.brC=new C.fh("REFUND_NO_RETURN_OFFERED")
A.brD=new C.fh("RETURN_APPROVED")
A.brE=new C.fh("RETURN_RECEIVED")
A.brF=new C.fh("RETURN_REJECTED")
A.brG=new C.fh("RETURN_REQUESTED")
A.brH=new C.fh("RETURN_SHIPPED_BY_BUYER")
A.brI=new C.fh("RETURN_SHIPPING_DELAYED")
A.brJ=new C.fh("SHIPPED")
A.brK=new C.fh("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brL=new C.fh("unknown_default_open_api")})();(function staticFields(){$.So=null})()};
(a=>{a["ze9pRlB4TJAK4GgeinBVXmkloFw="]=a.current})($__dart_deferred_initializers__);