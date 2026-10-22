((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eeG(d,e,f,g,h,i,j,k){return new B.aLB(f,g,j,d,e,h,i,k)},
aLB:function aLB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
K1:function K1(d){this.a=d},
bNM:function bNM(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[162],B)
D=c[753]
B.aLB.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aLB)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
return x},
gj(d){var x,w,v,u,t,s=this,r=A.h.gj(s.a),q=A.h.gj(s.b),p=s.c
p=p==null?0:C.X(p.a,p.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
x=s.d
x=x==null?0:C.X(x.a,x.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
w=s.e
w=w==null?0:A.b.gj(w)
v=s.f
v=v==null?0:A.b.gj(v)
u=s.r
u=u==null?0:A.b.gj(u)
t=s.z
t=t==null?0:C.a7(t)
return r+q+p+x+w+v+u+t},
l(d){var x=this
return"MemberSearchParam[page="+x.a+", size="+x.b+", startDate="+C.b(x.c)+", endDate="+C.b(x.d)+", keyword="+C.b(x.e)+", sortBy="+C.b(x.f)+", sortDirection="+C.b(x.r)+", userId=null, username=null, email=null, status="+C.b(x.z)+"]"},
A(){var x,w=this,v=null,u="startDate",t="sortDirection",s=C.q(y.g,y.b)
s.h(0,"page",w.a)
s.h(0,"size",w.b)
x=w.c
if(x!=null)s.h(0,u,x.a3().a_())
else s.h(0,u,v)
x=w.d
if(x!=null)s.h(0,"endDate",x.a3().a_())
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
B.K1.prototype={
l(d){return this.a},
A(){return this.a}}
B.bNM.prototype={
D(d){if(d!=null)switch(d){case"ACTIVE":return D.bm7
case"INACTIVE":return D.bma
case"SUSPENDED":return D.bmb
case"BANNED":return D.bm8
case"DELETED":return D.bm9
case"unknown_default_open_api":return D.bmc}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.A,[B.aLB,B.K1,B.bNM])})()
var y={g:C.C("n"),b:C.C("@")};(function constants(){D.Nx=new B.bNM()
D.bm7=new B.K1("ACTIVE")
D.bm8=new B.K1("BANNED")
D.bm9=new B.K1("DELETED")
D.bma=new B.K1("INACTIVE")
D.bmb=new B.K1("SUSPENDED")
D.bmc=new B.K1("unknown_default_open_api")})();(function staticFields(){$.bNN=null})()};
(a=>{a["BG2TSym9R9Go9Cj1ZnHywoGmFmE="]=a.current})($__dart_deferred_initializers__);