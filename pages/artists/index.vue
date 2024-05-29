<script setup lang="ts">
const artistList: any = ref(undefined)
const getArtists = async (): Promise<any> => {
  const { data: artists }: any = await useFetch('/api/artists')
  artistList.value = artists?.value?.data
}
await getArtists()
useSeoMeta({
  title: 'Artists ethika music'
})
</script>

<template>
  <h1>Artists Page</h1>
  <ul>
    <li v-for="(artist, key) in artistList">
      <RouterLink :to="{path: `/artists/${artist?.identifier}`}">{{ artist?.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>