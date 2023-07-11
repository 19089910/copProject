import axios from 'axios'

const apiCodeFenix = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeFenix.interceptors.request.use( async config =>{
  console.log(config)
  const userData = await localStorage.getItem('fenixrh:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})
export default apiCodeFenix
