<!--  -->
<!-- <template>
  <div>
    <div>User</div>
  </div>
</template>

<script setup lang='ts'>
</script>
<style lang='scss' scoped>
</style> -->
<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="上次登录时间" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="地址" />
    <el-table-column prop="role" label="角色" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column label="操作" width="300px">
      <template #default="scope">
          <el-button type='success' size="small">授权</el-button>
          <el-button  type='info' size="small" >编辑</el-button>
          <el-button type='danger' size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
     <div class="user-pagination">
       <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
     </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const tableData = [
  {
    date: '2022-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    role:'管理员',
    phone:'18858585857'
  },
  {
    date: '2022-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    role:'管理员',
    phone:'18858585857'
  },
  {
    date: '2022-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    role:'管理员',
    phone:'18858585857'
  },
  {
    date: '2022-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    role:'管理员',
    phone:'18858585857'
  },
  {
    date: '2022-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    role:'管理员',
    phone:'18858585857'
  },
  {
    date: '2022-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    role:'管理员',
    phone:'18858585857'
  },
  
]
</script>
<style lang="scss" scoped>
.user-pagination{
  margin-top: 20px;
}
</style>