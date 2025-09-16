import z from 'zod'
import type { TUserRolesDTO } from '../type'

export const authenticateUserDTOSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
})

export type TAuthenticateUserDTO = z.infer<typeof authenticateUserDTOSchema>

export interface IAuthenticateUsersResponseDTO {
  email: string
  name: string
  password: string
  role: TUserRolesDTO
  id: string
  managerId: string | null
  createdAt: Date
  updatedAt: Date
}
