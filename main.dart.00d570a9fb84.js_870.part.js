((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,E,H,I,K,L,M,N,F,C={
cbA(d,e){var w,v,u,t=A.a([],x.x),s=B.b.F(d)
if(s.length===0){w=e.gapG()
t.push(w)}w=A.az("<\\s*agora-product-list\\b",!1,!1,!1,!1)
if(!w.b.test(s)){w=e.gapQ()
t.push(w)}B.d.v(t,C.eNo(s,e))
for(v=0;v<9;++v){u=D.b7l[v]
w=A.az(u.a,!1,!1,!1,!1)
if(w.b.test(s))t.push(u.e3U(e))}return new C.aTU(t)},
eNo(d,e){var w,v,u,t,s,r,q,p=A.a([],x.x)
for(w=A.az("<\\s*agora-action\\b([^>]*)>",!1,!1,!1,!1).u5(0,d),w=new A.Nw(w.a,w.b,w.c),v=x.q;w.G();){u=w.d
t=(u==null?v.a(u):u).b[1]
if(t==null)t=""
s=A.az("\\btype\\s*=\\s*[\\\"']?([a-zA-Z-]+)",!1,!1,!1,!1).ff(t)
r=s==null?null:s.b[1]
if(r==null){s=e.gapE()
p.push(s)
continue}q=r.toLowerCase()
if(q!=="open-product"&&q!=="add-to-cart"){s=e.gapF()
p.push(s)}}return p},
aTU:function aTU(d){this.a=d},
wd:function wd(d,e,f){this.a=d
this.b=e
this.c=f},
BD:function BD(d,e){this.a=d
this.b=e},
eMl(){return new C.Me(null)},
eSE(d,e){var w
A:{if(B.kX===e){w=d.gXS()
break A}if(B.qE===e){w=d.gXR()
break A}if(B.od===e){w=d.gXU()
break A}if(B.mq===e){w=d.gXT()
break A}if(B.qD===e){w=d.gXQ()
break A}w=d.gUg()
break A}return w},
Me:function Me(d){this.a=d},
atR:function atR(d,e,f){var _=this
_.d=d
_.e=e
_.f=null
_.r=!0
_.y=_.x=_.w=!1
_.z=null
_.Q=f
_.c=_.a=null},
dqh:function dqh(d,e){this.a=d
this.b=e},
dqi:function dqi(d,e){this.a=d
this.b=e},
dqj:function dqj(d){this.a=d},
dqk:function dqk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dql:function dql(d,e){this.a=d
this.b=e},
dqm:function dqm(d){this.a=d},
dqn:function dqn(d,e){this.a=d
this.b=e},
dqo:function dqo(d){this.a=d},
dqd:function dqd(d){this.a=d},
dqf:function dqf(d,e){this.a=d
this.b=e},
dqg:function dqg(d,e){this.a=d
this.b=e},
dqe:function dqe(d){this.a=d},
b_Q:function b_Q(d,e){this.c=d
this.a=e},
aoN:function aoN(d,e,f){this.c=d
this.d=e
this.a=f},
aoM:function aoM(d,e){this.c=d
this.a=e}},D
A=c[0]
B=c[2]
G=c[339]
E=c[212]
H=c[724]
I=c[723]
K=c[449]
L=c[699]
M=c[319]
N=c[564]
F=c[722]
C=a.updateHolder(c[82],C)
D=c[721]
C.aTU.prototype={}
C.wd.prototype={
e3U(d){var w
switch(this.c.a){case 0:w=d.gapO()
break
case 1:w=d.gapN()
break
case 2:w=d.gapM()
break
case 3:w=d.gapH()
break
case 4:w=d.gapI()
break
case 5:w=d.gapJ()
break
case 6:w=d.gapK()
break
case 7:w=d.gapL()
break
default:w=null}return w}}
C.BD.prototype={
W(){return"_ForbiddenRuleCode."+this.b}}
C.Me.prototype={
O(){var w=$.am().$1$0(x.k)
return new C.atR(new E.a4Y(w),new A.al(B.L,$.aa()),D.bMH)}}
C.atR.prototype={
clq(d){var w='</div>\n        <div class="item">'
return'<!doctype html>\n<html lang="'+d.gapk()+'">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>'+d.gapm()+'</title>\n  <style>\n    body { margin: 0; font-family: system-ui, sans-serif; color: #17202a; }\n    .hero { padding: 28px 24px 24px; background: #eef7f2; }\n    .wrap { max-width: 920px; margin: 0 auto; }\n    h1 { margin: 0 0 12px; font-size: 34px; }\n    p { line-height: 1.7; }\n    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 20px; }\n    .item { padding: 16px; border: 1px solid #dce7df; border-radius: 8px; background: white; }\n    @media (max-width: 640px) {\n      .hero { padding: 24px 20px 20px; }\n      h1 { font-size: 30px; }\n      .grid { margin-top: 16px; }\n    }\n  </style>\n</head>\n<body>\n  <section class="hero">\n    <div class="wrap">\n      <h1>'+d.gapj()+"</h1>\n      <p>"+d.gapg()+'</p>\n      <div class="grid">\n        <div class="item">'+d.gaph()+w+d.gapl()+w+d.gape()+"</div>\n      </div>\n      "+B.b.F(y.d+d.gKN()+'" description="'+d.gKM()+y.b)+"\n    </div>\n  </section>\n</body>\n</html>\n"},
cb_(d){return'\n  <agora-product-list source="latest" limit="8" layout="grid" card="custom" title="'+d.gapi()+'" description="'+d.gapf()+'" section-background="#ffffff" title-color="#17202a" max-width="920">\n      <template>\n        <article class="custom-card">\n          <img src="{{product.imageUrl}}" alt="{{product.title}}">\n          <div class="custom-card-body">\n            <p class="custom-card-kicker">Agora '+d.gHM()+'</p>\n            <h3>{{product.title}}</h3>\n            <p class="custom-card-price">{{product.priceUsdt}} USDT</p>\n            <p class="custom-card-meta">'+d.gapn()+" {{product.viewCount}} \xb7 "+d.gq3()+' {{product.stock}}</p>\n            <div class="custom-card-actions">\n              <agora-action type="open-product">'+d.gzD()+'</agora-action>\n              <agora-action type="add-to-cart">'+d.gpm()+"</agora-action>\n            </div>\n          </div>\n        </article>\n      </template>\n    </agora-product-list>\n"},
X(){this.a6()
this.e.a4(this.gceQ())},
b0(){var w=this
w.by()
if(w.w)return
w.w=!0
w.avb()},
q(){var w=this.e
w.T(this.gceQ())
w.ok$=$.aa()
w.k4$=0
this.a5()},
dfm(){var w,v=this,u=v.e.a.a,t=v.c
t.toString
t=A.f(t,B.c,x.F)
t.toString
w=C.cbA(u,t)
if(!v.y){v.n(new C.dqh(v,w))
return}v.n(new C.dqi(v,w))},
avb(){var w=0,v=A.l(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$avb=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:l=r.c
l.toString
l=A.f(l,B.c,x.F)
l.toString
q=l
r.n(new C.dqj(r))
t=4
w=7
return A.c(r.d.a.zI(),$async$avb)
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
n=l}else{l=r.clq(q)
n=l}}o=n
r.e.saF(o)
r.n(new C.dqk(r,p,o,q))
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c==null){w=1
break}l=r.e
if(B.b.F(l.a.a).length===0)l.saF(r.clq(q))
r.n(new C.dql(r,q))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$avb,v)},
auY(d){return this.dBa(d)},
dB9(){return this.auY(!0)},
dBa(d){var w=0,v=A.l(x.e),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$auY=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.b.F(q.e.a.a)
k=q.c
k.toString
n=x.F
k=A.f(k,B.c,n)
k.toString
k=C.cbA(l,k).a
if(k.length!==0){n=q.c
n.toString
A.a7(n,B.d.b6(k,"\n"),B.ap,null)
u=!1
w=1
break}q.n(new C.dqm(q))
t=4
w=7
return A.c(q.d.a.Ju(new E.aTS(l)),$async$auY)
case 7:p=f
if(q.c==null){u=!1
r=[1]
w=5
break}q.n(new C.dqn(q,p))
if(d){k=q.c
k.toString
A.a7(k,A.f(k,B.c,n).gaoQ(),B.Z,null)}u=!0
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
A.a7(k,n.aoP(A.b(o)),B.a1,null)
u=!1
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dqo(q))
w=r.pop()
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$auY,v)},
auX(){var w=0,v=A.l(x.v),u,t=this,s,r
var $async$auX=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.auY(!1),$async$auX)
case 3:if(!e||t.c==null){w=1
break}s=t.e.a.a
r=t.f
r=r==null?null:r.a
$.cbx=s
$.cby=r
r=t.c
r.toString
w=4
return A.c(A.aJ(r,!1).f.aK(F.acf,x.y),$async$auX)
case 4:case 1:return A.j(u,v)}})
return A.k($async$auX,v)},
gdmj(){var w=this.e.a.a
if(w.length===0)return 1
return B.b.u5("\n",w).gJ(0)+1},
cfO(d){var w=this.e,v=w.a,u=v.a,t=v.b,s=t.geX()?t.a:u.length
w.tH(new A.bz(B.b.oJ(u,s,t.geX()?t.b:s,d),A.Bc(B.af,s+d.length),B.ag))},
bsM(){var w=0,v=A.l(x.v),u,t=this,s,r
var $async$bsM=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.f(r,B.c,x.F)
w=3
return A.c(A.j7(new A.iy(r.gaou()+"\n\n1. "+r.gaox()+"\n2. "+r.gaoE()+"\n3. "+r.gaoD()+"\n4. "+r.gaow()+'\n   - <agora-action type="open-product">'+r.gzD()+'</agora-action>\n   - <agora-action type="add-to-cart">'+r.gpm()+"</agora-action>\n5. "+r.gaoC()+"\n6. "+r.gaoz()+"\n7. "+r.gaoA()+"\n8. "+r.gaoB()+"\n9. "+r.gaoy()+"\n\n"+r.gaov()+"\n"+(y.d+r.gKN()+'" description="'+r.gKM()+y.b)+"\n\n"+r.gaot()+"\n"+t.cb_(r)+"\n")),$async$bsM)
case 3:s=t.c
if(s==null){w=1
break}A.a7(s,r.gaoF(),B.Z,null)
case 1:return A.j(u,v)}})
return A.k($async$bsM,v)},
u(d){var w=this,v=null,u=A.f(d,B.c,x.F),t=A.d(u.gaoT(),v,v,v,v,v,v,v,v,v),s=u.gTl()
s=A.aR(v,v,v,v,D.Tg,v,v,w.r||w.x?v:w.gbxJ(),v,v,v,v,s,v)
u=u.gki()
return A.bN(A.kT(A.a([s,A.aR(v,v,v,v,K.kB,v,v,w.r||w.x?v:w.gbxJ(),v,v,v,v,u,v)],x.u),v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,t,v,v,v,1,v,!0),v,w.dCT(),v,v,v,v,v)},
dCT(){if(this.r)return B.bV
var w=this.c
w.toString
w=A.aI(w,B.aj,x.A).w.a.a>=900?24:16
return A.boz(A.d2(new C.dqd(this)),w,16,24)},
cWF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.c
f.toString
w=A.t(f)
f=h.c
f.toString
f=A.f(f,B.c,x.F)
f.toString
v=h.f
u=v==null?g:v.b
if(u==null)u=B.kX
v=w.ax
t=A.G(8)
s=v.to
if(s==null){s=v.E
if(s==null)s=v.k3}s=A.aN(s,B.u,1)
r=w.ok.x
r=A.d("HTML",g,g,g,g,g,r==null?g:r.av(B.bv),g,g,g)
q=h.y?f.gapD():f.gapq()
if(h.y){p=v.CW
if(p==null)p=v.y}else p=v.b
o=C.eSE(f,u)
n=v.ry
if(n==null){n=v.E
if(n==null)n=v.k3}m=f.aoU(h.gdmj())
l=h.e.a.a
l=f.aoI((l.length===0?B.eX:new A.k9(l)).gJ(0))
k=h.r||h.x?g:new C.dqf(h,f)
k=A.ce(D.aVe,g,A.d(f.gap1(),g,g,g,g,g,g,g,g,g),k,g)
j=h.r||h.x?g:new C.dqg(h,f)
j=A.ce(D.aWF,g,A.d(f.gaoM(),g,g,g,g,g,g,g,g,g),j,g)
i=h.r||h.x?g:h.gd36()
return A.W(g,A.bi(B.a0,A.a([D.aUC,r,new C.aoN(q,p,g),new C.aoN(o,n,g),new C.aoM(m,g),new C.aoM(l,g),k,j,A.ce(D.aVd,g,A.d(f.gaoJ(),g,g,g,g,g,g,g,g,g),i,g),A.hE(D.aVm,g,f.gap0(),g,g,g)],x.u),B.bt,g,8,8),B.o,g,g,new A.R(v.k2,g,s,t,g,g,B.r),g,g,g,g,B.ar,g,g,g)},
cZV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c
h.toString
h=A.f(h,B.c,x.F)
h.toString
if(j.Q.a.length===0){w=j.c
w.toString
v=A.t(w)
h=h.gapP()
w=v.ok.Q
return new A.c9(B.bX,i,i,A.d(h,i,i,i,i,i,w==null?i:w.aX(v.ax.b,B.F),i,i,i),i)}w=j.c
w.toString
v=A.t(w)
w=v.ax
u=w.id
u=(u==null?w.fy:u).B(0.5)
t=A.G(8)
s=A.aN(w.fy.B(0.28),B.u,1)
r=w.k1
q=r==null
p=A.U(D.T0,q?w.go:r,i,i,18)
h=h.gapc()
o=v.ok
n=o.x
if(n==null)n=i
else n=n.aX(q?w.go:r,B.bv)
m=x.u
m=A.a([A.z(A.a([p,B.z,A.d(h,i,i,i,i,i,n,i,i,i)],m),B.l,i,B.e,B.f,0,i,i),B.P],m)
for(h=j.Q.a,p=h.length,o=o.Q,w=w.go,l=0;l<h.length;h.length===p||(0,A.a6)(h),++l){k=h[l]
if(o==null)n=i
else n=o.dn(q?w:r,1.45)
m.push(new A.J(B.eK,A.d("- "+k,i,i,i,i,i,n,i,i,i),i))}return A.W(i,A.w(m,B.m,i,B.e,B.f,0,B.j),B.o,i,i,new A.R(u,i,s,t,i,i,B.r),i,i,i,i,B.ar,i,i,1/0)},
cVM(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c
m.toString
m=A.f(m,B.c,x.F)
m.toString
w=o.c
w.toString
v=A.aI(w,B.aj,x.A).w.a.a<420
w=v?B.a0:B.k4
u=v?1/0:n
t=o.r||o.x?n:o.gbxJ()
t=A.ce(D.Tg,n,A.d(m.gTl(),n,n,n,n,n,n,n,n,n),t,n)
s=v?1/0:n
r=o.r||o.x?n:new C.dqe(o)
q=o.x?G.bS:L.Tr
r=A.x7(q,n,A.d(m.gapp(),n,n,n,n,n,n,n,n,n),r,n)
q=v?1/0:n
p=o.r||o.x?n:o.gdB8()
return A.bi(w,A.a([new A.ad(u,n,t,n),new A.ad(s,n,r,n),new A.ad(q,n,A.bJ(D.aXa,n,A.d(m.gapo(),n,n,n,n,n,n,n,n,n),p,n),n)],x.u),B.ac,D.c_v,8,8)}}
C.b_Q.prototype={
u(d){var w,v,u,t,s=null,r=this.c,q=r.a.a,p=q.length===0?1:B.b.u5("\n",q).gJ(0)+1,o=p<32?32:p
q=A.G(8)
w=A.aN(D.awW,B.u,1)
v=x.u
u=A.a([],v)
for(t=1;t<=o;++t)u.push(new A.ad(s,21,A.d(""+t,s,s,s,s,s,D.bSF,s,s,s),s))
return A.W(s,A.z(A.a([A.W(s,A.b4(A.w(u,B.eH,s,B.e,B.f,0,B.j),B.q,s,B.w,s,s,s,B.cM,s,B.y),B.o,D.ayz,s,s,s,s,s,s,D.aLh,s,s,54),A.N(A.bB(s,B.O,!1,s,!0,B.q,s,A.bD(),r,D.az9,s,s,s,s,2,D.aYh,B.w,!0,s,!0,s,!0,s,B.a3,s,s,s,s,s,B.qG,s,s,s,s,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.W,s,s,s,s,s,s,s,s,s,s,s,D.bSx,!0,B.J,B.vc,B.K,s,s,s,s),1,s)],v),B.a8,s,B.e,B.f,0,s,s),B.aR,s,s,new A.R(D.OP,s,w,q,s,s,B.r),s,s,s,s,s,s,s,s)}}
C.aoN.prototype={
u(d){var w=null,v=A.t(d),u=this.d,t=u.B(0.1),s=A.G(999),r=A.aN(u.B(0.32),B.u,1),q=v.ok.ax
u=q==null?w:q.aX(u,B.bv)
return A.W(w,A.d(this.c,w,w,w,w,w,u,w,w,w),B.o,w,w,new A.R(t,w,r,s,w,w,B.r),w,w,w,w,B.bO,w,w,w)}}
C.aoM.prototype={
u(d){var w,v,u=null,t=A.t(d),s=t.ok.Q
if(s==null)s=u
else{w=t.ax
v=w.rx
s=s.bVk(v==null?w.k3:v,"monospace")}return A.d(this.c,u,u,u,u,u,s,u,u,u)}}
var z=a.updateTypes(["B<~>()","~()"])
C.dqh.prototype={
$0(){var w=this.a
w.y=!0
w.Q=this.b},
$S:0}
C.dqi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dqj.prototype={
$0(){var w=this.a
w.r=!0
w.z=null},
$S:0}
C.dqk.prototype={
$0(){var w=this,v=w.a
v.f=w.b
v.y=!1
v.Q=C.cbA(w.c,w.d)
v.r=!1},
$S:0}
C.dql.prototype={
$0(){var w,v=this.a
v.f=null
v.y=!1
w=this.b
v.Q=C.cbA(v.e.a.a,w)
v.z=w.gaoV()
v.r=!1},
$S:0}
C.dqm.prototype={
$0(){return this.a.x=!0},
$S:0}
C.dqn.prototype={
$0(){var w=this.a
w.f=this.b
w.y=!1},
$S:0}
C.dqo.prototype={
$0(){return this.a.x=!1},
$S:0}
C.dqd.prototype={
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
r=A.aN(u.fy.B(0.24),B.u,1)
q=u.k1
p=q==null
o=A.U(M.pz,p?u.go:q,l,l,20)
n=i.z
n.toString
m=v.ok.Q
if(m==null)u=l
else u=m.aX(p?u.go:q,B.F)
u=A.N(A.d(n,l,l,l,l,l,u,l,l,l),1,l)
q=i.r||i.x?l:i.gbxJ()
B.d.v(j,A.a([A.W(l,A.z(A.a([o,B.z,u,A.eg(N.G6,l,A.d(w.gki(),l,l,l,l,l,l,l,l,l),q,l)],k),B.m,l,B.e,B.f,0,l,l),B.o,l,l,new A.R(t,l,r,s,l,l,B.r),l,l,l,l,B.ar,l,l,l),B.n],k))}j.push(i.cWF())
j.push(B.n)
j.push(i.cZV())
if(i.Q.a.length!==0)j.push(B.n)
j.push(new A.ad(l,e.d,new C.b_Q(i.e,l),l))
j.push(B.n)
j.push(i.cVM())
return A.b4(A.w(j,B.l,l,B.e,B.H,0,B.j),B.q,l,B.w,l,l,l,l,l,B.y)},
$S:102}
C.dqf.prototype={
$0(){var w=this.b
return this.a.cfO(y.d+w.gKN()+'" description="'+w.gKM()+y.b)},
$S:0}
C.dqg.prototype={
$0(){var w=this.a
return w.cfO(w.cb_(this.b))},
$S:0}
C.dqe.prototype={
$0(){return this.a.dB9()},
$S:0};(function installTearOffs(){var w=a._instance_0u
var v
w(v=C.atR.prototype,"gceQ","dfm",1)
w(v,"gbxJ","avb",0)
w(v,"gdB8","auX",0)
w(v,"gd36","bsM",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.A,[C.aTU,C.wd])
v(C.BD,A.eD)
v(C.Me,A.K)
v(C.atR,A.Q)
w(A.bu,[C.dqh,C.dqi,C.dqj,C.dqk,C.dql,C.dqm,C.dqn,C.dqo,C.dqf,C.dqg,C.dqe])
v(C.dqd,A.c7)
w(A.x,[C.b_Q,C.aoN,C.aoM])})()
A.b0(b.typeUniverse,JSON.parse('{"Me":{"K":[],"m":[]},"atR":{"Q":["Me"]},"b_Q":{"x":[],"m":[]},"aoN":{"x":[],"m":[]},"aoM":{"x":[],"m":[]}}'))
var y={d:'\n  <agora-product-list source="latest" limit="8" layout="grid" card="platform" title="',b:'" section-background="#ffffff" title-color="#17202a" max-width="920"></agora-product-list>\n',g:"Do not call APIs yourself to load products or create carts."}
var x={F:A.C("bv"),x:A.C("v<n>"),u:A.C("v<m>"),A:A.C("dZ"),q:A.C("xX"),k:A.C("B3"),e:A.C("E"),y:A.C("A?"),v:A.C("~")};(function constants(){var w=a.makeConstList
D.awW=new A.a3(1,0.2,0.2549019607843137,0.3333333333333333,B.A)
D.OP=new A.a3(1,0.043137254901960784,0.06666666666666667,0.12549019607843137,B.A)
D.ayz=new A.a3(1,0.06666666666666667,0.09411764705882353,0.15294117647058825,B.A)
D.az9=new A.a3(1,0.5764705882352941,0.7725490196078432,0.9921568627450981,B.A)
D.aLh=new A.ar(0,14,10,0)
D.T0=new A.a0(983325,"MaterialIcons",!1)
D.aTK=new A.a0(983649,"MaterialIcons",!0)
D.Tg=new A.at(D.aTK,null,null,null,null)
D.aUC=new A.at(F.SS,18,null,null,null)
D.aTm=new A.a0(63084,"MaterialIcons",!1)
D.aVd=new A.at(D.aTm,18,null,null,null)
D.aVe=new A.at(I.SM,18,null,null,null)
D.aVm=new A.at(D.T0,18,null,null,null)
D.aTn=new A.a0(63117,"MaterialIcons",!1)
D.aWF=new A.at(D.aTn,18,null,null,null)
D.aXa=new A.at(H.FX,null,null,null,null)
D.P0=new A.a3(1,0.5803921568627451,0.6392156862745098,0.7215686274509804,B.A)
D.bTd=new A.ag(!0,D.P0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLK=new A.ar(14,12,14,12)
D.aYh=new A.f6(null,null,null,null,null,null,null,null,null,null,"<section>...</section>",null,D.bTd,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.aLK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,D.OP,null,null,null,B.j5,null,null,B.j5,B.j5,!0,null,null,null,null)
D.ccu=new C.BD(0,"script")
D.ccF=new C.wd("<\\s*script\\b","Do not use script to implement custom product, cart, or payment flows.",D.ccu)
D.ccv=new C.BD(1,"iframe")
D.ccD=new C.wd("<\\s*iframe\\b","Do not embed iframes that lead to external product or payment pages.",D.ccv)
D.ccw=new C.BD(2,"form")
D.ccJ=new C.wd("<\\s*form\\b","Do not create custom forms that collect order, payment, or buyer data.",D.ccw)
D.ahj=new C.BD(3,"apiCall")
D.ccE=new C.wd("\\bfetch\\s*\\(",y.g,D.ahj)
D.ccB=new C.wd("\\bXMLHttpRequest\\b",y.g,D.ahj)
D.ccx=new C.BD(4,"addToCart")
D.ccC=new C.wd("\\baddToCart\\s*\\(","Adding to cart must use Agora platform components.",D.ccx)
D.ccy=new C.BD(5,"checkout")
D.ccI=new C.wd("\\bcheckout\\s*\\(","Checkout must use the Agora platform flow.",D.ccy)
D.ccz=new C.BD(6,"payment")
D.ccG=new C.wd("\\bpayment\\s*\\(","Payment must use the Agora platform flow.",D.ccz)
D.ccA=new C.BD(7,"externalCheckout")
D.ccH=new C.wd("https?://[^\\\"']*(paypal|stripe|binance|checkout|payment)","Do not link to external payment or checkout services.",D.ccA)
D.b7l=w([D.ccF,D.ccD,D.ccJ,D.ccE,D.ccB,D.ccC,D.ccI,D.ccG,D.ccH],A.C("v<wd>"))
D.bMH=new C.aTU(B.O)
D.bSx=new A.ag(!0,B.P5,null,"monospace",null,null,13,null,null,null,null,null,1.62,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSF=new A.ag(!0,D.P0,null,"monospace",null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_v=new A.H("layout-bottom-storefront-editor",A.C("H<n>"))})()};
(a=>{a["+edHfrOcX9DOwex6ycBYG2RggC4="]=a.current})($__dart_deferred_initializers__);