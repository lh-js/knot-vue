import { defineComponent as t, openBlock as n, createElementBlock as o, toDisplayString as a } from "vue";
const l = { class: "kn-button" }, c = /* @__PURE__ */ t({
  __name: "index",
  props: {
    label: { default: "默认按钮" }
  },
  setup(r) {
    return (e, s) => (n(), o("button", l, a(e.label), 1));
  }
});
export {
  c as default
};
