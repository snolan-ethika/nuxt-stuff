<script setup lang="ts">
const artist: any = ref(undefined)
const getArtist = (): Promise<any> => {
  return new Promise((resolve) => {
    artist.value = {
      id: 1234567890,
      name: 'Artist Name'
    }
    resolve(artist.value)
  })
}

await getArtist()

/*
 * Title working with reactive values via nuxt
 * This will work in your browser,
 * As well as in the page source
 */
useSeoMeta({
  title: () => `Artist ${artist?.value?.name}`
})
</script>

<template>
  <h1>Artist Page</h1>
</template>

<style scoped>

</style>