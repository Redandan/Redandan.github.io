((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bo5(d,e,f){return new B.a7i(d,e,f,null)},
bo6(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.an(0,e)
w=f.an(0,e)
return e.ak(0,w.rM(A.ah(x.Ib(w)/t,0,1)))},
dXQ(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.an(0,q),o=e.b,n=o.an(0,q),m=e.d,l=m.an(0,q),k=p.Ib(n),j=n.Ib(n),i=p.Ib(l),h=l.Ib(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bo6(d,q,o),B.bo6(d,o,x),B.bo6(d,x,m),B.bo6(d,m,q)]
v=A.dJ()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bp()},
dHH(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dID(d,e){var x,w,v,u,t,s,r=new A.cH(new Float64Array(16))
r.cF(d)
r.kD(r)
x=e.a
w=e.b
v=new A.e8(new Float64Array(3))
v.fC(x,w,0)
v=r.ng(v)
u=e.c
t=new A.e8(new Float64Array(3))
t.fC(u,w,0)
t=r.ng(t)
w=e.d
s=new A.e8(new Float64Array(3))
s.fC(u,w,0)
s=r.ng(s)
u=new A.e8(new Float64Array(3))
u.fC(x,w,0)
u=r.ng(u)
x=new A.e8(new Float64Array(3))
x.cF(v)
w=new A.e8(new Float64Array(3))
w.cF(t)
v=new A.e8(new Float64Array(3))
v.cF(s)
t=new A.e8(new Float64Array(3))
t.cF(u)
return new E.XK(x,w,v,t)},
dHu(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.M,w=0;w<4;++w){v=r[w]
u=B.dXQ(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.H(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.H(x.a,t)}return B.drN(x)},
drN(d){return new A.H(A.a2a(C.k.W(d.a,9)),A.a2a(C.k.W(d.b,9)))},
ecW(d,e){if(d.n(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a5:C.y},
a7i:function a7i(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aij:function aij(d,e,f,g){var _=this
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
ct3:function ct3(){},
aPH:function aPH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahM:function ahM(d,e){this.a=d
this.b=e},
aoU:function aoU(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[260],B)
D=c[790]
E=c[265]
B.a7i.prototype={
O(){var x=null,w=y.z
return new B.aij(new A.bf(x,w),new A.bf(x,w),x,x)}}
B.aij.prototype={
gdE(){var x=this.d
if(x===$){this.a.toString
x=E.dEt()
this.d=x}return x},
gbf3(){var x,w=$.aw.a7$.x.j(0,this.e).gaA()
w.toString
x=y.g.a(w).gK()
this.a.toString
return C.I.aLu(new A.ai(0,0,0+x.a,0+x.b))},
gblG(){var x=$.aw.a7$.x.j(0,this.f).gaA()
x.toString
x=y.g.a(x).gK()
return new A.ai(0,0,0+x.a,0+x.b)},
Rl(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.n(0,C.M)){x=new A.cH(new Float64Array(16))
x.cF(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cH(new Float64Array(16))
w.cF(a0)
w.eO(a1.a,a1.b,0,1)
v=B.dID(w,d.gblG())
if(d.gbf3().gcbu(0))return w
x=d.gbf3()
u=d.ay
t=new A.cH(new Float64Array(16))
t.fB()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eO(q/2,o/2,0,1)
t.a0v(u)
t.eO(-q/2,-o/2,0,1)
u=new A.e8(new Float64Array(3))
u.fC(r,x,0)
u=t.ng(u)
q=new A.e8(new Float64Array(3))
q.fC(s,x,0)
q=t.ng(q)
x=new A.e8(new Float64Array(3))
x.fC(s,p,0)
x=t.ng(x)
s=new A.e8(new Float64Array(3))
s.fC(r,p,0)
s=t.ng(s)
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
x.fC(m,l,0)
u=new A.e8(new Float64Array(3))
u.fC(k,l,0)
s=new A.e8(new Float64Array(3))
s.fC(k,j,0)
r=new A.e8(new Float64Array(3))
r.fC(m,j,0)
q=new A.e8(new Float64Array(3))
q.cF(x)
x=new A.e8(new Float64Array(3))
x.cF(u)
u=new A.e8(new Float64Array(3))
u.cF(s)
s=new A.e8(new Float64Array(3))
s.cF(r)
i=new E.XK(q,x,u,s)
h=B.dHu(i,v)
if(h.n(0,C.M))return w
x=w.bsG().a
u=x[0]
x=x[1]
g=a0.Cj()
u-=h.a*g
x-=h.b*g
f=new A.cH(new Float64Array(16))
f.cF(a0)
s=new A.e8(new Float64Array(3))
s.fC(u,x,0)
f.bO1(s)
e=B.dHu(i,B.dID(f,d.gblG()))
if(e.n(0,C.M))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cH(new Float64Array(16))
x.cF(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cH(new Float64Array(16))
s.cF(a0)
r=new A.e8(new Float64Array(3))
r.fC(u,x,0)
s.bO1(r)
return s},
bzl(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=q.gdE().a.Cj()
x=q.gblG()
v=q.gbf3()
u=q.gblG()
t=q.gbf3()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ah(s,t.ax,t.at)/w
x=new A.cH(new Float64Array(16))
x.cF(d)
x.uS(r,r,r,1)
return x},
cYq(d,e,f){var x,w,v,u
if(e===0){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=this.gdE().nf(f)
x=new A.cH(new Float64Array(16))
x.cF(d)
v=w.a
u=w.b
x.eO(v,u,0,1)
x.a0v(-e)
x.eO(-v,-u,0,1)
return x},
bgC(d){var x
A:{x=!0
if(D.bWl===d){x=!1
break A}if(D.zf===d){this.a.toString
break A}if(D.tS===d||d==null){this.a.toString
break A}x=null}return x},
bW1(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zf
else return D.tS},
d0m(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eH()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.Z(v.gbhb())
v.r=null}x=v.z
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eH()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.Z(v.gbhm())
v.w=null}v.Q=v.ch=null
v.at=v.gdE().a.Cj()
v.as=v.gdE().nf(d.b)
v.ax=v.ay},
d0o(d){var x,w,v,u,t,s,r=this,q=r.gdE().a.Cj(),p=r.x=d.c,o=r.gdE().nf(p),n=r.ch
if(n===D.tS)n=r.ch=r.bW1(d)
else if(n==null){n=r.bW1(d)
r.ch=n}if(!r.bgC(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdE().sD(r.bzl(r.gdE().a,n*d.d/q))
x=r.gdE().nf(p)
n=r.gdE()
w=r.gdE().a
v=r.as
v.toString
n.sD(r.Rl(w,x.an(0,v)))
u=r.gdE().nf(p)
p=r.as
p.toString
if(!B.drN(p).n(0,B.drN(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdE().sD(r.cYq(r.gdE().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.ecW(n,o)}n=r.as
n.toString
s=o.an(0,n)
r.gdE().sD(r.Rl(r.gdE().a,s))
r.as=r.gdE().nf(p)
break}r.a.toString},
d0k(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.Z(m.gbhb())
x=m.w
if(x!=null)x.a.Z(m.gbhm())
x=m.y
x===$&&A.f()
x.sD(x.a)
x=m.z
x===$&&A.f()
x.sD(x.a)
x=m.ch
if(!m.bgC(x)){m.Q=null
return}A:{if(D.tS===x){x=d.a.a
if(x.gdK()<50){m.Q=null
return}w=m.gdE().a.bsG().a
v=w[0]
w=w[1]
m.a.toString
u=A.bkq(0.0000135,v,x.a,0)
m.a.toString
t=A.bkq(0.0000135,w,x.b,0)
x=x.gdK()
m.a.toString
s=B.dHH(x,0.0000135,10)
x=u.gXe()
r=t.gXe()
q=y.A
p=A.d0(C.lW,m.y,null)
m.r=new A.bi(p,new A.bj(new A.H(v,w),new A.H(x,r),q),q.m("bi<br.T>"))
m.y.e=A.fm(0,0,0,C.k.aT(s*1000),0)
p.af(m.gbhb())
m.y.bY()
break A}if(D.zf===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gdE().a.Cj()
m.a.toString
n=A.bkq(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.dHH(w,0.0000135,0.1)
x=n.j9(s)
w=y.f
v=A.d0(C.lW,m.z,null)
m.w=new A.bi(v,new A.bj(o,x,w),w.m("bi<br.T>"))
m.z.e=A.fm(0,0,0,C.k.aT(s*1000),0)
v.af(m.gbhm())
m.z.bY()
break A}break A}},
cVD(d){var x,w,v,u,t,s,r,q=this,p=d.gdj(),o=d.gbl()
if(y.l.b(d)){x=d.gef()===C.ey
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gqc())
w=d.gqc()
v=A.Os(d.gdw(),null,w,x)
if(!q.bgC(D.tS)){q.a.toString
return}u=q.gdE().nf(p)
t=q.gdE().nf(p.an(0,v))
q.gdE().sD(q.Rl(q.gdE().a,t.an(0,u)))
q.a.toString
return}if(d.gqc().b===0)return
x=d.gqc()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gij()
else return
q.a.toString
if(!q.bgC(D.zf))return
u=q.gdE().nf(p)
q.gdE().sD(q.bzl(q.gdE().a,s))
r=q.gdE().nf(p)
q.gdE().sD(q.Rl(q.gdE().a,r.an(0,u)))
q.a.toString},
cPU(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.Z(s.gbhb())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gdE().a.bsG().a
x=r[0]
r=r[1]
w=s.gdE()
v=s.gdE().a
u=s.gdE()
t=s.r
w.sD(s.Rl(v,u.nf(t.b.aB(t.a.gD())).an(0,s.gdE().nf(new A.H(x,r)))))},
cS4(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Z(s.gbhm())
s.w=null
r=s.z
r.sD(r.a)
return}r=s.w
x=r.b.aB(r.a.gD())
r=s.gdE().a.Cj()
w=s.gdE()
v=s.x
v===$&&A.f()
u=w.nf(v)
s.gdE().sD(s.bzl(s.gdE().a,x/r))
t=s.gdE().nf(s.x)
s.gdE().sD(s.Rl(s.gdE().a,t.an(0,u)))},
cU5(){this.p(new B.ct3())},
Y(){var x=this,w=null
x.a5()
x.y=A.cu(w,w,w,1,w,x)
x.z=A.cu(w,w,w,1,w,x)
x.gdE().af(x.gbXJ())},
aK(d){this.b1(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.f()
w.q()
w=x.z
w===$&&A.f()
w.q()
x.gdE().Z(x.gbXJ())
x.a.toString
w=x.gdE()
w.ok$=$.ae()
w.k4$=0
x.crL()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdE().a
w=u.a.w
v=new B.aPH(w,u.e,C.r,!0,x,t,t)
return A.Nr(C.hl,A.hf(C.bu,v,C.x,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gd0j(),u.gd0l(),u.gd0n(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.H(0,-0.005)),u.f,t,t,t,t,t,u.gcVC(),t)}}
B.aPH.prototype={
u(d){var x=this,w=A.QR(x.w,new A.m_(x.c,x.d),null,x.r,!0)
return A.qi(w,x.e,null)}}
B.ahM.prototype={
U(){return"_GestureType."+this.b}}
B.aoU.prototype={
bw(){this.bX()
this.bR()
this.dY()},
q(){var x=this,w=x.dy$
if(w!=null)w.Z(x.gdV())
x.dy$=null
x.a6()}}
var z=a.updateTypes(["~()","~(PK)","~(PL)","~(I8)","~(l8)"])
B.ct3.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aoU.prototype
x.crL=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aij.prototype,"gd0l","d0m",1)
x(v,"gd0n","d0o",2)
x(v,"gd0j","d0k",3)
x(v,"gcVC","cVD",4)
w(v,"gbhb","cPU",0)
w(v,"gbhm","cS4",0)
w(v,"gbXJ","cU5",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.a7i,A.J)
w(B.aoU,A.R)
w(B.aij,B.aoU)
w(B.ct3,A.bw)
w(B.aPH,A.x)
w(B.ahM,A.es)
x(B.aoU,A.eT)})()
A.aV(b.typeUniverse,JSON.parse('{"a7i":{"J":[],"m":[]},"aij":{"R":["a7i"]},"aPH":{"x":[],"m":[]}}'))
var y={z:A.A("bf<R<J>>"),B:A.A("Ow"),l:A.A("Bi"),g:A.A("ag"),A:A.A("bj<H>"),f:A.A("bj<a_>")};(function constants(){D.tS=new B.ahM(0,"pan")
D.zf=new B.ahM(1,"scale")
D.bWl=new B.ahM(2,"rotate")})()};
(a=>{a["zzVpjwDiDJLbDcEOTToY0Py4Yvs="]=a.current})($__dart_deferred_initializers__);