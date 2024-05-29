import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r)
        },
        {
            name: 'artist',
            path: '/artist',
            component: () => import('~/pages/artists/index.vue').then(r => r.default || r)
        },
        {
            name: 'talent',
            path: '/talent',
            component: () => import('~/pages/talents/index.vue').then(r => r.default || r)
        },
        {
            name: 'clients-login',
            path: '/clients/login',
            component: () => import('~/pages/clients/login.vue').then(r => r.default || r)
        },
        {
            name: 'clients-profile',
            path: '/clients/profile',
            component: () => import('~/pages/clients/profile.vue').then(r => r.default || r)
        }
    ]
}
