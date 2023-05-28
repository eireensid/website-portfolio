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

  const activeSectionId: Ref<null | string> = ref(null);
  const observer: Ref<IntersectionObserver | null | undefined> = ref(null);
  const router = useRouter()

  onMounted(() => {
    const sections = document.querySelectorAll('.section')
    const options = {
      threshold: 0.5
    }
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // console.log(entry.target)
                const id = entry.target.id
                activeSectionId.value = id
                router.push({ params: {id: activeSectionId.value} })
            }
        })
    }, options)
    sections.forEach(section => {
        observer.value?.observe(section)
    })
    
  })

  onUnmounted(() => {
    observer.value?.disconnect();
  });

</script>

<style scoped>

</style>