<!--  -->
<template>
  <!-- <el-button @click="handleClick">按钮</el-button> -->
  <!-- 用户表格 -->
  <div>
    <el-button type='primary' class="add-button" @click="toAddUser">新增系统用户</el-button>
  </div>
   <!-- 新增用户form表单 -->
      <el-dialog :title="state.formTitle" v-model="state.userFormDialogVisible">
          <el-form
          ref="userForm"
          :model="state.userFormData"
          :rules="state.rules"
          label-width="100px"
          >
              <el-form-item label="用户名" prop="username">
                  <el-input v-model="state.userFormData.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="resetForm"> 重置</el-button>
                <el-button type="primary" @click="handelConfirm"> 确定</el-button>
              </el-form-item>

          </el-form>
      </el-dialog>
      <!-- 角色表单
       -->
       <el-dialog title="设置角色" v-model="state.showSetRoleDialog">
            <el-select @change="upRole" value="选择角色" placeholder="选择角色">
                <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
       </el-dialog>
       <!-- 系统用户表单 -->
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
              @change="(value:boolean | number | string)=> commitStatusChange(value,scope.row)"
              >
              </el-switch>
          </template>
        </el-table-column>
      <el-table-column label="操作" width="300px">
              <template #default="scope">
                  <el-button type='success' size="small" @click="toSetRole(scope.row.id)">授权</el-button>
                  <el-button type='primary' size="small" @click="resetPw(scope.row.id)">重置密码</el-button>
                  <el-button  type='info' size="small"  @click="toEditUser(scope.row)">编辑</el-button>
                  <el-button type='danger' size="small" @click="deleteUser(scope.row.id)">删除</el-button>
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

<script lang="ts">
  export default {
    name:'account'
  }
</script>
<script setup lang='ts'>
import { ComponentInternalInstance, getCurrentInstance, onMounted, reactive,Ref, ref } from 'vue'
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

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const state = reactive({
  users:[],
  currentPage:1,
  pageSize:10,//每页显示10条
  userFormDialogVisible:false,
  userFormData:{
   username:''
 },
 rules:{
   username:[
     {
       required:true,
       message:'请输入用户名',
       trigger:'blur'
     }
   ]
 },
 formTitle:'',
 showSetRoleDialog:false,
 currentUserId:0
})

interface Role {
  id:number,
  name:string
}

const roles:Ref<Array<Role>| null>  = ref(null)

//初始化
onMounted(() =>{
  getUsers()
  console.log('2222222');
  
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
//新增系统用户
const toAddUser = () =>{
  state.formTitle ='添加用户'
  state.userFormDialogVisible = true
}
//重置
const resetForm = () =>{
  state.userFormData = {
    username:''
  }
}
//确定添加或者修改
const handelConfirm = () =>{
  if(state.formTitle.startsWith('添加用户')) {
    addSysUser(state.userFormData).then(res=>{
      console.log(res);
      if(res.data == 1) {
        proxy?.$Alert('添加成功')
        getUsers()
        state.userFormDialogVisible = false
      }
      
  })
  } else if(state.formTitle.startsWith('修改用户')) {
    updateSysUser(state.userFormData).then(result =>{
       proxy?.$Alert('更新成功')
        getUsers()
       state.userFormDialogVisible = false
    })
  }
}
//删除
const deleteUser = (id:number) =>{
  proxy?.$Confirm("确认要删除当前用户吗?").then(()=>{
      deleteSysUsers(id).then(()=>{
        proxy?.$Notify.success({
          title:'删除成功',
          duration:500
        })
        getUsers()
      })
    })
}
//编辑
const toEditUser = (selecteUser:object) =>{
  state.userFormData = JSON.parse(JSON.stringify(selecteUser))
  state.formTitle = '修改用户'
  state.userFormDialogVisible = true
}
interface User {
  id:number,
  status:boolean
}
//改变状态
const commitStatusChange = (value:boolean | number | string,user:User) =>{
  proxy?.$Confirm(value===false ? '确定冻结用户?' : '确定激活用户?').then(()=>{
      updateStatus(user.id,user.status).then(()=>{
        proxy?.$Notify.success(value===false ? '已冻结' : '已激活')
      })
    })
}
//重置密码
const resetPw = (userId:number) =>{
  proxy?.$Confirm('重置该用户密码,请谨慎操作!').then(()=>{
    resetPassword(userId).then(()=>{
      proxy?.$Notify.success('密码已经重置成功,默认重置密码:123456')
    })
  })
}
//角色授权
const toSetRole = (userId:number) =>{
  getAllRoles().then(result=>{
    roles.value = result.data
    state.currentUserId = userId
    state.showSetRoleDialog = true
  })
}
// 确认设置角色
const upRole = (roleId:number) =>{
  setRole(state.currentUserId,roleId).then(result=>{
     if(result.data === 1) {
       proxy?.$Notify.success('角色设置成功')
       getUsers()
       state.showSetRoleDialog = false
     }
  })
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
.add-button{
  margin: 20px 0;
}
</style>