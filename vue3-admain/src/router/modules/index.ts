import goodsRouter from './goods'
import homeRouter from './home'
import orderRouter from './order'
import storeRouter from './store'
import systemRouter from './system'
import userRouter from  './user'
import {RouteRecordRaw} from 'vue-router'

export const asyncRoutes:RouteRecordRaw[] = [
    homeRouter,
    userRouter,
    goodsRouter,
    orderRouter,
    storeRouter,
    systemRouter,
    
]