((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,I,G,H,K,E,L,M,N,C={
KM(d,e){var x,w,v,u,t="HTTP connection failed",s="Failed to fetch",r="ClientException"
if(d instanceof B.kN){x=d.a
if(x===401||x===403)return e.gXA()
if(x===404)return e.gXC()
w=d.l(0)
if(A.b.t(w,t)||A.b.t(w,s)||A.b.t(w,r))return e.gXB()
if(x>=500)return e.gDy()
v=B.at3(d)
if((v==null?null:v.a==="BUSINESS_ERROR")===!0)return B.dtO(v,e.gDy())
return e.gDy()}u=J.ar(d)
if(A.b.t(u,"403")||A.b.t(u,"401")||A.b.t(u,"\u672a\u767b\u5165")||A.b.t(u,"\u767b\u5165\u5df2\u904e\u671f"))return e.gXA()
if(A.b.t(u,t)||A.b.t(u,s)||A.b.t(u,r))return e.gXB()
if(A.b.t(u,"500")||A.b.t(u,"DATABASE_ERROR")||A.b.t(u,"Database Error")||A.b.t(u,"\u8cc7\u6599\u5eab\u64cd\u4f5c\u5931\u6557"))return e.gDy()
if(A.b.t(u,"404"))return e.gXC()
return u},
dPR(d,e){var x=d==null?null:d.l(0)
if(x==null)x=""
switch(x){case"OPEN":return e.gaCM()
case"REQUEST_RECEIVED":return e.gaCO()
case"SOURCING":case"SEARCHING":return e.gaCP()
case"HAS_OFFERS":case"SELLERS_RESPONDED":case"OFFERS_READY":return e.gaCK()
case"BUYER_DECISION_PENDING":case"BUYER_DECISION_NEEDED":return e.gaCF()
case"BUYER_SELECTED_OFFER":return e.gaCG()
case"MATCHED":case"PRODUCT_AVAILABLE":return e.gaCL()
case"COMPLETED":return e.gaCJ()
case"CLOSED":return e.gXH()
case"CLOSED_EXPIRED":case"EXPIRED":return e.gaCI()
case"CLOSED_BY_PLATFORM":return e.gXH()
case"CANCELLED":case"CANCELLED_BY_BUYER":return e.gaCH()
default:return x.length===0?e.gaCN():x}},
dPa(d,e){var x,w
if(d==null)return"-"
x=A.j.a_(d,A.j.aq(d,1)===0?0:2)
w=e==null?null:e.l(0)
if(w==null)w=""
return A.b.H(x+" "+w)},
ej8(d){var x
if(d==null)return""
x=d.hf()
return A.b.dd(A.f.l(B.bO(x)),2,"0")+"-"+A.b.dd(A.f.l(B.ch(x)),2,"0")+" "+A.b.dd(A.f.l(B.jg(x)),2,"0")+":"+A.b.dd(A.f.l(B.rJ(x)),2,"0")},
el3(d,e){var x=d==null?null:d.a
if(x==null)x=""
switch(x){case"PRICE_TOO_HIGH":return e.gaC4()
case"DELIVERY_TOO_SLOW":return e.gaC2()
case"WRONG_VERSION":return e.gaCe()
case"WRONG_SIZE":return e.gaCd()
case"WRONG_COLOR":return e.gaCc()
case"MISSING_WARRANTY":return e.gaCb()
case"MISSING_COMPATIBILITY":return e.gaC1()
case"MISSING_PROOF":return e.gaC5()
case"QUALITY_TOO_LOW":return e.gaC6()
case"NOT_MATCHING_USE_CASE":return e.gaCa()
case"OTHER":return e.gaC3()
default:return x.length===0?e.gaC9():x}},
em_(d,e){var x=d==null?null:d.a
if(x==null)x=""
switch(x){case"LOW":return e.gaCD()
case"MEDIUM":return e.gXG()
case"HIGH":return e.gaCB()
case"BLOCKING":return e.gaCA()
default:return x.length===0?e.gXG():x}},
al0:function al0(d,e,f){this.c=d
this.d=e
this.a=f},
aj5:function aj5(d,e,f){this.c=d
this.d=e
this.a=f},
a0V:function a0V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akz:function akz(d,e){this.c=d
this.a=e},
aiw:function aiw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
csX:function csX(d){this.a=d},
x2:function x2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dEg(d,e){return new C.axW(d,e)},
axW:function axW(d,e){this.a=d
this.b=e}},F,D
J=c[1]
B=c[0]
A=c[2]
I=c[289]
G=c[257]
H=c[322]
K=c[260]
E=c[292]
L=c[537]
M=c[476]
N=c[622]
C=a.updateHolder(c[136],C)
F=c[517]
D=c[242]
C.al0.prototype={
u(d){var x,w,v,u,t,s,r,q=null,p=B.t(d),o=B.f(d,A.c,y.F)
o.toString
x=this.c
w=x.f
if(w==null)w=o.gaBT()
v=p.ok.w
u=v==null
w=B.d(w,q,q,q,q,q,u?q:v.aP(A.aT),q,q,q)
t=x.at
if(t==null)t=x.y
s=x.z
t=C.dPa(t,s)
r=y.u
v=B.a([w,E.bT,B.d(t,q,q,q,q,q,u?q:v.bW(p.ax.b,A.aT),q,q,q)],r)
w=x.dx
u=w==null
t=u?x.cy:w
if((t==null?q:t.length!==0)===!0){if(u){w=x.cy
w.toString}A.d.A(v,B.a([E.bT,B.d(w,q,q,q,q,q,q,q,q,q)],r))}v.push(A.x)
w=B.a([D.fC(q,q,B.d(C.dPR(x.dy,o),q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q)],r)
u=x.ax
if((u==null?q:u.length!==0)===!0){u.toString
w.push(D.fC(q,q,B.d(u,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q))}u=x.Q
if(u!=null){t=x.as
w.push(D.fC(q,q,B.d(o.aCE(C.dPa(u,t==null?s:t)),q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q))}u=x.CW
if(u!=null&&A.b.H(u).length!==0)w.push(D.fC(q,q,B.d(o.aCU(u),q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q))
u=x.cx
if(u!=null&&A.b.H(u).length!==0)w.push(D.fC(q,q,B.d(o.aCh(u),q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q))
u=x.x
if(u!=null&&A.b.H(u).length!==0)w.push(D.fC(q,q,B.d(o.gaBX(),q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q))
x=x.fr
if(x!=null)w.push(D.fC(q,q,B.d(o.aCS(C.ej8(x)),q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q))
v.push(B.bA(A.a6,w,A.aj,q,8,8))
A.d.A(v,B.a([A.x,new B.cB(A.cS,q,q,this.d,q)],r))
return G.bS(q,q,B.x(v,A.m,q,A.e,A.h,0,A.k),q,H.ai,q,A.I,!1,q)}}
C.aj5.prototype={
u(d){var x=null,w=B.f(d,A.c,y.F)
w.toString
return B.aY(new B.L(A.b0,B.x(B.a([F.aJa,A.x,B.d(this.c,x,4,A.X,x,x,x,A.aU,x,x),A.S,B.cX(B.d(w.gfT(),x,x,x,x,x,x,x,x,x),x,this.d,x)],y.u),A.l,x,A.e,A.F,0,A.k),x),x,x,x)}}
C.a0V.prototype={
u(d){var x=null
return B.aY(new B.L(A.b0,B.x(B.a([B.a0(this.c,x,x,48),A.x,B.d(this.d,x,x,x,x,x,B.t(d).ok.w,x,x,x),E.bT,B.d(this.e,x,x,x,x,x,x,A.aU,x,x)],y.u),A.l,x,A.e,A.F,0,A.k),x),x,x,x)}}
C.akz.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=J.bR(n)
if(m.gaC(n))return A.ag
x=B.t(d)
w=B.f(d,A.c,y.F)
v=x.ok
u=B.d(w.gaC8(),o,o,o,o,o,v.w,o,o,o)
t=w.gaC7()
v=v.Q
if(v==null)v=o
else{s=x.ax
r=s.rx
v=v.ac(r==null?s.k3:r)}s=y.u
v=B.a([u,A.T,B.d(t,o,o,o,o,o,v,o,o,o),A.x],s)
for(n=m.gap(n),m=x.ax.b,u=y.x;n.F();){t=n.gP()
r=B.a0(L.w1,m,o,18)
q=B.a([],u)
if(t.w===!0)q.push(w.gaBR())
else{p=t.c
if(p!=null)q.push(w.aCg(p))}q.push(C.el3(t.e,w))
q.push(w.aCC(C.em_(t.r,w)))
t=t.f
if((t==null?o:t.length!==0)===!0){t.toString
q.push(t)}v.push(new B.L(H.ai,new B.e8(A.af,A.e,A.h,A.m,o,A.k,o,0,B.a([r,A.B,new B.e1(1,A.aW,B.d(A.d.b6(q," \xb7 "),o,o,o,o,o,o,o,o,o),o)],s),o),o))}return G.bS(o,o,B.x(v,A.m,o,A.e,A.h,0,A.k),o,A.N,o,A.I,!1,o)}}
C.aiw.prototype={
u(d){var x=null,w=B.a([this.e],y.u)
return B.cU(K.fc(w,x,!0,d,x,x,x,this.c),x,new B.eQ(!0,!0,!0,!0,A.N,!1,new B.dA(new C.csX(this),x),x),x,x,x,x,x)}}
C.x2.prototype={
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.t(d),m=B.f(d,A.c,y.F)
m.toString
x=p.c
w=x.z
v=C.dPR(w==null?x.y:w,m)
w=n.ax
u=w.b
t=u.C(0.12)
s=B.K(8)
s=B.a6(o,B.a0(F.Ox,u,o,o),A.p,o,o,new B.a1(t,o,o,s,o,o,A.r),o,44,o,o,o,o,o,44)
t=x.c
u=t==null?x.e:t
if(u==null)u=m.gaCR()
t=n.ok
r=t.w
u=B.d(u,o,2,A.X,o,o,r==null?o:r.aP(A.aT),o,o,o)
r=x.d
if(r==null)r=m.gaCT()
t=t.Q
if(t==null)w=o
else{q=w.rx
w=t.ac(q==null?w.k3:q)}w=B.d(r,o,2,A.X,o,o,w,o,o,o)
r=p.bne(d,v)
t=x.at
if(t==null)t=x.as
q=y.u
t=B.a([r,p.bne(d,m.aCf(t==null?0:t))],q)
x=x.db
if(x!=null)t.push(p.bne(d,m.aBW(""+B.bC(x)+"-"+A.b.dd(A.f.l(B.bO(x)),2,"0")+"-"+A.b.dd(A.f.l(B.ch(x)),2,"0"))))
m=B.a([s,I.ap,B.Y(B.x(B.a([u,E.bT,w,M.f3,B.bA(A.a6,t,A.aj,o,8,8)],q),A.m,o,A.e,A.h,0,A.k),1,o)],q)
x=p.e
if(x!=null)A.d.A(m,B.a([A.B,x],q))
return G.bS(o,o,B.G(m,A.m,o,A.e,A.h,0,o,o),o,H.ai,p.d,A.I,!1,o)},
bne(d,e){var x,w,v,u=null,t=B.t(d),s=t.ax,r=s.RG
if(r==null)r=s.k2
x=B.K(999)
w=t.ok.ax
if(w==null)s=u
else{v=s.rx
s=w.bW(v==null?s.k3:v,A.H)}return B.a6(u,B.d(e,u,u,u,u,u,s,u,u,u),A.p,u,u,new B.a1(r,u,u,x,u,u,A.r),u,u,u,u,N.vj,u,u,u)}}
C.axW.prototype={
n(d,e){var x
if(e==null)return!1
if(this!==e){x=!1
if(e instanceof C.axW)if(e.a===this.a)x=e.b===this.b}else x=!0
return x},
gj(d){var x=A.f.gj(this.a),w=A.f.gj(this.b)
return x+w},
l(d){return"DemandSearchParam[page="+this.a+", size="+this.b+", startDate=null, endDate=null, keyword=null, sortBy=null, sortDirection=null, status=null, category=null, productType=null]"},
v(){var x=null,w=B.q(y.w,y.b)
w.h(0,"page",this.a)
w.h(0,"size",this.b)
w.h(0,"startDate",x)
w.h(0,"endDate",x)
w.h(0,"keyword",x)
w.h(0,"sortBy",x)
w.h(0,"sortDirection",x)
w.h(0,"status",x)
w.h(0,"category",x)
w.h(0,"productType",x)
return w}}
var z=a.updateTypes([])
C.csX.prototype={
$2(d,e){var x=null,w=e.b,v=w<1/0?A.j.dE(w,0,1180):1180,u=e.d
u=u<1/0?u:B.aF(d,A.ar,y.A).w.a.b
return new B.cB(A.e2,x,x,new B.ah(v,u,this.a.d,x),x)},
$S:1668};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.y,[C.al0,C.aj5,C.a0V,C.akz,C.aiw,C.x2])
w(C.csX,B.cp)
w(C.axW,B.A)})()
B.b0(b.typeUniverse,JSON.parse('{"x2":{"y":[],"n":[]},"al0":{"y":[],"n":[]},"aj5":{"y":[],"n":[]},"a0V":{"y":[],"n":[]},"akz":{"y":[],"n":[]},"aiw":{"y":[],"n":[]}}'))
var y={F:B.C("c_"),x:B.C("v<m>"),u:B.C("v<n>"),A:B.C("dS"),w:B.C("m"),b:B.C("@")};(function constants(){F.Ox=new B.Z(58706,"MaterialIcons",!1)
F.aJa=new B.av(A.bA,44,null,null,null)})()};
(a=>{a["hniaoBRKUtqVTgK8GLAge01xgAA="]=a.current})($__dart_deferred_initializers__);