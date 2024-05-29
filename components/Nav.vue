<script setup lang="ts">
import { userStore } from '~/stores/user'

const theUser = userStore.getUser()
const user: any = ref(theUser)

watch(userStore.state, (value) => {
  user.value = value?.user
})
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  |
  <RouterLink to="/artists">Artists</RouterLink>
  |
  <RouterLink to="/talents">Talents</RouterLink>
  |
  <RouterLink v-if="user?.name" to="/clients/profile">Profile</RouterLink>
  <RouterLink v-if="!user?.name" to="/clients/login">Login</RouterLink>
  |
</template>

<style scoped>

</style>