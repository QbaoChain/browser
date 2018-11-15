import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import block from '@/pages/block.vue'
import addressInfo from '@/pages/addressInfo.vue'
import exchange from '@/pages/exchange.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/block',
            name: 'block',
            component: block
        },
        {
            path: '/exchange',
            name: 'exchange',
            component: exchange
        },
        {
            path: '/addressInfo',
            name: 'addressInfo',
            component: addressInfo
        }
    ]
})
