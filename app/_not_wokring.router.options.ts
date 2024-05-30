import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r)
        },
        {
            name: 'artists',
            path: '/artists',
            component: () => import('~/pages/artists/index.vue').then(r => r.default || r)
        },
        {
            name: 'artists/:artist',
            path: '/artists/:artist',
            component: () => import('~/pages/artists/[artist]/index.vue').then(r => r.default || r)
        },
        {
            name: 'talents',
            path: '/talents',
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
