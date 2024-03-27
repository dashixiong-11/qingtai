<script setup>
import Layout from '../components/Layout/Layout.vue';
import Header from '../components/Layout/Header.vue';
import Sider from '../components/Layout/Sider.vue';
import Content from '../components/Layout/Content.vue';
import RouterLinkNav from '../components/RouterLinkNav.vue';
import Card from '../components/Card.vue';
import PieChart from '../components/Charts/PieChart.vue';
import LineChart from '../components/Charts/LineChart.vue';
import TableChart from '../components/Charts/TableChart.vue';
import { Data1,Data2,dataSource,columns } from '../mock/coldRoomData';


import { ref, reactive,onMounted } from 'vue';
const pathDatas = reactive([
    { path: '/coldRoomManagement/1', name: '房间1' },
    { path: '/coldRoomManagement/2', name: '房间2' },
    { path: '/coldRoomManagement/3', name: '房间3' },
    { path: '/coldRoomManagement/3', name: '房间3' },
    { path: '/coldRoomManagement/3', name: '房间3' },
    { path: '/coldRoomManagement/3', name: '房间3' },
    { path: '/coldRoomManagement/3', name: '房间3' },
    { path: '/coldRoomManagement/3', name: '房间3' },
]);

const data = reactive(Data1)
const data2 = reactive(Data2)
const mapData = reactive({
    json: null,
    name: 'yichun'
})

onMounted(async () => {
  const res =await  fetch('/areas_v3/bound/360900_full.json')
  const json = await res.json()
  console.log('json', json);
  mapData.json = json
})
</script>

<template>
    <Layout class="cold-room-mangement">
        <Sider class="cold-room-mangement-sider">
            <Card title="冷库使用情况" style="height: 30vh;">
                <TableChart :dataSource="dataSource" :columns="columns" /> 
            </Card>
            <Card title="冷藏柜使用情况">
                <PieChart :data="data" />
            </Card>
            <Card title="冷藏柜使用情况" >
                <LineChart :data="data2.data" :xData="data2.xAxis" />
            </Card>
        </Sider>
        <Layout style="width: 70%;">
            <Header>
                <RouterLinkNav :path-datas="pathDatas" />
            </Header>
            <Content>
                <router-view />
            </Content>
        </Layout>
    </Layout>
</template>

<style scoped lang="scss">
.cold-room-mangement {
    overflow: auto;
    flex: 1;

    &-sider {
        width: 25%;
    }
}
</style>
