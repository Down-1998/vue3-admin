import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import router from './router'
import {store,key} from './store'

const app = createApp(App);
for (const name in ElIcons) {
   app.component(name,(ElIcons as any)[name])
}
app.use(router).use(store,key).mount('#app')
