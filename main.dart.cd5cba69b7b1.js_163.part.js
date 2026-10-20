((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bGS(d,e,f){return new B.acT(d,e,f,null)},
bGT(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.au(0,w.x_(A.an(x.Px(w)/t,0,1)))},
eD4(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Px(n),j=n.Px(n),i=p.Px(l),h=l.Px(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bGT(d,q,o),B.bGT(d,o,x),B.bGT(d,x,m),B.bGT(d,m,q)]
v=A.cG()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
elN(d,e,f){return Math.log(f/d)/Math.log(e/100)},
emP(d,e){var x,w,v,u,t,s,r=new A.cZ(new Float64Array(16))
r.dT(d)
r.no(r)
x=e.a
w=e.b
v=new A.eD(new Float64Array(3))
v.iI(x,w,0)
v=r.qQ(v)
u=e.c
t=new A.eD(new Float64Array(3))
t.iI(u,w,0)
t=r.qQ(t)
w=e.d
s=new A.eD(new Float64Array(3))
s.iI(u,w,0)
s=r.qQ(s)
u=new A.eD(new Float64Array(3))
u.iI(x,w,0)
u=r.qQ(u)
x=new A.eD(new Float64Array(3))
x.dT(v)
w=new A.eD(new Float64Array(3))
w.dT(t)
v=new A.eD(new Float64Array(3))
v.dT(s)
t=new A.eD(new Float64Array(3))
t.dT(u)
return new E.a1C(x,w,v,t)},
elA(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.P,w=0;w<4;++w){v=r[w]
u=B.eD4(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.N(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.N(x.a,t)}return B.e4d(x)},
e4d(d){return new A.N(A.na(C.k.Z(d.a,9)),A.na(C.k.Z(d.b,9)))},
eUx(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
acT:function acT(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apE:function apE(d,e,f,g){var _=this
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
cVl:function cVl(){},
b3A:function b3A(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ap4:function ap4(d,e){this.a=d
this.b=e},
awJ:function awJ(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[815]
E=c[278]
B.acT.prototype={
R(){var x=null,w=y.z
return new B.apE(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apE.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.ehV()
this.d=x}return x},
gbrx(){var x,w=$.am.ad$.x.i(0,this.e).gaK()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.K.aXN(new A.ao(0,0,0+x.a,0+x.b))},
gbz5(){var x=$.am.ad$.x.i(0,this.f).gaK()
x.toString
x=y.g.a(x).gL()
return new A.ao(0,0,0+x.a,0+x.b)},
a_p(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.P)){x=new A.cZ(new Float64Array(16))
x.dT(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.cZ(new Float64Array(16))
w.dT(a0)
w.hD(a1.a,a1.b,0,1)
v=B.emP(w,d.gbz5())
if(d.gbrx().gcvE(0))return w
x=d.gbrx()
u=d.ay
t=new A.cZ(new Float64Array(16))
t.hE()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.hD(q/2,o/2,0,1)
t.zk(u)
t.hD(-q/2,-o/2,0,1)
u=new A.eD(new Float64Array(3))
u.iI(r,x,0)
u=t.qQ(u)
q=new A.eD(new Float64Array(3))
q.iI(s,x,0)
q=t.qQ(q)
x=new A.eD(new Float64Array(3))
x.iI(s,p,0)
x=t.qQ(x)
s=new A.eD(new Float64Array(3))
s.iI(r,p,0)
s=t.qQ(s)
r=new Float64Array(3)
new A.eD(r).dT(u)
u=new Float64Array(3)
new A.eD(u).dT(q)
q=new Float64Array(3)
new A.eD(q).dT(x)
x=new Float64Array(3)
new A.eD(x).dT(s)
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
x=new A.eD(new Float64Array(3))
x.iI(m,l,0)
u=new A.eD(new Float64Array(3))
u.iI(k,l,0)
s=new A.eD(new Float64Array(3))
s.iI(k,j,0)
r=new A.eD(new Float64Array(3))
r.iI(m,j,0)
q=new A.eD(new Float64Array(3))
q.dT(x)
x=new A.eD(new Float64Array(3))
x.dT(u)
u=new A.eD(new Float64Array(3))
u.dT(s)
s=new A.eD(new Float64Array(3))
s.dT(r)
i=new E.a1C(q,x,u,s)
h=B.elA(i,v)
if(h.p(0,C.P))return w
x=w.bH7().a
u=x[0]
x=x[1]
g=a0.IN()
u-=h.a*g
x-=h.b*g
f=new A.cZ(new Float64Array(16))
f.dT(a0)
s=new A.eD(new Float64Array(3))
s.iI(u,x,0)
f.c3q(s)
e=B.elA(i,B.emP(f,d.gbz5()))
if(e.p(0,C.P))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.cZ(new Float64Array(16))
x.dT(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.cZ(new Float64Array(16))
s.dT(a0)
r=new A.eD(new Float64Array(3))
r.iI(u,x,0)
s.c3q(r)
return s},
bOo(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.cZ(new Float64Array(16))
x.dT(d)
return x}w=q.gfo().a.IN()
x=q.gbz5()
v=q.gbrx()
u=q.gbz5()
t=q.gbrx()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.cZ(new Float64Array(16))
x.dT(d)
x.r0(r,r,r,1)
return x},
dna(d,e,f){var x,w,v,u
if(e===0){x=new A.cZ(new Float64Array(16))
x.dT(d)
return x}w=this.gfo().qP(f)
x=new A.cZ(new Float64Array(16))
x.dT(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zk(-e)
x.hD(-v,-u,0,1)
return x},
btj(d){var x
A:{x=!0
if(D.ccl===d){x=!1
break A}if(D.Bg===d){this.a.toString
break A}if(D.vy===d||d==null){this.a.toString
break A}x=null}return x},
ccI(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bg
else return D.vy},
dqg(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hy()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbtR())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hy()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbu1())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IN()
v.as=v.gfo().qP(d.b)
v.ax=v.ay},
dqi(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IN(),p=r.x=d.c,o=r.gfo().qP(p),n=r.ch
if(n===D.vy)n=r.ch=r.ccI(d)
else if(n==null){n=r.ccI(d)
r.ch=n}if(!r.btj(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOo(r.gfo().a,n*d.d/q))
x=r.gfo().qP(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_p(w,x.aw(0,v)))
u=r.gfo().qP(p)
p=r.as
p.toString
if(!B.e4d(p).p(0,B.e4d(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.dna(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eUx(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gfo().sC(r.a_p(r.gfo().a,s))
r.as=r.gfo().qP(p)
break}r.a.toString},
dqe(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbtR())
x=m.w
if(x!=null)x.a.T(m.gbu1())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btj(x)){m.Q=null
return}A:{if(D.vy===x){x=d.a.a
if(x.gfz()<50){m.Q=null
return}w=m.gfo().a.bH7().a
v=w[0]
w=w[1]
m.a.toString
u=A.bCn(0.0000135,v,x.a,0)
m.a.toString
t=A.bCn(0.0000135,w,x.b,0)
x=x.gfz()
m.a.toString
s=B.elN(x,0.0000135,10)
x=u.ga5V()
r=t.ga5V()
q=y.A
p=A.ds(C.mY,m.y,null)
m.r=new A.bm(p,new A.bn(new A.N(v,w),new A.N(x,r),q),q.k("bm<bx.T>"))
m.y.e=A.dM(0,0,0,C.k.b0(s*1000),0)
p.a4(m.gbtR())
m.y.dv()
break A}if(D.Bg===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IN()
m.a.toString
n=A.bCn(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.elN(w,0.0000135,0.1)
x=n.lA(s)
w=y.f
v=A.ds(C.mY,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<bx.T>"))
m.z.e=A.dM(0,0,0,C.k.b0(s*1000),0)
v.a4(m.gbu1())
m.z.dv()
break A}break A}},
dk0(d){var x,w,v,u,t,s,r,q=this,p=d.gf1(),o=d.gbD()
if(y.l.b(d)){x=d.ghg()===C.eU
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvi())
w=d.gvi()
v=A.Sz(d.gfh(),null,w,x)
if(!q.btj(D.vy)){q.a.toString
return}u=q.gfo().qP(p)
t=q.gfo().qP(p.aw(0,v))
q.gfo().sC(q.a_p(q.gfo().a,t.aw(0,u)))
q.a.toString
return}if(d.gvi().b===0)return
x=d.gvi()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjV()
else return
q.a.toString
if(!q.btj(D.Bg))return
u=q.gfo().qP(p)
q.gfo().sC(q.bOo(q.gfo().a,s))
r=q.gfo().qP(p)
q.gfo().sC(q.a_p(q.gfo().a,r.aw(0,u)))
q.a.toString},
de1(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbtR())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bH7().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_p(v,u.qP(t.b.aN(t.a.gC())).aw(0,s.gfo().qP(new A.N(x,r)))))},
dgd(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbu1())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IN()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qP(v)
s.gfo().sC(s.bOo(s.gfo().a,x/r))
t=s.gfo().qP(s.x)
s.gfo().sC(s.a_p(s.gfo().a,t.aw(0,u)))},
dif(){this.n(new B.cVl())},
Y(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gcek())},
aV(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gcek())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cOL()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b3A(w,u.e,C.q,!0,x,t,t)
return A.Rv(C.hO,A.ic(C.bH,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdqd(),u.gdqf(),u.gdqh(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.N(0,-0.005)),u.f,t,t,t,t,t,u.gdk_(),t)}}
B.b3A.prototype={
u(d){var x=this,w=A.UY(x.w,new A.mT(x.c,x.d),null,x.r,!0)
return A.te(w,x.e,null)}}
B.ap4.prototype={
W(){return"_GestureType."+this.b}}
B.awJ.prototype={
cd(){this.de()
this.dk()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfK())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(TR)","~(TS)","~(LI)","~(mo)"])
B.cVl.prototype={
$0(){},
$S:0};(function aliases(){var x=B.awJ.prototype
x.cOL=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apE.prototype,"gdqf","dqg",1)
x(v,"gdqh","dqi",2)
x(v,"gdqd","dqe",3)
x(v,"gdk_","dk0",4)
w(v,"gbtR","de1",0)
w(v,"gbu1","dgd",0)
w(v,"gcek","dif",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.acT,A.L)
w(B.awJ,A.U)
w(B.apE,B.awJ)
w(B.cVl,A.bt)
w(B.b3A,A.x)
w(B.ap4,A.eA)
x(B.awJ,A.fs)})()
A.b_(b.typeUniverse,JSON.parse('{"acT":{"L":[],"m":[]},"apE":{"U":["acT"]},"b3A":{"x":[],"m":[]}}'))
var y={z:A.C("bh<U<L>>"),B:A.C("SD"),l:A.C("Eg"),g:A.C("ak"),A:A.C("bn<N>"),f:A.C("bn<a4>")};(function constants(){D.vy=new B.ap4(0,"pan")
D.Bg=new B.ap4(1,"scale")
D.ccl=new B.ap4(2,"rotate")})()};
(a=>{a["SAI5Ozmzz9crTyu52KviKX9KuMg="]=a.current})($__dart_deferred_initializers__);