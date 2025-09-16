import { api } from '@/api/axios'

export async function deleteUsers(userId: string) {
  await api.delete(`/user/${userId}`)
}
