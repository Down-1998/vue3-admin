import { Module } from 'vuex'
import { RootState } from '../index'

export interface ButtonState {
    buttonList:string[]
}

export const buttonStore:Module<ButtonState,RootState> = {
    namespaced:true,
    state:():ButtonState => ({
        buttonList:[]
    }),
    mutations:{
        addButton(state:ButtonState,buttons){
            state.buttonList = buttons
        }
    },
    getters:{
        getButtons:(state) => state.buttonList
    },
    actions:{
        generateButtons({state,commit},buttons:string[]){
            let bList:string[] = [];
            buttons.forEach(button =>{
                if(button.match(/:/g)?.length === 3){
                    bList.push(button)
                }
            })
            commit('addButton',bList)
        }
    }
}