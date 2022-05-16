<template>
    <div>
    <el-row :gutter="24"
    style="display: flex; align-items: center;"
    >
      <el-col :span="20" :offset="0"> 
        <!-- 面包屑 -->
        <Breadcrumb />
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
</script>

<style scoped>
</style>