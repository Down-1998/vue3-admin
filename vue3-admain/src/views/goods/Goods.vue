<!--  -->
<template>
  <!-- <div>
    <el-button v-btn="'system:goods:goodsInfo:add'" type="success" >{{$t('menus.wIndex')}}</el-button>
    <el-button v-btn="'system:goods:goodsInfo:update'" type="primary" @click="changeLange">{{$t('menus.wIndex')}}</el-button>
  </div> -->
  <el-row>
    <el-col
      v-for="(item, index) in goodsList"
      :key="index"
      :span="8"
    >
      <el-card :body-style="{ padding: '0px' }" class="goods-card"> 
        <img
          :src="item.url"
          class="image"
        />
        <div style="padding: 14px">
          <span>{{item.name}}</span>
          <div class="bottom">
            <time class="time">{{ item.currentDate }}</time>
            <el-button type="primary" class="button" @click="hanldClickGoods(item.name)">详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { ref,reactive } from 'vue'
import { ElNotification } from 'element-plus'

const goodsList = reactive([
  {
    url:'https://img1.baidu.com/it/u=3518163228,3845263403&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'前端网页设计与制作',
    currentDate:new Date()
  },
  {
    url:'https://img1.baidu.com/it/u=3538744210,1870194890&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=656',
    name:'web前端开发',
    currentDate:new Date()
  },
  {
    url:'https://img2.baidu.com/it/u=2181696651,2009689740&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'你不知道的js',
     currentDate:new Date()
  },
  {
    url:'https://img1.baidu.com/it/u=3518163228,3845263403&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'前端网页设计与制作',
    currentDate:new Date()
  },
  {
    url:'https://img1.baidu.com/it/u=3538744210,1870194890&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=656',
    name:'web前端开发',
    currentDate:new Date()
  },
  {
    url:'https://img2.baidu.com/it/u=2181696651,2009689740&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'你不知道的js',
    currentDate:new Date()
  },{
    url:'https://img1.baidu.com/it/u=3454029489,2014142234&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'深入浅出vue.js',
    currentDate:new Date()
  },
  {
    url:'https://img1.baidu.com/it/u=759362642,23138050&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'JavaScript设计模式',
    currentDate:new Date()
  },
  {
    url:'https://img0.baidu.com/it/u=3140624889,998666631&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    name:'Node.js入门',
     currentDate:new Date()
  }
])
const currentDate = ref(new Date())
const { t } = useI18n()
const changeLange = () =>{
  alert(t('menus.wIndex'))
}
const hanldClickGoods = (name:string) =>{
  ElNotification({
    title: 'Success',
    message: name,
    type: 'success',
  })
}
</script>
<style lang='scss' scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  width: 50px;
  // min-height: auto;
}

.image {
  width: 100%;
  height: 300px;
  display: block;
}
.goods-card{
  width: 300px;
  height: 400px;
  margin-bottom: 20px;
  margin-left: 60px;
}
</style>
