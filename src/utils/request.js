import axios from 'axios'
import store from '../store/index'
import { pickBy } from 'lodash-es'

const identityNull = (value, key) => (value === false || value === 0 || value)
// create an axios instance
const service = axios.create({
  baseURL: '/',//import.meta.env.VITE_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // todo 去除查询为空的数据, encodeURIComponent
    if (config.method === 'get') {
      let params = pickBy(config.params, identityNull)
      config.params = params
    }
    if (config.method === 'post' || config.method === 'put' || config.method === 'patch') {
      config.body = pickBy(config.body, identityNull)
    }
    if (store.state.token) {
      config.headers['Authorization'] = store.state.token
      config.headers['token'] = store.state.token
      console.log(config)
    }
    // store.commit('pageLoading', true)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 400) {
      if (response.data.code === 1000) { // 未登录
        Message.error('请登录')
        store.commit('CLEAR_TOKEN')
        router.push({ name: 'Login' })
        return Promise.reject(new Error('需要登录'))
      }
      if (response.data.code === -1) {
        Message.error(response.data.userMsg)
        return Promise.resolve(response.data)
      }
      return Promise.resolve(response.data)
    } else {
      console.log(response)
      Message.error(response.status + '-' + response.statusText)
    }
  },
  error => {
    if ((error + '').indexOf('timeout') > -1) {
      Message.error('请求超时，请重试一次或刷新页面')
    } else {
      if (error.response?.status !== 503) {
        Message.error(error.message)
      }
    }
    return Promise.reject(error)
  }
)

export default service
