import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'
// import i18n from '@/i18n'

const userRouter:RouteRecordRaw = {
    path: '/user',
    redirect: '/user/manger',
    name: 'User',
    component:Layout,
    meta: {
      title: '用户管理',
      icon:'UserFilled',
      permission: "system:user",
    },
    children: [
      {
        path: 'manger',
        name: 'UserManger',
        component:() => import('@/views/user/User.vue'),
        meta: {
          title: '用户管理',
          icon:'UserFilled',
          permission: "system:user",
          index:1
        },
        
      },
    ],
  }

 export default userRouter