import axios from "axios";
import router from "@/router";
// 创建axios实例
import { useUserStore } from '@/stores/userStore'

const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});
// axios请求拦截器
// 一般进行token身份验证等
//这段代码的作用是在发送请求前，从用户信息中获取token，并将其添加到请求的Authorization头部中，以实现身份验证的功能
http.interceptors.request.use(config => {
  const userStore = useUserStore();
  const token = userStore.userInfo.token;
  if(token){
      config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))
//   axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  ElMessage({
      type: 'error',
      message: e.response.data.message
  })
//401token失效处理
const userStore = useUserStore();
// token失效时，清空本地用户数据并返回到登录界面
if(e.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
}
  return Promise.reject(e)
})

export default http;

