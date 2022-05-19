<!--  -->
<template>
  <!-- <el-button @click="handleClick">按钮</el-button> -->
  <!-- 用户表格 -->
  <div class="table-containier">
    <el-table
      :border="true" 
      :data="state.users.slice((state.currentPage-1)*state.pageSize,state.currentPage*state.pageSize)"
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
    <!-- 分页 -->
    <el-row class="pagination">
       <el-pagination 
        background  
        layout="total, sizes, prev, pager, next,jumper" 
        :total="state.users.length" 
        :current-page="state.currentPage"
        :page-sizes="[2,4,6,10,20]"
        @current-change="handelCurrentChange"
        @size-change="handelSizeChange"
       />
    </el-row>
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
  users:[],
  currentPage:1,
  pageSize:2,//每页显示10条
  userFormDialogVisible:false,
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
//改变页
const handelCurrentChange = (val:number) =>{
  state.currentPage = val
}
//改变每页展示条数
const handelSizeChange = (val:number) =>{
  state.pageSize = val
}
</script>
<style lang='scss' scoped>
.table-containier{
  margin:  0 10px;
  text-align: left;
}
.pagination{
  float: right;
  margin-top: 20px;
}
</style>