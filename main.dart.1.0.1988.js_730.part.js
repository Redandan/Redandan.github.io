((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,C={
dxj(d,e,f,g,h,i,j){return new C.avl(f,h,i,e,d,g,j)},
avl:function avl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.w=h
_.x=i
_.y=j},
A3:function A3(d){this.a=d}},D
J=c[1]
B=c[0]
A=c[2]
C=a.updateHolder(c[160],C)
D=c[630]
C.avl.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof C.avl)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.w==w.w)x=e.y==w.y}else x=!0
return x},
gi(d){var x,w,v,u=this,t=A.i.gi(u.a),s=A.i.gi(u.b),r=u.c
r=r==null?0:B.Y(r.a,r.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
x=u.d
x=x==null?0:B.Y(x.a,x.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
w=u.w
w=w==null?0:A.i.gi(w)
v=u.y
v=v==null?0:B.a2(v)
return t+s+r+x+w+v},
l(d){var x=this
return"DisputeSearchParam[page="+x.a+", size="+x.b+", startDate="+B.b(x.c)+", endDate="+B.b(x.d)+", keyword=null, sortBy=null, sortDirection=null, buyerId="+B.b(x.w)+", sellerId="+B.b(x.x)+", status="+B.b(x.y)+"]"},
B(){var x,w=this,v=null,u="startDate",t=B.p(y.g,y.b)
t.h(0,"page",w.a)
t.h(0,"size",w.b)
x=w.c
if(x!=null)t.h(0,u,x.a0().X())
else t.h(0,u,v)
x=w.d
if(x!=null)t.h(0,"endDate",x.a0().X())
else t.h(0,"endDate",v)
t.h(0,"keyword",v)
t.h(0,"sortBy",v)
t.h(0,"sortDirection",v)
x=w.w
if(x!=null)t.h(0,"buyerId",x)
else t.h(0,"buyerId",v)
t.h(0,"sellerId",v)
x=w.y
if(x!=null)t.h(0,"status",x)
else t.h(0,"status",v)
return t}}
C.A3.prototype={
l(d){return this.a},
B(){return this.a}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(B.G,[C.avl,C.A3])})()
var y={g:B.A("o"),b:B.A("@")};(function constants(){D.Mq=new C.A3("PENDING")})()};
(a=>{a["b0lGDOVn01QqKw4MA0tCgzMUmVA="]=a.current})($__dart_deferred_initializers__);