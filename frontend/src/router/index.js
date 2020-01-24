import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/desktop/' },
    { path: '/navigator/', redirect: '/navigator/1' },
    {
        path: '/navigator/:id',
        name: 'navigator',
        component: () =>
            import ( /* webpackChunkName: "explorer" */ '../views/navigator.vue')

    }, {
        path: '/desktop/',
        name: 'Desktop',
        component: () =>
            import ( /* webpackChunkName: "Desktop" */ '../views/Desktop.vue')

    },
    {
        path: '/login/',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/components/login/login.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router