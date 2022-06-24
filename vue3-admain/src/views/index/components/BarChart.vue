<!--  -->
<template>
  <div>
     <div ref="main" class="main" style=""></div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { onMounted, reactive, ref, } from 'vue';
import bar from '@/assets/chartJson/bar.json';
import axios from 'axios'

const main = ref()
const state =reactive({
    xdata:[],
    small:[],
    medium:[],
    large:[]
})
onMounted(()=>{
    console.log(bar);
    
  init()
})
const init= async ()=>{
         state.xdata = bar.xdata as any
         state.small = bar.small as any
         state.medium = bar.medium as any
         state.large = bar.large as any
  // 1通过dom初始化echarts 2ref虚拟化dom
  let mychart =echarts.init(main.value)
  // 数据源
  var option = {
      title:{
          text:'SKU销售周报',
          x:'center'
      },
      tooltip:{
          trigger:'item'
      },
      legend:{
          show:true,
          top:'10%'
      },
      xAxis:{
          type:'category',
          data:state.xdata
      },
      yAxis:{

      },
      series:[
          {
              name:'小份',
              type:'bar',
              stack:'销量',
              barWidth:'60%',
              data:state.small

          },{
              name:'中份',
              type:'bar',
              stack:'销量',
              barWidth:'60%',
              data:state.medium

          },{
              name:'大份',
              type:'bar',
              stack:'销量',
              barWidth:'60%',
              data:state.large

          }
      ]

  };

  // 数据源给予
  mychart.setOption(option)
}

</script>
<style lang='scss' scoped>
.main{
    width: 100%; 
    height: 400px; 
    margin: 15px 0; 
    border:1px solid #ccc; 
    box-shadow: 5px 5px 5px #888888;
}
</style>