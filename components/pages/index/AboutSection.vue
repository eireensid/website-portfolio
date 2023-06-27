<template>
  <section class="section section--about" id="about">
    <h2 class="title" :class="{'title--width': locale === 'fr'}">{{ t('aboutTitle') }}</h2>
    <p class="description">{{ t('aboutDescription') }}</p>
    <div class="table">
      <div class="table__left">
        <ul class="table__list">
          <li class="table__list-item" v-for="(item, i) in about" :key="item.name" :style="`order: ${i + 1}`"
              :class="{'table__list-item--active': item === curTab}"
              @mouseover="changeTab(item, (i + 1) as AboutTabOrder)"
          >
            {{ defineObjFields(item, ['name', 'en-name', 'fr-name']) }}
          </li>
          <li :style="`order: ${curTabOrder}`" class="table__tab-info--mobile">
            <TabInfo :curTab="curTab"/>
          </li>
        </ul>
      </div>
      <div class="table__tab-info--desktop">
        <TabInfo :curTab="curTab" />
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
  {
    "ru": {
      "aboutTitle": "ХОЧУ СОЗДАВАТЬ КРАСОТУ, А НЕ ТОЛЬКО ЕЮ ВОСХИЩАТЬСЯ.",
      "aboutDescription": "Давайте познакомимся поближе" 
    },
    "en": {
      "aboutTitle": "I want to create and not just admire.",
      "aboutDescription": "A little bit info about me" 
    },
    "fr": {
      "aboutTitle": "Je veux créer, pas juste admirer.",
      "aboutDescription": "Un peu d'information sur moi" 
    }
  }
  </i18n>

<script lang="ts" setup>
import { AboutTab, AboutTabOrder } from '~/types/about'

const props = defineProps<{
  about: AboutTab[]
}>()

props.about.sort((a, b) => Number(a.order) - Number(b.order))

const curTab = ref<AboutTab>(props.about.find((tab) => Number(tab.order) === 1)!)

const curTabOrder = ref<AboutTabOrder>(1)

const { width } = useWindowSizes()

const changeTab = (tab: AboutTab, order: AboutTabOrder) => {
  curTab.value = tab
  curTabOrder.value = order

  if (width.value < 1200 && order !== 1) {
    const el = document.querySelector('.table__tab-info--mobile')
    el!.scrollIntoView({behavior: 'smooth', block: 'center'})
  }
}

const { t, locale } = useI18n({
    useScope: 'local'
})

</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  @include flex;
  border-bottom: none;

  @include breakpoints(large) {
    border: 1px solid $black;
  }

  &__left {
    width: 100%;
    flex-shrink: 0;

    @include breakpoints(large) {
      flex-basis: 33%;
      border-right: 1px solid $black;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__list-item {
    padding: 30px 36px;
    @include font(22px, 22px, 600);
    @include link;
    border-bottom: 1px solid $black;
    justify-content: center;
    display: flex;

    @include breakpoints(large) {
      justify-content: flex-start;
      @include font(18px, 18px, 600);
      
      &:nth-last-child(2) {
        border-bottom: none;
      }
    }
  }

  &__tab-info {

    &--mobile {

      @include breakpoints(large) {
        display: none;
      }
    }

    &--desktop {
      display: none;

      @include breakpoints(large) {
        display: block;
      }
    }
  }
}

.title {
  &--width {
    max-width: 600px;
  }
}

.section {
  &--about {
    display: none;
  }
}

</style>