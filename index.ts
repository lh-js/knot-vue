import { type App } from "vue";
import KnButton from "./src/components/kn-button/index.vue";
import KnHello from './src/components/kn-hello/index.vue';

export { KnHello,KnButton };

export default {
  install(app: App) {
    app.component("KnButton", KnButton);
    app.component("KnHello", KnHello);
  },
};

