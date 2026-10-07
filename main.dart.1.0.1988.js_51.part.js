((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
vK(d,e,f){return new B.Cf(e,d,f,null)},
Cf:function Cf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amW:function amW(){var _=this
_.e=_.d=null
_.f=$
_.r=null
_.x=_.w=0
_.c=_.a=null},
d0M:function d0M(){},
d0N:function d0N(d){this.a=d},
d0O:function d0O(d,e,f){this.a=d
this.b=e
this.c=f},
d0P:function d0P(d){this.a=d},
dY3(d){var x,w,v,u,t,s,r,q,p,o
if(d.length===0)return d
x=A.a([],y.l)
for(w=A.dXw(d,0,y.u),v=J.aZ(w.a),u=w.b,w=new A.VS(v,u,A.C(w).m("VS<1>")),t=y.e;w.F();){s=w.c
s=s>=0?new A.bb(u+s,v.gR()):A.aA(A.eu())
r=s.a
q=null
p=s.b
q=p
o=r
s=q.a
x.push(new A.lZ(q,new A.W(s==null?o:s,t)))}return x}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[268],B)
B.Cf.prototype={
O(){return new B.amW()}}
B.amW.prototype={
gEC(){var x=this.d
return(x==null?null:x.gf3())!=null},
ak9(){var x=this,w=x.a.c,v=x.d
if(w===v)return
if(x.gEC())v.gf3().Y(x.gEV())
x.d=w
v=w.gf3()
v.cc()
v.bO$.L(0,x.gEV())},
bhV(d){++this.w
this.e.boW(d);--this.w},
af4(d,e,f){return this.cvb(d,e,f)},
cvb(d,e,f){var x=0,w=A.l(y.v),v=this
var $async$af4=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:++v.w
x=2
return A.c(v.e.zF(d,e,f),$async$af4)
case 2:--v.w
return A.j(null,w)}})
return A.k($async$af4,w)},
Z(){this.a5()
this.bkT()},
b8(){var x,w,v=this
v.bF()
v.ak9()
x=v.r=v.d.d
w=v.e
if(w==null){v.a.toString
v.e=A.Og(x,1)}else w.boW(x)},
aK(d){var x,w=this
w.b1(d)
if(w.a.c!==d.c){w.ak9()
x=w.d.d
w.r=x
w.bhV(x)}x=w.a
if(x.d!==d.d&&w.w===0)w.bkT()},
q(){var x,w=this
if(w.gEC())w.d.gf3().Y(w.gEV())
w.d=null
x=w.e
if(x!=null)x.q()
w.a6()},
bkT(){var x=this.a.d,w=A.V(x).m("F<1,m>")
x=A.U(new A.F(x,new B.d0M(),w),w.m("ak.E"))
this.f=B.dY3(x)},
byv(){var x,w=this
if(w.x>0||w.d.f===0)return
x=w.d.d
if(x!==w.r){w.r=x
w.diM()}},
diM(){var x,w,v,u=this
if(u.c!=null){x=y.x.a(C.e.gcp(u.e.f)).grl()
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
if(Math.abs(x-v)===1)u.blG(w)
else u.blH(w)},
blG(d){return this.diL(d)},
diL(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$blG=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.r
x=d.a===0?3:5
break
case 3:t.toString
u.bhV(t)
x=4
break
case 5:t.toString
x=6
return A.c(u.af4(t,C.c8,d),$async$blG)
case 6:case 4:if(u.c!=null)u.p(new B.d0N(u))
v=A.eh(null,y.v)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$blG,w)},
blH(d){return this.diN(d)},
diN(d){var x=0,w=A.l(y.v),v=this,u,t,s
var $async$blH=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=v.d.e
s=v.r
s.toString
u=s>t?s-1:s+1
v.p(new B.d0O(v,u,t))
v.bhV(u)
s=v.r
x=d.a===0?2:4
break
case 2:s.toString
v.bhV(s)
x=3
break
case 4:s.toString
x=5
return A.c(v.af4(s,C.c8,d),$async$blH)
case 5:case 3:if(v.c!=null)v.p(new B.d0P(v))
return A.j(null,w)}})
return A.k($async$blH,w)},
c3G(){var x,w=this.d
w.toString
x=y.x.a(C.e.gcp(this.e.f)).grl()
x.toString
w.se6(A.ah(x-this.d.d,-1,1))},
del(d){var x,w,v=this
if(v.w>0||v.x>0)return!1
if(d.jF$!==0)return!1
if(!v.gEC())return!1;++v.x
x=y.x.a(C.e.gcp(v.e.f)).grl()
x.toString
if(d instanceof A.of&&v.d.f===0){w=v.d
if(Math.abs(x-w.d)>1){w.bvV(C.k.aT(x))
v.r=v.d.d}v.c3G()}else if(d instanceof A.r1){w=v.d
w.toString
w.bvV(C.k.aT(x))
x=v.d
v.r=x.d
if(x.f===0)v.c3G()}--v.x
return!1},
u(d){var x,w=this,v=w.a,u=w.e
v=v.e
v=v==null?new A.Oh(C.Fp.nV(C.nM)):new A.Oh(C.Fp.nV(v))
x=w.f
x===$&&A.f()
return new A.fi(w.gdek(),A.dp7(x,C.r,u,C.x,null,null,v),null,y.f)}}
var z=a.updateTypes(["~()","K(lK)"])
B.d0M.prototype={
$1(d){var x=null
return A.P(x,x,x,d,!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.btp,x,x,x,x,x,x,x,x,x,x,C.p,x)},
$S:1758}
B.d0N.prototype={
$0(){this.a.bkT()},
$S:0}
B.d0O.prototype={
$0(){var x,w,v=this.a,u=v.f
u===$&&A.f()
u=A.U(u,y.u)
u.$flags=1
v=v.f=u
u=this.b
x=v[u]
w=this.c
v[u]=v[w]
v[w]=x},
$S:0}
B.d0P.prototype={
$0(){this.a.bkT()},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.amW.prototype,"gEV","byv",0)
w(v,"gdek","del",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Cf,A.J)
x(B.amW,A.R)
x(B.d0M,A.bx)
w(A.bw,[B.d0N,B.d0O,B.d0P])})()
A.aU(b.typeUniverse,JSON.parse('{"Cf":{"J":[],"m":[]},"amW":{"R":["Cf"]}}'))
var y={l:A.A("v<m>"),f:A.A("fi<lK>"),e:A.A("W<G>"),u:A.A("m"),x:A.A("w9"),v:A.A("~")}};
(a=>{a["Qf8mpcQP5TR4qXYUndUaJKhGXgE="]=a.current})($__dart_deferred_initializers__);