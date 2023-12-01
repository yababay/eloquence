import{h as U}from"../chunks/singletons.4b3ee949.js";import{p as B}from"../chunks/stores.02bd464c.js";import{b as z}from"../chunks/paths.d296fae4.js";import{i as D,h as G,j as w,k as K,l as Q,s as W,d as j,n as f,m as F}from"../chunks/scheduler.24d9fd91.js";import{p as H,t as I,b as J,d as N,S as R,i as V,r as X,u as Y,v as Z,w as x,e as A,a as q,f as h,g as b,m as v,h as k,j as g,n as $,y as m,o as y,s as O,c as S,k as E,D as tt}from"../chunks/index.55e26d53.js";import{A as et}from"../chunks/ArticleWithLink.c34c94a2.js";function L(n,t){const r=t.token={};function e(a,s,_,u){if(t.token!==r)return;t.resolved=u;let c=t.ctx;_!==void 0&&(c=c.slice(),c[_]=u);const p=a&&(t.current=a)(c);let d=!1;t.block&&(t.blocks?t.blocks.forEach((o,l)=>{l!==s&&o&&(H(),I(o,1,1,()=>{t.blocks[l]===o&&(t.blocks[l]=null)}),J())}):t.block.d(1),p.c(),N(p,1),p.m(t.mount(),t.anchor),d=!0),t.block=p,t.blocks&&(t.blocks[s]=p),d&&K()}if(D(n)){const a=G();if(n.then(s=>{w(a),e(t.then,1,t.value,s),w(null)},s=>{if(w(a),e(t.catch,2,t.error,s),w(null),!t.hasCatch)throw s}),t.current!==t.pending)return e(t.pending,0),!0}else{if(t.current!==t.then)return e(t.then,1,t.value,n),!0;t.resolved=n}}function at(n,t,r){const e=t.slice(),{resolved:a}=n;n.current===n.then&&(e[n.value]=a),n.current===n.catch&&(e[n.error]=a),n.block.p(e,r)}const nt="22",rt=!1,st=!0,ot=U(B,async n=>{let{id:t}=n.params;for(;t.length<3;)t=`0${t}`;const r=`${z}/quotations-${t}.json`,e=await fetch(r);if(e.status>299)throw"bad bundle";const a=await e.json();if(!Array.isArray(a))throw"no array";const s=Math.floor(Math.random()*a.length);return a[s]}),lt=U(B,n=>{const{id:t}=n.params;return t===nt?1:parseInt(t)+1});function ct(){return{next:lt,quotation:ot}}const qt=Object.freeze(Object.defineProperty({__proto__:null,csr:st,load:ct,ssr:rt},Symbol.toStringTag,{value:"Module"}));function ut(n,{delay:t=0,duration:r=400,easing:e=Q}={}){const a=+getComputedStyle(n).opacity;return{delay:t,duration:r,easing:e,css:s=>`opacity: ${s*a}`}}function M(n){n[5]=n[7].foreign,n[6]=n[7].russian}function it(n){let t,r=n[8]+"",e;return{c(){t=b("p"),e=v(r)},l(a){t=k(a,"P",{});var s=g(t);e=$(s,r),s.forEach(h)},m(a,s){q(a,t,s),m(t,e)},p(a,s){s&2&&r!==(r=a[8]+"")&&y(e,r)},i:f,o:f,d(a){a&&h(t)}}}function _t(n){M(n);let t,r,e=n[6].caption.trim()+"",a,s,_,u,c=n[6].author.trim()+"",p,d,o=n[5]&&T(n);return{c(){t=b("blockquote"),r=b("p"),a=v(e),s=O(),o&&o.c(),_=O(),u=b("p"),p=v(c),this.h()},l(l){t=k(l,"BLOCKQUOTE",{});var i=g(t);r=k(i,"P",{class:!0});var P=g(r);a=$(P,e),P.forEach(h),s=S(i),o&&o.l(i),_=S(i),u=k(i,"P",{class:!0});var C=g(u);p=$(C,c),C.forEach(h),i.forEach(h),this.h()},h(){E(r,"class","quotation-russian"),E(u,"class","quotation-author")},m(l,i){q(l,t,i),m(t,r),m(r,a),m(t,s),o&&o.m(t,null),m(t,_),m(t,u),m(u,p)},p(l,i){M(l),i&2&&e!==(e=l[6].caption.trim()+"")&&y(a,e),l[5]?o?o.p(l,i):(o=T(l),o.c(),o.m(t,_)):o&&(o.d(1),o=null),i&2&&c!==(c=l[6].author.trim()+"")&&y(p,c)},i(l){l&&(d||F(()=>{d=tt(t,ut,{delay:250,duration:2e3}),d.start()}))},o:f,d(l){l&&h(t),o&&o.d()}}}function T(n){let t,r=n[5].trim()+"",e;return{c(){t=b("p"),e=v(r),this.h()},l(a){t=k(a,"P",{class:!0});var s=g(t);e=$(s,r),s.forEach(h),this.h()},h(){E(t,"class","quotation-english")},m(a,s){q(a,t,s),m(t,e)},p(a,s){s&2&&r!==(r=a[5].trim()+"")&&y(e,r)},d(a){a&&h(t)}}}function pt(n){let t;return{c(){t=v(" ")},l(r){t=$(r," ")},m(r,e){q(r,t,e)},p:f,i:f,o:f,d(r){r&&h(t)}}}function ht(n){let t,r,e={ctx:n,current:null,token:null,hasCatch:!0,pending:pt,then:_t,catch:it,value:7,error:8};return L(r=n[1],e),{c(){t=A(),e.block.c()},l(a){t=A(),e.block.l(a)},m(a,s){q(a,t,s),e.block.m(a,e.anchor=s),e.mount=()=>t.parentNode,e.anchor=t},p(a,s){n=a,e.ctx=n,s&2&&r!==(r=n[1])&&L(r,e)||at(e,n,s)},d(a){a&&h(t),e.block.d(a),e.token=null,e=null}}}function mt(n){let t,r;return t=new et({props:{next:n[0],$$slots:{default:[ht]},$$scope:{ctx:n}}}),{c(){X(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,a){Z(t,e,a),r=!0},p(e,[a]){const s={};a&1&&(s.next=e[0]),a&514&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){r||(N(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){x(t,e)}}}function dt(n,t,r){let e,a,{data:s}=t;const{next:_,quotation:u}=s;return j(n,_,c=>r(0,e=c)),j(n,u,c=>r(1,a=c)),n.$$set=c=>{"data"in c&&r(4,s=c.data)},[e,a,_,u,s]}class wt extends R{constructor(t){super(),V(this,t,dt,mt,W,{data:4})}}export{wt as component,qt as universal};