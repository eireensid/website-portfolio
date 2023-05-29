<template>
  <Header />
  <main class="main">
    <slot />
  </main>
  <Footer />
</template>

<script setup>

</script>

<style lang="scss">
.main {
  padding: 110px 16px 0;
  overflow: hidden;

  @include breakpoints(medium) {
    padding: 110px 8.3% 0;
  }
}
</style>