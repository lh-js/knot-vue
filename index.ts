import { type App } from "vue";
import './src/style/common.scss'
//组件
import KnButton from "./src/components/kn-button/index.vue";
import KnHello from './src/components/kn-hello/index.vue';
import KnPictureGroup from './src/components/kn-picture-group/index.vue'
import KnPictureGroupPro from './src/components/kn-picture-group-pro/index.vue'
import KnTable from './src/components/kn-table/index.vue'
//hooks
import useHello from "./src/hooks/useHello/index";
import useVModel from "./src/hooks/useVModel";
//utils
import hello from "./src/utils/hello";

export { KnHello, KnButton };

export { useHello, useVModel }

export { hello }

export default {
  install(app: App) {
    app.component("KnButton", KnButton);
    app.component("KnHello", KnHello);
    app.component("KnPictureGroup",KnPictureGroup);
    app.component("KnPictureGroupPro",KnPictureGroupPro);
    app.component("KnTable",KnTable);
  },
};
