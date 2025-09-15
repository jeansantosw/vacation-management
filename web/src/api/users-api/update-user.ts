import { api } from "../axios"

export async function updateUsers(id: string) {
  const { data } = await api.put(`/user/${id}`)

  return data
}