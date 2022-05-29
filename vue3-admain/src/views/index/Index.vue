<template>
  <div class="charts">
    <el-row :gutter="3">
      <el-col :span="8"></el-col>
      <el-col :span="12"></el-col>
      <el-col :span="4">
        <pie-chart />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import PieChart from "./components/Piechart.vue";

</script>

<style lang="scss" scoped>
.charts{
  width: 100%;
  height: 100%;
}
</style>