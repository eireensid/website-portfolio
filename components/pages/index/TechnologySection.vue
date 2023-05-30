<template>
  <section class="section" id="technology">
    <h2 class="title">Технологии</h2>
    <p class="description">Которые я использовала в своих проектах</p>
    <div class="table">
      <div class="table__column" v-for="(tech, i) in technologies" :key="tech.name">
        <div class="table__photo">
          <img :src="`/img/${tech.name}.svg`" :alt="tech.name">
        </div>
        <p class="table__text" :class="{'table__text--gradient': tech.gradient}">{{ tech.name }}</p>
      </div>
    </div>
    <img src="/img/decor1.svg" alt="" class="section__decor">
  </section>
</template>

<script lang="ts" setup>
import { Technology } from '~/types/technology';

interface Props {
  technologies: Technology[]
}
const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-left: 1px solid $black;
  border-top: 1px solid $black;

  @include breakpoints(small) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include breakpoints(medium) {
    grid-template-columns: repeat(4, 1fr);
  }

  &__column {
    border: 1px solid $black;
    border-left: none;
    border-top: none;
    @include flex(center);
    padding: 16px;

    @include breakpoints(medium) {
      padding: 32px;
      flex-direction: column;
    }
  }

  &__text {
    @include font(22px, 28px, 700);
    padding-top: 12px;

    @include breakpoints(medium) {
      @include font(24px, 28px, 700);
    }
    
    &--gradient {
      @extend %textGradient;
    }
  }
}

.section__decor {
  position: absolute;
  bottom: -600px;
  right: -9.9%;
  z-index: -1;
}
</style>