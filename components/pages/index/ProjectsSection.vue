<template>
  <section class="section" id="projects">
    <h2 class="title">{{ t('projectsTitle') }}</h2>
    <p class="description">{{ t('projectsDescription') }}</p>
    <div class="table">
      <div class="table__column" v-for="project in projects" :key="project.name">
        <div class="table__content">
          <ul class="table__labels">
            <li v-for="(label, i) in project.labels" :key="i">{{ label }}</li>
          </ul>
          <div class="table__photo">
            <img :src="project.photo" :alt="project.name" loading="lazy">
          </div>
          <NuxtLink :to="project.link" target="_blank" class="table__title">{{ defineObjFields(project, ['name', 'en-name', 'fr-name']) }}</NuxtLink>
          <div class="table__row">
            <p class="table__text">{{ defineObjFields(project, ['text', 'en-text', 'fr-text']) }}</p>
            <NuxtLink :to="project.link" target="_blank" class="table__arrow">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
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
    <img src="/img/decor2.svg" alt="" class="section__decor">
  </section>
</template>

<i18n lang="json">
  {
    "ru": {
      "projectsTitle": "МОИ ПРОЕКТЫ",
      "projectsDescription": "Мой опыт реализации функционала и создания верстки"
    },
    "en": {
      "projectsTitle": "Projects",
      "projectsDescription": "My experience in developing apps and websites"
    },
    "fr": {
      "projectsTitle": "Projets",
      "projectsDescription": "Mon expérience dans le développement de la fonctionnalité et la création des sites"
    }
  }
</i18n>

<script lang="ts" setup>
import { Project } from '~/types/projects';

interface Props {
  projects: Project[]
}
const props = defineProps<Props>()

const { t } = useI18n({
  useScope: 'local'
})
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @include breakpoints(small) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoints(large) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__column {
    padding: 16px;

    @include breakpoints(small) {
     
      &:not(:nth-child(2n)) {
        border-right: 1px solid $black;

        @include breakpoints(large) {
          border: none;
        }
      }
    }

    @include breakpoints(large) {
      padding: 32px;

      &:not(:nth-child(3n)) {
        border-right: 1px solid $black;
      }
    }
  }

  &__content {
    border-bottom: 1px solid $black;
    height: 100%;
    position: relative;
  }

  &__photo {
    width: 100%;
    height: 340px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      transition: all 5s ease-out 0s;
    }

    &:hover {
      img {
        object-position: center bottom;
      }
    }
  }

  &__title {
    margin: 16px 0 12px;
    @include font(24px, 28px, 700);
    @include link;
    @extend %textGradient;

    @include breakpoints(medium) {
      -webkit-text-fill-color: $black;
      background: none;
    }

    &:hover {
      ~ .table__row {
        @extend %arrowAnim;
      }
    }
  }

  &__row {
    @include flex(flex-start, space-between);
    margin-bottom: 8px;
  }

  &__text {
    @include font(18px, 20px);
  }

  &__arrow {
    align-self: flex-end;
    padding-top: 16px;

    @include breakpoints(medium) {
      padding-top: 0;
      padding-left: 12px;
      align-self: initial;
    }

    svg {
      fill: $black;
      width: 40px;
      height: 40px;

      @include breakpoints(medium) {
        width: 30px;
        height: 30px;
      }
    }

    &:hover {
      @extend %arrowAnim;
    }
  }

  &__labels {
    list-style: none;
    @include flex;
    flex-wrap: wrap;
    gap: 8px;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;
    max-width: 200px;
    cursor: default;

    li {
      background: $gradient;
      padding: 8px;
      @include font(14px, 26px, 400, $white);

      @include breakpoints(medium) {
        @include font(16px, 26px, 400, $white);
      }
    }
  }
}

%arrowAnim {
  svg {
    animation: arrow-hover 1.1s linear infinite;
    // fill: $orange;
  }
}

@keyframes arrow-hover {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.section__decor {
  position: absolute;
  top: 0;
  left: -9.9%;
  z-index: -1;
}
</style>