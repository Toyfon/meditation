import { type APIRoute, getApiRoute, request } from '@/api/types.ts'
import type { CommonContact, Meditation } from '@/data-contacts.ts'

export async function fetchMeditations(): Promise<CommonContact<{ meditations: Meditation[] }>> {
  const url: APIRoute = getApiRoute('meditations')
  console.log('Fetching meditations from URL:', url)
  return await request<CommonContact<{ meditations: Meditation[] }>>(url)
}
