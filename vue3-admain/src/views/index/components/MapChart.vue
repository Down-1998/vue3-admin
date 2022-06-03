<!--  -->
<template>
  <div>
    <div ref="main" class="main"></div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from "echarts";
import { onMounted, ref } from 'vue';
import axios from 'axios'
import { chinaMap } from '@/assets/map/china'

const main = ref()
const data = ref([])
onMounted(() =>{
    init()
})
const init = async () => {
    await axios.get('https://c4156a34-94b2-4302-969f-e96f6277625a.bspapp.com/map').then(res => {
        data.value = res.data
    })
  let mychart = echarts.init(main.value);
  //注册地图组件
  echarts.registerMap('chinaMap',chinaMap as any)
  //数据源
  var option = {
      title: {
            text: '门店城市销量排行',
            x: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
      geo:{
          map:'chinaMap',
          type:'map',
          zoom:1.1,
          itemStyle:{
            areaColor: '#f40',
            borderColor: '#0ffff',
            shadowColor: 'rgba(230,130,70,0.5)',
            shadowBlur: 30,
          },
          emphasis: {
                focus: 'self',
                areaColor: 'yellow',
                shadowBlur: 20,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
      },
      visualMap: {
            left: 'right',
            min: 100,
            max: 500,
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                ]
            },
            text:['高销量','低销量'],
            calculable:true
        },
        series: [
            {
                type: 'scatter',//散点图
                coordinateSystem: 'geo',
                itemStyle: {
                    borderColor: '#06b9d1',
                    color: 'red'
                },
                data: data.value,
                encode: {
                    value: 2
                }

            }
        ]
  }
  //数据源给予
  mychart.setOption(option)
}
</script>
<style lang='scss' scoped>
.main {
    width: 100%; 
    height: 815px; 
    margin: 12px 0; 
    border:1px solid #ccc; 
    box-shadow: 5px 5px 5px #888888;
}
</style>