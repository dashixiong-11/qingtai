<script>
export default {
    name: 'LayoutHeader',
};
</script>
<script setup>
import { ref, defineComponent } from 'vue'

defineProps({
})
defineComponent({
    name: 'Header'
})
</script>

<template>
    <header class="layout-header">
        <slot></slot>
    </header>
</template>

<style scoped lang="scss">
.layout-header {
}
</style>