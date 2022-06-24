import { defineStore } from 'pinia';
import { login,loginByToken } from "@/api/Auth";
import router from '@/router'
import { ElMessage } from 'element-plus';
import { UserType } from './type'
import { menuStore } from './menuStore';
import { buttonStore } from './buttonStore';


export interface AuthState {
    token:string
    userInfo:UserType
    roles:string[]
}
export const authStore = defineStore('auth',{
    state:():AuthState =>({
        token:'',
        userInfo:{
            avatar: '',
            username: '',
            roleName: '',
            status: 1
        },
        roles:[]
    }),
    getters:{
        getToken(state:AuthState){
            return state.token
        }
    },
    actions:{
        //账号密码登陆
        login(requestUser:API.loginForm){
            login(requestUser).then((result:any) =>{
                if(result.code === 200){
                    this.userInfo = result.data;
                    this.roles.push(result.data.roleId)
                    this.token = result.data.token
                    localStorage.setItem('token',result.data.token)
                    const useMenuStore = menuStore();
                    const useButtonStore = buttonStore();
                    useMenuStore.generateSystemMenus(result.data.permissions)
                    useButtonStore.generateButtons(result.data.permissions)
                    // store.dispatch('menuStore/generateSystemMenus',result.data.permissions)
                    // store.dispatch('buttonStore/generateButtons',result.data.permissions)
                    if (result.data.status) {
                        router.push({ path: '/index' })
                    }
                }else{
                    ElMessage({
                        message: result.message,
                        type: 'error',
                    })
                }
            },)
        },
        //token登陆
        loginByToken(token:string){
            this.token = token;
            loginByToken(token).then((result:any) => {
                if(result.code === 200){
                    this.userInfo = result.data;
                    localStorage.setItem('token',result.data.token)
                    const useMenuStore = menuStore();
                    const useButtonStore = buttonStore();
                    useMenuStore.generateSystemMenus(result.data.permissions)
                    useButtonStore.generateButtons(result.data.permissions)
                    // store.dispatch('menuStore/generateSystemMenus',result.data.permissions)
                    // store.dispatch('buttonStore/generateButtons',result.data.permissions)
                    if (result.data.status) {
                        router.push({ path: '/index' })
                    }
                }else{
                    ElMessage({
                        message: result.message,
                        type: 'error',
                    })
                }
            }).catch(() =>{
                localStorage.removeItem('token')
            })
        },
        changePermission(permission:string[]){
            const useMenuStore = menuStore();
            const useButtonStore = buttonStore();
            useMenuStore.generateSystemMenus(permission)
            useButtonStore.generateButtons(permission)
        }   
    }
})