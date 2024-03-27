

<script>
export default {
  name: 'LayoutSider',
};
</script>
<script setup>
import { ref ,defineComponent} from 'vue'

defineProps({
})
</script>

<template>
  <aside class="sider">
      <slot></slot>
  </aside>
</template>

<style scoped lang="scss">
.sider {
  padding: 5px;
}
</style>