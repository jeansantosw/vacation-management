import { api } from '@/api/axios'
import type { ISignInBody } from './types'

export async function signIn({ email, password }: ISignInBody) {
  const response = await api.post('/sessions', { email, password })

  const { token } = response.data
  localStorage.setItem('token', token)

  return token
}
