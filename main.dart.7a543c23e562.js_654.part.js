((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
eeV(d,e,f,g,h,i,j,k){return new B.aLC(f,g,j,d,e,h,i,k)},
aLC:function aLC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
K4:function K4(d){this.a=d},
bNM:function bNM(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[162],B)
D=c[753]
B.aLC.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aLC)if(e.a===w.a)if(e.b===w.b)if(J.p(e.c,w.c))if(J.p(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
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
B.K4.prototype={
l(d){return this.a},
A(){return this.a}}
B.bNM.prototype={
D(d){if(d!=null)switch(d){case"ACTIVE":return D.bm9
case"INACTIVE":return D.bmc
case"SUSPENDED":return D.bmd
case"BANNED":return D.bma
case"DELETED":return D.bmb
case"unknown_default_open_api":return D.bme}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.A,[B.aLC,B.K4,B.bNM])})()
var y={g:C.C("n"),b:C.C("@")};(function constants(){D.Ny=new B.bNM()
D.bm9=new B.K4("ACTIVE")
D.bma=new B.K4("BANNED")
D.bmb=new B.K4("DELETED")
D.bmc=new B.K4("INACTIVE")
D.bmd=new B.K4("SUSPENDED")
D.bme=new B.K4("unknown_default_open_api")})();(function staticFields(){$.bNN=null})()};
(a=>{a["vuBb0ksaBTrPQW2ScJQ8cwYRILY="]=a.current})($__dart_deferred_initializers__);