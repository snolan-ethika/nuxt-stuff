<script setup lang="ts">
import { userStore } from '~/stores/user'
const { header } = useHeaderComp()

const theUser = userStore.getUser()
const user: any = ref(theUser)

const doSomething = () => {
  header().setHeader({
    title: 'test',
    transparent: true
  })
  const something = header().header
  console.log('something', something.value?.title)
}

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
  <a @click="doSomething()">click for header</a>
</template>

<style scoped>

</style>