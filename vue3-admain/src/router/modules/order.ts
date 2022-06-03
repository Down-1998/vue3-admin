import Layout from '@/layout/index.vue'
import i18n from '@/i18n'
import {
  RouteRecordRaw,
} from "vue-router";
const orderRouter:RouteRecordRaw =  {
    path: '/order',
    name: 'Order',
    component:Layout,
   
    meta: {
      title: 'menus.wOrderManger',
      icon: 'Notebook',
      permission: "system:order",
    },
    
    children: [
      {
        path: 'orderQuery',
        name: 'orderQuery',
        component:() => import('@/views/orders/OrderQuery.vue'),
        meta: {
          title: 'menus.wOrderQuery',
          icon: 'Notification',
          permission: 'system:order:orderInfo',
          index:4
        },
        
      },
      {
        path: 'orderAction',
        name: 'orderAction',
        component:() => import('@/views/orders/OrderAction.vue'),
        meta: {
          title: 'menus.wOrderAction',
          icon: 'Money',
          permission: 'system:order:orderManage',
          index:5
        },
        
      },
    ],
  }

 export default orderRouter