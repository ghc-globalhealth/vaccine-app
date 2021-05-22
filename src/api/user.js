import request from '@/utils/request'


export default {
  // 创建用户
  addUser(data) {
    return request({
      url: '/basic-api/login',
      method: 'post',
      data
    })
  }
}

