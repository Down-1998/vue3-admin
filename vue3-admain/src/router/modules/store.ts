import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from 'vue-router'
// import i18n from '@/i18n'
const storeRouter:RouteRecordRaw = {
    path: '/stores',
    redirect: '/stores/Location',
    name: 'storesLocation',
    component:Layout,
    meta: {
        title: '门店管理',
        icon:'LocationInformation',
        permission: "system:store",
    },
    children: [
      {
        path: 'Location',
        name: 'storesLocation',
        component:() => import('@/views/storesLocation/StoresLocation.vue'),
        meta: {
            title: '门店管理',
            icon:'LocationInformation',
            permission: "system:store",
            index:6
        },
        
      },
    ],
  }

 export default storeRouter