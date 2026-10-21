((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,G,F,H,B={
eNA(d,e,f){var x,w,v=d==null,u=v?null:d.b
if(v)x=null
else{w=d.c
d.c=null
x=w}v=v?null:d.a
x=new B.akX(f,e,u,v,x,C.agy,$.aa())
x.cQV(d,e,f)
return x},
Vv:function Vv(d,e){this.a=d
this.b=e},
akX:function akX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$
_.f=h
_.x=_.w=_.r=null
_.as=_.Q=_.z=_.y=!1
_.at=0
_.ax=i
_.ay=!1
_.k4$=0
_.ok$=j
_.p2$=_.p1$=0},
cm3:function cm3(d){this.a=d},
aqB:function aqB(d,e){this.a=d
this.b=e},
aeN:function aeN(d){this.a=d},
aqA:function aqA(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
d0O:function d0O(d){this.a=d},
d0P:function d0P(d){this.a=d},
d0Q:function d0Q(d,e){this.a=d
this.b=e},
d0R:function d0R(d){this.a=d},
d0N:function d0N(d){this.a=d},
eFC(){return new B.S9(null)},
S9:function S9(d){this.a=d},
akW:function akW(d){this.a=d},
avJ:function avJ(d,e){var _=this
_.d=d
_.e=e
_.f=$
_.x=_.w=_.r=null
_.y=!1
_.z=!0
_.c=_.a=null},
dIl:function dIl(d){this.a=d},
dIf:function dIf(){},
dIg:function dIg(d){this.a=d},
dIh:function dIh(){},
dIi:function dIi(d){this.a=d},
dIj:function dIj(d){this.a=d},
dIk:function dIk(d,e){this.a=d
this.b=e},
f4V(){var x,w,v
if(!A.dSX())return null
try{w=b.G.__AGORA_TAKE_WEB_SESSION_OAUTH__
x=w==null?null:w.call()
if(x==null)return null
w=E.eje(A.bb(x),!1)
return w}catch(v){w=E.aVH()
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
B.Vv.prototype={
W(){return"WebSessionOAuthReturnState."+this.b}}
B.akX.prototype={
cQV(d,e,f){var x,w=this,v=w.a
w.e!==$&&A.aK()
w.e=new A.Vs(v,new B.cm3(w))
x=w.gcpw()
v.a.at.H(0,x)
v.a4(x)},
gG3(){var x,w=this,v=!1
if(!w.as&&!w.Q&&w.b.$0()){x=w.r
if((x==null?null:x.f)!=null){if(w.w!==w.a.a.CW){v=w.e
v===$&&A.e()
v=v.gcs8()}else v=!0
v=v&&w.ax!==C.KW}}return v},
gcvw(){var x=this,w=!1
if(!x.as&&!x.Q&&x.b.$0())if(x.ax===C.KW){w=x.a.a
w=x.w===w.CW&&x.x==w.ay&&w.gdP()!=null}return w},
dLp(){var x,w=this,v=!1
if(!w.z){x=w.w
if(x!=null)if(x===w.a.a.CW){if(w.ax===C.vo){v=w.e
v===$&&A.e()
v=!v.gN()}}else v=!0}if(v){w.f=null
w.ax=C.iY
if(!w.as)w.S()}},
cG(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$cG=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.y)n=!(!r.as&&!r.Q&&r.b.$0())
else n=!0
if(n){x=1
break}r.z=r.y=!0
u=4
n=r.a.a
q=n.CW
x=7
return A.c(n.d.dj(),$async$cG)
case 7:p=e
if(!(!r.as&&!r.Q&&r.b.$0())||!J.p(q,n.CW)){r.f=null
r.ax=C.iY
s=[1]
x=5
break}n=p
o=n==null?null:n.f
n=o
m=!1
if((n==null?null:n.b)==="OAUTH"){n=p
if((n==null?null:n.e)==null){n=p
n=(n==null?null:n.r)==null}else n=m}else n=m
if(n){r.r=p
r.w=q}n=!0
if(r.r!=null)if(r.d===I.agw){n=o
n=n==null?null:n.w
n=r.c!=n||r.f==null}if(n){r.f=null
r.ax=C.iY
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
r.f=null
r.ax=C.iY
s=[1]
x=5
break
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
r.z=!1
if(!r.as)r.S()
x=s.pop()
break
case 6:x=!r.as&&!r.Q&&r.b.$0()&&r.f!=null?8:9
break
case 8:x=10
return A.c(r.dLq(),$async$cG)
case 10:case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cG,w)},
bqN(d){return this.cJE(d)},
cJE(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$bqN=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!(!u.as&&!u.Q&&u.b.$0())||u.z||u.ax!==C.vo){x=1
break}t=A.az("^[0-9]{6}$",!0,!1,!1,!1)
if(!t.b.test(d)){u.ay=!0
if(!u.as)u.S()
x=1
break}x=3
return A.c(u.awo(d),$async$bqN)
case 3:case 1:return A.j(v,w)}})
return A.k($async$bqN,w)},
awo(d){return this.dFJ(d)},
dLq(){return this.awo(null)},
dFJ(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$awo=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=r.f
if(!(!r.as&&!r.Q&&r.b.$0())||r.z||j==null||r.c==null){x=1
break}q=++r.at
r.z=!0
r.ax=C.agy
if(!r.as)r.S()
u=4
n=r.a
m=r.c
if(m==null)m=A.bb(m)
l=r.e
l===$&&A.e()
x=7
return A.c(n.aLm(j,m,l,d),$async$awo)
case 7:if(!J.p(q,r.at)){s=[1]
x=5
break}if(!(!r.as&&!r.Q&&r.b.$0())||!l.gN()){r.f=null
r.ax=C.iY
s=[1]
x=5
break}r.f=null
n=n.a
r.w=n.CW
r.x=n.ay
r.ax=C.KW
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
n=A.u(i)
if(n instanceof A.N1){p=n
if(!J.p(q,r.at)){s=[1]
x=5
break}if(!r.as&&!r.Q&&r.b.$0()){n=r.e
n===$&&A.e()
n=!n.gN()}else n=!0
if(n){r.f=null
r.ax=C.iY
s=[1]
x=5
break}n=r.a
r.w=n.a.CW
o=p.b
m=!1
if(n.gyk()){n=n.glc()
n=n==null?null:n.a
l=r.r
if(l==null)l=null
else{l=l.f
l=l==null?null:l.a}if(n==l)n=J.p(o,D.qS)||J.p(o,D.l9)
else n=m}else n=m
if(n){r.ax=C.vo
r.ay=J.p(o,D.l9)}else{r.f=null
r.ax=C.iY}}else if(J.p(q,r.at)){r.f=null
r.ax=C.iY}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(!(!r.as&&!r.Q&&r.b.$0()))r.f=null
if(J.p(q,r.at)){r.z=!1
if(!r.as)r.S()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$awo,w)},
a8(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$a8=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.gG3()){x=1
break}q=++r.at
r.f=null
r.z=!0
if(!r.as)r.S()
u=4
p=r.a
o=r.r
n=r.e
n===$&&A.e()
x=7
return A.c(p.ym(o,n),$async$a8)
case 7:if(J.p(q,r.at))o=!(!r.as&&!r.Q&&r.b.$0())||!n.gN()
else o=!0
if(o){s=[1]
x=5
break}r.r=null
r.w=p.a.CW
r.ax=C.agz
s.push(6)
x=5
break
case 4:u=3
l=t.pop()
if(J.p(q,r.at))r.ax=C.iY
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(J.p(q,r.at)){r.z=!1
if(!r.as)r.S()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a8,w)},
vY(){var x,w=this
if(w.Q)return
w.Q=!0;++w.at
w.f=null
x=w.e
x===$&&A.e()
x.bbJ()
w.z=!1
w.ax=C.iY
if(!w.as)w.S()},
q(){var x,w,v=this
v.as=!0
v.vY()
x=v.a
w=v.gcpw()
x.T(w)
x.a.at.M(0,w)
v.dY()}}
B.aqB.prototype={
W(){return"_OAuth2CallbackViewState."+this.b}}
B.aeN.prototype={
P(){return new B.aqA(A.b6("OAuth2CallbackPage"),C.ahy)}}
B.aqA.prototype={
Y(){this.a6()
if(!$.am().ah(y.t))this.LD()},
LD(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$LD=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.n(new B.d0O(s))
u=4
o={}
n=s.d
n.m(D.i,"\ud83d\udd04 \u958b\u59cb\u8655\u7406 OAuth2 \u56de\u64a5",null,null)
r=new A.aeM(A.b6("OAuth2CallbackHandler"))
o.a=null
g=o
x=7
return A.c(r.dZT(),$async$LD)
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
return A.c(s.B_(),$async$LD)
case 14:if(s.c==null){x=1
break}s.n(new B.d0P(s))
x=15
return A.c(A.eL(D.x1,null,y.H),$async$LD)
case 15:if(s.c==null){x=1
break}if(q.toUpperCase()==="ADMIN"){n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u7ba1\u7406\u54e1\u9801\u9762",null,null)
o=s.c
o.toString
A.aN(o,!1).f.i2(0,A.a([D.ri],y.h))
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u7ba1\u7406\u54e1\u9801\u9762\u5c0e\u822a\u5b8c\u6210",null,null)}else{n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u4f7f\u7528\u8005\u4e3b\u9801",null,null)
o=s.c
o.toString
A.aQC(A.aN(o,!1).f,null)
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u4f7f\u7528\u8005\u4e3b\u9801\u5c0e\u822a\u5b8c\u6210",null,null)}n.m(D.i,"\ud83c\udf89 [OAUTH2_CALLBACK_PAGE] \u5bfc\u822a\u5b8c\u6210",null,null)
case 12:x=9
break
case 10:n.m(D.t,"\u26a0\ufe0f OAuth2 \u56de\u8c03\u672a\u5904\u7406\u6216\u5904\u7406\u5931\u8d25: resultErrorPresent="+((l?null:m.c)!=null),null,null)
if(s.c!=null)s.n(new B.d0Q(o,s))
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
p=A.u(h)
s.d.m(D.F,"\u274c OAuth2 \u56de\u8c03\u5904\u7406\u5f02\u5e38: errorType="+J.ab(p).l(0),null,null)
if(s.c!=null)s.n(new B.d0R(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LD,w)},
B_(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$B_=A.h(function(a5,a6){if(a5===1){u.push(a6)
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
return A.c(s.wn(),$async$B_)
case 13:r=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager.hasToken: "+A.b(r),null,null)
x=r?14:15
break
case 14:x=16
return A.c(s.iu(),$async$B_)
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
return A.c(o.he(),$async$B_)
case 24:n=a6
x=25
return A.c(o.m8(),$async$B_)
case 25:m=a6
x=26
return A.c(o.vc(),$async$B_)
case 26:l=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences token present: "+(n!=null&&n.length!==0),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userIdPresent: "+(m!=null),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userRolePresent: "+(J.aC(l)!==0),null,null)
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
return A.c(j.Ci(),$async$B_)
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
return A.k($async$B_,w)},
u(d){var x,w=null,v=$.am(),u=y.t
if(v.ah(u)){if(E.eog())return C.age
if(!A.dSX())try{if(E.yd(v.$1$0(u)).qM()!=null)return C.c7Y}catch(x){return C.age}return C.c82}return A.bQ(w,w,A.aM(new A.J(D.aZ,new A.ba(K.Na,A.Y5(this.cY7(d,A.t(d)),C.aKo,w,A.a7p(),D.aM,D.aM,A.ay5()),w),w),w,w,w),w,w,w,w,C.c3d)},
cY7(d,e){var x,w,v=null,u=y.J,t=A.f(d,D.c,u)
t.toString
switch(this.e.a){case 0:return new A.db(G.xN,t.gb1C(),t.gRm(),v,v,F.o5,D.aW,C.c3b)
case 1:return new A.db(H.cV,t.gb1E(),t.ga7A(),e.ax.b,v,F.o5,D.aW,C.c3e)
case 2:x=t.gb1B()
w=this.f
if(w==null)w=t.gb1A()
return new A.db(D.bg,x,w,e.ax.fy,v,v,A.a([A.bL(D.tK,C.c39,A.d(A.f(d,D.c,u).gFX(),v,v,v,v,v,v,v,v,v),new B.d0N(d),v),A.ce(D.bk,C.c3c,A.d(t.gb1D(),v,v,v,v,v,v,v,v,v),this.gdbL(),v)],y.p),C.c3a)}}}
B.S9.prototype={
u(d){return C.bnh}}
B.akW.prototype={
P(){return new B.avJ(new A.ai(D.N,$.aa()),new A.bh(null,y.w))},
c0B(){return B.f5v().$0()}}
B.avJ.prototype={
N8(){var x,w=this,v=!1
if(w.c!=null)if(w.z)if(!w.y){x=w.r
x=x==null?null:x.jD(!0).gO().a.Q
if(x==w.w)if(!w.r.cy.a){v=w.c
v.toString
v=A.cs(v,null,y.X)
v=v==null?null:v.gN()
v=v!==!1}}return v},
Y(){var x,w=this
w.a6()
x=$.am().$1$0(y.e)
x=B.eNA(w.a.c0B(),w.gdLj(),x)
x.a4(w.gcpu())
w.f!==$&&A.aK()
w.f=x
$.al.y2$.push(new B.dIl(w))},
aZ(){var x,w=this
w.bB()
if(w.r==null){x=w.c
x.toString
w.r=A.aN(x,!1).f.gkX()
w.w=w.c.iQ(y.u).f.a.Q
w.r.a4(w.gcpv())}if(!w.N8()){w.d.sC(D.a0)
x=w.f
x===$&&A.e()
x.vY()}},
dLo(){if(!this.N8()){this.d.sC(D.a0)
var x=this.f
x===$&&A.e()
x.vY()}},
dLl(){this.d.sC(D.a0)
var x=this.f
x===$&&A.e()
x.vY()},
dLi(){var x,w=this
if(w.c==null||!w.z)return
x=w.f
x===$&&A.e()
if(x.ax!==C.vo)w.d.sC(D.a0)
w.n(new B.dIf())
if(x.gcvw())$.al.y2$.push(new B.dIg(w))},
dLn(){var x,w=this
if(!w.N8())return
w.d.sC(D.a0)
x=w.f
x===$&&A.e()
x.vY()
w.y=!0
x=w.c
x.toString
A.aN(x,!1).f.i2(0,A.a([A.e2Z(null,null)],y.h))},
dDU(){var x,w=this
if(!w.N8())return
w.d.sC(D.a0)
x=w.f
x===$&&A.e()
x.vY()
w.y=!0
x=w.c
x.toString
A.aN(x,!1).f.i2(0,A.a([D.cQ],y.h))},
i_(){var x,w=this
w.z=!1
w.d.sC(D.a0)
x=w.f
x===$&&A.e()
x.vY()
w.n7()},
cd(){this.z=!0
this.df()},
q(){var x=this,w=x.r
if(w!=null)w.T(x.gcpv())
w=x.x
if(w!=null)w.$0()
w=x.f
w===$&&A.e()
w.T(x.gcpu())
w.q()
w=x.d
w.ok$=$.aa()
w.k4$=0
x.a5()},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.f(d,D.c,y.J)
n.toString
x=p.f
x===$&&A.e()
w=x.ax
v=w===C.vo
switch(w.a){case 0:n=n.gRm()
break
case 1:n=x.ay?n.gpW():n.gvk()
break
case 2:n=n.ga7A()
break
case 4:n=n.gDH()
break
case 3:n=n.gvl()
break
default:n=o}u=x.z
t=v?A.fP(o,new A.Vo(!0,!1,p.d,new B.dIh(),o),p.e):o
s=v?new B.dIi(p):o
x=x.gG3()?new B.dIj(p):o
r=w===C.iY?p.gdLm():o
q=w===C.agz?p.gdDT():o
return A.cmo(u,o,!0,o,n,new B.dIk(p,d),x,s,o,r,q,t,o)}}
var z=a.updateTypes(["~()","B<~>()","F()","N3?()"])
B.cm3.prototype={
$0(){var x=this.a
return!x.as&&!x.Q&&x.b.$0()},
$S:1}
B.d0O.prototype={
$0(){var x=this.a
x.e=C.ahy
x.f=null},
$S:0}
B.d0P.prototype={
$0(){this.a.e=C.cdC},
$S:0}
B.d0Q.prototype={
$0(){var x,w,v=this.b
v.e=C.ahz
x=this.a.a
w=x==null
if((w?null:x.e)!=null)x=null
else x=w?null:x.c
v.f=x},
$S:0}
B.d0R.prototype={
$0(){var x=this.a
x.e=C.ahz
x.f="An error occurred while processing the sign-in callback. Please sign in again."},
$S:0}
B.d0N.prototype={
$0(){A.aN(this.a,!1).f.i2(0,A.a([D.cQ],y.h))},
$S:0}
B.dIl.prototype={
$1(d){var x=this.a
if(x.c==null)return
$.BV().a7z()
x.x=A.ayq(x.gdLk())
x=x.f
x===$&&A.e()
x.cG()},
$S:2}
B.dIf.prototype={
$0(){},
$S:0}
B.dIg.prototype={
$1(d){var x,w,v=this.a
if(v.N8()){x=v.f
x===$&&A.e()
x=!x.gcvw()}else x=!0
if(x)return
x=$.am()
w=y.k
if(x.ah(w))x.$1$0(w).Bx()
v.y=!0
v=v.c
v.toString
A.aN(v,!1).f.i2(0,A.a([A.jg(null,null)],y.h))},
$S:2}
B.dIh.prototype={
$1(d){},
$S:15}
B.dIi.prototype={
$0(){var x,w=this.a,v=w.e.gak()
if((v==null?null:v.eV())!==!0)return
v=w.d
x=v.a.a
v.sC(D.a0)
w=w.f
w===$&&A.e()
w.bqN(x)},
$S:0}
B.dIj.prototype={
$0(){var x=this.a.f
x===$&&A.e()
x.a8()
return null},
$S:0}
B.dIk.prototype={
$0(){var x,w=this.a
if(!w.N8())return
w.d.sC(D.a0)
x=w.f
x===$&&A.e()
x.vY()
w.y=!0
A.aN(this.b,!1).f.i2(0,A.a([A.jg(null,null)],y.h))},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=B.akX.prototype,"gcpw","dLp",0)
x(v,"gdC","q",0)
x(B.aqA.prototype,"gdbL","LD",1)
x(v=B.avJ.prototype,"gdLj","N8",2)
x(v,"gcpv","dLo",0)
x(v,"gdLk","dLl",0)
x(v,"gcpu","dLi",0)
x(v,"gdLm","dLn",0)
x(v,"gdDT","dDU",0)
w(B,"f5v","f4V",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.eA,[B.Vv,B.aqB])
w(B.akX,A.hx)
x(A.bt,[B.cm3,B.d0O,B.d0P,B.d0Q,B.d0R,B.d0N,B.dIf,B.dIi,B.dIj,B.dIk])
x(A.L,[B.aeN,B.akW])
x(A.U,[B.aqA,B.avJ])
w(B.S9,A.x)
x(A.bu,[B.dIl,B.dIg,B.dIh])})()
A.b_(b.typeUniverse,JSON.parse('{"akX":{"b2":[]},"aeN":{"L":[],"m":[]},"aqA":{"U":["aeN"]},"S9":{"x":[],"m":[]},"akW":{"L":[],"m":[]},"avJ":{"U":["akW"]}}'))
var y=(function rtii(){var x=A.C
return{J:x("by"),k:x("yZ"),h:x("v<bV<A?>>"),p:x("v<m>"),w:x("bh<iu>"),u:x("vI"),r:x("fu"),B:x("FB"),E:x("ec"),O:x("K<n>"),t:x("N_"),e:x("Bf"),X:x("A?"),H:x("~")}})();(function constants(){C.aKo=new A.bG(22e4)
C.bnh=new B.aeN(null)
C.c39=new A.K("oauthCallbackBackToLoginButton",y.O)
C.c3a=new A.K("oauthCallbackFailureState",y.O)
C.c3b=new A.K("oauthCallbackLoadingState",y.O)
C.c3c=new A.K("oauthCallbackRetryButton",y.O)
C.c3d=new A.K("oauthCallbackScaffold",y.O)
C.c3e=new A.K("oauthCallbackSuccessState",y.O)
C.c7Y=new E.FN(null,!1,null,null)
C.age=new E.FN(null,!0,null,null)
C.c82=new B.akW(null)
C.agy=new B.Vv(0,"processing")
C.vo=new B.Vv(1,"twoFactor")
C.KW=new B.Vv(2,"authenticated")
C.iY=new B.Vv(3,"recovery")
C.agz=new B.Vv(4,"cancelled")
C.ahy=new B.aqB(0,"processing")
C.cdC=new B.aqB(1,"success")
C.ahz=new B.aqB(2,"failure")})()};
(a=>{a["XksR/V6E93hGBsyJ5I5lCbrIVBM="]=a.current})($__dart_deferred_initializers__);