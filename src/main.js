import { createApp } from 'vue'
import App from './App.vue'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
