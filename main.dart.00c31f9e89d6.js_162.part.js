((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bCT(d,e,f){return new B.ab2(d,e,f,null)},
bCU(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.wy(A.an(x.OI(w)/t,0,1)))},
ewf(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.OI(n),j=n.OI(n),i=p.OI(l),h=l.OI(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bCU(d,q,o),B.bCU(d,o,x),B.bCU(d,x,m),B.bCU(d,m,q)]
v=A.cA()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
efE(d,e,f){return Math.log(f/d)/Math.log(e/100)},
egF(d,e){var x,w,v,u,t,s,r=new A.cU(new Float64Array(16))
r.ea(d)
r.n5(r)
x=e.a
w=e.b
v=new A.ev(new Float64Array(3))
v.iC(x,w,0)
v=r.qv(v)
u=e.c
t=new A.ev(new Float64Array(3))
t.iC(u,w,0)
t=r.qv(t)
w=e.d
s=new A.ev(new Float64Array(3))
s.iC(u,w,0)
s=r.qv(s)
u=new A.ev(new Float64Array(3))
u.iC(x,w,0)
u=r.qv(u)
x=new A.ev(new Float64Array(3))
x.ea(v)
w=new A.ev(new Float64Array(3))
w.ea(t)
v=new A.ev(new Float64Array(3))
v.ea(s)
t=new A.ev(new Float64Array(3))
t.ea(u)
return new E.a_X(x,w,v,t)},
efr(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.P,w=0;w<4;++w){v=r[w]
u=B.ewf(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.dZn(x)},
dZn(d){return new A.M(A.FD(C.k.Z(d.a,9)),A.FD(C.k.Z(d.b,9)))},
eNd(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a9:C.y},
ab2:function ab2(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
anl:function anl(d,e,f,g){var _=this
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
cQo:function cQo(){},
b0j:function b0j(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amM:function amM(d,e){this.a=d
this.b=e},
aur:function aur(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[815]
E=c[278]
B.ab2.prototype={
P(){var x=null,w=y.z
return new B.anl(new A.bf(x,w),new A.bf(x,w),x,x)}}
B.anl.prototype={
gfj(){var x=this.d
if(x===$){this.a.toString
x=E.ebR()
this.d=x}return x},
gbqb(){var x,w=$.am.ac$.x.i(0,this.e).gaJ()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.K.aWD(new A.ao(0,0,0+x.a,0+x.b))},
gbxH(){var x=$.am.ac$.x.i(0,this.f).gaJ()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
Zs(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.P)){x=new A.cU(new Float64Array(16))
x.ea(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cU(new Float64Array(16))
w.ea(a0)
w.hv(a1.a,a1.b,0,1)
v=B.egF(w,d.gbxH())
if(d.gbqb().gctj(0))return w
x=d.gbqb()
u=d.ay
t=new A.cU(new Float64Array(16))
t.iB()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.hv(q/2,o/2,0,1)
t.a9w(u)
t.hv(-q/2,-o/2,0,1)
u=new A.ev(new Float64Array(3))
u.iC(r,x,0)
u=t.qv(u)
q=new A.ev(new Float64Array(3))
q.iC(s,x,0)
q=t.qv(q)
x=new A.ev(new Float64Array(3))
x.iC(s,p,0)
x=t.qv(x)
s=new A.ev(new Float64Array(3))
s.iC(r,p,0)
s=t.qv(s)
r=new Float64Array(3)
new A.ev(r).ea(u)
u=new Float64Array(3)
new A.ev(u).ea(q)
q=new Float64Array(3)
new A.ev(q).ea(x)
x=new Float64Array(3)
new A.ev(x).ea(s)
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
x=new A.ev(new Float64Array(3))
x.iC(m,l,0)
u=new A.ev(new Float64Array(3))
u.iC(k,l,0)
s=new A.ev(new Float64Array(3))
s.iC(k,j,0)
r=new A.ev(new Float64Array(3))
r.iC(m,j,0)
q=new A.ev(new Float64Array(3))
q.ea(x)
x=new A.ev(new Float64Array(3))
x.ea(u)
u=new A.ev(new Float64Array(3))
u.ea(s)
s=new A.ev(new Float64Array(3))
s.ea(r)
i=new E.a_X(q,x,u,s)
h=B.efr(i,v)
if(h.p(0,C.P))return w
x=w.bFE().a
u=x[0]
x=x[1]
g=a0.I4()
u-=h.a*g
x-=h.b*g
f=new A.cU(new Float64Array(16))
f.ea(a0)
s=new A.ev(new Float64Array(3))
s.iC(u,x,0)
f.c1w(s)
e=B.efr(i,B.egF(f,d.gbxH()))
if(e.p(0,C.P))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cU(new Float64Array(16))
x.ea(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cU(new Float64Array(16))
s.ea(a0)
r=new A.ev(new Float64Array(3))
r.iC(u,x,0)
s.c1w(r)
return s},
bMT(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cU(new Float64Array(16))
x.ea(d)
return x}w=q.gfj().a.I4()
x=q.gbxH()
v=q.gbqb()
u=q.gbxH()
t=q.gbqb()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.cU(new Float64Array(16))
x.ea(d)
x.zf(r,r,r,1)
return x},
dka(d,e,f){var x,w,v,u
if(e===0){x=new A.cU(new Float64Array(16))
x.ea(d)
return x}w=this.gfj().qu(f)
x=new A.cU(new Float64Array(16))
x.ea(d)
v=w.a
u=w.b
x.hv(v,u,0,1)
x.a9w(-e)
x.hv(-v,-u,0,1)
return x},
brY(d){var x
A:{x=!0
if(D.c6u===d){x=!1
break A}if(D.AW===d){this.a.toString
break A}if(D.vg===d||d==null){this.a.toString
break A}x=null}return x},
caH(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.AW
else return D.vg},
dnd(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.T(v.gbsv())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.T(v.gbsG())
v.w=null}v.Q=v.ch=null
v.at=v.gfj().a.I4()
v.as=v.gfj().qu(d.b)
v.ax=v.ay},
dnf(d){var x,w,v,u,t,s,r=this,q=r.gfj().a.I4(),p=r.x=d.c,o=r.gfj().qu(p),n=r.ch
if(n===D.vg)n=r.ch=r.caH(d)
else if(n==null){n=r.caH(d)
r.ch=n}if(!r.brY(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfj().sD(r.bMT(r.gfj().a,n*d.d/q))
x=r.gfj().qu(p)
n=r.gfj()
w=r.gfj().a
v=r.as
v.toString
n.sD(r.Zs(w,x.az(0,v)))
u=r.gfj().qu(p)
p=r.as
p.toString
if(!B.dZn(p).p(0,B.dZn(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfj().sD(r.dka(r.gfj().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eNd(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfj().sD(r.Zs(r.gfj().a,s))
r.as=r.gfj().qu(p)
break}r.a.toString},
dnb(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbsv())
x=m.w
if(x!=null)x.a.T(m.gbsG())
x=m.y
x===$&&A.e()
x.sD(x.a)
x=m.z
x===$&&A.e()
x.sD(x.a)
x=m.ch
if(!m.brY(x)){m.Q=null
return}A:{if(D.vg===x){x=d.a.a
if(x.gfq()<50){m.Q=null
return}w=m.gfj().a.bFE().a
v=w[0]
w=w[1]
m.a.toString
u=A.byp(0.0000135,v,x.a,0)
m.a.toString
t=A.byp(0.0000135,w,x.b,0)
x=x.gfq()
m.a.toString
s=B.efE(x,0.0000135,10)
x=u.ga5_()
r=t.ga5_()
q=y.A
p=A.di(C.mL,m.y,null)
m.r=new A.bk(p,new A.bl(new A.M(v,w),new A.M(x,r),q),q.k("bk<bu.T>"))
m.y.e=A.dE(0,0,0,C.k.b7(s*1000),0)
p.a4(m.gbsv())
m.y.dr()
break A}if(D.AW===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfj().a.I4()
m.a.toString
n=A.byp(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.efE(w,0.0000135,0.1)
x=n.ll(s)
w=y.f
v=A.di(C.mL,m.z,null)
m.w=new A.bk(v,new A.bl(o,x,w),w.k("bk<bu.T>"))
m.z.e=A.dE(0,0,0,C.k.b7(s*1000),0)
v.a4(m.gbsG())
m.z.dr()
break A}break A}},
dh0(d){var x,w,v,u,t,s,r,q=this,p=d.geX(),o=d.gbR()
if(y.l.b(d)){x=d.gh9()===C.eS
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.guU())
w=d.guU()
v=A.Rd(d.gfb(),null,w,x)
if(!q.brY(D.vg)){q.a.toString
return}u=q.gfj().qu(p)
t=q.gfj().qu(p.az(0,v))
q.gfj().sD(q.Zs(q.gfj().a,t.az(0,u)))
q.a.toString
return}if(d.guU().b===0)return
x=d.guU()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkq()
else return
q.a.toString
if(!q.brY(D.AW))return
u=q.gfj().qu(p)
q.gfj().sD(q.bMT(q.gfj().a,s))
r=q.gfj().qu(p)
q.gfj().sD(q.Zs(q.gfj().a,r.az(0,u)))
q.a.toString},
db3(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbsv())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gfj().a.bFE().a
x=r[0]
r=r[1]
w=s.gfj()
v=s.gfj().a
u=s.gfj()
t=s.r
w.sD(s.Zs(v,u.qu(t.b.aM(t.a.gD())).az(0,s.gfj().qu(new A.M(x,r)))))},
ddf(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbsG())
s.w=null
r=s.z
r.sD(r.a)
return}r=s.w
x=r.b.aM(r.a.gD())
r=s.gfj().a.I4()
w=s.gfj()
v=s.x
v===$&&A.e()
u=w.qu(v)
s.gfj().sD(s.bMT(s.gfj().a,x/r))
t=s.gfj().qu(s.x)
s.gfj().sD(s.Zs(s.gfj().a,t.az(0,u)))},
dfh(){this.n(new B.cQo())},
X(){var x=this,w=null
x.a6()
x.y=A.cI(w,w,w,1,w,x)
x.z=A.cI(w,w,w,1,w,x)
x.gfj().a4(x.gccj())},
aT(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfj().T(x.gccj())
x.a.toString
w=x.gfj()
w.ok$=$.a9()
w.k4$=0
x.cLT()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfj().a
w=u.a.w
v=new B.b0j(w,u.e,C.q,!0,x,t,t)
return A.Qe(C.hI,A.hM(C.bE,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdna(),u.gdnc(),u.gdne(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdh_(),t)}}
B.b0j.prototype={
u(d){var x=this,w=A.Tw(x.w,new A.ms(x.c,x.d),null,x.r,!0)
return A.rG(w,x.e,null)}}
B.amM.prototype={
Y(){return"_GestureType."+this.b}}
B.aur.prototype={
cb(){this.dc()
this.dh()
this.fL()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfF())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(St)","~(Su)","~(KB)","~(m_)"])
B.cQo.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aur.prototype
x.cLT=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.anl.prototype,"gdnc","dnd",1)
x(v,"gdne","dnf",2)
x(v,"gdna","dnb",3)
x(v,"gdh_","dh0",4)
w(v,"gbsv","db3",0)
w(v,"gbsG","ddf",0)
w(v,"gccj","dfh",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ab2,A.K)
w(B.aur,A.U)
w(B.anl,B.aur)
w(B.cQo,A.bs)
w(B.b0j,A.x)
w(B.amM,A.ew)
x(B.aur,A.fm)})()
A.aY(b.typeUniverse,JSON.parse('{"ab2":{"K":[],"m":[]},"anl":{"U":["ab2"]},"b0j":{"x":[],"m":[]}}'))
var y={z:A.F("bf<U<K>>"),B:A.F("Rh"),l:A.F("Dc"),g:A.F("al"),A:A.F("bl<M>"),f:A.F("bl<a4>")};(function constants(){D.vg=new B.amM(0,"pan")
D.AW=new B.amM(1,"scale")
D.c6u=new B.amM(2,"rotate")})()};
(a=>{a["2iwXY8OP5tkd2x3fHC7+m5JtfLs="]=a.current})($__dart_deferred_initializers__);