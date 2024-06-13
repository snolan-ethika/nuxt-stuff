<script setup>
const { error, data } = useFetch( 'https://jsonplaceholder.typicode.com/todos/1' )
console.log( 'error', error )
console.log( 'data', data )
</script>

<template>
  <h1>error...</h1>
  <p>Error: {{ error?.message }}</p>
  <p>Data: {{ data?.title }}</p>
</template>

<style scoped>

</style>