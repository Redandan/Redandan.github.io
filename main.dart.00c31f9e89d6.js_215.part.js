((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,G,E,H,A={
eaZ(d,e,f,g){return new A.aQl(d,e,g,f,null)},
eIF(d){var w=B.a([],x.P)
return new A.d0V(B.rm(d,$.enn(),new A.dpr(w),null),w)},
eIE(d){var w,v,u=B.az("\\btype\\s*=\\s*[\\\"']?([a-zA-Z-]+)",!1,!1,!1,!1)
u=u.fd(d==null?"":d)
w=u==null?null:u.b[1]
v=w==null?null:w.toLowerCase()
A:{if("open-product"===v){u=D.agz
break A}if("add-to-cart"===v){u=D.Bj
break A}u=null
break A}return u},
eID(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.G,j=B.a([],k)
for(w=$.enm().vy(0,d),w=new B.M8(w.a,w.b,w.c),v=x.F,u=0;w.G();){t=w.d
s=(t==null?v.a(t):t).b
r=s[1]
q=s.index
if(q>u){p=A.eIz(C.c.am(d,u,q))
o=p.a
n=B.az("<!--.*?-->",!0,!0,!1,!1)
n=B.aU(o,n,"")
m=B.az("<!doctype[^>]*>",!1,!1,!1,!1)
n=B.aU(n,m,"")
m=B.az("</\\s*[a-zA-Z][^>]*>",!0,!1,!1,!1)
if(C.c.F(B.aU(n,m,"")).length!==0)j.push(new A.a3o(o,A.dpl(o,"data-agora-preview-height"),A.dpl(o,"data-agora-preview-height-mobile"),A.eIC(o)))
o=s[2]
j.push(A.een(r,o==null?"":o,p))}else{o=s[2]
j.push(A.een(r,o==null?"":o,D.c7U))}u=q+s[0].length}if(u<d.length){l=C.c.bV(d,u)
if(A.eIA(l))j.push(A.eem(l))}return j.length===0?B.a([A.eem(d)],k):j},
een(d,e,f){var w,v,u,t,s,r,q,p,o,n=B.az("\\blimit\\s*=\\s*[\\\"']?(\\d+)",!1,!1,!1,!1),m=d==null
n=n.fd(m?"":d)
w=n==null?null:n.b[1]
v=B.bJ(w==null?"":w,null)
n=C.h.dN(v==null?8:v,1,24)
u=A.eIB(d,e)
t=A.eep(d,"section-background")
s=A.eep(d,"title-color")
r=B.az("\\bmax-width\\s*=\\s*[\\\"']?(\\d+)",!1,!1,!1,!1)
r=r.fd(m?"":d)
q=r==null?null:r.b[1]
p=B.dS(q==null?"":q)
m=C.k.dN(p==null?920:p,320,1280)
r=A.eeq(d,"title")
if(r==null)r=f.b
if(r==null)r="Store products"
o=A.eeq(d,"description")
return new A.aoZ(n,u,t,s,m,r,o==null?f.c:o)},
eIz(d){var w,v,u,t,s=B.az("^(.*)<section\\b[^>]*>\\s*<h2[^>]*>(.*?)<\\s*/\\s*h2\\s*>\\s*(?:<p[^>]*>(.*?)<\\s*/\\s*p\\s*>\\s*)?$",!1,!0,!1,!1).fd(d)
if(s!=null){w=s.b
v=w[1]
if(v==null)v=""
u=w[2]
u=A.dpm(u==null?"":u)
w=w[3]
return new A.a3Z(v,u,A.dpm(w==null?"":w))}t=B.az("^(.*)<h2[^>]*>(.*?)<\\s*/\\s*h2\\s*>\\s*(?:<p[^>]*>(.*?)<\\s*/\\s*p\\s*>\\s*)?$",!1,!0,!1,!1).fd(d)
if(t!=null){w=t.b
v=w[1]
if(v==null)v=""
u=w[2]
u=A.dpm(u==null?"":u)
w=w[3]
return new A.a3Z(v,u,A.dpm(w==null?"":w))}return new A.a3Z(d,null,null)},
eIA(d){var w,v=B.az("<!--.*?-->",!0,!0,!1,!1)
v=B.aU(d,v,"")
w=B.az("<!doctype[^>]*>",!1,!1,!1,!1)
v=B.aU(v,w,"")
w=B.az("</\\s*[a-zA-Z][^>]*>",!0,!1,!1,!1)
return C.c.F(B.aU(v,w,"")).length!==0},
eem(d){var w=A.dpl(d,"data-agora-preview-height"),v=A.dpl(d,"data-agora-preview-height-mobile"),u=B.az(y.c,!1,!1,!1,!1).fd(d),t=u==null?null:u.b[1]
return new A.a3o(d,w,v,(t==null?null:t.toLowerCase())==="none")},
eIC(d){var w=B.az(y.c,!1,!1,!1,!1).fd(d),v=w==null?null:w.b[1]
return(v==null?null:v.toLowerCase())==="none"},
dpl(d,e){var w=B.az("\\b"+e+"\\s*=\\s*[\\\"']?(\\d+)",!1,!1,!1,!1).fd(d),v=w==null?null:w.b[1],u=B.dS(v==null?"":v)
return C.k.dN(u==null?160:u,120,720)},
eeq(d,e){var w,v=B.az("\\b"+e+"\\s*=\\s*([\\\"'])(.*?)\\1",!1,!0,!1,!1),u=v.fd(d==null?"":d)
v=u==null?null:u.b[2]
w=C.c.F(A.eeo(v==null?"":v))
return w.length===0?null:w},
dpm(d){var w,v=B.az("<[^>]+>",!0,!1,!1,!1)
v=A.eeo(B.aU(d,v," "))
w=B.az("\\s+",!0,!1,!1,!1)
return C.c.F(B.aU(v,w," "))},
eeo(d){var w=B.aU(d,"&nbsp;"," ")
w=B.aU(w,"&amp;","&")
w=B.aU(w,"&lt;","<")
w=B.aU(w,"&gt;",">")
w=B.aU(w,"&quot;",'"')
return B.aU(w,"&#39;","'")},
eIB(d,e){var w,v=null,u=B.az("\\bcard\\s*=\\s*[\\\"']custom[\\\"']?",!1,!1,!1,!1),t=d==null?"":d
if(!u.b.test(t))return v
u=B.az("<\\s*template\\b[^>]*>(.*?)<\\s*/\\s*template\\s*>",!1,!0,!1,!1).fd(e)
w=u==null?v:u.b[1]
u=w==null
if((u?v:C.c.F(w).length===0)===!0)u=v
else u=u?v:C.c.F(w)
return u},
eep(d,e){var w,v=B.az("\\b"+e+"\\s*=\\s*[\\\"']?(#[0-9a-fA-F]{6})",!1,!1,!1,!1)
v=v.fd(d==null?"":d)
w=v==null?null:v.b[1]
if(w==null)return null
return B.dh(B.e0("ff"+C.c.bV(w,1),null,16))},
aQl:function aQl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
c6b:function c6b(d,e){this.a=d
this.b=e},
as0:function as0(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
as1:function as1(d,e){var _=this
_.d=$
_.e=d
_.f=e
_.r=!0
_.c=_.a=_.w=null},
dpG:function dpG(d){this.a=d},
dpH:function dpH(d){this.a=d},
dpF:function dpF(){},
dps:function dps(d){this.a=d},
dpt:function dpt(d){this.a=d},
dpu:function dpu(d,e){this.a=d
this.b=e},
dpv:function dpv(d,e){this.a=d
this.b=e},
dpw:function dpw(d){this.a=d},
dpD:function dpD(){},
dpE:function dpE(d){this.a=d},
dpy:function dpy(d,e){this.a=d
this.b=e},
dpx:function dpx(d,e,f){this.a=d
this.b=e
this.c=f},
dpz:function dpz(d,e){this.a=d
this.b=e},
dpB:function dpB(d,e){this.a=d
this.b=e},
dpA:function dpA(d,e,f){this.a=d
this.b=e
this.c=f},
dpC:function dpC(d,e){this.a=d
this.b=e},
aXQ:function aXQ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
b7L:function b7L(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
d0V:function d0V(d,e){this.a=d
this.b=e},
a2t:function a2t(d,e){this.a=d
this.b=e},
b7M:function b7M(d,e){this.a=d
this.b=e},
dpr:function dpr(d){this.a=d},
a4R:function a4R(){},
a3o:function a3o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aoZ:function aoZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a3Z:function a3Z(d,e,f){this.a=d
this.b=e
this.c=f}},D,F,I,K,L
B=c[0]
C=c[2]
G=c[553]
E=c[211]
H=c[724]
A=a.updateHolder(c[149],A)
D=c[778]
F=c[174]
I=c[723]
K=c[453]
L=c[452]
A.aQl.prototype={
u(d){return B.eo(B.da(new A.c6b(this,A.eID(this.c))),C.G,!0)}}
A.as0.prototype={
P(){return new A.as1($.ak().$1$0(x.V),C.jm)}}
A.as1.prototype={
X(){var w,v=this
v.a6()
w=B.dWD(!0,new A.dpG(v),new A.dpH(v),null)
v.d!==$&&B.aJ()
v.d=w
v.a_P()},
aT(d){var w
this.b_(d)
w=this.a
if(d.c!=w.c||d.d!==w.d||d.e!=w.e||d.f!==w.f)this.a_P()},
a_P(){var w=0,v=B.l(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_P=B.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
if(o==null){r.n(new A.dps(r))
w=1
break}r.n(new A.dpt(r))
t=4
w=7
return B.c(B.eJ(new A.dpu(r,o),!1,x.A),$async$a_P)
case 7:q=e
if(r.c==null){w=1
break}r.n(new A.dpv(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new A.dpw(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$a_P,v)},
cf0(d){var w=this.c
w.toString
B.aM(w,!1).f.aK(B.LI(null,d.a),x.X)},
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.t(d),j=B.f(d,C.b,x.J)
j.toString
w=m.a
v=w.r
u=v==null
if(u)v=C.G
t=w.w
if(t==null)t=u?D.wi:l
s=(t==null?D.O1:t).A(0.68)
r=u?k.dPa(k.ax.dPN(C.G,D.wi,D.O1,D.atK,C.G),k.ok.dKe(D.wi,D.wi)):k
w=m.a
q=w.x
w=w.y
p=r.ok
o=p.r
n=x.p
o=B.a([B.d(w,l,l,l,l,l,o==null?l:o.aW(t,C.bu),l,l,l)],n)
w=m.a.z
if(C.c.F(w==null?"":w).length!==0){w.toString
w=C.c.F(w)
p=p.z
C.d.B(o,B.a([C.bx,B.d(w,l,l,l,l,l,p==null?l:p.fM(s,1.5),l,l,l)],n))}o.push(C.n)
if(m.r)o.push(B.da(new A.dpD()))
else if(m.w!=null){w=j.gWR()
p=m.w
p.toString
o.push(new B.d7(K.tg,w,p,l,l,B.a([B.bM(L.ko,l,B.d(j.gkm(),l,l,l,l,l,l,l,l,l),m.gdC3(),l)],n),l))}else if(m.f.length===0)o.push(new B.J(D.aH_,new B.d7(C.bX,j.ga8p(),j.ganJ(),l,l,C.aV,l),l))
else o.push(B.da(new A.dpE(m)))
return new B.nU(r,new B.c6(new B.S(v,l,l,l,l,l,C.r),C.aw,new B.J(D.aHt,B.aK(new B.ba(new B.ay(0,q,0,1/0),B.w(o,C.ab,l,C.e,C.f,0,C.j),l),l,l,l),l),l),l)},
du_(d,e){var w,v,u,t,s,r,q,p,o=C.k.Z(B.pp(e),2),n=e.cg,m=n.gc9(n)?n.gS(n):""
n=C.h.l(e.a)
w=C.h.l(e.id)
v=C.h.l(e.r)
u=C.h.l(e.k1)
t=e.fy
t=t==null?null:C.k.Z(t,1)
if(t==null)t=""
s=x.N
r=B.Z(["product.id",n,"product.title",e.b,"product.imageUrl",m,"product.priceUsdt",o,"product.viewCount",w,"product.stock",v,"product.salesCount",u,"product.rating",t],s,s)
for(n=new B.cq(r,B.E(r).k("cq<1,2>")).gap(0),q=d;n.G();){p=n.d
w=p.a
v=p.b
v=B.aU(v,"&","&amp;")
v=B.aU(v,"<","&lt;")
v=B.aU(v,">","&gt;")
v=B.aU(v,'"',"&quot;")
v=B.aU(v,"'","&#39;")
q=B.aU(q,"{{"+w+"}}",v)}return q}}
A.aXQ.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.eIF(h.d),e=B.f(d,C.b,x.J)
e.toString
w=f.b
if(w.length===0)w=B.a([new A.a2t(D.agz,e.gz3()),new A.a2t(D.Bj,e.gnO())],x.P)
v=B.G(8)
u=h.f
t=B.G(8)
s=x.p
r=B.a([],s)
for(q=w.length,p=h.e,o=h.r,n=h.w,m=h.x,l=h.y,k=0;k<w.length;w.length===q||(0,B.aa)(w),++k){j=w[k]
i=j.a
i=B.a([new A.b7L(i,p&&i===D.Bj?e.gB8():j.b,u,p,o,n,m,l,g)],s)
if(j!==C.d.gaO(w))i.push(C.bx)
C.d.B(r,i)}return B.ej(!1,C.ap,!0,v,B.ef(!1,t,!0,B.w(B.a([new F.T1(f.a,260,!1,g),new B.J(D.aI4,B.w(r,C.ab,g,C.e,C.f,0,C.j),g)],s),C.ab,g,C.e,C.f,0,C.j),g,!0,g,g,g,g,g,g,g,g,g,g,g,u,g,g,g,g,g,g,g),C.o,C.a6,0,g,g,g,g,g,C.bt)}}
A.b7L.prototype={
u(d){var w,v,u,t,s,r,q=this,p=null,o=B.t(d),n=B.f(d,C.b,x.J)
n.toString
w=q.f
v=!w&&q.r!=null&&!q.x
u=q.c===D.Bj
t=B.cp(p,p,p,p,p,G.Di,p,p,p,C.bP)
if(u)if(w)s=q.e
else if(q.x)s=p
else s=v?q.r:q.w
else s=q.e
if(u&&q.x)w=new B.ad(16,16,B.hh(p,o.ax.c,p,p,p,p,p,2,p,p),p)
else{if(u)if(w)w=C.lv
else w=q.y?C.xG:I.RE
else w=H.Fh
w=B.P(w,p,p,p,18)}r=C.c.F(q.d)
return new B.ad(p,42,B.bM(w,p,B.d(r.length===0?q.d43(n):r,p,1,C.R,p,!1,p,p,p,p),s,t),p)},
d43(d){var w
switch(this.c.a){case 0:w=d.gz3()
break
case 1:if(this.f)w=d.gB8()
else w=this.y?d.gRR():d.gnO()
break
default:w=null}return w}}
A.d0V.prototype={}
A.a2t.prototype={}
A.b7M.prototype={
Y(){return"_StorefrontActionType."+this.b}}
A.a4R.prototype={}
A.a3o.prototype={}
A.aoZ.prototype={}
A.a3Z.prototype={}
var z=a.updateTypes(["B<~>()","wP(L,ay)"])
A.c6b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.d
k=k<1/0?k:this.a.d
w=B.a([],x.p)
for(v=this.b,u=v.length,t=this.a,s=t.e,r=x.w,q=0;q<v.length;v.length===u||(0,B.aa)(v),++q){p=v[q]
A:{if(p instanceof A.a3o){o=p.a
n=C.c.F(o).length!==0}else{o=l
n=!1}if(n){n=B.aI(d,C.ar,r).w.a.a<=640?p.c:p.b
n=new F.T1(o,n,p.d,l)
break A}if(p instanceof A.aoZ){n=new A.as0(s,p.a,p.b,C.jm,p.c,p.d,p.e,p.f,p.r,l)
break A}n=C.ac
break A}w.push(n)}m=new B.ba(new B.ay(0,1/0,k,1/0),B.w(w,C.ab,l,C.e,C.f,0,C.j),l)
if(!t.r)return m
return B.b5(m,C.q,l,C.w,l,l,l,l,l,C.y)},
$S:79}
A.dpG.prototype={
$0(){return this.a.c!=null},
$S:1}
A.dpH.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.dpF())},
$S:0}
A.dpF.prototype={
$0(){},
$S:0}
A.dps.prototype={
$0(){var w=this.a
w.f=C.jm
w.r=!1
w.w=null},
$S:0}
A.dpt.prototype={
$0(){var w=this.a
w.r=!0
w.w=null},
$S:0}
A.dpu.prototype={
$0(){var w=null,v=this.a
return v.e.wA(B.aLq(w,w,w,w,w,w,0,w,this.b,v.a.d,w,w,w,w))},
$S:179}
A.dpv.prototype={
$0(){var w=this.a,v=this.b
if(v==null)v=null
else{v=v.d
v=B.a(v.slice(0),B.V(v))}w.f=v==null?C.jm:v
w.r=!1},
$S:0}
A.dpw.prototype={
$0(){var w=this.a,v=w.c
v.toString
w.w=B.f(v,C.b,x.J).gWR()
w.r=!1},
$S:0}
A.dpD.prototype={
$2(d,e){var w=B.FJ(e.b)
return E.bQw(w>=4?8:6,w,C.K)},
$S:z+1}
A.dpE.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=this.a,f=g.a.e,e=C.c.F(f==null?"":f).length!==0
f=a0.b
w=B.FJ(f)
v=B.a([],x.a)
for(u=g.f,t=u.length,s=0;s<u.length;u.length===t||(0,B.aa)(u),++s){r=u[s]
if(e){q=g.a.e
q.toString
q=g.du_(q,r)
p=g.d
p===$&&B.e()
p.gvj()
o=B.wQ(r)?new A.dpx(g,d,r):h
n=p.z.t(0,r.a)
p.gvj()
p=r.cU
v.push(new A.aXQ(q,r.rx===C.dG,new A.dpy(g,r),o,new A.dpz(g,d),n,p.gK(p)>1,h))}else{q=r.cg
q=q.gc9(q)?q.gS(q):h
p=B.pp(r)
o=r.fy
if(o==null)o=h
n=r.rx
m=g.d
m===$&&B.e()
l=r.a
k=m.Q.dv(l,C.Ms)
m.gvj()
j=B.wQ(r)?new A.dpA(g,d,r):h
l=m.z.t(0,l)
m.gvj()
i=B.wQ(r)
m.gvj()
m=r.cU
v.push(new B.Ev(r.b,h,q,p,o,r.go,r.id,r.k1,r.r,r.ay,n===C.lY,n===C.dG,new A.dpB(g,r),j,new A.dpC(g,d),k,l,i,m.gK(m)>1,C.JK,h,h))}}if(e){g=f<=640?0.46:0.78
f=B.agh(v,!0,!0,!0)
v=v.length
return new B.I2(new B.zR(w,12,12,g,h),f,C.K,C.y,!1,h,h,C.cI,h,!0,h,0,h,v,C.hS,C.w,h,h,C.q,C.bE,h)}return E.bG8(v,w,12,12,C.K,!0)},
$S:523}
A.dpy.prototype={
$0(){return this.a.cf0(this.b)},
$S:0}
A.dpx.prototype={
$0(){var w=this.a.d
w===$&&B.e()
return w.yj(this.b,this.c)},
$S:0}
A.dpz.prototype={
$0(){this.a.d===$&&B.e()
var w=this.b
B.a6(w,B.f(w,C.b,x.J).gpo(),C.as,null)
return null},
$S:0}
A.dpB.prototype={
$0(){return this.a.cf0(this.b)},
$S:0}
A.dpA.prototype={
$0(){var w=this.a.d
w===$&&B.e()
return w.yj(this.b,this.c)},
$S:0}
A.dpC.prototype={
$0(){this.a.d===$&&B.e()
var w=this.b
B.a6(w,B.f(w,C.b,x.J).gpo(),C.as,null)
return null},
$S:0}
A.dpr.prototype={
$1(d){var w,v,u=A.eIE(d.oq(1))
if(u!=null){w=d.oq(2)
if(w==null)w=""
v=B.az("<[^>]+>",!0,!1,!1,!1)
this.a.push(new A.a2t(u,C.c.F(B.aU(w,v,""))))}return""},
$S:55};(function installTearOffs(){var w=a._instance_0u
w(A.as1.prototype,"gdC3","a_P",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.x,[A.aQl,A.aXQ,A.b7L])
w(B.c5,[A.c6b,A.dpD,A.dpE])
v(A.as0,B.K)
v(A.as1,B.U)
w(B.bs,[A.dpG,A.dpH,A.dpF,A.dps,A.dpt,A.dpu,A.dpv,A.dpw,A.dpy,A.dpx,A.dpz,A.dpB,A.dpA,A.dpC])
w(B.A,[A.d0V,A.a2t,A.a4R,A.a3Z])
v(A.b7M,B.ew)
v(A.dpr,B.bt)
w(A.a4R,[A.a3o,A.aoZ])})()
B.aY(b.typeUniverse,JSON.parse('{"as0":{"K":[],"m":[]},"aQl":{"x":[],"m":[]},"as1":{"U":["as0"]},"aXQ":{"x":[],"m":[]},"b7L":{"x":[],"m":[]},"a3o":{"a4R":[]},"aoZ":{"a4R":[]}}'))
var y={c:"\\bdata-agora-preview-frame\\s*=\\s*[\\\"']?([a-zA-Z-]+)"}
var x=(function rtii(){var w=B.F
return{J:w("bv"),a:w("v<x>"),p:w("v<m>"),P:w("v<a2t>"),G:w("v<a4R>"),w:w("dZ"),V:w("mz"),F:w("wZ"),N:w("n"),X:w("A?"),A:w("oy?"),H:w("~")}})();(function constants(){D.atK=new B.a2(1,0.11372549019607843,0.47843137254901963,0.38823529411764707,C.z)
D.wi=new B.a2(1,0.09019607843137255,0.12549019607843137,0.16470588235294117,C.z)
D.O1=new B.a2(1,0.3843137254901961,0.4392156862745098,0.43529411764705883,C.z)
D.aH_=new B.ar(0,48,0,48)
D.aHt=new B.ar(16,12,16,16)
D.aI4=new B.ar(8,0,8,8)
D.c7U=new A.a3Z("",null,null)
D.agz=new A.b7M(0,"openProduct")
D.Bj=new A.b7M(1,"addToCart")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"f4d","enn",()=>B.az("<\\s*agora-action\\b([^>]*)>(.*?)<\\s*/\\s*agora-action\\s*>",!1,!0,!1,!1))
w($,"f4c","enm",()=>B.az("<\\s*agora-product-list\\b([^>]*)>(.*?)<\\s*/\\s*agora-product-list\\s*>",!1,!0,!1,!1))})()};
(a=>{a["BSAMVN/9fSGxG/UTwHKjLs9H8EU="]=a.current})($__dart_deferred_initializers__);