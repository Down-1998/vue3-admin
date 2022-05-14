<template>
  <el-tabs
    v-model="activeKey"
    type="card"
    @tab-click="ClickTabs"
    @tab-remove="removeTab"
    @contextmenu.prevent.native="openContextMenu($event)"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
      :closable='true'
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
  <ul v-show="contextMenuVisible" class="operationTabs" :style="{left:left + 'px',top:top + 'px'}">
      <li @click="closeAll">关闭所有</li>
      <li @click="closeOther('left')">关闭左边</li>
      <li @click="closeOther('right')">关闭右边</li>
      <li @click="closeOther('other')">关闭其他</li>
  </ul>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { onMounted ,computed, watch, ref,Ref } from "vue";
import { Itype} from '../../../store/type'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus';

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
        title:(meta.title) as string
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
const removeTab = (event:any) => {
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
        tabItem.forEach((tab: Itype) => {
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
//右键点击出来批量操作
const contextMenuVisible:Ref<boolean> = ref(false)
const left = ref('');
const top = ref('')
//批量操作tabs'
const openContextMenu = (event:any) =>{
   if(event.srcElement.id){
        let currentTabId = event.srcElement.id.split('-')[1];//拿到路径
        store.commit('saveCurrentTabId',currentTabId);
        contextMenuVisible.value = true
        left.value = event.clientX;
        top.value = event.clientY + 10
   }
    
}

//关闭所有
const closeAll = () => {
    store.commit('closeAlltabs');
     contextMenuVisible.value = false;
     router.push('/index');
}
//关闭其他
const closeOther = (params:string) =>{
    store.commit('closeOtherTabs',params);
     contextMenuVisible.value = false;
}
//监控删除列表,如有点击就会消失
watch(() => contextMenuVisible.value,()=>{
    if(contextMenuVisible.value){
        window.addEventListener('click',()=>{
            contextMenuVisible.value = false;
        })
    }else{
        window.removeEventListener('click',()=>{
            contextMenuVisible.value = false;
        })
    }
})

</script>

<style lang="scss" scoped>
.operationTabs{
    position: absolute;
    width: 100px;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 100;
    list-style: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.2);
    li{
        padding: 7px 16px;
        cursor: pointer;
        
        &:hover{
            background: #f2f2f2;
        }
        &:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3) {
            border-bottom: 1px solid #f2f2f2;
        }
    }
}
</style>
