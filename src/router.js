import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/layout/LayoutFront/LayoutFront'),
            children: [
                {
                    path: '',
                    name: 'Main',
                    components: {
                        default: () => import('@/views/ViewMain'),
                        sidebar: () => import('@/views/ViewSidebar'),
                    },
                    meta: {
                        layout: 'LayoutFrontContentMain',
                    }
                },
                {
                    path: '/chat',
                    name: 'Chat',
                    component: () => import('@/views/ViewChat'),
                    meta: {
                        layout: 'LayoutFrontContentDefault',
                    },
                },
                {
                    path: '*',
                    name: 'notFound',
                    component: () => import('@/views/View404'),
                    meta: {
                        requiresAuth: false,
                    }
                },
            ]
        },
    ]
})

export default routes;