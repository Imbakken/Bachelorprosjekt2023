import{S as ne,i as ie,s as oe,k as i,a as j,q,l as o,m as h,h as n,c as H,r as C,J as ce,n as l,b as N,G as a,K as V,L as J,H as K,M as ue,y as fe,z as pe,A as he,g as de,d as _e,B as me}from"../chunks/index.317fa1c7.js";import{c as ve}from"../chunks/store.a7ae9623.js";function ae(c){let e,t;return{c(){e=i("p"),t=q("Informasjonen du har skrevet inn stemmer ikke, vennligst prøv igjen."),this.h()},l(s){e=o(s,"P",{class:!0});var u=h(e);t=C(u,"Informasjonen du har skrevet inn stemmer ikke, vennligst prøv igjen."),u.forEach(n),this.h()},h(){l(e,"class","error svelte-4n8iw")},m(s,u){N(s,e,u),a(e,t)},d(s){s&&n(e)}}}function ge(c){let e;return{c(){e=q("Logg inn")},l(t){e=C(t,"Logg inn")},m(t,s){N(t,e,s)},d(t){t&&n(e)}}}function ke(c){let e;return{c(){e=i("i"),this.h()},l(t){e=o(t,"I",{class:!0}),h(e).forEach(n),this.h()},h(){l(e,"class","fa-solid fa-spinner loadingSpinner svelte-4n8iw")},m(t,s){N(t,e,s)},d(t){t&&n(e)}}}function be(c){let e,t,s,u,E,r,A,k,d,B,L,m,S,P,v,$,b,M,y,G,O,T,I,z,F,R,f=c[2]&&ae();function Q(p,_){return p[3]?ke:ge}let D=Q(c),g=D(c);return{c(){e=i("div"),t=i("div"),s=i("img"),E=j(),r=i("form"),f&&f.c(),A=j(),k=i("label"),d=i("input"),B=j(),L=i("label"),m=i("input"),S=j(),P=i("div"),v=i("button"),g.c(),$=j(),b=i("div"),M=i("p"),y=i("a"),G=q("Har du ikke bruker?"),O=j(),T=i("p"),I=i("a"),z=q("Mer om prosjektet"),this.h()},l(p){e=o(p,"DIV",{class:!0});var _=h(e);t=o(_,"DIV",{class:!0});var W=h(t);s=o(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(n),E=H(_),r=o(_,"FORM",{class:!0});var w=h(r);f&&f.l(w),A=H(w),k=o(w,"LABEL",{class:!0});var X=h(k);d=o(X,"INPUT",{type:!0,placeholder:!0,class:!0}),X.forEach(n),B=H(w),L=o(w,"LABEL",{class:!0});var Y=h(L);m=o(Y,"INPUT",{type:!0,placeholder:!0,class:!0}),Y.forEach(n),S=H(w),P=o(w,"DIV",{class:!0});var Z=h(P);v=o(Z,"BUTTON",{type:!0,class:!0});var x=h(v);g.l(x),x.forEach(n),Z.forEach(n),w.forEach(n),$=H(_),b=o(_,"DIV",{class:!0});var U=h(b);M=o(U,"P",{});var ee=h(M);y=o(ee,"A",{href:!0,class:!0});var te=h(y);G=C(te,"Har du ikke bruker?"),te.forEach(n),ee.forEach(n),O=H(U),T=o(U,"P",{});var se=h(T);I=o(se,"A",{href:!0,class:!0});var le=h(I);z=C(le,"Mer om prosjektet"),le.forEach(n),se.forEach(n),U.forEach(n),_.forEach(n),this.h()},h(){ce(s.src,u="/logo/Heimat.png")||l(s,"src",u),l(s,"alt","Heimat logo"),l(s,"class","svelte-4n8iw"),l(t,"class","logoContainer svelte-4n8iw"),l(d,"type","email"),l(d,"placeholder","Email"),l(d,"class","svelte-4n8iw"),l(k,"class","svelte-4n8iw"),l(m,"type","password"),l(m,"placeholder","Password"),l(m,"class","svelte-4n8iw"),l(L,"class","svelte-4n8iw"),l(v,"type","button"),l(v,"class","svelte-4n8iw"),l(P,"class","submitBtn svelte-4n8iw"),l(r,"class","svelte-4n8iw"),l(y,"href","/nouser"),l(y,"class","svelte-4n8iw"),l(I,"href","/about"),l(I,"class","svelte-4n8iw"),l(b,"class","options svelte-4n8iw"),l(e,"class","authContainer svelte-4n8iw")},m(p,_){N(p,e,_),a(e,t),a(t,s),a(e,E),a(e,r),f&&f.m(r,null),a(r,A),a(r,k),a(k,d),V(d,c[0]),a(r,B),a(r,L),a(L,m),V(m,c[1]),a(r,S),a(r,P),a(P,v),g.m(v,null),a(e,$),a(e,b),a(b,M),a(M,y),a(y,G),a(b,O),a(b,T),a(T,I),a(I,z),F||(R=[J(d,"input",c[5]),J(m,"input",c[6]),J(v,"click",c[4])],F=!0)},p(p,[_]){p[2]?f||(f=ae(),f.c(),f.m(r,A)):f&&(f.d(1),f=null),_&1&&d.value!==p[0]&&V(d,p[0]),_&2&&m.value!==p[1]&&V(m,p[1]),D!==(D=Q(p))&&(g.d(1),g=D(p),g&&(g.c(),g.m(v,null)))},i:K,o:K,d(p){p&&n(e),f&&f.d(),g.d(),F=!1,ue(R)}}}let re=!1;function we(c,e,t){let s="",u="",E=!1,r=!1;async function A(){if(!r){if(!s||!u||re){t(2,E=!0);return}t(3,r=!0);try{re||await ve.login(s,u)}catch(B){console.log("There was an auth error",B),t(2,E=!0),t(3,r=!1)}}}function k(){s=this.value,t(0,s)}function d(){u=this.value,t(1,u)}return[s,u,E,r,A,k,d]}class Ee extends ne{constructor(e){super(),ie(this,e,we,be,oe,{})}}function ye(c){let e,t;return e=new Ee({}),{c(){fe(e.$$.fragment)},l(s){pe(e.$$.fragment,s)},m(s,u){he(e,s,u),t=!0},p:K,i(s){t||(de(e.$$.fragment,s),t=!0)},o(s){_e(e.$$.fragment,s),t=!1},d(s){me(e,s)}}}class Le extends ne{constructor(e){super(),ie(this,e,null,ye,oe,{})}}export{Le as default};
