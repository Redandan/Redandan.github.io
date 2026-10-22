((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
yc(d,e,f){return new B.Fz(e,d,f,null)},
Fz:function Fz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auW:function auW(){var _=this
_.e=_.d=null
_.f=$
_.r=null
_.x=_.w=0
_.c=_.a=null},
dAy:function dAy(){},
dAz:function dAz(d){this.a=d},
dAA:function dAA(d,e,f){this.a=d
this.b=e
this.c=f},
dAB:function dAB(d){this.a=d},
eG9(d){var x,w,v,u,t,s,r,q,p,o
if(d.length===0)return d
x=A.a([],y.l)
for(w=A.eFB(d,0,y.u),v=J.aX(w.a),u=w.b,w=new A.a_S(v,u,A.D(w).k("a_S<1>")),t=y.e;w.G();){s=w.c
s=s>=0?new A.bc(u+s,v.gP()):A.U(A.f0())
r=s.a
q=null
p=s.b
q=p
o=r
s=q.a
x.push(new A.l1(q,new A.H(s==null?o:s,t)))}return x}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[282],B)
B.Fz.prototype={
O(){return new B.auW()}}
B.auW.prototype={
gLt(){var x=this.d
return(x==null?null:x.gia())!=null},
awi(){var x=this,w=x.a.c,v=x.d
if(w===v)return
if(x.gLt())v.gia().T(x.gLO())
x.d=w
v=w.gia()
v.dS()
v.di$.H(0,x.gLO())},
buV(d){++this.w
this.e.bDi(d);--this.w},
aqo(d,e,f){return this.cTX(d,e,f)},
cTX(d,e,f){var x=0,w=A.l(y.v),v=this
var $async$aqo=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:++v.w
x=2
return A.c(v.e.FT(d,e,f),$async$aqo)
case 2:--v.w
return A.j(null,w)}})
return A.k($async$aqo,w)},
X(){this.a6()
this.byH()},
b0(){var x,w,v=this
v.bA()
v.awi()
x=v.r=v.d.d
w=v.e
if(w==null){v.a.toString
v.e=A.Sy(x,1)}else w.bDi(x)},
aQ(d){var x,w=this
w.b_(d)
if(w.a.c!==d.c){w.awi()
x=w.d.d
w.r=x
w.buV(x)}x=w.a
if(x.d!==d.d&&w.w===0)w.byH()},
q(){var x,w=this
if(w.gLt())w.d.gia().T(w.gLO())
w.d=null
x=w.e
if(x!=null)x.q()
w.a5()},
byH(){var x=this.a.d,w=A.V(x).k("F<1,m>")
x=A.O(new A.F(x,new B.dAy(),w),w.k("ai.E"))
this.f=B.eG9(x)},
bO_(){var x,w=this
if(w.x>0||w.d.f===0)return
x=w.d.d
if(x!==w.r){w.r=x
w.dMd()}},
dMd(){var x,w,v,u=this
if(u.c!=null){x=y.x.a(C.d.gd_(u.e.f)).gnG()
w=u.r
w.toString
w=x===w
x=w}else x=!0
if(x)return
x=u.r
x.toString
w=u.d
v=w.e
w=w.b
if(Math.abs(x-v)===1)u.bzz(w)
else u.bzA(w)},
bzz(d){return this.dMc(d)},
dMc(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$bzz=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.r
x=d.a===0?3:5
break
case 3:t.toString
u.buV(t)
x=4
break
case 5:t.toString
x=6
return A.c(u.aqo(t,C.co,d),$async$bzz)
case 6:case 4:if(u.c!=null)u.n(new B.dAz(u))
v=A.di(null,y.v)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bzz,w)},
bzA(d){return this.dMe(d)},
dMe(d){var x=0,w=A.l(y.v),v=this,u,t,s
var $async$bzA=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=v.d.e
s=v.r
s.toString
u=s>t?s-1:s+1
v.n(new B.dAA(v,u,t))
v.buV(u)
s=v.r
x=d.a===0?2:4
break
case 2:s.toString
v.buV(s)
x=3
break
case 4:s.toString
x=5
return A.c(v.aqo(s,C.co,d),$async$bzA)
case 5:case 3:if(v.c!=null)v.n(new B.dAB(v))
return A.j(null,w)}})
return A.k($async$bzA,w)},
cnq(){var x,w=this.d
w.toString
x=y.x.a(C.d.gd_(this.e.f)).gnG()
x.toString
w.sfQ(A.an(x-this.d.d,-1,1))},
dHC(d){var x,w,v=this
if(v.w>0||v.x>0)return!1
if(d.i1$!==0)return!1
if(!v.gLt())return!1;++v.x
x=y.x.a(C.d.gd_(v.e.f)).gnG()
x.toString
if(d instanceof A.pf&&v.d.f===0){w=v.d
if(Math.abs(x-w.d)>1){w.bL2(C.k.b1(x))
v.r=v.d.d}v.cnq()}else if(d instanceof A.k5){w=v.d
w.toString
w.bL2(C.k.b1(x))
x=v.d
v.r=x.d
if(x.f===0)v.cnq()}--v.x
return!1},
u(d){var x,w=this,v=w.a,u=w.e
v=v.e
v=v==null?new A.Sz(C.HL.rS(C.oX)):new A.Sz(C.HL.rS(v))
x=w.f
x===$&&A.e()
return new A.fQ(w.gdHB(),A.e3A(x,C.q,u,C.w,null,null,v),null,y.f)}}
var z=a.updateTypes(["~()","E(m_)"])
B.dAy.prototype={
$1(d){var x=null
return A.S(x,x,x,d,!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.bEK,x,x,x,x,x,x,x,x,x,x,C.p,x)},
$S:1963}
B.dAz.prototype={
$0(){this.a.byH()},
$S:0}
B.dAA.prototype={
$0(){var x,w,v=this.a,u=v.f
u===$&&A.e()
u=A.O(u,y.u)
u.$flags=1
v=v.f=u
u=this.b
x=v[u]
w=this.c
v[u]=v[w]
v[w]=x},
$S:0}
B.dAB.prototype={
$0(){this.a.byH()},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.auW.prototype,"gLO","bO_",0)
w(v,"gdHB","dHC",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Fz,A.K)
x(B.auW,A.Q)
x(B.dAy,A.bt)
w(A.bu,[B.dAz,B.dAA,B.dAB])})()
A.b0(b.typeUniverse,JSON.parse('{"Fz":{"K":[],"m":[]},"auW":{"Q":["Fz"]}}'))
var y={l:A.C("v<m>"),f:A.C("fQ<m_>"),e:A.C("H<A>"),u:A.C("m"),x:A.C("yJ"),v:A.C("~")}};
(a=>{a["TiSYuxvogU//j/jjGiWYqGbc28w="]=a.current})($__dart_deferred_initializers__);