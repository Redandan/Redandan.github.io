((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHq(d,e,f){return new B.ad4(d,e,f,null)},
bHr(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.au(0,w.x6(A.an(x.Pw(w)/t,0,1)))},
eEI(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Pw(n),j=n.Pw(n),i=p.Pw(l),h=l.Pw(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHr(d,q,o),B.bHr(d,o,x),B.bHr(d,x,m),B.bHr(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
enk(d,e,f){return Math.log(f/d)/Math.log(e/100)},
eon(d,e){var x,w,v,u,t,s,r=new A.d0(new Float64Array(16))
r.dV(d)
r.nq(r)
x=e.a
w=e.b
v=new A.eF(new Float64Array(3))
v.iJ(x,w,0)
v=r.qV(v)
u=e.c
t=new A.eF(new Float64Array(3))
t.iJ(u,w,0)
t=r.qV(t)
w=e.d
s=new A.eF(new Float64Array(3))
s.iJ(u,w,0)
s=r.qV(s)
u=new A.eF(new Float64Array(3))
u.iJ(x,w,0)
u=r.qV(u)
x=new A.eF(new Float64Array(3))
x.dV(v)
w=new A.eF(new Float64Array(3))
w.dV(t)
v=new A.eF(new Float64Array(3))
v.dV(s)
t=new A.eF(new Float64Array(3))
t.dV(u)
return new E.a1K(x,w,v,t)},
en7(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.eEI(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e5L(x)},
e5L(d){return new A.M(A.nc(C.k.Z(d.a,9)),A.nc(C.k.Z(d.b,9)))},
eWc(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
ad4:function ad4(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apT:function apT(d,e,f,g){var _=this
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
cW8:function cW8(){},
b40:function b40(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apj:function apj(d,e){this.a=d
this.b=e},
ax0:function ax0(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[816]
E=c[279]
B.ad4.prototype={
O(){var x=null,w=y.z
return new B.apT(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apT.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.ejp()
this.d=x}return x},
gbrJ(){var x,w=$.al.ad$.x.i(0,this.e).gaK()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.I.aXV(new A.ao(0,0,0+x.a,0+x.b))},
gbzl(){var x=$.al.ad$.x.i(0,this.f).gaK()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
a_o(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.O)){x=new A.d0(new Float64Array(16))
x.dV(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d0(new Float64Array(16))
w.dV(a0)
w.hC(a1.a,a1.b,0,1)
v=B.eon(w,d.gbzl())
if(d.gbrJ().gcw8(0))return w
x=d.gbrJ()
u=d.ay
t=new A.d0(new Float64Array(16))
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
u=new A.eF(new Float64Array(3))
u.iJ(r,x,0)
u=t.qV(u)
q=new A.eF(new Float64Array(3))
q.iJ(s,x,0)
q=t.qV(q)
x=new A.eF(new Float64Array(3))
x.iJ(s,p,0)
x=t.qV(x)
s=new A.eF(new Float64Array(3))
s.iJ(r,p,0)
s=t.qV(s)
r=new Float64Array(3)
new A.eF(r).dV(u)
u=new Float64Array(3)
new A.eF(u).dV(q)
q=new Float64Array(3)
new A.eF(q).dV(x)
x=new Float64Array(3)
new A.eF(x).dV(s)
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
x=new A.eF(new Float64Array(3))
x.iJ(m,l,0)
u=new A.eF(new Float64Array(3))
u.iJ(k,l,0)
s=new A.eF(new Float64Array(3))
s.iJ(k,j,0)
r=new A.eF(new Float64Array(3))
r.iJ(m,j,0)
q=new A.eF(new Float64Array(3))
q.dV(x)
x=new A.eF(new Float64Array(3))
x.dV(u)
u=new A.eF(new Float64Array(3))
u.dV(s)
s=new A.eF(new Float64Array(3))
s.dV(r)
i=new E.a1K(q,x,u,s)
h=B.en7(i,v)
if(h.p(0,C.O))return w
x=w.bHp().a
u=x[0]
x=x[1]
g=a0.IN()
u-=h.a*g
x-=h.b*g
f=new A.d0(new Float64Array(16))
f.dV(a0)
s=new A.eF(new Float64Array(3))
s.iJ(u,x,0)
f.c3J(s)
e=B.en7(i,B.eon(f,d.gbzl()))
if(e.p(0,C.O))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d0(new Float64Array(16))
x.dV(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d0(new Float64Array(16))
s.dV(a0)
r=new A.eF(new Float64Array(3))
r.iJ(u,x,0)
s.c3J(r)
return s},
bOE(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d0(new Float64Array(16))
x.dV(d)
return x}w=q.gfo().a.IN()
x=q.gbzl()
v=q.gbrJ()
u=q.gbzl()
t=q.gbrJ()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d0(new Float64Array(16))
x.dV(d)
x.r5(r,r,r,1)
return x},
dnP(d,e,f){var x,w,v,u
if(e===0){x=new A.d0(new Float64Array(16))
x.dV(d)
return x}w=this.gfo().qU(f)
x=new A.d0(new Float64Array(16))
x.dV(d)
v=w.a
u=w.b
x.hC(v,u,0,1)
x.zn(-e)
x.hC(-v,-u,0,1)
return x},
btx(d){var x
A:{x=!0
if(D.ccG===d){x=!1
break A}if(D.Bi===d){this.a.toString
break A}if(D.vE===d||d==null){this.a.toString
break A}x=null}return x},
cd4(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bi
else return D.vE},
dqW(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbu4())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hq()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbuf())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IN()
v.as=v.gfo().qU(d.b)
v.ax=v.ay},
dqY(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IN(),p=r.x=d.c,o=r.gfo().qU(p),n=r.ch
if(n===D.vE)n=r.ch=r.cd4(d)
else if(n==null){n=r.cd4(d)
r.ch=n}if(!r.btx(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOE(r.gfo().a,n*d.d/q))
x=r.gfo().qU(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_o(w,x.aw(0,v)))
u=r.gfo().qU(p)
p=r.as
p.toString
if(!B.e5L(p).p(0,B.e5L(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.dnP(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eWc(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gfo().sC(r.a_o(r.gfo().a,s))
r.as=r.gfo().qU(p)
break}r.a.toString},
dqU(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbu4())
x=m.w
if(x!=null)x.a.T(m.gbuf())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btx(x)){m.Q=null
return}A:{if(D.vE===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfo().a.bHp().a
v=w[0]
w=w[1]
m.a.toString
u=A.bCT(0.0000135,v,x.a,0)
m.a.toString
t=A.bCT(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.enk(x,0.0000135,10)
x=u.ga5Y()
r=t.ga5Y()
q=y.A
p=A.dt(C.mY,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b0(s*1000),0)
p.a4(m.gbu4())
m.y.dA()
break A}if(D.Bi===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IN()
m.a.toString
n=A.bCT(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.enk(w,0.0000135,0.1)
x=n.lC(s)
w=y.f
v=A.dt(C.mY,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b0(s*1000),0)
v.a4(m.gbuf())
m.z.dA()
break A}break A}},
dkA(d){var x,w,v,u,t,s,r,q=this,p=d.gf5(),o=d.gbD()
if(y.l.b(d)){x=d.ghh()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvm())
w=d.gvm()
v=A.SE(d.gfi(),null,w,x)
if(!q.btx(D.vE)){q.a.toString
return}u=q.gfo().qU(p)
t=q.gfo().qU(p.aw(0,v))
q.gfo().sC(q.a_o(q.gfo().a,t.aw(0,u)))
q.a.toString
return}if(d.gvm().b===0)return
x=d.gvm()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjV()
else return
q.a.toString
if(!q.btx(D.Bi))return
u=q.gfo().qU(p)
q.gfo().sC(q.bOE(q.gfo().a,s))
r=q.gfo().qU(p)
q.gfo().sC(q.a_o(q.gfo().a,r.aw(0,u)))
q.a.toString},
deB(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbu4())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bHp().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_o(v,u.qU(t.b.aN(t.a.gC())).aw(0,s.gfo().qU(new A.M(x,r)))))},
dgN(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbuf())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IN()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qU(v)
s.gfo().sC(s.bOE(s.gfo().a,x/r))
t=s.gfo().qU(s.x)
s.gfo().sC(s.a_o(s.gfo().a,t.aw(0,u)))},
diR(){this.n(new B.cW8())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gceH())},
aQ(d){this.aZ(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gceH())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cPi()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b40(w,u.e,C.q,!0,x,t,t)
return A.RA(C.hR,A.ih(C.bG,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdqT(),u.gdqV(),u.gdqX(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdkz(),t)}}
B.b40.prototype={
u(d){var x=this,w=A.V4(x.w,new A.mU(x.c,x.d),null,x.r,!0)
return A.te(w,x.e,null)}}
B.apj.prototype={
W(){return"_GestureType."+this.b}}
B.ax0.prototype={
cd(){this.dg()
this.dl()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(TX)","~(TY)","~(LO)","~(mp)"])
B.cW8.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ax0.prototype
x.cPi=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apT.prototype,"gdqV","dqW",1)
x(v,"gdqX","dqY",2)
x(v,"gdqT","dqU",3)
x(v,"gdkz","dkA",4)
w(v,"gbu4","deB",0)
w(v,"gbuf","dgN",0)
w(v,"gceH","diR",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ad4,A.L)
w(B.ax0,A.S)
w(B.apT,B.ax0)
w(B.cW8,A.bu)
w(B.b40,A.x)
w(B.apj,A.eC)
x(B.ax0,A.fv)})()
A.b0(b.typeUniverse,JSON.parse('{"ad4":{"L":[],"m":[]},"apT":{"S":["ad4"]},"b40":{"x":[],"m":[]}}'))
var y={z:A.C("bh<S<L>>"),B:A.C("SI"),l:A.C("Eg"),g:A.C("ak"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vE=new B.apj(0,"pan")
D.Bi=new B.apj(1,"scale")
D.ccG=new B.apj(2,"rotate")})()};
(a=>{a["Bei3AW5iIzmDJfVIfpAgVDkl1zI="]=a.current})($__dart_deferred_initializers__);