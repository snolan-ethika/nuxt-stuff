<script setup lang="ts">
import UserAuth from '~/components/UserAuth.vue'

const user: any = ref(undefined)

const getUser = async () => {
  if (typeof window !== 'undefined') {
    if (!user.value) {
      const localUser = localStorage.getItem('user')
      if (localUser) {
        user.value = JSON.parse(localUser)
      } else {
        return navigateTo('/logout')
      }
    }
  }
}

const logout = () => {
  return navigateTo('/logout')
}

await getUser()
</script>

<template>
  <UserAuth :user="user">
    <h1>Profile</h1>
    <a href="#" @click="logout">Logout</a>
  </UserAuth>
</template>

<style scoped>

</style>