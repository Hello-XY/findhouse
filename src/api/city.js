import request from '@/utils/request'

export const AreaCityList = (level) => {
  return request({
    url: '/area/city',
    params: { level }
  })
}

export const hotCityList = () => {
  return request({
    url: '/area/hot'
  })
}
