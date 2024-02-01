import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategoryAPI } from '@/apis/testAPI'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
getCategoryAPI().then(res=>{
    console.log(res);
})
