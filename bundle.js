!function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n){t.$$.on_destroy.push(s(e,n))}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function y(){return g("")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):$(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function S(t){return x(t," ")}function I(t,e){e=""+e,t.data!==e&&(t.data=e)}function M(t,e,n){t.classList[n?"add":"remove"](e)}let _;function C(t){_=t}function D(){if(!_)throw new Error("Function called outside component initialization");return _}function P(t){D().$$.on_mount.push(t)}function A(t,e){D().$$.context.set(t,e)}function V(t){return D().$$.context.get(t)}const O=[],G=[],H=[],L=[],N=Promise.resolve();let R=!1;function T(t){H.push(t)}let j=!1;const B=new Set;function K(){if(!j){j=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];C(e),W(e.$$)}for(O.length=0;G.length;)G.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];B.has(e)||(B.add(e),e())}H.length=0}while(O.length);for(;L.length;)L.pop()();R=!1,j=!1,B.clear()}}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const q=new Set;let z;function U(){z={r:0,c:[],p:z}}function J(){z.r||o(z.c),z=z.p}function Y(t,e){t&&t.i&&(q.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Q(t,e){F(t,1,1,()=>{e.delete(t.key)})}function X(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r){const{fragment:a,on_mount:s,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),T(()=>{const e=s.map(n).filter(c);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(T)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(O.push(t),R||(R=!0,N.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,c,a,s,i,l=[-1]){const u=_;C(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=c?c(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&rt(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=k(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor),K()}C(u)}class ct{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const at=[];function st(e,n=t){let r;const o=[];function c(t){if(a(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(a,s=t){const i=[a,s];return o.push(i),1===o.length&&(r=n(c)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function it(e,n,r){const a=!Array.isArray(e),i=a?[e]:e,l=n.length<2;return{subscribe:st(r,e=>{let r=!1;const u=[];let f=0,h=t;const d=()=>{if(f)return;h();const r=n(a?u[0]:u,e);l?e(r):h=c(r)?r:t},p=i.map((t,e)=>s(t,t=>{u[e]=t,f&=~(1<<e),r&&d()},()=>{f|=1<<e}));return r=!0,d(),function(){o(p),h()}}).subscribe}}const lt={},ut={};function ft(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const ht=function(t,e){const n=[];let r=ft(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=ft(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[c?"replace":"assign"](e)}r=ft(t),n.forEach(t=>t({location:r,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,c){const[a,s=""]=c.split("?");e++,n.push({pathname:a,search:s}),r.push(t)},replaceState(t,o,c){const[a,s=""]=c.split("?");n[e]={pathname:a,search:s},r[e]=t}}}}()),{navigate:dt}=ht,pt=/^:(.+)/;function mt(t){return"*"===t[0]}function $t(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function gt(t){return t.replace(/(^\/+|\/+$)/g,"")}function vt(t,e){return{route:t,score:t.default?0:$t(t.path).reduce((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return pt.test(t)}(e)?mt(e)?t-=5:t+=3:t+=2:t+=1,t),0),index:e}}function yt(t,e){let n,r;const[o]=e.split("?"),c=$t(o),a=""===c[0],s=function(t){return t.map(vt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,o=s.length;t<o;t++){const o=s[t].route;let i=!1;if(o.default){r={route:o,params:{},uri:e};continue}const l=$t(o.path),u={},f=Math.max(c.length,l.length);let h=0;for(;h<f;h++){const t=l[h],e=c[h];if(void 0!==t&&mt(t)){u["*"===t?"*":t.slice(1)]=c.slice(h).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=pt.exec(t);if(n&&!a){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:o,params:u,uri:"/"+c.slice(0,h).join("/")};break}}return n||r||null}function wt(t,e){return gt("/"===e?t:`${gt(t)}/${gt(e)}`)+"/"}function bt(t){let e;const n=t[16].default,r=l(n,t,t[15],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&32768&e&&r.p(u(n,t,t[15],null),f(n,t[15],e,null))},i(t){e||(Y(r,t),e=!0)},o(t){F(r,t),e=!1},d(t){r&&r.d(t)}}}function kt(t,e,n){let r,o,c,{basepath:a="/"}=e,{url:s=null}=e;const l=V(lt),u=V(ut),f=st([]);i(t,f,t=>n(8,c=t));const h=st(null);let d=!1;const p=l||st(s?{pathname:s}:ht.location);i(t,p,t=>n(7,o=t));const m=u?u.routerBase:st({path:a,uri:a});i(t,m,t=>n(6,r=t));const $=it([m,h],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}});function g(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=wt(e,n),"undefined"==typeof window){if(d)return;const e=function(t,e){return yt([t],e)}(t,o.pathname);e&&(h.set(e),d=!0)}else f.update(e=>(e.push(t),e))}function v(t){f.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}l||(P(()=>ht.listen(t=>{p.set(t.location)})),A(lt,p)),A(ut,{activeRoute:h,base:m,routerBase:$,registerRoute:g,unregisterRoute:v});let{$$slots:y={},$$scope:w}=e;return t.$set=t=>{"basepath"in t&&n(3,a=t.basepath),"url"in t&&n(4,s=t.url),"$$scope"in t&&n(15,w=t.$$scope)},t.$$.update=()=>{if(64&t.$$.dirty){const{path:t}=r;f.update(e=>(e.forEach(e=>e.path=wt(t,e._path)),e))}if(384&t.$$.dirty){const t=yt(c,o.pathname);h.set(t)}},[f,p,m,a,s,d,r,o,c,l,u,h,$,g,v,w,y]}class Et extends ct{constructor(t){super(),ot(this,t,kt,bt,a,{basepath:3,url:4})}}const xt=t=>({params:2&t,location:16&t}),St=t=>({params:t[1],location:t[4]});function It(t){let e,n,r,o;const c=[_t,Mt],a=[];function s(t,e){return null!==t[0]?0:1}return e=s(t),n=a[e]=c[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){a[e].m(t,n),p(t,r,n),o=!0},p(t,o){let i=e;e=s(t),e===i?a[e].p(t,o):(U(),F(a[i],1,1,()=>{a[i]=null}),J(),n=a[e],n||(n=a[e]=c[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){F(n),o=!1},d(t){a[e].d(t),t&&m(r)}}}function Mt(t){let e;const n=t[13].default,r=l(n,t,t[12],St);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&4114&e&&r.p(u(n,t,t[12],St),f(n,t[12],e,xt))},i(t){e||(Y(r,t),e=!0)},o(t){F(r,t),e=!1},d(t){r&&r.d(t)}}}function _t(t){let n,r;const o=[{location:t[4]},t[1],t[2]];var c=t[0];function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(c)var s=new c(a());return{c(){s&&Z(s.$$.fragment),n=y()},l(t){s&&tt(s.$$.fragment,t),n=y()},m(t,e){s&&et(s,t,e),p(t,n,e),r=!0},p(t,e){const r=22&e?function(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const a=t[c],s=e[c];if(s){for(const t in a)t in s||(r[t]=1);for(const t in s)o[t]||(n[t]=s[t],o[t]=1);t[c]=s}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(o,[16&e&&{location:t[4]},2&e&&X(t[1]),4&e&&X(t[2])]):{};if(c!==(c=t[0])){if(s){U();const t=s;F(t.$$.fragment,1,0,()=>{nt(t,1)}),J()}c?(Z((s=new c(a())).$$.fragment),Y(s.$$.fragment,1),et(s,n.parentNode,n)):s=null}else c&&s.$set(r)},i(t){r||(s&&Y(s.$$.fragment,t),r=!0)},o(t){s&&F(s.$$.fragment,t),r=!1},d(t){t&&m(n),s&&nt(s,t)}}}function Ct(t){let e,n,r=null!==t[3]&&t[3].route===t[7]&&It(t);return{c(){r&&r.c(),e=y()},l(t){r&&r.l(t),e=y()},m(t,o){r&&r.m(t,o),p(t,e,o),n=!0},p(t,[n]){null!==t[3]&&t[3].route===t[7]?r?(r.p(t,n),Y(r,1)):(r=It(t),r.c(),Y(r,1),r.m(e.parentNode,e)):r&&(U(),F(r,1,1,()=>{r=null}),J())},i(t){n||(Y(r),n=!0)},o(t){F(r),n=!1},d(t){r&&r.d(t),t&&m(e)}}}function Dt(t,n,r){let o,c,{path:a=""}=n,{component:s=null}=n;const{registerRoute:l,unregisterRoute:u,activeRoute:f}=V(ut);i(t,f,t=>r(3,o=t));const d=V(lt);i(t,d,t=>r(4,c=t));const p={path:a,default:""===a};let m={},$={};var g;l(p),"undefined"!=typeof window&&(g=()=>{u(p)},D().$$.on_destroy.push(g));let{$$slots:v={},$$scope:y}=n;return t.$set=t=>{r(11,n=e(e({},n),h(t))),"path"in t&&r(8,a=t.path),"component"in t&&r(0,s=t.component),"$$scope"in t&&r(12,y=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&o&&o.route===p&&r(1,m=o.params);{const{path:t,component:e,...o}=n;r(2,$=o)}},n=h(n),[s,m,$,o,c,f,d,p,a,l,u,n,y,v]}class Pt extends ct{constructor(t){super(),ot(this,t,Dt,Ct,a,{path:8,component:0})}}function At(t){function e(t){const e=t.currentTarget;""===e.target&&function(t){const e=location.host;return t.host==e||0===t.href.indexOf("https://"+e)||0===t.href.indexOf("http://"+e)}(e)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),dt(e.pathname+e.search,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}function Vt(e){let n,r,a,s;const i=e[4].default,h=l(i,e,e[3],null);return{c(){n=$("a"),h&&h.c(),this.h()},l(t){n=E(t,"A",{href:!0,class:!0});var e=k(n);h&&h.l(e),e.forEach(m),this.h()},h(){b(n,"href",e[0]),b(n,"class","item"),M(n,"active",e[1]===e[0])},m(i,l,u){var f;p(i,n,l),h&&h.m(n,null),a=!0,u&&o(s),s=[(f=r=At.call(null,n),f&&c(f.destroy)?f.destroy:t),w(n,"click",(function(){c(e[2])&&e[2].apply(this,arguments)}))]},p(t,[r]){e=t,h&&h.p&&8&r&&h.p(u(i,e,e[3],null),f(i,e[3],r,null)),(!a||1&r)&&b(n,"href",e[0]),3&r&&M(n,"active",e[1]===e[0])},i(t){a||(Y(h,t),a=!0)},o(t){F(h,t),a=!1},d(t){t&&m(n),h&&h.d(t),o(s)}}}function Ot(t,e,n){let{href:r}=e,{activePage:o}=e,{handleClick:c}=e,{$$slots:a={},$$scope:s}=e;return t.$set=t=>{"href"in t&&n(0,r=t.href),"activePage"in t&&n(1,o=t.activePage),"handleClick"in t&&n(2,c=t.handleClick),"$$scope"in t&&n(3,s=t.$$scope)},[r,o,c,s,a]}class Gt extends ct{constructor(t){super(),ot(this,t,Ot,Vt,a,{href:0,activePage:1,handleClick:2})}}function Ht(e){let n,r,o;return{c(){n=$("img"),this.h()},l(t){n=E(t,"IMG",{class:!0,src:!0,name:!0,alt:!0,id:!0}),this.h()},h(){b(n,"class","Card svelte-85vdhu"),n.src!==(r=e[3])&&b(n,"src",r),b(n,"name",e[1]),b(n,"alt",e[1]),b(n,"id",e[0])},m(t,r,a){p(t,n,r),a&&o(),o=w(n,"click",(function(){c(e[2])&&e[2].apply(this,arguments)}))},p(t,[o]){e=t,8&o&&n.src!==(r=e[3])&&b(n,"src",r),2&o&&b(n,"name",e[1]),2&o&&b(n,"alt",e[1]),1&o&&b(n,"id",e[0])},i:t,o:t,d(t){t&&m(n),o()}}}function Lt(t,e,n){let r,{id:o}=e,{name:c}=e,{state:a}=e,{handleClick:s}=e;return t.$set=t=>{"id"in t&&n(0,o=t.id),"name"in t&&n(1,c=t.name),"state"in t&&n(4,a=t.state),"handleClick"in t&&n(2,s=t.handleClick)},t.$$.update=()=>{18&t.$$.dirty&&n(3,r=0===a?"/images/memory/blank.png":1===a?`/images/memory/${c}.png`:"/images/memory/white.png")},[o,c,s,r,a]}class Nt extends ct{constructor(t){super(),ot(this,t,Lt,Ht,a,{id:0,name:1,state:4,handleClick:2})}}const Rt=["cheeseburger","fries","hotdog","ice-cream","milkshake","pizza"].map(t=>({id:"0"+t,name:t,state:0})),Tt=Rt.map(t=>({...t,id:"1"+t.name})),jt=[...Rt,...Tt].sort((t,e)=>.5-Math.random());const Bt=function(){const{subscribe:t,update:e}=st(jt);return{subscribe:t,changeState:(t,n)=>e(e=>{const r=e.findIndex(e=>e.id===t);return e[r].state=n,e})}}(),Kt=st(""),Wt=st(0),qt=st(!1);function zt(t,e,n){const r=t.slice();return r[6]=e[n],r}function Ut(t,e){let n,r;const o=new Nt({props:{id:e[6].id,name:e[6].name,state:e[6].state,handleClick:e[3]}});return{key:t,first:null,c(){n=y(),Z(o.$$.fragment),this.h()},l(t){n=y(),tt(o.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){p(t,n,e),et(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.id=t[6].id),1&e&&(n.name=t[6].name),1&e&&(n.state=t[6].state),o.$set(n)},i(t){r||(Y(o.$$.fragment,t),r=!0)},o(t){F(o.$$.fragment,t),r=!1},d(t){t&&m(n),nt(o,t)}}}function Jt(t){let e,n,r,o,c,a,s,i,l,u,f,h,y,w,M,_,C,D,P,A,V=[],O=new Map,G=t[0];const H=t=>t[6].id;for(let e=0;e<G.length;e+=1){let n=zt(t,G,e),r=H(n);O.set(r,V[e]=Ut(r,n))}return{c(){e=$("h1"),n=g("Memory Game"),r=v(),o=$("div"),c=$("div"),a=$("div");for(let t=0;t<V.length;t+=1)V[t].c();s=v(),i=$("div"),l=$("h3"),u=g("Score: "),f=g(t[1]),h=v(),y=$("h3"),w=g(t[2]),M=v(),_=$("p"),C=g("Original here:\n      "),D=$("a"),P=g("/memory-game"),this.h()},l(d){e=E(d,"H1",{});var p=k(e);n=x(p,"Memory Game"),p.forEach(m),r=S(d),o=E(d,"DIV",{class:!0});var $=k(o);c=E($,"DIV",{class:!0});var g=k(c);a=E(g,"DIV",{class:!0});var v=k(a);for(let t=0;t<V.length;t+=1)V[t].l(v);v.forEach(m),g.forEach(m),s=S($),i=E($,"DIV",{class:!0});var b=k(i);l=E(b,"H3",{});var I=k(l);u=x(I,"Score: "),f=x(I,t[1]),I.forEach(m),h=S(b),y=E(b,"H3",{});var A=k(y);w=x(A,t[2]),A.forEach(m),M=S(b),_=E(b,"P",{});var O=k(_);C=x(O,"Original here:\n      "),D=E(O,"A",{href:!0});var G=k(D);P=x(G,"/memory-game"),G.forEach(m),O.forEach(m),b.forEach(m),$.forEach(m),this.h()},h(){b(a,"class","Grid svelte-25a74i"),b(c,"class","eight wide column"),b(D,"href","/memory-game"),b(i,"class","eight wide column"),b(o,"class","ui grid")},m(t,m){p(t,e,m),d(e,n),p(t,r,m),p(t,o,m),d(o,c),d(c,a);for(let t=0;t<V.length;t+=1)V[t].m(a,null);d(o,s),d(o,i),d(i,l),d(l,u),d(l,f),d(i,h),d(i,y),d(y,w),d(i,M),d(i,_),d(_,C),d(_,D),d(D,P),A=!0},p(t,[e]){if(9&e){const n=t[0];U(),V=function(t,e,n,r,o,c,a,s,i,l,u,f){let h=t.length,d=c.length,p=h;const m={};for(;p--;)m[t[p].key]=p;const $=[],g=new Map,v=new Map;for(p=d;p--;){const t=f(o,c,p),s=n(t);let i=a.get(s);i?r&&i.p(t,e):(i=l(s,t),i.c()),g.set(s,$[p]=i),s in m&&v.set(s,Math.abs(p-m[s]))}const y=new Set,w=new Set;function b(t){Y(t,1),t.m(s,u,a.has(t.key)),a.set(t.key,t),u=t.first,d--}for(;h&&d;){const e=$[d-1],n=t[h-1],r=e.key,o=n.key;e===n?(u=e.first,h--,d--):g.has(o)?!a.has(r)||y.has(r)?b(e):w.has(o)?h--:v.get(r)>v.get(o)?(w.add(r),b(e)):(y.add(o),h--):(i(n,a),h--)}for(;h--;){const e=t[h];g.has(e.key)||i(e,a)}for(;d;)b($[d-1]);return $}(V,e,H,1,t,n,O,a,Q,Ut,null,zt),J()}(!A||2&e)&&I(f,t[1]),(!A||4&e)&&I(w,t[2])},i(t){if(!A){for(let t=0;t<G.length;t+=1)Y(V[t]);A=!0}},o(t){for(let t=0;t<V.length;t+=1)F(V[t]);A=!1},d(t){t&&m(e),t&&m(r),t&&m(o);for(let t=0;t<V.length;t+=1)V[t].d()}}}function Yt(t,e,n){let r,o,c,a;i(t,Bt,t=>n(0,r=t)),i(t,qt,t=>n(5,o=t)),i(t,Wt,t=>n(1,c=t)),i(t,Kt,t=>n(2,a=t));let s=null;return[r,c,a,function(t){const e=r.find(e=>e.id===t.target.id);o||2===e.state||(Bt.changeState(e.id,1),null==s?s=e:(qt.set(!0),s.name===e.name?(Kt.set("You have a pair!"),Wt.update(t=>t+1),setTimeout(()=>{Bt.changeState(e.id,2),Bt.changeState(s.id,2),s=null,6===c?Kt.set("Congratulations! You have won the game. :)"):(Kt.set(""),qt.set(!1))},2e3)):(Kt.set("No cigar!"),qt.set(!0),setTimeout(()=>{Bt.changeState(e.id,0),Bt.changeState(s.id,0),s=null,Kt.set(""),qt.set(!1)},2e3))))}]}class Ft extends ct{constructor(t){super(),ot(this,t,Yt,Jt,a,{})}}function Qt(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function Xt(t){let e,n;return{c(){e=$("div"),this.h()},l(t){e=E(t,"DIV",{class:!0,id:!0}),k(e).forEach(m),this.h()},h(){b(e,"class","square svelte-13hhw4r"),b(e,"id","i"),M(e,"mole",t[2]===t[9])},m(r,o,c){p(r,e,o),c&&n(),n=w(e,"click",t[4])},p(t,n){4&n&&M(e,"mole",t[2]===t[9])},d(t){t&&m(e),n()}}}function Zt(e){let n,r,o,c,a,s,i,l,u,f,h,y,w,M,_,C,D,P,A=Array(9),V=[];for(let t=0;t<A.length;t+=1)V[t]=Xt(Qt(e,A,t));return{c(){n=$("h1"),r=g("Whack a Mole!"),o=v(),c=$("div"),a=$("div"),s=$("div");for(let t=0;t<V.length;t+=1)V[t].c();i=v(),l=$("div"),u=$("h3"),f=g("Time left: "),h=g(e[1]),y=v(),w=$("h3"),M=g("Score: "),_=g(e[0]),C=v(),D=$("h3"),P=g(e[3]),this.h()},l(t){n=E(t,"H1",{});var d=k(n);r=x(d,"Whack a Mole!"),d.forEach(m),o=S(t),c=E(t,"DIV",{class:!0});var p=k(c);a=E(p,"DIV",{class:!0});var $=k(a);s=E($,"DIV",{class:!0});var g=k(s);for(let t=0;t<V.length;t+=1)V[t].l(g);g.forEach(m),$.forEach(m),i=S(p),l=E(p,"DIV",{class:!0});var v=k(l);u=E(v,"H3",{});var b=k(u);f=x(b,"Time left: "),h=x(b,e[1]),b.forEach(m),y=S(v),w=E(v,"H3",{});var I=k(w);M=x(I,"Score: "),_=x(I,e[0]),I.forEach(m),C=S(v),D=E(v,"H3",{});var A=k(D);P=x(A,e[3]),A.forEach(m),v.forEach(m),p.forEach(m),this.h()},h(){b(s,"class","squareGrid"),b(a,"class","eight wide column"),b(l,"class","eight wide column"),b(c,"class","ui grid")},m(t,e){p(t,n,e),d(n,r),p(t,o,e),p(t,c,e),d(c,a),d(a,s);for(let t=0;t<V.length;t+=1)V[t].m(s,null);d(c,i),d(c,l),d(l,u),d(u,f),d(u,h),d(l,y),d(l,w),d(w,M),d(w,_),d(l,C),d(l,D),d(D,P)},p(t,[e]){if(20&e){let n;for(A=Array(9),n=0;n<A.length;n+=1){const r=Qt(t,A,n);V[n]?V[n].p(r,e):(V[n]=Xt(r),V[n].c(),V[n].m(s,null))}for(;n<V.length;n+=1)V[n].d(1);V.length=A.length}2&e&&I(h,t[1]),1&e&&I(_,t[0]),8&e&&I(P,t[3])},i:t,o:t,d(t){t&&m(n),t&&m(o),t&&m(c),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(V,t)}}}function te(t,e,n){let r,o=0,c=30,a=null,s="";return P(()=>(r=setInterval(()=>{n(1,c-=1),0===c?(clearInterval(r),n(3,s="Game Over!")):(n(3,s=""),n(2,a=Math.floor(9*Math.random())))},1e3),()=>{clearInterval(r)})),[o,c,a,s,function(t){if(c<1)return;t.target.classList.contains("mole")?(n(0,o+=1),n(3,s="Hit!"),n(2,a=null)):(o>0&&n(0,o-=1),n(3,s="Miss!"))}]}class ee extends ct{constructor(t){super(),ot(this,t,te,Zt,a,{})}}function ne(t){let e;return{c(){e=g("Memory Game")},l(t){e=x(t,"Memory Game")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function re(t){let e;return{c(){e=g("Whack a Mole!")},l(t){e=x(t,"Whack a Mole!")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function oe(t){let e,n,r,o,c,a,s,i,l,u,f;const h=new Gt({props:{href:"/svelte-mini-games/memory",handleClick:t[2],activePage:t[1],$$slots:{default:[ne]},$$scope:{ctx:t}}}),y=new Gt({props:{href:"/svelte-mini-games/whackamole",handleClick:t[2],activePage:t[1],$$slots:{default:[re]},$$scope:{ctx:t}}}),w=new Pt({props:{path:"memory",component:Ft}}),I=new Pt({props:{path:"whackamole",component:ee}});return{c(){e=$("div"),n=$("div"),r=$("h1"),o=g("Seven JavaScript Games with Svelte!"),c=v(),a=$("nav"),Z(h.$$.fragment),s=v(),Z(y.$$.fragment),i=v(),l=$("div"),Z(w.$$.fragment),u=v(),Z(I.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var f=k(e);n=E(f,"DIV",{class:!0});var d=k(n);r=E(d,"H1",{});var p=k(r);o=x(p,"Seven JavaScript Games with Svelte!"),p.forEach(m),d.forEach(m),c=S(f),a=E(f,"NAV",{class:!0});var $=k(a);tt(h.$$.fragment,$),s=S($),tt(y.$$.fragment,$),$.forEach(m),i=S(f),l=E(f,"DIV",{class:!0});var g=k(l);tt(w.$$.fragment,g),u=S(g),tt(I.$$.fragment,g),g.forEach(m),f.forEach(m),this.h()},h(){b(n,"class","ui segment"),b(a,"class","ui two item menu"),b(l,"class","ui segment"),b(e,"class","ui container")},m(t,m){p(t,e,m),d(e,n),d(n,r),d(r,o),d(e,c),d(e,a),et(h,a,null),d(a,s),et(y,a,null),d(e,i),d(e,l),et(w,l,null),d(l,u),et(I,l,null),f=!0},p(t,e){const n={};2&e&&(n.activePage=t[1]),8&e&&(n.$$scope={dirty:e,ctx:t}),h.$set(n);const r={};2&e&&(r.activePage=t[1]),8&e&&(r.$$scope={dirty:e,ctx:t}),y.$set(r)},i(t){f||(Y(h.$$.fragment,t),Y(y.$$.fragment,t),Y(w.$$.fragment,t),Y(I.$$.fragment,t),f=!0)},o(t){F(h.$$.fragment,t),F(y.$$.fragment,t),F(w.$$.fragment,t),F(I.$$.fragment,t),f=!1},d(t){t&&m(e),nt(h),nt(y),nt(w),nt(I)}}}function ce(t){let e;const n=new Et({props:{url:t[0],basepath:"/svelte-mini-games","}":!0,$$slots:{default:[oe]},$$scope:{ctx:t}}});return{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,r){et(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.url=t[0]),10&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function ae(t,e,n){let r,{url:o=""}=e;return P(()=>{n(1,r=window.location.pathname)}),t.$set=t=>{"url"in t&&n(0,o=t.url)},[o,r,function(t){n(1,r=t.target.pathname)}]}new class extends ct{constructor(t){super(),ot(this,t,ae,ce,a,{url:0})}}({target:document.getElementById("app"),hydrate:!0})}();
//# sourceMappingURL=bundle.js.map
