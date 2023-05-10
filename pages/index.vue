<template>
  <div>
    <h2>Hello</h2>
    <div v-for="p in products">
      <NuxtLink>{{p.title}}</NuxtLink>
    </div>
  </div>
</template>

<script setup>

  const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>

</style>