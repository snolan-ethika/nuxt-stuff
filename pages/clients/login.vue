<script setup lang="ts">
const setUser = () => {
  localStorage.setItem('user', JSON.stringify({
    name: 'shawn'
  }))
  return navigateTo('/clients/profile')
}
</script>

<template>
  <h1>Login</h1>
  <a @click="setUser">set user</a>
</template>

<style scoped>

</style>