import { type AxiosRequestConfig, isAxiosError } from 'axios'

import { ax } from './axios'
import { API_ENDPOINTS } from './endpoints'

type APIRoutes = keyof typeof API_ENDPOINTS
export type APIRoute = (typeof API_ENDPOINTS)[APIRoutes]

export function getApiRoute<K extends APIRoutes>(key: K): (typeof API_ENDPOINTS)[K] {
  return API_ENDPOINTS[key]
}

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | string
  params?: Record<string, string | number | boolean | null | undefined>
  headers?: Record<string, string>
  data?: unknown
  timeoutMs?: number
  responseType?: AxiosRequestConfig['responseType']
}

export async function request<T>(
  route: APIRoute | string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', params, headers = {}, data, timeoutMs, responseType } = options

  const config: AxiosRequestConfig = {
    url: String(route),
    method: method as AxiosRequestConfig['method'],
    params,
    headers: { ...headers },
    timeout: timeoutMs ?? ax.defaults.timeout,
    responseType,
  }

  // Если тело есть и это не GET/HEAD, передаём как data.
  if (data != null && !['GET', 'HEAD'].includes(method.toUpperCase())) {
    // Для FormData axios сам установит Content-Type с boundary
    if (data instanceof FormData) {
      // удалить JSON content-type если был установлен
      if (config.headers) delete (config.headers as Record<string, unknown>)['Content-Type']
      config.data = data
    } else {
      config.data = data
      // убедиться что Content-Type выставлен
      config.headers = { 'Content-Type': 'application/json', ...config.headers }
    }
  }

  try {
    const resp = await ax.request<T>(config)
    return resp.data
  } catch (err) {
    if (isAxiosError(err)) {
      const status = err.response?.status
      const payload = err.response?.data
      const msgParts = ['API request failed']
      if (status) msgParts.push(`(status ${status})`)
      if (payload) {
        try {
          msgParts.push(`: ${typeof payload === 'string' ? payload : JSON.stringify(payload)}`)
        } catch {
          msgParts.push(': <unserializable response>')
        }
      }
      throw new Error(msgParts.join(' '))
    }
    throw err as Error
  }
}
