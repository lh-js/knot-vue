import{d as h,o as c,c as a,r as v,n as p,W as m,_ as d,g as L,L as g,M as $,k as l,t as w,a as T,p as K,m as H,h as b,b as C,K as B,w as P,e as R,C as Z,Z as O,O as j,l as E,$ as A,G as k,a7 as V,a8 as W,a9 as G,aa as D,ab as M,ac as N,ad as F,ae as z,af as U,ag as q,u as J,j as Q,A as X,ah as Y,ai as ee,aj as te,ak as ne}from"./chunks/framework.4ac8b95d.js";import{t as oe}from"./chunks/theme.914b8828.js";import"./chunks/index.vue_vue_type_style_index_0_scoped_a614a3f9_lang.4ed993c7.js";const se=h({__name:"index",props:{disabled:{type:Boolean,default:!1},type:{default:"default"},width:{default:74},height:{default:34}},emits:["click"],setup(e,{emit:t}){const o=e;console.log(o);const n=()=>{o.disabled||t("click")};return(i,s)=>(c(),a("button",{class:p(["button",i.disabled?"disabled":"",i.type]),style:m(`--width:${i.width}px;--height:${i.height}px`),onClick:n},[v(i.$slots,"default",{},void 0,!0)],6))}}),ce=d(se,[["__scopeId","data-v-cd1f9097"]]),ae={};function ie(e,t){return c(),a("h4",null,"hello knot")}const le=d(ae,[["render",ie]]),re=["src"],ue=h({__name:"index",props:{pictureList:{},itemWidth:{}},setup(e){const t=e,o=L(()=>{if(t.pictureList)return t.pictureList.length>4?t.pictureList.slice(0,4):t.pictureList});return(n,i)=>(c(),a("div",{class:"picture-list",style:m(`--itemWidth:${n.itemWidth?n.itemWidth:50}px`)},[(c(!0),a(g,null,$(o.value,(s,r)=>{var u;return c(),a("div",{class:p(`picture-item${r+1} picture-length${(u=o.value)==null?void 0:u.length}`),key:r},[l("img",{src:s,style:{width:"100%",height:"100%","object-fit":"cover","object-position":"left"}},null,8,re)],2)}),128))],4))}}),de=d(ue,[["__scopeId","data-v-6e81147c"]]),_e=["src"],pe=h({__name:"index",props:{pictureList:{},boxWidth:{},gap:{}},setup(e){const t=e,o=L(()=>{if(t.pictureList)return t.pictureList.length>4?t.pictureList.slice(0,4):t.pictureList});return(n,i)=>(c(),a("div",{class:"picture-list",style:m(`--boxWidth:${n.boxWidth?n.boxWidth:100}px;--gap:${n.gap?n.gap:.5}%`)},[(c(!0),a(g,null,$(o.value,(s,r)=>{var u;return c(),a("div",{class:p(`picture-item${r+1} picture-length${(u=o.value)==null?void 0:u.length}`),key:r},[l("img",{src:s,style:{width:"100%",height:"100%","object-fit":"cover","object-position":"left"}},null,8,_e)],2)}),128))],4))}}),he=d(pe,[["__scopeId","data-v-487105e8"]]),fe=h({__name:"index",props:{columns:{},dataSource:{},border:{type:Boolean}},setup(e){return(t,o)=>(c(),a("div",null,[l("table",{style:m(`--border:${t.border?"1px solid #e2e2e3":"none"}`)},[l("tr",null,[(c(!0),a(g,null,$(t.columns,(n,i)=>(c(),a("th",{style:m(`--align:${n.align??"left"}`),key:n.key??i},w(n.title),5))),128))]),l("tbody",null,[(c(!0),a(g,null,$(t.dataSource,(n,i)=>(c(),a("tr",{key:i},[(c(!0),a(g,null,$(t.columns,(s,r)=>(c(),a("td",{style:m(`--align:${s.align??"left"}`),key:s.key??r},[v(t.$slots,s.dataIndex,{row:n},()=>[T(w(n[s.dataIndex]),1)],!0)],4))),128))]))),128))])],4)]))}}),ve=d(fe,[["__scopeId","data-v-544e8476"]]),me={},I=e=>(K("data-v-a614a3f9"),e=e(),H(),e),ge={class:"ball-box"},$e=I(()=>l("div",{class:"ball red"},null,-1)),ye=I(()=>l("div",{class:"ball blue"},null,-1)),Ce=[$e,ye];function be(e,t){return c(),a("div",ge,Ce)}const xe=d(me,[["render",be],["__scopeId","data-v-a614a3f9"]]),we={install(e){e.component("KnButton",ce),e.component("KnHello",le),e.component("KnPictureGroup",de),e.component("KnPictureGroupPro",he),e.component("KnTable",ve),e.component("KnLoading",xe)}};const ke={},Le={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},Be=l("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"},null,-1),Pe=[Be];function Ae(e,t){return c(),a("svg",Le,Pe)}const Ie=d(ke,[["render",Ae]]),Se={},Te={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},Ke=l("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"},null,-1),He=[Ke];function Re(e,t){return c(),a("svg",Te,He)}const Ze=d(Se,[["render",Re]]),Oe={class:"component-card"},je={class:"component-box"},Ee=h({__name:"index",setup(e,{expose:t}){const o=b(!1),n=b(null),i=r=>{if(o.value=r,!n.value)return;if(!r){const{height:_}=n.value.getBoundingClientRect();n.value.style.height=`${_}px`,n.value.offsetHeight,n.value.style.height=0,n.value.style.margin=0;return}n.value.style.height="auto";const{height:u}=n.value.getBoundingClientRect();n.value.style.height=0,n.value.offsetHeight,n.value.style.height=`${u}px`,n.value.style.margin="-16px 0"};return t({autoHeight:()=>{n.value.style.height="auto"}}),(r,u)=>(c(),a("div",Oe,[l("div",je,[v(r.$slots,"component",{},void 0,!0)]),l("div",{class:p([{"code-show":o.value},"util-box"])},[o.value?(c(),C(Ie,{key:0,onClick:u[0]||(u[0]=_=>i(!1))})):(c(),C(Ze,{key:1,onClick:u[1]||(u[1]=_=>i(!0))}))],2),l("div",{class:p([{"code-show":o.value},"code-box"]),ref_key:"codeBox",ref:n},[v(r.$slots,"code",{},void 0,!0)],2)]))}});const Ve=d(Ee,[["__scopeId","data-v-08946a70"]]),We={class:"theme-code-group"},Ge={class:"theme-code-group__nav"},De={class:"theme-code-group__ul"},Me=["onClick"],Ne={key:0,class:"pre-blank"},Fe=h({__name:"index",props:{codeTabs:{default:[]}},emits:["tabChange"],setup(e,{emit:t}){const n=b(e.codeTabs[0]),i=s=>{n.value=s,t("tabChange")};return(s,r)=>{const u=B("ClientOnly");return c(),C(u,null,{default:P(()=>[l("div",We,[l("div",Ge,[l("ul",De,[(c(!0),a(g,null,$(s.codeTabs,_=>(c(),a("li",{key:_,class:"theme-code-group__li"},[l("button",{class:p(["theme-code-group__nav-tab",{"theme-code-group__nav-tab-active":_===n.value}]),onClick:f=>i(_)},w(_),11,Me)]))),128))])]),v(s.$slots,n.value,{},void 0,!0),s.codeTabs.length<1?(c(),a("pre",Ne," // 没代码~ ")):R("",!0)])]),_:3})}}});const ze=d(Fe,[["__scopeId","data-v-4225ec92"]]),Ue={};function qe(e,t){const o=B("ClientOnly");return c(),C(o,null,{default:P(()=>[v(e.$slots,"default")]),_:3})}const Je=d(Ue,[["render",qe]]),Qe={},Xe={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},Ye=l("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"},null,-1),et=[Ye];function tt(e,t){return c(),a("svg",Xe,et)}const nt=d(Qe,[["render",tt]]),ot={},st={viewBox:"0 0 200 117",width:"16",height:"10",fill:"gray"},ct=l("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"},null,-1),at=[ct];function it(e,t){return c(),a("svg",st,at)}const lt=d(ot,[["render",it]]),rt={class:"component-card"},ut={class:"component-box"},dt=h({__name:"index",props:{componentPath:{default:""}},setup(e,{expose:t}){const o=e,n=Z(null);n.value=O(()=>A(()=>import(`../../preview/${o.componentPath}`),[]));const i=b(!1),s=b(null),r=_=>{if(i.value=_,!s.value)return;if(!_){const{height:x}=s.value.getBoundingClientRect();s.value.style.height=`${x}px`,s.value.offsetHeight,s.value.style.height=0,s.value.style.margin=0;return}s.value.style.height="auto";const{height:f}=s.value.getBoundingClientRect();s.value.style.height=0,s.value.offsetHeight,s.value.style.height=`${f}px`,s.value.style.margin="-16px 0"};return t({autoHeight:()=>{s.value.style.height="auto"}}),(_,f)=>(c(),a("div",rt,[l("div",ut,[j(E(n))]),l("div",{class:p([{"code-show":i.value},"util-box"])},[i.value?(c(),C(nt,{key:0,onClick:f[0]||(f[0]=x=>r(!1))})):(c(),C(lt,{key:1,onClick:f[1]||(f[1]=x=>r(!0))}))],2),l("div",{class:p([{"code-show":i.value},"code-box"]),ref_key:"codeBox",ref:s},[v(_.$slots,"code",{},void 0,!0)],2)]))}});const _t=d(dt,[["__scopeId","data-v-f9f6aa69"]]),pt={...oe,enhanceApp({app:e}){e.component("ComponentCard",Ve),e.component("CodeGroup",ze),e.component("CodeBlock",Je),e.component("ComponentPreview",_t),e.use(we)}};function S(e){if(e.extends){const t=S(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const y=S(pt),ht=h({name:"VitePressApp",setup(){const{site:e}=J();return Q(()=>{X(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Y(),ee(),te(),y.setup&&y.setup(),()=>ne(y.Layout)}});async function ft(){const e=mt(),t=vt();t.provide(W,e);const o=G(e.route);return t.provide(D,o),t.component("Content",M),t.component("ClientOnly",N),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),y.enhanceApp&&await y.enhanceApp({app:t,router:e,siteData:F}),{app:t,router:e,data:o}}function vt(){return z(ht)}function mt(){let e=k,t;return U(o=>{let n=q(o);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),k&&(e=!1),A(()=>import(n),[])):null},y.NotFound)}k&&ft().then(({app:e,router:t,data:o})=>{t.go().then(()=>{V(t.route,o.site),e.mount("#app")})});export{ft as createApp};
