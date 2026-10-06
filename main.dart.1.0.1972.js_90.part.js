((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={ase:function ase(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},uN:function uN(d){this.a=d},
xb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new C.oZ(n,j,k,l,r,h,i,o,e,d,f,s,g,q,m,p)},
oZ:function oZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.ax=r
_.ay=s}}
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[216],C)
C.ase.prototype={}
C.uN.prototype={
cby(d,e){var x,w,v=B.e.gaF(d.toLowerCase().split("."))
if(!B.e.t(A.a(["jpg","jpeg","png","gif","webp","bmp"],y.x),v))return!1
x=e.length
if(x<8)return!1
w=e[0]
if(w===137&&e[1]===80&&e[2]===78&&e[3]===71)return!0
if(w===255&&e[1]===216&&e[2]===255)return!0
if(w===71&&e[1]===73&&e[2]===70&&e[3]===56)return!0
if(x>=12&&w===82&&e[1]===73&&e[2]===70&&e[3]===70&&e[8]===87&&e[9]===69&&e[10]===66&&e[11]===80)return!0
return!1},
cbx(d,e){var x,w,v,u,t=B.e.gaF(d.toLowerCase().split("."))
if(!B.e.t(A.a(["pdf","doc","docx","xls","xlsx","txt","rtf"],y.x),t))return!1
x=e.length
if(x<8)return!1
w=e[0]
if(w===37&&e[1]===80&&e[2]===68&&e[3]===70)return!0
w=w===80
if(w&&e[1]===75&&e[2]===3&&e[3]===4)return!0
if(w&&e[1]===75&&e[2]===3&&e[3]===4)return!0
u=0
for(;;){if(!(u<x&&u<100)){v=!1
break}w=e[u]
if(w>=32&&w<=126){v=!0
break}++u}if(v)return!0
return!1},
cbw(d,e){var x,w=B.e.gaF(d.toLowerCase().split("."))
if(!B.e.t(A.a(["zip","rar","7z","tar","gz"],y.x),w))return!1
if(e.length<8)return!1
x=e[0]
if(x===80&&e[1]===75&&e[2]===3&&e[3]===4)return!0
if(x===82&&e[1]===97&&e[2]===114&&e[3]===33)return!0
if(x===55&&e[1]===122&&e[2]===188&&e[3]===175&&e[4]===39&&e[5]===28)return!0
return!1},
dwg(d,e,f){var x=this
if(f==="image")return x.cby(d,e)
else if(f==="document")return x.cbx(d,e)
else if(f==="archive")return x.cbw(d,e)
else return x.cby(d,e)||x.cbx(d,e)||x.cbw(d,e)},
dG6(d){var x=null
if(d>10485760)return C.xb(x,x,x,x,413,"FILE_TOO_LARGE: File size cannot exceed 10MB",x,x,x,x,!1,x,x,x,x,x)
return x},
bjS(){var x=0,w=A.l(y.v),v=this,u,t,s
var $async$bjS=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:t=$.ay()
x=2
return A.c(t.$1$0(y.l).eD(),$async$bjS)
case 2:s=e
if(s==null)throw A.t(A.bp("Authentication expired. Please sign in again"))
if(s.length===0)throw A.t(A.bp("Invalid authentication token. Please sign in again"))
if(!B.c.aO(s,"eyJ"))throw A.t(A.bp("Invalid authentication token format. Please sign in again"))
u=v.a
u.k(B.f,"\u8a2d\u5b9a\u8a8d\u8b49\u982d\uff0ctokenPresent=true",null,null)
t.$1$0(y.h).ckb(s)
u.k(B.f,"\u8a8d\u8b49\u982d\u8a2d\u5b9a\u5b8c\u6210",null,null)
return A.j(null,w)}})
return A.k($async$bjS,w)},
bat(d,e,f,g,h,i,j){return this.dFV(d,e,f,g,h,i,j)},
dFV(d,e,f,g,h,a0,a1){var x=0,w=A.l(y.E),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$bat=A.h(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:u=4
n=s.a
m=a0.b
n.k(B.f,"\u958b\u59cb\u4e0a\u50b3Web\u6a94\u6848: "+m,null,null)
l=a0.c
if(l==null||l.length===0){n=C.xb(null,null,null,null,400,"File data is empty",null,null,null,null,!1,null,null,null,null,null)
v=n
x=1
break}k=l.length
r=s.dG6(k)
if(r!=null){v=r
x=1
break}if(!s.dwg(m,l,g)){n=C.xb(null,null,null,null,400,"\u6a94\u6848\u578b\u5225\u9a57\u8b49\u5931\u6557",null,null,null,null,!1,null,null,null,null,null)
v=n
x=1
break}x=7
return A.c(s.bjS(),$async$bat)
case 7:n.k(B.f,"\u8c03\u7528uploadBytes API\uff0c\u6587\u4ef6\u5927\u5c0f: "+k+" bytes",null,null)
x=8
return A.c($.ay().$1$0(y.h).a25(d,e,l,f,m,h,a1),$async$bat)
case 8:q=a3
n.k(B.f,"uploadBytes API\u8c03\u7528\u5b8c\u6210\uff0c\u7ed3\u679c: success="+q.a,null,null)
n.k(B.f,"=== \u8a73\u7d30\u9664\u932f\u8cc7\u8a0a ===",null,null)
n.k(B.f,"result.isSuccess: "+q.a,null,null)
n.k(B.f,"result.fileName: "+A.b(q.c),null,null)
n.k(B.f,"result.fileId: "+A.b(q.b),null,null)
m=q.w
n.k(B.f,"result.presignedUrlPresent: "+((m==null?null:m.length!==0)===!0),null,null)
n.k(B.f,"result.fileSize: "+A.b(q.d),null,null)
n.k(B.f,"result.businessType: "+A.b(q.x),null,null)
n.k(B.f,"result.businessId: "+A.b(q.y),null,null)
n.k(B.f,"result.contentType: "+A.b(q.z),null,null)
n.k(B.f,"result.description: "+A.b(q.as),null,null)
n.k(B.f,"result.tags: "+A.b(q.at),null,null)
n.k(B.f,"result.isPublic: "+A.b(q.ax),null,null)
n.k(B.f,"result.status: "+A.b(q.ay),null,null)
n.k(B.f,"=== \u9664\u932f\u8cc7\u8a0a\u7d50\u675f ===",null,null)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
p=A.u(i)
o=A.eZ(J.ap(p))
s.a.k(B.q,"Web\u6587\u4ef6\u4e0a\u4f20\u5f02\u5e38: "+A.b(o),null,null)
n=C.xb(null,null,null,null,-1,"\u4e0a\u4f20\u5f02\u5e38: "+A.b(o),null,null,null,null,!1,null,null,null,null,null)
v=n
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$bat,w)},
bar(d,e,f,g,h,i,j){return this.dFM(d,e,f,g,h,i,j)},
dFL(d,e,f,g,h,i){return this.bar(d,e,f,g,null,h,i)},
dFM(d,e,f,g,h,i,j){var x=0,w=A.l(y.E),v,u=this
var $async$bar=A.h(function(k,l){if(k===1)return A.i(l,w)
for(;;)switch(x){case 0:if(g instanceof A.it){v=u.bat(d,e,f,h,i,g,j)
x=1
break}else{v=C.xb(null,null,null,null,400,"Web \u5e73\u53f0\u9700\u8981\u4f7f\u7528 PlatformFile \u7c7b\u578b",null,null,null,null,!1,null,null,null,null,null)
x=1
break}case 1:return A.j(v,w)}})
return A.k($async$bar,w)},
BJ(d,e,f,g,h,i,j){return this.dFO(d,e,f,g,h,i,j)},
dFN(d,e,f,g,h,i){return this.BJ(d,e,f,null,g,h,i)},
cek(d,e,f){return this.BJ(d,e,null,null,f,!0,null)},
dFO(d,e,f,g,h,i,a0){var x=0,w=A.l(y.F),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$BJ=A.h(function(a1,a2){if(a1===1)return A.i(a2,w)
for(;;)switch(x){case 0:j=u.a
j.k(B.f,"\u958b\u59cb\u6279\u6b21\u4e0a\u50b3\uff0c\u6a94\u6848\u6578\u91cf: "+h.length,null,null)
t=A.a([],y.n)
s=A.a([],y.x)
r=A.a([],y.r)
q=0,p=0,o=0
case 3:if(!(n=h.length,o<n)){x=4
break}m=h[o];++o
j.k(B.f,"\u4e0a\u4f20\u6587\u4ef6 "+o+"/"+n,null,null)
x=5
return A.c(u.bar(d,e,f,m,g,i,a0),$async$BJ)
case 5:l=a2
t.push(l)
if(l.a){++q
n=l.w
if(n!=null&&n.length!==0)s.push(n)
n=l.b
if(n!=null){k=A.bJ(n,null)
if(k!=null)r.push(k)}j.k(B.f,"\u6587\u4ef6\u4e0a\u4f20\u6210\u529f: "+A.b(l.c),null,null)}else{++p
n=l.r
j.k(B.q,"\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25: "+A.eZ(n==null?"unknown":n),null,null)}x=3
break
case 4:j.k(B.f,"\u6279\u91cf\u4e0a\u4f20\u5b8c\u6210\uff0c\u6210\u529f: "+q+"\uff0c\u5931\u8d25: "+p,null,null)
v=new C.ase(t,s,r,q,p)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$BJ,w)},
bas(d,e,f){return this.dFS(d,e,f)},
dFS(d,e,f){var x=0,w=A.l(y.F),v,u=this
var $async$bas=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:v=u.BJ(f,"product",d,"image",e,!0,"product,image")
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bas,w)},
bM5(d,e,f,g,h){return this.dFT(d,e,!0,g,h)},
dFT(d,e,f,g,h){var x=0,w=A.l(y.F),v,u=this
var $async$bM5=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:v=u.BJ(g,"store",d,"image",e,!0,h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bM5,w)},
bM6(d,e,f,g,h){return this.dFU(d,e,!0,g,h)},
dFU(d,e,f,g,h){var x=0,w=A.l(y.E),v,u=this
var $async$bM6=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:v=u.bar(h,"user",d,e,"image",!0,g)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bM6,w)},
bqQ(d,e,f,g,h){return this.dFK(d,e,f,!0,h)},
dFK(d,e,f,g,h){var x=0,w=A.l(y.E),v,u=this
var $async$bqQ=A.h(function(i,j){if(i===1)return A.i(j,w)
for(;;)switch(x){case 0:v=u.dFL(d,"chat",e,f,!0,h)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bqQ,w)}}
C.oZ.prototype={
l(d){var x=this
if(x.a)return"FileUploadResult.success(fileId: "+A.b(x.b)+", fileName: "+A.b(x.c)+", fileSize: "+A.b(x.d)+", uploadPath: "+A.b(x.e)+", presignedUrl: "+A.b(x.w)+", businessType: "+A.b(x.x)+", businessId: "+A.b(x.y)+", contentType: "+A.b(x.z)+", uploadTime: "+A.b(x.Q)+", description: "+A.b(x.as)+", tags: "+A.b(x.at)+", isPublic: "+A.b(x.ax)+", status: "+A.b(x.ay)+")"
else return"FileUploadResult.error(errorCode: "+A.b(x.f)+", errorMessage: "+A.b(x.r)+")"}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.D,[C.ase,C.uN,C.oZ])})()
var y={F:A.A("ase"),h:A.A("FF"),E:A.A("oZ"),n:A.A("v<oZ>"),x:A.A("v<o>"),r:A.A("v<y>"),l:A.A("k3"),v:A.A("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"enQ","b0l",()=>new C.uN(A.aW("FileUploadService")))})()};
(a=>{a["h/Lk8hYwWzjk0alCMBCtgkZ3cfE="]=a.current})($__dart_deferred_initializers__);