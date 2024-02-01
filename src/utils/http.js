import axios from "axios";
// 创建axios实例
const http = axios.create({
    baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})
// axios请求拦截器
// 一般进行token身份验证等
http.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
//   axios响应式拦截器
// 进行错误的统一提示，token失效的处理等
http.interceptors.response.use(res =>{ return res.data},e => Promise.reject(e))

export default http