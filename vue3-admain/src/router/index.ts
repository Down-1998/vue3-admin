
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'
import { store } from '@/store'
import { loginByToken } from '@/api/Auth'
//导入进度lib
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css';
import { authStore } from '@/pinia/authStore';


NProgress.configure({
  //动画方式 
  easing:'ease',
  //递增进度条的速度
  speed:500,
  //是否需要显示icon
  showSpinner:false,
  //自动递增的间隔
  trickleSpeed:200,
  //初始化的最小百分比
  minimum:0.3

})

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
    index?:number
    keepAlive?:boolean
  } 
}

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

//前置路由守卫
router.beforeEach((to,from,next) =>{
  const token = localStorage.getItem('token')
  NProgress.start();
  if(!store.state.authStore.token && !token){
    if(to.path.startsWith('/login')){
      next()
    }else{
      next('/login')
    }
  }else if(!store.state.authStore.token && token){
    loginByToken(token).then((res:any) =>{
      if(res.data.status){
        const useAuth = authStore();
        //用户信息
        // store.commit('authStore/addUserInfo',res.data)
        useAuth.userInfo = res.data
        useAuth.changePermission(res.data.permissions)
        //权限菜单
        // store.dispatch('menuStore/generateSystemMenus',res.data.permissions)
        //按钮权限
        // store.dispatch('buttonStore/generateButtons',res.data.permissions)
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

router.afterEach(() =>{
  NProgress.done();
})

export default router