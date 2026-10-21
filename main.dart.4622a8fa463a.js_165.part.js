((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bGZ(d,e,f){return new B.acU(d,e,f,null)},
bH_(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.au(0,w.wZ(A.an(x.Pp(w)/t,0,1)))},
eDl(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Pp(n),j=n.Pp(n),i=p.Pp(l),h=l.Pp(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bH_(d,q,o),B.bH_(d,o,x),B.bH_(d,x,m),B.bH_(d,m,q)]
v=A.cG()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
em3(d,e,f){return Math.log(f/d)/Math.log(e/100)},
en5(d,e){var x,w,v,u,t,s,r=new A.cZ(new Float64Array(16))
r.dT(d)
r.no(r)
x=e.a
w=e.b
v=new A.eE(new Float64Array(3))
v.iI(x,w,0)
v=r.qR(v)
u=e.c
t=new A.eE(new Float64Array(3))
t.iI(u,w,0)
t=r.qR(t)
w=e.d
s=new A.eE(new Float64Array(3))
s.iI(u,w,0)
s=r.qR(s)
u=new A.eE(new Float64Array(3))
u.iI(x,w,0)
u=r.qR(u)
x=new A.eE(new Float64Array(3))
x.dT(v)
w=new A.eE(new Float64Array(3))
w.dT(t)
v=new A.eE(new Float64Array(3))
v.dT(s)
t=new A.eE(new Float64Array(3))
t.dT(u)
return new E.a1C(x,w,v,t)},
elR(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.P,w=0;w<4;++w){v=r[w]
u=B.eDl(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.N(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.N(x.a,t)}return B.e4t(x)},
e4t(d){return new A.N(A.na(C.k.Z(d.a,9)),A.na(C.k.Z(d.b,9)))},
eUN(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.ab:C.y},
acU:function acU(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apG:function apG(d,e,f,g){var _=this
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
cVD:function cVD(){},
b3G:function b3G(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ap6:function ap6(d,e){this.a=d
this.b=e},
awM:function awM(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[272],B)
D=c[815]
E=c[278]
B.acU.prototype={
P(){var x=null,w=y.z
return new B.apG(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apG.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.ei9()
this.d=x}return x},
gbrA(){var x,w=$.al.ad$.x.i(0,this.e).gaK()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.J.aXN(new A.ao(0,0,0+x.a,0+x.b))},
gbz8(){var x=$.al.ad$.x.i(0,this.f).gaK()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
a_i(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.P)){x=new A.cZ(new Float64Array(16))
x.dT(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cZ(new Float64Array(16))
w.dT(a0)
w.hC(a1.a,a1.b,0,1)
v=B.en5(w,d.gbz8())
if(d.gbrA().gcvJ(0))return w
x=d.gbrA()
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
t.zk(u)
t.hC(-q/2,-o/2,0,1)
u=new A.eE(new Float64Array(3))
u.iI(r,x,0)
u=t.qR(u)
q=new A.eE(new Float64Array(3))
q.iI(s,x,0)
q=t.qR(q)
x=new A.eE(new Float64Array(3))
x.iI(s,p,0)
x=t.qR(x)
s=new A.eE(new Float64Array(3))
s.iI(r,p,0)
s=t.qR(s)
r=new Float64Array(3)
new A.eE(r).dT(u)
u=new Float64Array(3)
new A.eE(u).dT(q)
q=new Float64Array(3)
new A.eE(q).dT(x)
x=new Float64Array(3)
new A.eE(x).dT(s)
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
q.dT(x)
x=new A.eE(new Float64Array(3))
x.dT(u)
u=new A.eE(new Float64Array(3))
u.dT(s)
s=new A.eE(new Float64Array(3))
s.dT(r)
i=new E.a1C(q,x,u,s)
h=B.elR(i,v)
if(h.p(0,C.P))return w
x=w.bHa().a
u=x[0]
x=x[1]
g=a0.IK()
u-=h.a*g
x-=h.b*g
f=new A.cZ(new Float64Array(16))
f.dT(a0)
s=new A.eE(new Float64Array(3))
s.iI(u,x,0)
f.c3r(s)
e=B.elR(i,B.en5(f,d.gbz8()))
if(e.p(0,C.P))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cZ(new Float64Array(16))
x.dT(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cZ(new Float64Array(16))
s.dT(a0)
r=new A.eE(new Float64Array(3))
r.iI(u,x,0)
s.c3r(r)
return s},
bOq(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cZ(new Float64Array(16))
x.dT(d)
return x}w=q.gfo().a.IK()
x=q.gbz8()
v=q.gbrA()
u=q.gbz8()
t=q.gbrA()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.cZ(new Float64Array(16))
x.dT(d)
x.r1(r,r,r,1)
return x},
dnh(d,e,f){var x,w,v,u
if(e===0){x=new A.cZ(new Float64Array(16))
x.dT(d)
return x}w=this.gfo().qQ(f)
x=new A.cZ(new Float64Array(16))
x.dT(d)
v=w.a
u=w.b
x.hC(v,u,0,1)
x.zk(-e)
x.hC(-v,-u,0,1)
return x},
btm(d){var x
A:{x=!0
if(D.ccr===d){x=!1
break A}if(D.Bh===d){this.a.toString
break A}if(D.vB===d||d==null){this.a.toString
break A}x=null}return x},
ccL(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bh
else return D.vB},
dqn(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hx()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbtU())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hx()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbu4())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IK()
v.as=v.gfo().qQ(d.b)
v.ax=v.ay},
dqp(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IK(),p=r.x=d.c,o=r.gfo().qQ(p),n=r.ch
if(n===D.vB)n=r.ch=r.ccL(d)
else if(n==null){n=r.ccL(d)
r.ch=n}if(!r.btm(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOq(r.gfo().a,n*d.d/q))
x=r.gfo().qQ(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_i(w,x.aw(0,v)))
u=r.gfo().qQ(p)
p=r.as
p.toString
if(!B.e4t(p).p(0,B.e4t(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.dnh(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eUN(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gfo().sC(r.a_i(r.gfo().a,s))
r.as=r.gfo().qQ(p)
break}r.a.toString},
dql(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbtU())
x=m.w
if(x!=null)x.a.T(m.gbu4())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btm(x)){m.Q=null
return}A:{if(D.vB===x){x=d.a.a
if(x.gfz()<50){m.Q=null
return}w=m.gfo().a.bHa().a
v=w[0]
w=w[1]
m.a.toString
u=A.bCt(0.0000135,v,x.a,0)
m.a.toString
t=A.bCt(0.0000135,w,x.b,0)
x=x.gfz()
m.a.toString
s=B.em3(x,0.0000135,10)
x=u.ga5Q()
r=t.ga5Q()
q=y.A
p=A.ds(C.mZ,m.y,null)
m.r=new A.bm(p,new A.bn(new A.N(v,w),new A.N(x,r),q),q.k("bm<bx.T>"))
m.y.e=A.dM(0,0,0,C.k.b0(s*1000),0)
p.a4(m.gbtU())
m.y.dv()
break A}if(D.Bh===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IK()
m.a.toString
n=A.bCt(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.em3(w,0.0000135,0.1)
x=n.lB(s)
w=y.f
v=A.ds(C.mZ,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<bx.T>"))
m.z.e=A.dM(0,0,0,C.k.b0(s*1000),0)
v.a4(m.gbu4())
m.z.dv()
break A}break A}},
dk7(d){var x,w,v,u,t,s,r,q=this,p=d.gf1(),o=d.gbD()
if(y.l.b(d)){x=d.ghg()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvi())
w=d.gvi()
v=A.Sz(d.gfi(),null,w,x)
if(!q.btm(D.vB)){q.a.toString
return}u=q.gfo().qQ(p)
t=q.gfo().qQ(p.aw(0,v))
q.gfo().sC(q.a_i(q.gfo().a,t.aw(0,u)))
q.a.toString
return}if(d.gvi().b===0)return
x=d.gvi()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjV()
else return
q.a.toString
if(!q.btm(D.Bh))return
u=q.gfo().qQ(p)
q.gfo().sC(q.bOq(q.gfo().a,s))
r=q.gfo().qQ(p)
q.gfo().sC(q.a_i(q.gfo().a,r.aw(0,u)))
q.a.toString},
de8(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbtU())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bHa().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_i(v,u.qQ(t.b.aN(t.a.gC())).aw(0,s.gfo().qQ(new A.N(x,r)))))},
dgk(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbu4())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IK()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qQ(v)
s.gfo().sC(s.bOq(s.gfo().a,x/r))
t=s.gfo().qQ(s.x)
s.gfo().sC(s.a_i(s.gfo().a,t.aw(0,u)))},
dim(){this.n(new B.cVD())},
Y(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gcen())},
aU(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gcen())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cOQ()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b3G(w,u.e,C.q,!0,x,t,t)
return A.Rv(C.hP,A.ic(C.bH,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdqk(),u.gdqm(),u.gdqo(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.N(0,-0.005)),u.f,t,t,t,t,t,u.gdk6(),t)}}
B.b3G.prototype={
u(d){var x=this,w=A.UY(x.w,new A.mT(x.c,x.d),null,x.r,!0)
return A.te(w,x.e,null)}}
B.ap6.prototype={
W(){return"_GestureType."+this.b}}
B.awM.prototype={
cd(){this.df()
this.dl()
this.fQ()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfJ())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(TR)","~(TS)","~(LI)","~(mo)"])
B.cVD.prototype={
$0(){},
$S:0};(function aliases(){var x=B.awM.prototype
x.cOQ=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apG.prototype,"gdqm","dqn",1)
x(v,"gdqo","dqp",2)
x(v,"gdqk","dql",3)
x(v,"gdk6","dk7",4)
w(v,"gbtU","de8",0)
w(v,"gbu4","dgk",0)
w(v,"gcen","dim",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.acU,A.L)
w(B.awM,A.U)
w(B.apG,B.awM)
w(B.cVD,A.bt)
w(B.b3G,A.x)
w(B.ap6,A.eA)
x(B.awM,A.ft)})()
A.b_(b.typeUniverse,JSON.parse('{"acU":{"L":[],"m":[]},"apG":{"U":["acU"]},"b3G":{"x":[],"m":[]}}'))
var y={z:A.C("bh<U<L>>"),B:A.C("SD"),l:A.C("Eg"),g:A.C("ak"),A:A.C("bn<N>"),f:A.C("bn<a4>")};(function constants(){D.vB=new B.ap6(0,"pan")
D.Bh=new B.ap6(1,"scale")
D.ccr=new B.ap6(2,"rotate")})()};
(a=>{a["ygJhq7mx7cCzzDa93EDqFfkWAXA="]=a.current})($__dart_deferred_initializers__);