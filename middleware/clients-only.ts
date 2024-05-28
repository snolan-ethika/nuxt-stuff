export default defineNuxtRouteMiddleware(() => {
    if (typeof window !== 'undefined') {
        const getUser = localStorage.getItem('user')
        if (!getUser) {
            return navigateTo('/login')
        }
    }
})
