import { api } from '../../axios'
import type { IUpdateProfileRequest } from './types'

export async function updateProfile({
  name,
  email,
  password,
}: IUpdateProfileRequest) {
  await api.put('profile', { name, email, password })
}
