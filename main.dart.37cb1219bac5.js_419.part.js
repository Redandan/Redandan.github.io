((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,F,D,C={
pu(d,e){var x,w,v,u,t="HTTP connection failed",s="Failed to fetch",r="ClientException"
if(d instanceof B.iq){x=d.a
if(x===401||x===403)return e.ga54()
if(x===404)return e.ga56()
w=d.l(0)
if(A.b.t(w,t)||A.b.t(w,s)||A.b.t(w,r))return e.ga55()
if(x>=500)return e.gGD()
v=B.azS(d)
if((v==null?null:v.a==="BUSINESS_ERROR")===!0)return B.dZV(v,e.gGD())
return e.gGD()}u=J.at(d)
if(A.b.t(u,"403")||A.b.t(u,"401")||A.b.t(u,"\u672a\u767b\u5165")||A.b.t(u,"\u767b\u5165\u5df2\u904e\u671f"))return e.ga54()
if(A.b.t(u,t)||A.b.t(u,s)||A.b.t(u,r))return e.ga55()
if(A.b.t(u,"500")||A.b.t(u,"DATABASE_ERROR")||A.b.t(u,"Database Error")||A.b.t(u,"\u8cc7\u6599\u5eab\u64cd\u4f5c\u5931\u6557"))return e.gGD()
if(A.b.t(u,"404"))return e.ga56()
return u},
ay2(d,e){var x=d==null?null:d.l(d)
if(x==null)x=""
switch(x){case"OPEN":return e.gaSt()
case"REQUEST_RECEIVED":return e.gaSv()
case"SOURCING":case"SEARCHING":return e.gaSw()
case"HAS_OFFERS":case"SELLERS_RESPONDED":case"OFFERS_READY":return e.gaSr()
case"BUYER_DECISION_PENDING":case"BUYER_DECISION_NEEDED":return e.gaSm()
case"BUYER_SELECTED_OFFER":return e.gaSn()
case"MATCHED":case"PRODUCT_AVAILABLE":return e.gaSs()
case"COMPLETED":return e.gaSq()
case"CLOSED":return e.ga5d()
case"CLOSED_EXPIRED":case"EXPIRED":return e.gaSp()
case"CLOSED_BY_PLATFORM":return e.ga5d()
case"CANCELLED":case"CANCELLED_BY_BUYER":return e.gaSo()
default:return x.length===0?e.gaSu():x}},
dO9(d,e){var x,w
if(d==null)return"-"
x=A.k.Z(d,A.k.aA(d,1)===0?0:2)
w=e==null?null:e.l(0)
if(w==null)w=""
return A.b.G(x+" "+w)},
axV(d){var x
if(d==null)return""
x=d.fI()
return A.b.ck(A.h.l(B.bO(x)),2,"0")+"-"+A.b.ck(A.h.l(B.cv(x)),2,"0")+" "+A.b.ck(A.h.l(B.iE(x)),2,"0")+":"+A.b.ck(A.h.l(B.og(x)),2,"0")},
e4e(d,e){var x=d==null?null:d.l(0)
if(x==null)x=""
switch(x){case"PRICE_TOO_HIGH":return e.gaRz()
case"DELIVERY_TOO_SLOW":return e.gaRx()
case"WRONG_VERSION":return e.gaRL()
case"WRONG_SIZE":return e.gaRK()
case"WRONG_COLOR":return e.gaRJ()
case"MISSING_WARRANTY":return e.gaRI()
case"MISSING_COMPATIBILITY":return e.gaRw()
case"MISSING_PROOF":return e.gaRA()
case"QUALITY_TOO_LOW":return e.gaRB()
case"NOT_MATCHING_USE_CASE":return e.gaRH()
case"OTHER":return e.gaRy()
default:return x.length===0?e.gaRG():x}},
eWC(d,e){var x=d==null?null:d.a
if(x==null)x=""
switch(x){case"LOW":return e.ga5c()
case"MEDIUM":return e.gPc()
case"HIGH":return e.ga5b()
case"BLOCKING":return e.ga5a()
default:return x.length===0?e.gPc():x}},
elt(d){return""+B.bK(d)+"-"+A.b.ck(A.h.l(B.bO(d)),2,"0")+"-"+A.b.ck(A.h.l(B.cv(d)),2,"0")},
a5z:function a5z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a4Y:function a4Y(d,e,f){this.c=d
this.d=e
this.a=f},
Gb:function Gb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aq0:function aq0(d,e,f){this.c=d
this.d=e
this.a=f},
cYZ:function cYZ(d,e){this.a=d
this.b=e},
cZ_:function cZ_(d,e){this.a=d
this.b=e},
b_t:function b_t(d,e){this.c=d
this.a=e},
a5r:function a5r(d,e){this.c=d
this.a=e},
G5:function G5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cNy:function cNy(d){this.a=d},
w4:function w4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwB(d,e,f,g){return new C.aF2(e,f,d,g)},
aF2:function aF2(d,e,f,g){var _=this
_.a=d
_.b=e
_.e=f
_.f=g}},E,G,H,I,K
J=c[1]
B=c[0]
A=c[2]
F=c[556]
D=c[293]
C=a.updateHolder(c[173],C)
E=c[576]
G=c[472]
H=c[531]
I=c[581]
K=c[481]
C.a5z.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=B.t(d),n=B.f(d,A.c,y.F)
n.toString
x=y.u
w=B.a([],x)
v=q.e
if(v!=null){u=o.ok.at
v=B.a([B.P(B.d(v,p,p,p,p,p,u==null?p:u.aX(o.ax.b,A.aD),p,p,p),1,p)],x)
u=q.c.go
if(u!=null&&A.b.G(u).length!==0)v.push(D.fG(p,p,B.d(u,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,A.bU))
A.d.v(w,B.a([B.z(v,A.l,p,A.e,A.f,0,p,p),A.Q],x))}v=q.c
u=v.f
if(u==null)u=n.gGC()
t=o.ok.w
s=t==null
w.push(B.d(u,p,p,p,p,p,s?p:t.av(A.aD),p,p,p))
w.push(A.by)
u=v.at
if(u==null)u=v.y
r=v.z
u=C.dO9(u,r)
w.push(B.d(u,p,p,p,p,p,s?p:t.aX(o.ax.b,A.aD),p,p,p))
u=v.dx
t=u==null
s=t?v.cy:u
if((s==null?p:s.length!==0)===!0){if(t){u=v.cy
u.toString}A.d.v(w,B.a([A.by,B.d(u,p,p,p,p,p,p,p,p,p)],x))}w.push(A.u)
u=B.a([D.fG(p,p,B.d(C.ay2(v.dy,n),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p)],x)
t=v.ax
if((t==null?p:t.length!==0)===!0){t.toString
u.push(D.fG(p,p,B.d(t,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.Q
if(t!=null){s=v.as
u.push(D.fG(p,p,B.d(n.aSk(C.dO9(t,s==null?r:s)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.CW
if(t!=null&&A.b.G(t).length!==0)u.push(D.fG(p,p,B.d(n.aSX(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.cx
if(t!=null&&A.b.G(t).length!==0)u.push(D.fG(p,p,B.d(n.aS_(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.x
if(t!=null&&A.b.G(t).length!==0)u.push(D.fG(p,p,B.d(n.gaRo(),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
v=v.fr
if(v!=null)u.push(D.fG(p,p,B.d(n.aSS(C.axV(v)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
w.push(B.bi(A.a1,u,A.ad,p,8,8))
A.d.v(w,B.a([A.u,new B.cd(A.cE,p,p,q.d,p)],x))
return B.bd(p,p,B.w(w,A.m,p,A.e,A.f,0,A.j),p,A.ac,p,A.D,!1,p)}}
C.a4Y.prototype={
u(d){var x=null,w=B.f(d,A.c,y.F)
w.toString
return B.aM(new B.J(A.aX,B.w(B.a([E.aUs,A.u,B.d(this.c,x,4,A.S,x,x,x,A.aC,x,x),A.R,B.c6(B.d(w.geT(),x,x,x,x,x,x,x,x,x),x,this.d,x)],y.u),A.l,x,A.e,A.I,0,A.j),x),x,x,x)}}
C.Gb.prototype={
u(d){var x=null
return B.aM(new B.J(A.aX,B.w(B.a([B.S(this.c,x,x,x,48),A.u,B.d(this.d,x,x,x,x,x,B.t(d).ok.w,x,x,x),A.by,B.d(this.e,x,x,x,x,x,x,A.aC,x,x)],y.u),A.l,x,A.e,A.I,0,A.j),x),x,x,x)}}
C.aq0.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=B.f(d,A.c,y.F)
g.toString
x=this.c
w=x.ay
v=x.ch
u=w==null
if(u)t=v!=null&&A.b.G(v).length!==0
else t=!0
if(!t){s=x.ax
if(s==null)return A.ab
return new C.b_t(s,h)}r=B.t(d)
x=v!=null
q=x?g.gaRs():g.gaRv()
if(x)p=g.aRt(v)
else p=g.aRu(u?0:w)
o=r.ax
n=o.d
n=(n==null?o.b:n).B(0.24)
m=o.b
l=m.B(0.18)
m=B.S(A.e4,m,h,h,h)
k=r.ok
j=k.w
i=y.u
j=B.z(B.a([m,A.z,B.P(B.d(q,h,h,h,h,h,j==null?h:j.av(A.aD),h,h,h),1,h)],i),A.l,h,A.e,A.f,0,h,h)
k=k.Q
if(k==null)o=h
else{m=o.rx
o=k.a1(m==null?o.k3:m)}o=B.a([j,A.by,B.d(p,h,h,h,h,h,o,h,h,h)],i)
if(this.d){m=B.a([A.u],i)
if(x)m.push(B.bL(E.aUw,h,B.d(g.gaST(),h,h,h,h,h,h,h,h,h),new C.cYZ(d,v),h))
else if(!u)m.push(B.bL(H.TR,h,B.d(g.gaRn(),h,h,h,h,h,h,h,h,h),new C.cZ_(d,w),h))
A.d.v(o,m)}return B.bd(n,l,B.w(o,A.m,h,A.e,A.f,0,A.j),h,A.J,h,A.D,!1,h)}}
C.b_t.prototype={
u(d){var x,w,v,u,t,s=null,r=B.t(d),q=B.f(d,A.c,y.F)
q.toString
x=r.ax
w=B.S(G.lz,x.b,s,s,s)
v=q.gaRb()
u=r.ok
t=u.w
v=B.d(v,s,s,s,s,s,t==null?s:t.av(A.aD),s,s,s)
q=q.aRa(this.c)
u=u.Q
if(u==null)x=s
else{t=x.rx
x=u.a1(t==null?x.k3:t)}u=y.u
return B.bd(s,s,B.z(B.a([w,A.mn,B.P(B.w(B.a([v,A.Q,B.d(q,s,s,s,s,s,x,s,s,s)],u),A.m,s,A.e,A.f,0,A.j),1,s)],u),A.m,s,A.e,A.f,0,s,s),s,A.J,s,A.D,!1,s)}}
C.a5r.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=J.bS(n)
if(m.gaE(n))return A.ab
x=B.t(d)
w=B.f(d,A.c,y.F)
v=x.ok
u=B.d(w.gaRD(),o,o,o,o,o,v.w,o,o,o)
t=w.gaRC()
v=v.Q
if(v==null)v=o
else{s=x.ax
r=s.rx
v=v.a1(r==null?s.k3:r)}s=y.u
v=B.a([u,A.Q,B.d(t,o,o,o,o,o,v,o,o,o),A.u],s)
for(n=m.gap(n),m=x.ax.b,u=y.x;n.F();){t=n.gO()
r=B.S(F.pm,m,o,o,18)
q=B.a([],u)
if(t.w===!0)q.push(w.gaR3())
else{p=t.c
if(p!=null)q.push(w.aRQ(p))}q.push(C.e4e(t.e,w))
q.push(w.aSj(C.eWC(t.r,w)))
t=t.f
if((t==null?o:t.length!==0)===!0){t.toString
q.push(t)}v.push(new B.J(A.ac,new B.dq(A.aa,A.e,A.f,A.m,o,A.j,o,0,B.a([r,A.z,new B.dn(1,A.aK,B.d(A.d.b3(q," \xb7 "),o,o,o,o,o,o,o,o,o),o)],s),o),o))}return B.bd(o,o,B.w(v,A.m,o,A.e,A.f,0,A.j),o,A.J,o,A.D,!1,o)}}
C.G5.prototype={
u(d){var x=null,w=this.e
w=w==null?x:B.a([w],y.u)
return B.bQ(B.e1(w,x,!0,d,x,x,x,this.c),x,new B.dC(!0,!0,!0,!0,A.J,!1,B.d7(new C.cNy(this)),x),x,x,x,x,x)}}
C.w4.prototype={
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.t(d),m=B.f(d,A.c,y.F)
m.toString
x=p.c
w=x.z
v=C.ay2(w==null?x.y:w,m)
w=n.ax
u=w.b
t=u.B(0.12)
s=B.G(8)
s=B.X(o,B.S(A.xJ,u,o,o,o),A.o,o,o,new B.T(t,o,o,s,o,o,A.r),o,44,o,o,o,o,o,44)
t=x.c
u=t==null?x.e:t
if(u==null)u=m.gaSR()
t=n.ok
r=t.w
u=B.d(u,o,2,A.S,o,o,r==null?o:r.av(A.aD),o,o,o)
r=x.d
if(r==null)r=m.gaSW()
t=t.Q
if(t==null)w=o
else{q=w.rx
w=t.a1(q==null?w.k3:q)}w=B.d(r,o,2,A.S,o,o,w,o,o,o)
r=p.bKL(d,v)
t=x.at
if(t==null)t=x.as
q=y.u
t=B.a([r,p.bKL(d,m.aRO(t==null?0:t))],q)
x=x.db
if(x!=null)t.push(p.bKL(d,m.aRe(C.elt(x))))
m=B.a([s,A.al,B.P(B.w(B.a([u,A.by,w,K.dW,B.bi(A.a1,t,A.ad,o,8,8)],q),A.m,o,A.e,A.f,0,A.j),1,o)],q)
x=p.e
if(x!=null)A.d.v(m,B.a([A.z,x],q))
return B.bd(o,o,B.z(m,A.m,o,A.e,A.f,0,o,o),o,A.ac,p.d,A.D,!1,o)},
bKL(d,e){var x,w,v,u=null,t=B.t(d),s=t.ax,r=s.RG
if(r==null)r=s.k2
x=B.G(999)
w=t.ok.ax
if(w==null)s=u
else{v=s.rx
s=w.aX(v==null?s.k3:v,A.B)}return B.X(u,B.d(e,u,u,u,u,u,s,u,u,u),A.o,u,u,new B.T(r,u,u,x,u,u,A.r),u,u,u,u,I.t0,u,u,u)}}
C.aF2.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof C.aF2)if(e.a===w.a)if(e.b===w.b)if(e.e==w.e)x=e.f==w.f}else x=!0
return x},
gj(d){var x,w=this,v=A.h.gj(w.a),u=A.h.gj(w.b),t=w.e
t=t==null?0:A.b.gj(t)
x=w.f
x=x==null?0:A.b.gj(x)
return v+u+t+x},
l(d){var x=this
return"DemandSearchParam[page="+x.a+", size="+x.b+", startDate=null, endDate=null, keyword="+B.b(x.e)+", sortBy="+B.b(x.f)+", sortDirection=null, status=null, category=null, productType=null]"},
A(){var x,w=this,v=null,u=B.q(y.w,y.b)
u.h(0,"page",w.a)
u.h(0,"size",w.b)
u.h(0,"startDate",v)
u.h(0,"endDate",v)
x=w.e
if(x!=null)u.h(0,"keyword",x)
else u.h(0,"keyword",v)
x=w.f
if(x!=null)u.h(0,"sortBy",x)
else u.h(0,"sortBy",v)
u.h(0,"sortDirection",v)
u.h(0,"status",v)
u.h(0,"category",v)
u.h(0,"productType",v)
return u}}
var z=a.updateTypes([])
C.cYZ.prototype={
$0(){return B.aN(this.a,!1).f.kg("/orders/"+this.b,y.q)},
$S:0}
C.cZ_.prototype={
$0(){return B.aN(this.a,!1).f.kg("/products/"+this.b,y.q)},
$S:0}
C.cNy.prototype={
$2(d,e){var x=null,w=e.b,v=w<1/0?A.k.dh(w,0,1180):1180,u=e.d
u=u<1/0?u:B.aI(d,A.am,y.A).w.a.b
return new B.cd(A.cv,x,x,new B.ad(v,u,this.a.d,x),x)},
$S:558};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[C.a5z,C.a4Y,C.Gb,C.aq0,C.b_t,C.a5r,C.G5,C.w4])
x(B.bt,[C.cYZ,C.cZ_])
w(C.cNy,B.ca)
w(C.aF2,B.A)})()
B.b_(b.typeUniverse,JSON.parse('{"w4":{"x":[],"m":[]},"a5z":{"x":[],"m":[]},"a4Y":{"x":[],"m":[]},"Gb":{"x":[],"m":[]},"aq0":{"x":[],"m":[]},"b_t":{"x":[],"m":[]},"a5r":{"x":[],"m":[]},"G5":{"x":[],"m":[]}}'))
var y={F:B.B("by"),x:B.B("v<n>"),u:B.B("v<m>"),A:B.B("e8"),w:B.B("n"),b:B.B("@"),q:B.B("A?")};(function constants(){E.xC=new B.a0(58311,"MaterialIcons",!1)
E.aUs=new B.as(A.bg,44,null,null,null)
E.aUw=new B.as(A.c_,null,null,null,null)})()};
(a=>{a["40djjq9ni9nMD9bYnT6XbctQ8Dw="]=a.current})($__dart_deferred_initializers__);