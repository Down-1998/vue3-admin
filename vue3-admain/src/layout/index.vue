<template>
  <div class="layout">
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <logo-bar :collapsed="collapsed" />
        <menu-bar :collapsed="collapsed" />
      </el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="24" style="width:100%; display: flex; align-items: center;">
            <!-- 侧边栏按钮 -->
            <el-col :span="1">
              <el-icon style="font-size: 26px; margin-right: 15px; margin-top: 30px;" @click="() => (collapsed = !collapsed)">
                <component :is="collapsed ? Expand : Fold" />
              </el-icon>
            </el-col>
            <el-col :span="23">
              <header-bar />
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <!-- 选项卡 -->
          <tab-bar />
          <!-- 内容展示 -->
          <APPMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LogoBar from './components/LogoBar/index.vue'
import MenuBar from './components/MenuBar/index.vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref, computed } from 'vue'
import { isMobile } from '../utils/isMobile';
import APPMain from './components/APPMain/APPMain.vue';
import HeaderBar from './components/HeaderBar/index.vue';
import TabBar from "./components/TabBar/index.vue";

const collapsed = ref<boolean>(false)
const autoWidth = computed(() => {
  if (collapsed.value && isMobile()) {
    return "0px"
  } else if (collapsed.value) {
    return "64px"
  } else {
    return "200px"
  }
})
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;

  .el-header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: $menuBg;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    width: 200px;
    height: 100%;
    overflow: hidden;
    // 侧边栏折叠动画速度
    transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>