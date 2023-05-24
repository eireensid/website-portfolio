<template>
  <div class="section">
    <h2 class="title">Проекты</h2>
    <p class="description">Мой опыт создания верстки и реализации функционала</p>
    <div class="table">
      <div class="table__column" v-for="project in projects" :key="project.name">
        <div class="table__content">
          <div class="table__photo">
            <img :src="project.photo" :alt="project.name">
          </div>
          <NuxtLink :to="project.link" target="_blank" class="table__title">{{ project.name }}</NuxtLink>
          <div class="table__row">
            <p class="table__text">{{ project.text }}</p>
            <NuxtLink :to="project.link" target="_blank" class="table__arrow">
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_12_392)">
                  <path d="M9.5035 22.2741L9.5035 20.6344L19.4748 20.6344L6.84499 8.00456L8.00445 6.8451L20.6343 19.4749L20.6343 9.5036H22.274V22.2741H9.5035Z"/>
                </g>
                <defs>
                  <clipPath id="clip0_12_392">
                    <rect width="21" height="21" fill="white" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 14.8496)"/>
                  </clipPath>
                </defs>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  projects: Array<object>
}
const props = defineProps<Props>()
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

  &__title {
    margin: 16px 0 12px;
    @include font(24px, 28px, 700);
    @include link;
  }

  &__row {
    @include flex(flex-start, space-between);
    margin-bottom: 8px;
  }

  &__text {
    @include font(18px, 20px);
  }

  &__arrow {
    padding-left: 12px;

    svg {
      @include transition;
      fill: $black;
    }

    &:hover {
      svg {
        fill: $hover;
      }
    }
  }
}
</style>