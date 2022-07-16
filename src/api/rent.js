import request from '@/utils/request'

export const getRentInfo = () => {
  return request({
    url: '/user/houses'
  })
}
