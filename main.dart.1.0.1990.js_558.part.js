((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,C={ata:function ata(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},b9i:function b9i(d){this.a=d},b9j:function b9j(d){this.a=d},
dvF(d,e,f,g,h,i){return new C.a4c(i,h,d,g,e,f,null)},
a4c:function a4c(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.a=j},
afP:function afP(d){var _=this
_.d=null
_.e=d
_.c=_.a=null},
ccM:function ccM(d,e){this.a=d
this.b=e},
ccN:function ccN(d,e){this.a=d
this.b=e},
ccO:function ccO(d){this.a=d}},D,F
A=c[0]
B=c[2]
E=c[523]
C=a.updateHolder(c[134],C)
D=c[755]
F=c[190]
C.ata.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.q(d).ax,n=q.e===0
if(n)x=A.e(d,B.b,y.p).gqD()
else{w=q.c
x=w==null?A.e(d,B.b,y.p).gxv():w}w=o.k3
v=y.p
u=A.e(d,B.b,v).gha()
t=A.N(B.jA,w,p,p,p)
u=A.aK(p,p,p,p,p,t,p,p,q.f,p,p,p,p,u,p)
if(!n){t=q.d
t=t!=null&&q.bSr(t)}else t=!1
if(t){t=q.d
t.toString
t=new A.kd(t,1,p,B.eh)}else t=p
if(n)s=o.y
else{s=q.d
s=s==null||!q.bSr(s)?o.b:p}if(n)r=A.N(E.vS,o.z,p,p,20)
else if(q.d==null){r=x.length!==0?x[0].toUpperCase():"?"
r=A.d(r,p,p,p,p,p,A.E(p,p,o.c,p,p,p,p,p,p,p,p,16,p,p,B.A,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)}else r=p
r=A.hF(s,t,r,p,18)
t=y.e
s=A.a([A.d(x,p,p,B.P,p,p,A.E(p,p,w,p,p,p,p,p,p,p,p,16,p,p,B.Q,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t)
if(n){v=A.e(d,B.b,v).gqD()
s.push(A.d(v,p,p,p,p,p,A.E(p,p,o.a===B.G?B.e1:B.cg,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}return A.n0(p,p,p,!0,!0,o.k2,p,1,p,p,1,!1,p,!1,w,p,u,p,!0,p,p,p,p,p,A.y(A.a([r,B.aa,A.Q(A.v(s,B.m,p,B.b2,B.h,0,B.j),1,p)],t),B.l,p,B.d,B.h,0,p,p),p,p,p,1,p,!0)},
gom(){return D.bvR},
bSr(d){var x
if(d.length===0)return!1
if(!B.c.aN(d,"http://")&&!B.c.aN(d,"https://"))return!1
x=y.h
if(!B.e.d9(A.a([".jpg",".jpeg",".png",".gif",".webp",".svg"],x),new C.b9i(d)))return B.e.d9(A.a(["objectstorage","cloudinary","imgur","flickr","amazonaws","googleusercontent","gravatar","githubusercontent"],x),new C.b9j(d))
return!0},
$iBm:1}
C.a4c.prototype={
O(){return new C.afP(A.aX("ChatPageWrapper"))}}
C.afP.prototype={
Y(){var x,w=this,v=null
w.a5()
x=w.e
x.k(B.f,"ChatPageWrapper \u521d\u59cb\u5316",v,v)
x.k(B.f,"  - sessionId: "+A.b(w.a.c),v,v)
x.k(B.f,"  - receiverId: "+A.b(w.a.d),v,v)
x.k(B.f,"  - isNewChat: "+w.a.e,v,v)
w.a.toString
x.k(B.f,"  - initialSession: null",v,v)
w.a.toString},
d0A(d){var x=this,w=null,v=x.e
v.k(B.f,"=== \u6536\u5230\u6703\u8a71\u52a0\u8f09\u5b8c\u6210\u56de\u8abf ===",w,w)
v.k(B.f,"\u6703\u8a71\u8cc7\u8a0a: "+d.B().l(0),w,w)
if(x.c!=null){x.p(new C.ccM(x,d))
v.k(B.f,"\u6703\u8a71\u72c0\u614b\u5df2\u66f4\u65b0",w,w)}else v.k(B.t,"Widget \u5df2\u5378\u8f09\uff0c\u7121\u6cd5\u66f4\u65b0\u72c0\u614b",w,w)
v.k(B.f,"=== \u6703\u8a71\u52a0\u8f09\u56de\u8abf\u7d50\u675f ===",w,w)},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.e
n.k(B.f,"=== ChatPageWrapper build \u958b\u59cb ===",o,o)
x=p.d
n.k(B.f,"\u7576\u524d\u6703\u8a71\u72c0\u614b: "+A.b(x==null?o:x.B()),o,o)
n.k(B.f,"AppBar \u53c3\u6578:",o,o)
x=p.d
n.k(B.f,"  - partnerName: "+A.b(x==null?o:x.x),o,o)
x=p.d
n.k(B.f,"  - partnerAvatar: "+A.b(x==null?o:x.y),o,o)
x=p.d
n.k(B.f,"  - partnerId: "+A.b(x==null?o:x.c),o,o)
n=p.d
x=n==null
w=x?o:n.x
v=x?o:n.y
n=x?o:n.c
x=p.a
u=x.e
t=u?new C.ccN(p,d):new C.ccO(d)
s=x.c
r=x.d
q=x.x
return A.bQ(new C.ata(w,v,n,t,o),o,F.dvH(o,u,p.gd0z(),x.y,x.z,q,r,o,o,s),o,o,o,o,o)}}
var z=a.updateTypes(["~(k8)"])
C.b9i.prototype={
$1(d){return B.c.t(this.a.toLowerCase(),d)},
$S:12}
C.b9j.prototype={
$1(d){return B.c.t(this.a.toLowerCase(),d)},
$S:12}
C.ccM.prototype={
$0(){this.a.d=this.b},
$S:0}
C.ccN.prototype={
$0(){var x=this.b
if(A.aL(x,!1).f.le())A.a5(x,!1).a9(null)
else A.aL(x,!1).f.ke(0,A.a([A.on(null)],y.a))
return null},
$S:0}
C.ccO.prototype={
$0(){return A.a5(this.a,!1).ah()},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(C.afP.prototype,"gd0z","d0A",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ata,A.x)
w(A.by,[C.b9i,C.b9j])
x(C.a4c,A.J)
x(C.afP,A.R)
w(A.bw,[C.ccM,C.ccN,C.ccO])})()
A.aV(b.typeUniverse,JSON.parse('{"ata":{"x":[],"Bm":[],"m":[]},"a4c":{"J":[],"m":[]},"afP":{"R":["a4c"]}}'))
var y={p:A.A("bv"),a:A.A("w<bS<G?>>"),h:A.A("w<o>"),e:A.A("w<m>")};(function constants(){D.bvR=new A.ac(1/0,56)})()};
(a=>{a["yZXaclOyC5XwKv4m19FRBUXmFgw="]=a.current})($__dart_deferred_initializers__);