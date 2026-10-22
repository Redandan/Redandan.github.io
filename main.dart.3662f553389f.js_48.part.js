((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,B,C={a0Q:function a0Q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ax=r},fi:function fi(d){this.a=d},bRE:function bRE(){},E7:function E7(d){this.a=d}},A
J=c[1]
D=c[0]
B=c[2]
C=a.updateHolder(c[268],C)
A=c[766]
C.a0Q.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof C.a0Q&&e.a==w.a&&e.b==w.b&&J.p(e.c,w.c)&&J.p(e.d,w.d)&&e.e==w.e&&e.f==w.f&&e.r==w.r&&e.w==w.w&&e.x==w.x&&e.y==w.y&&e.z==w.z&&B.U.ar(e.Q,w.Q)&&e.as==w.as&&e.at==w.at&&e.ax==w.ax
else x=!0
return x},
gj(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i=i==null?0:B.h.gj(i)
x=j.b
x=x==null?0:B.h.gj(x)
w=j.c
w=w==null?0:D.Y(w.a,w.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
v=j.d
v=v==null?0:D.Y(v.a,v.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
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
C.fi.prototype={
l(d){return this.a},
A(){return this.a}}
C.bRE.prototype={
D(d){if(d!=null)switch(d){case"PENDING_SHIPMENT":return A.brA
case"SHIPPED":return A.brL
case"DELIVERY_ASSIGNING":return A.bro
case"DELIVERY_ASSIGNED":return A.brn
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.brs
case"DELIVERY_PICKUP_DELAYED":return A.brv
case"DELIVERY_PICKED_UP":return A.bru
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.brr
case"DELIVERY_DELIVERY_DELAYED":return A.brq
case"DELIVERY_FAILED":return A.brt
case"DELIVERY_RETURNING":return A.brw
case"DELIVERY_COMPLETED":return A.brp
case"PURCHASE_IN_PROGRESS":return A.brC
case"PROOF_SUBMITTED":return A.brB
case"BUYER_CONFIRMED":return A.bri
case"RETURN_REQUESTED":return A.brI
case"RETURN_REJECTED":return A.brH
case"RETURN_APPROVED":return A.brF
case"RETURN_SHIPPED_BY_BUYER":return A.brJ
case"RETURN_SHIPPING_DELAYED":return A.brK
case"RETURN_RECEIVED":return A.brG
case"REFUND_NO_RETURN_OFFERED":return A.brE
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brM
case"DISPUTE_OPENED":return A.brx
case"DISPUTE_RESPONDED":return A.brz
case"CANCELLED_BY_BUYER":return A.brj
case"CANCELLED_BY_SELLER":return A.brl
case"CANCELLED_BY_PLATFORM":return A.brk
case"REFUNDED":return A.brD
case"DISPUTE_RESOLVED":return A.bry
case"COMPLETED_FINAL":return A.brm
case"unknown_default_open_api":return A.brN}return null}}
C.E7.prototype={
l(d){return this.a},
A(){return this.a}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[C.a0Q,C.fi,C.bRE,C.E7])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.wf=new C.bRE()
A.bb4=x([],D.C("v<fi>"))
A.a6l=new C.E7("CREATED_TIME")
A.HH=new C.E7("UPDATED_TIME")
A.bri=new C.fi("BUYER_CONFIRMED")
A.brj=new C.fi("CANCELLED_BY_BUYER")
A.brk=new C.fi("CANCELLED_BY_PLATFORM")
A.brl=new C.fi("CANCELLED_BY_SELLER")
A.brm=new C.fi("COMPLETED_FINAL")
A.brn=new C.fi("DELIVERY_ASSIGNED")
A.bro=new C.fi("DELIVERY_ASSIGNING")
A.brp=new C.fi("DELIVERY_COMPLETED")
A.brq=new C.fi("DELIVERY_DELIVERY_DELAYED")
A.brr=new C.fi("DELIVERY_EN_ROUTE_TO_BUYER")
A.brs=new C.fi("DELIVERY_EN_ROUTE_TO_PICKUP")
A.brt=new C.fi("DELIVERY_FAILED")
A.bru=new C.fi("DELIVERY_PICKED_UP")
A.brv=new C.fi("DELIVERY_PICKUP_DELAYED")
A.brw=new C.fi("DELIVERY_RETURNING")
A.brx=new C.fi("DISPUTE_OPENED")
A.bry=new C.fi("DISPUTE_RESOLVED")
A.brz=new C.fi("DISPUTE_RESPONDED")
A.brA=new C.fi("PENDING_SHIPMENT")
A.brB=new C.fi("PROOF_SUBMITTED")
A.brC=new C.fi("PURCHASE_IN_PROGRESS")
A.brD=new C.fi("REFUNDED")
A.brE=new C.fi("REFUND_NO_RETURN_OFFERED")
A.brF=new C.fi("RETURN_APPROVED")
A.brG=new C.fi("RETURN_RECEIVED")
A.brH=new C.fi("RETURN_REJECTED")
A.brI=new C.fi("RETURN_REQUESTED")
A.brJ=new C.fi("RETURN_SHIPPED_BY_BUYER")
A.brK=new C.fi("RETURN_SHIPPING_DELAYED")
A.brL=new C.fi("SHIPPED")
A.brM=new C.fi("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brN=new C.fi("unknown_default_open_api")})();(function staticFields(){$.St=null})()};
(a=>{a["Iijs7lkzNTLzRXaGl4vYblXz5GM="]=a.current})($__dart_deferred_initializers__);