((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,D,B,C={a0S:function a0S(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ax=r},fi:function fi(d){this.a=d},bRP:function bRP(){},E9:function E9(d){this.a=d}},A
J=c[1]
D=c[0]
B=c[2]
C=a.updateHolder(c[268],C)
A=c[766]
C.a0S.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e)x=e instanceof C.a0S&&e.a==w.a&&e.b==w.b&&J.p(e.c,w.c)&&J.p(e.d,w.d)&&e.e==w.e&&e.f==w.f&&e.r==w.r&&e.w==w.w&&e.x==w.x&&e.y==w.y&&e.z==w.z&&B.U.ar(e.Q,w.Q)&&e.as==w.as&&e.at==w.at&&e.ax==w.ax
else x=!0
return x},
gj(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i=i==null?0:B.h.gj(i)
x=j.b
x=x==null?0:B.h.gj(x)
w=j.c
w=w==null?0:D.Z(w.a,w.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
v=j.d
v=v==null?0:D.Z(v.a,v.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
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
n=D.a8(j.Q)
m=j.as
m=m==null?0:D.a8(m)
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
C.bRP.prototype={
D(d){if(d!=null)switch(d){case"PENDING_SHIPMENT":return A.brF
case"SHIPPED":return A.brQ
case"DELIVERY_ASSIGNING":return A.brt
case"DELIVERY_ASSIGNED":return A.brs
case"DELIVERY_EN_ROUTE_TO_PICKUP":return A.brx
case"DELIVERY_PICKUP_DELAYED":return A.brA
case"DELIVERY_PICKED_UP":return A.brz
case"DELIVERY_EN_ROUTE_TO_BUYER":return A.brw
case"DELIVERY_DELIVERY_DELAYED":return A.brv
case"DELIVERY_FAILED":return A.bry
case"DELIVERY_RETURNING":return A.brB
case"DELIVERY_COMPLETED":return A.bru
case"PURCHASE_IN_PROGRESS":return A.brH
case"PROOF_SUBMITTED":return A.brG
case"BUYER_CONFIRMED":return A.brn
case"RETURN_REQUESTED":return A.brN
case"RETURN_REJECTED":return A.brM
case"RETURN_APPROVED":return A.brK
case"RETURN_SHIPPED_BY_BUYER":return A.brO
case"RETURN_SHIPPING_DELAYED":return A.brP
case"RETURN_RECEIVED":return A.brL
case"REFUND_NO_RETURN_OFFERED":return A.brJ
case"REFUND_NO_RETURN_PARTIAL_OFFERED":return A.brR
case"DISPUTE_OPENED":return A.brC
case"DISPUTE_RESPONDED":return A.brE
case"CANCELLED_BY_BUYER":return A.bro
case"CANCELLED_BY_SELLER":return A.brq
case"CANCELLED_BY_PLATFORM":return A.brp
case"REFUNDED":return A.brI
case"DISPUTE_RESOLVED":return A.brD
case"COMPLETED_FINAL":return A.brr
case"unknown_default_open_api":return A.brS}return null}}
C.E9.prototype={
l(d){return this.a},
A(){return this.a}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(D.A,[C.a0S,C.fi,C.bRP,C.E9])})()
var y={g:D.C("n"),b:D.C("@")};(function constants(){var x=a.makeConstList
A.wi=new C.bRP()
A.bb8=x([],D.C("v<fi>"))
A.a6n=new C.E9("CREATED_TIME")
A.HJ=new C.E9("UPDATED_TIME")
A.brn=new C.fi("BUYER_CONFIRMED")
A.bro=new C.fi("CANCELLED_BY_BUYER")
A.brp=new C.fi("CANCELLED_BY_PLATFORM")
A.brq=new C.fi("CANCELLED_BY_SELLER")
A.brr=new C.fi("COMPLETED_FINAL")
A.brs=new C.fi("DELIVERY_ASSIGNED")
A.brt=new C.fi("DELIVERY_ASSIGNING")
A.bru=new C.fi("DELIVERY_COMPLETED")
A.brv=new C.fi("DELIVERY_DELIVERY_DELAYED")
A.brw=new C.fi("DELIVERY_EN_ROUTE_TO_BUYER")
A.brx=new C.fi("DELIVERY_EN_ROUTE_TO_PICKUP")
A.bry=new C.fi("DELIVERY_FAILED")
A.brz=new C.fi("DELIVERY_PICKED_UP")
A.brA=new C.fi("DELIVERY_PICKUP_DELAYED")
A.brB=new C.fi("DELIVERY_RETURNING")
A.brC=new C.fi("DISPUTE_OPENED")
A.brD=new C.fi("DISPUTE_RESOLVED")
A.brE=new C.fi("DISPUTE_RESPONDED")
A.brF=new C.fi("PENDING_SHIPMENT")
A.brG=new C.fi("PROOF_SUBMITTED")
A.brH=new C.fi("PURCHASE_IN_PROGRESS")
A.brI=new C.fi("REFUNDED")
A.brJ=new C.fi("REFUND_NO_RETURN_OFFERED")
A.brK=new C.fi("RETURN_APPROVED")
A.brL=new C.fi("RETURN_RECEIVED")
A.brM=new C.fi("RETURN_REJECTED")
A.brN=new C.fi("RETURN_REQUESTED")
A.brO=new C.fi("RETURN_SHIPPED_BY_BUYER")
A.brP=new C.fi("RETURN_SHIPPING_DELAYED")
A.brQ=new C.fi("SHIPPED")
A.brR=new C.fi("REFUND_NO_RETURN_PARTIAL_OFFERED")
A.brS=new C.fi("unknown_default_open_api")})();(function staticFields(){$.Su=null})()};
(a=>{a["8D6zGQdFJfuF+Hdm2ksmz9QzLvU="]=a.current})($__dart_deferred_initializers__);