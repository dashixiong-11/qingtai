<script setup>
defineProps({
    items: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="cold-room-item-wrapper" v-for="item in items" :key="item.id">
        <div class="cold-room-item">
            <div class="top-side">
                <div class="icon">
                    <img src="" alt="">
                </div>
                <div class="info">
                    <div class="info-left">
                        <div class="left-row">
                            <span class="label">编号：</span>
                            <span class="value">{{ item.id }}</span>
                        </div>
                        <div class="left-row">
                            <span class="label">逝者姓名：</span>
                            <span class="value">{{ item.name }}</span> / <span class="label">{{ item.sex }}</span>
                        </div>
                    </div>
                    <div class="info-right">
                        <div
                            :class="[item.status === 'normal' ? 'info-status-normal' : item.status === 'error' ? 'info-status-err' : '', 'info-status']">
                            {{ item.status === 'normal' ? '温度正常' : item.status === 'error' ? '温度异常' : '检测中' }}</div>
                        <div class="info-t">
                            <span class="info-t-n">{{ item.temperature }}</span>
                            <span class="info-t-l"> °C </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="bottom-side">
                <div class="state">{{ item.state }}</div>
                <div class="time">
                    <span>入藏时间：{{ item.startTime }}</span>
                    <span> 出藏时间：{{ item.endTime }} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cold-room-item-wrapper {
    width: 33.3%;
    padding: 6px;
}


.cold-room-item {
    box-shadow: inset 0 0 10px 1px $primary-color;

    min-height: 100px;
    display: flex;
    flex-direction: column;

    .top-side {
        display: flex;
        align-items: center;

        .icon {
            width: 5em;
            display: flex;
            align-items: center;
            justify-content: center;

            &>img {
                width: 3em;
                height: 3em;
            }
        }

        .info {
            padding: 8px 0 0;
            flex: 1;
            display: flex;
            align-items: center;

            .info-left {
                .label {
                    font-size: $font-size-xs;
                }

                .value {
                    font-weight: bold;
                }
            }

            .info-right {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .info-status {
                    padding: 2px 8px;
                    border-radius: 6px;
                    background: #d49696;
                    font-size: $font-size-sm;
                    font-weight: bold;
                    color: #fff;

                    &-normal {
                        background-color: #76d7fa;
                    }

                    &-err {
                        background-color: red;
                    }
                }

                .info-t {
                    &-n {
                        font-weight: bold;
                        font-size: $font-size-xl;
                    }

                    &-l {
                        font-size: $font-size-xs;
                    }
                }
            }

        }

    }

    .bottom-side {
        display: flex;
        align-items: center;
        padding: 0 0 8px;

        .state {
            text-align: center;
            width: 100%;
            width: 5em;
            font-weight: bold;
        }

        .time {
            font-size: $font-size-xs;
        }

    }

}
</style>