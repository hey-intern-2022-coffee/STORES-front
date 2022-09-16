import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import piniaPersist from 'pinia-plugin-persist'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'

const pinia = createPinia()
const installPersistedStatePlugin = createPersistedStatePlugin()
pinia.use(context => installPersistedStatePlugin(context))
// pinia.use(piniaPersist)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
