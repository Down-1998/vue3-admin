<script setup lang="ts">
import { reactive,ref,onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import { getCode, login } from "@/api/Auth";
import { useStore } from "@/store/index";
import { ElMessage } from 'element-plus';

const codeUrl = ref('')
const router = useRouter();
const store = useStore();
//form表单
const loginForm = reactive({
  username:'',
  password:'',
  uuid:'',
  verifyCode:''
})

//表单校验
const loginRules = reactive({
  username:[
    {
      required:true,
      message:'用户名不能为空',
      trigger:'blur'
    },
    {
      pattern:/^[a-zA-Z0-9]{2,10}$/,
       message:'请输入2-10位的字母或者数字',
      trigger:'blur'
    }
  ],
  password:[
    {
      required:true,
      message:'密码不能为空',
      trigger:'blur'
    },
    {
      pattern:/^[a-zA-Z0-9]{2,10}$/,
      message:'请输入2-10位的字母或者数字',
      trigger:'blur'
    },
    {
      min:2,
      max:10,
      message:'请输入2-10位的字母或者数字',
      trigger:'blur'
    },
  ],
  verifyCode:[
    {
      required:true,
      message:'验证码不能为空',
      trigger:'blur'
    },{
      whitespace:true,
      message:'验证码不能为空格'
    }
  ]
})

//登陆提交
const handleLogin = async () =>{
  await store.dispatch('authStore/login',loginForm)
}
//token登陆
const handleToken = () =>{
  const token = localStorage.getItem('token');
  if(token !== null){
    store.dispatch('authStore/loginByToken',token)
    // router.push({path:'/index'})
  }
}

//点击刷新验证码
const getValidCode = () =>{
   getCode().then((res:any) => {
     if(res.code === 200){
       codeUrl.value = res.data.image;   
     }else{
       ElMessage({
            message: res.message,
            type: 'error',
        })
     }
  })
}
//初始化调用
onBeforeMount(() =>{
  getValidCode()
  handleToken()
})



</script>

<template>
  <div class="login-container">
    <!-- 背景vedio -->
    <video poster="@/assets/login/1.jpg" loop autoplay muted>
      <source src="@/assets/login/Particles.mp4" />
    </video>

    <div class="login-form">
      <!-- 标题 -->
      <header>
        <img src="@/assets/logo.png" />
        <h3>vue3-admin</h3>
      </header>
      <!-- form组件 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-icon>
            <user />
          </el-icon>
          <el-input placeholder="username" v-model="loginForm.username" type="text" />
        </el-form-item>
        <el-form-item prop="password">
          <el-icon >
            <lock />
          </el-icon>
          <el-input placeholder="password" v-model="loginForm.password" type="password" />
        </el-form-item>
        <el-form-item  prop="verifyCode" class="verify-item">
          
          <el-input
            v-model="loginForm.verifyCode"
            placeholder="验证码"
            type="verifyCode"
            style=" width: 40%; height:40px; display:inline-block; border: 1px solid rgba(255, 255, 255, 0.1);"
          ></el-input>
          <div style="margin-left: 10px;  display:inline-block; height:40px">
            <img :src="codeUrl" @click="getValidCode" alt=" " 
              style="width: 100%;height:100%;object-fit: cover; margin-bottom: -12px;"
             />
          </div>
        </el-form-item>
        <el-form-item style="border: none; background:none">
          <el-button type="primary" style="width:100%;  margin-bottom:30px;" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
// 隐藏滚动条
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: -1;
  }
  .login-form {
    width: 400px;
    height: 380px;
    padding: 4vh;
    margin: 20px;
    background: url("@/assets/login/login_form.png");
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    opacity: "0.2";

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        display: inline-block;
        width: 40px;
      }

      h1 {
        margin-bottom: 0;
        font-size: 24px;
        color: #fff;
        text-align: center;
      }
    }
    .el-form-item{
      margin-bottom: 30px;
    }
    .el-form-item__error{
      color: #f56c6c;
      font-size: 12px;
      line-height: 1;
      padding-top: 2px;
      position: absolute;
      top: 120%;
      left: 0;
    }
    .el-input {
      display: inline-block;
      height: 44px;
      width: 85%;
      margin-left: 0px;
       
      .el-input__wrapper{
         background: transparent;
         width: 100%;
         box-shadow:none;
      }
      input {
        height: 44px;
        line-height: 44px;
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $lightGray;
        caret-color: $loginCursorColor;
        -webkit-appearance: none;
        margin-left: 10px;

        &:-webkit-autofill {
          -webkit-text-fill-color: #fff !important;
        }
      }
    }

    .el-form-item {
      display: flex;
      flex-wrap: nowrap;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      padding-left: 10px;
    }

    .verify-item {
      padding-left: 0%;
     border: none; background:none
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $lightGray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $darkGray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}

</style>