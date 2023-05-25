<template>
  <div class="section">
    <h2 class="title">Технологии</h2>
    <p class="description">Которые я использовала в своих проектах</p>
    <div class="table">
      <div class="table__column" v-for="(tech, i) in technologies" :key="tech.name">
        <div class="table__photo">
          <img :src="iconLink(i + 1)" :alt="tech.name">
        </div>
        <p class="table__text">{{ tech.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  technologies: Array<object>
}
const props = defineProps<Props>()

const icons = {
  1: 'icon1',
  2: 'icon2',
  3: 'icon3'
}

const iconLink = (ind) => {
  if (ind % 3 === 1) return `/img/${icons[1]}.svg`
  if (ind % 3 === 2) return `/img/${icons[2]}.svg`
  if (ind % 3 === 0) return `/img/${icons[3]}.svg`
}

</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-left: 1px solid $black;
  border-top: 1px solid $black;

  &__column {
    border: 1px solid $black;
    border-left: none;
    border-top: none;
    @include flex(center);
    flex-direction: column;
    padding: 32px;

    //&:nth-child(2n) {
    //  p {
    //    color: $black;
    //  }
    //}
  }

  &__text {
    @include font(24px, 28px, 700);
    padding-top: 12px;
  }
}
</style>