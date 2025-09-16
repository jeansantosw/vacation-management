import { api } from '@/api/axios'

import type { TUpdateUser } from './types'

export async function updateUsers(id: string, data: TUpdateUser) {
  const response = await api.put(`/user/${id}`, data)

  return response.data
}
