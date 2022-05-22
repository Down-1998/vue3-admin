import Layout from '@/layout/index.vue'
import {
  RouteRecordRaw,
} from "vue-router";
const homeRouter:RouteRecordRaw= {
  path: '/',
  redirect: '/index',
  name: 'Index',
  component: Layout,
  meta: {
    title: '首页',
    icon: 'house',
    permission: "system:index",
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/index/Index.vue'),
      meta: {
        title: '首页',
        icon: 'house',
        permission: "system:index",
        index:0
      },
      
    },
  ],
}

export default homeRouter