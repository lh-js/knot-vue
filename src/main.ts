import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import knotVue from 'knot-vue'
import 'knot-vue/umd/es/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(knotVue)

app.mount('#app')
