<template>
  <div class="burger" :class="{'burger--open': menuIsOpen}">
    <div class="burger__curtain"></div>
    <div class="burger__content">
      <div class="burger__icon" @click="menuIsOpen = !menuIsOpen">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </div>
      <div class="burger__menu">
        <nav>
          <ul class="burger__list">
            <li class="burger__list-item" v-for="link in menuLinks" :key="link.name">
              <NuxtLink :to="link.href"
                @click="menuIsOpen = false"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const menuIsOpen = ref<boolean>(false)

const menuLinks = [
  {
    "name": "Обо мне",
    "href": "#about"
  },
  {
    "name": "Проекты",
    "href": "#projects"
  },
  {
    "name": "Технологии",
    "href": "#technology"
  },
  {
    "name": "Контакты",
    "href": "#contacts"
  }
]

</script>

<style lang="scss">

.burger {

  &__curtain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/img/dropdown-menu-curtain.svg");
    background-repeat: no-repeat;
    background-size: cover;
    @extend %hide;
    transform: translateX(-100%);
    z-index: 2;
  }

  &__content {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 3;
  }

  &__icon {
    cursor: pointer;
    width: 72px;
    height: 26px;

    &:hover {
      .burger__line {
        background: $hover;
      }
    }
  }

  &__line {
    display: block;
    width: 100%;
    height: 2px;
    background: $black;
    @include transition;

    &:first-child {
      margin-bottom: 10px;
    }
  }

  &--open {
    .burger__icon {
      &:hover {
        .burger__line {
          background: $black;
        }
      }
    }

    .burger__line {
      background: #fff;
      width: 34px;

      &:first-child {
        transform: translate(50%, 11px) rotate(45deg);

      }

      &:last-child {
        transform: translate(50%, 0) rotate(135deg);
      }
    }

    .burger__curtain {
      transition: all .5s ease-in-out;
    }

    .burger__menu, .burger__curtain {
      @extend %show;
      transform: translateX(0);
    }
  }

  &__menu {
   @extend %hide;
  }

  &__list {
    @include flex;
    gap: 55px;
    padding: 0 40px;

    &-item {
      text-transform: uppercase;
      @include font(24px, 130%, 400, $background);
      @include link($black);
    }
  }
}

</style>