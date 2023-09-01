import DefaultTheme from 'vitepress/theme';
import './custom.css';
import ComponentCard from '../../components/component-card/index.vue'
import CodeGroup from '../../components/code-group/index.vue'
import CodeBlock from '../../components/code-block/index.vue'
import ComponentPreview from '../../components/component-preview/index.vue'
import KnotVue from 'knot-vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentCard', ComponentCard)
    app.component('CodeGroup', CodeGroup)
    app.component('CodeBlock', CodeBlock)
    app.component('ComponentPreview',ComponentPreview)
    app.use(KnotVue)
  }
};