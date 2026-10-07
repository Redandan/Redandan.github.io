((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bnZ(d,e,f){return new B.a7i(d,e,f,null)},
bo_(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.an(0,e)
w=f.an(0,e)
return e.ak(0,w.rL(A.ah(x.I6(w)/t,0,1)))},
dXA(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.an(0,q),o=e.b,n=o.an(0,q),m=e.d,l=m.an(0,q),k=p.I6(n),j=n.I6(n),i=p.I6(l),h=l.I6(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bo_(d,q,o),B.bo_(d,o,x),B.bo_(d,x,m),B.bo_(d,m,q)]
v=A.dK()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bp()},
dHt(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dIp(d,e){var x,w,v,u,t,s,r=new A.cH(new Float64Array(16))
r.cF(d)
r.kC(r)
x=e.a
w=e.b
v=new A.e8(new Float64Array(3))
v.fw(x,w,0)
v=r.nf(v)
u=e.c
t=new A.e8(new Float64Array(3))
t.fw(u,w,0)
t=r.nf(t)
w=e.d
s=new A.e8(new Float64Array(3))
s.fw(u,w,0)
s=r.nf(s)
u=new A.e8(new Float64Array(3))
u.fw(x,w,0)
u=r.nf(u)
x=new A.e8(new Float64Array(3))
x.cF(v)
w=new A.e8(new Float64Array(3))
w.cF(t)
v=new A.e8(new Float64Array(3))
v.cF(s)
t=new A.e8(new Float64Array(3))
t.cF(u)
return new E.XH(x,w,v,t)},
dHg(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.M,w=0;w<4;++w){v=r[w]
u=B.dXA(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.H(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.H(x.a,t)}return B.drB(x)},
drB(d){return new A.H(A.a2b(C.k.W(d.a,9)),A.a2b(C.k.W(d.b,9)))},
ecE(d,e){if(d.n(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a5:C.y},
a7i:function a7i(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aig:function aig(d,e,f,g){var _=this
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
csS:function csS(){},
aPA:function aPA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahJ:function ahJ(d,e){this.a=d
this.b=e},
aoP:function aoP(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[261],B)
D=c[805]
E=c[266]
B.a7i.prototype={
O(){var x=null,w=y.z
return new B.aig(new A.be(x,w),new A.be(x,w),x,x)}}
B.aig.prototype={
gdE(){var x=this.d
if(x===$){this.a.toString
x=E.dEf()
this.d=x}return x},
gbf2(){var x,w=$.ax.a7$.x.j(0,this.e).gaA()
w.toString
x=y.g.a(w).gK()
this.a.toString
return C.J.aLp(new A.ai(0,0,0+x.a,0+x.b))},
gblF(){var x=$.ax.a7$.x.j(0,this.f).gaA()
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
v=B.dIp(w,d.gblF())
if(d.gbf2().gcbv(0))return w
x=d.gbf2()
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
u=t.nf(u)
q=new A.e8(new Float64Array(3))
q.fw(s,x,0)
q=t.nf(q)
x=new A.e8(new Float64Array(3))
x.fw(s,p,0)
x=t.nf(x)
s=new A.e8(new Float64Array(3))
s.fw(r,p,0)
s=t.nf(s)
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
i=new E.XH(q,x,u,s)
h=B.dHg(i,v)
if(h.n(0,C.M))return w
x=w.bsF().a
u=x[0]
x=x[1]
g=a0.Ch()
u-=h.a*g
x-=h.b*g
f=new A.cH(new Float64Array(16))
f.cF(a0)
s=new A.e8(new Float64Array(3))
s.fw(u,x,0)
f.bO_(s)
e=B.dHg(i,B.dIp(f,d.gblF()))
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
s.bO_(r)
return s},
bzk(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=q.gdE().a.Ch()
x=q.gblF()
v=q.gbf2()
u=q.gblF()
t=q.gbf2()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ah(s,t.ax,t.at)/w
x=new A.cH(new Float64Array(16))
x.cF(d)
x.uR(r,r,r,1)
return x},
cYr(d,e,f){var x,w,v,u
if(e===0){x=new A.cH(new Float64Array(16))
x.cF(d)
return x}w=this.gdE().ne(f)
x=new A.cH(new Float64Array(16))
x.cF(d)
v=w.a
u=w.b
x.eN(v,u,0,1)
x.a0p(-e)
x.eN(-v,-u,0,1)
return x},
bgB(d){var x
A:{x=!0
if(D.bWr===d){x=!1
break A}if(D.zd===d){this.a.toString
break A}if(D.tR===d||d==null){this.a.toString
break A}x=null}return x},
bW_(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zd
else return D.tR},
d0n(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eG()
x=v.y
x.sD(x.a)
x=v.r
if(x!=null)x.a.Y(v.gbha())
v.r=null}x=v.z
x===$&&A.f()
w=x.r
if(w!=null&&w.a!=null){x.eG()
x=v.z
x.sD(x.a)
x=v.w
if(x!=null)x.a.Y(v.gbhl())
v.w=null}v.Q=v.ch=null
v.at=v.gdE().a.Ch()
v.as=v.gdE().ne(d.b)
v.ax=v.ay},
d0p(d){var x,w,v,u,t,s,r=this,q=r.gdE().a.Ch(),p=r.x=d.c,o=r.gdE().ne(p),n=r.ch
if(n===D.tR)n=r.ch=r.bW_(d)
else if(n==null){n=r.bW_(d)
r.ch=n}if(!r.bgB(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdE().sD(r.bzk(r.gdE().a,n*d.d/q))
x=r.gdE().ne(p)
n=r.gdE()
w=r.gdE().a
v=r.as
v.toString
n.sD(r.Rf(w,x.an(0,v)))
u=r.gdE().ne(p)
p=r.as
p.toString
if(!B.drB(p).n(0,B.drB(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdE().sD(r.cYr(r.gdE().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.ecE(n,o)}n=r.as
n.toString
s=o.an(0,n)
r.gdE().sD(r.Rf(r.gdE().a,s))
r.as=r.gdE().ne(p)
break}r.a.toString},
d0l(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.Y(m.gbha())
x=m.w
if(x!=null)x.a.Y(m.gbhl())
x=m.y
x===$&&A.f()
x.sD(x.a)
x=m.z
x===$&&A.f()
x.sD(x.a)
x=m.ch
if(!m.bgB(x)){m.Q=null
return}A:{if(D.tR===x){x=d.a.a
if(x.gdJ()<50){m.Q=null
return}w=m.gdE().a.bsF().a
v=w[0]
w=w[1]
m.a.toString
u=A.bkj(0.0000135,v,x.a,0)
m.a.toString
t=A.bkj(0.0000135,w,x.b,0)
x=x.gdJ()
m.a.toString
s=B.dHt(x,0.0000135,10)
x=u.gX9()
r=t.gX9()
q=y.A
p=A.d1(C.lV,m.y,null)
m.r=new A.bi(p,new A.bj(new A.H(v,w),new A.H(x,r),q),q.m("bi<br.T>"))
m.y.e=A.fn(0,0,0,C.k.aT(s*1000),0)
p.af(m.gbha())
m.y.bY()
break A}if(D.zd===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gdE().a.Ch()
m.a.toString
n=A.bkj(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.dHt(w,0.0000135,0.1)
x=n.j9(s)
w=y.f
v=A.d1(C.lV,m.z,null)
m.w=new A.bi(v,new A.bj(o,x,w),w.m("bi<br.T>"))
m.z.e=A.fn(0,0,0,C.k.aT(s*1000),0)
v.af(m.gbhl())
m.z.bY()
break A}break A}},
cVE(d){var x,w,v,u,t,s,r,q=this,p=d.gdj(),o=d.gbk()
if(y.l.b(d)){x=d.gef()===C.ex
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gqb())
w=d.gqb()
v=A.Or(d.gdv(),null,w,x)
if(!q.bgB(D.tR)){q.a.toString
return}u=q.gdE().ne(p)
t=q.gdE().ne(p.an(0,v))
q.gdE().sD(q.Rf(q.gdE().a,t.an(0,u)))
q.a.toString
return}if(d.gqb().b===0)return
x=d.gqb()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gij()
else return
q.a.toString
if(!q.bgB(D.zd))return
u=q.gdE().ne(p)
q.gdE().sD(q.bzk(q.gdE().a,s))
r=q.gdE().ne(p)
q.gdE().sD(q.Rf(q.gdE().a,r.an(0,u)))
q.a.toString},
cPV(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.Y(s.gbha())
s.r=null
r=s.y
r.sD(r.a)
return}r=s.gdE().a.bsF().a
x=r[0]
r=r[1]
w=s.gdE()
v=s.gdE().a
u=s.gdE()
t=s.r
w.sD(s.Rf(v,u.ne(t.b.aB(t.a.gD())).an(0,s.gdE().ne(new A.H(x,r)))))},
cS5(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.f()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Y(s.gbhl())
s.w=null
r=s.z
r.sD(r.a)
return}r=s.w
x=r.b.aB(r.a.gD())
r=s.gdE().a.Ch()
w=s.gdE()
v=s.x
v===$&&A.f()
u=w.ne(v)
s.gdE().sD(s.bzk(s.gdE().a,x/r))
t=s.gdE().ne(s.x)
s.gdE().sD(s.Rf(s.gdE().a,t.an(0,u)))},
cU6(){this.p(new B.csS())},
Z(){var x=this,w=null
x.a5()
x.y=A.ct(w,w,w,1,w,x)
x.z=A.ct(w,w,w,1,w,x)
x.gdE().af(x.gbXH())},
aK(d){this.b1(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.f()
w.q()
w=x.z
w===$&&A.f()
w.q()
x.gdE().Y(x.gbXH())
x.a.toString
w=x.gdE()
w.ok$=$.ad()
w.k4$=0
x.crN()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdE().a
w=u.a.w
v=new B.aPA(w,u.e,C.r,!0,x,t,t)
return A.Nq(C.hl,A.hf(C.bu,v,C.x,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gd0k(),u.gd0m(),u.gd0o(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.H(0,-0.005)),u.f,t,t,t,t,t,u.gcVD(),t)}}
B.aPA.prototype={
u(d){var x=this,w=A.QP(x.w,new A.lZ(x.c,x.d),null,x.r,!0)
return A.qg(w,x.e,null)}}
B.ahJ.prototype={
U(){return"_GestureType."+this.b}}
B.aoP.prototype={
bv(){this.bX()
this.bQ()
this.dY()},
q(){var x=this,w=x.dy$
if(w!=null)w.Y(x.gdV())
x.dy$=null
x.a6()}}
var z=a.updateTypes(["~()","~(PJ)","~(PK)","~(I6)","~(l7)"])
B.csS.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aoP.prototype
x.crN=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aig.prototype,"gd0m","d0n",1)
x(v,"gd0o","d0p",2)
x(v,"gd0k","d0l",3)
x(v,"gcVD","cVE",4)
w(v,"gbha","cPV",0)
w(v,"gbhl","cS5",0)
w(v,"gbXH","cU6",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.a7i,A.J)
w(B.aoP,A.R)
w(B.aig,B.aoP)
w(B.csS,A.bw)
w(B.aPA,A.x)
w(B.ahJ,A.eq)
x(B.aoP,A.eU)})()
A.aU(b.typeUniverse,JSON.parse('{"a7i":{"J":[],"m":[]},"aig":{"R":["a7i"]},"aPA":{"x":[],"m":[]}}'))
var y={z:A.A("be<R<J>>"),B:A.A("Ov"),l:A.A("Bf"),g:A.A("ag"),A:A.A("bj<H>"),f:A.A("bj<a_>")};(function constants(){D.tR=new B.ahJ(0,"pan")
D.zd=new B.ahJ(1,"scale")
D.bWr=new B.ahJ(2,"rotate")})()};
(a=>{a["YH2nw7oW6wh2O0TSivraK3y/4TY="]=a.current})($__dart_deferred_initializers__);