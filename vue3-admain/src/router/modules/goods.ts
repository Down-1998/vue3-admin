import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'


const goodsRouter:RouteRecordRaw = 
{
   path: '/good',
   
   name: 'good',
   component:Layout,
   meta: {
     title: 'menus.wGoodsManger',
     icon: 'TakeawayBox',
     permission: "system:goods",
   },
  
   children: [
     {
       path: 'category',
       name: 'category',
       component:() => import('@/views/goods/Category.vue'),
       meta: {
         title: 'menus.wGoodsInfo',
         icon: 'ShoppingBag',
         permission: 'system:goods:goodsCategory'
       },
       
     },
     {
       path: 'goodQuery',
       name: 'goodQuery',
       component:() => import('@/views/goods/Goods.vue'),
       meta: {
         title: 'menus.wGoodsCategory',
         icon: 'SoldOut',
         permission: 'system:goods:goodsInfo',
       },
       
     },
   ],
 }

export default goodsRouter