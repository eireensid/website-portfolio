<template>
  <header class="header" :class="{'header--scroll': !isPageTop && !menuIsOpen}">
    <BurgerMenu @menuIsOpen="toggleBottomLine" />
    <LanguageSwitcher />
  </header>
</template>

<script lang="ts" setup>
const isPageTop = ref(true)
const menuIsOpen = ref<boolean>(false)

const calcPageTop = () => {
  !window.pageYOffset ? isPageTop.value = true : isPageTop.value = false
}

const toggleBottomLine = (isOpen: any) => {
  isOpen ? menuIsOpen.value = true : menuIsOpen.value = false
}

onMounted(() => {
  calcPageTop()
  
  window.addEventListener("scroll", calcPageTop)
})

onUnmounted(() => {
  window.removeEventListener("scroll", calcPageTop)
})

</script>

<style lang="scss" scoped>
.header {
  padding: 16px;
  background: $background;
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  @include flex(flex-end, space-between);
  @include transition;

  @include breakpoints(medium) {
    padding: 24px 32px;
  }

  @include breakpoints(large) {
    @include flex(center, space-between);
  }

  @include breakpoints(xlarge) {
    padding: 24px 8.3%;
  }
  
  &--scroll {
    border-bottom: 1px solid $black;
  }
}
</style>