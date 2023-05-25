<template>
  <footer class="footer">
    <p class="footer__text">Разработано на Nuxt.js, 2023 год</p>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.footer {
  padding: 24px 8.3%;
  background: $white;
  width: 100%;
  @include flex(center, flex-end);

  &__text {
    @include font(18px, 24px, 500, $yellow);
  }
}
</style>