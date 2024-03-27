<script>
export default {
    name: 'LayoutFooter',
};
</script>
<script setup>
import { ref, defineComponent } from 'vue'

defineProps({
})
defineComponent({
    name: 'Footer'
})
</script>

<template>
    <footer class="layout-footer">
        <slot></slot>
    </footer>
</template>

<style scoped lang="scss">
.layout-footer {
}
</style>