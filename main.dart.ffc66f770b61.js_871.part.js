((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,E,H,I,K,L,M,N,F,C={
cbp(d,e){var w,v,u,t=A.a([],x.x),s=B.b.F(d)
if(s.length===0){w=e.gapB()
t.push(w)}w=A.az("<\\s*agora-product-list\\b",!1,!1,!1,!1)
if(!w.b.test(s)){w=e.gapL()
t.push(w)}B.d.v(t,C.eN7(s,e))
for(v=0;v<9;++v){u=D.b7i[v]
w=A.az(u.a,!1,!1,!1,!1)
if(w.b.test(s))t.push(u.e3p(e))}return new C.aTO(t)},
eN7(d,e){var w,v,u,t,s,r,q,p=A.a([],x.x)
for(w=A.az("<\\s*agora-action\\b([^>]*)>",!1,!1,!1,!1).u5(0,d),w=new A.Nw(w.a,w.b,w.c),v=x.q;w.G();){u=w.d
t=(u==null?v.a(u):u).b[1]
if(t==null)t=""
s=A.az("\\btype\\s*=\\s*[\\\"']?([a-zA-Z-]+)",!1,!1,!1,!1).fe(t)
r=s==null?null:s.b[1]
if(r==null){s=e.gapz()
p.push(s)
continue}q=r.toLowerCase()
if(q!=="open-product"&&q!=="add-to-cart"){s=e.gapA()
p.push(s)}}return p},
aTO:function aTO(d){this.a=d},
wd:function wd(d,e,f){this.a=d
this.b=e
this.c=f},
BC:function BC(d,e){this.a=d
this.b=e},
eM4(){return new C.Me(null)},
eSn(d,e){var w
A:{if(B.kX===e){w=d.gXO()
break A}if(B.qE===e){w=d.gXN()
break A}if(B.od===e){w=d.gXQ()
break A}if(B.mp===e){w=d.gXP()
break A}if(B.qD===e){w=d.gXM()
break A}w=d.gUe()
break A}return w},
Me:function Me(d){this.a=d},
atN:function atN(d,e,f){var _=this
_.d=d
_.e=e
_.f=null
_.r=!0
_.y=_.x=_.w=!1
_.z=null
_.Q=f
_.c=_.a=null},
dpP:function dpP(d,e){this.a=d
this.b=e},
dpQ:function dpQ(d,e){this.a=d
this.b=e},
dpR:function dpR(d){this.a=d},
dpS:function dpS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dpT:function dpT(d,e){this.a=d
this.b=e},
dpU:function dpU(d){this.a=d},
dpV:function dpV(d,e){this.a=d
this.b=e},
dpW:function dpW(d){this.a=d},
dpL:function dpL(d){this.a=d},
dpN:function dpN(d,e){this.a=d
this.b=e},
dpO:function dpO(d,e){this.a=d
this.b=e},
dpM:function dpM(d){this.a=d},
b_J:function b_J(d,e){this.c=d
this.a=e},
aoJ:function aoJ(d,e,f){this.c=d
this.d=e
this.a=f},
aoI:function aoI(d,e){this.c=d
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
C.aTO.prototype={}
C.wd.prototype={
e3p(d){var w
switch(this.c.a){case 0:w=d.gapJ()
break
case 1:w=d.gapI()
break
case 2:w=d.gapH()
break
case 3:w=d.gapC()
break
case 4:w=d.gapD()
break
case 5:w=d.gapE()
break
case 6:w=d.gapF()
break
case 7:w=d.gapG()
break
default:w=null}return w}}
C.BC.prototype={
W(){return"_ForbiddenRuleCode."+this.b}}
C.Me.prototype={
O(){var w=$.am().$1$0(x.k)
return new C.atN(new E.a4X(w),new A.al(B.L,$.aa()),D.bME)}}
C.atN.prototype={
cl8(d){var w='</div>\n        <div class="item">'
return'<!doctype html>\n<html lang="'+d.gapf()+'">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>'+d.gaph()+'</title>\n  <style>\n    body { margin: 0; font-family: system-ui, sans-serif; color: #17202a; }\n    .hero { padding: 28px 24px 24px; background: #eef7f2; }\n    .wrap { max-width: 920px; margin: 0 auto; }\n    h1 { margin: 0 0 12px; font-size: 34px; }\n    p { line-height: 1.7; }\n    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 20px; }\n    .item { padding: 16px; border: 1px solid #dce7df; border-radius: 8px; background: white; }\n    @media (max-width: 640px) {\n      .hero { padding: 24px 20px 20px; }\n      h1 { font-size: 30px; }\n      .grid { margin-top: 16px; }\n    }\n  </style>\n</head>\n<body>\n  <section class="hero">\n    <div class="wrap">\n      <h1>'+d.gape()+"</h1>\n      <p>"+d.gapb()+'</p>\n      <div class="grid">\n        <div class="item">'+d.gapc()+w+d.gapg()+w+d.gap9()+"</div>\n      </div>\n      "+B.b.F(y.d+d.gKM()+'" description="'+d.gKL()+y.b)+"\n    </div>\n  </section>\n</body>\n</html>\n"},
caL(d){return'\n  <agora-product-list source="latest" limit="8" layout="grid" card="custom" title="'+d.gapd()+'" description="'+d.gapa()+'" section-background="#ffffff" title-color="#17202a" max-width="920">\n      <template>\n        <article class="custom-card">\n          <img src="{{product.imageUrl}}" alt="{{product.title}}">\n          <div class="custom-card-body">\n            <p class="custom-card-kicker">Agora '+d.gHM()+'</p>\n            <h3>{{product.title}}</h3>\n            <p class="custom-card-price">{{product.priceUsdt}} USDT</p>\n            <p class="custom-card-meta">'+d.gapi()+" {{product.viewCount}} \xb7 "+d.gq2()+' {{product.stock}}</p>\n            <div class="custom-card-actions">\n              <agora-action type="open-product">'+d.gzC()+'</agora-action>\n              <agora-action type="add-to-cart">'+d.gpm()+"</agora-action>\n            </div>\n          </div>\n        </article>\n      </template>\n    </agora-product-list>\n"},
X(){this.a6()
this.e.a4(this.gceB())},
b0(){var w=this
w.bA()
if(w.w)return
w.w=!0
w.av5()},
q(){var w=this.e
w.T(this.gceB())
w.ok$=$.aa()
w.k4$=0
this.a5()},
deX(){var w,v=this,u=v.e.a.a,t=v.c
t.toString
t=A.f(t,B.c,x.F)
t.toString
w=C.cbp(u,t)
if(!v.y){v.n(new C.dpP(v,w))
return}v.n(new C.dpQ(v,w))},
av5(){var w=0,v=A.l(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$av5=A.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:l=r.c
l.toString
l=A.f(l,B.c,x.F)
l.toString
q=l
r.n(new C.dpR(r))
t=4
w=7
return A.c(r.d.a.zH(),$async$av5)
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
n=l}else{l=r.cl8(q)
n=l}}o=n
r.e.saF(o)
r.n(new C.dpS(r,p,o,q))
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c==null){w=1
break}l=r.e
if(B.b.F(l.a.a).length===0)l.saF(r.cl8(q))
r.n(new C.dpT(r,q))
w=6
break
case 3:w=2
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$av5,v)},
auS(d){return this.dAK(d)},
dAJ(){return this.auS(!0)},
dAK(d){var w=0,v=A.l(x.e),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$auS=A.h(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.b.F(q.e.a.a)
k=q.c
k.toString
n=x.F
k=A.f(k,B.c,n)
k.toString
k=C.cbp(l,k).a
if(k.length!==0){n=q.c
n.toString
A.a8(n,B.d.b6(k,"\n"),B.aq,null)
u=!1
w=1
break}q.n(new C.dpU(q))
t=4
w=7
return A.c(q.d.a.Ju(new E.aTM(l)),$async$auS)
case 7:p=f
if(q.c==null){u=!1
r=[1]
w=5
break}q.n(new C.dpV(q,p))
if(d){k=q.c
k.toString
A.a8(k,A.f(k,B.c,n).gaoL(),B.Z,null)}u=!0
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
A.a8(k,n.aoK(A.b(o)),B.a1,null)
u=!1
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dpW(q))
w=r.pop()
break
case 6:case 1:return A.j(u,v)
case 2:return A.i(s.at(-1),v)}})
return A.k($async$auS,v)},
auR(){var w=0,v=A.l(x.v),u,t=this,s,r
var $async$auR=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:w=3
return A.c(t.auS(!1),$async$auR)
case 3:if(!e||t.c==null){w=1
break}s=t.e.a.a
r=t.f
r=r==null?null:r.a
$.cbm=s
$.cbn=r
r=t.c
r.toString
w=4
return A.c(A.aJ(r,!1).f.aK(F.acd,x.y),$async$auR)
case 4:case 1:return A.j(u,v)}})
return A.k($async$auR,v)},
gdlT(){var w=this.e.a.a
if(w.length===0)return 1
return B.b.u5("\n",w).gJ(0)+1},
cfz(d){var w=this.e,v=w.a,u=v.a,t=v.b,s=t.geW()?t.a:u.length
w.tH(new A.bz(B.b.oJ(u,s,t.geW()?t.b:s,d),A.Bb(B.af,s+d.length),B.ag))},
bsD(){var w=0,v=A.l(x.v),u,t=this,s,r
var $async$bsD=A.h(function(d,e){if(d===1)return A.i(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.f(r,B.c,x.F)
w=3
return A.c(A.j5(new A.ix(r.gaop()+"\n\n1. "+r.gaos()+"\n2. "+r.gaoz()+"\n3. "+r.gaoy()+"\n4. "+r.gaor()+'\n   - <agora-action type="open-product">'+r.gzC()+'</agora-action>\n   - <agora-action type="add-to-cart">'+r.gpm()+"</agora-action>\n5. "+r.gaox()+"\n6. "+r.gaou()+"\n7. "+r.gaov()+"\n8. "+r.gaow()+"\n9. "+r.gaot()+"\n\n"+r.gaoq()+"\n"+(y.d+r.gKM()+'" description="'+r.gKL()+y.b)+"\n\n"+r.gaoo()+"\n"+t.caL(r)+"\n")),$async$bsD)
case 3:s=t.c
if(s==null){w=1
break}A.a8(s,r.gaoA(),B.Z,null)
case 1:return A.j(u,v)}})
return A.k($async$bsD,v)},
u(d){var w=this,v=null,u=A.f(d,B.c,x.F),t=A.d(u.gaoO(),v,v,v,v,v,v,v,v,v),s=u.gTj()
s=A.aR(v,v,v,v,D.Te,v,v,w.r||w.x?v:w.gbxA(),v,v,v,v,s,v)
u=u.gki()
return A.bN(A.kT(A.a([s,A.aR(v,v,v,v,K.kB,v,v,w.r||w.x?v:w.gbxA(),v,v,v,v,u,v)],x.u),v,v,!0,!0,v,v,1,v,v,v,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,t,v,v,v,1,v,!0),v,w.dCs(),v,v,v,v,v)},
dCs(){if(this.r)return B.bV
var w=this.c
w.toString
w=A.aH(w,B.aj,x.A).w.a.a>=900?24:16
return A.bor(A.d2(new C.dpL(this)),w,16,24)},
cWg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.c
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
q=h.y?f.gapy():f.gapl()
if(h.y){p=v.CW
if(p==null)p=v.y}else p=v.b
o=C.eSn(f,u)
n=v.ry
if(n==null){n=v.E
if(n==null)n=v.k3}m=f.aoP(h.gdlT())
l=h.e.a.a
l=f.aoD((l.length===0?B.eX:new A.ka(l)).gJ(0))
k=h.r||h.x?g:new C.dpN(h,f)
k=A.ce(D.aVb,g,A.d(f.gaoX(),g,g,g,g,g,g,g,g,g),k,g)
j=h.r||h.x?g:new C.dpO(h,f)
j=A.ce(D.aWC,g,A.d(f.gaoH(),g,g,g,g,g,g,g,g,g),j,g)
i=h.r||h.x?g:h.gd2H()
return A.W(g,A.bi(B.a0,A.a([D.aUz,r,new C.aoJ(q,p,g),new C.aoJ(o,n,g),new C.aoI(m,g),new C.aoI(l,g),k,j,A.ce(D.aVa,g,A.d(f.gaoE(),g,g,g,g,g,g,g,g,g),i,g),A.hE(D.aVj,g,f.gaoW(),g,g,g)],x.u),B.bt,g,8,8),B.o,g,g,new A.R(v.k2,g,s,t,g,g,B.r),g,g,g,g,B.ar,g,g,g)},
cZw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c
h.toString
h=A.f(h,B.c,x.F)
h.toString
if(j.Q.a.length===0){w=j.c
w.toString
v=A.t(w)
h=h.gapK()
w=v.ok.Q
return new A.c9(B.bY,i,i,A.d(h,i,i,i,i,i,w==null?i:w.aX(v.ax.b,B.F),i,i,i),i)}w=j.c
w.toString
v=A.t(w)
w=v.ax
u=w.id
u=(u==null?w.fy:u).B(0.5)
t=A.G(8)
s=A.aN(w.fy.B(0.28),B.u,1)
r=w.k1
q=r==null
p=A.T(D.SZ,q?w.go:r,i,i,18)
h=h.gap7()
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
cVn(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c
m.toString
m=A.f(m,B.c,x.F)
m.toString
w=o.c
w.toString
v=A.aH(w,B.aj,x.A).w.a.a<420
w=v?B.a0:B.k4
u=v?1/0:n
t=o.r||o.x?n:o.gbxA()
t=A.ce(D.Te,n,A.d(m.gTj(),n,n,n,n,n,n,n,n,n),t,n)
s=v?1/0:n
r=o.r||o.x?n:new C.dpM(o)
q=o.x?G.bS:L.Tp
r=A.x6(q,n,A.d(m.gapk(),n,n,n,n,n,n,n,n,n),r,n)
q=v?1/0:n
p=o.r||o.x?n:o.gdAI()
return A.bi(w,A.a([new A.ad(u,n,t,n),new A.ad(s,n,r,n),new A.ad(q,n,A.bJ(D.aX7,n,A.d(m.gapj(),n,n,n,n,n,n,n,n,n),p,n),n)],x.u),B.ac,D.c_r,8,8)}}
C.b_J.prototype={
u(d){var w,v,u,t,s=null,r=this.c,q=r.a.a,p=q.length===0?1:B.b.u5("\n",q).gJ(0)+1,o=p<32?32:p
q=A.G(8)
w=A.aN(D.awU,B.u,1)
v=x.u
u=A.a([],v)
for(t=1;t<=o;++t)u.push(new A.ad(s,21,A.d(""+t,s,s,s,s,s,D.bSC,s,s,s),s))
return A.W(s,A.z(A.a([A.W(s,A.b4(A.w(u,B.eH,s,B.e,B.f,0,B.j),B.q,s,B.w,s,s,s,B.cM,s,B.y),B.o,D.ayx,s,s,s,s,s,s,D.aLe,s,s,54),A.P(A.bB(s,B.O,!1,s,!0,B.q,s,A.bD(),r,D.az7,s,s,s,s,2,D.aYe,B.w,!0,s,!0,s,!0,s,B.a3,s,s,s,s,s,B.qG,s,s,s,s,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.W,s,s,s,s,s,s,s,s,s,s,s,D.bSu,!0,B.J,B.va,B.K,s,s,s,s),1,s)],v),B.a8,s,B.e,B.f,0,s,s),B.aR,s,s,new A.R(D.OP,s,w,q,s,s,B.r),s,s,s,s,s,s,s,s)}}
C.aoJ.prototype={
u(d){var w=null,v=A.t(d),u=this.d,t=u.B(0.1),s=A.G(999),r=A.aN(u.B(0.32),B.u,1),q=v.ok.ax
u=q==null?w:q.aX(u,B.bv)
return A.W(w,A.d(this.c,w,w,w,w,w,u,w,w,w),B.o,w,w,new A.R(t,w,r,s,w,w,B.r),w,w,w,w,B.bO,w,w,w)}}
C.aoI.prototype={
u(d){var w,v,u=null,t=A.t(d),s=t.ok.Q
if(s==null)s=u
else{w=t.ax
v=w.rx
s=s.bV8(v==null?w.k3:v,"monospace")}return A.d(this.c,u,u,u,u,u,s,u,u,u)}}
var z=a.updateTypes(["B<~>()","~()"])
C.dpP.prototype={
$0(){var w=this.a
w.y=!0
w.Q=this.b},
$S:0}
C.dpQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dpR.prototype={
$0(){var w=this.a
w.r=!0
w.z=null},
$S:0}
C.dpS.prototype={
$0(){var w=this,v=w.a
v.f=w.b
v.y=!1
v.Q=C.cbp(w.c,w.d)
v.r=!1},
$S:0}
C.dpT.prototype={
$0(){var w,v=this.a
v.f=null
v.y=!1
w=this.b
v.Q=C.cbp(v.e.a.a,w)
v.z=w.gaoQ()
v.r=!1},
$S:0}
C.dpU.prototype={
$0(){return this.a.x=!0},
$S:0}
C.dpV.prototype={
$0(){var w=this.a
w.f=this.b
w.y=!1},
$S:0}
C.dpW.prototype={
$0(){return this.a.x=!1},
$S:0}
C.dpL.prototype={
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
o=A.T(M.pz,p?u.go:q,l,l,20)
n=i.z
n.toString
m=v.ok.Q
if(m==null)u=l
else u=m.aX(p?u.go:q,B.F)
u=A.P(A.d(n,l,l,l,l,l,u,l,l,l),1,l)
q=i.r||i.x?l:i.gbxA()
B.d.v(j,A.a([A.W(l,A.z(A.a([o,B.z,u,A.eg(N.G4,l,A.d(w.gki(),l,l,l,l,l,l,l,l,l),q,l)],k),B.m,l,B.e,B.f,0,l,l),B.o,l,l,new A.R(t,l,r,s,l,l,B.r),l,l,l,l,B.ar,l,l,l),B.n],k))}j.push(i.cWg())
j.push(B.n)
j.push(i.cZw())
if(i.Q.a.length!==0)j.push(B.n)
j.push(new A.ad(l,e.d,new C.b_J(i.e,l),l))
j.push(B.n)
j.push(i.cVn())
return A.b4(A.w(j,B.l,l,B.e,B.H,0,B.j),B.q,l,B.w,l,l,l,l,l,B.y)},
$S:102}
C.dpN.prototype={
$0(){var w=this.b
return this.a.cfz(y.d+w.gKM()+'" description="'+w.gKL()+y.b)},
$S:0}
C.dpO.prototype={
$0(){var w=this.a
return w.cfz(w.caL(this.b))},
$S:0}
C.dpM.prototype={
$0(){return this.a.dAJ()},
$S:0};(function installTearOffs(){var w=a._instance_0u
var v
w(v=C.atN.prototype,"gceB","deX",1)
w(v,"gbxA","av5",0)
w(v,"gdAI","auR",0)
w(v,"gd2H","bsD",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.A,[C.aTO,C.wd])
v(C.BC,A.eD)
v(C.Me,A.K)
v(C.atN,A.Q)
w(A.bu,[C.dpP,C.dpQ,C.dpR,C.dpS,C.dpT,C.dpU,C.dpV,C.dpW,C.dpN,C.dpO,C.dpM])
v(C.dpL,A.c6)
w(A.x,[C.b_J,C.aoJ,C.aoI])})()
A.b0(b.typeUniverse,JSON.parse('{"Me":{"K":[],"m":[]},"atN":{"Q":["Me"]},"b_J":{"x":[],"m":[]},"aoJ":{"x":[],"m":[]},"aoI":{"x":[],"m":[]}}'))
var y={d:'\n  <agora-product-list source="latest" limit="8" layout="grid" card="platform" title="',b:'" section-background="#ffffff" title-color="#17202a" max-width="920"></agora-product-list>\n',g:"Do not call APIs yourself to load products or create carts."}
var x={F:A.C("bv"),x:A.C("v<n>"),u:A.C("v<m>"),A:A.C("dY"),q:A.C("xW"),k:A.C("B2"),e:A.C("E"),y:A.C("A?"),v:A.C("~")};(function constants(){var w=a.makeConstList
D.awU=new A.a3(1,0.2,0.2549019607843137,0.3333333333333333,B.A)
D.OP=new A.a3(1,0.043137254901960784,0.06666666666666667,0.12549019607843137,B.A)
D.ayx=new A.a3(1,0.06666666666666667,0.09411764705882353,0.15294117647058825,B.A)
D.az7=new A.a3(1,0.5764705882352941,0.7725490196078432,0.9921568627450981,B.A)
D.aLe=new A.ar(0,14,10,0)
D.SZ=new A.a0(983325,"MaterialIcons",!1)
D.aTH=new A.a0(983649,"MaterialIcons",!0)
D.Te=new A.at(D.aTH,null,null,null,null)
D.aUz=new A.at(F.SQ,18,null,null,null)
D.aTj=new A.a0(63084,"MaterialIcons",!1)
D.aVa=new A.at(D.aTj,18,null,null,null)
D.aVb=new A.at(I.SK,18,null,null,null)
D.aVj=new A.at(D.SZ,18,null,null,null)
D.aTk=new A.a0(63117,"MaterialIcons",!1)
D.aWC=new A.at(D.aTk,18,null,null,null)
D.aX7=new A.at(H.FV,null,null,null,null)
D.P0=new A.a3(1,0.5803921568627451,0.6392156862745098,0.7215686274509804,B.A)
D.bTa=new A.ag(!0,D.P0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLH=new A.ar(14,12,14,12)
D.aYe=new A.f6(null,null,null,null,null,null,null,null,null,null,"<section>...</section>",null,D.bTa,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.aLH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,D.OP,null,null,null,B.j4,null,null,B.j4,B.j4,!0,null,null,null,null)
D.ccq=new C.BC(0,"script")
D.ccB=new C.wd("<\\s*script\\b","Do not use script to implement custom product, cart, or payment flows.",D.ccq)
D.ccr=new C.BC(1,"iframe")
D.ccz=new C.wd("<\\s*iframe\\b","Do not embed iframes that lead to external product or payment pages.",D.ccr)
D.ccs=new C.BC(2,"form")
D.ccF=new C.wd("<\\s*form\\b","Do not create custom forms that collect order, payment, or buyer data.",D.ccs)
D.ahh=new C.BC(3,"apiCall")
D.ccA=new C.wd("\\bfetch\\s*\\(",y.g,D.ahh)
D.ccx=new C.wd("\\bXMLHttpRequest\\b",y.g,D.ahh)
D.cct=new C.BC(4,"addToCart")
D.ccy=new C.wd("\\baddToCart\\s*\\(","Adding to cart must use Agora platform components.",D.cct)
D.ccu=new C.BC(5,"checkout")
D.ccE=new C.wd("\\bcheckout\\s*\\(","Checkout must use the Agora platform flow.",D.ccu)
D.ccv=new C.BC(6,"payment")
D.ccC=new C.wd("\\bpayment\\s*\\(","Payment must use the Agora platform flow.",D.ccv)
D.ccw=new C.BC(7,"externalCheckout")
D.ccD=new C.wd("https?://[^\\\"']*(paypal|stripe|binance|checkout|payment)","Do not link to external payment or checkout services.",D.ccw)
D.b7i=w([D.ccB,D.ccz,D.ccF,D.ccA,D.ccx,D.ccy,D.ccE,D.ccC,D.ccD],A.C("v<wd>"))
D.bME=new C.aTO(B.O)
D.bSu=new A.ag(!0,B.P5,null,"monospace",null,null,13,null,null,null,null,null,1.62,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSC=new A.ag(!0,D.P0,null,"monospace",null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_r=new A.H("layout-bottom-storefront-editor",A.C("H<n>"))})()};
(a=>{a["S88lGf9ABO5A1WCgUYPgWlcMHoc="]=a.current})($__dart_deferred_initializers__);