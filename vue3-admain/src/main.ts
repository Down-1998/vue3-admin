import { createApp } from 'vue'
import App from './App.vue'
import * as ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import { createPinia } from 'pinia'
import router from './router'
import {store,key} from './store'
import i18n from './i18n'

const pinia = createPinia()
const app = createApp(App);
for (const name in ElIcons) {
   app.component(name,(ElIcons as any)[name])
}
app.use(router).use(store,key).use(pinia).use(i18n).mount('#app')

app.directive('btn',{
   //当元素北挂载到dom时候触发
   mounted(el,binding){
     
      if(!store.state.buttonStore.buttonList.includes(binding.value)){
         el.parentNode.removeChild(el)
      }
   }
})

declare module '@vue/runtime-core' {
   interface ComponentCustomProperties {
      $Alert:(a:string) => Promise<void>
      $Confirm:(a:string) => Promise<void>
      $Notify:any
   }
}
app.config.globalProperties.$Alert = ElementUI.ElMessageBox.alert
app.config.globalProperties.$Confirm = ElementUI.ElMessageBox.confirm
app.config.globalProperties.$Notify = ElementUI.ElNotification
