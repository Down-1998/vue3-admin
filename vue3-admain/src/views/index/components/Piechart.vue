<!--  -->
<template>
  <div>
    <div ref="main" class="main"></div>
  </div>
</template>

<script setup lang='ts'>
import axios from 'axios'
import * as echarts from "echarts";
import pie from '@/assets/chartJson/pie.json'
import { onMounted, ref } from 'vue'

const main = ref()
onMounted(() =>{
    init()
})
const data =ref([])
const init = async () => {
        data.value = pie as any
  let mychart = echarts.init(main.value);
  //数据源
  var option = {
        title:{
            text:'库存剩余',
            x:'center'
        },
        tooltip:{
            trigger:'item'
        },
        legend:{
            top:'5%',
            left:'center'
        },
        series:[
            {
                name:'库存',
                type:'pie',
                radius:['40%','70%'],
                itemStyle:{
                    borderRadius:10,
                    borderColor:'#fff',
                    borderWidth:2
                },
                label:{
                    show:false,
                    position:'center'
                },
                emphasis:{
                    label:{
                        show:true,
                        fontSize:'40',
                        fontWeight:'bold'
                    }
                },
                data:data.value
            }
        ]
  };
  //数据源给予
  mychart.setOption(option)
}
</script>
<style lang='scss' scoped>
.main {
  width: 99%;
  height: 400px;
  margin: 10px 0;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px #888;
}
</style>