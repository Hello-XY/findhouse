import request from '@/utils/request'

export const user = () => {
  return request({
    url: '/user'
  })
}
