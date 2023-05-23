<template>
  <header class="header">
    <BurgerMenu />
    <Button name="Записаться" />
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 8.3%;
  background: $background;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  @include flex(center, space-between);
}
</style>