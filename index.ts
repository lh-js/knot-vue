import { type App } from "vue";
//组件
import KnButton from "./src/components/kn-button/index.vue";
import KnHello from './src/components/kn-hello/index.vue';
//hooks
import useHello from "./src/hooks/use-hello/index";

export { KnHello, KnButton };

export { useHello }

export default {
  install(app: App) {
    app.component("KnButton", KnButton);
    app.component("KnHello", KnHello);
  },
};
