import axios from "axios";
// import { ElMessage } from 'element-plus';

const axiosInstance = axios.create({
    baseURL:'/api'
})

axiosInstance.interceptors.response.use(response => {
    const res = response.data;
    if(res.code === 200){
        return res;
    }else if(res.code === 10001){
        // ElMessage.error('登陆状态异常,请重新登陆')
        return res;
    }else if(res.code === 10002){
        // ElMessage.error('权限不足');
        return res;
    }else{
        // ElMessage.error(res.message);
        return res;
    }
})

//request拦截器
axiosInstance.interceptors.request.use(request =>{
    if(request.headers){
        request.headers['token'] = localStorage.getItem('token') || '0';
        request.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return request;
    }
},
error =>{
    return Promise.reject(error)
}
)
export default axiosInstance;