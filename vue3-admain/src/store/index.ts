import { createStore, Store, useStore as baseUseStore } from 'vuex';
import {InjectionKey } from 'vue'
import { tabStore, TabState } from "./modules/tabs";
import { AuthState, authStore } from "./modules/auth";
import { MenuState, menuStore } from './modules/menu';
import { ButtonState,buttonStore } from './modules/button';

export interface RootState {
    tabStore:TabState
    authStore:AuthState
    menuStore:MenuState
    buttonStore:ButtonState
}
export const key:InjectionKey<Store<RootState>> = Symbol();

export const store:Store<RootState> = createStore({
    modules:{
        tabStore,
        authStore,
        menuStore,
        buttonStore   
    }
})

//自定义组合式函数
export function useStore(){
    return baseUseStore(key)
}