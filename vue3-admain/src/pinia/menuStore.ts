import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router'
import router from '@/router';
import { asyncRoutes } from '@/router/modules'

export interface MenuState {
    menuList:RouteRecordRaw[]
}
function hasPermission(perms:string[],needPermission:string){
    for (let i = 0; i < perms.length; i++) {
        if (perms[i].startsWith(needPermission)) {
            return true
        }
    }
    return false
}

function filterRouter (routes:RouteRecordRaw[],perms:string[]){
    const res:RouteRecordRaw[] = [];
    routes.forEach(route => {
        if (route.children) {
            route.children = filterRouter(route.children, perms)
            if (route.children.length > 0) {
                res.push(route)
            }
        } else {
            if (route.meta!.permission) {
                if (hasPermission(perms, route.meta!.permission)) {
                    res.push(route)
                }
            } else {
                res.push(route)
            }
        }


    })
        return res
}
export const menuStore = defineStore('menu',{
   state:():MenuState =>({
        menuList:[]
   }),
   getters:{
        getMenus:state => state.menuList
    },
    actions:{
        generateSystemMenus(perm:string[]){
            let routers = filterRouter(asyncRoutes,perm)
            //添加动态路由
            routers.forEach((route) =>{
                //二级menu调成一级menu
                if(route.redirect == null && route.children?.length === 1){
                    route.redirect = route.path + '/' + route.children[0].path;
                    route.meta = route.children[0].meta
                }
                router.addRoute(route)
            })
            //添加动态菜单
            // commit('setMenus',routers)
            this.menuList = routers;
        }
    }
})