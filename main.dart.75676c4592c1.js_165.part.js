((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHO(d,e,f){return new B.adg(d,e,f,null)},
bHP(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.x8(A.an(x.PB(w)/t,0,1)))},
eGl(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.PB(n),j=n.PB(n),i=p.PB(l),h=l.PB(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHP(d,q,o),B.bHP(d,o,x),B.bHP(d,x,m),B.bHP(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
eoX(d,e,f){return Math.log(f/d)/Math.log(e/100)},
epZ(d,e){var x,w,v,u,t,s,r=new A.d0(new Float64Array(16))
r.dW(d)
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
x.dW(v)
w=new A.eH(new Float64Array(3))
w.dW(t)
v=new A.eH(new Float64Array(3))
v.dW(s)
t=new A.eH(new Float64Array(3))
t.dW(u)
return new E.a1P(x,w,v,t)},
eoK(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.N,w=0;w<4;++w){v=r[w]
u=B.eGl(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e7l(x)},
e7l(d){return new A.M(A.ne(C.k.Z(d.a,9)),A.ne(C.k.Z(d.b,9)))},
eXS(d,e){if(d.p(0,e))return null
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
b4f:function b4f(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apt:function apt(d,e){this.a=d
this.b=e},
axb:function axb(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[817]
E=c[279]
B.adg.prototype={
O(){var x=null,w=y.z
return new B.aq2(new A.be(x,w),new A.be(x,w),x,x)}}
B.aq2.prototype={
gfq(){var x=this.d
if(x===$){this.a.toString
x=E.el1()
this.d=x}return x},
gbs4(){var x,w=$.ah.ac$.x.i(0,this.e).gaI()
w.toString
x=y.g.a(w).gM()
this.a.toString
return C.I.aYe(new A.ap(0,0,0+x.a,0+x.b))},
gbzK(){var x=$.ah.ac$.x.i(0,this.f).gaI()
x.toString
x=y.g.a(x).gM()
return new A.ap(0,0,0+x.a,0+x.b)},
a_x(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.N)){x=new A.d0(new Float64Array(16))
x.dW(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d0(new Float64Array(16))
w.dW(a0)
w.hD(a1.a,a1.b,0,1)
v=B.epZ(w,d.gbzK())
if(d.gbs4().gcx0(0))return w
x=d.gbs4()
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
new A.eH(r).dW(u)
u=new Float64Array(3)
new A.eH(u).dW(q)
q=new Float64Array(3)
new A.eH(q).dW(x)
x=new Float64Array(3)
new A.eH(x).dW(s)
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
q.dW(x)
x=new A.eH(new Float64Array(3))
x.dW(u)
u=new A.eH(new Float64Array(3))
u.dW(s)
s=new A.eH(new Float64Array(3))
s.dW(r)
i=new E.a1P(q,x,u,s)
h=B.eoK(i,v)
if(h.p(0,C.N))return w
x=w.bHQ().a
u=x[0]
x=x[1]
g=a0.IR()
u-=h.a*g
x-=h.b*g
f=new A.d0(new Float64Array(16))
f.dW(a0)
s=new A.eH(new Float64Array(3))
s.iL(u,x,0)
f.c4f(s)
e=B.eoK(i,B.epZ(f,d.gbzK()))
if(e.p(0,C.N))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d0(new Float64Array(16))
x.dW(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d0(new Float64Array(16))
s.dW(a0)
r=new A.eH(new Float64Array(3))
r.iL(u,x,0)
s.c4f(r)
return s},
bP6(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d0(new Float64Array(16))
x.dW(d)
return x}w=q.gfq().a.IR()
x=q.gbzK()
v=q.gbs4()
u=q.gbzK()
t=q.gbs4()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d0(new Float64Array(16))
x.dW(d)
x.r7(r,r,r,1)
return x},
dp2(d,e,f){var x,w,v,u
if(e===0){x=new A.d0(new Float64Array(16))
x.dW(d)
return x}w=this.gfq().qX(f)
x=new A.d0(new Float64Array(16))
x.dW(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zp(-e)
x.hD(-v,-u,0,1)
return x},
btR(d){var x
A:{x=!0
if(D.ccR===d){x=!1
break A}if(D.Bw===d){this.a.toString
break A}if(D.vL===d||d==null){this.a.toString
break A}x=null}return x},
cdK(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bw
else return D.vL},
dsc(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbup())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbuA())
v.w=null}v.Q=v.ch=null
v.at=v.gfq().a.IR()
v.as=v.gfq().qX(d.b)
v.ax=v.ay},
dse(d){var x,w,v,u,t,s,r=this,q=r.gfq().a.IR(),p=r.x=d.c,o=r.gfq().qX(p),n=r.ch
if(n===D.vL)n=r.ch=r.cdK(d)
else if(n==null){n=r.cdK(d)
r.ch=n}if(!r.btR(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfq().sC(r.bP6(r.gfq().a,n*d.d/q))
x=r.gfq().qX(p)
n=r.gfq()
w=r.gfq().a
v=r.as
v.toString
n.sC(r.a_x(w,x.az(0,v)))
u=r.gfq().qX(p)
p=r.as
p.toString
if(!B.e7l(p).p(0,B.e7l(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfq().sC(r.dp2(r.gfq().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eXS(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfq().sC(r.a_x(r.gfq().a,s))
r.as=r.gfq().qX(p)
break}r.a.toString},
dsa(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbup())
x=m.w
if(x!=null)x.a.T(m.gbuA())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btR(x)){m.Q=null
return}A:{if(D.vL===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfq().a.bHQ().a
v=w[0]
w=w[1]
m.a.toString
u=A.bD9(0.0000135,v,x.a,0)
m.a.toString
t=A.bD9(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.eoX(x,0.0000135,10)
x=u.ga68()
r=t.ga68()
q=y.A
p=A.dw(C.n_,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b1(s*1000),0)
p.a4(m.gbup())
m.y.dB()
break A}if(D.Bw===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfq().a.IR()
m.a.toString
n=A.bD9(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.eoX(w,0.0000135,0.1)
x=n.lE(s)
w=y.f
v=A.dw(C.n_,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b1(s*1000),0)
v.a4(m.gbuA())
m.z.dB()
break A}break A}},
dlL(d){var x,w,v,u,t,s,r,q=this,p=d.gf8(),o=d.gbu()
if(y.l.b(d)){x=d.ghj()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvm())
w=d.gvm()
v=A.SM(d.gfj(),null,w,x)
if(!q.btR(D.vL)){q.a.toString
return}u=q.gfq().qX(p)
t=q.gfq().qX(p.az(0,v))
q.gfq().sC(q.a_x(q.gfq().a,t.az(0,u)))
q.a.toString
return}if(d.gvm().b===0)return
x=d.gvm()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX()
else return
q.a.toString
if(!q.btR(D.Bw))return
u=q.gfq().qX(p)
q.gfq().sC(q.bP6(q.gfq().a,s))
r=q.gfq().qX(p)
q.gfq().sC(q.a_x(q.gfq().a,r.az(0,u)))
q.a.toString},
dfK(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbup())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfq().a.bHQ().a
x=r[0]
r=r[1]
w=s.gfq()
v=s.gfq().a
u=s.gfq()
t=s.r
w.sC(s.a_x(v,u.qX(t.b.aN(t.a.gC())).az(0,s.gfq().qX(new A.M(x,r)))))},
dhW(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbuA())
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
s.gfq().sC(s.bP6(s.gfq().a,x/r))
t=s.gfq().qX(s.x)
s.gfq().sC(s.a_x(s.gfq().a,t.az(0,u)))},
dk_(){this.n(new B.cX7())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfq().a4(x.gcfm())},
aP(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfq().T(x.gcfm())
x.a.toString
w=x.gfq()
w.ok$=$.aa()
w.k4$=0
x.cQi()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfq().a
w=u.a.w
v=new B.b4f(w,u.e,C.q,!0,x,t,t)
return A.JU(C.ha,A.ik(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gds9(),u.gdsb(),u.gdsd(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdlK(),t)}}
B.b4f.prototype={
u(d){var x=this,w=A.Va(x.w,new A.kv(x.c,x.d),null,x.r,!0)
return A.tm(w,x.e,null)}}
B.apt.prototype={
W(){return"_GestureType."+this.b}}
B.axb.prototype={
cf(){this.dh()
this.dn()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(U3)","~(U4)","~(LW)","~(mw)"])
B.cX7.prototype={
$0(){},
$S:0};(function aliases(){var x=B.axb.prototype
x.cQi=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aq2.prototype,"gdsb","dsc",1)
x(v,"gdsd","dse",2)
x(v,"gds9","dsa",3)
x(v,"gdlK","dlL",4)
w(v,"gbup","dfK",0)
w(v,"gbuA","dhW",0)
w(v,"gcfm","dk_",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.adg,A.K)
w(B.axb,A.Q)
w(B.aq2,B.axb)
w(B.cX7,A.bu)
w(B.b4f,A.x)
w(B.apt,A.eD)
x(B.axb,A.fy)})()
A.b0(b.typeUniverse,JSON.parse('{"adg":{"K":[],"m":[]},"aq2":{"Q":["adg"]},"b4f":{"x":[],"m":[]}}'))
var y={z:A.C("be<Q<K>>"),B:A.C("SQ"),l:A.C("Ev"),g:A.C("ai"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vL=new B.apt(0,"pan")
D.Bw=new B.apt(1,"scale")
D.ccR=new B.apt(2,"rotate")})()};
(a=>{a["6NgJYdld+jnLcsZiQDv+4pAsh9s="]=a.current})($__dart_deferred_initializers__);