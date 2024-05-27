import { type App } from "vue";
import './src/assets/style/common.scss'
//组件
import KnButton from "./src/components/kn-button/index.vue";
import KnHello from './src/components/kn-hello/index.vue';
import KnPictureGroup from './src/components/kn-picture-group/index.vue'
import KnPictureGroupPro from './src/components/kn-picture-group-pro/index.vue'
import KnTable from './src/components/kn-table/index.vue'
import KnLoading from './src/components/kn-loading/index.vue'
import KnTree from './src/components/kn-tree/index.vue'
import KnFormatJson from './src/components/kn-format-json/index.vue'
//hooks
import useHello from "./src/hooks/useHello/index";
import useVModel from "./src/hooks/useVModel";
import useComputed from "./src/hooks/useComputed";
//utils
import hello from "./src/utils/hello";
import listToTree from "./src/utils/listToTree";

export { KnHello, KnButton, KnPictureGroup, KnPictureGroupPro, KnTable, KnLoading };

export { useHello, useVModel, useComputed }

export { hello, listToTree }

export default {
  install(app: App) {
    app.component("KnButton", KnButton);
    app.component("KnHello", KnHello);
    app.component("KnPictureGroup", KnPictureGroup);
    app.component("KnPictureGroupPro", KnPictureGroupPro);
    app.component("KnTable", KnTable);
    app.component('KnLoading', KnLoading);
    app.component("KnTree", KnTree);
    app.component("KnFormatJson", KnFormatJson);
  },
};
