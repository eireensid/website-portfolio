<template>
  <div class="burger" :class="{'burger--open': menuIsOpen}" >
    <div class="burger__icon" @click="menuIsOpen = !menuIsOpen">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </div>
    <div class="burger__dropdown">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const menuIsOpen = ref<boolean>(false)
</script>

<style lang="scss">
@import '@/assets/style/main.scss';

.burger {

  &__icon {
    cursor: pointer;
  }

  &__line {
    display: block;
    width: 72px;
    height: 2px;
    background: #212121;
    @include transition;

    &:first-child {
      margin-bottom: 10px;
    }
  }

  &--open {
    .burger__line {
      background: #fff;

      &:first-child {
        transform: rotate(45deg);
        width: 33px;
      }
    }
  }
}

</style>