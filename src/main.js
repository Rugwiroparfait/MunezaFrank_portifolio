import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import App from './App.vue'
import router from './router'

// Create Vue app instance
const app = createApp(App)

// Use Vue Router
app.use(router)

// Mount the app
app.mount('#app')
