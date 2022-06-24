import { defineStore } from 'pinia';
import { Itype } from './type'

export interface TabState{
    tabsList:Array<Itype>
    contextMenuTabId:string
}
export const tabStore = defineStore('table',{
    state:() =>({
        tabsList:[],
        contextMenuTabId:''
    }),
    getters:{
        getAddTabs(state:TabState){
            return state.tabsList;
        }
    },
    actions:{
        //添加选项卡,没有相同的就添加
        addTab(tab:Itype){
            const isSome = this.tabsList.some((item) => item.path === tab.path)
            if(!isSome){
                this.tabsList.push(tab);
            }
        },
        //删除选项卡
        removeTab(tabName:string){
            const index = this.tabsList.findIndex((item:Itype) =>{
                return item.path === tabName
            })
            this.tabsList.splice(index,1);
        },
        //右键保存tab菜单点击的tab(路径path)
        saveCurrentTabId(currMenuTabId:string){
            this.contextMenuTabId = currMenuTabId;
        },
        //删除所有tabs
        closeAlltabs(){
            this.tabsList = [];
            sessionStorage.removeItem('TABS_ROUTES');
        },
        //关闭其他Tabs(包含left right other)
        closeOtherTabs(action:string){
            if(action === 'other'){
                this.tabsList = this.tabsList.filter((item:Itype) =>{
                    return this.contextMenuTabId === item.path
                })
            }else if(action === 'left'){
                const index = this.tabsList.findIndex((item:Itype) => this.contextMenuTabId === item.path)
                this.tabsList.splice(0, index);
            }else if(action === 'right'){
                const index = this.tabsList.findIndex((item:Itype) => this.contextMenuTabId === item.path)
                this.tabsList.splice(index + 1);
            }
        }
    }
})