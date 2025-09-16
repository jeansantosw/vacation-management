import { api } from '../../axios'
import type { IGetProfileResponse } from './types'

export async function getProfile() {
  const { data } = await api.get<IGetProfileResponse>('/me')

  return data.profile
}
