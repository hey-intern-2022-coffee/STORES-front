import axios from 'axios'
import aspida from '@aspida/axios'
import api from '../lib/$api'

export const apiClient = api(
  aspida(axios, { baseURL: 'http://localhost:8080' })
)
/** health check */
export const healthCheck = async () => {
  // FIXME: 移動
  const data = await apiClient.get({})
  console.debug(data)
}
