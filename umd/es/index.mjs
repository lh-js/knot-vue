import "vue";
import n from "./src/components/kn-button/index.vue.mjs";
import t from "./src/components/kn-hello/index.vue.mjs";
const r = {
  install(o) {
    o.component("KnButton", n), o.component("KnHello", t);
  }
};
export {
  n as KnButton,
  t as KnHello,
  r as default
};
