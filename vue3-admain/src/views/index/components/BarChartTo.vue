<!--  -->
<template>
  <div>
     <div ref="main" class="main" ></div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { onMounted, reactive, ref, } from 'vue';
import axios from 'axios'

const main = ref()
const state = reactive({
    ydata:[],
    last:[],
    current:[]

})
onMounted(()=>{
  init()
})
const init= async ()=>{
    await  axios.get('https://c4156a34-94b2-4302-969f-e96f6277625a.bspapp.com/barTo').then(res=>{
        state.ydata = res.data.ydata
        state.last = res.data.last 
        state.current = res.data.current
    })
  // 1通过dom初始化echarts 2ref虚拟化dom
  let mychart =echarts.init(main.value)
  // 数据源
  var option = {
      title:{
          text:'月报表',
          x:'center'
      },
      tooltip:{
          trigger:'axis',
          axisPointer:{
              type:'shadow'
          }
      },
      legend:{
          show:true,
          top:'10%'
      },
      grid:{
          left:'3%',
          right:'4%',
          bottom:'3%',
          containLabel:true
      },
      xAxis:{
          type:'value',
        //   boundaryGap:[0,0.01]
      },
      yAxis:{
          type:'category',
          data:state.ydata
      },
      series:[
          {
              name:'上月',
              type:'bar',
              data:state.last
          },
          {
              name:'当月',
              type:'bar',
              data:state.current
          }
      ]
  };

  // 数据源给予
  mychart.setOption(option)
}

</script>
<style lang='scss' scoped>
.main{
    width: 99%; 
    height: 400px; 
    margin: 15px 0; 
    border:1px solid #333; 
    box-shadow: 5px 5px 5px #888888;
}
</style>