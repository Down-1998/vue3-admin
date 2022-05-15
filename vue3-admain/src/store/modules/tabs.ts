import { Module} from 'vuex'
import { Itype } from '../type'
import { RootState } from "../index";

export interface TabState{
    tabsList:Array<Itype>
    contextMenuTabId:string
}

export const tabStore:Module<TabState,RootState> = {
    namespaced:true,
    state(){
        return {
            tabsList:[],
            contextMenuTabId:''
        }
   },
   mutations:{
       //添加选项卡,没有相同的就添加
       addTab(state:TabState,tab:Itype){
           const isSome = state.tabsList.some((item) => item.path === tab.path)
           if(!isSome){
               state.tabsList.push(tab);
           }
       },
       //删除选项卡
       removeTab(state:TabState,tabName:string){
           const index = state.tabsList.findIndex((item:Itype) =>{
               return item.path === tabName
           })
           state.tabsList.splice(index,1);
       },
       //右键保存tab菜单点击的tab(路径path)
       saveCurrentTabId(store:TabState,currMenuTabId:string){
           store.contextMenuTabId = currMenuTabId;
       },
       //删除所有tabs
       closeAlltabs(store:TabState){
           store.tabsList = [];
           sessionStorage.removeItem('TABS_ROUTES');
       },
       //关闭其他Tabs(包含left right other)
       closeOtherTabs(store:TabState,action:string){
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
       getAddTabs(state:TabState){
           return state.tabsList;
       }
   }
}
