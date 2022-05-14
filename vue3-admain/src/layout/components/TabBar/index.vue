<template>
  <el-tabs
    v-model="activeKey"
    type="card"
    @tab-click="ClickTabs"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
      closable="true"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { onMounted ,computed, watch, ref } from "vue";
import { Itype} from '@/store/type.ts'
import { useRoute, useRouter } from 'vue-router'

const store = useStore();
const route = useRoute();//路由信息
const router = useRouter();//路由实例


const tabsList = computed(() => {
    return store.getters.getAddTabs
})

const activeKey = ref('');

//添加tab
const addTab = () =>{
    const { meta, path } = route;
    const tab:Itype = {
        path,
        title:meta.title
    }
    store.commit('addTab',tab)

}

watch(() => route.path,()=>{
    activeKey.value = route.path;
    addTab();
})
//点击tabs
const ClickTabs = (event:any) => {
    router.push({
        path:event.props.name
    })
}

//移除tab
const removeTab = (event:string) => {
    if(tabsList.value.length === 1) {
         ElMessage({
            message: '选项卡至少保留一个',
            type: 'warning',
        })
        return
    }
    //如果删除的是当前页
    if(activeKey.value === event){
        tabsList.value.forEach((tab:Itype,index:number) => {
            if(tab.path === event){
                const nextTab = tabsList.value[index + 1] || tabsList.value[index - 1];
                if(nextTab){
                    activeKey.value = nextTab.path;
                }
            }
        })
    }
    store.commit('removeTab',event)
}

//刷新数据缓存
const refresh = () => {
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('TABS_ROUTES', JSON.stringify(tabsList.value))
    })
    let session = sessionStorage.getItem('TABS_ROUTES')
    if (session) {
        let tabItem = JSON.parse(session)
        tabItem.forEach((tab: Itab) => {
            store.commit('addTab', tab)
        })
    }
}

onMounted(() => {
    activeKey.value = route.path;
    //初始化页面生产tab
    addTab();
    //刷新保存数据
    refresh();
})

</script>

<style lang="scss" scoped>

</style>
