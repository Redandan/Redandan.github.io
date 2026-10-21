((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,E,H,I,K,L,M,N,O,F,C={
caG(d,e){var w,v,u,t=A.a([],x.x),s=B.b.F(d)
if(s.length===0){w=e.gaps()
t.push(w)}w=A.az("<\\s*agora-product-list\\b",!1,!1,!1,!1)
if(!w.b.test(s)){w=e.gapC()
t.push(w)}B.d.v(t,C.eKI(s,e))
for(v=0;v<9;++v){u=D.b7i[v]
w=A.az(u.a,!1,!1,!1,!1)
if(w.b.test(s))t.push(u.e22(e))}return new C.aTo(t)},
eKI(d,e){var w,v,u,t,s,r,q,p=A.a([],x.x)
for(w=A.az("<\\s*agora-action\\b([^>]*)>",!1,!1,!1,!1).u2(0,d),w=new A.Nj(w.a,w.b,w.c),v=x.q;w.G();){u=w.d
t=(u==null?v.a(u):u).b[1]
if(t==null)t=""
s=A.az("\\btype\\s*=\\s*[\\\"']?([a-zA-Z-]+)",!1,!1,!1,!1).fb(t)
r=s==null?null:s.b[1]
if(r==null){s=e.gapq()
p.push(s)
continue}q=r.toLowerCase()
if(q!=="open-product"&&q!=="add-to-cart"){s=e.gapr()
p.push(s)}}return p},
aTo:function aTo(d){this.a=d},
w5:function w5(d,e,f){this.a=d
this.b=e
this.c=f},
Bq:function Bq(d,e){this.a=d
this.b=e},
eJF(){return new C.M0(null)},
ePY(d,e){var w
A:{if(B.kU===e){w=d.gXI()
break A}if(B.qx===e){w=d.gXH()
break A}if(B.o9===e){w=d.gXK()
break A}if(B.mp===e){w=d.gXJ()
break A}if(B.qw===e){w=d.gXG()
break A}w=d.gU6()
break A}return w},
M0:function M0(d){this.a=d},
att:function att(d,e,f){var _=this
_.d=d
_.e=e
_.f=null
_.r=!0
_.y=_.x=_.w=!1
_.z=null
_.Q=f
_.c=_.a=null},
dnV:function dnV(d,e){this.a=d
this.b=e},
dnW:function dnW(d,e){this.a=d
this.b=e},
dnX:function dnX(d){this.a=d},
dnY:function dnY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnZ:function dnZ(d,e){this.a=d
this.b=e},
do_:function do_(d){this.a=d},
do0:function do0(d,e){this.a=d
this.b=e},
do1:function do1(d){this.a=d},
dnR:function dnR(d){this.a=d},
dnT:function dnT(d,e){this.a=d
this.b=e},
dnU:function dnU(d,e){this.a=d
this.b=e},
dnS:function dnS(d){this.a=d},
b_h:function b_h(d,e){this.c=d
this.a=e},
aor:function aor(d,e,f){this.c=d
this.d=e
this.a=f},
aoq:function aoq(d,e){this.c=d
this.a=e}},D
A=c[0]
B=c[2]
G=c[339]
E=c[212]
H=c[721]
I=c[720]
K=c[451]
L=c[264]
M=c[697]
N=c[319]
O=c[564]
F=c[719]
C=a.updateHolder(c[82],C)
D=c[718]
C.aTo.prototype={}
C.w5.prototype={
e22(d){var w
switch(this.c.a){case 0:w=d.gapA()
break
case 1:w=d.gapz()
break
case 2:w=d.gapy()
break
case 3:w=d.gapt()
break
case 4:w=d.gapu()
break
case 5:w=d.gapv()
break
case 6:w=d.gapw()
break
case 7:w=d.gapx()
break
default:w=null}return w}}
C.Bq.prototype={
W(){return"_ForbiddenRuleCode."+this.b}}
C.M0.prototype={
S(){var w=$.al().$1$0(x.k)
return new C.att(new E.a4H(w),new A.ai(B.N,$.aa()),D.bMz)}}
C.att.prototype={
cki(d){var w='</div>\n        <div class="item">'
return'<!doctype html>\n<html lang="'+d.gap6()+'">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>'+d.gap8()+'</title>\n  <style>\n    body { margin: 0; font-family: system-ui, sans-serif; color: #17202a; }\n    .hero { padding: 28px 24px 24px; background: #eef7f2; }\n    .wrap { max-width: 920px; margin: 0 auto; }\n    h1 { margin: 0 0 12px; font-size: 34px; }\n    p { line-height: 1.7; }\n    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 20px; }\n    .item { padding: 16px; border: 1px solid #dce7df; border-radius: 8px; background: white; }\n    @media (max-width: 640px) {\n      .hero { padding: 24px 20px 20px; }\n      h1 { font-size: 30px; }\n      .grid { margin-top: 16px; }\n    }\n  </style>\n</head>\n<body>\n  <section class="hero">\n    <div class="wrap">\n      <h1>'+d.gap5()+"</h1>\n      <p>"+d.gap2()+'</p>\n      <div class="grid">\n        <div class="item">'+d.gap3()+w+d.gap7()+w+d.gap0()+"</div>\n      </div>\n      "+B.b.F(y.d+d.gKG()+'" description="'+d.gKF()+y.b)+"\n    </div>\n  </section>\n</body>\n</html>\n"},
ca4(d){return'\n  <agora-product-list source="latest" limit="8" layout="grid" card="custom" title="'+d.gap4()+'" description="'+d.gap1()+'" section-background="#ffffff" title-color="#17202a" max-width="920">\n      <template>\n        <article class="custom-card">\n          <img src="{{product.imageUrl}}" alt="{{product.title}}">\n          <div class="custom-card-body">\n            <p class="custom-card-kicker">Agora '+d.gHJ()+'</p>\n            <h3>{{product.title}}</h3>\n            <p class="custom-card-price">{{product.priceUsdt}} USDT</p>\n            <p class="custom-card-meta">'+d.gap9()+" {{product.viewCount}} \xb7 "+d.gpZ()+' {{product.stock}}</p>\n            <div class="custom-card-actions">\n              <agora-action type="open-product">'+d.gzy()+'</agora-action>\n              <agora-action type="add-to-cart">'+d.goa()+"</agora-action>\n            </div>\n          </div>\n        </article>\n      </template>\n    </agora-product-list>\n"},
Y(){this.a6()
this.e.a4(this.gcdX())},
aZ(){var w=this
w.bB()
if(w.w)return
w.w=!0
w.auU()},
q(){var w=this.e
w.T(this.gcdX())
w.ok$=$.aa()
w.k4$=0
this.a5()},
ddV(){var w,v=this,u=v.e.a.a,t=v.c
t.toString
t=A.f(t,B.c,x.F)
t.toString
w=C.caG(u,t)
if(!v.y){v.n(new C.dnV(v,w))
return}v.n(new C.dnW(v,w))},
auU(){var w=0,v=A.l(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$auU=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:l=r.c
l.toString
l=A.f(l,B.c,x.F)
l.toString
q=l
r.n(new C.dnX(r))
t=4
w=7
return A.c(r.d.a.zD(),$async$auU)
case 7:p=e
if(r.c==null){w=1
break}l=p
if(l==null)l=null
else{l=l.c
l=l==null?null:B.b.F(l).length!==0}if(l===!0){l=p.c
l.toString
n=l}else{l=p
if(l==null)l=null
else{l=l.d
l=l==null?null:B.b.F(l).length!==0}if(l===!0){l=p.d
l.toString
n=l}else{l=r.cki(q)
n=l}}o=n
r.e.saG(o)
r.n(new C.dnY(r,p,o,q))
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c==null){w=1
break}l=r.e
if(B.b.F(l.a.a).length===0)l.saG(r.cki(q))
r.n(new C.dnZ(r,q))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$auU,v)},
auH(d){return this.dzw(d)},
dzv(){return this.auH(!0)},
dzw(d){var w=0,v=A.l(x.e),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$auH=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.b.F(q.e.a.a)
k=q.c
k.toString
n=x.F
k=A.f(k,B.c,n)
k.toString
k=C.caG(l,k).a
if(k.length!==0){n=q.c
n.toString
A.a7(n,B.d.b3(k,"\n"),B.at,null)
u=!1
w=1
break}q.n(new C.do_(q))
t=4
w=7
return A.c(q.d.a.Jp(new E.aTm(l)),$async$auH)
case 7:p=f
if(q.c==null){u=!1
r=[1]
w=5
break}q.n(new C.do0(q,p))
if(d){k=q.c
k.toString
A.a7(k,A.f(k,B.c,n).gaoC(),B.a_,null)}u=!0
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.u(j)
k=q.c
if(k==null){u=!1
r=[1]
w=5
break}n=A.f(k,B.c,n)
n.toString
A.a7(k,n.aoB(A.b(o)),B.a2,null)
u=!1
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.do1(q))
w=r.pop()
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$auH,v)},
auG(){var w=0,v=A.l(x.v),u,t=this,s,r
var $async$auG=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.auH(!1),$async$auG)
case 3:if(!e||t.c==null){w=1
break}s=t.e.a.a
r=t.f
r=r==null?null:r.a
$.caD=s
$.caE=r
r=t.c
r.toString
w=4
return A.c(A.aN(r,!1).f.aL(F.acd,x.y),$async$auG)
case 4:case 1:return A.j(u,v)}})
return A.k($async$auG,v)},
gdkP(){var w=this.e.a.a
if(w.length===0)return 1
return B.b.u2("\n",w).gJ(0)+1},
ceU(d){var w=this.e,v=w.a,u=v.a,t=v.b,s=t.geR()?t.a:u.length
w.tE(new A.bz(B.b.oF(u,s,t.geR()?t.b:s,d),A.B2(B.ag,s+d.length),B.ah))},
bsl(){var w=0,v=A.l(x.v),u,t=this,s,r
var $async$bsl=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.f(r,B.c,x.F)
w=3
return A.c(A.j3(new A.ir(r.gaog()+"\n\n1. "+r.gaoj()+"\n2. "+r.gaoq()+"\n3. "+r.gaop()+"\n4. "+r.gaoi()+'\n   - <agora-action type="open-product">'+r.gzy()+'</agora-action>\n   - <agora-action type="add-to-cart">'+r.goa()+"</agora-action>\n5. "+r.gaoo()+"\n6. "+r.gaol()+"\n7. "+r.gaom()+"\n8. "+r.gaon()+"\n9. "+r.gaok()+"\n\n"+r.gaoh()+"\n"+(y.d+r.gKG()+'" description="'+r.gKF()+y.b)+"\n\n"+r.gaof()+"\n"+t.ca4(r)+"\n")),$async$bsl)
case 3:s=t.c
if(s==null){w=1
break}A.a7(s,r.gaor(),B.a_,null)
case 1:return A.j(u,v)}})
return A.k($async$bsl,v)},
u(d){var w=this,v=null,u=A.f(d,B.c,x.F),t=A.d(u.gaoF(),v,v,v,v,v,v,v,v,v),s=u.gTb()
s=A.aR(v,v,v,v,D.Ta,v,v,w.r||w.x?v:w.gbxc(),v,v,v,v,s,v)
u=u.gkC()
return A.bQ(A.kM(A.a([s,A.aR(v,v,v,v,K.kx,v,v,w.r||w.x?v:w.gbxc(),v,v,v,v,u,v)],x.u),v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,t,v,v,v,1,v,!0),v,w.dBc(),v,v,v,v,v)},
dBc(){if(this.r)return B.bW
var w=this.c
w.toString
w=A.aI(w,B.am,x.A).w.a.a>=900?24:16
return A.bnV(A.d4(new C.dnR(this)),w,16,24)},
cVk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.c
f.toString
w=A.t(f)
f=h.c
f.toString
f=A.f(f,B.c,x.F)
f.toString
v=h.f
u=v==null?g:v.b
if(u==null)u=B.kU
v=w.ax
t=A.G(8)
s=v.to
if(s==null){s=v.E
if(s==null)s=v.k3}s=A.aL(s,B.u,1)
r=w.ok.x
r=A.d("HTML",g,g,g,g,g,r==null?g:r.av(B.bv),g,g,g)
q=h.y?f.gapp():f.gapc()
if(h.y){p=v.CW
if(p==null)p=v.y}else p=v.b
o=C.ePY(f,u)
n=v.ry
if(n==null){n=v.E
if(n==null)n=v.k3}m=f.aoG(h.gdkP())
l=h.e.a.a
l=f.aou((l.length===0?B.eX:new A.k7(l)).gJ(0))
k=h.r||h.x?g:new C.dnT(h,f)
k=A.ce(D.aVb,g,A.d(f.gaoO(),g,g,g,g,g,g,g,g,g),k,g)
j=h.r||h.x?g:new C.dnU(h,f)
j=A.ce(D.aWC,g,A.d(f.gaoy(),g,g,g,g,g,g,g,g,g),j,g)
i=h.r||h.x?g:h.gd1F()
return A.X(g,A.bi(B.a1,A.a([D.aUz,r,new C.aor(q,p,g),new C.aor(o,n,g),new C.aoq(m,g),new C.aoq(l,g),k,j,A.ce(D.aVa,g,A.d(f.gaov(),g,g,g,g,g,g,g,g,g),i,g),A.hw(D.aVj,g,f.gaoN(),g,g,g)],x.u),B.bz,g,8,8),B.o,g,g,new A.T(v.k2,g,s,t,g,g,B.r),g,g,g,g,B.ar,g,g,g)},
cYA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c
h.toString
h=A.f(h,B.c,x.F)
h.toString
if(j.Q.a.length===0){w=j.c
w.toString
v=A.t(w)
h=h.gapB()
w=v.ok.Q
return new A.cc(B.bU,i,i,A.d(h,i,i,i,i,i,w==null?i:w.aX(v.ax.b,B.B),i,i,i),i)}w=j.c
w.toString
v=A.t(w)
w=v.ax
u=w.id
u=(u==null?w.fy:u).B(0.5)
t=A.G(8)
s=A.aL(w.fy.B(0.28),B.u,1)
r=w.k1
q=r==null
p=A.S(D.SV,q?w.go:r,i,i,18)
h=h.gaoZ()
o=v.ok
n=o.x
if(n==null)n=i
else n=n.aX(q?w.go:r,B.bv)
m=x.u
m=A.a([A.z(A.a([p,B.z,A.d(h,i,i,i,i,i,n,i,i,i)],m),B.l,i,B.e,B.f,0,i,i),B.Q],m)
for(h=j.Q.a,p=h.length,o=o.Q,w=w.go,l=0;l<h.length;h.length===p||(0,A.a6)(h),++l){k=h[l]
if(o==null)n=i
else n=o.fS(q?w:r,1.45)
m.push(new A.J(B.eJ,A.d("- "+k,i,i,i,i,i,n,i,i,i),i))}return A.X(i,A.w(m,B.m,i,B.e,B.f,0,B.j),B.o,i,i,new A.T(u,i,s,t,i,i,B.r),i,i,i,i,B.ar,i,i,1/0)},
cUr(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c
m.toString
m=A.f(m,B.c,x.F)
m.toString
w=o.c
w.toString
v=A.aI(w,B.am,x.A).w.a.a<420
w=v?B.a1:B.ld
u=v?1/0:n
t=o.r||o.x?n:o.gbxc()
t=A.ce(D.Ta,n,A.d(m.gTb(),n,n,n,n,n,n,n,n,n),t,n)
s=v?1/0:n
r=o.r||o.x?n:new C.dnS(o)
q=o.x?G.bS:M.Tl
r=L.zF(q,n,A.d(m.gapb(),n,n,n,n,n,n,n,n,n),r,n)
q=v?1/0:n
p=o.r||o.x?n:o.gdzu()
return A.bi(w,A.a([new A.ad(u,n,t,n),new A.ad(s,n,r,n),new A.ad(q,n,A.bL(D.aX7,n,A.d(m.gapa(),n,n,n,n,n,n,n,n,n),p,n),n)],x.u),B.ad,D.c_n,8,8)}}
C.b_h.prototype={
u(d){var w,v,u,t,s=null,r=this.c,q=r.a.a,p=q.length===0?1:B.b.u2("\n",q).gJ(0)+1,o=p<32?32:p
q=A.G(8)
w=A.aL(D.awR,B.u,1)
v=x.u
u=A.a([],v)
for(t=1;t<=o;++t)u.push(new A.ad(s,21,A.d(""+t,s,s,s,s,s,D.bSy,s,s,s),s))
return A.X(s,A.z(A.a([A.X(s,A.b5(A.w(u,B.eH,s,B.e,B.f,0,B.j),B.q,s,B.w,s,s,s,B.cL,s,B.y),B.o,D.ayu,s,s,s,s,s,s,D.aLc,s,s,54),A.P(A.bB(s,B.O,!1,s,!0,B.q,s,A.bD(),r,D.az5,s,s,s,s,2,D.aYe,B.w,!0,s,!0,s,!0,s,B.a4,s,s,s,s,s,B.qz,s,s,s,s,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.X,s,s,s,s,s,s,s,s,s,s,s,D.bSp,!0,B.L,B.v4,B.M,s,s,s,s),1,s)],v),B.a9,s,B.e,B.f,0,s,s),B.aV,s,s,new A.T(D.OM,s,w,q,s,s,B.r),s,s,s,s,s,s,s,s)}}
C.aor.prototype={
u(d){var w=null,v=A.t(d),u=this.d,t=u.B(0.1),s=A.G(999),r=A.aL(u.B(0.32),B.u,1),q=v.ok.ax
u=q==null?w:q.aX(u,B.bv)
return A.X(w,A.d(this.c,w,w,w,w,w,u,w,w,w),B.o,w,w,new A.T(t,w,r,s,w,w,B.r),w,w,w,w,B.bO,w,w,w)}}
C.aoq.prototype={
u(d){var w,v,u=null,t=A.t(d),s=t.ok.Q
if(s==null)s=u
else{w=t.ax
v=w.rx
s=s.bUF(v==null?w.k3:v,"monospace")}return A.d(this.c,u,u,u,u,u,s,u,u,u)}}
var z=a.updateTypes(["B<~>()","~()"])
C.dnV.prototype={
$0(){var w=this.a
w.y=!0
w.Q=this.b},
$S:0}
C.dnW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnX.prototype={
$0(){var w=this.a
w.r=!0
w.z=null},
$S:0}
C.dnY.prototype={
$0(){var w=this,v=w.a
v.f=w.b
v.y=!1
v.Q=C.caG(w.c,w.d)
v.r=!1},
$S:0}
C.dnZ.prototype={
$0(){var w,v=this.a
v.f=null
v.y=!1
w=this.b
v.Q=C.caG(v.e.a.a,w)
v.z=w.gaoH()
v.r=!1},
$S:0}
C.do_.prototype={
$0(){return this.a.x=!0},
$S:0}
C.do0.prototype={
$0(){var w=this.a
w.f=this.b
w.y=!1},
$S:0}
C.do1.prototype={
$0(){return this.a.x=!1},
$S:0}
C.dnR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.u,j=A.a([],k),i=this.a
if(i.z!=null){w=i.c
w.toString
v=A.t(w)
w=i.c
w.toString
w=A.f(w,B.c,x.F)
w.toString
u=v.ax
t=u.id
t=(t==null?u.fy:t).B(0.5)
s=A.G(8)
r=A.aL(u.fy.B(0.24),B.u,1)
q=u.k1
p=q==null
o=A.S(N.pr,p?u.go:q,l,l,20)
n=i.z
n.toString
m=v.ok.Q
if(m==null)u=l
else u=m.aX(p?u.go:q,B.B)
u=A.P(A.d(n,l,l,l,l,l,u,l,l,l),1,l)
q=i.r||i.x?l:i.gbxc()
B.d.v(j,A.a([A.X(l,A.z(A.a([o,B.z,u,A.eg(O.FY,l,A.d(w.gkC(),l,l,l,l,l,l,l,l,l),q,l)],k),B.m,l,B.e,B.f,0,l,l),B.o,l,l,new A.T(t,l,r,s,l,l,B.r),l,l,l,l,B.ar,l,l,l),B.n],k))}j.push(i.cVk())
j.push(B.n)
j.push(i.cYA())
if(i.Q.a.length!==0)j.push(B.n)
j.push(new A.ad(l,e.d,new C.b_h(i.e,l),l))
j.push(B.n)
j.push(i.cUr())
return A.b5(A.w(j,B.l,l,B.e,B.I,0,B.j),B.q,l,B.w,l,l,l,l,l,B.y)},
$S:111}
C.dnT.prototype={
$0(){var w=this.b
return this.a.ceU(y.d+w.gKG()+'" description="'+w.gKF()+y.b)},
$S:0}
C.dnU.prototype={
$0(){var w=this.a
return w.ceU(w.ca4(this.b))},
$S:0}
C.dnS.prototype={
$0(){return this.a.dzv()},
$S:0};(function installTearOffs(){var w=a._instance_0u
var v
w(v=C.att.prototype,"gcdX","ddV",1)
w(v,"gbxc","auU",0)
w(v,"gdzu","auG",0)
w(v,"gd1F","bsl",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.A,[C.aTo,C.w5])
v(C.Bq,A.eA)
v(C.M0,A.L)
v(C.att,A.U)
w(A.bt,[C.dnV,C.dnW,C.dnX,C.dnY,C.dnZ,C.do_,C.do0,C.do1,C.dnT,C.dnU,C.dnS])
v(C.dnR,A.ca)
w(A.x,[C.b_h,C.aor,C.aoq])})()
A.b_(b.typeUniverse,JSON.parse('{"M0":{"L":[],"m":[]},"att":{"U":["M0"]},"b_h":{"x":[],"m":[]},"aor":{"x":[],"m":[]},"aoq":{"x":[],"m":[]}}'))
var y={d:'\n  <agora-product-list source="latest" limit="8" layout="grid" card="platform" title="',b:'" section-background="#ffffff" title-color="#17202a" max-width="920"></agora-product-list>\n',g:"Do not call APIs yourself to load products or create carts."}
var x={F:A.C("by"),x:A.C("v<n>"),u:A.C("v<m>"),A:A.C("e8"),q:A.C("xM"),k:A.C("AT"),e:A.C("F"),y:A.C("A?"),v:A.C("~")};(function constants(){var w=a.makeConstList
D.awR=new A.a3(1,0.2,0.2549019607843137,0.3333333333333333,B.A)
D.OM=new A.a3(1,0.043137254901960784,0.06666666666666667,0.12549019607843137,B.A)
D.ayu=new A.a3(1,0.06666666666666667,0.09411764705882353,0.15294117647058825,B.A)
D.az5=new A.a3(1,0.5764705882352941,0.7725490196078432,0.9921568627450981,B.A)
D.aLc=new A.ar(0,14,10,0)
D.SV=new A.a0(983325,"MaterialIcons",!1)
D.aTH=new A.a0(983649,"MaterialIcons",!0)
D.Ta=new A.at(D.aTH,null,null,null,null)
D.aUz=new A.at(F.SM,18,null,null,null)
D.aTj=new A.a0(63084,"MaterialIcons",!1)
D.aVa=new A.at(D.aTj,18,null,null,null)
D.aVb=new A.at(I.SG,18,null,null,null)
D.aVj=new A.at(D.SV,18,null,null,null)
D.aTk=new A.a0(63117,"MaterialIcons",!1)
D.aWC=new A.at(D.aTk,18,null,null,null)
D.aX7=new A.at(H.FO,null,null,null,null)
D.OY=new A.a3(1,0.5803921568627451,0.6392156862745098,0.7215686274509804,B.A)
D.bT2=new A.ag(!0,D.OY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLG=new A.ar(14,12,14,12)
D.aYe=new A.f7(null,null,null,null,null,null,null,null,null,null,"<section>...</section>",null,D.bT2,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.aLG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,D.OM,null,null,null,B.j3,null,null,B.j3,B.j3,!0,null,null,null,null)
D.cc8=new C.Bq(0,"script")
D.ccj=new C.w5("<\\s*script\\b","Do not use script to implement custom product, cart, or payment flows.",D.cc8)
D.cc9=new C.Bq(1,"iframe")
D.cch=new C.w5("<\\s*iframe\\b","Do not embed iframes that lead to external product or payment pages.",D.cc9)
D.cca=new C.Bq(2,"form")
D.ccn=new C.w5("<\\s*form\\b","Do not create custom forms that collect order, payment, or buyer data.",D.cca)
D.ahg=new C.Bq(3,"apiCall")
D.cci=new C.w5("\\bfetch\\s*\\(",y.g,D.ahg)
D.ccf=new C.w5("\\bXMLHttpRequest\\b",y.g,D.ahg)
D.ccb=new C.Bq(4,"addToCart")
D.ccg=new C.w5("\\baddToCart\\s*\\(","Adding to cart must use Agora platform components.",D.ccb)
D.ccc=new C.Bq(5,"checkout")
D.ccm=new C.w5("\\bcheckout\\s*\\(","Checkout must use the Agora platform flow.",D.ccc)
D.ccd=new C.Bq(6,"payment")
D.cck=new C.w5("\\bpayment\\s*\\(","Payment must use the Agora platform flow.",D.ccd)
D.cce=new C.Bq(7,"externalCheckout")
D.ccl=new C.w5("https?://[^\\\"']*(paypal|stripe|binance|checkout|payment)","Do not link to external payment or checkout services.",D.cce)
D.b7i=w([D.ccj,D.cch,D.ccn,D.cci,D.ccf,D.ccg,D.ccm,D.cck,D.ccl],A.C("v<w5>"))
D.bMz=new C.aTo(B.O)
D.bSp=new A.ag(!0,B.P2,null,"monospace",null,null,13,null,null,null,null,null,1.62,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSy=new A.ag(!0,D.OY,null,"monospace",null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_n=new A.K("layout-bottom-storefront-editor",A.C("K<n>"))})()};
(a=>{a["t3Nei4uHttW7KBw2lpWm0EwMZls="]=a.current})($__dart_deferred_initializers__);