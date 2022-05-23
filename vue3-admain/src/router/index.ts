
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'
import { store } from '@/store'
import { loginByToken } from '@/api/Auth'

const routes:Array<RouteRecordRaw> = [
  {
    path:'/login',
    component: () => import('@/views/login/Login.vue')
  }, 
]
//声明的meta类型
declare module 'vue-router' {
  interface RouteMeta{
    title:string
    icon?:string
    permission:string
  } 
}

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

//前置路由守卫
router.beforeEach((to,from,next) =>{
  const token = localStorage.getItem('token')
  if(!store.state.authStore.token && !token){
    if(to.path.startsWith('/login')){
      next()
    }else{
      next('/login')
    }
  }else if(!store.state.authStore.token && token){
    loginByToken(token).then((res:any) =>{
      if(res.data.status){
        //用户信息
        store.commit('authStore/addUserInfo',res.data)
        //权限菜单
        store.dispatch('menuStore/generateSystemMenus',res.data.permissions)
        //按钮权限
        store.dispatch('buttonStore/generateButtons',res.data.permissions)
        if(to.matched.length === 0){
          router.push(to.path)
        }
        next();
      }
    })
  }
  else{
    next()
  }
  
})

export default router