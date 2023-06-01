<template>
  <div class="btn" v-if="name">
    <button class="btn__content" :data="name"></button>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.btn {
  &__content {
    @extend %button;
  }
}
</style>