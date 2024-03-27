<script setup>
import { ref, computed, reactive, watch, onMounted, watchEffect, } from 'vue'
import BaseChart from './BaseChart.vue';

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    options: {
        type: Object,
        default: () => { }
    }
})

const defaultOptions = reactive({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        y: 'bottom',
        textStyle: {
            color: '#fff'
        }
    },
    label: {
        color: '#eee',
        formatter: (params) => params.percent + '%',
    },
    series: [
        {
            type: 'pie',
            radius: '50%',
            data:props.data
        }
    ],
})

watchEffect(() => {
    Object.assign(defaultOptions, props.options)
})


</script>

<template>
    <BaseChart :options="defaultOptions" />
</template>
