import DefaultTheme from 'vitepress/theme';
import './custom.css';
import ComponentCard from '../../components/component-card/index.vue'
import KnotVue from 'knot-vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentCard', ComponentCard)
    app.use(KnotVue)
  }
};