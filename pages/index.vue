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

  const router = useRouter()

  onMounted(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      threshold: 0
    }
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // console.log(entry.target)
                const sectionId = entry.target.id
                router.push({ hash: `#${sectionId}` })
            }
        })
    }, options)
    sections.forEach(section => {
        observer.observe(section)
    })
  })

</script>

<style scoped>

</style>