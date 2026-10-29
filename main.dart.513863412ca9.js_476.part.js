((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={aSJ:function aSJ(d){this.a=d},
dFT(d,e,f,g,h){return new B.aAO(e,f,h,d,g)},
aAO:function aAO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.y=f
_.z=g
_.Q=h}}
A=c[0]
C=c[2]
B=a.updateHolder(c[129],B)
B.aSJ.prototype={}
B.aAO.prototype={
n(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof B.aAO)if(e.a===w.a)if(e.b===w.b)if(e.y==w.y)if(e.z==w.z)x=e.Q==w.Q}else x=!0
return x},
gj(d){var x,w,v=this,u=C.f.gj(v.a),t=C.f.gj(v.b),s=v.y
s=s==null?0:C.b.gj(s)
x=v.z
x=x==null?0:A.ad(x)
w=v.Q
w=w==null?0:A.ad(w)
return u+t+s+x+w},
l(d){var x=this
return"IssueSearchParam[page="+x.a+", size="+x.b+", startDate=null, endDate=null, keyword=null, sortBy=null, sortDirection=null, issueId=null, userId=null, username="+A.b(x.y)+", issueType="+A.b(x.z)+", status="+A.b(x.Q)+", operatorId=null, operatorName=null]"},
v(){var x,w=this,v=null,u="username",t="issueType",s=A.q(y.g,y.b)
s.h(0,"page",w.a)
s.h(0,"size",w.b)
s.h(0,"startDate",v)
s.h(0,"endDate",v)
s.h(0,"keyword",v)
s.h(0,"sortBy",v)
s.h(0,"sortDirection",v)
s.h(0,"issueId",v)
s.h(0,"userId",v)
x=w.y
if(x!=null)s.h(0,u,x)
else s.h(0,u,v)
x=w.z
if(x!=null)s.h(0,t,x)
else s.h(0,t,v)
x=w.Q
if(x!=null)s.h(0,"status",x)
else s.h(0,"status",v)
s.h(0,"operatorId",v)
s.h(0,"operatorName",v)
return s}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.A,[B.aSJ,B.aAO])})()
var y={g:A.C("m"),b:A.C("@")}};
(a=>{a["C8SpsLe06o0dCuXcV78ZKqAqY4g="]=a.current})($__dart_deferred_initializers__);