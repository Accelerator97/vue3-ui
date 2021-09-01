import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DiaLogDemo from './components/DiaLogDemo.vue'
import DocDemo from './components/DocDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: 'switch', component: SwitchDemo },
                { path: 'Button', component: ButtonDemo },
                { path: 'Tabs', component: TabsDemo },
                { path: 'Dialog', component: DiaLogDemo }
            ]
        }
    ]
})