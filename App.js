"use strict";function e(){}function n(e){return e()}function t(e){e.forEach(n)}function a(n,...t){if(null==n)return e;const a=n.subscribe(...t);return a.unsubscribe?()=>a.unsubscribe():a}function r(e){let n;return a(e,e=>n=e)(),n}let i;function s(e){i=e}function o(){if(!i)throw new Error("Function called outside component initialization");return i}function c(e){o().$$.on_mount.push(e)}function l(e,n){o().$$.context.set(e,n)}function d(e){return o().$$.context.get(e)}const u={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function h(e){return String(e).replace(/["'&<>]/g,e=>u[e])}function m(e,n){let t="";for(let a=0;a<e.length;a+=1)t+=n(e[a],a);return t}const p={$$render:()=>""};function f(e,n){if(!e||!e.$$render)throw"svelte:component"===n&&(n+=" this={...}"),new Error(`<${n}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return e}let g;function v(e){function n(n,t,a,r){const o=i;s({$$:{on_destroy:g,context:new Map(o?o.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const c=e(n,t,a,r);return s(o),c}return{render:(e={},a={})=>{g=[];const r={title:"",head:"",css:new Set},i=n(r,e,{},a);return t(g),{html:i,css:{code:Array.from(r.css).map(e=>e.code).join("\n"),map:null},head:r.title+r.head}},$$render:n}}function A(e,n,t){return null==n||t&&!n?"":` ${e}${!0===n?"":"="+("string"==typeof n?JSON.stringify(h(n)):`"${n}"`)}`}const C=[];function $(n,t=e){let a;const r=[];function i(e){if(i=e,((t=n)!=t?i==i:t!==i||t&&"object"==typeof t||"function"==typeof t)&&(n=e,a)){const e=!C.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),C.push(t,n)}if(e){for(let e=0;e<C.length;e+=2)C[e][0](C[e+1]);C.length=0}}var t,i}return{set:i,update:function(e){i(e(n))},subscribe:function(s,o=e){const c=[s,o];return r.push(c),1===r.length&&(a=t(i)||e),s(n),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(a(),a=null)}}}}function y(n,r,i){const s=!Array.isArray(n),o=s?[n]:n,c=r.length<2;return{subscribe:$(i,n=>{let i=!1;const l=[];let d=0,u=e;const h=()=>{if(d)return;u();const t=r(s?l[0]:l,n);c?n(t):u="function"==typeof t?t:e},m=o.map((e,n)=>a(e,e=>{l[n]=e,d&=~(1<<n),i&&h()},()=>{d|=1<<n}));return i=!0,h(),function(){t(m),u()}}).subscribe}}const w={},b={};function k(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const S=function(e,n){const t=[];let a=k(e);return{get location(){return a},listen(n){t.push(n);const r=()=>{a=k(e),n({location:a,action:"POP"})};return e.addEventListener("popstate",r),()=>{e.removeEventListener("popstate",r);const a=t.indexOf(n);t.splice(a,1)}},navigate(n,{state:r,replace:i=!1}={}){r={...r,key:Date.now()+""};try{i?e.history.replaceState(r,null,n):e.history.pushState(r,null,n)}catch(t){e.location[i?"replace":"assign"](n)}a=k(e),t.forEach(e=>e({location:a,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let n=0;const t=[{pathname:e,search:""}],a=[];return{get location(){return t[n]},addEventListener(e,n){},removeEventListener(e,n){},history:{get entries(){return t},get index(){return n},get state(){return a[n]},pushState(e,r,i){const[s,o=""]=i.split("?");n++,t.push({pathname:s,search:o}),a.push(e)},replaceState(e,r,i){const[s,o=""]=i.split("?");t[n]={pathname:s,search:o},a[n]=e}}}}()),x=/^:(.+)/;function M(e){return"*"===e[0]}function E(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function K(e){return e.replace(/(^\/+|\/+$)/g,"")}function I(e,n){return{route:e,score:e.default?0:E(e.path).reduce((e,n)=>(e+=4,!function(e){return""===e}(n)?!function(e){return x.test(e)}(n)?M(n)?e-=5:e+=3:e+=2:e+=1,e),0),index:n}}function O(e,n){let t,a;const[r]=n.split("?"),i=E(r),s=""===i[0],o=function(e){return e.map(I).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}(e);for(let e=0,r=o.length;e<r;e++){const r=o[e].route;let c=!1;if(r.default){a={route:r,params:{},uri:n};continue}const l=E(r.path),d={},u=Math.max(i.length,l.length);let h=0;for(;h<u;h++){const e=l[h],n=i[h];if(void 0!==e&&M(e)){d["*"===e?"*":e.slice(1)]=i.slice(h).map(decodeURIComponent).join("/");break}if(void 0===n){c=!0;break}let t=x.exec(e);if(t&&!s){const e=decodeURIComponent(n);d[t[1]]=e}else if(e!==n){c=!0;break}}if(!c){t={route:r,params:d,uri:"/"+i.slice(0,h).join("/")};break}}return t||a||null}function G(e,n){return K("/"===n?e:`${K(e)}/${K(n)}`)+"/"}const R=v((e,n,t,a)=>{let i,s,o,{basepath:u="/"}=n,{url:h=null}=n;const m=d(w),p=d(b),f=$([]);o=r(f);const g=$(null);let v=!1;const A=m||$(h?{pathname:h}:S.location);s=r(A);const C=p?p.routerBase:$({path:u,uri:u});i=r(C);const k=y([C,g],([e,n])=>{if(null===n)return e;const{path:t}=e,{route:a,uri:r}=n;return{path:a.default?t:a.path.replace(/\*.*$/,""),uri:r}});m||(c(()=>S.listen(e=>{A.set(e.location)})),l(w,A)),l(b,{activeRoute:g,base:C,routerBase:k,registerRoute:function(e){const{path:n}=i;let{path:t}=e;if(e._path=t,e.path=G(n,t),"undefined"==typeof window){if(v)return;const n=function(e,n){return O([e],n)}(e,s.pathname);n&&(g.set(n),v=!0)}else f.update(n=>(n.push(e),n))},unregisterRoute:function(e){f.update(n=>{const t=n.indexOf(e);return n.splice(t,1),n})}}),void 0===n.basepath&&t.basepath&&void 0!==u&&t.basepath(u),void 0===n.url&&t.url&&void 0!==h&&t.url(h),i=r(C),s=r(A),o=r(f);{const{path:e}=i;f.update(n=>(n.forEach(n=>n.path=G(e,n._path)),n))}{const e=O(o,s.pathname);g.set(e)}return""+(a.default?a.default({}):"")}),L=v((e,n,t,a)=>{let i,s,{path:c=""}=n,{component:l=null}=n;const{registerRoute:u,unregisterRoute:h,activeRoute:m}=d(b);i=r(m);const g=d(w);s=r(g);const v={path:c,default:""===c};let A={},C={};var $;u(v),"undefined"!=typeof window&&($=()=>{h(v)},o().$$.on_destroy.push($)),void 0===n.path&&t.path&&void 0!==c&&t.path(c),void 0===n.component&&t.component&&void 0!==l&&t.component(l),i=r(m),s=r(g),i&&i.route===v&&(A=i.params);{const{path:e,component:t,...a}=n;C=a}return""+(null!==i&&i.route===v?""+(null!==l?""+f(l||p,"svelte:component").$$render(e,Object.assign({location:s},A,C),{},{}):""+(a.default?a.default({params:A,location:s}):"")):"")}),B=v((e,n,t,a)=>{let{href:r}=n,{activePage:i}=n,{handleClick:s}=n;return void 0===n.href&&t.href&&void 0!==r&&t.href(r),void 0===n.activePage&&t.activePage&&void 0!==i&&t.activePage(i),void 0===n.handleClick&&t.handleClick&&void 0!==s&&t.handleClick(s),`<a${A("href",r,0)} class="${["item",i===r?"active":""].join(" ").trim()}">${a.default?a.default({}):""}</a>`}),P={code:".Card.svelte-85vdhu{display:flex;width:100px;height:100px}",map:'{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script>\\n  export let id;\\n  export let name;\\n  export let state;\\n  export let handleClick;\\n  let imgSrc;\\n\\n  $: {\\n    if (state === 0) {\\n      imgSrc = \\"/images/memory/blank.png\\";\\n    } else if (state === 1) {\\n      imgSrc = `/images/memory/${name}.png`;\\n    } else {\\n      imgSrc = \\"/images/memory/white.png\\";\\n    }\\n  }\\n<\/script>\\n\\n<style>\\n  .Card {\\n    display: flex;\\n    width: 100px;\\n    height: 100px;\\n  }\\n</style>\\n\\n<img class=\\"Card\\" src={imgSrc} name={name} alt={name} id={id} on:click={handleClick} />\\n"],"names":[],"mappings":"AAmBE,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,AACf,CAAC"}'},_=v((e,n,t,a)=>{let r,{id:i}=n,{name:s}=n,{state:o}=n,{handleClick:c}=n;return void 0===n.id&&t.id&&void 0!==i&&t.id(i),void 0===n.name&&t.name&&void 0!==s&&t.name(s),void 0===n.state&&t.state&&void 0!==o&&t.state(o),void 0===n.handleClick&&t.handleClick&&void 0!==c&&t.handleClick(c),e.css.add(P),r=0===o?"/images/memory/blank.png":1===o?`/images/memory/${s}.png`:"/images/memory/white.png",`<img class="Card svelte-85vdhu"${A("src",r,0)}${A("name",s,0)}${A("alt",s,0)}${A("id",i,0)}>`}),j=["cheeseburger","fries","hotdog","ice-cream","milkshake","pizza"].map(e=>({id:"0"+e,name:e,state:0})),q=j.map(e=>({...e,id:"1"+e.name})),z=[...j,...q].sort((e,n)=>.5-Math.random());const T=function(){const{subscribe:e,update:n}=$(z);return{subscribe:e,changeState:(e,t)=>n(n=>{const a=n.findIndex(n=>n.id===e);return n[a].state=t,n})}}(),W=$(""),Y=$(0),H=$(!1),D={code:".Grid.svelte-25a74i{display:flex;flex-wrap:wrap;width:400px;height:300px}",map:'{"version":3,"file":"MemoryGame.svelte","sources":["MemoryGame.svelte"],"sourcesContent":["<script>\\n  import Card from \\"./Card.svelte\\";\\n  import { cards, disabled, message, score } from \\"./store\\";\\n  let firstCard = null;\\n\\n  function handleClick(event) {\\n    const currentCard = $cards.find(c => c.id === event.target.id);\\n    if ($disabled || currentCard.state === 2) {\\n      return;\\n    }\\n\\n    cards.changeState(currentCard.id, 1);\\n\\n    if (firstCard == null) {\\n      firstCard = currentCard;\\n    } else {\\n      // second card chosen\\n      disabled.set(true);\\n      if (firstCard.name === currentCard.name) {\\n        message.set(\\"You have a pair!\\");\\n        score.update(s => s + 1);\\n        setTimeout(() => {\\n          cards.changeState(currentCard.id, 2);\\n          cards.changeState(firstCard.id, 2);\\n          firstCard = null;\\n          if ($score === 6) {\\n            message.set(\\"Congratulations! You have won the game. :)\\");\\n          } else {\\n            message.set(\\"\\");\\n            disabled.set(false);\\n          }\\n        }, 2000);\\n      } else {\\n        message.set(\\"No cigar!\\");\\n        disabled.set(true);\\n        setTimeout(() => {\\n          cards.changeState(currentCard.id, 0);\\n          cards.changeState(firstCard.id, 0);\\n          firstCard = null;\\n          message.set(\\"\\");\\n          disabled.set(false);\\n        }, 2000);\\n      }\\n    }\\n  }\\n<\/script>\\n\\n<style>\\n  .Grid {\\n    display: flex;\\n    flex-wrap: wrap;\\n    width: 400px;\\n    height: 300px;\\n  }\\n</style>\\n\\n<h1>Memory Game</h1>\\n<div class=\\"ui grid\\">\\n  <div class=\\"eight wide column\\">\\n    <div class=\\"Grid\\">\\n      {#each $cards as card (card.id)}\\n        <Card id={card.id} name={card.name} state={card.state} {handleClick} />\\n      {/each}\\n    </div>\\n  </div>\\n\\n  <div class=\\"eight wide column\\">\\n    <h3>Score: {$score}</h3>\\n    <h3>{$message}</h3>\\n    <p>\\n      Original here:\\n      <a href=\\"/memory-game\\">/memory-game</a>\\n    </p>\\n  </div>\\n</div>\\n"],"names":[],"mappings":"AAgDE,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,AACf,CAAC"}'},N=v((e,n,t,a)=>{let i=r(T),s=r(H),o=r(Y),c=r(W),l=null;function d(e){const n=i.find(n=>n.id===e.target.id);s||2===n.state||(T.changeState(n.id,1),null==l?l=n:(H.set(!0),l.name===n.name?(W.set("You have a pair!"),Y.update(e=>e+1),setTimeout(()=>{T.changeState(n.id,2),T.changeState(l.id,2),l=null,6===o?W.set("Congratulations! You have won the game. :)"):(W.set(""),H.set(!1))},2e3)):(W.set("No cigar!"),H.set(!0),setTimeout(()=>{T.changeState(n.id,0),T.changeState(l.id,0),l=null,W.set(""),H.set(!1)},2e3))))}return e.css.add(D),`<h1>Memory Game</h1>\n<div class="ui grid"><div class="eight wide column"><div class="Grid svelte-25a74i">${m(i,n=>""+f(_,"Card").$$render(e,{id:n.id,name:n.name,state:n.state,handleClick:d},{},{}))}</div></div>\n\n  <div class="eight wide column"><h3>Score: ${h(o)}</h3>\n    <h3>${h(c)}</h3>\n    <p>Original here:\n      <a href="/memory-game">/memory-game</a></p></div></div>`}),U={code:'.mole.svelte-13hhw4r{background-image:url("/images/mole.png");background-size:cover}',map:'{"version":3,"file":"WhackAMole.svelte","sources":["WhackAMole.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n\\n  let score = 0;\\n  let seconds = 30;\\n  let hole = null;\\n  let message = \\"\\";\\n  let timer;\\n\\n  function newHole() {\\n    hole = Math.floor(Math.random() * 9);\\n  }\\n\\n  onMount(() => {\\n    timer = setInterval(() => {\\n      seconds -= 1;\\n      if (seconds === 0) {\\n        clearInterval(timer);\\n        message = \\"Game Over!\\";\\n      } else {\\n        message = \\"\\";\\n        newHole();\\n      }\\n    }, 1000);\\n\\n    return () => {\\n      clearInterval(timer);\\n    };\\n  });\\n\\n  function handleClick(event) {\\n    if (seconds < 1) return;\\n\\n    const square = event.target;\\n    if (square.classList.contains(\\"mole\\")) {\\n      score += 1;\\n      message = \\"Hit!\\";\\n      hole = null;\\n    } else {\\n      if (score > 0) {\\n        score -= 1;\\n      }\\n      message = \\"Miss!\\";\\n    }\\n  }\\n<\/script>\\n\\n<style>\\n  .mole {\\n    background-image: url(\\"/images/mole.png\\");\\n    background-size: cover;\\n  }\\n</style>\\n\\n<h1>Whack a Mole!</h1>\\n<div class=\\"ui grid\\">\\n  <div class=\\"eight wide column\\">\\n    <div class=\\"squareGrid\\">\\n      {#each Array(9) as _, i}\\n        <div\\n          class=\\"square\\"\\n          class:mole={hole === i}\\n          id=\\"i\\"\\n          on:click={handleClick} />\\n      {/each}\\n    </div>\\n  </div>\\n  <div class=\\"eight wide column\\">\\n    <h3>Time left: {seconds}</h3>\\n    <h3>Score: {score}</h3>\\n    <h3>{message}</h3>\\n  </div>\\n</div>\\n"],"names":[],"mappings":"AAgDE,KAAK,eAAC,CAAC,AACL,gBAAgB,CAAE,IAAI,kBAAkB,CAAC,CACzC,eAAe,CAAE,KAAK,AACxB,CAAC"}'},J=v((e,n,t,a)=>{let r,i=30,s=null,o="";return c(()=>(r=setInterval(()=>{i-=1,0===i?(clearInterval(r),o="Game Over!"):(o="",s=Math.floor(9*Math.random()))},1e3),()=>{clearInterval(r)})),e.css.add(U),`<h1>Whack a Mole!</h1>\n<div class="ui grid"><div class="eight wide column"><div class="squareGrid">${m(Array(9),(e,n)=>`<div class="${["square svelte-13hhw4r",s===n?"mole":""].join(" ").trim()}" id="i"></div>`)}</div></div>\n  <div class="eight wide column"><h3>Time left: ${h(i)}</h3>\n    <h3>Score: ${h(0)}</h3>\n    <h3>${h(o)}</h3></div></div>`}),Z=v((e,n,t,a)=>{let r,{url:i=""}=n;function s(e){r=e.target.pathname}return c(()=>{r=window.location.pathname}),void 0===n.url&&t.url&&void 0!==i&&t.url(i),""+f(R,"Router").$$render(e,{url:i,basepath:"/svelte-mini-games","}":!0},{},{default:()=>`<div class="ui container"><div class="ui segment"><h1>Seven JavaScript Games with Svelte!</h1></div>\n\n    <nav class="ui two item menu">${f(B,"MyLink").$$render(e,{href:"/svelte-mini-games/memory",handleClick:s,activePage:r},{},{default:()=>"Memory Game"})}\n      ${f(B,"MyLink").$$render(e,{href:"/svelte-mini-games/whackamole",handleClick:s,activePage:r},{},{default:()=>"Whack a Mole!\n      "})}</nav>\n\n    <div class="ui segment">${f(L,"Route").$$render(e,{path:"memory",component:N},{},{})}\n      ${f(L,"Route").$$render(e,{path:"whackamole",component:J},{},{})}</div></div>`})});module.exports=Z;
