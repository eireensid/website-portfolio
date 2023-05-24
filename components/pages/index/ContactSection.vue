<template>
  <div class="section">
    <h2 class="title">Связаться со мной</h2>
    <p class="description">Буду рада с вами пообщаться</p>
    <div class="table"></div>

  </div>
</template>

<script lang="ts" setup>
// interface Props {
//   technologies: Array<object>
// }
// const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid $black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>