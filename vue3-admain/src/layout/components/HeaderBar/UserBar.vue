<template>
    <div class="userInfo">
        <el-dropdown>
            <div>
                <img  style="width: 35px; height: 35px; border-radius: 50%;" :src="userInfo.avatar" alt="">
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleLogout">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <!-- 其他 -->
        <el-row>
            <el-col>
                <span
                    style="color: #212121; left: -12px;top: 20px; font-size: 15px;position: relative;"
                >{{ userInfo.username }}</span>
            </el-col>
            <el-col>
                <span
                    style="color: gray; bottom: 15px; left:-10px; font-size: 8px;position: relative;"
                >{{ userInfo.roleName }}</span>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'
import { authStore } from '@/pinia/authStore';

const store = useStore();
const useAuthStore = authStore();
const userInfo = computed(() =>{
    // return store.state.authStore.userInfo
    return useAuthStore.userInfo;
})
const handleLogout = () =>{
    localStorage.removeItem('token')
    location.reload()
}

</script>

<style lang="scss" scoped>
.userInfo{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}
</style>