<script setup>
import { h, useSlots, defineComponent, computed } from 'vue';
const slots = useSlots();
const slotContents = slots.default()

const hasSider = computed(() => {
    return slotContents.some(item => item.type.name === 'LayoutSider')
})



</script>

<template>
    <section :class="[hasSider ? 'layout-has-sider' : 'layout-no-sider', 'layout']">
        <slot></slot>
    </section>
</template>

<style scoped lang="scss">
.layout {
    display: flex;
    flex: 1;

}
.layout-no-sider {
    flex-direction: column;
}

.layout-has-sider {
    flex-direction: row;
}
</style>