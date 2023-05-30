<template>
  <section class="section" id="about">
    <h2 class="title">Хочу создавать красоту, а не только ею восхищаться.</h2>
    <p class="description">Давайте познакомимся поближе</p>
    <div class="table">
      <div class="table__left">
        <ul class="table__list">
          <li class="table__list-item" v-for="(item, i) in about" :key="item.name" :style="`order: ${i + 1}`"
              :class="{'table__list-item--active': item === curTab}"
              @mouseover="changeTab(item, (i + 1) as AboutTabOrder)"
          >
            {{ item.name }}
          </li>
          <li v-if="width < 1200" :style="`order: ${curTabOrder}`">
            <TabInfo :curTab="curTab" />
          </li>
        </ul>
      </div>
      <TabInfo :curTab="curTab" v-if="width >= 1200" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { AboutTab, AboutTabOrder } from '~/types/about'

const props = defineProps<{
  about: AboutTab[]
}>()

props.about.sort((a, b) => Number(a.order) - Number(b.order))

let curTab = ref<AboutTab>(props.about.find((tab) => Number(tab.order) === 1)!)

const { width } = useWindowSizes()

let curTabOrder = ref<AboutTabOrder>(1)

const changeTab = (tab: AboutTab, order: AboutTabOrder) => {
  curTab.value = tab
  curTabOrder.value = order
}

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
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>