<template>
  <div class="btn" v-if="props.name">
    <button class="btn__content" :data="props.name"></button>
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
    position: relative;
    z-index: 1;
    background: linear-gradient(to right, $hover, $yellow);
    @include font(16px, 16px, 600);

    &::before {
      content: "";
      position: absolute;
      left: 1px;
      right: 1px;
      top: 1px;
      bottom: 1px;
      background-color: $background;
      z-index: -1;
      transition: 200ms;
    }

    &::after {
      content: attr(data);
      font-size: 16px;
      background: linear-gradient(to left, $hover, $yellow);
      -webkit-background-clip: text;
      color: transparent;
      transition: 200ms;
    }

    &:hover::before {
      opacity: 0%;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    &:hover::after {
      color: $white;
    }
  }
}
</style>