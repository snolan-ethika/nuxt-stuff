<script setup lang="ts">
import { userStore } from '~/stores/user'

const setUser = async () => {
  if (typeof window !== 'undefined') {
    userStore.login()
    return navigateTo('/clients/profile')
  }
}
</script>

<template>
  <h1>Login</h1>
  <a style="cursor: pointer;" @click="setUser">set user</a>
</template>

<style scoped>

</style>