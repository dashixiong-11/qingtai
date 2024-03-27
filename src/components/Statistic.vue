<script setup>
import { ref } from 'vue'

const props = defineProps({
    icon: String,
    value: Number,
    title: String
})
</script>

<template>
    <div class="statistic">
        <img :src="props.icon" alt="" class="icon">
        <div class="info">
            <span class="number">{{ props.value }}</span>
            <span class="text">{{ props.title }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.statistic {
    display: flex;
    align-items: center;
    background-color: rgba(23, 23, 23, 0.709);
    border-radius: 4px;

    img {
        width: 50px;
        height: 50px;
    }

    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .number {
            font-size: $font-size-l;
            font-weight: bold;
            color: $primary-color;
        }
        .text {
            font-size: $font-size-s;
            color: #dadada;
        }
    }
}
</style>