<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, reactive, watchEffect } from 'vue'

const chart = ref(null)
const chartInstance = null

const props = defineProps({
    options: {
        type: Object,
        default: () => { }
    },
    mapData: {
        type: Object,
        default: () => {
            return { json: null, name: '' }
        }
    }
})

watchEffect(() => {
    console.log(props.mapData);
    console.log(props.mapData.json,'-----');
})

onMounted(() => {
    if (props.options) {
        console.log(props.mapData.json);
        if (props.mapData.json) {
        //  echarts.registerMap('yichun', props.mapData.json);
        }
        //chartInstance = echarts.init(chart.value);
        // const container = chartInstance.getDom().parentNode;
        // const width = container.offsetWidth;
        // const height = container.offsetHeight;
        // chartInstance.resize({ width, height });
        // chartInstance.setOption(props.options);
    }
});

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