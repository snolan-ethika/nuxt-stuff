import { userStore } from '~/stores/user'

export default defineNuxtRouteMiddleware(() => {
    if (typeof window !== 'undefined') {
        const getUser = userStore.getUser()
        if (!getUser?.name) return navigateTo('/clients/login')
    }
})
