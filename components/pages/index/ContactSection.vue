<template>
  <section class="section" id="contacts">
    <h2 class="title">{{ $t('contactsTitle') }}</h2>
    <p class="description">{{ $t('contactsDescription') }}</p>
    <div class="table">
      <div class="table__column" v-for="(cont, i) in contacts" :key="cont.name">
        <p class="table__text">{{ i === 0 ? defineObjFields(cont, ['name', 'en-name', 'fr-name']) : cont.name }}</p>
        <NuxtLink v-if="cont.link" class="table__link" :to="cont.link.href" target="_blank">
          {{ cont.link.name }}
        </NuxtLink>
        <Button v-if="cont.btn"
                :name="i === 0 ? defineObjFields(cont.btn, ['name', 'en-name', 'fr-name']) : cont.btn.name"
                @click="goToLink(cont.btn.href)"
        />
        <div class="table__photo" v-if="i === 0">
          <img src="/img/photo.jpg" alt="фото" loading="lazy">
        </div>
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

  @include breakpoints(small) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoints(medium) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__column {
    padding: 16px;
    border-top: 1px solid $black;
    position: relative;

    @include breakpoints(medium) {
      padding: 20px 36px;

      &:not(:nth-child(3n)) {
        border-right: 1px solid $black;
      }
    }

    &:nth-child(2), &:nth-child(5) {

      @include breakpoints(small) {
        border-right: 1px solid $black;
      }
    }

    &:nth-child(1) {
      order: 1;

      @include breakpoints(medium) {
        order: initial;
      }

      @include breakpoints(large) {
        .table__text, .btn {
          position: relative;
          top: 24px;
        }
      }
    }

    &:nth-child(4) {
      border-top: none;
      display: none;

      @include breakpoints(medium) {
        display: initial;
      }
    }

    &:nth-child(6) {

      @include breakpoints(small) {
        border-bottom: 1px solid $black;
      }

      @include breakpoints(medium) {
        border-bottom: 0;
      }
    }
  }

  &__photo {
    width: 170px;
    height: 170px;
    position: absolute;
    right: 32px;
    top: 40px;
    display: none;

    @include breakpoints(large) {
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
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