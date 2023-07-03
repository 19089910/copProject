import axios from 'axios'

const apiCodeFenix = axios.create({
  baseURL: 'http://localhost:3001'
})
export default apiCodeFenix
