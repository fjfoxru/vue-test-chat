import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/layout/Layout/Layout'),
            children: [
                {
                    path: '',
                    name: 'Main',
                    component: () => import('@/views/ViewMain'),
                    meta: {
                        layout: 'LayoutContentSingle',
                    }
                },
                {
                    path: '/chat',
                    name: 'Chat',
                    components: {
                        default: () => import('@/views/ViewChat'),
                        sidebar: () => import('@/views/ViewSidebar'),
                    },
                    meta: {
                        layout: 'LayoutContentWithSidebar',
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