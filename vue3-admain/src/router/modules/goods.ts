import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'


const goodsRouter:RouteRecordRaw = 
{
   path: '/good',
   
   name: 'good',
   component:Layout,
   meta: {
     title: '商品管理',
     icon: 'TakeawayBox',
     permission: "system:goods",
   },
  
   children: [
     {
       path: 'category',
       name: 'category',
       component:() => import('@/views/goods/Category.vue'),
       meta: {
        title: '商品种类',
         icon: 'ShoppingBag',
         permission: 'system:goods:goodsCategory',
         index:2
       },
       
     },
     {
       path: 'goodQuery',
       name: 'goodQuery',
       component:() => import('@/views/goods/Goods.vue'),
       meta: {
        
         title: '商品查询',
         icon: 'SoldOut',
         permission: 'system:goods:goodsInfo',
         index:3
       },
       
     },
   ],
 }

export default goodsRouter