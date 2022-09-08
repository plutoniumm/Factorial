import{_ as Q}from"./chunks/preload-helper-aa6bc0ce.js";import{n as be,s as Ze,S as tt,i as nt,a as rt,e as N,c as at,b as C,g as Z,t as D,d as x,f as V,h as q,j as st,o as Ee,k as ot,l as it,m as lt,p as ye,q as F,r as ct,u as ft,v as ut,w as z,x as se,y as B,z as J,A as Je}from"./chunks/index-23535c31.js";class ve{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(e,t){this.status=e,this.location=t}}function dt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function pt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function _t(r,e){const t=new URL(r);for(const s of ht){let a=t[s];Object.defineProperty(t,s,{get(){return e(),a},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(s,a,u)=>u(r,a),mt(t),t}function mt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ee=[];function Oe(r,e=be){let t;const s=new Set;function a(i){if(Ze(r,i)&&(r=i,t)){const f=!ee.length;for(const p of s)p[1](),ee.push(p,r);if(f){for(let p=0;p<ee.length;p+=2)ee[p][0](ee[p+1]);ee.length=0}}}function u(i){a(i(r))}function n(i,f=be){const p=[i,f];return s.add(p),s.size===1&&(t=e(a)||be),i(r),()=>{s.delete(p),s.size===0&&(t(),t=null)}}return{set:a,update:u,subscribe:n}}let Fe="",xe="";function gt(r){Fe=r.base,xe=r.assets||Fe}function Ge(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function Re(){return{x:pageXOffset,y:pageYOffset}}function Me(r){let e,t=null,s=null,a=null;for(const n of r.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=ke(n,"data-sveltekit-noscroll")),s===null&&(s=ke(n,"data-sveltekit-prefetch")),a===null&&(a=ke(n,"data-sveltekit-reload")));const u=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:u,options:{noscroll:t,prefetch:s,reload:a}}}function ke(r,e){const t=r.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function He(r){const e=Oe(r);let t=!0;function s(){t=!0,e.update(n=>n)}function a(n){t=!1,e.set(n)}function u(n){let i;return e.subscribe(f=>{(i===void 0||t&&f!==i)&&n(i=f)})}return{notify:s,set:a,subscribe:u}}function wt(){const{set:r,subscribe:e}=Oe(!1);let t;async function s(){clearTimeout(t);const a=await fetch(`${xe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:u}=await a.json(),n=u!=="1662619750067";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function bt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Ie=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;fe.delete(s)}return Ie(r,e)};const fe=new Map;function yt(r,e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(a+=`[data-hash="${bt(t.body)}"]`);const u=document.querySelector(a);if(u!=null&&u.textContent){const{body:n,...i}=JSON.parse(u.textContent),f=u.getAttribute("data-ttl");return f&&fe.set(e,{body:n,init:i,ttl:1e3*Number(f)}),Promise.resolve(new Response(n,i))}return Ie(r,t)}function vt(r,e){const t=fe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);fe.delete(r)}return Ie(r,e)}const kt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function $t(r){const e=[],t=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(Et).map((u,n,i)=>{const f=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const b=n===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((S,T)=>{if(T%2){const E=kt.exec(S);if(!E)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,P,K,G]=E;return e.push(K),t.push(G),P?"(.*?)":"([^/]+?)"}return b&&S.includes(".")&&(s=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:t}}function Et(r){return!/^\([^)]+\)$/.test(r)}function Rt(r,e,t,s){const a={};for(let u=0;u<e.length;u+=1){const n=e[u],i=t[u],f=r[u+1]||"";if(i){const p=s[i];if(!p)throw new Error(`Missing "${i}" param matcher`);if(!p(f))return}a[n]=f}return a}function St(r,e,t,s){const a=new Set(e);return Object.entries(t).map(([i,[f,p,b]])=>{const{pattern:S,names:T,types:E}=$t(i),P={id:i,exec:K=>{const G=S.exec(K);if(G)return Rt(G,T,E,s)},errors:[1,...b||[]].map(K=>r[K]),layouts:[0,...p||[]].map(n),leaf:u(f)};return P.errors.length=P.layouts.length=Math.max(P.errors.length,P.layouts.length),P});function u(i){const f=i<0;return f&&(i=~i),[f,r[i]]}function n(i){return i===void 0?i:[a.has(i),r[i]]}}function Lt(r){let e,t,s;var a=r[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&B(e,n,i),C(n,t,i),s=!0},p(n,i){const f={};if(i&4&&(f.data=n[2]),i&2&&(f.form=n[1]),a!==(a=n[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),z(e.$$.fragment),V(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&D(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&J(e,n)}}}function Ot(r){let e,t,s;var a=r[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[jt]},$$scope:{ctx:n}}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&B(e,n,i),C(n,t,i),s=!0},p(n,i){const f={};if(i&4&&(f.data=n[2]),i&1051&&(f.$$scope={dirty:i,ctx:n}),a!==(a=n[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),z(e.$$.fragment),V(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&D(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&J(e,n)}}}function It(r){let e,t,s;var a=r[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&B(e,n,i),C(n,t,i),s=!0},p(n,i){const f={};if(i&8&&(f.data=n[3]),i&2&&(f.form=n[1]),a!==(a=n[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),z(e.$$.fragment),V(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&D(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&J(e,n)}}}function Pt(r){let e,t,s;var a=r[0][1];function u(n){return{props:{data:n[3],$$slots:{default:[Ut]},$$scope:{ctx:n}}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&B(e,n,i),C(n,t,i),s=!0},p(n,i){const f={};if(i&8&&(f.data=n[3]),i&1043&&(f.$$scope={dirty:i,ctx:n}),a!==(a=n[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),z(e.$$.fragment),V(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&D(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&J(e,n)}}}function Ut(r){let e,t,s;var a=r[0][2];function u(n){return{props:{data:n[4],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&B(e,n,i),C(n,t,i),s=!0},p(n,i){const f={};if(i&16&&(f.data=n[4]),i&2&&(f.form=n[1]),a!==(a=n[0][2])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),z(e.$$.fragment),V(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&D(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&J(e,n)}}}function jt(r){let e,t,s,a;const u=[Pt,It],n=[];function i(f,p){return f[0][2]?0:1}return e=i(r),t=n[e]=u[e](r),{c(){t.c(),s=N()},l(f){t.l(f),s=N()},m(f,p){n[e].m(f,p),C(f,s,p),a=!0},p(f,p){let b=e;e=i(f),e===b?n[e].p(f,p):(Z(),D(n[b],1,1,()=>{n[b]=null}),x(),t=n[e],t?t.p(f,p):(t=n[e]=u[e](f),t.c()),V(t,1),t.m(s.parentNode,s))},i(f){a||(V(t),a=!0)},o(f){D(t),a=!1},d(f){n[e].d(f),f&&q(s)}}}function We(r){let e,t=r[6]&&Xe(r);return{c(){e=ot("div"),t&&t.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=lt(e);t&&t.l(a),a.forEach(q),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),F(e,"position","absolute"),F(e,"left","0"),F(e,"top","0"),F(e,"clip","rect(0 0 0 0)"),F(e,"clip-path","inset(50%)"),F(e,"overflow","hidden"),F(e,"white-space","nowrap"),F(e,"width","1px"),F(e,"height","1px")},m(s,a){C(s,e,a),t&&t.m(e,null)},p(s,a){s[6]?t?t.p(s,a):(t=Xe(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&q(e),t&&t.d()}}}function Xe(r){let e;return{c(){e=ct(r[7])},l(t){e=ft(t,r[7])},m(t,s){C(t,e,s)},p(t,s){s&128&&ut(e,t[7])},d(t){t&&q(e)}}}function At(r){let e,t,s,a,u;const n=[Ot,Lt],i=[];function f(b,S){return b[0][1]?0:1}e=f(r),t=i[e]=n[e](r);let p=r[5]&&We(r);return{c(){t.c(),s=rt(),p&&p.c(),a=N()},l(b){t.l(b),s=at(b),p&&p.l(b),a=N()},m(b,S){i[e].m(b,S),C(b,s,S),p&&p.m(b,S),C(b,a,S),u=!0},p(b,[S]){let T=e;e=f(b),e===T?i[e].p(b,S):(Z(),D(i[T],1,1,()=>{i[T]=null}),x(),t=i[e],t?t.p(b,S):(t=i[e]=n[e](b),t.c()),V(t,1),t.m(s.parentNode,s)),b[5]?p?p.p(b,S):(p=We(b),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(b){u||(V(t),u=!0)},o(b){D(t),u=!1},d(b){i[e].d(b),b&&q(s),p&&p.d(b),b&&q(a)}}}function Tt(r,e,t){let{stores:s}=e,{page:a}=e,{components:u}=e,{form:n}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:p=null}=e;st(s.page.notify);let b=!1,S=!1,T=null;return Ee(()=>{const E=s.page.subscribe(()=>{b&&(t(6,S=!0),t(7,T=document.title||"untitled page"))});return t(5,b=!0),E}),r.$$set=E=>{"stores"in E&&t(8,s=E.stores),"page"in E&&t(9,a=E.page),"components"in E&&t(0,u=E.components),"form"in E&&t(1,n=E.form),"data_0"in E&&t(2,i=E.data_0),"data_1"in E&&t(3,f=E.data_1),"data_2"in E&&t(4,p=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[u,n,i,f,p,b,S,T,s,a]}class Nt extends tt{constructor(e){super(),nt(this,e,Tt,At,Ze,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Dt={},ue=[()=>Q(()=>import("./chunks/0-a29a4a22.js"),["chunks/0-a29a4a22.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-99e8d8b7.js","assets/_layout-be0e98a9.css","chunks/index-23535c31.js"],import.meta.url),()=>Q(()=>import("./chunks/1-a6254823.js"),["chunks/1-a6254823.js","components/pages/_error.svelte-1f2eccad.js","assets/_error-125d203c.css","chunks/index-23535c31.js"],import.meta.url),()=>Q(()=>import("./chunks/2-bb2c4f12.js"),["chunks/2-bb2c4f12.js","chunks/_layout-e87908c1.js","components/pages/_slug_/_layout.svelte-5487ac65.js","assets/_layout-d8cf1152.css","chunks/index-23535c31.js"],import.meta.url),()=>Q(()=>import("./chunks/3-e13b070b.js"),["chunks/3-e13b070b.js","chunks/_page-c60853fe.js","components/pages/_page.svelte-cc79ff8c.js","assets/_page-5aebba9a.css","chunks/index-23535c31.js","chunks/katex-63d67c62.js"],import.meta.url),()=>Q(()=>import("./chunks/4-3fb0d260.js"),["chunks/4-3fb0d260.js","chunks/_page-2be92c82.js","chunks/preload-helper-aa6bc0ce.js","components/pages/_slug_/_page.svelte-76528631.js","assets/_page-1ff05377.css","chunks/index-23535c31.js","chunks/katex-63d67c62.js"],import.meta.url),()=>Q(()=>import("./chunks/5-d90ece65.js"),["chunks/5-d90ece65.js","chunks/_page-d84940a5.js","components/pages/books/R1/_page.svelte-b70b5b72.js","assets/_page-339ec7e5.css","chunks/index-23535c31.js"],import.meta.url)],Vt=[],qt={"":[3],"books/R1":[5],"[slug]":[4,[2]]},Ct={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})};function zt(r){r.client}const Y={url:He({}),page:He({}),navigating:Oe(null),updated:wt()},Bt="/__data.js",et="sveltekit:scroll",W="sveltekit:index",ie=St(ue,Vt,qt,Dt),Se=ue[0],Le=ue[1];Se();Le();let ae={};try{ae=JSON.parse(sessionStorage[et])}catch{}function $e(r){ae[r]=Re()}function Jt({target:r,base:e,trailing_slash:t}){var qe;const s=[],a={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},i=!1,f=!0,p=!1,b=1,S=null,T=!1,E,P=(qe=history.state)==null?void 0:qe[W];P||(P=Date.now(),history.replaceState({...history.state,[W]:P},"",location.href));const K=ae[P];K&&(history.scrollRestoration="manual",scrollTo(K.x,K.y));let G=!1,M,Pe;function Ue(){if(!S){const o=new URL(location.href);S=Promise.resolve().then(async()=>{const c=_e(o,!0);await Ae(c,o,[]),S=null,T=!1})}return S}async function de(o,{noscroll:c=!1,replaceState:_=!1,keepfocus:l=!1,state:d={}},m){return typeof o=="string"&&(o=new URL(o,Ge(document))),me({url:o,scroll:c?Re():null,keepfocus:l,redirect_chain:m,details:{state:d,replaceState:_},accepted:()=>{},blocked:()=>{},type:"goto"})}async function je(o){const c=_e(o,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=De(c),a.id=c.id,a.promise}async function Ae(o,c,_,l,d){var v,k;const m=Pe={};let g=o&&await De(o);if(!g&&c.origin===location.origin&&c.pathname===location.pathname&&(g=await oe({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!g)return await ne(c),!1;if(c=(o==null?void 0:o.url)||c,Pe!==m)return!1;if(s.length=0,g.type==="redirect")if(_.length>10||_.includes(c.pathname))g=await oe({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return de(new URL(g.location,c).href,{},[..._,c.pathname]),!1;else((k=(v=g.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await Y.updated.check()&&await ne(c);if(p=!0,l&&l.details){const{details:y}=l,w=y.replaceState?0:1;y.state[W]=P+=w,history[y.replaceState?"replaceState":"pushState"](y.state,"",c)}if(i){n=g.state,g.props.page&&(g.props.page.url=c);const y=ce();E.$set(g.props),y()}else Te(g);if(l){const{scroll:y,keepfocus:w}=l;if(!w){const $=document.body,U=$.getAttribute("tabindex");$.tabIndex=-1,$.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),U!==null?$.setAttribute("tabindex",U):$.removeAttribute("tabindex")}if(await Je(),f){const $=c.hash&&document.getElementById(c.hash.slice(1));y?scrollTo(y.x,y.y):$?$.scrollIntoView():scrollTo(0,0)}}else await Je();a.promise=null,a.id=null,f=!0,g.props.page&&(M=g.props.page),d&&d(),p=!1}function Te(o){var d,m;n=o.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),M=o.props.page;const _=ce();E=new Nt({target:r,props:{...o.props,stores:Y},hydrate:!0}),_();const l={from:null,to:le("to",{params:n.params,routeId:(m=(d=n.route)==null?void 0:d.id)!=null?m:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(g=>g(l)),i=!0}async function te({url:o,params:c,branch:_,status:l,error:d,route:m,form:g}){var U;const v=_.filter(Boolean),k={type:"loaded",state:{url:o,params:c,branch:_,error:d,route:m,session_id:b},props:{components:v.map(L=>L.node.component)}};g!==void 0&&(k.props.form=g);let y={},w=!M;for(let L=0;L<v.length;L+=1){const j=v[L];y={...y,...j.data},(w||!n.branch.some(A=>A===j))&&(k.props[`data_${L}`]=y,w=w||Object.keys((U=j.data)!=null?U:{}).length>0)}if(w||(w=Object.keys(M.data).length!==Object.keys(y).length),!n.url||o.href!==n.url.href||n.error!==d||w){k.props.page={error:d,params:c,routeId:m&&m.id,status:l,url:o,data:w?y:M.data};const L=(j,A)=>{Object.defineProperty(k.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${A}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function pe({loader:o,parent:c,url:_,params:l,routeId:d,server_data_node:m}){var y,w,$,U,L;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await o();if((y=k.shared)!=null&&y.load){let j=function(...h){for(const R of h){const{href:O}=new URL(R,_);v.dependencies.add(O)}};const A={};for(const h in l)Object.defineProperty(A,h,{get(){return v.params.add(h),l[h]},enumerable:!0});const H={routeId:d,params:A,data:(w=m==null?void 0:m.data)!=null?w:null,url:_t(_,()=>{v.url=!0}),async fetch(h,R){let O;typeof h=="string"?O=h:(O=h.url,R={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...R});const I=new URL(O,_).href;return j(I),i?vt(I,R):yt(O,I,R)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,c()}};Object.defineProperties(H,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=($=await k.shared.load.call(null,H))!=null?$:null}return{node:k,loader:o,server:m,shared:(U=k.shared)!=null&&U.load?{type:"data",data:g,uses:v}:null,data:(L=g!=null?g:m==null?void 0:m.data)!=null?L:null}}function Ne(o,c,_){if(T)return!0;if(!_)return!1;if(_.parent&&c||o.url&&_.url)return!0;for(const l of o.params)if(_.params.has(l))return!0;for(const l of _.dependencies)if(s.some(d=>d(new URL(l))))return!0;return!1}function he(o,c){var _,l;return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set((_=o.uses.dependencies)!=null?_:[]),params:new Set((l=o.uses.params)!=null?l:[]),parent:!!o.uses.parent,url:!!o.uses.url}}:(o==null?void 0:o.type)==="skip"&&c!=null?c:null}async function De({id:o,invalidating:c,url:_,params:l,route:d}){var H;if(a.id===o&&a.promise)return a.promise;const{errors:m,layouts:g,leaf:v}=d,k=n.url&&{url:o!==n.url.pathname+n.url.search,params:Object.keys(l).filter(h=>n.params[h]!==l[h])},y=[...g,v];m.forEach(h=>h==null?void 0:h().catch(()=>{})),y.forEach(h=>h==null?void 0:h[1]().catch(()=>{}));let w=null;const $=y.reduce((h,R,O)=>{var X;const I=n.branch[O],re=!!(R!=null&&R[0])&&((I==null?void 0:I.loader)!==R[1]||Ne(k,h.some(Boolean),(X=I.server)==null?void 0:X.uses));return h.push(re),h},[]);if($.some(Boolean)){try{w=await Ye(_,$)}catch(h){return oe({status:500,error:h,url:_,routeId:d.id})}if(w.type==="redirect")return w}const U=w==null?void 0:w.nodes;let L=!1;const j=y.map(async(h,R)=>{var ge,Ce;if(!h)return;const O=n.branch[R],I=(ge=U==null?void 0:U[R])!=null?ge:null;if((!I||I.type==="skip")&&h[1]===(O==null?void 0:O.loader)&&!Ne(k,L,(Ce=O.shared)==null?void 0:Ce.uses))return O;if(L=!0,(I==null?void 0:I.type)==="error")throw I;return pe({loader:h[1],url:_,params:l,routeId:d.id,parent:async()=>{var Be;const ze={};for(let we=0;we<R;we+=1)Object.assign(ze,(Be=await j[we])==null?void 0:Be.data);return ze},server_data_node:he(I,O==null?void 0:O.server)})});for(const h of j)h.catch(()=>{});const A=[];for(let h=0;h<y.length;h+=1)if(y[h])try{A.push(await j[h])}catch(R){if(R instanceof Ke)return{type:"redirect",location:R.location};let O=500,I;for(U!=null&&U.includes(R)?(O=(H=R.status)!=null?H:O,I=R.error):R instanceof ve?(O=R.status,I=R.body):I=Qe(R,{params:l,url:_,routeId:d.id});h--;)if(m[h]){let re,X=h;for(;!A[X];)X-=1;try{return re={node:await m[h](),loader:m[h],data:{},server:null,shared:null},await te({url:_,params:l,branch:A.slice(0,X+1).concat(re),status:O,error:I,route:d})}catch{continue}}await ne(_);return}else A.push(void 0);return await te({url:_,params:l,branch:A,status:200,error:null,route:d,form:c?void 0:null})}async function oe({status:o,error:c,url:_,routeId:l}){var y;const d={},m=await Se();let g=null;if(m.server)try{const w=await Ye(_,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=(y=w.nodes[0])!=null?y:null}catch{await ne(_);return}const v=await pe({loader:Se,url:_,params:d,routeId:l,parent:()=>Promise.resolve({}),server_data_node:he(g)}),k={node:await Le(),loader:Le,shared:null,server:null,data:null};return await te({url:_,params:d,branch:[v,k],status:o,error:c instanceof ve?c.body:Qe(c,{url:_,params:d,routeId:null}),route:null})}function _e(o,c){if(Ve(o))return;const _=decodeURI(o.pathname.slice(e.length)||"/");for(const l of ie){const d=l.exec(_);if(d){const m=new URL(o.origin+dt(o.pathname,t)+o.search+o.hash);return{id:m.pathname+m.search,invalidating:c,route:l,params:pt(d),url:m}}}}function Ve(o){return o.origin!==location.origin||!o.pathname.startsWith(e)}async function me({url:o,scroll:c,keepfocus:_,redirect_chain:l,details:d,type:m,delta:g,accepted:v,blocked:k}){var L,j,A,H;let y=!1;const w=_e(o,!1),$={from:le("from",{params:n.params,routeId:(j=(L=n.route)==null?void 0:L.id)!=null?j:null,url:n.url}),to:le("to",{params:(A=w==null?void 0:w.params)!=null?A:null,routeId:(H=w==null?void 0:w.route.id)!=null?H:null,url:o}),type:m};g!==void 0&&($.delta=g);const U={...$,cancel:()=>{y=!0}};if(u.before_navigate.forEach(h=>h(U)),y){k();return}$e(P),v(),i&&Y.navigating.set($),await Ae(w,o,l,{scroll:c,keepfocus:_,details:d},()=>{u.after_navigate.forEach(h=>h($)),Y.navigating.set(null)})}function ne(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{Ee(()=>(u.after_navigate.push(o),()=>{const c=u.after_navigate.indexOf(o);u.after_navigate.splice(c,1)}))},before_navigate:o=>{Ee(()=>(u.before_navigate.push(o),()=>{const c=u.before_navigate.indexOf(o);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(p||!i)&&(f=!1)},goto:(o,c={})=>de(o,c,[]),invalidate:o=>{if(o===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof o=="function")s.push(o);else{const{href:c}=new URL(o,location.href);s.push(_=>_.href===c)}return Ue()},invalidateAll:()=>(T=!0,Ue()),prefetch:async o=>{const c=new URL(o,Ge(document));await je(c)},prefetch_routes:async o=>{const _=(o?ie.filter(l=>o.some(d=>l.exec(d))):ie).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(_)},apply_action:async o=>{if(o.type==="error"){const c=new URL(location.href),{branch:_,route:l}=n;if(!l)return;let d=n.branch.length;for(;d--;)if(l.errors[d]){let m,g=d;for(;!_[g];)g-=1;try{m={node:await l.errors[d](),loader:l.errors[d],data:{},server:null,shared:null};const v=await te({url:c,params:n.params,branch:_.slice(0,g+1).concat(m),status:500,error:o.error,route:l});n=v.state;const k=ce();E.$set(v.props),k();return}catch{continue}}}else if(o.type==="redirect")de(o.location,{},[]);else{const c={form:o.data};o.status!==M.status&&(c.page={...M,status:o.status});const _=ce();E.$set(c),_()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,v;let d=!1;const m={from:le("from",{params:n.params,routeId:(v=(g=n.route)==null?void 0:g.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>d=!0};u.before_navigate.forEach(k=>k(m)),d?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(P);try{sessionStorage[et]=JSON.stringify(ae)}catch{}}});const o=l=>{const{url:d,options:m}=Me(l);if(d&&m.prefetch){if(Ve(d))return;je(d)}};let c;const _=l=>{clearTimeout(c),c=setTimeout(()=>{var d;(d=l.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",_),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:d,url:m,options:g}=Me(l);if(!d||!m)return;const v=d instanceof SVGAElement;if(!v&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||k.includes("external")||g.reload||(v?d.target.baseVal:d.target))return;const[y,w]=m.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){G=!0,$e(P),Y.page.set({...M,url:m}),Y.page.notify();return}me({url:m,scroll:g.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[W]===P)return;const d=l.state[W]-P;me({url:new URL(location.href),scroll:ae[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=l.state[W]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[W]:++P},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Y.navigating.set(null)})},_hydrate:async({status:o,error:c,node_ids:_,params:l,routeId:d,data:m,form:g})=>{var y;const v=new URL(location.href);let k;try{const w=_.map(async($,U)=>{const L=m[U];return pe({loader:ue[$],url:v,params:l,routeId:d,parent:async()=>{const j={};for(let A=0;A<U;A+=1)Object.assign(j,(await w[A]).data);return j},server_data_node:he(L)})});k=await te({url:v,params:l,branch:await Promise.all(w),status:o,error:c,form:g,route:(y=ie.find($=>$.id===d))!=null?y:null})}catch(w){const $=w;if($ instanceof Ke){await ne(new URL(w.location,location.href));return}k=await oe({status:$ instanceof ve?$.status:500,error:$,url:v,routeId:d})}Te(k)}}}let Kt=1;async function Ye(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Bt,t.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),t.searchParams.set("__id",String(Kt++)),await Q(()=>import(t.href),[],import.meta.url);const s=window.__sveltekit_data;return delete window.__sveltekit_data,s}function Qe(r,e){var t;return(t=Ct.handleError({error:r,event:e}))!=null?t:{error:"Internal Error"}}const Ft=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const t of Ft)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function ce(){return()=>{}}async function Ht({env:r,hydrate:e,paths:t,target:s,trailing_slash:a}){gt(t);const u=Jt({target:s,base:t.base,trailing_slash:a});zt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Ht as start};
