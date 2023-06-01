<template>
  <footer class="footer">
    <p class="footer__text">{{ $t('footer') }}</p>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.footer {
  padding: 24px;
  background: $white;
  width: 100%;
  @include flex(center, flex-end);

  @include breakpoints(medium) {
    padding: 24px 40px;
  }

  @include breakpoints(xlarge) {
    padding: 24px 8.3%;
  }

  &__text {
    @include font(18px, 24px, 500);
    @extend %textGradient;
  }
}
</style>