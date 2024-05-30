<script setup lang="ts">
import UserAuth from '~/components/UserAuth.vue'
import { userStore } from '~/stores/user'

const theUser = userStore.getUser()
const user: any = ref(theUser)

const logout = () => {
  userStore.logout()
  return navigateTo('/clients/login')
}

watch(userStore.state, (value) => {
  const theUser: any = value?.user
  user.value = theUser ? theUser : {}
})
</script>

<template>
  <UserAuth :user="user">
    <h1>Profile</h1>
    <a style="cursor: pointer;" @click="logout">Logout</a>
  </UserAuth>
</template>

<style scoped>

</style>