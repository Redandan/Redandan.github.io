((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,F,D,C={
pC(d,e){var x,w,v,u,t="HTTP connection failed",s="Failed to fetch",r="ClientException"
if(d instanceof B.hs){x=d.a
if(x===401||x===403)return e.ga5j()
if(x===404)return e.ga5l()
w=d.l(0)
if(A.b.t(w,t)||A.b.t(w,s)||A.b.t(w,r))return e.ga5k()
if(x>=500)return e.gGE()
v=B.aAy(d)
if((v==null?null:v.a==="BUSINESS_ERROR")===!0)return B.e2D(v,e.gGE())
return e.gGE()}u=J.as(d)
if(A.b.t(u,"403")||A.b.t(u,"401")||A.b.t(u,"\u672a\u767b\u5165")||A.b.t(u,"\u767b\u5165\u5df2\u904e\u671f"))return e.ga5j()
if(A.b.t(u,t)||A.b.t(u,s)||A.b.t(u,r))return e.ga5k()
if(A.b.t(u,"500")||A.b.t(u,"DATABASE_ERROR")||A.b.t(u,"Database Error")||A.b.t(u,"\u8cc7\u6599\u5eab\u64cd\u4f5c\u5931\u6557"))return e.gGE()
if(A.b.t(u,"404"))return e.ga5l()
return u},
ayJ(d,e){var x=d==null?null:d.l(d)
if(x==null)x=""
switch(x){case"OPEN":return e.gaST()
case"REQUEST_RECEIVED":return e.gaSV()
case"SOURCING":case"SEARCHING":return e.gaSW()
case"HAS_OFFERS":case"SELLERS_RESPONDED":case"OFFERS_READY":return e.gaSR()
case"BUYER_DECISION_PENDING":case"BUYER_DECISION_NEEDED":return e.gaSM()
case"BUYER_SELECTED_OFFER":return e.gaSN()
case"MATCHED":case"PRODUCT_AVAILABLE":return e.gaSS()
case"COMPLETED":return e.gaSQ()
case"CLOSED":return e.ga5s()
case"CLOSED_EXPIRED":case"EXPIRED":return e.gaSP()
case"CLOSED_BY_PLATFORM":return e.ga5s()
case"CANCELLED":case"CANCELLED_BY_BUYER":return e.gaSO()
default:return x.length===0?e.gaSU():x}},
dRX(d,e){var x,w
if(d==null)return"-"
x=A.k.Z(d,A.k.aA(d,1)===0?0:2)
w=e==null?null:e.l(0)
if(w==null)w=""
return A.b.F(x+" "+w)},
ayA(d){var x
if(d==null)return""
x=d.fK()
return A.b.cm(A.h.l(B.bR(x)),2,"0")+"-"+A.b.cm(A.h.l(B.cw(x)),2,"0")+" "+A.b.cm(A.h.l(B.iK(x)),2,"0")+":"+A.b.cm(A.h.l(B.on(x)),2,"0")},
e8_(d,e){var x=d==null?null:d.l(0)
if(x==null)x=""
switch(x){case"PRICE_TOO_HIGH":return e.gaRZ()
case"DELIVERY_TOO_SLOW":return e.gaRX()
case"WRONG_VERSION":return e.gaSa()
case"WRONG_SIZE":return e.gaS9()
case"WRONG_COLOR":return e.gaS8()
case"MISSING_WARRANTY":return e.gaS7()
case"MISSING_COMPATIBILITY":return e.gaRW()
case"MISSING_PROOF":return e.gaS_()
case"QUALITY_TOO_LOW":return e.gaS0()
case"NOT_MATCHING_USE_CASE":return e.gaS6()
case"OTHER":return e.gaRY()
default:return x.length===0?e.gaS5():x}},
f_M(d,e){var x=d==null?null:d.a
if(x==null)x=""
switch(x){case"LOW":return e.ga5r()
case"MEDIUM":return e.gPf()
case"HIGH":return e.ga5q()
case"BLOCKING":return e.ga5p()
default:return x.length===0?e.gPf():x}},
eph(d){return""+B.bL(d)+"-"+A.b.cm(A.h.l(B.bR(d)),2,"0")+"-"+A.b.cm(A.h.l(B.cw(d)),2,"0")},
a69:function a69(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a5x:function a5x(d,e,f){this.c=d
this.d=e
this.a=f},
Gr:function Gr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aqD:function aqD(d,e,f){this.c=d
this.d=e
this.a=f},
d0j:function d0j(d,e){this.a=d
this.b=e},
d0k:function d0k(d,e){this.a=d
this.b=e},
b0p:function b0p(d,e){this.c=d
this.a=e},
a60:function a60(d,e){this.c=d
this.a=e},
Gl:function Gl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPS:function cPS(d){this.a=d},
wg:function wg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bxN(d,e,f,g){return new C.aFK(e,f,d,g)},
aFK:function aFK(d,e,f,g){var _=this
_.a=d
_.b=e
_.e=f
_.f=g}},E,G,H,I,K
J=c[1]
B=c[0]
A=c[2]
F=c[556]
D=c[294]
C=a.updateHolder(c[173],C)
E=c[574]
G=c[469]
H=c[531]
I=c[579]
K=c[478]
C.a69.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=B.t(d),n=B.f(d,A.c,y.F)
n.toString
x=y.u
w=B.a([],x)
v=q.e
if(v!=null){u=o.ok.at
v=B.a([B.N(B.d(v,p,p,p,p,p,u==null?p:u.aX(o.ax.b,A.aA),p,p,p),1,p)],x)
u=q.c.go
if(u!=null&&A.b.F(u).length!==0)v.push(D.fJ(p,p,B.d(u,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,A.ca))
A.d.v(w,B.a([B.z(v,A.l,p,A.e,A.f,0,p,p),A.P],x))}v=q.c
u=v.f
if(u==null)u=n.gGD()
t=o.ok.w
s=t==null
w.push(B.d(u,p,p,p,p,p,s?p:t.av(A.aA),p,p,p))
w.push(A.by)
u=v.at
if(u==null)u=v.y
r=v.z
u=C.dRX(u,r)
w.push(B.d(u,p,p,p,p,p,s?p:t.aX(o.ax.b,A.aA),p,p,p))
u=v.dx
t=u==null
s=t?v.cy:u
if((s==null?p:s.length!==0)===!0){if(t){u=v.cy
u.toString}A.d.v(w,B.a([A.by,B.d(u,p,p,p,p,p,p,p,p,p)],x))}w.push(A.v)
u=B.a([D.fJ(p,p,B.d(C.ayJ(v.dy,n),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p)],x)
t=v.ax
if((t==null?p:t.length!==0)===!0){t.toString
u.push(D.fJ(p,p,B.d(t,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.Q
if(t!=null){s=v.as
u.push(D.fJ(p,p,B.d(n.aSK(C.dRX(t,s==null?r:s)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))}t=v.CW
if(t!=null&&A.b.F(t).length!==0)u.push(D.fJ(p,p,B.d(n.aTm(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.cx
if(t!=null&&A.b.F(t).length!==0)u.push(D.fJ(p,p,B.d(n.aSp(t),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
t=v.x
if(t!=null&&A.b.F(t).length!==0)u.push(D.fJ(p,p,B.d(n.gaRO(),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
v=v.fr
if(v!=null)u.push(D.fJ(p,p,B.d(n.aTh(C.ayA(v)),p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p))
w.push(B.bi(A.a0,u,A.ac,p,8,8))
A.d.v(w,B.a([A.v,new B.c9(A.cG,p,p,q.d,p)],x))
return B.bd(p,p,B.w(w,A.m,p,A.e,A.f,0,A.j),p,A.ab,p,A.C,!1,p)}}
C.a5x.prototype={
u(d){var x=null,w=B.f(d,A.c,y.F)
w.toString
return B.aM(new B.J(A.aU,B.w(B.a([E.aUv,A.v,B.d(this.c,x,4,A.R,x,x,x,A.az,x,x),A.Q,B.c4(B.d(w.geu(),x,x,x,x,x,x,x,x,x),x,this.d,x)],y.u),A.l,x,A.e,A.H,0,A.j),x),x,x,x)}}
C.Gr.prototype={
u(d){var x=null
return B.aM(new B.J(A.aU,B.w(B.a([B.T(this.c,x,x,x,48),A.v,B.d(this.d,x,x,x,x,x,B.t(d).ok.w,x,x,x),A.by,B.d(this.e,x,x,x,x,x,x,A.az,x,x)],y.u),A.l,x,A.e,A.H,0,A.j),x),x,x,x)}}
C.aqD.prototype={
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
return new C.b0p(s,h)}r=B.t(d)
x=v!=null
q=x?g.gaRS():g.gaRV()
if(x)p=g.aRT(v)
else p=g.aRU(u?0:w)
o=r.ax
n=o.d
n=(n==null?o.b:n).B(0.24)
m=o.b
l=m.B(0.18)
m=B.T(A.e7,m,h,h,h)
k=r.ok
j=k.w
i=y.u
j=B.z(B.a([m,A.z,B.N(B.d(q,h,h,h,h,h,j==null?h:j.av(A.aA),h,h,h),1,h)],i),A.l,h,A.e,A.f,0,h,h)
k=k.Q
if(k==null)o=h
else{m=o.rx
o=k.a0(m==null?o.k3:m)}o=B.a([j,A.by,B.d(p,h,h,h,h,h,o,h,h,h)],i)
if(this.d){m=B.a([A.v],i)
if(x)m.push(B.bJ(E.aUz,h,B.d(g.gaTi(),h,h,h,h,h,h,h,h,h),new C.d0j(d,v),h))
else if(!u)m.push(B.bJ(H.TX,h,B.d(g.gaRN(),h,h,h,h,h,h,h,h,h),new C.d0k(d,w),h))
A.d.v(o,m)}return B.bd(n,l,B.w(o,A.m,h,A.e,A.f,0,A.j),h,A.I,h,A.C,!1,h)}}
C.b0p.prototype={
u(d){var x,w,v,u,t,s=null,r=B.t(d),q=B.f(d,A.c,y.F)
q.toString
x=r.ax
w=B.T(G.lB,x.b,s,s,s)
v=q.gaRB()
u=r.ok
t=u.w
v=B.d(v,s,s,s,s,s,t==null?s:t.av(A.aA),s,s,s)
q=q.aRA(this.c)
u=u.Q
if(u==null)x=s
else{t=x.rx
x=u.a0(t==null?x.k3:t)}u=y.u
return B.bd(s,s,B.z(B.a([w,A.o7,B.N(B.w(B.a([v,A.P,B.d(q,s,s,s,s,s,x,s,s,s)],u),A.m,s,A.e,A.f,0,A.j),1,s)],u),A.m,s,A.e,A.f,0,s,s),s,A.I,s,A.C,!1,s)}}
C.a60.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=J.bW(n)
if(m.gaE(n))return A.a9
x=B.t(d)
w=B.f(d,A.c,y.F)
v=x.ok
u=B.d(w.gaS2(),o,o,o,o,o,v.w,o,o,o)
t=w.gaS1()
v=v.Q
if(v==null)v=o
else{s=x.ax
r=s.rx
v=v.a0(r==null?s.k3:r)}s=y.u
v=B.a([u,A.P,B.d(t,o,o,o,o,o,v,o,o,o),A.v],s)
for(n=m.gaq(n),m=x.ax.b,u=y.x;n.G();){t=n.gP()
r=B.T(F.pt,m,o,o,18)
q=B.a([],u)
if(t.w===!0)q.push(w.gaRt())
else{p=t.c
if(p!=null)q.push(w.aSf(p))}q.push(C.e8_(t.e,w))
q.push(w.aSJ(C.f_M(t.r,w)))
t=t.f
if((t==null?o:t.length!==0)===!0){t.toString
q.push(t)}v.push(new B.J(A.ab,new B.dp(A.aa,A.e,A.f,A.m,o,A.j,o,0,B.a([r,A.z,new B.dr(1,A.aI,B.d(A.d.b6(q," \xb7 "),o,o,o,o,o,o,o,o,o),o)],s),o),o))}return B.bd(o,o,B.w(v,A.m,o,A.e,A.f,0,A.j),o,A.I,o,A.C,!1,o)}}
C.Gl.prototype={
u(d){var x=null,w=this.e
w=w==null?x:B.a([w],y.u)
return B.bN(B.e1(w,x,!0,d,x,x,x,this.c),x,new B.dD(!0,!0,!0,!0,A.I,!1,new B.cP(new C.cPS(this),x),x),x,x,x,x,x)}}
C.wg.prototype={
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.t(d),m=B.f(d,A.c,y.F)
m.toString
x=p.c
w=x.z
v=C.ayJ(w==null?x.y:w,m)
w=n.ax
u=w.b
t=u.B(0.12)
s=B.G(8)
s=B.W(o,B.T(A.xR,u,o,o,o),A.o,o,o,new B.R(t,o,o,s,o,o,A.r),o,44,o,o,o,o,o,44)
t=x.c
u=t==null?x.e:t
if(u==null)u=m.gaTg()
t=n.ok
r=t.w
u=B.d(u,o,2,A.R,o,o,r==null?o:r.av(A.aA),o,o,o)
r=x.d
if(r==null)r=m.gaTl()
t=t.Q
if(t==null)w=o
else{q=w.rx
w=t.a0(q==null?w.k3:q)}w=B.d(r,o,2,A.R,o,o,w,o,o,o)
r=p.bLv(d,v)
t=x.at
if(t==null)t=x.as
q=y.u
t=B.a([r,p.bLv(d,m.aSd(t==null?0:t))],q)
x=x.db
if(x!=null)t.push(p.bLv(d,m.aRE(C.eph(x))))
m=B.a([s,A.aj,B.N(B.w(B.a([u,A.by,w,K.dZ,B.bi(A.a0,t,A.ac,o,8,8)],q),A.m,o,A.e,A.f,0,A.j),1,o)],q)
x=p.e
if(x!=null)A.d.v(m,B.a([A.z,x],q))
return B.bd(o,o,B.z(m,A.m,o,A.e,A.f,0,o,o),o,A.ab,p.d,A.C,!1,o)},
bLv(d,e){var x,w,v,u=null,t=B.t(d),s=t.ax,r=s.RG
if(r==null)r=s.k2
x=B.G(999)
w=t.ok.ax
if(w==null)s=u
else{v=s.rx
s=w.aX(v==null?s.k3:v,A.F)}return B.W(u,B.d(e,u,u,u,u,u,s,u,u,u),A.o,u,u,new B.R(r,u,u,x,u,u,A.r),u,u,u,u,I.ta,u,u,u)}}
C.aFK.prototype={
p(d,e){var x,w=this
if(e==null)return!1
if(w!==e){x=!1
if(e instanceof C.aFK)if(e.a===w.a)if(e.b===w.b)if(e.e==w.e)x=e.f==w.f}else x=!0
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
C.d0j.prototype={
$0(){return B.aJ(this.a,!1).f.ki("/orders/"+this.b,y.q)},
$S:0}
C.d0k.prototype={
$0(){return B.aJ(this.a,!1).f.ki("/products/"+this.b,y.q)},
$S:0}
C.cPS.prototype={
$2(d,e){var x=null,w=e.b,v=w<1/0?A.k.cU(w,0,1180):1180,u=e.d
u=u<1/0?u:B.aC(d,A.ai,y.A).w.a.b
return new B.c9(A.cy,x,x,new B.ad(v,u,this.a.d,x),x)},
$S:593};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[C.a69,C.a5x,C.Gr,C.aqD,C.b0p,C.a60,C.Gl,C.wg])
x(B.bu,[C.d0j,C.d0k])
w(C.cPS,B.c7)
w(C.aFK,B.B)})()
B.b1(b.typeUniverse,JSON.parse('{"wg":{"x":[],"m":[]},"a69":{"x":[],"m":[]},"a5x":{"x":[],"m":[]},"Gr":{"x":[],"m":[]},"aqD":{"x":[],"m":[]},"b0p":{"x":[],"m":[]},"a60":{"x":[],"m":[]},"Gl":{"x":[],"m":[]}}'))
var y={F:B.D("bv"),x:B.D("v<n>"),u:B.D("v<m>"),A:B.D("dZ"),w:B.D("n"),b:B.D("@"),q:B.D("B?")};(function constants(){E.xK=new B.a0(58311,"MaterialIcons",!1)
E.aUv=new B.at(A.bf,44,null,null,null)
E.aUz=new B.at(A.c0,null,null,null,null)})()};
(a=>{a["9VRlh5YnJNH0bVCstJ9bEKyUKA4="]=a.current})($__dart_deferred_initializers__);