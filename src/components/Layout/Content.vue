<script>
export default {
    name: 'LayoutContent',
};
</script>
<script setup>
import { ref, defineComponent } from 'vue'

defineProps({
})
defineComponent({
    name: 'Content'
})
</script>

<template>
    <div class="layout-content">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.layout-content {
    flex: 1;
    overflow: auto;
}
</style>