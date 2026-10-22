((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHD(d,e,f){return new B.ad9(d,e,f,null)},
bHE(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.x9(A.an(x.Pz(w)/t,0,1)))},
eFk(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.Pz(n),j=n.Pz(n),i=p.Pz(l),h=l.Pz(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHE(d,q,o),B.bHE(d,o,x),B.bHE(d,x,m),B.bHE(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
enW(d,e,f){return Math.log(f/d)/Math.log(e/100)},
eoZ(d,e){var x,w,v,u,t,s,r=new A.d_(new Float64Array(16))
r.dW(d)
r.nq(r)
x=e.a
w=e.b
v=new A.eG(new Float64Array(3))
v.iK(x,w,0)
v=r.qX(v)
u=e.c
t=new A.eG(new Float64Array(3))
t.iK(u,w,0)
t=r.qX(t)
w=e.d
s=new A.eG(new Float64Array(3))
s.iK(u,w,0)
s=r.qX(s)
u=new A.eG(new Float64Array(3))
u.iK(x,w,0)
u=r.qX(u)
x=new A.eG(new Float64Array(3))
x.dW(v)
w=new A.eG(new Float64Array(3))
w.dW(t)
v=new A.eG(new Float64Array(3))
v.dW(s)
t=new A.eG(new Float64Array(3))
t.dW(u)
return new E.a1O(x,w,v,t)},
enJ(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.N,w=0;w<4;++w){v=r[w]
u=B.eFk(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e6o(x)},
e6o(d){return new A.M(A.nd(C.k.Z(d.a,9)),A.nd(C.k.Z(d.b,9)))},
eWR(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
ad9:function ad9(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apW:function apW(d,e,f,g){var _=this
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
cWz:function cWz(){},
b45:function b45(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apm:function apm(d,e){this.a=d
this.b=e},
ax4:function ax4(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[817]
E=c[279]
B.ad9.prototype={
O(){var x=null,w=y.z
return new B.apW(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apW.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.ek1()
this.d=x}return x},
gbrM(){var x,w=$.ah.ac$.x.i(0,this.e).gaI()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.I.aXZ(new A.ap(0,0,0+x.a,0+x.b))},
gbzn(){var x=$.ah.ac$.x.i(0,this.f).gaI()
x.toString
x=y.g.a(x).gL()
return new A.ap(0,0,0+x.a,0+x.b)},
a_r(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.N)){x=new A.d_(new Float64Array(16))
x.dW(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d_(new Float64Array(16))
w.dW(a0)
w.hD(a1.a,a1.b,0,1)
v=B.eoZ(w,d.gbzn())
if(d.gbrM().gcwm(0))return w
x=d.gbrM()
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
t.zn(u)
t.hD(-q/2,-o/2,0,1)
u=new A.eG(new Float64Array(3))
u.iK(r,x,0)
u=t.qX(u)
q=new A.eG(new Float64Array(3))
q.iK(s,x,0)
q=t.qX(q)
x=new A.eG(new Float64Array(3))
x.iK(s,p,0)
x=t.qX(x)
s=new A.eG(new Float64Array(3))
s.iK(r,p,0)
s=t.qX(s)
r=new Float64Array(3)
new A.eG(r).dW(u)
u=new Float64Array(3)
new A.eG(u).dW(q)
q=new Float64Array(3)
new A.eG(q).dW(x)
x=new Float64Array(3)
new A.eG(x).dW(s)
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
x.iK(m,l,0)
u=new A.eG(new Float64Array(3))
u.iK(k,l,0)
s=new A.eG(new Float64Array(3))
s.iK(k,j,0)
r=new A.eG(new Float64Array(3))
r.iK(m,j,0)
q=new A.eG(new Float64Array(3))
q.dW(x)
x=new A.eG(new Float64Array(3))
x.dW(u)
u=new A.eG(new Float64Array(3))
u.dW(s)
s=new A.eG(new Float64Array(3))
s.dW(r)
i=new E.a1O(q,x,u,s)
h=B.enJ(i,v)
if(h.p(0,C.N))return w
x=w.bHr().a
u=x[0]
x=x[1]
g=a0.IQ()
u-=h.a*g
x-=h.b*g
f=new A.d_(new Float64Array(16))
f.dW(a0)
s=new A.eG(new Float64Array(3))
s.iK(u,x,0)
f.c3N(s)
e=B.enJ(i,B.eoZ(f,d.gbzn()))
if(e.p(0,C.N))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d_(new Float64Array(16))
x.dW(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d_(new Float64Array(16))
s.dW(a0)
r=new A.eG(new Float64Array(3))
r.iK(u,x,0)
s.c3N(r)
return s},
bOF(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d_(new Float64Array(16))
x.dW(d)
return x}w=q.gfo().a.IQ()
x=q.gbzn()
v=q.gbrM()
u=q.gbzn()
t=q.gbrM()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d_(new Float64Array(16))
x.dW(d)
x.r7(r,r,r,1)
return x},
do8(d,e,f){var x,w,v,u
if(e===0){x=new A.d_(new Float64Array(16))
x.dW(d)
return x}w=this.gfo().qW(f)
x=new A.d_(new Float64Array(16))
x.dW(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zn(-e)
x.hD(-v,-u,0,1)
return x},
btA(d){var x
A:{x=!0
if(D.ccE===d){x=!1
break A}if(D.Bq===d){this.a.toString
break A}if(D.vG===d||d==null){this.a.toString
break A}x=null}return x},
cdc(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bq
else return D.vG},
dri(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbu7())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbui())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IQ()
v.as=v.gfo().qW(d.b)
v.ax=v.ay},
drk(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IQ(),p=r.x=d.c,o=r.gfo().qW(p),n=r.ch
if(n===D.vG)n=r.ch=r.cdc(d)
else if(n==null){n=r.cdc(d)
r.ch=n}if(!r.btA(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOF(r.gfo().a,n*d.d/q))
x=r.gfo().qW(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_r(w,x.az(0,v)))
u=r.gfo().qW(p)
p=r.as
p.toString
if(!B.e6o(p).p(0,B.e6o(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.do8(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eWR(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfo().sC(r.a_r(r.gfo().a,s))
r.as=r.gfo().qW(p)
break}r.a.toString},
drg(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbu7())
x=m.w
if(x!=null)x.a.T(m.gbui())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btA(x)){m.Q=null
return}A:{if(D.vG===x){x=d.a.a
if(x.gfB()<50){m.Q=null
return}w=m.gfo().a.bHr().a
v=w[0]
w=w[1]
m.a.toString
u=A.bD_(0.0000135,v,x.a,0)
m.a.toString
t=A.bD_(0.0000135,w,x.b,0)
x=x.gfB()
m.a.toString
s=B.enW(x,0.0000135,10)
x=u.ga60()
r=t.ga60()
q=y.A
p=A.dt(C.mZ,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b1(s*1000),0)
p.a4(m.gbu7())
m.y.dA()
break A}if(D.Bq===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IQ()
m.a.toString
n=A.bD_(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.enW(w,0.0000135,0.1)
x=n.lC(s)
w=y.f
v=A.dt(C.mZ,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b1(s*1000),0)
v.a4(m.gbui())
m.z.dA()
break A}break A}},
dkU(d){var x,w,v,u,t,s,r,q=this,p=d.gf6(),o=d.gbw()
if(y.l.b(d)){x=d.ghh()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvm())
w=d.gvm()
v=A.SL(d.gfi(),null,w,x)
if(!q.btA(D.vG)){q.a.toString
return}u=q.gfo().qW(p)
t=q.gfo().qW(p.az(0,v))
q.gfo().sC(q.a_r(q.gfo().a,t.az(0,u)))
q.a.toString
return}if(d.gvm().b===0)return
x=d.gvm()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjV()
else return
q.a.toString
if(!q.btA(D.Bq))return
u=q.gfo().qW(p)
q.gfo().sC(q.bOF(q.gfo().a,s))
r=q.gfo().qW(p)
q.gfo().sC(q.a_r(q.gfo().a,r.az(0,u)))
q.a.toString},
deU(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbu7())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bHr().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_r(v,u.qW(t.b.aN(t.a.gC())).az(0,s.gfo().qW(new A.M(x,r)))))},
dh5(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbui())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IQ()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qW(v)
s.gfo().sC(s.bOF(s.gfo().a,x/r))
t=s.gfo().qW(s.x)
s.gfo().sC(s.a_r(s.gfo().a,t.az(0,u)))},
dj9(){this.n(new B.cWz())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gceP())},
aQ(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gceP())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cPy()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b45(w,u.e,C.q,!0,x,t,t)
return A.RG(C.hR,A.ij(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdrf(),u.gdrh(),u.gdrj(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdkT(),t)}}
B.b45.prototype={
u(d){var x=this,w=A.V9(x.w,new A.l0(x.c,x.d),null,x.r,!0)
return A.ti(w,x.e,null)}}
B.apm.prototype={
W(){return"_GestureType."+this.b}}
B.ax4.prototype={
cf(){this.dg()
this.dl()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(U2)","~(U3)","~(LV)","~(mt)"])
B.cWz.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ax4.prototype
x.cPy=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apW.prototype,"gdrh","dri",1)
x(v,"gdrj","drk",2)
x(v,"gdrf","drg",3)
x(v,"gdkT","dkU",4)
w(v,"gbu7","deU",0)
w(v,"gbui","dh5",0)
w(v,"gceP","dj9",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ad9,A.K)
w(B.ax4,A.Q)
w(B.apW,B.ax4)
w(B.cWz,A.bu)
w(B.b45,A.x)
w(B.apm,A.eD)
x(B.ax4,A.fw)})()
A.b0(b.typeUniverse,JSON.parse('{"ad9":{"K":[],"m":[]},"apW":{"Q":["ad9"]},"b45":{"x":[],"m":[]}}'))
var y={z:A.C("bh<Q<K>>"),B:A.C("SP"),l:A.C("Eq"),g:A.C("aj"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vG=new B.apm(0,"pan")
D.Bq=new B.apm(1,"scale")
D.ccE=new B.apm(2,"rotate")})()};
(a=>{a["yA7F9Go3UOyXpsmfYZGchG2FNp8="]=a.current})($__dart_deferred_initializers__);