((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={aBN:function aBN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},bqV:function bqV(d){this.a=d},bqW:function bqW(d){this.a=d},
e1R(d,e,f,g,h,i){return new C.a9Q(i,h,d,g,e,f,null)},
a9Q:function a9Q(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.a=j},
ano:function ano(d,e,f,g,h,i){var _=this
_.d=null
_.e=d
_.cH$=e
_.PW$=f
_.bXt$=g
_.bCn$=h
_.bXu$=i
_.c=_.a=null},
cFo:function cFo(d,e){this.a=d
this.b=e},
cFp:function cFp(d,e){this.a=d
this.b=e},
cFq:function cFq(d,e){this.a=d
this.b=e},
awE:function awE(){}},D,E
A=c[0]
B=c[2]
F=c[542]
C=a.updateHolder(c[139],C)
D=c[776]
E=c[200]
C.aBN.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.t(d).ax,n=q.e===0
if(n)x=A.f(d,B.c,y.F).gw3()
else{w=q.c
x=w==null?A.f(d,B.c,y.F).gD2():w}w=o.k3
v=y.F
u=A.f(d,B.c,v).giP()
t=A.U(B.ks,w,p,p,p)
u=A.aR(p,p,p,p,t,p,p,q.f,p,p,p,p,u,p)
if(!n){t=q.d
t=t!=null&&q.c9h(t)}else t=!1
if(t){t=q.d
t.toString
t=new A.lX(t,1,p,B.f1)}else t=p
if(n)s=o.y
else{s=q.d
s=s==null||!q.c9h(s)?o.b:p}if(n)r=A.U(F.xR,o.z,p,p,20)
else if(q.d==null){r=x.length!==0?x[0].toUpperCase():"?"
r=A.d(r,p,p,p,p,p,A.Z(p,p,o.c,p,p,p,p,p,p,p,p,16,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)}else r=p
r=A.j6(s,t,r,p,18)
t=y.u
s=A.a([A.d(x,p,p,B.R,p,p,A.Z(p,p,w,p,p,p,p,p,p,p,p,16,p,p,B.S,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t)
if(n){v=A.f(d,B.c,v).gw3()
s.push(A.d(v,p,p,p,p,p,A.Z(p,p,o.a===B.ad?B.el:B.cA,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}return A.kT(p,p,p,!0,!0,o.k2,p,1,p,p,1,!1,p,!1,w,p,u,p,!0,p,p,p,p,p,A.z(A.a([r,B.ah,A.N(A.w(s,B.m,p,B.b9,B.f,0,B.j),1,p)],t),B.l,p,B.e,B.f,0,p,p),p,p,p,1,p,!0)},
gth(){return D.bIB},
c9h(d){var x
if(d.length===0)return!1
if(!B.b.aR(d,"http://")&&!B.b.aR(d,"https://"))return!1
x=y.x
if(!B.d.ca(A.a([".jpg",".jpeg",".png",".gif",".webp",".svg"],x),new C.bqV(d)))return B.d.ca(A.a(["objectstorage","cloudinary","imgur","flickr","amazonaws","googleusercontent","gravatar","githubusercontent"],x),new C.bqW(d))
return!0},
$iEw:1}
C.a9Q.prototype={
O(){return new C.ano(A.b7("ChatPageWrapper"),$,null,A.aS(y.h),!1,!1)}}
C.ano.prototype={
bUD(){return this.d=null},
X(){var x,w=this,v=null
w.cPt()
x=w.e
x.m(B.i,"ChatPageWrapper \u521d\u59cb\u5316",v,v)
x.m(B.i,"  - sessionId: "+A.b(w.a.c),v,v)
x.m(B.i,"  - receiverId: "+A.b(w.a.d),v,v)
x.m(B.i,"  - isNewChat: "+w.a.e,v,v)
w.a.toString
x.m(B.i,"  - initialSession: null",v,v)
w.a.toString},
dsc(d){var x,w=this,v=null
if(w.c!=null){x=w.cH$
x===$&&A.e()
x=x.gL()&&A.c_(y.s.a($.au.i(0,$.cq())))}else x=!1
if(!x)return
x=w.e
x.m(B.i,"=== \u6536\u5230\u6703\u8a71\u52a0\u8f09\u5b8c\u6210\u56de\u8abf ===",v,v)
x.m(B.i,"\u6703\u8a71\u8cc7\u8a0a: "+d.A().l(0),v,v)
if(w.c!=null){w.n(new C.cFo(w,d))
x.m(B.i,"\u6703\u8a71\u72c0\u614b\u5df2\u66f4\u65b0",v,v)}else x.m(B.t,"Widget \u5df2\u5378\u8f09\uff0c\u7121\u6cd5\u66f4\u65b0\u72c0\u614b",v,v)
x.m(B.i,"=== \u6703\u8a71\u52a0\u8f09\u56de\u8abf\u7d50\u675f ===",v,v)},
d0q(d){if(!this.csH(d))return
if(A.aJ(d,!1).f.lR())A.ac(d,!1).af(null)
else A.aJ(d,!1).f.hV(0,A.a([A.ie(null,null)],y.q))},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.c!=null){x=o.cH$
x===$&&A.e()
x=x.gL()&&A.c_(y.s.a($.au.i(0,$.cq())))}else x=!1
if(!x)return B.a9
x=o.e
x.m(B.i,"=== ChatPageWrapper build \u958b\u59cb ===",n,n)
w=o.d
x.m(B.i,"\u7576\u524d\u6703\u8a71\u72c0\u614b: "+A.b(w==null?n:w.A()),n,n)
x.m(B.i,"AppBar \u53c3\u6578:",n,n)
w=o.d
x.m(B.i,"  - partnerName: "+A.b(w==null?n:w.x),n,n)
w=o.d
x.m(B.i,"  - partnerAvatar: "+A.b(w==null?n:w.y),n,n)
w=o.d
x.m(B.i,"  - partnerId: "+A.b(w==null?n:w.c),n,n)
x=o.d
w=x==null
v=w?n:x.x
u=w?n:x.y
x=w?n:x.c
w=o.a
t=w.e
s=t?new C.cFp(o,d):new C.cFq(o,d)
r=w.c
q=w.d
p=w.x
return A.bN(new C.aBN(v,u,x,s,n),n,E.ebe(n,t,new A.H(new A.dP(r,q,t),y.d),o.gdsb(),w.y,w.z,p,q,n,n,r),n,n,n,n,n)}}
C.awE.prototype={
X(){var x,w,v,u=this
u.a6()
x=$.am()
w=x.$1$0(y.l)
v=y.A
x=A.iE(w,x.ah(v)?x.$1$0(v):null)
x.a4(u.gbxj())
u.cH$!==$&&A.aL()
u.cH$=x},
b0(){var x,w,v=this
v.by()
x=v.c
x.toString
x=v.PW$=A.ch(x,null,y.y)
w=!1
if(v.bCn$)if((x==null?null:x.glg())===!0){x=v.PW$
x=(x==null?null:x.gL())===!0}else x=w
else x=w
if(x)v.bsy(!0)},
q(){var x,w=this
w.bsy(!1)
x=w.cH$
x===$&&A.e()
x.T(w.gbxj())
w.cH$.q()
w.a5()}}
var z=a.updateTypes(["~()","~(kU)"])
C.bqV.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:9}
C.bqW.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:9}
C.cFo.prototype={
$0(){this.a.d=this.b},
$S:0}
C.cFp.prototype={
$0(){return this.a.d0q(this.b)},
$S:0}
C.cFq.prototype={
$0(){var x=this.b
if(this.a.csH(x))A.ac(x,!1).aB()},
$S:0};(function aliases(){var x=C.awE.prototype
x.cPt=x.X})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=C.ano.prototype,"gct_","bUD",0)
w(v,"gdsb","dsc",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(C.aBN,A.x)
v(A.bt,[C.bqV,C.bqW])
w(C.a9Q,A.K)
w(C.awE,A.Q)
w(C.ano,C.awE)
v(A.bu,[C.cFo,C.cFp,C.cFq])
x(C.awE,E.YW)})()
A.b0(b.typeUniverse,JSON.parse('{"aBN":{"x":[],"Ew":[],"m":[]},"a9Q":{"K":[],"m":[]},"ano":{"Q":["a9Q"]}}'))
var y=(function rtii(){var x=A.C
return{F:x("bv"),q:x("v<bU<A?>>"),x:x("v<n>"),u:x("v<m>"),h:x("eO<@>"),A:x("fn"),l:x("ec"),d:x("H<+(n?,y?,E)>"),y:x("A?"),s:x("E()?")}})();(function constants(){D.bIB=new A.ae(1/0,56)})()};
(a=>{a["YmiVxp7tQnsE7PojmwvQQbWLCB8="]=a.current})($__dart_deferred_initializers__);