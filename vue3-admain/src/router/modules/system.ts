import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'
// import i18n from '@/i18n'

const systemRouter:RouteRecordRaw =  {
    path:'/system',
    name:'system',
    component:Layout,
    redirect:'/system/account' || '/system/group' || '/system/task' || '/system/Setting',
    meta:{
      title:'system',
      icon:'Wallet',
      permission: "system:admin",
    },
    
    children:[
      {
        path:'account',
        name:'account',
        component:() => import('@/views/system/Account.vue'),
        meta:{
          title:'account',
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
          title:'group',
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
          title:'task',
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
          title:'系统设置',
          icon:'Setting',
          permission: 'system:admin:config',
          index:10
        },
        
      }
    ]

  }

 export default systemRouter