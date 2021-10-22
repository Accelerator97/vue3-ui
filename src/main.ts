import './index.scss'
import './lib/gulu.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import 'github-markdown-css'
import Markdown from './components/MarkDown.vue'
import './assets/svg.js'




const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown',Markdown)
