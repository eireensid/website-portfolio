<template>
  <div>
    <AboutSection :about="data.about" />
    <ProjectsSection :projects="data.projects" />
    <TechnologySection :technologies="data.technologies" />
    <ContactSection />
  </div>
</template>

<script setup>
  import AboutSection from "../components/pages/index/AboutSection";
  import ProjectsSection from "../components/pages/index/ProjectsSection";
  import TechnologySection from "../components/pages/index/TechnologySection";
  import ContactSection from "../components/pages/index/ContactSection";

  const { data } = await useFetch('/api/db')

</script>

<style scoped>

</style>