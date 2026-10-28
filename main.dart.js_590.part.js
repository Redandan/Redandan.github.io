((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={auq:function auq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},beX:function beX(d){this.a=d},beY:function beY(d){this.a=d},
dCQ(d,e,f,g,h,i){return new C.a5_(i,h,d,g,e,f,null)},
a5_:function a5_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.a=j},
ahC:function ahC(d,e,f,g,h,i){var _=this
_.d=null
_.e=d
_.cv$=e
_.Lf$=f
_.by_$=g
_.beU$=h
_.by0$=i
_.c=_.a=null},
ckK:function ckK(d,e){this.a=d
this.b=e},
ckL:function ckL(d,e){this.a=d
this.b=e},
ckM:function ckM(d,e){this.a=d
this.b=e},
apS:function apS(){}},D,E
A=c[0]
B=c[2]
F=c[526]
C=a.updateHolder(c[111],C)
D=c[704]
E=c[158]
C.auq.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.t(d).ax,n=q.e===0
if(n)x=A.f(d,B.c,y.F).gun()
else{w=q.c
x=w==null?A.f(d,B.c,y.F).gAs():w}w=o.k3
v=y.F
u=A.f(d,B.c,v).gly()
t=A.a0(B.qI,w,p,p)
u=A.aZ(p,p,p,t,p,p,q.f,p,p,p,u,p)
if(!n){t=q.d
t=t!=null&&q.bJW(t)}else t=!1
if(t){t=q.d
t.toString
t=new A.lR(t,1,p,B.eG)}else t=p
if(n)s=o.y
else{s=q.d
s=s==null||!q.bJW(s)?o.b:p}if(n)r=A.a0(F.vV,o.z,p,20)
else if(q.d==null){r=x.length!==0?x[0].toUpperCase():"?"
r=A.d(r,p,p,p,p,p,A.a_(p,p,o.c,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)}else r=p
r=A.j8(s,t,r,p,18)
t=y.u
s=A.a([A.d(x,p,p,B.X,p,p,A.a_(p,p,w,p,p,p,p,p,p,p,p,16,p,p,B.Y,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t)
if(n){v=A.f(d,B.c,v).gun()
s.push(A.d(v,p,p,p,p,p,A.a_(p,p,o.a===B.a3?B.dH:B.ck,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}return A.lA(p,p,!0,o.k2,p,p,1,w,p,u,p,p,p,A.G(A.a([r,B.ay,A.Y(A.x(s,B.m,p,B.bp,B.h,0,B.k),1,p)],t),B.l,p,B.e,B.h,0,p,p),p,p)},
gvd(){return D.btD},
bJW(d){var x
if(d.length===0)return!1
if(!B.b.aT(d,"http://")&&!B.b.aT(d,"https://"))return!1
x=y.x
if(!B.d.cS(A.a([".jpg",".jpeg",".png",".gif",".webp",".svg"],x),new C.beX(d)))return B.d.cS(A.a(["objectstorage","cloudinary","imgur","flickr","amazonaws","googleusercontent","gravatar","githubusercontent"],x),new C.beY(d))
return!0},
$iCk:1}
C.a5_.prototype={
R(){return new C.ahC(A.b4("ChatPageWrapper"),$,null,A.aT(y.h),!1,!1)}}
C.ahC.prototype={
bvp(){return this.d=null},
Y(){var x,w=this,v=null
w.ckH()
x=w.e
x.m(B.i,"ChatPageWrapper \u521d\u59cb\u5316",v,v)
x.m(B.i,"  - sessionId: "+A.b(w.a.c),v,v)
x.m(B.i,"  - receiverId: "+A.b(w.a.d),v,v)
x.m(B.i,"  - isNewChat: "+w.a.e,v,v)
w.a.toString
x.m(B.i,"  - initialSession: null",v,v)
w.a.toString},
cTu(d){var x,w=this,v=null
if(w.c!=null){x=w.cv$
x===$&&A.e()
x=x.gX()&&A.c1(y.s.a($.aq.i(0,$.cb())))}else x=!1
if(!x)return
x=w.e
x.m(B.i,"=== \u6536\u5230\u6703\u8a71\u52a0\u8f09\u5b8c\u6210\u56de\u8abf ===",v,v)
x.m(B.i,"\u6703\u8a71\u8cc7\u8a0a: "+d.v().l(0),v,v)
if(w.c!=null){w.p(new C.ckK(w,d))
x.m(B.i,"\u6703\u8a71\u72c0\u614b\u5df2\u66f4\u65b0",v,v)}else x.m(B.q,"Widget \u5df2\u5378\u8f09\uff0c\u7121\u6cd5\u66f4\u65b0\u72c0\u614b",v,v)
x.m(B.i,"=== \u6703\u8a71\u52a0\u8f09\u56de\u8abf\u7d50\u675f ===",v,v)},
cFG(d){if(!this.c02(d))return
if(A.bp(d,!1).f.wu())A.a9(d,!1).ai(null)
else A.bp(d,!1).f.ku(0,A.a([A.pf(null)],y.q))},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.c!=null){x=o.cv$
x===$&&A.e()
x=x.gX()&&A.c1(y.s.a($.aq.i(0,$.cb())))}else x=!1
if(!x)return B.ag
x=o.e
x.m(B.i,"=== ChatPageWrapper build \u958b\u59cb ===",n,n)
w=o.d
x.m(B.i,"\u7576\u524d\u6703\u8a71\u72c0\u614b: "+A.b(w==null?n:w.v()),n,n)
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
s=t?new C.ckL(o,d):new C.ckM(o,d)
r=w.c
q=w.d
p=w.x
return A.cU(new C.auq(v,u,x,s,n),n,E.dCS(n,t,new A.a3(new A.eq(r,q,t),y.d),o.gcTt(),w.y,w.z,p,q,n,n,r),n,n,n,n,n)}}
C.apS.prototype={
Y(){var x,w,v,u=this
u.a9()
x=$.ap()
w=x.$1$0(y.l)
v=y.A
x=A.mo(w,x.ar(v)?x.$1$0(v):null)
x.a4(u.gbag())
u.cv$!==$&&A.aW()
u.cv$=x},
bc(){var x,w,v=this
v.cf()
x=v.c
x.toString
x=v.Lf$=A.dy(x,null,y.y)
w=!1
if(v.beU$)if((x==null?null:x.gnH())===!0){x=v.Lf$
x=(x==null?null:x.gX())===!0}else x=w
else x=w
if(x)v.b6p(!0)},
q(){var x,w=this
w.b6p(!1)
x=w.cv$
x===$&&A.e()
x.S(w.gbag())
w.cv$.q()
w.a7()}}
var z=a.updateTypes(["~()","~(kp)"])
C.beX.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:7}
C.beY.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:7}
C.ckK.prototype={
$0(){this.a.d=this.b},
$S:0}
C.ckL.prototype={
$0(){return this.a.cFG(this.b)},
$S:0}
C.ckM.prototype={
$0(){var x=this.b
if(this.a.c02(x))A.a9(x,!1).aF()},
$S:0};(function aliases(){var x=C.apS.prototype
x.ckH=x.Y})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=C.ahC.prototype,"gc0k","bvp",0)
w(v,"gcTt","cTu",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(C.auq,A.y)
v(A.bN,[C.beX,C.beY])
w(C.a5_,A.J)
w(C.apS,A.M)
w(C.ahC,C.apS)
v(A.bT,[C.ckK,C.ckL,C.ckM])
x(C.apS,E.UI)})()
A.b0(b.typeUniverse,JSON.parse('{"auq":{"y":[],"Ck":[],"n":[]},"a5_":{"J":[],"n":[]},"ahC":{"M":["a5_"]}}'))
var y=(function rtii(){var x=A.C
return{F:x("c_"),q:x("v<cu<A?>>"),x:x("v<m>"),u:x("v<n>"),h:x("fk<@>"),A:x("iJ"),l:x("fL"),d:x("a3<+(m?,w?,B)>"),y:x("A?"),s:x("B()?")}})();(function constants(){D.btD=new A.ab(1/0,56)})()};
(a=>{a["3+vcu+2ijrMD7rTvOLFVkVV+qCg="]=a.current})($__dart_deferred_initializers__);