<template>
    <div>
    <el-row :gutter="24"
    style="display: flex; align-items: center;"
    >
      <el-col :span="18" :offset="0"> 
        <!-- 面包屑 -->
        <Breadcrumb />
      </el-col>
      <!-- 全屏 -->
      <el-col :span="1" style="margin-top:10px">
        <screen-full/>
      </el-col>
      <el-col :span="1" style="margin-top:35px" > 
      <!-- 中英文切换 -->
        <language-bar />
      </el-col>
      <el-col :span="4" :offset="0">
        <!-- 用户头像 -->
        <user-bar />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import UserBar from './UserBar.vue'
import LanguageBar from './LanguageBar.vue'
import ScreenFull from './Screenfull.vue';
</script>

<style scoped>
.el-dropdown{
  /* margin-top: 20px; */
}
</style>