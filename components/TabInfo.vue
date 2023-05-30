<template>
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
</template>

<script lang="ts" setup>
import { AboutTab, AboutTabOrder } from '~/types/about';

const props = defineProps<{
  curTab: AboutTab
}>()

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

  &__right {
    @include flex;
    padding: 30px 28px;
    flex-direction: column-reverse;
    border-bottom: 1px solid $black;

    @include breakpoints(medium) {
      padding: 12px 60px;
      border-bottom: 0;
    }
  }

  &__photo {
    width: 282px;
    height: 282px;
    flex-shrink: 0;
    margin-top: 30px;

    @include breakpoints(medium) {
      margin-top: 0;
      margin-right: 60px;
      width: 280px;
      height: 280px;
    }

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
      @include font(18px, 26px);
      padding-bottom: 12px;

      @include breakpoints(medium) {
        @include font(16px, 26px);
      }
    }

    ul {
      list-style: none;
      @include flex;
      flex-wrap: wrap;
      gap: 8px;
      flex-direction: row;
      margin-top: 12px;

      @include breakpoints(medium) {
        margin-top: 0;
      }
    }

    li {
      background: $gradient;
      padding: 8px;
      @include font(14px, 26px, 400, $white);
      align-self: flex-start;

      @include breakpoints(medium) {
        @include font(16px, 26px, 400, $white);
      }
    }

    .column-title {
      @include font(20px, 26px, 500);
      padding-bottom: 12px;

      @include breakpoints(medium) {
        @include font(18px, 26px, 500);
      }
    }

    .column-bold {
      @include font(20px, 26px, 700);
      padding-bottom: 12px;
    }
  }
}
</style>