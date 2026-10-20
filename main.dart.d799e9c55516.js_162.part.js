((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bCY(d,e,f){return new B.ab1(d,e,f,null)},
bCZ(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.wy(A.an(x.OK(w)/t,0,1)))},
ewq(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.OK(n),j=n.OK(n),i=p.OK(l),h=l.OK(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bCZ(d,q,o),B.bCZ(d,o,x),B.bCZ(d,x,m),B.bCZ(d,m,q)]
v=A.cA()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
efO(d,e,f){return Math.log(f/d)/Math.log(e/100)},
egP(d,e){var x,w,v,u,t,s,r=new A.cU(new Float64Array(16))
r.ea(d)
r.n5(r)
x=e.a
w=e.b
v=new A.ev(new Float64Array(3))
v.iC(x,w,0)
v=r.qw(v)
u=e.c
t=new A.ev(new Float64Array(3))
t.iC(u,w,0)
t=r.qw(t)
w=e.d
s=new A.ev(new Float64Array(3))
s.iC(u,w,0)
s=r.qw(s)
u=new A.ev(new Float64Array(3))
u.iC(x,w,0)
u=r.qw(u)
x=new A.ev(new Float64Array(3))
x.ea(v)
w=new A.ev(new Float64Array(3))
w.ea(t)
v=new A.ev(new Float64Array(3))
v.ea(s)
t=new A.ev(new Float64Array(3))
t.ea(u)
return new E.a_Y(x,w,v,t)},
efB(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.P,w=0;w<4;++w){v=r[w]
u=B.ewq(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.N(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.N(x.a,t)}return B.dZx(x)},
dZx(d){return new A.N(A.FE(C.k.Z(d.a,9)),A.FE(C.k.Z(d.b,9)))},
eNo(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a9:C.y},
ab1:function ab1(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
anm:function anm(d,e,f,g){var _=this
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
cQw:function cQw(){},
b0l:function b0l(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amN:function amN(d,e){this.a=d
this.b=e},
aus:function aus(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[813]
E=c[278]
B.ab1.prototype={
P(){var x=null,w=y.z
return new B.anm(new A.bf(x,w),new A.bf(x,w),x,x)}}
B.anm.prototype={
gfj(){var x=this.d
if(x===$){this.a.toString
x=E.ec0()
this.d=x}return x},
gbqi(){var x,w=$.am.ac$.x.i(0,this.e).gaJ()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.K.aWI(new A.ao(0,0,0+x.a,0+x.b))},
gbxO(){var x=$.am.ac$.x.i(0,this.f).gaJ()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
Zt(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.P)){x=new A.cU(new Float64Array(16))
x.ea(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cU(new Float64Array(16))
w.ea(a0)
w.hv(a1.a,a1.b,0,1)
v=B.egP(w,d.gbxO())
if(d.gbqi().gcts(0))return w
x=d.gbqi()
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
t.a9y(u)
t.hv(-q/2,-o/2,0,1)
u=new A.ev(new Float64Array(3))
u.iC(r,x,0)
u=t.qw(u)
q=new A.ev(new Float64Array(3))
q.iC(s,x,0)
q=t.qw(q)
x=new A.ev(new Float64Array(3))
x.iC(s,p,0)
x=t.qw(x)
s=new A.ev(new Float64Array(3))
s.iC(r,p,0)
s=t.qw(s)
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
i=new E.a_Y(q,x,u,s)
h=B.efB(i,v)
if(h.p(0,C.P))return w
x=w.bFM().a
u=x[0]
x=x[1]
g=a0.I4()
u-=h.a*g
x-=h.b*g
f=new A.cU(new Float64Array(16))
f.ea(a0)
s=new A.ev(new Float64Array(3))
s.iC(u,x,0)
f.c1E(s)
e=B.efB(i,B.egP(f,d.gbxO()))
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
s.c1E(r)
return s},
bN0(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cU(new Float64Array(16))
x.ea(d)
return x}w=q.gfj().a.I4()
x=q.gbxO()
v=q.gbqi()
u=q.gbxO()
t=q.gbqi()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.cU(new Float64Array(16))
x.ea(d)
x.zf(r,r,r,1)
return x},
dkk(d,e,f){var x,w,v,u
if(e===0){x=new A.cU(new Float64Array(16))
x.ea(d)
return x}w=this.gfj().qv(f)
x=new A.cU(new Float64Array(16))
x.ea(d)
v=w.a
u=w.b
x.hv(v,u,0,1)
x.a9y(-e)
x.hv(-v,-u,0,1)
return x},
bs4(d){var x
A:{x=!0
if(D.c6M===d){x=!1
break A}if(D.AW===d){this.a.toString
break A}if(D.vi===d||d==null){this.a.toString
break A}x=null}return x},
caP(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.AW
else return D.vi},
dnn(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.T(v.gbsC())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.T(v.gbsN())
v.w=null}v.Q=v.ch=null
v.at=v.gfj().a.I4()
v.as=v.gfj().qv(d.b)
v.ax=v.ay},
dnp(d){var x,w,v,u,t,s,r=this,q=r.gfj().a.I4(),p=r.x=d.c,o=r.gfj().qv(p),n=r.ch
if(n===D.vi)n=r.ch=r.caP(d)
else if(n==null){n=r.caP(d)
r.ch=n}if(!r.bs4(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfj().sD(r.bN0(r.gfj().a,n*d.d/q))
x=r.gfj().qv(p)
n=r.gfj()
w=r.gfj().a
v=r.as
v.toString
n.sD(r.Zt(w,x.az(0,v)))
u=r.gfj().qv(p)
p=r.as
p.toString
if(!B.dZx(p).p(0,B.dZx(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfj().sD(r.dkk(r.gfj().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eNo(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfj().sD(r.Zt(r.gfj().a,s))
r.as=r.gfj().qv(p)
break}r.a.toString},
dnl(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbsC())
x=m.w
if(x!=null)x.a.T(m.gbsN())
x=m.y
x===$&&A.e()
x.sD(x.a)
x=m.z
x===$&&A.e()
x.sD(x.a)
x=m.ch
if(!m.bs4(x)){m.Q=null
return}A:{if(D.vi===x){x=d.a.a
if(x.gfq()<50){m.Q=null
return}w=m.gfj().a.bFM().a
v=w[0]
w=w[1]
m.a.toString
u=A.byu(0.0000135,v,x.a,0)
m.a.toString
t=A.byu(0.0000135,w,x.b,0)
x=x.gfq()
m.a.toString
s=B.efO(x,0.0000135,10)
x=u.ga5_()
r=t.ga5_()
q=y.A
p=A.di(C.mL,m.y,null)
m.r=new A.bk(p,new A.bl(new A.N(v,w),new A.N(x,r),q),q.k("bk<bu.T>"))
m.y.e=A.dE(0,0,0,C.k.b7(s*1000),0)
p.a4(m.gbsC())
m.y.dr()
break A}if(D.AW===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfj().a.I4()
m.a.toString
n=A.byu(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.efO(w,0.0000135,0.1)
x=n.lk(s)
w=y.f
v=A.di(C.mL,m.z,null)
m.w=new A.bk(v,new A.bl(o,x,w),w.k("bk<bu.T>"))
m.z.e=A.dE(0,0,0,C.k.b7(s*1000),0)
v.a4(m.gbsN())
m.z.dr()
break A}break A}},
dha(d){var x,w,v,u,t,s,r,q=this,p=d.geX(),o=d.gbR()
if(y.l.b(d)){x=d.gh9()===C.eS
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.guU())
w=d.guU()
v=A.Rd(d.gfb(),null,w,x)
if(!q.bs4(D.vi)){q.a.toString
return}u=q.gfj().qv(p)
t=q.gfj().qv(p.az(0,v))
q.gfj().sD(q.Zt(q.gfj().a,t.az(0,u)))
q.a.toString
return}if(d.guU().b===0)return
x=d.guU()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkq()
else return
q.a.toString
if(!q.bs4(D.AW))return
u=q.gfj().qv(p)
q.gfj().sD(q.bN0(q.gfj().a,s))
r=q.gfj().qv(p)
q.gfj().sD(q.Zt(q.gfj().a,r.az(0,u)))
q.a.toString},
dbd(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbsC())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gfj().a.bFM().a
x=r[0]
r=r[1]
w=s.gfj()
v=s.gfj().a
u=s.gfj()
t=s.r
w.sD(s.Zt(v,u.qv(t.b.aM(t.a.gD())).az(0,s.gfj().qv(new A.N(x,r)))))},
ddp(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbsN())
s.w=null
r=s.z
r.sD(r.a)
return}r=s.w
x=r.b.aM(r.a.gD())
r=s.gfj().a.I4()
w=s.gfj()
v=s.x
v===$&&A.e()
u=w.qv(v)
s.gfj().sD(s.bN0(s.gfj().a,x/r))
t=s.gfj().qv(s.x)
s.gfj().sD(s.Zt(s.gfj().a,t.az(0,u)))},
dfr(){this.n(new B.cQw())},
X(){var x=this,w=null
x.a6()
x.y=A.cI(w,w,w,1,w,x)
x.z=A.cI(w,w,w,1,w,x)
x.gfj().a4(x.gccr())},
aT(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfj().T(x.gccr())
x.a.toString
w=x.gfj()
w.ok$=$.a9()
w.k4$=0
x.cM_()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfj().a
w=u.a.w
v=new B.b0l(w,u.e,C.q,!0,x,t,t)
return A.Qe(C.hI,A.hM(C.bE,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdnk(),u.gdnm(),u.gdno(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.N(0,-0.005)),u.f,t,t,t,t,t,u.gdh9(),t)}}
B.b0l.prototype={
u(d){var x=this,w=A.Tw(x.w,new A.mt(x.c,x.d),null,x.r,!0)
return A.rG(w,x.e,null)}}
B.amN.prototype={
Y(){return"_GestureType."+this.b}}
B.aus.prototype={
cb(){this.dc()
this.dh()
this.fL()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfF())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(St)","~(Su)","~(KA)","~(m1)"])
B.cQw.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aus.prototype
x.cM_=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.anm.prototype,"gdnm","dnn",1)
x(v,"gdno","dnp",2)
x(v,"gdnk","dnl",3)
x(v,"gdh9","dha",4)
w(v,"gbsC","dbd",0)
w(v,"gbsN","ddp",0)
w(v,"gccr","dfr",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ab1,A.L)
w(B.aus,A.U)
w(B.anm,B.aus)
w(B.cQw,A.bs)
w(B.b0l,A.x)
w(B.amN,A.ew)
x(B.aus,A.fm)})()
A.aY(b.typeUniverse,JSON.parse('{"ab1":{"L":[],"m":[]},"anm":{"U":["ab1"]},"b0l":{"x":[],"m":[]}}'))
var y={z:A.F("bf<U<L>>"),B:A.F("Rh"),l:A.F("De"),g:A.F("al"),A:A.F("bl<N>"),f:A.F("bl<a4>")};(function constants(){D.vi=new B.amN(0,"pan")
D.AW=new B.amN(1,"scale")
D.c6M=new B.amN(2,"rotate")})()};
(a=>{a["lSfIBdTzzlfr2BP67hOuzYJYBhI="]=a.current})($__dart_deferred_initializers__);