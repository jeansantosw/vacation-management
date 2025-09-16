import z from 'zod'
import type { TUserRolesDTO } from '../type'

export const updateProfileSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
  name: z.string().optional(),
})

export type TUpdateProfile = z.infer<typeof updateProfileSchema>

export interface IGetCurrentProfile {
  profile: {
    id: string
    email: string
    name: string
    role: TUserRolesDTO
    managerId: string | null
  }
}
