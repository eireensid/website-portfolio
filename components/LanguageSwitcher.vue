<template>
<div class="lang-switcher">
  <div class="lang-switcher__active">
    {{ $i18n.locale }}
  </div>
  <div class="lang-switcher__dropdown">
    <NuxtLink :to="switchLocalePath('ru')">RU</NuxtLink>    
    <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink>
  </div>
</div>
</template>

<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath()

const activeLang = ref('ru')

</script>

<style lang="scss" scoped>
</style>