((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bnX(d,e,f){return new B.a7j(d,e,f,null)},
bnY(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.an(0,e)
w=f.an(0,e)
return e.ak(0,w.rK(A.ah(x.I6(w)/t,0,1)))},
dXy(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.an(0,q),o=e.b,n=o.an(0,q),m=e.d,l=m.an(0,q),k=p.I6(n),j=n.I6(n),i=p.I6(l),h=l.I6(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bnY(d,q,o),B.bnY(d,o,x),B.bnY(d,x,m),B.bnY(d,m,q)]
v=A.dJ()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bp()},
dHq(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dIm(d,e){var x,w,v,u,t,s,r=new A.cH(new Float64Array(16))
r.cF(d)
r.kB(r)
x=e.a
w=e.b
v=new A.e8(new Float64Array(3))
v.fA(x,w,0)
v=r.ne(v)
u=e.c
t=new A.e8(new Float64Array(3))
t.fA(u,w,0)
t=r.ne(t)
w=e.d
s=new A.e8(new Float64Array(3))
s.fA(u,w,0)
s=r.ne(s)
u=new A.e8(new Float64Array(3))
u.fA(x,w,0)
u=r.ne(u)
x=new A.e8(new Float64Array(3))
x.cF(v)
w=new A.e8(new Float64Array(3))
w.cF(t)
v=new A.e8(new Float64Array(3))
v.cF(s)
t=new A.e8(new Float64Array(3))
t.cF(u)
return new E.XM(x,w,v,t)},
dHd(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.M,w=0;w<4;++w){v=r[w]
u=B.dXy(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.H(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.H(x.a,t)}return B.dry(x)},
dry(d){return new A.H(A.T0(C.k.X(d.a,9)),A.T0(C.k.X(d.b,9)))},
ecD(d,e){if(d.n(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a5:C.y},
a7j:function a7j(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aie:function aie(d,e,f,g){var _=this
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
csL:function csL(){},
aPx:function aPx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahH:function ahH(d,e){this.a=d
this.b=e},
aoM:function aoM(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[261],B)
D=c[807]
E=c[266]
B.a7j.prototype={
O(){var x=null,w=y.z
return new B.aie(new A.bd(x,w),new A.bd(x,w),x,x)}}
B.aie.prototype={
gdE(){var x=this.d
if(x===$){this.a.toString
x=E.dEb()
this.d=x}return x},
gbf_(){var x,w=$.ax.a7$.x.j(0,this.e).gaA()
w.toString
x=y.g.a(w).gK()
this.a.toString
return C.J.aLl(new A.ai(0,0,0+x.a,0+x.b))},
gblD(){var x=$.ax.a7$.x.j(0,this.f).gaA()
x.toString
x=y.g.a(x).gK()
return new A.ai(0,0,0+x.a,0+x.b)},
Re(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.n(0,C.M)){x=new A.cH(new Float64Array(16))
x.cF(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cH(new Float64Array(16))
w.cF(a0)
w.eO(a1.a,a1.b,0,1)
v=B.dIm(w,d.gblD())
if(d.gbf_().gcbn(0))return w
x=d.gbf_()
u=d.ay
t=new A.cH(new Float64Array(16))
t.fz()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eO(q/2,o/2,0,1)
t.a0m(u)
t.eO(-q/2,-o/2,0,1)
u=new A.e8(new Float64Array(3))
u.fA(r,x,0)
u=t.ne(u)
q=new A.e8(new Float64Array(3))
q.fA(s,x,0)
q=t.ne(q)
x=new A.e8(new Float64Array(3))
x.fA(s,p,0)
x=t.ne(x)
s=new A.e8(new Float64Array(3))
s.fA(r,p,0)
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
x.fA(m,l,0)
u=new A.e8(new Float64Array(3))
u.fA(k,l,0)
s=new A.e8(new Float64Array(3))
s.fA(k,j,0)
r=new A.e8(new Float64Array(3))
r.fA(m,j,0)
q=new A.e8(new Float64Array(3))
q.cF(x)
x=new A.e8(new Float64Array(3))
x.cF(u)
u=new A.e8(new Float64Array(3))
u.cF(s)
s=new A.e8(new Float64Array(3))
s.cF(r)
i=new E.XM(q,x,u,s)
h=B.dHd(i,v)
if(h.n(0,C.M))return w
x=w.bsB().a
u=x[0]
x=x[1]
g=a0.Ce()
u-=h.a*g
x-=h.b*g
f=new A.cH(new Float64Array(16))
f.cF(a0)
s=new A.e8(new Float64Array(3))
s.fA(u,x,0)
f.bNX(s)
e=B.dHd(i,B.dIm(f,d.gblD()))
if(e.n(0,C.M))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cH(new Float64Array(16))
x.cF(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cH(new Float64Array(16))
s.cF(a0)
r=new A.e8(new Float64Array(3))
r.fA(u,x,0)
s.bNX(r)
return s},
bzi(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=q.gdE().a.Ce()
x=q.gblD()
v=q.gbf_()
u=q.gblD()
t=q.gbf_()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ah(s,t.ax,t.at)/w
x=new A.cH(new Float64Array(16))
x.cF(d)
x.uQ(r,r,r,1)
return x},
cYg(d,e,f){var x,w,v,u
if(e===0){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=this.gdE().nd(f)
x=new A.cH(new Float64Array(16))
x.cF(d)
v=w.a
u=w.b
x.eO(v,u,0,1)
x.a0m(-e)
x.eO(-v,-u,0,1)
return x},
bgy(d){var x
A:{x=!0
if(D.bWd===d){x=!1
break A}if(D.zc===d){this.a.toString
break A}if(D.tQ===d||d==null){this.a.toString
break A}x=null}return x},
bVU(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zc
else return D.tQ},
d0d(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eG()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.Y(v.gbh8())
v.r=null}x=v.z
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eG()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.Y(v.gbhj())
v.w=null}v.Q=v.ch=null
v.at=v.gdE().a.Ce()
v.as=v.gdE().nd(d.b)
v.ax=v.ay},
d0f(d){var x,w,v,u,t,s,r=this,q=r.gdE().a.Ce(),p=r.x=d.c,o=r.gdE().nd(p),n=r.ch
if(n===D.tQ)n=r.ch=r.bVU(d)
else if(n==null){n=r.bVU(d)
r.ch=n}if(!r.bgy(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdE().sD(r.bzi(r.gdE().a,n*d.d/q))
x=r.gdE().nd(p)
n=r.gdE()
w=r.gdE().a
v=r.as
v.toString
n.sD(r.Re(w,x.an(0,v)))
u=r.gdE().nd(p)
p=r.as
p.toString
if(!B.dry(p).n(0,B.dry(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdE().sD(r.cYg(r.gdE().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.ecD(n,o)}n=r.as
n.toString
s=o.an(0,n)
r.gdE().sD(r.Re(r.gdE().a,s))
r.as=r.gdE().nd(p)
break}r.a.toString},
d0b(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.Y(m.gbh8())
x=m.w
if(x!=null)x.a.Y(m.gbhj())
x=m.y
x===$&&A.f()
x.sD(x.a)
x=m.z
x===$&&A.f()
x.sD(x.a)
x=m.ch
if(!m.bgy(x)){m.Q=null
return}A:{if(D.tQ===x){x=d.a.a
if(x.gdJ()<50){m.Q=null
return}w=m.gdE().a.bsB().a
v=w[0]
w=w[1]
m.a.toString
u=A.bkh(0.0000135,v,x.a,0)
m.a.toString
t=A.bkh(0.0000135,w,x.b,0)
x=x.gdJ()
m.a.toString
s=B.dHq(x,0.0000135,10)
x=u.gX7()
r=t.gX7()
q=y.A
p=A.d_(C.lV,m.y,null)
m.r=new A.bi(p,new A.bj(new A.H(v,w),new A.H(x,r),q),q.m("bi<br.T>"))
m.y.e=A.fn(0,0,0,C.k.aT(s*1000),0)
p.af(m.gbh8())
m.y.bY()
break A}if(D.zc===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gdE().a.Ce()
m.a.toString
n=A.bkh(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.dHq(w,0.0000135,0.1)
x=n.j7(s)
w=y.f
v=A.d_(C.lV,m.z,null)
m.w=new A.bi(v,new A.bj(o,x,w),w.m("bi<br.T>"))
m.z.e=A.fn(0,0,0,C.k.aT(s*1000),0)
v.af(m.gbhj())
m.z.bY()
break A}break A}},
cVu(d){var x,w,v,u,t,s,r,q=this,p=d.gdj(),o=d.gbk()
if(y.l.b(d)){x=d.gef()===C.ex
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gqb())
w=d.gqb()
v=A.Os(d.gdv(),null,w,x)
if(!q.bgy(D.tQ)){q.a.toString
return}u=q.gdE().nd(p)
t=q.gdE().nd(p.an(0,v))
q.gdE().sD(q.Re(q.gdE().a,t.an(0,u)))
q.a.toString
return}if(d.gqb().b===0)return
x=d.gqb()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gii()
else return
q.a.toString
if(!q.bgy(D.zc))return
u=q.gdE().nd(p)
q.gdE().sD(q.bzi(q.gdE().a,s))
r=q.gdE().nd(p)
q.gdE().sD(q.Re(q.gdE().a,r.an(0,u)))
q.a.toString},
cPM(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.Y(s.gbh8())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gdE().a.bsB().a
x=r[0]
r=r[1]
w=s.gdE()
v=s.gdE().a
u=s.gdE()
t=s.r
w.sD(s.Re(v,u.nd(t.b.aB(t.a.gD())).an(0,s.gdE().nd(new A.H(x,r)))))},
cRX(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Y(s.gbhj())
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
s.gdE().sD(s.bzi(s.gdE().a,x/r))
t=s.gdE().nd(s.x)
s.gdE().sD(s.Re(s.gdE().a,t.an(0,u)))},
cTY(){this.p(new B.csL())},
Z(){var x=this,w=null
x.a5()
x.y=A.ct(w,w,w,1,w,x)
x.z=A.ct(w,w,w,1,w,x)
x.gdE().af(x.gbXB())},
aK(d){this.b1(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.f()
w.q()
w=x.z
w===$&&A.f()
w.q()
x.gdE().Y(x.gbXB())
x.a.toString
w=x.gdE()
w.ok$=$.ad()
w.k4$=0
x.crF()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdE().a
w=u.a.w
v=new B.aPx(w,u.e,C.t,!0,x,t,t)
return A.Nr(C.hl,A.hd(C.bu,v,C.x,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gd0a(),u.gd0c(),u.gd0e(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.H(0,-0.005)),u.f,t,t,t,t,t,u.gcVt(),t)}}
B.aPx.prototype={
u(d){var x=this,w=A.QP(x.w,new A.lZ(x.c,x.d),null,x.r,!0)
return A.qf(w,x.e,null)}}
B.ahH.prototype={
V(){return"_GestureType."+this.b}}
B.aoM.prototype={
bv(){this.bX()
this.bQ()
this.dX()},
q(){var x=this,w=x.dy$
if(w!=null)w.Y(x.gdU())
x.dy$=null
x.a6()}}
var z=a.updateTypes(["~()","~(PK)","~(PL)","~(I8)","~(l7)"])
B.csL.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aoM.prototype
x.crF=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aie.prototype,"gd0c","d0d",1)
x(v,"gd0e","d0f",2)
x(v,"gd0a","d0b",3)
x(v,"gcVt","cVu",4)
w(v,"gbh8","cPM",0)
w(v,"gbhj","cRX",0)
w(v,"gbXB","cTY",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.a7j,A.J)
w(B.aoM,A.R)
w(B.aie,B.aoM)
w(B.csL,A.bv)
w(B.aPx,A.x)
w(B.ahH,A.eq)
x(B.aoM,A.eT)})()
A.aU(b.typeUniverse,JSON.parse('{"a7j":{"J":[],"m":[]},"aie":{"R":["a7j"]},"aPx":{"x":[],"m":[]}}'))
var y={z:A.A("bd<R<J>>"),B:A.A("Ow"),l:A.A("Bg"),g:A.A("ag"),A:A.A("bj<H>"),f:A.A("bj<a_>")};(function constants(){D.tQ=new B.ahH(0,"pan")
D.zc=new B.ahH(1,"scale")
D.bWd=new B.ahH(2,"rotate")})()};
(a=>{a["Z7OUG/17av3QJtgiOOrtGFToAhw="]=a.current})($__dart_deferred_initializers__);