import './assets/main.css'

import { createPinia } from 'pinia'

import router from './router'
import { createMyApp } from './shared'

const app = createMyApp()

app.use(createPinia())
app.use(router)

app.mount('#app')
