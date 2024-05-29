<script setup lang="ts">
const artist: any = ref(undefined)
const getArtist = async (): Promise<any> => {
  return new Promise((resolve) => {
    artist.value = {
      id: 9123456780,
      name: 'Talent Name'
    }
    resolve(artist.value)
  })
}

onMounted(async () => {
  await getArtist()
})

/*
 * Title NOT working with reactive values via nuxt
 * This will work in your browser,
 * But if you view the page source, you'll see it's not working
 */
useSeoMeta({
  title: () => `Artist ${artist?.value?.name}`
})
</script>

<template>
  <h1>Talents Page</h1>
</template>

<style scoped>

</style>