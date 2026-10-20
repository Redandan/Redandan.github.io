((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={T1:function T1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},b7P:function b7P(){var _=this
_.d=$
_.e=null
_.f=$
_.c=_.a=null},dpA:function dpA(d,e){this.a=d
this.b=e},dpz:function dpz(d,e){this.a=d
this.b=e},dpB:function dpB(d){this.a=d},dpC:function dpC(d,e){this.a=d
this.b=e}}
A=c[0]
C=c[2]
B=a.updateHolder(c[174],B)
B.T1.prototype={
P(){return new B.b7P()}}
B.b7P.prototype={
X(){var x=this
x.a6()
x.f=x.a.d
x.chc()},
aT(d){var x,w=this
w.b_(d)
x=w.a
if(d.c!==x.c||d.d!==x.d||d.e!==x.e){w.f=x.d
w.chc()}},
chc(){var x,w,v=this,u=$.eeB
$.eeB=u+1
v.d="storefront-html-preview-"+u
x=b.G.document.createElement("iframe")
x.srcdoc=v.a.c
x.style.border="0"
x.style.width="100%"
u=x.style
w=v.f
w===$&&A.e()
u.height=A.b(w)+"px"
x.style.overflow="hidden"
x.style.display="block"
x.style.pointerEvents="none"
x.setAttribute("sandbox","allow-same-origin")
x.setAttribute("referrerpolicy","no-referrer")
x.setAttribute("loading","lazy")
x.setAttribute("scrolling","no")
x.addEventListener("load",A.dI(new B.dpA(v,x)))
v.e=x
$.aws()
u=v.d
$.B_().a8Z(u,new B.dpB(x),!0)},
chJ(d){var x,w,v,u,t,s,r,q,p=this
if(p.c==null||p.e!==d)return
try{x=d.contentDocument
s=x
w=s==null?null:s.body
s=x
v=s==null?null:s.documentElement
if(w==null||v==null)return
w.style.overflow="hidden"
if(v!=null&&A.ii(v,"HTMLElement"))v.style.overflow="hidden"
s=w.scrollHeight
r=v.scrollHeight
u=Math.max(A.mM(s),A.mM(r))
t=C.k.dN(u,p.a.d,12e3)
s=p.f
s===$&&A.e()
if(Math.abs(t-s)<1)return
p.n(new B.dpC(p,t))
d.style.height=A.b(t)+"px"}catch(q){s=d.style
r=p.a.d
s.height=A.b(r)+"px"}},
u(d){var x,w,v,u,t,s=this,r=null,q=A.t(d),p=s.f
p===$&&A.e()
x=s.a.e
w=x?C.a6:q.ax.k2
v=A.G(x?0:8)
x=x?r:A.aL(q.ch.A(0.24),C.u,1)
u=s.f
t=s.d
t===$&&A.e()
return A.a0I(A.X(r,new A.ad(r,u,new A.PN(t,r,r,C.zt,r),r),C.aU,r,new A.ay(0,1/0,p,1/0),new A.S(w,r,x,v,r,r,C.r),r,r,r,r,r,r,r,1/0),r,C.tU)}}
var z=a.updateTypes([])
B.dpA.prototype={
$1(d){var x=this.a,w=this.b
x.chJ(w)
A.eD(C.kb,new B.dpz(x,w),y.b)},
$S:32}
B.dpz.prototype={
$0(){return this.a.chJ(this.b)},
$S:0}
B.dpB.prototype={
$1(d){return this.a},
$S:1772}
B.dpC.prototype={
$0(){return this.a.f=this.b},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.T1,A.L)
x(B.b7P,A.U)
w(A.bt,[B.dpA,B.dpB])
w(A.bs,[B.dpz,B.dpC])})()
A.aY(b.typeUniverse,JSON.parse('{"T1":{"L":[],"m":[]},"b7P":{"U":["T1"]}}'))
var y={b:A.F("~")};(function staticFields(){$.eeB=0})()};
(a=>{a["KkDtdN7/EVVuvRRbHUJGyQXM1h4="]=a.current})($__dart_deferred_initializers__);