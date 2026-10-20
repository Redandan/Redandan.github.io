((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,F,D,C={
oW(d,e){var x,w,v,u,t="HTTP connection failed",s="Failed to fetch",r="ClientException"
if(d instanceof B.i9){x=d.a
if(x===401||x===403)return e.ga49()
if(x===404)return e.ga4b()
w=d.l(0)
if(A.c.t(w,t)||A.c.t(w,s)||A.c.t(w,r))return e.ga4a()
if(x>=500)return e.gFY()
v=B.axw(d)
if((v==null?null:v.a==="BUSINESS_ERROR")===!0)return B.dUa(v,e.gFY())
return e.gFY()}u=J.as(d)
if(A.c.t(u,"403")||A.c.t(u,"401")||A.c.t(u,"\u672a\u767b\u5165")||A.c.t(u,"\u767b\u5165\u5df2\u904e\u671f"))return e.ga49()
if(A.c.t(u,t)||A.c.t(u,s)||A.c.t(u,r))return e.ga4a()
if(A.c.t(u,"500")||A.c.t(u,"DATABASE_ERROR")||A.c.t(u,"Database Error")||A.c.t(u,"\u8cc7\u6599\u5eab\u64cd\u4f5c\u5931\u6557"))return e.gFY()
if(A.c.t(u,"404"))return e.ga4b()
return u},
avJ(d,e){var x=d==null?null:d.l(d)
if(x==null)x=""
switch(x){case"OPEN":return e.gaRp()
case"REQUEST_RECEIVED":return e.gaRr()
case"SOURCING":case"SEARCHING":return e.gaRs()
case"HAS_OFFERS":case"SELLERS_RESPONDED":case"OFFERS_READY":return e.gaRn()
case"BUYER_DECISION_PENDING":case"BUYER_DECISION_NEEDED":return e.gaRi()
case"BUYER_SELECTED_OFFER":return e.gaRj()
case"MATCHED":case"PRODUCT_AVAILABLE":return e.gaRo()
case"COMPLETED":return e.gaRm()
case"CLOSED":return e.ga4i()
case"CLOSED_EXPIRED":case"EXPIRED":return e.gaRl()
case"CLOSED_BY_PLATFORM":return e.ga4i()
case"CANCELLED":case"CANCELLED_BY_BUYER":return e.gaRk()
default:return x.length===0?e.gaRq():x}},
dII(d,e){var x,w
if(d==null)return"-"
x=A.k.Z(d,A.k.aC(d,1)===0?0:2)
w=e==null?null:e.l(0)
if(w==null)w=""
return A.c.F(x+" "+w)},
avB(d){var x
if(d==null)return""
x=d.fC()
return A.c.cm(A.h.l(B.bL(x)),2,"0")+"-"+A.c.cm(A.h.l(B.cs(x)),2,"0")+" "+A.c.cm(A.h.l(B.iq(x)),2,"0")+":"+A.c.cm(A.h.l(B.nP(x)),2,"0")},
dZq(d,e){var x=d==null?null:d.l(0)
if(x==null)x=""
switch(x){case"PRICE_TOO_HIGH":return e.gaQv()
case"DELIVERY_TOO_SLOW":return e.gaQt()
case"WRONG_VERSION":return e.gaQH()
case"WRONG_SIZE":return e.gaQG()
case"WRONG_COLOR":return e.gaQF()
case"MISSING_WARRANTY":return e.gaQE()
case"MISSING_COMPATIBILITY":return e.gaQs()
case"MISSING_PROOF":return e.gaQw()
case"QUALITY_TOO_LOW":return e.gaQx()
case"NOT_MATCHING_USE_CASE":return e.gaQD()
case"OTHER":return e.gaQu()
default:return x.length===0?e.gaQC():x}},
eP7(d,e){var x=d==null?null:d.a
if(x==null)x=""
switch(x){case"LOW":return e.ga4h()
case"MEDIUM":return e.gOo()
case"HIGH":return e.ga4g()
case"BLOCKING":return e.ga4f()
default:return x.length===0?e.gOo():x}},
efk(d){return""+B.bG(d)+"-"+A.c.cm(A.h.l(B.bL(d)),2,"0")+"-"+A.c.cm(A.h.l(B.cs(d)),2,"0")},
a3N:function a3N(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3b:function a3b(d,e,f){this.c=d
this.d=e
this.a=f},
F5:function F5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anH:function anH(d,e,f){this.c=d
this.d=e
this.a=f},
cTX:function cTX(d,e){this.a=d
this.b=e},
cTY:function cTY(d,e){this.a=d
this.b=e},
aXb:function aXb(d,e){this.c=d
this.a=e},
a3F:function a3F(d,e){this.c=d
this.a=e},
F_:function F_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cIw:function cIw(d){this.a=d},
vm:function vm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bsM(d,e,f,g){return new C.aCy(e,f,d,g)},
aCy:function aCy(d,e,f,g){var _=this
_.a=d
_.b=e
_.e=f
_.f=g}},E,G,H,I,K
J=c[1]
B=c[0]
A=c[2]
F=c[557]
D=c[293]
C=a.updateHolder(c[173],C)
E=c[577]
G=c[472]
H=c[531]
I=c[582]
K=c[481]
C.a3N.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=B.t(d),n=B.f(d,A.b,y.F)
n.toString
x=y.u
w=B.a([],x)
v=q.e
if(v!=null){u=o.ok.at
v=B.a([B.R(B.d(v,p,p,p,p,p,u==null?p:u.aW(o.ax.b,A.aC),p,p,p),1,p)],x)
u=q.c.go
if(u!=null&&A.c.F(u).length!==0)v.push(D.fy(p,p,B.d(u,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,A.bP))
A.d.B(w,B.a([B.z(v,A.l,p,A.e,A.f,0,p,p),A.Q],x))}v=q.c
u=v.f
if(u==null)u=n.gFX()
t=o.ok.w
s=t==null
w.push(B.d(u,p,p,p,p,p,s?p:t.aq(A.aC),p,p,p))
w.push(A.bx)
u=v.at
if(u==null)u=v.y
r=v.z
u=C.dII(u,r)
w.push(B.d(u,p,p,p,p,p,s?p:t.aW(o.ax.b,A.aC),p,p,p))
u=v.dx
t=u==null
s=t?v.cy:u
if((s==null?p:s.length!==0)===!0){if(t){u=v.cy
u.toString}A.d.B(w,B.a([A.bx,B.d(u,p,p,p,p,p,p,p,p,p)],x))}w.push(A.v)
u=B.a([D.fy(p,p,B.d(C.avJ(v.dy,n),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p)],x)
t=v.ax
if((t==null?p:t.length!==0)===!0){t.toString
u.push(D.fy(p,p,B.d(t,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.Q
if(t!=null){s=v.as
u.push(D.fy(p,p,B.d(n.aRg(C.dII(t,s==null?r:s)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.CW
if(t!=null&&A.c.F(t).length!==0)u.push(D.fy(p,p,B.d(n.aRT(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.cx
if(t!=null&&A.c.F(t).length!==0)u.push(D.fy(p,p,B.d(n.aQW(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.x
if(t!=null&&A.c.F(t).length!==0)u.push(D.fy(p,p,B.d(n.gaQk(),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
v=v.fr
if(v!=null)u.push(D.fy(p,p,B.d(n.aRO(C.avB(v)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
w.push(B.bh(A.a1,u,A.ad,p,8,8))
A.d.B(w,B.a([A.v,new B.cc(A.cC,p,p,q.d,p)],x))
return B.bb(p,p,B.w(w,A.m,p,A.e,A.f,0,A.j),p,A.aa,p,A.E,!1,p)}}
C.a3b.prototype={
u(d){var x=null,w=B.f(d,A.b,y.F)
w.toString
return B.aK(new B.J(A.aW,B.w(B.a([E.aQ4,A.v,B.d(this.c,x,4,A.R,x,x,x,A.aH,x,x),A.S,B.c0(B.d(w.geN(),x,x,x,x,x,x,x,x,x),x,this.d,x)],y.u),A.l,x,A.e,A.I,0,A.j),x),x,x,x)}}
C.F5.prototype={
u(d){var x=null
return B.aK(new B.J(A.aW,B.w(B.a([B.P(this.c,x,x,x,48),A.v,B.d(this.d,x,x,x,x,x,B.t(d).ok.w,x,x,x),A.bx,B.d(this.e,x,x,x,x,x,x,A.aH,x,x)],y.u),A.l,x,A.e,A.I,0,A.j),x),x,x,x)}}
C.anH.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=B.f(d,A.b,y.F)
g.toString
x=this.c
w=x.ay
v=x.ch
u=w==null
if(u)t=v!=null&&A.c.F(v).length!==0
else t=!0
if(!t){s=x.ax
if(s==null)return A.ac
return new C.aXb(s,h)}r=B.t(d)
x=v!=null
q=x?g.gaQo():g.gaQr()
if(x)p=g.aQp(v)
else p=g.aQq(u?0:w)
o=r.ax
n=o.d
n=(n==null?o.b:n).A(0.24)
m=o.b
l=m.A(0.18)
m=B.P(A.e2,m,h,h,h)
k=r.ok
j=k.w
i=y.u
j=B.z(B.a([m,A.z,B.R(B.d(q,h,h,h,h,h,j==null?h:j.aq(A.aC),h,h,h),1,h)],i),A.l,h,A.e,A.f,0,h,h)
k=k.Q
if(k==null)o=h
else{m=o.rx
o=k.a1(m==null?o.k3:m)}o=B.a([j,A.bx,B.d(p,h,h,h,h,h,o,h,h,h)],i)
if(this.d){m=B.a([A.v],i)
if(x)m.push(B.bJ(E.aQ8,h,B.d(g.gaRP(),h,h,h,h,h,h,h,h,h),new C.cTX(d,v),h))
else if(!u)m.push(B.bJ(H.SP,h,B.d(g.gaQj(),h,h,h,h,h,h,h,h,h),new C.cTY(d,w),h))
A.d.B(o,m)}return B.bb(n,l,B.w(o,A.m,h,A.e,A.f,0,A.j),h,A.K,h,A.E,!1,h)}}
C.aXb.prototype={
u(d){var x,w,v,u,t,s=null,r=B.t(d),q=B.f(d,A.b,y.F)
q.toString
x=r.ax
w=B.P(G.lq,x.b,s,s,s)
v=q.gaQ7()
u=r.ok
t=u.w
v=B.d(v,s,s,s,s,s,t==null?s:t.aq(A.aC),s,s,s)
q=q.aQ6(this.c)
u=u.Q
if(u==null)x=s
else{t=x.rx
x=u.a1(t==null?x.k3:t)}u=y.u
return B.bb(s,s,B.z(B.a([w,A.mc,B.R(B.w(B.a([v,A.Q,B.d(q,s,s,s,s,s,x,s,s,s)],u),A.m,s,A.e,A.f,0,A.j),1,s)],u),A.m,s,A.e,A.f,0,s,s),s,A.K,s,A.E,!1,s)}}
C.a3F.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=J.bQ(n)
if(m.gaD(n))return A.ac
x=B.t(d)
w=B.f(d,A.b,y.F)
v=x.ok
u=B.d(w.gaQz(),o,o,o,o,o,v.w,o,o,o)
t=w.gaQy()
v=v.Q
if(v==null)v=o
else{s=x.ax
r=s.rx
v=v.a1(r==null?s.k3:r)}s=y.u
v=B.a([u,A.Q,B.d(t,o,o,o,o,o,v,o,o,o),A.v],s)
for(n=m.gap(n),m=x.ax.b,u=y.x;n.G();){t=n.gR()
r=B.P(F.pa,m,o,o,18)
q=B.a([],u)
if(t.w===!0)q.push(w.gaQ_())
else{p=t.c
if(p!=null)q.push(w.aQM(p))}q.push(C.dZq(t.e,w))
q.push(w.aRf(C.eP7(t.r,w)))
t=t.f
if((t==null?o:t.length!==0)===!0){t.toString
q.push(t)}v.push(new B.J(A.aa,new B.dk(A.a9,A.e,A.f,A.m,o,A.j,o,0,B.a([r,A.z,new B.df(1,A.aL,B.d(A.d.b2(q," \xb7 "),o,o,o,o,o,o,o,o,o),o)],s),o),o))}return B.bb(o,o,B.w(v,A.m,o,A.e,A.f,0,A.j),o,A.K,o,A.E,!1,o)}}
C.F_.prototype={
u(d){var x=null,w=this.e
w=w==null?x:B.a([w],y.u)
return B.bN(B.dU(w,x,!0,d,x,x,x,this.c),x,new B.dA(!0,!0,!0,!0,A.K,!1,B.da(new C.cIw(this)),x),x,x,x,x,x)}}
C.vm.prototype={
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.t(d),m=B.f(d,A.b,y.F)
m.toString
x=p.c
w=x.z
v=C.avJ(w==null?x.y:w,m)
w=n.ax
u=w.b
t=u.A(0.12)
s=B.G(8)
s=B.X(o,B.P(A.xn,u,o,o,o),A.o,o,o,new B.S(t,o,o,s,o,o,A.r),o,44,o,o,o,o,o,44)
t=x.c
u=t==null?x.e:t
if(u==null)u=m.gaRN()
t=n.ok
r=t.w
u=B.d(u,o,2,A.R,o,o,r==null?o:r.aq(A.aC),o,o,o)
r=x.d
if(r==null)r=m.gaRS()
t=t.Q
if(t==null)w=o
else{q=w.rx
w=t.a1(q==null?w.k3:q)}w=B.d(r,o,2,A.R,o,o,w,o,o,o)
r=p.bJn(d,v)
t=x.at
if(t==null)t=x.as
q=y.u
t=B.a([r,p.bJn(d,m.aQK(t==null?0:t))],q)
x=x.db
if(x!=null)t.push(p.bJn(d,m.aQa(C.efk(x))))
m=B.a([s,A.ak,B.R(B.w(B.a([u,A.bx,w,K.dT,B.bh(A.a1,t,A.ad,o,8,8)],q),A.m,o,A.e,A.f,0,A.j),1,o)],q)
x=p.e
if(x!=null)A.d.B(m,B.a([A.z,x],q))
return B.bb(o,o,B.z(m,A.m,o,A.e,A.f,0,o,o),o,A.aa,p.d,A.E,!1,o)},
bJn(d,e){var x,w,v,u=null,t=B.t(d),s=t.ax,r=s.RG
if(r==null)r=s.k2
x=B.G(999)
w=t.ok.ax
if(w==null)s=u
else{v=s.rx
s=w.aW(v==null?s.k3:v,A.B)}return B.X(u,B.d(e,u,u,u,u,u,s,u,u,u),A.o,u,u,new B.S(r,u,u,x,u,u,A.r),u,u,u,u,I.rJ,u,u,u)}}
C.aCy.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof C.aCy)if(e.a===w.a)if(e.b===w.b)if(e.e==w.e)x=e.f==w.f}else x=!0
return x},
gj(d){var x,w=this,v=A.h.gj(w.a),u=A.h.gj(w.b),t=w.e
t=t==null?0:A.c.gj(t)
x=w.f
x=x==null?0:A.c.gj(x)
return v+u+t+x},
l(d){var x=this
return"DemandSearchParam[page="+x.a+", size="+x.b+", startDate=null, endDate=null, keyword="+B.b(x.e)+", sortBy="+B.b(x.f)+", sortDirection=null, status=null, category=null, productType=null]"},
v(){var x,w=this,v=null,u=B.r(y.w,y.b)
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
C.cTX.prototype={
$0(){return B.aM(this.a,!1).f.k0("/orders/"+this.b,y.q)},
$S:0}
C.cTY.prototype={
$0(){return B.aM(this.a,!1).f.k0("/products/"+this.b,y.q)},
$S:0}
C.cIw.prototype={
$2(d,e){var x=null,w=e.b,v=w<1/0?A.k.dN(w,0,1180):1180,u=e.d
u=u<1/0?u:B.aI(d,A.ar,y.A).w.a.b
return new B.cc(A.cv,x,x,new B.ad(v,u,this.a.d,x),x)},
$S:1860};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[C.a3N,C.a3b,C.F5,C.anH,C.aXb,C.a3F,C.F_,C.vm])
x(B.bs,[C.cTX,C.cTY])
w(C.cIw,B.c5)
w(C.aCy,B.A)})()
B.aY(b.typeUniverse,JSON.parse('{"vm":{"x":[],"m":[]},"a3N":{"x":[],"m":[]},"a3b":{"x":[],"m":[]},"F5":{"x":[],"m":[]},"anH":{"x":[],"m":[]},"aXb":{"x":[],"m":[]},"a3F":{"x":[],"m":[]},"F_":{"x":[],"m":[]}}'))
var y={F:B.F("bv"),x:B.F("v<n>"),u:B.F("v<m>"),A:B.F("dZ"),w:B.F("n"),b:B.F("@"),q:B.F("A?")};(function constants(){E.xg=new B.a_(58311,"MaterialIcons",!1)
E.aQ4=new B.at(A.be,44,null,null,null)
E.aQ8=new B.at(A.bY,null,null,null,null)})()};
(a=>{a["x4pu5rpX3d4zb/Nu9CIzm5Knnf8="]=a.current})($__dart_deferred_initializers__);