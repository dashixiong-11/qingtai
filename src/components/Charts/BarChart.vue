<script setup>
import { ref, computed, reactive, watch, onMounted, watchEffect, nextTick } from 'vue'
import BaseChart from './BaseChart.vue';

/**
 * @description 折线图组件
 * @param {Object} options 配置折线图的参数
 * @param {Array } options.series 纵轴数据，类型为数组,可传多个数组,比如 [[1,2,3],[4,5,6]]
 * @param {Array} options.category 横轴数据，类型为数组
 * @param {String} options.direction 图表方向，可选值：horizontal,vertical

 */

const props = defineProps({
    options: {
        type: Object,
        default: () => { }
    }
})

const defaultOptions = reactive({
    xAxis: [],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    yAxis: null,
    grid: {
        top: '10%',
        left: '3%',
        right: '10%',
        bottom: '5%',
        containLabel: true
    },
    series: []
})
const categoryReactive = reactive({
    type: 'category',
    data: [],
    boundaryGap: ['20%', '20%'],
    axisLabel: {
        color: '#fff'
    }
})
const valueReactive = reactive({
    type: 'value',
    splitLine: {
        lineStyle: {
            // 使用深浅的间隔色
            color: 'rgba(214, 214, 214, 0.1)'
        }
    }
})



watchEffect(() => {
    const seriesItem = {
        type: 'bar',
        data: [],
        //     tooltip: {
        //         valueFormatter: function (value) {
        //             return `${(value / 300 * 100).toFixed(2)}%`
        //         }
        //     },
        label: {
            show: true,
            position: props.options.direction === 'horizontal' ? 'inside' : 'top',
            color: '#fff'
        },
    }
    console.log('watchEffect props.options', props.options);
    const pOptions = props.options
    const { category, series, direction, ...others } = pOptions
    const newCategory = { ...categoryReactive, data: category }
    if (direction === 'horizontal') {
        defaultOptions.xAxis = valueReactive
        defaultOptions.yAxis = newCategory
    } else {
        defaultOptions.xAxis = newCategory
        defaultOptions.yAxis = valueReactive
    }
    series.forEach((item) => {
        defaultOptions.series.push({ ...seriesItem, ...item })
    })
    Object.assign(defaultOptions, others)
})



</script>

<template>
    <BaseChart :options="defaultOptions" />
</template>