import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives/lazyPlugin'

import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.mount('#app')
// 自定义指令注册
app.use(lazyPlugin)
app.use(componentPlugin)