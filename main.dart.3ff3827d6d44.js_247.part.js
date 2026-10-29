((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
dvp(d,e,f){return new B.a8d(d,e,f,null)},
btj(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.am(0,e)
w=f.am(0,e)
return e.al(0,w.vp(A.aj(x.KX(w)/t,0,1)))},
e4d(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.am(0,q),o=e.b,n=o.am(0,q),m=e.d,l=m.am(0,q),k=p.KX(n),j=n.KX(n),i=p.KX(l),h=l.KX(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.btj(d,q,o),B.btj(d,o,x),B.btj(d,x,m),B.btj(d,m,q)]
v=A.cv()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.au()},
dOS(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dPU(d,e){var x,w,v,u,t,s,r=new A.cF(new Float64Array(16))
r.dP(d)
r.mJ(r)
x=e.a
w=e.b
v=new A.ei(new Float64Array(3))
v.ih(x,w,0)
v=r.pM(v)
u=e.c
t=new A.ei(new Float64Array(3))
t.ih(u,w,0)
t=r.pM(t)
w=e.d
s=new A.ei(new Float64Array(3))
s.ih(u,w,0)
s=r.pM(s)
u=new A.ei(new Float64Array(3))
u.ih(x,w,0)
u=r.pM(u)
x=new A.ei(new Float64Array(3))
x.dP(v)
w=new A.ei(new Float64Array(3))
w.dP(t)
v=new A.ei(new Float64Array(3))
v.dP(s)
t=new A.ei(new Float64Array(3))
t.dP(u)
return new E.Yy(x,w,v,t)},
dOG(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.M,w=0;w<4;++w){v=r[w]
u=B.e4d(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.E(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.E(x.a,t)}return B.dyX(x)},
dyX(d){return new A.E(A.qK(C.j.a_(d.a,9)),A.qK(C.j.a_(d.b,9)))},
ek5(d,e){if(d.n(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.af:C.A},
a8d:function a8d(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
ak7:function ak7(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.dx$=f
_.dy$=g
_.c=_.a=null},
cAa:function cAa(){},
aVC:function aVC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ajA:function ajA(d,e){this.a=d
this.b=e},
aqn:function aqn(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[200],B)
D=c[740]
E=c[207]
B.a8d.prototype={
R(){var x=null,w=y.z
return new B.ak7(new A.b9(x,w),new A.b9(x,w),x,x)}}
B.ak7.prototype={
gfd(){var x=this.d
if(x===$){this.a.toString
x=E.dL6()
this.d=x}return x},
gb5Y(){var x,w=$.ao.a8$.x.i(0,this.e).gaL()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.N.aHH(new A.af(0,0,0+x.a,0+x.b))},
gbch(){var x=$.ao.a8$.x.i(0,this.f).gaL()
x.toString
x=y.g.a(x).gL()
return new A.af(0,0,0+x.a,0+x.b)},
T9(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.n(0,C.M)){x=new A.cF(new Float64Array(16))
x.dP(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cF(new Float64Array(16))
w.dP(a0)
w.hj(a1.a,a1.b,0,1)
v=B.dPU(w,d.gbch())
if(d.gb5Y().gc44(0))return w
x=d.gb5Y()
u=d.ay
t=new A.cF(new Float64Array(16))
t.hl()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.hj(q/2,o/2,0,1)
t.xu(u)
t.hj(-q/2,-o/2,0,1)
u=new A.ei(new Float64Array(3))
u.ih(r,x,0)
u=t.pM(u)
q=new A.ei(new Float64Array(3))
q.ih(s,x,0)
q=t.pM(q)
x=new A.ei(new Float64Array(3))
x.ih(s,p,0)
x=t.pM(x)
s=new A.ei(new Float64Array(3))
s.ih(r,p,0)
s=t.pM(s)
r=new Float64Array(3)
new A.ei(r).dP(u)
u=new Float64Array(3)
new A.ei(u).dP(q)
q=new Float64Array(3)
new A.ei(q).dP(x)
x=new Float64Array(3)
new A.ei(x).dP(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new A.ei(new Float64Array(3))
x.ih(m,l,0)
u=new A.ei(new Float64Array(3))
u.ih(k,l,0)
s=new A.ei(new Float64Array(3))
s.ih(k,j,0)
r=new A.ei(new Float64Array(3))
r.ih(m,j,0)
q=new A.ei(new Float64Array(3))
q.dP(x)
x=new A.ei(new Float64Array(3))
x.dP(u)
u=new A.ei(new Float64Array(3))
u.dP(s)
s=new A.ei(new Float64Array(3))
s.dP(r)
i=new E.Yy(q,x,u,s)
h=B.dOG(i,v)
if(h.n(0,C.M))return w
x=w.bjV().a
u=x[0]
x=x[1]
g=a0.Fp()
u-=h.a*g
x-=h.b*g
f=new A.cF(new Float64Array(16))
f.dP(a0)
s=new A.ei(new Float64Array(3))
s.ih(u,x,0)
f.bF8(s)
e=B.dOG(i,B.dPU(f,d.gbch()))
if(e.n(0,C.M))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cF(new Float64Array(16))
x.dP(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cF(new Float64Array(16))
s.dP(a0)
r=new A.ei(new Float64Array(3))
r.ih(u,x,0)
s.bF8(r)
return s},
bqp(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cF(new Float64Array(16))
x.dP(d)
return x}w=q.gfd().a.Fp()
x=q.gbch()
v=q.gb5Y()
u=q.gbch()
t=q.gb5Y()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.aj(s,t.ax,t.at)/w
x=new A.cF(new Float64Array(16))
x.dP(d)
x.pS(r,r,r,1)
return x},
cQA(d,e,f){var x,w,v,u
if(e===0){x=new A.cF(new Float64Array(16))
x.dP(d)
return x}w=this.gfd().pL(f)
x=new A.cF(new Float64Array(16))
x.dP(d)
v=w.a
u=w.b
x.hj(v,u,0,1)
x.xu(-e)
x.hj(-v,-u,0,1)
return x},
b7n(d){var x
A:{x=!0
if(D.bUl===d){x=!1
break A}if(D.zf===d){this.a.toString
break A}if(D.tW===d||d==null){this.a.toString
break A}x=null}return x},
bNE(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zf
else return D.tW},
cTh(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hg()
x=v.y
x.sB(x.a)
x=v.r
if(x!=null)x.a.S(v.gb7R())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hg()
x=v.z
x.sB(x.a)
x=v.w
if(x!=null)x.a.S(v.gb7X())
v.w=null}v.Q=v.ch=null
v.at=v.gfd().a.Fp()
v.as=v.gfd().pL(d.b)
v.ax=v.ay},
cTj(d){var x,w,v,u,t,s,r=this,q=r.gfd().a.Fp(),p=r.x=d.c,o=r.gfd().pL(p),n=r.ch
if(n===D.tW)n=r.ch=r.bNE(d)
else if(n==null){n=r.bNE(d)
r.ch=n}if(!r.b7n(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfd().sB(r.bqp(r.gfd().a,n*d.d/q))
x=r.gfd().pL(p)
n=r.gfd()
w=r.gfd().a
v=r.as
v.toString
n.sB(r.T9(w,x.am(0,v)))
u=r.gfd().pL(p)
p=r.as
p.toString
if(!B.dyX(p).n(0,B.dyX(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfd().sB(r.cQA(r.gfd().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.ek5(n,o)}n=r.as
n.toString
s=o.am(0,n)
r.gfd().sB(r.T9(r.gfd().a,s))
r.as=r.gfd().pL(p)
break}r.a.toString},
cTf(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.S(m.gb7R())
x=m.w
if(x!=null)x.a.S(m.gb7X())
x=m.y
x===$&&A.e()
x.sB(x.a)
x=m.z
x===$&&A.e()
x.sB(x.a)
x=m.ch
if(!m.b7n(x)){m.Q=null
return}A:{if(D.tW===x){x=d.a.a
if(x.gfl()<50){m.Q=null
return}w=m.gfd().a.bjV().a
v=w[0]
w=w[1]
m.a.toString
u=A.bpA(0.0000135,v,x.a,0)
m.a.toString
t=A.bpA(0.0000135,w,x.b,0)
x=x.gfl()
m.a.toString
s=B.dOS(x,0.0000135,10)
x=u.gYj()
r=t.gYj()
q=y.A
p=A.di(C.lQ,m.y,null)
m.r=new A.bf(p,new A.ba(new A.E(v,w),new A.E(x,r),q),q.k("bf<bs.T>"))
m.y.e=A.dP(0,0,0,C.j.aW(s*1000),0)
p.a4(m.gb7R())
m.y.dh()
break A}if(D.zf===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfd().a.Fp()
m.a.toString
n=A.bpA(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.dOS(w,0.0000135,0.1)
x=n.l1(s)
w=y.f
v=A.di(C.lQ,m.z,null)
m.w=new A.bf(v,new A.ba(o,x,w),w.k("bf<bs.T>"))
m.z.e=A.dP(0,0,0,C.j.aW(s*1000),0)
v.a4(m.gb7X())
m.z.dh()
break A}break A}},
cNR(d){var x,w,v,u,t,s,r,q=this,p=d.geW(),o=d.gbA()
if(y.l.b(d)){x=d.gfX()===C.ef
if(x)q.a.toString
if(x){q.a.toString
x=o.al(0,d.gtM())
w=d.gtM()
v=A.P2(d.gf4(),null,w,x)
if(!q.b7n(D.tW)){q.a.toString
return}u=q.gfd().pL(p)
t=q.gfd().pL(p.am(0,v))
q.gfd().sB(q.T9(q.gfd().a,t.am(0,u)))
q.a.toString
return}if(d.gtM().b===0)return
x=d.gtM()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjo()
else return
q.a.toString
if(!q.b7n(D.zf))return
u=q.gfd().pL(p)
q.gfd().sB(q.bqp(q.gfd().a,s))
r=q.gfd().pL(p)
q.gfd().sB(q.T9(q.gfd().a,r.am(0,u)))
q.a.toString},
cI9(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.S(s.gb7R())
s.r=null
r=s.y
r.sB(r.a)
return}r=s.gfd().a.bjV().a
x=r[0]
r=r[1]
w=s.gfd()
v=s.gfd().a
u=s.gfd()
t=s.r
w.sB(s.T9(v,u.pL(t.b.aM(t.a.gB())).am(0,s.gfd().pL(new A.E(x,r)))))},
cKf(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.S(s.gb7X())
s.w=null
r=s.z
r.sB(r.a)
return}r=s.w
x=r.b.aM(r.a.gB())
r=s.gfd().a.Fp()
w=s.gfd()
v=s.x
v===$&&A.e()
u=w.pL(v)
s.gfd().sB(s.bqp(s.gfd().a,x/r))
t=s.gfd().pL(s.x)
s.gfd().sB(s.T9(s.gfd().a,t.am(0,u)))},
cMe(){this.p(new B.cAa())},
Y(){var x=this,w=null
x.a9()
x.y=A.cx(w,w,w,1,w,x)
x.z=A.cx(w,w,w,1,w,x)
x.gfd().a4(x.gbP7())},
aU(d){this.b1(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfd().S(x.gbP7())
x.a.toString
w=x.gfd()
w.ok$=$.aa()
w.k4$=0
x.cli()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfd().a
w=u.a.w
v=new B.aVC(w,u.e,C.C,!0,x,t,t)
return A.NY(C.fQ,A.iB(C.c6,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gcTe(),u.gcTg(),u.gcTi(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.E(0,-0.005)),u.f,t,t,t,t,t,u.gcNQ(),t)}}
B.aVC.prototype={
u(d){var x=this,w=A.Rf(x.w,new A.lO(x.c,x.d),null,x.r,!0)
return A.ty(w,x.e,null)}}
B.ajA.prototype={
T(){return"_GestureType."+this.b}}
B.aqn.prototype={
cq(){this.ds()
this.dv()
this.hb()},
q(){var x=this,w=x.dy$
if(w!=null)w.S(x.gh3())
x.dy$=null
x.a7()}}
var z=a.updateTypes(["~()","~(Qa)","~(Qb)","~(Ir)","~(lT)"])
B.cAa.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aqn.prototype
x.cli=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ak7.prototype,"gcTg","cTh",1)
x(v,"gcTi","cTj",2)
x(v,"gcTe","cTf",3)
x(v,"gcNQ","cNR",4)
w(v,"gb7R","cI9",0)
w(v,"gb7X","cKf",0)
w(v,"gbP7","cMe",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.a8d,A.J)
w(B.aqn,A.M)
w(B.ak7,B.aqn)
w(B.cAa,A.bT)
w(B.aVC,A.y)
w(B.ajA,A.eb)
x(B.aqn,A.fJ)})()
A.b0(b.typeUniverse,JSON.parse('{"a8d":{"J":[],"n":[]},"ak7":{"M":["a8d"]},"aVC":{"y":[],"n":[]}}'))
var y={z:A.C("b9<M<J>>"),B:A.C("P6"),l:A.C("Ch"),g:A.C("ae"),A:A.C("ba<E>"),f:A.C("ba<T>")};(function constants(){D.tW=new B.ajA(0,"pan")
D.zf=new B.ajA(1,"scale")
D.bUl=new B.ajA(2,"rotate")})()};
(a=>{a["q/ubmt/XHf+sYG1t+8z0JtegGAk="]=a.current})($__dart_deferred_initializers__);