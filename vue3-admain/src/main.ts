import { createApp } from 'vue'
import App from './App.vue'
import * as ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import router from './router'
import {store,key} from './store'

const app = createApp(App);
for (const name in ElIcons) {
   app.component(name,(ElIcons as any)[name])
}
app.use(router).use(store,key).mount('#app')

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
