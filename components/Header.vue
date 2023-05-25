<template>
  <header class="header">
    <BurgerMenu />
    <Button name="Связаться" @click="goToLink" />
  </header>
</template>

<script lang="ts" setup>
const goToLink = () => {
  window.open('https://t.me/eireen_sid', '_blank')
}
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 8.3%;
  background: $background;
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  @include flex(center, space-between);
}
</style>