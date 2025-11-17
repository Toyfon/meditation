import axios from 'axios'
import { API_BASE_URL } from '@/api/constants.ts'

export const ax = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
