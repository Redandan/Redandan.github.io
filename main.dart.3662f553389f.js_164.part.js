((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
bHE(d,e,f){return new B.adb(d,e,f,null)},
bHF(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.au(0,w.x8(A.an(x.Py(w)/t,0,1)))},
eFF(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.Py(n),j=n.Py(n),i=p.Py(l),h=l.Py(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bHF(d,q,o),B.bHF(d,o,x),B.bHF(d,x,m),B.bHF(d,m,q)]
v=A.cC()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.an()},
eog(d,e,f){return Math.log(f/d)/Math.log(e/100)},
epj(d,e){var x,w,v,u,t,s,r=new A.d_(new Float64Array(16))
r.dW(d)
r.nr(r)
x=e.a
w=e.b
v=new A.eG(new Float64Array(3))
v.iL(x,w,0)
v=r.qW(v)
u=e.c
t=new A.eG(new Float64Array(3))
t.iL(u,w,0)
t=r.qW(t)
w=e.d
s=new A.eG(new Float64Array(3))
s.iL(u,w,0)
s=r.qW(s)
u=new A.eG(new Float64Array(3))
u.iL(x,w,0)
u=r.qW(u)
x=new A.eG(new Float64Array(3))
x.dW(v)
w=new A.eG(new Float64Array(3))
w.dW(t)
v=new A.eG(new Float64Array(3))
v.dW(s)
t=new A.eG(new Float64Array(3))
t.dW(u)
return new E.a1O(x,w,v,t)},
eo3(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.N,w=0;w<4;++w){v=r[w]
u=B.eFF(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.e6J(x)},
e6J(d){return new A.M(A.ne(C.k.Z(d.a,9)),A.ne(C.k.Z(d.b,9)))},
eXb(d,e){if(d.p(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.y},
adb:function adb(d,e,f,g){var _=this
_.w=d
_.at=e
_.ax=f
_.a=g},
apX:function apX(d,e,f,g){var _=this
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
cWD:function cWD(){},
b47:function b47(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
apn:function apn(d,e){this.a=d
this.b=e},
ax5:function ax5(){}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[273],B)
D=c[817]
E=c[279]
B.adb.prototype={
O(){var x=null,w=y.z
return new B.apX(new A.bh(x,w),new A.bh(x,w),x,x)}}
B.apX.prototype={
gfo(){var x=this.d
if(x===$){this.a.toString
x=E.ekm()
this.d=x}return x},
gbrP(){var x,w=$.ah.ac$.x.i(0,this.e).gaI()
w.toString
x=y.g.a(w).gL()
this.a.toString
return C.I.aY0(new A.ap(0,0,0+x.a,0+x.b))},
gbzv(){var x=$.ah.ac$.x.i(0,this.f).gaI()
x.toString
x=y.g.a(x).gL()
return new A.ap(0,0,0+x.a,0+x.b)},
a_q(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.p(0,C.N)){x=new A.d_(new Float64Array(16))
x.dW(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d_(new Float64Array(16))
w.dW(a0)
w.hD(a1.a,a1.b,0,1)
v=B.epj(w,d.gbzv())
if(d.gbrP().gcwy(0))return w
x=d.gbrP()
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
t.zo(u)
t.hD(-q/2,-o/2,0,1)
u=new A.eG(new Float64Array(3))
u.iL(r,x,0)
u=t.qW(u)
q=new A.eG(new Float64Array(3))
q.iL(s,x,0)
q=t.qW(q)
x=new A.eG(new Float64Array(3))
x.iL(s,p,0)
x=t.qW(x)
s=new A.eG(new Float64Array(3))
s.iL(r,p,0)
s=t.qW(s)
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
i=new E.a1O(q,x,u,s)
h=B.eo3(i,v)
if(h.p(0,C.N))return w
x=w.bHA().a
u=x[0]
x=x[1]
g=a0.IP()
u-=h.a*g
x-=h.b*g
f=new A.d_(new Float64Array(16))
f.dW(a0)
s=new A.eG(new Float64Array(3))
s.iL(u,x,0)
f.c3Y(s)
e=B.eo3(i,B.epj(f,d.gbzv()))
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
s.c3Y(r)
return s},
bOQ(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d_(new Float64Array(16))
x.dW(d)
return x}w=q.gfo().a.IP()
x=q.gbzv()
v=q.gbrP()
u=q.gbzv()
t=q.gbrP()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.an(s,t.ax,t.at)/w
x=new A.d_(new Float64Array(16))
x.dW(d)
x.r6(r,r,r,1)
return x},
doo(d,e,f){var x,w,v,u
if(e===0){x=new A.d_(new Float64Array(16))
x.dW(d)
return x}w=this.gfo().qV(f)
x=new A.d_(new Float64Array(16))
x.dW(d)
v=w.a
u=w.b
x.hD(v,u,0,1)
x.zo(-e)
x.hD(-v,-u,0,1)
return x},
btD(d){var x
A:{x=!0
if(D.ccH===d){x=!1
break A}if(D.Br===d){this.a.toString
break A}if(D.vI===d||d==null){this.a.toString
break A}x=null}return x},
cdo(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.Br
else return D.vI},
dry(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.y
x.sC(x.a)
x=v.r
if(x!=null)x.a.T(v.gbua())
v.r=null}x=v.z
x===$&&A.e()
w=x.r
if(w!=null&&w.a!=null){x.hr()
x=v.z
x.sC(x.a)
x=v.w
if(x!=null)x.a.T(v.gbul())
v.w=null}v.Q=v.ch=null
v.at=v.gfo().a.IP()
v.as=v.gfo().qV(d.b)
v.ax=v.ay},
drA(d){var x,w,v,u,t,s,r=this,q=r.gfo().a.IP(),p=r.x=d.c,o=r.gfo().qV(p),n=r.ch
if(n===D.vI)n=r.ch=r.cdo(d)
else if(n==null){n=r.cdo(d)
r.ch=n}if(!r.btD(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gfo().sC(r.bOQ(r.gfo().a,n*d.d/q))
x=r.gfo().qV(p)
n=r.gfo()
w=r.gfo().a
v=r.as
v.toString
n.sC(r.a_q(w,x.az(0,v)))
u=r.gfo().qV(p)
p=r.as
p.toString
if(!B.e6J(p).p(0,B.e6J(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gfo().sC(r.doo(r.gfo().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.eXb(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gfo().sC(r.a_q(r.gfo().a,s))
r.as=r.gfo().qV(p)
break}r.a.toString},
drw(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(m.gbua())
x=m.w
if(x!=null)x.a.T(m.gbul())
x=m.y
x===$&&A.e()
x.sC(x.a)
x=m.z
x===$&&A.e()
x.sC(x.a)
x=m.ch
if(!m.btD(x)){m.Q=null
return}A:{if(D.vI===x){x=d.a.a
if(x.gfB()<50){m.Q=null
return}w=m.gfo().a.bHA().a
v=w[0]
w=w[1]
m.a.toString
u=A.bD0(0.0000135,v,x.a,0)
m.a.toString
t=A.bD0(0.0000135,w,x.b,0)
x=x.gfB()
m.a.toString
s=B.eog(x,0.0000135,10)
x=u.ga60()
r=t.ga60()
q=y.A
p=A.dt(C.mZ,m.y,null)
m.r=new A.bm(p,new A.bn(new A.M(v,w),new A.M(x,r),q),q.k("bm<by.T>"))
m.y.e=A.dV(0,0,0,C.k.b1(s*1000),0)
p.a4(m.gbua())
m.y.dA()
break A}if(D.Br===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gfo().a.IP()
m.a.toString
n=A.bD0(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.eog(w,0.0000135,0.1)
x=n.lD(s)
w=y.f
v=A.dt(C.mZ,m.z,null)
m.w=new A.bm(v,new A.bn(o,x,w),w.k("bm<by.T>"))
m.z.e=A.dV(0,0,0,C.k.b1(s*1000),0)
v.a4(m.gbul())
m.z.dA()
break A}break A}},
dl7(d){var x,w,v,u,t,s,r,q=this,p=d.gf6(),o=d.gbw()
if(y.l.b(d)){x=d.ghh()===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.au(0,d.gvl())
w=d.gvl()
v=A.SL(d.gfi(),null,w,x)
if(!q.btD(D.vI)){q.a.toString
return}u=q.gfo().qV(p)
t=q.gfo().qV(p.az(0,v))
q.gfo().sC(q.a_q(q.gfo().a,t.az(0,u)))
q.a.toString
return}if(d.gvl().b===0)return
x=d.gvl()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjW()
else return
q.a.toString
if(!q.btD(D.Br))return
u=q.gfo().qV(p)
q.gfo().sC(q.bOQ(q.gfo().a,s))
r=q.gfo().qV(p)
q.gfo().sC(q.a_q(q.gfo().a,r.az(0,u)))
q.a.toString},
df7(){var x,w,v,u,t,s=this,r=s.y
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.r
if(r!=null)r.a.T(s.gbua())
s.r=null
r=s.y
r.sC(r.a)
return}r=s.gfo().a.bHA().a
x=r[0]
r=r[1]
w=s.gfo()
v=s.gfo().a
u=s.gfo()
t=s.r
w.sC(s.a_q(v,u.qV(t.b.aN(t.a.gC())).az(0,s.gfo().qV(new A.M(x,r)))))},
dhj(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.e()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(s.gbul())
s.w=null
r=s.z
r.sC(r.a)
return}r=s.w
x=r.b.aN(r.a.gC())
r=s.gfo().a.IP()
w=s.gfo()
v=s.x
v===$&&A.e()
u=w.qV(v)
s.gfo().sC(s.bOQ(s.gfo().a,x/r))
t=s.gfo().qV(s.x)
s.gfo().sC(s.a_q(s.gfo().a,t.az(0,u)))},
djn(){this.n(new B.cWD())},
X(){var x=this,w=null
x.a6()
x.y=A.cL(w,w,w,1,w,x)
x.z=A.cL(w,w,w,1,w,x)
x.gfo().a4(x.gcf0())},
aQ(d){this.b_(d)
this.a.toString
return},
q(){var x=this,w=x.y
w===$&&A.e()
w.q()
w=x.z
w===$&&A.e()
w.q()
x.gfo().T(x.gcf0())
x.a.toString
w=x.gfo()
w.ok$=$.aa()
w.k4$=0
x.cPK()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gfo().a
w=u.a.w
v=new B.b47(w,u.e,C.q,!0,x,t,t)
return A.RG(C.hR,A.ij(C.bF,v,C.w,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gdrv(),u.gdrx(),u.gdrz(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,t,t,u.gdl6(),t)}}
B.b47.prototype={
u(d){var x=this,w=A.V9(x.w,new A.l1(x.c,x.d),null,x.r,!0)
return A.tj(w,x.e,null)}}
B.apn.prototype={
W(){return"_GestureType."+this.b}}
B.ax5.prototype={
cf(){this.dg()
this.dl()
this.fR()},
q(){var x=this,w=x.dy$
if(w!=null)w.T(x.gfM())
x.dy$=null
x.a5()}}
var z=a.updateTypes(["~()","~(U2)","~(U3)","~(LV)","~(mv)"])
B.cWD.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ax5.prototype
x.cPK=x.q})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.apX.prototype,"gdrx","dry",1)
x(v,"gdrz","drA",2)
x(v,"gdrv","drw",3)
x(v,"gdl6","dl7",4)
w(v,"gbua","df7",0)
w(v,"gbul","dhj",0)
w(v,"gcf0","djn",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.adb,A.K)
w(B.ax5,A.Q)
w(B.apX,B.ax5)
w(B.cWD,A.bu)
w(B.b47,A.x)
w(B.apn,A.eD)
x(B.ax5,A.fv)})()
A.b0(b.typeUniverse,JSON.parse('{"adb":{"K":[],"m":[]},"apX":{"Q":["adb"]},"b47":{"x":[],"m":[]}}'))
var y={z:A.C("bh<Q<K>>"),B:A.C("SP"),l:A.C("Er"),g:A.C("aj"),A:A.C("bn<M>"),f:A.C("bn<a4>")};(function constants(){D.vI=new B.apn(0,"pan")
D.Br=new B.apn(1,"scale")
D.ccH=new B.apn(2,"rotate")})()};
(a=>{a["BiFPcHlLSo8r4YqlcWTJKNW/WOs="]=a.current})($__dart_deferred_initializers__);