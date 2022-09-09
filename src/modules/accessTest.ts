import axios from 'axios'
import aspida from '@aspida/axios'
import api from '../lib/$api'

export const apiClient = api(
  aspida(axios, { baseURL: 'http://localhost:8080' })
)
