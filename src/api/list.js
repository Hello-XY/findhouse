import request from '@/utils/request'
export const getHousesInfo = (id) => {
  return request({
    url: '/houses/condition',
    params: { id }
  })
}

export const getHousesCondition = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
