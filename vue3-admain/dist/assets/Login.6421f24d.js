import{d as F,r as A,u as E,a as D,b as _,o as k,c as g,E as w,e as x,f as V,g as I,h as S,i as a,j as e,k as u,w as s,_ as U,l as j,m as q,n as N}from"./index.4a8ba78c.js";import{E as R,a as T}from"./el-form-item.988b8794.js";var z="/assets/1.a9926957.jpg",L="/assets/Particles.388b395c.mp4";const M={class:"login-container"},Z=a("video",{poster:z,loop:"",autoplay:"",muted:""},[a("source",{src:L})],-1),$={class:"login-form"},P=a("header",null,[a("img",{src:U}),a("h3",null,"vue3-admin")],-1),G={style:{"margin-left":"10px",display:"inline-block",height:"40px"}},H=["src"],J=N("\u767B\u5F55"),W=F({setup(K){const d=A("");E();const m=D(),o=_({username:"",password:"",uuid:"",verifyCode:""}),f=_({username:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{2,10}$/,message:"\u8BF7\u8F93\u51652-10\u4F4D\u7684\u5B57\u6BCD\u6216\u8005\u6570\u5B57",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{2,10}$/,message:"\u8BF7\u8F93\u51652-10\u4F4D\u7684\u5B57\u6BCD\u6216\u8005\u6570\u5B57",trigger:"blur"},{min:2,max:10,message:"\u8BF7\u8F93\u51652-10\u4F4D\u7684\u5B57\u6BCD\u6216\u8005\u6570\u5B57",trigger:"blur"}],verifyCode:[{required:!0,message:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{whitespace:!0,message:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A\u683C"}]}),h=async()=>{await m.dispatch("authStore/login",o)},y=()=>{const t=localStorage.getItem("token");t!==null&&m.dispatch("authStore/loginByToken",t)},p=()=>{j().then(t=>{t.code===200?(d.value=t.data.image,o.uuid=t.data.uuid):q({message:t.message,type:"error"})})};return k(()=>{p(),y()}),(t,r)=>{const C=g("user"),c=w,i=x,n=R,B=g("lock"),v=V,b=T;return I(),S("div",M,[Z,a("div",$,[P,e(b,{ref:"loginFormRef",model:u(o),rules:u(f)},{default:s(()=>[e(n,{prop:"username"},{default:s(()=>[e(c,null,{default:s(()=>[e(C)]),_:1}),e(i,{placeholder:"username",modelValue:u(o).username,"onUpdate:modelValue":r[0]||(r[0]=l=>u(o).username=l),type:"text"},null,8,["modelValue"])]),_:1}),e(n,{prop:"password"},{default:s(()=>[e(c,null,{default:s(()=>[e(B)]),_:1}),e(i,{placeholder:"password",modelValue:u(o).password,"onUpdate:modelValue":r[1]||(r[1]=l=>u(o).password=l),type:"password"},null,8,["modelValue"])]),_:1}),e(n,{prop:"verifyCode",class:"verify-item"},{default:s(()=>[e(i,{modelValue:u(o).verifyCode,"onUpdate:modelValue":r[2]||(r[2]=l=>u(o).verifyCode=l),placeholder:"\u9A8C\u8BC1\u7801",type:"verifyCode",style:{width:"40%",height:"40px",display:"inline-block",border:"1px solid rgba(255, 255, 255, 0.1)"}},null,8,["modelValue"]),a("div",G,[a("img",{src:d.value,onClick:p,alt:" ",style:{width:"100%",height:"100%","object-fit":"cover","margin-bottom":"-12px"}},null,8,H)])]),_:1}),e(n,{style:{border:"none",background:"none"}},{default:s(()=>[e(v,{type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:h},{default:s(()=>[J]),_:1})]),_:1})]),_:1},8,["model","rules"])])])}}});export{W as default};
