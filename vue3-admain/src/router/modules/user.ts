import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'
import i18n from '@/i18n'

const userRouter:RouteRecordRaw = {
    path: '/user',
    redirect: '/user/manger',
    name: 'User',
    component:Layout,
    meta: {
      title: 'menus.wUserManger',
      icon:'UserFilled',
      permission: "system:user",
    },
    children: [
      {
        path: 'manger',
        name: 'UserManger',
        component:() => import('@/views/user/User.vue'),
        meta: {
          title: 'menus.wUserManger',
          icon:'UserFilled',
          permission: "system:user",
        },
        
      },
    ],
  }

 export default userRouter