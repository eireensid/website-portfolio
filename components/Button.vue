<template>
  <div class="btn" v-if="props.name">
    <button class="btn__content">
      {{ props.name }}
    </button>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.btn {
  &__content {
    padding: 16px 32px;
    border: 1px solid $black;
    @include font(16px, 16px, 600, $black);
    @include link;

    &:hover {
      border: 1px solid $hover;
    }
  }
}
</style>