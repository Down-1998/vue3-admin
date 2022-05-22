<template>
  <el-menu 
    default-active="/"
    active-text-colo="#409EFF"
    text-color="#fff"
    class="el-menu"
    :collapse="collapsed"
    >
    <menu-item :menus="menus"/>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useStore } from '@/store'
import MenuItem from './MenuItem.vue'

const store = useStore();

defineProps({
  collapsed: Boolean
})
//动态获取菜单
const menus = store.getters['menuStore/getMenus'];

</script>

<style lang="scss">
.el-menu {
  background-color: $menuBg;
  border: none;
  .el-sub-menu {
    .el-menu-item {
      background-color:$subMenuBg;
    }
  }
}
</style>
