import { createStore } from 'vuex';
import { Itype} from './type'

interface Store{
    tabsList:Array<Itype>
}

export const store = createStore<Store>({
    state(){
         return {
             tabsList:[]
         }
    },
    mutations:{
        //添加选项卡,没有相同的就添加
        addTab(state:Store,tab:Itype){
            const isSome = state.tabsList.some((item) => item.path === tab.path)
            if(!isSome){
                state.tabsList.push(tab);
            }
        }
    },
    getters:{
        getAddTabs(state:Store){
            return state.tabsList;
        }
    }
})