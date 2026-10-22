((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHj(d,e,f){return new B.ad3(d,e,f,null)},
bHk(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.au(0,w.x3(A.an(x.Pw(w)/t,0,1)))},
eEy(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Pw(n),j=n.Pw(n),i=p.Pw(l),h=l.Pw(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHk(d,q,o),B.bHk(d,o,x),B.bHk(d,x,m),B.bHk(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
ene(d,e,f){return Math.log(f/d)/Math.log(e/100)},
eog(d,e){var x,w,v,u,t,s,r=new A.d0(new Float64Array(16))
r.dV(d)
r.np(r)
x=e.a
w=e.b
v=new A.eF(new Float64Array(3))
v.iJ(x,w,0)
v=r.qU(v)
u=e.c
t=new A.eF(new Float64Array(3))
t.iJ(u,w,0)
t=r.qU(t)
w=e.d
s=new A.eF(new Float64Array(3))
s.iJ(u,w,0)
s=r.qU(s)
u=new A.eF(new Float64Array(3))
u.iJ(x,w,0)
u=r.qU(u)
x=new A.eF(new Float64Array(3))
x.dV(v)
w=new A.eF(new Float64Array(3))
w.dV(t)
v=new A.eF(new Float64Array(3))
v.dV(s)
t=new A.eF(new Float64Array(3))
t.dV(u)
return new E.a1J(x,w,v,t)},
en1(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.eEy(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e5D(x)},
e5D(d){return new A.M(A.nc(C.k.Z(d.a,9)),A.nc(C.k.Z(d.b,9)))},
eW2(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
ad3:function ad3(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apS:function apS(d,e,f,g){var _=this
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
cW7:function cW7(){},
b3Y:function b3Y(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
api:function api(d,e){this.a=d
this.b=e},
ax_:function ax_(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[815]
E=c[279]
B.ad3.prototype={
O(){var x=null,w=y.z
return new B.apS(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apS.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.ejj()
this.d=x}return x},
gbrH(){var x,w=$.al.ad$.x.i(0,this.e).gaK()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.I.aXT(new A.ao(0,0,0+x.a,0+x.b))},
gbzl(){var x=$.al.ad$.x.i(0,this.f).gaK()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
a_n(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.O)){x=new A.d0(new Float64Array(16))
x.dV(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d0(new Float64Array(16))
w.dV(a0)
w.hC(a1.a,a1.b,0,1)
v=B.eog(w,d.gbzl())
if(d.gbrH().gcw8(0))return w
x=d.gbrH()
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
u=t.qU(u)
q=new A.eF(new Float64Array(3))
q.iJ(s,x,0)
q=t.qU(q)
x=new A.eF(new Float64Array(3))
x.iJ(s,p,0)
x=t.qU(x)
s=new A.eF(new Float64Array(3))
s.iJ(r,p,0)
s=t.qU(s)
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
i=new E.a1J(q,x,u,s)
h=B.en1(i,v)
if(h.p(0,C.O))return w
x=w.bHo().a
u=x[0]
x=x[1]
g=a0.IM()
u-=h.a*g
x-=h.b*g
f=new A.d0(new Float64Array(16))
f.dV(a0)
s=new A.eF(new Float64Array(3))
s.iJ(u,x,0)
f.c3G(s)
e=B.en1(i,B.eog(f,d.gbzl()))
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
s.c3G(r)
return s},
bOC(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d0(new Float64Array(16))
x.dV(d)
return x}w=q.gfo().a.IM()
x=q.gbzl()
v=q.gbrH()
u=q.gbzl()
t=q.gbrH()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d0(new Float64Array(16))
x.dV(d)
x.r4(r,r,r,1)
return x},
dnM(d,e,f){var x,w,v,u
if(e===0){x=new A.d0(new Float64Array(16))
x.dV(d)
return x}w=this.gfo().qT(f)
x=new A.d0(new Float64Array(16))
x.dV(d)
v=w.a
u=w.b
x.hC(v,u,0,1)
x.zn(-e)
x.hC(-v,-u,0,1)
return x},
btw(d){var x
A:{x=!0
if(D.ccz===d){x=!1
break A}if(D.Bg===d){this.a.toString
break A}if(D.vD===d||d==null){this.a.toString
break A}x=null}return x},
cd3(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bg
else return D.vD},
dqT(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hx()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbu3())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hx()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbue())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IM()
v.as=v.gfo().qT(d.b)
v.ax=v.ay},
dqV(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IM(),p=r.x=d.c,o=r.gfo().qT(p),n=r.ch
if(n===D.vD)n=r.ch=r.cd3(d)
else if(n==null){n=r.cd3(d)
r.ch=n}if(!r.btw(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOC(r.gfo().a,n*d.d/q))
x=r.gfo().qT(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_n(w,x.aw(0,v)))
u=r.gfo().qT(p)
p=r.as
p.toString
if(!B.e5D(p).p(0,B.e5D(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.dnM(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eW2(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gfo().sC(r.a_n(r.gfo().a,s))
r.as=r.gfo().qT(p)
break}r.a.toString},
dqR(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbu3())
x=m.w
if(x!=null)x.a.T(m.gbue())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btw(x)){m.Q=null
return}A:{if(D.vD===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfo().a.bHo().a
v=w[0]
w=w[1]
m.a.toString
u=A.bCM(0.0000135,v,x.a,0)
m.a.toString
t=A.bCM(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.ene(x,0.0000135,10)
x=u.ga5X()
r=t.ga5X()
q=y.A
p=A.dt(C.mY,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dN(0,0,0,C.k.b0(s*1000),0)
p.a4(m.gbu3())
m.y.dA()
break A}if(D.Bg===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IM()
m.a.toString
n=A.bCM(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.ene(w,0.0000135,0.1)
x=n.lC(s)
w=y.f
v=A.dt(C.mY,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dN(0,0,0,C.k.b0(s*1000),0)
v.a4(m.gbue())
m.z.dA()
break A}break A}},
dkA(d){var x,w,v,u,t,s,r,q=this,p=d.gf5(),o=d.gbD()
if(y.l.b(d)){x=d.ghh()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvl())
w=d.gvl()
v=A.SE(d.gfi(),null,w,x)
if(!q.btw(D.vD)){q.a.toString
return}u=q.gfo().qT(p)
t=q.gfo().qT(p.aw(0,v))
q.gfo().sC(q.a_n(q.gfo().a,t.aw(0,u)))
q.a.toString
return}if(d.gvl().b===0)return
x=d.gvl()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjV()
else return
q.a.toString
if(!q.btw(D.Bg))return
u=q.gfo().qT(p)
q.gfo().sC(q.bOC(q.gfo().a,s))
r=q.gfo().qT(p)
q.gfo().sC(q.a_n(q.gfo().a,r.aw(0,u)))
q.a.toString},
deB(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbu3())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bHo().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_n(v,u.qT(t.b.aN(t.a.gC())).aw(0,s.gfo().qT(new A.M(x,r)))))},
dgN(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbue())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IM()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qT(v)
s.gfo().sC(s.bOC(s.gfo().a,x/r))
t=s.gfo().qT(s.x)
s.gfo().sC(s.a_n(s.gfo().a,t.aw(0,u)))},
diR(){this.n(new B.cW7())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gceG())},
aQ(d){this.aZ(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gceG())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cPh()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b3Y(w,u.e,C.q,!0,x,t,t)
return A.RA(C.hQ,A.ie(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdqQ(),u.gdqS(),u.gdqU(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdkz(),t)}}
B.b3Y.prototype={
u(d){var x=this,w=A.V3(x.w,new A.mU(x.c,x.d),null,x.r,!0)
return A.te(w,x.e,null)}}
B.api.prototype={
W(){return"_GestureType."+this.b}}
B.ax_.prototype={
cd(){this.dg()
this.dl()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(TX)","~(TY)","~(LO)","~(mo)"])
B.cW7.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ax_.prototype
x.cPh=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apS.prototype,"gdqS","dqT",1)
x(v,"gdqU","dqV",2)
x(v,"gdqQ","dqR",3)
x(v,"gdkz","dkA",4)
w(v,"gbu3","deB",0)
w(v,"gbue","dgN",0)
w(v,"gceG","diR",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.ad3,A.L)
w(B.ax_,A.S)
w(B.apS,B.ax_)
w(B.cW7,A.bu)
w(B.b3Y,A.x)
w(B.api,A.eC)
x(B.ax_,A.ft)})()
A.b0(b.typeUniverse,JSON.parse('{"ad3":{"L":[],"m":[]},"apS":{"S":["ad3"]},"b3Y":{"x":[],"m":[]}}'))
var y={z:A.C("bh<S<L>>"),B:A.C("SI"),l:A.C("Eg"),g:A.C("ak"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vD=new B.api(0,"pan")
D.Bg=new B.api(1,"scale")
D.ccz=new B.api(2,"rotate")})()};
(a=>{a["iDIhwngomMrIlwUElsne1TnLUQ4="]=a.current})($__dart_deferred_initializers__);