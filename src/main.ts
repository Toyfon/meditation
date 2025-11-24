import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles.css'
import { routes } from './routes/setup-routes'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(routes)
app.mount('#app')
