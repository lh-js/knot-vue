import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import knotVue from '../index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(knotVue)

app.mount('#app')
