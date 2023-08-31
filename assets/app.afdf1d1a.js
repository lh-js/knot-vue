import{d as m,o as s,c as a,r as f,n as h,W as y,_ as d,g as k,L as C,M as b,k as u,h as g,b as v,K as w,w as x,e as B,t as P,G as $,a7 as A,a8 as T,a9 as K,aa as j,ab as R,ac as S,ad as W,ae as G,af as H,ag as O,$ as E,u as I,j as D,A as V,ah as Z,ai as F,aj as M,ak as N}from"./chunks/framework.12c44b05.js";import{t as z}from"./chunks/theme.0cf5cb79.js";import"./chunks/index.vue_vue_type_style_index_0_scoped_487105e8_lang.4ed993c7.js";const U=m({__name:"index",props:{disabled:{type:Boolean,default:!1},type:{default:"default"},width:{default:74},height:{default:34}},emits:["click"],setup(e,{emit:t}){const o=e;console.log(o);const n=()=>{o.disabled||t("click")};return(i,l)=>(s(),a("button",{class:h(["button",i.disabled?"disabled":"",i.type]),style:y(`--width:${i.width}px;--height:${i.height}px`),onClick:n},[f(i.$slots,"default",{},void 0,!0)],6))}}),q=d(U,[["__scopeId","data-v-be8c6e1a"]]),J={};function Q(e,t){return s(),a("h4",null,"hello knot")}const X=d(J,[["render",Q]]),Y=["src"],ee=m({__name:"index",props:{pictureList:{},itemWidth:{}},setup(e){const t=e,o=k(()=>{if(t.pictureList)return t.pictureList.length>4?t.pictureList.slice(0,4):t.pictureList});return(n,i)=>(s(),a("div",{class:"picture-list",style:y(`--itemWidth:${n.itemWidth?n.itemWidth:50}px`)},[(s(!0),a(C,null,b(o.value,(l,r)=>{var c;return s(),a("div",{class:h(`picture-item${r+1} picture-length${(c=o.value)==null?void 0:c.length}`),key:r},[u("img",{src:l,style:{width:"100%",height:"100%","object-fit":"cover","object-position":"left"}},null,8,Y)],2)}),128))],4))}}),te=d(ee,[["__scopeId","data-v-6e81147c"]]),ne=["src"],oe=m({__name:"index",props:{pictureList:{},boxWidth:{},gap:{}},setup(e){const t=e,o=k(()=>{if(t.pictureList)return t.pictureList.length>4?t.pictureList.slice(0,4):t.pictureList});return(n,i)=>(s(),a("div",{class:"picture-list",style:y(`--boxWidth:${n.boxWidth?n.boxWidth:100}px;--gap:${n.gap?n.gap:.5}%`)},[(s(!0),a(C,null,b(o.value,(l,r)=>{var c;return s(),a("div",{class:h(`picture-item${r+1} picture-length${(c=o.value)==null?void 0:c.length}`),key:r},[u("img",{src:l,style:{width:"100%",height:"100%","object-fit":"cover","object-position":"left"}},null,8,ne)],2)}),128))],4))}}),se=d(oe,[["__scopeId","data-v-487105e8"]]),ce={install(e){e.component("KnButton",q),e.component("KnHello",X),e.component("KnPictureGroup",te),e.component("KnPictureGroupPro",se)}};const ae={},ie={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},re=u("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"},null,-1),le=[re];function ue(e,t){return s(),a("svg",ie,le)}const de=d(ae,[["render",ue]]),pe={},_e={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},he=u("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"},null,-1),me=[he];function fe(e,t){return s(),a("svg",_e,me)}const ve=d(pe,[["render",fe]]),ge={class:"component-card"},$e={class:"component-box"},ye=m({__name:"index",setup(e,{expose:t}){const o=g(!1),n=g(null),i=r=>{if(o.value=r,!n.value)return;if(!r){const{height:p}=n.value.getBoundingClientRect();n.value.style.height=`${p}px`,n.value.offsetHeight,n.value.style.height=0,n.value.style.margin=0;return}n.value.style.height="auto";const{height:c}=n.value.getBoundingClientRect();n.value.style.height=0,n.value.offsetHeight,n.value.style.height=`${c}px`,n.value.style.margin="-16px 0"};return t({autoHeight:()=>{n.value.style.height="auto"}}),(r,c)=>(s(),a("div",ge,[u("div",$e,[f(r.$slots,"component",{},void 0,!0)]),u("div",{class:h([{"code-show":o.value},"util-box"])},[o.value?(s(),v(de,{key:0,onClick:c[0]||(c[0]=p=>i(!1))})):(s(),v(ve,{key:1,onClick:c[1]||(c[1]=p=>i(!0))}))],2),u("div",{class:h([{"code-show":o.value},"code-box"]),ref_key:"codeBox",ref:n},[f(r.$slots,"code",{},void 0,!0)],2)]))}});const Ce=d(ye,[["__scopeId","data-v-08946a70"]]),be={class:"theme-code-group"},ke={class:"theme-code-group__nav"},we={class:"theme-code-group__ul"},xe=["onClick"],Le={key:0,class:"pre-blank"},Be=m({__name:"index",props:{codeTabs:{default:[]}},emits:["tabChange"],setup(e,{emit:t}){const n=g(e.codeTabs[0]),i=l=>{n.value=l,t("tabChange")};return(l,r)=>{const c=w("ClientOnly");return s(),v(c,null,{default:x(()=>[u("div",be,[u("div",ke,[u("ul",we,[(s(!0),a(C,null,b(l.codeTabs,p=>(s(),a("li",{key:p,class:"theme-code-group__li"},[u("button",{class:h(["theme-code-group__nav-tab",{"theme-code-group__nav-tab-active":p===n.value}]),onClick:He=>i(p)},P(p),11,xe)]))),128))])]),f(l.$slots,n.value,{},void 0,!0),l.codeTabs.length<1?(s(),a("pre",Le," // 没代码~ ")):B("",!0)])]),_:3})}}});const Pe=d(Be,[["__scopeId","data-v-4225ec92"]]),Ae={};function Te(e,t){const o=w("ClientOnly");return s(),v(o,null,{default:x(()=>[f(e.$slots,"default")]),_:3})}const Ke=d(Ae,[["render",Te]]),je={...z,enhanceApp({app:e}){e.component("ComponentCard",Ce),e.component("CodeGroup",Pe),e.component("CodeBlock",Ke),e.use(ce)}};function L(e){if(e.extends){const t=L(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const _=L(je),Re=m({name:"VitePressApp",setup(){const{site:e}=I();return D(()=>{V(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Z(),F(),M(),_.setup&&_.setup(),()=>N(_.Layout)}});async function Se(){const e=Ge(),t=We();t.provide(T,e);const o=K(e.route);return t.provide(j,o),t.component("Content",R),t.component("ClientOnly",S),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),_.enhanceApp&&await _.enhanceApp({app:t,router:e,siteData:W}),{app:t,router:e,data:o}}function We(){return G(Re)}function Ge(){let e=$,t;return H(o=>{let n=O(o);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),$&&(e=!1),E(()=>import(n),[])):null},_.NotFound)}$&&Se().then(({app:e,router:t,data:o})=>{t.go().then(()=>{A(t.route,o.site),e.mount("#app")})});export{Se as createApp};
