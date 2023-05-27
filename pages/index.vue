<template>
  <div v-if="data">
    <AboutSection :about="data.about" />
    <ProjectsSection :projects="data.projects" />
    <TechnologySection :technologies="data.technologies" />
    <ContactSection :contacts="data.contacts" />
  </div>
</template>

<script lang="ts" setup>
  import AboutSection from "../components/pages/index/AboutSection.vue";
  import ProjectsSection from "../components/pages/index/ProjectsSection.vue";
  import TechnologySection from "../components/pages/index/TechnologySection.vue";
  import ContactSection from "../components/pages/index/ContactSection.vue";

  const { data } = await useFetch('/api/db')

</script>

<style scoped>

</style>