<template>
  <div class="charts">
    <el-row :gutter="3">
      <el-col :span="8">
        <line-chart />
        <bar-chart />
      </el-col>
      <el-col :span="12">
      <map-chart />
      </el-col>
      <el-col :span="4">
        <pie-chart />
        <BarChartTo />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import PieChart from "./components/Piechart.vue";
import LineChart from './components/LineChart.vue';
import BarChart from './components/BarChart.vue';
import BarChartTo from "./components/BarChartTo.vue";
import MapChart from "./components/MapChart.vue";

</script>

<style lang="scss" scoped>
.charts{
  width: 100%;
  height: 100%;
}
</style>