// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    routeRules: {
        '/': { prerender: true },
        '/clients/profile': { appMiddleware: ['clients-only'] },
    }
})
