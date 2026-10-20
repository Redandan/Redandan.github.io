((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
xd(d,e,f){return new B.Ej(e,d,f,null)},
Ej:function Ej(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ask:function ask(){var _=this
_.e=_.d=null
_.f=$
_.r=null
_.x=_.w=0
_.c=_.a=null},
dty:function dty(){},
dtz:function dtz(d){this.a=d},
dtA:function dtA(d,e,f){this.a=d
this.b=e
this.c=f},
dtB:function dtB(d){this.a=d},
exa(d){var x,w,v,u,t,s,r,q,p,o
if(d.length===0)return d
x=A.a([],y.l)
for(w=A.ewD(d,0,y.u),v=J.aZ(w.a),u=w.b,w=new A.Z9(v,u,A.E(w).k("Z9<1>")),t=y.e;w.G();){s=w.c
s=s>=0?new A.bd(u+s,v.gR()):A.W(A.eW())
r=s.a
q=null
p=s.b
q=p
o=r
s=q.a
x.push(new A.ms(q,new A.K(s==null?o:s,t)))}return x}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[281],B)
B.Ej.prototype={
P(){return new B.ask()}}
B.ask.prototype={
gKT(){var x=this.d
return(x==null?null:x.gi0())!=null},
avj(){var x=this,w=x.a.c,v=x.d
if(w===v)return
if(x.gKT())v.gi0().T(x.gLe())
x.d=w
v=w.gi0()
v.dO()
v.de$.I(0,x.gLe())},
btJ(d){++this.w
this.e.bBU(d);--this.w},
apx(d,e,f){return this.cQz(d,e,f)},
cQz(d,e,f){var x=0,w=A.l(y.v),v=this
var $async$apx=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:++v.w
x=2
return A.c(v.e.Fi(d,e,f),$async$apx)
case 2:--v.w
return A.j(null,w)}})
return A.k($async$apx,w)},
X(){this.a6()
this.bxn()},
aZ(){var x,w,v=this
v.by()
v.avj()
x=v.r=v.d.d
w=v.e
if(w==null){v.a.toString
v.e=A.R5(x,1)}else w.bBU(x)},
aT(d){var x,w=this
w.b_(d)
if(w.a.c!==d.c){w.avj()
x=w.d.d
w.r=x
w.btJ(x)}x=w.a
if(x.d!==d.d&&w.w===0)w.bxn()},
q(){var x,w=this
if(w.gKT())w.d.gi0().T(w.gLe())
w.d=null
x=w.e
if(x!=null)x.q()
w.a5()},
bxn(){var x=this.a.d,w=A.V(x).k("C<1,m>")
x=A.T(new A.C(x,new B.dty(),w),w.k("aj.E"))
this.f=B.exa(x)},
bMx(){var x,w=this
if(w.x>0||w.d.f===0)return
x=w.d.d
if(x!==w.r){w.r=x
w.dId()}},
dId(){var x,w,v,u=this
if(u.c!=null){x=y.x.a(C.d.gdt(u.e.f)).gni()
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
if(Math.abs(x-v)===1)u.byd(w)
else u.bye(w)},
byd(d){return this.dIc(d)},
dIc(d){var x=0,w=A.l(y.v),v,u=this,t
var $async$byd=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=u.r
x=d.a===0?3:5
break
case 3:t.toString
u.btJ(t)
x=4
break
case 5:t.toString
x=6
return A.c(u.apx(t,C.ci,d),$async$byd)
case 6:case 4:if(u.c!=null)u.n(new B.dtz(u))
v=A.de(null,y.v)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$byd,w)},
bye(d){return this.dIe(d)},
dIe(d){var x=0,w=A.l(y.v),v=this,u,t,s
var $async$bye=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:t=v.d.e
s=v.r
s.toString
u=s>t?s-1:s+1
v.n(new B.dtA(v,u,t))
v.btJ(u)
s=v.r
x=d.a===0?2:4
break
case 2:s.toString
v.btJ(s)
x=3
break
case 4:s.toString
x=5
return A.c(v.apx(s,C.ci,d),$async$bye)
case 5:case 3:if(v.c!=null)v.n(new B.dtB(v))
return A.j(null,w)}})
return A.k($async$bye,w)},
ckR(){var x,w=this.d
w.toString
x=y.x.a(C.d.gdt(this.e.f)).gni()
x.toString
w.sfY(A.an(x-this.d.d,-1,1))},
dDC(d){var x,w,v=this
if(v.w>0||v.x>0)return!1
if(d.m5$!==0)return!1
if(!v.gKT())return!1;++v.x
x=y.x.a(C.d.gdt(v.e.f)).gni()
x.toString
if(d instanceof A.pt&&v.d.f===0){w=v.d
if(Math.abs(x-w.d)>1){w.bJA(C.k.b7(x))
v.r=v.d.d}v.ckR()}else if(d instanceof A.ts){w=v.d
w.toString
w.bJA(C.k.b7(x))
x=v.d
v.r=x.d
if(x.f===0)v.ckR()}--v.x
return!1},
u(d){var x,w=this,v=w.a,u=w.e
v=v.e
v=v==null?new A.R6(C.H6.rp(C.oD)):new A.R6(C.H6.rp(v))
x=w.f
x===$&&A.e()
return new A.fS(w.gdDB(),A.dWM(x,C.q,u,C.w,null,null,v),null,y.f)}}
var z=a.updateTypes(["~()","D(mD)"])
B.dty.prototype={
$1(d){var x=null
return A.R(x,x,x,d,!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.bzP,x,x,x,x,x,x,x,x,x,x,C.p,x)},
$S:1940}
B.dtz.prototype={
$0(){this.a.bxn()},
$S:0}
B.dtA.prototype={
$0(){var x,w,v=this.a,u=v.f
u===$&&A.e()
u=A.T(u,y.u)
u.$flags=1
v=v.f=u
u=this.b
x=v[u]
w=this.c
v[u]=v[w]
v[w]=x},
$S:0}
B.dtB.prototype={
$0(){this.a.bxn()},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ask.prototype,"gLe","bMx",0)
w(v,"gdDB","dDC",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ej,A.L)
x(B.ask,A.U)
x(B.dty,A.bt)
w(A.bs,[B.dtz,B.dtA,B.dtB])})()
A.aY(b.typeUniverse,JSON.parse('{"Ej":{"L":[],"m":[]},"ask":{"U":["Ej"]}}'))
var y={l:A.F("v<m>"),f:A.F("fS<mD>"),e:A.F("K<A>"),u:A.F("m"),x:A.F("xH"),v:A.F("~")}};
(a=>{a["ryokbHEoKAsFM1/4I/L2HToKz7g="]=a.current})($__dart_deferred_initializers__);