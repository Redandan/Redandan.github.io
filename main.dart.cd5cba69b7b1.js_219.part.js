((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={Ur:function Ur(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},bbd:function bbd(){var _=this
_.d=$
_.e=null
_.f=$
_.c=_.a=null},duF:function duF(d,e){this.a=d
this.b=e},duE:function duE(d,e){this.a=d
this.b=e},duG:function duG(d){this.a=d},duH:function duH(d,e){this.a=d
this.b=e}}
A=c[0]
C=c[2]
B=a.updateHolder(c[174],B)
B.Ur.prototype={
R(){return new B.bbd()}}
B.bbd.prototype={
Y(){var x=this
x.a6()
x.f=x.a.d
x.cje()},
aV(d){var x,w=this
w.b_(d)
x=w.a
if(d.c!==x.c||d.d!==x.d||d.e!==x.e){w.f=x.d
w.cje()}},
cje(){var x,w,v=this,u=$.ekx
$.ekx=u+1
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
x.addEventListener("load",A.dQ(new B.duF(v,x)))
v.e=x
$.ayJ()
u=v.d
$.BV().a9S(u,new B.duG(x),!0)},
cjL(d){var x,w,v,u,t,s,r,q,p=this
if(p.c==null||p.e!==d)return
try{x=d.contentDocument
s=x
w=s==null?null:s.body
s=x
v=s==null?null:s.documentElement
if(w==null||v==null)return
w.style.overflow="hidden"
if(v!=null&&A.ix(v,"HTMLElement"))v.style.overflow="hidden"
s=w.scrollHeight
r=v.scrollHeight
u=Math.max(A.n9(s),A.n9(r))
t=C.k.dn(u,p.a.d,12e3)
s=p.f
s===$&&A.e()
if(Math.abs(t-s)<1)return
p.n(new B.duH(p,t))
d.style.height=A.b(t)+"px"}catch(q){s=d.style
r=p.a.d
s.height=A.b(r)+"px"}},
u(d){var x,w,v,u,t,s=this,r=null,q=A.t(d),p=s.f
p===$&&A.e()
x=s.a.e
w=x?C.a5:q.ax.k2
v=A.G(x?0:8)
x=x?r:A.aL(q.ch.B(0.24),C.u,1)
u=s.f
t=s.d
t===$&&A.e()
return A.a2n(A.X(r,new A.ad(r,u,new A.R2(t,r,r,C.zO,r),r),C.aV,r,new A.az(0,1/0,p,1/0),new A.S(w,r,x,v,r,r,C.r),r,r,r,r,r,r,r,1/0),r,C.u8)}}
var z=a.updateTypes([])
B.duF.prototype={
$1(d){var x=this.a,w=this.b
x.cjL(w)
A.eK(C.kj,new B.duE(x,w),y.b)},
$S:33}
B.duE.prototype={
$0(){return this.a.cjL(this.b)},
$S:0}
B.duG.prototype={
$1(d){return this.a},
$S:1779}
B.duH.prototype={
$0(){return this.a.f=this.b},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ur,A.L)
x(B.bbd,A.U)
w(A.bu,[B.duF,B.duG])
w(A.bt,[B.duE,B.duH])})()
A.b_(b.typeUniverse,JSON.parse('{"Ur":{"L":[],"m":[]},"bbd":{"U":["Ur"]}}'))
var y={b:A.C("~")};(function staticFields(){$.ekx=0})()};
(a=>{a["Ymo2dfC0twgm9STf8OlhScfLjTg="]=a.current})($__dart_deferred_initializers__);