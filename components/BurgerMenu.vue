<template>
  <div class="burger" :class="{'burger--open': menuIsOpen}">
    <div class="burger__curtain"></div>
    <div class="burger__content">
      <div class="burger__icon" @click="toggleMenu">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </div>
      <div class="burger__menu">
        <nav>
          <ul class="burger__list">
            <li class="burger__list-item" v-for="link in menuLinks" :key="link.name" 
              :class="{'burger__list-item--active': section === link.code}" 
              @click="goToBlock(link.code)">
              {{ defineObjFields(link, ['name', 'en-name', 'fr-name']) }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Menu, SectionCode } from '~/types/menu'

const menuIsOpen = ref<boolean>(false)

const goToBlock = (code: string) => {
  menuIsOpen.value = false
  section.value = code as SectionCode
  const el = document.querySelector(`[id="${code}"]`)
  el!.scrollIntoView({behavior: 'smooth', inline: 'start', block: 'start'})
}

const emit = defineEmits(['menuIsOpen'])

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value
  emit('menuIsOpen', menuIsOpen.value)
}

const menuLinks: Menu[] = [
  // {
  //   "name": "Обо мне",
  //   "en-name": "About me",
  //   "fr-name": "Moi",
  //   "code": "about"
  // },
  {
    "name": "Проекты",
    "en-name": "Projects",
    "fr-name": "Projets",
    "code": "projects"
  },
  {
    "name": "Технологии",
    "en-name": "Stack",
    "fr-name": "Stack",
    "code": "technology"
  },
  {
    "name": "Контакты",
    "en-name": "Contacts",
    "fr-name": "Contacts",
    "code": "contacts"
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
    background-color: wheat;
    @extend %hide;
    transform: translateX(-100%);
    z-index: 2;

    @include breakpoints(medium) {
      background-color: transparent;
    }
  }

  &__content {
    @include flex;
    position: relative;
    z-index: -1;
    position: fixed;
    left: 0;
    width: 0;

    @include breakpoints(medium) {
      position: static;
      width: 100%;
    }
  }

  &__icon {
    cursor: pointer;
    width: 72px;
    height: 26px;
    position: fixed;
    left: 16px;
    top: 32px;
    z-index: 2;
    @include transition;

    @include breakpoints(medium) {
      position: static;
    }

    &:hover {
      .burger__line {
        background: $orange;
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
      left: 32px;

      @include breakpoints(large) {
        left: 16px;
      }

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
        transform: translate(0, 11px) rotate(45deg);

        @include breakpoints(large) {
          transform: translate(50%, 11px) rotate(45deg);
        }

      }

      &:last-child {
        transform: rotate(135deg);

        @include breakpoints(large) {
          transform: translate(50%, 0) rotate(135deg);
        }
      }
    }

    .burger__curtain {
      transition: all .5s ease-in-out;
    }

    .burger__content {
      z-index: 3;
      width: 100%;
    }

    .burger__menu, .burger__curtain {
      @extend %show;
      transform: translateX(0);
      z-index: 2;
    }
  }

  &__menu {
   @extend %hide;
  }

  &__list {
    @include flex;
    gap: 55px;
    padding: 80px 40px;

    @include breakpoints(medium) {
      padding: 0 30px;
      gap: 40px;
    }

    @include breakpoints(large) {
      padding: 0 40px;
      gap: 55px;
    }

    &-item {
      text-transform: uppercase;
      @include font(24px, 130%, 400, $background);
      @include link($background);
    }
  }
}

</style>