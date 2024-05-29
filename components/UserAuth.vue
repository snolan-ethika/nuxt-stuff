<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object,
    default: {}
  }
})
const tempUser: any = ref(props.user)
</script>

<template>
  <div v-if="tempUser">
    <h1>Hello {{ tempUser?.name }}</h1>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>