import { createStore } from 'vuex';

interface Store{
    count:number
}

export const store = createStore<Store>({
    state(){
         return {
             count:0
         }
    },
    mutations:{
        add(state){
            state.count++;
        }
    }
})