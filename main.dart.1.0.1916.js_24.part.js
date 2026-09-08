((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dw1(d,e,f,g,h,i,j,k){return new B.ayc(f,g,j,d,e,h,i,k)},
ayc:function ayc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
EY:function EY(d){this.a=d},
bsk:function bsk(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[43],B)
D=c[94]
B.ayc.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.ayc)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
return x},
gi(d){var x,w,v,u,t,s=this,r=A.i.gi(s.a),q=A.i.gi(s.b),p=s.c
p=p==null?0:C.S(p.a,p.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
x=s.d
x=x==null?0:C.S(x.a,x.b,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)
w=s.e
w=w==null?0:A.c.gi(w)
v=s.f
v=v==null?0:A.c.gi(v)
u=s.r
u=u==null?0:A.c.gi(u)
t=s.z
t=t==null?0:C.Z(t)
return r+q+p+x+w+v+u+t},
l(d){var x=this
return"MemberSearchParam[page="+x.a+", size="+x.b+", startDate="+C.b(x.c)+", endDate="+C.b(x.d)+", keyword="+C.b(x.e)+", sortBy="+C.b(x.f)+", sortDirection="+C.b(x.r)+", userId=null, username=null, email=null, status="+C.b(x.z)+"]"},
B(){var x,w=this,v=null,u="startDate",t="sortDirection",s=C.o(y.g,y.b)
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
B.EY.prototype={
l(d){return this.a},
B(){return this.a}}
B.bsk.prototype={
C(d){if(d!=null)switch(d){case"ACTIVE":return D.bcd
case"INACTIVE":return D.bcg
case"SUSPENDED":return D.bch
case"BANNED":return D.bce
case"DELETED":return D.bcf
case"unknown_default_open_api":return D.bci}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.T,[B.ayc,B.EY,B.bsk])})()
var y={g:C.au("q"),b:C.au("@")};(function constants(){D.Kq=new B.bsk()
D.bcd=new B.EY("ACTIVE")
D.bce=new B.EY("BANNED")
D.bcf=new B.EY("DELETED")
D.bcg=new B.EY("INACTIVE")
D.bch=new B.EY("SUSPENDED")
D.bci=new B.EY("unknown_default_open_api")})();(function staticFields(){$.bsl=null})()};
(a=>{a["l3zL8HoYsVvum1KfaBAVcO33Qm4="]=a.current})($__dart_deferred_initializers__);