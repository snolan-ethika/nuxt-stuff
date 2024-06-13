<script setup lang="ts">
import { userStore } from '~/stores/user'
const { header } = useHeaderComp()
header().setHeader({
  title: 'test',
  transparent: true
})
const something = header().header
console.log('something', something)

const theUser = userStore.getUser()
const user: any = ref(theUser)

watch(userStore.state, (value) => {
  user.value = value?.user
})
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  |
  <RouterLink to="/artist">Artist</RouterLink>
  |
  <RouterLink to="/talent">Talent</RouterLink>
  |
  <RouterLink v-if="user?.name" to="/clients/profile">Profile</RouterLink>
  <RouterLink v-if="!user?.name" to="/clients/login">Login</RouterLink>
  |
</template>

<style scoped>

</style>