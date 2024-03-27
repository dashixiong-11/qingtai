<script setup>
import { ref, computed, reactive, watch, onMounted, watchEffect, nextTick } from 'vue'
import BaseChart from './BaseChart.vue';

/**
 * @description 折线图组件
 * @param {Object} options 配置折线图的参数
 * @param {Array } options.series 纵轴数据，类型为数组,可传多个数组,比如 [[1,2,3],[4,5,6]]
 * @param {Array} options.category 横轴数据，类型为数组
 * @param {Boolean} options.smooth 是否是平滑曲线
 * @param {Object} options.areaStyle 区域填充样式 ,默认有，透明度为 0.2，
 * @param {Boolean} options.areaStyle.show  是否展示区域填充色
 * @param {Number} options.areaStyle.opacity  填充色透明度

 */

const props = defineProps({
    options: {
        type: Object,
        default: () => { }
    }
})

const defaultOptions = reactive({
    xAxis: {
        type: 'category',
        data: [],
        boundaryGap: ['20%', '20%'],
        axisLabel: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     type: 'shadow'
        // },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: 'rgba(214, 214, 214, 0.1)'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    series: [
        // {
        //     type: 'bar',
        //     tooltip: {
        //         valueFormatter: function (value) {
        //             return `${(value / 300 * 100).toFixed(2)}%`
        //         }
        //     },
        //     data: props.data,
        //     label: {
        //         show: true,     //开启展示
        //         position: 'top', //在上方展示
        //         color: '#fff'
        //     },
        // }
    ]
})

const seriesItem = {
    type: 'line',
    data: [],
    areaStyle: {
        opacity: 0.2
    },
    label: {
        show: true,
        position: 'top',
        color: '#fff'
    },
    smooth: true,
}


watchEffect(() => {
    console.log('watchEffect props.options', props.options);
    const legend = {
        data: [],
        orient: 'horizontal',
        y: 'bottom',
        textStyle: {
            color: '#fff'
        }
    }
    const pOptions = props.options
    const { smooth, category, areaStyle, series, ...others } = pOptions

    seriesItem.smooth = pOptions.smooth || false
    if (areaStyle) {
        seriesItem.areaStyle = pOptions.areaStyle
    }
    if (category) {
        defaultOptions.xAxis.data = pOptions.category
    }
    if (series) {
        pOptions.series.forEach((item) => {
            defaultOptions.series.push({ ...seriesItem, ...item })
            item.name && legend.data.push(item.name)
        })
    }
    if (legend.data.length) {
        defaultOptions.legend = legend
    }
    Object.assign(defaultOptions, others)
})



</script>

<template>
    <BaseChart :options="defaultOptions" />
</template>
