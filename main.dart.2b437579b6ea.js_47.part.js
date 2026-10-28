((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,H,G,I,B={RH:function RH(d,e){this.a=d
this.b=e},a03:function a03(){},c4Q:function c4Q(d){this.a=d},
edr(d,e,f){var x,w,v=d==null,u=v?null:d.b
if(v)x=null
else{w=d.c
d.c=null
x=w}v=v?null:d.a
x=new B.aNi(f,e,u,v,x,C.abW,$.aa())
x.cn5(d,e,f)
return x},
aNi:function aNi(d,e,f,g,h,i,j){var _=this
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
al_:function al_(d,e){this.a=d
this.b=e},
aa8:function aa8(d){this.a=d},
akZ:function akZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
cFQ:function cFQ(d){this.a=d},
cFR:function cFR(d){this.a=d},
cFS:function cFS(d,e){this.a=d
this.b=e},
cFT:function cFT(d){this.a=d},
cFP:function cFP(d){this.a=d},
e6k(){return new B.OC(null)},
OC:function OC(d){this.a=d},
afK:function afK(d){this.a=d},
aps:function aps(d,e){var _=this
_.d=d
_.e=e
_.f=$
_.x=_.w=_.r=null
_.y=!1
_.z=!0
_.c=_.a=null},
ddi:function ddi(d){this.a=d},
ddc:function ddc(){},
ddd:function ddd(d){this.a=d},
dde:function dde(){},
ddf:function ddf(d){this.a=d},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d,e){this.a=d
this.b=e},
euv(){var x,w,v
if(!A.dnl())return null
try{w=b.G.__AGORA_TAKE_WEB_SESSION_OAUTH__
x=w==null?null:w.call()
if(x==null)return null
w=E.dM6(A.bu(x),!1)
return w}catch(v){w=E.aNh()
return w}}},C,E,K
J=c[1]
A=c[0]
D=c[2]
F=c[251]
H=c[279]
G=c[280]
I=c[269]
B=a.updateHolder(c[40],B)
C=c[277]
E=c[84]
K=c[278]
B.RH.prototype={
T(){return"WebSessionOAuthReturnState."+this.b}}
B.a03.prototype={
cn5(d,e,f){var x,w=this,v=w.r
w.z!==$&&A.aW()
w.z=new A.RE(v,new B.c4Q(w))
x=w.gbZ4()
v.r.at.G(0,x)
v.a4(x)},
gD0(){var x,w=this,v=!1
if(!w.cx&&!w.CW&&w.w.$0()){x=w.as
if((x==null?null:x.f)!=null){if(w.at!==w.r.r.CW){v=w.z
v===$&&A.e()
v=v.gc0C()}else v=!0
v=v&&w.db!==C.Ib}}return v},
gc3T(){var x=this,w=!1
if(!x.cx&&!x.CW&&x.w.$0())if(x.db===C.Ib){w=x.r.r
w=x.at===w.CW&&x.ax==w.ay&&w.gdQ()!=null}return w},
dat(){var x,w=this,v=!1
if(!w.ch){x=w.at
if(x!=null)if(x===w.r.r.CW){if(w.db===C.tJ){v=w.z
v===$&&A.e()
v=!v.gX()}}else v=!0}if(v){w.Q=null
w.db=C.hP
if(!w.cx)w.N()}},
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
return A.c(n.d.dr(),$async$cw)
case 7:p=e
if(!(!r.cx&&!r.CW&&r.w.$0())||!J.p(q,n.CW)){r.Q=null
r.db=C.hP
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
if(r.as!=null)if(r.y===K.abU){n=o
n=n==null?null:n.w
n=r.x!=n||r.Q==null}if(n){r.Q=null
r.db=C.hP
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
r.Q=null
r.db=C.hP
s=[1]
x=5
break
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
r.ch=!1
if(!r.cx)r.N()
x=s.pop()
break
case 6:x=!r.cx&&!r.CW&&r.w.$0()&&r.Q!=null?8:9
break
case 8:x=10
return A.c(r.dau(),$async$cw)
case 10:case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cw,w)},
b5h(d){return this.cgg(d)},
cgg(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$b5h=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!(!u.cx&&!u.CW&&u.w.$0())||u.ch||u.db!==C.tJ){x=1
break}t=A.aw("^[0-9]{6}$",!0,!1,!1,!1)
if(!t.b.test(d)){u.dx=!0
if(!u.cx)u.N()
x=1
break}x=3
return A.c(u.alh(d),$async$b5h)
case 3:case 1:return A.j(v,w)}})
return A.k($async$b5h,w)},
alh(d){return this.d5u(d)},
dau(){return this.alh(null)},
d5u(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$alh=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=r.Q
if(!(!r.cx&&!r.CW&&r.w.$0())||r.ch||j==null||r.x==null){x=1
break}q=++r.cy
r.ch=!0
r.db=C.abW
if(!r.cx)r.N()
u=4
n=r.r
m=r.x
if(m==null)m=A.bu(m)
l=r.z
l===$&&A.e()
x=7
return A.c(n.ax1(j,m,l,d),$async$alh)
case 7:if(!J.p(q,r.cy)){s=[1]
x=5
break}if(!(!r.cx&&!r.CW&&r.w.$0())||!l.gX()){r.Q=null
r.db=C.hP
s=[1]
x=5
break}r.Q=null
n=n.r
r.at=n.CW
r.ax=n.ay
r.db=C.Ib
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
n=A.u(i)
if(n instanceof A.JF){p=n
if(!J.p(q,r.cy)){s=[1]
x=5
break}if(!r.cx&&!r.CW&&r.w.$0()){n=r.z
n===$&&A.e()
n=!n.gX()}else n=!0
if(n){r.Q=null
r.db=C.hP
s=[1]
x=5
break}n=r.r
r.at=n.r.CW
o=p.b
m=!1
if(n.gww()){n=n.gkI()
n=n==null?null:n.a
l=r.as
if(l==null)l=null
else{l=l.f
l=l==null?null:l.a}if(n==l)n=J.p(o,D.py)||J.p(o,D.jV)
else n=m}else n=m
if(n){r.db=C.tJ
r.dx=J.p(o,D.jV)}else{r.Q=null
r.db=C.hP}}else if(J.p(q,r.cy)){r.Q=null
r.db=C.hP}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(!(!r.cx&&!r.CW&&r.w.$0()))r.Q=null
if(J.p(q,r.cy)){r.ch=!1
if(!r.cx)r.N()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$alh,w)},
a5(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$a5=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.gD0()){x=1
break}q=++r.cy
r.Q=null
r.ch=!0
if(!r.cx)r.N()
u=4
p=r.r
o=r.as
n=r.z
n===$&&A.e()
x=7
return A.c(p.wy(o,n),$async$a5)
case 7:if(J.p(q,r.cy))o=!(!r.cx&&!r.CW&&r.w.$0())||!n.gX()
else o=!0
if(o){s=[1]
x=5
break}r.as=null
r.at=p.r.CW
r.db=C.abX
s.push(6)
x=5
break
case 4:u=3
l=t.pop()
if(J.p(q,r.cy))r.db=C.hP
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(J.p(q,r.cy)){r.ch=!1
if(!r.cx)r.N()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a5,w)},
um(){var x,w=this
if(w.CW)return
w.CW=!0;++w.cy
w.Q=null
x=w.z
x===$&&A.e()
x.aSR()
w.ch=!1
w.db=C.hP
if(!w.cx)w.N()},
q(){var x,w,v=this
v.cx=!0
v.um()
x=v.r
w=v.gbZ4()
x.S(w)
x.r.at.M(0,w)
v.e2()}}
B.aNi.prototype={}
B.al_.prototype={
T(){return"_OAuth2CallbackViewState."+this.b}}
B.aa8.prototype={
R(){return new B.akZ(A.b4("OAuth2CallbackPage"),C.acT)}}
B.akZ.prototype={
Y(){this.a9()
if(!$.ap().ar(y.t))this.HR()},
HR(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$HR=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.p(new B.cFQ(s))
u=4
o={}
n=s.d
n.m(D.i,"\ud83d\udd04 \u958b\u59cb\u8655\u7406 OAuth2 \u56de\u64a5",null,null)
r=new A.aa7(A.b4("OAuth2CallbackHandler"))
o.a=null
g=o
x=7
return A.c(r.do9(),$async$HR)
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
case 11:n.m(D.q,"\u26a0\ufe0f [OAUTH2_CALLBACK_PAGE] Widget \u5df2\u5378\u8f7d\uff0c\u65e0\u6cd5\u5bfc\u822a",null,null)
x=12
break
case 13:j=o.b
q=j===null?"USER":j
n.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] \u8df3\u8f49\u524d\u9a57\u8b49\u72c0\u614b",null,null)
x=14
return A.c(s.yQ(),$async$HR)
case 14:if(s.c==null){x=1
break}s.p(new B.cFR(s))
x=15
return A.c(A.f0(D.vf,null,y.H),$async$HR)
case 15:if(s.c==null){x=1
break}if(q.toUpperCase()==="ADMIN"){n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u7ba1\u7406\u54e1\u9801\u9762",null,null)
o=s.c
o.toString
A.bp(o,!1).f.ku(0,A.a([D.pZ],y.h))
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u7ba1\u7406\u54e1\u9801\u9762\u5c0e\u822a\u5b8c\u6210",null,null)}else{n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u4f7f\u7528\u8005\u4e3b\u9801",null,null)
o=s.c
o.toString
A.aIx(A.bp(o,!1).f,null)
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u4f7f\u7528\u8005\u4e3b\u9801\u5c0e\u822a\u5b8c\u6210",null,null)}n.m(D.i,"\ud83c\udf89 [OAUTH2_CALLBACK_PAGE] \u5bfc\u822a\u5b8c\u6210",null,null)
case 12:x=9
break
case 10:n.m(D.q,"\u26a0\ufe0f OAuth2 \u56de\u8c03\u672a\u5904\u7406\u6216\u5904\u7406\u5931\u8d25: resultErrorPresent="+((l?null:m.c)!=null),null,null)
if(s.c!=null)s.p(new B.cFS(o,s))
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
p=A.u(h)
s.d.m(D.z,"\u274c OAuth2 \u56de\u8c03\u5904\u7406\u5f02\u5e38: errorType="+J.a7(p).l(0),null,null)
if(s.c!=null)s.p(new B.cFT(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$HR,w)},
yQ(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$yQ=A.h(function(a5,a6){if(a5===1){u.push(a6)
x=v}for(;;)switch(x){case 0:v=3
f=t.d
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] === \u8df3\u8f49\u524d\u72c0\u614b\u9a57\u8b49 ===",null,null)
v=7
e=$.ap()
d=y.r
x=e.ar(d)?10:12
break
case 10:s=e.$1$0(d)
x=13
return A.c(s.uR(),$async$yQ)
case 13:r=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager.hasToken: "+A.b(r),null,null)
x=r?14:15
break
case 14:x=16
return A.c(s.lW(),$async$yQ)
case 16:q=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager token present: "+(q!=null&&q.length!==0),null,null)
case 15:x=11
break
case 12:f.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager \u672a\u6ce8\u518c",null,null)
case 11:v=3
x=9
break
case 7:v=6
a1=u.pop()
p=A.u(a1)
f.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager \u68c0\u67e5\u5931\u8d25: errorType="+J.a7(p).l(0),null,null)
x=9
break
case 6:x=3
break
case 9:v=18
e=$.ap()
d=y.E
x=e.ar(d)?21:23
break
case 21:o=e.$1$0(d)
x=24
return A.c(o.hk(),$async$yQ)
case 24:n=a6
x=25
return A.c(o.mq(),$async$yQ)
case 25:m=a6
x=26
return A.c(o.tG(),$async$yQ)
case 26:l=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences token present: "+(n!=null&&n.length!==0),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userIdPresent: "+(m!=null),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userRolePresent: "+(J.aI(l)!==0),null,null)
x=22
break
case 23:f.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences \u672a\u6ce8\u518c",null,null)
case 22:v=3
x=20
break
case 18:v=17
a2=u.pop()
k=A.u(a2)
f.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences \u68c0\u67e5\u5931\u8d25: errorType="+J.a7(k).l(0),null,null)
x=20
break
case 17:x=3
break
case 20:v=28
e=$.ap()
d=y.B
x=e.ar(d)?31:33
break
case 31:j=e.$1$0(d)
x=34
return A.c(j.LS(),$async$yQ)
case 34:i=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UnifiedAuthManager.isLoggedIn: "+A.b(i),null,null)
x=32
break
case 33:f.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UnifiedAuthManager \u672a\u6ce8\u518c",null,null)
case 32:v=3
x=30
break
case 28:v=27
a3=u.pop()
h=A.u(a3)
f.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UnifiedAuthManager \u68c0\u67e5\u5931\u8d25: errorType="+J.a7(h).l(0),null,null)
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
t.d.m(D.q,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] \u72c0\u614b\u9a57\u8b49\u7570\u5e38: errorType="+J.a7(g).l(0),null,null)
x=5
break
case 2:x=1
break
case 5:return A.j(null,w)
case 1:return A.i(u.at(-1),w)}})
return A.k($async$yQ,w)},
u(d){var x,w=null,v=$.ap(),u=y.t
if(v.ar(u)){if(E.dQX())return C.abC
if(!A.dnl())try{if(E.wP(v.$1$0(u)).pG()!=null)return C.bPX}catch(x){return C.abC}return C.bQ1}return A.cU(w,w,A.aY(new A.L(D.b0,new A.bQ(C.ahF,A.asW(this.cth(d,A.t(d)),C.aBy,w,A.b5B(),D.aH,D.aH,A.dlp()),w),w),w,w,w),w,w,w,w,C.bMM)},
cth(d,e){var x,w,v=null,u=y.J,t=A.f(d,D.c,u)
t.toString
switch(this.e.a){case 0:return new F.eA(H.vX,t.gaM1(),t.gMB(),v,v,G.n2,D.b1,C.bMK)
case 1:return new F.eA(I.ey,t.gaM3(),t.gZP(),e.ax.b,v,G.n2,D.b1,C.bMN)
case 2:x=t.gaM0()
w=this.f
if(w==null)w=t.gaM_()
return new F.eA(D.bA,x,w,e.ax.fy,v,v,A.a([A.cq(D.we,C.bMI,A.d(A.f(d,D.c,u).gCV(),v,v,v,v,v,v,v,v,v),new B.cFP(d),v),A.cz(D.bh,C.bML,A.d(t.gaM2(),v,v,v,v,v,v,v,v,v),this.gcFU(),v)],y.p),C.bMJ)}}}
B.OC.prototype={
u(d){return C.bav}}
B.afK.prototype={
R(){return new B.aps(new A.al(D.K,$.aa()),new A.b9(null,y.w))},
bCg(){return B.ev1().$0()}}
B.aps.prototype={
J9(){var x,w=this,v=!1
if(w.c!=null)if(w.z)if(!w.y){x=w.r
x=x==null?null:x.jb(!0).gP().a.Q
if(x==w.w)if(!w.r.cy.a){v=w.c
v.toString
v=A.dy(v,null,y.X)
v=v==null?null:v.gX()
v=v!==!1}}return v},
Y(){var x,w=this
w.a9()
x=$.ap().$1$0(y.e)
x=B.edr(w.a.bCg(),w.gdan(),x)
x.a4(w.gbZ2())
w.f!==$&&A.aW()
w.f=x
$.ao.y2$.push(new B.ddi(w))},
bc(){var x,w=this
w.cf()
if(w.r==null){x=w.c
x.toString
w.r=A.bp(x,!1).f.gl_()
w.w=w.c.ko(y.u).f.a.Q
w.r.a4(w.gbZ3())}if(!w.J9()){w.d.sB(D.a_)
x=w.f
x===$&&A.e()
x.um()}},
das(){if(!this.J9()){this.d.sB(D.a_)
var x=this.f
x===$&&A.e()
x.um()}},
dap(){this.d.sB(D.a_)
var x=this.f
x===$&&A.e()
x.um()},
dam(){var x,w=this
if(w.c==null||!w.z)return
x=w.f
x===$&&A.e()
if(x.db!==C.tJ)w.d.sB(D.a_)
w.p(new B.ddc())
if(x.gc3T())$.ao.y2$.push(new B.ddd(w))},
dar(){var x,w=this
if(!w.J9())return
w.d.sB(D.a_)
x=w.f
x===$&&A.e()
x.um()
w.y=!0
x=w.c
x.toString
A.bp(x,!1).f.ku(0,A.a([A.dxA(null,null)],y.h))},
d3I(){var x,w=this
if(!w.J9())return
w.d.sB(D.a_)
x=w.f
x===$&&A.e()
x.um()
w.y=!0
x=w.c
x.toString
A.bp(x,!1).f.ku(0,A.a([D.da],y.h))},
i7(){var x,w=this
w.z=!1
w.d.sB(D.a_)
x=w.f
x===$&&A.e()
x.um()
w.oS()},
cq(){this.z=!0
this.ds()},
q(){var x=this,w=x.r
if(w!=null)w.S(x.gbZ3())
w=x.x
if(w!=null)w.$0()
w=x.f
w===$&&A.e()
w.S(x.gbZ2())
w.q()
w=x.d
w.ok$=$.aa()
w.k4$=0
x.a7()},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.f(d,D.c,y.J)
n.toString
x=p.f
x===$&&A.e()
w=x.db
v=w===C.tJ
switch(w.a){case 0:n=n.gMB()
break
case 1:n=x.dx?n.goN():n.gtO()
break
case 2:n=n.gZP()
break
case 4:n=n.gB1()
break
case 3:n=n.gtP()
break
default:n=o}u=x.ch
t=v?A.fS(o,new A.RB(!0,!1,p.d,new B.dde(),o),p.e):o
s=v?new B.ddf(p):o
x=x.gD0()?new B.ddg(p):o
r=w===C.hP?p.gdaq():o
q=w===C.abX?p.gd3H():o
return A.c5a(u,o,!0,o,n,new B.ddh(p,d),x,s,o,r,q,t,o)}}
var z=a.updateTypes(["~()","I<~>()","B()","JH?()"])
B.c4Q.prototype={
$0(){var x=this.a
return!x.cx&&!x.CW&&x.w.$0()},
$S:1}
B.cFQ.prototype={
$0(){var x=this.a
x.e=C.acT
x.f=null},
$S:0}
B.cFR.prototype={
$0(){this.a.e=C.bVk},
$S:0}
B.cFS.prototype={
$0(){var x,w,v=this.b
v.e=C.acU
x=this.a.a
w=x==null
if((w?null:x.e)!=null)x=null
else x=w?null:x.c
v.f=x},
$S:0}
B.cFT.prototype={
$0(){var x=this.a
x.e=C.acU
x.f="An error occurred while processing the sign-in callback. Please sign in again."},
$S:0}
B.cFP.prototype={
$0(){A.bp(this.a,!1).f.ku(0,A.a([D.da],y.h))},
$S:0}
B.ddi.prototype={
$1(d){var x=this.a
if(x.c==null)return
$.Aj().bgm()
x.x=A.arI(x.gdao())
x=x.f
x===$&&A.e()
x.cw()},
$S:2}
B.ddc.prototype={
$0(){},
$S:0}
B.ddd.prototype={
$1(d){var x,w,v=this.a
if(v.J9()){x=v.f
x===$&&A.e()
x=!x.gc3T()}else x=!0
if(x)return
x=$.ap()
w=y.k
if(x.ar(w))x.$1$0(w).zk()
v.y=!0
v=v.c
v.toString
A.bp(v,!1).f.ku(0,A.a([A.pf(null)],y.h))},
$S:2}
B.dde.prototype={
$1(d){},
$S:15}
B.ddf.prototype={
$0(){var x,w=this.a,v=w.e.gag()
if((v==null?null:v.eZ())!==!0)return
v=w.d
x=v.a.a
v.sB(D.a_)
w=w.f
w===$&&A.e()
w.b5h(x)},
$S:0}
B.ddg.prototype={
$0(){var x=this.a.f
x===$&&A.e()
x.a5()
return null},
$S:0}
B.ddh.prototype={
$0(){var x,w=this.a
if(!w.J9())return
w.d.sB(D.a_)
x=w.f
x===$&&A.e()
x.um()
w.y=!0
A.bp(this.b,!1).f.ku(0,A.a([A.pf(null)],y.h))},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=B.a03.prototype,"gbZ4","dat",0)
x(v,"gdw","q",0)
x(B.akZ.prototype,"gcFU","HR",1)
x(v=B.aps.prototype,"gdan","J9",2)
x(v,"gbZ3","das",0)
x(v,"gdao","dap",0)
x(v,"gbZ2","dam",0)
x(v,"gdaq","dar",0)
x(v,"gd3H","d3I",0)
w(B,"ev1","euv",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.eb,[B.RH,B.al_])
w(B.a03,A.WO)
x(A.bT,[B.c4Q,B.cFQ,B.cFR,B.cFS,B.cFT,B.cFP,B.ddc,B.ddf,B.ddg,B.ddh])
w(B.aNi,B.a03)
x(A.J,[B.aa8,B.afK])
x(A.M,[B.akZ,B.aps])
w(B.OC,A.y)
x(A.bN,[B.ddi,B.ddd,B.dde])})()
A.b0(b.typeUniverse,JSON.parse('{"a03":{"aP":[]},"aNi":{"aP":[]},"aa8":{"J":[],"n":[]},"akZ":{"M":["aa8"]},"OC":{"y":[],"n":[]},"afK":{"J":[],"n":[]},"aps":{"M":["afK"]}}'))
A.n7(b.typeUniverse,JSON.parse('{"a03":1}'))
var y=(function rtii(){var x=A.C
return{J:x("c_"),k:x("xy"),h:x("v<cu<A?>>"),p:x("v<n>"),w:x("b9<jc>"),u:x("z7"),r:x("iJ"),B:x("Jt"),E:x("fL"),O:x("a3<m>"),t:x("JD"),e:x("DE"),X:x("A?"),H:x("~")}})();(function constants(){C.ahF=new A.ay(0,420,0,1/0)
C.aBy=new A.bw(22e4)
C.bav=new B.aa8(null)
C.bMI=new A.a3("oauthCallbackBackToLoginButton",y.O)
C.bMJ=new A.a3("oauthCallbackFailureState",y.O)
C.bMK=new A.a3("oauthCallbackLoadingState",y.O)
C.bML=new A.a3("oauthCallbackRetryButton",y.O)
C.bMM=new A.a3("oauthCallbackScaffold",y.O)
C.bMN=new A.a3("oauthCallbackSuccessState",y.O)
C.bPX=new E.Dt(null,!1,null,null)
C.abC=new E.Dt(null,!0,null,null)
C.bQ1=new B.afK(null)
C.abW=new B.RH(0,"processing")
C.tJ=new B.RH(1,"twoFactor")
C.Ib=new B.RH(2,"authenticated")
C.hP=new B.RH(3,"recovery")
C.abX=new B.RH(4,"cancelled")
C.acT=new B.al_(0,"processing")
C.bVk=new B.al_(1,"success")
C.acU=new B.al_(2,"failure")})()};
(a=>{a["Sjj+3OMoRHW4rygPnixICs8sdaU="]=a.current})($__dart_deferred_initializers__);