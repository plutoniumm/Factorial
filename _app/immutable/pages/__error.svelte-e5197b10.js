import{S as C,i as D,s as G,l as z,g as S,n as q,d as i,t as g,h as v,j as O,e as f,k as E,c as u,a as _,m as T,f as R,b as P,I as l}from"../chunks/index-cd22d036.js";function V(o){let e;return{c(){e=g(o[0])},l(s){e=v(s,o[0])},m(s,n){S(s,e,n)},p(s,n){n&1&&O(e,s[0])},d(s){s&&i(e)}}}function A(o){let e,s,n,a,t,c,y,p,d,b,k,h,x;return{c(){e=f("div"),s=f("h1"),n=g("110010100"),a=E(),t=f("h1"),c=g("That's 404 in binary"),y=E(),p=f("p"),d=f("strong"),b=g("Page not found :("),k=E(),h=f("p"),x=g("The requested page could not be found."),this.h()},l(m){e=u(m,"DIV",{class:!0});var r=_(e);s=u(r,"H1",{style:!0,class:!0});var H=_(s);n=v(H,"110010100"),H.forEach(i),a=T(r),t=u(r,"H1",{class:!0});var I=_(t);c=v(I,"That's 404 in binary"),I.forEach(i),y=T(r),p=u(r,"P",{});var N=_(p);d=u(N,"STRONG",{});var j=_(d);b=v(j,"Page not found :("),j.forEach(i),N.forEach(i),k=T(r),h=u(r,"P",{});var w=_(h);x=v(w,"The requested page could not be found."),w.forEach(i),r.forEach(i),this.h()},h(){R(s,"font-size","4em"),P(s,"class","svelte-1fsop1p"),P(t,"class","hover svelte-1fsop1p"),P(e,"class","container svelte-1fsop1p")},m(m,r){S(m,e,r),l(e,s),l(s,n),l(e,a),l(e,t),l(t,c),l(e,y),l(e,p),l(p,d),l(d,b),l(e,k),l(e,h),l(h,x)},p:q,d(m){m&&i(e)}}}function B(o){let e;function s(t,c){return t[0]==404?A:V}let n=s(o),a=n(o);return{c(){a.c(),e=z()},l(t){a.l(t),e=z()},m(t,c){a.m(t,c),S(t,e,c)},p(t,[c]){n===(n=s(t))&&a?a.p(t,c):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},i:q,o:q,d(t){a.d(t),t&&i(e)}}}function K({error:o,status:e}){return{props:{message:o.message,status:e}}}function F(o,e,s){let{message:n}=e,{status:a}=e;return console.log(n),o.$$set=t=>{"message"in t&&s(1,n=t.message),"status"in t&&s(0,a=t.status)},[a,n]}class L extends C{constructor(e){super(),D(this,e,F,B,G,{message:1,status:0})}}export{L as default,K as load};