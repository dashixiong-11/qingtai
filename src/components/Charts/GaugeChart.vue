<script setup>
import { ref } from 'vue'
import BaseChart from './BaseChart.vue';

const props = defineProps({
})

const options = ref({
    series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      splitNumber: 6,
      itemStyle: {
        color: '#FFAB91'
      },
      progress: {
        show: true,
        width: 10
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 10
        }
      },
      axisTick: {
        distance: -10,
        splitNumber: 5,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      splitLine: {
        distance: -10,
        length: 6,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: -10,
        color: '#999',
        fontSize: 10
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '-15%'],
        fontSize: 20,
        fontWeight: 'bolder',
        formatter: '{value} °C',
        color: 'inherit'
      },
      data: [
        {
          value: 20
        }
      ]
    },
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      itemStyle: {
        color: '#FD7347'
      },
      progress: {
        show: true,
        width: 8
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: 20
        }
      ]
    }
  ]
})
</script>

<template>
  <div class="gauge-chart">
      <BaseChart :options="options" />
  </div>
</template>

<style scoped lang="scss">

</style>