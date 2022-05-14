<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index" :to="{ path: item.path }">{{ item.meta.title}}</el-breadcrumb-item>
            
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { useRoute,RouteLocationMatched } from 'vue-router'
import { ref,watch,Ref,onBeforeMount } from 'vue'

const route = useRoute();
const breadcrumb:Ref<RouteLocationMatched[]> = ref([])

onBeforeMount(() => {
    getBreadCrumb()
})

const getBreadCrumb = () =>{
    console.log(route.matched);
    let matched = route.matched.filter((item) => item.meta && item.meta.title && item.children.length !== 1) 
    const first = matched[0];
    if(first.path !== '/index'){
        matched = [{
            path:'/index',
            meta:{
                title:'首页',

            }
        } as any].concat(matched);
    }
    breadcrumb.value = matched;
}
//监测路由
watch(() => route.path,()=>{
    getBreadCrumb()
})
</script>

<style lang="scss" scoped>
.breadcrumb{
    margin-top: 6px;
}
</style>