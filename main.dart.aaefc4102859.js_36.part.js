((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,G,F,H,B={
eGO(d,e,f){var x,w,v=d==null,u=v?null:d.b
if(v)x=null
else{w=d.c
d.c=null
x=w}v=v?null:d.a
x=new B.aiJ(f,e,u,v,x,C.afk,$.a9())
x.cOs(d,e,f)
return x},
U5:function U5(d,e){this.a=d
this.b=e},
aiJ:function aiJ(d,e,f,g,h,i,j){var _=this
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
chC:function chC(d){this.a=d},
aok:function aok(d,e){this.a=d
this.b=e},
acU:function acU(d){this.a=d},
aoj:function aoj(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
cWO:function cWO(d){this.a=d},
cWP:function cWP(d){this.a=d},
cWQ:function cWQ(d,e){this.a=d
this.b=e},
cWR:function cWR(d){this.a=d},
cWN:function cWN(d){this.a=d},
eyX(){return new B.QU(null)},
QU:function QU(d){this.a=d},
aiI:function aiI(d){this.a=d},
ats:function ats(d,e){var _=this
_.d=d
_.e=e
_.f=$
_.x=_.w=_.r=null
_.y=!1
_.z=!0
_.c=_.a=null},
dD7:function dD7(d){this.a=d},
dD1:function dD1(){},
dD2:function dD2(d){this.a=d},
dD3:function dD3(){},
dD4:function dD4(d){this.a=d},
dD5:function dD5(d){this.a=d},
dD6:function dD6(d,e){this.a=d
this.b=e},
eXW(){var x,w,v
if(!A.dNy())return null
try{w=b.G.__AGORA_TAKE_WEB_SESSION_OAUTH__
x=w==null?null:w.call()
if(x==null)return null
w=E.edi(A.b8(x),!1)
return w}catch(v){w=E.aSC()
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
B.U5.prototype={
Y(){return"WebSessionOAuthReturnState."+this.b}}
B.aiJ.prototype={
cOs(d,e,f){var x,w=this,v=w.a
w.e!==$&&A.aJ()
w.e=new A.U2(v,new B.chC(w))
x=w.gcnL()
v.a.at.I(0,x)
v.a4(x)},
gFt(){var x,w=this,v=!1
if(!w.as&&!w.Q&&w.b.$0()){x=w.r
if((x==null?null:x.f)!=null){if(w.w!==w.a.a.CW){v=w.e
v===$&&A.e()
v=v.gcqg()}else v=!0
v=v&&w.ax!==C.Ka}}return v},
gctD(){var x=this,w=!1
if(!x.as&&!x.Q&&x.b.$0())if(x.ax===C.Ka){w=x.a.a
w=x.w===w.CW&&x.x==w.ay&&w.gdM()!=null}return w},
dID(){var x,w=this,v=!1
if(!w.z){x=w.w
if(x!=null)if(x===w.a.a.CW){if(w.ax===C.v4){v=w.e
v===$&&A.e()
v=!v.gM()}}else v=!0}if(v){w.f=null
w.ax=C.iQ
if(!w.as)w.O()}},
cF(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$cF=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.y)n=!(!r.as&&!r.Q&&r.b.$0())
else n=!0
if(n){x=1
break}r.z=r.y=!0
u=4
n=r.a.a
q=n.CW
x=7
return A.c(n.d.df(),$async$cF)
case 7:p=e
if(!(!r.as&&!r.Q&&r.b.$0())||!J.p(q,n.CW)){r.f=null
r.ax=C.iQ
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
if(r.r!=null)if(r.d===I.afi){n=o
n=n==null?null:n.w
n=r.c!=n||r.f==null}if(n){r.f=null
r.ax=C.iQ
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
r.f=null
r.ax=C.iQ
s=[1]
x=5
break
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
r.z=!1
if(!r.as)r.O()
x=s.pop()
break
case 6:x=!r.as&&!r.Q&&r.b.$0()&&r.f!=null?8:9
break
case 8:x=10
return A.c(r.dIE(),$async$cF)
case 10:case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cF,w)},
bpQ(d){return this.cHb(d)},
cHb(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$bpQ=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!(!u.as&&!u.Q&&u.b.$0())||u.z||u.ax!==C.v4){x=1
break}t=A.az("^[0-9]{6}$",!0,!1,!1,!1)
if(!t.b.test(d)){u.ay=!0
if(!u.as)u.O()
x=1
break}x=3
return A.c(u.avB(d),$async$bpQ)
case 3:case 1:return A.j(v,w)}})
return A.k($async$bpQ,w)},
avB(d){return this.dCX(d)},
dIE(){return this.avB(null)},
dCX(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$avB=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=r.f
if(!(!r.as&&!r.Q&&r.b.$0())||r.z||j==null||r.c==null){x=1
break}q=++r.at
r.z=!0
r.ax=C.afk
if(!r.as)r.O()
u=4
n=r.a
m=r.c
if(m==null)m=A.b8(m)
l=r.e
l===$&&A.e()
x=7
return A.c(n.aKx(j,m,l,d),$async$avB)
case 7:if(!J.p(q,r.at)){s=[1]
x=5
break}if(!(!r.as&&!r.Q&&r.b.$0())||!l.gM()){r.f=null
r.ax=C.iQ
s=[1]
x=5
break}r.f=null
n=n.a
r.w=n.CW
r.x=n.ay
r.ax=C.Ka
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
n=A.u(i)
if(n instanceof A.LU){p=n
if(!J.p(q,r.at)){s=[1]
x=5
break}if(!r.as&&!r.Q&&r.b.$0()){n=r.e
n===$&&A.e()
n=!n.gM()}else n=!0
if(n){r.f=null
r.ax=C.iQ
s=[1]
x=5
break}n=r.a
r.w=n.a.CW
o=p.b
m=!1
if(n.gxT()){n=n.gkW()
n=n==null?null:n.a
l=r.r
if(l==null)l=null
else{l=l.f
l=l==null?null:l.a}if(n==l)n=J.p(o,D.qE)||J.p(o,D.l_)
else n=m}else n=m
if(n){r.ax=C.v4
r.ay=J.p(o,D.l_)}else{r.f=null
r.ax=C.iQ}}else if(J.p(q,r.at)){r.f=null
r.ax=C.iQ}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(!(!r.as&&!r.Q&&r.b.$0()))r.f=null
if(J.p(q,r.at)){r.z=!1
if(!r.as)r.O()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$avB,w)},
a8(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$a8=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.gFt()){x=1
break}q=++r.at
r.f=null
r.z=!0
if(!r.as)r.O()
u=4
p=r.a
o=r.r
n=r.e
n===$&&A.e()
x=7
return A.c(p.xV(o,n),$async$a8)
case 7:if(J.p(q,r.at))o=!(!r.as&&!r.Q&&r.b.$0())||!n.gM()
else o=!0
if(o){s=[1]
x=5
break}r.r=null
r.w=p.a.CW
r.ax=C.afl
s.push(6)
x=5
break
case 4:u=3
l=t.pop()
if(J.p(q,r.at))r.ax=C.iQ
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(J.p(q,r.at)){r.z=!1
if(!r.as)r.O()}x=s.pop()
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$a8,w)},
vy(){var x,w=this
if(w.Q)return
w.Q=!0;++w.at
w.f=null
x=w.e
x===$&&A.e()
x.baQ()
w.z=!1
w.ax=C.iQ
if(!w.as)w.O()},
q(){var x,w,v=this
v.as=!0
v.vy()
x=v.a
w=v.gcnL()
x.T(w)
x.a.at.N(0,w)
v.dW()}}
B.aok.prototype={
Y(){return"_OAuth2CallbackViewState."+this.b}}
B.acU.prototype={
P(){return new B.aoj(A.b4("OAuth2CallbackPage"),C.agg)}}
B.aoj.prototype={
X(){this.a6()
if(!$.ak().ag(y.t))this.La()},
La(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$La=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.n(new B.cWO(s))
u=4
o={}
n=s.d
n.m(D.i,"\ud83d\udd04 \u958b\u59cb\u8655\u7406 OAuth2 \u56de\u64a5",null,null)
r=new A.acT(A.b4("OAuth2CallbackHandler"))
o.a=null
g=o
x=7
return A.c(r.dW8(),$async$La)
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
return A.c(s.Au(),$async$La)
case 14:if(s.c==null){x=1
break}s.n(new B.cWP(s))
x=15
return A.c(A.eD(D.wE,null,y.H),$async$La)
case 15:if(s.c==null){x=1
break}if(q.toUpperCase()==="ADMIN"){n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u7ba1\u7406\u54e1\u9801\u9762",null,null)
o=s.c
o.toString
A.aM(o,!1).f.hX(0,A.a([D.r3],y.h))
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u7ba1\u7406\u54e1\u9801\u9762\u5c0e\u822a\u5b8c\u6210",null,null)}else{n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u4f7f\u7528\u8005\u4e3b\u9801",null,null)
o=s.c
o.toString
A.aNJ(A.aM(o,!1).f,null)
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u4f7f\u7528\u8005\u4e3b\u9801\u5c0e\u822a\u5b8c\u6210",null,null)}n.m(D.i,"\ud83c\udf89 [OAUTH2_CALLBACK_PAGE] \u5bfc\u822a\u5b8c\u6210",null,null)
case 12:x=9
break
case 10:n.m(D.t,"\u26a0\ufe0f OAuth2 \u56de\u8c03\u672a\u5904\u7406\u6216\u5904\u7406\u5931\u8d25: resultErrorPresent="+((l?null:m.c)!=null),null,null)
if(s.c!=null)s.n(new B.cWQ(o,s))
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
p=A.u(h)
s.d.m(D.F,"\u274c OAuth2 \u56de\u8c03\u5904\u7406\u5f02\u5e38: errorType="+J.ab(p).l(0),null,null)
if(s.c!=null)s.n(new B.cWR(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$La,w)},
Au(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Au=A.h(function(a5,a6){if(a5===1){u.push(a6)
x=v}for(;;)switch(x){case 0:v=3
f=t.d
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] === \u8df3\u8f49\u524d\u72c0\u614b\u9a57\u8b49 ===",null,null)
v=7
e=$.ak()
d=y.r
x=e.ag(d)?10:12
break
case 10:s=e.$1$0(d)
x=13
return A.c(s.vZ(),$async$Au)
case 13:r=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager.hasToken: "+A.b(r),null,null)
x=r?14:15
break
case 14:x=16
return A.c(s.il(),$async$Au)
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
e=$.ak()
d=y.E
x=e.ag(d)?21:23
break
case 21:o=e.$1$0(d)
x=24
return A.c(o.h7(),$async$Au)
case 24:n=a6
x=25
return A.c(o.lS(),$async$Au)
case 25:m=a6
x=26
return A.c(o.uQ(),$async$Au)
case 26:l=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences token present: "+(n!=null&&n.length!==0),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userIdPresent: "+(m!=null),null,null)
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] UserPreferences userRolePresent: "+(J.aB(l)!==0),null,null)
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
e=$.ak()
d=y.B
x=e.ag(d)?31:33
break
case 31:j=e.$1$0(d)
x=34
return A.c(j.BM(),$async$Au)
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
return A.k($async$Au,w)},
u(d){var x,w=null,v=$.ak(),u=y.t
if(v.ag(u)){if(E.eid())return C.af0
if(!A.dNy())try{if(E.xp(v.$1$0(u)).qt()!=null)return C.c2E}catch(x){return C.af0}return C.c2J}return A.bN(w,w,A.aK(new A.J(D.aW,new A.ba(K.Mn,A.WC(this.cVF(d,A.t(d)),C.aGf,w,A.a5F(),D.aM,D.aM,A.avP()),w),w),w,w,w),w,w,w,w,C.bZ1)},
cVF(d,e){var x,w,v=null,u=y.J,t=A.f(d,D.b,u)
t.toString
switch(this.e.a){case 0:return new A.d2(G.xq,t.gb0M(),t.gQQ(),v,F.nU,D.aV,C.bZ_)
case 1:return new A.d2(H.cS,t.gb0O(),t.ga6S(),e.ax.b,F.nU,D.aV,C.bZ2)
case 2:x=t.gb0L()
w=this.f
if(w==null)w=t.gb0K()
return new A.d2(D.be,x,w,e.ax.fy,v,A.a([A.bI(D.ts,C.bYY,A.d(A.f(d,D.b,u).gFl(),v,v,v,v,v,v,v,v,v),new B.cWN(d),v),A.ca(D.bi,C.bZ0,A.d(t.gb0N(),v,v,v,v,v,v,v,v,v),this.gd9b(),v)],y.p),C.bYZ)}}}
B.QU.prototype={
u(d){return C.biH}}
B.aiI.prototype={
P(){return new B.ats(new A.ai(D.N,$.a9()),new A.bf(null,y.w))},
c_i(){return B.eYx().$0()}}
B.ats.prototype={
MF(){var x,w=this,v=!1
if(w.c!=null)if(w.z)if(!w.y){x=w.r
x=x==null?null:x.ju(!0).gR().a.Q
if(x==w.w)if(!w.r.cy.a){v=w.c
v.toString
v=A.cp(v,null,y.X)
v=v==null?null:v.gM()
v=v!==!1}}return v},
X(){var x,w=this
w.a6()
x=$.ak().$1$0(y.e)
x=B.eGO(w.a.c_i(),w.gdIx(),x)
x.a4(w.gcnJ())
w.f!==$&&A.aJ()
w.f=x
$.al.y2$.push(new B.dD7(w))},
aZ(){var x,w=this
w.by()
if(w.r==null){x=w.c
x.toString
w.r=A.aM(x,!1).f.gkF()
w.w=w.c.iJ(y.u).f.a.Q
w.r.a4(w.gcnK())}if(!w.MF()){w.d.sD(D.a0)
x=w.f
x===$&&A.e()
x.vy()}},
dIC(){if(!this.MF()){this.d.sD(D.a0)
var x=this.f
x===$&&A.e()
x.vy()}},
dIz(){this.d.sD(D.a0)
var x=this.f
x===$&&A.e()
x.vy()},
dIw(){var x,w=this
if(w.c==null||!w.z)return
x=w.f
x===$&&A.e()
if(x.ax!==C.v4)w.d.sD(D.a0)
w.n(new B.dD1())
if(x.gctD())$.al.y2$.push(new B.dD2(w))},
dIB(){var x,w=this
if(!w.MF())return
w.d.sD(D.a0)
x=w.f
x===$&&A.e()
x.vy()
w.y=!0
x=w.c
x.toString
A.aM(x,!1).f.hX(0,A.a([A.dYn(null,null)],y.h))},
dB7(){var x,w=this
if(!w.MF())return
w.d.sD(D.a0)
x=w.f
x===$&&A.e()
x.vy()
w.y=!0
x=w.c
x.toString
A.aM(x,!1).f.hX(0,A.a([D.cN],y.h))},
hT(){var x,w=this
w.z=!1
w.d.sD(D.a0)
x=w.f
x===$&&A.e()
x.vy()
w.mR()},
cb(){this.z=!0
this.dc()},
q(){var x=this,w=x.r
if(w!=null)w.T(x.gcnK())
w=x.x
if(w!=null)w.$0()
w=x.f
w===$&&A.e()
w.T(x.gcnJ())
w.q()
w=x.d
w.ok$=$.a9()
w.k4$=0
x.a5()},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.f(d,D.b,y.J)
n.toString
x=p.f
x===$&&A.e()
w=x.ax
v=w===C.v4
switch(w.a){case 0:n=n.gQQ()
break
case 1:n=x.ay?n.gpB():n.guY()
break
case 2:n=n.ga6S()
break
case 4:n=n.gD6()
break
case 3:n=n.guZ()
break
default:n=o}u=x.z
t=v?A.fH(o,new A.TZ(!0,!1,p.d,new B.dD3(),o),p.e):o
s=v?new B.dD4(p):o
x=x.gFt()?new B.dD5(p):o
r=w===C.iQ?p.gdIA():o
q=w===C.afl?p.gdB6():o
return A.chX(u,o,!0,o,n,new B.dD6(p,d),x,s,o,r,q,t,o)}}
var z=a.updateTypes(["~()","B<~>()","D()","LW?()"])
B.chC.prototype={
$0(){var x=this.a
return!x.as&&!x.Q&&x.b.$0()},
$S:1}
B.cWO.prototype={
$0(){var x=this.a
x.e=C.agg
x.f=null},
$S:0}
B.cWP.prototype={
$0(){this.a.e=C.c87},
$S:0}
B.cWQ.prototype={
$0(){var x,w,v=this.b
v.e=C.agh
x=this.a.a
w=x==null
if((w?null:x.e)!=null)x=null
else x=w?null:x.c
v.f=x},
$S:0}
B.cWR.prototype={
$0(){var x=this.a
x.e=C.agh
x.f="An error occurred while processing the sign-in callback. Please sign in again."},
$S:0}
B.cWN.prototype={
$0(){A.aM(this.a,!1).f.hX(0,A.a([D.cN],y.h))},
$S:0}
B.dD7.prototype={
$1(d){var x=this.a
if(x.c==null)return
$.AZ().a6R()
x.x=A.aw9(x.gdIy())
x=x.f
x===$&&A.e()
x.cF()},
$S:2}
B.dD1.prototype={
$0(){},
$S:0}
B.dD2.prototype={
$1(d){var x,w,v=this.a
if(v.MF()){x=v.f
x===$&&A.e()
x=!x.gctD()}else x=!0
if(x)return
x=$.ak()
w=y.k
if(x.ag(w))x.$1$0(w).B_()
v.y=!0
v=v.c
v.toString
A.aM(v,!1).f.hX(0,A.a([A.j0(null,null)],y.h))},
$S:2}
B.dD3.prototype={
$1(d){},
$S:15}
B.dD4.prototype={
$0(){var x,w=this.a,v=w.e.gaj()
if((v==null?null:v.eP())!==!0)return
v=w.d
x=v.a.a
v.sD(D.a0)
w=w.f
w===$&&A.e()
w.bpQ(x)},
$S:0}
B.dD5.prototype={
$0(){var x=this.a.f
x===$&&A.e()
x.a8()
return null},
$S:0}
B.dD6.prototype={
$0(){var x,w=this.a
if(!w.MF())return
w.d.sD(D.a0)
x=w.f
x===$&&A.e()
x.vy()
w.y=!0
A.aM(this.b,!1).f.hX(0,A.a([A.j0(null,null)],y.h))},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=B.aiJ.prototype,"gcnL","dID",0)
x(v,"gdz","q",0)
x(B.aoj.prototype,"gd9b","La",1)
x(v=B.ats.prototype,"gdIx","MF",2)
x(v,"gcnK","dIC",0)
x(v,"gdIy","dIz",0)
x(v,"gcnJ","dIw",0)
x(v,"gdIA","dIB",0)
x(v,"gdB6","dB7",0)
w(B,"eYx","eXW",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ew,[B.U5,B.aok])
w(B.aiJ,A.hm)
x(A.bs,[B.chC,B.cWO,B.cWP,B.cWQ,B.cWR,B.cWN,B.dD1,B.dD4,B.dD5,B.dD6])
x(A.L,[B.acU,B.aiI])
x(A.U,[B.aoj,B.ats])
w(B.QU,A.x)
x(A.bt,[B.dD7,B.dD2,B.dD3])})()
A.aY(b.typeUniverse,JSON.parse('{"aiJ":{"b1":[]},"acU":{"L":[],"m":[]},"aoj":{"U":["acU"]},"QU":{"x":[],"m":[]},"aiI":{"L":[],"m":[]},"ats":{"U":["aiI"]}}'))
var y=(function rtii(){var x=A.F
return{J:x("bv"),k:x("y5"),h:x("v<bS<A?>>"),p:x("v<m>"),w:x("bf<ig>"),u:x("v2"),r:x("fn"),B:x("Ey"),E:x("e5"),O:x("K<n>"),t:x("LS"),e:x("Ak"),X:x("A?"),H:x("~")}})();(function constants(){C.aGf=new A.bC(22e4)
C.biH=new B.acU(null)
C.bYY=new A.K("oauthCallbackBackToLoginButton",y.O)
C.bYZ=new A.K("oauthCallbackFailureState",y.O)
C.bZ_=new A.K("oauthCallbackLoadingState",y.O)
C.bZ0=new A.K("oauthCallbackRetryButton",y.O)
C.bZ1=new A.K("oauthCallbackScaffold",y.O)
C.bZ2=new A.K("oauthCallbackSuccessState",y.O)
C.c2E=new E.EK(null,!1,null,null)
C.af0=new E.EK(null,!0,null,null)
C.c2J=new B.aiI(null)
C.afk=new B.U5(0,"processing")
C.v4=new B.U5(1,"twoFactor")
C.Ka=new B.U5(2,"authenticated")
C.iQ=new B.U5(3,"recovery")
C.afl=new B.U5(4,"cancelled")
C.agg=new B.aok(0,"processing")
C.c87=new B.aok(1,"success")
C.agh=new B.aok(2,"failure")})()};
(a=>{a["0+tp8sWnmEnll9vgouDfGbxa6Qw="]=a.current})($__dart_deferred_initializers__);