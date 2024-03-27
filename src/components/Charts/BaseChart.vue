<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, reactive, watchEffect } from 'vue'

const chart = ref(null)
let chartInstance = null

const props = defineProps({
    options: {
        type: Object,
        default: null
    }
})

watchEffect(() => {
    if ( props.options && props.options.series && chart.value) {
        chartInstance = echarts.init(chart.value);
        const container = chartInstance.getDom().parentNode;
        const width = container.offsetWidth -2;
        const height = container.offsetHeight -2;
        chartInstance.resize({ width, height });
        chartInstance.setOption(props.options);
    }
})


onUnmounted(() => {
    if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
    }
});

</script>

<template>
    <div class="My-chart" ref="chart" style="width:100%;min-height: 200px;">
    </div>
</template>

<style scoped lang="scss"></style>