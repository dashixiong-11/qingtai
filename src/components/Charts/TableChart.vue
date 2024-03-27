<script setup>
import { ref } from 'vue'

const props = defineProps({
    dataSource: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="table-chart">
        <div class="table-chart-header">
            <div class="table-chart-header-cell" v-for=" column in columns" :key="column.dataIndex">{{ column.title }}
            </div>
        </div>
        <div class="table-chart-body">
            <div class="table-chart-body-row" v-for=" row in dataSource" :key="row.id">
                <div class="table-chart-body-cell" v-for=" column in columns" :key="column.dataIndex">{{
                row[column.dataIndex] }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.table-chart {

    .table-chart-header {
        display: flex;
        padding: 4px 0;

        .table-chart-header-cell {
            min-width: 30px;
            text-align: center;
            flex: 1;
            background-color: #1d4046;
            color: #fff
        }
    }

    .table-chart-body {

        .table-chart-body-row {
            display: flex;

            .table-chart-body-cell {
                font-size: $font-size-xs;
                min-width: 30px;
                text-align: center;
                flex: 1;
                padding: 4px 0;

            }
        }
    }
}
</style>