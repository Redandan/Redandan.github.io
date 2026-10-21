((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,F,D,C={
pw(d,e){var x,w,v,u,t="HTTP connection failed",s="Failed to fetch",r="ClientException"
if(d instanceof B.hx){x=d.a
if(x===401||x===403)return e.ga56()
if(x===404)return e.ga58()
w=d.l(0)
if(A.b.t(w,t)||A.b.t(w,s)||A.b.t(w,r))return e.ga57()
if(x>=500)return e.gGD()
v=B.aA3(d)
if((v==null?null:v.a==="BUSINESS_ERROR")===!0)return B.e00(v,e.gGD())
return e.gGD()}u=J.as(d)
if(A.b.t(u,"403")||A.b.t(u,"401")||A.b.t(u,"\u672a\u767b\u5165")||A.b.t(u,"\u767b\u5165\u5df2\u904e\u671f"))return e.ga56()
if(A.b.t(u,t)||A.b.t(u,s)||A.b.t(u,r))return e.ga57()
if(A.b.t(u,"500")||A.b.t(u,"DATABASE_ERROR")||A.b.t(u,"Database Error")||A.b.t(u,"\u8cc7\u6599\u5eab\u64cd\u4f5c\u5931\u6557"))return e.gGD()
if(A.b.t(u,"404"))return e.ga58()
return u},
aye(d,e){var x=d==null?null:d.l(d)
if(x==null)x=""
switch(x){case"OPEN":return e.gaSx()
case"REQUEST_RECEIVED":return e.gaSz()
case"SOURCING":case"SEARCHING":return e.gaSA()
case"HAS_OFFERS":case"SELLERS_RESPONDED":case"OFFERS_READY":return e.gaSv()
case"BUYER_DECISION_PENDING":case"BUYER_DECISION_NEEDED":return e.gaSq()
case"BUYER_SELECTED_OFFER":return e.gaSr()
case"MATCHED":case"PRODUCT_AVAILABLE":return e.gaSw()
case"COMPLETED":return e.gaSu()
case"CLOSED":return e.ga5f()
case"CLOSED_EXPIRED":case"EXPIRED":return e.gaSt()
case"CLOSED_BY_PLATFORM":return e.ga5f()
case"CANCELLED":case"CANCELLED_BY_BUYER":return e.gaSs()
default:return x.length===0?e.gaSy():x}},
dPa(d,e){var x,w
if(d==null)return"-"
x=A.k.Z(d,A.k.aA(d,1)===0?0:2)
w=e==null?null:e.l(0)
if(w==null)w=""
return A.b.F(x+" "+w)},
ay6(d){var x
if(d==null)return""
x=d.fK()
return A.b.ck(A.h.l(B.bQ(x)),2,"0")+"-"+A.b.ck(A.h.l(B.cv(x)),2,"0")+" "+A.b.ck(A.h.l(B.iG(x)),2,"0")+":"+A.b.ck(A.h.l(B.oi(x)),2,"0")},
e5n(d,e){var x=d==null?null:d.l(0)
if(x==null)x=""
switch(x){case"PRICE_TOO_HIGH":return e.gaRD()
case"DELIVERY_TOO_SLOW":return e.gaRB()
case"WRONG_VERSION":return e.gaRP()
case"WRONG_SIZE":return e.gaRO()
case"WRONG_COLOR":return e.gaRN()
case"MISSING_WARRANTY":return e.gaRM()
case"MISSING_COMPATIBILITY":return e.gaRA()
case"MISSING_PROOF":return e.gaRE()
case"QUALITY_TOO_LOW":return e.gaRF()
case"NOT_MATCHING_USE_CASE":return e.gaRL()
case"OTHER":return e.gaRC()
default:return x.length===0?e.gaRK():x}},
eXN(d,e){var x=d==null?null:d.a
if(x==null)x=""
switch(x){case"LOW":return e.ga5e()
case"MEDIUM":return e.gP9()
case"HIGH":return e.ga5d()
case"BLOCKING":return e.ga5c()
default:return x.length===0?e.gP9():x}},
emA(d){return""+B.bL(d)+"-"+A.b.ck(A.h.l(B.bQ(d)),2,"0")+"-"+A.b.ck(A.h.l(B.cv(d)),2,"0")},
a5H:function a5H(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a55:function a55(d,e,f){this.c=d
this.d=e
this.a=f},
Gc:function Gc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aqb:function aqb(d,e,f){this.c=d
this.d=e
this.a=f},
cZu:function cZu(d,e){this.a=d
this.b=e},
cZv:function cZv(d,e){this.a=d
this.b=e},
b_H:function b_H(d,e){this.c=d
this.a=e},
a5z:function a5z(d,e){this.c=d
this.a=e},
G6:function G6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cO3:function cO3(d){this.a=d},
w7:function w7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwT(d,e,f,g){return new C.aFe(e,f,d,g)},
aFe:function aFe(d,e,f,g){var _=this
_.a=d
_.b=e
_.e=f
_.f=g}},E,G,H,I,K
J=c[1]
B=c[0]
A=c[2]
F=c[555]
D=c[292]
C=a.updateHolder(c[173],C)
E=c[573]
G=c[469]
H=c[530]
I=c[578]
K=c[478]
C.a5H.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=B.t(d),n=B.f(d,A.c,y.F)
n.toString
x=y.u
w=B.a([],x)
v=q.e
if(v!=null){u=o.ok.at
v=B.a([B.O(B.d(v,p,p,p,p,p,u==null?p:u.aX(o.ax.b,A.aA),p,p,p),1,p)],x)
u=q.c.go
if(u!=null&&A.b.F(u).length!==0)v.push(D.fG(p,p,B.d(u,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,A.c8))
A.d.v(w,B.a([B.z(v,A.l,p,A.e,A.f,0,p,p),A.P],x))}v=q.c
u=v.f
if(u==null)u=n.gGC()
t=o.ok.w
s=t==null
w.push(B.d(u,p,p,p,p,p,s?p:t.av(A.aA),p,p,p))
w.push(A.bw)
u=v.at
if(u==null)u=v.y
r=v.z
u=C.dPa(u,r)
w.push(B.d(u,p,p,p,p,p,s?p:t.aX(o.ax.b,A.aA),p,p,p))
u=v.dx
t=u==null
s=t?v.cy:u
if((s==null?p:s.length!==0)===!0){if(t){u=v.cy
u.toString}A.d.v(w,B.a([A.bw,B.d(u,p,p,p,p,p,p,p,p,p)],x))}w.push(A.v)
u=B.a([D.fG(p,p,B.d(C.aye(v.dy,n),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p)],x)
t=v.ax
if((t==null?p:t.length!==0)===!0){t.toString
u.push(D.fG(p,p,B.d(t,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.Q
if(t!=null){s=v.as
u.push(D.fG(p,p,B.d(n.aSo(C.dPa(t,s==null?r:s)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.CW
if(t!=null&&A.b.F(t).length!==0)u.push(D.fG(p,p,B.d(n.aT0(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.cx
if(t!=null&&A.b.F(t).length!==0)u.push(D.fG(p,p,B.d(n.aS3(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.x
if(t!=null&&A.b.F(t).length!==0)u.push(D.fG(p,p,B.d(n.gaRs(),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
v=v.fr
if(v!=null)u.push(D.fG(p,p,B.d(n.aSW(C.ay6(v)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
w.push(B.bi(A.a0,u,A.ac,p,8,8))
A.d.v(w,B.a([A.v,new B.c8(A.cF,p,p,q.d,p)],x))
return B.bd(p,p,B.w(w,A.m,p,A.e,A.f,0,A.j),p,A.ab,p,A.C,!1,p)}}
C.a55.prototype={
u(d){var x=null,w=B.f(d,A.c,y.F)
w.toString
return B.aM(new B.J(A.aU,B.w(B.a([E.aUm,A.v,B.d(this.c,x,4,A.R,x,x,x,A.az,x,x),A.Q,B.c6(B.d(w.ger(),x,x,x,x,x,x,x,x,x),x,this.d,x)],y.u),A.l,x,A.e,A.H,0,A.j),x),x,x,x)}}
C.Gc.prototype={
u(d){var x=null
return B.aM(new B.J(A.aU,B.w(B.a([B.T(this.c,x,x,x,48),A.v,B.d(this.d,x,x,x,x,x,B.t(d).ok.w,x,x,x),A.bw,B.d(this.e,x,x,x,x,x,x,A.az,x,x)],y.u),A.l,x,A.e,A.H,0,A.j),x),x,x,x)}}
C.aqb.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=B.f(d,A.c,y.F)
g.toString
x=this.c
w=x.ay
v=x.ch
u=w==null
if(u)t=v!=null&&A.b.F(v).length!==0
else t=!0
if(!t){s=x.ax
if(s==null)return A.a9
return new C.b_H(s,h)}r=B.t(d)
x=v!=null
q=x?g.gaRw():g.gaRz()
if(x)p=g.aRx(v)
else p=g.aRy(u?0:w)
o=r.ax
n=o.d
n=(n==null?o.b:n).B(0.24)
m=o.b
l=m.B(0.18)
m=B.T(A.e6,m,h,h,h)
k=r.ok
j=k.w
i=y.u
j=B.z(B.a([m,A.z,B.O(B.d(q,h,h,h,h,h,j==null?h:j.av(A.aA),h,h,h),1,h)],i),A.l,h,A.e,A.f,0,h,h)
k=k.Q
if(k==null)o=h
else{m=o.rx
o=k.a0(m==null?o.k3:m)}o=B.a([j,A.bw,B.d(p,h,h,h,h,h,o,h,h,h)],i)
if(this.d){m=B.a([A.v],i)
if(x)m.push(B.bI(E.aUq,h,B.d(g.gaSX(),h,h,h,h,h,h,h,h,h),new C.cZu(d,v),h))
else if(!u)m.push(B.bI(H.TT,h,B.d(g.gaRr(),h,h,h,h,h,h,h,h,h),new C.cZv(d,w),h))
A.d.v(o,m)}return B.bd(n,l,B.w(o,A.m,h,A.e,A.f,0,A.j),h,A.I,h,A.C,!1,h)}}
C.b_H.prototype={
u(d){var x,w,v,u,t,s=null,r=B.t(d),q=B.f(d,A.c,y.F)
q.toString
x=r.ax
w=B.T(G.lB,x.b,s,s,s)
v=q.gaRf()
u=r.ok
t=u.w
v=B.d(v,s,s,s,s,s,t==null?s:t.av(A.aA),s,s,s)
q=q.aRe(this.c)
u=u.Q
if(u==null)x=s
else{t=x.rx
x=u.a0(t==null?x.k3:t)}u=y.u
return B.bd(s,s,B.z(B.a([w,A.o6,B.O(B.w(B.a([v,A.P,B.d(q,s,s,s,s,s,x,s,s,s)],u),A.m,s,A.e,A.f,0,A.j),1,s)],u),A.m,s,A.e,A.f,0,s,s),s,A.I,s,A.C,!1,s)}}
C.a5z.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=J.bS(n)
if(m.gaD(n))return A.a9
x=B.t(d)
w=B.f(d,A.c,y.F)
v=x.ok
u=B.d(w.gaRH(),o,o,o,o,o,v.w,o,o,o)
t=w.gaRG()
v=v.Q
if(v==null)v=o
else{s=x.ax
r=s.rx
v=v.a0(r==null?s.k3:r)}s=y.u
v=B.a([u,A.P,B.d(t,o,o,o,o,o,v,o,o,o),A.v],s)
for(n=m.gap(n),m=x.ax.b,u=y.x;n.G();){t=n.gP()
r=B.T(F.pn,m,o,o,18)
q=B.a([],u)
if(t.w===!0)q.push(w.gaR7())
else{p=t.c
if(p!=null)q.push(w.aRU(p))}q.push(C.e5n(t.e,w))
q.push(w.aSn(C.eXN(t.r,w)))
t=t.f
if((t==null?o:t.length!==0)===!0){t.toString
q.push(t)}v.push(new B.J(A.ab,new B.dj(A.aa,A.e,A.f,A.m,o,A.j,o,0,B.a([r,A.z,new B.dp(1,A.aH,B.d(A.d.b6(q," \xb7 "),o,o,o,o,o,o,o,o,o),o)],s),o),o))}return B.bd(o,o,B.w(v,A.m,o,A.e,A.f,0,A.j),o,A.I,o,A.C,!1,o)}}
C.G6.prototype={
u(d){var x=null,w=this.e
w=w==null?x:B.a([w],y.u)
return B.bN(B.e_(w,x,!0,d,x,x,x,this.c),x,new B.dA(!0,!0,!0,!0,A.I,!1,B.cZ(new C.cO3(this)),x),x,x,x,x,x)}}
C.w7.prototype={
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.t(d),m=B.f(d,A.c,y.F)
m.toString
x=p.c
w=x.z
v=C.aye(w==null?x.y:w,m)
w=n.ax
u=w.b
t=u.B(0.12)
s=B.G(8)
s=B.W(o,B.T(A.xL,u,o,o,o),A.o,o,o,new B.R(t,o,o,s,o,o,A.r),o,44,o,o,o,o,o,44)
t=x.c
u=t==null?x.e:t
if(u==null)u=m.gaSV()
t=n.ok
r=t.w
u=B.d(u,o,2,A.R,o,o,r==null?o:r.av(A.aA),o,o,o)
r=x.d
if(r==null)r=m.gaT_()
t=t.Q
if(t==null)w=o
else{q=w.rx
w=t.a0(q==null?w.k3:q)}w=B.d(r,o,2,A.R,o,o,w,o,o,o)
r=p.bKZ(d,v)
t=x.at
if(t==null)t=x.as
q=y.u
t=B.a([r,p.bKZ(d,m.aRS(t==null?0:t))],q)
x=x.db
if(x!=null)t.push(p.bKZ(d,m.aRi(C.emA(x))))
m=B.a([s,A.ai,B.O(B.w(B.a([u,A.bw,w,K.dY,B.bi(A.a0,t,A.ac,o,8,8)],q),A.m,o,A.e,A.f,0,A.j),1,o)],q)
x=p.e
if(x!=null)A.d.v(m,B.a([A.z,x],q))
return B.bd(o,o,B.z(m,A.m,o,A.e,A.f,0,o,o),o,A.ab,p.d,A.C,!1,o)},
bKZ(d,e){var x,w,v,u=null,t=B.t(d),s=t.ax,r=s.RG
if(r==null)r=s.k2
x=B.G(999)
w=t.ok.ax
if(w==null)s=u
else{v=s.rx
s=w.aX(v==null?s.k3:v,A.F)}return B.W(u,B.d(e,u,u,u,u,u,s,u,u,u),A.o,u,u,new B.R(r,u,u,x,u,u,A.r),u,u,u,u,I.t4,u,u,u)}}
C.aFe.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof C.aFe)if(e.a===w.a)if(e.b===w.b)if(e.e==w.e)x=e.f==w.f}else x=!0
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
C.cZu.prototype={
$0(){return B.aK(this.a,!1).f.kg("/orders/"+this.b,y.q)},
$S:0}
C.cZv.prototype={
$0(){return B.aK(this.a,!1).f.kg("/products/"+this.b,y.q)},
$S:0}
C.cO3.prototype={
$2(d,e){var x=null,w=e.b,v=w<1/0?A.k.dh(w,0,1180):1180,u=e.d
u=u<1/0?u:B.aI(d,A.aj,y.A).w.a.b
return new B.c8(A.cw,x,x,new B.ad(v,u,this.a.d,x),x)},
$S:587};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[C.a5H,C.a55,C.Gc,C.aqb,C.b_H,C.a5z,C.G6,C.w7])
x(B.bt,[C.cZu,C.cZv])
w(C.cO3,B.c9)
w(C.aFe,B.A)})()
B.b0(b.typeUniverse,JSON.parse('{"w7":{"x":[],"m":[]},"a5H":{"x":[],"m":[]},"a55":{"x":[],"m":[]},"Gc":{"x":[],"m":[]},"aqb":{"x":[],"m":[]},"b_H":{"x":[],"m":[]},"a5z":{"x":[],"m":[]},"G6":{"x":[],"m":[]}}'))
var y={F:B.C("bw"),x:B.C("v<n>"),u:B.C("v<m>"),A:B.C("e2"),w:B.C("n"),b:B.C("@"),q:B.C("A?")};(function constants(){E.xE=new B.a0(58311,"MaterialIcons",!1)
E.aUm=new B.at(A.be,44,null,null,null)
E.aUq=new B.at(A.c0,null,null,null,null)})()};
(a=>{a["6wzh7frhKzF0yrsMRcmkxLDZkZ8="]=a.current})($__dart_deferred_initializers__);