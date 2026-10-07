((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bnV(d,e,f){return new B.a7h(d,e,f,null)},
bnW(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.an(0,e)
w=f.an(0,e)
return e.ak(0,w.rK(A.ah(x.I7(w)/t,0,1)))},
dXn(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.an(0,q),o=e.b,n=o.an(0,q),m=e.d,l=m.an(0,q),k=p.I7(n),j=n.I7(n),i=p.I7(l),h=l.I7(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bnW(d,q,o),B.bnW(d,o,x),B.bnW(d,x,m),B.bnW(d,m,q)]
v=A.dJ()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bp()},
dHf(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dIb(d,e){var x,w,v,u,t,s,r=new A.cH(new Float64Array(16))
r.cF(d)
r.kC(r)
x=e.a
w=e.b
v=new A.e8(new Float64Array(3))
v.fw(x,w,0)
v=r.ne(v)
u=e.c
t=new A.e8(new Float64Array(3))
t.fw(u,w,0)
t=r.ne(t)
w=e.d
s=new A.e8(new Float64Array(3))
s.fw(u,w,0)
s=r.ne(s)
u=new A.e8(new Float64Array(3))
u.fw(x,w,0)
u=r.ne(u)
x=new A.e8(new Float64Array(3))
x.cF(v)
w=new A.e8(new Float64Array(3))
w.cF(t)
v=new A.e8(new Float64Array(3))
v.cF(s)
t=new A.e8(new Float64Array(3))
t.cF(u)
return new E.XI(x,w,v,t)},
dH2(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.M,w=0;w<4;++w){v=r[w]
u=B.dXn(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.H(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.H(x.a,t)}return B.drn(x)},
drn(d){return new A.H(A.a2c(C.k.W(d.a,9)),A.a2c(C.k.W(d.b,9)))},
ecp(d,e){if(d.n(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a5:C.y},
a7h:function a7h(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aid:function aid(d,e,f,g){var _=this
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
csJ:function csJ(){},
aPv:function aPv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahG:function ahG(d,e){this.a=d
this.b=e},
aoL:function aoL(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[261],B)
D=c[807]
E=c[266]
B.a7h.prototype={
O(){var x=null,w=y.z
return new B.aid(new A.bd(x,w),new A.bd(x,w),x,x)}}
B.aid.prototype={
gdE(){var x=this.d
if(x===$){this.a.toString
x=E.dE1()
this.d=x}return x},
gbeT(){var x,w=$.ax.a7$.x.j(0,this.e).gaA()
w.toString
x=y.g.a(w).gK()
this.a.toString
return C.J.aLm(new A.ai(0,0,0+x.a,0+x.b))},
gblu(){var x=$.ax.a7$.x.j(0,this.f).gaA()
x.toString
x=y.g.a(x).gK()
return new A.ai(0,0,0+x.a,0+x.b)},
Rf(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.n(0,C.M)){x=new A.cH(new Float64Array(16))
x.cF(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cH(new Float64Array(16))
w.cF(a0)
w.eN(a1.a,a1.b,0,1)
v=B.dIb(w,d.gblu())
if(d.gbeT().gcbd(0))return w
x=d.gbeT()
u=d.ay
t=new A.cH(new Float64Array(16))
t.fv()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eN(q/2,o/2,0,1)
t.a0p(u)
t.eN(-q/2,-o/2,0,1)
u=new A.e8(new Float64Array(3))
u.fw(r,x,0)
u=t.ne(u)
q=new A.e8(new Float64Array(3))
q.fw(s,x,0)
q=t.ne(q)
x=new A.e8(new Float64Array(3))
x.fw(s,p,0)
x=t.ne(x)
s=new A.e8(new Float64Array(3))
s.fw(r,p,0)
s=t.ne(s)
r=new Float64Array(3)
new A.e8(r).cF(u)
u=new Float64Array(3)
new A.e8(u).cF(q)
q=new Float64Array(3)
new A.e8(q).cF(x)
x=new Float64Array(3)
new A.e8(x).cF(s)
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
x=new A.e8(new Float64Array(3))
x.fw(m,l,0)
u=new A.e8(new Float64Array(3))
u.fw(k,l,0)
s=new A.e8(new Float64Array(3))
s.fw(k,j,0)
r=new A.e8(new Float64Array(3))
r.fw(m,j,0)
q=new A.e8(new Float64Array(3))
q.cF(x)
x=new A.e8(new Float64Array(3))
x.cF(u)
u=new A.e8(new Float64Array(3))
u.cF(s)
s=new A.e8(new Float64Array(3))
s.cF(r)
i=new E.XI(q,x,u,s)
h=B.dH2(i,v)
if(h.n(0,C.M))return w
x=w.bsu().a
u=x[0]
x=x[1]
g=a0.Ce()
u-=h.a*g
x-=h.b*g
f=new A.cH(new Float64Array(16))
f.cF(a0)
s=new A.e8(new Float64Array(3))
s.fw(u,x,0)
f.bNN(s)
e=B.dH2(i,B.dIb(f,d.gblu()))
if(e.n(0,C.M))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cH(new Float64Array(16))
x.cF(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cH(new Float64Array(16))
s.cF(a0)
r=new A.e8(new Float64Array(3))
r.fw(u,x,0)
s.bNN(r)
return s},
bz9(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=q.gdE().a.Ce()
x=q.gblu()
v=q.gbeT()
u=q.gblu()
t=q.gbeT()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ah(s,t.ax,t.at)/w
x=new A.cH(new Float64Array(16))
x.cF(d)
x.uP(r,r,r,1)
return x},
cY5(d,e,f){var x,w,v,u
if(e===0){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=this.gdE().nd(f)
x=new A.cH(new Float64Array(16))
x.cF(d)
v=w.a
u=w.b
x.eN(v,u,0,1)
x.a0p(-e)
x.eN(-v,-u,0,1)
return x},
bgq(d){var x
A:{x=!0
if(D.bWi===d){x=!1
break A}if(D.zc===d){this.a.toString
break A}if(D.tQ===d||d==null){this.a.toString
break A}x=null}return x},
bVK(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zc
else return D.tQ},
d02(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eG()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.Y(v.gbh_())
v.r=null}x=v.z
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eG()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.Y(v.gbha())
v.w=null}v.Q=v.ch=null
v.at=v.gdE().a.Ce()
v.as=v.gdE().nd(d.b)
v.ax=v.ay},
d04(d){var x,w,v,u,t,s,r=this,q=r.gdE().a.Ce(),p=r.x=d.c,o=r.gdE().nd(p),n=r.ch
if(n===D.tQ)n=r.ch=r.bVK(d)
else if(n==null){n=r.bVK(d)
r.ch=n}if(!r.bgq(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdE().sD(r.bz9(r.gdE().a,n*d.d/q))
x=r.gdE().nd(p)
n=r.gdE()
w=r.gdE().a
v=r.as
v.toString
n.sD(r.Rf(w,x.an(0,v)))
u=r.gdE().nd(p)
p=r.as
p.toString
if(!B.drn(p).n(0,B.drn(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdE().sD(r.cY5(r.gdE().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.ecp(n,o)}n=r.as
n.toString
s=o.an(0,n)
r.gdE().sD(r.Rf(r.gdE().a,s))
r.as=r.gdE().nd(p)
break}r.a.toString},
d00(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.Y(m.gbh_())
x=m.w
if(x!=null)x.a.Y(m.gbha())
x=m.y
x===$&&A.f()
x.sD(x.a)
x=m.z
x===$&&A.f()
x.sD(x.a)
x=m.ch
if(!m.bgq(x)){m.Q=null
return}A:{if(D.tQ===x){x=d.a.a
if(x.gdJ()<50){m.Q=null
return}w=m.gdE().a.bsu().a
v=w[0]
w=w[1]
m.a.toString
u=A.bkf(0.0000135,v,x.a,0)
m.a.toString
t=A.bkf(0.0000135,w,x.b,0)
x=x.gdJ()
m.a.toString
s=B.dHf(x,0.0000135,10)
x=u.gX9()
r=t.gX9()
q=y.A
p=A.d_(C.lV,m.y,null)
m.r=new A.bi(p,new A.bj(new A.H(v,w),new A.H(x,r),q),q.m("bi<br.T>"))
m.y.e=A.fn(0,0,0,C.k.aT(s*1000),0)
p.af(m.gbh_())
m.y.bY()
break A}if(D.zc===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gdE().a.Ce()
m.a.toString
n=A.bkf(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.dHf(w,0.0000135,0.1)
x=n.j8(s)
w=y.f
v=A.d_(C.lV,m.z,null)
m.w=new A.bi(v,new A.bj(o,x,w),w.m("bi<br.T>"))
m.z.e=A.fn(0,0,0,C.k.aT(s*1000),0)
v.af(m.gbha())
m.z.bY()
break A}break A}},
cVj(d){var x,w,v,u,t,s,r,q=this,p=d.gdj(),o=d.gbk()
if(y.l.b(d)){x=d.gef()===C.ex
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gqb())
w=d.gqb()
v=A.Or(d.gdv(),null,w,x)
if(!q.bgq(D.tQ)){q.a.toString
return}u=q.gdE().nd(p)
t=q.gdE().nd(p.an(0,v))
q.gdE().sD(q.Rf(q.gdE().a,t.an(0,u)))
q.a.toString
return}if(d.gqb().b===0)return
x=d.gqb()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gii()
else return
q.a.toString
if(!q.bgq(D.zc))return
u=q.gdE().nd(p)
q.gdE().sD(q.bz9(q.gdE().a,s))
r=q.gdE().nd(p)
q.gdE().sD(q.Rf(q.gdE().a,r.an(0,u)))
q.a.toString},
cPA(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.Y(s.gbh_())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gdE().a.bsu().a
x=r[0]
r=r[1]
w=s.gdE()
v=s.gdE().a
u=s.gdE()
t=s.r
w.sD(s.Rf(v,u.nd(t.b.aB(t.a.gD())).an(0,s.gdE().nd(new A.H(x,r)))))},
cRL(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Y(s.gbha())
s.w=null
r=s.z
r.sD(r.a)
return}r=s.w
x=r.b.aB(r.a.gD())
r=s.gdE().a.Ce()
w=s.gdE()
v=s.x
v===$&&A.f()
u=w.nd(v)
s.gdE().sD(s.bz9(s.gdE().a,x/r))
t=s.gdE().nd(s.x)
s.gdE().sD(s.Rf(s.gdE().a,t.an(0,u)))},
cTM(){this.p(new B.csJ())},
Z(){var x=this,w=null
x.a5()
x.y=A.ct(w,w,w,1,w,x)
x.z=A.ct(w,w,w,1,w,x)
x.gdE().af(x.gbXr())},
aK(d){this.b1(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.f()
w.q()
w=x.z
w===$&&A.f()
w.q()
x.gdE().Y(x.gbXr())
x.a.toString
w=x.gdE()
w.ok$=$.ad()
w.k4$=0
x.crt()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdE().a
w=u.a.w
v=new B.aPv(w,u.e,C.t,!0,x,t,t)
return A.Nq(C.hl,A.he(C.bu,v,C.x,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gd0_(),u.gd01(),u.gd03(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.H(0,-0.005)),u.f,t,t,t,t,t,u.gcVi(),t)}}
B.aPv.prototype={
u(d){var x=this,w=A.QO(x.w,new A.lZ(x.c,x.d),null,x.r,!0)
return A.qg(w,x.e,null)}}
B.ahG.prototype={
U(){return"_GestureType."+this.b}}
B.aoL.prototype={
bv(){this.bX()
this.bQ()
this.dX()},
q(){var x=this,w=x.dy$
if(w!=null)w.Y(x.gdU())
x.dy$=null
x.a6()}}
var z=a.updateTypes(["~()","~(PJ)","~(PK)","~(I5)","~(l7)"])
B.csJ.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aoL.prototype
x.crt=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aid.prototype,"gd01","d02",1)
x(v,"gd03","d04",2)
x(v,"gd0_","d00",3)
x(v,"gcVi","cVj",4)
w(v,"gbh_","cPA",0)
w(v,"gbha","cRL",0)
w(v,"gbXr","cTM",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.a7h,A.J)
w(B.aoL,A.R)
w(B.aid,B.aoL)
w(B.csJ,A.bv)
w(B.aPv,A.x)
w(B.ahG,A.eq)
x(B.aoL,A.eU)})()
A.aU(b.typeUniverse,JSON.parse('{"a7h":{"J":[],"m":[]},"aid":{"R":["a7h"]},"aPv":{"x":[],"m":[]}}'))
var y={z:A.A("bd<R<J>>"),B:A.A("Ov"),l:A.A("Bg"),g:A.A("ag"),A:A.A("bj<H>"),f:A.A("bj<a_>")};(function constants(){D.tQ=new B.ahG(0,"pan")
D.zc=new B.ahG(1,"scale")
D.bWi=new B.ahG(2,"rotate")})()};
(a=>{a["NLI0rUN/k0KgKPZB+7xKyHrDOFg="]=a.current})($__dart_deferred_initializers__);