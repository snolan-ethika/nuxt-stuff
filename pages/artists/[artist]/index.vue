<script setup lang="ts">
const { params } = useRoute()
const artist: any = ref(undefined)
const getArtist = async (): Promise<any> => {
  const { data: theArtist }: any = await useFetch(`/api/artist/${params?.artist}`)
  artist.value = theArtist?.value?.data
}
await getArtist()
</script>

<template>
  <h1>Artist: {{ artist?.name }}</h1>
</template>

<style scoped>

</style>