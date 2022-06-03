import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'
import i18n from '@/i18n'

const systemRouter:RouteRecordRaw =  {
    path:'/system',
    name:'system',
    component:Layout,
    redirect:'/system/account' || '/system/group' || '/system/task' || '/system/Setting',
    meta:{
      title:'menus.wSystemAdmin',
      icon:'Wallet',
      permission: "system:admin",
    },
    
    children:[
      {
        path:'account',
        name:'account',
        component:() => import('@/views/system/Account.vue'),
        meta:{
          title:'menus.wSystemManger',
          icon:'User',
          permission: "system:admin:sysUser",
          index:7,
          keepAlive:true
        },
        

      },
      {
        path:'group',
        name:'group',
        component:() => import('@/views/system/Group.vue'),
        meta:{
          title:'menus.wSystemRole',
          icon:'Refrigerator',
          permission: "system:admin:role",
          index:8,
          keepAlive:true
        },
        
      }, {
        path:'task',
        name:'task',
        component:() => import('@/views/system/Task.vue'),
        meta:{
          title:'menus.wSystemTask',
          icon:'Clock',
          permission: "system:admin:timingTask",
          index:9
        },
        

      },
      {
        path:'Setting',
        name:'Setting',
        component:() => import('@/views/system/Setting.vue'),
        meta:{
          title:'menus.wSystemSetting',
          icon:'Setting',
          permission: 'system:admin:config',
          index:10
        },
        
      }
    ]

  }

 export default systemRouter