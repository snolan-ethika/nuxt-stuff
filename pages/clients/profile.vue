<script setup lang="ts">
import UserAuth from '~/components/UserAuth.vue'

const user: any = ref(undefined)

const getUser = async () => {
  if (typeof window !== 'undefined') {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      user.value = JSON.parse(localUser)
    } else {
      user.value = undefined
    }
  } else {
    user.value = undefined
  }
  console.log('user', user.value)
}

const logout = () => {
  if(typeof window !== 'undefined') {
    localStorage.removeItem('user')
    user.value = undefined
    return navigateTo('/login')
  } else {
    user.value = undefined
  }
}

await getUser()
</script>

<template>
  <UserAuth :user="user">
    <h1>Profile</h1>
    <a style="cursor: pointer;" @click="logout">Logout</a>
  </UserAuth>
</template>

<style scoped>

</style>