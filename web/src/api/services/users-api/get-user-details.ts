import { api } from '@/api/axios'

import type { IGetUserDatails, IGetUserDetails } from './types'

export async function getUserDetails({ userId }: IGetUserDetails) {
  const { data } = await api.get<IGetUserDatails>(`/user/${userId}`)

  return data.user
}
