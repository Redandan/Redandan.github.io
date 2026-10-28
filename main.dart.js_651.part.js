((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dH2(d,e,f,g,h,i,j,k){return new B.aE1(f,g,j,d,e,h,i,k)},
aE1:function aE1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
GU:function GU(d){this.a=d},
bzs:function bzs(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[125],B)
D=c[688]
B.aE1.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aE1)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
return x},
gj(d){var x,w,v,u,t,s=this,r=A.f.gj(s.a),q=A.f.gj(s.b),p=s.c
p=p==null?0:C.Q(p.a,p.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
x=s.d
x=x==null?0:C.Q(x.a,x.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
w=s.e
w=w==null?0:A.b.gj(w)
v=s.f
v=v==null?0:A.b.gj(v)
u=s.r
u=u==null?0:A.b.gj(u)
t=s.z
t=t==null?0:C.ad(t)
return r+q+p+x+w+v+u+t},
l(d){var x=this
return"MemberSearchParam[page="+x.a+", size="+x.b+", startDate="+C.b(x.c)+", endDate="+C.b(x.d)+", keyword="+C.b(x.e)+", sortBy="+C.b(x.f)+", sortDirection="+C.b(x.r)+", userId=null, username=null, email=null, status="+C.b(x.z)+"]"},
v(){var x,w=this,v=null,u="startDate",t="sortDirection",s=C.q(y.g,y.b)
s.h(0,"page",w.a)
s.h(0,"size",w.b)
x=w.c
if(x!=null)s.h(0,u,x.a2().a1())
else s.h(0,u,v)
x=w.d
if(x!=null)s.h(0,"endDate",x.a2().a1())
else s.h(0,"endDate",v)
x=w.e
if(x!=null)s.h(0,"keyword",x)
else s.h(0,"keyword",v)
x=w.f
if(x!=null)s.h(0,"sortBy",x)
else s.h(0,"sortBy",v)
x=w.r
if(x!=null)s.h(0,t,x)
else s.h(0,t,v)
s.h(0,"userId",v)
s.h(0,"username",v)
s.h(0,"email",v)
x=w.z
if(x!=null)s.h(0,"status",x)
else s.h(0,"status",v)
return s}}
B.GU.prototype={
l(d){return this.a},
v(){return this.a}}
B.bzs.prototype={
D(d){if(d!=null)switch(d){case"ACTIVE":return D.b9j
case"INACTIVE":return D.b9m
case"SUSPENDED":return D.b9n
case"BANNED":return D.b9k
case"DELETED":return D.b9l
case"unknown_default_open_api":return D.b9o}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.A,[B.aE1,B.GU,B.bzs])})()
var y={g:C.C("m"),b:C.C("@")};(function constants(){D.KF=new B.bzs()
D.b9j=new B.GU("ACTIVE")
D.b9k=new B.GU("BANNED")
D.b9l=new B.GU("DELETED")
D.b9m=new B.GU("INACTIVE")
D.b9n=new B.GU("SUSPENDED")
D.b9o=new B.GU("unknown_default_open_api")})();(function staticFields(){$.bzt=null})()};
(a=>{a["7kgYGFd3Tg5VY8z2zrZjRi44lMA="]=a.current})($__dart_deferred_initializers__);