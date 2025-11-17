import { type APIRoute, getApiRoute, request } from '@/api/types.ts'
import type { CommonContact, Meditation } from '@/data-contacts.ts'

export async function fetchMeditations(): Promise<CommonContact<{ meditations: Meditation[] }>> {
  const url: APIRoute = getApiRoute('meditations')
  return await request<CommonContact<{ meditations: Meditation[] }>>(url)
}
