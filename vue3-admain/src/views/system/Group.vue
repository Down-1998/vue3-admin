<!--  -->
<template>
  <div>
    <!-- 添加角色 -->
    <div class="role-button">
       <el-button type="primary" plain @click="toAdd">添加角色</el-button>
    </div>
    <!-- 添加和修改弹窗 -->
    <el-dialog :title="state.formTitle" v-model="state.dialogVisible">
      <el-form ref="elForm" :model="state.formData" :rules="state.rules" label-width="100px">
        <el-form-item label="角色名称" prop="name">
          <el-input
            v-model="state.formData.name"
            placeholder="请输入角色名称"
            :maxlength="20"
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            v-model="state.formData.description"
            placeholder="请输入角色描述"
            :maxlength="40"
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button  @click="resetForm" >重置</el-button>
            <el-button type="primary" @click="handelConfirm">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 角色授权弹窗 -->
    <el-dialog 
      title="角色授权" 
      v-model="state.showSetPermissionDialog"
      destroy-on-close
    >
        <el-form>
          <el-form-item>
            <el-tree
              :data="state.permissionTree"
              show-checkbox
              :props="state.defaultProps"
              node-key="permission"
              :default-checked-keys="state.permissions"
              ref="permissionRef"
            >
            </el-tree>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetChecked">清空</el-button>
            <el-button type="primary" @click="setPermission">确认</el-button>
          </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 角色table表单 -->
    <div class="group-container">
      <el-table :data="state.roles" :border="true" >
        <el-table-column prop="name" label="角色名称"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="success" size="small" @click="toSetpermissions(scope.row)">授权</el-button>
            <el-button type="info"  size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="danger"  size="small" @click="delRoles(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ComponentInternalInstance, getCurrentInstance, onMounted, reactive, ref} from 'vue';
import permissionTree from '@/router/permissionTree'
import type { ElTree } from 'element-plus'
import { deleteRoles, getAllRoles, updateRole, updateRolePermission, addRole, getPermissionsOfRole } from '@/api/system/role'
const { proxy } = getCurrentInstance() as ComponentInternalInstance

const state = reactive({
  roles: [],
  formTitle: '',
  dialogVisible: false,//添加或者删除弹框
  formData: {
    id: 0,
    name: '',
    description: ''
  },
  rules: {
    name: [{
      required: true,
      message: '请输入角色名称',
      trigger: 'blur'
    }],
    description: [],
  },
   showSetPermissionDialog:false,//角色授权弹框
   permissionTree:permissionTree,
   defaultProps:{
     id:'title',
     label:'title',
     children:'children'
   },
   permissions:[]
})
const permissionRef = ref<InstanceType<typeof ElTree>>()

//初始化
onMounted(() => {
  _getAllRoles()
})

// 获取所有角色数据
const _getAllRoles = () => {
  getAllRoles().then(result => {
    state.roles = result.data

  })
}
//添加按钮
const toAdd = () =>{
  state.dialogVisible = true
  state.formTitle = '添加角色'
  resetForm()
}

//角色授权
const toSetpermissions = (selecteRole:any) =>{
  state.permissions=[]
  state.formData = JSON.parse(JSON.stringify(selecteRole))
    state.showSetPermissionDialog = true
    getPermissionsOfRole(selecteRole.id).then(result=>{
      console.log(result)
      state.permissions = result.data
    })
}
//角色编辑
const edit = (selecteRole:object) =>{
  state.formData = JSON.parse(JSON.stringify(selecteRole))
  state.dialogVisible = true;
  state.formTitle = '更新角色'
}
//角色删除
const delRoles = (id:number) =>{
  proxy?.$Confirm('确认要删除角色吗?').then(()=>{
      deleteRoles([id]).then(()=>{
        proxy?.$Notify.success('删除成功')
        _getAllRoles()
      })
    }).catch(()=>{
     
    })
}
//添加和修改弹框重置
const resetForm = () =>{
  state.formData = {
    id: 0,
    name: '',
    description: ''
  }
}
//添加和修改弹框确定
const handelConfirm = () =>{
  if(state.formTitle === '添加角色') {
    addRole(state.formData).then(()=>{
        proxy?.$Notify.success('添加角色成功')
        _getAllRoles()
        state.dialogVisible = false
    })
  } else if(state.formTitle === '更新角色') {
    updateRole(state.formData).then(()=>{
      proxy?.$Notify.success('更新角色成功')
      _getAllRoles()
        state.dialogVisible = false
    })
  }
}

//角色授权树形控件清空操作
const resetChecked = () =>{
  permissionRef.value!.setCheckedKeys([],false)
}
//角色授权树形控件确认按钮
const setPermission = () =>{
  let nodes = permissionRef.value!.getCheckedNodes(false, false)
  console.log(nodes)
  let permissions:InstanceType<typeof ElTree>[] = []
  nodes.forEach(node =>{
    if(node.permission) {
       permissions.push(node.permission)
    }
  })
  let vo = {
    roleId:state.formData.id,
    permissions:permissions
  }
  updateRolePermission(vo).then(()=>{
    proxy?.$Notify.success("修改成功")
    state.showSetPermissionDialog = false
  })
}

</script>
<style lang='scss' scoped>
.group-container{
  margin: 5px 10px; 
  text-align: left;
}
.role-button{
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>