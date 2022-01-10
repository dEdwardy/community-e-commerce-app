import service from '@/utils/service'

export const getUserInfo = () => {
  return service.get('/user/info')
}
export const getMrjx = () => {
  return service.get('/mrjx')
}
