((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
e7I(d,e,f,g,h,i,j,k){return new B.aIJ(f,g,j,d,e,h,i,k)},
aIJ:function aIJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
IR:function IR(d){this.a=d},
bJs:function bJs(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[162],B)
D=c[750]
B.aIJ.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aIJ)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
return x},
gj(d){var x,w,v,u,t,s=this,r=A.h.gj(s.a),q=A.h.gj(s.b),p=s.c
p=p==null?0:C.a0(p.a,p.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
x=s.d
x=x==null?0:C.a0(x.a,x.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
w=s.e
w=w==null?0:A.c.gj(w)
v=s.f
v=v==null?0:A.c.gj(v)
u=s.r
u=u==null?0:A.c.gj(u)
t=s.z
t=t==null?0:C.a7(t)
return r+q+p+x+w+v+u+t},
l(d){var x=this
return"MemberSearchParam[page="+x.a+", size="+x.b+", startDate="+C.b(x.c)+", endDate="+C.b(x.d)+", keyword="+C.b(x.e)+", sortBy="+C.b(x.f)+", sortDirection="+C.b(x.r)+", userId=null, username=null, email=null, status="+C.b(x.z)+"]"},
v(){var x,w=this,v=null,u="startDate",t="sortDirection",s=C.r(y.g,y.b)
s.h(0,"page",w.a)
s.h(0,"size",w.b)
x=w.c
if(x!=null)s.h(0,u,x.a2().a_())
else s.h(0,u,v)
x=w.d
if(x!=null)s.h(0,"endDate",x.a2().a_())
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
B.IR.prototype={
l(d){return this.a},
v(){return this.a}}
B.bJs.prototype={
C(d){if(d!=null)switch(d){case"ACTIVE":return D.bhv
case"INACTIVE":return D.bhy
case"SUSPENDED":return D.bhz
case"BANNED":return D.bhw
case"DELETED":return D.bhx
case"unknown_default_open_api":return D.bhA}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.A,[B.aIJ,B.IR,B.bJs])})()
var y={g:C.F("n"),b:C.F("@")};(function constants(){D.MM=new B.bJs()
D.bhv=new B.IR("ACTIVE")
D.bhw=new B.IR("BANNED")
D.bhx=new B.IR("DELETED")
D.bhy=new B.IR("INACTIVE")
D.bhz=new B.IR("SUSPENDED")
D.bhA=new B.IR("unknown_default_open_api")})();(function staticFields(){$.bJt=null})()};
(a=>{a["5SVbSfTfnXwLBj6A+vUcA2ACOTg="]=a.current})($__dart_deferred_initializers__);