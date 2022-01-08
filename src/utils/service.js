import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
console.log(import.meta.env)
axios.defaults.adapter = mpAdapter
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export default service
