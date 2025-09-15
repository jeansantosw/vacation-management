import z from 'zod'

export const authenticateUserDTOSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(16),
})

export type TAuthenticateUserDTO = z.infer<typeof authenticateUserDTOSchema>

export interface IAuthenticateUsersResponseDTO {
  email: string
  name: string
  role: 'admin' | 'manager' | 'collaborator'
  id: string
  managerId: string | null
  createdAt: Date
  updatedAt: Date
}
