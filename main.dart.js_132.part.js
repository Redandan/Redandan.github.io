((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
qg(d,e,f,g,h,i,j,k,l){var x=g==null?i:g,w=f==null?i:f,v=d==null?g:d
if(v==null)v=i
return new A.aK8(k,j,i,x,h,w,i>0,e,l,v)},
aK8:function aK8(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m},
aKd:function aKd(d,e,f){var _=this
_.c=d
_.d=e
_.a=f
_.b=null},
uv:function uv(d){this.a=d},
fG:function fG(){},
b0W:function b0W(){},
YS:function YS(){},
bLj:function bLj(d,e){this.a=d
this.b=e},
bLi:function bLi(d,e){this.a=d
this.b=e},
aHU:function aHU(d,e,f,g){var _=this
_.el=null
_.be=d
_.eb=e
_.U$=f
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aZM:function aZM(){},
aKg:function aKg(d,e,f){this.e=d
this.c=e
this.a=f}}
B=c[0]
C=c[2]
A=a.updateHolder(c[266],A)
A.aK8.prototype={
iK(){return"SliverGeometry"}}
A.aKd.prototype={
l(d){return B.ai(this.a).l(0)+"@(mainAxis: "+B.b(this.c)+", crossAxis: "+B.b(this.d)+")"}}
A.uv.prototype={
buq(d){var x=this.a
d.hj(x.a,x.b,0,1)},
l(d){return"paintOffset="+this.a.l(0)}}
A.fG.prototype={
gaB(){return y.j.a(B.ak.prototype.gaB.call(this))},
gnR(){return this.gxe()},
gxe(){var x=this,w=y.j
switch(w.a(B.ak.prototype.gaB.call(x)).gCU().a){case 0:return new B.af(0,0,0+x.dy.c,0+w.a(B.ak.prototype.gaB.call(x)).w)
case 1:return new B.af(0,0,0+w.a(B.ak.prototype.gaB.call(x)).w,0+x.dy.c)}},
MU(){},
c3j(d,e,f){var x,w=this
if(f>=0&&f<w.dy.r&&e>=0&&e<y.j.a(B.ak.prototype.gaB.call(w)).w){x=w.bfv(d,e,f)
if(x){d.G(0,new A.aKd(f,e,w))
return!0}}return!1},
bfv(d,e,f){return!1},
JO(d,e,f){var x=d.d,w=d.r,v=x+w
return B.aj(B.aj(f,x,v)-B.aj(e,x,v),0,w)},
W6(d,e,f){var x=d.d,w=x+d.z,v=d.Q,u=x+v
return B.aj(B.aj(f,w,u)-B.aj(e,w,u),0,v)},
bdw(d){return 0},
Wk(d){return 0},
bvi(d){return 0},
hG(d,e){},
qB(d,e){}}
A.b0W.prototype={}
A.YS.prototype={
gbuK(){var x=this,w=y.j
switch(B.Ab(w.a(B.ak.prototype.gaB.call(x)).a,w.a(B.ak.prototype.gaB.call(x)).b).a){case 0:w=x.goF().d
break
case 1:w=x.goF().a
break
case 2:w=x.goF().b
break
case 3:w=x.goF().c
break
default:w=null}return w},
gdcc(){var x=this,w=y.j
switch(B.Ab(w.a(B.ak.prototype.gaB.call(x)).a,w.a(B.ak.prototype.gaB.call(x)).b).a){case 0:w=x.goF().b
break
case 1:w=x.goF().c
break
case 2:w=x.goF().d
break
case 3:w=x.goF().a
break
default:w=null}return w},
gdiS(){switch(y.j.a(B.ak.prototype.gaB.call(this)).gCU().a){case 0:var x=this.goF()
x=x.ge6()+x.ge9()
break
case 1:x=this.goF().gfK()
break
default:x=null}return x},
j6(d){if(!(d.b instanceof A.uv))d.b=new A.uv(C.M)},
dq(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=y.j,a0=d.a(B.ak.prototype.gaB.call(f)),a1=new A.bLj(f,a0),a2=new A.bLi(f,a0),a3=f.goF()
a3.toString
x=f.gbuK()
f.gdcc()
w=f.goF()
w.toString
v=w.dci(d.a(B.ak.prototype.gaB.call(f)).gCU())
u=f.gdiS()
if(f.U$==null){t=a1.$2$from$to(0,v)
f.dy=A.qg(a2.$2$from$to(0,v),!1,e,e,v,Math.min(t,a0.r),0,v,e)
return}s=a1.$2$from$to(0,x)
r=a0.f
if(r>0)r=Math.max(0,r-s)
d=f.U$
d.toString
w=Math.max(0,a0.d-x)
q=Math.min(0,a0.z+x)
p=a0.r
o=a1.$2$from$to(0,x)
n=a0.Q
m=a2.$2$from$to(0,x)
d.eD(a0.di7(q,Math.max(0,a0.w-u),r,x+a0.e,n-m,p-o,w),!0)
l=f.U$.dy
d=l.y
if(d!=null){f.dy=A.qg(e,!1,e,e,0,0,0,0,d)
return}k=l.a
j=a2.$2$from$to(0,x)
d=x+k
w=v+k
i=a2.$2$from$to(d,w)
h=a1.$2$from$to(d,w)
g=s+h
d=l.c
q=l.d
t=Math.min(s+Math.max(d,q+h),p)
p=l.b
q=Math.min(g+q,t)
n=Math.min(j+i+l.z,n)
o=l.e
d=Math.max(g+d,s+l.r)
f.dy=A.qg(n,l.x,d,q,v+o,t,p,w,e)
switch(B.Ab(a0.a,a0.b).a){case 0:d=a1.$2$from$to(a3.d+k,a3.ge6()+a3.ge9()+k)
break
case 3:d=a1.$2$from$to(a3.c+k,a3.gfK()+k)
break
case 1:d=a1.$2$from$to(0,a3.a)
break
case 2:d=a1.$2$from$to(0,a3.b)
break
default:d=e}w=f.U$.b
w.toString
y.g.a(w)
switch(a0.gCU().a){case 0:d=new B.E(d,a3.b)
break
case 1:d=new B.E(a3.a,d)
break
default:d=e}w.a=d},
bfv(d,e,f){var x,w,v=this,u=v.U$
if(u!=null&&u.dy.r>0){u=u.b
u.toString
y.g.a(u)
x=v.JO(y.j.a(B.ak.prototype.gaB.call(v)),0,v.gbuK())
w=v.U$
w.toString
return d.dc6(v.Wk(w),e,w.gdoy(),x,f,u.a)}return!1},
Wk(d){var x
switch(y.j.a(B.ak.prototype.gaB.call(this)).gCU().a){case 0:x=this.goF().b
break
case 1:x=this.goF().a
break
default:x=null}return x},
bvi(d){return this.gbuK()},
hG(d,e){var x=d.b
x.toString
y.g.a(x).buq(e)},
b5(d,e){var x,w=this.U$
if(w!=null&&w.dy.w){x=w.b
x.toString
d.h7(w,e.al(0,y.g.a(x).a))}}}
A.aHU.prototype={
goF(){return this.el},
d46(){if(this.el!=null)return
this.el=this.be},
se8(d){var x=this
if(x.be.n(0,d))return
x.be=d
x.el=null
x.av()},
sdO(d){var x=this
if(x.eb===d)return
x.eb=d
x.el=null
x.av()},
dq(){this.d46()
this.bGC()}}
A.aZM.prototype={
ba(d){var x
this.ha(d)
x=this.U$
if(x!=null)x.ba(d)},
b_(){this.h0()
var x=this.U$
if(x!=null)x.b_()}}
A.aKg.prototype={
bm(d){var x=new A.aHU(this.e,d.ad(y.o).w,null,B.bl(y.d))
x.bl()
x.sce(null)
return x},
bM(d,e){e.se8(this.e)
e.sdO(d.ad(y.o).w)}}
var z=a.updateTypes(["B(QA{crossAxisPosition!T,mainAxisPosition!T})"])
A.bLj.prototype={
$2$from$to(d,e){return this.a.JO(this.b,d,e)},
$S:533}
A.bLi.prototype={
$2$from$to(d,e){return this.a.W6(this.b,d,e)},
$S:533};(function aliases(){var x=A.YS.prototype
x.bGC=x.dq})();(function installTearOffs(){var x=a.installInstanceTearOff
x(A.fG.prototype,"gdoy",0,1,null,["$3$crossAxisPosition$mainAxisPosition"],["c3j"],0,0,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.b0W,B.A)
v(A.aK8,A.b0W)
v(A.aKd,B.pN)
v(A.uv,B.h2)
v(A.fG,B.ak)
v(A.aZM,A.fG)
v(A.YS,A.aZM)
u(B.bN,[A.bLj,A.bLi])
v(A.aHU,A.YS)
v(A.aKg,B.ca)
x(A.b0W,B.bK)
w(A.aZM,B.ci)})()
B.b0(b.typeUniverse,JSON.parse('{"oq":{"vn":[]},"QA":{"vI":[]},"fG":{"ak":[],"bx":[]},"aKd":{"pN":["fG"]},"uv":{"h2":[]},"YS":{"fG":[],"ci":["fG"],"ak":[],"bx":[]},"aHU":{"fG":[],"ci":["fG"],"ak":[],"bx":[]},"aKg":{"ca":[],"by":[],"n":[]}}'))
var y={d:B.C("fh"),o:B.C("hU"),j:B.C("oq"),g:B.C("uv")}};
(a=>{a["EzkldKS77LAO20Un/g05WiaSwZ4="]=a.current})($__dart_deferred_initializers__);