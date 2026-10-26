((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,G,F,H,B={VP:function VP(d,e){this.a=d
this.b=e},a4A:function a4A(){},cnI:function cnI(d){this.a=d},
eRA(d,e,f){var x,w,v=d==null,u=v?null:d.b
if(v)x=null
else{w=d.c
d.c=null
x=w}v=v?null:d.a
x=new B.aWy(f,e,u,v,x,C.agC,$.aa())
x.cSx(d,e,f)
return x},
aWy:function aWy(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=$
_.Q=h
_.ax=_.at=_.as=null
_.cx=_.CW=_.ch=_.ay=!1
_.cy=0
_.db=i
_.dx=!1
_.k4$=0
_.ok$=j
_.p2$=_.p1$=0},
arc:function arc(d,e){this.a=d
this.b=e},
afr:function afr(d){this.a=d},
arb:function arb(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
d33:function d33(d){this.a=d},
d34:function d34(d){this.a=d},
d35:function d35(d,e){this.a=d
this.b=e},
d36:function d36(d){this.a=d},
d32:function d32(d){this.a=d},
eJw(){return new B.Ss(null)},
Ss:function Ss(d){this.a=d},
alA:function alA(d){this.a=d},
awo:function awo(d,e){var _=this
_.d=d
_.e=e
_.f=$
_.x=_.w=_.r=null
_.y=!1
_.z=!0
_.c=_.a=null},
dM2:function dM2(d){this.a=d},
dLX:function dLX(){},
dLY:function dLY(d){this.a=d},
dLZ:function dLZ(){},
dM_:function dM_(d){this.a=d},
dM0:function dM0(d){this.a=d},
dM1:function dM1(d,e){this.a=d
this.b=e},
f92(){var x,w,v
if(!A.dWG())return null
try{w=b.G.__AGORA_TAKE_WEB_SESSION_OAUTH__
x=w==null?null:w.call()
if(x==null)return null
w=E.emV(A.bb(x),!1)
return w}catch(v){w=E.aWx()
return w}}},C,E,I,K
J=c[1]
A=c[0]
D=c[2]
G=c[310]
F=c[311]
H=c[301]
B=a.updateHolder(c[50],B)
C=c[307]
E=c[111]
I=c[308]
K=c[309]
B.VP.prototype={
W(){return"WebSessionOAuthReturnState."+this.b}}
B.a4A.prototype={
cSx(d,e,f){var x,w=this,v=w.r
w.z!==$&&A.aK()
w.z=new A.VM(v,new B.cnI(w))
x=w.gcqT()
v.r.at.H(0,x)
v.a4(x)},
gG4(){var x,w=this,v=!1
if(!w.cx&&!w.CW&&w.w.$0()){x=w.as
if((x==null?null:x.f)!=null){if(w.at!==w.r.r.CW){v=w.z
v===$&&A.e()
v=v.gctz()}else v=!0
v=v&&w.db!==C.KY}}return v},
gcwV(){var x=this,w=!1
if(!x.cx&&!x.CW&&x.w.$0())if(x.db===C.KY){w=x.r.r
w=x.at===w.CW&&x.ax==w.ay&&w.gdU()!=null}return w},
dNx(){var x,w=this,v=!1
if(!w.ch){x=w.at
if(x!=null)if(x===w.r.r.CW){if(w.db===C.vy){v=w.z
v===$&&A.e()
v=!v.gM()}}else v=!0}if(v){w.Q=null
w.db=C.j_
if(!w.cx)w.R()}},
cw(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$cw=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.ay)n=!(!r.cx&&!r.CW&&r.w.$0())
else n=!0
if(n){x=1
break}r.ch=r.ay=!0
u=4
n=r.r.r
q=n.CW
x=7
return A.c(n.d.dj(),$async$cw)
case 7:p=e
if(!(!r.cx&&!r.CW&&r.w.$0())||!J.p(q,n.CW)){r.Q=null
r.db=C.j_
s=[1]
x=5
break}n=p
o=n==null?null:n.f
n=o
m=!1
if((n==null?null:n.b)==="OAUTH"){n=p
if((n==null?null:n.e)==null){n=p
n=(n==null?null:n.r)==null}else n=m}else n=m
if(n){r.as=p
r.at=q}n=!0
if(r.as!=null)if(r.y===I.agA){n=o
n=n==null?null:n.w
n=r.x!=n||r.Q==null}if(n){r.Q=null
r.db=C.j_
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
r.Q=null
r.db=C.j_
s=[1]
x=5
break
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
r.ch=!1
if(!r.cx)r.R()
x=s.pop()
break
case 6:x=!r.cx&&!r.CW&&r.w.$0()&&r.Q!=null?8:9
break
case 8:x=10
return A.c(r.dNy(),$async$cw)
case 10:case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cw,w)},
brg(d){return this.cLc(d)},
cLc(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$brg=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!(!u.cx&&!u.CW&&u.w.$0())||u.ch||u.db!==C.vy){x=1
break}t=A.az("^[0-9]{6}$",!0,!1,!1,!1)
if(!t.b.test(d)){u.dx=!0
if(!u.cx)u.R()
x=1
break}x=3
return A.c(u.awN(d),$async$brg)
case 3:case 1:return A.j(v,w)}})
return A.k($async$brg,w)},
awN(d){return this.dHO(d)},
dNy(){return this.awN(null)},
dHO(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$awN=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=r.Q
if(!(!r.cx&&!r.CW&&r.w.$0())||r.ch||j==null||r.x==null){x=1
break}q=++r.cy
r.ch=!0
r.db=C.agC
if(!r.cx)r.R()
u=4
n=r.r
m=r.x
if(m==null)m=A.bb(m)
l=r.z
l===$&&A.e()
x=7
return A.c(n.aLL(j,m,l,d),$async$awN)
case 7:if(!J.p(q,r.cy)){s=[1]
x=5
break}if(!(!r.cx&&!r.CW&&r.w.$0())||!l.gM()){r.Q=null
r.db=C.j_
s=[1]
x=5
break}r.Q=null
n=n.r
r.at=n.CW
r.ax=n.ay
r.db=C.KY
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
n=A.u(i)
if(n instanceof A.Nj){p=n
if(!J.p(q,r.cy)){s=[1]
x=5
break}if(!r.cx&&!r.CW&&r.w.$0()){n=r.z
n===$&&A.e()
n=!n.gM()}else n=!0
if(n){r.Q=null
r.db=C.j_
s=[1]
x=5
break}n=r.r
r.at=n.r.CW
o=p.b
m=!1
if(n.gyt()){n=n.gle()
n=n==null?null:n.a
l=r.as
if(l==null)l=null
else{l=l.f
l=l==null?null:l.a}if(n==l)n=J.p(o,D.qY)||J.p(o,D.lb)
else n=m}else n=m
if(n){r.db=C.vy
r.dx=J.p(o,D.lb)}else{r.Q=null
r.db=C.j_}}else if(J.p(q,r.cy)){r.Q=null
r.db=C.j_}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(!(!r.cx&&!r.CW&&r.w.$0()))r.Q=null
if(J.p(q,r.cy)){r.ch=!1
if(!r.cx)r.R()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$awN,w)},
a7(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$a7=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.gG4()){x=1
break}q=++r.cy
r.Q=null
r.ch=!0
if(!r.cx)r.R()
u=4
p=r.r
o=r.as
n=r.z
n===$&&A.e()
x=7
return A.c(p.yv(o,n),$async$a7)
case 7:if(J.p(q,r.cy))o=!(!r.cx&&!r.CW&&r.w.$0())||!n.gM()
else o=!0
if(o){s=[1]
x=5
break}r.as=null
r.at=p.r.CW
r.db=C.agD
s.push(6)
x=5
break
case 4:u=3
l=t.pop()
if(J.p(q,r.cy))r.db=C.j_
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(J.p(q,r.cy)){r.ch=!1
if(!r.cx)r.R()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a7,w)},
w3(){var x,w=this
if(w.CW)return
w.CW=!0;++w.cy
w.Q=null
x=w.z
x===$&&A.e()
x.bc9()
w.ch=!1
w.db=C.j_
if(!w.cx)w.R()},
q(){var x,w,v=this
v.cx=!0
v.w3()
x=v.r
w=v.gcqT()
x.T(w)
x.r.at.L(0,w)
v.dS()}}
B.aWy.prototype={}
B.arc.prototype={
W(){return"_OAuth2CallbackViewState."+this.b}}
B.afr.prototype={
O(){return new B.arb(A.b7("OAuth2CallbackPage"),C.ahD)}}
B.arb.prototype={
X(){this.a6()
if(!$.am().ah(y.t))this.LN()},
LN(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$LN=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.n(new B.d33(s))
u=4
o={}
n=s.d
n.m(D.i,"\ud83d\udd04 \u958b\u59cb\u8655\u7406 OAuth2 \u56de\u64a5",null,null)
r=new A.afq(A.b7("OAuth2CallbackHandler"))
o.a=null
g=o
x=7
return A.c(r.e14(),$async$LN)
case 7:m=g.a=e
l=m==null
x=!l&&m.a?8:10
break
case 8:n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] OAuth2 \u56de\u8c03\u5904\u7406\u6210\u529f",null,null)
o=m.b
l=o==null
k=l?null:o.c.length!==0
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] userIdPresent="+(k===!0),null,null)
l=l?null:o.b.length!==0
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] rolePresent="+(l===!0),null,null)
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] Token present: "+(o.a.length!==0),null,null)
x=s.c==null?11:13
break
case 11:n.m(D.t,"\u26a0\ufe0f [OAUTH2_CALLBACK_PAGE] Widget \u5df2\u5378\u8f7d\uff0c\u65e0\u6cd5\u5bfc\u822a",null,null)
x=12
break
case 13:j=o.b
q=j===null?"USER":j
n.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] \u8df3\u8f49\u524d\u9a57\u8b49\u72c0\u614b",null,null)
x=14
return A.c(s.B7(),$async$LN)
case 14:if(s.c==null){x=1
break}s.n(new B.d34(s))
x=15
return A.c(A.f2(D.x8,null,y.H),$async$LN)
case 15:if(s.c==null){x=1
break}if(q.toUpperCase()==="ADMIN"){n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u7ba1\u7406\u54e1\u9801\u9762",null,null)
o=s.c
o.toString
A.aJ(o,!1).f.hW(0,A.a([D.ro],y.h))
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u7ba1\u7406\u54e1\u9801\u9762\u5c0e\u822a\u5b8c\u6210",null,null)}else{n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u4f7f\u7528\u8005\u4e3b\u9801",null,null)
o=s.c
o.toString
A.aRo(A.aJ(o,!1).f,null)
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u4f7f\u7528\u8005\u4e3b\u9801\u5c0e\u822a\u5b8c\u6210",null,null)}n.m(D.i,"\ud83c\udf89 [OAUTH2_CALLBACK_PAGE] \u5bfc\u822a\u5b8c\u6210",null,null)
case 12:x=9
break
case 10:n.m(D.t,"\u26a0\ufe0f OAuth2 \u56de\u8c03\u672a\u5904\u7406\u6216\u5904\u7406\u5931\u8d25: resultErrorPresent="+((l?null:m.c)!=null),null,null)
if(s.c!=null)s.n(new B.d35(o,s))
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
p=A.u(h)
s.d.m(D.E,"\u274c OAuth2 \u56de\u8c03\u5904\u7406\u5f02\u5e38: errorType="+J.ab(p).l(0),null,null)
if(s.c!=null)s.n(new B.d36(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LN,w)},
B7(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$B7=A.h(function(a5,a6){if(a5===1){u.push(a6)
x=v}for(;;)switch(x){case 0:v=3
f=t.d
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] === \u8df3\u8f49\u524d\u72c0\u614b\u9a57\u8b49 ===",null,null)
v=7
e=$.am()
d=y.r
x=e.ah(d)?10:12
break
case 10:s=e.$1$0(d)
x=13
return A.c(s.wu(),$async$B7)
case 13:r=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager.hasToken: "+A.b(r),null,null)
x=r?14:15
break
case 14:x=16
return A.c(s.iy(),$async$B7)
case 16:q=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager token present: "+(q!=null&&q.length!==0),null,null)
case 15:x=11
break
case 12:f.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager \u672a\u6ce8\u518c",null,null)
case 11:v=3
x=9
break
case 7:v=6
a1=u.pop()
p=A.u(a1)
f.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager \u68c0\u67e5\u5931\u8d25: errorType="+J.ab(p).l(0),null,null)
x=9
break
case 6:x=3
break
case 9:v=18
e=$.am()
d=y.E
x=e.ah(d)?21:23
break
case 21:o=e.$1$0(d)
x=24
return A.c(o.hh(),$async$B7)
case 24:n=a6
x=25
return A.c(o.me(),$async$B7)
case 25:m=a6
x=26
return A.c(o.vg(),$async$B7)
case 26:l=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences token present: "+(n!=null&&n.length!==0),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userIdPresent: "+(m!=null),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userRolePresent: "+(J.aE(l)!==0),null,null)
x=22
break
case 23:f.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences \u672a\u6ce8\u518c",null,null)
case 22:v=3
x=20
break
case 18:v=17
a2=u.pop()
k=A.u(a2)
f.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences \u68c0\u67e5\u5931\u8d25: errorType="+J.ab(k).l(0),null,null)
x=20
break
case 17:x=3
break
case 20:v=28
e=$.am()
d=y.B
x=e.ah(d)?31:33
break
case 31:j=e.$1$0(d)
x=34
return A.c(j.Cr(),$async$B7)
case 34:i=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UnifiedAuthManager.isLoggedIn: "+A.b(i),null,null)
x=32
break
case 33:f.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UnifiedAuthManager \u672a\u6ce8\u518c",null,null)
case 32:v=3
x=30
break
case 28:v=27
a3=u.pop()
h=A.u(a3)
f.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UnifiedAuthManager \u68c0\u67e5\u5931\u8d25: errorType="+J.ab(h).l(0),null,null)
x=30
break
case 27:x=3
break
case 30:f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] === \u72c0\u614b\u9a57\u8b49\u5b8c\u6210 ===",null,null)
v=1
x=5
break
case 3:v=2
a4=u.pop()
g=A.u(a4)
t.d.m(D.t,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] \u72c0\u614b\u9a57\u8b49\u7570\u5e38: errorType="+J.ab(g).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$B7,w)},
u(d){var x,w=null,v=$.am(),u=y.t
if(v.ah(u)){if(E.es1())return C.agi
if(!A.dWG())try{if(E.yv(v.$1$0(u)).qS()!=null)return C.c8n}catch(x){return C.agi}return C.c8s}return A.bN(w,w,A.aM(new A.J(D.aU,new A.ba(K.Nc,A.Yv(this.cZP(d,A.t(d)),C.aKw,w,A.a82(),D.aK,D.aK,A.ayM()),w),w),w,w,w),w,w,w,w,C.c3y)},
cZP(d,e){var x,w,v=null,u=y.J,t=A.f(d,D.c,u)
t.toString
switch(this.e.a){case 0:return new A.d7(G.xU,t.gb24(),t.gRy(),v,v,F.o9,D.aT,C.c3w)
case 1:return new A.d7(H.cX,t.gb26(),t.ga7R(),e.ax.b,v,F.o9,D.aT,C.c3z)
case 2:x=t.gb23()
w=this.f
if(w==null)w=t.gb22()
return new A.d7(D.bf,x,w,e.ax.fy,v,v,A.a([A.bJ(D.tS,C.c3u,A.d(A.f(d,D.c,u).gFY(),v,v,v,v,v,v,v,v,v),new B.d32(d),v),A.cf(D.b7,C.c3x,A.d(t.gb25(),v,v,v,v,v,v,v,v,v),this.gddx(),v)],y.p),C.c3v)}}}
B.Ss.prototype={
u(d){return C.bnp}}
B.alA.prototype={
O(){return new B.awo(new A.al(D.L,$.aa()),new A.be(null,y.w))},
c1s(){return B.f9E().$0()}}
B.awo.prototype={
Nl(){var x,w=this,v=!1
if(w.c!=null)if(w.z)if(!w.y){x=w.r
x=x==null?null:x.jE(!0).gP().a.Q
if(x==w.w)if(!w.r.cy.a){v=w.c
v.toString
v=A.ce(v,null,y.X)
v=v==null?null:v.gM()
v=v!==!1}}return v},
X(){var x,w=this
w.a6()
x=$.am().$1$0(y.e)
x=B.eRA(w.a.c1s(),w.gdNr(),x)
x.a4(w.gcqR())
w.f!==$&&A.aK()
w.f=x
$.ah.y2$.push(new B.dM2(w))},
b0(){var x,w=this
w.by()
if(w.r==null){x=w.c
x.toString
w.r=A.aJ(x,!1).f.gkZ()
w.w=w.c.iI(y.u).f.a.Q
w.r.a4(w.gcqS())}if(!w.Nl()){w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w3()}},
dNw(){if(!this.Nl()){this.d.sC(D.a_)
var x=this.f
x===$&&A.e()
x.w3()}},
dNt(){this.d.sC(D.a_)
var x=this.f
x===$&&A.e()
x.w3()},
dNq(){var x,w=this
if(w.c==null||!w.z)return
x=w.f
x===$&&A.e()
if(x.db!==C.vy)w.d.sC(D.a_)
w.n(new B.dLX())
if(x.gcwV())$.ah.y2$.push(new B.dLY(w))},
dNv(){var x,w=this
if(!w.Nl())return
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w3()
w.y=!0
x=w.c
x.toString
A.aJ(x,!1).f.hW(0,A.a([A.e6C(null,null)],y.h))},
dFZ(){var x,w=this
if(!w.Nl())return
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w3()
w.y=!0
x=w.c
x.toString
A.aJ(x,!1).f.hW(0,A.a([D.cS],y.h))},
i1(){var x,w=this
w.z=!1
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w3()
w.nc()},
cf(){this.z=!0
this.dg()},
q(){var x=this,w=x.r
if(w!=null)w.T(x.gcqS())
w=x.x
if(w!=null)w.$0()
w=x.f
w===$&&A.e()
w.T(x.gcqR())
w.q()
w=x.d
w.ok$=$.aa()
w.k4$=0
x.a5()},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.f(d,D.c,y.J)
n.toString
x=p.f
x===$&&A.e()
w=x.db
v=w===C.vy
switch(w.a){case 0:n=n.gRy()
break
case 1:n=x.dx?n.gq0():n.gvo()
break
case 2:n=n.ga7R()
break
case 4:n=n.gDK()
break
case 3:n=n.gvp()
break
default:n=o}u=x.ch
t=v?A.fL(o,new A.VJ(!0,!1,p.d,new B.dLZ(),o),p.e):o
s=v?new B.dM_(p):o
x=x.gG4()?new B.dM0(p):o
r=w===C.j_?p.gdNu():o
q=w===C.agD?p.gdFY():o
return A.co2(u,o,!0,o,n,new B.dM1(p,d),x,s,o,r,q,t,o)}}
var z=a.updateTypes(["~()","A<~>()","E()","Nl?()"])
B.cnI.prototype={
$0(){var x=this.a
return!x.cx&&!x.CW&&x.w.$0()},
$S:1}
B.d33.prototype={
$0(){var x=this.a
x.e=C.ahD
x.f=null},
$S:0}
B.d34.prototype={
$0(){this.a.e=C.ce0},
$S:0}
B.d35.prototype={
$0(){var x,w,v=this.b
v.e=C.ahE
x=this.a.a
w=x==null
if((w?null:x.e)!=null)x=null
else x=w?null:x.c
v.f=x},
$S:0}
B.d36.prototype={
$0(){var x=this.a
x.e=C.ahE
x.f="An error occurred while processing the sign-in callback. Please sign in again."},
$S:0}
B.d32.prototype={
$0(){A.aJ(this.a,!1).f.hW(0,A.a([D.cS],y.h))},
$S:0}
B.dM2.prototype={
$1(d){var x=this.a
if(x.c==null)return
$.uH().a7Q()
x.x=A.az5(x.gdNs())
x=x.f
x===$&&A.e()
x.cw()},
$S:2}
B.dLX.prototype={
$0(){},
$S:0}
B.dLY.prototype={
$1(d){var x,w,v=this.a
if(v.Nl()){x=v.f
x===$&&A.e()
x=!x.gcwV()}else x=!0
if(x)return
x=$.am()
w=y.k
if(x.ah(w))x.$1$0(w).BE()
v.y=!0
v=v.c
v.toString
A.aJ(v,!1).f.hW(0,A.a([A.i0(null,null)],y.h))},
$S:2}
B.dLZ.prototype={
$1(d){},
$S:15}
B.dM_.prototype={
$0(){var x,w=this.a,v=w.e.gaj()
if((v==null?null:v.eU())!==!0)return
v=w.d
x=v.a.a
v.sC(D.a_)
w=w.f
w===$&&A.e()
w.brg(x)},
$S:0}
B.dM0.prototype={
$0(){var x=this.a.f
x===$&&A.e()
x.a7()
return null},
$S:0}
B.dM1.prototype={
$0(){var x,w=this.a
if(!w.Nl())return
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w3()
w.y=!0
A.aJ(this.b,!1).f.hW(0,A.a([A.i0(null,null)],y.h))},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=B.a4A.prototype,"gcqT","dNx",0)
x(v,"gdB","q",0)
x(B.arb.prototype,"gddx","LN",1)
x(v=B.awo.prototype,"gdNr","Nl",2)
x(v,"gcqS","dNw",0)
x(v,"gdNs","dNt",0)
x(v,"gcqR","dNq",0)
x(v,"gdNu","dNv",0)
x(v,"gdFY","dFZ",0)
w(B,"f9E","f92",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.eD,[B.VP,B.arc])
w(B.a4A,A.a0q)
x(A.bu,[B.cnI,B.d33,B.d34,B.d35,B.d36,B.d32,B.dLX,B.dM_,B.dM0,B.dM1])
w(B.aWy,B.a4A)
x(A.K,[B.afr,B.alA])
x(A.Q,[B.arb,B.awo])
w(B.Ss,A.x)
x(A.bt,[B.dM2,B.dLY,B.dLZ])})()
A.b1(b.typeUniverse,JSON.parse('{"a4A":{"aX":[]},"aWy":{"aX":[]},"afr":{"K":[],"m":[]},"arb":{"Q":["afr"]},"Ss":{"x":[],"m":[]},"alA":{"K":[],"m":[]},"awo":{"Q":["alA"]}}'))
A.mi(b.typeUniverse,JSON.parse('{"a4A":1}'))
var y=(function rtii(){var x=A.D
return{J:x("bv"),k:x("zf"),h:x("v<bV<B?>>"),p:x("v<m>"),w:x("be<iB>"),u:x("vV"),r:x("fp"),B:x("FS"),E:x("ee"),O:x("H<n>"),t:x("Nh"),e:x("Gd"),X:x("B?"),H:x("~")}})();(function constants(){C.aKw=new A.bF(22e4)
C.bnp=new B.afr(null)
C.c3u=new A.H("oauthCallbackBackToLoginButton",y.O)
C.c3v=new A.H("oauthCallbackFailureState",y.O)
C.c3w=new A.H("oauthCallbackLoadingState",y.O)
C.c3x=new A.H("oauthCallbackRetryButton",y.O)
C.c3y=new A.H("oauthCallbackScaffold",y.O)
C.c3z=new A.H("oauthCallbackSuccessState",y.O)
C.c8n=new E.G2(null,!1,null,null)
C.agi=new E.G2(null,!0,null,null)
C.c8s=new B.alA(null)
C.agC=new B.VP(0,"processing")
C.vy=new B.VP(1,"twoFactor")
C.KY=new B.VP(2,"authenticated")
C.j_=new B.VP(3,"recovery")
C.agD=new B.VP(4,"cancelled")
C.ahD=new B.arc(0,"processing")
C.ce0=new B.arc(1,"success")
C.ahE=new B.arc(2,"failure")})()};
(a=>{a["40ITdsSLQIZ8dosGhwzGDk7VYbY="]=a.current})($__dart_deferred_initializers__);