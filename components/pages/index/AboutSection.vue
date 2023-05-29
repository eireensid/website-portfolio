<template>
  <section class="section" id="about">
    <h2 class="title">Хочу создавать красоту, а не только ею восхищаться.</h2>
    <p class="description">Давайте познакомимся поближе</p>
    <div class="table">
      <div class="table__left">
        <ul class="table__list">
          <li class="table__list-item" v-for="item in about" :key="item.name"
              :class="{'table__list-item--active': item === curTab}"
              @mouseover="changeTab(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="table__right">
        <div class="table__photo">
          <img :class="photoShapeStyle(curTab.order)" src="/img/photo.jpg" alt="фото">
        </div>
        <div class="table__content">
          <div class="table__text" v-if="curTab.code === 'experience'">
            <p class="column-bold">{{ years }} года {{ months }} месяцев </p>
          </div>
          <div class="table__text" v-html="curTab.text"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { AboutTab, AboutTabOrder } from '~/types/about'

const props = defineProps<{
  about: AboutTab[]
}>()

props.about.sort((a, b) => Number(a.order) - Number(b.order))

let curTab = ref(props.about.find((tab) => Number(tab.order) === 1)!)

const changeTab = (tab: any) => {
  curTab.value = tab
}

const photoShapes: Record<AboutTabOrder, string> = {
  1: 'circle',
  2: 'triangle',
  3: 'rhomb',
  4: 'rectangle'
}

const photoShapeStyle = (order: AboutTabOrder) => {
  return photoShapes[order]
}

const pastDate = '2020-09-10'
const period = new Date(new Date().getTime() - new Date(pastDate).getTime())
const years = period.getFullYear() - 1970 // at 1970 the date calendar starts
const months = period.getMonth()

</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  @include flex;

  &__left {
    flex-basis: 33%;
    border-right: 1px solid $black;
    flex-shrink: 0;
  }

  &__list-item {
    padding: 30px 36px;
    @include font(18px, 18px, 600, #212121);
    @include link;

    &:not(:last-child) {
      border-bottom: 1px solid $black;
    }
  }

  &__right {
    @include flex;
    padding: 12px 60px;
  }

  &__photo {
    width: 280px;
    height: 280px;
    margin-right: 60px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.circle {
        border-radius: 50%;
      }

      &.triangle {
        clip-path: polygon(100% 0, 100% 0%, 50% 100%, 0 0%);
      }

      &.rhomb {
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
      }
    }
  }

  &__text ::v-deep { 
    p {
      @include font(16px, 26px);
      padding-bottom: 12px;
    }

    ul {
      list-style: none;
      @include flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    li {
      background: $gradient;
      padding: 8px;
      @include font(16px, 26px, 400, $white);
    }

    .column-title {
      @include font(18px, 26px, 500);
      padding-bottom: 12px;
    }

    .column-bold {
      @include font(20px, 26px, 700);
      padding-bottom: 12px;
    }
  }
}
</style>