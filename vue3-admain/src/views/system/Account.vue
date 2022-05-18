<!--  -->
<template>
  <!-- <el-button @click="handleClick">按钮</el-button> -->
  <!-- 用户表格 -->
  <div class="table-containier">
    <el-table
      :border="true" 
      :data="state.users"
    >
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column prop="roleName" label="角色"></el-table-column>
      <el-table-column label="状态">
          <template #default="scope">
              <el-switch
              v-model="scope.row.status"
              active-color="green"
              inactive-color ="red"
              >

              </el-switch>
          </template>
        </el-table-column>
      <el-table-column label="操作" width="300px">
              <template #default="scope">
                  <el-button type='success' size="small" >授权</el-button>
                  <el-button type='primary' size="small" >重置密码</el-button>
                  <el-button  type='info' size="small" >编辑</el-button>
                  <el-button type='danger' size="small">删除</el-button>
              </template>
           </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { ComponentInternalInstance, getCurrentInstance, onMounted, reactive } from 'vue'
import {
  addSysUser,
  deleteSysUsers,
  getAllSysUsers,
  updateStatus,
  updateSysUser,
  resetPassword,
  setRole
} from '@/api/system/user'
import { getAllRoles } from '@/api/system/role'
import { stat } from 'fs';

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const state = reactive({
  users:[]
})
//初始化
onMounted(() =>{
  getUsers()
})
//获取系统用户列表
const getUsers = ()=>{
  getAllSysUsers().then((res:any) => {
    console.log(res);
    state.users = res.data
    
  })
}
const handleClick = () =>{
  proxy?.$Alert('12312')
  
}
</script>
<style lang='scss' scoped>
.table-containier{
  margin:  0 10px;
  text-align: left;
}
</style>