import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/home.vue').then(r => r.default || r)
        },
        {
            name: 'artist',
            path: '/artist',
            component: () => import('~/pages/artist.vue').then(r => r.default || r)
        },
        {
            name: 'talent',
            path: '/talent',
            component: () => import('~/pages/talent.vue').then(r => r.default || r)
        },
        {
            name: 'clients-login',
            path: '/login',
            component: () => import('~/pages/clients/login.vue').then(r => r.default || r)
        },
        {
            name: 'clients-profile',
            path: '/clients/profile',
            component: () => import('~/pages/clients/profile.vue').then(r => r.default || r)
        }
    ]
}
