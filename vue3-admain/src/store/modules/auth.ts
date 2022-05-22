import { Module } from 'vuex'
import { RootState } from "../index";
import { login,loginByToken } from "@/api/Auth";
import { UserType } from '../type'
import router from '@/router'
import { ElMessage } from 'element-plus';
import { store } from '@/store';

export interface AuthState {
    token:string
    userInfo:UserType
    roles:string[]
}

export const authStore:Module<AuthState,RootState> = {
    namespaced:true,
    state:():AuthState =>(
        {
            token:'',
            userInfo:{
                avatar: '',
                username: '',
                roleName: '',
                status: 1
            },
            roles:[]
        }
    ),
    mutations:{
        addToken(state:AuthState,token:string){
            state.token = token;
        },
        addUserInfo(state:AuthState,userinfo:UserType) {
            state.userInfo = userinfo
        }
    },
    getters:{
        getToken(state:AuthState){
            return state.token
        }
    },
    actions:{
        //账号密码登陆
        login({commit,state,dispatch},requestUser){
            login(requestUser).then((result:any) =>{
                if(result.code === 200){
                    state.userInfo = result.data;
                    commit('addToken',result.data.token);
                    localStorage.setItem('token',result.data.token)
                    store.dispatch('menuStore/generateSystemMenus',result.data.permissions)
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
        loginByToken({commit,state,dispatch},token){
            commit('addToken',token);
            loginByToken(token).then((result:any) => {
                if(result.code === 200){
                    state.userInfo = result.data;
                    localStorage.setItem('token',result.data.token)
                    store.dispatch('menuStore/generateSystemMenus',result.data.permissions)
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
        }   
    }
}