import axios from "axios";
// 创建axios实例
const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});
// axios请求拦截器
// 一般进行token身份验证等
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

  return Promise.reject(e)
})

export default http;

