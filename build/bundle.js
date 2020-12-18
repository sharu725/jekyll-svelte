!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function p(t){h=t}const m=[],g=[],$=[],b=[],y=Promise.resolve();let v=!1;function x(t){$.push(t)}let _=!1;const k=new Set;function w(){if(!_){_=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];p(e),S(e.$$)}for(p(null),m.length=0;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];k.has(e)||(k.add(e),e())}$.length=0}while(m.length);for(;b.length;)b.pop()();v=!1,_=!1,k.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const T=new Set;function q(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(s,c,l,i,a,f,d=[-1]){const m=h;p(s);const g=c.props||{},$=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=l?l(s,g,((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&a($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&q(s,t)),e})):[],$.update(),b=!0,o($.before_update),$.fragment=!!i&&i($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(u)}else $.fragment&&$.fragment.c();c.intro&&((y=s.$$.fragment)&&y.i&&(T.delete(y),y.i(v))),function(t,n,s){const{fragment:c,on_mount:l,on_destroy:u,after_update:i}=t.$$;c&&c.m(n,s),x((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(x)}(s,c.target,c.anchor),w()}var y,v;p(m)}class E{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function j(e){let n,o,r,s,a,h;return{c(){n=i("div"),o=i("h1"),o.textContent="Jekyll Svelte",r=f(),s=i("a"),a=i("img"),d(a,"width","20"),a.src!==(h=`${e[0]}/assets/images/github.svg`)&&d(a,"src",h),d(a,"alt","github repo"),d(s,"href","https://github.com/sharu725/jekyll-svelte"),d(s,"class","svelte-irxoiu"),d(n,"class","title svelte-irxoiu")},m(t,e){l(t,n,e),c(n,o),c(n,r),c(n,s),c(s,a)},p(t,[e]){1&e&&a.src!==(h=`${t[0]}/assets/images/github.svg`)&&d(a,"src",h)},i:t,o:t,d(t){t&&u(n)}}}function A(t,e,n){let{baseUrl:o}=e;return t.$$set=t=>{"baseUrl"in t&&n(0,o=t.baseUrl)},[o]}function L(e){let n,o,r,s;return{c(){n=i("section"),o=i("h2"),o.textContent=`Hello ${U}!`,r=f(),s=i("p"),s.innerHTML="This is a <em>svelte</em> component.",d(o,"class","svelte-9ynubl"),d(n,"class","svelte-9ynubl")},m(t,e){l(t,n,e),c(n,o),c(n,r),c(n,s)},p:t,i:t,o:t,d(t){t&&u(n)}}}let U="Jekyll";function H(e){let n,o,r,s,h,p,m,g,$,b,y,v;return{c(){n=i("section"),o=i("div"),r=i("p"),s=a("Count: "),h=i("strong"),p=a(e[0]),m=f(),g=i("button"),g.textContent="Increment",$=f(),b=i("p"),b.innerHTML="This is another <em>svelte</em> component.",d(g,"class","svelte-12flq5d"),d(o,"class","card svelte-12flq5d")},m(t,u){var i,a,f,d;l(t,n,u),c(n,o),c(o,r),c(r,s),c(r,h),c(h,p),c(o,m),c(o,g),c(o,$),c(o,b),y||(i=g,a="click",f=e[1],i.addEventListener(a,f,d),v=()=>i.removeEventListener(a,f,d),y=!0)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(p,t[0])},i:t,o:t,d(t){t&&u(n),y=!1,v()}}}function M(t,e,n){let o=0;return[o,()=>n(0,o+=1)]}function J(e){let n,o,r;return{c(){n=i("h1"),n.textContent="Jekyll Svelte",o=f(),r=i("section"),r.innerHTML='<h2 class="svelte-1xut9b3">About</h2> \n  <p>This is a <em>svelte</em> component.</p>',d(r,"class","svelte-1xut9b3")},m(t,e){l(t,n,e),l(t,o,e),l(t,r,e)},p:t,i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(r)}}}const N=document.querySelector("#title");N&&new class extends E{constructor(t){super(),C(this,t,A,j,s,{baseUrl:0})}}({target:N,props:{baseUrl:"/jekyll-svelte"}});const O=document.querySelector("#hello");O&&new class extends E{constructor(t){super(),C(this,t,null,L,s,{})}}({target:O});const B=document.querySelector("#sample");B&&new class extends E{constructor(t){super(),C(this,t,M,H,s,{})}}(B&&{target:B});const I=document.querySelector("#about");I&&new class extends E{constructor(t){super(),C(this,t,null,J,s,{})}}({target:I})}();
//# sourceMappingURL=bundle.js.map
