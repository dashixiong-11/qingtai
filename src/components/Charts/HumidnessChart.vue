<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
})
const chart = ref(null)
const value = ref(0)
const aqi = ref(0)
const airQuality = ref('')
const iconWidth = ref(0)
const iconHeight = ref(0)

onMounted(() => {
    const dom = chart.value
    const parentWidth = dom.parentNode.clientWidth
    const parentHeight = dom.parentNode.clientHeight
    const minSize = Math.min(parentWidth, parentHeight)
    iconWidth.value = minSize
    iconHeight.value = minSize
})

</script>

<template>
    <div class="humidness-chart" ref="chart">
        <div class="icon" :style="{ width: `${iconWidth}px`, height: `${iconHeight}px` }">
            <div class="wrapper" :style="{
            width: `${iconWidth * 0.8}px`,
            height: `${iconHeight * 0.8}px`
        }">
                <div class="value">
                    <span>当前湿度</span>
                    <span>28%</span>
                </div>
                <div class="wave1" :style="{ width: `${iconWidth}px`, height: `${iconHeight}px` }" />
                <div class="wave2" :style="{ width: `${iconWidth}px`, height: `${iconHeight}px` }" />
            </div>


        </div>
        <div class="data">
            <div class="row">
                <span>当前温度</span>
                <span> 29℃ </span>
            </div>
            <div class="row">
                <span>AQI（空气质量指数）</span>
                <span> 42 </span>
            </div>
            <div class="row">
                <span>空气质量</span>
                <span> 优秀 </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.humidness-chart {
    display: flex;
    align-items: center;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        .wrapper {
            overflow: hidden;
            position: relative;
            border: 1px solid $primary-color;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .value {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                z-index: 2;

                &>span:nth-child(1) {
                    font-size: $font-size-xs;
                }

                &>span:nth-child(2) {
                    font-size: $font-size-xl;
                    font-weight: bold;
                }
            }

            .wave1,
            .wave2 {
                position: absolute;
                left: 50%;
                top: 20%;
                border-radius: 40%;
                background-color: $primary-color;
            }

            .wave1 {
                transform: translateX(-50%);
                opacity: 0.5;
                animation: rotation 10s linear infinite;
            }

            .wave2 {
                transform: translateX(-50%);
                opacity: 0.7;
                animation: rotation 10s linear infinite;
                animation-delay: 3s;

            }

        }

    }

    @keyframes rotation {
        from {
            transform: translateX(-50%) rotate(0deg);
        }

        to {
            transform: translateX(-50%) rotate(360deg);
        }
    }

    .rotate-animation {
        display: inline-block;
        animation: rotation 2s linear infinite;
        transform-origin: center;
    }

    .data {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .row {
            display: flex;
            flex-direction: column;

            &>span:nth-child(1) {
                font-size: $font-size-xs;
                color: #eee;
            }

            &>span:nth-child(2) {
                font-size: $font-size-xl;
                font-weight: bold;
                color: $primary-color;
            }
        }
    }
}
</style>