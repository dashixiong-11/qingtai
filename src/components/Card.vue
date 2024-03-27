<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div v-if="title" class="card-title">
        <div class="card-title-wrapper">
          {{ title }}
        </div>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  flex: 1;
  display: flex;
  padding: 0 6px 6px;

  &-content {
   // box-shadow: inset 0 0 10px 1px $primary-color;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: url('../assets/card-bg.png') no-repeat;
    background-size: 100% 100%;

    .card-title {
      padding: 0 10px;
      font-size: $font-size-lg;
      font-weight: 800;

      &-wrapper {
        padding: 5px 0;
        border-bottom: 1px dashed $primary-color;
      }

    }

    .card-body {
      flex: 1;
      overflow: hidden;
    }

  }
}
</style>