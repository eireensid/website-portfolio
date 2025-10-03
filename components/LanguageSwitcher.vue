<template>
<div class="lang-switcher">
  <div class="lang-switcher__select" @click="isDropdownOpen = !isDropdownOpen">
    <Button :name="$i18n.locale"></Button>
  </div>
  <div class="lang-switcher__dropdown" v-show="isDropdownOpen">
    <NuxtLink 
      v-for="locale in locales" :key="locale.code"
      :style="locale.code === $i18n.locale ? 'display:none' : ''"
      @click="isDropdownOpen = false" 
      :to="switchLocalePath(locale.code)"
      class="lang-switcher__dropdown-link"
      :data="locale.code"
    >
    </NuxtLink>    
  </div>
</div>
</template>

<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath()

const isDropdownOpen = ref<boolean>(false)

const locales = [
  {
    code: 'ru'
  },
  {
    code: 'en'
  },
  {
    code: 'fr'
  }
]

</script>

<style lang="scss" scoped>
.lang-switcher {
  position: relative;

  &__select {
    :deep(button) {
      text-transform: uppercase;
      width: 86px;
    }
  }

  &__dropdown {
    position: absolute;

    &-link {
      @extend %button;
      text-transform: uppercase;
      width: 86px;
    }
  }
}
</style>