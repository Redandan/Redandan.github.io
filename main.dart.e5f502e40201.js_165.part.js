((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHa(d,e,f){return new B.ad1(d,e,f,null)},
bHb(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.au(0,w.x3(A.an(x.Pt(w)/t,0,1)))},
eE9(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Pt(n),j=n.Pt(n),i=p.Pt(l),h=l.Pt(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHb(d,q,o),B.bHb(d,o,x),B.bHb(d,x,m),B.bHb(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
emR(d,e,f){return Math.log(f/d)/Math.log(e/100)},
enT(d,e){var x,w,v,u,t,s,r=new A.cZ(new Float64Array(16))
r.dV(d)
r.np(r)
x=e.a
w=e.b
v=new A.eE(new Float64Array(3))
v.iI(x,w,0)
v=r.qT(v)
u=e.c
t=new A.eE(new Float64Array(3))
t.iI(u,w,0)
t=r.qT(t)
w=e.d
s=new A.eE(new Float64Array(3))
s.iI(u,w,0)
s=r.qT(s)
u=new A.eE(new Float64Array(3))
u.iI(x,w,0)
u=r.qT(u)
x=new A.eE(new Float64Array(3))
x.dV(v)
w=new A.eE(new Float64Array(3))
w.dV(t)
v=new A.eE(new Float64Array(3))
v.dV(s)
t=new A.eE(new Float64Array(3))
t.dV(u)
return new E.a1H(x,w,v,t)},
emE(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.eE9(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e5e(x)},
e5e(d){return new A.M(A.nc(C.k.Z(d.a,9)),A.nc(C.k.Z(d.b,9)))},
eVD(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
ad1:function ad1(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apO:function apO(d,e,f,g){var _=this
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
cW3:function cW3(){},
b3P:function b3P(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ape:function ape(d,e){this.a=d
this.b=e},
awU:function awU(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[815]
E=c[279]
B.ad1.prototype={
O(){var x=null,w=y.z
return new B.apO(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apO.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.eiW()
this.d=x}return x},
gbrE(){var x,w=$.al.ad$.x.i(0,this.e).gaK()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.I.aXP(new A.ao(0,0,0+x.a,0+x.b))},
gbzd(){var x=$.al.ad$.x.i(0,this.f).gaK()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
a_l(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.O)){x=new A.cZ(new Float64Array(16))
x.dV(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cZ(new Float64Array(16))
w.dV(a0)
w.hC(a1.a,a1.b,0,1)
v=B.enT(w,d.gbzd())
if(d.gbrE().gcvU(0))return w
x=d.gbrE()
u=d.ay
t=new A.cZ(new Float64Array(16))
t.hD()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.hC(q/2,o/2,0,1)
t.zn(u)
t.hC(-q/2,-o/2,0,1)
u=new A.eE(new Float64Array(3))
u.iI(r,x,0)
u=t.qT(u)
q=new A.eE(new Float64Array(3))
q.iI(s,x,0)
q=t.qT(q)
x=new A.eE(new Float64Array(3))
x.iI(s,p,0)
x=t.qT(x)
s=new A.eE(new Float64Array(3))
s.iI(r,p,0)
s=t.qT(s)
r=new Float64Array(3)
new A.eE(r).dV(u)
u=new Float64Array(3)
new A.eE(u).dV(q)
q=new Float64Array(3)
new A.eE(q).dV(x)
x=new Float64Array(3)
new A.eE(x).dV(s)
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
x=new A.eE(new Float64Array(3))
x.iI(m,l,0)
u=new A.eE(new Float64Array(3))
u.iI(k,l,0)
s=new A.eE(new Float64Array(3))
s.iI(k,j,0)
r=new A.eE(new Float64Array(3))
r.iI(m,j,0)
q=new A.eE(new Float64Array(3))
q.dV(x)
x=new A.eE(new Float64Array(3))
x.dV(u)
u=new A.eE(new Float64Array(3))
u.dV(s)
s=new A.eE(new Float64Array(3))
s.dV(r)
i=new E.a1H(q,x,u,s)
h=B.emE(i,v)
if(h.p(0,C.O))return w
x=w.bHg().a
u=x[0]
x=x[1]
g=a0.IL()
u-=h.a*g
x-=h.b*g
f=new A.cZ(new Float64Array(16))
f.dV(a0)
s=new A.eE(new Float64Array(3))
s.iI(u,x,0)
f.c3z(s)
e=B.emE(i,B.enT(f,d.gbzd()))
if(e.p(0,C.O))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cZ(new Float64Array(16))
x.dV(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cZ(new Float64Array(16))
s.dV(a0)
r=new A.eE(new Float64Array(3))
r.iI(u,x,0)
s.c3z(r)
return s},
bOv(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cZ(new Float64Array(16))
x.dV(d)
return x}w=q.gfo().a.IL()
x=q.gbzd()
v=q.gbrE()
u=q.gbzd()
t=q.gbrE()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.cZ(new Float64Array(16))
x.dV(d)
x.r3(r,r,r,1)
return x},
dns(d,e,f){var x,w,v,u
if(e===0){x=new A.cZ(new Float64Array(16))
x.dV(d)
return x}w=this.gfo().qS(f)
x=new A.cZ(new Float64Array(16))
x.dV(d)
v=w.a
u=w.b
x.hC(v,u,0,1)
x.zn(-e)
x.hC(-v,-u,0,1)
return x},
btq(d){var x
A:{x=!0
if(D.ccv===d){x=!1
break A}if(D.Bg===d){this.a.toString
break A}if(D.vD===d||d==null){this.a.toString
break A}x=null}return x},
ccW(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bg
else return D.vD},
dqy(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hx()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbtY())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hx()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbu8())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IL()
v.as=v.gfo().qS(d.b)
v.ax=v.ay},
dqA(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IL(),p=r.x=d.c,o=r.gfo().qS(p),n=r.ch
if(n===D.vD)n=r.ch=r.ccW(d)
else if(n==null){n=r.ccW(d)
r.ch=n}if(!r.btq(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOv(r.gfo().a,n*d.d/q))
x=r.gfo().qS(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_l(w,x.aw(0,v)))
u=r.gfo().qS(p)
p=r.as
p.toString
if(!B.e5e(p).p(0,B.e5e(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.dns(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eVD(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gfo().sC(r.a_l(r.gfo().a,s))
r.as=r.gfo().qS(p)
break}r.a.toString},
dqw(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbtY())
x=m.w
if(x!=null)x.a.T(m.gbu8())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btq(x)){m.Q=null
return}A:{if(D.vD===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfo().a.bHg().a
v=w[0]
w=w[1]
m.a.toString
u=A.bCE(0.0000135,v,x.a,0)
m.a.toString
t=A.bCE(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.emR(x,0.0000135,10)
x=u.ga5U()
r=t.ga5U()
q=y.A
p=A.ds(C.mY,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dN(0,0,0,C.k.b0(s*1000),0)
p.a4(m.gbtY())
m.y.dz()
break A}if(D.Bg===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IL()
m.a.toString
n=A.bCE(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.emR(w,0.0000135,0.1)
x=n.lB(s)
w=y.f
v=A.ds(C.mY,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dN(0,0,0,C.k.b0(s*1000),0)
v.a4(m.gbu8())
m.z.dz()
break A}break A}},
dki(d){var x,w,v,u,t,s,r,q=this,p=d.gf4(),o=d.gbD()
if(y.l.b(d)){x=d.ghg()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvk())
w=d.gvk()
v=A.SC(d.gfi(),null,w,x)
if(!q.btq(D.vD)){q.a.toString
return}u=q.gfo().qS(p)
t=q.gfo().qS(p.aw(0,v))
q.gfo().sC(q.a_l(q.gfo().a,t.aw(0,u)))
q.a.toString
return}if(d.gvk().b===0)return
x=d.gvk()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjV()
else return
q.a.toString
if(!q.btq(D.Bg))return
u=q.gfo().qS(p)
q.gfo().sC(q.bOv(q.gfo().a,s))
r=q.gfo().qS(p)
q.gfo().sC(q.a_l(q.gfo().a,r.aw(0,u)))
q.a.toString},
dej(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbtY())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bHg().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_l(v,u.qS(t.b.aN(t.a.gC())).aw(0,s.gfo().qS(new A.M(x,r)))))},
dgv(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbu8())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IL()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qS(v)
s.gfo().sC(s.bOv(s.gfo().a,x/r))
t=s.gfo().qS(s.x)
s.gfo().sC(s.a_l(s.gfo().a,t.aw(0,u)))},
diz(){this.n(new B.cW3())},
Y(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gcey())},
aQ(d){this.aZ(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gcey())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cP0()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b3P(w,u.e,C.q,!0,x,t,t)
return A.Ry(C.hQ,A.ie(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdqv(),u.gdqx(),u.gdqz(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdkh(),t)}}
B.b3P.prototype={
u(d){var x=this,w=A.V1(x.w,new A.mU(x.c,x.d),null,x.r,!0)
return A.te(w,x.e,null)}}
B.ape.prototype={
W(){return"_GestureType."+this.b}}
B.awU.prototype={
cd(){this.df()
this.dl()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(TV)","~(TW)","~(LM)","~(mo)"])
B.cW3.prototype={
$0(){},
$S:0};(function aliases(){var x=B.awU.prototype
x.cP0=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apO.prototype,"gdqx","dqy",1)
x(v,"gdqz","dqA",2)
x(v,"gdqv","dqw",3)
x(v,"gdkh","dki",4)
w(v,"gbtY","dej",0)
w(v,"gbu8","dgv",0)
w(v,"gcey","diz",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ad1,A.L)
w(B.awU,A.S)
w(B.apO,B.awU)
w(B.cW3,A.bt)
w(B.b3P,A.x)
w(B.ape,A.eB)
x(B.awU,A.ft)})()
A.b0(b.typeUniverse,JSON.parse('{"ad1":{"L":[],"m":[]},"apO":{"S":["ad1"]},"b3P":{"x":[],"m":[]}}'))
var y={z:A.C("bh<S<L>>"),B:A.C("SG"),l:A.C("Ef"),g:A.C("ak"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vD=new B.ape(0,"pan")
D.Bg=new B.ape(1,"scale")
D.ccv=new B.ape(2,"rotate")})()};
(a=>{a["iVpl0KD/gk/H9UxtuPEP51pjgMQ="]=a.current})($__dart_deferred_initializers__);