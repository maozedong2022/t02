// 基于 axios 封装的请求模块
import ajax from 'axios'
// 新建一个新的axios实例
const axios = ajax.create({
  baseURL: 'http://toutiao.itheima.net', // 基地址
  timeout: 20000
})

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params, data, headers }) => {
  return axios({
    url: url,
    method: method,
    params: params,
    data: data,
    headers: headers
  })

}
