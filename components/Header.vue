<template>
  <header class="header" :class="{'header--scroll': isPageTop}">
    <BurgerMenu />
    <Button name="Связаться" @click="goToLink" />
  </header>
</template>

<script lang="ts" setup>
let isPageTop = ref(false)
onMounted(() => {
  !window.pageYOffset ? isPageTop.value = false : isPageTop.value = true
  
  window.addEventListener("scroll", () => {
    !window.pageYOffset ? isPageTop.value = false : isPageTop.value = true
  })
})

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
  @include transition;
  
  &--scroll {
    border-bottom: 1px solid $black;
  }
}
</style>