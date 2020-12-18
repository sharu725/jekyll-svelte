!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function h(t){p=t}const m=[],$=[],g=[],y=[],b=Promise.resolve();let v=!1;function x(t){g.push(t)}let _=!1;const k=new Set;function w(){if(!_){_=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),T(e.$$)}for(h(null),m.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];k.has(e)||(k.add(e),e())}g.length=0}while(m.length);for(;y.length;)y.pop()();v=!1,_=!1,k.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const j=new Set;function E(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(c,s,u,i,a,f,d=[-1]){const m=p;h(c);const $=s.props||{},g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let y=!1;if(g.ctx=u?u(c,$,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&E(c,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();s.intro&&((b=c.$$.fragment)&&b.i&&(j.delete(b),b.i(v))),function(t,n,c){const{fragment:s,on_mount:u,on_destroy:l,after_update:i}=t.$$;s&&s.m(n,c),x((()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(x)}(c,s.target,s.anchor),w()}var b,v;h(m)}class S{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function A(e){let n,o,r,c;return{c(){n=i("section"),o=i("h2"),o.textContent=`Hello ${L}!`,r=f(),c=i("p"),c.innerHTML="This is a <em>svelte</em> component.",d(o,"class","svelte-1gkyvjw"),d(n,"class","svelte-1gkyvjw")},m(t,e){u(t,n,e),s(n,o),s(n,r),s(n,c)},p:t,i:t,o:t,d(t){t&&l(n)}}}let L="Jekyll";function q(e){let n,o,r,c,p,h,m,$,g,y,b,v;return{c(){n=i("section"),o=i("div"),r=i("p"),c=a("Count: "),p=i("strong"),h=a(e[0]),m=f(),$=i("button"),$.textContent="Increment",g=f(),y=i("p"),y.innerHTML="This is another <em>svelte</em> component.",d($,"class","svelte-kocvf2"),d(o,"class","card svelte-kocvf2")},m(t,l){var i,a,f,d;u(t,n,l),s(n,o),s(o,r),s(r,c),s(r,p),s(p,h),s(o,m),s(o,$),s(o,g),s(o,y),b||(i=$,a="click",f=e[1],i.addEventListener(a,f,d),v=()=>i.removeEventListener(a,f,d),b=!0)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(h,t[0])},i:t,o:t,d(t){t&&l(n),b=!1,v()}}}function H(t,e,n){let o=0;return[o,()=>n(0,o+=1)]}function M(e){let n,o,r;return{c(){n=i("h1"),n.textContent="Jekyll Svelte",o=f(),r=i("section"),r.innerHTML='<h2 class="svelte-kjb87a">About</h2> \n  <p>This is a <em>svelte</em> component.</p>',d(r,"class","svelte-kjb87a")},m(t,e){u(t,n,e),u(t,o,e),u(t,r,e)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(o),t&&l(r)}}}const N=document.querySelector("#hello");N&&new class extends S{constructor(t){super(),C(this,t,null,A,c,{})}}({target:N});const O=document.querySelector("#sample");O&&new class extends S{constructor(t){super(),C(this,t,H,q,c,{})}}(O&&{target:O});const J=document.querySelector("#about");J&&new class extends S{constructor(t){super(),C(this,t,null,M,c,{})}}({target:J})}();
//# sourceMappingURL=bundle.js.map
