((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bIp(d,e,f){return new B.adx(d,e,f,null)},
bIq(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.x8(A.an(x.PB(w)/t,0,1)))},
eHf(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.PB(n),j=n.PB(n),i=p.PB(l),h=l.PB(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bIq(d,q,o),B.bIq(d,o,x),B.bIq(d,x,m),B.bIq(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
epN(d,e,f){return Math.log(f/d)/Math.log(e/100)},
eqQ(d,e){var x,w,v,u,t,s,r=new A.d0(new Float64Array(16))
r.dX(d)
r.nt(r)
x=e.a
w=e.b
v=new A.eH(new Float64Array(3))
v.iL(x,w,0)
v=r.qY(v)
u=e.c
t=new A.eH(new Float64Array(3))
t.iL(u,w,0)
t=r.qY(t)
w=e.d
s=new A.eH(new Float64Array(3))
s.iL(u,w,0)
s=r.qY(s)
u=new A.eH(new Float64Array(3))
u.iL(x,w,0)
u=r.qY(u)
x=new A.eH(new Float64Array(3))
x.dX(v)
w=new A.eH(new Float64Array(3))
w.dX(t)
v=new A.eH(new Float64Array(3))
v.dX(s)
t=new A.eH(new Float64Array(3))
t.dX(u)
return new E.a25(x,w,v,t)},
epA(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.N,w=0;w<4;++w){v=r[w]
u=B.eHf(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e86(x)},
e86(d){return new A.M(A.ng(C.k.Z(d.a,9)),A.ng(C.k.Z(d.b,9)))},
eYP(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
adx:function adx(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aqi:function aqi(d,e,f,g){var _=this
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
cXT:function cXT(){},
b4C:function b4C(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apJ:function apJ(d,e){this.a=d
this.b=e},
axr:function axr(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[817]
E=c[279]
B.adx.prototype={
O(){var x=null,w=y.z
return new B.aqi(new A.be(x,w),new A.be(x,w),x,x)}}
B.aqi.prototype={
gfq(){var x=this.d
if(x===$){this.a.toString
x=E.elR()
this.d=x}return x},
gbs5(){var x,w=$.ah.ac$.x.i(0,this.e).gaI()
w.toString
x=y.g.a(w).gN()
this.a.toString
return C.I.aYd(new A.ap(0,0,0+x.a,0+x.b))},
gbzM(){var x=$.ah.ac$.x.i(0,this.f).gaI()
x.toString
x=y.g.a(x).gN()
return new A.ap(0,0,0+x.a,0+x.b)},
a_y(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.N)){x=new A.d0(new Float64Array(16))
x.dX(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d0(new Float64Array(16))
w.dX(a0)
w.hD(a1.a,a1.b,0,1)
v=B.eqQ(w,d.gbzM())
if(d.gbs5().gcx7(0))return w
x=d.gbs5()
u=d.ay
t=new A.d0(new Float64Array(16))
t.hE()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.hD(q/2,o/2,0,1)
t.zp(u)
t.hD(-q/2,-o/2,0,1)
u=new A.eH(new Float64Array(3))
u.iL(r,x,0)
u=t.qY(u)
q=new A.eH(new Float64Array(3))
q.iL(s,x,0)
q=t.qY(q)
x=new A.eH(new Float64Array(3))
x.iL(s,p,0)
x=t.qY(x)
s=new A.eH(new Float64Array(3))
s.iL(r,p,0)
s=t.qY(s)
r=new Float64Array(3)
new A.eH(r).dX(u)
u=new Float64Array(3)
new A.eH(u).dX(q)
q=new Float64Array(3)
new A.eH(q).dX(x)
x=new Float64Array(3)
new A.eH(x).dX(s)
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
x=new A.eH(new Float64Array(3))
x.iL(m,l,0)
u=new A.eH(new Float64Array(3))
u.iL(k,l,0)
s=new A.eH(new Float64Array(3))
s.iL(k,j,0)
r=new A.eH(new Float64Array(3))
r.iL(m,j,0)
q=new A.eH(new Float64Array(3))
q.dX(x)
x=new A.eH(new Float64Array(3))
x.dX(u)
u=new A.eH(new Float64Array(3))
u.dX(s)
s=new A.eH(new Float64Array(3))
s.dX(r)
i=new E.a25(q,x,u,s)
h=B.epA(i,v)
if(h.p(0,C.N))return w
x=w.bHS().a
u=x[0]
x=x[1]
g=a0.IR()
u-=h.a*g
x-=h.b*g
f=new A.d0(new Float64Array(16))
f.dX(a0)
s=new A.eH(new Float64Array(3))
s.iL(u,x,0)
f.c4k(s)
e=B.epA(i,B.eqQ(f,d.gbzM()))
if(e.p(0,C.N))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d0(new Float64Array(16))
x.dX(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d0(new Float64Array(16))
s.dX(a0)
r=new A.eH(new Float64Array(3))
r.iL(u,x,0)
s.c4k(r)
return s},
bP8(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d0(new Float64Array(16))
x.dX(d)
return x}w=q.gfq().a.IR()
x=q.gbzM()
v=q.gbs5()
u=q.gbzM()
t=q.gbs5()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d0(new Float64Array(16))
x.dX(d)
x.r7(r,r,r,1)
return x},
dpd(d,e,f){var x,w,v,u
if(e===0){x=new A.d0(new Float64Array(16))
x.dX(d)
return x}w=this.gfq().qX(f)
x=new A.d0(new Float64Array(16))
x.dX(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zp(-e)
x.hD(-v,-u,0,1)
return x},
btS(d){var x
A:{x=!0
if(D.ccR===d){x=!1
break A}if(D.Bw===d){this.a.toString
break A}if(D.vL===d||d==null){this.a.toString
break A}x=null}return x},
cdQ(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bw
else return D.vL},
dsn(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbuq())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbuB())
v.w=null}v.Q=v.ch=null
v.at=v.gfq().a.IR()
v.as=v.gfq().qX(d.b)
v.ax=v.ay},
dsp(d){var x,w,v,u,t,s,r=this,q=r.gfq().a.IR(),p=r.x=d.c,o=r.gfq().qX(p),n=r.ch
if(n===D.vL)n=r.ch=r.cdQ(d)
else if(n==null){n=r.cdQ(d)
r.ch=n}if(!r.btS(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfq().sC(r.bP8(r.gfq().a,n*d.d/q))
x=r.gfq().qX(p)
n=r.gfq()
w=r.gfq().a
v=r.as
v.toString
n.sC(r.a_y(w,x.az(0,v)))
u=r.gfq().qX(p)
p=r.as
p.toString
if(!B.e86(p).p(0,B.e86(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfq().sC(r.dpd(r.gfq().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eYP(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfq().sC(r.a_y(r.gfq().a,s))
r.as=r.gfq().qX(p)
break}r.a.toString},
dsl(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbuq())
x=m.w
if(x!=null)x.a.T(m.gbuB())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btS(x)){m.Q=null
return}A:{if(D.vL===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfq().a.bHS().a
v=w[0]
w=w[1]
m.a.toString
u=A.bDF(0.0000135,v,x.a,0)
m.a.toString
t=A.bDF(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.epN(x,0.0000135,10)
x=u.ga69()
r=t.ga69()
q=y.A
p=A.dw(C.n_,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b1(s*1000),0)
p.a4(m.gbuq())
m.y.dC()
break A}if(D.Bw===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfq().a.IR()
m.a.toString
n=A.bDF(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.epN(w,0.0000135,0.1)
x=n.lF(s)
w=y.f
v=A.dw(C.n_,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b1(s*1000),0)
v.a4(m.gbuB())
m.z.dC()
break A}break A}},
dlV(d){var x,w,v,u,t,s,r,q=this,p=d.gf8(),o=d.gbu()
if(y.l.b(d)){x=d.ghj()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvm())
w=d.gvm()
v=A.SU(d.gfj(),null,w,x)
if(!q.btS(D.vL)){q.a.toString
return}u=q.gfq().qX(p)
t=q.gfq().qX(p.az(0,v))
q.gfq().sC(q.a_y(q.gfq().a,t.az(0,u)))
q.a.toString
return}if(d.gvm().b===0)return
x=d.gvm()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX()
else return
q.a.toString
if(!q.btS(D.Bw))return
u=q.gfq().qX(p)
q.gfq().sC(q.bP8(q.gfq().a,s))
r=q.gfq().qX(p)
q.gfq().sC(q.a_y(q.gfq().a,r.az(0,u)))
q.a.toString},
dfU(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbuq())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfq().a.bHS().a
x=r[0]
r=r[1]
w=s.gfq()
v=s.gfq().a
u=s.gfq()
t=s.r
w.sC(s.a_y(v,u.qX(t.b.aN(t.a.gC())).az(0,s.gfq().qX(new A.M(x,r)))))},
di5(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbuB())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfq().a.IR()
w=s.gfq()
v=s.x
v===$&&A.e()
u=w.qX(v)
s.gfq().sC(s.bP8(s.gfq().a,x/r))
t=s.gfq().qX(s.x)
s.gfq().sC(s.a_y(s.gfq().a,t.az(0,u)))},
dk9(){this.n(new B.cXT())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfq().a4(x.gcfs())},
aP(d){this.aZ(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfq().T(x.gcfs())
x.a.toString
w=x.gfq()
w.ok$=$.aa()
w.k4$=0
x.cQp()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfq().a
w=u.a.w
v=new B.b4C(w,u.e,C.q,!0,x,t,t)
return A.JY(C.ha,A.il(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdsk(),u.gdsm(),u.gdso(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdlU(),t)}}
B.b4C.prototype={
u(d){var x=this,w=A.Vi(x.w,new A.kv(x.c,x.d),null,x.r,!0)
return A.tm(w,x.e,null)}}
B.apJ.prototype={
W(){return"_GestureType."+this.b}}
B.axr.prototype={
cf(){this.dg()
this.dm()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(Ub)","~(Uc)","~(M_)","~(mz)"])
B.cXT.prototype={
$0(){},
$S:0};(function aliases(){var x=B.axr.prototype
x.cQp=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aqi.prototype,"gdsm","dsn",1)
x(v,"gdso","dsp",2)
x(v,"gdsk","dsl",3)
x(v,"gdlU","dlV",4)
w(v,"gbuq","dfU",0)
w(v,"gbuB","di5",0)
w(v,"gcfs","dk9",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.adx,A.K)
w(B.axr,A.Q)
w(B.aqi,B.axr)
w(B.cXT,A.bu)
w(B.b4C,A.x)
w(B.apJ,A.eD)
x(B.axr,A.fy)})()
A.b1(b.typeUniverse,JSON.parse('{"adx":{"K":[],"m":[]},"aqi":{"Q":["adx"]},"b4C":{"x":[],"m":[]}}'))
var y={z:A.D("be<Q<K>>"),B:A.D("SY"),l:A.D("Ev"),g:A.D("ai"),A:A.D("bn<M>"),f:A.D("bn<a4>")};(function constants(){D.vL=new B.apJ(0,"pan")
D.Bw=new B.apJ(1,"scale")
D.ccR=new B.apJ(2,"rotate")})()};
(a=>{a["biEKF3rSaI0WdVJbMqD2DQ53lyQ="]=a.current})($__dart_deferred_initializers__);