import{d as v,o as s,c as r,r as h,n as f,W as k,_ as d,k as c,h as g,b as m,K as y,w as $,M as w,L as x,e as B,t as A,G as C,a7 as T,a8 as P,a9 as L,aa as R,ab as S,ac as H,ad as O,ae as E,af as D,ag as K,$ as V,u as j,j as I,A as Z,ah as F,ai as G,aj as M,ak as N}from"./chunks/framework.12c44b05.js";import{t as z}from"./chunks/theme.2b76e40b.js";import"./chunks/index.vue_vue_type_style_index_0_scoped_be8c6e1a_lang.4ed993c7.js";const U=v({__name:"index",props:{disabled:{type:Boolean,default:!1},type:{default:"default"},width:{default:74},height:{default:34}},emits:["click"],setup(e,{emit:t}){const o=e;console.log(o);const n=()=>{o.disabled||t("click")};return(a,u)=>(s(),r("button",{class:f(["button",a.disabled?"disabled":"",a.type]),style:k(`--width:${a.width}px;--height:${a.height}px`),onClick:n},[h(a.$slots,"default",{},void 0,!0)],6))}}),W=d(U,[["__scopeId","data-v-be8c6e1a"]]),q={};function J(e,t){return s(),r("h4",null,"hello knot")}const Q=d(q,[["render",J]]),X={install(e){e.component("KnButton",W),e.component("KnHello",Q)}};const Y={},ee={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},te=c("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"},null,-1),ne=[te];function oe(e,t){return s(),r("svg",ee,ne)}const se=d(Y,[["render",oe]]),ae={},ce={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},le=c("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"},null,-1),ie=[le];function re(e,t){return s(),r("svg",ce,ie)}const ue=d(ae,[["render",re]]),de={class:"component-card"},_e={class:"component-box"},pe=v({__name:"index",setup(e,{expose:t}){const o=g(!1),n=g(null),a=_=>{if(o.value=_,!n.value)return;if(!_){const{height:i}=n.value.getBoundingClientRect();n.value.style.height=`${i}px`,n.value.offsetHeight,n.value.style.height=0,n.value.style.margin=0;return}n.value.style.height="auto";const{height:l}=n.value.getBoundingClientRect();n.value.style.height=0,n.value.offsetHeight,n.value.style.height=`${l}px`,n.value.style.margin="-16px 0"};return t({autoHeight:()=>{n.value.style.height="auto"}}),(_,l)=>(s(),r("div",de,[c("div",_e,[h(_.$slots,"component",{},void 0,!0)]),c("div",{class:f([{"code-show":o.value},"util-box"])},[o.value?(s(),m(se,{key:0,onClick:l[0]||(l[0]=i=>a(!1))})):(s(),m(ue,{key:1,onClick:l[1]||(l[1]=i=>a(!0))}))],2),c("div",{class:f([{"code-show":o.value},"code-box"]),ref_key:"codeBox",ref:n},[h(_.$slots,"code",{},void 0,!0)],2)]))}});const he=d(pe,[["__scopeId","data-v-08946a70"]]),fe={class:"theme-code-group"},me={class:"theme-code-group__nav"},ve={class:"theme-code-group__ul"},ge=["onClick"],Ce={key:0,class:"pre-blank"},ye=v({__name:"index",props:{codeTabs:{default:[]}},emits:["tabChange"],setup(e,{emit:t}){const n=g(e.codeTabs[0]),a=u=>{n.value=u,t("tabChange")};return(u,_)=>{const l=y("ClientOnly");return s(),m(l,null,{default:$(()=>[c("div",fe,[c("div",me,[c("ul",ve,[(s(!0),r(x,null,w(u.codeTabs,i=>(s(),r("li",{key:i,class:"theme-code-group__li"},[c("button",{class:f(["theme-code-group__nav-tab",{"theme-code-group__nav-tab-active":i===n.value}]),onClick:Le=>a(i)},A(i),11,ge)]))),128))])]),h(u.$slots,n.value,{},void 0,!0),u.codeTabs.length<1?(s(),r("pre",Ce," // 没代码~ ")):B("",!0)])]),_:3})}}});const $e=d(ye,[["__scopeId","data-v-4225ec92"]]),be={};function ke(e,t){const o=y("ClientOnly");return s(),m(o,null,{default:$(()=>[h(e.$slots,"default")]),_:3})}const we=d(be,[["render",ke]]),xe={...z,enhanceApp({app:e}){e.component("ComponentCard",he),e.component("CodeGroup",$e),e.component("CodeBlock",we),e.use(X)}};function b(e){if(e.extends){const t=b(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const p=b(xe),Be=v({name:"VitePressApp",setup(){const{site:e}=j();return I(()=>{Z(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),F(),G(),M(),p.setup&&p.setup(),()=>N(p.Layout)}});async function Ae(){const e=Pe(),t=Te();t.provide(P,e);const o=L(e.route);return t.provide(R,o),t.component("Content",S),t.component("ClientOnly",H),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:O}),{app:t,router:e,data:o}}function Te(){return E(Be)}function Pe(){let e=C,t;return D(o=>{let n=K(o);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),C&&(e=!1),V(()=>import(n),[])):null},p.NotFound)}C&&Ae().then(({app:e,router:t,data:o})=>{t.go().then(()=>{T(t.route,o.site),e.mount("#app")})});export{Ae as createApp};
