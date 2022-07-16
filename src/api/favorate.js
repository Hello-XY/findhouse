import request from '@/utils/request'

export const getFavorateInfo = () => {
  return request({
    url: '/user/favorites'
  })
}
