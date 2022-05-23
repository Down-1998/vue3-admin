<!--  -->
<template>
  <div>Goods</div>
  <div>
    <el-button v-btn="'system:goods:goodsInfo:add'" type="success" >{{$t('menus.wIndex')}}</el-button>
    <el-button v-btn="'system:goods:goodsInfo:update'" type="primary" @click="changeLange">{{$t('menus.wIndex')}}</el-button>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const changeLange = () =>{
  alert(t('menus.wIndex'))
}
</script>
<style lang='scss' scoped>
</style>
