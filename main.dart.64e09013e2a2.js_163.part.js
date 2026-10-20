((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bD0(d,e,f){return new B.ab2(d,e,f,null)},
bD1(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.wA(A.an(x.OU(w)/t,0,1)))},
ewE(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.OU(n),j=n.OU(n),i=p.OU(l),h=l.OU(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bD1(d,q,o),B.bD1(d,o,x),B.bD1(d,x,m),B.bD1(d,m,q)]
v=A.cA()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
eg_(d,e,f){return Math.log(f/d)/Math.log(e/100)},
eh0(d,e){var x,w,v,u,t,s,r=new A.cT(new Float64Array(16))
r.ea(d)
r.n6(r)
x=e.a
w=e.b
v=new A.ev(new Float64Array(3))
v.iC(x,w,0)
v=r.qx(v)
u=e.c
t=new A.ev(new Float64Array(3))
t.iC(u,w,0)
t=r.qx(t)
w=e.d
s=new A.ev(new Float64Array(3))
s.iC(u,w,0)
s=r.qx(s)
u=new A.ev(new Float64Array(3))
u.iC(x,w,0)
u=r.qx(u)
x=new A.ev(new Float64Array(3))
x.ea(v)
w=new A.ev(new Float64Array(3))
w.ea(t)
v=new A.ev(new Float64Array(3))
v.ea(s)
t=new A.ev(new Float64Array(3))
t.ea(u)
return new E.a00(x,w,v,t)},
efN(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.P,w=0;w<4;++w){v=r[w]
u=B.ewE(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.N(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.N(x.a,t)}return B.dZJ(x)},
dZJ(d){return new A.N(A.FE(C.k.Z(d.a,9)),A.FE(C.k.Z(d.b,9)))},
eND(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
ab2:function ab2(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
ano:function ano(d,e,f,g){var _=this
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
cQC:function cQC(){},
b0n:function b0n(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amP:function amP(d,e){this.a=d
this.b=e},
auu:function auu(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[812]
E=c[278]
B.ab2.prototype={
P(){var x=null,w=y.z
return new B.ano(new A.bf(x,w),new A.bf(x,w),x,x)}}
B.ano.prototype={
gfj(){var x=this.d
if(x===$){this.a.toString
x=E.ecb()
this.d=x}return x},
gbqE(){var x,w=$.al.ac$.x.i(0,this.e).gaJ()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.K.aWX(new A.ao(0,0,0+x.a,0+x.b))},
gbya(){var x=$.al.ac$.x.i(0,this.f).gaJ()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
ZG(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.P)){x=new A.cT(new Float64Array(16))
x.ea(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cT(new Float64Array(16))
w.ea(a0)
w.hv(a1.a,a1.b,0,1)
v=B.eh0(w,d.gbya())
if(d.gbqE().gctQ(0))return w
x=d.gbqE()
u=d.ay
t=new A.cT(new Float64Array(16))
t.iB()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.hv(q/2,o/2,0,1)
t.a9J(u)
t.hv(-q/2,-o/2,0,1)
u=new A.ev(new Float64Array(3))
u.iC(r,x,0)
u=t.qx(u)
q=new A.ev(new Float64Array(3))
q.iC(s,x,0)
q=t.qx(q)
x=new A.ev(new Float64Array(3))
x.iC(s,p,0)
x=t.qx(x)
s=new A.ev(new Float64Array(3))
s.iC(r,p,0)
s=t.qx(s)
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
i=new E.a00(q,x,u,s)
h=B.efN(i,v)
if(h.p(0,C.P))return w
x=w.bG8().a
u=x[0]
x=x[1]
g=a0.Ic()
u-=h.a*g
x-=h.b*g
f=new A.cT(new Float64Array(16))
f.ea(a0)
s=new A.ev(new Float64Array(3))
s.iC(u,x,0)
f.c21(s)
e=B.efN(i,B.eh0(f,d.gbya()))
if(e.p(0,C.P))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cT(new Float64Array(16))
x.ea(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cT(new Float64Array(16))
s.ea(a0)
r=new A.ev(new Float64Array(3))
r.iC(u,x,0)
s.c21(r)
return s},
bNn(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cT(new Float64Array(16))
x.ea(d)
return x}w=q.gfj().a.Ic()
x=q.gbya()
v=q.gbqE()
u=q.gbya()
t=q.gbqE()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.cT(new Float64Array(16))
x.ea(d)
x.zg(r,r,r,1)
return x},
dkG(d,e,f){var x,w,v,u
if(e===0){x=new A.cT(new Float64Array(16))
x.ea(d)
return x}w=this.gfj().qw(f)
x=new A.cT(new Float64Array(16))
x.ea(d)
v=w.a
u=w.b
x.hv(v,u,0,1)
x.a9J(-e)
x.hv(-v,-u,0,1)
return x},
bsq(d){var x
A:{x=!0
if(D.c6W===d){x=!1
break A}if(D.AW===d){this.a.toString
break A}if(D.vh===d||d==null){this.a.toString
break A}x=null}return x},
cbc(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.AW
else return D.vh},
dnK(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.T(v.gbsY())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.T(v.gbt8())
v.w=null}v.Q=v.ch=null
v.at=v.gfj().a.Ic()
v.as=v.gfj().qw(d.b)
v.ax=v.ay},
dnM(d){var x,w,v,u,t,s,r=this,q=r.gfj().a.Ic(),p=r.x=d.c,o=r.gfj().qw(p),n=r.ch
if(n===D.vh)n=r.ch=r.cbc(d)
else if(n==null){n=r.cbc(d)
r.ch=n}if(!r.bsq(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfj().sD(r.bNn(r.gfj().a,n*d.d/q))
x=r.gfj().qw(p)
n=r.gfj()
w=r.gfj().a
v=r.as
v.toString
n.sD(r.ZG(w,x.az(0,v)))
u=r.gfj().qw(p)
p=r.as
p.toString
if(!B.dZJ(p).p(0,B.dZJ(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfj().sD(r.dkG(r.gfj().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eND(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfj().sD(r.ZG(r.gfj().a,s))
r.as=r.gfj().qw(p)
break}r.a.toString},
dnI(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbsY())
x=m.w
if(x!=null)x.a.T(m.gbt8())
x=m.y
x===$&&A.e()
x.sD(x.a)
x=m.z
x===$&&A.e()
x.sD(x.a)
x=m.ch
if(!m.bsq(x)){m.Q=null
return}A:{if(D.vh===x){x=d.a.a
if(x.gfq()<50){m.Q=null
return}w=m.gfj().a.bG8().a
v=w[0]
w=w[1]
m.a.toString
u=A.byx(0.0000135,v,x.a,0)
m.a.toString
t=A.byx(0.0000135,w,x.b,0)
x=x.gfq()
m.a.toString
s=B.eg_(x,0.0000135,10)
x=u.ga5a()
r=t.ga5a()
q=y.A
p=A.dj(C.mM,m.y,null)
m.r=new A.bk(p,new A.bl(new A.N(v,w),new A.N(x,r),q),q.k("bk<bu.T>"))
m.y.e=A.dE(0,0,0,C.k.b7(s*1000),0)
p.a4(m.gbsY())
m.y.dr()
break A}if(D.AW===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfj().a.Ic()
m.a.toString
n=A.byx(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.eg_(w,0.0000135,0.1)
x=n.ll(s)
w=y.f
v=A.dj(C.mM,m.z,null)
m.w=new A.bk(v,new A.bl(o,x,w),w.k("bk<bu.T>"))
m.z.e=A.dE(0,0,0,C.k.b7(s*1000),0)
v.a4(m.gbt8())
m.z.dr()
break A}break A}},
dhw(d){var x,w,v,u,t,s,r,q=this,p=d.geX(),o=d.gbR()
if(y.l.b(d)){x=d.gh9()===C.eS
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.guW())
w=d.guW()
v=A.Rd(d.gfb(),null,w,x)
if(!q.bsq(D.vh)){q.a.toString
return}u=q.gfj().qw(p)
t=q.gfj().qw(p.az(0,v))
q.gfj().sD(q.ZG(q.gfj().a,t.az(0,u)))
q.a.toString
return}if(d.guW().b===0)return
x=d.guW()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkr()
else return
q.a.toString
if(!q.bsq(D.AW))return
u=q.gfj().qw(p)
q.gfj().sD(q.bNn(q.gfj().a,s))
r=q.gfj().qw(p)
q.gfj().sD(q.ZG(q.gfj().a,r.az(0,u)))
q.a.toString},
dbz(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbsY())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gfj().a.bG8().a
x=r[0]
r=r[1]
w=s.gfj()
v=s.gfj().a
u=s.gfj()
t=s.r
w.sD(s.ZG(v,u.qw(t.b.aM(t.a.gD())).az(0,s.gfj().qw(new A.N(x,r)))))},
ddL(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbt8())
s.w=null
r=s.z
r.sD(r.a)
return}r=s.w
x=r.b.aM(r.a.gD())
r=s.gfj().a.Ic()
w=s.gfj()
v=s.x
v===$&&A.e()
u=w.qw(v)
s.gfj().sD(s.bNn(s.gfj().a,x/r))
t=s.gfj().qw(s.x)
s.gfj().sD(s.ZG(s.gfj().a,t.az(0,u)))},
dfN(){this.n(new B.cQC())},
X(){var x=this,w=null
x.a6()
x.y=A.cI(w,w,w,1,w,x)
x.z=A.cI(w,w,w,1,w,x)
x.gfj().a4(x.gccP())},
aT(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfj().T(x.gccP())
x.a.toString
w=x.gfj()
w.ok$=$.a9()
w.k4$=0
x.cMn()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfj().a
w=u.a.w
v=new B.b0n(w,u.e,C.q,!0,x,t,t)
return A.Qe(C.hJ,A.hZ(C.bG,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdnH(),u.gdnJ(),u.gdnL(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.N(0,-0.005)),u.f,t,t,t,t,t,u.gdhv(),t)}}
B.b0n.prototype={
u(d){var x=this,w=A.Tx(x.w,new A.ms(x.c,x.d),null,x.r,!0)
return A.rH(w,x.e,null)}}
B.amP.prototype={
Y(){return"_GestureType."+this.b}}
B.auu.prototype={
cb(){this.dc()
this.di()
this.fL()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfF())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(Su)","~(Sv)","~(KA)","~(m0)"])
B.cQC.prototype={
$0(){},
$S:0};(function aliases(){var x=B.auu.prototype
x.cMn=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ano.prototype,"gdnJ","dnK",1)
x(v,"gdnL","dnM",2)
x(v,"gdnH","dnI",3)
x(v,"gdhv","dhw",4)
w(v,"gbsY","dbz",0)
w(v,"gbt8","ddL",0)
w(v,"gccP","dfN",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ab2,A.L)
w(B.auu,A.U)
w(B.ano,B.auu)
w(B.cQC,A.bs)
w(B.b0n,A.x)
w(B.amP,A.ew)
x(B.auu,A.fm)})()
A.aY(b.typeUniverse,JSON.parse('{"ab2":{"L":[],"m":[]},"ano":{"U":["ab2"]},"b0n":{"x":[],"m":[]}}'))
var y={z:A.F("bf<U<L>>"),B:A.F("Rh"),l:A.F("Dd"),g:A.F("am"),A:A.F("bl<N>"),f:A.F("bl<a4>")};(function constants(){D.vh=new B.amP(0,"pan")
D.AW=new B.amP(1,"scale")
D.c6W=new B.amP(2,"rotate")})()};
(a=>{a["RVKp1wBI7Mwl6IwkCwSw32qPZps="]=a.current})($__dart_deferred_initializers__);