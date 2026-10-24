((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHO(d,e,f){return new B.adg(d,e,f,null)},
bHP(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.x8(A.an(x.Pz(w)/t,0,1)))},
eG2(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.Pz(n),j=n.Pz(n),i=p.Pz(l),h=l.Pz(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHP(d,q,o),B.bHP(d,o,x),B.bHP(d,x,m),B.bHP(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
eoF(d,e,f){return Math.log(f/d)/Math.log(e/100)},
epH(d,e){var x,w,v,u,t,s,r=new A.d_(new Float64Array(16))
r.dV(d)
r.ns(r)
x=e.a
w=e.b
v=new A.eG(new Float64Array(3))
v.iL(x,w,0)
v=r.qY(v)
u=e.c
t=new A.eG(new Float64Array(3))
t.iL(u,w,0)
t=r.qY(t)
w=e.d
s=new A.eG(new Float64Array(3))
s.iL(u,w,0)
s=r.qY(s)
u=new A.eG(new Float64Array(3))
u.iL(x,w,0)
u=r.qY(u)
x=new A.eG(new Float64Array(3))
x.dV(v)
w=new A.eG(new Float64Array(3))
w.dV(t)
v=new A.eG(new Float64Array(3))
v.dV(s)
t=new A.eG(new Float64Array(3))
t.dV(u)
return new E.a1Q(x,w,v,t)},
eos(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.N,w=0;w<4;++w){v=r[w]
u=B.eG2(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e75(x)},
e75(d){return new A.M(A.ne(C.k.Z(d.a,9)),A.ne(C.k.Z(d.b,9)))},
eXA(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
adg:function adg(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aq2:function aq2(d,e,f,g){var _=this
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
cX7:function cX7(){},
b4g:function b4g(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apt:function apt(d,e){this.a=d
this.b=e},
axc:function axc(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[817]
E=c[279]
B.adg.prototype={
O(){var x=null,w=y.z
return new B.aq2(new A.bg(x,w),new A.bg(x,w),x,x)}}
B.aq2.prototype={
gfp(){var x=this.d
if(x===$){this.a.toString
x=E.ekK()
this.d=x}return x},
gbs1(){var x,w=$.ah.ac$.x.i(0,this.e).gaI()
w.toString
x=y.g.a(w).gM()
this.a.toString
return C.I.aYb(new A.ap(0,0,0+x.a,0+x.b))},
gbzH(){var x=$.ah.ac$.x.i(0,this.f).gaI()
x.toString
x=y.g.a(x).gM()
return new A.ap(0,0,0+x.a,0+x.b)},
a_u(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.N)){x=new A.d_(new Float64Array(16))
x.dV(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d_(new Float64Array(16))
w.dV(a0)
w.hD(a1.a,a1.b,0,1)
v=B.epH(w,d.gbzH())
if(d.gbs1().gcwU(0))return w
x=d.gbs1()
u=d.ay
t=new A.d_(new Float64Array(16))
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
u=new A.eG(new Float64Array(3))
u.iL(r,x,0)
u=t.qY(u)
q=new A.eG(new Float64Array(3))
q.iL(s,x,0)
q=t.qY(q)
x=new A.eG(new Float64Array(3))
x.iL(s,p,0)
x=t.qY(x)
s=new A.eG(new Float64Array(3))
s.iL(r,p,0)
s=t.qY(s)
r=new Float64Array(3)
new A.eG(r).dV(u)
u=new Float64Array(3)
new A.eG(u).dV(q)
q=new Float64Array(3)
new A.eG(q).dV(x)
x=new Float64Array(3)
new A.eG(x).dV(s)
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
x=new A.eG(new Float64Array(3))
x.iL(m,l,0)
u=new A.eG(new Float64Array(3))
u.iL(k,l,0)
s=new A.eG(new Float64Array(3))
s.iL(k,j,0)
r=new A.eG(new Float64Array(3))
r.iL(m,j,0)
q=new A.eG(new Float64Array(3))
q.dV(x)
x=new A.eG(new Float64Array(3))
x.dV(u)
u=new A.eG(new Float64Array(3))
u.dV(s)
s=new A.eG(new Float64Array(3))
s.dV(r)
i=new E.a1Q(q,x,u,s)
h=B.eos(i,v)
if(h.p(0,C.N))return w
x=w.bHM().a
u=x[0]
x=x[1]
g=a0.IP()
u-=h.a*g
x-=h.b*g
f=new A.d_(new Float64Array(16))
f.dV(a0)
s=new A.eG(new Float64Array(3))
s.iL(u,x,0)
f.c4d(s)
e=B.eos(i,B.epH(f,d.gbzH()))
if(e.p(0,C.N))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d_(new Float64Array(16))
x.dV(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d_(new Float64Array(16))
s.dV(a0)
r=new A.eG(new Float64Array(3))
r.iL(u,x,0)
s.c4d(r)
return s},
bP3(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d_(new Float64Array(16))
x.dV(d)
return x}w=q.gfp().a.IP()
x=q.gbzH()
v=q.gbs1()
u=q.gbzH()
t=q.gbs1()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d_(new Float64Array(16))
x.dV(d)
x.r7(r,r,r,1)
return x},
doU(d,e,f){var x,w,v,u
if(e===0){x=new A.d_(new Float64Array(16))
x.dV(d)
return x}w=this.gfp().qX(f)
x=new A.d_(new Float64Array(16))
x.dV(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zp(-e)
x.hD(-v,-u,0,1)
return x},
btO(d){var x
A:{x=!0
if(D.ccP===d){x=!1
break A}if(D.Bw===d){this.a.toString
break A}if(D.vL===d||d==null){this.a.toString
break A}x=null}return x},
cdH(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bw
else return D.vL},
ds3(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbul())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbuw())
v.w=null}v.Q=v.ch=null
v.at=v.gfp().a.IP()
v.as=v.gfp().qX(d.b)
v.ax=v.ay},
ds5(d){var x,w,v,u,t,s,r=this,q=r.gfp().a.IP(),p=r.x=d.c,o=r.gfp().qX(p),n=r.ch
if(n===D.vL)n=r.ch=r.cdH(d)
else if(n==null){n=r.cdH(d)
r.ch=n}if(!r.btO(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfp().sC(r.bP3(r.gfp().a,n*d.d/q))
x=r.gfp().qX(p)
n=r.gfp()
w=r.gfp().a
v=r.as
v.toString
n.sC(r.a_u(w,x.az(0,v)))
u=r.gfp().qX(p)
p=r.as
p.toString
if(!B.e75(p).p(0,B.e75(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfp().sC(r.doU(r.gfp().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eXA(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfp().sC(r.a_u(r.gfp().a,s))
r.as=r.gfp().qX(p)
break}r.a.toString},
ds1(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbul())
x=m.w
if(x!=null)x.a.T(m.gbuw())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btO(x)){m.Q=null
return}A:{if(D.vL===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfp().a.bHM().a
v=w[0]
w=w[1]
m.a.toString
u=A.bDa(0.0000135,v,x.a,0)
m.a.toString
t=A.bDa(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.eoF(x,0.0000135,10)
x=u.ga65()
r=t.ga65()
q=y.A
p=A.dv(C.n_,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b1(s*1000),0)
p.a4(m.gbul())
m.y.dA()
break A}if(D.Bw===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfp().a.IP()
m.a.toString
n=A.bDa(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.eoF(w,0.0000135,0.1)
x=n.lE(s)
w=y.f
v=A.dv(C.n_,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b1(s*1000),0)
v.a4(m.gbuw())
m.z.dA()
break A}break A}},
dlC(d){var x,w,v,u,t,s,r,q=this,p=d.gf7(),o=d.gbw()
if(y.l.b(d)){x=d.ghi()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvl())
w=d.gvl()
v=A.SN(d.gfi(),null,w,x)
if(!q.btO(D.vL)){q.a.toString
return}u=q.gfp().qX(p)
t=q.gfp().qX(p.az(0,v))
q.gfp().sC(q.a_u(q.gfp().a,t.az(0,u)))
q.a.toString
return}if(d.gvl().b===0)return
x=d.gvl()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjW()
else return
q.a.toString
if(!q.btO(D.Bw))return
u=q.gfp().qX(p)
q.gfp().sC(q.bP3(q.gfp().a,s))
r=q.gfp().qX(p)
q.gfp().sC(q.a_u(q.gfp().a,r.az(0,u)))
q.a.toString},
dfB(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbul())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfp().a.bHM().a
x=r[0]
r=r[1]
w=s.gfp()
v=s.gfp().a
u=s.gfp()
t=s.r
w.sC(s.a_u(v,u.qX(t.b.aN(t.a.gC())).az(0,s.gfp().qX(new A.M(x,r)))))},
dhN(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbuw())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfp().a.IP()
w=s.gfp()
v=s.x
v===$&&A.e()
u=w.qX(v)
s.gfp().sC(s.bP3(s.gfp().a,x/r))
t=s.gfp().qX(s.x)
s.gfp().sC(s.a_u(s.gfp().a,t.az(0,u)))},
djR(){this.n(new B.cX7())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfp().a4(x.gcfj())},
aP(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfp().T(x.gcfj())
x.a.toString
w=x.gfp()
w.ok$=$.aa()
w.k4$=0
x.cQa()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfp().a
w=u.a.w
v=new B.b4g(w,u.e,C.q,!0,x,t,t)
return A.RH(C.hR,A.ij(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gds0(),u.gds2(),u.gds4(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdlB(),t)}}
B.b4g.prototype={
u(d){var x=this,w=A.Vb(x.w,new A.l1(x.c,x.d),null,x.r,!0)
return A.tm(w,x.e,null)}}
B.apt.prototype={
W(){return"_GestureType."+this.b}}
B.axc.prototype={
cg(){this.dh()
this.dm()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(U4)","~(U5)","~(LV)","~(mw)"])
B.cX7.prototype={
$0(){},
$S:0};(function aliases(){var x=B.axc.prototype
x.cQa=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aq2.prototype,"gds2","ds3",1)
x(v,"gds4","ds5",2)
x(v,"gds0","ds1",3)
x(v,"gdlB","dlC",4)
w(v,"gbul","dfB",0)
w(v,"gbuw","dhN",0)
w(v,"gcfj","djR",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.adg,A.K)
w(B.axc,A.Q)
w(B.aq2,B.axc)
w(B.cX7,A.bu)
w(B.b4g,A.x)
w(B.apt,A.eD)
x(B.axc,A.fw)})()
A.b0(b.typeUniverse,JSON.parse('{"adg":{"K":[],"m":[]},"aq2":{"Q":["adg"]},"b4g":{"x":[],"m":[]}}'))
var y={z:A.C("bg<Q<K>>"),B:A.C("SR"),l:A.C("Et"),g:A.C("ak"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vL=new B.apt(0,"pan")
D.Bw=new B.apt(1,"scale")
D.ccP=new B.apt(2,"rotate")})()};
(a=>{a["pbnk8slYrIM7IPHLKn+/oArpLG4="]=a.current})($__dart_deferred_initializers__);