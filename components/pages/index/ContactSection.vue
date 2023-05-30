<template>
  <section class="section" id="contacts">
    <h2 class="title">Мои контакты</h2>
    <p class="description">Буду рада с вами пообщаться</p>
    <div class="table">
      <div class="table__column" v-for="cont in contacts" :key="cont.name">
        <p class="table__text">{{ cont.name }}</p>
        <NuxtLink v-if="cont.link" class="table__link" :to="cont.link.href" target="_blank">
          {{ cont.link.name }}
        </NuxtLink>
        <Button v-if="cont.btn" :name="cont.btn.name" @click="goToLink(cont.btn.href)"/>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { Contact } from '~/types/contact';

interface Props {
  contacts: Contact[]
}
const props = defineProps<Props>()

const goToLink = (link: string) => {
  window.open(link, '_blank')
}

</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  border-top: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @include breakpoints(medium) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__column {
    padding: 16px;
    border-top: 1px solid $black;

    @include breakpoints(medium) {
      padding: 20px 36px;

      &:not(:nth-child(3n)) {
        border-right: 1px solid $black;
      }
    }

    &:nth-child(4) {
      border-top: none;
      display: none;

      @include breakpoints(medium) {
        display: initial;
      }
    }
  }

  &__text {
    @include font(18px, 26px, 500);
    padding-bottom: 12px;
  }

  &__link {
    @include font(20px, 26px, 700);
    @include link;

    @include breakpoints(medium) {
      padding: 10px 0 12px;
    }
  }
}
</style>