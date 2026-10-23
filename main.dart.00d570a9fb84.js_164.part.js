((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHM(d,e,f){return new B.add(d,e,f,null)},
bHN(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.x8(A.an(x.Pz(w)/t,0,1)))},
eFW(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.Pz(n),j=n.Pz(n),i=p.Pz(l),h=l.Pz(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHN(d,q,o),B.bHN(d,o,x),B.bHN(d,x,m),B.bHN(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
eox(d,e,f){return Math.log(f/d)/Math.log(e/100)},
epz(d,e){var x,w,v,u,t,s,r=new A.d_(new Float64Array(16))
r.dW(d)
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
x.dW(v)
w=new A.eG(new Float64Array(3))
w.dW(t)
v=new A.eG(new Float64Array(3))
v.dW(s)
t=new A.eG(new Float64Array(3))
t.dW(u)
return new E.a1P(x,w,v,t)},
eok(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.N,w=0;w<4;++w){v=r[w]
u=B.eFW(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e7_(x)},
e7_(d){return new A.M(A.ne(C.k.Z(d.a,9)),A.ne(C.k.Z(d.b,9)))},
eXs(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
add:function add(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
aq0:function aq0(d,e,f,g){var _=this
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
cX5:function cX5(){},
b4e:function b4e(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apr:function apr(d,e){this.a=d
this.b=e},
axb:function axb(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[817]
E=c[279]
B.add.prototype={
O(){var x=null,w=y.z
return new B.aq0(new A.bf(x,w),new A.bf(x,w),x,x)}}
B.aq0.prototype={
gfp(){var x=this.d
if(x===$){this.a.toString
x=E.ekD()
this.d=x}return x},
gbrY(){var x,w=$.ah.ac$.x.i(0,this.e).gaI()
w.toString
x=y.g.a(w).gM()
this.a.toString
return C.I.aY7(new A.ap(0,0,0+x.a,0+x.b))},
gbzE(){var x=$.ah.ac$.x.i(0,this.f).gaI()
x.toString
x=y.g.a(x).gM()
return new A.ap(0,0,0+x.a,0+x.b)},
a_u(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.N)){x=new A.d_(new Float64Array(16))
x.dW(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d_(new Float64Array(16))
w.dW(a0)
w.hD(a1.a,a1.b,0,1)
v=B.epz(w,d.gbzE())
if(d.gbrY().gcwR(0))return w
x=d.gbrY()
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
x.iL(m,l,0)
u=new A.eG(new Float64Array(3))
u.iL(k,l,0)
s=new A.eG(new Float64Array(3))
s.iL(k,j,0)
r=new A.eG(new Float64Array(3))
r.iL(m,j,0)
q=new A.eG(new Float64Array(3))
q.dW(x)
x=new A.eG(new Float64Array(3))
x.dW(u)
u=new A.eG(new Float64Array(3))
u.dW(s)
s=new A.eG(new Float64Array(3))
s.dW(r)
i=new E.a1P(q,x,u,s)
h=B.eok(i,v)
if(h.p(0,C.N))return w
x=w.bHK().a
u=x[0]
x=x[1]
g=a0.IP()
u-=h.a*g
x-=h.b*g
f=new A.d_(new Float64Array(16))
f.dW(a0)
s=new A.eG(new Float64Array(3))
s.iL(u,x,0)
f.c49(s)
e=B.eok(i,B.epz(f,d.gbzE()))
if(e.p(0,C.N))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d_(new Float64Array(16))
x.dW(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d_(new Float64Array(16))
s.dW(a0)
r=new A.eG(new Float64Array(3))
r.iL(u,x,0)
s.c49(r)
return s},
bP0(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d_(new Float64Array(16))
x.dW(d)
return x}w=q.gfp().a.IP()
x=q.gbzE()
v=q.gbrY()
u=q.gbzE()
t=q.gbrY()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d_(new Float64Array(16))
x.dW(d)
x.r7(r,r,r,1)
return x},
doP(d,e,f){var x,w,v,u
if(e===0){x=new A.d_(new Float64Array(16))
x.dW(d)
return x}w=this.gfp().qX(f)
x=new A.d_(new Float64Array(16))
x.dW(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zp(-e)
x.hD(-v,-u,0,1)
return x},
btM(d){var x
A:{x=!0
if(D.ccL===d){x=!1
break A}if(D.Bu===d){this.a.toString
break A}if(D.vK===d||d==null){this.a.toString
break A}x=null}return x},
cdD(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Bu
else return D.vK},
drZ(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbuj())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbuu())
v.w=null}v.Q=v.ch=null
v.at=v.gfp().a.IP()
v.as=v.gfp().qX(d.b)
v.ax=v.ay},
ds0(d){var x,w,v,u,t,s,r=this,q=r.gfp().a.IP(),p=r.x=d.c,o=r.gfp().qX(p),n=r.ch
if(n===D.vK)n=r.ch=r.cdD(d)
else if(n==null){n=r.cdD(d)
r.ch=n}if(!r.btM(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfp().sC(r.bP0(r.gfp().a,n*d.d/q))
x=r.gfp().qX(p)
n=r.gfp()
w=r.gfp().a
v=r.as
v.toString
n.sC(r.a_u(w,x.az(0,v)))
u=r.gfp().qX(p)
p=r.as
p.toString
if(!B.e7_(p).p(0,B.e7_(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfp().sC(r.doP(r.gfp().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eXs(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfp().sC(r.a_u(r.gfp().a,s))
r.as=r.gfp().qX(p)
break}r.a.toString},
drX(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbuj())
x=m.w
if(x!=null)x.a.T(m.gbuu())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btM(x)){m.Q=null
return}A:{if(D.vK===x){x=d.a.a
if(x.gfA()<50){m.Q=null
return}w=m.gfp().a.bHK().a
v=w[0]
w=w[1]
m.a.toString
u=A.bD8(0.0000135,v,x.a,0)
m.a.toString
t=A.bD8(0.0000135,w,x.b,0)
x=x.gfA()
m.a.toString
s=B.eox(x,0.0000135,10)
x=u.ga64()
r=t.ga64()
q=y.A
p=A.dt(C.n_,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b1(s*1000),0)
p.a4(m.gbuj())
m.y.dA()
break A}if(D.Bu===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfp().a.IP()
m.a.toString
n=A.bD8(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.eox(w,0.0000135,0.1)
x=n.lE(s)
w=y.f
v=A.dt(C.n_,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b1(s*1000),0)
v.a4(m.gbuu())
m.z.dA()
break A}break A}},
dlx(d){var x,w,v,u,t,s,r,q=this,p=d.gf7(),o=d.gbw()
if(y.l.b(d)){x=d.ghh()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvl())
w=d.gvl()
v=A.SM(d.gfi(),null,w,x)
if(!q.btM(D.vK)){q.a.toString
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
if(!q.btM(D.Bu))return
u=q.gfp().qX(p)
q.gfp().sC(q.bP0(q.gfp().a,s))
r=q.gfp().qX(p)
q.gfp().sC(q.a_u(q.gfp().a,r.az(0,u)))
q.a.toString},
dfx(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbuj())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfp().a.bHK().a
x=r[0]
r=r[1]
w=s.gfp()
v=s.gfp().a
u=s.gfp()
t=s.r
w.sC(s.a_u(v,u.qX(t.b.aN(t.a.gC())).az(0,s.gfp().qX(new A.M(x,r)))))},
dhJ(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbuu())
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
s.gfp().sC(s.bP0(s.gfp().a,x/r))
t=s.gfp().qX(s.x)
s.gfp().sC(s.a_u(s.gfp().a,t.az(0,u)))},
djN(){this.n(new B.cX5())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfp().a4(x.gcff())},
aP(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfp().T(x.gcff())
x.a.toString
w=x.gfp()
w.ok$=$.aa()
w.k4$=0
x.cQ6()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfp().a
w=u.a.w
v=new B.b4e(w,u.e,C.q,!0,x,t,t)
return A.RH(C.hR,A.ij(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdrW(),u.gdrY(),u.gds_(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdlw(),t)}}
B.b4e.prototype={
u(d){var x=this,w=A.Va(x.w,new A.l1(x.c,x.d),null,x.r,!0)
return A.tj(w,x.e,null)}}
B.apr.prototype={
W(){return"_GestureType."+this.b}}
B.axb.prototype={
cf(){this.df()
this.dl()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(U3)","~(U4)","~(LV)","~(mv)"])
B.cX5.prototype={
$0(){},
$S:0};(function aliases(){var x=B.axb.prototype
x.cQ6=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aq0.prototype,"gdrY","drZ",1)
x(v,"gds_","ds0",2)
x(v,"gdrW","drX",3)
x(v,"gdlw","dlx",4)
w(v,"gbuj","dfx",0)
w(v,"gbuu","dhJ",0)
w(v,"gcff","djN",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.add,A.K)
w(B.axb,A.Q)
w(B.aq0,B.axb)
w(B.cX5,A.bu)
w(B.b4e,A.x)
w(B.apr,A.eD)
x(B.axb,A.fw)})()
A.b0(b.typeUniverse,JSON.parse('{"add":{"K":[],"m":[]},"aq0":{"Q":["add"]},"b4e":{"x":[],"m":[]}}'))
var y={z:A.C("bf<Q<K>>"),B:A.C("SQ"),l:A.C("Es"),g:A.C("ak"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vK=new B.apr(0,"pan")
D.Bu=new B.apr(1,"scale")
D.ccL=new B.apr(2,"rotate")})()};
(a=>{a["d3mskm/alGyznFpiRx0vTWTqQi8="]=a.current})($__dart_deferred_initializers__);