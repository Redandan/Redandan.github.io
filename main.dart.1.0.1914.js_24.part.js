((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
dw0(d,e,f,g,h,i,j,k){return new B.ayd(f,g,j,d,e,h,i,k)},
ayd:function ayd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
EY:function EY(d){this.a=d},
bsm:function bsm(){}},D
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[43],B)
D=c[94]
B.ayd.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.ayd)if(e.a===w.a)if(e.b===w.b)if(J.r(e.c,w.c))if(J.r(e.d,w.d))if(e.e==w.e)if(e.f==w.f)if(e.r==w.r)x=e.z==w.z}else x=!0
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
B.bsm.prototype={
C(d){if(d!=null)switch(d){case"ACTIVE":return D.bce
case"INACTIVE":return D.bch
case"SUSPENDED":return D.bci
case"BANNED":return D.bcf
case"DELETED":return D.bcg
case"unknown_default_open_api":return D.bcj}return null}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(C.T,[B.ayd,B.EY,B.bsm])})()
var y={g:C.au("q"),b:C.au("@")};(function constants(){D.Kq=new B.bsm()
D.bce=new B.EY("ACTIVE")
D.bcf=new B.EY("BANNED")
D.bcg=new B.EY("DELETED")
D.bch=new B.EY("INACTIVE")
D.bci=new B.EY("SUSPENDED")
D.bcj=new B.EY("unknown_default_open_api")})();(function staticFields(){$.bsn=null})()};
(a=>{a["0INZi1OCNhCcGBSqifai68h7bGQ="]=a.current})($__dart_deferred_initializers__);