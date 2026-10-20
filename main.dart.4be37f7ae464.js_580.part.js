((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={az_:function az_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},bmx:function bmx(d){this.a=d},bmy:function bmy(d){this.a=d},
dUJ(d,e,f,g,h,i){return new C.a7P(i,h,d,g,e,f,null)},
a7P:function a7P(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.a=j},
akM:function akM(d,e,f,g,h,i){var _=this
_.d=null
_.e=d
_.cE$=e
_.Ph$=f
_.bVB$=g
_.bAP$=h
_.bVC$=i
_.c=_.a=null},
cz7:function cz7(d,e){this.a=d
this.b=e},
cz8:function cz8(d,e){this.a=d
this.b=e},
cz9:function cz9(d,e){this.a=d
this.b=e},
atX:function atX(){}},D,E
A=c[0]
B=c[2]
F=c[541]
C=a.updateHolder(c[139],C)
D=c[772]
E=c[199]
C.az_.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.t(d).ax,n=q.e===0
if(n)x=A.f(d,B.b,y.F).gvz()
else{w=q.c
x=w==null?A.f(d,B.b,y.F).gCq():w}w=o.k3
v=y.F
u=A.f(d,B.b,v).giX()
t=A.Q(B.kf,w,p,p,p)
u=A.aQ(p,p,p,p,t,p,p,q.f,p,p,p,p,u,p)
if(!n){t=q.d
t=t!=null&&q.c6U(t)}else t=!1
if(t){t=q.d
t.toString
t=new A.l_(t,1,p,B.ez)}else t=p
if(n)s=o.y
else{s=q.d
s=s==null||!q.c6U(s)?o.b:p}if(n)r=A.Q(F.xo,o.z,p,p,20)
else if(q.d==null){r=x.length!==0?x[0].toUpperCase():"?"
r=A.d(r,p,p,p,p,p,A.I(p,p,o.c,p,p,p,p,p,p,p,p,16,p,p,B.B,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)}else r=p
r=A.ia(s,t,r,p,18)
t=y.u
s=A.a([A.d(x,p,p,B.R,p,p,A.I(p,p,w,p,p,p,p,p,p,p,p,16,p,p,B.T,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t)
if(n){v=A.f(d,B.b,v).gvz()
s.push(A.d(v,p,p,p,p,p,A.I(p,p,o.a===B.J?B.eg:B.co,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}return A.kw(p,p,p,!0,!0,o.k2,p,1,p,p,1,!1,p,!1,w,p,u,p,!0,p,p,p,p,p,A.z(A.a([r,B.aj,A.P(A.w(s,B.m,p,B.b7,B.f,0,B.j),1,p)],t),B.l,p,B.e,B.f,0,p,p),p,p,p,1,p,!0)},
grT(){return D.bDB},
c6U(d){var x
if(d.length===0)return!1
if(!B.c.aV(d,"http://")&&!B.c.aV(d,"https://"))return!1
x=y.x
if(!B.d.cc(A.a([".jpg",".jpeg",".png",".gif",".webp",".svg"],x),new C.bmx(d)))return B.d.cc(A.a(["objectstorage","cloudinary","imgur","flickr","amazonaws","googleusercontent","gravatar","githubusercontent"],x),new C.bmy(d))
return!0},
$iDh:1}
C.a7P.prototype={
P(){return new C.akM(A.b4("ChatPageWrapper"),$,null,A.aV(y.h),!1,!1)}}
C.akM.prototype={
bST(){return this.d=null},
X(){var x,w=this,v=null
w.cLK()
x=w.e
x.m(B.i,"ChatPageWrapper \u521d\u59cb\u5316",v,v)
x.m(B.i,"  - sessionId: "+A.b(w.a.c),v,v)
x.m(B.i,"  - receiverId: "+A.b(w.a.d),v,v)
x.m(B.i,"  - isNewChat: "+w.a.e,v,v)
w.a.toString
x.m(B.i,"  - initialSession: null",v,v)
w.a.toString},
dnY(d){var x,w=this,v=null
if(w.c!=null){x=w.cE$
x===$&&A.e()
x=x.gM()&&A.bY(y.s.a($.au.i(0,$.cl())))}else x=!1
if(!x)return
x=w.e
x.m(B.i,"=== \u6536\u5230\u6703\u8a71\u52a0\u8f09\u5b8c\u6210\u56de\u8abf ===",v,v)
x.m(B.i,"\u6703\u8a71\u8cc7\u8a0a: "+d.v().l(0),v,v)
if(w.c!=null){w.n(new C.cz7(w,d))
x.m(B.i,"\u6703\u8a71\u72c0\u614b\u5df2\u66f4\u65b0",v,v)}else x.m(B.t,"Widget \u5df2\u5378\u8f09\uff0c\u7121\u6cd5\u66f4\u65b0\u72c0\u614b",v,v)
x.m(B.i,"=== \u6703\u8a71\u52a0\u8f09\u56de\u8abf\u7d50\u675f ===",v,v)},
cXC(d){if(!this.cpG(d))return
if(A.aM(d,!1).f.oY())A.ac(d,!1).af(null)
else A.aM(d,!1).f.hW(0,A.a([A.j0(null,null)],y.q))},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.c!=null){x=o.cE$
x===$&&A.e()
x=x.gM()&&A.bY(y.s.a($.au.i(0,$.cl())))}else x=!1
if(!x)return B.ac
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
s=t?new C.cz8(o,d):new C.cz9(o,d)
r=w.c
q=w.d
p=w.x
return A.bN(new C.az_(v,u,x,s,n),n,E.e2V(n,t,new A.K(new A.dM(r,q,t),y.d),o.gdnX(),w.y,w.z,p,q,n,n,r),n,n,n,n,n)}}
C.atX.prototype={
X(){var x,w,v,u=this
u.a6()
x=$.ak()
w=x.$1$0(y.l)
v=y.A
x=A.iS(w,x.ag(v)?x.$1$0(v):null)
x.a4(u.gbvT())
u.cE$!==$&&A.aJ()
u.cE$=x},
aZ(){var x,w,v=this
v.by()
x=v.c
x.toString
x=v.Ph$=A.cp(x,null,y.y)
w=!1
if(v.bAP$)if((x==null?null:x.gkY())===!0){x=v.Ph$
x=(x==null?null:x.gM())===!0}else x=w
else x=w
if(x)v.brd(!0)},
q(){var x,w=this
w.brd(!1)
x=w.cE$
x===$&&A.e()
x.T(w.gbvT())
w.cE$.q()
w.a5()}}
var z=a.updateTypes(["~()","~(kx)"])
C.bmx.prototype={
$1(d){return B.c.t(this.a.toLowerCase(),d)},
$S:9}
C.bmy.prototype={
$1(d){return B.c.t(this.a.toLowerCase(),d)},
$S:9}
C.cz7.prototype={
$0(){this.a.d=this.b},
$S:0}
C.cz8.prototype={
$0(){return this.a.cXC(this.b)},
$S:0}
C.cz9.prototype={
$0(){var x=this.b
if(this.a.cpG(x))A.ac(x,!1).aA()},
$S:0};(function aliases(){var x=C.atX.prototype
x.cLK=x.X})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=C.akM.prototype,"gcpZ","bST",0)
w(v,"gdnX","dnY",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(C.az_,A.x)
v(A.bt,[C.bmx,C.bmy])
w(C.a7P,A.L)
w(C.atX,A.U)
w(C.akM,C.atX)
v(A.bs,[C.cz7,C.cz8,C.cz9])
x(C.atX,E.Xe)})()
A.aY(b.typeUniverse,JSON.parse('{"az_":{"x":[],"Dh":[],"m":[]},"a7P":{"L":[],"m":[]},"akM":{"U":["a7P"]}}'))
var y=(function rtii(){var x=A.F
return{F:x("bv"),q:x("v<bS<A?>>"),x:x("v<n>"),u:x("v<m>"),h:x("eG<@>"),A:x("fn"),l:x("e5"),d:x("K<+(n?,y?,D)>"),y:x("A?"),s:x("D()?")}})();(function constants(){D.bDB=new A.ae(1/0,56)})()};
(a=>{a["VPF6pSlzOLR6DLFoO+q5SzHfzAY="]=a.current})($__dart_deferred_initializers__);