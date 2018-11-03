import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import addressInfo from '@/pages/addressInfo.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/addressInfo',
            name: 'addressInfo',
            component: addressInfo
        }
    ]
})
