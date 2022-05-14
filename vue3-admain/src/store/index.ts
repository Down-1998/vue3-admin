import { createStore } from 'vuex';
import { Itype} from './type'

interface Store{
    tabsList:Array<Itype>
    contextMenuTabId:string
}

export const store = createStore<Store>({
    state(){
         return {
             tabsList:[],
             contextMenuTabId:''
         }
    },
    mutations:{
        //添加选项卡,没有相同的就添加
        addTab(state:Store,tab:Itype){
            const isSome = state.tabsList.some((item) => item.path === tab.path)
            if(!isSome){
                state.tabsList.push(tab);
            }
        },
        //删除选项卡
        removeTab(state:Store,tabName:string){
            const index = state.tabsList.findIndex((item:Itype) =>{
                return item.path === tabName
            })
            state.tabsList.splice(index,1);
        },
        //右键保存tab菜单点击的tab(路径path)
        saveCurrentTabId(store:Store,currMenuTabId:string){
            store.contextMenuTabId = currMenuTabId;
        },
        //删除所有tabs
        closeAlltabs(store:Store){
            store.tabsList = [];
            sessionStorage.removeItem('TABS_ROUTES');
        },
        //关闭其他Tabs(包含left right other)
        closeOtherTabs(store:Store,action:string){
            if(action === 'other'){
                store.tabsList = store.tabsList.filter((item:Itype) =>{
                    return store.contextMenuTabId === item.path
                })
            }else if(action === 'left'){
                const index = store.tabsList.findIndex((item:Itype) => store.contextMenuTabId === item.path)
                store.tabsList.splice(0, index);
            }else if(action === 'right'){
                const index = store.tabsList.findIndex((item:Itype) => store.contextMenuTabId === item.path)
                store.tabsList.splice(index + 1);
            }
        }
    },
    getters:{
        getAddTabs(state:Store){
            return state.tabsList;
        }
    }
})