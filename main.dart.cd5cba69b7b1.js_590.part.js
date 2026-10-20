((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,F,C={aBi:function aBi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},bqb:function bqb(d){this.a=d},bqc:function bqc(d){this.a=d},
e_5(d,e,f,g,h,i){return new C.a9x(i,h,d,g,e,f,null)},
a9x:function a9x(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.y=h
_.z=i
_.a=j},
an1:function an1(d,e,f,g,h,i){var _=this
_.d=null
_.e=d
_.cF$=e
_.PU$=f
_.bWM$=g
_.bBM$=h
_.bWN$=i
_.c=_.a=null},
cDP:function cDP(d,e){this.a=d
this.b=e},
cDQ:function cDQ(d,e){this.a=d
this.b=e},
cDR:function cDR(d,e){this.a=d
this.b=e},
awb:function awb(){}},D,E
A=c[0]
B=c[2]
F=c[542]
C=a.updateHolder(c[139],C)
D=c[774]
E=c[199]
C.aBi.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.t(d).ax,n=q.e===0
if(n)x=A.f(d,B.c,y.F).gvZ()
else{w=q.c
x=w==null?A.f(d,B.c,y.F).gCZ():w}w=o.k3
v=y.F
u=A.f(d,B.c,v).gj6()
t=A.T(B.kn,w,p,p,p)
u=A.aR(p,p,p,p,t,p,p,q.f,p,p,p,p,u,p)
if(!n){t=q.d
t=t!=null&&q.c8m(t)}else t=!1
if(t){t=q.d
t.toString
t=new A.lm(t,1,p,B.eA)}else t=p
if(n)s=o.y
else{s=q.d
s=s==null||!q.c8m(s)?o.b:p}if(n)r=A.T(F.xJ,o.z,p,p,20)
else if(q.d==null){r=x.length!==0?x[0].toUpperCase():"?"
r=A.d(r,p,p,p,p,p,A.I(p,p,o.c,p,p,p,p,p,p,p,p,16,p,p,B.B,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)}else r=p
r=A.ir(s,t,r,p,18)
t=y.u
s=A.a([A.d(x,p,p,B.R,p,p,A.I(p,p,w,p,p,p,p,p,p,p,p,16,p,p,B.T,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t)
if(n){v=A.f(d,B.c,v).gvZ()
s.push(A.d(v,p,p,p,p,p,A.I(p,p,o.a===B.J?B.ei:B.cy,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}return A.kM(p,p,p,!0,!0,o.k2,p,1,p,p,1,!1,p,!1,w,p,u,p,!0,p,p,p,p,p,A.z(A.a([r,B.ai,A.P(A.w(s,B.m,p,B.b9,B.f,0,B.j),1,p)],t),B.l,p,B.e,B.f,0,p,p),p,p,p,1,p,!0)},
gte(){return D.bIs},
c8m(d){var x
if(d.length===0)return!1
if(!B.b.aQ(d,"http://")&&!B.b.aQ(d,"https://"))return!1
x=y.x
if(!B.d.c9(A.a([".jpg",".jpeg",".png",".gif",".webp",".svg"],x),new C.bqb(d)))return B.d.c9(A.a(["objectstorage","cloudinary","imgur","flickr","amazonaws","googleusercontent","gravatar","githubusercontent"],x),new C.bqc(d))
return!0},
$iEk:1}
C.a9x.prototype={
R(){return new C.an1(A.b6("ChatPageWrapper"),$,null,A.aU(y.h),!1,!1)}}
C.an1.prototype={
bTZ(){return this.d=null},
Y(){var x,w=this,v=null
w.cO7()
x=w.e
x.m(B.i,"ChatPageWrapper \u521d\u59cb\u5316",v,v)
x.m(B.i,"  - sessionId: "+A.b(w.a.c),v,v)
x.m(B.i,"  - receiverId: "+A.b(w.a.d),v,v)
x.m(B.i,"  - isNewChat: "+w.a.e,v,v)
w.a.toString
x.m(B.i,"  - initialSession: null",v,v)
w.a.toString},
dqu(d){var x,w=this,v=null
if(w.c!=null){x=w.cF$
x===$&&A.e()
x=x.gN()&&A.c0(y.s.a($.au.i(0,$.co())))}else x=!1
if(!x)return
x=w.e
x.m(B.i,"=== \u6536\u5230\u6703\u8a71\u52a0\u8f09\u5b8c\u6210\u56de\u8abf ===",v,v)
x.m(B.i,"\u6703\u8a71\u8cc7\u8a0a: "+d.A().l(0),v,v)
if(w.c!=null){w.n(new C.cDP(w,d))
x.m(B.i,"\u6703\u8a71\u72c0\u614b\u5df2\u66f4\u65b0",v,v)}else x.m(B.t,"Widget \u5df2\u5378\u8f09\uff0c\u7121\u6cd5\u66f4\u65b0\u72c0\u614b",v,v)
x.m(B.i,"=== \u6703\u8a71\u52a0\u8f09\u56de\u8abf\u7d50\u675f ===",v,v)},
d__(d){if(!this.crs(d))return
if(A.aN(d,!1).f.pj())A.ac(d,!1).ag(null)
else A.aN(d,!1).f.i3(0,A.a([A.jg(null,null)],y.q))},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.c!=null){x=o.cF$
x===$&&A.e()
x=x.gN()&&A.c0(y.s.a($.au.i(0,$.co())))}else x=!1
if(!x)return B.ac
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
s=t?new C.cDQ(o,d):new C.cDR(o,d)
r=w.c
q=w.d
p=w.x
return A.bQ(new C.aBi(v,u,x,s,n),n,E.e8q(n,t,new A.K(new A.dP(r,q,t),y.d),o.gdqt(),w.y,w.z,p,q,n,n,r),n,n,n,n,n)}}
C.awb.prototype={
Y(){var x,w,v,u=this
u.a6()
x=$.al()
w=x.$1$0(y.l)
v=y.A
x=A.j7(w,x.ah(v)?x.$1$0(v):null)
x.a4(u.gbwO())
u.cF$!==$&&A.aK()
u.cF$=x},
aZ(){var x,w,v=this
v.bB()
x=v.c
x.toString
x=v.PU$=A.cs(x,null,y.y)
w=!1
if(v.bBM$)if((x==null?null:x.gld())===!0){x=v.PU$
x=(x==null?null:x.gN())===!0}else x=w
else x=w
if(x)v.bs6(!0)},
q(){var x,w=this
w.bs6(!1)
x=w.cF$
x===$&&A.e()
x.T(w.gbwO())
w.cF$.q()
w.a5()}}
var z=a.updateTypes(["~()","~(kN)"])
C.bqb.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:9}
C.bqc.prototype={
$1(d){return B.b.t(this.a.toLowerCase(),d)},
$S:9}
C.cDP.prototype={
$0(){this.a.d=this.b},
$S:0}
C.cDQ.prototype={
$0(){return this.a.d__(this.b)},
$S:0}
C.cDR.prototype={
$0(){var x=this.b
if(this.a.crs(x))A.ac(x,!1).aB()},
$S:0};(function aliases(){var x=C.awb.prototype
x.cO7=x.Y})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=C.an1.prototype,"gcrL","bTZ",0)
w(v,"gdqt","dqu",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(C.aBi,A.x)
v(A.bu,[C.bqb,C.bqc])
w(C.a9x,A.L)
w(C.awb,A.U)
w(C.an1,C.awb)
v(A.bt,[C.cDP,C.cDQ,C.cDR])
x(C.awb,E.YK)})()
A.b_(b.typeUniverse,JSON.parse('{"aBi":{"x":[],"Ek":[],"m":[]},"a9x":{"L":[],"m":[]},"an1":{"U":["a9x"]}}'))
var y=(function rtii(){var x=A.C
return{F:x("by"),q:x("v<bV<A?>>"),x:x("v<n>"),u:x("v<m>"),h:x("eN<@>"),A:x("ft"),l:x("eb"),d:x("K<+(n?,y?,F)>"),y:x("A?"),s:x("F()?")}})();(function constants(){D.bIs=new A.ae(1/0,56)})()};
(a=>{a["81XRt775YZeRDC7ecfB1ZO0bDr8="]=a.current})($__dart_deferred_initializers__);