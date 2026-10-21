((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={aBu:function aBu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},bqu:function bqu(d){this.a=d},bqv:function bqv(d){this.a=d},
e08(d,e,f,g,h,i){return new C.a9F(i,h,d,g,e,f,null)},
a9F:function a9F(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.a=j},
anc:function anc(d,e,f,g,h,i){var _=this
_.d=null
_.e=d
_.cF$=e
_.PR$=f
_.bWV$=g
_.bBV$=h
_.bWW$=i
_.c=_.a=null},
cEr:function cEr(d,e){this.a=d
this.b=e},
cEs:function cEs(d,e){this.a=d
this.b=e},
cEt:function cEt(d,e){this.a=d
this.b=e},
awn:function awn(){}},D,E
A=c[0]
B=c[2]
F=c[543]
C=a.updateHolder(c[139],C)
D=c[775]
E=c[198]
C.aBu.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.t(d).ax,n=q.e===0
if(n)x=A.f(d,B.c,y.F).gw0()
else{w=q.c
x=w==null?A.f(d,B.c,y.F).gD1():w}w=o.k3
v=y.F
u=A.f(d,B.c,v).giN()
t=A.T(B.kr,w,p,p,p)
u=A.aR(p,p,p,p,t,p,p,q.f,p,p,p,p,u,p)
if(!n){t=q.d
t=t!=null&&q.c8y(t)}else t=!1
if(t){t=q.d
t.toString
t=new A.lO(t,1,p,B.f1)}else t=p
if(n)s=o.y
else{s=q.d
s=s==null||!q.c8y(s)?o.b:p}if(n)r=A.T(F.xM,o.z,p,p,20)
else if(q.d==null){r=x.length!==0?x[0].toUpperCase():"?"
r=A.d(r,p,p,p,p,p,A.Y(p,p,o.c,p,p,p,p,p,p,p,p,16,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)}else r=p
r=A.j2(s,t,r,p,18)
t=y.u
s=A.a([A.d(x,p,p,B.R,p,p,A.Y(p,p,w,p,p,p,p,p,p,p,p,16,p,p,B.S,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t)
if(n){v=A.f(d,B.c,v).gw0()
s.push(A.d(v,p,p,p,p,p,A.Y(p,p,o.a===B.ad?B.ek:B.cz,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}return A.kN(p,p,p,!0,!0,o.k2,p,1,p,p,1,!1,p,!1,w,p,u,p,!0,p,p,p,p,p,A.z(A.a([r,B.ah,A.O(A.w(s,B.m,p,B.b9,B.f,0,B.j),1,p)],t),B.l,p,B.e,B.f,0,p,p),p,p,p,1,p,!0)},
gtf(){return D.bIr},
c8y(d){var x
if(d.length===0)return!1
if(!B.b.aR(d,"http://")&&!B.b.aR(d,"https://"))return!1
x=y.x
if(!B.d.c9(A.a([".jpg",".jpeg",".png",".gif",".webp",".svg"],x),new C.bqu(d)))return B.d.c9(A.a(["objectstorage","cloudinary","imgur","flickr","amazonaws","googleusercontent","gravatar","githubusercontent"],x),new C.bqv(d))
return!0},
$iEj:1}
C.a9F.prototype={
O(){return new C.anc(A.b7("ChatPageWrapper"),$,null,A.aS(y.h),!1,!1)}}
C.anc.prototype={
bU6(){return this.d=null},
Y(){var x,w=this,v=null
w.cOn()
x=w.e
x.m(B.i,"ChatPageWrapper \u521d\u59cb\u5316",v,v)
x.m(B.i,"  - sessionId: "+A.b(w.a.c),v,v)
x.m(B.i,"  - receiverId: "+A.b(w.a.d),v,v)
x.m(B.i,"  - isNewChat: "+w.a.e,v,v)
w.a.toString
x.m(B.i,"  - initialSession: null",v,v)
w.a.toString},
dqM(d){var x,w=this,v=null
if(w.c!=null){x=w.cF$
x===$&&A.e()
x=x.gN()&&A.c0(y.s.a($.au.i(0,$.cp())))}else x=!1
if(!x)return
x=w.e
x.m(B.i,"=== \u6536\u5230\u6703\u8a71\u52a0\u8f09\u5b8c\u6210\u56de\u8abf ===",v,v)
x.m(B.i,"\u6703\u8a71\u8cc7\u8a0a: "+d.A().l(0),v,v)
if(w.c!=null){w.n(new C.cEr(w,d))
x.m(B.i,"\u6703\u8a71\u72c0\u614b\u5df2\u66f4\u65b0",v,v)}else x.m(B.t,"Widget \u5df2\u5378\u8f09\uff0c\u7121\u6cd5\u66f4\u65b0\u72c0\u614b",v,v)
x.m(B.i,"=== \u6703\u8a71\u52a0\u8f09\u56de\u8abf\u7d50\u675f ===",v,v)},
d_f(d){if(!this.crK(d))return
if(A.aL(d,!1).f.mg())A.ac(d,!1).af(null)
else A.aL(d,!1).f.hV(0,A.a([A.io(null,null)],y.q))},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.c!=null){x=o.cF$
x===$&&A.e()
x=x.gN()&&A.c0(y.s.a($.au.i(0,$.cp())))}else x=!1
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
s=t?new C.cEs(o,d):new C.cEt(o,d)
r=w.c
q=w.d
p=w.x
return A.bN(new C.aBu(v,u,x,s,n),n,E.e9u(n,t,new A.H(new A.dQ(r,q,t),y.d),o.gdqL(),w.y,w.z,p,q,n,n,r),n,n,n,n,n)}}
C.awn.prototype={
Y(){var x,w,v,u=this
u.a6()
x=$.am()
w=x.$1$0(y.l)
v=y.A
x=A.j8(w,x.ah(v)?x.$1$0(v):null)
x.a4(u.gbwV())
u.cF$!==$&&A.aK()
u.cF$=x},
b_(){var x,w,v=this
v.bB()
x=v.c
x.toString
x=v.PR$=A.cs(x,null,y.y)
w=!1
if(v.bBV$)if((x==null?null:x.gle())===!0){x=v.PR$
x=(x==null?null:x.gN())===!0}else x=w
else x=w
if(x)v.bsd(!0)},
q(){var x,w=this
w.bsd(!1)
x=w.cF$
x===$&&A.e()
x.T(w.gbwV())
w.cF$.q()
w.a5()}}
var z=a.updateTypes(["~()","~(kO)"])
C.bqu.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:9}
C.bqv.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:9}
C.cEr.prototype={
$0(){this.a.d=this.b},
$S:0}
C.cEs.prototype={
$0(){return this.a.d_f(this.b)},
$S:0}
C.cEt.prototype={
$0(){var x=this.b
if(this.a.crK(x))A.ac(x,!1).aB()},
$S:0};(function aliases(){var x=C.awn.prototype
x.cOn=x.Y})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=C.anc.prototype,"gcs2","bU6",0)
w(v,"gdqL","dqM",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(C.aBu,A.x)
v(A.bu,[C.bqu,C.bqv])
w(C.a9F,A.L)
w(C.awn,A.S)
w(C.anc,C.awn)
v(A.bt,[C.cEr,C.cEs,C.cEt])
x(C.awn,E.YO)})()
A.b0(b.typeUniverse,JSON.parse('{"aBu":{"x":[],"Ej":[],"m":[]},"a9F":{"L":[],"m":[]},"anc":{"S":["a9F"]}}'))
var y=(function rtii(){var x=A.C
return{F:x("bw"),q:x("v<bV<A?>>"),x:x("v<n>"),u:x("v<m>"),h:x("eP<@>"),A:x("fu"),l:x("ec"),d:x("H<+(n?,y?,F)>"),y:x("A?"),s:x("F()?")}})();(function constants(){D.bIr=new A.ae(1/0,56)})()};
(a=>{a["LRdn9DKVrYkae4hi35aspStaGFU="]=a.current})($__dart_deferred_initializers__);