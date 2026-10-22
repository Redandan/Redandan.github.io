((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
yc(d,e,f){return new B.Fy(e,d,f,null)},
Fy:function Fy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auV:function auV(){var _=this
_.e=_.d=null
_.f=$
_.r=null
_.x=_.w=0
_.c=_.a=null},
dAg:function dAg(){},
dAh:function dAh(d){this.a=d},
dAi:function dAi(d,e,f){this.a=d
this.b=e
this.c=f},
dAj:function dAj(d){this.a=d},
eFP(d){var x,w,v,u,t,s,r,q,p,o
if(d.length===0)return d
x=A.a([],y.l)
for(w=A.eFg(d,0,y.u),v=J.aX(w.a),u=w.b,w=new A.a_S(v,u,A.D(w).k("a_S<1>")),t=y.e;w.G();){s=w.c
s=s>=0?new A.bc(u+s,v.gP()):A.U(A.f0())
r=s.a
q=null
p=s.b
q=p
o=r
s=q.a
x.push(new A.l0(q,new A.H(s==null?o:s,t)))}return x}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[282],B)
B.Fy.prototype={
O(){return new B.auV()}}
B.auV.prototype={
gLu(){var x=this.d
return(x==null?null:x.gi9())!=null},
awg(){var x=this,w=x.a.c,v=x.d
if(w===v)return
if(x.gLu())v.gi9().T(x.gLP())
x.d=w
v=w.gi9()
v.dS()
v.di$.H(0,x.gLP())},
buS(d){++this.w
this.e.bD9(d);--this.w},
aqo(d,e,f){return this.cTK(d,e,f)},
cTK(d,e,f){var x=0,w=A.l(y.v),v=this
var $async$aqo=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:++v.w
x=2
return A.c(v.e.FU(d,e,f),$async$aqo)
case 2:--v.w
return A.j(null,w)}})
return A.k($async$aqo,w)},
X(){this.a6()
this.byz()},
b0(){var x,w,v=this
v.bA()
v.awg()
x=v.r=v.d.d
w=v.e
if(w==null){v.a.toString
v.e=A.Sy(x,1)}else w.bD9(x)},
aQ(d){var x,w=this
w.b_(d)
if(w.a.c!==d.c){w.awg()
x=w.d.d
w.r=x
w.buS(x)}x=w.a
if(x.d!==d.d&&w.w===0)w.byz()},
q(){var x,w=this
if(w.gLu())w.d.gi9().T(w.gLP())
w.d=null
x=w.e
if(x!=null)x.q()
w.a5()},
byz(){var x=this.a.d,w=A.V(x).k("E<1,m>")
x=A.O(new A.E(x,new B.dAg(),w),w.k("ai.E"))
this.f=B.eFP(x)},
bNP(){var x,w=this
if(w.x>0||w.d.f===0)return
x=w.d.d
if(x!==w.r){w.r=x
w.dLV()}},
dLV(){var x,w,v,u=this
if(u.c!=null){x=y.x.a(C.d.gd_(u.e.f)).gnF()
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
if(Math.abs(x-v)===1)u.bzq(w)
else u.bzr(w)},
bzq(d){return this.dLU(d)},
dLU(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$bzq=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.r
x=d.a===0?3:5
break
case 3:t.toString
u.buS(t)
x=4
break
case 5:t.toString
x=6
return A.c(u.aqo(t,C.cn,d),$async$bzq)
case 6:case 4:if(u.c!=null)u.n(new B.dAh(u))
v=A.di(null,y.v)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$bzq,w)},
bzr(d){return this.dLW(d)},
dLW(d){var x=0,w=A.l(y.v),v=this,u,t,s
var $async$bzr=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=v.d.e
s=v.r
s.toString
u=s>t?s-1:s+1
v.n(new B.dAi(v,u,t))
v.buS(u)
s=v.r
x=d.a===0?2:4
break
case 2:s.toString
v.buS(s)
x=3
break
case 4:s.toString
x=5
return A.c(v.aqo(s,C.cn,d),$async$bzr)
case 5:case 3:if(v.c!=null)v.n(new B.dAj(v))
return A.j(null,w)}})
return A.k($async$bzr,w)},
cne(){var x,w=this.d
w.toString
x=y.x.a(C.d.gd_(this.e.f)).gnF()
x.toString
w.sfQ(A.an(x-this.d.d,-1,1))},
dHj(d){var x,w,v=this
if(v.w>0||v.x>0)return!1
if(d.lV$!==0)return!1
if(!v.gLu())return!1;++v.x
x=y.x.a(C.d.gd_(v.e.f)).gnF()
x.toString
if(d instanceof A.q4&&v.d.f===0){w=v.d
if(Math.abs(x-w.d)>1){w.bKT(C.k.b1(x))
v.r=v.d.d}v.cne()}else if(d instanceof A.u7){w=v.d
w.toString
w.bKT(C.k.b1(x))
x=v.d
v.r=x.d
if(x.f===0)v.cne()}--v.x
return!1},
u(d){var x,w=this,v=w.a,u=w.e
v=v.e
v=v==null?new A.Sz(C.HL.rT(C.oW)):new A.Sz(C.HL.rT(v))
x=w.f
x===$&&A.e()
return new A.fR(w.gdHi(),A.e3f(x,C.q,u,C.w,null,null,v),null,y.f)}}
var z=a.updateTypes(["~()","F(n6)"])
B.dAg.prototype={
$1(d){var x=null
return A.S(x,x,x,d,!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.bEK,x,x,x,x,x,x,x,x,x,x,C.p,x)},
$S:1963}
B.dAh.prototype={
$0(){this.a.byz()},
$S:0}
B.dAi.prototype={
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
B.dAj.prototype={
$0(){this.a.byz()},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.auV.prototype,"gLP","bNP",0)
w(v,"gdHi","dHj",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Fy,A.K)
x(B.auV,A.Q)
x(B.dAg,A.bt)
w(A.bu,[B.dAh,B.dAi,B.dAj])})()
A.b0(b.typeUniverse,JSON.parse('{"Fy":{"K":[],"m":[]},"auV":{"Q":["Fy"]}}'))
var y={l:A.C("v<m>"),f:A.C("fR<n6>"),e:A.C("H<A>"),u:A.C("m"),x:A.C("yJ"),v:A.C("~")}};
(a=>{a["0o2q8IH54ThfSFfi/nU+0Ge19V0="]=a.current})($__dart_deferred_initializers__);