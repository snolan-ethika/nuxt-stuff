export default defineNuxtRouteMiddleware(() => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        return navigateTo('/login')
    }
})
