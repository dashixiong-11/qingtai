<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader';


defineProps({
})
const map = ref(null)
const mapContainer = ref(null)
const _aMap = ref(null)

const path1 = [
    [116.478935, 39.997761],
    [116.480939, 39.997825],
    [116.482939, 39.999925],
    [116.484939, 40.000935],
];

watchEffect(() => {


    if (_aMap.value) {
        map.value = new _aMap.value.Map('map-container', {
            center: [116.478935, 39.997761],
            resizeEnable: true,
            zoom: 18
        });
        map.value.setMapStyle('amap://styles/dark');
        // 分段设置时长
        const animationMarker = new _aMap.value.Marker({
            position: new _aMap.value.LngLat(116.478935, 39.997761),
            icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
            offset: new _aMap.value.Pixel(-13, -26),
            auRotation: true,
        });
        let index = 0;
        map.value.add(animationMarker);
        _aMap.value.plugin('AMap.MoveAnimation', function () {
            const id = setInterval(() => {
                animationMarker.moveTo(path1[index], {
                    duration: 1000,
                    delay: 500,
                });
                index++
                if (index >= path1.length) {
                    index = 0
                    clearInterval(id)
                }

            }, 3000)

        });
    }
})
// 更新车辆位置的方法
onMounted(() => {
    AMapLoader.load({
        "key": "6bccaf9b7e59e90dba8205c814e73112",
        "version": "2.0",
        "plugins": [],
        "Loca": {
            "version": '2.0.0'
        },
    }).then((AMap) => {
        _aMap.value = AMap;
    }).catch(e => {
        console.log(e);
    })
})
</script>

<template>
    <div id="map-container" ref="mapContainer" style="width: 100%;height: 600px;" 
        class="map-container"></div>
</template>

<style scoped lang="scss"></style>