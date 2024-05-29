import { reactive } from 'vue'

export const userStore = {
    state: reactive({ user: {} }),
    login() {
        const user = { name: 'shawn' }
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user))
        }
        this.state.user = user
    },
    logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user')
        }
        this.state.user = {}
    },
    getUser() {
        let user: any = {}
        if (typeof window !== 'undefined') {
            const theUser = localStorage.getItem('user')
            if (theUser) user = JSON.parse(theUser)
        }
        return user
    }
}