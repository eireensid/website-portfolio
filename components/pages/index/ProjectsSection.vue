<template>
  <div class="section">
    <h2 class="title">Проекты</h2>
    <p class="description">Мой опыт работы</p>
    <div class="table">
      <div class="table__column" v-for="project in data.projects" :key="project.name">
        <div class="table__content">
          <div class="table__photo">
            <img :src="project.photo" :alt="project.name">
          </div>
          <h3 class="table__title">{{ project.name }}</h3>
          <p class="table__text">{{ project.text }}</p>
          <NuxtLink></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/api/db')
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &__column {
    padding: 32px;

    &:not(:nth-child(3n)) {
      border-right: 1px solid $black;
    }
  }

  &__content {
    border-bottom: 1px solid $black;
    height: 100%;
  }

  &__photo {
    width: 100%;
    height: 340px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>