import { api } from '../axios'
import type { ISignInBody } from './types'

export async function signIn({ email, password }: ISignInBody) {
  const response = await api.post('/authenticate', { email, password })

  const { token } = response.data

  // salvar o token localmente
  localStorage.setItem('token', token)

  return token
}
