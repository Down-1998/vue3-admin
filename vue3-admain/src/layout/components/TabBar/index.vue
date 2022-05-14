<template>
  <el-tabs
    v-model="activeKey"
    type="card"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, watch, ref } from "vue";
import { Itype} from '@/store/type.ts'
import { useRoute } from 'vue-router'

const store = useStore();
const route = useRoute();


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
</script>

<style lang="scss" scoped>

</style>
