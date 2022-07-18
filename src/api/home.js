import request from '@/utils/request'

export const getSwiperInfo = () => {
  return request({
    url: '/home/swiper'
  })
}

export const getGroupsInfo = () => {
  return request({
    url: '/home/groups'
  })
}
