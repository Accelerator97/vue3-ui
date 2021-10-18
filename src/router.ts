import Markdown from './components/MarkDown.vue';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import CarouselDemo from './components/Carousel/CarouselDemo.vue'
import SelectorDemo from './components/Selector/SelectorDemo.vue'

import { createWebHashHistory, createRouter } from 'vue-router'

import { h } from 'vue'
const md = fileName => {
    return h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })
}
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'intro', component: md("intro") },
                { path: 'install', component: md("install") },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'carousel', component: CarouselDemo },
                { path: 'selector', component: SelectorDemo },
            ]
        }
    ]
})