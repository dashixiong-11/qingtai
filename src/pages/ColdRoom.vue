<script setup>
import { useRoute } from 'vue-router';
import { watch, ref, reactive, onMounted } from 'vue';
import Freezer from '../components/Freezer.vue';
import { Item } from '../mock/coldRoomData.js';
//获取页面路由参数 id
const route = useRoute();
const pathId = ref(route.params.id);
const items = ref([])

onMounted(() => {
    console.log(pathId.value);
    setTimeout(() => {
        items.value = Item
    }, 500)
})



watch(route, (newRoute) => {
    const id = newRoute.params.id;
    pathId.value = id
});

</script>

<template>
    <div class="cold-room">
        <Freezer :items="items" />
    </div>
</template>

<style scoped lang="scss">
.cold-room {
    padding: 10px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
}
</style>
