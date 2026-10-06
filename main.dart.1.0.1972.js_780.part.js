((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dzb(d,e,f,g,h,i,j,k){return new B.az0(f,g,j,d,e,h,i,k)},
az0:function az0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
GD:function GD(d){this.a=d},
btL:function btL(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[163],B)
D=c[818]
B.az0.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.az0)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
return x},
gi(d){var x,w,v,u,t,s=this,r=A.i.gi(s.a),q=A.i.gi(s.b),p=s.c
p=p==null?0:C.Y(p.a,p.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
x=s.d
x=x==null?0:C.Y(x.a,x.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
w=s.e
w=w==null?0:A.c.gi(w)
v=s.f
v=v==null?0:A.c.gi(v)
u=s.r
u=u==null?0:A.c.gi(u)
t=s.z
t=t==null?0:C.a3(t)
return r+q+p+x+w+v+u+t},
l(d){var x=this
return"MemberSearchParam[page="+x.a+", size="+x.b+", startDate="+C.b(x.c)+", endDate="+C.b(x.d)+", keyword="+C.b(x.e)+", sortBy="+C.b(x.f)+", sortDirection="+C.b(x.r)+", userId=null, username=null, email=null, status="+C.b(x.z)+"]"},
B(){var x,w=this,v=null,u="startDate",t="sortDirection",s=C.p(y.g,y.b)
s.h(0,"page",w.a)
s.h(0,"size",w.b)
x=w.c
if(x!=null)s.h(0,u,x.a0().V())
else s.h(0,u,v)
x=w.d
if(x!=null)s.h(0,"endDate",x.a0().V())
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
B.GD.prototype={
l(d){return this.a},
B(){return this.a}}
B.btL.prototype={
C(d){if(d!=null)switch(d){case"ACTIVE":return D.bca
case"INACTIVE":return D.bcd
case"SUSPENDED":return D.bce
case"BANNED":return D.bcb
case"DELETED":return D.bcc
case"unknown_default_open_api":return D.bcf}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.D,[B.az0,B.GD,B.btL])})()
var y={g:C.A("o"),b:C.A("@")};(function constants(){D.Kw=new B.btL()
D.bca=new B.GD("ACTIVE")
D.bcb=new B.GD("BANNED")
D.bcc=new B.GD("DELETED")
D.bcd=new B.GD("INACTIVE")
D.bce=new B.GD("SUSPENDED")
D.bcf=new B.GD("unknown_default_open_api")})();(function staticFields(){$.btM=null})()};
(a=>{a["7mPLcRbQ8SL32Ykg46ec9dunBYY="]=a.current})($__dart_deferred_initializers__);