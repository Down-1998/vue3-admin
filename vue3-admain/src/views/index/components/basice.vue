<!--  -->
<template>
  <div>
    <div ref="main" class="main"></div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from "echarts";
import { onMounted, ref } from 'vue'

const main = ref()
onMounted(() =>{
    init()
})
const init = () => {
  let mychart = echarts.init(main.value);
  //数据源
  var option = { title: { text: '产品销量排行' },tooltip: {}, legend: { data: ['销量1','销量2'] },xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] },yAxis: {}, series: [ { name: '销量1', type: 'line', data: [5, 20, 36, 10, 10, 20] },{ name: '销量2', type: 'line', data: [7, 10, 30, 12, 16, 28] } ] }
  //数据源给予
  mychart.setOption(option)
}
</script>
<style lang='scss' scoped>
.main {
  width: 35%;
  height: 300px;
  margin: 20px;
}
</style>