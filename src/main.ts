import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import 'virtual:uno.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.scss'
import 'uno.css'

const app = createApp(App)
setupStore(app)

app.use(router)
app.use(Vant)
app.mount('#app')