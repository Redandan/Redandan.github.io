((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,G,F,H,B={
eOr(d,e,f){var x,w,v=d==null,u=v?null:d.b
if(v)x=null
else{w=d.c
d.c=null
x=w}v=v?null:d.a
x=new B.al5(f,e,u,v,x,C.agw,$.aa())
x.cR5(d,e,f)
return x},
Vz:function Vz(d,e){this.a=d
this.b=e},
al5:function al5(d,e,f,g,h,i,j){var _=this
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
cmm:function cmm(d){this.a=d},
aqK:function aqK(d,e){this.a=d
this.b=e},
aeV:function aeV(d){this.a=d},
aqJ:function aqJ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.f=null},
d1f:function d1f(d){this.a=d},
d1g:function d1g(d){this.a=d},
d1h:function d1h(d,e){this.a=d
this.b=e},
d1i:function d1i(d){this.a=d},
d1e:function d1e(d){this.a=d},
eGr(){return new B.Sc(null)},
Sc:function Sc(d){this.a=d},
al4:function al4(d){this.a=d},
avS:function avS(d,e){var _=this
_.d=d
_.e=e
_.f=$
_.x=_.w=_.r=null
_.y=!1
_.z=!0
_.c=_.a=null},
dJ5:function dJ5(d){this.a=d},
dJ_:function dJ_(){},
dJ0:function dJ0(d){this.a=d},
dJ1:function dJ1(){},
dJ2:function dJ2(d){this.a=d},
dJ3:function dJ3(d){this.a=d},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
f5N(){var x,w,v
if(!A.dTI())return null
try{w=b.G.__AGORA_TAKE_WEB_SESSION_OAUTH__
x=w==null?null:w.call()
if(x==null)return null
w=E.ek1(A.bb(x),!1)
return w}catch(v){w=E.aVQ()
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
B.Vz.prototype={
W(){return"WebSessionOAuthReturnState."+this.b}}
B.al5.prototype={
cR5(d,e,f){var x,w=this,v=w.a
w.e!==$&&A.aK()
w.e=new A.Vw(v,new B.cmm(w))
x=w.gcpI()
v.a.at.H(0,x)
v.a4(x)},
gG4(){var x,w=this,v=!1
if(!w.as&&!w.Q&&w.b.$0()){x=w.r
if((x==null?null:x.f)!=null){if(w.w!==w.a.a.CW){v=w.e
v===$&&A.e()
v=v.gcsl()}else v=!0
v=v&&w.ax!==C.KU}}return v},
gcvH(){var x=this,w=!1
if(!x.as&&!x.Q&&x.b.$0())if(x.ax===C.KU){w=x.a.a
w=x.w===w.CW&&x.x==w.ay&&w.gdR()!=null}return w},
dLA(){var x,w=this,v=!1
if(!w.z){x=w.w
if(x!=null)if(x===w.a.a.CW){if(w.ax===C.vq){v=w.e
v===$&&A.e()
v=!v.gN()}}else v=!0}if(v){w.f=null
w.ax=C.iZ
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
r.ax=C.iZ
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
if(r.r!=null)if(r.d===I.agu){n=o
n=n==null?null:n.w
n=r.c!=n||r.f==null}if(n){r.f=null
r.ax=C.iZ
s=[1]
x=5
break}s.push(6)
x=5
break
case 4:u=3
k=t.pop()
r.f=null
r.ax=C.iZ
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
return A.c(r.dLB(),$async$cG)
case 10:case 9:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$cG,w)},
bqR(d){return this.cJP(d)},
cJP(d){var x=0,w=A.l(y.H),v,u=this,t
var $async$bqR=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(!(!u.as&&!u.Q&&u.b.$0())||u.z||u.ax!==C.vq){x=1
break}t=A.az("^[0-9]{6}$",!0,!1,!1,!1)
if(!t.b.test(d)){u.ay=!0
if(!u.as)u.S()
x=1
break}x=3
return A.c(u.awq(d),$async$bqR)
case 3:case 1:return A.j(v,w)}})
return A.k($async$bqR,w)},
awq(d){return this.dFU(d)},
dLB(){return this.awq(null)},
dFU(d){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$awq=A.h(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=r.f
if(!(!r.as&&!r.Q&&r.b.$0())||r.z||j==null||r.c==null){x=1
break}q=++r.at
r.z=!0
r.ax=C.agw
if(!r.as)r.S()
u=4
n=r.a
m=r.c
if(m==null)m=A.bb(m)
l=r.e
l===$&&A.e()
x=7
return A.c(n.aLn(j,m,l,d),$async$awq)
case 7:if(!J.p(q,r.at)){s=[1]
x=5
break}if(!(!r.as&&!r.Q&&r.b.$0())||!l.gN()){r.f=null
r.ax=C.iZ
s=[1]
x=5
break}r.f=null
n=n.a
r.w=n.CW
r.x=n.ay
r.ax=C.KU
s.push(6)
x=5
break
case 4:u=3
i=t.pop()
n=A.u(i)
if(n instanceof A.N5){p=n
if(!J.p(q,r.at)){s=[1]
x=5
break}if(!r.as&&!r.Q&&r.b.$0()){n=r.e
n===$&&A.e()
n=!n.gN()}else n=!0
if(n){r.f=null
r.ax=C.iZ
s=[1]
x=5
break}n=r.a
r.w=n.a.CW
o=p.b
m=!1
if(n.gyn()){n=n.glc()
n=n==null?null:n.a
l=r.r
if(l==null)l=null
else{l=l.f
l=l==null?null:l.a}if(n==l)n=J.p(o,D.qS)||J.p(o,D.la)
else n=m}else n=m
if(n){r.ax=C.vq
r.ay=J.p(o,D.la)}else{r.f=null
r.ax=C.iZ}}else if(J.p(q,r.at)){r.f=null
r.ax=C.iZ}s.push(6)
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
return A.k($async$awq,w)},
a8(){var x=0,w=A.l(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$a8=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!r.gG4()){x=1
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
return A.c(p.yp(o,n),$async$a8)
case 7:if(J.p(q,r.at))o=!(!r.as&&!r.Q&&r.b.$0())||!n.gN()
else o=!0
if(o){s=[1]
x=5
break}r.r=null
r.w=p.a.CW
r.ax=C.agx
s.push(6)
x=5
break
case 4:u=3
l=t.pop()
if(J.p(q,r.at))r.ax=C.iZ
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
w_(){var x,w=this
if(w.Q)return
w.Q=!0;++w.at
w.f=null
x=w.e
x===$&&A.e()
x.bbN()
w.z=!1
w.ax=C.iZ
if(!w.as)w.S()},
q(){var x,w,v=this
v.as=!0
v.w_()
x=v.a
w=v.gcpI()
x.T(w)
x.a.at.M(0,w)
v.e_()}}
B.aqK.prototype={
W(){return"_OAuth2CallbackViewState."+this.b}}
B.aeV.prototype={
O(){return new B.aqJ(A.b7("OAuth2CallbackPage"),C.ahw)}}
B.aqJ.prototype={
Y(){this.a6()
if(!$.am().ah(y.t))this.LF()},
LF(){var x=0,w=A.l(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$LF=A.h(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.n(new B.d1f(s))
u=4
o={}
n=s.d
n.m(D.i,"\ud83d\udd04 \u958b\u59cb\u8655\u7406 OAuth2 \u56de\u64a5",null,null)
r=new A.aeU(A.b7("OAuth2CallbackHandler"))
o.a=null
g=o
x=7
return A.c(r.e_6(),$async$LF)
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
return A.c(s.B1(),$async$LF)
case 14:if(s.c==null){x=1
break}s.n(new B.d1g(s))
x=15
return A.c(A.eM(D.x2,null,y.H),$async$LF)
case 15:if(s.c==null){x=1
break}if(q.toUpperCase()==="ADMIN"){n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u7ba1\u7406\u54e1\u9801\u9762",null,null)
o=s.c
o.toString
A.aL(o,!1).f.hV(0,A.a([D.ri],y.h))
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u7ba1\u7406\u54e1\u9801\u9762\u5c0e\u822a\u5b8c\u6210",null,null)}else{n.m(D.i,"\ud83d\ude80 [OAUTH2_CALLBACK_PAGE] \u5c0e\u822a\u5230\u4f7f\u7528\u8005\u4e3b\u9801",null,null)
o=s.c
o.toString
A.aQL(A.aL(o,!1).f,null)
n.m(D.i,"\u2705 [OAUTH2_CALLBACK_PAGE] \u4f7f\u7528\u8005\u4e3b\u9801\u5c0e\u822a\u5b8c\u6210",null,null)}n.m(D.i,"\ud83c\udf89 [OAUTH2_CALLBACK_PAGE] \u5bfc\u822a\u5b8c\u6210",null,null)
case 12:x=9
break
case 10:n.m(D.t,"\u26a0\ufe0f OAuth2 \u56de\u8c03\u672a\u5904\u7406\u6216\u5904\u7406\u5931\u8d25: resultErrorPresent="+((l?null:m.c)!=null),null,null)
if(s.c!=null)s.n(new B.d1h(o,s))
case 9:u=2
x=6
break
case 4:u=3
h=t.pop()
p=A.u(h)
s.d.m(D.E,"\u274c OAuth2 \u56de\u8c03\u5904\u7406\u5f02\u5e38: errorType="+J.ab(p).l(0),null,null)
if(s.c!=null)s.n(new B.d1i(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.j(v,w)
case 2:return A.i(t.at(-1),w)}})
return A.k($async$LF,w)},
B1(){var x=0,w=A.l(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$B1=A.h(function(a5,a6){if(a5===1){u.push(a6)
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
return A.c(s.wp(),$async$B1)
case 13:r=a6
f.m(D.i,"\ud83d\udd0d [OAUTH2_CALLBACK_PAGE] TokenManager.hasToken: "+A.b(r),null,null)
x=r?14:15
break
case 14:x=16
return A.c(s.iv(),$async$B1)
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
return A.c(o.he(),$async$B1)
case 24:n=a6
x=25
return A.c(o.m9(),$async$B1)
case 25:m=a6
x=26
return A.c(o.ve(),$async$B1)
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
return A.c(j.Ck(),$async$B1)
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
return A.k($async$B1,w)},
u(d){var x,w=null,v=$.am(),u=y.t
if(v.ah(u)){if(E.ep5())return C.agc
if(!A.dTI())try{if(E.yf(v.$1$0(u)).qN()!=null)return C.c83}catch(x){return C.agc}return C.c88}return A.bN(w,w,A.aM(new A.J(D.aT,new A.ba(K.N8,A.Y9(this.cYi(d,A.t(d)),C.aKl,w,A.a7v(),D.aJ,D.aJ,A.aye()),w),w),w,w,w),w,w,w,w,C.c3e)},
cYi(d,e){var x,w,v=null,u=y.J,t=A.f(d,D.c,u)
t.toString
switch(this.e.a){case 0:return new A.d4(G.xO,t.gb1F(),t.gRp(),v,v,F.o7,D.aS,C.c3c)
case 1:return new A.d4(H.cW,t.gb1H(),t.ga7D(),e.ax.b,v,F.o7,D.aS,C.c3f)
case 2:x=t.gb1E()
w=this.f
if(w==null)w=t.gb1D()
return new A.d4(D.be,x,w,e.ax.fy,v,v,A.a([A.bI(D.tK,C.c3a,A.d(A.f(d,D.c,u).gFY(),v,v,v,v,v,v,v,v,v),new B.d1e(d),v),A.ce(D.b8,C.c3d,A.d(t.gb1G(),v,v,v,v,v,v,v,v,v),this.gdbW(),v)],y.p),C.c3b)}}}
B.Sc.prototype={
u(d){return C.bnf}}
B.al4.prototype={
O(){return new B.avS(new A.aj(D.L,$.aa()),new A.bh(null,y.w))},
c0J(){return B.f6o().$0()}}
B.avS.prototype={
Nc(){var x,w=this,v=!1
if(w.c!=null)if(w.z)if(!w.y){x=w.r
x=x==null?null:x.jC(!0).gP().a.Q
if(x==w.w)if(!w.r.cy.a){v=w.c
v.toString
v=A.cs(v,null,y.X)
v=v==null?null:v.gN()
v=v!==!1}}return v},
Y(){var x,w=this
w.a6()
x=$.am().$1$0(y.e)
x=B.eOr(w.a.c0J(),w.gdLu(),x)
x.a4(w.gcpG())
w.f!==$&&A.aK()
w.f=x
$.al.y2$.push(new B.dJ5(w))},
b_(){var x,w=this
w.bB()
if(w.r==null){x=w.c
x.toString
w.r=A.aL(x,!1).f.gkX()
w.w=w.c.iR(y.u).f.a.Q
w.r.a4(w.gcpH())}if(!w.Nc()){w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w_()}},
dLz(){if(!this.Nc()){this.d.sC(D.a_)
var x=this.f
x===$&&A.e()
x.w_()}},
dLw(){this.d.sC(D.a_)
var x=this.f
x===$&&A.e()
x.w_()},
dLt(){var x,w=this
if(w.c==null||!w.z)return
x=w.f
x===$&&A.e()
if(x.ax!==C.vq)w.d.sC(D.a_)
w.n(new B.dJ_())
if(x.gcvH())$.al.y2$.push(new B.dJ0(w))},
dLy(){var x,w=this
if(!w.Nc())return
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w_()
w.y=!0
x=w.c
x.toString
A.aL(x,!1).f.hV(0,A.a([A.e3K(null,null)],y.h))},
dE4(){var x,w=this
if(!w.Nc())return
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w_()
w.y=!0
x=w.c
x.toString
A.aL(x,!1).f.hV(0,A.a([D.cR],y.h))},
i0(){var x,w=this
w.z=!1
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w_()
w.n8()},
cd(){this.z=!0
this.df()},
q(){var x=this,w=x.r
if(w!=null)w.T(x.gcpH())
w=x.x
if(w!=null)w.$0()
w=x.f
w===$&&A.e()
w.T(x.gcpG())
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
v=w===C.vq
switch(w.a){case 0:n=n.gRp()
break
case 1:n=x.ay?n.gpW():n.gvm()
break
case 2:n=n.ga7D()
break
case 4:n=n.gDI()
break
case 3:n=n.gvn()
break
default:n=o}u=x.z
t=v?A.fP(o,new A.Vs(!0,!1,p.d,new B.dJ1(),o),p.e):o
s=v?new B.dJ2(p):o
x=x.gG4()?new B.dJ3(p):o
r=w===C.iZ?p.gdLx():o
q=w===C.agx?p.gdE3():o
return A.cmH(u,o,!0,o,n,new B.dJ4(p,d),x,s,o,r,q,t,o)}}
var z=a.updateTypes(["~()","B<~>()","F()","N7?()"])
B.cmm.prototype={
$0(){var x=this.a
return!x.as&&!x.Q&&x.b.$0()},
$S:1}
B.d1f.prototype={
$0(){var x=this.a
x.e=C.ahw
x.f=null},
$S:0}
B.d1g.prototype={
$0(){this.a.e=C.cdI},
$S:0}
B.d1h.prototype={
$0(){var x,w,v=this.b
v.e=C.ahx
x=this.a.a
w=x==null
if((w?null:x.e)!=null)x=null
else x=w?null:x.c
v.f=x},
$S:0}
B.d1i.prototype={
$0(){var x=this.a
x.e=C.ahx
x.f="An error occurred while processing the sign-in callback. Please sign in again."},
$S:0}
B.d1e.prototype={
$0(){A.aL(this.a,!1).f.hV(0,A.a([D.cR],y.h))},
$S:0}
B.dJ5.prototype={
$1(d){var x=this.a
if(x.c==null)return
$.BV().a7C()
x.x=A.ayz(x.gdLv())
x=x.f
x===$&&A.e()
x.cG()},
$S:2}
B.dJ_.prototype={
$0(){},
$S:0}
B.dJ0.prototype={
$1(d){var x,w,v=this.a
if(v.Nc()){x=v.f
x===$&&A.e()
x=!x.gcvH()}else x=!0
if(x)return
x=$.am()
w=y.k
if(x.ah(w))x.$1$0(w).Bz()
v.y=!0
v=v.c
v.toString
A.aL(v,!1).f.hV(0,A.a([A.io(null,null)],y.h))},
$S:2}
B.dJ1.prototype={
$1(d){},
$S:15}
B.dJ2.prototype={
$0(){var x,w=this.a,v=w.e.gak()
if((v==null?null:v.eX())!==!0)return
v=w.d
x=v.a.a
v.sC(D.a_)
w=w.f
w===$&&A.e()
w.bqR(x)},
$S:0}
B.dJ3.prototype={
$0(){var x=this.a.f
x===$&&A.e()
x.a8()
return null},
$S:0}
B.dJ4.prototype={
$0(){var x,w=this.a
if(!w.Nc())return
w.d.sC(D.a_)
x=w.f
x===$&&A.e()
x.w_()
w.y=!0
A.aL(this.b,!1).f.hV(0,A.a([A.io(null,null)],y.h))},
$S:0};(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=B.al5.prototype,"gcpI","dLA",0)
x(v,"gdD","q",0)
x(B.aqJ.prototype,"gdbW","LF",1)
x(v=B.avS.prototype,"gdLu","Nc",2)
x(v,"gcpH","dLz",0)
x(v,"gdLv","dLw",0)
x(v,"gcpG","dLt",0)
x(v,"gdLx","dLy",0)
x(v,"gdE3","dE4",0)
w(B,"f6o","f5N",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.eB,[B.Vz,B.aqK])
w(B.al5,A.hy)
x(A.bt,[B.cmm,B.d1f,B.d1g,B.d1h,B.d1i,B.d1e,B.dJ_,B.dJ2,B.dJ3,B.dJ4])
x(A.L,[B.aeV,B.al4])
x(A.S,[B.aqJ,B.avS])
w(B.Sc,A.x)
x(A.bu,[B.dJ5,B.dJ0,B.dJ1])})()
A.b0(b.typeUniverse,JSON.parse('{"al5":{"b2":[]},"aeV":{"L":[],"m":[]},"aqJ":{"S":["aeV"]},"Sc":{"x":[],"m":[]},"al4":{"L":[],"m":[]},"avS":{"S":["al4"]}}'))
var y=(function rtii(){var x=A.C
return{J:x("bw"),k:x("z0"),h:x("v<bV<A?>>"),p:x("v<m>"),w:x("bh<iw>"),u:x("vK"),r:x("fu"),B:x("FD"),E:x("ec"),O:x("H<n>"),t:x("N3"),e:x("Bf"),X:x("A?"),H:x("~")}})();(function constants(){C.aKl=new A.bG(22e4)
C.bnf=new B.aeV(null)
C.c3a=new A.H("oauthCallbackBackToLoginButton",y.O)
C.c3b=new A.H("oauthCallbackFailureState",y.O)
C.c3c=new A.H("oauthCallbackLoadingState",y.O)
C.c3d=new A.H("oauthCallbackRetryButton",y.O)
C.c3e=new A.H("oauthCallbackScaffold",y.O)
C.c3f=new A.H("oauthCallbackSuccessState",y.O)
C.c83=new E.FP(null,!1,null,null)
C.agc=new E.FP(null,!0,null,null)
C.c88=new B.al4(null)
C.agw=new B.Vz(0,"processing")
C.vq=new B.Vz(1,"twoFactor")
C.KU=new B.Vz(2,"authenticated")
C.iZ=new B.Vz(3,"recovery")
C.agx=new B.Vz(4,"cancelled")
C.ahw=new B.aqK(0,"processing")
C.cdI=new B.aqK(1,"success")
C.ahx=new B.aqK(2,"failure")})()};
(a=>{a["5/a1Hk8FvqvZb3+ovZWq93iDScE="]=a.current})($__dart_deferred_initializers__);