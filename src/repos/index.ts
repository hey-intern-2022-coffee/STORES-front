import axios from 'axios'
import aspida from '@aspida/axios'
import api from '../lib/$api'

export const apiClient = api(
  aspida(axios, { baseURL: import.meta.env.VITE_MOCK_API_BASE_URL })
)
