import axiosInstance from './axios'

//获取验证码图片
export function getCode(){
    return axiosInstance({
        url:'/auth/code',
        method:'GET',

    })
}

//用户密码登陆
export const login = (params:object) =>{
    return axiosInstance({
        url:'/auth/login',
        method:'POST',
        data:params
    })
}

//token登陆
export const loginByToken = (token:string) =>{
    return axiosInstance({
        url:'/auth/loginByToken?token='+token,
        method:'POST'
    })
}