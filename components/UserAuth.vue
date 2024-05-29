<script setup lang="ts">

const props = defineProps({
  user: {
    type: Object,
    default: {}
  }
})
</script>

<template>
  <div v-if="props?.user">
    <h1>Hello {{ props?.user?.name }}</h1>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>