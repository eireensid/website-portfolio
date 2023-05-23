<template>
  <div>
    <AboutSection />
    <ProjectsSection />
<!--    <div v-for="p in products">-->
<!--      <NuxtLink>{{p.title}}</NuxtLink>-->
<!--    </div>-->
  </div>
</template>

<script setup>
  import AboutSection from "../components/pages/index/AboutSection";
  import ProjectsSection from "../components/pages/index/ProjectsSection";

  const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>

</style>