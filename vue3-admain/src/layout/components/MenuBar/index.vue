<template>
  <el-menu 
    default-active="/"
    active-text-colo="#409EFF"
    text-color="#fff"
    class="el-menu"
    :collapse="collapsed"
    >
    <menu-item :menus="menus"/>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import MenuItem from './MenuItem.vue'


defineProps({
  collapsed: Boolean
})

const menus = reactive([
  {
    path: '/',
    redirect: '/index',
    name: 'Index',
    meta: {
      title: '首页',
      icon: 'house',
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/Index.vue'),
        meta: {
          title: '首页',
          icon: 'house',
        },
      },
    ],
  },
  {
    path: '/user',
    redirect: '/user',
    name: 'User',
    meta: {
      title: '用户管理',
      affix: true,
      icon: 'UserFilled',
    }, children: [
      {
        path: 'manger',
        name: 'UserManger',
        component: () => import('@/views/user/User.vue'),
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
        },
      },
    ],
  },
  {
    path: '/storesLocation',
    redirect: '/storesLocation',
    name: 'storesLocation',
    meta: {
      title: '门店管理',
      icon: 'LocationInformation',
    },
    children: [
      {
        path: 'storesLocation',
        name: 'storesLocation',
        component: () => import('@/views/storesLocation/StoresLocation.vue'),
        meta: {
          title: '门店管理',
          icon: 'LocationInformation',
        },
      },
    ],
  }, {
    path: '/order',
    name: 'Order',
    meta: {
      title: '订单管理',
      icon: 'Notebook',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'orderQuery',
        name: 'orderQuery',
        component: () => import('@/views/orders/OrderQuery.vue'),
        meta: {
          title: '订单查询',
          icon: 'Notification',
        },
      }, {
        path: 'orderAction',
        name: 'orderAction',
        component: () => import('@/views/orders/OrderAction.vue'),
        meta: {
          title: '订单处理',
          icon: 'Money',
        },
      },
    ],
  }, {
    path: '/good',
    name: 'good',
    meta: {
      title: '商品管理',
      icon: 'TakeawayBox',
    }, children: [
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/goods/Goods.vue'),
        meta: {
          title: '商品种类',
          icon: 'ShoppingBag',
        },
      }, {
        path: 'goodQuery',
        name: 'goodQuery',
        component: () => import('@/views/goods/Category.vue'),
        meta: {
          title: '商品查询',
          icon: 'SoldOut',
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: 'system',
      icon: 'Wallet',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/system/Account.vue'),
        meta: {
          title: 'account',
          icon: 'User',
          roles: ['editor']
        }
      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/system/Group.vue'),
        meta: {
          title: 'group',
          icon: 'Refrigerator',
          roles: ['admin']
        }
      },
      {
        path: 'task',
        name: 'task',
        component: () => import('@/views/system/Task.vue'),
        meta: {
          title: 'task',
          icon: 'Clock',
          roles: ['editor']
        }
      },
      {
        path: 'Setting',
        name: 'Setting',
        component: () => import('@/views/system/Setting.vue'),
        meta: {
          title: '系统设置',
          icon: 'Setting',
          roles: ['admin']
        }
      }
    ]
  }])
</script>

<style lang="scss">
.el-menu {
  background-color: $menuBg;
  border: none;
  .el-sub-menu {
    .el-menu-item {
      background-color:$subMenuBg;
    }
  }
}
</style>
