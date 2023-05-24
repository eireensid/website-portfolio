<template>
  <div class="section">
    <h2 class="title">Хочу создавать красоту, а не только ею восхищаться.</h2>
    <p class="description">Давайте познакомимся поближе</p>
    <div class="table">
      <div class="table__left">
        <ul class="table__list">
          <li class="table__list-item" v-for="item in about.tabs" :key="item.name">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="table__right">
        <div class="table__photo">
          <img src="/img/photo.jpg" alt="фото">
        </div>
        <div class="table__text">
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  about: object
}
const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  @include flex;

  &__left {
    flex-basis: 33%;
    border-right: 1px solid $black;
  }

  &__list-item {
    padding: 30px 36px;
    @include font(18px, 18px, 600, #212121);
    @include link($black);

    &:hover {
      text-decoration: line-through;
    }

    &:not(:last-child) {
      border-bottom: 1px solid $black;
    }
  }

  &__right {
    @include flex(flex-start);
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
      border-radius: 50%;
    }
  }
}
</style>