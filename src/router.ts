import Markdown from './components/MarkDown.vue';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import CarouselDemo from './components/Carousel/CarouselDemo.vue'
import SelectorDemo from './components/Selector/SelectorDemo.vue'
import MagnifierDemo from './components/Magnifier/MagnifierDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
 
import { h } from 'vue'
const md = (string: string) => {
    return h(Markdown, {content:string,key:string })
}
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'intro', component: md(intro) },
                { path: 'install', component: md(install) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'carousel', component: CarouselDemo },
                { path: 'selector', component: SelectorDemo },
                { path: 'magnifier', component: MagnifierDemo },
            ]
        }
    ]
})