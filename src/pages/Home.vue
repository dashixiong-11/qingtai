<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import Layout from '../components/Layout/Layout.vue';
import Content from '../components/Layout/Content.vue';
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';
import Sider from '../components/Layout/Sider.vue';
import Statistic from '../components/Statistic.vue';
import LineChart from '../components/Charts/LineChart.vue';
import PieChart from '../components/Charts/PieChart.vue';
import TableChart from '../components/Charts/TableChart.vue';
import BarChart from '../components/Charts/BarChart.vue';
import HumidnessChart from '../components/Charts/HumidnessChart.vue';
import { Data1, Data3, Data4, dataSource, columns, Data5, Data6 } from '../mock/coldRoomData';
import Card from '../components/Card.vue';

const statisticData = reactive([
  { icon: '/src/assets/icons/car.svg', title: '总车辆', value: 100 },
  { icon: '/src/assets/icons/run.svg', title: '运行中', value: 43 },
  { icon: '/src/assets/icons/fix.svg', title: '修理中', value: 15 },
])

</script>

<template>
  <Layout>
    <Sider style="width: 25%;">
      <Card title="冷藏柜运行状态">
        <PieChart :data="Data1" />
      </Card>
      <Card title="一周走势">
        <LineChart :options="Data3" />
      </Card>
      <Card title="业绩对比图" style="height: 30vh;">
      <BarChart :options="Data4" />
      </Card>
    </Sider>
    <Layout>
      <Header>
        <div class="statistic-wrapper">
          <Statistic style="width: 30%;padding: 0 20px;" v-for="icon in statisticData" :key="icon.title"
            :icon="icon.icon" :title="icon.title" :value="icon.value" />
        </div>
      </Header>
      <Content>
        <!-- <Map  /> -->
        <LineChart :options="Data5" />
      </Content>
      <Footer>
        <Card title="业绩排行" style="height: 30vh;">
        <div style="padding: 10px;">
          <TableChart :dataSource="dataSource" :columns="columns" />
        </div>
        </Card>
      </Footer>
    </Layout>
    <Sider style="width: 25%;">
      <Card title="空气质量">
        <HumidnessChart />
      </Card>
      <Card title="各项服务选择占比">
        <BarChart :options="Data6" />
      </Card>
    </Sider>
  </Layout>

</template>

<style scoped lang="scss">
.statistic-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

}
</style>
