import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Buy from '../pages/Buy/Buy.vue'
import Shop from '../pages/Shop/Shop.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'

export default[
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/classify',
        component: Classify,
    },
    {
        path: '/buy',
        component: Buy,
    },
    {
        path: '/shop',
        component: Shop,
    },
    {
        path: '/personal',
        component: Personal,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/',
        redirect: '/classify',
    },
]