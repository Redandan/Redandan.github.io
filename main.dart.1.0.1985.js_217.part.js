((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,G,E,H,A={
dDl(d,e,f,g){return new A.aGC(d,e,g,f,null)},
e8c(d){var w=B.a([],x.P)
return new A.cCc(B.pZ(d,$.dOQ(),new A.cY_(w),null),w)},
e8b(d){var w,v,u=B.be("\\btype\\s*=\\s*[\\\"']?([a-zA-Z-]+)",!1,!1,!1,!1)
u=u.dH(d==null?"":d)
w=u==null?null:u.b[1]
v=w==null?null:w.toLowerCase()
A:{if("open-product"===v){u=D.ad9
break A}if("add-to-cart"===v){u=D.zB
break A}u=null
break A}return u},
e8a(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.G,j=B.a([],k)
for(w=$.dOP().qD(0,d),w=new B.Jx(w.a,w.b,w.c),v=x.F,u=0;w.F();){t=w.d
s=(t==null?v.a(t):t).b
r=s[1]
q=s.index
if(q>u){p=A.e86(C.c.ao(d,u,q))
o=p.a
n=B.be("<!--.*?-->",!0,!0,!1,!1)
n=B.aR(o,n,"")
m=B.be("<!doctype[^>]*>",!1,!1,!1,!1)
n=B.aR(n,m,"")
m=B.be("</\\s*[a-zA-Z][^>]*>",!0,!1,!1,!1)
if(C.c.G(B.aR(n,m,"")).length!==0)j.push(new A.a01(o,A.cXU(o,"data-agora-preview-height"),A.cXU(o,"data-agora-preview-height-mobile"),A.e89(o)))
o=s[2]
j.push(A.dG9(r,o==null?"":o,p))}else{o=s[2]
j.push(A.dG9(r,o==null?"":o,D.bXD))}u=q+s[0].length}if(u<d.length){l=C.c.bA(d,u)
if(A.e87(l))j.push(A.dG8(l))}return j.length===0?B.a([A.dG8(d)],k):j},
dG9(d,e,f){var w,v,u,t,s,r,q,p,o,n=B.be("\\blimit\\s*=\\s*[\\\"']?(\\d+)",!1,!1,!1,!1),m=d==null
n=n.dH(m?"":d)
w=n==null?null:n.b[1]
v=B.bK(w==null?"":w,null)
n=C.i.cf(v==null?8:v,1,24)
u=A.e88(d,e)
t=A.dGb(d,"section-background")
s=A.dGb(d,"title-color")
r=B.be("\\bmax-width\\s*=\\s*[\\\"']?(\\d+)",!1,!1,!1,!1)
r=r.dH(m?"":d)
q=r==null?null:r.b[1]
p=B.du(q==null?"":q)
m=C.k.cf(p==null?920:p,320,1280)
r=A.dGc(d,"title")
if(r==null)r=f.b
if(r==null)r="Store products"
o=A.dGc(d,"description")
return new A.ajN(n,u,t,s,m,r,o==null?f.c:o)},
e86(d){var w,v,u,t,s=B.be("^(.*)<section\\b[^>]*>\\s*<h2[^>]*>(.*?)<\\s*/\\s*h2\\s*>\\s*(?:<p[^>]*>(.*?)<\\s*/\\s*p\\s*>\\s*)?$",!1,!0,!1,!1).dH(d)
if(s!=null){w=s.b
v=w[1]
if(v==null)v=""
u=w[2]
u=A.cXV(u==null?"":u)
w=w[3]
return new A.a0B(v,u,A.cXV(w==null?"":w))}t=B.be("^(.*)<h2[^>]*>(.*?)<\\s*/\\s*h2\\s*>\\s*(?:<p[^>]*>(.*?)<\\s*/\\s*p\\s*>\\s*)?$",!1,!0,!1,!1).dH(d)
if(t!=null){w=t.b
v=w[1]
if(v==null)v=""
u=w[2]
u=A.cXV(u==null?"":u)
w=w[3]
return new A.a0B(v,u,A.cXV(w==null?"":w))}return new A.a0B(d,null,null)},
e87(d){var w,v=B.be("<!--.*?-->",!0,!0,!1,!1)
v=B.aR(d,v,"")
w=B.be("<!doctype[^>]*>",!1,!1,!1,!1)
v=B.aR(v,w,"")
w=B.be("</\\s*[a-zA-Z][^>]*>",!0,!1,!1,!1)
return C.c.G(B.aR(v,w,"")).length!==0},
dG8(d){var w=A.cXU(d,"data-agora-preview-height"),v=A.cXU(d,"data-agora-preview-height-mobile"),u=B.be(y.c,!1,!1,!1,!1).dH(d),t=u==null?null:u.b[1]
return new A.a01(d,w,v,(t==null?null:t.toLowerCase())==="none")},
e89(d){var w=B.be(y.c,!1,!1,!1,!1).dH(d),v=w==null?null:w.b[1]
return(v==null?null:v.toLowerCase())==="none"},
cXU(d,e){var w=B.be("\\b"+e+"\\s*=\\s*[\\\"']?(\\d+)",!1,!1,!1,!1).dH(d),v=w==null?null:w.b[1],u=B.du(v==null?"":v)
return C.k.cf(u==null?160:u,120,720)},
dGc(d,e){var w,v=B.be("\\b"+e+"\\s*=\\s*([\\\"'])(.*?)\\1",!1,!0,!1,!1),u=v.dH(d==null?"":d)
v=u==null?null:u.b[2]
w=C.c.G(A.dGa(v==null?"":v))
return w.length===0?null:w},
cXV(d){var w,v=B.be("<[^>]+>",!0,!1,!1,!1)
v=A.dGa(B.aR(d,v," "))
w=B.be("\\s+",!0,!1,!1,!1)
return C.c.G(B.aR(v,w," "))},
dGa(d){var w=B.aR(d,"&nbsp;"," ")
w=B.aR(w,"&amp;","&")
w=B.aR(w,"&lt;","<")
w=B.aR(w,"&gt;",">")
w=B.aR(w,"&quot;",'"')
return B.aR(w,"&#39;","'")},
e88(d,e){var w,v=null,u=B.be("\\bcard\\s*=\\s*[\\\"']custom[\\\"']?",!1,!1,!1,!1),t=d==null?"":d
if(!u.b.test(t))return v
u=B.be("<\\s*template\\b[^>]*>(.*?)<\\s*/\\s*template\\s*>",!1,!0,!1,!1).dH(e)
w=u==null?v:u.b[1]
u=w==null
if((u?v:C.c.G(w).length===0)===!0)u=v
else u=u?v:C.c.G(w)
return u},
dGb(d,e){var w,v=B.be("\\b"+e+"\\s*=\\s*[\\\"']?(#[0-9a-fA-F]{6})",!1,!1,!1,!1)
v=v.dH(d==null?"":d)
w=v==null?null:v.b[1]
if(w==null)return null
return B.cZ(B.dK("ff"+C.c.bA(w,1),16))},
aGC:function aGC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
bPR:function bPR(d,e){this.a=d
this.b=e},
amD:function amD(d,e,f,g,h,i,j,k,l,m){var _=this
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
amE:function amE(d,e){var _=this
_.d=$
_.e=d
_.f=e
_.r=!0
_.c=_.a=_.w=null},
cYe:function cYe(d){this.a=d},
cYf:function cYf(d){this.a=d},
cYd:function cYd(){},
cY0:function cY0(d){this.a=d},
cY1:function cY1(d){this.a=d},
cY2:function cY2(d,e){this.a=d
this.b=e},
cY3:function cY3(d,e){this.a=d
this.b=e},
cY4:function cY4(d){this.a=d},
cYb:function cYb(){},
cYc:function cYc(d){this.a=d},
cY6:function cY6(d,e){this.a=d
this.b=e},
cY5:function cY5(d,e,f){this.a=d
this.b=e
this.c=f},
cY7:function cY7(d,e){this.a=d
this.b=e},
cY9:function cY9(d,e){this.a=d
this.b=e},
cY8:function cY8(d,e,f){this.a=d
this.b=e
this.c=f},
cYa:function cYa(d,e){this.a=d
this.b=e},
aM5:function aM5(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
aWL:function aWL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
cCc:function cCc(d,e){this.a=d
this.b=e},
a_8:function a_8(d,e){this.a=d
this.b=e},
aWM:function aWM(d,e){this.a=d
this.b=e},
cY_:function cY_(d){this.a=d},
a1u:function a1u(){},
a01:function a01(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajN:function ajN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a0B:function a0B(d,e,f){this.a=d
this.b=e
this.c=f}},D,F,I,K,L
B=c[0]
C=c[2]
G=c[549]
E=c[203]
H=c[719]
A=a.updateHolder(c[144],A)
D=c[772]
F=c[168]
I=c[718]
K=c[450]
L=c[449]
A.aGC.prototype={
u(d){return B.dZ(B.cW(new A.bPR(this,A.e8a(this.c))),C.E,!0)}}
A.amD.prototype={
O(){return new A.amE($.aw().$1$0(x.V),C.iO)}}
A.amE.prototype={
Z(){var w,v=this
v.a5()
w=B.dBp(new A.cYe(v),new A.cYf(v))
v.d!==$&&B.b5()
v.d=w
v.Se()},
aK(d){var w
this.b1(d)
w=this.a
if(d.c!=w.c||d.d!==w.d||d.e!=w.e||d.f!==w.f)this.Se()},
Se(){var w=0,v=B.l(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Se=B.h(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
if(o==null){r.p(new A.cY0(r))
w=1
break}r.p(new A.cY1(r))
t=4
w=7
return B.c(B.ef(new A.cY2(r,o),!1,x.A),$async$Se)
case 7:q=e
if(r.c==null){w=1
break}r.p(new A.cY3(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.p(new A.cY4(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.j(u,v)
case 2:return B.i(s.at(-1),v)}})
return B.k($async$Se,v)},
bZZ(d){var w=this.c
w.toString
B.aL(w,!1).f.aG(B.Jg(null,d.a),x.X)},
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.q(d),j=B.e(d,C.b,x.J)
j.toString
w=m.a
v=w.r
u=v==null
if(u)v=C.E
t=w.w
if(t==null)t=u?D.uN:l
s=(t==null?D.LT:t).v(0.68)
r=u?k.dot(k.ax.dp7(C.E,D.uN,D.LT,D.aqk,C.E),k.ok.dkn(D.uN,D.uN)):k
w=m.a
q=w.x
w=w.y
p=r.ok
o=p.r
n=x.p
o=B.a([B.d(w,l,l,l,l,l,o==null?l:o.aH(t,C.bn),l,l,l)],n)
w=m.a.z
if(C.c.G(w==null?"":w).length!==0){w.toString
w=C.c.G(w)
p=p.z
C.e.A(o,B.a([C.bq,B.d(w,l,l,l,l,l,p==null?l:p.dY(s,1.5),l,l,l)],n))}o.push(C.n)
if(m.r)o.push(B.cW(new A.cYb()))
else if(m.w!=null){w=j.gOZ()
p=m.w
p.toString
o.push(new B.d0(K.r3,w,p,l,l,B.a([B.bF(L.jK,l,B.d(j.gi9(),l,l,l,l,l,l,l,l,l),m.gddi(),l)],n),l))}else if(m.f.length===0)o.push(new B.I(D.aDC,new B.d0(C.bO,j.ga_l(),j.gady(),l,l,C.aV,l),l))
else o.push(B.cW(new A.cYc(m)))
return new B.mc(r,new B.bZ(new B.O(v,l,l,l,l,l,C.r),C.aq,new B.I(D.aE5,B.aJ(new B.ba(new B.at(0,q,0,1/0),B.w(o,C.ak,l,C.d,C.h,0,C.j),l),l,l,l),l),l),l)},
d65(d,e){var w,v,u,t,s,r,q,p,o=C.k.X(B.ob(e),2),n=e.bu,m=n.gbs(n)?n.gM(n):""
n=C.i.l(e.a)
w=C.i.l(e.id)
v=C.i.l(e.r)
u=C.i.l(e.k1)
t=e.fy
t=t==null?null:C.k.X(t,1)
if(t==null)t=""
s=x.N
r=B.aa(["product.id",n,"product.title",e.b,"product.imageUrl",m,"product.priceUsdt",o,"product.viewCount",w,"product.stock",v,"product.salesCount",u,"product.rating",t],s,s)
for(n=new B.cG(r,B.C(r).m("cG<1,2>")).gam(0),q=d;n.F();){p=n.d
w=p.a
v=p.b
v=B.aR(v,"&","&amp;")
v=B.aR(v,"<","&lt;")
v=B.aR(v,">","&gt;")
v=B.aR(v,'"',"&quot;")
v=B.aR(v,"'","&#39;")
q=B.aR(q,"{{"+w+"}}",v)}return q}}
A.aM5.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.e8c(h.d),e=B.e(d,C.b,x.J)
e.toString
w=f.b
if(w.length===0)w=B.a([new A.a_8(D.ad9,e.gxt()),new A.a_8(D.zB,e.gkw())],x.P)
v=B.B(8)
u=h.f
t=B.B(8)
s=x.p
r=B.a([],s)
for(q=w.length,p=h.e,o=h.r,n=h.w,m=h.x,l=h.y,k=0;k<w.length;w.length===q||(0,B.a9)(w),++k){j=w[k]
i=j.a
i=B.a([new A.aWL(i,p&&i===D.zB?e.gwe():j.b,u,p,o,n,m,l,g)],s)
if(j!==C.e.gaF(w))i.push(C.bq)
C.e.A(r,i)}return B.e6(!1,C.al,!0,v,B.dQ(!1,t,!0,B.w(B.a([new F.Qj(f.a,260,!1,g),new B.I(D.aEI,B.w(r,C.ak,g,C.d,C.h,0,C.j),g)],s),C.ak,g,C.d,C.h,0,C.j),g,!0,g,g,g,g,g,g,g,g,g,g,g,u,g,g,g,g,g,g,g),C.o,C.a_,0,g,g,g,g,g,C.bx)}}
A.aWL.prototype={
u(d){var w,v,u,t,s,r,q=this,p=null,o=B.q(d),n=B.e(d,C.b,x.J)
n.toString
w=q.f
v=!w&&q.r!=null&&!q.x
u=q.c===D.zB
t=B.cg(p,p,p,p,p,G.Bu,p,p,p,C.bH)
if(u)if(w)s=q.e
else if(q.x)s=p
else s=v?q.r:q.w
else s=q.e
if(u&&q.x)w=new B.ae(16,16,B.fF(p,o.ax.c,p,p,p,p,p,2,p,p),p)
else{if(u)if(w)w=C.kN
else w=q.y?C.w7:I.Pl
else w=H.Dw
w=B.N(w,p,p,p,18)}r=C.c.G(q.d)
return new B.ae(p,42,B.bF(w,p,B.d(r.length===0?q.cIR(n):r,p,1,C.P,p,!1,p,p,p,p),s,t),p)},
cIR(d){var w
switch(this.c.a){case 0:w=d.gxt()
break
case 1:if(this.f)w=d.gwe()
else w=this.y?d.gL6():d.gkw()
break
default:w=null}return w}}
A.cCc.prototype={}
A.a_8.prototype={}
A.aWM.prototype={
V(){return"_StorefrontActionType."+this.b}}
A.a1u.prototype={}
A.a01.prototype={}
A.ajN.prototype={}
A.a0B.prototype={}
var z=a.updateTypes(["T<~>()","vj(M,at)"])
A.bPR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.d
k=k<1/0?k:this.a.d
w=B.a([],x.p)
for(v=this.b,u=v.length,t=this.a,s=t.e,r=x.w,q=0;q<v.length;v.length===u||(0,B.a9)(v),++q){p=v[q]
A:{if(p instanceof A.a01){o=p.a
n=C.c.G(o).length!==0}else{o=l
n=!1}if(n){n=B.aC(d,C.ai,r).w.a.a<=640?p.c:p.b
n=new F.Qj(o,n,p.d,l)
break A}if(p instanceof A.ajN){n=new A.amD(s,p.a,p.b,C.iO,p.c,p.d,p.e,p.f,p.r,l)
break A}n=C.an
break A}w.push(n)}m=new B.ba(new B.at(0,1/0,k,1/0),B.w(w,C.ak,l,C.d,C.h,0,C.j),l)
if(!t.r)return m
return B.b3(m,C.t,l,C.x,l,l,l,l,l,C.y)},
$S:70}
A.cYe.prototype={
$0(){return this.a.c!=null},
$S:31}
A.cYf.prototype={
$0(){var w=this.a
if(w.c!=null)w.p(new A.cYd())},
$S:0}
A.cYd.prototype={
$0(){},
$S:0}
A.cY0.prototype={
$0(){var w=this.a
w.f=C.iO
w.r=!1
w.w=null},
$S:0}
A.cY1.prototype={
$0(){var w=this.a
w.r=!0
w.w=null},
$S:0}
A.cY2.prototype={
$0(){var w=null,v=this.a
return v.e.rM(B.aBR(w,w,w,w,w,w,0,w,this.b,v.a.d,w,w,w,w))},
$S:166}
A.cY3.prototype={
$0(){var w=this.a,v=this.b
if(v==null)v=null
else{v=v.d
v=B.a(v.slice(0),B.V(v))}w.f=v==null?C.iO:v
w.r=!1},
$S:0}
A.cY4.prototype={
$0(){var w=this.a,v=w.c
v.toString
w.w=B.e(v,C.b,x.J).gOZ()
w.r=!1},
$S:0}
A.cYb.prototype={
$2(d,e){var w=B.Do(e.b)
return E.bAL(w>=4?8:6,w,C.J)},
$S:z+1}
A.cYc.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=this.a,f=g.a.e,e=C.c.G(f==null?"":f).length!==0
f=a0.b
w=B.Do(f)
v=B.a([],x.a)
for(u=g.f,t=u.length,s=0;s<u.length;u.length===t||(0,B.a9)(u),++s){r=u[s]
if(e){q=g.a.e
q.toString
q=g.d65(q,r)
p=g.d
p===$&&B.f()
if(p.c==null)p.c=B.XB()
o=B.tp(r)?new A.cY5(g,d,r):h
n=p.e.t(0,r.a)
if(p.c==null)p.c=B.XB()
p=r.bE
v.push(new A.aM5(q,r.rx===C.dr,new A.cY6(g,r),o,new A.cY7(g,d),n,p.gI(p)>1,h))}else{q=r.bu
q=q.gbs(q)?q.gM(q):h
p=B.ob(r)
o=r.fy
if(o==null)o=h
n=r.rx
m=g.d
m===$&&B.f()
l=r.a
k=m.f.c5(l,C.Kj)
if(m.c==null)m.c=B.XB()
j=B.tp(r)?new A.cY8(g,d,r):h
l=m.e.t(0,l)
if(m.c==null)m.c=B.XB()
i=B.tp(r)
if(m.c==null)m.c=B.XB()
m=r.bE
v.push(new B.Cr(r.b,h,q,p,o,r.go,r.id,r.k1,r.r,r.ay,n===C.le,n===C.dr,new A.cY9(g,r),j,new A.cYa(g,d),k,l,i,m.gI(m)>1,C.I0,h,h))}}if(e){g=f<=640?0.46:0.78
f=B.aci(v,!0,!0,!0)
v=v.length
return new B.FD(new B.ya(w,12,12,g,h),f,C.J,C.y,!1,h,h,C.ct,h,!0,h,0,h,v,C.hu,C.x,h,h,C.t,C.bu,h)}return E.bqV(v,w,12,12,C.J,!0)},
$S:380}
A.cY6.prototype={
$0(){return this.a.bZZ(this.b)},
$S:0}
A.cY5.prototype={
$0(){var w=this.a.d
w===$&&B.f()
return w.Az(this.b,this.c)},
$S:0}
A.cY7.prototype={
$0(){this.a.d===$&&B.f()
var w=this.b
B.a7(w,B.e(w,C.b,x.J).glx(),C.az,null)
return null},
$S:0}
A.cY9.prototype={
$0(){return this.a.bZZ(this.b)},
$S:0}
A.cY8.prototype={
$0(){var w=this.a.d
w===$&&B.f()
return w.Az(this.b,this.c)},
$S:0}
A.cYa.prototype={
$0(){this.a.d===$&&B.f()
var w=this.b
B.a7(w,B.e(w,C.b,x.J).glx(),C.az,null)
return null},
$S:0}
A.cY_.prototype={
$1(d){var w,v,u=A.e8b(d.lF(1))
if(u!=null){w=d.lF(2)
if(w==null)w=""
v=B.be("<[^>]+>",!0,!1,!1,!1)
this.a.push(new A.a_8(u,C.c.G(B.aR(w,v,""))))}return""},
$S:52};(function installTearOffs(){var w=a._instance_0u
w(A.amE.prototype,"gddi","Se",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.x,[A.aGC,A.aM5,A.aWL])
w(B.c2,[A.bPR,A.cYb,A.cYc])
v(A.amD,B.J)
v(A.amE,B.R)
w(B.bv,[A.cYe,A.cYf,A.cYd,A.cY0,A.cY1,A.cY2,A.cY3,A.cY4,A.cY6,A.cY5,A.cY7,A.cY9,A.cY8,A.cYa])
w(B.G,[A.cCc,A.a_8,A.a1u,A.a0B])
v(A.aWM,B.eq)
v(A.cY_,B.bw)
w(A.a1u,[A.a01,A.ajN])})()
B.aU(b.typeUniverse,JSON.parse('{"amD":{"J":[],"m":[]},"aGC":{"x":[],"m":[]},"amE":{"R":["amD"]},"aM5":{"x":[],"m":[]},"aWL":{"x":[],"m":[]},"a01":{"a1u":[]},"ajN":{"a1u":[]}}'))
var y={c:"\\bdata-agora-preview-frame\\s*=\\s*[\\\"']?([a-zA-Z-]+)"}
var x=(function rtii(){var w=B.A
return{J:w("bu"),a:w("v<x>"),p:w("v<m>"),P:w("v<a_8>"),G:w("v<a1u>"),w:w("dy"),V:w("lH"),F:w("vr"),N:w("o"),X:w("G?"),A:w("nq?"),H:w("~")}})();(function constants(){D.aqk=new B.Z(1,0.11372549019607843,0.47843137254901963,0.38823529411764707,C.z)
D.uN=new B.Z(1,0.09019607843137255,0.12549019607843137,0.16470588235294117,C.z)
D.LT=new B.Z(1,0.3843137254901961,0.4392156862745098,0.43529411764705883,C.z)
D.aDC=new B.ao(0,48,0,48)
D.aE5=new B.ao(16,12,16,16)
D.aEI=new B.ao(8,0,8,8)
D.bXD=new A.a0B("",null,null)
D.ad9=new A.aWM(0,"openProduct")
D.zB=new A.aWM(1,"addToCart")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"etT","dOQ",()=>B.be("<\\s*agora-action\\b([^>]*)>(.*?)<\\s*/\\s*agora-action\\s*>",!1,!0,!1,!1))
w($,"etS","dOP",()=>B.be("<\\s*agora-product-list\\b([^>]*)>(.*?)<\\s*/\\s*agora-product-list\\s*>",!1,!0,!1,!1))})()};
(a=>{a["5MkQPjRgtjm/KpdUaKP3VIB1FXI="]=a.current})($__dart_deferred_initializers__);