<template>
  <div class="section">
    <h2 class="title">Проекты</h2>
    <p class="description">Мой опыт работы</p>
    <div class="table">
      <div class="table__column" v-for="project in projectList" :key="project.name">
        <div class="table__content">
          <div class="table__photo">

          </div>
          <h3 class="table__title">{{ project.name }}</h3>
          <p class="table__text">{{ project.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const projectList = [
  {
    "name": "Project 1",
    "text": "Bla bla bla"
  },
  {
    "name": "Project 2"
  },
  {
    "name": "Project 3"
  },
  {
    "name": "Project 4"
  }
]
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
}
</style>